import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = React.lazy(() => import('./pages/Home'));
const Checkout = React.lazy(() => import('./pages/Checkout'));

function App() {
    return (
        <Suspense fallback={<h2>Loading....</h2>}>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Suspense>
    );
}

export default App;
