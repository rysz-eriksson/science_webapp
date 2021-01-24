import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';

import { sectionsInfo } from '../data/sections_info';

const Tools = () => {
  const { tools } = sectionsInfo;
  const [mri, spectroscopy] = tools;

  return (
    <Layout links={tools}>
        <Section title={mri}>

        </Section>
        <Section title={spectroscopy}>

        </Section>
    </Layout>
  )
};

export default Tools;