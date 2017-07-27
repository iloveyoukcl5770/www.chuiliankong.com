import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {fetchEducation} from "../../actions/actions";

class EducationPage extends Component{
    componentDidMount(){
        this.props.fetchEducation();
    }

    renderEducationList(){
        if(!this.props.education){
            return (
                <div>Loading</div>
            )
        }else{
            return this.props.education.map(entry => {
                return (
                    <li className="list-group-item" key={entry.id}>
                        <div>{entry.schoolName}</div>
                    </li>
                )
            });
        }
    }

    render(){
        return (
            <div>
                <ul className="list-group">
                    {this.renderEducationList()}
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        education: state.education
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchEducation : fetchEducation},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationPage);