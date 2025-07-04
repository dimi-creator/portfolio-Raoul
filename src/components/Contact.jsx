import React, { useState } from "react";

const Contact = ({ isVisible, socialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch('https://formspree.io/f/mvgrydvv', { // Remplacez par votre endpoint Formspree
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: new FormData(e.target),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        
        // Reset status after 3 seconds
        setTimeout(() => {
          setSubmitStatus("");
        }, 3000);
      } else {
        throw new Error(data.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      console.error('Erreur:', error);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus("");
      }, 3000);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: socialData.linkedin,
      icon: "💼",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "GitHub",
      url: socialData.github,
      icon: "📂",
      color: "from-gray-700 to-gray-800",
    },
    {
      name: "WhatsApp",
      url: socialData.whatsapp,
      icon: "📱",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Email",
      url: `mailto:${socialData.email}`,
      icon: "📧",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
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
              Contactez-moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              N'hésitez pas à me contacter pour discuter de vos projets
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Envoyez-moi un message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6" method="POST" action="https://formspree.io/f/moqzqjyj">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    }`}
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 text-green-800 rounded-lg">
                      Message envoyé avec succès ! Je vous répondrai bientôt.
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Info & Social Links */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Informations de contact
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">📧</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Email</h4>
                        <p className="text-gray-600">{socialData.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">📱</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                        <p className="text-gray-600">+237 680 34 59 55</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">📍</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Localisation</h4>
                        <p className="text-gray-600">Douala, Cameroun</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Suivez-moi
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-xl bg-gradient-to-r ${social.color} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center group`}
                      >
                        <div className="text-2xl mb-2">{social.icon}</div>
                        <div className="text-sm font-medium">{social.name}</div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="text-xl font-semibold mb-2">Réponse rapide</h3>
                  <p className="text-blue-100">
                    Je réponds généralement dans les 24 heures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;