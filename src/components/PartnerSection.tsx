import React from 'react';
import './PartnerSection.css';
import { Leaf, Award, ShieldCheck, Heart } from 'lucide-react';

const PartnerSection: React.FC = () => {
    return (
        <section className="partner-section">
            <div className="container">
                <div className="partner-content-wrapper">
                    <div className="partner-text">
                        <span className="subtitle">JaxLab Community Partner</span>
                        <h2>Bersama, Tumbuh<br />Sehat & Berkelanjutan</h2>
                        <p>
                            Bersama JaxLab, membangun kemitraan yang berfokus pada
                            kualitas, kepercayaan, dan nilai jangka panjang.
                        </p>
                        <button className="join-partner-btn">Join Healthy Partner</button>
                    </div>
                    <div className="partner-image">
                        <img
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                            alt="Partner"
                        />
                    </div>
                </div>

                <div className="features-grid">
                    <div className="feature-item">
                        <div className="icon-box"><Leaf /></div>
                        <h3>Minim Proses, Lebih Alami</h3>
                        <p>Diproses seminimal mungkin untuk menjaga nutrisi dan karakter alami.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon-box"><Award /></div>
                        <h3>Tanpa Tambahan Buatan</h3>
                        <p>Bebas pengawet sintetis, pewarna, dan perasa buatan berlebih.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon-box"><ShieldCheck /></div>
                        <h3>Sumber Terpilih & Terpercaya</h3>
                        <p>Menggunakan bahan baku berkualitas yang terkurasi.</p>
                    </div>
                    <div className="feature-item">
                        <div className="icon-box"><Heart /></div>
                        <h3>Untuk Kebiasaan Sehat Harian</h3>
                        <p>Mendukung gaya hidup sehat melalui pilihan sederhana setiap hari.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;
