import { useState } from "react";
import { Menu } from "./components/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      <div className="container">
        <h1>Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
