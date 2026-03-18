import { Link } from "react-router-dom";
import { Droplets, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="h-7 w-7 text-secondary" />
              <span className="font-display font-bold text-xl">Ravinder Plumbing</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted plumbing partner in Miyapur, Hyderabad. We deliver fast, reliable, and affordable plumbing solutions for homes and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                Miyapur, Hyderabad, Telangana, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-secondary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href="mailto:info@ravinderplumbing.com" className="hover:text-secondary transition-colors">info@ravinderplumbing.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-sm text-background/50">
          © {new Date().getFullYear()} Ravinder Plumbing Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
