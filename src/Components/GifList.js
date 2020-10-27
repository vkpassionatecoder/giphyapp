import React from "react";
import "../Styles/list.css";
import Pagination from "./Pagination.js";
class GifList extends React.Component {
  state = {
    giphys: [],
    currentPage: 1,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      giphys: nextProps.giphys,
    };
  }

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  openModal = (e) => {
    let modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modalImg.src = e.target.src;
    modal.style.display = "block";
  };

  closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  };
  render() {
    const indexOfLastPost = this.state.currentPage * 10;
    const indexOfFirstPost = indexOfLastPost - 10;
    const currentGiphys =
      this.state.giphys.length > 0
        ? this.state.giphys.slice(indexOfFirstPost, indexOfLastPost)
        : [];
    return (
      <>
        <div id="myModal" class="modal">
          <span onClick={this.closeModal} class="close">
            &times;
          </span>
          <img class="modal-content" id="img01" />
          <div id="caption"></div>
        </div>
        <div className="img-container">
          {currentGiphys.length > 0
            ? currentGiphys.map((img) => {
                return (
                  <div className="cursor">
                    <img
                      id="thumb"
                      className="cursor"
                      src={img.images.downsized.url}
                      height="200px"
                      width="200px"
                      onClick={this.openModal}
                    />
                  </div>
                );
              })
            : null}
        </div>
        <Pagination
          postsPerPage={10}
          totalPosts={this.state.giphys.length}
          paginate={this.paginate}
          nextPage={this.nextPage}
        />
      </>
    );
  }
}

export default GifList;
