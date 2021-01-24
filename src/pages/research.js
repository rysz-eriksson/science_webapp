import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import CustomCard from '../components/card/card';

import { sectionsInfo } from '../data/sections_info';
import { projectsInfo, conferencesInfo } from '../data/cards_info';

import containerStyles from './research.module.scss';

const Research = () => {

  const { research } = sectionsInfo;
  const [projects, pubs, confs] = research;

  return (
    <Layout links={research}>
        <Section title={projects}>
          <div className={containerStyles.container}>
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
          </div>
        </Section>
        <Section title={pubs} />
        <Section title={confs}>
          <div className={containerStyles.container}>
            {conferencesInfo.map(project => {
              return (
                <CustomCard
                key={project.key}
                title={project.title}
                image={project.image}
                content={project.content}
              />
              )
            })}
          </div>
        </Section>
    </Layout>
  )
};

export default Research;