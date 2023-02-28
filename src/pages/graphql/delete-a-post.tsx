import Head from "next/head";
import { useMutation } from "@apollo/client";
import { GRAPHQLS } from "@src/utils/constants";
import { useCallback, useEffect, useState } from "react";
import { FormattedData } from "@src/components/FormattedData";
import { getStaticData } from "@src/utils/helpers/getStaticData";

const title = GRAPHQLS.DELETE_A_POST.title;
const query = GRAPHQLS.DELETE_A_POST.query.query;
const variables = GRAPHQLS.DELETE_A_POST.query.variables;

export default function Home({ data: fromSsr }: any) {
  const [fromFunction, setFromFunction] = useState();

  const [deletePost] = useMutation(query, {
    onCompleted(data) {
      setFromFunction(data);
    },
    variables,
  });

  const handleUpdate = useCallback(() => {
    deletePost({ variables });
  }, [deletePost]);

  useEffect(() => {
    handleUpdate();
  }, [handleUpdate]);

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
