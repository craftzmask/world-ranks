import { useNavigate } from 'react-router-dom';
import { numberFormat } from '../utils/numberFormat';

export default function CountryRow({ country }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/countries/${country.name.official}`)
  }

  return (
    <tr className="hover:cursor-pointer hover:bg-input" onClick={handleClick}>
      <td className="w-[10%] pt-4 pb-3">
        <img className="rounded" src={country.flags.png} width="50" height="auto" alt="" />
      </td>
      <td className="w-[20%]">{country.name.common}</td>
      <td className="w-[20%]">{numberFormat(country.population)}</td>
      <td className="w-[20%]">{numberFormat(country.area)}</td>
      <td className="hidden xl:table-cell w-[20%]">{country.region}</td>
    </tr>
  );
}