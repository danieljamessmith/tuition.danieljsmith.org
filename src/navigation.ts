import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Testimonials',
      href: getPermalink('/testimonials'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  socialLinks: [
    {
      ariaLabel: 'GitHub',
      icon: 'github',
      href: 'https://github.com/danieljamessmith',
    },
    {
      ariaLabel: 'LinkedIn',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/danieljames-smith/',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    © 2025 DJS TUITION. All rights reserved.
  `,
};
