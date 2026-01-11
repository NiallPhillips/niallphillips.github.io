export interface Post {
  slug: string
  title: string
  date: string
  description: string
  content?: string
}

export async function getAllPosts(): Promise<Post[]> {
  const modules = import.meta.glob('../content/posts/*.md', { query: '?raw', import: 'default' })
  const posts: Post[] = []

  for (const path in modules) {
    const content = (await modules[path]()) as string
    const metadata = parseFrontmatter(content)
    const slug = path.split('/').pop()?.replace('.md', '') || ''
    
    posts.push({
      slug,
      ...metadata,
    })
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const content = (await import(`../content/posts/${slug}.md?raw`)).default
    const metadata = parseFrontmatter(content)
    
    return {
      slug,
      ...metadata,
      content: removeFrontmatter(content),
    }
  } catch (error) {
    return null
  }
}

function parseFrontmatter(content: string): Omit<Post, 'slug' | 'content'> {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  const match = content.match(frontmatterRegex)
  
  if (!match) {
    return {
      title: 'Untitled',
      date: new Date().toISOString(),
      description: '',
    }
  }

  const frontmatter = match[1]
  const lines = frontmatter.split('\n')
  const metadata: any = {}

  for (const line of lines) {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim().replace(/^"(.*)"$/, '$1')
      metadata[key.trim()] = value
    }
  }

  return {
    title: metadata.title || 'Untitled',
    date: metadata.date || new Date().toISOString(),
    description: metadata.description || '',
  }
}

function removeFrontmatter(content: string): string {
  const frontmatterRegex = /^---\s*\n[\s\S]*?\n---\s*\n/
  return content.replace(frontmatterRegex, '')
}
