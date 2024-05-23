/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'solidaBlue': '#46A2E5',
				'solidaDarkBlue': '#3E87D9',
				'solidaLightBlue': '#ECF3FB',
				'solidaFooterDark':"#18202A",
		
			},
			screens: {
				'4xl': {'min':'2400px'},
				'utxl': {'max':'1423px'},
				'utlg': {'max':'1023px'},
				'utmd': {'max':'767px'},
				'utsm': {'max':'639px'},
				'utxs': {'max':'479px'},
				'xs': {'min':'480px'},
			  }
		},
	},
	plugins: [],
}
