import { gql } from "@apollo/client";

export enum GRAPHQLKEYS {
  GET_A_POST = "GET_A_POST",
  GET_A_USER = "GET_A_USER",
  GET_USERS_POSTS = "GET_USERS_POSTS",
  GET_A_PHOTOS_ALBUM = "GET_A_PHOTOS_ALBUM",
  GET_ALL_POSTS = "GET_ALL_POSTS",
  CREATE_A_POST = "CREATE_A_POST",
  UPDATE_A_POST = "UPDATE_A_POST",
  DELETE_A_POST = "DELETE_A_POST",
}

export type GRAPHQL = {
  [key in GRAPHQLKEYS]: {
    link: string;
    title: string;
    type: "get" | "create" | "update" | "delete";
    query: {
      query: ReturnType<typeof gql>;
      variables?: any;
    };
  };
};

export type DataType = "ssr" | "hook" | "function";
