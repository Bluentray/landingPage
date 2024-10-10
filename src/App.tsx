import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <header className="container mx-auto py-8 px-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyLandingPage</h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-yellow-300 transition-colors">Home</a></li>
            <li><a href="#features" className="hover:text-yellow-300 transition-colors">Features</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="container mx-auto py-20 px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Welcome to Our Amazing Product</h2>
          <p className="text-xl mb-8">Discover the power of innovation and simplicity combined.</p>
          <a href="#contact" className="bg-yellow-400 text-gray-900 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors">Get Started</a>
        </section>

        <section id="features" className="bg-white text-gray-800 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p>Experience unparalleled speed and efficiency.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure</h3>
                <p>Your data is safe with our advanced security measures.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                <p>Tailor the product to fit your unique needs.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto py-20 px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" required></textarea>
            </div>
            <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 MyLandingPage. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-yellow-300 transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors"><Github size={24} /></a>
              <a href="#" className="hover:text-yellow-300 transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App