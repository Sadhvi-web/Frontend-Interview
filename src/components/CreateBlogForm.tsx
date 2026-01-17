import { useState } from "react"
import { useCreateBlog } from "../hooks/useBlogs"

const CreateBlogForm = () => {
  const { mutate } = useCreateBlog()

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    mutate({
      title,
      content,
      description: content.slice(0, 100),
      date: new Date().toISOString(),
      coverImage: "",
      category: [],
    })

    setTitle("")
    setContent("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Blog</h3>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default CreateBlogForm
