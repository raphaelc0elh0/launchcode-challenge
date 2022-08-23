import Head from "next/head"
import { useRouter } from "next/router"

export default function Quote() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Quote #{id} | Wet Bat</title>
      </Head>
    </>
  )
}
