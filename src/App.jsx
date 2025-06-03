import React, { Suspense } from "react";
import "./assets/tailwind.css";
import Loading from "./components/Loading";
// import Dashboard from "./pages/Dashboard";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customer";
import { Route, Routes } from "react-router-dom";
// import MainLayout from "./layouts/MainLayouts";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
// import AuthLayout from "./layouts/AuthLayout";

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders =  React.lazy(() => import("./pages/Orders"))
const Customers =  React.lazy(() => import("./pages/Customer"))
const Login =  React.lazy(() => import("./pages/auth/Login"))
const Register =  React.lazy(() => import("./pages/auth/Register"))
const Forgot =  React.lazy(() => import("./pages/auth/Forgot"))
const AuthLayout =  React.lazy(() => import("./layouts/AuthLayout"))
const MainLayout =  React.lazy(() => import("./layouts/MainLayouts"))
//const ErrorPage =  React.lazy(() => import("./pages/ErrorPage"))
const ErrorPage =  React.lazy(() => import("./pages/ErrorPage"))
const Makanan =  React.lazy(() => import("./pages/Products"))
const Guest =  React.lazy(() => import("./pages/guest"))
const GuestLayout =  React.lazy(() => import("./layouts/GuestLayout"))
const Membership =  React.lazy(() => import("./pages/membership"))
const Pesanan =  React.lazy(() => import("./pages/pesanan"))
const Notes =  React.lazy(() => import("./pages/Notes"))



function App() {
  return (
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/products" element={<Makanan />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
        <Route path="/notes" element={<Notes />} />
      </Route>

      {/* Tambahan kode baru di bawah ini */}
      
      {/* Tambahkan User route */}
      <Route element={<MainLayout />}>
        <Route path="/users" element={
          <React.Suspense fallback={<Loading />}>
            <User />
          </React.Suspense>
        } />
        <Route path="/products/:id" element={<ProductDetail />} /> 
        <Route path="/pesanan" element={<Pesanan />} />
      </Route>
      
      {/* Aktifkan ErrorPage untuk menangani rute yang tidak ditemukan */}
      <Route path="*" element={
        <React.Suspense fallback={<Loading />}>
          <ErrorPage />
        </React.Suspense>
      } />
      {/* Guest Routes */}
        <Route path="/guest" element={<GuestLayout />}>
          <Route index element={<Guest />} />
          <Route path="membership" element={<Membership />} />
        </Route>
    </Routes>
    </Suspense>
  );
}

// Tambahkan import untuk komponen baru
const User = React.lazy(() => import("./pages/User"));
import ProductDetail from './pages/ProductDetail';


export default App;
