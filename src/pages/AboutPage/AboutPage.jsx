import React from 'react';
import styles from './AboutPage.module.css';
import ProfileCard from '../../components/common/ProfileCard/ProfileCard';

import nethruwanImg from '../../assets/images/Nethruwan.jpeg';
import sanukiImg from '../../assets/images/Sanuki.jpeg';
import vidushrajImg from '../../assets/images/Vidushraj.jpeg';
import devarnImg from '../../assets/images/Devarn.jpeg';
import pageBackground from '../../assets/images/pidurangala.jpeg';

const studentData = [
  { name: 'Nethruwan Dhansankha', role: 'Student 1', uowId: 'w1870618', iitId: '20200663', dob: '21/02/2001', course: 'BSc CS', imageSrc: nethruwanImg, linkTo: '/about/nethruwan' },
  { name: 'Sanuki Karunatilake', role: 'Student 2', uowId: 'w1867029', iitId: '20210122', dob: '30/08/2001', course: 'BEng SE', imageSrc: sanukiImg, linkTo: '/about/sanuki' },
  { name: 'Vidushraj Selvaraj', role: 'Student 3', uowId: 'w1869307', iitId: '20210914', dob: '19/12/2002', course: 'BEng SE', imageSrc: vidushrajImg, linkTo: '/about/vidushraj' },
  { name: 'Devarn Paraneetharan', role: 'Student 4', uowId: 'w1869304', iitId: '20210906', dob: '12/06/2003', course: 'BEng SE', imageSrc: devarnImg, linkTo: '/about/devarn' }
];

function AboutPage() {
  return (
    <div className={styles.aboutPage} style={{ backgroundImage: `url(${pageBackground})` }}>
      <div className={styles.pageContainer}>
        <section className={styles.introSection}>
          <h2>Who Are We?</h2>
          <p>
            We are undergraduate students of Informatics Institute of Technology (Sri Lanka), following a degree from the University of Westminster (UK). We started building this website in 2022 to help tourists learn more about our country and to provide a platform for discovering local culture and attractions.
          </p>
        </section>

        <section className={styles.profilesSection}>
          {studentData.map((student) => (
            <ProfileCard
              key={student.uowId}
              name={student.name}
              role={student.role}
              uowId={student.uowId}
              iitId={student.iitId}
              dob={student.dob}
              course={student.course}
              imageSrc={student.imageSrc}
              linkTo={student.linkTo}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default AboutPage;