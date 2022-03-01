module.exports = {
  content: [
    './index.html',
    './src/script.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        'spartan' : ["Spartan"]
      },
      colors:{
        theme1:{
          "very-dark-desaturated-blue": 'hsl(222, 26%, 31%);',
          "very-dark-desaturated-blue-toggle": "hsl(223, 31%, 20%)",
          "very-dark-desaturated-blue-screen": "hsl(224, 36%, 15%)",
          "desaturated-dark-blue": "hsl(225, 21%, 49%)",
          "desaturated-dark-blue-shadow": "hsl(224, 28%, 35%)",
          "red": "hsl(6, 63%, 50%)",
          "dark-red": "hsl(6, 70%, 34%)",
          "light-grayish-orange": "hsl(30, 25%, 89%)",
          "grayish-orange": "hsl(28, 16%, 65%)",
          "very-dark-grayish-blue": "hsl(221, 14%, 31%)",
        },
        theme2:{
          "light-gray": "hsl(0, 0%, 90%)",
          "grayish-red": "hsl(0, 5%, 81%)",
          "very-light-gray": "hsl(0, 0%, 93%)",
          "dark-moderate-cyan": "hsl(185, 42%, 37%)",
          "very-dark-cyan": "hsl(185, 58%, 25%)",
          "orange": "hsl(25, 98%, 40%)",
          "dark-orange": "hsl(25, 99%, 27%)",
          "light-grayish-yellow": "hsl(45, 7%, 89%)",
          "dark-grayish-orange": "hsl(35, 11%, 61%)",
          "very-dark-grayish-yellow": "hsl(60, 10%, 19%)",
        },
        theme3:{
          "very-dark-violet": 'hsl(268, 75%, 9%)',
          "very-dark-violet-toggle": "hsl(268, 71%, 12%)",
          "dark-violet": 'hsl(281, 89%, 26%)',
          "vivid-magenta": "hsl(285, 91%, 52%)",
          "pure-cyan": "hsl(176, 100%, 44%)",
          "soft-cyan": "hsl(177, 92%, 70%)",
          'very-dark-violet': "hsl(268, 47%, 21%)",
          "dark-magenta": "hsl(290, 70%, 36%)",
          "light-yellow": "hsl(52, 100%, 62%)",
          "very-dark-blue": "hsl(198, 20%, 13%)",
        }
      }
      
    },
  },
  plugins: [],
}
