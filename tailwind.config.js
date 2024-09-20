/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			base: {
				light: 'hsl(var(--color-base-light) / <alpha-value>)',
				DEFAULT: 'hsl(var(--color-base) / <alpha-value>)',
				dark: 'hsl(var(--color-base-dark) / <alpha-value>)'
			},
			content: {
				light: 'hsl(var(--color-content-light) / <alpha-value>)',
				DEFAULT: 'hsl(var(--color-content) / <alpha-value>)',
				dark: 'hsl(var(--color-content-dark) / <alpha-value>)'
			},
			brand: {
				light: 'hsl(var(--color-brand-light) / <alpha-value>)',
				DEFAULT: 'hsl(var(--color-brand) / <alpha-value>)',
				dark: 'hsl(var(--color-brand-dark) / <alpha-value>)'
			},
			accent: {
				light: 'hsl(var(--color-accent-light) / <alpha-value>)',
				DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
				dark: 'hsl(var(--color-accent-dark) / <alpha-value>)'
			}
		},
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': 'hsl(var(--color-content-light))',
						'--tw-prose-headings': 'hsl(var(--color-content))',
						'--tw-prose-lead': 'hsl(var(--color-content-light))',
						'--tw-prose-links': 'hsl(var(--color-content))',
						'--tw-prose-bold': 'hsl(var(--color-content-light))',
						'--tw-prose-counters': 'hsl(var(--color-content-dark))',
						'--tw-prose-bullets': 'hsl(var(--color-content-dark))',
						'--tw-prose-hr': 'hsl(var(--color-content-dark))',
						'--tw-prose-quotes': 'hsl(var(--color-content-dark))',
						'--tw-prose-quote-borders': 'hsl(var(--color-content))',
						'--tw-prose-captions': 'hsl(var(--color-content))',
						'--tw-prose-code': 'hsl(var(--color-content-light))',
						'--tw-prose-pre-code': 'hsl(var(--color-content-dark))',
						'--tw-prose-pre-bg': 'hsl(var(--color-content))',
						'--tw-prose-th-borders': 'hsl(var(--color-content-dark))',
						'--tw-prose-td-borders': 'hsl(var(--color-content-dark))',
						'--tw-prose-invert-body': 'hsl(var(--color-base-light))',
						'--tw-prose-invert-headings': 'hsl(var(--color-base))',
						'--tw-prose-invert-lead': 'hsl(var(--color-base-light))',
						'--tw-prose-invert-links': 'hsl(var(--color-base))',
						'--tw-prose-invert-bold': 'hsl(var(--color-base-light))',
						'--tw-prose-invert-counters': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-bullets': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-hr': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-quotes': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-quote-borders': 'hsl(var(--color-base))',
						'--tw-prose-invert-captions': 'hsl(var(--color-base))',
						'--tw-prose-invert-code': 'hsl(var(--color-base-light))',
						'--tw-prose-invert-pre-code': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-pre-bg': 'hsl(var(--color-base))',
						'--tw-prose-invert-th-borders': 'hsl(var(--color-base-dark))',
						'--tw-prose-invert-td-borders': 'hsl(var(--color-base-dark))'
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
