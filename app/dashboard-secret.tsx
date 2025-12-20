"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import RoomDesignerGame from '@/components/RoomDesignerGame';


interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const ComingSoonPage = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Set target date to a fixed date (Dec 25, 2025) so it doesn't reset on reload
        const targetDate = new Date('2025-12-25T14:00:00');

        const targetTime = targetDate.getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetTime - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Avoid hydration errors
    if (!mounted) return null;

    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white font-sans selection:bg-yellow-500/30">
            {/* Background Image with Overlay */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/coming-soon-bg.png"
                    alt="Antigravity Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center py-8 px-4 text-center sm:px-6 lg:px-8">

                {/* GAME SECTION - Primary Focus */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-4xl mb-8 sm:mb-12"
                >
                    <RoomDesignerGame />
                </motion.div>

                {/* Coming Soon Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-3xl rounded-2xl sm:rounded-3xl border border-white/5 bg-black/30 p-6 sm:p-12 backdrop-blur-md ring-1 ring-white/5"
                >
                    <h1 className="mb-4 text-2xl font-light tracking-tight text-white sm:text-4xl md:text-5xl">
                        <span className="block font-medium text-yellow-500 drop-shadow-sm mb-2 text-lg sm:text-2xl md:text-3xl">Estetiğin Yeni Formu</span>
                        Çok Yakında Sizlerle
                    </h1>

                    <p className="mx-auto mb-6 sm:mb-8 max-w-xl text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                        Antigravity tasarımlarıyla yaşam alanınızı yeniden keşfetmeye hazır olun.
                    </p>

                    {/* Countdown Timer */}
                    <div className="mb-6 sm:mb-10 grid grid-cols-4 gap-2 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
                        {[
                            { label: 'GÜN', value: timeLeft.days },
                            { label: 'SAAT', value: timeLeft.hours },
                            { label: 'DAKİKA', value: timeLeft.minutes },
                            { label: 'SANİYE', value: timeLeft.seconds },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-lg font-bold text-white shadow-inner sm:h-20 sm:w-20 sm:text-3xl backdrop-blur-sm">
                                    {String(item.value).padStart(2, '0')}
                                    {/* Gold accent line */}
                                    <div className="absolute bottom-0 h-0.5 w-1/2 rounded-full bg-yellow-500/50 blur-[1px]" />
                                </div>
                                <span className="mt-2 text-[8px] sm:text-[10px] font-medium tracking-widest text-gray-500 uppercase">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </motion.div>

                {/* Footer simple copyright */}
                <div className="mt-6 sm:mt-8 text-[10px] sm:text-xs text-gray-600">
                    &copy; 2025 ALL RIGHTS RESERVED.
                </div>
            </div>

            {/* Ensure cursor is visible/customized */}

        </div>
    );
};

export default ComingSoonPage;
