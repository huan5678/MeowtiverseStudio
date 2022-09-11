export interface listData {
  data: {
    title: string;
    content: string;
    index: number;
  }[];
}

export interface navData {
  data: {
    name: string;
    path: string;
  }[];
}

export interface collectionData {
  [ x: string ]: any;
  data: {
    img: string;
    title: string;
    content: string;
    path: string;
    description: string;
  }[];
}
