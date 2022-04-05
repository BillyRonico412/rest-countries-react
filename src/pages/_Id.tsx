import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Countrie from "../interfaces/Countrie";

type Props = {
  listCountrie: Countrie[];
};

function Id(props: Props) {
  const params = useParams();
  const navigate = useNavigate();

  const [countrie, setCountrie] = useState<Countrie>();

  useEffect(() => {
    if (!params.id || !/^[0-9]+$/.test(params.id) || Number(params.id) >= 255)
      navigate("/404");
    else setCountrie(props.listCountrie[Number(params.id)]);
  }, [navigate, params.id, props.listCountrie]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container my-16 mx-auto"
    >
      <Link
        to="/"
        className="rounded shadow bg-white dark:bg-dark-blue py-2 flex justify-center items-center text-sm lg:text-md w-24 lg:w-36"
      >
        <i className="fa-solid fa-arrow-left-long fa-sm"></i>
        <span className="ml-2">Back</span>
      </Link>
      {countrie && (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 mt-8">
          <div>
            <img
              src={
                Number(params.id) === 5
                  ? countrie.flags.png
                  : countrie.flags.svg
              }
              alt={"flag to " + countrie.name}
              className="w-full shadow aspect-video"
            />
          </div>
          <div className="mt-12 lg:mt-0 text-petit lg:text-[15px]">
            <h2 className="font-bold text-xl">{countrie.name}</h2>
            <div className="flex flex-col md:flex-row justify-between mt-8">
              <ul className="flex flex-col gap-y-3">
                <li>
                  <span className="font-semibold">Native Name: </span>
                  <span>{countrie.nativeName}</span>
                </li>
                <li>
                  <span className="font-semibold">Population: </span>
                  <span>{countrie.population}</span>
                </li>
                <li>
                  <span className="font-semibold">Region: </span>
                  <span>{countrie.region}</span>
                </li>
                <li>
                  <span className="font-semibold">Sub Region: </span>
                  <span>{countrie.subregion}</span>
                </li>
                <li>
                  <span className="font-semibold">Capital: </span>
                  <span>{countrie.capital}</span>
                </li>
              </ul>
              <ul className="flex flex-col gap-y-3 mt-12 md:mt-0">
                <li>
                  <span className="font-semibold">Top Level Domain: </span>
                  {countrie.topLevelDomain && (
                    <span>
                      {countrie.topLevelDomain.map((d, i) =>
                        i === 0 ? d : `, ${d}`
                      )}
                    </span>
                  )}
                </li>
                <li>
                  <span className="font-semibold">Currencies: </span>
                  {countrie.currencies && (
                    <span>
                      {countrie.currencies.map(
                        (c, i) =>
                          (i === 0 ? `${c.name}` : `, ${c}`) + ` (${c.symbol})`
                      )}
                    </span>
                  )}
                </li>
                {countrie.languages && (
                  <li>
                    <span className="font-semibold">Languages: </span>
                    <span>
                      {countrie.languages.map((l, i) =>
                        i === 0 ? l.name : `, ${l.name}`
                      )}
                    </span>
                  </li>
                )}
              </ul>
            </div>
            {countrie.borders && (
              <div className="mt-12 font-semibold">
                <span>Border Countries: </span>
                <div className="flex flex-wrap gap-x-3 gap-y-3 mt-3">
                  {countrie.borders.map((b, i) => (
                    <button
                      className="px-4 py-1.5 rounded shadow bg-white dark:bg-dark-blue"
                      key={i}
                      onClick={() =>
                        navigate(
                          "/" +
                            props.listCountrie.findIndex(
                              (p) => p.alpha3Code === b
                            )
                        )
                      }
                    >
                      {
                        (
                          props.listCountrie.find(
                            (p) => p.alpha3Code === b
                          ) as Countrie
                        ).name
                      }
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </motion.div>
  );
}

export default Id;
