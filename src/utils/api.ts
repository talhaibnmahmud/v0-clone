export const fetchHtmlContent = async () => {
  const response = await fetch("http://localhost:3000/api/html-content", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch HTML content");
  }
  const data = await response.json();
  return data;
};
