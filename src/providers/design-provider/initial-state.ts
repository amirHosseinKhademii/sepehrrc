export const designInitialState = {
  menuItems: [
    {
      id: '0',
      type: 'slider',
      title: 'اسلایدر',
      images: [],
    },
    {
      id: '1',
      type: 'products',
      title: 'لیست محصولات',
      images: [],
    },
    {
      id: '2',
      type: 'banner',
      title: 'بنر',
      images: [],
    },
    {
      id: '3',
      type: 'brands',
      title: 'برندها',
      images: [],
    },
    {
      id: '4',
      type: 'slider',
      title: 'لیست اخبار',
    },
    {
      id: '5',
      type: 'slider',
      title: 'متن با تصویر',
    },
    {
      id: '6',
      type: 'slider',
      title: 'نظرات مشتریان',
    },
    {
      id: '7',
      type: 'text',
      title: 'متن',
    },
    {
      id: '8',
      type: 'slider',
      title: 'لیست محصولات',
    },
  ],
  pageItems: [
    {
      uuid: 'HEADER',
      type: 'header',
      title: 'هدر',
      images: [],
    },
    {
      uuid: 'FOOTER',
      type: 'footer',
      title: 'فوتر',
    },
  ],
  pageSettings: {
    key: 'main',
    titleFont: 'yekan',
    textFont: 'yekan',
    primary: '',
    secondary: '',
  },
  current: {
    uuid: '',
    settings: {
      imageSetting: false,
    },
    images: [{ number: 'one', value: 'sfdsf', newTab: false, link: '' }],
  },
  pureImage: {
    number: '',
    value: '',
    newTab: false,
    link: '',
    onUpload: false,
    title: '',
    description: '',
  },
};
