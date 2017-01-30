import React from 'react';

const Skills = props => {

  // need to execute it
  const getSkills = () => {
    const arr = [];
  
    // https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
    let items = [
      "label-success",
      "label-primary",
      "label-info",
      "label-warning",
      "label-danger"
    ];
  
    props.skill.forEach((val, index) => {
      // Math.random() from 0 -> 0.9??
      let item = items[Math.floor(Math.random()*items.length)];
      item = "label " + item;
      arr.push(<li key={index}><span className={item}>{val}</span></li>);
    });
    
    //console.log('test');
    //console.log(arr);
    
    return arr;  
  };


  // h2
  // class name
  // text upper case
  // fa fa-lg fa-code
  // ul
  // skills-list
  // list-inline
  // func()
	return (
	  <section className="skills">
      <h2 className="text-uppercase"><i className="fa fa-lg fa-code"></i> Skills</h2>
      <ul className="skills-list list-inline">{getSkills()}</ul>
    </section>
	)
};

// export default
// skills
export default Skills;

