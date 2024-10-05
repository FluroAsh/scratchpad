type TreeNode = Node & {
  id: number;
  name: string;
};

// Async recursive search function
async function asyncRecursiveSearch(nodes: Node[] | NodeListOf<ChildNode>): Promise<void> {
  for (const node of nodes) {
    await asyncProcess(node);

    if (node.childNodes) {
      await asyncRecursiveSearch(node.childNodes);
    }
  }
}

// Asynchronous processing logic for nodes
async function asyncProcess(node: Node): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processing node: ${node.nodeName}`);
      resolve();
    }, 1000);
  });
}

// Example usage
const tree: any = [
  {
    id: 1,
    nodeName: "Root",
    childNodes: [
      {
        id: 2,
        nodeName: "Child 1",
        childNodes: [
          {
            id: 3,
            nodeName: "Grandchild 1",
          },
          {
            id: 4,
            nodeName: "Grandchild 2",
          },
        ],
      },
      {
        id: 5,
        nodeName: "Child 2",
      },
    ],
  },
];

async function main() {
  console.log("Starting recursive search...");
  await asyncRecursiveSearch(tree);
  console.log("Recursive search completed.");
}

main().catch((error) => {
  console.error("Error during recursive search:", error);
});
