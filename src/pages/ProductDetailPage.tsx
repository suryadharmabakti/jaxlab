import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ProductDetailPage.css';
import { Star } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

interface ProductDetail {
    id: number;
    name: string;
    subtitle: string;
    price: number;
    rating: number;
    reviewCount: number;
    stockStatus: string;
    description: string;
    category: string;
    specs: { label: string; value: string }[];
    images: string[];
}

const productsDetailData: ProductDetail[] = [
    {
        id: 1,
        name: "Maknum Saber",
        subtitle: "Maknum Saber",
        price: 0,
        rating: 5,
        reviewCount: 89,
        stockStatus: "Tersedia",
        description: "Maknum Saber adalah suplemen multivitamin yang dirancang untuk mendukung kesehatan tubuh secara menyeluruh. Dengan formula yang lengkap dan seimbang, produk ini membantu memenuhi kebutuhan vitamin dan mineral harian Anda.",
        category: "Multivitamin",
        specs: [
            { label: "Kandungan", value: "Vitamin A, B, C, D, E, dan Mineral" },
            { label: "Isi", value: "30 tablet" },
            { label: "Dosis", value: "1 tablet per hari" },
            { label: "Manfaat", value: "Meningkatkan daya tahan tubuh dan energi" },
            { label: "Kemasan", value: "Blister pack" }
        ],
        images: [
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        ]
    },
    {
        id: 2,
        name: "Aliquam provident p",
        subtitle: "Enim saepe incididun",
        price: 12000,
        rating: 4,
        reviewCount: 45,
        stockStatus: "Tersedia",
        description: "Produk essential oil berkualitas tinggi dengan aroma yang menenangkan dan manfaat terapeutik.",
        category: "Essential Oil",
        specs: [
            { label: "Volume", value: "10ml" },
            { label: "Aroma", value: "Lavender" },
            { label: "Manfaat", value: "Relaksasi dan aromaterapi" },
            { label: "Kemasan", value: "Botol kaca gelap" }
        ],
        images: [
            "https://images.unsplash.com/photo-1608571423902-eed4a5e84d85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1608571423902-eed4a5e84d85?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        ]
    },
    {
        id: 3,
        name: "Premium Laptop (Mock)",
        subtitle: "High performance device",
        price: 15000000,
        rating: 5,
        reviewCount: 125,
        stockStatus: "Tersedia",
        description: "Laptop premium dengan performa tinggi yang dilengkapi dengan prosesor mumpuni dan grafis canggih, cocok untuk produktivitas dan gaming.",
        category: "Laptop",
        specs: [
            { label: "Prosesor", value: "Intel Core i7" },
            { label: "RAM", value: "16GB DDR4" },
            { label: "Penyimpanan", value: "512GB SSD" },
            { label: "Grafis", value: "NVIDIA GeForce GTX" },
            { label: "Layar", value: '15.6" FHD' }
        ],
        images: [
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1587033411391-5d9e659ce25f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        ]
    },
    {
        id: 4,
        name: "Organic Honey",
        subtitle: "Pure organic honey",
        price: 75000,
        rating: 5,
        reviewCount: 203,
        stockStatus: "Tersedia",
        description: "Madu organik murni yang dipanen langsung dari sarang lebah alami. Kaya akan nutrisi dan enzim alami yang baik untuk kesehatan.",
        category: "Healthy Food",
        specs: [
            { label: "Berat", value: "500 gram" },
            { label: "Asal", value: "Madu organik lokal" },
            { label: "Manfaat", value: "Meningkatkan imunitas dan energi" },
            { label: "Kemasan", value: "Botol kaca" },
            { label: "Kadaluarsa", value: "2 tahun" }
        ],
        images: [
            "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        ]
    },
    {
        id: 5,
        name: "Vitamin C Boost",
        subtitle: "Immune system support",
        price: 45000,
        rating: 4,
        reviewCount: 156,
        stockStatus: "Tersedia",
        description: "Suplemen Vitamin C yang membantu meningkatkan sistem kekebalan tubuh dan melindungi dari radikal bebas.",
        category: "Multivitamin",
        specs: [
            { label: "Kandungan", value: "1000mg Vitamin C per tablet" },
            { label: "Isi", value: "30 tablet" },
            { label: "Dosis", value: "1 tablet per hari" },
            { label: "Manfaat", value: "Meningkatkan imunitas dan antioksidan" },
            { label: "Kemasan", value: "Botol" }
        ],
        images: [
            "https://images.unsplash.com/photo-1624638760086-44445672803b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1624638760086-44445672803b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
        ]
    }
];

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);

    const productId = id ? parseInt(id, 10) : null;
    const product = productId ? productsDetailData.find(p => p.id === productId) : null;

    if (!product) {
        return (
            <div className="product-detail-page">
                <Header />
                <main className="detail-main">
                    <div className="container detail-container">
                        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                            <h2>Produk tidak ditemukan</h2>
                            <p>Produk yang Anda cari tidak tersedia.</p>
                            <button onClick={() => navigate('/products')} style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#2E7D32', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                                Kembali ke Produk
                            </button>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="product-detail-page">
            <Header />

            <main className="detail-main">
                <div className="container detail-container">
                    {/* Breadcrumbs */}
                    <div className="breadcrumbs">
                        <Link to="/">Home</Link> &gt;
                        <Link to="/products">Produk</Link> &gt;
                        <span>{product.category}</span>
                    </div>

                    <div className="product-layout">
                        {/* Gallery Section */}
                        <div className="product-gallery">
                            <div className="thumbnail-list">
                                {product.images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`thumb-item ${selectedImage === index ? 'active' : ''}`}
                                        onMouseEnter={() => setSelectedImage(index)} // Changed to hover for faster preview, match common ecommerce
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        <img src={img} alt={`Thumbnail ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <div className="main-image">
                                <img src={product.images[selectedImage]} alt={product.name} />
                            </div>
                        </div>

                        {/* Product Info Section - Right Side */}
                        <div className="product-details-info">
                            <h1 className="product-title">{product.name}</h1>
                            <p className="product-subtitle">{product.subtitle}</p>

                            <div className="rating-row">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill="#FFC107" color="#FFC107" />
                                    ))}
                                </div>
                                <span className="review-count">{product.reviewCount} ulasan</span>
                            </div>

                            <div className="price-row">
                                <h2>Rp {product.price.toLocaleString('id-ID')}</h2>
                            </div>

                            <div className="stock-row">
                                <span style={{ color: 'black', fontWeight: 'bold' }}>Stok: </span>
                                <span className="stock-status" style={{ color: 'green' }}>{product.stockStatus}</span>
                            </div>

                            <div className="action-buttons">
                                <button className="btn-cart" style={{ backgroundColor: '#1f4d2b', color: 'white' }}>Tambah ke Keranjang</button>
                                <button className="btn-buy" style={{ backgroundColor: '#1f4d2b', color: '#white' }}>Beli Sekarang</button>
                            </div>
                        </div>
                    </div>

                    {/* New Layout: Description & Specs stacked below per screenshot */}
                    <div className="product-description-block">
                        <div className="desc-section">
                            <h3>Deskripsi Produk</h3>
                            <p>{product.description}</p>
                        </div>
                        <div className="specs-section">
                            <h3>Spesifikasi:</h3>
                            <ul className="specs-list">
                                {product.specs.map((spec, index) => (
                                    <li key={index}>• <strong style={{ paddingLeft: '5px' }}>{spec.label} : </strong> {spec.value}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
