import React from 'react';
import {
  ContainerText,
  CustomParagraph,
  Section,
  Title,
  CustomMaxLimit
} from './ThirdSectionStyles';

export const ThirdSection = () => {
  return (
    <Section>
      <CustomMaxLimit>
        <ContainerText>
          <Title>A co-founder at one of the world's largest communities.</Title>
          <CustomParagraph>The combined experience i have working at the top Fortune 500 companies has allowed me to developer a skillset that helps me un not just development, but in every aspect of any business.</CustomParagraph>
          <CustomParagraph>I'm proud to announce that i am now working at one of the world's largest communities teaching young minds about how to sell yourself as a developer and open them to a whole new world of opportunies.</CustomParagraph>
        </ContainerText>
        <ContainerText>
          <CustomParagraph>As a developer, you have everything available to you and all that's holding you back is yourself.</CustomParagraph>
          <CustomParagraph>A quote i live by perfectly illustrates what i mean.</CustomParagraph>
          <CustomParagraph>"How big would you dream, if you knew you wouldn't fail?" You've already gone through the hardest parts being a developer, it's time to elevate your skills and become a leader something you're passionate about.</CustomParagraph>
          <CustomParagraph>I'm happy to chat over coffee some time about how i can help your company.</CustomParagraph>
        </ContainerText>
      </CustomMaxLimit>
    </Section>
  );
}