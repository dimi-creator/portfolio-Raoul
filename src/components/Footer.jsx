import React from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';


const Footer = ({ socialData }) => {
  const currentYear = new Date().getFullYear();
  const { t, } = useTranslation();
  
  
  const socialLinks = [
    {
      name: "LinkedIn",
      url: socialData.linkedin,
      icon: <FaLinkedin size={20} />,
      gradient: "from-[#0077B5] to-[#00a0dc] hover:from-[#006296] hover:to-[#0077B5]",

    },
    {
      name: "GitHub",
      url: socialData.github,
      icon: <FaGithub size={20} />,
      gradient: "from-[#24292E] to-[#4c5157] hover:from-[#14171a] hover:to-[#24292E]",

    },
    {
      name: "Email",
      url: `mailto:${socialData.email}`,
      icon: <HiOutlineMail size={20} />,
      gradient: "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",

    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">RE</span>
              </div>
              <h3 className="text-xl font-bold">Raoul Essako</h3>
            </div>
            <p className="text-gray-400">
              {t('footer.brand')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.quickLink')}</h4>
            <div className="space-y-2">
              {[
                { label: t('footer.quickLinkListLabel.home'), id:"home" },
                { label: t('footer.quickLinkListLabel.about'), id:"about" },
                { label: t('footer.quickLinkListLabel.projects'), id:"projects" },
                { label: t('footer.quickLinkListLabel.skills'), id:"skills" },
                { label: t('footer.quickLinkListLabel.contact'), id:"contact" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => 
                    document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">{t('footer.socialContact')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.gradient}`}
                  title={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              {/* 📧 {socialData.email} */}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Raoul ESSAKO. {t('footer.copyright')}.
          </p>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">
              
            </span>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              title="Retour en haut"
            >
              <span className="text-white text-sm">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;