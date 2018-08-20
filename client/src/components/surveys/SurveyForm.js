import React from 'react';
import {reduxForm, Field} from 'redux-form'
import {Link} from 'react-router-dom'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'

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
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>

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

    errors.emails = validateEmails(values.emails || '')


    if (!values.title) {    
        errors.title = 'Must provide title'
    }

    if (!values.subject) {    
        errors.subject = 'Must provide subject'
    }

    if (!values.body) {    
        errors.body = 'Must provide body'
    }

    if (!values.emails) {
        errors.emails = 'Must provide email(s)'
    }


    return errors
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm)