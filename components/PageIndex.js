import { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Page = ({ id }) => {
  const { data: post, isValidating } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );
  return (
    <div key={id}>
      {isValidating && <div>loading</div>}
      {post && (
        <>
          <p>Id: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </>
      )}
    </div>
  );
};

function MultipleArg() {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div>
      <Page id={pageIndex} />
      <div style={{ display: "none" }}>
        <Page id={pageIndex + 1} />
      </div>
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
}

export default MultipleArg;
