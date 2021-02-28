import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import SectionTitle from '../components/section_title/section_title';

import { sectionsInfo } from '../data/sections_info';
import {carouselInfo} from '../data/carousel_info';

const Training = () => {
  const { training } = sectionsInfo;
  const [phd, internship, funding] = training;
  const secTitleInfo = carouselInfo[4]

  return (
    <Layout links={training}>
        <SectionTitle info={secTitleInfo}/>
        <Section title={phd}>

        </Section>
        <Section title={internship}>

        </Section>
        <Section title={funding}>

        </Section>
    </Layout>
  )
};

export default Training;