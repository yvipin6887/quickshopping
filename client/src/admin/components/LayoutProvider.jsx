import React from "react";

export const LayoutProvider = ({className = 'h-96', children}) => {
    return (
        <div className={`px-8 py-5 bg-white dark:bg-[#182235] ${className}`}>
            {children}
        </div>
    );
}