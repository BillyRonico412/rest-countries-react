import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Countrie from "./interfaces/Countrie";
import Page404 from "./pages/404";
import Index from "./pages/Index";
import Id from "./pages/_Id";
import { AnimatePresence } from "framer-motion";

function App() {
  const [listCountrie, setListCountrie] = useState<Countrie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://restcountries.com/v2/all");
      setListCountrie(
        ((await res.json()) as Countrie[]).map((c, i) => ({ ...c, numero: i }))
      );
      setTimeout(() => setLoading(false));
    })();
  }, []);
  return (
    <div className="App">
      <NavBar />
      {loading ? (
        <Loading />
      ) : (
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Index listCountrie={listCountrie} />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="/:id" element={<Id listCountrie={listCountrie} />} />
          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
