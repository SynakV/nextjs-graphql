import Head from "next/head";
import { useMutation } from "@apollo/client";
import { GRAPHQLS } from "@src/utils/constants";
import { useCallback, useEffect, useState } from "react";
import { FormattedData } from "@src/components/FormattedData";
import { getStaticData } from "@src/utils/helpers/getStaticData";

const title = GRAPHQLS.CREATE_A_POST.title;
const query = GRAPHQLS.CREATE_A_POST.query.query;
const variables = GRAPHQLS.CREATE_A_POST.query.variables;

export default function Home({ data: fromSsr }: any) {
  const [fromFunction, setFromFunction] = useState();

  const [createPost] = useMutation(query, {
    onCompleted(data) {
      setFromFunction(data);
    },
    variables,
  });

  const handleCreate = useCallback(() => {
    createPost({ variables });
  }, [createPost]);

  useEffect(() => {
    handleCreate();
  }, [handleCreate]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <FormattedData title={title} data={{ fromSsr, fromFunction }} />
    </>
  );
}

export async function getStaticProps() {
  return getStaticData(query, variables, true);
}
