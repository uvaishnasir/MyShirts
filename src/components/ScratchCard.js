import React, { useEffect, useState } from "react";
import "../ScratchCard.css";

const ScratchCard = () => {
  const [prizeValue, setPrizeValue] = useState("$0");

  useEffect(() => {
    const canvasElement = document.getElementById("scratch");
    const canvasContext = canvasElement.getContext("2d");
    let isDragging = false;

    const initializeCanvas = () => {
      const gradient = canvasContext.createLinearGradient(0, 0, 500, 500);
      gradient.addColorStop(0, "#d63031");
      gradient.addColorStop(1, "#fdcb6e");
      canvasContext.fillStyle = gradient;
      canvasContext.fillRect(0, 0, 500, 500);

      const prizeOptions = [
        "$1",
        "$5",
        "$10",
        "$20",
        "$25",
        "$30",
        "$35",
        "$40",
        "$45",
        "$50",
      ];
      const randomPrize =
        prizeOptions[Math.floor(Math.random() * prizeOptions.length)];
      setPrizeValue(randomPrize);
    };

    const scratch = (x, y) => {
      canvasContext.globalCompositeOperation = "destination-out";
      canvasContext.beginPath();
      canvasContext.arc(x, y, 12, 0, 2 * Math.PI);
      canvasContext.fill();
    };

    const getMouseCoordinates = (event) => {
      const rect = canvasElement.getBoundingClientRect();
      const x = (event.pageX || event.touches[0].pageX) - rect.left;
      const y = (event.pageY || event.touches[0].pageY) - rect.top;
      return { x, y };
    };

    const handleMouseDown = (event) => {
      isDragging = true;
      const { x, y } = getMouseCoordinates(event);
      scratch(x, y);
    };

    const handleMouseMove = (event) => {
      if (isDragging) {
        event.preventDefault();
        const { x, y } = getMouseCoordinates(event);
        scratch(x, y);
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleMouseLeave = () => {
      isDragging = false;
    };

    const isTouchDevice = "ontouchstart" in window;

    canvasElement.addEventListener(
      isTouchDevice ? "touchstart" : "mousedown",
      handleMouseDown
    );
    canvasElement.addEventListener(
      isTouchDevice ? "touchmove" : "mousemove",
      handleMouseMove
    );
    canvasElement.addEventListener(
      isTouchDevice ? "touchend" : "mouseup",
      handleMouseUp
    );
    canvasElement.addEventListener("mouseleave", handleMouseLeave);

    initializeCanvas();

    // Cleanup event listeners on unmount
    return () => {
      canvasElement.removeEventListener(
        isTouchDevice ? "touchstart" : "mousedown",
        handleMouseDown
      );
      canvasElement.removeEventListener(
        isTouchDevice ? "touchmove" : "mousemove",
        handleMouseMove
      );
      canvasElement.removeEventListener(
        isTouchDevice ? "touchend" : "mouseup",
        handleMouseUp
      );
      canvasElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="container">
      <div className="base">
        <h4>Welcome! You can avail of this offer by logging in below.</h4>
        <h3>{prizeValue} Off</h3>
        <button className="scratch_card_login_btn">Login</button>
      </div>
      <canvas
        id="scratch"
        style={{
          cursor:
            'url("https://media.geeksforgeeks.org/wp-content/uploads/20231030101751/bx-eraser-icon.png"), auto',
        }}
      ></canvas>
    </div>
  );
};

export default ScratchCard;
