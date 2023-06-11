import { Cover } from "components/Cover"
import { Heading } from "components/Heading"

export const BlockRenderer = ({blocks}) => {
  return blocks.map((block, index) => {
    switch (block.name) {
      case "core/heading": {
        return <Heading key={index} />
      }
      case "core/cover" : {
        return (
          <Cover key={index} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        )
      }
      default:
        return null
    }
  })
}