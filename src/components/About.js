import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h3>About</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
          <Image
            src="https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png"
            style={{
              height: "250px",
              width: "250px",
              borderRadius: "125px",
              padding: "20px",
              paddingRight: "35px",
            }}
            className="float-start"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            illum at debitis dolorem numquam eos sequi saepe voluptate animi
            assumenda nostrum natus mollitia, sunt facilis ducimus reiciendis
            amet obcaecati qui sed sint vel ea. Illo ducimus, rerum iure odio
            ullam quasi fugit, earum incidunt fugiat, provident dolores adipisci
            maxime quas nostrum modi molestiae! Est laudantium quis, ratione
            magni minus tenetur esse dicta dolore qui quibusdam enim nobis harum
            tempore ducimus molestiae tempora nisi. Velit sed repellendus
            asperiores laboriosam, incidunt eius eaque doloremque
            necessitatibus? Dolore quas ducimus, asperiores recusandae debitis
            inventore. Consectetur enim dignissimos ullam eius, quibusdam
            debitis eum beatae inventore! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Alias maxime itaque fugit ex a culpa
            nam ad, explicabo asperiores, recusandae impedit natus dolorum
            voluptatibus! Voluptates perspiciatis tenetur dolore corrupti alias,
            ullam repellendus consequuntur voluptatem dicta dolores iure, cum
            assumenda rerum, quaerat delectus corporis quae quas nisi provident?
            Necessitatibus cum, quod adipisci modi vitae maiores fugit vero
            aliquam quibusdam est distinctio ipsa totam facere quos quasi
            eligendi repellat dolores dolorem consectetur dignissimos aliquid
            deserunt eveniet neque natus. Ab, soluta beatae! Eveniet
            exercitationem nulla iste maiores magni eaque, totam sed distinctio
            vitae voluptatem assumenda itaque recusandae dignissimos harum illum
            expedita molestias dicta.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
