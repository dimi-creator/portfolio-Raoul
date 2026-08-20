export const mockData = {
  personal: {
    name: "Raoul Essako",
    title: "Développeur Web full stack",
    tagline: "Transformer les idées en expériences numériques",
    email: "raoulnguimbous534@gmail.com",
    phone: "+237 656 85 51 45",
    location: "Douala, Cameroun",
    avatar: "/IMG_3wit1c.jpg",
    heroBackground: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop",
    about: "Passionné par le développement web, je me spécialise dans la création des sites et applications web modernes et responsive. Mon parcours m'a mené de la découverte autodidacte à une formation intensive, où j'ai développé une solide maîtrise des technologies frontend et backend. J'aime résoudre des problèmes complexes et créer des interfaces utilisateur intuitives qui offrent une expérience exceptionnelle."
  },
  
  skills: [
    { name: "HTML5", level: 90, icon: "" },
    { name: "CSS3", level: 85, icon: "" },
    { name: "JavaScript", level: 80, icon: "" },
    { name: "Python", level: 80, icon: "" },
    { name: "PHP", level: 80, icon: "" },
    { name: "Laravel", level: 80, icon: "" },
    { name: "Django", level: 80, icon: "" },
    { name: "React", level: 75, icon: "" },
    { name: "Next.js", level: 75, icon: "" },
    { name: "Git/GitHub", level: 90, icon: "" },
    { name: "MySQL", level: 90, icon: "" },
    { name: "Tailwind CSS", level: 80, icon: "" },
    { name: "Bootstrap", level: 80, icon: "" }
  ],
  
  projects: [
    {
      id: 1,
      translations: {
        fr: {
          title: "Plateforme d'Immigration Canada",
          description: "Application web dédiée à l'accompagnement des candidats à l'immigration vers le Canada. Elle propose plusieurs services et un système de contact via WhatsApp."
        },
        en: {
          title: "Canada Immigration Platform",
          description: "Web application dedicated to supporting candidates for immigration to Canada. It offers several services and a WhatsApp contact system."
        }
      },
      image: "/blogo.jpg",
      technologies: ["React", "Tailwind CSS", "Next.js", "Vercel"],
      githubUrl: "https://github.com/dimi-creator/immigration-site.git",
      demoUrl: "https://immigration-site-phi.vercel.app",
      featured: true,
      web: true
    },
    {
      id: 2,
      translations: {
        fr: {
          title: "Plateforme de Gestion de Tâches",
          description: "Application web de gestion de tâches collaborative avec fonctionnalités temps réel, drag & drop et notifications."
        },
        en: {
          title: "Task Management Platform",
          description: "Collaborative task management web application with real-time features, drag & drop and notifications."
        }
      },
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Flask", "Jinja2", "Bootstrap", "Supabase"],
      githubUrl: "https://github.com/dimi-creator/RTA.git",
      demoUrl: "https://dimicreator.pythonanywhere.com",
      featured: false,
      web: true
    },
    {
      id: 3,
      translations: {
        fr: {
          title: "Novatic sarl",
          description: "Site web d'un prestataire de services de gardiennage et entretien."
        },
        en: {
          title: "Novatic sarl",
          description: "Website of a cleaning and maintenance service provider."
        }
      },
      image: "/novatic.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/dimi-creator/NOVATIC.git",
      demoUrl: "https://novatic.netlify.app",
      featured: true
    },
    {
      id: 4,
      translations: {
        fr: {
          title: "Plateforme de billetterie en ligne",
          description: "Application web de billetterie permettant aux organisateurs de créer des événements et gérer les billets et aux utilisateurs de les acheter."
        },
        en: {
          title: "Online Ticketing Platform",
          description: "Web ticketing application allowing organizers to create events and manage tickets and users to purchase them."
        }
      },
      image: "/billets.png",
      technologies: ["Laravel", "Blade", "Bootstrap", "Vite.js", "mySQL"],
      githubUrl: "https://github.com/dimi-creator/Tickethub.git",
      demoUrl: "https://tickethub.up.railway.app",
      featured: true,
      web: true
    }
  ],
  
  social: {
    github: "https://github.com/dimi-creator",
    linkedin: "https://linkedin.com/in/raoul-nguimbous-682a85252",
    whatsapp: "https://wa.me/237656855145",
    email: "raoulnguimbous534@gmail.com"
  }
};