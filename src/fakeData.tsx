import PicassoCollection from './assets/images/picassoCollection.png';
import CatCollection from './assets/images/catCollection.png';
import catBanner from './assets/images/catBanner.png';
import picassoBanner from './assets/images/picassoBanner.png';
import collectionBanner from './assets/images/collectionBanner.png';

export const data = {
  collections: [
    {
      title: '抽象畫 - 與畢卡索對話',
      content: '以抽象畫的手法致敬畢卡索人像抽象畫的畫風，以色塊拼接搭配簡單幾何圖形組合而成的角色',
      description:
        '向大師致敬，以抽象畫的手法作為基礎風格，使用基礎的幾何圖形作為人物五官的設計，使用摩爾多瓦設計師danjazzia的圖形作為基底進行組合而成的角色，以色塊拼接搭配簡單幾何圖形組合而成的角色',
      img: PicassoCollection,
      path: 'collection/picasso',
      banner: picassoBanner,
    },
    {
      title: '那個喵',
      content:
        '以一個無名小卒的貓咪人？！ 是那個貓咪人嗎？ 作為背景的角色 NFT ，我這個人很簡單，有貓我就給讚 👍',
      description: '',
      img: CatCollection,
      path: 'collection/cat',
      banner: catBanner,
    },
  ],
  stepData: [
    {
      icon: 'BiCollection',
      title: 'STEP 1',
      content: '選擇想要鑄造 NFT 的 Collection 進入那個 Collection 的詳細頁面',
    },
    {
      icon: 'BiWallet',
      title: 'STEP 2',
      content: '點選 Mint 的按鈕，選擇要連接的錢包種類，再選擇要用的帳號',
    },
    {
      icon: 'BiDollarCircle',
      title: 'STEP 3',
      content: '選擇要 Mint 的數量，同 Collection 可以 Mint 5 個 NFT',
    },
    {
      icon: 'GiSailboat',
      title: 'STEP 4',
      content: '付款與區塊鏈交易完成，即可以在 opensea 帳戶裡看到那個 NFT',
    },
  ],
  headerList: [
    {
      name: 'Collections',
      path: 'collection',
      icon: 'BiLayer',
    },
    {
      name: 'Wallet',
      path: 'wallet',
      icon: 'BiWallet',
    },
    {
      name: 'User',
      path: 'user',
      icon: 'HiUserCircle',
    },
  ],
  footerList: [
    {
      name: 'Discord',
      path: 'discord',
      icon: 'BsDiscord',
    },
    {
      name: 'Facebook',
      path: 'facebook',
      icon: 'BsFacebook',
    },
    {
      name: 'Twitter',
      path: 'twitter',
      icon: 'BsTwitter',
    },
    {
      name: 'Behance',
      path: 'behance',
      icon: 'ImBehance2',
    },
  ],
  about: {
    title: '關於我們',
  },
};
