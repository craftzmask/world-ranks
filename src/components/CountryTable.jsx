import CountryRow from './CountryRow';

export default function CountryTable({ countries }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Population</th>
          <th>Area(km<sup>2</sup>)</th>
          <th>Region</th>
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