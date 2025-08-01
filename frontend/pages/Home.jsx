import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Home.css";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchparams] = useSearchParams();

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/product?${searchparams.toString()}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.userproducts))
        setTimeout(() => {
          setLoading(false);
        }, 1); 
  }, [searchparams]);

  return (
    <div className="container">
      <div className="mt-0 row">
        {loading ? (
          <div className="" style={{ width: "100%", height: "347px" }}>
            <div className="d-flex justify-content-center gap-1" style={{ marginTop: "10%" }}>
              <i className="bi bi-arrow-clockwise spin"></i>
              <span className="">Loading ...</span>
            </div>
          </div>
        ) : products.length > 0 ? (
          <>
          <div id="demo" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
             <div className="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
          </div>
            <div className="carousel-inner" >
              <div className="carousel-item active">
                <img src="/slide/carousel1.jpg" alt="img" style={{width:"100%",height:"250px",objectFit:"cover"}} />
              </div>
              <div className="carousel-item ">
                <img src="/slide/carousel2.jpg" alt="img" style={{width:"100%",height:"250px",objectFit:"cover"}} />
              </div>
              <div className="carousel-item ">
                <img src="/slide/carousel3.jpg" alt="img" style={{width:"100%",height:"250px",objectFit:"cover"}} />
              </div>
              <div className="carousel-item ">
                <img src="/slide/carousel4.jpg" alt="img" style={{width:"100%",height:"250px",objectFit:"cover"}} />
              </div>

            </div>
            <div>
              <button className="carousel-control-prev" data-bs-target="#demo" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span></button>
              <button className="carousel-control-next" data-bs-target="#demo" data-bs-slide="next"><span className="carousel-control-next-icon"></span></button>
            </div>
          </div>
            <h5 className="text-center mt-3">Latest Products</h5>
            {products.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mt-3" key={product._id}>
                <ProductCard product={product} />
              </div>

            ))}
          </>
        ) : (
          <>
            <div className="" style={{ width: "100%", height: "347px" }}>
                 <p className="text-center text-dark mt-5">Sorry! No products found.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
