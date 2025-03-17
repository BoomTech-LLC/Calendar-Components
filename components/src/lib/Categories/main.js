import React, { memo } from "react";
import styles from "./main.module.css";
import "../icons.css";
import PropTypes from "prop-types";
import { combineClassNames } from "../helpers/commons";
import CategoryItem from "../CategoryItem";

const Categories = (props) => {
  if (!props.categories) return null;

  const { categories, wrapperCustomClassNames = [] } = props;

  return (
    <div
      className={combineClassNames([
        ...wrapperCustomClassNames,
        styles.categories_wrapper,
      ])}
    >
      {categories.map((category) => {
        return <CategoryItem category={category} key={category.id} />;
      })}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  wrapperCustomClassNames: PropTypes.arrayOf(PropTypes.string),
};

export default memo(Categories);
