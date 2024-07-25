import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5 className="mb-4">Company</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/#">About Us</Link></li>
              <li><Link to="/#">Contact Us</Link></li>
              <li><Link to="/#">FAQs</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="mb-4">Categories</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/category/electronics">Electronics</Link></li>
              <li><Link to="/category/clothing">Clothing</Link></li>
              <li><Link to="/category/home-and-garden">Home & Garden</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="mb-4">Connect With Us</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="https://www.facebook.com"><FaFacebook /> Facebook</a></li>
              <li><a href="https://www.twitter.com"><FaTwitter /> Twitter</a></li>
              <li><a href="https://www.instagram.com"><FaInstagram /> Instagram</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="mb-4">Contact Information</h5>
            <ul className="list-unstyled">
              <li>123 Street Name, City</li>
              <li>Phone: +1234567890</li>
              <li>Email: info@example.com</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            <p className="m-0">SwipeKart &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
