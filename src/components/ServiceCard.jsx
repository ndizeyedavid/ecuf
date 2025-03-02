export default function ServiceCard({ title, time, description }) {
    return (
        <div className="p-8 transition-shadow bg-white shadow-lg rounded-3xl hover:shadow-xl">
            <h3 className="mb-2 font-serif text-2xl text-amber-800">{title}</h3>
            <p className="mb-4 font-semibold text-amber-600">{time}</p>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}