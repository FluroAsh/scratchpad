export default function ({ name }) {
  const el = document.createElement("div");
  el.className = "some-element";

  el.innerHTML = `
      <h1>Testing from Playwright</h1>
      <p>Courtesy of ${name}</p>
    `;

  el.style.backgroundColor = "lightblue";
  el.style.padding = "30px";

  document.body.insertAdjacentElement("beforebegin", el);
}
