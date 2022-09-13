import React, { useContext, useEffect } from "react";
import { Context } from '../store/appContext';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Cta from '../components/sections/Cta';
const Home = () => {

  const { store, actions } = useContext(Context);

  useEffect(() => {
     actions.oneLadinPage();
  }, []); //showLading
  return (
    <>
      <Hero info={store.showLading} className="illustration-section-01" />
      <FeaturesTiles info={store.showLading}/>
      <FeaturesSplit info={store.showLading} invertMobile topDivider imageFill className="illustration-section-02" />
      <Cta split />
    </>
  );
}

export default Home;