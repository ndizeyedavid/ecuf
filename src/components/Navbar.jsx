import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        {
            text: "Home",
            to: "/"
        },
        {
            text: "About",
            to: "#about"
        },
        {
            text: "Services",
            to: "#services"
        },
        {
            text: "Sermons",
            to: "#sermons"
        },
        {
            text: "connect",
            to: "#connect"
        },
    ]

    return (
        <>
            <nav className="fixed z-50 w-full shadow-sm bg-white/90 backdrop-blur-sm">
                <div className="px-4 mx-auto max-w-7xl">
                    <div className="flex justify-between items-center h-[89px]">
                        <div className="font-serif text-2xl text-amber-800">ECUF</div>

                        <div className="hidden space-x-8 md:flex">
                            {links.map((data, index) => (
                                <a key={index} href={data.to} className="text-gray-600 transition-colors hover:text-amber-700">{data.text}</a>
                            ))}
                        </div>
                        <button className="px-6 py-2 text-white transition-colors rounded-full bg-amber-700 hover:bg-amber-600">
                            Subscribe
                        </button>
                        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </  svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 pt-20 bg-white md:hidden">
                    <div className="flex flex-col items-center p-4 space-y-4">
                        {/* className="w-full py-3 text-center text-gray-600 transition-colors hover:text-amber-700" */}

                        {links.map((data, index) => (
                            <a key={index} href={data.to} className="w-full py-3 text-center text-gray-600 transition-colors hover:text-amber-700">{data.text}</a>
                        ))}
                        <button className="w-full px-6 py-2 text-white transition-colors rounded-full bg-amber-700 hover:bg-amber-600">
                            Give
                        </button>
                    </div>
                </div>
            )}
        </>
    )

}
