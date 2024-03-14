import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/home/HomePage"
import { Navigation } from "./components/Navbar/Navigation"
import Signin from "./pages/auth/Signin"
import Signup from "./pages/auth/Signup"
import AuthProvider from './contexts/AuthProvider';
import OrderProvider from './contexts/OrderProvider';
// import PrivateRoute from './routes/PrivateRoute';
// import PublicRoute from './routes/PublicRoute';
// import ContactScreen from './screens/ContactScreen';
// import ErrorScreen from './screens/ErrorScreen';
// import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ProductsScreen from './screens/ProductsScreen';
function App() {

  return (
    <>
      <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services/:title"></Route>
          <Route path="/medicines/" element={<ProductsScreen />} />
          <Route path="/medicines/:title" element={<ProductDetailScreen />} />
          <Route exact path="/orders" element= {<OrderScreen />} />
        </Routes>
        </OrderProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
