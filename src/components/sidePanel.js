
import React from "react"
import PersonalPanel from "../components/personalPanel"
import { useStaticQuery, graphql } from "gatsby"

function SidePanel() {
  const data = useStaticQuery(
    graphql`
      query {
        allBioJson {
          edges {
            node {
              title,
              list,
              info {
                label,
                value
              }
            }
          }
        }
      }
    `
  )

  return (
    <aside style={{
      fontSize: `0.9rem`,
      lineHeight: `1.4`
    }}>
      <div style={{
        boxShadow: `-3px 0px 5px -6px var(--main-color)`,
        paddingLeft: `calc(var(--spacing) / 2)`
      }}>
        {
          data.allBioJson.edges.map((node, i) => <PersonalPanel key={i} { ...node.node }/> )
        }
      </div>
    </aside>
  )
}

export default SidePanel
