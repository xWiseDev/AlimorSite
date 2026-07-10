import typography from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'alimor-purple': '#7C5CDB',
        'alimor-purple-light': '#9B7FE8',
        'alimor-purple-dark': '#5D44A8',
        'alimor-bg': '#F8F7FC',
        'alimor-text': '#2D2D2D',
        'alimor-text-light': '#6B7280'
      },
      typography: () => ({
        alimor: {
          css: {
            '--tw-prose-body': '#3D3D3D',
            '--tw-prose-headings': '#2D2D2D',
            '--tw-prose-links': '#7C5CDB',
            '--tw-prose-bold': '#2D2D2D',
            '--tw-prose-counters': '#7C5CDB',
            '--tw-prose-bullets': '#9B7FE8',
            '--tw-prose-hr': '#E9E5F5',
            '--tw-prose-quotes': '#2D2D2D',
            '--tw-prose-quote-borders': '#7C5CDB',
            '--tw-prose-captions': '#6B7280',
            '--tw-prose-th-borders': '#D9D2EF',
            '--tw-prose-td-borders': '#E9E5F5',
            fontSize: '1.125rem',
            lineHeight: '1.75',
            maxWidth: '68ch',
            'h2': {
              fontWeight: '700',
              letterSpacing: '-0.02em',
              marginTop: '2.5em',
            },
            'h3': {
              fontWeight: '600',
              letterSpacing: '-0.01em',
            },
            'a': {
              textDecoration: 'none',
              fontWeight: '500',
              borderBottom: '1px solid rgba(124, 92, 219, 0.3)',
              transition: 'border-color 0.2s',
              '&:hover': { borderBottomColor: '#7C5CDB' },
            },
            'blockquote': {
              fontStyle: 'normal',
              backgroundColor: 'rgba(124, 92, 219, 0.06)',
              borderRadius: '0 1rem 1rem 0',
              padding: '1rem 1.5rem',
              'p:first-of-type::before': { content: 'none' },
              'p:last-of-type::after': { content: 'none' },
            },
            'table': { fontSize: '0.95em' },
            'thead th': { color: '#2D2D2D' },
            'img': { borderRadius: '1.5rem' },
          },
        },
      }),
    },
  },
  plugins: [typography],
}