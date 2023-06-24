import React from "react";

export const LayoutProvider = ({height, children}) => {
    return (
        <div className={`px-8 py-5 bg-white dark:bg-[#182235] ${height}`}>
            {children}
        </div>
    );
}