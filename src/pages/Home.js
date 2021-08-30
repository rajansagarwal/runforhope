import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";

export default function Home() {
  return (
    <div className="App">
      <img src="/accent1.svg" className="accent1" alt="blob-blue"></img>
      <img src="/accent2.svg" className="accent2" alt="blob-yellow"></img>

      <Container>
        <header className="App-header">
          <Col sm={12}>
            <h2 className="explorehead hey">Run For Hope</h2>
            <p className="center moving">My 160km Journey</p>
          </Col>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">The Issue</h5>
              <p className="p-manifesto">
                As a Canadian, seeing the discoveries of unmarked graves was
                heartbreaking. On July 12,{" "}
                <a href="https://globalnews.ca/news/8022971/graves-residential-school-penelakut-island/#:~:text=Comments%20closed.-,Over%20160%20graves%20found%20at%20former%20residential,B.C.%20island%2C%20First%20Nation%20says&text=A%20B.C.%20First%20Nation%20in,residential%20school%20within%20their%20territory.">
                  160 unmarked graves were discovered
                </a>
                . Within the same time period, thousands more were found,
                symbolizing the treacherous conditions for indigenous families.
                While investigating further into the issue, I came across{" "}
                <a href="https://www.thestar.com/local-mississauga/news/2021/07/17/peel-teacher-to-walk-215-km-to-commemorate-unmarked-graves-at-former-residential-schools.html">
                  David Babcock
                </a>
                , a teacher in my school board. Deeply affected by the news, he
                took it upon himself to hike 215km at local trails. His actions
                are what supercharged the passion behind my Run For Hope, in
                which I chose to spend 1 month running 160km and tracking my
                journey. This, is my run for hope.
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">About</h5>
              <p className="p-manifesto">
                My name is <a href="https://heyrajan.com">Rajan Agarwal</a>. I am a 16
                year old in Ontario interested in social change. My intentions
                with the Run For Hope were to build a community and raise direct
                awareness through a unique platform. While running may not be
                the most conventional and impactful strategy, this initiative
                reached 7000+ unique viewers and promoted physcial wellness for
                peers that joined.
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">Impact</h5>
              <p className="p-manifesto">
                I focused the majority of my impact and awareness on Instagram.
                Throughout the path, I contacted{" "}
                <a href="https://staywokeevent.com">communities</a> to share my
                initiative,{" "}
                <a href="http://ig.heyrajan.com">made videos consistently</a> marking
                my journey and ocassionaly posted on{" "}
                <a href="http://t.heyrajan.com">other social mediums</a>.
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">Summary</h5>
              <p className="p-manifesto">
            <iframe className="video" src="https://www.youtube.com/embed/lOFpyvGaCP8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>

            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">Log</h5>
              <p className="p-manifesto">
                <table>
                  <tr>
                    <th>Week </th>
                    <th>Distance</th>
                  </tr>
                  <tr>
                    <td>July 22-28</td>
                    <td>39km</td>
                  </tr>
                  <tr>
                    <td>July 29-August4 </td>
                    <td>27km</td>
                  </tr>
                  <tr>
                    <td>August 5-11</td>
                    <td>26km</td>
                  </tr>
                  <tr>
                    <td>August 12-18</td>
                    <td>28km</td>
                  </tr>
                  <tr>
                    <td>August 19-26</td>
                    <td>40km</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>160km</td>
                  </tr>
                </table>
                <br />
                <a href="https://docs.google.com/spreadsheets/d/1QIMOCuOiGniQVxIlxLozY7hT9L08TdUEhUgN2zAqbtI/edit?usp=sharing">
                  View Full Log
                </a>
              </p>
            </Col>

            <Col sm={2}></Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8} className="animate0">
              <h5 className="manifesto linkheader">Get In Touch</h5>
              <p className="p-manifesto">
                I would love to share more about my journey, the impact made and
                what everyone else can do to help. Visit{" "}
                <a href="https://heyrajan.com">heyrajan.com</a> to learn more.
                <br />
                <br />
                <hr className="solid" />
                <br /> Thank you all for your support over the past month. I
                could not have done it without you.
              </p>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </header>
      </Container>
    </div>
  );
}
