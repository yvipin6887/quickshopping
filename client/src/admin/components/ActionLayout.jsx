import React, { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';

const ActionLayout = ({row, actionData,isOpenAction}) => {
    const location = useLocation();
    
    return (
        <div className='flex '>
            
                <NavLink
                end
                to={`${location.pathname}/edit/${row.id}`}
                className="mx-0.5" > Edit</NavLink>
        

        
          {/* <button onClick={() => setIsOpenAction(true)}>
             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/> </svg>
          </button>
          {isOpenAction ? <actionList /> : null} */}
          

        </div>
    );
}

const actionList = () => {
    return (
        <div id="dropdownDots" classname="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul classname="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
            <li>
                <a href="#" classname="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
                <a href="#" classname="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
                <a href="#" classname="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
            </ul>
            <div classname="py-2">
            <a href="#" classname="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
            </div>
        </div>
    );
}

export default ActionLayout;