import Layout from '@theme/Layout';
import {
  CommandBlock,
  InlineGroup,
  LinkCard,
  MetadataPill,
  PageShell,
  PageSection,
  StepItem,
  SurfaceGrid,
} from '../components/ControlSurface';

export default function BuildPage() {
  return (
    <Layout
      title="Build workspace"
      description="Guided scaffolding path for shipping a microproduct via Build Trilemma."
    >
      <PageShell>
        <PageSection
          eyebrow="Build"
          title="Ship a microproduct through the canonical 4-step sequence"
          description="This page is the operational version of the handbook flow. Each step includes the exact command surface, expected artifacts, and the signal that tells you the step is complete."
          variant="hero"
        >
          <InlineGroup>
            <MetadataPill tone="accent">4-step path</MetadataPill>
            <MetadataPill>Agent compatible</MetadataPill>
            <MetadataPill>Registry ready</MetadataPill>
          </InlineGroup>
          <CommandBlock
            label="Recommended check run"
            value="npm run validate:registry && npm run test -- --runInBand"
            language="bash"
          />
        </PageSection>

        <PageSection
          eyebrow="Sequence"
          title="What to do next"
          description="Use these steps in order. If a step fails, fix the contract before moving downstream."
        >
          <div className="bt-steps-grid">
            <StepItem
              index={1}
              title="Anchor the problem and folder contract"
              description="Start by defining the product boundary, target user, decision, and artifact layout in the standard contract documents."
              command="cat docs/standards/folder-contract.md"
              artifacts={['AGENTS.md', 'product.yaml', 'README.md']}
              outcome="A reviewer can identify the product, the user, and the required local artifacts without guessing."
            />
            <StepItem
              index={2}
              title="Choose the closest archetype"
              description="Match the product to the nearest archetype before implementation so success criteria and evaluation logic stay consistent."
              command="cat docs/archetypes/index.md"
              artifacts={['Selected archetype', 'Primary decision pattern']}
              outcome="The team agrees on the product shape and can explain why it is not another archetype."
            />
            <StepItem
              index={3}
              title="Clone an opinionated starter"
              description="Use the nearest template from product-templates so the repo starts with the expected scaffolding and agent-local guidance."
              command="cp -R product-templates/<template-name> ../<new-product-directory>"
              artifacts={['Starter repository', 'Copied docs skeleton']}
              outcome="The repo contains the baseline contracts, placeholder code, and instructions for collaborators and agents."
            />
            <StepItem
              index={4}
              title="Validate, test, and register the outcome"
              description="Run schema checks and tests, then publish machine-readable metadata so the product can be discovered and audited."
              command="npm run validate:registry && npm run test -- --runInBand"
              artifacts={['Validated metadata', 'Passing test run', 'Registry entry']}
              outcome="The product metadata passes schema validation, tests are green, and the registry entry can be consumed by tooling."
            />
          </div>
        </PageSection>

        <PageSection
          eyebrow="Jump Links"
          title="Related operating references"
        >
          <SurfaceGrid columns={3}>
            <LinkCard title="Agents hub" to="/agents" description="Open AGENTS.md, llms-full.txt, and schema shortcuts." />
            <LinkCard title="Schemas" to="/schemas" description="Review registry validation rules, sample payloads, and common mistakes." />
            <LinkCard title="Registry" to="/registry" description="See how shipped entries are presented to humans and ingesting agents." />
          </SurfaceGrid>
        </PageSection>
      </PageShell>
    </Layout>
  );
}
