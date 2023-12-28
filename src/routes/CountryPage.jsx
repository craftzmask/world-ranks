import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { useCountries } from '../context/CountryContext';
import { numberFormat } from '../utils/numberFormat';

export default function CountryPage() {
  const countries = useCountries();
  const [country, setCountry] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true `)
      .then(res => setCountry(res.data[0]))
      .catch(error => console.error(error));
  }, [name]);

  if (!country) return null;

  return (
    <div className="mx-auto text-center bg-container text-silver pb-6 md:rounded-xl h-fit w-full lg:w-3/5 overflow-visible border border-t border-input">
      <div>
        <img className="relative top-[-50px] mx-auto rounded" src={country.flags.png} alt={`${country.name.common}'s flag`} />
        <div className="relative top-[-20px]">
          <p className="font-bold text-3xl">{country.name.common}</p>
          <p className="mt-1">{country.name.official}</p>
        </div>
        
        <div className="flex justify-evenly mt-4">
          <div className="flex items-center py-2 bg-input rounded-xl">
            <span className="text-sm px-6 py-2">Population</span>
            <div className="border-l w-1 h-full border-container"></div>
            <span className="text-sm px-6 py-2">{numberFormat(country.population)}</span>
          </div>
          <div className="flex items-center py-2 bg-input rounded-xl">
            <span className="text-sm px-6 py-2">Area (km <sup>2</sup>)</span>
            <div className="border-l h-full border-container"></div>
            <span className="text-sm px-6 py-2">{numberFormat(country.area)}</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex justify-between text-sm border-t border-input px-4 py-6">
          <span className="text-slate-gray">Capital</span>
          <span>{country.capital}</span>
        </div>
        <div className="flex justify-between text-sm border-t border-input px-4 py-6">
          <span className="text-slate-gray">Subregion</span>
          <span>{country.subregion}</span>
        </div>
        <div className="flex justify-between text-sm border-t border-input px-4 py-6">
          <span className="text-slate-gray">Language</span>
          <span>{Object.values(country.languages).join(',')}</span>
        </div>
        <div className="flex justify-between text-sm border-t border-input px-4 py-6">
          <span className="text-slate-gray">Currencies</span>
          <span>{Object.values(country.currencies).map(c => c.name).join(',')}</span>
        </div>
        <div className="flex justify-between text-sm border border-input px-4 py-6 border-collapse">
          <span className="text-slate-gray">Continents</span>
          <span>{country.continents.join(',')}</span>
        </div>
      </div>

      <div className="px-4 py-7">
        <p className="text-start text-sm text-slate-gray mb-6">Neighbouring Countries</p>
        <div className="flex items-center flex-wrap gap-4">
          {countries.map(c => {
            if (country.borders.includes(c.cca3)) {
              return (
                <Link key={c.name.official} to={`/countries/${c.name.official}`}>
                  <div className="flex flex-col items-center justify-center text-xs">
                    <img className="rounded mb-2" src={c.flags.png} width="80" alt={`${c.name.common}'s flag`} />
                    <p>{c.name.common}</p>
                  </div>
                </Link>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
}

