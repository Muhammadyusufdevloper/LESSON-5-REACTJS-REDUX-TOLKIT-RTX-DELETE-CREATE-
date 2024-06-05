import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home';
import Admin from './pages/admin';
import ManageProduct from './pages/admin/manage-product';
import CreateProduct from './pages/admin/create-product';
import Wishlist from './pages/wishlist';
import Single from './pages/single-rout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='single-rout/:id' element={<Single />} />
        </Route>
        <Route path='/'>
          <Route path='admin' element={<Admin />}>
            <Route path='create-product' element={<CreateProduct />} />
            <Route path='manage-product' element={<ManageProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
