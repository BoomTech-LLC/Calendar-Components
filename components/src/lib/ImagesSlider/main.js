import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import BlurryLoadableImg from "../BlurryLoadableImg";
import { register } from "swiper/element/bundle";
import { getRandomNumber } from "../helpers/commons";
import styles from "./main.module.css";

register();

const ImagesSlider = ({
  image,
  navigation = true,
  style,
  color,
  title,
  showColorAsBackground,
  imgWrapperCustomClassNames = [],
  imgCustomClassNames,
  eventKind,
  opacity,
  fixedHeight = false,
}) => {
  return (
    <span
      ref={(ref) => {
        if (!ref) return;
        const [swiper] = ref.children;
        if (swiper) return;
        const swiperParams = {
          on: {
            init(swiper) {
              if (!swiper.navigation?.nextEl || !swiper.navigation?.prevEl)
                return;
              const stop = (e) => e.stopPropagation();
              swiper.navigation.nextEl.addEventListener("click", stop);
              swiper.navigation.prevEl.addEventListener("click", stop);
            },
          },
          lazy: true,
          autoplay: {
            delay: getRandomNumber(2000, 4000),
          },
          speed: "600",
          loop: "true",
          navigation,
          style,
          ...(!fixedHeight ? { autoHeight: true } : {}),
          injectStyles: [
            `
              :host  {
                --swiper-navigation-color: #fff;
                --swiper-navigation-size: 24px;
                ${fixedHeight ? "height: 100%;" : ""}
              }
              `,
          ],
        };
        Object.assign(swiper, swiperParams);

        swiper.initialize();
      }}
    >
      <swiper-container init="false">
        {image.map((url) => {
          return (
            <swiper-slide>
              <BlurryLoadableImg
                url={url}
                color={color}
                title={title}
                showColorAsBackground={showColorAsBackground}
                wrapperCustomClassNames={[
                  ...imgWrapperCustomClassNames,
                  styles.imageWrapper,
                ]}
                imgCustomClassNames={imgCustomClassNames}
                eventKind={eventKind}
                opacity={opacity}
              />
            </swiper-slide>
          );
        })}
      </swiper-container>
    </span>
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
  fixedHeight: PropTypes.bool,
};

export default memo(ImagesSlider);
