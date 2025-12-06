import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ShowcaseNodes from "./components/ShowcaseNodes";
import WhyCrimson from "./components/WhyCrimson";
import Demo from "./components/Demo";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <ShowcaseNodes />
      <WhyCrimson />
      <Demo />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
