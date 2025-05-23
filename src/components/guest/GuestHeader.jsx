import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const GuestHeader = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/guest" className="font-poppins text-3xl text-gray-900 flex items-center">
                        Sedap
                        <span className="text-hijau font-bold">.</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link to="/guest" className="text-gray-700 hover:text-hijau transition-colors">
                        Home
                    </Link>
                    <Link to="/guest#about" className="text-gray-700 hover:text-hijau transition-colors">
                        About
                    </Link>
                    <Link to="/guest#products" className="text-gray-700 hover:text-hijau transition-colors">
                        Menu
                    </Link>
                    <Link to="/guest#testimonials" className="text-gray-700 hover:text-hijau transition-colors">
                        Testimonials
                    </Link>
                    <Link to="/guest#contact" className="text-gray-700 hover:text-hijau transition-colors">
                        Contact
                    </Link>
                    <Link to="/guest/membership" className="text-gray-700 hover:text-hijau transition-colors">
                        Membership
                    </Link>

                </nav>

                {/* Login/Register Button */}
                <div className="hidden md:block">
                    <Link to="/login">
                        <Button type="primary" className="bg-hijau hover:bg-green-600 border-none">
                            Login / Register
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Button
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={showDrawer}
                        className="text-gray-700"
                    />
                </div>
            </div>

            {/* Mobile Drawer */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                visible={visible}
            >
                <div className="flex flex-col space-y-4">
                    <Link to="/guest" className="text-gray-700 hover:text-hijau transition-colors" onClick={onClose}>
                        Home
                    </Link>
                    <Link to="/guest#about" className="text-gray-700 hover:text-hijau transition-colors" onClick={onClose}>
                        About
                    </Link>
                    <Link to="/guest#products" className="text-gray-700 hover:text-hijau transition-colors" onClick={onClose}>
                        Menu
                    </Link>
                    <Link to="/guest#testimonials" className="text-gray-700 hover:text-hijau transition-colors" onClick={onClose}>
                        Testimonials
                    </Link>
                    <Link to="/guest#contact" className="text-gray-700 hover:text-hijau transition-colors" onClick={onClose}>
                        Contact
                    </Link>
                    <Link to="/login" onClick={onClose}>
                        <Button type="primary" className="bg-hijau hover:bg-green-600 border-none w-full">
                            Login / Register
                        </Button>
                    </Link>
                </div>
            </Drawer>
        </header>
    );
};

export default GuestHeader;
