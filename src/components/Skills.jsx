import React from "react";

const Skills = ({ isVisible, skills }) => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Compétences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies et outils que je maîtrise
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group transition-all duration-500 ${
                    isVisible ? "animate-fade-in" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-600 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100 + 300}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills Categories */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend */}
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Frontend
                </h3>
                <p className="text-gray-600 text-sm">
                  React, Vue.js, Next.js, TypeScript, Tailwind CSS, Bootstrap
                </p>
              </div>

              {/* Backend */}
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Backend
                </h3>
                <p className="text-gray-600 text-sm">
                  Node.js, Laravel, Python, FastAPI, PHP, Symfony
                </p>
              </div>

              {/* Tools */}
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Outils
                </h3>
                <p className="text-gray-600 text-sm">
                  Git, Vercel, GitHub, Figma, Composer, VS Code, Windsurf, Vite.js
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">
                Certifications & Formations
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Diplome d'études secondaires - Institut ste julienne Douala",
                  "Formation en développement web full stack - Inch class Douala(Programme crée par l'OIF)",
                  "Wordpress - En cours avec udemy",
                  "Apprentissage continue - E-learning",
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;