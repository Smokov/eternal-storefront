import React from "react";
import search from "../../assets/images/search.svg";
import close from "../../assets/images/close.svg";

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      hasFocus: false
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleKeyPress = e => {
    if (e.keyCode === 13 || e.which === 13) {
      this.handleSearch();
    }
  };

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.handleClear();
    }
  };

  handleSearch = () => {
    this.props.onSearch(this.state.value);
  };

  handleClear = () => {
    this.setState({ value: "" });
    this.props.onSearch("");
  };

  handleFocus = () => {
    this.setState({ hasFocus: true });
  };

  handleBlur = () => {
    this.setState({ hasFocus: false });
  };

  render() {
    const { hasFocus } = this.state;
    const placeholderText = "Pesquisar";

    return (
      <div
        className={
          "search-box " + this.props.className + (hasFocus ? " has-focus" : "")
        }
      >
        <input
          className="search-input"
          type="text"
          placeholder={placeholderText}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          onKeyDown={this.handleKeyDown}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <img
          className="search-icon-search"
          src={search}
          alt={"pesquisar"}
          title={"pesquisar"}
          onClick={this.handleSearch}
        />
        {this.state.value && this.state.value !== "" && (
          <img
            className="search-icon-clear"
            src={close}
            alt="clear"
            onClick={this.handleClear}
          />
        )}
      </div>
    );
  }
}
