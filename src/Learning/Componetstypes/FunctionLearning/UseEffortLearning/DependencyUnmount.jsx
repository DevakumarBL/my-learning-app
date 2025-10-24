import React, { useEffect, useState } from 'react';

function DependencyUnmount() {
    const [count, setCount] = useState(0);
   

    useEffect(() => {
        const countTimer = setTimeout(() => {
            setCount(count + 1); 
        }, 1000);

        return () => {
            clearTimeout(countTimer); 
        };
    }, []);

    return (
        <div>
            <p>
                Count: {count} - 
                <button onClick={() => setCount(count * 2)}>Addme</button>
            </p>
        </div>
    );
}

export default DependencyUnmount;
