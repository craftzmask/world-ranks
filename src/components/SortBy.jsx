export default function SortBy({ sortBy, setSortBy }) {
  const handleChange = e => {
    setSortBy(e.target.value);
  }

  return (
    <div className="mt-8 lg:mt-3">
      <label className="block text-xs text-slate-gray font-semibold mb-2" htmlFor="sort-by">Sort by</label>
      <div className="pl-1 pr-4 border-2 border-input rounded-xl">
        <select
          className="bg-container outline-non p-2 pr-2 text-sm w-full"
          name="sort-by"
          id="sort-by"
          value={sortBy}
          onChange={handleChange}
        >
          <option value="name">Name</option>
          <option value="population">Population</option>
          <option value="area">Area</option>
        </select>
      </div>
    </div>
  );
}