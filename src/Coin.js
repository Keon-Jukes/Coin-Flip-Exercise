
import React, {Component} from 'react';

class Coin extends Component {
    static defaultProps = {
        heads: 'https://tinyurl.com/react-coin-heads-jpg',
        taisl: 'https://tinyurl.com/react-coin-tails-jpg'
    }

    render(){
        return(<div>
            {/* <img src={"https://tinyurl.com/react-coin-heads-jpg"} alt={"heads"} />
            <img src={"https://tinyurl.com/react-coin-tails-jpg"} alt={"tails"} /> */}
            {this.props.currSide === 'heads' ? <img src={"https://tinyurl.com/react-coin-heads-jpg"} alt={"heads"} />
             :  <img src={"https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_.jpg"} alt={"tails"} /> }
        </div>)
    }
}

export default Coin;