import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
// import "./Home.css";
import { Link } from "react-router-dom";

export default function Leggins({setItem}){
      const [loading, setLoading] = useState(true);
      const [products, setProducts] = useState([]);
    
      const [page, setPage] = useState(1);
      const [hasMore, setHasMore] = useState(true);
      const[productType,setProductType]=useState("leggins")
    
      useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
        setLoading(true);
    
        fetch(
          `${import.meta.env.VITE_REACT_APP_PRODUCT_URL}/leggins?page=${page}&limit=12`,{ signal }
        )
          .then((res) => res.json())
          .then((res) => {
            if (page === 1) {
              setProducts(res.legginsproducts || []);
            } else {
              setProducts((prev) => [...prev, ...(res.legginsproducts || [])]);
            }
    
            setHasMore(page<res.pages);
            setLoading(false);
          })
          .catch((err) => {
            if (err.name === "AbortError") return;
            console.error("Product fetch error:", err);
            setLoading(false);
          });
    
        return () => controller.abort();
      }, [ page]);
    
    return(
        <>  
             <div id="demo" className="carousel slide container-fluid"  data-bs-ride="carousel" data-bs-interval="10000" >
                          <div className="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1" ></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2" ></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                          </div>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src="/slide/carousel1.jpg" alt="img" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                            </div>
                            <div className="carousel-item">
                              <img src="/slide/carousel2.jpg" alt="img"style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                            </div>
                            <div className="carousel-item">
                              <img src="/slide/carousel3.jpg"alt="img" style={{ width: "100%", height: "250px", objectFit: "cover" }}/>
                            </div>
                            <div className="carousel-item">
                              <img src="/slide/carousel4.jpg" alt="img" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                            </div>
                          </div>
                          <div>
                            <button className="carousel-control-prev" data-bs-target="#demo" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next"data-bs-target="#demo"data-bs-slide="next">
                              <span className="carousel-control-next-icon"></span>
                            </button>
                          </div>
                        </div>
            
                        <div className="container" >
                  <div className=" mt-0 row">
                    {loading && page === 1 ? (
                     
                      <div style={{ width: "100%", height: "347px" }}>
                        <div className="d-flex justify-content-center gap-1" style={{ marginTop: "10%" }}>
                          <i className="bi bi-arrow-clockwise spin"></i> <span>Loading ...</span>
                        </div>
                      </div>
                    ) : products.length > 0 ? (
                      <>
                      
                        <h5 className="text-center mt-3 fw-bold" style={{ fontFamily: "'Nunito Rounded', sans-serif"}}>Latest Leggins Collections</h5>
                        
                        <div className="container row  p-0 mx-auto  ">
                          {products.map((product) => (
                          <div className="  p-1 gap-1 col-lg-3 col-md-4  col-6 mt-3 ps-lg-3 pe-lg-3"key={product._id}>
                           <ProductCard  product={product} selectType={productType} setItem={setItem}/>
                          </div>
                        ))}
            
                        </div>
                        
                        
                        {hasMore && (
                          <div className="text-center mt-3 mb-2">
                            <button className="btn btn-primary" onClick={() => setPage((prev) => prev + 1)} disabled={loading} >
                              {loading ? "Loading..." : "Load More"}
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      
                      <div style={{ width: "100%", height: "347px" }}>
                        <p className="text-center text-dark mt-5">Sorry! No products found.</p>
                         <p className="text-center"> <Link to={'/'} className="btn  btn-outline-dark small">Back to Home</Link></p>
                      </div>
                    )}
                  </div>
                        </div>
        
        </>
    )
}