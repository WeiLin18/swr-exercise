import { useState } from "react";
import useSWR from "swr";

const fetcher = (url, postId) => fetch(url + postId).then((r) => r.json());

const Product = ({ id }) => {
  const { data: post, isValidating } = useSWR(
    id ? ["https://jsonplaceholder.typicode.com/posts/", id] : null,
    fetcher
  );
  return (
    <>
      {isValidating && <div>loading</div>}
      {post && (
        <>
          <p>User id: {post.userId}</p>
          <p>Id: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </>
      )}
    </>
  );
};

function MultipleArg() {
  const [id, setId] = useState(undefined);

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <Product id={id} />
    </div>
  );
}

export default MultipleArg;
