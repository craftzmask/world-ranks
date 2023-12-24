export default function CountryRow({ country }) {
  return (
    <tr>
      <td>
        <img src={country.flags.png} width="100" height="auto" alt="" />
      </td>
      <td>{country.name.common}</td>
      <td>{country.population}</td>
      <td>{country.area}</td>
      <td>{country.region}</td>
    </tr>
  );
}