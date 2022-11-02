import "./components/css/Global.css";
import "./components/css/Reuseable.css";
import "./components/css/MediaQueries.css";

import "./components/header/Header.css";

import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Portfolio />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
