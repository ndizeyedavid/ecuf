import { useState, useEffect } from 'react';
import { SermonArchive } from './components/SermonArchive';
import { TeamMember } from './components/TeamMember';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed z-50 w-full shadow-sm bg-white/90 backdrop-blur-sm">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex justify-between items-center h-[89px]">
            <div className="font-serif text-2xl text-amber-800">ECUF</div>

            <div className="hidden space-x-8 md:flex">
              <NavLink href="#" text="Home" />
              <NavLink href="#about" text="About" />
              <NavLink href="#services" text="Services" />
              <NavLink href="#sermons" text="Sermons" />
              <NavLink href="#connect" text="Connect" />
            </div>
            <button className="px-6 py-2 text-white transition-colors rounded-full bg-amber-700 hover:bg-amber-600">
              Subscribe
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 pt-20 bg-white md:hidden">
          <div className="flex flex-col items-center p-4 space-y-4">
            <MobileNavLink href="#" text="Home" />
            <MobileNavLink href="#about" text="About" />
            <MobileNavLink href="#services" text="Services" />
            <MobileNavLink href="#sermons" text="Sermons" />
            <MobileNavLink href="#connect" text="Connect" />
            <button className="w-full px-6 py-2 text-white transition-colors rounded-full bg-amber-700 hover:bg-amber-600">
              Give
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
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

      {/* Welcome Section */}
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

      {/* Meet Our Team Section */}
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

      {/* Services Section */}
      <section id="services" className="px-4 py-20 bg-amber-50">
        <div className="mx-auto text-center max-w-7xl">
          <h2 className="mb-12 font-serif text-4xl text-amber-800">Weekly Services</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <ServiceCard
              title="Sunday Worship"
              time="9:00 AM & 11:00 AM"
              description="Join us for worship, prayer, and teaching"
            />

            <ServiceCard
              title="Wednesday Bible Study"
              time="7:00 PM"
              description="Deep dive into God's word together"
            />

            <ServiceCard
              title="Youth Group"
              time="Friday 6:30 PM"
              description="For students grades 6-12"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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

      {/* Sermons Archive Section */}
      <section id="sermons" className="px-4 py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 font-serif text-4xl text-center text-amber-800">
            Sermon Archive
          </h2>
          <SermonArchive />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-amber-900 text-amber-100">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-serif text-xl">Grace Community</h3>
              <p className="text-sm">
                123 Faith Street
                <br />
                Cityville, ST 12345
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Podcast
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Subscribe</h4>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-white rounded-full bg-amber-800 placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, text }) {
  return (
    <a href={href} className="text-gray-600 transition-colors hover:text-amber-700">
      {text}
    </a>
  );
}

function MobileNavLink({ href, text }) {
  return (
    <a
      href={href}
      className="w-full py-3 text-center text-gray-600 transition-colors hover:text-amber-700"
    >
      {text}
    </a>
  );
}

function ServiceCard({
  title,
  time,
  description,
}) {
  return (
    <div className="p-8 transition-shadow bg-white shadow-lg rounded-3xl hover:shadow-xl">
      <h3 className="mb-2 font-serif text-2xl text-amber-800">{title}</h3>
      <p className="mb-4 font-semibold text-amber-600">{time}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
