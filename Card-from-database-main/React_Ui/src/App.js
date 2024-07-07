import logo from './logo.svg';
import './App.css';

import PlantProfile from "./NewCardmethode.js";
import Para from "./Para.js"
import Topimage from "./Topimage.jsx"
import Navbar1 from './Navbar1';

function App() {
  return (
   <div>
    <Navbar1/>
    <Topimage/>
    <Para/>
    <PlantProfile/>
   </div>
  );
}

export default App;
