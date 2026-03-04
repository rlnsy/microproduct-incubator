import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Microproduct Incubator"
      description="Open knowledge hub for building focused apps that turn data into usable tools and real utility."
    >
      <main className={styles.hero}>
        <div className={styles.container}>
          <h1>Microproduct Incubator Open Knowledge Hub</h1>
          <p>
            Focused apps that turn data into usable tools and real utility.
            Learn, build, and contribute through open documentation and
            community-reviewed insights.
          </p>
          <div className={styles.actions}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro/what-is-a-microproduct"
            >
              Start Here
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/contribute/how-to-contribute"
            >
              Contribute
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
