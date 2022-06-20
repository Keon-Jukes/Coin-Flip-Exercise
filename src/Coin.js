
import React, {Component} from 'react,'

class Coin extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(<div>
            {/* <img src={"https://tinyurl.com/react-coin-heads-jpg"} alt={"heads"} />
            <img src={"https://tinyurl.com/react-coin-tails-jpg"} alt={"tails"} /> */}
            {this.props.currSide === 'heads' ? <img src={"https://tinyurl.com/react-coin-heads-jpg"} alt={"heads"} />
             :  <img src={"https://tinyurl.com/react-coin-tails-jpg"} alt={"tails"} /> }
        </div>)
    }
}

export default Coin;