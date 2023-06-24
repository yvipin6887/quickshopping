import { createContext, useContext } from "react";
 const LayoutContext = createContext(null);

const  LayoutContextProvider = ({value = null}) => {
    return (
        <LayoutContext.Provider value={value}>
            <LayoutBody />
        </LayoutContext.Provider>
    );
}

const LayoutBody = () => {
    const useLayoutContext = useContext(LayoutContext);
    return (
        <div className="px-8 py-20 bg-white dark:bg-[#182235]">
            {useLayoutContext}
        </div>
    );
}

export default LayoutContextProvider;