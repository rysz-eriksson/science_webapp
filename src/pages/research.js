import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import CustomCard from '../components/card/card';

import { sectionsInfo } from '../data/sections_info';
import { projectsInfo } from '../data/cards_info';

const Research = () => {

  const { research } = sectionsInfo;
  const [projects, pubs, confs] = research;

  return (
    <Layout links={research}>
        <Section title={projects}>
          {projectsInfo.map(project => {
            return (
              <CustomCard
              key={project.key}
              title={project.title}
              image={project.image}
              content={project.content}
            />
            )
          })}
        </Section>
        <Section title={pubs} />
        <Section title={confs} />
    </Layout>
  )
};

export default Research;