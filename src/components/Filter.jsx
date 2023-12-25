import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Filter({ filterQuery, setFilterQuery }) {
  return (
    <div className="flex gap-x-3 px-2 py-2 bg-slate-500 rounded-lg w-[370px]">
      <MagnifyingGlassIcon className="h-6 w-6" />
      <input
        className="bg-slate-500 border-none outline-none w-full"
        type="text"
        value={filterQuery}
        onChange={e => setFilterQuery(e.target.value)}
        placeholder="Search by Name, Region, Subregion" />
    </div>
  );
}