import { useState } from "react";
import { TreeView } from "./TreeView";
import classnames from 'classnames';

export const TreeNode = ({node}) => {
    const {children, label} = node;
    const [showChildren, setShowChildren] = useState(false);
    return (
        <>
            <div className={classnames('py-2 cursor-pointer')} onClick={() => setShowChildren(true)}>
                <span>{label}</span>
            </div>
            <ul className={classnames('px-10')}>
                {showChildren && <TreeView treeData={children}/>}
            </ul>
        </>
    );
}