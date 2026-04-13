// ============================================
// PUSHPENDRA K. MISHRA — PORTFOLIO DATA
// All content in one place — easy to update
// ============================================

export const personalInfo = {
  name: "Pushpendra K. Mishra",
  nickname: "Yugank",
  title: "Full Stack Developer",
  tagline: "I don't just write code. I build experiences.",
  subTagline: "Thinker. Builder. Human — above all else.",
  email: "yugalmishra007@gmail.com",
  github: "https://github.com/Yugank28",
  linkedin: "https://www.linkedin.com/in/pushpendra-mishra-0a84172b9/",
  instagram: "https://instagram.com/_.yugank",
  location: "Nagpur, Maharashtra, India",
  photo: "/assets/images/profile.png", // replace with actual image
};

export const aboutContent = {
  intro: `I don’t follow paths — I create my own. I’m Pushpendra K. Mishra, a Full Stack Developer who operates at the intersection of logic and vision. I don’t just think about ideas — I turn them into real, working solutions that create impact.`,
  para1: `I believe in execution over just imagination. I don’t move without purpose, and when I commit to something, I see it through. My mindset is structured like architecture — strong foundations, clear thinking, bold design, and always evolving with time.`,
  para2: `I stay focused beyond distractions and perform well under pressure. When a situation demands clarity, I deliver. When it demands courage, I step forward and take responsibility. For me, logic is not just technical — it’s a way of thinking, a way of living.`,
  para3: `I don’t measure success only by money or outcomes. I measure it by growth, by impact, and by the person I am becoming every day. I believe real success lies in continuous evolution — not just as a developer, but as a human being.`,
  closing: `Above everything else, I value being a good human. Not because it’s easy, but because it’s the only thing that truly matters in the long run.`,
  traits: [
    { label: "Thinker & Doer", icon: "🧠" },
    { label: "Laser Focused", icon: "🎯" },
    { label: "Strong Logic", icon: "⚙️" },
    { label: "Situation Handler", icon: "🌪️" },
    { label: "Ambition Over Money", icon: "💛" },
    { label: "The Hunt Mentality", icon: "🏹" },
    { label: "Good Human First", icon: "❤️" },
  ]
};

export const skills = {
  technical: [
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Angular", level: 75 },
    { name: "Python", level: 78 },
    { name: "C++", level: 82 },
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 72 },
    { name: "Microsoft Azure", level: 70 },
    { name: "Android Dev", level: 68 },
    { name: "AI & ML", level: 65 },
  ],
  tools: ["VS Code", "Git & GitHub", "Postman", "Figma", "Android Studio", "Azure Portal", "Linux", "Docker (learning)","Flutter","Unity(Game Development)"],
  softSkills: ["Leadership", "Problem Solving", "Public Speaking", "Event Management", "Team Coordination", "Critical Thinking"],
  hardSkills: ["Full Stack Development", "Database Design", "REST APIs", "AI/ML Basics", "Cloud Computing", "System Design"],
  domains: [
    { name: "Freelancing", status: "Active", description: "Web development & consulting projects" },
    { name: "Trading", status: "Learning", description: "Stock market, technical analysis, market patterns" },
    { name: "Marketing", status: "Learning", description: "Digital marketing, branding, growth strategies" },
  ],
  miniProjects: [
  { 
    name: "Student Evaluation System", 
    tech: "C++", 
    description: "A console-based application designed to manage student records, calculate grades, and evaluate performance metrics. It includes features like data input, result processing, and structured output display, demonstrating strong understanding of data handling and logic building in C++." 
  },

  { 
    name: "Snake Game", 
    tech: "C++", 
    description: "A classic terminal-based snake game built using core C++ concepts. It features real-time movement, collision detection, score tracking, and increasing difficulty levels, showcasing problem-solving skills and control over game logic and loops." 
  },

  { 
    name: "Tic Tac Toe AI", 
    tech: "Python", 
    description: "An interactive tic tac toe game supporting both two-player mode and AI-based gameplay. The AI is implemented using the minimax algorithm, enabling optimal decision-making and demonstrating knowledge of algorithms and basic artificial intelligence concepts." 
  },

  { 
    name: "Digital Card App", 
    tech: "Android", 
    description: "A mobile application that allows users to create, store, and share digital visiting cards. It includes features like QR code generation, user-friendly UI, and quick sharing options, highlighting skills in Android development and practical app design." 
  },

  { 
    name: "Weather App", 
    tech: "React", 
    description: "A responsive web application that displays real-time weather data using the OpenWeather API. It includes dynamic UI updates, animated visuals, and location-based weather tracking, demonstrating API integration and modern frontend development skills." 
  },

  { 
    name: "Expense Tracker", 
    tech: "Node.js", 
    description: "A backend-driven expense tracking system that allows users to manage daily expenses with categories, generate reports, and visualize spending patterns. It showcases knowledge of server-side development, data management, and basic analytics." 
  },
]
};

export const projects = [
  {
  id: 1,
  title: "AI-Based Smart CCTV System",
  subtitle: "Classroom Energy Monitoring & Management",
  description: `An intelligent surveillance and automation system designed to optimize energy usage in classrooms using real-time human detection. Leveraging computer vision with OpenCV and TensorFlow, the system continuously monitors occupancy and dynamically controls lights, fans, and electrical appliances through IoT integration. It significantly reduces unnecessary power consumption while maintaining user comfort. The solution was deployed on Raspberry Pi for edge processing and integrated with a Flask-based control interface. Recognized at state-level competitions for its innovation in smart infrastructure and sustainable technology.`,
  tech: ["Python", "OpenCV", "YOLO V8", "IoT", "React", "Flask","Deep Learning Modules/ML/AI"],
  github: "https://github.com/Yugank28/NITs-ClassSense",
  award: "Award Winning — State Level",
  image: "/assets/images/project-cctv.png",
  featured: true,
},
{
  id: 2,
  title: "Online Marketing Platform",
  subtitle: "Full-Stack Angular Application",
  description: `A full-stack digital marketing platform developed to help businesses efficiently manage and scale their online campaigns. Built with Angular and a Node.js backend, the platform provides a centralized dashboard for campaign creation, audience segmentation, and performance tracking. It features real-time analytics with data visualization using Chart.js, enabling users to monitor ROI, engagement metrics, and conversion rates. Additional capabilities include content scheduling, campaign automation, and user management, making it a complete solution for modern digital marketing workflows.`,
  tech: ["Angular", "TypeScript", "Node.js", "MongoDB","Google Adds", "Chart.js"],
  github: null,
  image: "/assets/images/project-marketing.png",
  featured: false,
},
{
  id: 3,
  title: "NexNote",
  subtitle: "Enhanced Notion-Like Productivity App",
  description: `A feature-rich productivity and note-taking application designed for structured thinking and efficient workflow management. NexNote supports nested pages, real-time collaboration using Socket.io, and AI-assisted writing powered by OpenAI APIs. It includes advanced features like Kanban boards for task tracking, markdown support, and a distraction-free focus mode to enhance productivity. The application is built with a scalable MERN architecture and focuses on delivering a seamless, intuitive user experience for individuals and teams managing complex information systems.`,
  tech: ["React", "Node.js", "MongoDB", "Socket.io", "OpenAI API"],
  github: null,
  image: "/assets/images/project-nexnote.png",
  featured: false,
},
{
  id: 4,
  title: "ChatNIT",
  subtitle: "AI Chatbot for College Information",
  description: `An AI-powered chatbot designed to streamline student interaction with college resources by providing instant, accurate responses to queries. Built using NLP techniques and trained on institution-specific data, ChatNIT can handle questions related to admissions, courses, faculty, schedules, events, and campus facilities. It ensures a natural conversational flow and reduces the workload on administrative staff. Integrated with a Flask backend and deployed on the college website, the system enhances accessibility and improves the overall student experience.`,
  tech: ["Python", "NLP", "Flask", "JavaScript", "MySQL"],
  github: null,
  image: "/assets/images/project-chatnit.png",
  featured: false,
},
{
  id: 5,
  title: "MediScan AI",
  subtitle: "Medical Image Analysis System",
  description: `An AI-driven medical imaging solution developed to assist healthcare professionals in early-stage anomaly detection. Using convolutional neural networks (CNNs) trained on medical datasets, the system analyzes X-rays and MRI scans to identify potential abnormalities with an accuracy of up to 87%. It provides preliminary insights that can support faster diagnosis and decision-making, especially in resource-constrained environments. Built with TensorFlow and integrated into a web interface using Flask and React, the system emphasizes assistance rather than replacement of medical expertise.`,
  tech: ["Python", "TensorFlow", "CNN", "Flask", "React","YOLO V5","Flask API","Google Gemeni API"],
  github: null,
  image: "/assets/images/project-mediscan.png",
  featured: false,
},
{
  id: 6,
  title: "AgriSense",
  subtitle: "AI-Powered Crop & Soil Intelligence",
  description: `A machine learning-based agricultural intelligence system aimed at empowering Indian farmers with data-driven insights. The platform analyzes soil composition, weather conditions, and historical crop data to recommend optimal crops, predict yields, and detect early signs of plant diseases. Built using Scikit-learn models like Random Forest, it delivers reliable predictions while being optimized for low-end devices. The system includes an offline mode to ensure accessibility in rural areas with limited connectivity, making it both practical and impactful for real-world agricultural use.`,
  tech: ["Python", "Scikit-learn", "Random Forest", "Flask", "React Native"],
  github: null,
  image: "/assets/images/project-agrisense.png",
  featured: false,
}
];

export const experience = {
  education: [
    {
      year: "2010 – 2022",
      title: "Secondary School Certificate (SSC)",
      institution: "Shreys High School",
      description: "Completed schooling with strong academic foundation. Emerged as Head Boy in 9th & 10th grade — leading the entire school student body.",
    },
    {
      year: "2022 – Present",
      title: "Diploma in Computer Science Engineering",
      institution: "NIT Polytechnic, Nagpur",
      description: "Currently in 3rd year (Final Year). Specialized in Full Stack Development, AI/ML, Cloud Computing and Software Engineering.",
    },
  ],
  work: [
    {
      year: "9th & 10th Grade",
      title: "Head Boy",
      organization: "Shreys High School",
      description: "Led the entire school student body. Represented students in all institutional matters and organized school-level events and activities.",
    },
    {
      year: "2022 – 2023",
      title: "Azure Cloud Intern",
      organization: "Microsoft Azure Program",
      description: "Completed internship focused on cloud fundamentals, Azure services, deployment pipelines and cloud architecture basics.",
    },
    {
      year: "2023",
      title: "Full Stack Development Intern",
      organization: "Online Internship (3 Months)",
      description: "Hands-on experience in full stack web development covering React, Node.js, Express and MongoDB in real-world project scenarios.",
    },
    {
      year: "2023 – 2024",
      title: "Vice / Joint Secretary",
      organization: "Emulous Forum — NIT Polytechnic CSE Branch",
      description: "Organized and led multiple college-level programs including Blood Donation Camp, educational events, city-level Paper Presentation and Quiz Competitions, and the Helping Hand Activity for underprivileged communities.",
    },
  ]
};

export const achievements = [
  { type: "trophy", title: "2nd Topper — Whole College", year: "1st Year", description: "Ranked 2nd across all branches in 1st year examinations." },
  { type: "trophy", title: "3rd Topper — Whole College", year: "3rd Year", description: "Ranked 3rd across all branches in 3rd year examinations." },
  { type: "state", title: "MSBTE State Level Paper Presentation", year: "2024", description: "Represented college at state-level paper presentation sponsored by MSBTE, held at Sakoli." },
  { type: "state", title: "DiPEx State Level Competition", year: "2024", description: "Had own project stall at DiPEx state-level competition — showcased innovation to industry experts, held at MIT,MH" },
  { type: "state", title: "YCCE, Nagpur", year: "2024", description: "Presented project at YCCE for Idea presentation in Dipex— one of the most competitive tech fests in the state." },
  { type: "college", title: "Advantage Vidarbha", year: "2023 & 2024", description: "Represented college at Advantage Vidarbha — 2 consecutive years.Learnt so amny things." },
  { type: "college", title: "Paper Presentations", year: "Multiple", description: "9 paper presentations across colleges — YCCE, Raisoni, Government College and NIT. Certificates, runner-up and participant honors." },
  { type: "college", title: "Quiz Competitions", year: "Multiple", description: "7 quiz competitions participated — certificates earned across all." },
  { type: "cert", title: "NPTEL Certification — Python", year: "2023", description: "Successfully cleared NPTEL examination and earned certification." },
  { type: "cert", title: "NPTEL Certification — Cloud Computing", year: "2024", description: "Successfully cleared second NPTEL examination — demonstrating consistent academic rigor." },
  { type: "upcoming", title: "NIT Engineering College Competitions", year: "Upcoming", description: "Preparing for 4 competitions — Hackathon, Project Competition and more." },
];

export const personality = [
  {
    id: "polymath",
    title: "Polymath",
    subtitle: "Curious. Explorer. Fighter. Learner.",
    description: `I don’t believe in limiting myself to one field. My curiosity naturally moves across disciplines — technology, science, business, philosophy, and beyond. Like Aristotle, I see knowledge as interconnected, not isolated. For me, every field is a new way to understand the world — and I want to explore as many as I can.`,
    ideology: "Aristotle",
    ideologyNote: "The restlessness of Aristotle — never satisfied, always questioning, always building.",
    image: "/assets/images/personality/polymath.png",
    sensitive: false,
  },
  {
    id: "science",
    title: "Science",
    subtitle: "All fields. All domains.",
    description: `From quantum mechanics to neuroscience, from chemistry to biotechnology — science is his playground. He carries a deep pride in Indian scientific heritage: Aryabhata, Bhaskaracharya, C.V. Raman, APJ Abdul Kalam. Science is not just knowledge — it is wonder made systematic.`,
    ideology: "Newton, Tesla and Indian Science",
    ideologyNote: "Newton's precision, Tesla's vision, and the ancient Indian mind that calculated the cosmos before telescopes existed.",
    image: "/assets/images/personality/science.png",
    sensitive: false,
  },
  {
    id: "arts",
    title: "Arts",
    subtitle: "All fields. All domains.",
    description: `He sees the world the way Van Gogh painted it — with intensity that most people cannot feel. Art is not decoration. It is truth expressed in a language that words cannot carry. Every brushstroke, every word of poetry, every note of music — he feels it.`,
    ideology: "Vincent van Gogh",
    ideologyNote: "Van Gogh painted not what he saw — but what he felt. Pushpendra lives the same way.",
    image: "/assets/images/personality/arts.png",
    sensitive: false,
  },
  {
    id: "commerce",
    title: "Commerce",
    subtitle: "Business. Economy. Markets.",
    description: `He studies the language of the world — money, markets, and disruption. Elon Musk is not just an idol — he is a proof of concept: that ambition at scale, backed by execution, can rewrite the rules of every industry simultaneously.`,
    ideology: "Elon Musk",
    ideologyNote: "Think at the scale of civilization. Execute at the speed of obsession.",
    image: "/assets/images/personality/commerce.png",
    sensitive: false,
  },
  {
    id: "politics",
    title: "Politics",
    subtitle: "From Ramayana to the Iran-US War.",
    description: `Politics is the art of power — and he studies it with the eyes of a historian and the heart of a rebel. From the ancient Indian epics to modern geopolitics, from Sardar Patel's iron unification of India to Che Guevara's uncompromising revolution — he understands that history is written by those who act.`,
    ideology: "Che Guevara + Sardar Patel",
    ideologyNote: "Patel built a nation through will. Guevara burned for a cause beyond himself. Both chose the people.",
    image: "/assets/images/personality/politics.png",
    sensitive: false,
  },
  {
    id: "geography",
    title: "Geography",
    subtitle: "Every direction of Earth.",
    description: `He is drawn to places that make him feel small — the Himalayas, the Alps, the endless plains of India, the cold silence of European mountains. Geography is not just maps — it is the personality of the Earth. And he wants to know every inch of it.`,
    ideology: "Indian & European Mountains",
    ideologyNote: "The mountains do not care who you are. That is exactly why he loves them.",
    image: "/assets/images/personality/geography.png",
    sensitive: false,
  },
  {
    id: "space",
    title: "Space",
    subtitle: "Total fan. Completely.",
    description: `The cosmos is the greatest humbler of all. Einstein proved that reality itself is relative — that time bends, that mass curves space, that the universe operates on rules more beautiful than any human invention. He stares at the night sky and feels both terrified and alive.`,
    ideology: "Albert Einstein",
    ideologyNote: "Imagination is more important than knowledge. The universe rewards the curious.",
    image: "/assets/images/personality/space.jpg",
    sensitive: false,
  },
  {
    id: "history",
    title: "History",
    subtitle: "Mythology & Reality. Both.",
    description: `History is the greatest teacher who never charges fees. From the myths of ancient India and Greece to the real wars, empires and revolutions — he reads it all. Because those who forget history are condemned to repeat it. And he intends to write new chapters, not repeat old ones.`,
    ideology: "Indian & European Mythology + Real History",
    ideologyNote: "Mythology is the history of the soul. Real history is the soul of civilization.",
    image: "/assets/images/personality/history.jpg",
    sensitive: false,
  },
  {
    id: "money",
    title: "Money & Power",
    subtitle: "At once. Always.",
    description: `He does not romanticize poverty. Money is power — and power, in the right hands, is change. He studies Putin not to admire — but to understand how control, strategy and long-term vision operate at the highest levels of the world. Knowledge of power is not the same as worship of it.`,
    ideology: "Vladimir Putin",
    ideologyNote: "Understand how power works — so you can use it with greater purpose than those who wield it without one.",
    image: "/assets/images/personality/money.png",
    sensitive: false,
  },
  {
    id: "nation",
    title: "Nation",
    subtitle: "For it. Forever.",
    description: `India is not just where he was born — it is what he is made of. Bhagat Singh did not fear death because he loved something more than his life. Che Guevara crossed borders because injustice has no geography. Pushpendra carries both — the fire of the patriot and the soul of the global citizen.`,
    ideology: "Bhagat Singh + Che Guevara",
    ideologyNote: "They both died young. They both lived more than most who grew old.",
    image: "/assets/images/personality/nation.png",
    sensitive: false,
  },
  {
    id: "sports",
    title: "Sports",
    subtitle: "Cricket. Football. The spirit of competition.",
    description: `Sports is not entertainment — it is character under pressure. Rohit Sharma's calm in chaos. Ronaldo's obsessive work ethic. Real Madrid's never-say-die mentality. These are not just athletes — they are philosophies with jerseys.`,
    ideology: "Rohit Sharma + Ronaldo + Real Madrid",
    ideologyNote: "Talent is common. The obsession to train when no one is watching — that is rare.",
    image: "/assets/images/personality/sports.jpg",
    sensitive: false, // his kand pics — blurred
    sensitiveNote: "This might contain content that makes you uncomfortable",
  },
  {
    id: "cinema",
    title: "Cinema, Fashion & Music",
    subtitle: "MCU. Satyajit Ray. Old Romantic Songs.",
    description: `He lives in two cinematic worlds: the grand mythology of the MCU — where ordinary humans become legends through will — and the raw, honest ground-level poetry of Satyajit Ray, where reality is enough. Fashion for him is not trends — it is identity. And his songs are old, romantic, and eternal.`,
    ideology: "MCU Universe + Satyajit Ray",
    ideologyNote: "Ray showed that simplicity is the most sophisticated art. Marvel showed that the greatest stories are about becoming.",
    image: "/assets/images/personality/cinema.jpg",
    sensitive: false,
  },
  {
    id: "philosophy",
    title: "Philosophy",
    subtitle: "The art of thinking clearly.",
    description: `Three names. Three worlds. Alexander III conquered the known world before 32. Ashoka built an empire, watched it drown in blood, and chose compassion. Aristotle questioned everything and answered most of it. Together, they represent the full arc of the philosophical life: ambition, consequence, and wisdom.`,
    ideology: "Alexander III + Ashoka + Aristotle",
    ideologyNote: "Conquer. Reflect. Question. In that order — or simultaneously if you dare.",
    image: "/assets/images/personality/philosophy.png",
    sensitive: false,
  },
  {
    id: "nature",
    title: "Nature",
    subtitle: "Indian & European. I cannot define it.",
    description: `Some things cannot be explained — they can only be felt. He stands in front of a mountain or a forest or an ocean and something in him goes quiet. Nature is the only force that never lies, never performs, never pretends. He loves it the way you love something that makes you honest.`,
    ideology: "Nature itself",
    ideologyNote: "He loves nature so deeply he cannot define it. That is the most honest thing about him.",
    image: "/assets/images/personality/nature.png",
    sensitive: false,
  }
];

export const personalityClosing = `More than anything — I am human. And I will choose it in every condition, even if it costs me everything.`;

export const testimonials = [
  {
    name: "Principal",
    role: "School Principal — Shreys High School",
    quote: "Having a student like you is worth education.",
    relation: "Favourite Teacher & Principal",
  },
  {
    name: "Lecturer",
    role: "Faculty — NIT Polytechnic",
    quote: "You don't need anybody, cause you are everybody.",
    relation: "College Lecturer",
  },
  {
    name: "Lecturer",
    role: "Faculty — NIT Polytechnic",
    quote: "Jaisi teri harkate hai, tu sirf vahi ban payega jo bhi tu chahega.",
    relation: "College Lecturer",
  },
  {
    name: "Every Friend",
    role: "His Circle — Always",
    quote: "Tere saath rahkar — padhayi, confidence, masti, aur khud ko priority dena — ye tune sikhaya. Jo bure the vo sudhar gaye. Gussa, marpit, galat aadte — sab chut gayi.",
    relation: "Friends — Every single one said the same thing",
    isFeatured: true,
  },
];