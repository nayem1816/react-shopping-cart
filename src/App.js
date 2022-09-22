import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
