import React from "react";
import App from "next/app";
import Router from "next/router";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: FucxedCaps;
    src: url("/fonts/FUCXEDCAPS-v2.otf") format("opentype"), 
    url("/fonts/FUCXEDCAPS-v2.ttf") format("ttf"), 
    url("/fonts/FUCXEDCAPS-v2.woff2") format("woff2")
  }

  @font-face {
    font-family: Inter;
    font-style:  normal;
    font-weight: 100;
    src: url('/fonts/Inter-Thin.woff2') format('woff2'),
        url('/fonts/Inter-Thin.woff') format('woff');
  }
  @font-face {
    font-family: Inter;
    font-style:  italic;
    font-weight: 100;
    src: url("/fonts/Inter-ThinItalic.woff2") format("woff2"),
        url("/fonts/Inter-ThinItalic.woff") format("woff");
  }

  @font-face {
    font-family: Inter;
    font-style:  normal;
    font-weight: 200;
    src: url("/fonts/Inter-ExtraLight.woff2") format("woff2"),
        url("/fonts/Inter-ExtraLight.woff") format("woff");
  }
  @font-face {
    font-family: Inter;
    font-style:  italic;
    font-weight: 200;
    src: url("/fonts/Inter-ExtraLightItalic.woff2") format("woff2"),
        url("/fonts/Inter-ExtraLightItalic.woff") format("woff");
  }

  @font-face {
    font-family: Inter;
    font-style:  normal;
    font-weight: 300;
    src: url("/fonts/Inter-Light.woff2") format("woff2"),
        url("/fonts/Inter-Light.woff") format("woff");
  }
  @font-face {
    font-family: Inter;
    font-style:  italic;
    font-weight: 300;
    src: url("/fonts/Inter-LightItalic.woff2") format("woff2"),
        url("/fonts/Inter-LightItalic.woff") format("woff");
  }

  @font-face {
    font-family: Inter;
    font-style:  normal;
    font-weight: 400;
    src: url("/fonts/Inter-Regular.woff2") format("woff2"),
        url("/fonts/Inter-Regular.woff") format("woff");
  }
  @font-face {
    font-family: Inter;
    font-style:  italic;
    font-weight: 400;
    src: url("/fonts/Inter-Italic.woff2") format("woff2"),
        url("/fonts/Inter-Italic.woff") format("woff");
  }

  @font-face {
    font-family: Inter;
    font-style:  normal;
    font-weight: 500;
    src: url("/fonts/Inter-Medium.woff2") format("woff2"),
        url("/fonts/Inter-Medium.woff") format("woff");
  }
  @font-face {
    font-family: Inter;
    font-style:  italic;
    font-weight: 500;
    src: url("/fonts/Inter-MediumItalic.woff2") format("woff2"),
        url("/fonts/Inter-MediumItalic.woff") format("woff");
  }

  @font-face {
    font-family: Inter;
    font-style:  normal;
    font-weight: 600;
    src: url("/fonts/Inter-SemiBold.woff2") format("woff2"),
        url("/fonts/Inter-SemiBold.woff") format("woff");
  }
  @font-face {
    font-family: Inter;
    font-style:  italic;
    font-weight: 600;
    src: url("/fonts/Inter-SemiBoldItalic.woff2") format("woff2"),
        url("/fonts/Inter-SemiBoldItalic.woff") format("woff");
  }

  @font-face {
    font-family: Inter;
    font-style:  normal;
    font-weight: 700;
    src: url("/fonts/Inter-Bold.woff2") format("woff2"),
        url("/fonts/Inter-Bold.woff") format("woff");
  }
  @font-face {
    font-family: Inter;
    font-style:  italic;
    font-weight: 700;
    src: url("/fonts/Inter-BoldItalic.woff2") format("woff2"),
        url("/fonts/Inter-BoldItalic.woff") format("woff");
  }

  @font-face {
    font-family: Inter;
    font-style:  normal;
    font-weight: 800;
    src: url("/fonts/Inter-ExtraBold.woff2") format("woff2"),
        url("/fonts/Inter-ExtraBold.woff") format("woff");
  }
  @font-face {
    font-family: Inter;
    font-style:  italic;
    font-weight: 800;
    src: url("/fonts/Inter-ExtraBoldItalic.woff2") format("woff2"),
        url("/fonts/Inter-ExtraBoldItalic.woff") format("woff");
  }

  @font-face {
    font-family: Inter;
    font-style:  normal;
    font-weight: 900;
    src: url("/fonts/Inter-Black.woff2") format("woff2"),
        url("/fonts/Inter-Black.woff") format("woff");
  }
  @font-face {
    font-family: Inter;
    font-style:  italic;
    font-weight: 900;
    src: url("/fonts/Inter-BlackItalic.woff2") format("woff2"),
        url("/fonts/Inter-BlackItalic.woff") format("woff");
  }

  html {
    font-size: 62.5%;
    height: 100%;
    width: 100%;
  }
  @media(max-width: 600px) {
    html {
      font-size: 55%;
    }
  }

  body {
    font-family: Inter, sans-serif;
    font-size: 1.6rem;
    height: 100%;
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  a {
    color: rgb(97, 163, 43);
    text-decoration: none;
  }
  a:hover {
    color: #797d80;
    text-decoration: none;
  }
  h2 {
    font-weight: 300;
  }

  input, button {
    font-size: 2rem;
  }
  .content {
    margin: 2rem 1rem;
  }
  .row {
    display: flex;
    margin: 1rem 0;
  }
  .emoji {
    font-size: 64px;
  }
  table {
    margin: 2rem 0;
  }

  .video {
    position: relative;
    padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
  }

  .player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ul.list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul.list li {
    margin: 2rem 0;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  `;

class Website extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default Website;
