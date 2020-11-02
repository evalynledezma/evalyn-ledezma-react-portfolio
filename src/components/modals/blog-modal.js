import React, { Component } from "react";
import ReactModal from "react-modal";

import BlogForm from "../blog/blog-form";
import Blog from "../pages/blog";

ReactModal.setAppElement(".app-wrapper");

class BlogModal extends Component {
  constructor(props) {
    super(props);

    this.customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
      },
      overlay: {
        backgroundColor: "rgba(1, 1, 1, 0.50",
      },
    };
  }

  render() {
    return (
      <ReactModal
        style={this.customStyles}
        onRequestClose={() => {
          this.props.handleModalClose();
        }}
        isOpen={this.props.modalIsOpen}
      >
        <BlogForm />
      </ReactModal>
    );
  }
}

export default BlogModal;
