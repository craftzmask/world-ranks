import CountryRow from './CountryRow';

export default function CountryTable({ countries }) {
  return (
    <table className="w-full">
      <thead className="border-b-2 border-b-input">
        <tr className="text-slate-gray">
          <th className="text-start font-bold text-xs py-4">Flag</th>
          <th className="text-start font-bold text-xs">Name</th>
          <th className="text-start font-bold text-xs">Population</th>
          <th className="text-start font-bold text-xs">Area (km<sup>2</sup>)</th>
          <th className="text-start font-bold text-xs hidden xl:table-cell">Region</th>
        </tr>
      </thead>
      <tbody>
        {countries
          .map(country => <CountryRow key={country.name.official} country={country} />)
        }
      </tbody>
    </table>
  );
}