import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
    return (
        <section id="services" className="px-4 py-20 bg-amber-50">
            <div className="mx-auto text-center max-w-7xl">
                <h2 className="mb-12 font-serif text-4xl text-amber-800">Weekly Services</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <ServiceCard title="Sunday Worship" time="9:00 AM & 11:00 AM" description="Join us for worship, prayer, and teaching" />

                    <ServiceCard title="Wednesday Bible Study" time="7:00 PM" description="Deep dive into God's word together" />

                    <ServiceCard title="Youth Group" time="Friday 6:30 PM" description="For students grades 6-12" />
                </div>
            </div>
        </section>
    )
}
