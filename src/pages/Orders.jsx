import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Space, message, Tag, Pagination, Select, Badge, Avatar, Tooltip, Modal, Divider, List } from 'antd';
import { SearchOutlined, ReloadOutlined, EyeOutlined, EditOutlined, DeleteOutlined, ClockCircleOutlined, UserOutlined, ShoppingOutlined, EnvironmentOutlined, CreditCardOutlined, FileTextOutlined } from '@ant-design/icons';
import PageHeader from "../components/PageHeader";
import OrderForm from "../components/OrderForm";

const { Option } = Select;

export default function Orders() {
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 8,
        total: 0,
    });
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Dummy data for orders
    const [orders, setOrders] = useState([
        {
            id: "ORD-001",
            customer: {
                id: 1,
                name: "John Doe",
                avatar: "https://randomuser.me/api/portraits/men/1.jpg",
                phone: "+62 812-3456-7890"
            },
            items: [
                { id: 1, name: "Nasi Goreng", price: 25000, quantity: 2 },
                { id: 3, name: "Es Teh Manis", price: 5000, quantity: 2 }
            ],
            status: "Delivered",
            orderDate: "2023-11-15 14:30",
            deliveryAddress: "Jl. Sudirman No. 123, Jakarta",
            paymentMethod: "Cash",
            totalAmount: 60000,
            notes: "Extra sambal"
        },
        {
            id: "ORD-002",
            customer: {
                id: 2,
                name: "Jane Smith",
                avatar: "https://randomuser.me/api/portraits/women/2.jpg",
                phone: "+62 813-9876-5432"
            },
            items: [
                { id: 2, name: "Ayam Bakar", price: 35000, quantity: 1 },
                { id: 4, name: "Juice Alpukat", price: 15000, quantity: 1 }
            ],
            status: "Processing",
            orderDate: "2023-11-15 15:45",
            deliveryAddress: "Jl. Thamrin No. 45, Jakarta",
            paymentMethod: "Credit Card",
            totalAmount: 50000,
            notes: ""
        },
        {
            id: "ORD-003",
            customer: {
                id: 3,
                name: "Robert Johnson",
                avatar: "https://randomuser.me/api/portraits/men/3.jpg",
                phone: "+62 857-1234-5678"
            },
            items: [
                { id: 5, name: "Sate Ayam", price: 30000, quantity: 2 },
                { id: 6, name: "Gado-gado", price: 20000, quantity: 1 },
                { id: 7, name: "Es Jeruk", price: 8000, quantity: 2 }
            ],
            status: "Pending",
            orderDate: "2023-11-15 16:20",
            deliveryAddress: "Jl. Gatot Subroto No. 67, Jakarta",
            paymentMethod: "Bank Transfer",
            totalAmount: 96000,
            notes: "No cucumber in gado-gado"
        },
        {
            id: "ORD-004",
            customer: {
                id: 4,
                name: "Emily Davis",
                avatar: "https://randomuser.me/api/portraits/women/4.jpg",
                phone: "+62 878-8765-4321"
            },
            items: [
                { id: 8, name: "Mie Goreng", price: 22000, quantity: 1 },
                { id: 9, name: "Ayam Geprek", price: 28000, quantity: 1 }
            ],
            status: "Canceled",
            orderDate: "2023-11-15 17:10",
            deliveryAddress: "Jl. Asia Afrika No. 89, Bandung",
            paymentMethod: "E-Wallet",
            totalAmount: 50000,
            notes: "Extra spicy"
        },
        {
            id: "ORD-005",
            customer: {
                id: 5,
                name: "Michael Wilson",
                avatar: "https://randomuser.me/api/portraits/men/5.jpg",
                phone: "+62 819-2345-6789"
            },
            items: [
                { id: 10, name: "Soto Ayam", price: 25000, quantity: 2 },
                { id: 11, name: "Tempe Goreng", price: 10000, quantity: 1 },
                { id: 12, name: "Es Campur", price: 15000, quantity: 1 }
            ],
            status: "Delivered",
            orderDate: "2023-11-16 11:30",
            deliveryAddress: "Jl. Diponegoro No. 34, Surabaya",
            paymentMethod: "Cash",
            totalAmount: 75000,
            notes: ""
        },
        {
            id: "ORD-006",
            customer: {
                id: 6,
                name: "Sarah Brown",
                avatar: "https://randomuser.me/api/portraits/women/6.jpg",
                phone: "+62 838-9876-5432"
            },
            items: [
                { id: 13, name: "Rendang", price: 40000, quantity: 1 },
                { id: 14, name: "Nasi Putih", price: 5000, quantity: 2 },
                { id: 15, name: "Teh Botol", price: 7000, quantity: 2 }
            ],
            status: "Delivered",
            orderDate: "2023-11-16 12:45",
            deliveryAddress: "Jl. Pemuda No. 56, Semarang",
            paymentMethod: "Credit Card",
            totalAmount: 64000,
            notes: ""
        },
        {
            id: "ORD-007",
            customer: {
                id: 7,
                name: "David Lee",
                avatar: "https://randomuser.me/api/portraits/men/7.jpg",
                phone: "+62 822-1234-5678"
            },
            items: [
                { id: 16, name: "Bakso", price: 25000, quantity: 1 },
                { id: 17, name: "Pangsit Goreng", price: 15000, quantity: 1 },
                { id: 18, name: "Es Teh", price: 5000, quantity: 1 }
            ],
            status: "Processing",
            orderDate: "2023-11-16 13:20",
            deliveryAddress: "Jl. Ahmad Yani No. 78, Yogyakarta",
            paymentMethod: "E-Wallet",
            totalAmount: 45000,
            notes: "Extra chili sauce"
        },
        {
            id: "ORD-008",
            customer: {
                id: 8,
                name: "Lisa Taylor",
                avatar: "https://randomuser.me/api/portraits/women/8.jpg",
                phone: "+62 852-9876-5432"
            },
            items: [
                { id: 19, name: "Pecel Lele", price: 30000, quantity: 1 },
                { id: 20, name: "Nasi Putih", price: 5000, quantity: 1 },
                { id: 21, name: "Es Jeruk", price: 8000, quantity: 1 }
            ],
            status: "Pending",
            orderDate: "2023-11-16 14:10",
            deliveryAddress: "Jl. Pahlawan No. 90, Malang",
            paymentMethod: "Cash",
            totalAmount: 43000,
            notes: ""
        },
        {
            id: "ORD-009",
            customer: {
                id: 9,
                name: "James Anderson",
                avatar: "https://randomuser.me/api/portraits/men/9.jpg",
                phone: "+62 815-1234-5678"
            },
            items: [
                { id: 22, name: "Nasi Padang", price: 35000, quantity: 1 },
                { id: 23, name: "Ayam Pop", price: 25000, quantity: 1 },
                { id: 24, name: "Teh Talua", price: 12000, quantity: 1 }
            ],
            status: "Delivered",
            orderDate: "2023-11-16 15:30",
            deliveryAddress: "Jl. Merdeka No. 112, Bandung",
            paymentMethod: "Bank Transfer",
            totalAmount: 72000,
            notes: "Less spicy"
        },
        {
            id: "ORD-010",
            customer: {
                id: 10,
                name: "Patricia Martinez",
                avatar: "https://randomuser.me/api/portraits/women/10.jpg",
                phone: "+62 877-9876-5432"
            },
            items: [
                { id: 25, name: "Sate Kambing", price: 45000, quantity: 1 },
                { id: 26, name: "Sop Buntut", price: 55000, quantity: 1 },
                { id: 27, name: "Es Kelapa Muda", price: 15000, quantity: 1 }
            ],
            status: "Processing",
            orderDate: "2023-11-16 16:45",
            deliveryAddress: "Jl. Veteran No. 134, Jakarta",
            paymentMethod: "Credit Card",
            totalAmount: 115000,
            notes: ""
        }
    ]);

    const [filteredData, setFilteredData] = useState(orders);

    useEffect(() => {
        // Filter orders based on search text and status
        const filtered = orders.filter(
            (order) => {
                const matchesSearch = 
                    order.id.toLowerCase().includes(searchText.toLowerCase()) ||
                    order.customer.name.toLowerCase().includes(searchText.toLowerCase());
                
                const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
                
                return matchesSearch && matchesStatus;
            }
        );
        
        setFilteredData(filtered);
        setPagination(prevPagination => ({
            ...prevPagination,
            total: filtered.length,
        }));
    }, [searchText, statusFilter, orders]);

    const handleAddOrder = (newOrder) => {
        // Generate a new order ID
        const orderId = `ORD-${String(orders.length + 1).padStart(3, '0')}`;
        
        // Create a new order object with the generated ID
        const orderWithId = {
            ...newOrder,
            id: orderId,
            orderDate: new Date().toLocaleString(),
        };
        
        setOrders([...orders, orderWithId]);
        message.success('Order added successfully');
        setShowOrderForm(false);
    };

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        setPagination(prevPagination => ({
            ...prevPagination,
            current: 1,
        }));
    };

    const handleStatusChange = (value) => {
        setStatusFilter(value);
        setPagination(prevPagination => ({
            ...prevPagination,
            current: 1,
        }));
    };

    const handleRefresh = () => {
        setSearchText('');
        setStatusFilter('all');
        message.success('Data refreshed');
    };

    const handlePageChange = (page, pageSize) => {
        setPagination(prevPagination => ({
            ...prevPagination,
            current: page,
            pageSize: pageSize,
        }));
    };

    const handleViewOrder = (order) => {
        setSelectedOrder(order);
        setIsModalVisible(true);
    };

    const handleDeleteOrder = (orderId) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this order?',
            content: 'This action cannot be undone.',
            okText: 'Yes, Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            onOk() {
                const updatedOrders = orders.filter(order => order.id !== orderId);
                setOrders(updatedOrders);
                message.success('Order deleted successfully');
            },
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
        switch(status) {
            case 'Delivered':
                return 'success';
            case 'Processing':
                return 'processing';
            case 'Pending':
                return 'warning';
            case 'Canceled':
                return 'error';
            default:
                return 'default';
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="p-4 sm:ml-64 pt-20">
            <PageHeader pageTitle="Orders" currentPage="Orders List" onAddItem={() => setShowOrderForm(true)} />
            
            <Card className="shadow-md">
                <div className="mb-4 flex flex-wrap justify-between items-center gap-4">
                    <Space>
                        <Input
                            placeholder="Search orders..."
                            value={searchText}
                            onChange={handleSearch}
                            prefix={<SearchOutlined />}
                            style={{ width: 250 }}
                        />
                        <Select
                            defaultValue="all"
                            style={{ width: 150 }}
                            onChange={handleStatusChange}
                            value={statusFilter}
                        >
                            <Option value="all">All Status</Option>
                            <Option value="Delivered">Delivered</Option>
                            <Option value="Pending">Pending</Option>
                            <Option value="Processing">Processing</Option>
                            <Option value="Canceled">Canceled</Option>
                        </Select>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {getCurrentPageData().map((order) => (
                        <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">{order.id}</h3>
                                        <p className="text-sm text-gray-500 flex items-center">
                                            <ClockCircleOutlined className="mr-1" /> {order.orderDate}
                                        </p>
                                    </div>
                                    <Tag color={getStatusColor(order.status)}>{order.status}</Tag>
                                </div>
                                
                                <div className="flex items-center mb-3">
                                    <Avatar src={order.customer.avatar} size="large" />
                                    <div className="ml-2">
                                        <p className="font-medium text-gray-800">{order.customer.name}</p>
                                        <p className="text-xs text-gray-500">{order.customer.phone}</p>
                                    </div>
                                </div>
                                
                                <Divider className="my-2" />
                                
                                <div className="mb-3">
                                    <p className="text-sm font-medium text-gray-700 mb-1">Items:</p>
                                    <div className="max-h-20 overflow-y-auto">
                                        {order.items.map((item, index) => (
                                            <div key={index} className="flex justify-between text-sm">
                                                <span>{item.quantity}x {item.name}</span>
                                                <span>{formatCurrency(item.price * item.quantity)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex justify-between font-semibold text-gray-800 mb-3">
                                    <span>Total:</span>
                                    <span>{formatCurrency(order.totalAmount)}</span>
                                </div>
                                
                                <div className="flex justify-between mt-4">
                                    <Tooltip title="View Details">
                                        <Button 
                                            type="primary" 
                                            icon={<EyeOutlined />} 
                                            size="middle" 
                                            className="bg-blue-500"
                                            onClick={() => handleViewOrder(order)}
                                        />
                                    </Tooltip>
                                    <Tooltip title="Edit Order">
                                        <Button 
                                            type="default" 
                                            icon={<EditOutlined />} 
                                            size="middle"
                                            //onClick={() => handleEditOrder(order)}
                                        />
                                    </Tooltip>
                                    <Tooltip title="Delete Order">
                                        <Button 
                                            type="default" 
                                            danger 
                                            icon={<DeleteOutlined />} 
                                            size="middle"
                                            onClick={() => handleDeleteOrder(order.id)}
                                        />
                                    </Tooltip>
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

            {showOrderForm && (
                <OrderForm 
                    onClose={() => setShowOrderForm(false)} 
                    onSubmit={handleAddOrder} 
                />
            )}

            <Modal
                title={`Order Details - ${selectedOrder?.id}`}
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={[
                    <Button key="back" onClick={() => setIsModalVisible(false)}>
                        Close
                    </Button>
                ]}
                width={700}
            >
                {selectedOrder && (
                    <div className="p-2">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-semibold">{selectedOrder.id}</h3>
                                <p className="text-gray-500 flex items-center">
                                    <ClockCircleOutlined className="mr-1" /> {selectedOrder.orderDate}
                                </p>
                            </div>
                            <Tag color={getStatusColor(selectedOrder.status)} className="text-base px-3 py-1">
                                {selectedOrder.status}
                            </Tag>
                        </div>

                        <Divider />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-lg font-medium mb-2 flex items-center">
                                    <UserOutlined className="mr-2" /> Customer Information
                                </h4>
                                <div className="bg-gray-50 p-3 rounded-md">
                                    <div className="flex items-center mb-2">
                                        <Avatar src={selectedOrder.customer.avatar} size="large" />
                                        <div className="ml-2">
                                            <p className="font-medium">{selectedOrder.customer.name}</p>
                                            <p className="text-sm text-gray-500">{selectedOrder.customer.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-medium mb-2 flex items-center">
                                    <EnvironmentOutlined className="mr-2" /> Delivery Address
                                </h4>
                                <div className="bg-gray-50 p-3 rounded-md">
                                    <p>{selectedOrder.deliveryAddress}</p>
                                </div>
                            </div>
                        </div>

                        <Divider />

                        <div>
                            <h4 className="text-lg font-medium mb-2 flex items-center">
                                <ShoppingOutlined className="mr-2" /> Order Items
                            </h4>
                            <List
                                itemLayout="horizontal"
                                dataSource={selectedOrder.items}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            title={item.name}
                                            description={`${item.quantity} x ${formatCurrency(item.price)}`}
                                        />
                                        <div className="text-right">
                                            <p className="font-medium">{formatCurrency(item.price * item.quantity)}</p>
                                        </div>
                                    </List.Item>
                                )}
                                footer={
                                    <div className="flex justify-between font-semibold text-lg">
                                        <span>Total Amount:</span>
                                        <span>{formatCurrency(selectedOrder.totalAmount)}</span>
                                    </div>
                                }
                                className="bg-gray-50 p-3 rounded-md"
                            />
                        </div>

                        <Divider />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-lg font-medium mb-2 flex items-center">
                                    <CreditCardOutlined className="mr-2" /> Payment Method
                                </h4>
                                <div className="bg-gray-50 p-3 rounded-md">
                                    <p>{selectedOrder.paymentMethod}</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-lg font-medium mb-2 flex items-center">
                                    <FileTextOutlined className="mr-2" /> Notes
                                </h4>
                                <div className="bg-gray-50 p-3 rounded-md">
                                    <p>{selectedOrder.notes || "No notes provided"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

