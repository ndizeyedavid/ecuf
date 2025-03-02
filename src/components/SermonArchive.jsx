
import { useState } from 'react';

const SAMPLE_SERMONS = [
    {
        id: '1',
        title: 'Walking in Faith',
        speaker: 'Pastor John Smith',
        date: '2024-01-14',
        series: 'Faith Foundations',
        topics: ['Faith', 'Spiritual Growth'],
        audioUrl: '/sermons/audio1.mp3',
        videoUrl: '/sermons/video1.mp4',
        transcriptUrl: '/sermons/transcript1.pdf',
        description: 'Exploring the fundamentals of walking by faith in our daily lives.',
        isFavorite: false,
    },
    {
        id: '2',
        title: 'The Power of Prayer',
        speaker: 'Pastor Sarah Johnson',
        date: '2024-01-07',
        series: 'Prayer Life',
        topics: ['Prayer', 'Spiritual Disciplines'],
        audioUrl: '/sermons/audio2.mp3',
        videoUrl: '/sermons/video2.mp4',
        transcriptUrl: '/sermons/transcript2.pdf',
        description: 'Understanding the transformative power of prayer in our spiritual journey.',
        isFavorite: false,
    },
    // Add more sample sermons as needed
];

export function SermonArchive() {
    const [sermons, setSermons] = useState(SAMPLE_SERMONS);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpeaker, setSelectedSpeaker] = useState('');
    const [selectedSeries, setSelectedSeries] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');

    const speakers = [...new Set(SAMPLE_SERMONS.map((sermon) => sermon.speaker))];
    const series = [...new Set(SAMPLE_SERMONS.map((sermon) => sermon.series))];
    const topics = [...new Set(SAMPLE_SERMONS.flatMap((sermon) => sermon.topics))];

    const filteredSermons = sermons.filter((sermon) => {
        const matchesSearch =
            sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSpeaker = !selectedSpeaker || sermon.speaker === selectedSpeaker;
        const matchesSeries = !selectedSeries || sermon.series === selectedSeries;
        const matchesTopic = !selectedTopic || sermon.topics.includes(selectedTopic);

        return matchesSearch && matchesSpeaker && matchesSeries && matchesTopic;
    });

    const toggleFavorite = (id) => {
        setSermons(
            sermons.map((sermon) =>
                sermon.id === id ? { ...sermon, isFavorite: !sermon.isFavorite } : sermon,
            ),
        );
    };

    return (
        <div className="w-full">
            {/* Search and Filters */}
            <div className="mb-8 space-y-4">
                <input
                    type="text"
                    placeholder="Search sermons..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        value={selectedSpeaker}
                        onChange={(e) => setSelectedSpeaker(e.target.value)}
                    >
                        <option value="">All Speakers</option>
                        {speakers.map((speaker) => (
                            <option key={speaker} value={speaker}>
                                {speaker}
                            </option>
                        ))}
                    </select>
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        value={selectedSeries}
                        onChange={(e) => setSelectedSeries(e.target.value)}
                    >
                        <option value="">All Series</option>
                        {series.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                    <select
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
                    >
                        <option value="">All Topics</option>
                        {topics.map((topic) => (
                            <option key={topic} value={topic}>
                                {topic}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Sermons Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredSermons.map((sermon) => (
                    <div key={sermon.id} className="p-6 space-y-4 bg-white shadow-lg rounded-xl">
                        <div className="flex items-start justify-between">
                            <h3 className="text-xl font-semibold text-amber-800">{sermon.title}</h3>
                            <button
                                onClick={() => toggleFavorite(sermon.id)}
                                className={`text-2xl ${sermon.isFavorite ? 'text-amber-500' : 'text-gray-300'}`}
                            >
                                ★
                            </button>
                        </div>
                        <p className="text-sm text-gray-600">{sermon.description}</p>
                        <div className="text-sm text-gray-500">
                            <p>{sermon.speaker}</p>
                            <p>{new Date(sermon.date).toLocaleDateString()}</p>
                            <p>{sermon.series}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {sermon.topics.map((topic) => (
                                <span
                                    key={topic}
                                    className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button className="flex-1 px-4 py-2 text-white transition-colors rounded-lg bg-amber-700 hover:bg-amber-600">
                                Play
                            </button>
                            <button className="px-4 py-2 transition-colors border rounded-lg text-amber-700 border-amber-700 hover:bg-amber-50">
                                Download
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
