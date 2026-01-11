export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who I Am</h2>
          <p className="text-gray-700 mb-4">
            I'm a passionate developer with expertise in building modern web applications. 
            I love creating clean, efficient, and user-friendly solutions that solve real-world problems.
          </p>
          <p className="text-gray-700 mb-4">
            With a strong background in full-stack development, I specialize in React, TypeScript, 
            and modern web technologies. I'm always eager to learn new things and take on challenging projects.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Frontend</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• React</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Vite</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Backend</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Node.js</li>
                <li>• Express</li>
                <li>• PostgreSQL</li>
                <li>• REST APIs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What I Do</h2>
          <ul className="text-gray-700 space-y-3">
            <li>
              <strong>Full-Stack Development:</strong> Building complete web applications from frontend to backend
            </li>
            <li>
              <strong>UI/UX Design:</strong> Creating intuitive and visually appealing user interfaces
            </li>
            <li>
              <strong>API Development:</strong> Designing and implementing robust APIs
            </li>
            <li>
              <strong>Problem Solving:</strong> Tackling complex technical challenges with creative solutions
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
