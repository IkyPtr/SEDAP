import React, { useEffect, useState } from 'react';
import { Card, Input, Button, Space, message, Tag, Pagination, Spin } from 'antd';
import { SearchOutlined, ReloadOutlined, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 8,
    total: 0,
  });

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://dummyjson.com/users');
      setUsers(response.data.users);
      setFilteredData(response.data.users);
      setPagination({
        ...pagination,
        total: response.data.total,
      });
    } catch (error) {
      message.error('Gagal mengambil data pengguna: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchText, users]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setPagination({ ...pagination, current: 1 });
  };

  const handleRefresh = () => {
    setSearchText('');
    fetchUsers();
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

  return (
    <div className="p-4 sm:ml-64 pt-20">
      <Card title="Daftar Pengguna" className="shadow-md">
        <div className="mb-4 flex justify-between">
          <Space>
            <Input
              placeholder="Cari pengguna..."
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getCurrentPageData().map((user) => (
                <div key={user.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-4">
                    <div className="flex flex-col items-center mb-4">
                      <img 
                        src={user.image} 
                        alt={`${user.firstName} ${user.lastName}`} 
                        className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                      />
                      <h3 className="mt-2 text-xl font-semibold text-gray-800">{`${user.firstName} ${user.lastName}`}</h3>
                      <Tag color={user.gender === 'male' ? 'blue' : 'pink'} className="mt-1">
                        {user.gender === 'male' ? 'Laki-laki' : 'Perempuan'}
                      </Tag>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <p className="flex items-center">
                        <MailOutlined className="mr-2" /> {user.email}
                      </p>
                      <p className="flex items-center">
                        <PhoneOutlined className="mr-2" /> {user.phone}
                      </p>
                      <p className="flex items-center">
                        <GlobalOutlined className="mr-2" /> {user.company.name}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-gray-500">ID: {user.id}</span>
                      <span className="text-gray-500">Umur: {user.age}</span>
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
};

export default User;
