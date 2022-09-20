import { useRef, useEffect, useState } from "react";
import "./style.scss";

const Cursor = (props) => {
  const [view, setIsView] = useState(false);

  useEffect(() => {
    props.viewProject ? handleMouseOver() : handleMouseOut();
  });

  const handleMouseOver = () => {
    setIsView(true);
  };

  const handleMouseOut = () => {
    setIsView(false);
  };

  const delay = 8;
  const dot = useRef(null);
  const dotOutline = useRef(null);
  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);
  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);
  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  });

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + "px";
    dot.current.style.left = endX.current + "px";
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + "px";
    dotOutline.current.style.left = _x.current + "px";

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div
        ref={dotOutline}
        className={
          view ? "cursor-dot-outline view-project" : "cursor-dot-outline"
        }
      ></div>
      <div
        ref={dot}
        className={view ? "cursor-dot view-project-dot" : "cursor-dot"}
      ></div>
    </>
  );
};

export default Cursor;
