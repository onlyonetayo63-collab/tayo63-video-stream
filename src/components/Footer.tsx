import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-black text-red-600 tracking-tighter mb-4">
              TAYO63MEDIA
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your ultimate destination for movies, films, cartoons, and original video content. Premium streaming for everyone, everywhere.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Latest Releases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trending Movies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kids & Cartoons</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentaries</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Compliance</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AdSense Disclosure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Copyright (DMCA)</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to get updates on new content.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-red-600 transition-colors"
              />
              <button className="bg-red-600 hover:bg-red-700 p-2 rounded transition-colors text-white">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© 2024 Tayo63media. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Made with ❤️ for movie lovers</span>
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;