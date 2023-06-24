import React, {useEffect} from 'react';
import {useTabs} from "./Context/TabsContext";

export const Tabs = function({ children, tabs, defaultTab, onTabSelect, className, ...props }) {
    const { currentTab, setCurrentTab } = useTabs();

    useEffect(() => {
        setCurrentTab(defaultTab)
    }, [setCurrentTab, defaultTab])

    return (

        <div className={`tabs ${className}`} {...props} >
            <ul className="flex flex-wrap -mb-px">
                {Object.values(tabs).map((tabValue) => (
                    <li onClick={() => setCurrentTab(tabValue)} className={`mr-2 ${currentTab === tabValue ? 'active' : ''}`} key={tabValue} onClick={() => onTabSelect(tabValue)}> 
                    
                    <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">{tabValue} </a>
                    </li>
                ))}
            </ul>
            <div className="relative">
                {
                    children &&
                    React.Children.map(children, (child) => {
                        if(child.type.name !== 'Tab') {
                            throw new Error('The child components should be of type Tab')
                        }
                        return child.props.id === currentTab ? child : null;
                    })
                }
            </div>
        </div>
    );
};

export const Tab = function({ children, ...props }) {
    return <div  className='absolute left-0 top-0 my-5' {...props}>{children}</div>
}