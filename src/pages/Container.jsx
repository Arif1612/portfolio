import React from 'react';

const Container = ({children}) => {
    return (
        <div className="max-w-screen-xl md:mx-12 mx-auto mt-12">
            {children}
        </div>
    );
};

export default Container;