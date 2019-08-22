import React from "react";
import HeadMenuItem from "./HeadMenuItem";

export default class HeadMenu extends React.PureComponent {
  render() {
    const { categories, onClick, isMobile } = this.props;
    const items =
      categories &&
      categories
        .filter(category => category.parent_id === null)
        .map((category, index) => (
          <HeadMenuItem
            key={index}
            category={category}
            onClick={onClick}
            categories={categories}
            level={1}
            isMobile={isMobile}
          />
        ));

    return <ul className="nav-level-0">{items}</ul>;
  }
}
