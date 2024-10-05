import chalk from "chalk";

async function asyncPool(poolLimit: number, array, cb) {
  const result = [];
  const executing = [];

  for (const item of array) {
    const promise = Promise.resolve().then(() => cb(item, array));
    result.push(promise);

    if (poolLimit <= array.length) {
      console.log({ executingLength: executing.length, poolLimit });
      const e = promise.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);

      if (executing.length >= poolLimit) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(result);
}

// Simulate file upload with a delay
async function uploadFile(file) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(chalk.bgYellow.yellow.bold("\nUploaded file:"), `"${file.name}"`);
      resolve(file.name);
    }, Math.random() * 2000);
  });
}

async function limitedFileUpload(files) {
  return asyncPool(3, files, uploadFile);
}

// Mock files
const files = [
  { name: "file1.txt" },
  { name: "file2.txt" },
  { name: "file3.txt" },
  { name: "file4.txt" },
  { name: "file5.txt" },
  { name: "file6.txt" },
  { name: "file7.txt" },
  { name: "file8.txt" },
  { name: "file9.txt" },
  { name: "file10.txt" },
];

async function main() {
  console.log(chalk.bgYellow.yellow.bold("Starting file upload..."));
  const uploadedFiles = await limitedFileUpload(files);
  console.log(chalk.bgGreen.green.bold("\n✅ All files uploaded:"), uploadedFiles);
}

main().catch((error) => {
  console.error("Error during file upload:", error);
});
