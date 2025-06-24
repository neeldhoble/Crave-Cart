import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMenuPage from './pages/admin/AdminMenuPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import Navbar from './components/Navbar';
import ComboBuilder from './pages/ComboBuilder';
import GroupOrderPage from './pages/GroupOrderPage';
import WhatsAppButton from './components/WhatsAppButton';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/LandingPage';










function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/menu" element={<MenuPage />} /> */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} /> 
        <Route path="/combo" element={<ComboBuilder />} />
        <Route path="/group/:groupId" element={<GroupOrderPage />} />
        <Route path="/register" element={<RegisterPage />} />  
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />


        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/menu" element={<AdminMenuPage />} />
        <Route path="/admin/orders" element={<AdminOrdersPage />} />
        <Route path="/cart" element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            } />

        <Route path="/order" element={
          <ProtectedRoute>
            <OrderSuccessPage />
          </ProtectedRoute>
        } />
        
        

      </Routes>
      <WhatsAppButton/>
    </div>
  );
}

export default App;
