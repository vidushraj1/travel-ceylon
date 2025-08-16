import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

import homepageVideo from '../../assets/videos/homepage_video1.mp4';
import srilankaInfoImage from '../../assets/images/Srilanka_Info.jpg';
import collageImage from '../../assets/images/collage.jpeg';
import pageBackground from '../../assets/images/back.jpg';

function HomePage() {
  return (
    <div className={styles.homePageWrapper} style={{ backgroundImage: `url(${pageBackground})` }}>
      <section className={styles.heroSection}>
        {/* The 'playsInline' attribute is added here for iOS compatibility */}
        <video autoPlay loop muted playsInline className={styles.heroVideo}>
          <source src={homepageVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className={styles.heroText}>Explore SRI LANKA!</h1>
      </section>

      <div className={styles.pageContent}>
        <section className={styles.infoSection}>
          <div className={styles.infoTextContainer}>
            <h2>An Island of Wonder</h2>
            <p>
              Sri Lanka is an alluring island located in the Indian Ocean, southwest of the Bay of Bengal. Known by other names such as Ceylon, it played an important role in history as a major trading hub during the days of the Silk Route. Home to a wide variety of ethnicities and cultures, boasting some of the most beautiful beaches in the world, the year-round sunshine makes Sri Lanka a true tourist hotspot.
            </p>
          </div>
          <div className={styles.infoImageContainer}>
            <img src={srilankaInfoImage} alt="Map and information about Sri Lanka" />
          </div>
        </section>

        <section className={styles.infoSection}>
          <div className={styles.infoTextContainer}>
            <h2>So Much to Discover</h2>
            <p>
              Sri Lanka has so much to offer! Everything ranging from calming beaches, amazing animals, exotic flowers and not to mention, mouth-watering food!
            </p>
            <p className={styles.clickText}>
              Click on the image to learn more!
            </p>
          </div>
          <Link to="/content" className={`${styles.infoImageContainer} ${styles.collageContainer}`}>
            <img src={collageImage} alt="A collage of Sri Lankan sights" />
          </Link>
        </section>
      </div>
    </div>
  );
}

export default HomePage;