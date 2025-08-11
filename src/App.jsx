import { useState, useEffect } from 'react';
import emailjs from "emailjs-com";


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zoyf5he",    // From EmailJS dashboard
        "template_ql8scjh",   // From EmailJS dashboard
        formData,
        "NEFrEtIF6jRK93y4x"     // From EmailJS dashboard
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors"
      >
        Send Message
      </button>
      {status && <p className="text-center mt-2">{status}</p>}
    </form>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Always dark mode

  // Scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Projects
  const projects = [
    {
      title: "Flutter Weather App",
      description: "A weather application built with Flutter and OpenWeatherMap API.",
      image: "https://placehold.co/600x400?text=Flutter+Weather+App",
      github: "https://github.com/example/flutter-weather-app"
    },
    {
      title: "Figma UI Kit",
      description: "Modern Figma UI components library for mobile applications.",
      image: "https://placehold.co/600x400?text=Figma+UI+Kit",
      figma: "https://figma.com/project-sample"
    },
    {
      title: "Firebase Chat App",
      description: "Real-time chat app using Firebase Firestore and authentication.",
      image: "https://placehold.co/600x400?text=Firebase+Chat+App",
      github: "https://github.com/example/firebase-chat"
    }
  ];

  const skills = ["Flutter", "Dart", "Figma", "Firebase", "UI/UX Design", "Git"];

  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wide">Zendrex Dev</h1>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'portfolio', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}  
                className={`text-sm uppercase hover:text-blue-400 transition-colors ${
                  activeSection === item ? 'text-blue-400' : ''
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <nav className="md:hidden bg-black/90 backdrop-blur-md p-4 space-y-4">
            {['home', 'about', 'portfolio', 'contact'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg uppercase hover:text-blue-400 transition-colors ${
                  activeSection === item ? 'text-blue-400' : ''
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="">
        {/* Hero Section */}
        <section
        id="home"
        className="relative h-screen w-full flex items-center justify-center bg-black"
        >
        {/* Fullscreen Background Image */}
        <img
            src="/images/waterfall.jpg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col md:flex-row items-center gap-10 md:gap-20 px-4 text-center md:text-left">
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-blue-500 transition-transform duration-500 hover:scale-105 relative group">
            <img
                src="/images/zendrex.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
            </div>

            <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white animate-fadeIn">
                Hi, I'm Zendrex Adversalo
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-6 animate-fadeIn delay-100">
                I'm a UI/UX Designer
            </p>
            <p className="text-gray-300 mb-8 animate-fadeIn delay-200">
                Building beautiful and functional digital experiences.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fadeIn delay-300">
                <a
                href="#resume"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-500 hover:to-indigo-500 transform hover:translate-y-[-2px] transition-all duration-300 font-medium shadow-lg"
                >
                View Resume
                </a>
                <a
                href="#contact"
                className="px-6 py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transform hover:translate-y-[-2px] transition-all duration-300 font-medium"
                >
                Contact Me
                </a>
            </div>
            </div>
        </div>
        </section>


        {/* About Section */}
        <section id="about" className="py-20 bg-black/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 mb-8 text-center">
                I’m a passionate mobile developer and UI/UX designer with hands-on experience building apps and designing smooth, user-friendly interfaces. I love combining clean design with practical features to create digital products that people enjoy using.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700 hover:shadow-blue-900/30 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="font-mono text-sm">{skill}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/zendrexx"   
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-blue-900/30 hover:shadow-xl transition-all duration-300 border border-gray-800 group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors text-sm"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
       <section id="contact" className="py-20 bg-black/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Me</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Side */}
                <div>
                  <p className="text-gray-300 mb-6 text-center md:text-left">
                    Interested in working together or have any questions? Feel free to reach out!
                  </p>
                  <ul className="space-y-4 text-center md:text-left">
                    <li className="flex items-start justify-center md:justify-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 
                        1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6
                        c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>zendrex.dev@gmail.com</span>
                    </li>
                    <li className="flex items-start justify-center md:justify-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2
                        2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7
                        a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                      <a href="https://www.linkedin.com/in/zendrex-adversalo-1abb69355/"
                        target="_blank" rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors">LinkedIn Profile</a>
                    </li>
                  </ul>
                </div>

                {/* Right Side - Email Form */}
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2025 Zendrex Adversalo. All rights reserved.</p>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        @font-face {
          font-family: 'Inter';
          src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        .animate-fadeIn {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeIn 0.6s ease forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}