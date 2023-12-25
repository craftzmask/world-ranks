export default function CountryRow({ country }) {
  return (
    <tr>
      <td className="py-3">
        <img className="rounded" src={country.flags.png} width="50" height="auto" alt="" />
      </td>
      <td>{country.name.common}</td>
      <td>{country.population}</td>
      <td>{country.area}</td>
      <td>{country.region}</td>
    </tr>
  );
}