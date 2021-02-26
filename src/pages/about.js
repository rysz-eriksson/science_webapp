import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import SectionTitle from '../components/section_title/section_title';

import { sectionsInfo } from '../data/sections_info';
import {carouselInfo} from '../data/carousel_info';

const About = () => {
  const { about } = sectionsInfo;
  const [news, members, groups, partners] = about;
  const secTitleInfo = carouselInfo[0]
  return (
    <Layout links={about}>
        <SectionTitle info={secTitleInfo}/>
        <Section title={news}>

        </Section>
        <Section title={members}>

        </Section>
        <Section title={groups}>

        </Section>
        <Section title={partners}>

        </Section>
    </Layout>
  )
};

export default About;