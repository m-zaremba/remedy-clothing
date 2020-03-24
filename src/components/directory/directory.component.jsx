import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: '/images/hats.png',
          id: 1,
          linkUrl: 'hats',
        },
        {
          title: 'jackets',
          imageUrl: '/images/jackets.png',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'sneakers',
          imageUrl: '/images/sneakers.png',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'womens',
          imageUrl: '/images/womens.png',
          size: 'large',
          id: 4,
          linkUrl: '',
        },
        {
          title: 'mens',
          imageUrl: '/images/men.png',
          size: 'large',
          id: 5,
          linkUrl: '',
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
