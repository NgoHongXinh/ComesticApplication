import React, { Component } from "react";

class ImageList extends Component {
    render() {
        return (

                    <li className="image-gallery">
                    <img src={this.props.anh} alt="" />
                    <div class="overlay"><span>{this.props.tieude}</span></div>
                    </li>
        )
    }
}
export default ImageList;