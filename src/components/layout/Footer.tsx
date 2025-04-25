import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-teal-600 to-teal-700 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Featured */}
          <div>
            <h3 className="font-bold mb-4">Featured</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Velocity</FooterLink>
              <FooterLink href="#">AeroFlex</FooterLink>
              <FooterLink href="#">Futurist</FooterLink>
              <FooterLink href="#">Grace</FooterLink>
            </ul>
          </div>

          {/* Shoes */}
          <div>
            <h3 className="font-bold mb-4">Shoes</h3>
            <ul className="space-y-2">
              <FooterLink href="#">All Shoes</FooterLink>
              <FooterLink href="#">Lifestyle Shoes</FooterLink>
              <FooterLink href="#">Running Shoes</FooterLink>
              <FooterLink href="#">Basketball Shoes</FooterLink>
            </ul>
          </div>

          {/* Clothing */}
          <div>
            <h3 className="font-bold mb-4">Clothing</h3>
            <ul className="space-y-2">
              <FooterLink href="#">All Clothing</FooterLink>
              <FooterLink href="#">Tops & Shirts</FooterLink>
              <FooterLink href="#">Shorts</FooterLink>
              <FooterLink href="#">Hoodies & Pullovers</FooterLink>
            </ul>
          </div>

          {/* Kids */}
          <div>
            <h3 className="font-bold mb-4">Kids</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Infant & Toddler Shoes</FooterLink>
              <FooterLink href="#">Kids' Shoes</FooterLink>
              <FooterLink href="#">Kids' Basketball Shoes</FooterLink>
              <FooterLink href="#">Kids' Running Shoes</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Gift Cards */}
          <div>
            <h3 className="font-bold mb-4">Gift Cards</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Purchase</FooterLink>
              <FooterLink href="#">Find a Store</FooterLink>
              <FooterLink href="#">Keni Journal</FooterLink>
              <FooterLink href="#">Send us Feedback</FooterLink>
              <FooterLink href="#">Gift Card Balance</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h3 className="font-bold mb-4">Get Help</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Order Status</FooterLink>
              <FooterLink href="#">Shipping and Delivery</FooterLink>
              <FooterLink href="#">Returns</FooterLink>
              <FooterLink href="#">Order Cancellation</FooterLink>
              <FooterLink href="#">Payment Options</FooterLink>
            </ul>
          </div>

          {/* About Keni */}
          <div>
            <h3 className="font-bold mb-4">About Keni</h3>
            <ul className="space-y-2">
              <FooterLink href="#">News</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Investors</FooterLink>
              <FooterLink href="#">Purpose</FooterLink>
              <FooterLink href="#">Sustainability</FooterLink>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-teal-500 pt-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-white hover:text-teal-300 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-teal-300 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-teal-300 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white hover:text-teal-300 transition">
              <Linkedin size={20} />
            </a>
          </div>
          <div className="text-sm text-teal-100">
            <span>
              © {new Date().getFullYear()} Keni, Inc. All Rights Reserved
            </span>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-teal-300 transition">
                Guides
              </a>
              <a href="#" className="hover:text-teal-300 transition">
                Terms of Sale
              </a>
              <a href="#" className="hover:text-teal-300 transition">
                Terms of Use
              </a>
              <a href="#" className="hover:text-teal-300 transition">
                Keni Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-teal-100 hover:text-white transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;
