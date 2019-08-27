//TODO: DRY span soup into separate components
import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

function ThemeToggle() {
  const { allThemesJson } = useStaticQuery(
    graphql`
      query {
        allThemesJson {
          edges {
            node {
              regular: regular {
                bg
                heading
                text
              },
              dark: dark {
                bg
                heading
                text
              }
            }
          }
        }
      }
    `
  )

  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const alias = isDark ? 'dark' : 'regular'
    const nextTheme = allThemesJson.edges[0].node[alias]

    for (let cssVar in nextTheme) {
      document.documentElement.style.setProperty(`--main-${cssVar}-rgb`, nextTheme[cssVar])
    }
  }, [isDark])

  const changeTheme = (e) => {
    setIsDark(e.matches)
  }

  useEffect(() => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
    changeTheme(darkQuery)
    darkQuery.addListener(changeTheme)
    return () => {
      darkQuery.removeListener(changeTheme)
    }
  }, [])
  
  const craterStyles = {
    display: `inline-block`,
    position: `absolute`,
    borderRadius: `50%`,
    background: `rgb(250, 234, 241)`
  }

  const cloudStyles = {
    display: `inline-block`,
    position: `absolute`,
    background: `rgb(255, 255, 255)`,
    boxShadow: `-1px 0 2px 0 rgba(0, 0, 0, 0.1)`,
    borderRadius: `50%`
  }

  function onToggle() {
    setIsDark(!isDark)
  }

  return (
    <button
      aria-label="Dark theme"
      aria-pressed={isDark}
      onClick={onToggle}
      style={{
        position: `relative`,
        alignSelf: `start`,
        marginLeft: `auto`,
        width: `100px`,
        height: `50px`,
        borderRadius: `2rem`,
        overflow: `hidden`,
        border: `1px solid rgb(255, 255, 255)`,
        background: isDark ? `var(--main-bg)` : `rgb(36, 215, 247)`,
        color: `var(--main-color)`
      }}>
      <span
        role="presentation"
        style={{
          ...craterStyles,
          top: `5px`,
          left: `0`,
          height: `38px`,
          width: `38px`,
          overflow: `hidden`,
          background: isDark ? `rgb(250, 234, 241)` : `rgb(255, 255, 255)`,
          borderRadius: `50%`,
          boxShadow: isDark ? `none` : `0px 0px 18px 5px rgba(255, 255, 255)`,
          transform: isDark ? `translateX(5px)` : `translateX(56px)`,
          transition: `transform 0.4s ease-out 0s`
        }}>
        {
          isDark &&
          <>
            <span style={{
              ...craterStyles,
              background: `rgb(255, 255, 249)`,
              left: `5px`,
              bottom: `5px`,
              width: `42px`,
              height: `42px`
            }}></span>
            <span style={{
              ...craterStyles,
              left: `22px`,
              top: `18px`,
              width: `7px`,
              height: `7px`
            }}></span>
            <span style={{
              ...craterStyles,
              left: `15px`,
              bottom: `4px`,
              width: `5px`,
              height: `5px`
            }}></span>
            <span style={{
              ...craterStyles,
              left: `10px`,
              bottom: `15px`,
              width: `5px`,
              height: `5px`
            }}></span>
            <span style={{
              ...craterStyles,
              left: `16px`,
              top: `8px`,
              width: `5px`,
              height: `5px`
            }}></span>
            <span style={{
              ...craterStyles,
              right: `-2px`,
              top: `11px`,
              width: `7px`,
              height: `7px`
            }}></span>
            <span style={{
              ...craterStyles,
              left: `24px`,
              top: `0`,
              width: `6px`,
              height: `6px`
            }}></span>
          </>
        }
      </span>
      <span
        role="presentation"
        style={{
          ...cloudStyles,
          width: `16px`,
          height: `5px`,
          left: `12px`,
          top: `15px`,
          borderRadius: `10px`,
          transform: isDark ? `translateX(-100px)` : `translateX(0)`,
          transition: `transform 0.4s ease-out 0s`
        }}>
        <span style={{
          ...cloudStyles,
          width: `6px`,
          height: `6px`,
          left: `2px`,
          top: `-1px`
        }}></span>
        <span style={{
          ...cloudStyles,
          width: `9px`,
          height: `9px`,
          left: `6px`,
          top: `-4px`
        }}></span>
        <span style={{
          ...cloudStyles,
          width: `7px`,
          height: `7px`,
          left: `11px`,
          top: `-2px`
        }}></span>
      </span>
      <span
        role="presentation"
        style={{
          ...cloudStyles,
          width: `24px`,
          height: `8px`,
          left: `22px`,
          bottom: `7px`,
          borderRadius: `10px`,
          transform: isDark ? `translateX(-100px)` : `translateX(0)`,
          transition: `transform 0.4s ease-out 0s`
        }}>
        <span style={{
          ...cloudStyles,
          width: `10px`,
          height: `10px`,
          left: `2px`,
          top: `-2px`
        }}></span>
        <span style={{
          ...cloudStyles,
          width: `15px`,
          height: `15px`,
          left: `6px`,
          top: `-7px`
        }}></span>
        <span style={{
          ...cloudStyles,
          width: `12px`,
          height: `12px`,
          left: `14px`,
          top: `-4px`
        }}></span>
      </span>
   </button>
  )
}

export default ThemeToggle
