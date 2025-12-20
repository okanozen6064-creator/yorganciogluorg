"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sofa, Armchair, Lamp, Table, Bed, Check } from 'lucide-react';

// Game Stages
const STAGES = [
    {
        id: 'sofa',
        question: 'Salonun için bir koltuk seç:',
        options: [
            { id: 'modern', label: 'Modern Minimal', icon: Sofa, style: 'bg-zinc-800 text-white' },
            { id: 'classic', label: 'Klasik Chesterfield', icon: Sofa, style: 'bg-amber-900 text-amber-100' },
            { id: 'avantgarde', label: 'Avangard Lüks', icon: Sofa, style: 'bg-purple-900 text-purple-100' },
        ]
    },
    {
        id: 'table',
        question: 'Buna en uygun masa hangisi?',
        options: [
            { id: 'glass', label: 'Cam & Metal', icon: Table, style: 'bg-cyan-900/50 text-cyan-100' },
            { id: 'wood', label: 'Masif Ahşap', icon: Table, style: 'bg-orange-950 text-orange-200' },
            { id: 'marble', label: 'Siyah Mermer', icon: Table, style: 'bg-slate-900 text-slate-200' },
        ]
    },
    {
        id: 'lighting',
        question: 'Son dokunuş: Aydınlatma',
        options: [
            { id: 'minimal', label: 'Lineer LED', icon: Lamp, style: 'bg-neutral-800 text-yellow-100' },
            { id: 'crystal', label: 'Kristal Avize', icon: Lamp, style: 'bg-yellow-950/50 text-yellow-200' },
            { id: 'industrial', label: 'Endüstriyel Sarkıt', icon: Lamp, style: 'bg-stone-800 text-orange-100' },
        ]
    }
];

// Result mappings based on majority selection roughly, or just simple random flavor text for fun
const RESULTS = {
    modern: { title: "Modern Minimalist", desc: "Sadelikten yana, ferah ve işlevsel bir zevkiniz var.", color: "text-blue-400" },
    classic: { title: "Zamansız Klasik", desc: "Geçmişin asaletini günümüz konforuyla birleştiriyorsunuz.", color: "text-amber-500" },
    avantgarde: { title: "Avangard Lüks", desc: "Göz alıcı detaylar ve cesur tasarımlar tam size göre.", color: "text-purple-400" },
    mixed: { title: "Eklektik Vizyoner", desc: "Farklı tarzları cesurca harmanlayan özgün bir stiliniz var.", color: "text-emerald-400" }
};

export default function RoomDesignerGame() {
    const [currentStage, setCurrentStage] = useState(0);
    const [selections, setSelections] = useState<any[]>([]);
    const [isFinished, setIsFinished] = useState(false);
    const [started, setStarted] = useState(false);

    const handleSelect = (option: any) => {
        setSelections([...selections, { stage: STAGES[currentStage].id, ...option }]);

        if (currentStage < STAGES.length - 1) {
            setTimeout(() => setCurrentStage(prev => prev + 1), 400); // Small delay for visual feedback
        } else {
            setTimeout(() => setIsFinished(true), 400);
        }
    };

    const getResult = () => {
        // Simple logic: determine dominant style or default to mixed
        // Since we didn't strictly tag generic options with style IDs in a rigorous way for this demo,
        // let's simulate a sophisticated analysis result.
        // In a real app, options would have 'style' tags. 
        // For this demo, we'll randomize slightly or use the first choice as the anchor.

        if (selections.length === 0) return RESULTS.mixed;

        // Just for fun logic:
        const firstChoice = selections[0].id;
        if (firstChoice.includes('modern') || firstChoice.includes('minimal') || firstChoice.includes('glass')) return RESULTS.modern;
        if (firstChoice.includes('classic') || firstChoice.includes('wood') || firstChoice.includes('crystal')) return RESULTS.classic;
        if (firstChoice.includes('avantgarde') || firstChoice.includes('marble')) return RESULTS.avantgarde;

        return RESULTS.mixed;
    };

    const restart = () => {
        setSelections([]);
        setCurrentStage(0);
        setIsFinished(false);
        setStarted(false);
    };

    if (!started) {
        return (
            <div className="w-full max-w-2xl mx-auto h-[400px] flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 text-center shadow-2xl relative overflow-hidden group">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10">
                    <div className="bg-gradient-to-br from-yellow-400 to-amber-600 p-4 rounded-2xl inline-block mb-6 shadow-lg shadow-orange-500/20">
                        <Armchair size={48} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">İçindeki Tasarımcıyı Keşfet</h2>
                    <p className="text-gray-300 mb-8 max-w-sm mx-auto leading-relaxed">
                        3 adımda hayalindeki odayı tasarla, senin stilini analiz edelim.
                    </p>
                    <button
                        onClick={() => setStarted(true)}
                        className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                    >
                        TASARIMA BAŞLA
                    </button>
                </div>
            </div>
        );
    }

    if (isFinished) {
        const result = getResult();
        return (
            <div className="w-full max-w-2xl mx-auto h-[400px] flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 text-center shadow-2xl relative">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10"
                >
                    <div className="mb-2 text-sm text-gray-400 tracking-widest uppercase">SONUÇ</div>
                    <h2 className={`text-4xl font-bold mb-4 ${result.color} drop-shadow-md`}>{result.title}</h2>
                    <p className="text-gray-200 text-lg mb-8 max-w-md mx-auto">{result.desc}</p>

                    <div className="flex justify-center gap-4">
                        {/* Show selected icons */}
                        {selections.map((sel, idx) => (
                            <div key={idx} className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                <sel.icon size={20} className="text-white/80" />
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <button
                            onClick={restart}
                            className="text-sm font-semibold text-gray-400 hover:text-white transition-colors underline decoration-dotted underline-offset-4"
                        >
                            Tekrar Dene
                        </button>
                    </div>
                </motion.div>

                {/* Confetti effect or glow could go here */}
            </div>
        );
    }

    const stage = STAGES[currentStage];

    return (
        <div className="w-full max-w-2xl mx-auto min-h-[400px] bg-black/40 backdrop-blur-lg rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col">

            {/* Progress Bar */}
            <div className="flex gap-2 mb-8">
                {STAGES.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1 flex-grow rounded-full transition-all duration-500 ${idx <= currentStage ? 'bg-yellow-500' : 'bg-white/10'
                            }`}
                    />
                ))}
            </div>

            <div className="flex-grow flex flex-col justify-center">
                <motion.div
                    key={stage.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h3 className="text-2xl sm:text-3xl font-light text-white mb-8 text-center">
                        {stage.question}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {stage.options.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleSelect(option)}
                                className={`group relative h-32 sm:h-40 rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-3 overflow-hidden ${option.style}`}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="relative z-10 p-3 rounded-full bg-white/10 backdrop-blur-md">
                                    <option.icon size={32} />
                                </div>
                                <span className="relative z-10 text-sm font-medium">{option.label}</span>

                                {/* Selection Indicator */}
                                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
