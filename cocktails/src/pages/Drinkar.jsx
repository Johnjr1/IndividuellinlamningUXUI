import './Drinkar.css';
import thaibasil from '../assets/thaibasil.jpeg';
import margarita from '../assets/margarita.webp';
import oldfashioned from '../assets/oldfashioned.jpeg';
import negroni from '../assets/negroni.jpeg';
import whiskeysour from '../assets/whiskeysour.webp';
import cubalibre from '../assets/cubalibre.jpeg';

const Drinkar = () => {
  return (
    <main>
      <div className='mainDiv'>
        <h1>Drinkar</h1>
        <section className="drinkSection">
          <div className='imgDiv'>
            <img src={thaibasil} alt="En bild som visar drinken thai basil" />
          </div>
          <div className='textDiv'>
            <h2>Thai Basil</h2>
            <h3>Ingredienser</h3>
              <ul>
                <li>5 cl Gin</li>
                <li>3 cl Citronjuice</li>
                <li>3 cl Thaibasilikasockerlag</li>
                <li>Kokosskum</li>
              </ul>
            <h3>Instruktioner</h3>
            <p>
              Gör en vanlig sockerlag med lika delar socker och vatten. Häll upp
              3 dl sockerlag i en blender eller en behållare för stavmixer.
              Tillsätt bladen från en hel kruka thaibasilika. Mixa sockerlagen i
              flera minuter tills det inte längre går att se några bitar av
              thaibasilikan. Sila sockerlagen genom en finmaskig sil för att få
              bort små partiklar. Förvara på flaska i kylskåp. Toppa med
              kokosskum.
            </p>
          </div>
        </section>
        <section className="drinkSection">
        <div className='imgDiv'>
            <img src={margarita} height="500rem" alt="En bild som visar drinken margarita" />
          </div>
          <div className='textDiv'>
            <h2>Margarita</h2>
            <h3>Ingredienser</h3>
            <ul>
              <li>4 cl Tequila</li>
              <li>2 cl Apelsinlikör (Triple sec)</li>
              <li>2 cl Limejuice</li>
            </ul>
            <h3>Instruktioner</h3>
            <p>
              Förbered margarita-glaset genom att först sprida ut ett lager salt
              på ett fat. Fukta glasets kanter med en limeklyfta. Doppa glaset i
              saltet så att det fastnar. Ett tips om du serverar drinken till
              någon annan än dig själv är att endast salta halva glaset så kan
              den som dricker Margaritan själv välja att dricka med eller utan
              salt. Blanda alla ingredienser i en shaker. Fyll shakern med is
              och skaka. Sila upp drinken i glaset. Garnera med en limeklyfta.
            </p>
          </div>
        </section>
        <section className="drinkSection">
        <div className='imgDiv'>
            <img src={oldfashioned} height="500rem" alt="En bild som visar drinken old fashioned" />
          </div>
          <div className='textDiv'>
            <h2>Old Fashioned</h2>
            <h3>Ingredienser</h3>
            <ul>
              <li>6 cl Whiskey</li>
              <li>1 cl Sockerlag</li>
              <li>4 stänk Angostura Bitters</li>
            </ul>
            <h3>Instruktioner</h3>
            <p>
              Häll sockerlag i ett rörglas, shaker eller lämplig behållare att
              röra drinken i. Sockerlagen i den här drinken görs lämpligen på
              rårörsocker och med två delar socker och en del vatten. Tillsätt
              därefter några stänk bitters och slutligen whiskey. Eftersom en
              Old Fashioned till allra största del består av whiskey är det
              viktigt att välja en typ av whiskey samt ett fabrikat som du själv
              tycker om. Vissa föredrar bourbon medan vissa hellre använder rye
              whiskey. Fyll behållaren med is och rör drinken med en barsked
              tills den är riktigt kall. Det här momentet är både till för att
              kyla drinken, men även för att tillsätta vatten. Sila upp drinken
              i ett isfyllt glas (förslagsvis med en stor isbit). Garnera sedan
              med en bit apelsinskal som du först klämmer ihop för att spreja
              citrusoljorna över drinken.
            </p>
          </div>
        </section>
        <section className="drinkSection">
        <div className='imgDiv'>
            <img src={negroni} height="500rem" alt="En bild som visar drinken negroni" />
          </div>
          <div className='textDiv'>
            <h2>Negroni</h2>
            <h3>Ingredienser</h3>
            <ul>
              <li>2 cl Gin</li>
              <li>2 cl Campari</li>
              <li>2 cl Söt Vermouth (Röd)</li>
            </ul>
            <h3>Instruktioner</h3>
            <p>
              Häll alla ingredienser i ett rörglas med is. Saknar du rörglas går
              det bra med någon annan behållare där du kan röra runt drinken med
              is. Om du bara gör en drink till dig själv, går det alldeles
              utmärkt att röra drinken direkt i glaset som du tänkt dricka ur.
              Rör drinken i ca 30-45 sekunder. Smaka av några gånger för att
              känna efter när du hittat rätt. Att röra drinken är till för att
              dels kyla drinken, men också för att späda ut den. Sila upp
              drinken i ett isfyllt glas. En så stor isbit som möjligt är att
              föredra eftersom det får drinken att inte fortsätta spädas ut i
              samma tempo som med flera mindre isbitar. Ta en bit apelsinzest
              och pressa det över drinken för att få ut apelsinskalets oljor.
              Gnid zesten mot glasets kanter innan du stoppar ner det i drinken.
            </p>
          </div>
        </section>
        <section className="drinkSection">
        <div className='imgDiv'>
            <img src={whiskeysour} height="500rem" alt="En bild som visar drinken whiskey sour" />
          </div>
          <div className='textDiv'>
            <h2>Whiskey Sour</h2>
            <h3>Ingredienser</h3>
            <ul>
              <li>5 cl Bourbon whiskey</li>
              <li>3 cl Citronjuice</li>
              <li>2 cl Sockerlag</li>
              <li>2 cl Äggvita</li>
              <li>2 stänk Angostura Bitters</li>
            </ul>
            <h3>Instruktioner</h3>
            <p>
              Tillsätt alla ingredienser till en tom shaker. Skaka shakern utan
              is (så kallad torrskakning) så att äggvitan skummar och blandar
              sig bättre. Fyll därefter upp shakern med is och skaka igen tills
              drinken blivit kall. Sila upp din Whiskey Sour i ett glas och
              garnera på valfritt vis (vanligtvis garneras drinken med ett
              körsbär och ett citronhjul).
            </p>
          </div>
        </section>
        <section className="drinkSection">
        <div className='imgDiv'>
            <img src={cubalibre} height="500rem" alt="En bild som visar drinken cuba libre" />
          </div>
          <div className='textDiv'>
            <h2>Cuba Libre</h2>
            <h3>Ingredienser</h3>
            <ul>
              <li>4 cl Ljus rom</li>
              <li>2 cl Limejuice</li>
              <li>Coca-Cola</li>
            </ul>
            <h3>Instruktioner</h3>
            <p>
              Fyll ett glas med is. Tillsätt rom och limejuice. Fyll upp glaset
              med Coca-Cola och rör om. Garnera med lime.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Drinkar;
