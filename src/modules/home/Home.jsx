import React, {Component} from 'react';
import {HomeWrapper} from "./Home.sc";

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HomeWrapper>
                <div>
                    Hello
                </div>
            </HomeWrapper>
        );
    }
}

export default Home;
