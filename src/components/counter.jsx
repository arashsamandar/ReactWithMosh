import React,{Component} from "react";

class Counter extends Component {
    formatValue() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
    getBtnClasses() {
        let classes = "btn btn-sm m-2 p-1 btn-";
        classes += (this.props.counter.value === 0) ? "warning" : "secondary";
        return classes;
    }
    render() {
        return (
        <React.Fragment>
            <div className="row">
                <div className="col-1 mx-2">
                    <span className={this.getBtnClasses()}>{this.formatValue()}</span>
                </div>
                <div className="col">
                    <button
                        onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary m-1">+
                    </button>
                    <button
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        className="btn btn-secondary m-1"
                        disabled={this.props.counter.value === 0 ? true : ''}>-
                    </button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}
                            className="btn btn-danger btn-sm">Delete
                    </button>
                </div>
            </div>
             <br></br>
        </React.Fragment>
        )
    }
}

export default Counter;