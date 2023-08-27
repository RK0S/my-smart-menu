import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <Link to='/'>Main</Link>
            <Link to='/about'>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    );
};
