import { useState } from "react"
import BlogList from "./components/BlogList"
import BlogDetail from "./components/BlogDetails"
import CreateBlogForm from "./components/CreateBlogForm"

function App() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null)

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "30%",
          padding: "16px",
          borderRight: "1px solid #ccc",
        }}
      >
        <CreateBlogForm />
        <BlogList
          onSelect={setSelectedBlogId}
          selectedId={selectedBlogId}
        />

      </div>

      <div style={{ width: "70%", padding: "16px" }}>
        <BlogDetail blogId={selectedBlogId} />
      </div>
    </div>
  )
}

export default App
