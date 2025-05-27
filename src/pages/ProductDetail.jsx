import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`https://dummyjson.com/products/${id}`)
                
                if (response.status !== 200) {
                    setError(response.data.message)
                    return
                }
                setProduct(response.data)
                setError(null)
            } catch (err) {
                setError(err.message || "Failed to load product")
            } finally {
                setLoading(false)
            }
        }
        
        fetchProduct()
    }, [id])

    if (loading) {
        return (
            <div className="flex-1 p-6 ml-64 mt-16">
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
                        <p className="mt-2 text-gray-600">Loading product...</p>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex-1 p-6 ml-64 mt-16">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-lg mx-auto mt-6">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {error}
                    </div>
                </div>
            </div>
        )
    }

    if (!product) {
        return (
            <div className="flex-1 p-6 ml-64 mt-16">
                <div className="text-center mt-6">Product not found</div>
            </div>
        )
    }

    return (
        <div className="flex-1 p-6 ml-64 mt-16">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-64 md:h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-6">
                            <div className="mb-4">
                                <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                                    {product.category}
                                </span>
                            </div>
                            
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {product.title}
                            </h1>
                            
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {product.description}
                            </p>
                            
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center">
                                    <span className="text-gray-500 font-medium w-20">Brand:</span>
                                    <span className="text-gray-800">{product.brand}</span>
                                </div>
                                
                                <div className="flex items-center">
                                    <span className="text-gray-500 font-medium w-20">Stock:</span>
                                    <span className={`font-semibold ${product.stock > 10 ? 'text-green-600' : 'text-red-600'}`}>
                                        {product.stock} units
                                    </span>
                                </div>
                                
                                <div className="flex items-center">
                                    <span className="text-gray-500 font-medium w-20">Rating:</span>
                                    <div className="flex items-center">
                                        <span className="text-yellow-500 mr-1">★</span>
                                        <span className="text-gray-800">{product.rating}/5</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-t pt-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-3xl font-bold text-emerald-600">
                                            ${product.price}
                                        </span>
                                        {product.discountPercentage > 0 && (
                                            <span className="ml-2 text-sm text-red-500 line-through">
                                                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                    
                                    {product.discountPercentage > 0 && (
                                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                                            -{product.discountPercentage}% OFF
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
