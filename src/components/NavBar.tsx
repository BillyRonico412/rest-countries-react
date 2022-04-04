import { useState } from "react";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const updateDarkMode = () => {
    if (!darkMode) document.querySelector("html")?.classList.add("dark");
    else document.querySelector("html")?.classList.remove("dark");
    setDarkMode(!darkMode);
  };
  return (
    <header className="shadow py-4 bg-white dark:bg-dark-blue text-petit md:text-normal">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-extrabold">Where in the world?</h1>
        <button className="flex items-center gap-x-2" onClick={() => updateDarkMode()}>
          <i className="fa-solid fa-moon"></i>
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
