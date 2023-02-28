import React from 'react';
import { FadeIn } from 'react-slide-fade-in';
import './About.css';
import Navbar from '../Navbar/Navbar.jsx';

export default function About() {
  return (
    <section className="about-container">
      <Navbar />
      <FadeIn from="top" triggerOffset={500} delayInMilliseconds={100}>
        <div className="about-title">
          <h1> Jackson Kelly </h1>
          <h5> Full Stack Software Developer</h5>
        </div>
      </FadeIn>
      <FadeIn delayInMilliseconds={500}>
        <section className="about-me">
          I am a full stack software developer with experience in electrical and team management. I
          am very passionate about software creation and UI/UX design. I thrive in creative,
          collaborative enviornments that support constant learning and growth.
        </section>
      </FadeIn>
    </section>
  );
}
