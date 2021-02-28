import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import SectionTitle from '../components/section_title/section_title';
import OverflowText from '../components/overflow_text/overflow_text';

import { sectionsInfo } from '../data/sections_info';
import {carouselInfo} from '../data/carousel_info';
import {equipmentInfo} from '../data/equipment_info';

const Equipment = () => {
  const { equipment } = sectionsInfo;
  const [neuroimaging, brain, sensory] = equipment;
  const secTitleInfo = carouselInfo[3]
  const {mri, spectroscophy, electrophysiology, electricStimulation, touchSeeHear} = equipmentInfo

  return (
    <Layout links={equipment}>
        <SectionTitle info={secTitleInfo}/>
        <Section title={neuroimaging}>
          <OverflowText content={mri} />
          <OverflowText content={spectroscophy} />
          <OverflowText content={electrophysiology} />
        </Section>
        <Section title={brain}>
          <OverflowText content={electricStimulation} />
        </Section>
        <Section title={sensory}>
          <OverflowText content={touchSeeHear} />
        </Section>
    </Layout>
  )
};

export default Equipment;