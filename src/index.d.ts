import {StaticImageData} from 'next/image';

export interface listData {
  data: {
    title: string;
    content: string;
    icon: string;
  }[];
}

export interface navData {
  data: {
    name: string;
    path: string;
    icon: string;
  }[];
}

export interface collectionData {
  data: {
    title: string;
    content: string;
    img: StaticImageData;
    path: string;
  }[];
}
