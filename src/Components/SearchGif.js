import React from "react";
import "../Styles/search.css";
import GifList from "./GifList.js";
import loading from "../Styles/loading.gif";
class SearchGif extends React.Component {
  state = {
    giphsarr: [],
    currentPage: 1,
    showLoading: false,
  };
  getGiph = (e) => {
    if (e.key === "Enter") {
      this.setState({ giphsarr: [] }, () => {
        this.setState({ showLoading: true });
      });

      debugger;
      const APIKEY = "cKNUAOIHxN8zkML8bCAOPxOz59UOyJnm";
      let searchTxt = document.getElementById("searchtxt").value;
      const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${searchTxt}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ giphsarr: data.data, showLoading: false }, () => {
            console.log(this.state.giphsarr);
          });
        });
    }
  };
  render() {
    return (
      <>
        <div className="search_box" onKeyPress={this.getGiph}>
          <input
            type="text"
            placeholder="search gifs hit enter..."
            id="searchtxt"
          />
          <i className="fas fa-search"></i>
        </div>
        <GifList giphys={this.state.giphsarr} />
        {this.state.showLoading ? <img src={loading} /> : null}
      </>
    );
  }
}

export default SearchGif;
