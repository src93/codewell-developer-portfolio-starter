import React from 'react';
import { Header } from 'components/Header/Header';
import { FirstSection } from 'components/FirstSection/FirstSection';
import { SecondSection } from 'components/SecondSection/SecondSection';
import { ThirdSection } from 'components/ThirdSection/ThirdSection';
import { FourthSection } from 'components/FourthSection/FourthSection';
import { Footer } from 'components/Footer/Footer';
import { Main } from './LandingStyles';

export const Landing = () => {
  return (
    <>
      <Header />
      <Main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </Main>
      <Footer />
    </>
  );
}