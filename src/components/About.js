
import React from 'react';

const About = (props) => {

  return (
    <section className="about">
      <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About</h2>
      {props.summary}
    </section>
  );
}

export default About;
