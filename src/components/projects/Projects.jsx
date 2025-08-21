import React from 'react'
import './projects.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        <article className="projects__item">
          <div className="projects__item-image">
            <img src={IMG1} alt="project1" />
          </div>
          <h3>Student Study Portal</h3>
<div className="projects__item-cta">
            <a href="https://github.com/poojasri2606/student_study_portal.git" className='btn' target='_blank'>GitHub</a>
          <a href="https://student-study-portal-2-bmi3.onrender.com/" className='btn btn-primary' target='_blank'>Live Link</a>
</div>        
</article>
        <article className="projects__item">
          <div className="projects__item-image">
            <img src={IMG2} alt="project2" />
          </div>
          <h3>Employee Management(CRUD)</h3>
          <div className="projects__item-cta">
          <a href="https://github.com/poojasri2606/employee-management" className='btn' target='_blank'>GitHub</a>
          <a href="https://employee-management-azure.vercel.app/" className='btn btn-primary' target='_blank'>Live Link</a>
          </div>
        </article>
        <article className="projects__item">
          <div className="projects__item-image">
            <img src={IMG3} alt="project3" />
          </div>
          <h3>Brew & Banter Cafe (Skill Development Project)</h3>
          <div className="projects__item-cta">
          <a href="https://poojasri2606.github.io/Brew-and-Banter-Cafe/" className='btn' target='_blank'>GitHub</a>
          <a href="https://poojasri2606.github.io/Brew-and-Banter-Cafe/" className='btn btn-primary' target='_blank'>Live Link</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects