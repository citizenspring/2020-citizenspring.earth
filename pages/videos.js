import React from "react";
import styled from "styled-components";
import { Box, Flex } from "@rebass/grid";
import Head from "next/head";

const Cover = styled.div`
  margin: 6rem 0 3rem;
  text-align: center;
`;

const Font = styled.div`
  white-space: nowrap;
  color: #29491d;
  font-size: ${({ size }) => `${size}px`};
`;

const Links = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  & li {
    display: inline;
    margin-right: 10px;
  }
`;

const H1 = styled.h1`
  margin: 48px 0 24px 0;
  font-weight: normal;
  color: #29491d;
`;

const H2 = styled.h2`
  margin: 18px 0 6px 0;
  color: #38652a;
  text-align: left;
`;

const P = styled.p`
  margin: 6px 0;
  line-height: 1.5;
  color: #101d0c;
  text-align: left;
`;

const FileDownload = styled.div`
  position: relative;
  display: flex;
  max-width: 400px;
  border: 1px solid #38652a;
  border-radius: 3px;
  color: #38652a;
  &:hover {
    border: 1px solid #29491d;
    color: #29491d;
  }
  & img {
    width: 100%;
    height: 100%;
  }
  & label {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 5px;
    font-weight: bold;
    font-size: 11px;
    background: rgba(255, 255, 255, 0.9);
  }
`;

const Video = styled.div`
  margin: 10px 0;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

class HomePage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="home">
        <Head>
          <title>Citizen Spring</title>
        </Head>
        <center>
          <Box my={4} pb={4} width={[1, 1, 1 / 2]}>
            <Flex>
              <Box mr={2}>
                <img
                  src="/images/citizenspring-logo-flower-transparent-medium.png"
                  height="128"
                />
              </Box>
              <H1>Videos</H1>
            </Flex>
            <Box mx={[3, 4, 4]}>
              <P></P>
              <H2>Playstreets in Brussels</H2>
              <Video>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/-rdxyNFZ8lk"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Video>

              <Video>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/Skx4x3g-Xxk"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Video>

              <Cover>
                <Font size={36}>Together</Font>
                <img src="/images/citizens-emoji.png" height={48} />
                <Font size={20}>towards a sustainable future</Font>
              </Cover>
              <Links>
                <li>
                  <a href="https://facebook.com/citizenspringmovement">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/citizen_spring">Twitter</a>
                </li>
                <li>
                  <a href="https://opencollective.com/citizenspring">
                    Open Collective
                  </a>
                </li>
                <li>
                  <a href="https://github.com/citizenspring">GitHub</a>
                </li>
              </Links>
            </Box>
          </Box>
        </center>
      </div>
    );
  }
}

export default HomePage;
