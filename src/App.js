import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the custom CSS
import ProductName from './components/name';
import ProductPrice from './components/price';
import ProductDescription from './components/description';
import ProductImage from './components/image';

function App() {
  const firstName = 'Saif'; // Replace with your first name or leave empty
  const greeting = firstName ? `Hello, ${firstName}` : null;
  const showImage = Boolean(firstName);

  const greetingStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    fontSize: '2rem', // Increased font size
    color: '#333',
    fontWeight: 600, // Bold weight
    zIndex: 1000, // Ensures it stays on top
  };

  return (
    <div style={{ position: 'relative', height: '100vh', margin: 0 }}>
      {greeting && <div style={greetingStyle}>{greeting}</div>}
      <Container className="card-container">
        <Card className="card">
          <Card.Body>
            <Card.Title className="card-title">Buy Now !</Card.Title>
            <div className="product-name">
              <ProductName />
            </div>
            <div className="product-price">
              <ProductPrice />
            </div>
            <div className="product-description">
              <ProductDescription />
            </div>
            {showImage && <ProductImage className="product-image" />}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
