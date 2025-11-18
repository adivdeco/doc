import React, { useState, useEffect } from 'react';

const NeermanDocumentation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['overview', 'user-roles', 'features', 'use-cases', 'tech-stack', 'future-upgrades', 'api-docs', 'architecture'];
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

    // User Roles Data
    const userRoles = [
        {
            role: 'Admin',
            icon: '👑',
            description: 'Full system control and management capabilities',
            permissions: [
                'User management and role assignments',
                'System configuration and settings',
                'Financial reporting and analytics',
                'Employee and contractor oversight',
                'Data backup and security management'
            ]
        },
        {
            role: 'Co-admin/Employees',
            icon: '👥',
            description: 'Operational management and user support',
            permissions: [
                'Manage user data and profiles',
                'Track and monitor service requests',
                'Update user information and status',
                'Customer support and issue resolution',
                'Service request assignment and follow-up'
            ]
        },
        {
            role: 'Contractors',
            icon: '🔧',
            description: 'Service providers with profession-based accounts',
            permissions: [
                'Receive and manage service requests',
                'Accept or cancel user requests',
                'Update service status and progress',
                'Professional profile management',
                'Real-time communication with users'
            ]
        },
        {
            role: 'Shop Owners',
            icon: '🏪',
            description: 'Hardware goods suppliers with ledger management',
            permissions: [
                'Manage product inventory and listings',
                'Process customer orders and deliveries',
                'Maintain daily shop billing ledger',
                'Generate and manage invoices',
                'Customer relationship management'
            ]
        },
        {
            role: 'Users/Customers',
            icon: '👤',
            description: 'Primary service consumers for construction and repair needs',
            permissions: [
                'Register and manage personal profile',
                'Request services from contractors',
                'Purchase materials from shop owners',
                'Track service progress and history',
                'Access AI-powered planning tools'
            ]
        }
    ];

    // Enhanced Features with role-specific functionality
    const features = [
        {
            icon: '🔍',
            title: 'Smart Analytics & Dashboard',
            description: 'Comprehensive data analysis with role-specific dashboards. Real-time metrics and business intelligence for informed decision-making.',
            roles: ['All Roles']
        },
        {
            icon: '🤖',
            title: 'AI-Powered Estimation',
            description: 'Intelligent house cost estimation based on property data. Machine learning algorithms provide accurate budget planning for construction projects.',
            roles: ['Users', 'Contractors']
        },
        {
            icon: '🔒',
            title: 'Role-Based Access Control',
            description: 'Enterprise-grade security with hierarchical permissions. Each user role has tailored access and capabilities within the system.',
            roles: ['All Roles']
        },
        {
            icon: '📊',
            title: 'Ledger Management',
            description: 'Advanced billing and ledger system for shop owners. Structured data management for daily transactions and financial tracking.',
            roles: ['Shop Owners', 'Admin']
        },
        {
            icon: '⚡',
            title: 'Real-time Communication',
            description: 'Socket.io powered instant messaging and notifications. Seamless communication between all stakeholders without time delays.',
            roles: ['All Roles']
        },
        {
            icon: '🛒',
            title: 'Multi-vendor Marketplace',
            description: 'Integrated platform connecting users with contractors and shop owners. Streamlined service requests and material procurement.',
            roles: ['Users', 'Contractors', 'Shop Owners']
        }
    ];

    // Enhanced Business Use Cases
    const businessUseCases = [
        {
            title: 'Project Management & Coordination',
            description: 'Comprehensive project tracking from initiation to completion. Real-time updates, resource allocation, and milestone tracking for construction projects.',
            image: '📋'
        },
        {
            title: 'Customer Relationship Management',
            description: 'End-to-end customer journey management. Track interactions, manage service pipelines, and automate follow-up communications.',
            image: '💼'
        },
        {
            title: 'Inventory & Ledger Management',
            description: 'Advanced inventory tracking with integrated ledger system. Shop owners maintain daily billing lists and structured financial data.',
            image: '📦'
        },
        {
            title: 'Service Request Ecosystem',
            description: 'Streamlined service request flow from users to contractors. Real-time assignment, tracking, and completion with employee oversight.',
            image: '🔄'
        }
    ];

    // Enhanced Individual Use Cases
    const individualUseCases = [
        {
            title: 'Home Construction Planning',
            description: 'Complete home construction journey management. From initial planning with AI tools to contractor selection and material procurement.',
            image: '🏠'
        },
        {
            title: 'AI-Powered Cost Estimation',
            description: 'Smart budget planning using property data and machine learning. Get accurate construction cost estimates before starting projects.',
            image: '🤖'
        },
        {
            title: 'Service Marketplace Access',
            description: 'One-stop platform for all construction and repair needs. Connect with verified contractors and purchase materials seamlessly.',
            image: '🛍️'
        }
    ];

    // Enhanced Tech Stack from your package.json
    const techStack = {
        frontend: {
            framework: ['React 19.1.1', 'React DOM 19.1.1'],
            stateManagement: ['Redux Toolkit', 'React Redux'],
            ui: ['Tailwind CSS 4.1.14', 'Material-UI', 'Heroicons', 'Lucide React'],
            forms: ['React Hook Form', 'Zod Validation'],
            routing: ['React Router 7.9.4'],
            realtime: ['Socket.io Client 4.8.1'],
            utilities: ['Axios', 'Date-fns', 'Framer Motion', 'React Hot Toast']
        },
        backend: {
            runtime: ['Node.js', 'Express.js 5.1.0'],
            database: ['MongoDB', 'Mongoose 8.18.1'],
            authentication: ['JWT', 'bcrypt', 'Firebase Admin'],
            fileStorage: ['Cloudinary', 'Multer'],
            realtime: ['Socket.io 4.8.1'],
            ai: ['Google GenAI'],
            utilities: ['Node-cron', 'Validator']
        },
        infrastructure: {
            deployment: ['Vite 7.1.7', 'Docker'],
            monitoring: ['ESLint', 'Nodemon'],
            apis: ['RESTful APIs', 'WebSocket APIs']
        }
    };

    // System Architecture
    const architecture = {
        components: [
            {
                name: 'Frontend Layer',
                description: 'React-based responsive web application',
                technologies: ['React 19', 'Redux', 'Tailwind CSS', 'Socket.io Client']
            },
            {
                name: 'Backend API Layer',
                description: 'Express.js server with RESTful and WebSocket APIs',
                technologies: ['Node.js', 'Express 5', 'JWT Auth', 'Socket.io']
            },
            {
                name: 'Database Layer',
                description: 'MongoDB with Mongoose ODM for data persistence',
                technologies: ['MongoDB', 'Mongoose', 'Data Validation']
            },
            {
                name: 'AI Service Layer',
                description: 'Google GenAI integration for intelligent features',
                technologies: ['Google GenAI', 'Machine Learning']
            },
            {
                name: 'File Storage',
                description: 'Cloudinary integration for media management',
                technologies: ['Cloudinary', 'Multer']
            }
        ],
        features: [
            'Real-time communication via WebSockets',
            'Role-based access control system',
            'AI-powered estimation engine',
            'Multi-vendor marketplace platform',
            'Advanced ledger management system'
        ]
    };

    // API Routes Structure
    const apiRoutes = {
        authentication: ['POST /auth/login', 'POST /auth/register', 'POST /auth/refresh', 'POST /auth/logout'],
        userManagement: [
            'GET /admin/user/allusers',
            'PUT /setting/user',
            'PUT /setting/shop',
            'PUT /setting/contractor'
        ],
        businessOperations: [
            'POST /shop/addBill',
            'GET /shop/allBills',
            'GET /shop/allCustomers',
            'POST /khata (Ledger operations)'
        ],
        serviceManagement: [
            'POST /api/work-requests',
            'GET /api/work-requests',
            'PUT /api/work-requests/:id'
        ],
        aiServices: [
            'POST /ai-build/estimate',
            'POST /ai-build/layout'
        ],
        notifications: [
            'GET /api/notifications',
            'POST /api/notifications',
            'PUT /api/notifications/:id'
        ]
    };

    const roadmap = [
        {
            quarter: 'Q1 2024',
            title: 'Advanced AI Layout Design',
            description: 'Implement AI system for automated home layout generation and 3D visualization with intelligent space planning algorithms.'
        },
        {
            quarter: 'Q2 2024',
            title: 'Integrated Payment Gateway',
            description: 'Introduce online payment processing for service requests, material purchases, and automated transaction handling.'
        },
        {
            quarter: 'Q3 2024',
            title: 'Smart Bill Generation & Distribution',
            description: 'Enable shop owners to generate comprehensive bills and automatically send them via WhatsApp, email, and other channels.'
        },
        {
            quarter: 'Q4 2024',
            title: 'Mobile Application Suite',
            description: 'Launch dedicated mobile applications for all user roles with enhanced offline capabilities and push notifications.'
        },
        {
            quarter: 'Q1 2025',
            title: 'International Expansion',
            description: 'Multi-language support, regional compliance features, and localized experiences for global markets.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Enhanced Header */}
            <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        Neerman
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-4">Intelligent Construction & Service Management Platform</p>
                    <p className="text-lg opacity-80 max-w-2xl mx-auto">
                        Connecting homeowners with contractors and suppliers through AI-powered solutions and real-time communication.
                    </p>
                </div>
            </header>

            {/* Enhanced Navigation */}
            <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            N
                        </div>
                        <span className="text-blue-900 font-bold text-xl">Neerman</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 focus:outline-none transition-transform duration-300 hover:scale-110"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6">
                        {['overview', 'user-roles', 'features', 'use-cases', 'architecture', 'tech-stack', 'future-upgrades', 'api-docs'].map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`capitalize font-medium transition-all duration-300 px-3 py-2 rounded-lg ${activeSection === section
                                        ? 'text-blue-600 bg-blue-50 shadow-sm'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                            >
                                {section.replace(/-/g, ' ')}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-md py-4 px-4 shadow-lg border-t border-gray-200">
                        <div className="flex flex-col space-y-2">
                            {['overview', 'user-roles', 'features', 'use-cases', 'architecture', 'tech-stack', 'future-upgrades', 'api-docs'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className={`capitalize font-medium text-left py-3 px-4 rounded-lg transition-all duration-300 ${activeSection === section
                                            ? 'bg-blue-100 text-blue-700 shadow-sm'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {section.replace(/-/g, ' ')}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="relative">
                {/* Overview Section */}
                <section id="overview" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Platform Overview</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <span className="text-3xl mr-4">🚀</span>
                                    Revolutionary Platform Concept
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Neerman transforms the construction and home services industry by creating a seamless ecosystem
                                    connecting homeowners with verified contractors and material suppliers. Our AI-powered platform
                                    simplifies every step from planning to completion.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <span className="text-3xl mr-4">🎯</span>
                                    Core Mission
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    To democratize access to quality construction services and materials through technology,
                                    making home construction and repairs transparent, efficient, and accessible to everyone.
                                </p>
                            </div>
                        </div>

                        {/* Platform Statistics */}
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-8 text-white">
                            <h3 className="text-2xl font-semibold mb-8 text-center">Platform Impact</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                                <div>
                                    <div className="text-3xl font-bold mb-2">5+</div>
                                    <div className="text-blue-200">User Roles</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">100%</div>
                                    <div className="text-blue-200">Real-time</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">AI</div>
                                    <div className="text-blue-200">Powered</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">24/7</div>
                                    <div className="text-blue-200">Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* User Roles Section */}
                <section id="user-roles" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Comprehensive User Role System</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {userRoles.map((role, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
                                >
                                    <div className="flex items-center mb-4">
                                        <span className="text-3xl mr-4">{role.icon}</span>
                                        <h3 className="text-xl font-bold text-gray-800">{role.role}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{role.description}</p>
                                    <div className="space-y-2">
                                        {role.permissions.map((permission, idx) => (
                                            <div key={idx} className="flex items-start">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span className="text-gray-700 text-sm">{permission}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Role Interaction Diagram */}
                        <div className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Role Interaction Flow</h3>
                            <div className="flex flex-wrap justify-center items-center gap-4">
                                <div className="bg-white rounded-xl p-4 shadow-md text-center min-w-[120px]">
                                    <div className="text-2xl mb-2">👤</div>
                                    <div className="font-semibold text-sm">User</div>
                                </div>
                                <div className="text-2xl">→</div>
                                <div className="bg-white rounded-xl p-4 shadow-md text-center min-w-[120px]">
                                    <div className="text-2xl mb-2">🔧</div>
                                    <div className="font-semibold text-sm">Contractor</div>
                                </div>
                                <div className="text-2xl">→</div>
                                <div className="bg-white rounded-xl p-4 shadow-md text-center min-w-[120px]">
                                    <div className="text-2xl mb-2">🏪</div>
                                    <div className="font-semibold text-sm">Shop Owner</div>
                                </div>
                                <div className="text-2xl">→</div>
                                <div className="bg-white rounded-xl p-4 shadow-md text-center min-w-[120px]">
                                    <div className="text-2xl mb-2">👥</div>
                                    <div className="font-semibold text-sm">Employee</div>
                                </div>
                                <div className="text-2xl">→</div>
                                <div className="bg-white rounded-xl p-4 shadow-md text-center min-w-[120px]">
                                    <div className="text-2xl mb-2">👑</div>
                                    <div className="font-semibold text-sm">Admin</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Advanced Platform Features</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-200"
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {feature.roles.map((role, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium"
                                            >
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section id="use-cases" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Real-World Applications</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Business Use Cases */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="text-3xl mr-4">🏢</span>
                                    Business & Enterprise Solutions
                                </h3>

                                {businessUseCases.map((useCase, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <span className="text-3xl">{useCase.image}</span>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{useCase.title}</h4>
                                                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Individual Use Cases */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="text-3xl mr-4">👤</span>
                                    Individual & Consumer Solutions
                                </h3>

                                {individualUseCases.map((useCase, index) => (
                                    <div
                                        key={index}
                                        className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <span className="text-3xl">{useCase.image}</span>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-800 mb-2">{useCase.title}</h4>
                                                <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Architecture Section */}
                <section id="architecture" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">System Architecture</h2>

                        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Layered Architecture Overview</h3>

                            <div className="space-y-8">
                                {architecture.components.map((component, index) => (
                                    <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{component.name}</h4>
                                        <p className="text-gray-600 mb-3">{component.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {component.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {architecture.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="text-2xl mb-3">⭐</div>
                                    <h4 className="font-semibold text-gray-800">{feature}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section id="tech-stack" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Technology Stack</h2>

                        <div className="space-y-12">
                            {/* Frontend */}
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="text-3xl mr-4">💻</span>
                                    Frontend Technologies
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {techStack.frontend.framework.map((tech, index) => (
                                        <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                            <div className="font-semibold text-gray-800">{tech}</div>
                                        </div>
                                    ))}
                                    {techStack.frontend.stateManagement.map((tech, index) => (
                                        <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                            <div className="font-semibold text-gray-800">{tech}</div>
                                        </div>
                                    ))}
                                    {techStack.frontend.ui.slice(0, 4).map((tech, index) => (
                                        <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                            <div className="font-semibold text-gray-800">{tech}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                    <span className="text-3xl mr-4">⚙️</span>
                                    Backend Technologies
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {techStack.backend.runtime.map((tech, index) => (
                                        <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                            <div className="font-semibold text-gray-800">{tech}</div>
                                        </div>
                                    ))}
                                    {techStack.backend.database.map((tech, index) => (
                                        <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                            <div className="font-semibold text-gray-800">{tech}</div>
                                        </div>
                                    ))}
                                    {techStack.backend.authentication.slice(0, 3).map((tech, index) => (
                                        <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                                            <div className="font-semibold text-gray-800">{tech}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Future Upgrades Section */}
                <section id="future-upgrades" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Future Roadmap & Innovations</h2>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600"></div>

                                {roadmap.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                            }`}
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white z-10 shadow-lg"></div>

                                        {/* Content */}
                                        <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-200">
                                                <div className="text-blue-600 font-bold text-lg mb-2">{item.quarter}</div>
                                                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
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
                <section id="api-docs" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">API Documentation</h2>

                        <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <span className="text-3xl mr-4">🔌</span>
                                Comprehensive API Endpoints
                            </h3>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Neerman provides a robust RESTful API with WebSocket support for real-time features.
                                All endpoints are secured with JWT authentication and role-based access control.
                            </p>

                            <div className="space-y-8">
                                {Object.entries(apiRoutes).map(([category, endpoints]) => (
                                    <div key={category} className="bg-white rounded-xl shadow-sm p-6">
                                        <h4 className="text-lg font-bold text-gray-800 mb-4 capitalize">
                                            {category.replace(/([A-Z])/g, ' $1')}
                                        </h4>
                                        <div className="space-y-3">
                                            {endpoints.map((endpoint, index) => (
                                                <div key={index} className="font-mono text-sm bg-gray-100 p-4 rounded-lg border-l-4 border-blue-500">
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

            {/* Enhanced Footer */}
            <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="flex justify-center items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                N
                            </div>
                            <h2 className="text-3xl font-bold">Neerman</h2>
                        </div>
                        <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                            Revolutionizing the construction and home services industry through technology,
                            AI-powered solutions, and seamless user experiences.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            {['overview', 'user-roles', 'features', 'use-cases', 'architecture', 'tech-stack', 'future-upgrades'].map((section) => (
                                <button
                                    key={section}
                                    onClick={() => scrollToSection(section)}
                                    className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 capitalize"
                                >
                                    {section.replace(/-/g, ' ')}
                                </button>
                            ))}
                        </div>

                        <div className="border-t border-gray-700 pt-8 mt-8">
                            <p className="text-gray-400 text-sm">
                                &copy; 2024 Neerman Platform. All rights reserved. |
                                <span className="text-blue-300 ml-2">Built with React, Node.js, and AI Innovation</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NeermanDocumentation;