import clsx from 'clsx';

export default function RegionSelection({ selectedRegions, setSelectedRegions }) {
  const regions = ['Oceania', 'Africa', 'Europe', 'Asia', 'Americas', 'Antarctic'];

  const handleClick = region => {
    // Toggle a unselected/selected region
    if (!selectedRegions.includes(region)) {
      setSelectedRegions(selectedRegions.concat(region));
    } else {
      setSelectedRegions(selectedRegions.filter(r => r !== region))
    }
  }

  return (
    <div>
      {
        regions.map(region => <div
          key={region}
          className={clsx({
            "hover:cursor-pointer hover:bg-slate-400": true,
            "bg-slate-400": selectedRegions.includes(region)
          })}
          onClick={() => handleClick(region)}>{region}
        </div>)
      }
    </div>
  );
}