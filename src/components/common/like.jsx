import React,{Component} from "react";

export default class Like extends Component{
    state={};
    render() {
        let classes = "fa fa-heart";
        if(!this.props.liked) classes += "-o";
        return (
            <React.Fragment>
                <i
                    style={{cursor:"pointer"}}
                    className={classes}
                    onClick={this.props.onClick}
                />
            </React.Fragment>
        )
    }
}