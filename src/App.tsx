import { Toaster } from "sonner";
import { Menu } from "./modules/menu/pages/Menu";
import { Outlet } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Toaster />
      <Menu />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default App;
