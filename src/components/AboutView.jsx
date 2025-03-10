import { useEffect } from 'react';
import Hero from './Hero';

const AboutView = () => {

    useEffect(() => {
        document.title = 'About Us - Movie Browser';
      }, []);

    return (
      <>
	  <Hero text="About Us" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                <p className='pb-2'>
                  Welcome to Movie Browser, your ultimate destination for discovering, exploring, and celebrating the world of cinema! At Movie Browser, we believe every movie has its own unique story to tell—a story that connects us, sparks our imagination, and invites us on journeys to places we've only dreamed of. That&apos;s why we&apos;re dedicated to ensuring you never miss a single detail about your favorite films, whether they're timeless classics, modern blockbusters, or hidden gems waiting to be discovered.
                </p>
                <p className='pb-2'>
                  Our platform is designed for passionate movie enthusiasts who live and breathe cinema. Whether you&apos;re a casual viewer looking for recommendations, a dedicated cinephile curious about behind-the-scenes details, or someone seeking that perfect movie for a cozy night in, we&apos;ve got you covered. With an intuitive, easy-to-navigate interface, Movie Browser allows you to browse through an extensive and ever-growing library of movies. Each title is packed with all the information you could ever need—from riveting plot summaries and fascinating cast details to official release dates, ratings, and so much more.
                </p>
                <p className='pb-2'>
                  Have you ever wondered about the origins of your favorite characters? Or wanted to dive deeper into the themes, directors, and genres that shaped the history of cinema? We bring all these insights to your fingertips. At Movie Browser, exploration isn&apos;t just encouraged—it&apos;s effortless. You can seamlessly search for any title, genre, or actor, uncovering a treasure trove of stories that inspire, entertain, and evoke emotions.
                </p>
                <p className='pb-2'>
                  One of the things that makes Movie Browser special is how it enhances the experience of movie lovers everywhere. Whether you&apos;re planning a nostalgic rewatch of a beloved classic, exploring films with friends for a watch party, or simply indulging your passion for storytelling, our site is here to make your journey unforgettable. Need recommendations for a romantic movie to watch on date night? Or maybe you&apos;re on the hunt for a mind-bending sci-fi adventure to blow your mind? Look no further—we&apos;re here to help curate your perfect cinematic adventure.
                </p>

                <p className='pb-2'>
                  But we&apos;re not just a place to browse movies. At Movie Browser, we believe in celebrating the art of cinema in all its glory. Movies are more than just entertainment—they&apos;re windows into diverse worlds and cultures, powerful tools for storytelling, and mirrors that reflect the beauty and complexity of the human experience. As you navigate our platform, you&apos;ll discover more than just facts; you&apos;ll uncover the stories behind the stories, the creators who brought them to life, and the impact they&apos;ve had on audiences around the world.
                </p>
                <p className='pb-2'>
                  Ultimately, Movie Browser is about connection—connecting you with the films you love, with the creators who shaped them, and with the universal emotions that unite us all as movie lovers. So sit back, grab your popcorn, and let us take you on a cinematic journey like no other. Whether you&apos;re exploring for the first time or rediscovering old favorites, we&apos;re honored to be your guide in the dazzling, unforgettable world of movies. At Movie Browser, it&apos;s always showtime.
                </p>
              </p>
            </div>
          </div>
        </div>
      </>
    )
}

export default AboutView;