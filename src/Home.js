
import './Home.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import Hero from "./components/Hero";
import Slider from './components/Slider';
import Navbar from "./components/Navbar";
const navbarLinks=[{url:"https://www.facebook.com/",title:"currency"},{url:"#",title:"language"}
,{url:"#",title:"notes"},{url:"#",title:"clock"}]
function App() {
  return (<div className='App'>
  <Navbar NavbarLinks={navbarLinks}/>
  <Hero imagesrc={img1}/>
  <Slider imagesrc={img2} title="Be an EXplorer"
    subtitle="our platform"
  />
  </div>);
}

export default App;
