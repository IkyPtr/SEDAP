import React, { useEffect, useState } from 'react';
import { Card, Input, Button, Space, message, Tag, Pagination, Spin, Rate } from 'antd';
import { SearchOutlined, ReloadOutlined, EyeOutlined, EditOutlined, DeleteOutlined, FilterOutlined } from '@ant-design/icons';
import axios from 'axios';
import PageHeader from "../components/PageHeader";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 8,
        total: 0,
    });

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://dummyjson.com/recipes');
            setProducts(response.data.recipes);
            setFilteredData(response.data.recipes);
            setPagination({
                ...pagination,
                total: response.data.recipes.length,
            });
            message.success('Products loaded successfully');
        } catch (error) {
            message.error('Failed to load products: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        const filtered = products.filter(
            (product) =>
                product.name.toLowerCase().includes(searchText.toLowerCase()) ||
                product.cuisine.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
        setPagination({
            ...pagination,
            current: 1,
            total: filtered.length,
        });
    }, [searchText, products]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const handleRefresh = () => {
        setSearchText('');
        fetchProducts();
    };

    const handlePageChange = (page, pageSize) => {
        setPagination({
            ...pagination,
            current: page,
            pageSize: pageSize,
        });
    };

    // Calculate current page data
    const getCurrentPageData = () => {
        const { current, pageSize } = pagination;
        const startIndex = (current - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return filteredData.slice(startIndex, endIndex);
    };

    const getDifficultyColor = (difficulty) => {
        switch(difficulty) {
            case 'Easy':
                return 'success';
            case 'Medium':
                return 'warning';
            case 'Hard':
                return 'error';
            default:
                return 'default';
        }
    };

    return (
        <div className="p-4 sm:ml-64 pt-20">
            <PageHeader pageTitle="Products" currentPage="Food Menu" />
            
            <Card className="shadow-md">
                <div className="mb-4 flex flex-wrap justify-between items-center gap-4">
                    <Space>
                        <Input
                            placeholder="Search products..."
                            value={searchText}
                            onChange={handleSearch}
                            prefix={<SearchOutlined />}
                            style={{ width: 250 }}
                        />
                    </Space>
                    <Button
                        type="primary"
                        icon={<ReloadOutlined />}
                        onClick={handleRefresh}
                        className="bg-blue-500"
                    >
                        Refresh
                    </Button>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Spin size="large" />
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {getCurrentPageData().map((product) => (
                                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative">
                                        <img 
                                            src={product.image} 
                                            alt={product.name} 
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute top-2 right-2">
                                            <Tag color={getDifficultyColor(product.difficulty)}>
                                                {product.difficulty}
                                            </Tag>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                                        <p className="text-sm text-gray-500 mb-2">Cuisine: {product.cuisine}</p>
                                        
                                        <div className="flex items-center mb-3">
                                            <Rate disabled defaultValue={product.rating} allowHalf className="text-sm" />
                                            <span className="ml-2 text-sm text-gray-600">({product.reviewCount} reviews)</span>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {product.tags.slice(0, 3).map((tag, index) => (
                                                <Tag key={index} className="text-xs">{tag}</Tag>
                                            ))}
                                            {product.tags.length > 3 && (
                                                <Tag className="text-xs">+{product.tags.length - 3}</Tag>
                                            )}
                                        </div>
                                        
                                        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                            <span className="text-sm font-medium text-gray-800">
                                                Prep: {product.prepTimeMinutes} min
                                            </span>
                                            <span className="text-sm font-medium text-gray-800">
                                                Cook: {product.cookTimeMinutes} min
                                            </span>
                                        </div>
                                        
                                        <div className="mt-4 flex justify-between">
                                            <Button type="text" icon={<EyeOutlined />}>View</Button>
                                            <Button type="text" icon={<EditOutlined />}>Edit</Button>
                                            <Button type="text" danger icon={<DeleteOutlined />}>Delete</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex justify-center">
                            <Pagination
                                current={pagination.current}
                                pageSize={pagination.pageSize}
                                total={filteredData.length}
                                onChange={handlePageChange}
                                showSizeChanger={false}
                            />
                        </div>
                    </>
                )}
            </Card>
        </div>
    );
}