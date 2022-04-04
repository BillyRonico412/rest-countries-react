type Props = {
  setSearch: (value: string) => void;
  setFilter: (value: number) => void;
};

function Search(props: Props) {
  return (
    <section className="container mx-auto flex justify-between mt-8 flex-col md:flex-row gap-y-4">
      <div className="shadow rounded overflow-hidden flex items-center bg-white dark:bg-dark-blue">
        <i className="fa-solid fa-magnifying-glass px-4 fa-lg"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          className="py-4 outline-none w-96 block dark:bg-dark-blue text-dark-gray dark:text-white text-petit"
          onInput={(e) => props.setSearch(e.currentTarget.value)}
        />
      </div>
      <select
        className="text-center bg-white dark:bg-dark-blue shadow appearance-none text-petit rounded py-4 w-48"
        onInput={(e) => props.setFilter(Number(e.currentTarget.value))}
      >
        <option value={-1}>Filter by Region</option>
        <option value={0}>Africa</option>
        <option value={1}>America</option>
        <option value={2}>Asia</option>
        <option value={3}>Europe</option>
        <option value={4}>Oceania</option>
      </select>
    </section>
  );
}

export default Search;
