import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                 <footer className="blog-footer m-3" >
                    <div className="p-3">
                    <h4 className="font-italic">CONTACT INFO</h4>
                    <ol className="list-unstyled mb-0">
                        <li><a href="/">EMAIL: xinhkg00@gmail.com</a></li>
                        <li><a href="/">PHONE:+84 832802655</a></li>
                        <li><a href="/">ADDRESS: 133 NGUYEN HUU THO STRESS, DIRECT 7</a></li>
                    </ol>
                    </div>   
                </footer>
            </div>
        );
    }
}

export default Footer;