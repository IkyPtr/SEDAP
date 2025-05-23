import React from 'react';
import { Card, Rate, Avatar, Carousel } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

// Dummy data for products
const productsData = [
    {
        id: 1,
        name: "Nasi Goreng Special",
        price: 35000,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Indonesian fried rice with chicken, prawns, and vegetables"
    },
    {
        id: 2,
        name: "Sate Ayam",
        price: 30000,
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Grilled chicken skewers with peanut sauce"
    },
    {
        id: 3,
        name: "Rendang Daging",
        price: 45000,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Slow-cooked beef in coconut milk and spices"
    },
    {
        id: 4,
        name: "Gado-Gado",
        price: 25000,
        image: "https://images.unsplash.com/photo-1562607635-4608ff48a859?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Indonesian salad with peanut sauce dressing"
    },
    {
        id: 5,
        name: "Soto Ayam",
        price: 28000,
        image: "https://images.unsplash.com/photo-1583835746434-cf1534674b41?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Chicken soup with vermicelli, eggs, and vegetables"
    },
    {
        id: 6,
        name: "Mie Goreng",
        price: 32000,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Fried noodles with chicken, vegetables, and egg"
    }
];

// Dummy data for testimonials
const testimonialsData = [
    {
        id: 1,
        name: "John Doe",
        avatar: "https://avatar-placeholder.iran.liara.run/public/1",
        rating: 5,
        comment: "The food is absolutely delicious! I especially love the Nasi Goreng Special. Will definitely come back again."
    },
    {
        id: 2,
        name: "Jane Smith",
        avatar: "https://avatar-placeholder.iran.liara.run/public/2",
        rating: 4,
        comment: "Great service and atmosphere. The Rendang was amazing, though a bit spicy for my taste."
    },
    {
        id: 3,
        name: "Michael Johnson",
        avatar: "https://avatar-placeholder.iran.liara.run/public/3",
        rating: 5,
        comment: "Best Indonesian food in town! The flavors are authentic and the portions are generous."
    },
    {
        id: 4,
        name: "Emily Davis",
        avatar: "https://avatar-placeholder.iran.liara.run/public/4",
        rating: 4,
        comment: "I ordered delivery and the food arrived hot and fresh. The Sate Ayam is a must-try!"
    },
    {
        id: 5,
        name: "Robert Wilson",
        avatar: "https://avatar-placeholder.iran.liara.run/public/5",
        rating: 5,
        comment: "Excellent food and friendly staff. The Gado-Gado is the best I've ever had!"
    }
];

const Guest = () => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Experience Authentic Indonesian Cuisine
                        </h1>
                        <p className="text-xl text-white mb-8">
                            Discover the rich flavors and culinary traditions of Indonesia at Sedap Restaurant.
                        </p>
                        <a
                            href="#products"
                            className="bg-hijau hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center"
                        >
                            Explore Our Menu
                            <ArrowRightOutlined className="ml-2" />
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img
                                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                alt="Restaurant Interior"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">About Sedap</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Sedap is a premier Indonesian restaurant dedicated to bringing the authentic flavors of Indonesia to your table.
                                Our name "Sedap" means delicious in Indonesian, and that's our promise to you with every dish we serve.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Founded in 2010, we have been serving the community with passion and dedication. Our chefs are trained in traditional
                                Indonesian cooking techniques, using only the freshest ingredients and authentic spices imported directly from Indonesia.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h3 className="font-bold text-hijau mb-2">Fresh Ingredients</h3>
                                    <p className="text-gray-600 text-sm">We source only the freshest ingredients for our dishes.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h3 className="font-bold text-hijau mb-2">Authentic Recipes</h3>
                                    <p className="text-gray-600 text-sm">Our recipes have been passed down through generations.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h3 className="font-bold text-hijau mb-2">Expert Chefs</h3>
                                    <p className="text-gray-600 text-sm">Our chefs are masters of Indonesian cuisine.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h3 className="font-bold text-hijau mb-2">Cozy Atmosphere</h3>
                                    <p className="text-gray-600 text-sm">Enjoy your meal in our warm and inviting restaurant.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Top Menu</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover our most popular dishes, prepared with authentic Indonesian recipes and the freshest ingredients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {productsData.map((product) => (
                            <Card
                                key={product.id}
                                hoverable
                                cover={<img alt={product.name} src={product.image} className="h-48 object-cover" />}
                                className="overflow-hidden"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-semibold">{product.name}</h3>
                                        <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                                    </div>
                                    <p className="text-hijau font-bold">{formatCurrency(product.price)}</p>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <button className="bg-hijau hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                            View Full Menu
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Customers Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what our valued customers have to say about their experience at Sedap.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Carousel autoplay dots={{ className: "custom-dots" }}>
                            {testimonialsData.map((testimonial) => (
                                <div key={testimonial.id} className="px-4 pb-10">
                                    <div className="bg-white p-8 rounded-lg shadow-md">
                                        <div className="flex items-center mb-4">
                                            <Avatar src={testimonial.avatar} size={64} />
                                            <div className="ml-4">
                                                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                                <Rate disabled defaultValue={testimonial.rating} className="text-yellow-500" />
                                            </div>
                                        </div>
                                        <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-hijau">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4 text-white">Ready to Experience Authentic Indonesian Cuisine?</h2>
                    <p className="text-white mb-8 max-w-2xl mx-auto">
                        Join us at Sedap Restaurant for an unforgettable dining experience or order online for delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-hijau hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
                            Make a Reservation
                        </button>
                        <button className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-hijau font-bold py-3 px-6 rounded-lg transition-colors">
                            Order Online
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Guest;
