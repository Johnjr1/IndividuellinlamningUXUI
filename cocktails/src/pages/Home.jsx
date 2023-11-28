import './Home.css';
import negroniVideo from '../assets/negroniVideo.mp4'

const Home = () => {
  return (
    <main>
      <h1>Veckans drink</h1>
      <div className="videoDiv">
        <h2>Se hur man gör en enkel negroni</h2>
        <video width="100%" height="100%" controls>
          <source src={negroniVideo} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='linkDiv'>
      <a href='https://sv.wikipedia.org/wiki/Negroni'>Hitta mer info om drinken här!</a>
      </div>
     
    </main>
  );
};

export default Home;
