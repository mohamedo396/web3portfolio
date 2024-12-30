import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Web3 <br />
          Developer
        </SectionTitle>
        <SectionText>
          Hi, I'm Mohamed<br/>
        I began my web development journey 8 years ago and for the last 2 have committed myself to learning web3 technologies.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;