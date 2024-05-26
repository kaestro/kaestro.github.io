// pages/_app.tsx
import React from 'react'; // Add import statement for 'React' namespace
import '../styles/global.css';

function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
    return <Component {...pageProps} />
}

export default MyApp