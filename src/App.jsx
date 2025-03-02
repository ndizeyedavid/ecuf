import { useState, useEffect } from 'react';
import { SermonArchive } from './components/SermonArchive';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import HeroSection from './components/HeroSection';
import TeamSection from './components/TeamSection';
import ServiceSection from './components/ServiceSection';
import WelcomeSection from './components/WelcomeSection';
import GallerySection from './components/GallerySection';

export default function App() {


  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Meet Our Team Section */}
      <TeamSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Gallery Section */}
      <GallerySection />

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




