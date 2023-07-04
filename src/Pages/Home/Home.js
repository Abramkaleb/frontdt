import React from 'react';
import './Home.css';
import IMG1 from './1.jpeg'

const data = [
  {
    id : 1,
    image : IMG1,
    title: 'Digital Twin Description',
    description: 'Digital twin adalah blablabla',
    demo: 'https://dribbble.com/'
  },

  {
    id : 2,
    // image : IMG2,
    title: 'Our Project',
    description: 'Projek kami mengerjakan tentang',
    demo: 'https://dribbble.com/'
  },
]

const Home = () => {
return (
  <section id='portofolio'>
  <h1>Pekerjaan Terkini</h1>
  <h1>Portofolio</h1>

  <div className="container portofolio__container">
    {
      data.map(({id, image, title, description, demo}) => {
        return(
          <article key={id} className="portofolio__item">
            <div className="portofolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portofolio__item-cta">
              <span href={description} className='btn' target='_blank'>{description}</span>
              {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
            </div>
          </article>
        )
      })
    }
  </div>
</section>
    );
  }

export default Home;
