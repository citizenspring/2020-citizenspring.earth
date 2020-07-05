import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";

class Website extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const scripts = {};

    return { pageProps, scripts };
  }

  render() {
    const { client, Component, pageProps, scripts } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default Website;
