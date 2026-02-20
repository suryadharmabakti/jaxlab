import React from 'react';
import './Testimonials.css';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Budi Santoso",
        role: "Pengusaha, Yogyakarta",
        quote: "Dulu sering merasa lelah dan kurang fokus. Setelah 3 bulan rutin konsumsi Ketone Immuno, energi saya lebih stabil sepanjang hari. Produktivitas kerja meningkat drastis!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Maya Putri",
        role: "Yoga Instructor, Bali",
        quote: "Jaroliva Olive Oil dengan rosemary jadi favorit saya untuk memasak. Aromanya harum dan rasa masakan jadi lebih premium. Manfaat kesehatannya luar biasa untuk gaya hidup sehat.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Dr. Rudi Hermawan",
        role: "Dokter Keluarga, Semarang",
        quote: "Saya merekomendasikan produk JaxLab kepada pasien yang ingin meningkatkan kesehatan secara alami. Kualitas bahan dan transparansi proses produksinya sangat bisa dipercaya.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header text-center">
                    <span className="tag-pill">Cerita dari Mereka</span>
                    <h2>Pengalaman yang Dirasakan,<br />Bukan Sekadar Dikatakan</h2>
                    <p className="subtitle-text">
                        Berbagai cerita dari mereka yang menjadikan JaxLab bagian dari kebiasaan sehat sehari-hari.
                    </p>
                </div>

                <div className="testimonial-grid">
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <div className="card-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                            <div className="card-content">
                                <h3>{item.name}</h3>
                                <div className="role">{item.role}</div>
                                <p className="quote">"{item.quote}"</p>
                                <button className="next-btn">Next &gt;</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
