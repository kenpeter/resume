import React from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Work from './components/Work';

import Skills from './components/Skills';
import Education from './components/Education';



// const
// app = 
// props => {}
const App = props => {
  // props.jsonObj
  // basics
  // jsonObj is the prop being passed.
  const profile = props.jsonObj.basics;
  
  // basicData summary
  const summary = profile.summary;
  
  // work
  const work = props.jsonObj.work;
  
  // skill
  const skill = props.jsonObj.skills;
  
  // education
  const education = props.jsonObj.education;

  return (
    <div className="container">
      <div className="row">
        <aside className="col-md-4">
          <div className="inner">
            <Profile profile={profile} />
          </div>
        </aside>
        
        <main className="col-md-8">
          <div className="inner">
            <About summary={summary} />
            <Work work={work} />
            <Skills skill={skill} />
            <Education education={education} />
          </div>
        </main>
      </div>
    </div>
  );

};


export default App;

