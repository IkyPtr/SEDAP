import React, { useState } from 'react';
import { Form, Input, Button, Card, Result, Spin } from 'antd';
import { MailOutlined, CrownOutlined, TrophyOutlined, StarOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { findMemberByEmail } from '../data/Member.js';

const MembershipCheck = () => {
  const [form] = Form.useForm();
  const [memberInfo, setMemberInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setNotFound(false);
    setMemberInfo(null);
    
    // Simulasi delay untuk efek loading
    setTimeout(() => {
      const member = findMemberByEmail(values.email);
      
      if (member) {
        setMemberInfo(member);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }, 1000);
  };

  const getMemberIcon = (type) => {
    switch (type) {
      case 'platinum':
        return <CrownOutlined style={{ fontSize: 48 }} />;
      case 'gold':
        return <TrophyOutlined style={{ fontSize: 48 }} />;
      case 'silver':
        return <StarOutlined style={{ fontSize: 48 }} />;
      default:
        return null;
    }
  };

  const getMemberColor = (type) => {
    switch (type) {
      case 'platinum':
        return '#8e44ad'; // Purple
      case 'gold':
        return '#f39c12'; // Gold
      case 'silver':
        return '#7f8c8d'; // Silver
      default:
        return '#000000';
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Card title="Cek Keanggotaan" className="shadow-md mb-6">
        <Form
          form={form}
          name="membership_check"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: 'Email tidak boleh kosong!',
              },
              {
                type: 'email',
                message: 'Format email tidak valid!',
              },
            ]}
          >
            <Input 
              prefix={<MailOutlined className="site-form-item-icon" />} 
              placeholder="Masukkan email Anda" 
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="w-full bg-hijau hover:bg-green-600" 
              size="large"
              loading={loading}
            >
              Cek Keanggotaan
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {loading && (
        <div className="text-center py-8">
          <Spin size="large" />
          <p className="mt-4 text-gray-600">Memeriksa keanggotaan...</p>
        </div>
      )}

      {memberInfo && !loading && (
        <Card className="shadow-md border-t-4" style={{ borderTopColor: getMemberColor(memberInfo.tipe_member) }}>
          <Result
            icon={
              <div style={{ color: getMemberColor(memberInfo.tipe_member) }}>
                {getMemberIcon(memberInfo.tipe_member)}
              </div>
            }
            title={
              <span className="text-xl">Selamat datang, <strong>{memberInfo.nama}</strong>!</span>
            }
            subTitle={
              <span className="text-lg">
                Anda adalah member <span style={{ color: getMemberColor(memberInfo.tipe_member), fontWeight: 'bold' }}>
                  {memberInfo.tipe_member.toUpperCase()}
                </span>
              </span>
            }
            extra={[
              <div key="member-id" className="text-center">
                <p className="text-gray-500">Member ID: {memberInfo.member_id}</p>
                <p className="text-gray-500">Tanggal Bergabung: {memberInfo.tanggal_bergabung}</p>
              </div>
            ]}
          />
        </Card>
      )}

      {notFound && !loading && (
        <Card className="shadow-md border-t-4 border-red-500">
          <Result
            status="error"
            title="Email tidak terdaftar"
            subTitle="Email yang Anda masukkan tidak terdaftar sebagai member."
            icon={<CloseCircleOutlined style={{ color: '#f5222d' }} />}
          />
        </Card>
      )}
    </div>
  );
};

export default MembershipCheck;
