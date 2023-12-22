import React from 'react';
import Navbar from './components/Navbar';
import HeadCard from './components/HeadCard';
import FoodType from './components/FoodType';
import Category from './components/Category';
import Footer from './components/Footer';
import Slider from './components/Slider';
import ChoosUs from './components/ChoosUs';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Slider />
      <HeadCard />
      <Category />
      <FoodType />
      <ChoosUs />
      <Footer />
    </React.Fragment>
  );
}

export default App;
