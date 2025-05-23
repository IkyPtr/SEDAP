import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Result
        status="404"
        title="404 - Halaman Tidak Ditemukan"
        subTitle="Maaf, halaman yang Anda cari tidak ditemukan."
        extra={[
          <Button type="primary" key="home" onClick={goHome}>
            Kembali ke Beranda
          </Button>,
          <Button key="back" onClick={goBack}>
            Kembali
          </Button>,
        ]}
      />
    </div>
  );
};

export default ErrorPage;
 