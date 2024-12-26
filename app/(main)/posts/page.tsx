import PostTable from "@/components/posts/PostTable";
import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";


const postPage = () => {
  return (
    <>
    <BackButton text="Go back" link="/" /> 
    <PostTable />
    <PostPagination />
    </>
  )
}

export default postPage