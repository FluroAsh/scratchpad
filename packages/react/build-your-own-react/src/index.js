function createElement(type, props, ...children) {
  console.log("Didact.createElement", { type, props, children });

  return {
    type,
    props: {
      ...props,
      // handles children that are primitive values
      children: children.map((child) => (typeof child === "object" ? child : createTextElement(child))),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createDom(fiber) {
  const dom = fiber.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(fiber.type);

  const isProperty = (key) => key !== "children";
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = fiber.props[name];
    });

  return dom;
}

function render(element, container) {
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element],
    },
  };
}

let nextUnitOfWork = null;

function workLoop(deadline) {
  let shouldYield = false;

  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }
  requestIdleCallback(workLoop);
}
requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  // If the fiber has a dom property, create a DOM node for it
  if (fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  // If the fiber has a parent, append the created DOM node to the parent's DOM node
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
  }

  // Get the children elements from the fiber's props
  const elements = fiber.props.children;
  let index = 0;
  let prevSibling = null;

  // Iterate over the children elements to create fibers for each child
  while (index < elements.length) {
    const element = elements[index];

    // Create a new fiber for the child element
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    };

    // If this is the first child, set it as the child of the current fiber
    if (index === 0) {
      fiber.child = newFiber;
    } else {
      // Otherwise, set it as the sibling of the previous child
      prevSibling.sibling = newFiber;
    }

    // Update prevSibling to the current newFiber
    prevSibling = newFiber;
    index++;
  }

  // If the fiber has a child, return the child to continue the work
  if (fiber.child) {
    return fiber.child; // start with child
  }

  let nextFiber = fiber;

  // Traverse up the fiber tree to find the next sibling or parent
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling; // if no child we look for a sibling
    }
    nextFiber = nextFiber.parent; // if there is no child OR sibling, then we look for a parent
  }
}

const Didact = {
  createElement,
  render,
};

/** @jsx Didact.createElement */
const element = (
  <div className="container">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Didact</h2>
  </div>
);

const container = document.getElementById("root");
Didact.render(element, container);
