'use client';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
    useEffect(() => {
        console.error('Global Error', error);
    }, [error]);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Something went wrong!</h1>
            <p>{error?.message || 'An unextected error occurred.'}</p>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
}