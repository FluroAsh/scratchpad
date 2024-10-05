class Example {
  data: unknown;

  constructor(data: unknown) {
    this.data = data;
  }

  static async create() {
    const data = await fetchData(); // Asynchronously fetch data
    return new Example(data);
  }
}

// Usage
Example.create().then((exampleInstance) => {
  // Use the asynchronously initialized class instance
  console.log(exampleInstance);
});

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ example: "data" });
    }, 2000);
  });
}
