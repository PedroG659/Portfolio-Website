import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col>
                    <img src={logo} alt="logo" />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}