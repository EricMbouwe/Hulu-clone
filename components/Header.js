import Image from 'next/image';
import HeaderIcon from './HeaderIcon';

function Header() {
  return (
    <header>
      <h1>This is the header</h1>
      <div>
        <HeaderIcon title={'Home'} icon={'icon'} />
      </div>
      <Image
        src="https://links.papareact.com/ua6"
        className="object-contain"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
