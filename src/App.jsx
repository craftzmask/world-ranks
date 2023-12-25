import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryTable from './components/CountryTable';
import Filter from './components/Filter';
import SortBy from './components/SortBy';
import RegionSelection from './components/RegionSelection';
import StatusSelection from './components/StatusSelection';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [isUnitedNationMember, setIsUnitedNationMember] = useState(false);
  const [isIndependent, setIsIndependent] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  let countriesToShow = countries
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

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => setCountries(res.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className=" bg-container bg-contain bg-top bg-no-repeat h-screen bg-hero-img px-10">
      <div className="relative h-[78%] rounded-xl overflow-hidden top-60 grid grid-cols-12 px-8 py-6 border-2 border-input bg-container text-silver">
        <aside className="col-span-3 pr-9">
          <p className="mt-3 text-slate-gray font-semibold">Found {countriesToShow.length} countries</p>
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
          <Filter
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery} />
          <CountryTable countries={countriesToShow} />
        </main>
      </div>
    </div>
  )
}
