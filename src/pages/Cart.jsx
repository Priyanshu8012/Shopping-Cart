import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {cart.length > 0 ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Side: Cart Items */}
          <div style={{ width: "60%" }}>
            {cart.map((item, index) => {
              return (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "20px",
                    padding: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <CartItem item={item} itemIndex={index} />
                 
                  
                  
                </div>
              );
            })}
          </div>

          {/* Right Side: Cart Summary */}
          <div
            style={{
              width: "35%",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              height: "fit-content",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "#3a3a3a",
                }}
              >
                Your Cart
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "#3a3a3a",
                  marginBottom: "15px",
                }}
              >
                Summary
              </div>
              <p style={{ fontSize: "16px", color: "#3a3a3a" }}>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "20px",
                  color: "#3a3a3a",
                }}
              >
                Total Amount: ${totalAmount.toFixed(2)}
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1 style={{ color: "#3a3a3a", fontSize: "24px" }}>Cart Empty</h1>
          <Link to={"/"}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
