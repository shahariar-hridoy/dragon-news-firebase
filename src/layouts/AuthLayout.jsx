
import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='W-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>
            <main className='W-11/12 mx-auto py-4'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;