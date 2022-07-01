import React,{Component} from "react";
import Counter from "./counter";

export default class Counters extends Component{
    render() {
        const {onReset,counters,onDelete,onIncrement,onDecrement} = this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                <br></br>
                {counters.map(
                    counter =>
                        <Counter
                            selected={true}
                            counter={counter}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            key={counter.id}
                    />
                    )}
            </div>
        )
    }
}