import { Suspense } from "react"
import TodosList from "./TodosList"
import FancyLoading from "@/components/FancyLoading"

const page = () => {
  return (
    <div className="container m-5">
      <h1>All To Dos</h1>
      <Suspense fallback={<FancyLoading />}>
        <TodosList /> {/** this component is pulling data from api and takes time */}
      </Suspense>
    </div>
  )
}

export default page