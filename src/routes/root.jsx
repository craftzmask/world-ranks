import { Outlet, Link } from 'react-router-dom';
import { CountryProvider } from '../context/CountryContext';
import logo from '../assets/Logo.svg';

export default function root() {
  return (
    <div className="mx-auto bg-auto bg-top bg-no-repeat h-screen max-w-[1280px] bg-hero-img md:px-6 xl:px-10">
      <Link to="/">
        <div className="flex justify-center h-[240px]">
            <img className="xl:mt-6" src={logo} width="174" height="24" alt="Logo" />
        </div>
      </Link>
      <CountryProvider>
        <Outlet />
      </CountryProvider>
    </div>
  )
}