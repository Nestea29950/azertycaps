module.exports = {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            color: var(--color-primary), 
            a: var(--color-primary), 
            strong: var(--color-primary),
            h1: var(--color-primary),
            h2: var(--color-primary),
            h3: var(--color-primary),
            h4: var(--color-primary),
            code: var(--color-primary),
            blockquote: var(--color-primary),
            '--tw-prose-body': 'var(--color-primary)',
            '--tw-prose-paragraph': 'var(--color-primary)',
            '--tw-prose-headings': 'var(--color-primary)',
            '--tw-prose-lead': 'var(--color-primary)',
            '--tw-prose-links': 'var(--color-primary)',
            '--tw-prose-bold': 'var(--color-primary)',
            '--tw-prose-counters': 'var(--color-primary)',
            '--tw-prose-bullets': 'var(--color-primary)',
            '--tw-prose-hr': 'var(--color-primary)',
            '--tw-prose-quotes': 'var(--color-primary)',
            '--tw-prose-quote-borders': 'var(--color-primary)',
            '--tw-prose-captions': 'var(--color-primary)',
            '--tw-prose-code': 'var(--color-primary)',
            '--tw-prose-pre-code': 'var(--color-primary)',
            '--tw-prose-pre-bg': 'var(--color-primary)',
            '--tw-prose-th-borders': 'var(--color-primary)',
            '--tw-prose-td-borders': 'var(--color-primary)',
            '--tw-prose-invert-body': 'var(--color-primary)',
            '--tw-prose-invert-headings': 'var(--color-primary)',
            '--tw-prose-invert-lead': 'var(--color-primary)',
            '--tw-prose-invert-links': 'var(--color-primary)',
            '--tw-prose-invert-bold': 'var(--color-primary)',
            '--tw-prose-invert-counters': 'var(--color-primary)',
            '--tw-prose-invert-bullets': 'var(--color-primary)',
            '--tw-prose-invert-hr': 'var(--color-primary)',
            '--tw-prose-invert-quotes': 'var(--color-primary)',
            '--tw-prose-invert-quote-borders': 'var(--color-primary)',
            '--tw-prose-invert-captions': 'var(--color-primary)',
            '--tw-prose-invert-code': 'var(--color-primary)',
            '--tw-prose-invert-pre-code': 'var(--color-primary)',
            '--tw-prose-invert-pre-bg': 'var(--color-primary)',
            '--tw-prose-invert-th-borders': 'var(--color-primary)',
            '--tw-prose-invert-td-borders': 'var(--color-primary)',
          }
        },
      }),
      spacing: {
        // Entre les sections de page (ex: Slider > Bloc1 > Bloc2)
        'section-gap': '4rem',

        // Entre les éléments à l'intérieur d’un bloc (h2 + texte)
        'element-gap': '1rem',

        // Marge externe autour d’un bloc (ex: pour détacher du body)
        'block-margin': '2rem',
      },

      width: {
        'content': '95%',
        'content-lg': '90%',
        'content-xl': '85%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
