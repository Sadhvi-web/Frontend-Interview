import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import type { Blog } from "../types/blog"
import { getBlogs, getBlogById, createBlog } from "../api/blogs"

export const useBlogs = () =>
  useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

export const useBlog = (id: number | null) =>
  useQuery<Blog>({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id as number),
    enabled: !!id,
  })

export const useCreateBlog = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
    },
  })
}
