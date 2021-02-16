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
      images: [],
      settings: {},
    },
    {
      id: '5',
      type: 'textImage',
      title: 'متن با تصویر',
      images: [],
      settings: {},
    },
    {
      id: '6',
      type: 'comments',
      title: 'نظرات مشتریان',
      images: [],
      settings: {},
    },
    {
      id: '7',
      type: 'text',
      title: 'متن',
      images: [],
      settings: {},
    },
  ],
  pageItems: [
    {
      uuid: 'HEADER',
      type: 'header',
      title: 'هدر',
      images: [],
      settings: {},
    },
    {
      uuid: 'FOOTER',
      type: 'footer',
      title: 'فوتر',
      settings: {},
    },
  ],
  pageSettings: {
    key: 'main',
    titleFont: 'yekanbakh',
    direction: 'ltr',
    textFont: 'yekanbakh',
    primary: '#ed1c24',
    theme: 'default',
    secondary: '#000',
    language: 'persian',
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
