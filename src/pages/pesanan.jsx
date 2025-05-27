import PageHeader from "../components/PageHeader"
import { useState, useEffect } from "react"
import { BsFillExclamationDiamondFill } from "react-icons/bs"; 
import axios from "axios";

export default function Pesanan() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const breadcrumb = ["Dashboard", "Product List"]
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get("https://dummyjson.com/products")
                
                if (response.status !== 200) {
                    setError(response.data.message);
                    return; 
                }
                setProducts(response.data.products)
                setError(null)
            } catch (err) {
                setError(err.message || "An unknown error occurred");
            } finally {
                setLoading(false)
            }
        }
        
        fetchProducts()
    }, [])
    
    const errorInfo = error ? (
        <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null

    if (loading) {
        return (
            <div className="flex-1 p-6 ml-64 mt-16">
                <PageHeader title="Products" breadcrumb={breadcrumb} />
                <div className="mt-6 text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
                    <p className="mt-2 text-gray-600">Loading products...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex-1 p-6 ml-64 mt-16">
            <PageHeader title="Products" breadcrumb={breadcrumb} />
            
            {errorInfo}
            
            <div className="mt-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-2xl shadow-lg">
                        <thead>
                            <tr className="bg-emerald-600 text-white text-left text-sm font-semibold">
                                <th className="px-4 py-3">#</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Category</th>
                                <th className="px-4 py-3">Price</th>
                                <th className="px-4 py-3">Brand</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
                            {products.length > 0 ? products.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td className="px-6 py-4 font-medium text-gray-700">
                                        {index + 1}.
                                    </td>
                                    <td className="px-6 py-4">{item.title}</td>
                                    <td className="px-6 py-4 capitalize">{item.category}</td>
                                    <td className="px-6 py-4 font-semibold text-emerald-600">
                                        ${item.price}
                                    </td>
                                    <td className="px-6 py-4">{item.brand}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                        <div className="flex flex-col items-center">
                                            <svg className="w-12 h-12 text-gray-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8l-4 4m0 0l-4-4m4 4V3" />
                                            </svg>
                                            No products found
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
