import React from 'react';
import { Typography, Divider } from 'antd';
import { CrownOutlined, TrophyOutlined, StarOutlined } from '@ant-design/icons';
import MembershipCheck from '../components/MembershipCheck';

const { Title, Paragraph } = Typography;

const Membership = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Title level={2}>Cek Status Keanggotaan</Title>
        <Paragraph className="text-gray-600">
          Masukkan email Anda untuk memeriksa status keanggotaan di Sedap Restaurant.
        </Paragraph>
      </div>
      
      <MembershipCheck />
      
      <Divider />
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <Title level={3} className="text-center mb-6">Keuntungan Member</Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4" style={{ borderTopColor: '#7f8c8d' }}>
            <div className="text-center mb-4">
              <StarOutlined style={{ fontSize: 36, color: '#7f8c8d' }} />
              <Title level={4} style={{ color: '#7f8c8d', marginTop: 12 }}>Silver</Title>
            </div>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Diskon 5% untuk setiap pembelian</li>
              <li>Gratis minuman untuk pembelian di atas Rp 100.000</li>
              <li>Poin reward untuk setiap transaksi</li>
              <li>Akses ke promo khusus member</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4" style={{ borderTopColor: '#f39c12' }}>
            <div className="text-center mb-4">
              <TrophyOutlined style={{ fontSize: 36, color: '#f39c12' }} />
              <Title level={4} style={{ color: '#f39c12', marginTop: 12 }}>Gold</Title>
            </div>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Diskon 10% untuk setiap pembelian</li>
              <li>Gratis minuman dan dessert untuk pembelian di atas Rp 150.000</li>
              <li>Poin reward 2x lipat untuk setiap transaksi</li>
              <li>Prioritas reservasi</li>
              <li>Akses ke menu spesial</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4" style={{ borderTopColor: '#8e44ad' }}>
            <div className="text-center mb-4">
              <CrownOutlined style={{ fontSize: 36, color: '#8e44ad' }} />
              <Title level={4} style={{ color: '#8e44ad', marginTop: 12 }}>Platinum</Title>
            </div>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Diskon 15% untuk setiap pembelian</li>
              <li>Gratis appetizer, minuman, dan dessert untuk pembelian di atas Rp 200.000</li>
              <li>Poin reward 3x lipat untuk setiap transaksi</li>
              <li>Prioritas reservasi dan meja khusus</li>
              <li>Undangan ke acara eksklusif</li>
              <li>Layanan antar-jemput gratis (radius tertentu)</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <Title level={4}>Cara Menjadi Member</Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-hijau text-white font-bold mb-3">1</div>
              <h5 className="font-semibold mb-2">Daftar</h5>
              <p className="text-gray-600 text-sm">Isi formulir pendaftaran di restoran atau melalui website kami.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-hijau text-white font-bold mb-3">2</div>
              <h5 className="font-semibold mb-2">Aktivasi</h5>
              <p className="text-gray-600 text-sm">Aktivasi akun melalui email yang kami kirimkan.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-hijau text-white font-bold mb-3">3</div>
              <h5 className="font-semibold mb-2">Nikmati Keuntungan</h5>
              <p className="text-gray-600 text-sm">Mulai nikmati semua keuntungan sebagai member Sedap.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
