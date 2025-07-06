import React from "react";

const About = ({ isVisible, personalData }) => {
  return (
    <section id="about" className="py-20 bg-white">
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
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={personalData.avatar}
                    alt={personalData.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-2xl">💻</span>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-white text-xl">🚀</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {personalData.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {personalData.about}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 py-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                    <div className="text-sm text-gray-600">Année d'expérience</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">2+</div>
                    <div className="text-sm text-gray-600">Projets réalisés</div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-sm">📍</span>
                    </div>
                    <span className="text-gray-600">{personalData.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-sm">📧</span>
                    </div>
                    <span className="text-gray-600">{personalData.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">💼</span>
                    </div>
                    <span className="text-gray-600">Disponible pour de nouveaux projets</span>
                  </div>
                </div>

                {/* Download CV Button */}
                {/* <div className="pt-6">
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Télécharger mon CV
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;