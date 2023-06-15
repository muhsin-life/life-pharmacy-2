import getHomePageData from '@/lib/getHomePageData'
import Image from 'next/image'
import PageStructure from '@/components/page-structure';
import Products from '@/components/products';
import { useLanguage } from '@/hooks/useLanguage';
export default function Home({ homePageData, locale }: { homePageData: any, locale: any }) {
  return (
    homePageData.data.content.map((data: any, ind: number) => (
      <PageStructure data={data} lang={locale} />
    )))
}

export async function getStaticProps({ locale }: { locale: any }) {

  const homePageData = await getHomePageData(locale);

  return {
    props: {
      homePageData,
      locale
    }
  }

}