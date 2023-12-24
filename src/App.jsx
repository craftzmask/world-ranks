import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryTable from './components/CountryTable';

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => setCountries(res.data))
      .catch(error => console.error(error));

  }, []);
  
  return (
    <CountryTable countries={countries} />
  )
}
