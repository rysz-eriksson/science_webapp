import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import SectionTitle from '../components/section_title/section_title';

import { sectionsInfo } from '../data/sections_info';
import {carouselInfo} from '../data/carousel_info';

const Equipment = () => {
  const { equipment } = sectionsInfo;
  const [mri, spectroscopy] = equipment;
  const secTitleInfo = carouselInfo[3]

  return (
    <Layout links={equipment}>
        <SectionTitle info={secTitleInfo}/>
        <Section title={mri}>

        </Section>
        <Section title={spectroscopy}>

        </Section>
    </Layout>
  )
};

export default Equipment;