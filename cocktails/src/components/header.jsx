import './header.css';

const Header = () => {
  return (
    <header>
      <h1 className="headerH1">Cocktails</h1>
      <div className="navButtons">
        <a href="/">
          <button>Gå till startsidan</button>
        </a>
        <a href="/Drinkar">
          <button>Drinkrecept</button>
        </a>
        <a href='/Kontakt'>
        <button>Kontakta oss</button>
        </a>
        
      </div>
    </header>
  );
};
export default Header;
