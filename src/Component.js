import PropTypes from "prop-types";
import { Component } from "react";

function MyComponent({ name, favoriteNumber, children }) {
  return (
    <div>
      안녕, 내 이름은 {name} 입니다.
      <br />
      children: {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 : {favoriteNumber}
    </div>
  );
}

MyComponent.defaultProps = {
  name: "값이 없어요",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
