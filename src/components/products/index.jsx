import { IoSearchOutline } from "react-icons/io5";
import { useGetProductsQuery, useSearchProductsQuery } from "../../context/api/productsApi";
import SpreadProduct from "../spread-product";
import "./Products.scss";
import { useState, useEffect } from "react";

const Products = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useGetProductsQuery();
  const { data: searchData, isError, isSuccess, refetch } = useSearchProductsQuery(search, { skip: !search });

  useEffect(() => {
    if (search) {
      refetch();
    }
  }, [search, refetch]);

  console.log(search);
  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product__top-box">
            <div className="product__search">
              <button>
                <IoSearchOutline />
              </button>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search for a country…"
              />
            </div>
          </div>
          <SpreadProduct data={search ? searchData : data} isAdmin={false} loading={isLoading || (search && !isSuccess && !isError)} />
        </div>
      </section>
    </>
  );
};

export default Products;
