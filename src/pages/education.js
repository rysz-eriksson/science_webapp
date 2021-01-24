import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';

import { sectionsInfo } from '../data/sections_info';

const Education = () => {
  const { education } = sectionsInfo;
  const [cognes, internship] = education;

  return (
    <Layout links={education}>
        <Section title={cognes}>

        </Section>
        <Section title={internship}>

        </Section>
    </Layout>
  )
};

export default Education;