export const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: '/images/hats.webp',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: '/images/jackets.webp',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: '/images/sneakers.webp',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: '/images/womens.webp',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: '/images/men.webp',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
