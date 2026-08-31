export type Peer = {
  id: string;
  name: string;
  avatar: string;
  college: string;
  major: string;
  year: string;
  skills: string[];
  interests: string[];
  bio: string;
  connections: number;
  mutualConnections: number;
  status: 'available' | 'building' | 'open-to-collab';
  location: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  author: string;
  authorAvatar: string;
  college: string;
  tags: string[];
  techStack: string[];
  collaborators: number;
  upvotes: number;
  status: 'looking-for-team' | 'in-progress' | 'completed';
  cover: string;
  postedDaysAgo: number;
};

export type Hackathon = {
  id: string;
  title: string;
  organizer: string;
  date: string;
  location: string;
  mode: 'In-Person' | 'Hybrid' | 'Online';
  prize: string;
  teamSize: string;
  tags: string[];
  registrations: number;
  daysLeft: number;
  banner: string;
};

export type Mentor = {
  id: string;
  name: string;
  avatar: string;
  title: string;
  company: string;
  expertise: string[];
  experience: string;
  rating: number;
  reviews: number;
  mentees: number;
  availability: 'Available' | 'Limited' | 'Booked';
  bio: string;
};

export const peers: Peer[] = [
  {
    id: 'p1',
    name: 'Aarav Mehta',
    avatar: 'https://i.pravatar.cc/150?img=12',
    college: 'IIT Bombay',
    major: 'Computer Science',
    year: '3rd Year',
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
    interests: ['AI/ML', 'Web3', 'Open Source'],
    bio: 'Building developer tools and exploring LLMs. Currently working on an AI-powered study companion.',
    connections: 248,
    mutualConnections: 14,
    status: 'building',
    location: 'Mumbai, India',
  },
  {
    id: 'p2',
    name: 'Sara Chen',
    avatar: 'https://i.pravatar.cc/150?img=45',
    college: 'Stanford University',
    major: 'Human-Computer Interaction',
    year: '2nd Year',
    skills: ['Figma', 'React', 'Framer Motion', 'Design Systems'],
    interests: ['UX Research', 'Accessibility', 'EdTech'],
    bio: 'Designer-developer hybrid. Obsessed with micro-interactions and inclusive design.',
    connections: 312,
    mutualConnections: 8,
    status: 'open-to-collab',
    location: 'Palo Alto, CA',
  },
  {
    id: 'p3',
    name: 'Daniel Okafor',
    avatar: 'https://i.pravatar.cc/150?img=33',
    college: 'MIT',
    major: 'Electrical Engineering',
    year: '4th Year',
    skills: ['Python', 'PyTorch', 'C++', 'Robotics', 'ROS'],
    interests: ['Computer Vision', 'Autonomous Systems', 'IoT'],
    bio: 'Robotics enthusiast. Built a self-navigating drone for my final-year project.',
    connections: 189,
    mutualConnections: 5,
    status: 'available',
    location: 'Cambridge, MA',
  },
  {
    id: 'p4',
    name: 'Priya Nair',
    avatar: 'https://i.pravatar.cc/150?img=48',
    college: 'NIT Trichy',
    major: 'Information Technology',
    year: '3rd Year',
    skills: ['Go', 'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL'],
    interests: ['Cloud Native', 'DevOps', 'Distributed Systems'],
    bio: 'DevOps nerd. I automate things so you don\'t have to. Currently learning platform engineering.',
    connections: 156,
    mutualConnections: 11,
    status: 'building',
    location: 'Chennai, India',
  },
  {
    id: 'p5',
    name: 'Liam Walsh',
    avatar: 'https://i.pravatar.cc/150?img=15',
    college: 'UC Berkeley',
    major: 'Data Science',
    year: '2nd Year',
    skills: ['Python', 'Pandas', 'scikit-learn', 'SQL', 'Tableau'],
    interests: ['Sports Analytics', 'NLP', 'Data Viz'],
    bio: 'Turning messy data into clean stories. I once predicted March Madness with 73% accuracy.',
    connections: 98,
    mutualConnections: 3,
    status: 'open-to-collab',
    location: 'Berkeley, CA',
  },
  {
    id: 'p6',
    name: 'Yuki Tanaka',
    avatar: 'https://i.pravatar.cc/150?img=20',
    college: 'University of Tokyo',
    major: 'Applied Mathematics',
    year: '4th Year',
    skills: ['Rust', 'Solidity', 'TypeScript', 'Cryptography'],
    interests: ['DeFi', 'ZK Proofs', 'Game Theory'],
    bio: 'Math meets code. Researching zero-knowledge proofs and their applications in privacy.',
    connections: 274,
    mutualConnections: 9,
    status: 'building',
    location: 'Tokyo, Japan',
  },
  {
    id: 'p7',
    name: 'Maya Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=49',
    college: 'Carnegie Mellon',
    major: 'Software Engineering',
    year: '3rd Year',
    skills: ['Swift', 'Kotlin', 'Flutter', 'Firebase'],
    interests: ['Mobile', 'HealthTech', 'AR/VR'],
    bio: 'Mobile-first builder. Two apps on the App Store, one featured by Apple. Looking for a co-founder.',
    connections: 201,
    mutualConnections: 7,
    status: 'available',
    location: 'Pittsburgh, PA',
  },
  {
    id: 'p8',
    name: 'Kenji Adeyemi',
    avatar: 'https://i.pravatar.cc/150?img=51',
    college: 'University of Lagos',
    major: 'Cybersecurity',
    year: '4th Year',
    skills: ['Python', 'Bash', 'Wireshark', 'Burp Suite', 'Linux'],
    interests: ['CTF', 'Pen Testing', 'Network Security'],
    bio: 'CTF player and bug bounty hunter. Top 50 on HackerOne Nigeria. Always learning.',
    connections: 143,
    mutualConnections: 4,
    status: 'open-to-collab',
    location: 'Lagos, Nigeria',
  },
];

export const projects: Project[] = [
  {
    id: 'pr1',
    title: 'NeuralNote — AI Study Companion',
    description:
      'An AI-powered note-taking app that generates summaries, flashcards, and quizzes from your lecture notes. Uses RAG for source-grounded answers.',
    author: 'Aarav Mehta',
    authorAvatar: 'https://i.pravatar.cc/150?img=12',
    college: 'IIT Bombay',
    tags: ['AI', 'EdTech', 'Productivity'],
    techStack: ['Next.js', 'OpenAI', 'Pinecone', 'Supabase'],
    collaborators: 3,
    upvotes: 142,
    status: 'in-progress',
    cover: 'linear-gradient(135deg, hsl(173 80% 40%), hsl(200 70% 50%))',
    postedDaysAgo: 2,
  },
  {
    id: 'pr2',
    title: 'AccessMap — Inclusive Campus Navigation',
    description:
      'An accessibility-first campus map showing wheelchair routes, elevators, and accessible entrances. Built with real campus GIS data.',
    author: 'Sara Chen',
    authorAvatar: 'https://i.pravatar.cc/150?img=45',
    college: 'Stanford University',
    tags: ['Accessibility', 'Maps', 'Mobile'],
    techStack: ['React Native', 'Mapbox', 'Node.js'],
    collaborators: 2,
    upvotes: 89,
    status: 'looking-for-team',
    cover: 'linear-gradient(135deg, hsl(200 70% 50%), hsl(160 60% 45%))',
    postedDaysAgo: 5,
  },
  {
    id: 'pr3',
    title: 'SkySight — Autonomous Drone Vision',
    description:
      'Real-time object detection and obstacle avoidance for autonomous drones. Processes 30fps video with a lightweight CNN on edge hardware.',
    author: 'Daniel Okafor',
    authorAvatar: 'https://i.pravatar.cc/150?img=33',
    college: 'MIT',
    tags: ['Robotics', 'Computer Vision', 'Edge AI'],
    techStack: ['PyTorch', 'ROS', 'C++', 'TensorRT'],
    collaborators: 4,
    upvotes: 215,
    status: 'in-progress',
    cover: 'linear-gradient(135deg, hsl(160 60% 45%), hsl(173 80% 40%))',
    postedDaysAgo: 1,
  },
  {
    id: 'pr4',
    title: 'KubeCraft — GitOps Platform for Students',
    description:
      'A zero-config Kubernetes platform that lets students deploy apps with a single git push. Auto-provisions TLS, monitoring, and rollbacks.',
    author: 'Priya Nair',
    authorAvatar: 'https://i.pravatar.cc/150?img=48',
    college: 'NIT Trichy',
    tags: ['DevOps', 'Cloud', 'Developer Tools'],
    techStack: ['Go', 'Kubernetes', 'ArgoCD', 'Terraform'],
    collaborators: 2,
    upvotes: 178,
    status: 'completed',
    cover: 'linear-gradient(135deg, hsl(43 74% 56%), hsl(173 80% 40%))',
    postedDaysAgo: 12,
  },
  {
    id: 'pr5',
    title: 'CourtVision — Basketball Analytics Engine',
    description:
      'Real-time player tracking and shot prediction using computer vision on live game footage. Coaches get instant heatmaps and efficiency ratings.',
    author: 'Liam Walsh',
    authorAvatar: 'https://i.pravatar.cc/150?img=15',
    college: 'UC Berkeley',
    tags: ['Sports', 'Analytics', 'Computer Vision'],
    techStack: ['Python', 'OpenCV', 'React', 'FastAPI'],
    collaborators: 0,
    upvotes: 64,
    status: 'looking-for-team',
    cover: 'linear-gradient(135deg, hsl(340 75% 55%), hsl(43 74% 56%))',
    postedDaysAgo: 3,
  },
  {
    id: 'pr6',
    title: 'ZKVote — Privacy-Preserving Voting',
    description:
      'A decentralized voting protocol using zero-knowledge proofs to guarantee ballot privacy while keeping results publicly verifiable.',
    author: 'Yuki Tanaka',
    authorAvatar: 'https://i.pravatar.cc/150?img=20',
    college: 'University of Tokyo',
    tags: ['Web3', 'Privacy', 'Cryptography'],
    techStack: ['Rust', 'Solidity', 'Circom', 'TypeScript'],
    collaborators: 1,
    upvotes: 197,
    status: 'in-progress',
    cover: 'linear-gradient(135deg, hsl(173 80% 40%), hsl(340 75% 55%))',
    postedDaysAgo: 7,
  },
  {
    id: 'pr7',
    title: 'Pulse — Mental Health Companion',
    description:
      'A gentle, non-intrusive mood tracking app with AI-guided journaling and crisis resource detection. Designed with therapists for clinical safety.',
    author: 'Maya Rodriguez',
    authorAvatar: 'https://i.pravatar.cc/150?img=49',
    college: 'Carnegie Mellon',
    tags: ['HealthTech', 'Mobile', 'AI'],
    techStack: ['Flutter', 'Firebase', 'Gemini'],
    collaborators: 3,
    upvotes: 112,
    status: 'in-progress',
    cover: 'linear-gradient(135deg, hsl(200 70% 50%), hsl(340 75% 55%))',
    postedDaysAgo: 4,
  },
  {
    id: 'pr8',
    title: 'PhishGuard — Real-Time Phishing Detector',
    description:
      'A browser extension that analyzes URLs, DOM structure, and content in real-time to flag phishing attempts before you click. 94% accuracy.',
    author: 'Kenji Adeyemi',
    authorAvatar: 'https://i.pravatar.cc/150?img=51',
    college: 'University of Lagos',
    tags: ['Security', 'Browser', 'AI'],
    techStack: ['TypeScript', 'TensorFlow.js', 'Chrome API'],
    collaborators: 1,
    upvotes: 156,
    status: 'completed',
    cover: 'linear-gradient(135deg, hsl(43 74% 56%), hsl(200 70% 50%))',
    postedDaysAgo: 9,
  },
];

export const hackathons: Hackathon[] = [
  {
    id: 'h1',
    title: 'HackTheNorth 2026',
    organizer: 'University of Waterloo',
    date: 'Feb 15-17, 2026',
    location: 'Waterloo, Canada',
    mode: 'In-Person',
    prize: '$50,000',
    teamSize: '1-4 members',
    tags: ['AI', 'Web', 'Hardware', 'Open'],
    registrations: 1200,
    daysLeft: 18,
    banner: 'linear-gradient(135deg, hsl(173 80% 40%), hsl(200 70% 50%))',
  },
  {
    id: 'h2',
    title: 'Smart India Hackathon',
    organizer: 'Government of India',
    date: 'Mar 8-10, 2026',
    location: 'Nationwide',
    mode: 'Hybrid',
    prize: '₹1,00,000',
    teamSize: '6 members',
    tags: ['GovTech', 'IoT', 'Blockchain', 'AI'],
    registrations: 5000,
    daysLeft: 31,
    banner: 'linear-gradient(135deg, hsl(43 74% 56%), hsl(160 60% 45%))',
  },
  {
    id: 'h3',
    title: 'ETHGlobal Tokyo',
    organizer: 'ETHGlobal',
    date: 'Apr 5-7, 2026',
    location: 'Tokyo, Japan',
    mode: 'Hybrid',
    prize: '$75,000',
    teamSize: '1-5 members',
    tags: ['Web3', 'DeFi', 'ZK', 'NFTs'],
    registrations: 800,
    daysLeft: 59,
    banner: 'linear-gradient(135deg, hsl(340 75% 55%), hsl(173 80% 40%))',
  },
  {
    id: 'h4',
    title: 'TreeHacks — Climate Edition',
    organizer: 'Stanford University',
    date: 'Feb 22-24, 2026',
    location: 'Stanford, CA',
    mode: 'In-Person',
    prize: '$30,000',
    teamSize: '1-4 members',
    tags: ['Climate', 'Sustainability', 'IoT', 'Data'],
    registrations: 600,
    daysLeft: 25,
    banner: 'linear-gradient(135deg, hsl(160 60% 45%), hsl(200 70% 50%))',
  },
  {
    id: 'h5',
    title: 'HackDuke — Code for Good',
    organizer: 'Duke University',
    date: 'Mar 1-2, 2026',
    location: 'Durham, NC',
    mode: 'Hybrid',
    prize: '$20,000',
    teamSize: '1-4 members',
    tags: ['Social Good', 'Health', 'Education', 'Equity'],
    registrations: 450,
    daysLeft: 24,
    banner: 'linear-gradient(135deg, hsl(200 70% 50%), hsl(340 75% 55%))',
  },
  {
    id: 'h6',
    title: 'HackByte — 48hr Online Sprint',
    organizer: 'IIIT Allahabad',
    date: 'Feb 10-12, 2026',
    location: 'Online',
    mode: 'Online',
    prize: '₹5,00,000',
    teamSize: '1-5 members',
    tags: ['AI', 'Web', 'Mobile', 'Open'],
    registrations: 2000,
    daysLeft: 13,
    banner: 'linear-gradient(135deg, hsl(173 80% 40%), hsl(43 74% 56%))',
  },
];

export const mentors: Mentor[] = [
  {
    id: 'm1',
    name: 'Dr. Anika Sharma',
    avatar: 'https://i.pravatar.cc/150?img=44',
    title: 'Staff Engineer',
    company: 'Google DeepMind',
    expertise: ['AI/ML', 'Research', 'Career Strategy', 'System Design'],
    experience: '8 years',
    rating: 4.9,
    reviews: 127,
    mentees: 34,
    availability: 'Available',
    bio: 'Ex-FAIR research scientist. I help students transition from coursework to real-world ML engineering and research careers.',
  },
  {
    id: 'm2',
    name: 'Marcus Webb',
    avatar: 'https://i.pravatar.cc/150?img=13',
    title: 'Founding Engineer',
    company: 'Vercel',
    expertise: ['Frontend', 'React', 'Next.js', 'Startups'],
    experience: '6 years',
    rating: 4.8,
    reviews: 89,
    mentees: 28,
    availability: 'Limited',
    bio: 'I build developer tools for a living. I can help you level up your frontend architecture and ship faster.',
  },
  {
    id: 'm3',
    name: 'Fatima Al-Rashid',
    avatar: 'https://i.pravatar.cc/150?img=32',
    title: 'Principal Product Manager',
    company: 'Microsoft',
    expertise: ['Product', 'PM Career', 'Interview Prep', 'Strategy'],
    experience: '10 years',
    rating: 5.0,
    reviews: 156,
    mentees: 41,
    availability: 'Available',
    bio: 'PM lead on Azure AI. I coach students through PM interviews, case studies, and product thinking.',
  },
  {
    id: 'm4',
    name: 'James Park',
    avatar: 'https://i.pravatar.cc/150?img=68',
    title: 'CTO & Co-Founder',
    company: 'Stackline (YCS22)',
    expertise: ['Startups', 'Fundraising', 'Full-Stack', 'YC Prep'],
    experience: '7 years',
    rating: 4.7,
    reviews: 73,
    mentees: 22,
    availability: 'Booked',
    bio: 'Built and sold two startups before 30. I help student founders go from idea to YC interview.',
  },
  {
    id: 'm5',
    name: 'Lena Volkov',
    avatar: 'https://i.pravatar.cc/150?img=47',
    title: 'Senior Security Engineer',
    company: 'Cloudflare',
    expertise: ['Security', 'AppSec', 'CTF', 'Bug Bounties'],
    experience: '9 years',
    rating: 4.9,
    reviews: 94,
    mentees: 19,
    availability: 'Available',
    bio: 'Offensive security specialist. I mentor students into security careers and help prep for CTFs and interviews.',
  },
  {
    id: 'm6',
    name: 'Rohan Kapoor',
    avatar: 'https://i.pravatar.cc/150?img=53',
    title: 'Staff Cloud Architect',
    company: 'AWS',
    expertise: ['Cloud', 'DevOps', 'Kubernetes', 'Architecture'],
    experience: '11 years',
    rating: 4.8,
    reviews: 112,
    mentees: 37,
    availability: 'Limited',
    bio: 'I design cloud platforms at scale. I help students master cloud architecture and land cloud roles.',
  },
];

export const currentStudent = {
  id: 'u1',
  name: 'Alex Rivera',
  avatar: 'https://i.pravatar.cc/150?img=60',
  college: 'Georgia Tech',
  major: 'Computer Science',
  year: '3rd Year',
  email: 'alex.rivera@gatech.edu',
  bio: 'Full-stack builder passionate about AI and developer tools. Currently exploring LLM agents and RAG systems. Always shipping.',
  skills: ['TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL', 'Docker'],
  interests: ['AI/ML', 'Developer Tools', 'Open Source', 'Startups'],
  location: 'Atlanta, GA',
  connections: 186,
  projects: 7,
  achievements: [
    { icon: 'Trophy', title: 'Winner — HackGT 2025', detail: 'Best AI Hack out of 400+ teams' },
    { icon: 'Star', title: 'GitHub Star', detail: '1.2k stars on open-source RAG library' },
    { icon: 'Award', title: 'Dean\'s List', detail: 'Fall 2024 & Spring 2025 — 4.0 GPA' },
    { icon: 'Users', title: 'Hack Club President', detail: 'Led 200+ member student org' },
    { icon: 'Rocket', title: 'MLH Prep Pod Grad', detail: 'Top 5% of 2025 cohort' },
  ],
  activity: [
    { type: 'project', text: 'Shipped NeuralNote v2.0 with streaming responses', time: '2h ago' },
    { type: 'connection', text: 'Connected with Dr. Anika Sharma (Mentor)', time: '5h ago' },
    { type: 'hackathon', text: 'Registered for HackTheNorth 2026', time: '1d ago' },
    { type: 'project', text: 'Upvoted SkySight — Autonomous Drone Vision', time: '1d ago' },
    { type: 'endorsement', text: 'Endorsed by 3 peers for TypeScript', time: '2d ago' },
  ],
  skillEndorsements: {
    TypeScript: 24,
    React: 31,
    'Node.js': 18,
    Python: 15,
    PostgreSQL: 12,
    Docker: 9,
  },
};

export const messages = [
  {
    id: 'msg1',
    name: 'Aarav Mehta',
    avatar: 'https://i.pravatar.cc/150?img=12',
    preview: 'Hey! Saw your NeuralNote project — would love to collaborate on the RAG pipeline.',
    time: '2m ago',
    unread: true,
    online: true,
  },
  {
    id: 'msg2',
    name: 'Dr. Anika Sharma',
    avatar: 'https://i.pravatar.cc/150?img=44',
    preview: 'Great progress on your ML roadmap. Let\'s review the transformer architecture in our next session.',
    time: '1h ago',
    unread: true,
    online: true,
  },
  {
    id: 'msg3',
    name: 'Sara Chen',
    avatar: 'https://i.pravatar.cc/150?img=45',
    preview: 'Sent you the Figma file for the AccessMap redesign. Check the accessibility annotations!',
    time: '3h ago',
    unread: false,
    online: false,
  },
  {
    id: 'msg4',
    name: 'HackTheNorth Team',
    avatar: 'https://i.pravatar.cc/150?img=5',
    preview: 'Your registration is confirmed. Join the Discord to find teammates.',
    time: '5h ago',
    unread: false,
    online: false,
  },
  {
    id: 'msg5',
    name: 'Priya Nair',
    avatar: 'https://i.pravatar.cc/150?img=48',
    preview: 'The KubeCraft deployment docs are ready. Want to review together?',
    time: '1d ago',
    unread: false,
    online: true,
  },
  {
    id: 'msg6',
    name: 'Marcus Webb',
    avatar: 'https://i.pravatar.cc/150?img=13',
    preview: 'Your Next.js architecture is solid. A few notes on edge functions — see attached.',
    time: '2d ago',
    unread: false,
    online: false,
  },
];

export const navItems = [
  { label: 'Overview', href: '/dashboard', icon: 'LayoutDashboard' },
  { label: 'Discover', href: '/dashboard/discover', icon: 'Compass' },
  { label: 'My Profile', href: '/profile', icon: 'User' },
  { label: 'My Projects', href: '/dashboard/projects', icon: 'FolderGit2' },
  { label: 'Messages', href: '/dashboard/messages', icon: 'MessageSquare', badge: 2 },
  { label: 'Settings', href: '/dashboard/settings', icon: 'Settings' },
] as const;
