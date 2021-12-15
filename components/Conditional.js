import { useState } from "react";
import useSWR from "swr";

const url = "/api/hello";
const fetcher = async (_url) => {
  const res = await fetch(_url);
  return await res.json();
};

const Conditional = () => {
  const [isFetch, setIsFetch] = useState(false);

  const { data, error, isValidating } = useSWR(isFetch ? url : null, fetcher);

  return (
    <>
      {error && <div>error</div>}
      {isValidating && <div>loading</div>}
      {data && <div>{data.name}</div>}
      <button
        onClick={() => {
          setIsFetch(true);
        }}
      >
        fetch
      </button>
    </>
  );
};

export default Conditional;
