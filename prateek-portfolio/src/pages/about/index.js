import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skillsFrontend,
  backendLanguages,
  backendFrameworks,
  backendDatabases,
  backendMiscellaneous,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">FrontEnd</h3>
          </Col>
          <Col lg="7">
            {skillsFrontend.map((data, i) => {
              return (
                <div key={i} className="progress-container">
                  <h3 className="progress-title">{data.name}</h3>
                  <h3 className="progress-title">{data.value}</h3>
                </div>
              );
            })}
          </Col>
        </Row>

        <h3 className="color_sec py-4">BackEnd</h3>
        <Row className="sec_sp">
          <Col lg="5">
            <h4 className="color_sec py-4">&nbsp;&nbsp;&nbsp;Languages</h4>
          </Col>
          <Col lg="7">
            {backendLanguages.map((data, i) => {
              return (
                <div key={i} className="progress-container">
                  <h3 className="progress-title">{data.name}</h3>
                  <h3 className="progress-title">{data.value}</h3>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h4 className="color_sec py-4">&nbsp;&nbsp;&nbsp;Frameworks</h4>
          </Col>
          <Col lg="7">
            {backendFrameworks.map((data, i) => {
              return (
                <div key={i} className="progress-container">
                  <h3 className="progress-title">{data.name}</h3>
                  <h3 className="progress-title">{data.value}</h3>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h4 className="color_sec py-4">&nbsp;&nbsp;&nbsp;Databases</h4>
          </Col>
          <Col lg="7">
            {backendDatabases.map((data, i) => {
              return (
                <div key={i} className="progress-container">
                  <h3 className="progress-title">{data.name}</h3>
                  <h3 className="progress-title">{data.value}</h3>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h4 className="color_sec py-4">&nbsp;&nbsp;&nbsp;Miscellaneous</h4>
          </Col>
          <Col lg="7">
            {backendMiscellaneous.map((data, i) => {
              return (
                <div key={i} className="progress-container">
                  <h3 className="progress-title">{data.name}</h3>
                  <h3 className="progress-title">{data.value}</h3>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
