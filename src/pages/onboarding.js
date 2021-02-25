import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import SectionTitle from '../components/section_title/section_title';

import { sectionsInfo } from '../data/sections_info';
import {carouselInfo} from '../data/carousel_info';

const Onboarding = () => {
  const { onboarding } = sectionsInfo;
  const [projects, trials] = onboarding;
  const secTitleInfo = carouselInfo[2]

  return (
    <Layout links={onboarding}>
      <SectionTitle info={secTitleInfo}/>
        <Section title={projects}>

        </Section>
        <Section title={trials}>

        </Section>
    </Layout>
  )
};

export default Onboarding;