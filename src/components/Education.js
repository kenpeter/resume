
import React from 'react';

const Education = (props) => {

  // const
  // () => {}
  const getEducation = () => {
    const arr = [];
  
    // props
    // education
    // for each
    // val index
    // arr push
    
    props.education.forEach((val, index) => {
      arr.push(
        <div key={index}>
          <h3>{val.institution}</h3>
          <h4>{val.studyType}</h4>
        </div>
      );
    });
    
    //console.log('test');
    //console.log(arr);
    
    return arr;  
  };

  return (
    <section className="education">
      <h2 className="text-uppercase"><i className="fa fa-cog fa-spin fa-1x fa-fw"></i> Education</h2>
      <ul className="skills-list list-inline">{getEducation()}</ul>
    </section>
  );
}


export default Education;
