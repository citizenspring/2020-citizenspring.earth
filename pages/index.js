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

class HomePage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="home">
        <Head>
          <title>Citizen Spring</title>
        </Head>
        <center>
          <Box my={4} mb={5} width={[1, 1, 1 / 2]}>
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
                <Box width={[1, 1, 2 / 3]}>
                  <P>
                    Print this form and make your neighbors sign it. Make sure
                    you co-create this project together. Inform local
                    authorities but don't wait for their permission. Above all,
                    have fun! 😊
                  </P>
                </Box>
                <Box width={[1, 1, 1 / 3]} mt={[3, 2, 1]}>
                  <center>
                    <a href="/downloads/citizenspring-form.pdf">
                      <img
                        src="/images/form-preview.png"
                        width="100%"
                        style={{
                          maxWidth: "400px",
                          border: "1px solid #38652a",
                          // boxShadow: '0px 0px 4px rgba(16, 29, 12, 0.5)',
                        }}
                      />
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