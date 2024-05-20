import { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import BlurryLoadableImg from "../BlurryLoadableImg";

const ImagesSlider = ({ image }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollParent = useRef(null);

  useEffect(() => {
    if (scrollParent.current) {
      scrollParent.current.scrollTo({
        left: activeIndex * scrollParent.current.offsetWidth + activeIndex * 12,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: 6,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          onClick={() => setActiveIndex(Math.max(activeIndex - 1, 0))}
          style={{
            cursor: "pointer",
            position: "absolute",
            background: "red",
            left: 10,
            height: 40,
            width: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <span
            className="chevron-down chevron-left"
            style={{ display: "flex" }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${image.length}, 100%)`,
            width: "100%",
            overflow: "hidden",
            gap: 12,
          }}
          ref={scrollParent}
        >
          {image.map((url) => {
            return <BlurryLoadableImg url={url} color="" title="asdasd" />;
          })}
        </div>
        <div
          onClick={() =>
            setActiveIndex(Math.min(activeIndex + 1, image.length - 1))
          }
          style={{
            cursor: "pointer",
            position: "absolute",
            background: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            right: 10,
            height: 40,
            width: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <span
            className="chevron-down chevron-right"
            style={{ display: "flex" }}
          />
        </div>
      </div>
    </div>
  );
};

ImagesSlider.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string),
};

export default memo(ImagesSlider);
