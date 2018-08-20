import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

const surveyFormReview = (props) => {
    return (
        <div>
            <h5>
                please confirm your entries
            </h5>

            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{props.formValues.title}</div>
                </div>
                <div>
                    <label>Subject Line</label>
                    <div>{props.formValues.subject}</div>
                </div>
                <div>
                    <label>Email Body</label>
                    <div>{props.formValues.body}</div>
                </div>
                <div>
                    <label>Survey Title</label>
                    <div>{props.formValues.title}</div>
                </div>

            </div>

            <button className="yellow darken-3 btn-flat" onClick={props.onCancel}>Cancel</button>

            <button className="green right btn-flat" 
                onClick={() => props.submitSurvey(props.formValues)}>
                    Send Survey
                    <i className="material-icons right">email</i>
            </button>
        </div>

    )
}

function msp(state) {
    console.log(state)
    return { 
        formValues: state.form.surveyForm.values
    }
}

export default connect(msp, actions)(surveyFormReview) 