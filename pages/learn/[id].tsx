import { NextPage } from "next"
import { useRouter } from "next/router"

const Subject: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      {router.query.id}
    </div>
  )
}

export default Subject
