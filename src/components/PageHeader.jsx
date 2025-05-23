import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OrderForm from './OrderForm';
import CustomerForm from './CustomerForm';

export default function PageHeader({ pageTitle, currentPage, onAddItem }) {
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [showCustomerForm, setShowCustomerForm] = useState(false);

    const handleAddButtonClick = () => {
        if (currentPage === 'Orders') {
            setShowOrderForm(true);
        } else if (currentPage === 'Customers') {
            setShowCustomerForm(true);
        }
    };

    const handleFormSubmit = (data) => {
        onAddItem(data);
    };

    return (
        <div id="pageheader-container" className="mb-5">
            <div className="flex items-center justify-between p-4">
                <div id="pageheader-left" className="flex flex-col">
                    <span id="page-title" className="text-3xl font-semibold">
                        {pageTitle || 'Dashboard'}
                    </span>
                    <nav className="flex mt-2" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                    </svg>
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4-4 4"/>
                                    </svg>
                                    <span className="text-sm font-medium text-gray-500 md:ms-2">{currentPage || 'Order List'}</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div id="action-button">
                    <button 
                        id="add-button" 
                        className="bg-hijau text-white px-4 py-2 rounded-lg"
                        onClick={handleAddButtonClick}
                    >
                        {currentPage === 'Customers' ? 'Add Customer' : 'Add Order'}
                    </button>
                </div>
            </div>

            {showOrderForm && (
                <OrderForm 
                    onClose={() => setShowOrderForm(false)} 
                    onSubmit={handleFormSubmit} 
                />
            )}

            {showCustomerForm && (
                <CustomerForm 
                    onClose={() => setShowCustomerForm(false)} 
                    onSubmit={handleFormSubmit} 
                />
            )}
        </div>
    );
}

PageHeader.propTypes = {
    pageTitle: PropTypes.string,
    currentPage: PropTypes.string,
    onAddItem: PropTypes.func
};
