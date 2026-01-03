import Card from './components/Card.jsx';
import './index.css';

function App() {
  return (
    <div className="container">
      {/* Prop Set 1: Travel Theme */}
      <Card 
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        category="Travel"
        title="The Azure Coast"
        description="Discover the hidden gems of the Mediterranean with our curated summer guides."
        buttonText="View Trip"
      />

      {/* Prop Set 2: Product/Tech Theme */}
      <Card 
        image="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        category="Hardware"
        title="Nordic Watch v2"
        description="A timeless piece of engineering designed for those who value precision and style."
        buttonText="Buy Now"
      />

      {/* Prop Set 3: Culinary Theme */}
      <Card 
        image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
        category="Culinary"
        title="Modern Organic"
        description="Farm-to-table recipes that focus on seasonal ingredients and bold flavors."
        buttonText="See Recipes"
      />
      <Card 
  image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  category="Real Estate"
  title="The Glass Pavilion"
  description="A masterclass in modern architecture featuring floor-to-ceiling windows and panoramic views."
  buttonText="View Property"
/>
    <Card 
  image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
  category="Wellness"
  title="Morning Flow"
  description="Start your day with guided meditation and yoga sequences designed for mental clarity."
  buttonText="Begin Class"
/>

    </div>
  );
  
}

export default App;