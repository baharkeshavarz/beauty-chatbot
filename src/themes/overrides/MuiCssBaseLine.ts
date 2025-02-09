export default function MuiCssBaseLine() {
  return {
    MuiCssBaseline: {
      styleOverrides: `
    @font-face {
      font-family: 'sayeh';
      src: url('/assets/fonts/sayeh/Mj.Sayeh.ttf') format('truetype');
      font-weight: 100 900;
      font-display: swap;
    }
    @font-face {
      font-family: 'iransans';
      src: url('/assets/fonts/iransans/IRANSansWeb.woff') format('truetype');
      font-weight: 100 900;
      font-display: swap;
    }
    @font-face {
      font-family: 'noto-Arabic';
      src: url('/assets/fonts/noto-Arabic/NotoSansArabic-VariableFont_wdth,wght.ttf') format('truetype');
      font-weight: 100 900;
      font-display: swap;
    }
    @font-face {
        font-family: 'roboto';
        src: url('/assets/fonts/roboto/Roboto-Medium.ttf') format('truetype');
        font-weight: 100 900;
        font-display: swap;
    }
    @font-face {
        font-family: 'manrope';
        src: url('/assets/fonts/manrope/Manrope-VariableFont_wght.ttf') format('truetype');
        font-weight: 100 900;
        font-display: swap;
    }
     @font-face {
        font-family: 'apple';
        src: url('/assets/fonts/apple/AppleGaramond-Light.ttf') format('truetype');
        font-weight: 100 900;
        font-display: swap;
    }
     @font-face {
        font-family: 'hindimysuru';
        src: url('/assets/fonts/hindimysuru/HindMysuru-Regular.ttf') format('truetype');
        font-weight: 100 900;
        font-display: swap;
    }
    `,
    },
  };
}
