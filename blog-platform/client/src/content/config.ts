import { defineCollection } from "astro:content";
import { getBlogs, getLatest, getTrending } from "../api";

const blogs = defineCollection({
  loader: async () => {
    try {
      const data = await getBlogs();

      if (data.status !== 200) return {};

      return data.data.data.map((blog: any) => {
        return {
          id: blog._id,
          ...blog,
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
});

const trending = defineCollection({
  loader: async () => {
    try {
      const data = await getTrending();

      if (data.status !== 200) return {};
      return data.data.data.map((blog: any) => {
        return {
          id: blog._id,
          ...blog,
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
});

const latest = defineCollection({
  loader: async () => {
    try {
      const data = await getLatest();

      if (data.status !== 200) {
        return {};
      }
      return data.data.data.map((blog: any) => {
        return {
          id: blog._id,
          ...blog,
        };
      });
    } catch (error) {
      console.log(error);
      return {};
    }
  },
});

export const collections = {
  blogs,
  trending,
  latest,
};
