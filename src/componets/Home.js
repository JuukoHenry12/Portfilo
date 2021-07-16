import "../App.css";
import ProductDescription from "./ProductDescription";
import About from "./about";
import Pricing from "./Pricing";
import Contact from "./Contact";
import Productfeature from "./productfeature";
import Particles from 'react-particles-js';

const Home = () => {
  return (
    <section>
      <header>
      <Particles 
          params={{
            Particles:{
              number:{
                value:30,
                density:{
                  enable:true,
                  value_area:1000
                }
              }
            }
          }}
      
      />
        <ProductDescription />
      </header>
      <section>
        <About />
      </section>
      <section id="pricing" className="price">
        <Pricing />
      </section>
      <section>
        <Productfeature />
      </section>
      <section>
        <Contact />
      </section>
    </section>
  );
};

export default Home;
