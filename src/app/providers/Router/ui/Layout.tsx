import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/Header';
import { PageLoader } from 'widgets/PageLoader';

export const Layout = () => {
    return (
        <Suspense fallback="">
            <Header />
            <Suspense fallback={<PageLoader />}>
                <Outlet />
            </Suspense>
        </Suspense>
    );
};
