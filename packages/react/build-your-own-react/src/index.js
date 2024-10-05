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

function render(element, container) {
  const node = element.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type);

  const isProperty = (key) => key !== "children";

  // if the key is not "children" we add it to the DOM (root container element)
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      node[name] = element.props[name];
    });

  element.props.children.forEach((child) => {
    render(child, node);
  });

  container.appendChild(node);
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
