import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  incubatorSidebar: [
    {
      type: 'category',
      label: 'Intro',
      items: ['intro/what-is-a-microproduct', 'intro/mission'],
    },
    {
      type: 'category',
      label: 'Playbook',
      items: [
        'playbook/ideation',
        'playbook/architecture',
        'playbook/implementation',
        'playbook/qa-methodology',
      ],
    },
    {
      type: 'category',
      label: 'Showcase',
      items: ['showcase/microproducts'],
    },
    {
      type: 'category',
      label: 'Resources',
      items: ['resources/index'],
    },
    {
      type: 'category',
      label: 'Contribute',
      items: ['contribute/how-to-contribute'],
    },
  ],
};

export default sidebars;
