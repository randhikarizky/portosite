import Head from 'next/head';

type Props = {
  title: string;
};

export default function HeadComponent(props: Props) {
  return (
    <Head>
      <title>{props.title} - Randhika Rizkyaldi</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Arima:wght@100;200;300;400;600;700&family=Bricolage+Grotesque:opsz,wght@12..96,200;12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
        rel="stylesheet"
      />
      <script
        src="https://kit.fontawesome.com/73d927d61d.js"
        crossOrigin="anonymous"
      />
    </Head>
  );
}
