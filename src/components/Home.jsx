import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import img1 from '../../Imgs/image (8).jpg';
import img2 from '../../Imgs/image (2).jpg';
import img3 from '../../Imgs/image (3).jpg';
import img4 from '../../Imgs/image (4).jpg';
import img5 from '../../Imgs/image (5).jpg';
import img6 from '../../Imgs/image (6).jpg';
import img7 from '../../Imgs/image (7).jpg';
import img8 from '../../Imgs/image (1).jpg';
import img9 from '../../Imgs/img1.jpg';
import img10 from '../../Imgs/img2.jpg';
import img11 from '../../Imgs/img3.jpg';
import travel from '../../Imgs/map.avif';
import work from '../../Imgs/work.png';
import add from '../../Imgs/add.png';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { Helmet } from 'react-helmet';
function Home() {
  const handleSubscribe = () => {
    window.location.href =
      'https://www.youtube.com/channel/UCiCcA49h_8ahephOQfxldhA?sub_confirmation=1';
  };
  return (
    <div className="wrap">
      <Helmet>
        <title>S.Chustian</title>
        <meta name="description" content="S.Chustian - Sayohatlar, yangi ishlar. Turli joylar va foydali maslahatlar. Biz bilan sayohat qiling va o'zgarishlarni kuzating!" />
        <link rel="canonical" href="https://schustian.netlify.app" />
      </Helmet>
      <div className="home container">
        <div className="home-box">
          <h1 className="home-title">Hello! My Name is Sayfulla</h1>
          <p className="home-subtitle">
            <span>I'm a </span>
            <span>
              <Typewriter
                options={{
                  loop: true,
                  delay: 75,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Blogger')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Adventurer')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('Truck driver')
                    .pauseFor(1000)
                    .start();
                }}
              />
            </span>
          </p>
          <Link to={'https://www.youtube.com/@S.Chustian'}></Link>
          <Link to={'https://t.me/sayfullachustiy'}></Link>
          <p className="home-text">
            I work as a truck driver at{' '}
            <Link className="orange" to={'https://www.bttransport.it/en/index.html'}>
              {' '}
              BT Transport{' '}
            </Link>
            in Europe and also share my experiences and travels through videos as a YouTuber. Having
            been to many countries, this helps make my YouTube channel more interesting and
            educational.
          </p>
          <button className="head-btn" onClick={handleSubscribe}>
            Subscribe to my channel.
          </button>
        </div>
        <div className="home-box">
          <Splide
            options={{
              type: 'loop', // Slider aylana bo‘lsin
              perPage: 1, // Bir vaqtning o‘zida 3 ta slayd ko‘rsatiladi
              autoplay: true, // Avtomatik slayd
              interval: 2500, // 3 soniya ichida slayd almashinadi
              gap: '1rem', // Slaydlar orasidagi bo'shliq
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <img src={img1} className="home-img" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={img2} className="home-img" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={img3} className="home-img" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={img4} className="home-img" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={img5} className="home-img" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={img6} className="home-img" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={img7} className="home-img" alt="" />
            </SplideSlide>
            <SplideSlide>
              <img src={img8} className="home-img" alt="" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
      <div className="about container">
        <div className="about-row">
          <div className="a-cards">
            <img src={travel} alt="" className="a-card-img" />
            <h2 className="a-card-title">Traveling</h2>
            <p className="a-card-text">
              I love traveling the world and capturing unique places on camera. I always discover
              new and interesting sights and incorporate them into my photos and videos.
            </p>
          </div>
          <div className="a-cards">
            <img src={add} alt="" className="a-card-img" />
            <h2 className="a-card-title">Advertising on YouTube</h2>
            <p className="a-card-text">
              I create unique ways to place my clients' ads on the YouTube platform. I ensure high
              quality in video creation, providing effective advertising tools for businesses and
              brands.
            </p>
          </div>
          <div className="a-cards">
            <img src={work} alt="" className="a-card-img" />
            <h2 className="a-card-title">Different jobs</h2>
            <p className="a-card-text">
              I work in a variety of fields, including BT Transport Services. Our services provide
              customers with fast and reliable transport solutions. With BT Transport Services, your
              cargo will be delivered safely and on time
            </p>
          </div>
        </div>
      </div>
      <div className="comments container">
        <Splide
          options={{
            type: 'loop', // Cheksiz aylanish
            perPage: 3, // Bir vaqtning o'zida ko'rsatiladigan slaydlar soni
            perMove: 1, // Har safar bir slaydni o'tkazish
            autoplay: true, // Avtomatik ravishda o'tish
            interval: 2000, // Slaydlar orasidagi vaqt (millisekundda)
            pauseOnHover: false, // Hoverda to'xtamaslik
            gap: '30px',
            breakpoints: {
              660: {
                perPage: 1,
          
              },
              1067: {
                perPage: 2,
            
              },
              1104: {
                perPage: 3,
               
              },
            },
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div className="com-card">
              <img src={img9} alt="" className="c-img" />
              <h2 className="c-title">Ethan Davis</h2>
              <p className="c-text">
                I really like your YouTube videos. They are interesting. I really like your style,
                keep it up!
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="com-card">
              <img src={img10} alt="" className="c-img" />
              <h2 className="c-title">Oliver Reed</h2>
              <p className="c-text">
                Your content has always been interesting and helpful. I have learned a lot from you.
                Thank you!
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="com-card">
              <img src={img11} alt="" className="c-img" />
              <h2 className="c-title">Liam James</h2>
              <p className="c-text">
                I've been very inspired by your videos. Keep creating such useful and quality
                content!
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
      <div className="contact">
        <div className="container">
          <div className="cont-row">
            <div className="cont-box1">
              {' '}
              <h2 className="cont-title">Contact me</h2>
              <p className="cont-text">
                If you have any questions or suggestions, feel free to contact me. I will be happy
                to answer all your questions.
              </p>
              <form className="cont-form">
                <input type="text" placeholder="Your Name" className="cont-input" />
                <input type="text" placeholder="Your Surname" className="cont-input" />
                <input type="email" placeholder="Email" className="cont-input" />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="cont-input"
                ></textarea>
                <button className="cont-btn">Send Message</button>
              </form>
            </div>
            <div className="cont-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1353.5836723850755!2d19.11953501636629!3d48.57903525299837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471538290a943cb9%3A0xbb1447026e9cc22d!2sBT%20Transport%20Ltd.!5e1!3m2!1sen!2s!4v1737651525503!5m2!1sen!2s"
                className="map"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
