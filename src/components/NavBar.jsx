import { useState, useEffect } from "react"
import { Navbar } from "react-bootstrap"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scolled, seScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrolly > 50 ) {
          seScrolled(true);
        } else {
          seScrolled(false);
        }
      }

      window.addEventListener('scroll', onScroll);
    }, [])

    return (
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={""} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="vanbar-text">
            <div className="social-icon">
                <a href="#"><img src="" alt="" /></a>
                <a href="#"><img src="" alt="" /></a>
                <a href="#"><img src="" alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}