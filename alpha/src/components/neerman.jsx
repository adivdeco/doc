import React, { useState, useEffect } from 'react';

const NeermanDocumentation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['overview', 'features', 'use-cases', 'tech-stack', 'future-upgrades', 'api-docs'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
            setIsMenuOpen(false);
        }
    };

    const features = [
        {
            icon: '🔍',
            title: 'Smart Analytics',
            description: 'Comprehensive data analysis with intuitive visualizations to help you make informed decisions based on real-time metrics and trends.'
        },
        {
            icon: '🤖',
            title: 'Automated Workflows',
            description: 'Create custom automation sequences to eliminate repetitive tasks and streamline your business processes with our drag-and-drop workflow builder.'
        },
        {
            icon: '🔒',
            title: 'Secure Collaboration',
            description: 'Enterprise-grade security with role-based access controls, ensuring your data remains protected while enabling seamless team collaboration.'
        },
        {
            icon: '📊',
            title: 'Custom Reporting',
            description: 'Generate tailored reports with our flexible reporting engine, allowing you to focus on the metrics that matter most to your business.'
        },
        {
            icon: '📱',
            title: 'Mobile Experience',
            description: 'Full-featured mobile application with offline capabilities, ensuring you stay productive even when disconnected from the internet.'
        },
        {
            icon: '🔗',
            title: 'Integration Hub',
            description: 'Connect Neerman with your existing tools through our extensive library of pre-built integrations and customizable API endpoints.'
        }
    ];

    const businessUseCases = [
        {
            title: 'Project Management',
            description: 'Coordinate teams, track progress, and manage resources efficiently with our project management module. Assign tasks, set deadlines, and monitor project health in real-time.'
        },
        {
            title: 'Customer Relationship Management',
            description: 'Track customer interactions, manage sales pipelines, and automate follow-up communications to improve customer satisfaction and increase conversion rates.'
        },
        {
            title: 'Inventory Management',
            description: 'Monitor stock levels, track inventory movement, and generate automated reorder alerts to optimize inventory costs and prevent stockouts.'
        },
        {
            title: 'Financial Reporting',
            description: 'Consolidate financial data from multiple sources, generate compliance reports, and visualize financial performance with customizable dashboards.'
        }
    ];

    const individualUseCases = [
        {
            title: 'Personal Productivity',
            description: 'Organize daily tasks, set reminders, and track personal goals with our intuitive task management system designed for individual users.'
        },
        {
            title: 'Learning Management',
            description: 'Create personalized learning paths, track progress, and receive recommendations for skill development based on your career objectives.'
        },
        {
            title: 'Health & Wellness Tracking',
            description: 'Monitor fitness goals, track nutrition, and establish healthy habits with our wellness module that integrates with popular health apps and devices.'
        }
    ];

    const techStack = {
        frontend: ['React.js', 'TypeScript', 'Redux', 'Material-UI', 'Chart.js'],
        backend: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.io'],
        infrastructure: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform']
    };

    const roadmap = [
        {
            quarter: 'Q3 2023',
            title: 'AI-Powered Insights',
            description: 'Implement machine learning algorithms to provide predictive analytics and intelligent recommendations based on user behavior and historical data.'
        },
        {
            quarter: 'Q4 2023',
            title: 'Advanced Automation',
            description: 'Introduce natural language processing for creating automation workflows and expand integration capabilities with 50+ additional third-party services.'
        },
        {
            quarter: 'Q1 2024',
            title: 'Mobile Enhancements',
            description: 'Redesign mobile application with enhanced offline capabilities, AR features for inventory management, and improved performance.'
        },
        {
            quarter: 'Q2 2024',
            title: 'Enterprise Features',
            description: 'Add advanced security features, compliance modules for various industries, and enhanced administrative controls for large organizations.'
        },
        {
            quarter: 'Q3 2024',
            title: 'Global Expansion',
            description: 'Introduce multi-language support, regional compliance features, and localized user experiences for international markets.'
        }
    ];

    const apiEndpoints = [
        {
            category: 'Authentication',
            endpoints: [
                'POST /api/auth/login - User authentication',
                'POST /api/auth/refresh - Refresh access token'
            ]
        },
        {
            category: 'User Management',
            endpoints: [
                'GET /api/users - Retrieve user list',
                'POST /api/users - Create new user',
                'PUT /api/users/{id} - Update user information'
            ]
        },
        {
            category: 'Data Operations',
            endpoints: [
                'GET /api/data - Retrieve data with filtering options',
                'POST /api/data - Create new data records',
                'PUT /api/data/{id} - Update existing records'
            ]
        },
        {
            category: 'Reports',
            endpoints: [
                'GET /api/reports - Generate custom reports',
                'POST /api/reports - Create new report templates'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-12 shadow-lg">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Neerman</h1>
                    <p className="text-xl md:text-2xl opacity-90">Intelligent Solutions for Modern Challenges</p>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="text-blue-900 font-bold text-xl">Neerman</div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {['overview', 'features', 'use-cases', 'tech-stack', 'future-upgrades', 'api-docs'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`capitalize font-medium transition-colors ${activeSection === section ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                {section.replace('-', ' ')}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white py-4 px-4 shadow-lg">
                        <div className="flex flex-col space-y-4">
                            {['overview', 'features', 'use-cases', 'tech-stack', 'future-upgrades', 'api-docs'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`capitalize font-medium text-left py-2 px-4 rounded transition-colors ${activeSection === section
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {section.replace('-', ' ')}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main>
                {/* Overview Section */}
                <section id="overview" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Project Overview</h2>

                        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <span className="text-2xl mr-3">📱</span>
                                    About Neerman
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Neerman is an innovative application designed to streamline workflow processes and enhance productivity
                                    through intelligent automation and data-driven insights. Our platform combines cutting-edge technology
                                    with user-centric design to deliver exceptional value to businesses and individuals alike.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <span className="text-2xl mr-3">🎯</span>
                                    Mission Statement
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To empower organizations with intuitive tools that simplify complex tasks, foster collaboration,
                                    and drive measurable results through data-informed decision making.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <span className="text-2xl mr-3">👥</span>
                                    Target Audience
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Small to medium businesses, project managers, teams requiring workflow automation,
                                    and professionals seeking productivity enhancement tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Core Features</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="text-3xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section id="use-cases" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Use Cases</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Business Use Cases */}
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                    <span className="text-2xl mr-3">🏢</span>
                                    Business Applications
                                </h3>

                                {businessUseCases.map((useCase, index) => (
                                    <div key={index} className="mb-6 last:mb-0 border-l-4 border-blue-500 pl-4">
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{useCase.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Individual Use Cases */}
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                    <span className="text-2xl mr-3">👤</span>
                                    Individual Use Cases
                                </h3>

                                {individualUseCases.map((useCase, index) => (
                                    <div key={index} className="mb-6 last:mb-0 border-l-4 border-green-500 pl-4">
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{useCase.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section id="tech-stack" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Technology Stack</h2>

                        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-lg p-8">
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                    <span className="text-2xl mr-3">💻</span>
                                    Frontend
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {techStack.frontend.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                    <span className="text-2xl mr-3">⚙️</span>
                                    Backend
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {techStack.backend.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                    <span className="text-2xl mr-3">☁️</span>
                                    Infrastructure
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {techStack.infrastructure.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Future Upgrades Section */}
                <section id="future-upgrades" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Future Upgrades & Roadmap</h2>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

                                {roadmap.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                            }`}
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white z-10"></div>

                                        {/* Content */}
                                        <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                                <div className="text-blue-600 font-semibold mb-2">{item.quarter}</div>
                                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* API Documentation Section */}
                <section id="api-docs" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">API Documentation</h2>

                        <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                                <span className="text-2xl mr-3">🔌</span>
                                REST API Endpoints
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Our comprehensive API allows developers to extend Neerman's functionality and integrate with existing systems.
                            </p>

                            <div className="space-y-8">
                                {apiEndpoints.map((category, index) => (
                                    <div key={index}>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-4">{category.category}</h4>
                                        <div className="bg-white rounded-lg shadow-sm p-4 space-y-2">
                                            {category.endpoints.map((endpoint, endIndex) => (
                                                <div key={endIndex} className="font-mono text-sm bg-gray-100 p-3 rounded">
                                                    {endpoint}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Neerman</h2>
                        <p className="text-gray-400 mb-6">Intelligent Solutions for Modern Challenges</p>

                        <div className="flex flex-wrap justify-center gap-6 mb-6">
                            {['overview', 'features', 'use-cases', 'tech-stack', 'future-upgrades'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="text-gray-400 hover:text-white transition-colors capitalize"
                                >
                                    {section.replace('-', ' ')}
                                </button>
                            ))}
                        </div>

                        <p className="text-gray-500 text-sm">
                            &copy; 2023 Neerman App. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NeermanDocumentation;