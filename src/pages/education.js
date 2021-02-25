import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import SectionTitle from '../components/section_title/section_title';

import { sectionsInfo } from '../data/sections_info';
import {carouselInfo} from '../data/carousel_info';

const Education = () => {
  const { education } = sectionsInfo;
  const [cognes, internship] = education;
  const secTitleInfo = carouselInfo[4]

  return (
    <Layout links={education}>
        <SectionTitle info={secTitleInfo}/>
        <Section title={cognes}>

        </Section>
        <Section title={internship}>

        </Section>
    </Layout>
  )
};

export default Education;