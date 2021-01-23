import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import CustomCard from '../components/card/card';

import { sectionsInfo } from '../data/sections_info';
import { projects } from '../data/cards_data';

const Research = () => {

  const { research } = sectionsInfo;
  const [projects, pubs, confs] = research;

  return (
    <Layout links={research}>
        <Section title={projects}>

          <CustomCard
            title='Laluna'
            image='../images/waves.jpg'
            content='frfr'
          />
        </Section>
        <Section title={pubs} />
        <Section title={confs} />
    </Layout>
  )
};

export default Research;