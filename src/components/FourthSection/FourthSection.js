import React from 'react';
import {
  Button,
  CustomParagraph,
  Section,
  Title,
  CustomMaxLimit
} from './FourthSectionStyles';

export const FourthSection = () => {
  return (
    <Section>
      <CustomMaxLimit>
        <Title>Interested in working with me?</Title>
        <CustomParagraph>I'm active on all social media platforms listed below, but you can also me an email and i will get back to you within 24-48 hours.</CustomParagraph>
        <Button>Get in touch</Button>
      </CustomMaxLimit>
    </Section>
  );
};