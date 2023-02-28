import Head from "next/head";
import { GRAPHQLS } from "@src/utils/constants";
import { FormattedData } from "@src/components/FormattedData";
import { getStaticData } from "@src/utils/helpers/getStaticData";
import { useHookAndFunctionFetch } from "@src/utils/hooks/useHookAndFunctionFetch";

const title = GRAPHQLS.GET_A_PHOTOS_ALBUM.title;
const query = GRAPHQLS.GET_A_PHOTOS_ALBUM.query.query;
const variables = GRAPHQLS.GET_A_PHOTOS_ALBUM.query.variables;

export default function Home({ data: fromSsr }: any) {
  const { fromHook, fromFunction } = useHookAndFunctionFetch(query, variables);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <FormattedData
        title={title}
        data={{
          fromSsr,
          fromHook,
          fromFunction,
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return getStaticData(query, variables);
}
