import { useEffect, useState } from "react";
import Flag from "../components/Flag";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Search from "../components/Search";

function Index() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(0);
  const [tabPays, setTabPays] = useState<any[]>([]);
  const [chargement, setChargement] = useState(true);

  const tabRegion = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    (async () => {
      const res = await fetch("https://restcountries.com/v2/all");
      setTabPays(await res.json());
      setTimeout(() => setChargement(false));
    })();
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <Search
        setSearch={(value: string) => setSearch(value)}
        setFilter={(value: number) => setFilter(value)}
      />
      {chargement ? (
        <Loading />
      ) : (
        <ul className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-14 gap-x-14 mt-16">
          {tabPays
            .filter(
              (pays) =>
                new RegExp(search, "i").test(pays.name as string) &&
                (filter === -1 || (pays.region as string) === tabRegion[filter])
            )
            .map((pays, i) => (
              <Flag
                key={i}
                name={pays.name as string}
                capital={pays.capital as string}
                region={pays.region as string}
                numberPopulation={pays.population as number}
                linkImage={pays.flags.png as string}
              />
            ))}
        </ul>
      )}
    </div>
  );
}

export default Index;
