import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';
import {useAccount} from 'wagmi';

import IconComponent from '../components/IconComponent';
import useWindowSize from '../helpers/windowResize';

import catHero from '@/assets/images/cat_on_planet.svg';
import bannerBottomCat from '@/assets/images/banner_bottom_cat.png';
import NewsLetterBanner from '../assets/images/newsletter.png';

import {ConnectWallet} from '../components/ConnectWallet';
import MintNFT from '../components/MintNFT';
import 'swiper/css';
import {data} from '../fakeData';
import {collectionData, listData} from '..';
const {collections, stepData} = data;

const Home = () => {
  const {isConnected} = useAccount();
  return (
    <main className="">
      <HeroSection />
      <div className="flex justify-center py-4">
        <ConnectWallet />
      </div>
      <p className="text-center text-2xl">
        每個人都不得不面對這些問題。在面對這種問題時，務必詳細考慮陰陽道的各種可能。冰心講過一段耐人尋思的話，修養的花兒在寂靜中開過去了，成功的果子便要在光明里結實。這不禁令我重新仔細的思考。既然，這必定是個前衛大膽的想法。我們要學會站在別人的角度思考。生活中，若陰陽道出現了，我們就不得不考慮它出現了的事實。
      </p>
      {isConnected && <MintNFT />}
      <CollectionSection data={collections} />
      <StepSection data={stepData} />
      <NewsletterSection />
    </main>
  );
};

export default Home;

const HeroSection = () => {
  const [bannerWidth, setBannerWidth] = useState<string | number>(240);
  const [bannerHeight, setBannerHeight] = useState<string | number>(480);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width >= 996) {
      return setBannerWidth(320), setBannerHeight(448);
    }
    if (size.width >= 768) {
      return setBannerWidth(240), setBannerHeight(360);
    }
    return () => (setBannerWidth(240), setBannerHeight(480));
  }, [size.width]);

  return (
    <section className="relative bg-primary z-0 h-screen lg:h-[90vh] before:absolute before:bg-[url('@/assets/images/mv_snow_leftTop.png')] before:top-0 before:left-0 before:w-full before:h-full before:bg-no-repeat before:bg-scroll before:bg-[length:193px_108px] lg:before:bg-[length:440px_247px] before:-z-10 after:absolute after:top-full after:bg-no-repeat after:bg-[url(@/assets/images/underWave.png)] after:bg-[length:100%_10%] md:after:bg-[length:100%_20%] lg:after:bg-[length:100%_10rem] after:w-full after:h-full after:-translate-y-[8vh] md:after:-translate-y-[17vh] lg:after:-translate-y-[20vh] after:-z-10">
      <span className="w-full before:h-full before:absolute before:bg-[url('@/assets/images/mv_snow_left.png')] before:bg-no-repeat before:top-0 before:left-0 before:w-full before:bg-[length:11rem_36rem] md:before:bg-contain before:bg-fixed before:bg-left-top before:-z-10 after:bg-[url('@/assets/images/mv_snow_right.png')] after:bg-fixed after:absolute after:w-full after:h-full after:bg-right-top after:bg-[length:12rem_42rem] md:after:bg-contain after:bg-no-repeat after:-z-10"></span>
      <div className="container lg:relative lg:w-full lg:h-full">
        <div className="text-white flex flex-col justify-center items-center lg:h-full lg:flex-row lg:justify-between lg:items-center">
          <img
            className="lg:absolute lg:left-full lg:top-1/2 lg:-translate-x-full lg:-translate-y-1/2"
            alt="heroBanner"
            src={catHero}
            width={bannerWidth}
            height={bannerHeight}
          />
          <div className="flex flex-col items-start justify-between lg:justify-center lg:gap-6 lg:translate-x-1/4 lg:translate-y-24">
            <h1 className="text-3xl lg:text-6xl lg:text-primary-50 leading-normal font-bold drop-shadow">
              WELCOME
              <br />
              THE
              <br />
              <span className="text-secondary">MEOWTIVERSE</span>
            </h1>
            <p className="mb-7 leading-9 drop-shadow">
              不定期會推出特色的 NFT ，<br />
              我的 NFT ？想要的話就給你吧，去找吧！
              <br />
              我把多重宇宙上的一切都放在區塊鏈裡！
            </p>
            <Link
              to="/"
              className="relative bg-secondary text-primary border border-primary-400 py-4 px-6 lg:py-2 lg:px-12 transition-all duration-300 mb-16 hover:text-secondary hover:bg-primary-400 hover:border-primary-500"
            >
              <span>JOIN US</span>
              <div className="absolute top-0 -translate-y-full left-full -translate-x-full overflow-hidden w-full flex">
                <div className="translate-y-[10%]">
                  <img
                    alt="bannerBottomCat"
                    src={bannerBottomCat}
                    width={127}
                    height={62}
                    className="transition-all duration-300 animate-[updown_1s_ease-in-out_0.5s_infinite]"
                  />
                </div>
                <div className="translate-y-[25%]">
                  <img
                    alt="bannerBottomCat"
                    src={bannerBottomCat}
                    width={127}
                    height={62}
                    className="transition-all duration-300 delay-500 animate-[updown_1s_ease-in-out_infinite]"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const StepSection = ({data}: listData) => {
  const swiperSlide = {height: 'auto'};

  return (
    <section className="bg-primary p-8">
      <div className="container text-primary-50">
        <h2 className="text-4xl text-center mb-10">鑄造 NFT 流程</h2>
        <Swiper
          spaceBetween={24}
          slidesPerView={1.5}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1.2,
              spaceBetween: 24,
            },
            '@0.75': {
              slidesPerView: 1.8,
              spaceBetween: 32,
            },
            '@1.00': {
              slidesPerView: 2.5,
              spaceBetween: 36,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 48,
            },
          }}
          modules={[Autoplay]}
          className="h-full"
        >
          {data.map((item) => (
            <SwiperSlide style={swiperSlide} key={item.title}>
              <div className="border rounded p-6 flex flex-col gap-4 h-full">
                <div className="text-4xl grid place-content-center p-4">
                  <span className="rounded-full bg-primary-400 p-6">
                    {IconComponent(item.icon)}
                  </span>
                </div>
                <h3 className="text-center text-2xl">{item.title}</h3>
                <p className="text-center text-lg">{item.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const NewsletterSection = () => {
  const [imgWidth, setImgWidth] = useState<string | number>(0);
  const [imgHeight, setImgHeight] = useState<string | number>(0);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width >= 996) {
      return setImgWidth(480), setImgHeight('100%');
    }
    if (size.width >= 768) {
      return setImgWidth(240), setImgHeight('100%');
    }
    return () => (setImgWidth('100vw'), setImgHeight('100%'));
  }, [size.width]);

  return (
    <section className="py-10 container">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <img src={NewsLetterBanner} alt="訂閱電子報" width={imgWidth} height={imgHeight} />
        <form action="" className="flex flex-col gap-6 justify-center p-4 w-full">
          <h2 className="text-2xl font-bold lg:mx-auto flex flex-col md:flex-row gap-4">
            不要錯過第一手消息<span>訂閱訂起來</span>
          </h2>
          <label htmlFor="subscribeEmail" className="text-center text-xl">
            訂閱電子報 獲得最新消息
          </label>
          <div className="flex flex-col justify-between gap-4">
            <input
              id="subscribeEmail"
              type="text"
              name="subscribeEmail"
              className="py-2 px-4 border border-primary rounded outline-primary-400"
              placeholder="請輸入電子郵件信箱"
            />
            <input
              type="submit"
              value="訂閱電子報"
              className="py-2 px-4 bg-primary-300 text-primary-50 rounded transition duration-300 hover:bg-primary-500"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

const CollectionSection = ({data}: collectionData) => {
  const [imgHeight, setImgHeight] = useState<string | number>(0);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width >= 996) {
      return setImgHeight(640);
    }
    if (size.width >= 768) {
      return setImgHeight(480);
    }
    return () => setImgHeight(540);
  }, [size.width]);
  return (
    <section className="container flex flex-col md:flex-row md:items-stretch lg:flex-col gap-12 py-10">
      {data.map((item) => (
        <div
          className="relative rounded flex flex-col lg:flex-row lg:gap-8 border border-primary-300 p-6 before:absolute before:inset-0 before:-z-10 before:shadow-[6px_6px_0px_#01113c5d] before:rounded"
          key={item.title}
        >
          <img
            src={item.img}
            height={imgHeight}
            alt={item.title}
            className="lg:w-96 lg:object-cover"
          />
          <div className="flex flex-col gap-4 h-full lg:h-auto">
            <h2 className="text-2xl md:text-3xl font-bold lg:text-4xl">{item.title}</h2>
            <p className="lg:text-lg lg:row-span-2 mb-auto">{item.content}</p>
            <Link
              to={item.path}
              className="ring-1 text-center ring-primary block py-3 transition duration-300 lg:text-xl hover:text-primary-50 hover:bg-primary"
            >
              發現更多
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};
