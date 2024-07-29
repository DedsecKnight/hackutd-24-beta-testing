import Image from 'next/image';
import MLH_Sticker from '../../public/assets/mlh-sticker.png';
import BackgroundCircles from '../BackgroundCircles';
import styles from './HomeHero2.module.css';
import hero from '../../public/assets/hero.png';
import HackUTDTitle from '../../public/assets/HackUTD 2024 Title.png';
import Duck from '../../public/assets/duck.png';
import mascotLifeRing from '../../public/assets/mascot_life_ring.png';

export default function HomeHero2() {
  return (
    <section
      className={`${styles.container} min-h-screen bg-contain relative bg-white flex flex-col-reverse md:flex-col`}
      style={{
        backgroundImage: `url(${hero.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '120vh',
      }}
    >
      <div className="flex-grow flex h-full w-full relative">
        <div className="relative z-10 shrink-0 w-full flex">
          {/* MLH sticker */}
          <div className="absolute top-0 right-4 z-20">
            <Image
              src={MLH_Sticker.src}
              height={MLH_Sticker.height}
              width={MLH_Sticker.width}
              alt="MLH sticker"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Big welcome */}
          <div className="w-full flex flex-col gap-2 justify-center items-center h-full">
            {/* Duck image */}
            <div
              className="w-30 md:w-40  lg:w-60 mb-4"
              style={{ position: 'absolute', top: '25%', right: '25%' }}
            >
              <Image
                src={Duck.src}
                alt="Duck"
                layout="responsive"
                width={Duck.width}
                height={Duck.height}
              />
            </div>
            {/* Date */}
            <p
              className="font-jua text-[#FFFFFF] text-sm md:text-xl lg:text-3xl"
              style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              Nov 16 - Nov 17
            </p>
            {/* Title */}
            <div
              className="w-3/4 md:w-1/2 lg:w-1/3"
              style={{
                position: 'absolute',
                top: '45%',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <Image
                src={HackUTDTitle.src}
                alt="HackUTD Title"
                layout="responsive"
                width={HackUTDTitle.width}
                height={HackUTDTitle.height}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-5 md:left-10 lg:bottom-5 left-20 z-20">
        <div className="w-40 md:w-60 lg:w-80">
          <Image
            src={mascotLifeRing.src}
            alt="Mascot Life Ring"
            layout="responsive"
            width={mascotLifeRing.width}
            height={mascotLifeRing.height}
          />
        </div>
      </div>
    </section>
  );
}
