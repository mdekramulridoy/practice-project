// app/blog/[id]/page.js
import Link from "next/link";

// Function to fetch the blog post based on ID
async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 }, // Cache the data for 60 seconds
  });
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export default async function BlogDetails({ params }) {
  const { id } = params; // Extract the dynamic route parameter (id)

  const post = await getPost(id);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-6">{post.body}</p>
      <Link href="/" className="text-blue-500 underline">
        Back to Home
      </Link>
    </main>
  );
}
