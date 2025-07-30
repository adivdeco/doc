import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Code, Trophy, HelpCircle, Users, Sparkles, Star } from 'lucide-react';

// --- Reusable Child Components ---

// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = Object.keys(timeLeft).map((interval, i) => (
        <motion.div
            key={interval}
            className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 w-24 h-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
        >
            <span className="text-4xl font-bold text-white">{timeLeft[interval] || '0'}</span>
            <span className="text-sm uppercase text-purple-300">{interval}</span>
        </motion.div>
    ));

    return <div className="flex gap-4 mt-8">{timerComponents.length ? timerComponents : <div className="text-2xl text-green-400 font-bold">Contest is LIVE!</div>}</div>;
};

// Detail Card Component
const DetailCard = ({ icon, title, description, delay }) => (
    <motion.div
        className="bg-gray-900/50 p-6 rounded-2xl border border-purple-800/50 hover:border-purple-600 hover:bg-gray-900 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
    >
        <div className="flex items-center gap-4 mb-3">
            {icon}
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

// --- Main Contest Page Component ---
const ContestPage = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-black via-gray-950 to-purple-950 text-white font-sans overflow-hidden">
            {/* --- Hero Section with Glowing Background Effect --- */}
            <div className="relative flex flex-col items-center justify-center text-center py-20 px-4">
                {/* Glowing background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600 rounded-full opacity-20 blur-[150px] animate-pulse"></div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                        The Nebula Nexus Challenge
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                        A weekly coding marathon designed to test your skills on real-world problems faced by top tech giants.
                    </p>
                </motion.div>

                <CountdownTimer targetDate="2024-09-15T23:59:59" />

                <motion.button
                    className="mt-12 px-8 py-4 rounded-full font-bold text-white bg-purple-600 relative overflow-hidden transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(192, 132, 252, 0.7)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <span className="relative z-10">Register Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
            </div>

            {/* --- Details Section --- */}
            <div className="container mx-auto px-4 py-24">
                <h2 className="text-center text-4xl font-bold mb-12">Contest Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <DetailCard
                        icon={<Calendar className="w-8 h-8 text-purple-400" />}
                        title="Timeline"
                        description="Starts: Sept 15, 2024, 12:00 PM UTC. Ends: Sept 16, 2024, 12:00 PM UTC."
                        delay={0.1}
                    />
                    <DetailCard
                        icon={<Code className="w-8 h-8 text-purple-400" />}
                        title="Format"
                        description="3 algorithmic problems with varying difficulty. Solve them in any language we support."
                        delay={0.2}
                    />
                    <DetailCard
                        icon={<Award className="w-8 h-8 text-purple-400" />}
                        title="Prizes & Recognition"
                        description="Top performers win exclusive swag from our shop, premium subscriptions, and a spot on the hall of fame."
                        delay={0.3}
                    />
                    <DetailCard
                        icon={<Users className="w-8 h-8 text-purple-400" />}
                        title="Eligibility"
                        description="Open to all coders worldwide! Individual participation only."
                        delay={0.4}
                    />
                    <DetailCard
                        icon={<Star className="w-8 h-8 text-purple-400" />}
                        title="Company Focus"
                        description="This week's problems are inspired by interview questions from Google & Meta."
                        delay={0.5}
                    />
                    <DetailCard
                        icon={<HelpCircle className="w-8 h-8 text-purple-400" />}
                        title="Resources"
                        description="Utilize our video solutions and discussion forums to prepare."
                        delay={0.6}
                    />
                </div>
            </div>

            <div className="text-center py-20">
                <motion.a href="#"
                    className="px-10 py-5 rounded-full font-bold text-xl text-black bg-gradient-to-r from-yellow-300 to-orange-400"
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(252, 211, 77, 0.6)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Trophy className="inline-block mr-3" />
                    View Leaderboard
                </motion.a>
            </div>
        </div>
    );
};

export default ContestPage;