import { gql, useQuery } from "@apollo/client";
import { client } from "../../../apollo-client";
import { useCallback, useEffect, useState } from "react";

export const useHookAndFunctionFetch = (
  query: ReturnType<typeof gql>,
  variables: any = {}
) => {
  const [fromHook, setFromHook] = useState<any>();
  const [fromFunction, setFromFunction] = useState<any>();

  useQuery(query, {
    onCompleted(data) {
      setFromHook(data);
    },
    variables,
  });

  const getData = useCallback(async () => {
    const { data } = await client.query({
      query: gql`
        ${query}
      `,
      variables,
    });
    setFromFunction(data);
  }, [query, variables]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    fromHook,
    fromFunction,
  };
};
