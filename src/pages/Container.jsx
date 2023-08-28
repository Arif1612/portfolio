import React from 'react';

const Container = ({children}) => {
    return (
        <div className="max-w-screen-xl md:mx-12 mx-auto ">
            {children}
        </div>
    );
};

export default Container;