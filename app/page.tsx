"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
        // Set target date to 5 days from now
        // We store this in localStorage to keep the timer consistent across reloads if desired,
        // or just reset it every time for this demo. The user asked for "5 gün olacak şekilde",
        // simple nice approach is a fixed date in the future or relative.
        // Let's make it fixed relative to the first load for the user, or just static 5 days ahead.
        // Given it's a "Coming Soon" for a real launch, usually it's a specific date.
        // But since I don't have a specific date, I'll set it to 5 days from mount.

        // To avoid hydration mismatch, we calculate 5 days from a fixed point or handle it client-side.
        // Let's use a fixed date 5 days from "now" (which will change every render if not careful).
        // Better: Set it to a fixed date in the near future, e.g., Dec 24, 2025.
        // Or just +5 days from current time on client mount.

        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 5);

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
        <div className="relative h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-yellow-500/30">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/coming-soon-bg.png"
                    alt="Antigravity Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">

                {/* Floating Brand/Object Animation */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="mb-8"
                >
                    {/* Abstract minimalist shape/logo representation if no logo provided, 
               but we have the image. We can just use text or a glass card. */}
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-12 md:p-16 lg:p-20 ring-1 ring-white/5"
                >
                    <h1 className="mb-6 text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                        <span className="block font-medium text-yellow-500 drop-shadow-sm">Estetiğin Yeni Formuyla</span>
                        Tanışmaya Az Kaldı
                    </h1>

                    <p className="mx-auto mb-10 max-w-xl text-lg text-gray-300 sm:text-xl font-light leading-relaxed">
                        Antigravity çok yakında sınırları zorlayan tasarımlarıyla burada olacak.
                    </p>

                    {/* Countdown Timer */}
                    <div className="mb-12 grid grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                        {[
                            { label: 'GÜN', value: timeLeft.days },
                            { label: 'SAAT', value: timeLeft.hours },
                            { label: 'DAKİKA', value: timeLeft.minutes },
                            { label: 'SANİYE', value: timeLeft.seconds },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl font-bold text-white shadow-inner sm:h-24 sm:w-24 sm:text-4xl backdrop-blur-sm">
                                    {String(item.value).padStart(2, '0')}
                                    {/* Gold accent line */}
                                    <div className="absolute bottom-0 h-1 w-1/2 rounded-full bg-yellow-500/50 blur-[2px]" />
                                </div>
                                <span className="mt-3 text-xs font-medium tracking-widest text-gray-400 uppercase sm:text-sm">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Email Input */}
                    <div className="mx-auto w-full max-w-md">
                        <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Açılıştan haberdar ol"
                                className="peer w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 pr-32 text-base text-white placeholder-gray-400 outline-none backdrop-blur-sm transition-all focus:border-yellow-500/50 focus:bg-white/10 focus:ring-1 focus:ring-yellow-500/30"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1 bottom-1 rounded-full bg-white text-black px-6 text-sm font-medium transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 font-semibold"
                            >
                                Kayıt Ol
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Footer/Brand text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-16 text-sm tracking-[0.2em] text-gray-500 uppercase"
                >
                    A N T I G R A V I T Y
                </motion.div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
