import clsx from 'clsx';

export default function RegionSelection({ selectedRegions, setSelectedRegions }) {
  const regions = ['Americas', 'Antarctic', 'Africa', 'Asia', 'Europe', 'Oceania'];

  const handleClick = region => {
    // Toggle a unselected/selected region
    if (!selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.concat(region));
    } else {
      setSelectedRegions(selectedRegions.filter(r => r !== region))
    }
  }

  return (
    <div className="mt-9">
      <p className="block text-xs text-slate-gray font-semibold mb-2">Region</p>
      <div className="flex flex-wrap gap-2 text-slate-gray">
      {
        regions.map(region => <div
          key={region}
          className={clsx({
            "text-sm px-3 py-2 rounded-xl hover:cursor-pointer hover:bg-input hover:text-silver": true,
            "bg-input text-silver": selectedRegions.includes(region)
          })}
          onClick={() => handleClick(region)}>{region}
        </div>)
      }
    </div>
    </div>
  );
}