import { useRouter } from 'next/router'
import requests from '../utils/requests';

function Navbar() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex scrollbar-hide px-10 sm:px-20 text-2xl space-x-10 sm:space-x-20 whitespace-nowrap overflow-x-scroll">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`) }
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] w-1/12 h-10"></div>
    </nav>
  );
}

export default Navbar;
