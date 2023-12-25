import CountryRow from './CountryRow';

export default function CountryTable({ countries }) {
  return (
    <table className="border-collapse w-full">
      <thead className="border-b-2">
        <tr>
          <th className="text-start">Flag</th>
          <th className="text-start">Name</th>
          <th className="text-start">Population</th>
          <th className="text-start">Area (km<sup>2</sup>)</th>
          <th className="text-start">Region</th>
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