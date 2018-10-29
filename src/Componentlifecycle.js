import React, { Component } from 'react';

class Componentlifecycle extends Component{
    constructor(props){
    super(props);
        this.state = {
            numcount: 0

        }
        this.setNewNumber = this.setNewNumber.bind()
    };
    setNewNumber(){
        this.setState({numcount: this.setState.numcount + 1})
    }
    render(){
        return(
            <div>
                <button onClick={this.setNewNumber}>Increment</button>
                <Counting numcount= {this.setNewNumber.numcount} />
            </div>    
        )
    }
}

class Counting extends Component {
    componentWillMount() {
       console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
       console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {    
       console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
       return true;
    }
    componentWillUpdate(nextProps, nextState) {
       console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
       console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
       console.log('Component WILL UNMOUNT!')
    }
    render() {
       return (
          <div>
             <h3>{this.props.myNumber}</h3>
          </div>
       );
    }
 }

 export default Componentlifecycle;