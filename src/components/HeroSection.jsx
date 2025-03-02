import { useEffect, useState } from "react";

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/assets/slideshow/1.jpeg', title: 'Sunday Service',
        },
        {
            image: '/assets/slideshow/2.png', title: 'Community',
        },
        { image: '/assets/slideshow/3.jpeg', title: 'Worship' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="absolute inset-0 bg-center bg-cover"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                </div>
            ))}
            <div className="relative flex items-center justify-center h-full px-4 text-center text-white">
                <div className="max-w-3xl">
                    <h1 className="mb-6 font-serif text-5xl md:text-7xl">Welcome Home</h1>
                    <p className="mb-8 text-xl md:text-2xl">
                        Join us this Sunday for worship and fellowship
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <button className="px-8 py-3 text-white transition-colors rounded-full bg-amber-700 hover:bg-amber-600">
                            Plan Your Visit
                        </button>
                        <button className="px-8 py-3 transition-colors bg-white rounded-full text-amber-800 hover:bg-amber-50">
                            Watch Online
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
