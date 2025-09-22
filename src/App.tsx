import { Menu } from "./components/Menu";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
