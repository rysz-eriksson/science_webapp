import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import SectionTitle from '../components/section_title/section_title';

import { sectionsInfo } from '../data/sections_info';
import {carouselInfo} from '../data/carousel_info';

const Dissemination = () => {
  const { dissemination } = sectionsInfo;
  const [media, lectures] = dissemination;
  const secTitleInfo = carouselInfo[5]

  return (
    <Layout links={dissemination}>
        <SectionTitle info={secTitleInfo}/>
        <Section title={media}>

        </Section>
        <Section title={lectures}>

        </Section>
    </Layout>
  )
};

export default Dissemination;