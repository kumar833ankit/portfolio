import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "DataSyn",
      description: "Under_Construction",
      imgUrl: projImg1,
      projectLink: "https://multidbsys.onrender.com/",
    },
    {
      title: "cnn_summarizer",
      description: "Summarize the content at ease cred: ankitkumar and admin",
      imgUrl: projImg2,
      projectLink: "https://cnn-summarizer420c.w3spaces.com/",
    },
    {
      title: "EasyTrack ",
      description: "Streamlined CRUD Application for Efficient Data Management using Java Spring Boot, MongoDB Atlas, and Insomnia ",
      imgUrl: projImg3,
      projectLink: "https://github.com/Hacktoberfest",
    },
    {
      title: "ConnectChat",
      description: "A Real-Time Chat Application for Friends and Co-workers using React.js, Node.js, and Firebas",
      imgUrl: projImg1,
      projectLink: "https://penn-ecb60.web.app/",
    },
    {
      title: "Interactive Engine Visualizer",
      description: "Digital Twin Technology powered Immersive 3D engine animation website with real-time data rendering, high-quality models, and interactive UI using HTML, CSS, JavaScript and Sketchfab ",
      imgUrl: projImg2,
      projectLink: "https://github.com/Hacktoberfest",
    },
    {
      title: "Blogging-site",
      description: "A simple React based blogging site for professionals and students",
      imgUrl: projImg1,
      projectLink: "https://github.com/kumar833ankit/Pen",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are my projects . Exposure to variety of tech. stack</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"> Deployed work </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Do connect with me  </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Open-Source contributins </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
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
                      </Row>
                    </Tab.Pane>




                    <Tab.Pane eventKey="second">
                    <div>
                      </div>
                    </Tab.Pane>
                   
                   
                   
                   
                   
                   
                   
                    {/* <Tab.Pane eventKey="third">
<p>Contributor - https://github.com/CodezillaClub/website <br>
</br>
  Participant - https://github.com/Hacktoberfest
</p>                    </Tab.Pane> */}

<Tab.Pane eventKey="third">
  <p>
    Contributor - <a href="https://github.com/CodezillaClub/website">https://github.com/CodezillaClub/website</a>
    <br />
    Participant - <a href="https://github.com/Hacktoberfest">https://github.com/Hacktoberfest</a>
  </p>
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
