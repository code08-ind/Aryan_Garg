import React from 'react';
import AGloader from '../assets/ag-loader.png';

const Loader = () => {
    return (
        <section className="flex justify-center items-center flex-col w-full h-full bg-deep-blue">
            <img src={AGloader} className='animate-spin' alt="Loader" />
        </section>
    );
}

export default Loader;