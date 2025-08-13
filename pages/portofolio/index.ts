import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: 'https://randhikar.notion.site/1e014143f265804baa02f581a7fe2fba?v=1e014143f265812eb781000caff75f61', // ganti ke URL Notion kamu
      permanent: false,
    },
  };
};

export default function NotionRedirect() {
  return null;
}
