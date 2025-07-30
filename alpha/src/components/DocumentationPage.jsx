

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    Code, Star, Film, Bot, Shield, BrainCircuit, Gamepad2, Users, HardDrive, ShoppingCart, UserCheck, MessageSquare, BookOpen, Activity,
    Rocket, Cpu, Database, Cloud, Globe, ArrowRight, ArrowUpRight,
    Languages,
    LayoutDashboard,
    HeartHandshake,
    MonitorPlay
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
    <motion.section id={id} className="mb-24 relative" variants={itemVariants}>
        <div className="flex items-center mb-8 border-b-2 border-purple-800/50 pb-4">
            {React.cloneElement(icon, { className: "w-9 h-9 mr-4 text-purple-400" })}
            <h2 className="text-4xl font-bold tracking-tight text-white">{title}</h2>
        </div>
        <div className="text-gray-300 leading-relaxed text-lg">
            {children}
        </div>
    </motion.section>
);

const FeatureCard = ({ icon, title, children }) => (
    <motion.div
        className="bg-black/20 p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
        variants={itemVariants}
    >
        <div className="flex items-center gap-4 mb-3">
            {React.cloneElement(icon, { className: "w-8 h-8 text-purple-400" })}
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400">{children}</p>
    </motion.div>
);

const TechPill = ({ icon, name, category }) => (
    <motion.div
        className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-xl border border-gray-700 hover:bg-purple-900/40 hover:border-purple-700 group transition-all"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
    >
        {React.cloneElement(icon, { className: "w-7 h-7 text-cyan-400 group-hover:text-cyan-300" })}
        <div>
            <p className="font-semibold text-white">{name}</p>
            <p className="text-xs text-gray-500">{category}</p>
        </div>
    </motion.div>
);

// --- Floating Navigation Component ---
const FloatingNav = ({ sections }) => {
    const [activeSection, setActiveSection] = useState('');

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
        <nav className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-50">
            <motion.ul
                className="flex flex-col gap-2 bg-black/30 border border-white/10 rounded-full p-2 backdrop-blur-lg"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                {sections.map(sec => (
                    <li key={sec.id}>
                        <a href={`#${sec.id}`}
                            className={`relative flex items-center justify-center w-12 h-12 rounded-full group transition-all duration-300
                                       ${activeSection === sec.id ? 'bg-purple-600' : 'hover:bg-gray-700'}`}
                            aria-label={sec.title}
                        >
                            {React.cloneElement(sec.icon, { className: `w-6 h-6 transition-colors ${activeSection === sec.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}` })}
                            <span className="absolute left-full ml-4 w-max px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {sec.title}
                            </span>
                        </a>
                    </li>
                ))}
            </motion.ul>
        </nav>
    );
};

// --- Main Documentation Page ---
const DesignerDocumentationPage = () => {
    // For the progress bar at the top
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const navSections = [
        { id: "overview", title: "Overview", icon: <BookOpen /> },
        { id: "features", title: "Features", icon: <Star /> },
        { id: "ai-role", title: "Role of AI", icon: <BrainCircuit /> },
        { id: "tech-stack", title: "Tech Stack", icon: <Rocket /> },
        { id: "challenges", title: "Challenges", icon: <Shield /> }
    ];

    return (
        <div className="relative min-h-screen bg-gray-950 font-sans text-white isolate overflow-x-hidden">
            {/* Background Aurora */}
            <div className="aurora-bg" />

            {/* Top scroll progress bar */}
            <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-purple-600 z-50" style={{ scaleX, transformOrigin: '0%' }} />

            {/* Floating Sidebar Nav */}
            <FloatingNav sections={navSections} />

            <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* --- Header Section --- */}
                <header className="text-center mb-28">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                            CodeHunter Documentation
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="mt-6 max-w-3xl mx-auto text-xl text-gray-400"
                    >
                        An interactive deep-dive into the architecture, features, and technology powering the ultimate coding platform.
                    </motion.p>
                </header>

                <motion.div initial="hidden" animate="show" variants={staggerContainer}>
                    <Section id="overview" title="Project Overview" icon={<BookOpen />}>
                        <p>
                            CodeHunter was born from the need to bridge the gap between theoretical knowledge and practical interview success... (rest of your text)
                        </p>
                    </Section>

                    <Section id="features" title="Features In Detail" icon={<Star />}>
                        <h3 className="text-2xl font-semibold mb-6 text-purple-300">👩‍💻 User-Facing Features</h3>
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" variants={staggerContainer}>
                            <FeatureCard icon={<Code />} title="Company-Focused Problems">Tackle curated questions from FAANG+ interviews.</FeatureCard>
                            <FeatureCard icon={<Film />} title="Detailed Video Solutions">In-depth video walkthroughs for complex problems.</FeatureCard>
                            {/* ... Add all other feature cards ... */}
                            <FeatureCard icon={<Users />} title="Community & Discussion">Engage in global chat and problem-specific forums.</FeatureCard>
                            <FeatureCard icon={<ShoppingCart />} title="Avatar & Shop">Customize profiles and redeem points for merch.</FeatureCard>
                            <FeatureCard icon={<Bot />} title="AI Assistant">Stuck in problem don't worry get full concept at one place.</FeatureCard>
                            <FeatureCard icon={<Languages />} title="C++ , Java , Python , JavaScript , Go">All Dominating Language support. </FeatureCard>
                            <FeatureCard icon={<LayoutDashboard />} title="Dashbord">Detailed dashbord to annnalize your growth, </FeatureCard>
                            <FeatureCard icon={<CheckCircle />} title="Daily Challanges ">Daily Challange Problems </FeatureCard>
                            <FeatureCard icon={< HeartHandshake />} title="24*7 support ">Intigrated help center </FeatureCard >
                            <FeatureCard icon={< MonitorPlay />} title="Many-More ">EndlessFeature </FeatureCard >


                        </motion.div>

                        <h3 className="text-2xl font-semibold mb-6 text-purple-300">👑 Admin-Facing Features</h3>
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer}>
                            {/* ... Add admin feature cards ... */}
                            <FeatureCard icon={<UserCheck />} title="User Management">View, update roles, or disable user accounts.</FeatureCard>
                            <FeatureCard icon={<Activity />} title="Platform Analytics">Visual dashboard with key metrics for data-driven decisions.</FeatureCard>
                            <FeatureCard icon={<Activity />} title="Platform Analytics">Visual dashboard with key metrics for data-driven decisions.</FeatureCard>
                            <FeatureCard icon={<Activity />} title="Platform Analytics">Visual dashboard with key metrics for data-driven decisions.</FeatureCard>
                            <FeatureCard icon={<Activity />} title="Platform Analytics">Visual dashboard with key metrics for data-driven decisions.</FeatureCard>
                            <FeatureCard icon={<Activity />} title="Platform Analytics">Visual dashboard with key metrics for data-driven decisions.</FeatureCard>

                        </motion.div>

                    </Section>

                    {/* --- The Role of AI Section (Enhanced) --- */}
                    <Section id="ai-role" title="The Role of AI: Your Personal Mentor" icon={<BrainCircuit />}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Left Column: Descriptive Text */}
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                            >
                                <p className="text-xl text-gray-300">
                                    At CodeHunter, Artificial Intelligence is more than a feature; it's a core pillar of our educational philosophy. We've integrated a sophisticated AI that acts as your personal **Socratic tutor**, designed to guide you towards the solution, not just hand it to you.
                                </p>
                                <p className="text-gray-400">
                                    When you're stuck on a problem, our AI is engineered to help you build true understanding and problem-solving intuition. Its goal is to empower you with confidence for real-world interviews.
                                </p>

                                <ul className="space-y-4 pt-4 border-t border-gray-800">
                                    <li className="flex items-center gap-4">
                                        <div className="bg-purple-900/50 p-2 rounded-full border border-purple-700">
                                            <Target className="w-5 h-5 text-purple-300" />
                                        </div>
                                        <span>
                                            <strong className="text-white">Illuminates Core Concepts:</strong> Guides you through the fundamental logic and data structures behind each problem.
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="bg-purple-900/50 p-2 rounded-full border border-purple-700">
                                            <Sparkles className="w-5 h-5 text-purple-300" />
                                        </div>
                                        <span>
                                            <strong className="text-white">Provides On-Demand Hints:</strong> Offers nudges in the right direction without spoiling the solution.
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="bg-purple-900/50 p-2 rounded-full border border-purple-700">
                                            <CodeXml className="w-5 h-5 text-purple-300" />
                                        </div>
                                        <span>
                                            <strong className="text-white">Demystifies Complex Code:</strong> Explains what any selected snippet of code does in plain, easy-to-understand English.
                                        </span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Right Column: Visual AI Demo Card */}
                            <motion.div
                                className="bg-black/20 p-6 rounded-2xl border border-white/10 backdrop-blur-lg relative overflow-hidden"
                                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, type: 'spring' }}
                            >
                                {/* Gradient Glow */}
                                <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-pink-500/50 to-purple-600/50 rounded-full blur-3xl opacity-50"></div>

                                <div className="relative z-10">
                                    <h4 className="font-semibold text-lg mb-4">AI Assistant</h4>

                                    {/* User Prompt */}
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-500 mb-1 text-right">You</p>
                                        <div className="bg-blue-600/70 p-3 rounded-lg rounded-br-none ml-auto max-w-sm">
                                            <p className="text-white">I'm stuck. Can you explain the core concept needed for this problem without giving away the code?</p>
                                        </div>
                                    </div>

                                    {/* AI Response with Typing Animation */}
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">CodeHunter AI</p>
                                        <div className="bg-gray-800/80 p-3 rounded-lg rounded-bl-none mr-auto max-w-sm">
                                            <div className="flex items-center gap-1.5">
                                                <motion.span
                                                    className="w-2 h-2 bg-purple-400 rounded-full"
                                                    animate={{ y: [0, -4, 0] }}
                                                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                                />
                                                <motion.span
                                                    className="w-2 h-2 bg-purple-400 rounded-full"
                                                    animate={{ y: [0, -4, 0] }}
                                                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                                />
                                                <motion.span
                                                    className="w-2 h-2 bg-purple-400 rounded-full"
                                                    animate={{ y: [0, -4, 0] }}
                                                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                                />
                                            </div>
                                            <p className="text-gray-300 mt-2 text-sm italic">
                                                Certainly! Think about using a Two-Pointer technique. How could two pointers, one at the start and one at the end, help you efficiently find your target?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </Section>

                    {/* --- Tech Stack Section with Unique Icons --- */}
                    <Section id="tech-stack" title="Technology Stack" icon={<Rocket />}>
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
                            variants={staggerContainer}
                        >
                            {/* Frontend */}
                            <TechPill
                                icon={<Code2 />}
                                name="React & Vite"
                                category="Frontend Framework & Tooling"
                                href="https://react.dev/"
                            />
                            <TechPill
                                icon={<Component />}
                                name="Lucide React"
                                category="Icon Library"
                                href="https://lucide.dev/"
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
                                category="Code Editor Component"
                                href="https://microsoft.github.io/monaco-editor/"
                            />

                            {/* Backend */}
                            <TechPill
                                icon={<Cpu />}
                                name="Node & Express"
                                category="Backend Runtime & Framework"
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
                                category="Real-time Communication"
                                href="https://socket.io/"
                            />

                            {/* Services & APIs */}
                            <TechPill
                                icon={<Video />}
                                name="Cloudinary"
                                category="Video & Image Storage"
                                href="https://cloudinary.com/"
                            />
                            <TechPill
                                icon={<CheckCircle />}
                                name="Judge0"
                                category="Code Execution & Validation"
                                href="https://judge0.com/"
                            />
                            <TechPill
                                icon={<Bot />}
                                name="OpenAI API"
                                category="AI-Powered Assistance"
                                href="https://openai.com/"
                            />

                            {/* DevOps */}
                            <TechPill
                                icon={<Globe />}
                                name="Vercel & Render"
                                category="Deployment & Hosting"
                                href="https://vercel.com/"
                            />
                            <TechPill
                                icon={<Github />}
                                name="GitHub"
                                category="Version Control & CI/CD"
                                href="https://github.com/"
                            />

                        </motion.div>
                    </Section>

                    <Section id="challenges" title="Challenges & Solutions" icon={<Shield />}>
                        <motion.ul className="space-y-6" variants={staggerContainer}>
                            <motion.li variants={itemVariants} className="bg-black/20 p-6 rounded-xl border border-white/10">
                                <strong className="text-pink-400 text-lg">Real-time Scalability</strong><br />
                                <span className="text-gray-400"><strong>Solution:</strong> Used Socket.IO with Redis Adapter for multi-instance state sync and isolated rooms to manage load.</span>
                            </motion.li>
                            <motion.li variants={itemVariants} className="bg-black/20 p-6 rounded-xl border border-white/10">
                                <strong className="text-pink-400 text-lg">Secure & Efficient File Uploads</strong><br />
                                <span className="text-gray-400"><strong>Solution:</strong> Offloaded storage to Cloudinary. Implemented a robust `multer` flow on the backend for pre-processing.</span>
                            </motion.li>
                            <motion.li variants={itemVariants} className="bg-black/20 p-6 rounded-xl border border-white/10">
                                <strong className="text-pink-400 text-lg">Frontend-Desine</strong><br />
                                <span className="text-gray-400"><strong>Solution:</strong> Use of Libraryse like MagicUI & shadeCN, FIRST TIME make using doc only is loat hard.. but by help of online pratform like utube help alot  </span>
                            </motion.li>
                            <motion.li variants={itemVariants} className="bg-black/20 p-6 rounded-xl border border-white/10">
                                <strong className="text-pink-400 text-lg">Google & other Media login featur</strong><br />
                                <span className="text-gray-400"><strong>Solution:</strong> it not easy for a buigner to handle all with doc only , thanks for AI to help me alot</span>
                            </motion.li>

                        </motion.ul>
                    </Section>
                </motion.div>
            </main>
        </div>
    );
};

export default DesignerDocumentationPage;