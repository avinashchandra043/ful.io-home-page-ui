import Header from "./components/Header";
import CardHandler from "./components/CardHandler";
import Def from "./components/Def";
import Waves from "./components/Waves";
import Feature from "./components/Feature";
import Company from "./components/Company";
import TestimonialHandler from "./components/TestimonialHandler";
import Footer from "./components/Footer";
import Bubble from "./components/Bubble";

function App() {
  return (
    <div className="App">
      <Waves />
      <Bubble />
      <Header />
      <Def />
      <Feature />
      <CardHandler />
      <Company />
      <TestimonialHandler />
      <Footer />
    </div>
  );
}

export default App;
