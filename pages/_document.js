import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta property="twitter:creator" content="citizen_spring" />
          <meta property="twitter:site" content="citizen_spring" />
          <meta
            property="og:image"
            content="/static/images/citizenspring-logo-flower-white-large.png"
          />

          <meta
            name="viewport"
            content="width=device-width, user-scalable=no"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/images/citizenspring-icon.png"
          />
          <style>{`
            @font-face {
              font-family: Inter;
              font-style:  normal;
              font-weight: 100;
              src: url("/static/fonts/Inter-Thin.woff2") format("woff2"),
                  url("/static/fonts/Inter-Thin.woff") format("woff");
            }
            @font-face {
              font-family: Inter;
              font-style:  italic;
              font-weight: 100;
              src: url("/static/fonts/Inter-ThinItalic.woff2") format("woff2"),
                  url("/static/fonts/Inter-ThinItalic.woff") format("woff");
            }

            @font-face {
              font-family: Inter;
              font-style:  normal;
              font-weight: 200;
              src: url("/static/fonts/Inter-ExtraLight.woff2") format("woff2"),
                  url("/static/fonts/Inter-ExtraLight.woff") format("woff");
            }
            @font-face {
              font-family: Inter;
              font-style:  italic;
              font-weight: 200;
              src: url("/static/fonts/Inter-ExtraLightItalic.woff2") format("woff2"),
                  url("/static/fonts/Inter-ExtraLightItalic.woff") format("woff");
            }

            @font-face {
              font-family: Inter;
              font-style:  normal;
              font-weight: 300;
              src: url("/static/fonts/Inter-Light.woff2") format("woff2"),
                  url("/static/fonts/Inter-Light.woff") format("woff");
            }
            @font-face {
              font-family: Inter;
              font-style:  italic;
              font-weight: 300;
              src: url("/static/fonts/Inter-LightItalic.woff2") format("woff2"),
                  url("/static/fonts/Inter-LightItalic.woff") format("woff");
            }

            @font-face {
              font-family: Inter;
              font-style:  normal;
              font-weight: 400;
              src: url("/static/fonts/Inter-Regular.woff2") format("woff2"),
                  url("/static/fonts/Inter-Regular.woff") format("woff");
            }
            @font-face {
              font-family: Inter;
              font-style:  italic;
              font-weight: 400;
              src: url("/static/fonts/Inter-Italic.woff2") format("woff2"),
                  url("/static/fonts/Inter-Italic.woff") format("woff");
            }

            @font-face {
              font-family: Inter;
              font-style:  normal;
              font-weight: 500;
              src: url("/static/fonts/Inter-Medium.woff2") format("woff2"),
                  url("/static/fonts/Inter-Medium.woff") format("woff");
            }
            @font-face {
              font-family: Inter;
              font-style:  italic;
              font-weight: 500;
              src: url("/static/fonts/Inter-MediumItalic.woff2") format("woff2"),
                  url("/static/fonts/Inter-MediumItalic.woff") format("woff");
            }

            @font-face {
              font-family: Inter;
              font-style:  normal;
              font-weight: 600;
              src: url("/static/fonts/Inter-SemiBold.woff2") format("woff2"),
                  url("/static/fonts/Inter-SemiBold.woff") format("woff");
            }
            @font-face {
              font-family: Inter;
              font-style:  italic;
              font-weight: 600;
              src: url("/static/fonts/Inter-SemiBoldItalic.woff2") format("woff2"),
                  url("/static/fonts/Inter-SemiBoldItalic.woff") format("woff");
            }

            @font-face {
              font-family: Inter;
              font-style:  normal;
              font-weight: 700;
              src: url("/static/fonts/Inter-Bold.woff2") format("woff2"),
                  url("/static/fonts/Inter-Bold.woff") format("woff");
            }
            @font-face {
              font-family: Inter;
              font-style:  italic;
              font-weight: 700;
              src: url("/static/fonts/Inter-BoldItalic.woff2") format("woff2"),
                  url("/static/fonts/Inter-BoldItalic.woff") format("woff");
            }

            @font-face {
              font-family: Inter;
              font-style:  normal;
              font-weight: 800;
              src: url("/static/fonts/Inter-ExtraBold.woff2") format("woff2"),
                  url("/static/fonts/Inter-ExtraBold.woff") format("woff");
            }
            @font-face {
              font-family: Inter;
              font-style:  italic;
              font-weight: 800;
              src: url("/static/fonts/Inter-ExtraBoldItalic.woff2") format("woff2"),
                  url("/static/fonts/Inter-ExtraBoldItalic.woff") format("woff");
            }

            @font-face {
              font-family: Inter;
              font-style:  normal;
              font-weight: 900;
              src: url("/static/fonts/Inter-Black.woff2") format("woff2"),
                  url("/static/fonts/Inter-Black.woff") format("woff");
            }
            @font-face {
              font-family: Inter;
              font-style:  italic;
              font-weight: 900;
              src: url("/static/fonts/Inter-BlackItalic.woff2") format("woff2"),
                  url("/static/fonts/Inter-BlackItalic.woff") format("woff");
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

          `}</style>
          {this.props.styleTags}
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
