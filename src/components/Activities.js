import React, {Component} from 'react';

class Activities extends Component{
    handleUpdate = () => {
        this.props.updateActivity(this.indexNum, this.description.value);
    }
    render(){
        const {allActivities, pressEditBtn, pressDelete} = this.props;
        console.log(allActivities);
        const activitiesList = allActivities.map((activity, index) => {
            return activity.edit === true ?(
                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.description = val}} required defaultValue={activity.description}/></td>
                    <td>
                    <td><input type="checkbox" ref={(val) => {this.check = val}} required defaultValue={activity.check}/></td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btn green"/>
                    </td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td>{activity.description}</td>
                    <td>{activity.check}</td>
                    <td><button className="btn white black-text" onClick={() => pressEditBtn(index)}>Edit</button>  |  <button className="btn red" onClick={()=>pressDelete(index)}>Delete</button></td>
                </tr>
            )
        }
        )

        return(
            <table className="todolist">
            <thead>
                <tr>
                <th>Description</th>
                <th>Check</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {activitiesList}
            </tbody>
        </table>
        );
    }

}

export default Activities;