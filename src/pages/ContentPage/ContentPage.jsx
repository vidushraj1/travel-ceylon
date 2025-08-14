import React from 'react';
import styles from './ContentPage.module.css';

import pageBackground from '../../assets/images/Background.jpg';

import kottuImg from '../../assets/images/img5.jpg';
import hoppersImg from '../../assets/images/img4.jpg';
import stringHoppersImg from '../../assets/images/img6.jpg';

import flower1 from '../../assets/images/image1.jpeg';
import flower2 from '../../assets/images/image2.jpeg';
import flower3 from '../../assets/images/image3.jpeg';

import animal1 from '../../assets/images/img1.jpeg';
import animal2 from '../../assets/images/img2.jpeg';
import animal3 from '../../assets/images/img3.jpg';

const contentData = [
  {
    title: 'A Taste of Sri Lankan Cuisine',
    images: [
      { src: hoppersImg, alt: 'Sri Lankan Hoppers' },
      { src: kottuImg, alt: 'Sri Lankan Kottu' },
      { src: stringHoppersImg, alt: 'Sri Lankan String Hoppers' },
    ],
    description: (
      <>
        Since Sri Lanka is a multi cultural country, you cannot expect anything less when it comes to Sri Lankan food. Offering a vivid array of flavor combinations, Our country is filled with its regional flavours while the cuisine is known for a rich combination of rice specialities, spices, herbs, seafood, seasonal vegetables and fruits and of course, legumes.
        <br /><br />
        Culture plays a pivotal role in the food scene in Sri Lanka while many Sinhalese food items are derived from the chena cultivation. From the most celebrated and auspicious Sinhala and Hindu New Year to various day to day events and celebrations will see an array of traditional Sri Lankan meals ranging from milk rice, sweetmeats and spicy curries for accompaniments.
        <br /><br />
        Many of these dishes are centred around the main staple rice, rice flour and coconut while seafood also plays quite an important part in Sri Lankan cuisine. Most Sri Lankans prefer vegetable curries while the main go-to meal in any part of the island is the good old “Rice and Curry”. The curries have immense flavour and colours which are derived from a list of Sri Lankan Hot Spices. These spices not only add great flavour to the food but also adds ayurvedic value to the dish.
        <br /><br />
        Since Sri Lankan food is regionally diverse, you can expect the same dish prepared in various methods and with different flavours. For an example, the dishes from the South of Sri Lanka have a distinctive quality and is mainly amalgamated with seafood. “Ambulthiyal” is a unique spicy fish preparation that uses a thick gambooge (goraka) paste while the preparation in the South is different from the other parts of the island.
        <br /><br />
        Hot and Spicy, tangy and sweet are the main flavours that you can explore whenever you are on a food trail in Sri Lanka.
      </>
    )
  },
  {
    title: 'The Flowers of Sri Lanka',
    images: [
      { src: flower1, alt: 'Blue Water Lily' },
      { src: flower2, alt: 'Sacred Lotus' },
      { src: flower3, alt: 'Queen of the Night Flower' },
    ],
    description: (
        <>
            Flowers add a sense of calmness and beauty wherever it is grown. Sri Lanka is no exception in this regard being home to many Rare and delightful flowers.
            <br /><br />
            The national flower of Sri Lanka is the Blue water Lily. Known for its eye-catching beauty and pleasing blue color with yellow stamens, this flower can often be found in wetland areas or slow moving streams.
            <br /><br />
            Being a multi cultural country, flowers are also used as offerings in temples and kovils. Often representing Buddhism, is the sacred lotus. It is known locally as 'nelum'. This flower is known for being one of the only water grown flowers to bloom several inches above the surface.The flower also emits a rich fragrance.
            <br /><br />
            The rather aptly named flower 'Queen of the night' can also be found in Sri Lankan. It is regared as one of the most expensive Flowers in the world due it's sweet fragrance and wilting in short while after being picked. This flower is known as 'Kadupul' by Sri Lankans.
        </>
    )
  },
  {
    title: 'The Animals of Sri Lanka',
    images: [
      { src: animal2, alt: 'Sri Lankan Elephant' },
      { src: animal3, alt: 'Sri Lankan Leopard' },
      { src: animal1, alt: 'Sri Lankan Junglefowl' },
    ],
    description: (
        <>
            The elephant is the national animal of Sri Lanka. Sri Lankan elephants are the largest subspecies reaching a shoulder height of between 2 and 3.5 m (6.6 and 11.5 ft), weigh between 2,000 and 5,500 kg (4,400 and 12,100 lb), and have 19 pairs of ribs. Their skin colour is darker than of indicus and of sumatranus with larger and more distinct patches of depigmentation on ears, face, trunk and belly. Only 7% of males bear tusks.
            <br /><br />
            The Sri Lankan leopard has a tawny or rusty yellow coat with dark spots and close-set rosettes, which are smaller than in Indian leopards. It has evolved to become a rather large leopard subspecies, because it is an apex predator without competition by other large wild cat species in the country. Large males have been suggested to reach almost 100 kg, but evidence for this is lacking.
            <br /><br />
            The Junglefowl is the national bird of Srilanka. The male Sri Lankan junglefowl ranges from 66–72 cm in length and essentially resembles a large, muscular rooster. The male has orange-red body plumage, and dark purple to black wings and tail. The feathers of the mane descending from head to base of spine are golden, and the face has bare red skin and wattles.
        </>
    )
  }
];

function ContentPage() {
  return (
    <div className={styles.contentPage} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${pageBackground})` }}>
      <div className={styles.pageContainer}>
        {contentData.map((section, index) => (
          <section
            key={section.title}
            className={`${styles.infoSection} ${index % 2 === 0 ? styles.reversed : ''}`}
          >
            <div className={styles.imageGrid}>
              {section.images.map(image => (
                <div key={image.src} className={styles.imageWrapper}>
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{section.title}</h2>
              <div className={styles.descriptionBox}>
                <p>{section.description}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ContentPage;