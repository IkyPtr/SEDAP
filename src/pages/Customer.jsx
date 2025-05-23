import React, { useState, useEffect } from "react";
import { Card, Input, Button, Space, message, Tag, Pagination, Avatar } from 'antd';
import { SearchOutlined, ReloadOutlined, EyeOutlined, EditOutlined, DeleteOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import PageHeader from "../components/PageHeader";
import CustomerForm from "../components/CustomerForm";

export default function Customers() {
    const [showCustomerForm, setShowCustomerForm] = useState(false);
    // Menghapus variabel loading yang tidak digunakan
    const [searchText, setSearchText] = useState('');
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 8,
        total: 0,
    });

    // Dummy data for customers
    const [customers, setCustomers] = useState([
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+62 812-3456-7890",
        address: "Jl. Sudirman No. 123, Jakarta",
        joinDate: "2022-01-15",
        totalOrders: 12,
        totalSpent: 1250000,
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        status: "Active"
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+62 813-1111-2222",
        address: "Jl. Thamrin No. 45, Jakarta",
        joinDate: "2022-03-21",
        totalOrders: 8,
        totalSpent: 750000,
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        status: "Active"
    },
    {
        id: 3,
        name: "Ahmad Fauzi",
        email: "ahmad.fauzi@example.com",
        phone: "+62 812-9876-5432",
        address: "Jl. Merdeka No. 10, Bandung",
        joinDate: "2021-11-12",
        totalOrders: 15,
        totalSpent: 2100000,
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        status: "Inactive"
    },
    {
        id: 4,
        name: "Dewi Lestari",
        email: "dewi.lestari@example.com",
        phone: "+62 817-5555-1234",
        address: "Jl. Diponegoro No. 88, Surabaya",
        joinDate: "2023-01-05",
        totalOrders: 6,
        totalSpent: 540000,
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        status: "Active"
    },
    {
        id: 5,
        name: "Kevin Hartanto",
        email: "kevin.hartanto@example.com",
        phone: "+62 819-7777-8888",
        address: "Jl. Gatot Subroto No. 77, Medan",
        joinDate: "2022-07-18",
        totalOrders: 10,
        totalSpent: 960000,
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        status: "Active"
    },
    {
        id: 6,
        name: "Siti Nurhaliza",
        email: "siti.nurhaliza@example.com",
        phone: "+62 815-3333-4444",
        address: "Jl. Asia Afrika No. 20, Bandung",
        joinDate: "2021-08-30",
        totalOrders: 20,
        totalSpent: 3000000,
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        status: "Inactive"
    },
    {
        id: 7,
        name: "Rizky Febian",
        email: "rizky.febian@example.com",
        phone: "+62 812-9999-0000",
        address: "Jl. Slamet Riyadi No. 56, Solo",
        joinDate: "2023-03-11",
        totalOrders: 5,
        totalSpent: 400000,
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        status: "Active"
    },
    {
        id: 8,
        name: "Anisa Rahma",
        email: "anisa.rahma@example.com",
        phone: "+62 818-8888-2222",
        address: "Jl. Cempaka Putih No. 33, Jakarta",
        joinDate: "2022-05-09",
        totalOrders: 14,
        totalSpent: 1800000,
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        status: "Active"
    },
    {
        id: 9,
        name: "Yusuf Maulana",
        email: "yusuf.maulana@example.com",
        phone: "+62 816-4444-5555",
        address: "Jl. Pemuda No. 12, Semarang",
        joinDate: "2021-09-25",
        totalOrders: 7,
        totalSpent: 650000,
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        status: "Inactive"
    },
    {
        id: 10,
        name: "Clara Wijaya",
        email: "clara.wijaya@example.com",
        phone: "+62 811-2222-6666",
        address: "Jl. Malioboro No. 99, Yogyakarta",
        joinDate: "2023-02-14",
        totalOrders: 9,
        totalSpent: 880000,
        avatar: "https://randomuser.me/api/portraits/women/10.jpg",
        status: "Active"
    },
    {
        id: 11,
        name: "Fajar Pratama",
        email: "fajar.pratama@example.com",
        phone: "+62 819-1111-3333",
        address: "Jl. Ahmad Yani No. 1, Balikpapan",
        joinDate: "2022-04-28",
        totalOrders: 11,
        totalSpent: 1020000,
        avatar: "https://randomuser.me/api/portraits/men/11.jpg",
        status: "Active"
    }
]);


    const [filteredData, setFilteredData] = useState(customers);

    useEffect(() => {
        // Filter customers based on search text
        const filtered = customers.filter(
            (customer) =>
                customer.name.toLowerCase().includes(searchText.toLowerCase()) ||
                customer.email.toLowerCase().includes(searchText.toLowerCase()) ||
                customer.phone.toLowerCase().includes(searchText.toLowerCase())
        );
        
        setFilteredData(filtered);
        setPagination({
            ...pagination,
            total: filtered.length,
        });
    }, [searchText, customers]);

    const handleAddCustomer = (newCustomer) => {
        const newCustomerWithId = {
            ...newCustomer,
            id: customers.length + 1,
            joinDate: new Date().toISOString().split('T')[0],
            totalOrders: 0,
            totalSpent: 0,
            status: 'Active',
            avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 70) + 1}.jpg`
        };
        setCustomers([...customers, newCustomerWithId]);
        message.success('Customer added successfully');
    };

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        setPagination({ ...pagination, current: 1 });
    };

    const handleRefresh = () => {
        setSearchText('');
        // Here you would typically refetch data from API
        message.success('Data refreshed successfully');
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

    const getStatusColor = (status) => {
        return status === 'Active' ? 'green' : 'volcano';
    };

    return (
        <div className="p-4 sm:ml-64 pt-20">
            <PageHeader pageTitle="Customers" currentPage="Customer List" onAddItem={() => setShowCustomerForm(true)} />
            
            <Card className="shadow-md">
                <div className="mb-4 flex justify-between">
                    <Space>
                        <Input
                            placeholder="Search customers..."
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

                {/* Menghapus kondisi loading */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {getCurrentPageData().map((customer) => (
                        <div key={customer.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            {/* Konten card tetap sama */}
                            <div className="p-4">
                                <div className="flex flex-col items-center mb-4">
                                    <Avatar 
                                        src={customer.avatar} 
                                        size={80}
                                        className="mb-2"
                                    />
                                    <h3 className="text-lg font-semibold text-gray-800">{customer.name}</h3>
                                    <Tag color={getStatusColor(customer.status)} className="mt-1">
                                        {customer.status}
                                    </Tag>
                                </div>
                                
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p className="flex items-center">
                                        <MailOutlined className="mr-2" /> {customer.email}
                                    </p>
                                    <p className="flex items-center">
                                        <PhoneOutlined className="mr-2" /> {customer.phone}
                                    </p>
                                    <p className="flex items-center">
                                        <HomeOutlined className="mr-2" /> 
                                        <span className="truncate">{customer.address}</span>
                                    </p>
                                </div>
                                
                                <div className="mt-4 pt-3 border-t border-gray-100">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="bg-blue-50 p-2 rounded-md">
                                            <p className="text-xs text-gray-500">Total Orders</p>
                                            <p className="text-lg font-semibold text-blue-600">{customer.totalOrders}</p>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded-md">
                                            <p className="text-xs text-gray-500">Total Spent</p>
                                            <p className="text-lg font-semibold text-green-600">Rp {customer.totalSpent.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                                    <span className="text-xs text-gray-500">Joined: {customer.joinDate}</span>
                                    <span className="text-xs text-gray-500">ID: {customer.id}</span>
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
            </Card>
            
            {showCustomerForm && (
                <CustomerForm 
                    onClose={() => setShowCustomerForm(false)} 
                    onSubmit={handleAddCustomer} 
                />
            )}
        </div>
    );
}
