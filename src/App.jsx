import { useEffect } from "react";
import Hero from "./Hero";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Splash from "./components/Splash";

export default function App() {
  useEffect(() => {
    // すでに読み込まれてたら追加しない
    if (document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) return;

    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Splash />
      <Header />
      <Hero />
      <MainContent />
    </>
  );
}