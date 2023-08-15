import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Electronics() {
  const navigate = useNavigate();
  const [Reload, setReload] = useState(false);
  const [Items, setItems] = useState(null);
  function logout() {
    localStorage.removeItem("token");
    setReload(!Reload);
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  useEffect(() => {
    axios
      .get("https://localhost:5000/item/route/items/electronics")
      .then((response) => {
        setItems(response.data);
      });
  });

  const cardItem = (item) => {
    return (
      <div class="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.img} class="card-img-top" alt={item.title} />
        <div class="card-body text-center">
          <h5 class="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Electronics Product</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">{Items.map(cardItem)}</div>
        </div>
      </div>
      
    </div>
  );
}
