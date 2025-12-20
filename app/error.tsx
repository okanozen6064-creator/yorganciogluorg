
'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafaf9] px-4 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4 font-medium">
                Bir Hata Oluştu
            </h2>
            <p className="font-sans text-stone-600 max-w-md mb-8 text-lg leading-relaxed">
                Beklenmedik bir sorunla karşılaştık. Lütfen sayfayı yenilemeyi deneyin.
            </p>
            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="inline-block bg-stone-900 text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-stone-800 transition-colors duration-300"
                >
                    Tekrar Dene
                </button>
                <a
                    href="/"
                    className="inline-block border border-stone-300 text-stone-900 px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-stone-100 transition-colors duration-300"
                >
                    Ana Sayfa
                </a>
            </div>
        </div>
    )
}
