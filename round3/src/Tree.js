import React, { useState } from 'react';

const TreeNode = ({ node, onToggle }) => {
  const hasChildren = node.children && node.children.length > 0;

  const handleToggle = () => {
    onToggle(node.id);
  };

  return (
    <div>
      <div onClick={handleToggle}>
        {hasChildren && (
          <span>{node.isExpanded ? '[-]' : '[+]'}</span>
        )}
        {node.name}
      </div>
      {hasChildren && node.isExpanded && (
        <ul>
          {node.children.map((child) => (
            <li key={child.id}>
              <TreeNode node={child} onToggle={onToggle} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const TreeView = ({ data }) => {
  const [treeData, setTreeData] = useState(data);

  const handleToggle = (nodeId) => {
    const updatedTreeData = toggleNodeExpansion(treeData, nodeId);
    setTreeData(updatedTreeData);
  };

  const toggleNodeExpansion = (nodes, nodeId) => {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        node.isExpanded = !node.isExpanded;
      }

      if (node.children && node.children.length > 0) {
        node.children = toggleNodeExpansion(node.children, nodeId);
      }

      return node;
    });
  };

  const renderTreeNodes = (nodes) => {
    return nodes.map((node) => (
      <li key={node.id}>
        <TreeNode node={node} onToggle={handleToggle} />
        {node.children && node.children.length > 0 && (
          <ul>{renderTreeNodes(node.children)}</ul>
        )}
      </li>
    ));
  };

  return <ul>{renderTreeNodes(treeData)}</ul>;
};

// Example usage
const treeData = [
  {
    id: 1,
    name: 'Node 1',
    children: [
      {
        id: 2,
        name: 'Child 1',
        children: [
          {
            id: 3,
            name: 'Leaf 1',
            children: []
          },
          {
            id: 4,
            name: 'Leaf 2',
            children: []
          }
        ]
      },
      {
        id: 5,
        name: 'Child 2',
        children: []
      }
    ]
  },
  {
    id: 6,
    name: 'Node 2',
    children: [
      {
        id: 7,
        name: 'Child 3',
        children: []
      }
    ]
  }
];

const App = () => (
  <div>
    <h1>Tree Structure UI Example</h1>
    <TreeView data={treeData} />
  </div>
);

export default App;
