import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Filter({ filterQuery, setFilterQuery }) {
  return (
    <div className="flex self-end gap-x-3 px-3 py-3 bg-input rounded-xl w-[370px]">
      <MagnifyingGlassIcon className="h-6 w-6 text-slate-gray" />
      <input
        className="bg-input border-none outline-none w-full text-sm text-silver placeholder:text-slate-gray"
        name="search"
        type="text"
        value={filterQuery}
        onChange={e => setFilterQuery(e.target.value)}
        placeholder="Search by Name, Region, Subregion" />
    </div>
  );
}