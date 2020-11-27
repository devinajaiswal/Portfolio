import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Northeastern Universirty</h3>
                <p className="info">Master in Information Systems <span>•</span> <em className="date">Expected December 2021</em></p>
                <p>
                   <h6>Relevant Courses</h6>
                   <ul id="relevantCourses">
                       <li>Web Design and User Experience</li>
                       <li>Web Development Tools and Methods</li>
                       <li>Program Structure and Algorithms</li>
                       <li>Data Science Engineering Methods and Tools</li>
                       <li>Application Engineering and Development</li>
                       <li>User Experience Design and Testing</li>
                       <li>Data and Database Management Systems</li>
                   </ul>
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>University of Pune</h3>
                <p className="info">B.E. in Computer Engineering <span>•</span> <em className="date">June 2016</em></p>
                <p>
                <h6>Relevant Courses</h6>
                   <ul id="relevantCourses">
                       <li>Operating System and Design</li>
                       <li>Embedded Operating Systems</li>
                       <li>Pervasive Computing</li>
                       <li>Mobile Computing</li>
                       <li>Software Design Method and Testing</li>
                       <li>Business Analytics and Intelligence</li>
                       <li>Software Engineering</li>
                       <li>High Performance Computing</li>
                   </ul>
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Infosys Limited</h3>
                <p className="info">Software Developer <span>•</span> <em className="date">January 2017 - April 2019</em></p>
                <p>
                      
                </p>
              </div>
            </div> {/* item end */}
       
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}