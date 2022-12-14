/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Tipsi',
    image: '/tipsi-stripe/img/tipsi-logo.png',
    infoLink: 'https://www.gettipsi.com',
    pinned: true
  }
];

const siteConfig = {
  title: 'tipsi-stripe',
  tagline: '(Deprecated) Stripe support for React-Native',
  url: 'https://tipsi.github.io',
  baseUrl: '/tipsi-stripe/',
  projectName: 'tipsi-stripe',
  headerLinks: [{ doc: 'index', label: 'Docs' }],
  users,
  headerIcon: 'img/favicon.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#6A3549',
    secondaryColor: '#5B3A51'
  },
  copyright: `Copyright © ${new Date().getFullYear()} Tipsi`,
  customDocsPath: 'docs-md',
  organizationName: 'tipsi',
  highlight: { theme: 'default' },
  scripts: ['https://buttons.github.io/buttons.js'],
  repoUrl: 'https://github.com/tipsi/tipsi-stripe'
};

module.exports = siteConfig;
