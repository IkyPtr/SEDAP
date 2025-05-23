import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="p-4 sm:ml-64 pt-20">
            <div className="p-4 border-gray-200 rounded-lg">
                <PageHeader pageTitle="Dashboard" currentPage="Home" />
                
                <div id="dashboard-grid" className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div id="dashboard-orders" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                        <div id="orders-icon" className="bg-hijau text-white rounded-full p-4">
                            <FaShoppingCart />
                        </div>
                        <div id="orders-info" className="flex flex-col">
                            <span id="orders-count" className="text-2xl font-bold">75</span>
                            <span id="orders-text" className="text-gray-400">Total Orders</span>
                        </div>
                    </div>

                    <div id="dashboard-delivered" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                        <div id="delivered-icon" className="bg-biru text-white rounded-full p-4">
                            <FaTruck />
                        </div>
                        <div id="delivered-info" className="flex flex-col">
                            <span id="delivered-count" className="text-2xl font-bold">175</span>
                            <span id="delivered-text" className="text-gray-400">Total Delivered</span>
                        </div>
                    </div>

                    <div id="dashboard-canceled" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                        <div id="canceled-icon" className="bg-merah text-white rounded-full p-4">
                            <FaBan />
                        </div>
                        <div id="canceled-info" className="flex flex-col">
                            <span id="canceled-count" className="text-2xl font-bold">40</span>
                            <span id="canceled-text" className="text-gray-400">Total Canceled</span>
                        </div>
                    </div>

                    <div id="dashboard-revenue" className="flex items-center space-x-5 bg-white rounded-lg shadow-md p-4">
                        <div id="revenue-icon" className="bg-kuning text-white rounded-full p-4">
                            <FaDollarSign />
                        </div>
                        <div id="revenue-info" className="flex flex-col">
                            <span id="revenue-amount" className="text-2xl font-bold">Rp.128</span>
                            <span id="revenue-text" className="text-gray-400">Total Revenue</span>
                        </div>
                    </div>
                </div>
                
                {/* Recent Orders Table */}
                <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Order ID</th>
                                    <th scope="col" className="px-6 py-3">Customer</th>
                                    <th scope="col" className="px-6 py-3">Date</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                    <th scope="col" className="px-6 py-3">Total</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">#ORD-001</th>
                                    <td className="px-6 py-4">John Doe</td>
                                    <td className="px-6 py-4">2023-05-15</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Delivered</span>
                                    </td>
                                    <td className="px-6 py-4">Rp.120.000</td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">#ORD-002</th>
                                    <td className="px-6 py-4">Jane Smith</td>
                                    <td className="px-6 py-4">2023-05-16</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Pending</span>
                                    </td>
                                    <td className="px-6 py-4">Rp.85.000</td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">#ORD-003</th>
                                    <td className="px-6 py-4">Robert Johnson</td>
                                    <td className="px-6 py-4">2023-05-17</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Canceled</span>
                                    </td>
                                    <td className="px-6 py-4">Rp.150.000</td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                {/* Analytics Section */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Sales Analytics</h2>
                        <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
                            <p className="text-gray-500">Sales Chart Placeholder</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Top Products</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span>Nasi Goreng</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">45 Orders</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-hijau h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Ayam Bakar</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">38 Orders</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-hijau h-2.5 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span>Sate Ayam</span>
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">30 Orders</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-hijau h-2.5 rounded-full" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
