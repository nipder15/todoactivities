import React, {Component} from 'react';

class AddActivity extends Component{
    state={
        description:null,
        check: false,
        edit: false
    }

    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addActivity(this.state);  
        e.target.reset();

    }
    
     
    updateState =(i) =>{
        this.setState({
            [i.target.description]:i.target.value,
        });
    }
    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input className="description" autoComplete="off" placeholder="Enter your Activity" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add +" className="btn blue"/>
                    </div>
                </form>
            </div>
        );
    }

}
export default AddActivity;