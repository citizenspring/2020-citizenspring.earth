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
  max-width: 400px;
  border: 1px solid #38652a;
  border-radius: 3px;
  color: #38652a;
  &:hover {
    border: 1px solid #29491d;
    color: #29491d;
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
            <img
              src="/images/citizenspring-logo-flower-transparent-medium.png"
              width="100%"
              style={{ maxWidth: "600px" }}
            />
            <Box mx={[3, 4, 4]}>
              <H1>Our principles</H1>
              <H2>Take initiatives</H2>
              <P>
                We need you to take initiatives in your own street, your own
                neighborhood. If not you, who?
              </P>
              <H2>Don't wait for permission</H2>
              <P>
                Many of us are blocked by the administrative burden. Can I do
                this? To whom should I ask for permission? How long does it
                take? This is an emergency. We don't have time for that.
              </P>
              <H2>Reconnect with nature 🌱 and with one another 🤗</H2>
              <P>
                We have become too disconnected from nature. We need to bring
                people and nature back to our streets. Every project is an
                excuse to rebuild community, to get to know each other and take
                care of each other.
              </P>
              <H1>Start an initiative</H1>
              <Flex flexWrap="wrap">
                <Box width={[1, 1, 2 / 3]} pr={[0, 1, 2]}>
                  <P>
                    Print this form (
                    <a href="/downloads/citizenspring-form-en.pdf">
                      in English
                    </a>
                    ,{" "}
                    <a href="/downloads/citizenspring-form-fr.pdf">in French</a>
                    ,{" "}
                    <a href="/downloads/citizenspring-form-nl.pdf">in Dutch</a>)
                    and make your neighbors sign it. Make sure you co-create
                    this project together. Inform local authorities but don't
                    wait for their permission. Above all, have fun! 😊
                  </P>
                  <P>
                    Here is the{" "}
                    <a href="/downloads/citizenspring-form-en.pages">
                      original file
                    </a>{" "}
                    if you want to adapt it to your needs (it's in Pages for
                    Mac, if you make other versions, you can add them to{" "}
                    <a href="https://github.com/citizenspring/citizenspring.earth/tree/master/public/downloads">
                      our repository
                    </a>
                    ).
                  </P>
                </Box>
                <Box width={[1, 1, 1 / 3]} mt={[3, 2, 1]}>
                  <center>
                    <a href="/downloads/citizenspring-form-en.pdf">
                      <FileDownload>
                        <img src="/images/form-preview.png" width="100%" />
                        <label>PDF</label>
                      </FileDownload>
                    </a>
                  </center>
                </Box>
              </Flex>

              <H1>Organise a play street</H1>
              <Flex flexWrap="wrap">
                <Box width={[1, 1, 2 / 3]} pr={[0, 1, 2]}>
                  <P>
                    Are you organising a play street? You need a poster? You can
                    use{" "}
                    <a href="https://docs.google.com/presentation/d/1mGiE7aEeuEgykauBA1qf-Dy5qC1NT2OWk86q3kN6l90/edit#slide=id.p">
                      this template
                    </a>{" "}
                    for free!
                  </P>
                </Box>
                <Box width={[1, 1, 1 / 3]} mt={[3, 2, 1]}>
                  <center>
                    <a href="https://docs.google.com/presentation/d/1mGiE7aEeuEgykauBA1qf-Dy5qC1NT2OWk86q3kN6l90/edit#slide=id.p">
                      <FileDownload>
                        <img
                          src="/images/playstreet-template-preview-medium.png"
                          width="100%"
                        />
                        <label>TEMPLATE</label>
                      </FileDownload>
                    </a>
                  </center>
                </Box>
              </Flex>

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
