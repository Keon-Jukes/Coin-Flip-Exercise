import React, {Component} from 'react';
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps = {
        coinSides : ['heads', "tails"]
    }
    constructor(props){
        super(props)
        this.state = {
            coinSide: null,
            headsTimes: 0,
            tailsTimes: 0,
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        let newSide = this.props.coinSides[Math.floor(Math.random() * this.props.coinSides.length)];
        this.setState({...this.state, coinSide: newSide});
        if(newSide === 'heads'){
            this.setState({headsTimes: this.state.headsTimes + 1})
        } else {
            this.setState({tailsTimes: this.state.tailsTimes + 1})
        }
       this.setState({count: this.state.count + 1});
    }
    handleClick(){
        this.flipCoin();
    }

    render(){
        return(<div>
            <Coin currSide={this.state.coinSide}/>
            <p>Out of {this.state.count} flips, there have been</p>
            <div>Tails: {this.state.tailsTimes}</div>
            <div>Heads: {this.state.headsTimes}</div>
            <button onClick={this.handleClick}>Flip Me!</button>
        </div>)
    }
}

export default CoinFlipper;