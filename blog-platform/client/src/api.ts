const url = "http://localhost:8000/api/v1";

export const getBlogs = async () => {
  try {
    const response = await fetch(url + "/blog");
    if (!response.ok) {
      return { message: "error fetching data", ...response };
    }
    const data = await response.json();
    console.log(data);
    return { data, status: response.status };
  } catch (error) {
    return { message: "error fetching data", error };
  }
};

export const getTrending = async () => {
  try {
    const response = await fetch(url + "/blog/trending");
    if (!response.ok) {
      return { message: "error fetching data", ...response };
    }
    const data = await response.json();
    console.log(data);
    return { data, status: response.status };
  } catch (error) {
    return { message: "error fetching data", error };
  }
};
export const getLatest = async () => {
  try {
    const response = await fetch(url + "/blog/latest");
    if (!response.ok) {
      return { message: "error fetching data", ...response };
    }
    const data = await response.json();
    console.log(data);
    return { data, status: response.status };
  } catch (error) {
    return { message: "error fetching data", error };
  }
};

export const updateView = async (slug: string) => {
  try {
    await fetch(url + "/blog/" + slug);
  } catch (error) {
    return { message: "error updating view", error };
  }
};
