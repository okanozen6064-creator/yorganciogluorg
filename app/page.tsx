"use client";

import React from 'react';

const Page = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4">
            <div className="relative text-center">
                {/* Main Text */}
                <h1 className="relative z-10 text-4xl font-black tracking-tight text-black sm:text-6xl md:text-8xl break-words">
                    YAPIM
                    <br />
                    AŞAMASINDAYIZ
                </h1>

                {/* Beautiful Yellow Stripe Element */}
                {/* Placing it simply below or behind to look like a highlighter or structural element */}
                <div className="mx-auto mt-6 h-4 w-32 -skew-x-12 bg-yellow-400 sm:mt-8 sm:h-6 sm:w-48" />
            </div>
        </div>
    );
};

export default Page;
