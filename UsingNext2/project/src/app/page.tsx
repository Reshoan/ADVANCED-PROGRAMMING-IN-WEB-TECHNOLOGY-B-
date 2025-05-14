import Link from 'next/link';
import React from 'react';
import Home from './home/page';

const componentName = () => {
    return (
        <div>
        <h1>Main Page</h1>
        <p>Welcome to the main page!</p>
        <Link href="/home">Go to Home Page</Link>
        <Home />
        </div>
    );
    }

    export default componentName;