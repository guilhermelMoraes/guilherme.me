import React from "react";
import Layout from "../layout/layout";

import * as styles from "../styles/index.module.css";

export default function Index() {
  return (
    <Layout>
      <main id={styles.resume}>
        <section>
          <h1 id={styles.fullName}>GUILHERME L. MORAES M.</h1>
          <h2 id={styles.role} className={styles.bottomSpacingLg}>MID-LEVEL SOFTWARE ENGINEER</h2>

          <MediaLink />
        </section>
      </main>
    </Layout>
  );
}

function MediaLink() {
  return (
    <div>
      <StaticImage
    </div>
  );
}

export function Head() {
  return <title>Guilherme — Resume</title>;
}