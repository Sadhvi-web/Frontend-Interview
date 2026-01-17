import { useBlogs } from "../hooks/useBlogs"

interface Props {
  onSelect: (id: number) => void
  selectedId: number | null
}


const BlogList = ({ onSelect, selectedId }: Props) => {
  const { data, isLoading, error } = useBlogs()

  if (isLoading) return <p>Loading blogs...</p>
  if (error) return <p>Failed to load blogs</p>

  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {data?.map((blog) => (
            <li
                key={blog.id}
                onClick={() => onSelect(blog.id)}
                style={{
                cursor: "pointer",
                padding: "6px",
                backgroundColor:
                    blog.id === selectedId ? "#e5e7eb" : "transparent",
                fontWeight:
                    blog.id === selectedId ? "bold" : "normal",
                }}
            >
                {blog.title}
            </li>
            ))}

      </ul>
    </div>
  )
}

export default BlogList
