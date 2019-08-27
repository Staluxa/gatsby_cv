import React from "react"

import Layout from "../components/layout"
import Photo from "../components/photo"
import SEO from "../components/seo"
import CareerPanel from "../components/careerPanel"
import SidePanel from "../components/sidePanel"
import ThemeToggle from "../components/themeToggle"
import PrintButton from "../components/printButton"

const IndexPage = () => (
  <Layout>
    <SEO title="Frontend Developer CV" />
    <header style={{
      display: `contents`
    }}>
      <div style={{ display: `flex` }}>
        <Photo style={{
          width: `125px`,
          borderRadius: `50%`,
          boxShadow: `0px 0px 2px 0px var(--main-color)`,
          marginLeft: `2px`
        }}/>
        <div className="non-printable"
          style={{
            display: `inline-flex`,
            flexDirection: `column`,
            justifyContent: `space-between`,
            marginLeft: `auto`
          }}>
          <ThemeToggle />
          <PrintButton />
        </div>
      </div>
      <div>
        <h1>Kovtun Oleksandr</h1>
        <p style={{ paddingLeft: `1rem` }}>Frontend Developer</p>
      </div>
    </header>
    <SidePanel />
    <main
      className="career-wrapper"
      style={{
        paddingTop: `0.5rem`
      }}>
      <CareerPanel />
    </main>
  </Layout>
)

export default IndexPage