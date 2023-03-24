const LINKS = {
  1: [
    '/', // "Contact us"
    '/', // "Size Guide"
    '/', // "My Order"
    '/', // "My Account"
    '/', // "Payment"
    '/', // "Authenticity"
    '/', // "Our Services"
  ],

  2: [
    '/', // "Shipping"
    '/', // "Tasck your order"
    '/', // "Returns and exchanges"
  ],

  3: [
    '/', // "Terms and Conditions of Sale"
    '/', // "Privacy Policy"
    '/', // "Cookie Policy"
    '/', // "Cookie settings"
  ],

  4: [
    '/', // "Find a Boutique"
    '/', // "Careers"
    '/', // "Armani/Values"
  ],

  5: [
    {
      link: 'https://www.facebook.com/unionstone.ae',
      target: '_blank'
    }, // "fb"
    {
      link: 'https://www.instagram.com/unionstone.ae',
      target: '_blank'
    }, // "insta"
    {
      link: '/',
      target: ''
    },
    {
      link: '/',
      target: ''
    }, // "twitter"
    {
      link: '/',
      target: ''
    }, // "youtube"
  ],

  6: [
    {
      link: '/',
      target: ''
    }, // "payment_systems"
    {
      link: '/',
      target: ''
    }, // "paypal"
  ]
}

export const getLink = (section, position) => {
  return LINKS[section + 1][position];
};
