import useSWR from "swr";

const url = "/api/hello";
const fetcher = async (_url) => {
  const res = await fetch(_url);
  if (res.status === 403) {
    throw new Error("A 403 error occurred");
  }
  return res.json();
};

const Conditional = () => {
  const { data, error, isValidating } = useSWR(url, fetcher, {
    dedupingInterval: 0,
  });
  console.log(error);

  return (
    <>
      {error && <div>{error.message}</div>}
      {isValidating && <div>loading</div>}
      {data && <div>{data.name}</div>}
    </>
  );
};

export default Conditional;
