import React from 'react';
import { Container, Nav, Navbar, Carousel, Card, Button, Form } from 'react-bootstrap';

// Navbar
function NavigationBar() {
    return (
      <div id='NavBar'>
          <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
      </div>
      </nav>
      </div>
    ) 
  };

// Slider
function Slider() {
    return (
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="..." class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="perv">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    )
      
  };

// About Me
function About() {
  return (
    <div class="form-row">
  <div class="col">
    <span class="form-control">szöveg</span>
  </div>
  <div class="col">
    <span class="form-control">szöveg</span>
  </div>
</div>
  )

};

function Services() {
  const servicesList = [
    { title: "Web Development", description: "Building modern and responsive websites using React." },
    { title: "UI/UX Design", description: "Creating user-friendly interfaces with a focus on user experience." },
    { title: "SEO Optimization", description: "Improving search engine rankings with SEO best practices." }
  ];

  return (
    <Container id="services" className="my-5">
      <h2>Services</h2>
      <div className="d-flex flex-wrap">
        {servicesList.map((service, index) => (
          <Card key={index} className="m-3" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

// Contact Form komponens
function ContactForm() {
  return (
    <Container id="contact" className="my-5">
      <h2>Contact Me</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Your message" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

// App komponens (az összes komponens egyben)
function App() {
  return (
    <>
      <NavigationBar />
      <Slider />
      <About />
      <Services />
      <ContactForm />
    </>
  );
}

export default App;
