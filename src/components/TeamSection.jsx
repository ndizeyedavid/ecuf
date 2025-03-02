import TeamMember from "./TeamMember";

export default function TeamSection() {
    return (
        <section className="px-4 py-20 bg-amber-50">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-6 font-serif text-4xl text-center text-amber-800">
                    Meet Our Team
                </h2>
                <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
                    Our dedicated team of pastors and staff are here to serve, guide, and
                    support our community in their spiritual journey.
                </p>
                <div className="grid items-center justify-center gap-8 md:grid-cols-2">
                    <TeamMember
                        name="Pastor Kirabo Doreen"
                        role="Assistant Pastor"
                        description="Serving our community with wisdom and compassion for over 15 years."
                        image="/assets/slideshow/1.jpeg"
                        email="sarah.johnson@gracecommunity.church"
                        schedule="Available Tuesdays and Thursdays"
                        bio="Pastor Sarah has been leading our congregation for over 15 years with a focus on building a strong, inclusive community. She holds a Master of Divinity from Fuller Theological Seminary and is passionate about making God's word accessible to everyone."
                    />

                    <TeamMember
                        name="Pastor Niyigena Manasse"
                        role="Pastor"
                        description="Passionate about guiding and mentoring our young people."
                        image="/assets/slideshow/1.jpeg"
                        email="michael.chen@gracecommunity.church"
                        schedule="Available Weekday Evenings"
                        bio="Pastor Michael leads our youth ministry with energy and dedication. He has a background in counseling and creates engaging programs that help young people grow in their faith while having fun."
                    />
                </div>
                <div className="mt-12 text-center">
                    <button className="px-8 py-3 transition-colors border-2 rounded-full border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white">
                        Meet the Full Team
                    </button>
                </div>
            </div>
        </section>
    )
}
