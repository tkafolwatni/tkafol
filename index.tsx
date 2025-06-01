import Head from 'next/head'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Home() {
  const t = useTranslations('Home')

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-center mb-4">{t('title')}</h1>
        <p className="text-center max-w-xl text-lg">{t('vision')}</p>
        <div className="mt-6">
          <Link href="https://facebook.com" className="text-blue-600 underline mx-2">Facebook</Link>
          <Link href="https://x.com" className="text-blue-600 underline mx-2">X</Link>
          <Link href="https://wa.me/123456789" className="text-green-600 underline mx-2">WhatsApp</Link>
        </div>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">{t('join')}</button>
      </main>
    </>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  }
}