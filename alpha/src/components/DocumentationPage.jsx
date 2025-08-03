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
    ChevronUp,
    Route,
    Filter
} from 'lucide-react';
import {
    // Filter,
    // Database,
    Network,
    AlertTriangle,
    Zap,
    // ArrowRight
} from 'lucide-react';

import {
    Brain, Bookmark, Code2, Layers, Video, TestTube, PencilRuler, MessagesSquare, CheckCircle, Component, Github, FileCode, Sparkles, Target, CodeXml
} from 'lucide-react';
import "../index.css"
import Footer from './footer';


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

            <main className="relative z-10 mb-[40vh] container mx-auto px-4 sm:px-6 lg:px-8 py-24 max-w-7xl">
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


                    {/* backend routs defination */}
                    <Section id="backend-architecture" title="Backend Architecture" icon={<Code2 />}>
                        <div className="space-y-8">
                            <div className="prose prose-invert max-w-none">
                                <h3 className="text-2xl font-bold text-white mb-4">Server Structure Overview</h3>
                                <p className="text-lg text-gray-300">
                                    Our backend is built with Node.js and Express, following RESTful principles with modular route organization.
                                    The architecture is designed for scalability, security, and maintainability.
                                </p>

                                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                        <h4 className="text-purple-300 font-semibold mb-2">Core Modules</h4>
                                        <ul className="text-sm text-gray-400 space-y-1">
                                            <li>Express.js Framework</li>
                                            <li>MongoDB with Mongoose</li>
                                            <li>Redis for caching</li>
                                            <li>Socket.IO for real-time</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                        <h4 className="text-purple-300 font-semibold mb-2">Key Features</h4>
                                        <ul className="text-sm text-gray-400 space-y-1">
                                            <li>JWT Authentication</li>
                                            <li>Role-based Access Control</li>
                                            <li>Rate Limiting</li>
                                            <li>Centralized Error Handling</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                        <h4 className="text-purple-300 font-semibold mb-2">Directory Structure</h4>
                                        <ul className="text-sm text-gray-400 space-y-1">
                                            <li>routes/ - All endpoint definitions</li>
                                            <li>controllers/ - Business logic</li>
                                            <li>models/ - Database schemas</li>
                                            <li>middleware/ - Auth and validation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <motion.div className="space-y-6" variants={staggerContainer}>
                                {/* Authentication Routes */}
                                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-red-500/20 p-3 rounded-lg border border-red-500/30">
                                            <Shield className="w-6 h-6 text-red-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-2">Authentication Routes</h3>
                                            <p className="text-gray-400 mb-4">
                                                Secure user authentication system with JWT, role management, and Redis-based rate limiting.
                                            </p>

                                            <div className="space-y-4">
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Base Path: <code>/auth</code></h4>
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-sm text-gray-400">
                                                            <thead className="text-xs text-purple-300 border-b border-gray-700">
                                                                <tr>
                                                                    <th className="py-2">Method</th>
                                                                    <th className="py-2">Endpoint</th>
                                                                    <th className="py-2">Description</th>
                                                                    <th className="py-2">Middleware</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-700">
                                                                <tr>
                                                                    <td className="py-2 text-yellow-400 font-mono">POST</td>
                                                                    <td className="py-2 font-mono">/register</td>
                                                                    <td className="py-2">User registration with email validation</td>
                                                                    <td className="py-2">None</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 text-yellow-400 font-mono">POST</td>
                                                                    <td className="py-2  font-mono">/login</td>
                                                                    <td className="py-2">User login with JWT issuance</td>
                                                                    <td className="py-2">None</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 text-yellow-400 font-mono">POST</td>
                                                                    <td className="py-2 font-mono">/logout</td>
                                                                    <td className="py-2">Token invalidation</td>
                                                                    <td className="py-2">userMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 font-mono text-green-400 ">Get</td>
                                                                    <td className="py-2 font-mono">/check</td>
                                                                    <td className="py-2">Validate current session</td>
                                                                    <td className="py-2">userMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 font-mono text-orange-400 ">PATCH</td>
                                                                    <td className="py-2 font-mono">/profile</td>
                                                                    <td className="py-2">Update user profile</td>
                                                                    <td className="py-2">userMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 font-mono text-red-400 ">DELETE</td>
                                                                    <td className="py-2 font-mono">/profile</td>
                                                                    <td className="py-2">Self-delete account</td>
                                                                    <td className="py-2">userMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 text-yellow-400 font-mono">POST</td>
                                                                    <td className="py-2 font-mono">/admin/register</td>
                                                                    <td className="py-2">Admin user creation</td>
                                                                    <td className="py-2">adminMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 font-mono text-green-400 ">Get</td>
                                                                    <td className="py-2 font-mono">/alluser</td>
                                                                    <td className="py-2">List all users (admin)</td>
                                                                    <td className="py-2">userMiddleware</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Key Features</h4>
                                                    <ul className="space-y-2 text-sm text-gray-400">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-purple-300">•</span>
                                                            <span>Password hashing with bcrypt</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-purple-300">•</span>
                                                            <span>JWT with refresh token rotation</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-purple-300">•</span>
                                                            <span>Redis-based session management</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-purple-300">•</span>
                                                            <span>Role-based access control (RBAC)</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Problem Management Routes */}
                                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                                            <BookOpen className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-2">Problem Management</h3>
                                            <p className="text-gray-400 mb-4">
                                                Coding problem creation, submission, and tracking system with user progress monitoring.
                                            </p>

                                            <div className="space-y-4">
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Base Path: <code>/problem</code></h4>
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-sm text-gray-400">
                                                            <thead className="text-xs text-purple-300 border-b border-gray-700">
                                                                <tr>
                                                                    <th className="py-2">Method</th>
                                                                    <th className="py-2">Endpoint</th>
                                                                    <th className="py-2">Description</th>
                                                                    <th className="py-2">Middleware</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-700">
                                                                <tr>
                                                                    <td className="py-2 text-yellow-400 font-mono">POST</td>
                                                                    <td className="py-2 font-mono">/create</td>
                                                                    <td className="py-2">Create new coding problem</td>
                                                                    <td className="py-2">adminMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 font-mono text-yellow-600">PUT</td>
                                                                    <td className="py-2 font-mono">/update/:id</td>
                                                                    <td className="py-2">Update existing problem</td>
                                                                    <td className="py-2">adminMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 font-mono text-red-400 ">DELETE</td>
                                                                    <td className="py-2 font-mono">/delete/:id</td>
                                                                    <td className="py-2 text-red-400 ">DELETE problem</td>
                                                                    <td className="py-2">adminMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 font-mono text-green-400 ">Get</td>
                                                                    <td className="py-2 font-mono">/find/:id</td>
                                                                    <td className="py-2 text-green-400 ">Get problem details</td>
                                                                    <td className="py-2">userMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 font-mono text-green-400 ">Get</td>
                                                                    <td className="py-2 font-mono">/allProblems</td>
                                                                    <td className="py-2">List all problems</td>
                                                                    <td className="py-2">userMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 font-mono text-green-400 ">Get</td>
                                                                    <td className="py-2 font-mono">/allsolve</td>
                                                                    <td className="py-2 text-green-400 ">Get user's solved problems</td>
                                                                    <td className="py-2">userMiddleware</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Related Routes</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <h5 className="text-xs text-blue-300 mb-1">Submission System: <code>/submit</code></h5>
                                                            <ul className="text-xs text-gray-400 space-y-1">
                                                                <li className="flex items-start gap-1">
                                                                    <span className="text-yellow-400">POST</span>
                                                                    <span>/submit/:id - Submit solution</span>
                                                                </li>
                                                                <li className="flex items-start gap-1">
                                                                    <span className="text-yellow-400">POST</span>
                                                                    <span>/run/:id - Test solution</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h5 className="text-xs text-blue-300 mb-1">Discussion: <code>/api/discussion</code></h5>
                                                            <ul className="text-xs text-gray-400 space-y-1">
                                                                <li className="flex items-start gap-1">
                                                                    <span className="text-green-400 ">Get</span>
                                                                    <span>/getcom/:problemId - Get comments</span>
                                                                </li>
                                                                <li className="flex items-start gap-1">
                                                                    <span className="text-yellow-400">POST</span>
                                                                    <span>/postcom/:problemId - Add comment</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Learning Resources Routes */}
                                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30">
                                            <Bookmark className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-2">Learning Resources</h3>
                                            <p className="text-gray-400 mb-4">
                                                System for managing user-generated learning materials and video solutions.
                                            </p>

                                            <div className="space-y-4">
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-purple-300 mb-2">Base Path: <code>/note</code></h4>
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-sm text-gray-400">
                                                            <thead className="text-xs text-purple-300 border-b border-gray-700">
                                                                <tr>
                                                                    <th className="py-2">Method</th>
                                                                    <th className="py-2">Endpoint</th>
                                                                    <th className="py-2">Description</th>
                                                                    <th className="py-2">Middleware</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-gray-700">
                                                                <tr>
                                                                    <td className="py-2 text-yellow-400 font-mono">POST</td>
                                                                    <td className="py-2 font-mono">/createnote/:id</td>
                                                                    <td className="py-2">Create problem note</td>
                                                                    <td className="py-2">userMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 font-mono text-green-400 ">Get</td>
                                                                    <td className="py-2 font-mono">/getnote/:id</td>
                                                                    <td className="py-2 text-green-400 ">Get specific note</td>
                                                                    <td className="py-2">userMiddleware</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="py-2 font-mono text-green-400 ">Get</td>
                                                                    <td className="py-2 font-mono">/allnotes</td>
                                                                    <td className="py-2">List all user notes</td>
                                                                    <td className="py-2">userMiddleware</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                        <h4 className="text-sm font-semibold text-purple-300 mb-2">Bookmarks: <code>/book</code></h4>
                                                        <ul className="text-sm text-gray-400 space-y-2">
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-yellow-400 font-mono">POST</span>
                                                                <span>/createmark/:id - Bookmark problem</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-green-400 font-mono text-green-400 ">Get</span>
                                                                <span>/getmark - List bookmarks</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-red-400 font-mono text-red-400 ">DELETE</span>
                                                                <span>/delmark/:id - Remove bookmark</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                        <h4 className="text-sm font-semibold text-purple-300 mb-2">Video Solutions: <code>/video</code></h4>
                                                        <ul className="text-sm text-gray-400 space-y-2">
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-green-400 font-mono text-green-400 ">Get</span>
                                                                <span>/problem/:problemId - Get videos</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-yellow-400 font-mono">POST</span>
                                                                <span>/upload/:problemId - Upload video</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span className="text-yellow-400 font-mono">POST</span>
                                                                <span>/track/:videoId - Track view</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* AI Assistance Routes */}
                                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-purple-500/20 p-3 rounded-lg border border-purple-500/30">
                                            <BrainCircuit className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-2">AI Assistance</h3>
                                            <p className="text-gray-400 mb-4">
                                                Intelligent problem-solving assistant with context-aware responses and learning tracking.
                                            </p>

                                            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <h4 className="text-sm font-semibold text-purple-300 mb-2">Base Path: <code>/ai</code></h4>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm text-gray-400">
                                                        <thead className="text-xs text-purple-300 border-b border-gray-700">
                                                            <tr>
                                                                <th className="py-2">Method</th>
                                                                <th className="py-2">Endpoint</th>
                                                                <th className="py-2">Description</th>
                                                                <th className="py-2">Middleware</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="py-2 text-yellow-400 font-mono">POST</td>
                                                                <td className="py-2 font-mono">/chat</td>
                                                                <td className="py-2">AI-powered problem solving</td>
                                                                <td className="py-2">userMiddleware</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            <div className="mt-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <h4 className="text-sm font-semibold text-purple-300 mb-2">Technical Implementation</h4>
                                                <ul className="space-y-2 text-sm text-gray-400">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Conversation context maintained with vector embeddings</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Rate limiting to prevent API abuse</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>Problem-specific prompt engineering</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-purple-300">•</span>
                                                        <span>User learning progress integration</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* middleware */}
                                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-500/20 p-3 rounded-lg border border-orange-500/30">
                                            <Filter className="w-6 h-6 text-orange-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Middleware Layer</h3>
                                            <p className="text-gray-400 mb-3">
                                                Our middleware stack handles authentication, rate limiting, and request processing.
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-blue-300 mb-2">userMiddleware.js</h4>
                                                    <ul className="space-y-2 text-sm text-gray-400">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-blue-300">•</span>
                                                            <span>JWT verification</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-blue-300">•</span>
                                                            <span>Attaches user to request object</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-blue-300">•</span>
                                                            <span>Session validation</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-purple-300 mb-2">rateLimiter.js</h4>
                                                    <ul className="space-y-2 text-sm text-gray-400">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-purple-300">•</span>
                                                            <span>Redis-backed rate limiting</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-purple-300">•</span>
                                                            <span>IP-based throttling</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-purple-300">•</span>
                                                            <span>Dynamic rules per endpoint</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* db */}
                                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-emerald-500/20 p-3 rounded-lg border border-emerald-500/30">
                                            <Database className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-2">Database Architecture</h3>

                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                                {/* Problem Schema */}
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-emerald-300 mb-2">Problem Schema</h4>
                                                    <div className="text-xs text-gray-400 space-y-3">
                                                        <div>
                                                            <span className="font-mono text-purple-300">title:</span> String (required)
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">difficulty:</span> Enum ['easy', 'medium', 'hard']
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">tags:</span> Enum ['array', 'string', ...]
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">companies:</span> Array [Google, Amazon...]
                                                        </div>
                                                        <div className="ml-4 border-l border-gray-700 pl-2">
                                                            <span className="font-mono text-amber-300">visibleTestCases:</span> [
                                                            <div className="ml-4">
                                                                <span className="font-mono text-blue-300">input:</span> String<br />
                                                                <span className="font-mono text-blue-300">output:</span> String<br />
                                                                <span className="font-mono text-blue-300">explanation:</span> String
                                                            </div>
                                                            ]
                                                        </div>
                                                        <div className="ml-4 border-l border-gray-700 pl-2">
                                                            <span className="font-mono text-amber-300">referenceSolution:</span> [
                                                            <div className="ml-4">
                                                                <span className="font-mono text-blue-300">language:</span> String<br />
                                                                <span className="font-mono text-blue-300">completeCode:</span> String
                                                            </div>
                                                            ]
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Solution Schema */}
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-amber-300 mb-2">Solution Schema</h4>
                                                    <div className="text-xs text-gray-400 space-y-3">
                                                        <div>
                                                            <span className="font-mono text-purple-300">problemId:</span> ObjectId (ref: problemdata)
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">userId:</span> ObjectId (ref: user)
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">status:</span> Enum ['pending', 'accepted', ...]
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">runtime:</span> Number (ms)
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">memory:</span> Number (MB)
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">testCasesPassed:</span> Number
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Comment Schema */}
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-blue-300 mb-2">Comment Schema</h4>
                                                    <div className="text-xs text-gray-400 space-y-3">
                                                        <div>
                                                            <span className="font-mono text-purple-300">content:</span> String (max 2000)
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">user:</span> ObjectId (ref: userdata)
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">parentComment:</span> ObjectId (self-ref)
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">likes:</span> [ObjectId] (ref: userdata)
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">isPinned:</span> Boolean
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Video Solution Schema */}
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-rose-300 mb-2">Video Solution</h4>
                                                    <div className="text-xs text-gray-400 space-y-3">
                                                        <div>
                                                            <span className="font-mono text-purple-300">secureUrl:</span> String (Cloudinary)
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">duration:</span> String
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">views:</span> Number
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">solutionType:</span> Enum ['video', 'image', ...]
                                                        </div>
                                                        <div>
                                                            <span className="font-mono text-purple-300">reports:</span> [
                                                            <div className="ml-4">
                                                                <span className="font-mono text-blue-300">reason:</span> Enum ['spam', ...]<br />
                                                                <span className="font-mono text-blue-300">comment:</span> String
                                                            </div>
                                                            ]
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Relationships Section */}
                                            <div className="mt-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <h4 className="text-sm font-semibold text-purple-300 mb-2">Database Relationships</h4>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-400">
                                                    <div className="flex items-start gap-2">
                                                        <ArrowRight className="w-4 h-4 text-emerald-300 mt-0.5" />
                                                        <span>User → Problems (1:N)</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <ArrowRight className="w-4 h-4 text-amber-300 mt-0.5" />
                                                        <span>Problem → Solutions (1:N)</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <ArrowRight className="w-4 h-4 text-blue-300 mt-0.5" />
                                                        <span>Problem → Comments (1:N)</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <ArrowRight className="w-4 h-4 text-rose-300 mt-0.5" />
                                                        <span>Problem → VideoSolutions (1:N)</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <ArrowRight className="w-4 h-4 text-purple-300 mt-0.5" />
                                                        <span>User → Bookmarks (1:N)</span>
                                                    </div>
                                                    <div className="flex items-start gap-2">
                                                        <ArrowRight className="w-4 h-4 text-cyan-300 mt-0.5" />
                                                        <span>Comment → Replies (1:N)</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Indexes Section */}
                                            <div className="mt-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                <h4 className="text-sm font-semibold text-cyan-300 mb-2">Key Indexes</h4>
                                                <ul className="text-xs text-gray-400 space-y-2 font-mono">
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-cyan-300">•</span>
                                                        <span>solutionSchema.index({`{ problemId: 1, userId: 1 }`})</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-cyan-300">•</span>
                                                        <span>noteSchema.index({`{ userId: 1, problemId: 1, {unique: true } }`})`</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <span className="text-cyan-300">•</span>
                                                        <span>videoSolutionSchema.index({`{ title: 'text', description: 'text' }`})</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-cyan-500/20 p-3 rounded-lg border border-cyan-500/30">
                                            <Network className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Real-time System</h3>
                                            <p className="text-gray-400 mb-3">
                                                Socket.IO implementation for collaborative features with Redis pub/sub.
                                            </p>

                                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-cyan-300 mb-2">Events Handled</h4>
                                                    <ul className="text-xs text-gray-400 space-y-2 font-mono">
                                                        <li className="flex gap-2">
                                                            <span className="text-cyan-300">•</span>
                                                            <span>CODE_UPDATE: {`{roomId, changes}`}</span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-cyan-300">•</span>
                                                            <span>USER_JOIN: {`{userId, username}`}</span>
                                                        </li>
                                                        <li className="flex gap-2">
                                                            <span className="text-cyan-300">•</span>
                                                            <span>SUBMISSION_RESULT: {`{problemId, result}`}</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-cyan-300 mb-2">Scaling Strategy</h4>
                                                    <ul className="text-sm text-gray-400 space-y-2">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-cyan-300">•</span>
                                                            <span>Redis adapter for multi-server sync</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-cyan-300">•</span>
                                                            <span>Room-based connection groups</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-cyan-300">•</span>
                                                            <span>100ms debounce for code updates</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-rose-500/20 p-3 rounded-lg border border-rose-500/30">
                                            <AlertTriangle className="w-6 h-6 text-rose-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Error Management</h3>

                                            <div className="mt-4 space-y-4">
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-rose-300 mb-2">Error Classes</h4>
                                                    <pre className="text-xs text-gray-400 overflow-x-auto">
                                                        {`class APIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

class ValidationError extends APIError { /* 400 */ }
class AuthError extends APIError { /* 401 */ }
class ForbiddenError extends APIError { /* 403 */ }
class NotFoundError extends APIError { /* 404 */ }`}
                                                    </pre>
                                                </div>

                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-rose-300 mb-2">Handling Flow</h4>
                                                    <ol className="text-sm text-gray-400 space-y-2">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-rose-300">1.</span>
                                                            <span>Route handler throws domain-specific error</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-rose-300">2.</span>
                                                            <span>Error middleware processes and formats</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-rose-300">3.</span>
                                                            <span>Logging system captures details</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-rose-300">4.</span>
                                                            <span>Structured response sent to client</span>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900/70 to-gray-900/40 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-violet-500/20 p-3 rounded-lg border border-violet-500/30">
                                            <Zap className="w-6 h-6 text-violet-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Performance Tactics</h3>

                                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-violet-300 mb-2">Caching Layer</h4>
                                                    <ul className="text-sm text-gray-400 space-y-2">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-violet-300">•</span>
                                                            <span>Redis cache for problem metadata</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-violet-300">•</span>
                                                            <span>30s TTL for leaderboard data</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-violet-300">•</span>
                                                            <span>Cache stampede protection</span>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                                    <h4 className="text-sm font-semibold text-violet-300 mb-2">Query Optimization</h4>
                                                    <ul className="text-sm text-gray-400 space-y-2">
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-violet-300">•</span>
                                                            <span>Selective field projection</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-violet-300">•</span>
                                                            <span>Compound indexes for common queries</span>
                                                        </li>
                                                        <li className="flex items-start gap-2">
                                                            <span className="text-violet-300">•</span>
                                                            <span>Batch operations for submissions</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>



                            </motion.div>
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



            </main>
            <Footer />
        </div>
    );
};

export default DesignerDocumentationPage;