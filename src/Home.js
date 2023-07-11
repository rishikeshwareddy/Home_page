
import './Home.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from "./assets/img5.jpg";
import Hero from "./components/Hero";
import Slider from './components/Slider';
import Navbar from "./components/Navbar";
const navbarLinks=[{url:"https://rishikeshwareddy.github.io/currency_converter/",title:"currency"},{url:"https://rishikeshwareddy.github.io/language_translator/",title:"language"}
,{url:"https://rishikeshwareddy.github.io/note/",title:"notes"},{url:"https://rishikeshwareddy.github.io/world_clock/",title:"clock"}]
function App() {
  return (<div className='App'>
  <Navbar NavbarLinks={navbarLinks}/>
  <Hero imagesrc={img1}/>
  <Slider imagesrc={img2} title="Seamlessly convert currencies with ease!"
    subtitle="Streamline your currency conversions effortlessly with our user-friendly website. Stay up-to-date with real-time rates and convert currencies with ease."
  />
  <Slider imagesrc={img3} title="Break language barriers with our powerful translation platform!"
    subtitle="Unlock a world of communication possibilities with our language translator website. Seamlessly translate languages and connect with people across the globe."
    flipped={true}
  />
  <Slider imagesrc={img5} title="Unleash your ideas, one note at a time."
    subtitle="Empower your ideas with our note-taking website and conquer your productivity."
  />
  <Slider imagesrc={img4} title="Discover the time around the globe with just a click!"
    subtitle="Never miss a beat with our world clock website. Seamlessly track time across multiple cities, wherever you are."
    flipped={true}
  />
  </div>);
}

export default App;
