import React from "react";

import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import Submenu from '../components/sub_menu/sub_menu';

import { sectionsInfo } from '../data/sections_info';

const Research = () => {

  const { research } = sectionsInfo;
  const [projects, pubs, confs] = research;

  return (
    <Layout>
        <Submenu links={research} />
        <Section title={projects} />
        <Section title={pubs} />
        <Section title={confs} />
    </Layout>
  )
};

export default Research;