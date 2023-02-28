import { GRAPHQLS } from "../constants";

export const getFormattedJSON = (data: any) => {
  let brace = 0;

  return JSON.stringify(data).replace(
    /({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g,
    (_, p1) => {
      let returnString = "";

      const returnFunction = () =>
        `<div style="text-indent: ${brace * 20}px;">${p1}</div>`;

      if (p1.lastIndexOf("{") === p1.length - 1) {
        returnString = returnFunction();
        brace += 1;
      } else if (p1.indexOf("}") === 0) {
        brace -= 1;
        returnString = returnFunction();
      } else {
        returnString = returnFunction();
      }

      return returnString;
    }
  );
};

export const getParsedGraphQlKey = (key: string) =>
  key.toLowerCase().split("_").join("-");

export const getRouterLinks = (title: string) => {
  const GraphQlSValues = Object.entries(GRAPHQLS);
  const GraphQlIndex = GraphQlSValues.findIndex(
    ([_, ql]) => ql.title === title
  );
  const prevRoute = GraphQlSValues.at(GraphQlIndex - 1)?.[0] || "";
  const nextRoute =
    GraphQlSValues.at(GraphQlIndex + 1)?.[0] || GraphQlSValues.at(0)?.[0] || "";

  return {
    prevRoute: getParsedGraphQlKey(prevRoute),
    nextRoute: getParsedGraphQlKey(nextRoute),
  };
};

export const getGraphqlLink = (link: string) => `/graphql/${link}`;
