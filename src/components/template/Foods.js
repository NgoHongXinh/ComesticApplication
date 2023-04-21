import React, { Component } from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
//import Trangchitiet from './Trangchitiet';
class Foods extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowOutline: false
        }
        this.handleToogleOutline = this.handleToogleOutline.bind(this);

    }
    
    handleToogleOutline() {
        if(this.state.isShowOutline===false) {
            this.setState({
              isShowOutline: true
          });
        }
        else {
            this.setState({
              isShowOutline: false
          });
        }
          
    }
    

   
    
    render() {
        let elmOutline = null;
            if(this.state.isShowOutline) {
                elmOutline = <p className="noidung">
                                {this.props.noidung}
                            </p>;
            }
        return (


                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="thumbnail">
                        <div className="caption">
                            <img className="img" src={this.props.anh}  width="100%" />
                            <h3>{this.props.tieude}</h3>
                            <b>Price: {this.props.price}</b>   
                            <p>
                            {this.props.trichdan}
                            </p>
                            <button className="btn btn-success" onClick={this.handleToogleOutline}>Description</button>
                            {elmOutline}
                        </div>
                    </div>
                </div>
                        
        );
    }
}

export default Foods;