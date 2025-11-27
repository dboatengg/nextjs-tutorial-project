export default async function PostDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return <div>Could not load post.</div>;
  }
  const post = await res.json();
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>
        <strong>Post ID:</strong> {post.id}
      </p>
    </div>
  );
}
