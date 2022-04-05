import { useNavigate } from "react-router-dom";

type Props = {
  numero: number;
  linkImage: string;
  name: string;
  numberPopulation: number;
  region: string;
  capital: string;
};

function Flag(props: Props) {
  const navigate = useNavigate();

  return (
    <li
      className="rounded overflow-hidden shadow w-full bg-white dark:bg-dark-blue cursor-pointer group"
      onClick={() => navigate("/" + props.numero)}
    >
      <div className="w-full aspect-video overflow-hidden">
        <img
          src={props.linkImage}
          alt="drapeau"
          className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="px-8 pt-4 pb-8 text-petit">
        <h2 className="font-extrabold">{props.name}</h2>
        <ul className="mt-4">
          <li>
            <span className="font-semibold">Population: </span>
            <span>{props.numberPopulation}</span>
          </li>
          <li>
            <span className="font-semibold">Region: </span>
            <span>{props.region}</span>
          </li>
          <li>
            <span className="font-semibold">Capital: </span>
            <span>{props.capital}</span>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default Flag;
