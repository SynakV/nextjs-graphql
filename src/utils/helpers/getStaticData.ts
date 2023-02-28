import { gql } from "@apollo/client";
import { client } from "../../../apollo-client";

export const getStaticData = async (
  query: ReturnType<typeof gql>,
  variables: any = {},
  isMutate: boolean = false
) => {
  const { data } = await (client as any)[isMutate ? "mutate" : "query"]({
    [isMutate ? "mutation" : "query"]: gql`
      ${query}
    `,
    variables,
  });

  return {
    props: {
      data,
    },
  };
};
