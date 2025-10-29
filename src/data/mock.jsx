export const mockData = {
  personal: {
    name: "Raoul Essako",
    title: "Développeur Web Junior",
    tagline: "Transformer les idées en expériences numériques",
    email: "raoulnguimbous534@gmail.com",
    phone: "+237 680 34 59 55",
    location: "Douala, Cameroun",
    avatar: "/IMG_3wit1c.jpg",
    heroBackground: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop",
    about: "Passionné par le développement web, je me spécialise dans la création des sites et applications web modernes et responsive. Mon parcours m'a mené de la découverte autodidacte à une formation intensive, où j'ai développé une solide maîtrise des technologies frontend et backend. J'aime résoudre des problèmes complexes et créer des interfaces utilisateur intuitives qui offrent une expérience exceptionnelle."
  },
  
  skills: [
    { name: "HTML5", level: 90, icon: "🌐" },
    { name: "CSS3", level: 85, icon: "🎨" },
    { name: "JavaScript", level: 80, icon: "⚡" },
    { name: "PHP", level: 80, icon: "⚡" },
    { name: "Laravel", level: 80, icon: "⚡" },
    { name: "React", level: 75, icon: "⚛️" },
    { name: "Next.js", level: 70, icon: "🚀" },
    { name: "Git", level: 85, icon: "📝" },
    { name: "MySQL", level: 65, icon: "🍃" },
    { name: "Tailwind CSS", level: 80, icon: "💨" },
    { name: "Bootstrap", level: 80, icon: "💨" }
  ],
  
  projects: [
    {
      id: 1,
      title: "Plateforme d'Immigration Canada",
      description: "Application web dédiée à l'accompagnement des candidats à l'immigration vers le Canada. Elle propose plusieurs services et un système de contact via WhatsApp.",
      image: "/blogo.jpg", // image illustrative sans visage humain
      technologies: ["React", "Tailwind CSS", "Next.js", "Vercel"],
      githubUrl: "https://github.com/dimi-creator/immigration-site.git",
      demoUrl: "https://immigration-site-phi.vercel.app",
      featured: true,
      web: true
    },
    {
      id: 2,
      title: "Plateforme de Gestion de Tâches",
      description: "Application web de gestion de tâches collaborative avec fonctionnalités temps réel, drag & drop et notifications.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Laravel", "React Router", "Bootstrap", "mySQL"],
      githubUrl: "https://github.com/dimi-creator/task-manager-app.git",
      demoUrl: "https://tmappp.netlify.app",
      featured: false,
      web: true
    },
    {
      id: 3,
      title: "Novatic sarl",
      description: "Site web d'un prestataire de services de gardiennage et entretien.",
      image: "/novatic.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/dimi-creator/NOVATIC.git",
      featured: true
    },
    {
      id: 4,
      title: "Plateforme de billetterie en ligne",
      description: "Application web de billetterie permettant aux organisateurs de créer des événements et gérer les billets et aux utilisateurs de les acheter.",
      image: "/billets.png",
      technologies: ["Laravel", "Blade", "Bootstrap", "Vite.js", "mySQL"],
      githubUrl: "https://github.com/dimi-creator/Tickethub.git",
      featured: true,
      web: true
      
    }
  ],
  
  social: {
    github: "https://github.com/dimi-creator",
    linkedin: "https://linkedin.com/in/raoul-nguimbous-682a85252",
    whatsapp: "https://wa.me/237680345955",
    email: "raoulnguimbous534@gmail.com"
  }
};