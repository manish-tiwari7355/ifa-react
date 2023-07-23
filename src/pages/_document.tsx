/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-script-in-document */
/* eslint-disable prefer-rest-params */
/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/no-unescaped-entities */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';
let dataLayer: any[];

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link rel='icon' href='/images/favicon.ico' />
          {/* <Script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-3W60FB5MC1'
          ></Script>

          <Script id='google-analytics-script' strategy='lazyOnload'>
            {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-3W60FB5MC1');`}
          </Script> */}

          {/* <!-- Google tag (gtag.js) --> */}
          <Script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-1E3NLWHYVJ'
          ></Script>
          <Script>
            {`
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments);}
            gtag('js', new Date()); gtag('config', 'G-1E3NLWHYVJ'); `}
          </Script>
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
