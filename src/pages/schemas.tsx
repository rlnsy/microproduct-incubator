import Layout from '@theme/Layout';
import { SITE_URL } from '@site/siteUrl';
import {
  ActionCard,
  CommandBlock,
  InlineGroup,
  MetadataPill,
  PageShell,
  PageSection,
  SurfaceGrid,
  SummaryCard,
} from '../components/ControlSurface';

export default function SchemasPage() {
  const schemaUrl = `${SITE_URL}/schemas/product.schema.json`;
  const registryUrl = `${SITE_URL}/registry.json`;
  const samplePayload = `{
  "id": "stackingsats",
  "name": "StackingSats",
  "status": "active",
  "maturity": 5,
  "scope": "trilemma",
  "archetype": "workflow-automation-product",
  "problem": "Turn recurring bitcoin workflows into reliable operational decisions.",
  "target_users": ["operators"],
  "primary_decision": "Which workflow should run now?",
  "inputs": ["events", "portfolio state"],
  "outputs": ["actions", "alerts"],
  "tags": ["bitcoin", "automation"]
}`;

  return (
    <Layout
      title="Schemas"
      description="Machine-readable schemas for Build Trilemma registry metadata."
    >
      <PageShell>
        <PageSection
          eyebrow="Schemas"
          title="Registry contracts and validation commands"
          description="Schemas live under static/schemas so they are mirrored to the site root on every deployment. Treat this page as the operational reference for agents and maintainers."
          variant="hero"
        >
          <InlineGroup>
            <MetadataPill tone="accent">JSON Schema draft 2020-12</MetadataPill>
            <MetadataPill>Static artifact</MetadataPill>
            <MetadataPill>Validation in CI</MetadataPill>
          </InlineGroup>
          <SurfaceGrid columns={2}>
            <ActionCard
              title="Canonical artifacts"
              description="The schema and registry stay available at stable URLs so build tooling can rely on them."
              actions={[
                {
                  label: 'product.schema.json',
                  href: schemaUrl,
                  description: 'Canonical registry metadata contract.',
                  copyValue: schemaUrl,
                },
                {
                  label: 'registry.json',
                  href: registryUrl,
                  description: 'Current published registry manifest.',
                  copyValue: registryUrl,
                },
              ]}
            />
            <CommandBlock
              label="Validation command"
              value="npm run validate:registry"
              language="bash"
            />
          </SurfaceGrid>
        </PageSection>

        <PageSection
          eyebrow="Sample Payload"
          title="Use the schema with realistic metadata"
          description="This example stays intentionally compact so it can be copied into a draft and adapted to a real product."
        >
          <CommandBlock label="Example registry entry" value={samplePayload} language="json" />
        </PageSection>

        <PageSection
          eyebrow="Common Mistakes"
          title="What usually breaks validation"
        >
          <SurfaceGrid columns={3}>
            <SummaryCard
              title="Canonical URL drift"
              description="Keep the registry version and canonical URL intentional; description copy can evolve without breaking validation."
            />
            <SummaryCard
              title="YAML and JSON mismatch"
              description="Keep local product metadata aligned with the published JSON entry so reviewers and agents see the same contract."
            />
            <SummaryCard
              title="Weak field completeness"
              description="Missing decision context, empty arrays, or unclear tags make the product harder to discover even when the file shape passes."
            />
          </SurfaceGrid>
        </PageSection>
      </PageShell>
    </Layout>
  );
}
