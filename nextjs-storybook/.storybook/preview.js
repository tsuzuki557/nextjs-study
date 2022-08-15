import * as NextImage from 'next/image'
import "../src/styles/globals.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// next/imageの差し替え
// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => typeof props.src === 'string' ? (
//     <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
//   ) : (
//     <OriginalNextImage {...props} unoptimized />
//   ),
// })