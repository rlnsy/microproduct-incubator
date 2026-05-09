import Layout from '@theme/Layout';
import {
  ActionCard,
  InlineGroup,
  LinkCard,
  MetadataPill,
  PageShell,
  PageSection,
  SurfaceGrid,
  SummaryCard,
} from '../components/ControlSurface';
import UniversityMarquee from '../components/UniversityMarquee';

export default function Home() {
  return (
    <Layout
      title="Build Trilemma"
      description="Discover patterns, scaffold microproducts, and validate submissions — for humans and AI agents."
    >
      <PageShell after={<UniversityMarquee />}>
        <PageSection
          eyebrow="Start"
          title="Agent launchpad"
          description="Start with the artifacts an agent can ingest, then move through build, validation, and registry review."
          variant="hero"
        >
          <SurfaceGrid columns={2}>
            <ActionCard
              title="Start an agent"
              description="Use these canonical files first. They define instructions, compressed context, registry data, and schema contracts."
              actions={[
                {
                  label: 'AGENTS.md',
                  href: 'pathname:///AGENTS.md',
                  description: 'Root operating instructions for contributor agents.',
                  copyValue: '/AGENTS.md',
                },
                {
                  label: 'llms-full.txt',
                  href: 'pathname:///llms-full.txt',
                  description: 'Compressed long-form context bundle for LLM workflows.',
                  copyValue: '/llms-full.txt',
                },
                {
                  label: 'registry.json',
                  href: 'pathname:///registry.json',
                  description: 'Machine-readable microproduct index for discovery and tooling.',
                  copyValue: '/registry.json',
                },
                {
                  label: 'product.schema.json',
                  href: 'pathname:///schemas/product.schema.json',
                  description: 'Canonical registry contract mirrored from static schemas.',
                  copyValue: '/schemas/product.schema.json',
                },
              ]}
              aside={
                <InlineGroup>
                  <MetadataPill tone="accent">AI-agent first</MetadataPill>
                  <MetadataPill>Machine-readable</MetadataPill>
                  <MetadataPill>Audit-friendly</MetadataPill>
                </InlineGroup>
              }
            />
            <ActionCard
              title="Run the operating loop"
              description="Keep the first pass narrow: build path, registry contract, schema validation, then supporting references."
              actions={[
                {
                  label: 'Build',
                  to: '/build',
                  description: 'Follow the product creation and validation sequence.',
                },
                {
                  label: 'Registry',
                  to: '/registry',
                  description: 'Inspect shipped product metadata and agent entrypoints.',
                },
                {
                  label: 'Schemas',
                  to: '/schemas',
                  description: 'Review the registry contract and validation command.',
                },
              ]}
            />
          </SurfaceGrid>
        </PageSection>

        <PageSection
          eyebrow="References"
          title="Supporting paths"
          description="These stay available for human review and deeper product decisions, but they sit behind the operational loop."
        >
          <SurfaceGrid columns={3}>
            <LinkCard title="Templates" to="/templates" description="Open the reduced canonical starter set." />
            <LinkCard title="Standards" to="/standards" description="Review contracts and maturity expectations." />
            <LinkCard title="Agents hub" to="/agents" description="Use human-readable agent reference pages." />
          </SurfaceGrid>
        </PageSection>

        <PageSection eyebrow="Principle" title="Operational by default">
          <SurfaceGrid columns={3}>
            <SummaryCard
              title="Artifacts first"
              description="Promote files, commands, schemas, and endpoints above prose."
            />
            <SummaryCard
              title="Narrow path"
              description="Keep first-run decisions to build, registry, and schema validation."
            />
            <SummaryCard
              title="Docs behind work"
              description="Docs remain available without competing with the primary agent workflow."
            />
          </SurfaceGrid>
        </PageSection>
      </PageShell>
    </Layout>
  );
}
