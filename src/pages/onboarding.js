import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';

import { sectionsInfo } from '../data/sections_info';

const Onboarding = () => {
  const { onboarding } = sectionsInfo;
  const [projects, trials] = onboarding;

  return (
    <Layout links={onboarding}>
        <Section title={projects}>

        </Section>
        <Section title={trials}>

        </Section>
    </Layout>
  )
};

export default Onboarding;