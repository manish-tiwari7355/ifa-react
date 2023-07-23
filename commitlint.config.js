module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'about_image': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  extends: ['@commitlint/config-conventional'],
  rules: {
    //   TODO Add Scope Enum Here
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'perf',
        'revert',
        'vercel',
      ],
    ],
  },
};