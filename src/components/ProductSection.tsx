import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductSection.css';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Maknum Saber",
        description: "Maknum Saber",
        price: 0,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Aliquam provident p",
        description: "Enim saepe incididun",
        price: 12000,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5e84d85?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Aliquam provident p",
        description: "Enim saepe incididun",
        price: 12000,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
];

const ProductSection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="product-section" id="products"> {/* Keep ID for scrolling if needed from home nav */}
            <div className="container">
                <div className="section-header text-center">
                    <span className="tag-pill">Pilihan Alami untuk Sehari-hari</span>
                    <h2>Good Food Starts Here</h2>
                </div>

                <div className="product-grid">
                    {products.map((product) => (
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

                <div className="load-more-container text-center">
                    <button className="load-more-btn" onClick={() => navigate('/products')}>Load More</button>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
