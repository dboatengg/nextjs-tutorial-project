// import Link from "next/link";

// type Post = {
//   id: number;
//   title: string;
//   body: string;
// };

// export default async function PostsPage() {
//   // This is a fake API, but perfect for learning
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts:Post[] = await res.json();

//   return (
//     <main>
//       <h1>Posts</h1>
//       <ul>
//         {posts.slice(0,5).map(post => (
//         <li key={post.id} style={{ marginBottom: "1rem" }}>
//             <Link href={`/posts/${post.id}`}>{post.title}</Link>
//         </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Posts</h1>

      <ul className="space-y-4">
        {posts.slice(0, 5).map((post) => (
          <li
            key={post.id}
            className="p-4 bg-white rounded-lg shadow-sm border"
          >
            <Link href={`/posts/${post.id}`} className="font-medium text-lg">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
