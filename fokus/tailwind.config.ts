import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dg': {
        '50': '#f8f7f8',
        '100': '#f3f0f2',
        '200': '#e8e2e6',
        '300': '#d6cbd2',
        '400': '#bbabb5',
        '500': '#a7939f',
        '600': '#8c7682',
        '700': '#75616b',
        '800': '#62525a',
        '900': '#54474d',
        '950': '#30272c',
      },
      'lima': {
        '50': '#f0ffe5',
        '100': '#ddffc6',
        '200': '#bcff94',
        '300': '#8fff56',
        '400': '#67f724',
        '500': '#3fc804',
        '600': '#32b100',
        '700': '#268704',
        '800': '#236a0a',
        '900': '#1f590e',
        '950': '#0b3201',
      },
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
