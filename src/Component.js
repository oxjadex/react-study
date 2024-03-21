import propTypes from "prop-types";
import { Component } from "react";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };

  static propTypes = {
    name: propTypes.string,
    favoriteNumber: propTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕, 내 이름은 {name}
        <br />
        children: {children}
        입니다.
        <br />
        제가 좋아 하는 숫자는 : {favoriteNumber}
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "값이 없어요",
};

MyComponent.propTypes = {
  name: propTypes.string,
  favoriteNumber: propTypes.number.isRequired,
};

export default MyComponent;
