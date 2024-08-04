import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React & TypeScript</h1>
      <div className="card">
        <p>
          Styling with <a href="https://emotion.sh/docs/introduction">EmotionCSS</a> & <a href="https://tailwindcss.com/">TailwindCSS</a>
        </p>
        <p>
          State management with <a href="https://docs.pmnd.rs/zustand/getting-started/introduction">Zustand</a>
        </p>
        <p>
          Data fetching with <a href="https://tanstack.com/query/latest">TanStack Query</a>
        </p>
        <p>
          Routing with <a href="https://tanstack.com/router/latest">TanStack Router</a>
        </p>
        <p>
          Testing with <a href="https://jestjs.io/">Jest</a> & <a href="https://testing-library.com/">React Testing Library</a>
        </p>
        <p>
          Form Management with <a href="https://react-hook-form.com/">React Hook Form</a>
        </p>
      </div>
    </>
  );
}

export default App;
