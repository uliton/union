import React from 'react';
import { Accordion } from '../../ui/Accordion/Accordion';
import { LanguageSelect } from '../../ui/LanguageSelect/LanguageSelect';

export const Footer = ({ setLanguage }) => {

  const content = [
    {
      title: 'Customer Care',
      links: [
        {
          name: 'Contact us',
          url: '/'
        },
        {
          name: 'Size Guide',
          url: '/'
        },
        {
          name: 'My Order',
          url: '/'
        },
        {
          name: 'My Account',
          url: '/'
        },
        {
          name: 'Payment',
          url: '/'
        },
        {
          name: 'Authenticity',
          url: '/'
        },
        {
          name: 'Our Services',
          url: '/'
        }
      ],
      images: []
    },
    // {
    //   title: 'Shipping & Returns',
    //   links: [
    //     {
    //       name: 'Shipping',
    //       url: '/'
    //     },
    //     {
    //       name: 'Tasck your order',
    //       url: '/'
    //     },
    //     {
    //       name: 'Returns and exchanges',
    //       url: '/'
    //     }
    //   ],
    //   images: []
    // },
    // {
    //   title: 'Legal Area',
    //   links: [
    //     {
    //       name: 'Terms and Conditions of Sale',
    //       url: '/'
    //     },
    //     {
    //       name: 'Privacy Policy',
    //       url: '/'
    //     },
    //     {
    //       name: 'Cookie Policy',
    //       url: '/'
    //     },
    //     {
    //       name: 'Cookie settings',
    //       url: '/'
    //     }
    //   ],
    //   images: []
    // },
    // {
    //   title: 'Our Company',
    //   links: [
    //     {
    //       name: 'Find a Boutique',
    //       url: '/'
    //     },
    //     {
    //       name: 'Careers',
    //       url: '/'
    //     },
    //     {
    //       name: 'Armani/Values',
    //       url: '/'
    //     }
    //   ],
    //   images: []
    // },
    // {
    //   title: 'Follow Us',
    //   links: [],
    //   images: [
    //     {
    //       directory: '../../images/icons/fb.svg',
    //       url: ''
    //     },
    //     {
    //       directory: '../../images/icons/insta.svg',
    //       url: ''
    //     },
    //     {
    //       directory: '../../images/icons/twitter.svg',
    //       url: ''
    //     },
    //     {
    //       directory: '../../images/icons/youtube.svg',
    //       url: ''
    //     }
    //   ]
    // },
    // {
    //   title: 'Payment Methods',
    //   links: [],
    //   images: [
    //     {
    //       directory: '../../images/icons/payment_systems.svg',
    //       url: ''
    //     },
    //     {
    //       directory: '../../images/icons/paypal.svg',
    //       url: ''
    //     }
    //   ]
    // }
  ]

  return (
    <footer className='footer'>
      <div className="footer__accordion">
        {content.map((item, i) => (
          <React.Fragment key={i}>
            <Accordion content={item} index={i} />
          </React.Fragment>
        ))}
      </div>

      <div className="footer__service">
        <LanguageSelect setLanguage={setLanguage} />

        <span className='footer__service__creater'>
          <p>
            Created by
          </p>
          
          <a
            href="https://uliton.github.io/CV/"
            rel="noreferrer"
            target="_blank"
          >
            Uliton
          </a>
        </span>
      </div>
    </footer>
  );
};
