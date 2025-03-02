
export default function GallerySection() {
    return (
        <section className="px-4 py-20 bg-white">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-6 font-serif text-4xl text-center text-amber-800">
                    Life at Grace Community
                </h2>
                <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
                    Experience the joy and fellowship of our community through these moments
                    we've shared together.
                </p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="relative overflow-hidden rounded-lg group aspect-square">
                        <img
                            src="/assets/slideshow/1.jpeg"
                            alt="Worship service"
                            className="object-cover w-full h-full transition-transform duration-300 rounded-lg group-hover:scale-105"
                        />

                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 rounded-lg opacity-0 bg-black/60 group-hover:opacity-100">
                            <p className="px-4 text-center text-white">
                                Sunday Worship Service
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg group aspect-square md:row-span-2 md:col-span-2">
                        <img
                            src="/assets/slideshow/1.jpeg"
                            alt="Community gathering"
                            className="object-cover w-full h-full transition-transform duration-300 rounded-lg group-hover:scale-105"
                        />

                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 rounded-lg opacity-0 bg-black/60 group-hover:opacity-100">
                            <p className="px-4 text-center text-white">
                                Annual Community Gathering
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg group aspect-square">
                        <img
                            src="/assets/slideshow/1.jpeg"
                            alt="Youth group"
                            className="object-cover w-full h-full transition-transform duration-300 rounded-lg group-hover:scale-105"
                        />

                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 rounded-lg opacity-0 bg-black/60 group-hover:opacity-100">
                            <p className="px-4 text-center text-white">
                                Youth Group Activities
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg group aspect-square">
                        <img
                            src="/assets/slideshow/1.jpeg"
                            alt="Bible study"
                            className="object-cover w-full h-full transition-transform duration-300 rounded-lg group-hover:scale-105"
                        />

                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 rounded-lg opacity-0 bg-black/60 group-hover:opacity-100">
                            <p className="px-4 text-center text-white">
                                Small Group Bible Study
                            </p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg group aspect-square">
                        <img
                            src="/assets/slideshow/1.jpeg"
                            alt="Children's ministry"
                            className="object-cover w-full h-full transition-transform duration-300 rounded-lg group-hover:scale-105"
                        />

                        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 rounded-lg opacity-0 bg-black/60 group-hover:opacity-100">
                            <p className="px-4 text-center text-white">Children's Ministry</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <button className="px-8 py-3 transition-colors border-2 rounded-full border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white">
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    )
}
