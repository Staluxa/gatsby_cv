
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

function CareerPanel() {
  const data = useStaticQuery(
    graphql`
      query {
        allCareerJson {
          edges {
            node {
              company,
              title,
              period,
              project,
              tech,
              tasks
            }
          }
        }
      }
    `
  )

  return (
    <>
      <h2>
        Career History
      </h2>
      {
        data.allCareerJson.edges.map(({node}, i) => {
          const { company, title, period, project, tech, tasks } = node;
          return (
            <section key={i} style={{
              margin: i ? `2.5rem 0` : `1.5rem 0`,
              paddingTop: `calc(var(--spacing) / 2)`,
              paddingLeft: `calc(var(--spacing) / 2)`
            }}>
              <h3>{title}{company && `, ${company}`}</h3>
              <small style={{
                fontStyle: `italic`,
                display: `inline-block`,
                marginBottom: `1rem`,
                borderRadius: `3px`,
                padding: `0 1rem`,
                boxShadow: `0px 3px 5px -6px var(--main-color)`,
              }}>{project}{period && ` | ${period}`}</small>
              {
                tech && <>
                  <h4>Tech:</h4>
                  <ul className="dashed-list">
                    { tech.map((skill, i) => <li key={i}>{skill}</li>) }
                  </ul>
                </>
              }
              {
                tasks && <>
                  <h4>Responsibilities:</h4>
                  <ul className="dashed-list">
                    { tasks.map((resp, i) => <li key={i}>{resp}</li>) }
                  </ul>
                </>
              }
            </section>
          )
        })
      }
    </>
  )
}

export default CareerPanel
