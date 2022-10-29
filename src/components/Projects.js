import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experience</h2>
                <p>As a coding enthusiast I have built many project that were my own personal projects and have have contributed in many during my internships</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                      <ul>
                        <li>Research Intern at CDAC</li>
                        <p>
                          <li> Implementing Real Time Breast Cancer Detection using Deep Learning Algorithms.</li>
                          <li>Improved the current state of the art model by designing an Ensemble Learning approach to create a pipeline of 3
models (VGG16, Inception, ResNet) that raised the Recall score from 0.88 to 0.92</li>
                        </p>
                        <li>Machine Learning and Data Science Intern at HPE </li>
                        <p>
                          <li> Led a team of 5 to develop a multi-disease classifier using Ensemble VGG16 model with the NIH lung X-Ray data-set</li>
                          <li>Implemented a custom U-Net for lung image segmentation which used a custom filter to boost up the accuracy, Auto-Encoder for bone-shadow suppression. Achieved 98.6% accuracy</li>
                        </p>
                        <li>Machine Learning and Data Science Intern at FessorPro </li>
                        <p>
                          <li> Built a Stock Investment Recommendation algorithm by scraping stock prices from National Stock Exchange(NSE) India’s website which predicted future stock prices with an accuracy of 87%</li>
                          <li>Used HTML & CSS to identify tables on NSE’s website and implemented Selenium and Beautiful Soup for scraping</li>
                          <li>Formatted the data to .CSV format and implemented Long Short Term Memory(LSTM) to predict stock prices</li>
                          <li>Conducted Python classes to train working professionals</li>
                        </p>
                        <li>Sales & Marketing Intern at Weezy Street Wear </li>
                        <p>
                          <li> Led a team of 5 to develop a multi-disease classifier using Ensemble VGG16 model with the NIH lung X-Ray data-set</li>
                        </p>
                      </ul>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      {/* <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
