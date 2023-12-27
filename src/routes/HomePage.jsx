import { useState } from 'react';
import CountryTable from '../components/CountryTable';
import Filter from '../components/Filter';
import SortBy from '../components/SortBy';
import RegionSelection from '../components/RegionSelection';
import StatusSelection from '../components/StatusSelection';
import { useCountries } from '../context/CountryContext';

export default function HomePage() {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [isUnitedNationMember, setIsUnitedNationMember] = useState(false);
  const [isIndependent, setIsIndependent] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  const countriesToShow = useCountries()
    .filter(country => isUnitedNationMember ? country.unMember : true)
    .filter(country => isIndependent ? country.independent : true)
    .filter(country => selectedRegions.length === 0 || selectedRegions.includes(country.region))
    .filter(country => {
      const { common } = country.name;
      const { region, subregion } = country;

      return filterQuery &&
        common.toLowerCase().includes(filterQuery.toLowerCase()) ||
        region.toLowerCase().includes(filterQuery.toLowerCase()) ||
        (subregion && subregion.toLowerCase().includes(filterQuery.toLowerCase()))
    })
    .sort((a, b) => {
      if (!sortBy || sortBy === 'population') return b.population - a.population;
      if (sortBy === 'name') return a.name.common.toLowerCase().localeCompare(b.name.common.toLowerCase());
      if (sortBy === 'area') return b.area - a.area;
    });

  return (
    <div className="bg-container text-silver px-8 py-6 rounded-xl h-fit overflow-scroll border border-t border-input">
      <div className="flex justify-between items-center mb-6">
        <p className="text-slate-gray font-semibold">Found {countriesToShow.length} countries</p>
        <Filter
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery} />
      </div>
      <div className="md:grid grid-cols-12">
        <aside className="col-span-3 pr-8">
          <SortBy sortBy={sortBy} setSortBy={setSortBy} />
          <RegionSelection
            selectedRegions={selectedRegions}
            setSelectedRegions={setSelectedRegions} />
          <StatusSelection
            isUnitedNationMember={isUnitedNationMember}
            setIsUnitedNationMember={setIsUnitedNationMember}
            isIndependent={isIndependent}
            setIsIndependent={setIsIndependent} />
        </aside>
        <main className="flex flex-col col-span-9">
          <CountryTable countries={countriesToShow} />
        </main>
      </div>
    </div>
  )
}
