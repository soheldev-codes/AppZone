import React from "react";
import {
  FaReact,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Link
                className="font-bold text-lg skeleton px-4 py-2 bg-transparent"
                to="/"
              >
                APP<span className="gradient-text">ZONE</span>
              </Link>
            </div>
            <p className="text-gray-400 max-w-xs mt-2">
              Discover trending apps, track downloads & reviews, and manage
              installations easily.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div>
              <h2 className="font-semibold mb-2">Quick Links</h2>
              <ul className="space-y-1 text-center md:text-left">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/apps" className="hover:text-white transition">
                    Apps
                  </a>
                </li>
                <li>
                  <a
                    href="/installation"
                    className="hover:text-white transition"
                  >
                    Installation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-semibold mb-2 text-center md:text-left">
              Follow Us
            </h2>
            <div className="flex gap-4 justify-center md:justify-start mt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-6"></div>

        <div className="text-center text-gray-500 text-sm">
          &copy; 2026 appZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
