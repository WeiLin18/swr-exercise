import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

const fetcher = (url, id) => {
  return fetch(`https://fakestoreapi.com${url}/${id}`).then((res) =>
    res.json()
  );
};

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: product } = useSWR(id ? ["/products", id] : null, fetcher);

  if (!product) return <div>loading</div>;

  return (
    <>
      <div>
        <Link href="/products">回產品列表</Link>
      </div>
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
    </>
  );
};

export default Product;
