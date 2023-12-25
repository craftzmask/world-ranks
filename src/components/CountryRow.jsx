export default function CountryRow({ country }) {
  const numberFormat = number => {
    return `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <tr className="hover:cursor-pointer hover:bg-input" onClick={() => console.log('hello World')}>
      <td className="w-[10%] pt-4 pb-3">
        <img className="rounded" src={country.flags.png} width="55" height="auto" alt="" />
      </td>
      <td className="w-[20%]">{country.name.common}</td>
      <td className="w-[20%]">{numberFormat(country.population)}</td>
      <td className="w-[20%]">{numberFormat(country.area)}</td>
      <td className="w-[20%]">{country.region}</td>
    </tr>
  );
}