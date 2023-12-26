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

  const countriesToShow = countries
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
    <div className="bg-container lg:bg-contain bg-top bg-no-repeat h-screen bg-hero-img md:px-6 xl:px-10 overflow-hidden">
      <div className="flex justify-center h-1/5">
        <img className="mt-6" src="src/assets/Logo.svg" width="174" height="24" alt="Logo" />
      </div>
      <div className="bg-container text-silver px-8 py-6 rounded-xl h-[75%] overflow-hidden border border-t border-input">
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
    </div>
  )
}
