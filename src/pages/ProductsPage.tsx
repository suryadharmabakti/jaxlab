import React, { useState } from 'react';
import '../components/ProductSection.css'; // Will use same base styles or new ones
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
}

const productsData: Product[] = [
    {
        id: 1,
        name: "Maknum Saber",
        description: "Maknum Saber",
        price: 0,
        category: "Multivitamin",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Aliquam provident p",
        description: "Enim saepe incididun",
        price: 12000,
        category: "Essential Oil",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5e84d85?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Premium Laptop (Mock)",
        description: "High performance device",
        price: 15000000,
        category: "Laptop",
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "Organic Honey",
        description: "Pure organic honey",
        price: 75000,
        category: "Healthy Food",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        name: "Vitamin C Boost",
        description: "Immune system support",
        price: 45000,
        category: "Multivitamin",
        image: "https://images.unsplash.com/photo-1624638760086-44445672803b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
];

const categories = ["All", "Laptop", "PC", "SmartPhone", "Aksesoris", "Lainnya"];

const ProductsPage: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && (selectedCategory === 'All' || matchesCategory);
    });

    return (
        <div className="products-page">
            <Header /> {/* Reusing Header */}
            <main style={{ paddingTop: '2rem' }}>
                <section className="product-section">
                    <div className="container">
                        <div className="section-header text-center">
                            <h2 className="title-green">Good Food Starts Here</h2>
                            <p className="subtitle">Pilihan produk alami untuk mendukung gaya hidup sehat Anda.</p>
                        </div>

                        {/* Search Bar */}
                        <div className="search-filter-container">
                            <div className="search-input-box">
                                <input
                                    type="text"
                                    placeholder="Cari produk..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Search className="search-icon-input" size={18} />
                            </div>

                            {/* Category Filter Pills */}
                            <div className="filter-pills">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="product-grid">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="product-card">
                                    <div className="product-image-wrapper">
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className="product-info">
                                        <h3>{product.name}</h3>
                                        <p className="product-desc">{product.description}</p>
                                        <p className="product-price">
                                            {product.price === 0 ? "Rp 0" : `Rp ${product.price.toLocaleString('id-ID')}`}
                                        </p>
                                        <button className="details-btn-outlined" onClick={() => navigate(`/products/${product.id}`)}>Details</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pagination-container text-center">
                            <button className={`page-btn ${currentPage === 1 ? 'active' : ''}`} onClick={() => setCurrentPage(1)}>1</button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer /> {/* Reusing Footer */}
        </div>
    );
};

export default ProductsPage;
