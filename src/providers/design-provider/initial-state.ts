export const designInitialState = {
  menuItems: [
    {
      id: '0',
      type: 'slider',
      title: 'اسلایدر',
      images: [],
      settings: {},
    },
    {
      id: '1',
      type: 'products',
      title: 'لیست محصولات',
      images: [],
      settings: {},
    },
    {
      id: '2',
      type: 'banner',
      title: 'بنر',
      images: [],
      settings: {},
    },
    {
      id: '3',
      type: 'brands',
      title: 'برندها',
      images: [],
      settings: {},
    },
    {
      id: '4',
      type: 'news',
      title: 'لیست اخبار',
    },
    {
      id: '5',
      type: 'textImage',
      title: 'متن با تصویر',
    },
    {
      id: '6',
      type: 'comments',
      title: 'نظرات مشتریان',
    },
    {
      id: '7',
      type: 'text',
      title: 'متن',
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
    titleFont: 'yekanbakh',
    textFont: 'yekanbakh',
    primary: '#ed1c24',
    secondary: '#000',
  },
  current: {
    uuid: '',
    images: [{ number: 'one', value: '', newTab: false, link: '' }],
    settings: {},
  },
  pureImage: {
    number: '',
    value: '',
    newTab: false,
    link: '',
    onUpload: false,
    title: '',
    description: '',
    isBackground: false,
  },
};
