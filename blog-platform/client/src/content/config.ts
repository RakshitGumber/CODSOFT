import { defineCollection } from "astro:content";

const blogs = defineCollection({
  loader: async () => {
    try {
      const response = await fetch("http://localhost:8000/api/blog");
      const data = await response.json();

      return data.data.map((blog: any) => {
        return {
          id: blog._id,
          ...blog,
        };
      });
    } catch (error) {
      return [];
    }
  },
});

export const collections = {
  blogs,
};
