/* eslint-disable import/no-commonjs */

module.exports = {
  docs: {
    'The Basics': [
      'getting-started',
      'state',
      'context',
      'sources',
      'keyboard-navigation',
      'layout',
      'prop-getters',
      'controlled-mode',
      'more-resources',
    ],
    Guides: ['creating-a-renderer'],
    API: [
      {
        type: 'category',
        label: 'autocomplete-core',
        items: ['createAutocomplete'],
      },
      {
        type: 'category',
        label: 'autocomplete-js',
        items: ['autocomplete-js', 'getAlgoliaHits-js', 'getAlgoliaResults-js'],
      },
      {
        type: 'category',
        label: 'autocomplete-preset-algolia',
        items: [
          'highlightAlgoliaHit',
          'reverseHighlightAlgoliaHit',
          'snippetAlgoliaHit',
          'getAlgoliaHits',
          'getAlgoliaResults',
        ],
      },
    ],
  },
};
