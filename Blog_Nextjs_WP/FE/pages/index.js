import { gql } from "@apollo/client";
import client from "client";
import {BlockRenderer} from "components/BlockRenderer";

export default function Home({ blocks, myprops }) {
  console.log("blocks", blocks)

  return <BlockRenderer blocks={blocks} />
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks
          }
        }
      }
    `
  })
  return {
    props: {
      blocks: data.nodeByUri.blocks,
      myprops: 'test props'
    }
  }
}