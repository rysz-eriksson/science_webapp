import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';

import { sectionsInfo } from '../data/sections_info';

const About = () => {
  const { about } = sectionsInfo;
  const [news, members, groups, partners] = about;
  
  return (
    <Layout links={about}>
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