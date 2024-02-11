import Header from "./Components/Header/Header";
import Hero from "./Components/HeroSection/Hero";
import '../src/App.css'
import { Companies } from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";

function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient" />
        <Header></Header>
        <Hero></Hero>
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}
export default App;
