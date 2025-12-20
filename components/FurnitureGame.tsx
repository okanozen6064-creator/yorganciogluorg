"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Armchair, Lamp, Bed, Table, Sofa } from 'lucide-react';

// Define the types of furniture we can catch
const FURNITURE_TYPES = [
    { id: 'armchair', icon: Armchair, color: 'text-amber-400', score: 10 },
    { id: 'lamp', icon: Lamp, color: 'text-yellow-200', score: 15 },
    { id: 'bed', icon: Bed, color: 'text-blue-300', score: 20 },
    { id: 'table', icon: Table, color: 'text-stone-300', score: 10 },
];

interface GameItem {
    id: number;
    typeIdx: number;
    x: number; // percentage 0-100
    y: number; // percentage 0-100
    speed: number;
}

export default function FurnitureGame() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [score, setScore] = useState(0);
    const [items, setItems] = useState<GameItem[]>([]);
    const gameAreaRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>();
    const lastSpawnTime = useRef<number>(0);
    const scoreRef = useRef(0); // For referencing inside game loop without dependency issues

    // Start/Stop Game
    const toggleGame = () => {
        if (isPlaying) {
            setIsPlaying(false);
            setItems([]);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        } else {
            setIsPlaying(true);
            setScore(0);
            scoreRef.current = 0;
            setItems([]);
            lastSpawnTime.current = performance.now();
            requestRef.current = requestAnimationFrame(gameLoop);
        }
    };

    // Game Loop
    const gameLoop = useCallback((time: number) => {
        if (!isPlaying) return;

        // Spawn new items every 1000ms (approx, variable)
        if (time - lastSpawnTime.current > 1200) {
            spawnItem();
            lastSpawnTime.current = time;
        }

        // Update positions
        setItems(prevItems => {
            const nextItems = prevItems
                .map(item => ({
                    ...item,
                    y: item.y + item.speed
                }))
                .filter(item => item.y < 110); // Remove items that fall off screen

            return nextItems;
        });

        requestRef.current = requestAnimationFrame(gameLoop);
    }, [isPlaying]);

    useEffect(() => {
        if (isPlaying) {
            requestRef.current = requestAnimationFrame(gameLoop);
        }
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [isPlaying, gameLoop]);

    const spawnItem = () => {
        const typeIdx = Math.floor(Math.random() * FURNITURE_TYPES.length);
        const newItem: GameItem = {
            id: Date.now() + Math.random(),
            typeIdx,
            x: Math.random() * 80 + 10, // 10% to 90% width
            y: -10,
            speed: 0.3 + Math.random() * 0.4 // Random speed
        };
        setItems(prev => [...prev, newItem]);
    };

    const handleCatch = (itemId: number, points: number) => {
        // Remove item
        setItems(prev => prev.filter(i => i.id !== itemId));
        // Add score
        setScore(prev => prev + points);
        scoreRef.current += points;

        // Optional: Play sound or haptic feedback here
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto h-[400px] sm:h-[500px] bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Header / Score */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20 bg-gradient-to-b from-black/50 to-transparent">
                <div>
                    <h3 className="text-white/80 text-sm tracking-wider font-light uppercase">Yorgancıoğlu</h3>
                    <p className="text-white font-bold text-xl">Mobilya Avı</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-yellow-400 font-mono text-3xl font-bold">{score}</span>
                    <span className="text-white/50 text-xs">PUAN</span>
                </div>
            </div>

            {/* Game Area */}
            <div ref={gameAreaRef} className="absolute inset-0 z-10 cursor-crosshair">
                <AnimatePresence>
                    {items.map(item => {
                        const furn = FURNITURE_TYPES[item.typeIdx];
                        const Icon = furn.icon;

                        return (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.5, y: -50, x: `${item.x}%` }}
                                animate={{ opacity: 1, scale: 1, y: `${item.y}%`, x: `${item.x}%` }}
                                exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                                transition={{ duration: 0 }} // Controlled by state updates mostly, but nice entry
                                className={`absolute p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 shadow-lg group transition-colors ${furn.color}`}
                                style={{
                                    // simpler approach: use inline top/left for performance in game loop
                                    top: `${item.y}%`,
                                    left: `${item.x}%`,
                                    transform: 'translate(-50%, -50%)',
                                    animation: 'none'
                                }}
                                onClick={(e) => {
                                    e.stopPropagation(); // prevent background clicks
                                    handleCatch(item.id, furn.score);
                                }}
                            >
                                <Icon size={32} className="drop-shadow-lg" />
                                <div className="absolute inset-0 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.button>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Start Overlay */}
            {!isPlaying && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center p-8"
                    >
                        <Armchair size={64} className="mx-auto text-yellow-500 mb-4" />
                        <h2 className="text-3xl font-bold text-white mb-2">Tasarımı Yakala</h2>
                        <p className="text-gray-300 mb-8 max-w-xs mx-auto">Yukarıdan süzülen ikonik tasarımları yakalayarak puan topla.</p>
                        <button
                            onClick={toggleGame}
                            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            OYUNA BAŞLA
                        </button>
                    </motion.div>
                </div>
            )}

            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
    );
}
