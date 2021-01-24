import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';

import { sectionsInfo } from '../data/sections_info';

const Spreading = () => {
  const { spreading } = sectionsInfo;
  const [media, lectures] = spreading;

  return (
    <Layout links={spreading}>
        <Section title={media}>

        </Section>
        <Section title={lectures}>

        </Section>
    </Layout>
  )
};

export default Spreading;