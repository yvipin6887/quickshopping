
import { TreeNode } from "./TreeNode";

export const TreeView = ({treeData}) => {

    return (
        <ul>
        {treeData && treeData.map((node) => (
            <TreeNode node={node} key={node.key}/>    
         ))}
        </ul>
        
        
    );
}
