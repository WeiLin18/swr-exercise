import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

function App1() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <p>user id: {data.userId}</p>
      <p>id: {data.id}</p>
      <p>title: {data.title}</p>
      <p>completed: {data.completed ? "True" : "False"}</p>
    </div>
  );
}

const App2 = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/1",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <p>user id: {data.userId}</p>
      <p>id: {data.id}</p>
      <p>title: {data.title}</p>
      <p>body: {data.body}</p>
    </div>
  );
};

const App3 = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/photos/1",
    fetcher
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      <p>albumId: {data.albumId}</p>
      <p>id: {data.id}</p>
      <p>title: {data.title}</p>
      <p>url: {data.url}</p>
      <p>thumbnailUrl: {data.thumbnailUrl}</p>
    </div>
  );
};

const App = () => {
  const [view, setView] = useState(0);
  return (
    <div className="App">
      <h2>Fast Navigation</h2>
      <ul>
        <li>
          <button
            onClick={() => {
              setView(1);
            }}
          >
            app1
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setView(2);
            }}
          >
            app2
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setView(3);
            }}
          >
            app3
          </button>
        </li>
      </ul>
      {view === 1 && <App1 />}
      {view === 2 && <App2 />}
      {view === 3 && <App3 />}
    </div>
  );
};
export default App;
