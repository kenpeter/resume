
import React from 'react';

const Showcase = (props) => {

  return (
    <section className="showcase">
      <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> Showcase</h2>
      <div className="project">
        <h3><a href="https://play.google.com/store/apps/details?id=org.kenpeter.hljandroid&hl=en">Hobby Link Japan app</a></h3>
        <p>Display Gundam model kits from <a href="http://hlj.com">hlj.com</a></p>
        <p>
          <span class="label label-success">React Native</span>,
          <span class="label label-danger">React Native Element</span>
        </p>
      </div>

      <div className="project">
        <h3><a href="https://play.google.com/store/apps/details?id=org.kenpeter.seekandroid&hl=en">Seek.com.au app</a></h3>
        <p>Display job information from  <a href="http://seek.com.au">seek.com.au</a></p>
        <p>
          <span class="label label-danger">React Native</span>,
          <span class="label label-success">React Native Element</span>
        </p>
      </div>
    </section>
  );
}

export default Showcase;
