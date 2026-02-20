import React from 'react';
import './Footer.css';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="logo">
                        <img src="/logo-jaxlab.png" alt="JaxLab Logo" />
                        <img src="/123.png" alt="Badge" />
                    </div>
                    <div className="certifications">
                    </div>
                    <div className="social-links">
                        <Instagram size={20} />
                        <Facebook size={20} />
                        <Twitter size={20} />
                    </div>
                </div>

                <div className="footer-links">
                    <div className="link-column">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Tentang JaxLab</a></li>
                            <li><a href="#">Produk Kami</a></li>
                            <li><a href="#">Kontak Kami</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h4>Produk Kami</h4>
                        <ul>
                            <li><a href="#">Oils</a></li>
                            <li><a href="#">Fast Fasting</a></li>
                            <li><a href="#">Beverage</a></li>
                            <li><a href="#">Chocolate</a></li>
                            <li><a href="#">Ghee</a></li>
                            <li><a href="#">Skin & Body Care</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} JaxLab.</p>
            </div>
        </footer>
    );
};

export default Footer;
