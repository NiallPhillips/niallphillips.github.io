export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Me</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6">
            I'm always interested in hearing about new projects, opportunities, or just having a chat. 
            Feel free to reach out through any of the methods below!
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:your.email@example.com"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                your.email@example.com
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">GitHub</h3>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                View my work on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Hire Me
          </h2>
          <p className="text-gray-700 mb-6">
            If you're looking for a developer to join your team or help with a project, 
            I'd love to hear from you. Here's what I can help with:
          </p>
          
          <ul className="text-gray-700 space-y-2">
            <li>• Full-stack web development</li>
            <li>• Frontend development with React and TypeScript</li>
            <li>• Backend API development</li>
            <li>• Database design and implementation</li>
            <li>• Code review and optimization</li>
            <li>• Technical consulting</li>
          </ul>
          
          <div className="mt-6">
            <a
              href="mailto:your.email@example.com?subject=Inquiry about hiring"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
