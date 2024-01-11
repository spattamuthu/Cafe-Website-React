
import './App.css';
import { Navbar } from './Component/Navbar';
import { Banner } from './Component/Banner/Banner';
import {Array} from "./Component/Array/Array"
import{Array3} from "./Component/Array3/Array3"
import{Array2} from "./Component/Array2/Array2"
import{About} from "./Component/About/About"
import { Gallery } from './Component/Gallery/Gallery';
import { Footer } from './Component/Footer/Footer';
function App() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Array/>
        <Array2/>
        <Array3/>
        <About/>
        <Gallery/>
        <Footer/>
        
    </div>
      );
}

export default App;
