import React from 'react';
import {reduxForm, Field} from 'redux-form'
import {Link} from 'react-router-dom'
import SurveyField from './SurveyField'

class SurveyForm extends React.Component {
    renderFields () {
        return (
            <div>
                <Field label="Survey Title" type="text" name="title" component={SurveyField} />
          
                <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
       
                <Field label="Email body" type="text" name="body" component={SurveyField} />
     
                <Field label="Recipient List" type="text" name="emails" component={SurveyField} />
            </div>
        )
    }
    
    
    
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>

                    {this.renderFields()}

                    <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>

                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
            
                </form>
            </div>
        )
    }
}


function validate(values) {
    const errors = {};

    if (!values.title) {    
        errors.title = 'Must provide title'
    }

    if (!values.subject) {    
        errors.subject = 'Must provide title'
    }

    if (!values.body) {    
        errors.body = 'Must provide title'
    }

    if (!values.title) {    
        errors.title = 'Must provide title'
    }

    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm)