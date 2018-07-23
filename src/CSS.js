import React from 'react'
import Belleza from './fonts/Belleza-Regular.woff2'
import WorkSans from './fonts/WorkSans-Regular.woff2'

const CSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

CSS.defaultProps = {
  css: `
    @font-face {
      font-family: "Belleza";
      src: url("${Belleza}") format("woff2");
    }
    @font-face {
      font-family: "Work Sans";
      src: url("${WorkSans}") format("woff2");
    }
    body, #pageroot {
      font-family: "Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      line-height: 1.5;
    }
  `
}

export default CSS
