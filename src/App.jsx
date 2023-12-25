import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryTable from './components/CountryTable';
import Filter from './components/Filter';
import SortBy from './components/SortBy';
import RegionSelection from './components/RegionSelection';
import CheckBox from './components/CheckBox';

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
      if (sortBy === 'name') return b.name.common - a.name.common;
      if (sortBy === 'area') return b.area - a.area;
    });

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => setCountries(res.data))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <>
      <div className="grid-cols-12">
        <aside>
          <p>Found {countriesToShow.length} countries</p>
          <SortBy sortBy={sortBy} setSortBy={setSortBy} />
          <RegionSelection
            selectedRegions={selectedRegions}
            setSelectedRegions={setSelectedRegions} />
          <CheckBox
            isChecked={isUnitedNationMember}
            checkHandler={() => setIsUnitedNationMember(!isUnitedNationMember)}
            label="Member of the United Nations" />
          <CheckBox
            isChecked={isIndependent}
            checkHandler={() => setIsIndependent(!isIndependent)}
            label="Independent" />
        </aside>
      </div>
      <Filter
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery} />
      <CountryTable countries={countriesToShow} />
    </>
  )
}
