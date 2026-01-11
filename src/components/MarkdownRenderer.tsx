import ReactMarkdown from 'react-markdown'
import { cn } from '@/lib/utils'

interface MarkdownRendererProps {
  content: string
  className?: string
}

export default function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn('prose prose-lg max-w-none', className)}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
