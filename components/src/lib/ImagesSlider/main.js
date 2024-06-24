import { memo } from "react";
import PropTypes from "prop-types";
import BlurryLoadableImg from "../BlurryLoadableImg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getRandomNumber } from "../helpers/commons";

const ImagesSlider = ({
  image,
  navigation = true,
  style,
  color,
  title,
  showColorAsBackground,
  imgWrapperCustomClassNames,
  imgCustomClassNames,
  eventKind,
  opacity,
}) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: getRandomNumber(2000, 4000),
      }}
      loop
      lazy
      navigation={navigation}
      style={style}
      onSwiper={(swiper) => {
        if (!swiper.navigation?.nextEl || !swiper.navigation?.prevEl) return;
        const stop = (e) => e.stopPropagation();
        swiper.navigation.nextEl.addEventListener("click", stop);
        swiper.navigation.prevEl.addEventListener("click", stop);
      }}
    >
      {image.map((url) => {
        return (
          <SwiperSlide>
            <BlurryLoadableImg
              url={url}
              color={color}
              title={title}
              showColorAsBackground={showColorAsBackground}
              imgWrapperCustomClassNames={imgWrapperCustomClassNames}
              imgCustomClassNames={imgCustomClassNames}
              eventKind={eventKind}
              opacity={opacity}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

ImagesSlider.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string),
  navigation: PropTypes.bool,
  color: PropTypes.string,
  title: PropTypes.string,
  showColorAsBackground: PropTypes.bool,
  imgWrapperCustomClassNames: PropTypes.arrayOf(PropTypes.string),
  imgCustomClassNames: PropTypes.arrayOf(PropTypes.string),
  eventKind: PropTypes.number,
  opacity: PropTypes.number,
};

export default memo(ImagesSlider);
