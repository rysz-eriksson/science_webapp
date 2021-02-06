import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import CardContainer from '../components/card_container/card_container';
import CustomAccordion from '../components/accordion/accordion';

import { sectionsInfo } from '../data/sections_info';
import { projectsInfo, conferencesInfo } from '../data/cards_info';
import { articlesInfo } from '../data/accordion_info';

const Research = () => {

  const { research } = sectionsInfo;
  const [projects, pubs, confs] = research;

  return (
    <Layout links={research}>
        <Section title={projects}>
          <CardContainer content={projectsInfo} />
        </Section>
        <Section title={pubs}>
            <CustomAccordion articles={articlesInfo}/>
        </Section>
        <Section title={confs}>
        <CardContainer content={conferencesInfo} />
        </Section>
    </Layout>
  )
};

export default Research;