
import React, {Component} from 'react';
import './Coin.css';

class Coin extends Component {
    static defaultProps = {
        heads: 'https://tinyurl.com/react-coin-heads-jpg',
        tails: 'https://tinyurl.com/react-coin-tails-jpg'
    }

    render(){
        return(<div className='Coin'>
            {/* <img src={"https://tinyurl.com/react-coin-heads-jpg"} alt={"heads"} />
            <img src={"https://tinyurl.com/react-coin-tails-jpg"} alt={"tails"} /> */}
            {this.props.currSide === 'heads' ? <img src={this.props.heads} alt={"heads"} />
             :  <img src={this.props.tails} alt={"tails"} /> }
        </div>)
    }
}

export default Coin;