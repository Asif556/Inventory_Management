import './Landing.css';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="Landing-main">
      {/* Navbar */}
      <nav className="landing-nav-main">
        <div className="landing-logo">StockSense</div>
        <ul className="nav-links-main">
          <li><Link to="/home">Home</Link></li> 
          <li><Link to="/about">About Us</Link></li> 
          <li><Link to="/features">Features</Link></li> 
          <li><Link to="/logout">Logout</Link></li> 
        </ul>
      </nav>

      {/* Main Section */}
      <div className="main-section-writeups">
        <div className="content-text">
          <h1>
            Machine learning-powered inventory management system for efficient item tracking, pricing prediction, and freshness verification in digital enterprises.
          </h1>
          <p>
            Create and deliver intelligent service solutions across inventory management and beyond using machine learning and automation.
          </p>
          <button className="cta-button">Try Our Features</button>
        </div>
        <div className="background-image-inpng">
          <img src="Invo.png" alt="Custom Background" />
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section" id="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Machine Learning</h3>
            <p>Leverage advanced algorithms for smarter inventory management.</p>
          </div>
          <div className="feature-card">
            <h3>Pricing Prediction</h3>
            <p>Predict pricing trends for better decision-making.</p>
          </div>
          <div className="feature-card">
            <h3>Freshness Verification</h3>
            <p>Ensure product freshness with real-time tracking and verification.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
    <h2>What Our Customers Say</h2>
    <div className="testimonials">
        <div className="testimonial-card">
            <p>"StockSense has revolutionized our inventory system. The machine learning algorithms helped us reduce costs and optimize stock levels!"</p>
            <span>- Sarah L., CEO</span>
        </div>
        <div className="testimonial-card">
            <p>"With StockSense, we can predict pricing and product freshness with remarkable accuracy. This has improved our sales strategy significantly."</p>
            <span>- John D., Operations Manager</span>
        </div>
        <div className="testimonial-card">
            <p>"The freshness verification tool is a game-changer! Our products are consistently fresh, and customers love it. StockSense has helped us maintain higher standards."</p>
            <span>- Emily P., Product Manager</span>
        </div>
        
    </div>
</section>
{/* Footer Section */}
<footer className="footer-section">
    <div className="footer-content">
        <div className="footer-logo">
            <h2>StockSense</h2>
            <p>Your smart inventory management solution</p>
        </div>
        <div className="footer-links">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <div className="ask-query">
            <h3>Have a Question?</h3>
            <input type="email" placeholder="Enter your email" />
            <textarea placeholder="Ask your question..."></textarea>
            <button className="ask-query-btn">Submit</button>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2025 StockSense. All rights reserved.</p>
    </div>
</footer>


    </div>
  );
};

export default Landing;
