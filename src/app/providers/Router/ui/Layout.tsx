import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/Header';

export const Layout = () => {
    return (
        <Suspense fallback=''>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Suspense>
    );
};
