import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="text-blue-500 underline">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
