
export default function WelcomeSection() {
    return (
        <section id="about" className="px-4 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="mb-6 font-serif text-4xl text-amber-800">
                            Our Community
                        </h2>
                        <p className="mb-6 text-gray-600">
                            We are a welcoming community of believers committed to sharing God's
                            love and grace with everyone. Our doors are always open to those
                            seeking spiritual growth and meaningful connections.
                        </p>
                        <button className="px-6 py-2 transition-colors border-2 rounded-full border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white">
                            Learn More
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-amber-100 rounded-2xl"></div>
                        <div className="aspect-square bg-amber-200 rounded-2xl"></div>
                        <div className="aspect-square bg-amber-300 rounded-2xl"></div>
                        <div className="aspect-square bg-amber-400 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
