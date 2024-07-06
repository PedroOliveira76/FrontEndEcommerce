/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        GreenG:'#008000',
        LightGreenG:'#90EE90',
        GrayG:'#808080',
        LightGrayG:'#D3D3D3',
        YellowG:'#FFFF00',
        PinkG:'#FF69B4',
        LightPinkG:'#FFB6C1',
        BrightYellow:'#ffcc00',
        LightYellowG:'#FFFACD',
        RedG: '#FF4500',
        OrangeG: '#FFA500',
        LightOrangeG:'#FFB347',
        BrowmnG:'#8B4513',
        LightBrowmnG:'#A0522D',
        LightBrowmnGG:'#D2B48C',
        LightTan:'#F5DEB3',
        PurpleG:'#800080',
        GoldenG:'#FFD700',
        LightGoldenG:'#FFEC8B',
        DarkBlue:'#000080',
        DarkRed:'#8B0000',
        GreenFlorest:'#228B22',
        BlueCelest:'#87CEEB',
        LightBlueG:'#ADD8E6',
        AltLightBlue:'#F0F8FF',
        DarkBlueG:'#1E90FF',
        VeryDarkGray: '#2d2d2d',
        BrightRed:'#ff3333 ',
        DeepBlue:'#333399 ',
        DarkGreen:'#003300',
        DarkGray:'#1a1a1a',
        AlmostBlack:'#0b0c10',
        LightCyan:'#66fcf1 '
      },
      height:{
        'teste':'1000px'
      },
      screens:{

        'sm-375':'375px',
        'sm-425':'425px',
        'max-sm-320':'320px', 
        'max-sm-425':'425px',
        'sm-320':'320px'   
      }
    },
  },
  plugins: [
    import ('flowbite/plugin')
  ],
}

