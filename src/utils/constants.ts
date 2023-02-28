import { gql } from "@apollo/client";
import { GRAPHQL, GRAPHQLKEYS } from "./types";

export const GRAPHQLS: GRAPHQL = {
  [GRAPHQLKEYS.GET_A_POST]: {
    type: "get",
    title: "Get a Post",
    link: "get-a-post",
    query: {
      query: gql`
        query {
          post(id: 1) {
            id
            title
            body
          }
        }
      `,
    },
  },
  [GRAPHQLKEYS.GET_A_USER]: {
    type: "get",
    title: "Get a User",
    link: "get-a-user",
    query: {
      query: gql`
        query {
          user(id: 1) {
            id
            username
            email
            address {
              geo {
                lat
                lng
              }
            }
          }
        }
      `,
    },
  },
  [GRAPHQLKEYS.GET_USERS_POSTS]: {
    type: "get",
    title: "Get User's Posts",
    link: "get-users-posts",
    query: {
      query: gql`
        query {
          user(id: 1) {
            posts {
              data {
                id
                title
              }
            }
          }
        }
      `,
    },
  },
  [GRAPHQLKEYS.GET_A_PHOTOS_ALBUM]: {
    type: "get",
    title: "Get a Photo's Album",
    link: "get-a-photos-album",
    query: {
      query: gql`
        query ($id: ID!) {
          photo(id: $id) {
            album {
              id
              title
              user {
                id
              }
            }
          }
        }
      `,
      variables: {
        id: 5,
      },
    },
  },
  [GRAPHQLKEYS.GET_ALL_POSTS]: {
    type: "get",
    title: "Get All Posts",
    link: "get-all-posts",
    query: {
      query: gql`
        query ($options: PageQueryOptions) {
          posts(options: $options) {
            data {
              id
              title
            }
            meta {
              totalCount
            }
          }
        }
      `,
      variables: {
        options: {
          paginate: {
            page: 1,
            limit: 5,
          },
        },
      },
    },
  },
  [GRAPHQLKEYS.CREATE_A_POST]: {
    type: "create",
    title: "Create a Post",
    link: "create-a-post",
    query: {
      query: gql`
        mutation ($input: CreatePostInput!) {
          createPost(input: $input) {
            id
            title
            body
          }
        }
      `,
      variables: {
        input: {
          title: "A Very Captivating Post Title",
          body: "Some interesting content.",
        },
      },
    },
  },
  [GRAPHQLKEYS.UPDATE_A_POST]: {
    type: "update",
    title: "Update a Post",
    link: "update-a-post",
    query: {
      query: gql`
        mutation ($id: ID!, $input: UpdatePostInput!) {
          updatePost(id: $id, input: $input) {
            id
            body
          }
        }
      `,
      variables: {
        id: 1,
        input: {
          body: "Some updated content.",
        },
      },
    },
  },
  [GRAPHQLKEYS.DELETE_A_POST]: {
    type: "delete",
    title: "Delete a Post",
    link: "delete-a-post",
    query: {
      query: gql`
        mutation ($id: ID!) {
          deletePost(id: $id)
        }
      `,
      variables: {
        id: 101,
      },
    },
  },
};
