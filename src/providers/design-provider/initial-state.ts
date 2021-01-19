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
      items: [
        {
          id: 0,
          name: 'کیت کلاچ میتسوبیشی لنسر',
          cover: '/assets/images/product.png',
          price: '3/000/000',
          discount: '500000',
        },
        {
          id: 1,
          name: 'کیت کلاچ میتسوبیشی لنسر',
          cover: '/assets/images/product.png',
          price: '3/000/000',
          discount: '500000',
        },
        {
          id: 2,
          name: 'کیت کلاچ میتسوبیشی لنسر',
          cover: '/assets/images/product.png',
          price: '3/000/000',
          discount: '500000',
        },
        {
          id: 3,
          name: 'کیت کلاچ میتسوبیشی لنسر',
          cover: '/assets/images/product.png',
          price: '3/000/000',
          discount: '500000',
        },
      ],
    },
    {
      id: '2',
      type: 'banner',
      title: 'بنر',
      images: [],
    },
    {
      id: '3',
      type: 'slider',
      title: 'برندها',
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
      Button: { text: 'محصولات فروشگاه' },
      menuItems: [
        { text: 'صفحه اصلی', link: './admin/design' },
        { text: 'محصولات فروشگاه', link: './admin/design' },
        { text: 'درباره ما', link: './admin/design' },
        { text: 'تماس باما', link: './admin/design' },
      ],
      megaMenu: [
        {
          text: 'محصولات نظافت خودرو',
          link: '',
          hasSub: true,
          subMenus: [
            {
              text: 'نظاافت الفا',
              link: '',
              hasSub: true,
              subMenus: [
                {
                  text: 'نظافت 1',
                  link: '',
                },
                {
                  text: 'نظافت 1',
                  link: '',
                },
                {
                  text: 'نظافت 1',
                  link: '',
                },
                {
                  text: 'نظافت 1',
                  link: '',
                },
              ],
            },
            {
              text: 'نظافت 2',
              link: '',
            },
            {
              text: 'نظافت 3',
              link: '',
            },
            {
              text: 'نظافت 4',
              link: '',
            },
            {
              text: 'نظافت 5',
              link: '',
            },
          ],
        },
        {
          text: 'محصولات نرم افزاری',
          link: '',
          hasSub: true,
          subMenus: [
            {
              text: 'نرم افزار الفا',
              link: '',
              hasSub: true,
              subMenus: [
                {
                  text: 'نرم افزار 1',
                  link: '',
                },
                {
                  text: 'نرم افزار 1',
                  link: '',
                },
                {
                  text: 'نرم افزار 1',
                  link: '',
                },
                {
                  text: 'نرم افزار 1',
                  link: '',
                },
              ],
            },
            {
              text: 'نرم افزار 2',
              link: '',
            },
            {
              text: 'نرم افزار 3',
              link: '',
            },
            {
              text: 'نرم افزار 4',
              link: '',
            },
            {
              text: 'نرم افزار 5',
              link: '',
            },
          ],
        },
        {
          text: ' ابزار تعمیرات خودرو',
          link: '',
          hasSub: true,
          subMenus: [
            {
              text: 'ابزار  الفا',
              link: '',
              hasSub: true,
              subMenus: [
                {
                  text: 'ابزار 1',
                  link: '',
                },
                {
                  text: 'ابزار 1',
                  link: '',
                },
                {
                  text: 'ابزار 1',
                  link: '',
                },
                {
                  text: 'ابزار 1',
                  link: '',
                },
              ],
            },
            {
              text: 'ابزار 2',
              link: '',
            },
            {
              text: 'ابزار 3',
              link: '',
            },
            {
              text: 'ابزار 4',
              link: '',
            },
            {
              text: 'ابزار 5',
              link: '',
            },
          ],
        },
        {
          text: ' درباره ما',
          link: '',
        },
        {
          text: ' ارتباط با ما',
          link: '',
        },
      ],
    },
    {
      uuid: 'FOOTER',
      type: 'footer',
      title: 'فوتر',
    },
  ],
  pageKey: 'main',
  current: {
    uuid: '',
    settings: {},
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
