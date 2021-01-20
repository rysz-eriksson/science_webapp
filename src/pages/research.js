import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';

import { sectionsInfo } from '../data/sections_info';

const Research = () => {

  const { research } = sectionsInfo;
  const [projects, pubs, confs] = research;

  return (
    <Layout links={research}>
        <Section title={projects}>
          <p>some stuff</p>
        </Section>
        <Section title={pubs} />
        <Section title={confs} />
    </Layout>
  )
};

export default Research;