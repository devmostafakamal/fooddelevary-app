import React, { useContext, useRef, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../../public/assets/Food Del Frontend Assets/assets/assets";
import { pre } from "framer-motion/client";
import { FaHeart, FaThumbsUp, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";
import { StoreContext } from "../../Context/StoreContext";
export default function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const [reactions, setReactions] = useState({ love: 0, like: 0, smile: 0 });
  const bubbleref = useRef();
  const handleLove = () => {
    if (reactions.love === 0) {
      const temp = { ...reactions };
      temp.love++;
      setReactions(temp);
      bubbleref.current.classList.add("active");
    }
  };
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => {
              addToCart(id);
            }}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => {
                removeFromCart(id);
              }}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => {
                addToCart(id);
              }}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
        <div className="reactions">
          <motion.div whileTap={{ scale: 1.2 }}>
            <div className="love">
              <span>{reactions.love}</span>{" "}
              <FaHeart
                style={{ color: "crimson" }}
                onClick={() => handleLove()}
              />
            </div>
          </motion.div>
          <div className="like">
            <span>{reactions.like}</span>
            <FaThumbsUp
              onClick={() =>
                setReactions((pre) => ({ ...pre, like: pre.like++ }))
              }
            />
          </div>
          <div className="smile">
            <span>{reactions.smile}</span>
            <FaSmile
              onClick={() =>
                setReactions((pre) => ({ ...pre, smile: pre.smile++ }))
              }
            />
          </div>
        </div>
        <div className="bubble" ref={bubbleref}>
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
          <FaHeart
            style={{
              color: "crimson",
              animationDelay: `${Math.random()}s`,
              fontSize: `${Math.random() * 60}px`,
            }}
          />
        </div>
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
      </div>
      <p className="food-item-price">${price}</p>
    </div>
  );
}
