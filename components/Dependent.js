import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Dependent() {
  const { data: user } = useSWR(
    "https://jsonplaceholder.typicode.com/users/4",
    fetcher
  );
  const { data: posts } = useSWR(
    () => "https://jsonplaceholder.typicode.com/posts?userId=" + user.id,
    fetcher
  );

  if (!posts) return <div>loading post...</div>;
  return (
    <div>
      <h2>Dependent Fetching</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>user id: {post.userId}</p>
          <p>id: {post.id}</p>
          <p>title: {post.title}</p>
          <p>body: {post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Dependent;
