import { useState } from 'react';

export default function TeamMember({ name, role, description, image, email, schedule, bio, }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScheduling, setIsScheduling] = useState(false);

    return (
        <>
            <div className="text-center cursor-pointer group" onClick={() => setIsModalOpen(true)}>
                <div className="w-48 h-48 mx-auto mb-4 overflow-hidden transition-transform transform rounded-full bg-amber-200 group-hover:scale-105">
                    <img
                        src={image}
                        alt={name}
                        className="object-cover w-full h-full transition-transform group-hover:scale-110"
                    />
                </div>
                <h3 className="mb-2 font-serif text-2xl transition-colors text-amber-800 group-hover:text-amber-600">
                    {name}
                </h3>
                <p className="mb-2 font-semibold text-amber-600">{role}</p>
                <p className="text-gray-600 transition-colors group-hover:text-gray-800">
                    {description}
                </p>
                <div className="mt-4 transition-opacity opacity-0 group-hover:opacity-100">
                    <button
                        className="font-medium text-amber-700 hover:text-amber-600"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsScheduling(true);
                        }}
                    >
                        Schedule Meeting →
                    </button>
                </div>
            </div>

            {/* Detailed Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="w-full max-w-2xl p-8 bg-white rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <img
                                    src={image}
                                    alt={name}
                                    className="object-cover w-20 h-20 rounded-full"
                                />

                                <div>
                                    <h3 className="font-serif text-2xl text-amber-800">{name}</h3>
                                    <p className="text-amber-600">{role}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="prose max-w-none">
                            <p className="mb-4 text-gray-600">{bio || description}</p>
                            {email && (
                                <div className="flex items-center gap-2 mb-2 text-gray-600">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <a href={`mailto:${email}`} className="hover:text-amber-700">
                                        {email}
                                    </a>
                                </div>
                            )}
                            {schedule && (
                                <div className="flex items-center gap-2 text-gray-600">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span>{schedule}</span>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-4 mt-8">
                            <button
                                onClick={() => {
                                    setIsScheduling(true);
                                    setIsModalOpen(false);
                                }}
                                className="px-6 py-2 text-white transition-colors rounded-full bg-amber-700 hover:bg-amber-600"
                            >
                                Schedule Meeting
                            </button>
                            <button
                                onClick={() => (window.location.href = `mailto:${email}`)}
                                className="px-6 py-2 transition-colors border-2 rounded-full border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white"
                            >
                                Send Email
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Scheduling Modal */}
            {isScheduling && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                    onClick={() => setIsScheduling(false)}
                >
                    <div
                        className="w-full max-w-md p-8 bg-white rounded-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start justify-between mb-6">
                            <h3 className="font-serif text-xl text-amber-800">
                                Schedule with {name}
                            </h3>
                            <button
                                onClick={() => setIsScheduling(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-2 text-gray-700">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-700">Your Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-700">Preferred Date</label>
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-gray-700">Message</label>
                                <textarea
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    rows={4}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-2 text-white transition-colors rounded-full bg-amber-700 hover:bg-amber-600"
                            >
                                Request Meeting
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
