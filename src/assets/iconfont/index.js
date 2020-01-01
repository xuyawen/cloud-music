import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1577875785982'); /* IE9 */
  src: url('iconfont.eot?t=1577875785982#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMwAAsAAAAAB8wAAALjAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDDIJVATYCJAMQCwoABCAFhG0HQxvCBhHVk9VkPw7cmLS9Vqfhya6Rnaz2HjzRGr83M3v394tLQlW7mFf3RKJBE/UIFwBbm6K6hKyKUCyJ7fLTP9/kJ4TLp+vgmOnSJpBnGw1kipFF2ZQBOB5QeUR8Nck/yL/zq4TXZZA76nEeAsRRRAPSpVufIXgczjQBZM7M6RPxJTWuI1nwCCGx1olsI8Drer0FbI1/Xj7TSDwogeHMHTCt6xQ6vONdF1sWLWNMiICznBGQNoEBDYADmUGaJ2GprwEjzvgbRzPA41F4x7vsd12iCNyriL1rAZ38z5MQJzEBgCbwG7zDp0DhXTabknQB9wOc5QDwQDywENiPg8uAKsTQhJUuQcanbjy+7FhGyp4Ty0+OzOnjOFTZ3UMn37s37P794XfvDr1zJ2EWGRAMwRtNnjpg2uJhew5ljNh9OHv43oNZlf+upXQp6fLj2q+h++HJo6+ldC3umiI5YGDyCLLnP4bAkORLffqxbdwJe/nSjtuJUHhCZOZMMBB+fMhKPXtWA8EqkQkWz4BgJdxbZ7Vq9c37Kk4t+b7jyuwk8hLH3Py+9qq/ygAAov/OaQR6XXP/rt+h4OjQzPHJbf76eAfAo0YHesYp0SnnbBl855zBnD8nyxlEkXMyz/E6B3SwY+5wP44efPseBeJcO0Swp/FsCXnmewcET2YOSgyFYHgqkA7bAAHxNIEQT3uIo57um+NJZxGGuFigjtUMhBTOgpLEDTBSuI102KcQkMVXCEkRgziGSfqe8VQJHnYHQaP4gvEPwfJMnk53SfIV3TsbKfJi/BOlBCd0dVsNXnBGWWJB+bhelYCEJzizyzBnhkU4otXaqy5D0xD1QbXlqdpxEDSKLxj/ECzPFDbXXe37r+je2UhHQYP2iVJC+9DV7QDkRTwPKniUp5SP61UJSHiCMzNidn0MCz0qotXaT/AsQ8M1oqHienvp9A23AHE4d3OiYuIkYD3FsDezWxU0Yv1qZCqpqgoA') format('woff2'),
  url('iconfont.woff?t=1577875785982') format('woff'),
  url('iconfont.ttf?t=1577875785982') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1577875785982#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-daohang:before {
  content: "\e644";
}

.icon-search:before {
  content: "\e600";
}

.icon-bofang:before {
  content: "\e617";
}
`