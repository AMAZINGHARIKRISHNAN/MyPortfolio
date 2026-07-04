export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: '#09090b',
        panel: '#0e0e11',
        edge: '#26262b',
        accent: '#a3e635',
      },
    },
  },
  plugins: [],
}
