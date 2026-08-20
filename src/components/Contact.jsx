import React, { useState } from "react";
import { useTranslation } from "react-i18next"; 
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';





const Contact = ({ isVisible, socialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const { t } = useTranslation();

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
      icon: <FaLinkedin size={20} />,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "GitHub",
      url: socialData.github,
      icon: <FaGithub size={20} />,
      gradient: "from-gray-700 to-gray-800",
    },
    {
      name: "WhatsApp",
      url: socialData.whatsapp,
      icon: <FaWhatsapp size={20} />,
      gradient: "from-green-500 to-green-600",
    },
    {
      name: "Email",
      url: `mailto:${socialData.email}`,
      icon: <HiOutlineMail size={20} />,
      gradient: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
               {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-4 h-fit flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  {t('contact.send')}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4" method="POST" action="https://formspree.io/f/moqzqjyj">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder={t('contact.placeholderName')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder={t('contact.placeholderEmail')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder={t('contact.placeholderMessage')}
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="mb-4">
                      <div className="p-2 sm:p-3 bg-green-50 text-green-800 rounded-lg">
                        {t('contact.success')}
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 sm:py-3 px-4 sm:px-5 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    }`}
                  >
                    {isSubmitting ? t('contact.processing') : t('contact.send')}
                  </button>
                </form>
              </div>

              {/* Contact Info & Social Links */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    {t('contact.title2')}
                  </h3>
                  
                  <div className="space-y-3 sm:space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-sm">
                        <HiOutlineMail size={20} className="text-white sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Email</h4>
                        <p className="text-gray-600">{socialData.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-sm">
                        <FaWhatsapp size={20} className="text-white sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                        <p className="text-gray-600">+237 656 85 51 45</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 bg-red-500 rounded-full flex items-center justify-center">
                        <HiOutlineLocationMarker size={20} className="text-white sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{t('contact.locationName')}</h4>
                        <p className="text-gray-600">{t('contact.locationValue')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    {t('contact.socialLink')}
                  </h3>
                  
                  {/* Note : grid-cols-2 suffit, pas besoin de réécrire sm:grid-cols-2 */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 sm:p-5 rounded-xl bg-gradient-to-r ${social.gradient} text-white flex flex-col items-center justify-center gap-2 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}
                     >
                        {/* L'icône s'anime discrètement au survol du bouton */}
                       <div className="transition-transform duration-300 group-hover:scale-110">
                           {social.icon}
                       </div>
      
                        {/* Le texte sous l'icône */}
                        <div className="text-xs sm:text-sm font-semibold tracking-wide">{social.name}</div>
                     </a>
                ))}
              </div>

              </div>

                {/* Response Time */}
                {/* <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center w-48 sm:w-64 mx-auto">
                  <div className="text-xl sm:text-2xl mb-1">⚡</div>
                  <h3 className="text-sm sm:text-lg font-semibold mb-1">Réponse rapide</h3>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Je réponds généralement dans les 24 heures
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;