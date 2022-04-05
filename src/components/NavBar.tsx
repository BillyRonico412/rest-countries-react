import { useEffect, useState } from "react";

function NavBar() {
  const [darkMode, setDarkMode] = useState<Boolean>();

  useEffect(() => {
    if (window.localStorage.getItem("dark") !== null)
      setDarkMode(window.localStorage.getItem("dark") === "true");
    else setDarkMode(false);
    window.addEventListener("storage", () => {
      if (window.localStorage.getItem("dark") !== null)
        setDarkMode(window.localStorage.getItem("dark") === "true");
      else setDarkMode(false);
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem("dark", String(darkMode));
    if (darkMode) document.querySelector("html")?.classList.add("dark");
    else document.querySelector("html")?.classList.remove("dark");
  }, [darkMode]);

  return (
    <header className="shadow py-4 bg-white dark:bg-dark-blue text-petit md:text-normal">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-extrabold">Where in the world?</h1>
        <button
          className="flex items-center gap-x-2"
          onClick={() => setDarkMode(!darkMode)}
        >
          <i className="fa-solid fa-moon"></i>
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
