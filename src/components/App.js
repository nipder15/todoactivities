import { render } from '@testing-library/react';
import React, {Component} from 'react';
import Activities from './Activities';
import AddActivity from './AddActivity';

class App extends Component{

    state={
        activities:[
            {description:"Hacer Mercado",check:false,edit:false},
            {description:"Pagar los servicios",check:true,edit:false},
            {description:"Llamar al veterinario",check:false,edit:false},
            {description:"Lavar el carro",check:true,edit:false}
        ]
    }

    addActivity=(newActivity)=>{
        let activities=[...this.state.activities,newActivity];
        this.setState({
            activities
        })
    }
    pressEditBtn=(e) =>{
        let activities=this.state.activities;
        activities[e].edit=true;
        this.setState({
            activities
        });
    }
    
    updateActivity=(e,description,check) =>{
        let activities = this.state.activities;
        activities[e].description=description;
        activities[e].check=check;
        activities[e].edit=false;
        this.setState({
            activities
        });
    }
    pressDelete=(e) =>{
        let activities = this.state.activities.filter((u,index)=>{
            return index !==e;
        });
        this.setState({
            activities
        });

    }    
    render(){
        return(
            <div className="todocontainer">
                <h1>To Do Activities</h1>
                <Activities allActivities={this.state.activities} pressEditBtn={this.pressEditBtn} updateActivity={this.updateActivity} pressDelete={this.pressDelete} />
                <AddActivity addActivity={this.addActivity}/>
                <link rel='stylesheet prefetch' href='https://catfact.ninja/docs'></link>
            </div>
        );
    }
}

export default App;
