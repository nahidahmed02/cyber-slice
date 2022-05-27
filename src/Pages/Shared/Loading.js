import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center my-6">
            <div className="w-10 h-10 border-t-2 border-orange-400 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;