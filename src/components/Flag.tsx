type Props = {
  linkImage: string;
  name: string;
  numberPopulation: number;
  region: string;
  capital: string;
};

function Flag(props: Props) {
  return (
    <li className="rounded overflow-hidden shadow w-full bg-white dark:bg-dark-blue">
      <img
        src={props.linkImage}
        alt="drapeau"
        className="w-full aspect-video object-cover"
      />
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
