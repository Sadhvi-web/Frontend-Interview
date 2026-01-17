import { useBlog } from "../hooks/useBlogs"

interface Props {
  blogId: number | null
}

const BlogDetail = ({ blogId }: Props) => {
  const { data, isLoading, error } = useBlog(blogId)

  if (!blogId) return <p>Select a blog</p>
  if (isLoading) return <p>Loading blog...</p>
  if (error) return <p>Failed to load blog</p>

  return (
    <div>
      <img
            src={data?.coverImage}
            alt={data?.title}
            style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
        />

      <h2>{data?.title}</h2>
      <p>{data?.content}</p>
    </div>
  )
}

export default BlogDetail
