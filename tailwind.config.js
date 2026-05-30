export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#08040f',
        obsidian: '#050306',
        gold: '#c19864',
        ivory: '#f7f1e8',
        ember: '#dcb47c'
      },
      boxShadow: {
        glow: '0 32px 120px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(255, 220, 130, 0.12), transparent 30%), radial-gradient(circle at 80% 20%, rgba(255, 180, 85, 0.08), transparent 22%)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
