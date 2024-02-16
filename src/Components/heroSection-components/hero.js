import React from "react";
import Pic from "../../Assets/1212.png";
import Player from "../../Components/player/Player";
import songsdata from "../../Components/player/audios";
import { useRef, useState, useEffect } from "react";
import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsSoundwave,
  BsTiktok,
  BsLinkedin,
} from "react-icons/bs";
import "./index.css";
function Hero() {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };
  return (
    <>
      {/* ==================== HOME ==================== */}
      <section className="home-hero section" id="home">
        <div className="home__container container ">
          <div className="home__content ">
            <div className="home__social">
              <a href="" className="home__social-icon" target="_blank">
                <BsInstagram className="icon-socialmedia" />
              </a>
              <a href="" className="home__social-icon" target="_blank">
                <BsFacebook className="icon-socialmedia" />
              </a>
              <a href="" className="home__social-icon" target="_blank">
                <BsYoutube className="icon-socialmedia" />
              </a>
              <a href="" className="home__social-icon" target="_blank">
                <BsSoundwave className="icon-socialmedia" />
              </a>
              <a href="" className="home__social-icon" target="_blank">
                <BsTiktok className="icon-socialmedia" />
              </a>
              <a href="" className="home__social-icon" target="_blank">
                <BsLinkedin className="icon-socialmedia" />
              </a>
            </div>

            <div className="home__img">
              <img className="img-hero" src={Pic} />
            </div>

            <div className="home__data-blur">
              <svg
                className="filter-box"
                width="490"
                height="403"
                viewBox="0 0 672 503"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_1_5)">
                  <rect
                    width="672"
                    height="503"
                    fill="#C4C4C4"
                    fillOpacity="0.07"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="671"
                    height="502"
                    stroke="#C4C4C4"
                    strokeOpacity="0.76"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_1_5"
                    x="-56"
                    y="-56"
                    width="784"
                    height="615"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="28" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1_5"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1_5"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="home__data">
                <h1 className="home__title"> Mourad</h1>
                <h3 className="home__subtitle">Voice Over</h3>
                <p className="home__description">
                  I'm a professional voice actor and voice-over artist, bringing
                  words to life with my versatile and captivating vocal talents.
                </p>
              </div>
            </div>
          </div>

          {/*Start Audio box */}
          <div className="audio">
            <audio
              src={currentSong.url}
              ref={audioElem}
              onTimeUpdate={onPlaying}
            />
            <Player
              songs={songs}
              setSongs={setSongs}
              isplaying={isplaying}
              setisplaying={setisplaying}
              audioElem={audioElem}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
            />
          </div>
          {/* End Audio box */}
        </div>
      </section>
    </>
  );
}

export default Hero;
