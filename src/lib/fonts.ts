import localFont from 'next/font/local'

export const dreamerFont = localFont({
  src: [
    {
      path: '../../public/fonts/DreamerTM.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-dreamer',
  display: 'swap',
})