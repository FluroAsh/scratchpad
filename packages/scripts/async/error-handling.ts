async function executeAsyncOperation() {
  try {
    const result = await attemptAsyncOperation();
    console.log("Operation successful:", result);
  } catch (error) {
    handleAsyncError(error);
  }
}

async function attemptAsyncOperation() {
  // Potentially failing asynchronous operation
  const shouldFail = Math.random() > 0.5;
  if (shouldFail) {
    throw new Error("Operation failed");
  }
  return "Operation successful";
}

function handleAsyncError(error) {
  // Error handling logic
  console.log("Error occurred:", error.message);
}

executeAsyncOperation();
