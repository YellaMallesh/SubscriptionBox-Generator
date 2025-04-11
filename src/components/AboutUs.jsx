import React from 'react';
import './AboutUs.css'; // Create this CSS file

function AboutUs() {
  return (
    <section id="about" className="about-us">
      <div className="container">
        <h2>About Our Subscription Box</h2>
        <p>
          Welcome to [Your Subscription Box Name]! We are passionate about curating delightful and personalized subscription boxes tailored to your interests. Our mission is to bring joy and discovery to your doorstep every month.
        </p>
        <p>
          Founded in [Year of Establishment] by a team of enthusiasts who love [mention your area of focus, e.g., discovering new beauty products, trying unique snacks, diving into captivating books], we strive to offer high-quality items and an exceptional experience.
        </p>
        <p>
          We believe in the power of personalization, allowing you to explore different categories and even customize your box to perfectly match your preferences. Our dedicated team carefully selects each item, ensuring a surprise and delight with every delivery.
        </p>
        <p>
          Thank you for being a part of the [Your Subscription Box Name] community! We're excited to embark on this journey with you.
        </p>
        {/* You can add more specific details about your team, values, etc. */}
      </div>
    </section>
  );
}

export default AboutUs;