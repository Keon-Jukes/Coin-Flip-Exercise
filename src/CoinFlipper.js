import React from 'react';
import Coin from './Coin';

class CoinFlipper extends Component {
    static defaultProps = {
        coinSides : ['heads', "tails"]
    }
    constructor(props){
        super(props)
        this.state = {
            coinSide: "",
            headsTimes: 0,
            tailsTimes: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin(){
        let newSide = this.props.coinSides[Math.floor(math.random() * this.props.coinSides.length)];
        this.setState({...this.state, coinSide: newSide});
        if(newSide === 'heads'){
            this.setState({headsTimes: headsTimes + 1})
        } else {
            this.setState({tailsTimes: tailsTimes + 1})
        }
    }
    handleClick(){
        this.flipCoin();
    }

    render(){
        return(<div>
            <Coin currSide={this.state.coinSide}/>
            <div>Tails: {this.state.tailsTimes}</div>
            <div>Heads: {this.state.headsTimes}</div>
            <button onCLick={handleClick}>Flip Me!</button>
        </div>)
    }
}

export default CoinFlipper;