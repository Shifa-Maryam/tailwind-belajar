module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        afacad: ['Afacad', 'Quicksand'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
