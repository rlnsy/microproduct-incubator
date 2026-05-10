import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  ActionCard,
  MetadataPill,
  PageSection,
} from '../components/ControlSurface';

export default function Home() {
  return (
    <Layout
      title="Choose your path"
      description="Build Trilemma splits into an AI-agent hub and a human playbook. Pick where you are starting."
    >
      <main className="bt-shell">
        <div className="bt-page">
          <PageSection
            eyebrow="Build Trilemma"
            title="Choose your path"
            description="Agents should start at the hub with machine-readable entrypoints. Humans should start with the microproduct definition, then follow the operational build sequence."
            variant="hero"
          >
            <div className="bt-two-column-grid">
              <ActionCard
                title="AI agents"
                description="Hub pages with instructions, machine-readable artifacts, and workflows into templates and standards."
                actions={[
                  {
                    label: 'Open the agents hub',
                    to: '/agents',
                    description: 'Canonical web entry for contributor agents and tooling.',
                  },
                ]}
                aside={
                  <div className="bt-inline-pills">
                    <MetadataPill tone="accent">Agent-first</MetadataPill>
                    <MetadataPill>Templates + standards</MetadataPill>
                  </div>
                }
              />
              <ActionCard
                title="Humans"
                description="Understand what a microproduct is, then walk the same folder contract, archetype, template, and validation path."
                actions={[
                  {
                    label: 'Start with What is a microproduct?',
                    to: '/docs/intro/what-is-a-microproduct',
                    description: 'Definition, characteristics, and your path on this site.',
                  },
                ]}
                aside={
                  <div className="bt-inline-pills">
                    <MetadataPill>Playbook</MetadataPill>
                    <MetadataPill>Templates + standards</MetadataPill>
                  </div>
                }
              />
            </div>
            <nav
              className="bt-secondary-links bt-chooser-quicklinks"
              aria-label="Quick links"
            >
              <Link to="/docs/intro/what-is-a-microproduct">Docs</Link>
            </nav>
          </PageSection>
        </div>
      </main>
    </Layout>
  );
}
