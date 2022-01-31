import { NextPage } from "next"
import { useRouter } from "next/router"

const Notes: NextPage = () => {
  const router = useRouter()
  return (
    <div>{router.query.get}</div>
  )
}

export default Notes
