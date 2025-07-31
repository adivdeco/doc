

// import React, { useState, useEffect } from 'react';
// import { motion, useScroll, useSpring } from 'framer-motion';
// import {
//     Code, Star, Film, Bot, Shield, BrainCircuit, Gamepad2, Users, HardDrive, ShoppingCart, UserCheck, MessageSquare, BookOpen, Activity,
//     Rocket, Cpu, Database, Cloud, Globe, ArrowRight, ArrowUpRight,
//     Languages,
//     LayoutDashboard,
//     HeartHandshake,
//     MonitorPlay,
//     NotebookIcon
// } from 'lucide-react';
// import {

//     Brain, Code2, Layers, Video, TestTube, PencilRuler, MessagesSquare, CheckCircle, Component, Github, FileCode, Sparkles, Target, CodeXml
// } from 'lucide-react';
// import "../index.css"

// // --- Motion Variants for Animations ---
// const staggerContainer = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: { staggerChildren: 0.15, delayChildren: 0.2 }
//     }
// };
// const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
// };

// // --- Reusable Animated Sub-components ---

// const Section = ({ id, title, icon, children }) => (
//     <motion.section id={id} className="mb-24 relative" variants={itemVariants}>
//         <div className="flex items-center mb-8 border-b-2 border-purple-800/50 pb-4">
//             {React.cloneElement(icon, { className: "w-9 h-9 mr-4 text-purple-400" })}
//             <h2 className="text-4xl font-bold tracking-tight text-white">{title}</h2>
//         </div>
//         <div className="text-gray-300 leading-relaxed text-lg">
//             {children}
//         </div>
//     </motion.section>
// );

// const FeatureCard = ({ icon, title, children }) => (
//     <motion.div
//         className="bg-black/20 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
//         variants={itemVariants}
//     >
//         <div className="flex items-center gap-4 mb-3">
//             {React.cloneElement(icon, { className: "w-8 h-8 text-purple-400" })}
//             <h3 className="text-xl font-semibold text-white">{title}</h3>
//         </div>
//         <p className="text-gray-400">{children}</p>
//     </motion.div>
// );

// const TechPill = ({ icon, name, category }) => (
//     <motion.div
//         className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-xl border border-gray-700 hover:bg-purple-900/40 hover:border-purple-700 group transition-all"
//         variants={itemVariants}
//         whileHover={{ scale: 1.05 }}
//     >
//         {React.cloneElement(icon, { className: "w-7 h-7 text-cyan-400 group-hover:text-cyan-300" })}
//         <div>
//             <p className="font-semibold text-white">{name}</p>
//             <p className="text-xs text-gray-500">{category}</p>
//         </div>
//     </motion.div>
// );

// // --- Floating Navigation Component ---
// const FloatingNav = ({ sections }) => {
//     const [activeSection, setActiveSection] = useState('');

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) setActiveSection(entry.target.id);
//                 });
//             },
//             { rootMargin: '-30% 0px -70% 0px' }
//         );
//         sections.forEach(sec => {
//             const el = document.getElementById(sec.id);
//             if (el) observer.observe(el);
//         });
//         return () => sections.forEach(sec => {
//             const el = document.getElementById(sec.id);
//             if (el) observer.unobserve(el);
//         });
//     }, [sections]);

//     return (
//         <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
//             <motion.ul
//                 className="flex flex-col gap-2 bg-black/30 border border-white/10 rounded-full p-2 backdrop-blur-lg"
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 1 }}
//             >
//                 {sections.map(sec => (
//                     <li key={sec.id}>
//                         <a href={`#${sec.id}`}
//                             className={`relative flex items-center justify-center w-12 h-12 rounded-full group transition-all duration-300
//                                        ${activeSection === sec.id ? 'bg-purple-600' : 'hover:bg-gray-700'}`}
//                             aria-label={sec.title}
//                         >
//                             {React.cloneElement(sec.icon, { className: `w-6 h-6 transition-colors ${activeSection === sec.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}` })}
//                             <span className="absolute left-full ml-4 w-max px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                                 {sec.title}
//                             </span>
//                         </a>
//                     </li>
//                 ))}
//             </motion.ul>
//         </nav>
//     );
// };

// // --- Main Documentation Page ---
// const DesignerDocumentationPage = () => {
//     // For the progress bar at the top
//     const { scrollYProgress } = useScroll();
//     const scaleX = useSpring(scrollYProgress, {
//         stiffness: 100,
//         damping: 30,
//         restDelta: 0.001
//     });

//     const navSections = [
//         { id: "overview", title: "Overview", icon: <BookOpen /> },
//         { id: "features", title: "Features", icon: <Star /> },
//         { id: "ai-role", title: "Role of AI", icon: <BrainCircuit /> },
//         { id: "tech-stack", title: "Tech Stack", icon: <Rocket /> },
//         { id: "challenges", title: "Challenges", icon: <Shield /> }
//     ];

//     return (
//         <div className="relative min-h-screen bg-gray-950 font-sans text-white isolate overflow-x-hidden">
//             {/* Background Aurora */}
//             <div className="aurora-bg" />

//             {/* Top scroll progress bar */}
//             <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-purple-600 z-50" style={{ scaleX, transformOrigin: '0%' }} />

//             {/* Floating Sidebar Nav */}
//             <FloatingNav sections={navSections} />

//             <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
//                 {/* --- Header Section --- */}
//                 <header className="text-center mb-28">
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.7, delay: 0.2 }}
//                     >
//                         <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-500">
//                             CodeHunter Documentation
//                         </h1>
//                     </motion.div>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7, delay: 0.4 }}
//                         className="mt-6 max-w-3xl mx-auto text-xl text-gray-400"
//                     >
//                         An interactive deep-dive into the architecture, features, and technology powering the ultimate coding platform.
//                     </motion.p>
//                 </header>

//                 <motion.div initial="hidden" animate="show" variants={staggerContainer}>
//                     <Section id="overview" title="Project Overview" icon={<BookOpen />}>
//                         <p>
//                             CodeHunter is a powerful, all-in-one coding platform built for aspiring developers, competitive programmers, and students preparing for technical interviews. It offers an immersive environment to solve coding problems, track progress, write notes, chat with AI, and submit solutions in multiple languages — all in a sleek..
//                         </p>
//                     </Section>

//                     <Section id="features" title="Features In Detail" icon={<Star />}>
//                         <h3 className="text-2xl font-semibold mb-6 text-purple-300">👩‍💻 User-Facing Features</h3>
//                         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" variants={staggerContainer}>
//                             <FeatureCard icon={<Code />} title="Company-Focused Problems">Tackle curated questions from FAANG+ interviews.</FeatureCard>
//                             <FeatureCard icon={<Film />} title="Detailed Video Solutions">In-depth video walkthroughs for complex problems.</FeatureCard>
//                             {/* ... Add all other feature cards ... */}
//                             <FeatureCard icon={<Users />} title="Community & Discussion">Engage in global chat and problem-specific forums.</FeatureCard>
//                             <FeatureCard icon={<ShoppingCart />} title="Avatar & Shop">Customize profiles and redeem points for merch.</FeatureCard>
//                             <FeatureCard icon={<Bot />} title="AI Assistant">Stuck in problem don't worry get full concept at one place.</FeatureCard>
//                             <FeatureCard icon={<Languages />} title="C++ , Java , Python , JavaScript , Go">All Dominating Language support. </FeatureCard>
//                             <FeatureCard icon={<LayoutDashboard />} title="Dashbord">Detailed dashbord to annnalize your growth, </FeatureCard>
//                             <FeatureCard icon={<CheckCircle />} title="Daily Challanges ">Daily Challange Problems </FeatureCard>
//                             <FeatureCard icon={< HeartHandshake />} title="24*7 support ">Intigrated help center </FeatureCard >
//                             <FeatureCard icon={< NotebookIcon />} title="Note & Bookmark"> Sepreat Notea for all problem </FeatureCard >
//                             <FeatureCard icon={< MonitorPlay />} title="Many-More ">EndlessFeature </FeatureCard >


//                         </motion.div>

//                         <h3 className="text-2xl font-semibold mb-6 text-purple-300">👑 Admin-Facing Features</h3>
//                         <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer}>
//                             {/* ... Add admin feature cards ... */}
//                             <FeatureCard icon={<UserCheck />} title="User Management">View, update roles, or disable user accounts.</FeatureCard>
//                             <FeatureCard icon={<Activity />} title="Platform Analytics">Visual dashboard with key metrics for data-driven decisions.</FeatureCard>
//                             <FeatureCard icon={<Video />} title="Video-Intrigation">Proper Comment on making ease in every step</FeatureCard>
//                             <FeatureCard icon={<Activity />} title="Problem creation">Probleam creation</FeatureCard>
//                             <FeatureCard icon={<Activity />} title="Deleat problem">All jut in one click</FeatureCard>
//                             <FeatureCard icon={<Activity />} title="Update">Have an errror dont worry , update problem as esy as cup of tea</FeatureCard>

//                         </motion.div>

//                     </Section>

//                     {/* --- The Role of AI Section (Enhanced) --- */}
//                     <Section id="ai-role" title="The Role of AI: Your Personal Mentor" icon={<BrainCircuit />}>
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//                             {/* Left Column: Descriptive Text */}
//                             <motion.div
//                                 className="space-y-6"
//                                 initial={{ opacity: 0, x: -50 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true, amount: 0.3 }}
//                                 transition={{ duration: 0.8 }}
//                             >
//                                 <p className="text-xl text-gray-300">
//                                     At CodeHunter, Artificial Intelligence is more than a feature; it's a core pillar of our educational philosophy. We've integrated a sophisticated AI that acts as your personal **Socratic tutor**, designed to guide you towards the solution, not just hand it to you.
//                                 </p>
//                                 <p className="text-gray-400">
//                                     When you're stuck on a problem, our AI is engineered to help you build true understanding and problem-solving intuition. Its goal is to empower you with confidence for real-world interviews.
//                                 </p>

//                                 <ul className="space-y-4 pt-4 border-t border-gray-800">
//                                     <li className="flex items-center gap-4">
//                                         <div className="bg-purple-900/50 p-2 rounded-full border border-purple-700">
//                                             <Target className="w-5 h-5 text-purple-300" />
//                                         </div>
//                                         <span>
//                                             <strong className="text-white">Illuminates Core Concepts:</strong> Guides you through the fundamental logic and data structures behind each problem.
//                                         </span>
//                                     </li>
//                                     <li className="flex items-center gap-4">
//                                         <div className="bg-purple-900/50 p-2 rounded-full border border-purple-700">
//                                             <Sparkles className="w-5 h-5 text-purple-300" />
//                                         </div>
//                                         <span>
//                                             <strong className="text-white">Provides On-Demand Hints:</strong> Offers nudges in the right direction without spoiling the solution.
//                                         </span>
//                                     </li>
//                                     <li className="flex items-center gap-4">
//                                         <div className="bg-purple-900/50 p-2 rounded-full border border-purple-700">
//                                             <CodeXml className="w-5 h-5 text-purple-300" />
//                                         </div>
//                                         <span>
//                                             <strong className="text-white">Demystifies Complex Code:</strong> Explains what any selected snippet of code does in plain, easy-to-understand English.
//                                         </span>
//                                     </li>
//                                 </ul>
//                             </motion.div>

//                             {/* Right Column: Visual AI Demo Card */}
//                             <motion.div
//                                 className="bg-black/20 p-6 rounded-2xl border border-white/10 backdrop-blur-lg relative overflow-hidden"
//                                 initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
//                                 whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
//                                 viewport={{ once: true, amount: 0.5 }}
//                                 transition={{ duration: 0.8, type: 'spring' }}
//                             >
//                                 {/* Gradient Glow */}
//                                 <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-pink-500/50 to-purple-600/50 rounded-full blur-3xl opacity-50"></div>

//                                 <div className="relative z-10">
//                                     <h4 className="font-semibold text-lg mb-4">AI Assistant</h4>

//                                     {/* User Prompt */}
//                                     <div className="mb-4">
//                                         <p className="text-sm text-gray-500 mb-1 text-right">You</p>
//                                         <div className="bg-blue-600/70 p-3 rounded-lg rounded-br-none ml-auto max-w-sm">
//                                             <p className="text-white">I'm stuck. Can you explain the core concept needed for this problem without giving away the code?</p>
//                                         </div>
//                                     </div>

//                                     {/* AI Response with Typing Animation */}
//                                     <div>
//                                         <p className="text-sm text-gray-500 mb-1">CodeHunter AI</p>
//                                         <div className="bg-gray-800/80 p-3 rounded-lg rounded-bl-none mr-auto max-w-sm">
//                                             <div className="flex items-center gap-1.5">
//                                                 <motion.span
//                                                     className="w-2 h-2 bg-purple-400 rounded-full"
//                                                     animate={{ y: [0, -4, 0] }}
//                                                     transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
//                                                 />
//                                                 <motion.span
//                                                     className="w-2 h-2 bg-purple-400 rounded-full"
//                                                     animate={{ y: [0, -4, 0] }}
//                                                     transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
//                                                 />
//                                                 <motion.span
//                                                     className="w-2 h-2 bg-purple-400 rounded-full"
//                                                     animate={{ y: [0, -4, 0] }}
//                                                     transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
//                                                 />
//                                             </div>
//                                             <p className="text-gray-300 mt-2 text-sm italic">
//                                                 Certainly! Think about using a Two-Pointer technique. How could two pointers, one at the start and one at the end, help you efficiently find your target?
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>

//                         </div>
//                     </Section>

//                     {/* --- Tech Stack Section with Unique Icons --- */}
//                     <Section id="tech-stack" title="Technology Stack" icon={<Rocket />}>
//                         <motion.div
//                             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
//                             variants={staggerContainer}
//                         >
//                             {/* Frontend */}
//                             <TechPill
//                                 icon={<Code2 />}
//                                 name="React & Vite"
//                                 category="Frontend Framework & Tooling"
//                                 href="https://react.dev/"
//                             />
//                             <TechPill
//                                 icon={<Component />}
//                                 name="Lucide React"
//                                 category="Icon Library"
//                                 href="https://lucide.dev/"
//                             />
//                             <TechPill
//                                 icon={<Brain />}
//                                 name="Redux Toolkit"
//                                 category="State Management"
//                                 href="https://redux-toolkit.js.org/"
//                             />
//                             <TechPill
//                                 icon={<FileCode />}
//                                 name="Monaco Editor"
//                                 category="Code Editor Component"
//                                 href="https://microsoft.github.io/monaco-editor/"
//                             />

//                             {/* Backend */}
//                             <TechPill
//                                 icon={<Cpu />}
//                                 name="Node & Express"
//                                 category="Backend Runtime & Framework"
//                                 href="https://expressjs.com/"
//                             />
//                             <TechPill
//                                 icon={<Database />}
//                                 name="MongoDB"
//                                 category="NoSQL Database"
//                                 href="https://www.mongodb.com/"
//                             />
//                             <TechPill
//                                 icon={<MessagesSquare />}
//                                 name="Socket.IO"
//                                 category="Real-time Communication"
//                                 href="https://socket.io/"
//                             />

//                             {/* Services & APIs */}
//                             <TechPill
//                                 icon={<Video />}
//                                 name="Cloudinary"
//                                 category="Video & Image Storage"
//                                 href="https://cloudinary.com/"
//                             />
//                             <TechPill
//                                 icon={<CheckCircle />}
//                                 name="Judge0"
//                                 category="Code Execution & Validation"
//                                 href="https://judge0.com/"
//                             />
//                             <TechPill
//                                 icon={<Bot />}
//                                 name="OpenAI API"
//                                 category="AI-Powered Assistance"
//                                 href="https://openai.com/"
//                             />

//                             {/* DevOps */}
//                             <TechPill
//                                 icon={<Globe />}
//                                 name="Vercel & Render"
//                                 category="Deployment & Hosting"
//                                 href="https://vercel.com/"
//                             />
//                             <TechPill
//                                 icon={<Github />}
//                                 name="GitHub"
//                                 category="Version Control & CI/CD"
//                                 href="https://github.com/"
//                             />

//                         </motion.div>
//                     </Section>

//                     <Section id="challenges" title="Challenges & Solutions" icon={<Shield />}>
//                         <motion.ul className="space-y-6" variants={staggerContainer}>
//                             <motion.li variants={itemVariants} className="bg-black/20 p-6 rounded-xl border border-white/10">
//                                 <strong className="text-pink-400 text-lg">Real-time Scalability</strong><br />
//                                 <span className="text-gray-400"><strong>Solution:</strong> Used Socket.IO with Redis Adapter for multi-instance state sync and isolated rooms to manage load.</span>
//                             </motion.li>
//                             <motion.li variants={itemVariants} className="bg-black/20 p-6 rounded-xl border border-white/10">
//                                 <strong className="text-pink-400 text-lg">Secure & Efficient File Uploads</strong><br />
//                                 <span className="text-gray-400"><strong>Solution:</strong> Offloaded storage to Cloudinary. Implemented a robust `multer` flow on the backend for pre-processing.</span>
//                             </motion.li>
//                             <motion.li variants={itemVariants} className="bg-black/20 p-6 rounded-xl border border-white/10">
//                                 <strong className="text-pink-400 text-lg">Frontend-Desine</strong><br />
//                                 <span className="text-gray-400"><strong>Solution:</strong> Use of Libraryse like MagicUI & shadeCN, FIRST TIME make using doc only is loat hard.. but by help of online pratform like utube help alot  </span>
//                             </motion.li>
//                             <motion.li variants={itemVariants} className="bg-black/20 p-6 rounded-xl border border-white/10">
//                                 <strong className="text-pink-400 text-lg">Google & other Media login featur</strong><br />
//                                 <span className="text-gray-400"><strong>Solution:</strong> it not easy for a buigner to handle all with doc only , thanks for AI to help me alot</span>
//                             </motion.li>

//                         </motion.ul>
//                     </Section>
//                 </motion.div>
//             </main>
//         </div>
//     );
// };

// export default DesignerDocumentationPage;

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import {
    Code, Star, Film, Bot, Shield, BrainCircuit, Gamepad2, Users, HardDrive, ShoppingCart, UserCheck, MessageSquare, BookOpen, Activity,
    Rocket, Cpu, Database, Cloud, Globe, ArrowRight, ArrowUpRight,
    Languages,
    LayoutDashboard,
    HeartHandshake,
    MonitorPlay,
    NotebookIcon,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import {
    Brain, Code2, Layers, Video, TestTube, PencilRuler, MessagesSquare, CheckCircle, Component, Github, FileCode, Sparkles, Target, CodeXml
} from 'lucide-react';
import "../index.css"

// --- Motion Variants for Animations ---
const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// --- Reusable Animated Sub-components ---

const Section = ({ id, title, icon, children }) => (
    <motion.section
        id={id}
        className="mb-24 relative scroll-mt-24"
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
    >
        <div className="flex items-center mb-8 group">
            <div className="mr-4 p-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg shadow-lg">
                {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
            </div>
            <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                {title}
            </h2>
            <div className="ml-4 h-0.5 flex-1 bg-gradient-to-r from-purple-900/50 to-transparent group-hover:from-purple-500 transition-all duration-500" />
        </div>
        <div className="text-gray-300 leading-relaxed text-lg">
            {children}
        </div>
    </motion.section>
);

const FeatureCard = ({ icon, title, children }) => (
    <motion.div
        className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-md hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 h-full"
        variants={itemVariants}
        whileHover={{ y: -5 }}
    >
        <div className="flex items-center gap-4 mb-3">
            <div className="p-2 bg-purple-900/30 rounded-lg border border-purple-500/30">
                {React.cloneElement(icon, { className: "w-6 h-6 text-purple-300" })}
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400">{children}</p>
    </motion.div>
);

const TechPill = ({ icon, name, category, href }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-4 rounded-xl border border-gray-700 hover:bg-purple-900/40 hover:border-purple-700 group transition-all"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
    >
        <div className="p-1.5 bg-gray-800 rounded-lg group-hover:bg-purple-900/50 transition-colors">
            {React.cloneElement(icon, { className: "w-5 h-5 text-cyan-400 group-hover:text-cyan-300" })}
        </div>
        <div>
            <p className="font-semibold text-white group-hover:text-purple-200 transition-colors">{name}</p>
            <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{category}</p>
        </div>
        <ArrowUpRight className="ml-auto w-4 h-4 text-gray-500 group-hover:text-purple-300 transition-colors" />
    </motion.a>
);

const ExpandableFeature = ({ title, icon, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 rounded-xl border border-white/10 overflow-hidden"
            variants={itemVariants}
        >
            <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-4">
                    {React.cloneElement(icon, { className: "w-6 h-6 text-purple-300" })}
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                {isExpanded ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
            </button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                    >
                        <div className="pt-2 border-t border-gray-800 text-gray-400">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// --- Floating Navigation Component ---
const FloatingNav = ({ sections }) => {
    const [activeSection, setActiveSection] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );
        sections.forEach(sec => {
            const el = document.getElementById(sec.id);
            if (el) observer.observe(el);
        });
        return () => sections.forEach(sec => {
            const el = document.getElementById(sec.id);
            if (el) observer.unobserve(el);
        });
    }, [sections]);

    return (
        <nav
            className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.ul
                className="flex flex-col gap-2 bg-black/30 border border-white/10 rounded-2xl p-3 backdrop-blur-lg"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                {sections.map(sec => (
                    <li key={sec.id}>
                        <a href={`#${sec.id}`}
                            className={`relative flex items-center justify-between w-full p-3 rounded-lg group transition-all duration-300
                                       ${activeSection === sec.id ? 'bg-purple-600/90' : 'hover:bg-gray-700/50'}`}
                            aria-label={sec.title}
                        >
                            <div className="flex items-center gap-3">
                                {React.cloneElement(sec.icon, {
                                    className: `w-5 h-5 transition-colors ${activeSection === sec.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`
                                })}
                                {(isHovered || activeSection === sec.id) && (
                                    <motion.span
                                        className="text-sm whitespace-nowrap"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                    >
                                        {sec.title}
                                    </motion.span>
                                )}
                            </div>
                            {activeSection === sec.id && (
                                <motion.div
                                    className="w-1.5 h-1.5 bg-white rounded-full"
                                    layoutId="navIndicator"
                                />
                            )}
                        </a>
                    </li>
                ))}
            </motion.ul>
        </nav>
    );
};

// --- Main Documentation Page ---
const DesignerDocumentationPage = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const navSections = [
        { id: "overview", icon: <BookOpen /> },
        { id: "features", icon: <Star /> },
        { id: "ai-role", icon: <BrainCircuit /> },
        { id: "tech-stack", icon: <Rocket /> },
        { id: "challenges", icon: <Shield /> }
    ];

    return (
        <div className="relative min-h-screen bg-gray-950 font-sans text-white isolate overflow-x-hidden">
            {/* Background Aurora */}
            <div className="fixed inset-0 overflow-hidden -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-gray-900 opacity-50"></div>
                <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-red-700/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl"></div>
            </div>

            {/* Top scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 z-50 shadow-lg"
                style={{ scaleX, transformOrigin: '0%' }}
            />

            {/* Floating Sidebar Nav */}
            <FloatingNav sections={navSections} />

            <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-7xl">
                {/* --- Header Section --- */}
                <header className="text-center mb-28">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-500 pb-2">
                            CodeHunter Documentation
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-6 max-w-3xl mx-auto text-xl text-gray-400"
                    >
                        A comprehensive deep-dive into the architecture, features, and technology powering the ultimate coding interview preparation platform.
                    </motion.p>
                </header>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                >
                    <Section id="overview" title="Project Overview" icon={<BookOpen />}>
                        <div className="space-y-6">
                            <p className="text-xl text-gray-300 leading-relaxed">
                                CodeHunter is an all-in-one coding platform designed for aspiring developers, competitive programmers, and students preparing for technical interviews. Our platform provides an immersive environment to solve coding challenges, track progress, take notes, interact with an AI mentor, and submit solutions in multiple programming languages—all within a sleek, intuitive interface.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-6 rounded-xl border border-white/10">
                                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-purple-300" />
                                        <span>Target Audience</span>
                                    </h3>
                                    <ul className="space-y-2 text-gray-400">
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-300">•</span>
                                            <span>CS students preparing for FAANG+ interviews</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-300">•</span>
                                            <span>Self-taught developers improving DSA skills</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-300">•</span>
                                            <span>Coding competition participants</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-6 rounded-xl border border-white/10">
                                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                        <Target className="w-5 h-5 text-purple-300" />
                                        <span>Key Objectives</span>
                                    </h3>
                                    <ul className="space-y-2 text-gray-400">
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-300">•</span>
                                            <span>Democratize access to interview preparation</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-300">•</span>
                                            <span>Provide structured learning paths</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-300">•</span>
                                            <span>Bridge theory with practical implementation</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-6 rounded-xl border border-white/10">
                                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                        <Rocket className="w-5 h-5 text-purple-300" />
                                        <span>Unique Value</span>
                                    </h3>
                                    <ul className="space-y-2 text-gray-400">
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-300">•</span>
                                            <span>Integrated AI mentor with Socratic approach</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-300">•</span>
                                            <span>Company-specific problem categorization</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-purple-300">•</span>
                                            <span>Comprehensive video explanations</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Section>

                    <Section id="features" title="Core Features" icon={<Star />}>
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-purple-300 flex items-center gap-3">
                                    <Users className="w-6 h-6" />
                                    <span>User-Facing Features</span>
                                </h3>
                                <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                                    variants={staggerContainer}
                                >
                                    <FeatureCard icon={<Code />} title="Company-Focused Problems">
                                        Curated problems from actual FAANG+ interviews, categorized by company and difficulty level to target your dream job preparation.
                                    </FeatureCard>
                                    <FeatureCard icon={<Film />} title="Video Solutions">
                                        In-depth video walkthroughs explaining problem-solving approaches and optimal solutions with time complexity analysis.
                                    </FeatureCard>
                                    <FeatureCard icon={<Bot />} title="AI Mentor">
                                        Context-aware AI assistant that guides you through problems with hints and conceptual explanations without revealing solutions.
                                    </FeatureCard>
                                    <FeatureCard icon={<Languages />} title="Multi-Language Support">
                                        Full support for C++, Java, Python, JavaScript, and Go with syntax highlighting and language-specific templates.
                                    </FeatureCard>
                                    <FeatureCard icon={<LayoutDashboard />} title="Progress Dashboard">
                                        Visual analytics tracking your solved problems, accuracy, speed improvements, and weak areas needing focus.
                                    </FeatureCard>
                                    <FeatureCard icon={<NotebookIcon />} title="Integrated Notebook">
                                        Per-problem note-taking with Markdown support to document your learnings and thought processes.
                                    </FeatureCard>
                                    <FeatureCard icon={<CheckCircle />} title="Daily Challenges">
                                        Algorithmic problems delivered daily to build consistent practice habits and expand your problem-solving repertoire.
                                    </FeatureCard>
                                    <FeatureCard icon={<HeartHandshake />} title="24/7 Support">
                                        Integrated help center with documentation and responsive support team for technical issues.
                                    </FeatureCard>
                                    <FeatureCard icon={<ShoppingCart />} title="Rewards System">
                                        Earn points for solving problems that can be redeemed for premium features or merchandise.
                                    </FeatureCard>
                                </motion.div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-6 text-purple-300 flex items-center gap-3">
                                    <UserCheck className="w-6 h-6" />
                                    <span>Admin-Facing Features</span>
                                </h3>
                                <motion.div
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                    variants={staggerContainer}
                                >
                                    <FeatureCard icon={<UserCheck />} title="User Management">
                                        Comprehensive dashboard to view, update roles, or disable user accounts with detailed activity logs.
                                    </FeatureCard>
                                    <FeatureCard icon={<Activity />} title="Platform Analytics">
                                        Visual dashboard displaying key metrics including DAU, retention rates, and problem completion statistics.
                                    </FeatureCard>
                                    <FeatureCard icon={<Video />} title="Content Management">
                                        Intuitive interface for creating, editing, and organizing problems with video explanations and test cases.
                                    </FeatureCard>
                                    <FeatureCard icon={<MessageSquare />} title="Community Moderation">
                                        Tools to monitor discussions, flag inappropriate content, and engage with the user community.
                                    </FeatureCard>
                                    <FeatureCard icon={<Shield />} title="Security Center">
                                        Monitor login attempts, manage API keys, and configure security settings for the platform.
                                    </FeatureCard>
                                    <FeatureCard icon={<Database />} title="Database Management">
                                        Direct access to manage database collections, run backups, and optimize performance.
                                    </FeatureCard>
                                </motion.div>
                            </div>
                        </div>
                    </Section>

                    <Section id="ai-role" title="AI-Powered Mentorship" icon={<BrainCircuit />}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-8">
                                <div className="prose prose-invert max-w-none">
                                    <h3 className="text-2xl font-semibold text-purple-300 mb-4">Intelligent Guidance System</h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">
                                        At CodeHunter, our AI mentor is engineered to emulate the ideal coding instructor—patient, knowledgeable, and focused on developing your problem-solving intuition rather than providing quick answers.
                                    </p>
                                    <p className="text-gray-400">
                                        The system employs advanced natural language processing to understand your queries in context and respond with appropriate guidance tailored to your current understanding level.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <ExpandableFeature
                                        title="Conceptual Scaffolding"
                                        icon={<Brain />}
                                    >
                                        <p className="text-gray-400">
                                            When you're stuck, the AI identifies the core data structures or algorithms relevant to the problem and provides conceptual explanations with real-world analogies to build your understanding.
                                        </p>
                                        <ul className="mt-3 space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-300">•</span>
                                                <span>Identifies knowledge gaps in your approach</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-300">•</span>
                                                <span>Provides relevant academic references</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-purple-300">•</span>
                                                <span>Links to similar problems for practice</span>
                                            </li>
                                        </ul>
                                    </ExpandableFeature>

                                    <ExpandableFeature
                                        title="Progressive Hint System"
                                        icon={<Sparkles />}
                                    >
                                        <p className="text-gray-400">
                                            The AI delivers hints in stages—starting with broad conceptual nudges and progressively offering more specific guidance if you remain stuck, always stopping short of giving away the complete solution.
                                        </p>
                                        <div className="mt-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                            <p className="text-sm text-gray-400 italic">"Consider how a hash map could help optimize the lookup time in your solution..."</p>
                                        </div>
                                    </ExpandableFeature>

                                    <ExpandableFeature
                                        title="Code Explanation Engine"
                                        icon={<CodeXml />}
                                    >
                                        <p className="text-gray-400">
                                            Highlight any section of your code to receive a plain-English explanation of what it does, along with analysis of its time/space complexity and potential optimizations.
                                        </p>
                                        <div className="mt-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                            <p className="text-sm text-gray-400 italic">"This nested loop results in O(n²) time complexity—could you find a way to reduce this using a more efficient data structure?"</p>
                                        </div>
                                    </ExpandableFeature>
                                </div>
                            </div>

                            <div className="sticky top-24">
                                <motion.div
                                    className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-2xl border border-white/10 backdrop-blur-lg shadow-xl overflow-hidden"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "0px" }}
                                    transition={{ duration: 0.8, type: 'spring' }}
                                >
                                    <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-pink-500/30 to-purple-600/30 rounded-full blur-3xl opacity-70"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <h4 className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                                                AI Mentor Demo
                                            </h4>
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                <span className="text-xs text-gray-400">Active</span>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {/* User Message */}
                                            <div className="flex justify-end">
                                                <div className="bg-gradient-to-r from-purple-600/80 to-indigo-600/80 p-4 rounded-2xl rounded-br-none max-w-[85%] shadow-md">
                                                    <p className="text-white">
                                                        I'm working on the "Two Sum" problem. I have a brute force solution but it's too slow. Can you guide me toward a more optimal approach?
                                                    </p>
                                                </div>
                                            </div>

                                            {/* AI Response with Typing Indicator */}
                                            <div className="flex">
                                                <div className="bg-gray-800/90 p-4 rounded-2xl rounded-bl-none max-w-[85%] shadow-md">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                                                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                                    </div>
                                                    <div className="space-y-3 text-gray-300">
                                                        <p>
                                                            Great question! The brute force approach (checking all pairs) gives us O(n²) time complexity. Let's think about how we can reduce this.
                                                        </p>
                                                        <p className="font-medium text-purple-300">
                                                            💡 Key Insight: We need faster lookups than O(n). What data structure provides O(1) average time complexity for lookups?
                                                        </p>
                                                        <p>
                                                            Try implementing this with a hash map to store numbers we've already seen as we iterate through the array. This should give us O(n) time complexity.
                                                        </p>
                                                        <p className="text-sm text-gray-400 italic mt-2">
                                                            Would you like me to elaborate on any part of this approach?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </Section>

                    <Section id="tech-stack" title="Technology Stack" icon={<Rocket />}>
                        <div className="prose prose-invert max-w-none mb-12">
                            <p className="text-lg text-gray-300">
                                CodeHunter is built on a modern, scalable technology stack designed for performance, reliability, and developer productivity. Below are the key technologies powering our platform:
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-purple-300 border-b border-purple-900/50 pb-2">Frontend Architecture</h3>
                                <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5" variants={staggerContainer}>
                                    <TechPill
                                        icon={<Code2 />}
                                        name="React 18"
                                        category="UI Library"
                                        href="https://react.dev/"
                                    />
                                    <TechPill
                                        icon={<Code />}
                                        name="TypeScript"
                                        category="Type Safety"
                                        href="https://www.typescriptlang.org/"
                                    />
                                    <TechPill
                                        icon={<Brain />}
                                        name="Redux Toolkit"
                                        category="State Management"
                                        href="https://redux-toolkit.js.org/"
                                    />
                                    <TechPill
                                        icon={<FileCode />}
                                        name="Monaco Editor"
                                        category="Code Editor"
                                        href="https://microsoft.github.io/monaco-editor/"
                                    />
                                    <TechPill
                                        icon={<Component />}
                                        name="ShadCN UI"
                                        category="Component Library"
                                        href="https://ui.shadcn.com/"
                                    />
                                    <TechPill
                                        icon={<PencilRuler />}
                                        name="Framer Motion"
                                        category="Animations"
                                        href="https://www.framer.com/motion/"
                                    />
                                </motion.div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-purple-300 border-b border-purple-900/50 pb-2">Backend Services</h3>
                                <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5" variants={staggerContainer}>
                                    <TechPill
                                        icon={<Cpu />}
                                        name="Node.js"
                                        category="Runtime"
                                        href="https://nodejs.org/"
                                    />
                                    <TechPill
                                        icon={<MessagesSquare />}
                                        name="Express"
                                        category="Web Framework"
                                        href="https://expressjs.com/"
                                    />
                                    <TechPill
                                        icon={<Database />}
                                        name="MongoDB"
                                        category="NoSQL Database"
                                        href="https://www.mongodb.com/"
                                    />
                                    <TechPill
                                        icon={<MessagesSquare />}
                                        name="Socket.IO"
                                        category="Real-time"
                                        href="https://socket.io/"
                                    />
                                    <TechPill
                                        icon={<CheckCircle />}
                                        name="Judge0"
                                        category="Code Execution"
                                        href="https://judge0.com/"
                                    />
                                    <TechPill
                                        icon={<Bot />}
                                        name="OpenAI API"
                                        category="AI Services"
                                        href="https://openai.com/"
                                    />
                                </motion.div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-purple-300 border-b border-purple-900/50 pb-2">Infrastructure & DevOps</h3>
                                <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5" variants={staggerContainer}>
                                    <TechPill
                                        icon={<Globe />}
                                        name="Vercel"
                                        category="Frontend Hosting"
                                        href="https://vercel.com/"
                                    />
                                    <TechPill
                                        icon={<Cloud />}
                                        name="Render"
                                        category="Backend Hosting"
                                        href="https://render.com/"
                                    />
                                    <TechPill
                                        icon={<Github />}
                                        name="GitHub Actions"
                                        category="CI/CD"
                                        href="https://github.com/features/actions"
                                    />
                                    <TechPill
                                        icon={<Video />}
                                        name="Cloudinary"
                                        category="Media Storage"
                                        href="https://cloudinary.com/"
                                    />
                                    <TechPill
                                        icon={<Shield />}
                                        name="Auth0"
                                        category="Authentication"
                                        href="https://auth0.com/"
                                    />
                                    <TechPill
                                        icon={<Activity />}
                                        name="Sentry"
                                        category="Error Monitoring"
                                        href="https://sentry.io/"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </Section>

                    <Section id="challenges" title="Engineering Challenges & Solutions" icon={<Shield />}>
                        <div className="space-y-8">
                            <div className="prose prose-invert max-w-none">
                                <p className="text-lg text-gray-300">
                                    Building a platform as complex as CodeHunter presented numerous technical challenges. Here's how our engineering team addressed the most critical ones:
                                </p>
                            </div>

                            <motion.div className="space-y-6" variants={staggerContainer}>
                                <motion.div
                                    variants={itemVariants}
                                    className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-red-500/20 p-3 rounded-lg border border-red-500/30">
                                            <Shield className="w-6 h-6 text-red-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Secure Code Execution</h3>
                                            <p className="text-gray-400 mb-3">
                                                Running untrusted user code in a safe, isolated environment while maintaining performance.
                                            </p>
                                            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <h4 className="text-sm font-semibold text-purple-300 mb-2">Solution Architecture</h4>
                                                <ul className="space-y-2 text-sm text-gray-400">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Implemented Judge0 as execution engine with strict resource limits</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Docker containers with read-only filesystems for each execution</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Network isolation to prevent external calls</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Timeout enforcement (5s max execution time)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                                            <Users className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Real-time Collaboration</h3>
                                            <p className="text-gray-400 mb-3">
                                                Supporting concurrent users in coding rooms with live updates and synchronization.
                                            </p>
                                            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <h4 className="text-sm font-semibold text-purple-300 mb-2">Implementation Strategy</h4>
                                                <ul className="space-y-2 text-sm text-gray-400">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Socket.IO with Redis adapter for horizontal scaling</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Operational transform for conflict resolution in code edits</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Throttled updates (100ms debounce) to prevent flooding</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Client-side prediction for smooth UI updates</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={itemVariants}
                                    className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30">
                                            <BrainCircuit className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">AI Context Management</h3>
                                            <p className="text-gray-400 mb-3">
                                                Maintaining conversation context across multiple problems and coding sessions.
                                            </p>
                                            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <h4 className="text-sm font-semibold text-purple-300 mb-2">Technical Approach</h4>
                                                <ul className="space-y-2 text-sm text-gray-400">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Vector embeddings of problem statements for semantic search</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Conversation trees stored in MongoDB with TTL indexes</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Custom prompt engineering to maintain teaching methodology</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Rate limiting to prevent API abuse</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </Section>
                </motion.div>

                {/* Footer */}
                <footer className="mt-32 pt-12 border-t border-gray-800/50 text-center">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
                            Ready to Transform Your Coding Journey?
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Join thousands of developers who've accelerated their interview preparation with CodeHunter's comprehensive platform.
                        </p>
                    </div>
                    <div className="flex justify-center gap-4 mb-12">
                        <motion.a
                            href="https://code-hunter-sable.vercel.app/"
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium text-white shadow-lg hover:shadow-purple-500/30 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.a>
                        <motion.a
                            href="#"
                            className="px-8 py-3 bg-gray-800 rounded-lg font-medium text-white border border-gray-700 hover:bg-gray-700/50 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Sales
                        </motion.a>
                    </div>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} CodeHunter. All rights reserved.
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default DesignerDocumentationPage;