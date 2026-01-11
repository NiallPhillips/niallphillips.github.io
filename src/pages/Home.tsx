import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600">
                A brief description of your first project goes here. Highlight the key technologies and achievements.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600">
                A brief description of your second project goes here. Highlight the key technologies and achievements.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-600">
                A brief description of your third project goes here. Highlight the key technologies and achievements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Recent Blog Posts
          </h2>
          <p className="text-gray-600 mb-8">
            Check out my latest thoughts and tutorials
          </p>
          <a
            href="/blog"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Visit Blog
          </a>
        </div>
      </section>
    </div>
  )
}
