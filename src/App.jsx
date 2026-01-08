import Hero from "./Hero";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import Splash from "./components/Splash";

export default function App() {
  return (
    <>
      <Splash />
      <Header />
      <Hero />
      <MainContent />
    </>
  );
}

