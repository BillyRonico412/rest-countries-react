import { useEffect, useRef, useState } from "react";
import Flag from "../components/Flag";
import Loading from "../components/Loading";
import Search from "../components/Search";
import Countrie from "../interfaces/Countrie";
import { motion } from "framer-motion";

type Props = {
  listCountrie: Countrie[];
};

function Index(props: Props) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(-1);
  const [allImageLoad, setAllImageLoad] = useState(false);

  const listRegion = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    let imgLoad = 0;
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("load", () => {
        imgLoad++;
        if (imgLoad === 250) setAllImageLoad(true);
      });
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {!allImageLoad && <Loading></Loading>}
      <div className={!allImageLoad ? "invisible" : "visible"}>
        <Search
          setSearch={(value: string) => setSearch(value)}
          setFilter={(value: number) => setFilter(value)}
        />
        <ul className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-14 gap-x-14 mt-16">
          {props.listCountrie
            .filter(
              (pays) =>
                new RegExp(search, "i").test(pays.name) &&
                (filter === -1 || pays.region === listRegion[filter])
            )
            .map((pays, i) => (
              <Flag
                numero={pays.numero}
                key={i}
                name={pays.name}
                capital={pays.capital}
                region={pays.region}
                numberPopulation={pays.population}
                linkImage={i === 5 ? pays.flags.png : pays.flags.svg}
              />
            ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Index;
