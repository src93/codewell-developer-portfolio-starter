import React from 'react';
import { MdTrendingFlat } from "react-icons/md";
import Spense from 'resources/images/Spense.png';
import YelpCamp from 'resources/images/YelpCamp.png';
import {
  Section,
  Article,
  CustomContainerImage,
  Image,
  CustomParagraph,
  ContentTitle,
  CustomTitle,
  ContainerDescription,
  CustomMaxLimit
} from './SecondSectionStyles';

export const SecondSection = () => {
  return (
    <Section>
      <CustomMaxLimit>
        <Article>
          <CustomContainerImage>
            <Image src={Spense} alt='spense' fullHeight contain />
          </CustomContainerImage>
          <ContainerDescription>
            <ContentTitle>
              <CustomTitle>Spense.com</CustomTitle>
              <MdTrendingFlat color='white' size='2rem' />
            </ContentTitle>
            <CustomParagraph>Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc</CustomParagraph>
          </ContainerDescription>
        </Article>
        <Article>
          <CustomContainerImage>
            <Image src={YelpCamp} alt='yelpcamp' fullHeight contain/>
          </CustomContainerImage>
          <ContainerDescription>
            <ContentTitle>
              <CustomTitle>YelpCamp.com</CustomTitle>
              <MdTrendingFlat color='white' size='2rem' />
            </ContentTitle>
            <CustomParagraph>Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd's favorite in 2021</CustomParagraph>
          </ContainerDescription>
        </Article>
      </CustomMaxLimit>
    </Section>
  );
}