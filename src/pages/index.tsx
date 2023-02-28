import Head from "next/head";
import { GRAPHQLS } from "@src/utils/constants";
import styles from "@src/styles/Home.module.css";
import { HeaderImage } from "@src/components/Image";
import { GraphQLLink } from "@src/components/GraphQLLink";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js with Apollo Client</title>
      </Head>

      <main className={styles.main}>
        <HeaderImage />

        <div className={styles.flex}>
          {Object.values(GRAPHQLS).map((ql) => (
            <GraphQLLink
              key={ql.link}
              link={ql.link}
              title={ql.title}
              className={ql.type}
            />
          ))}
        </div>
      </main>
    </>
  );
}
