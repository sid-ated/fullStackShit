import React , {Component} from 'react';
import SymptomText from './SymptomSuggestionComponent'
import {Button} from 'reactstrap';
class AiSuggest extends Component{
	constructor(props){
		super(props);
		this.state={
			Symptom1: "",
			Symptom2: "",
			Symptom3: "",
			Symptom4: "",
			Symptom5: "",
			Symptom6: "",
			Symptom7: "",
			Symptom8: "",
			Symptom9: "",
			Symptom10: ""
		};
		
		this.handleInputChange=this.handleInputChange.bind(this);
		this.getDisease=this.getDisease.bind(this);
         
	}
	handleInputChange(name, id){
	    var temp = "Symptom" + id;
	    this.setState({
	    	[temp] : name
	    });
	}
	getDisease(){
	       var temp = [
	       	this.state.Symptom1,
	       	this.state.Symptom2,
	       	this.state.Symptom3,
	       	this.state.Symptom4,
	       	this.state.Symptom5,
	       	this.state.Symptom6,
	       	this.state.Symptom7,
	       	this.state.Symptom8,
	       	this.state.Symptom9,
	       	this.state.Symptom10
	       ];
	       this.props.fetchDisease(temp);
	 	for(var i=1; i<=10; i++){
	 	    var temp = "Symptom"+i;
	 	    this.setState({
	 	    	[temp]: ""
	 	    });
	 	}
	}
    render(){
        return(
            <div>
               <div className="mt-2 mb-2 col-12">
                	<p> Please type your symptoms and select from the suggestions shown. Then click on predict disease button. For better results fill all the 10 fields. Your result will be propmpted shortly after that.</p>
                </div>
               
                <div className="mt-2 mb-2 col-12">
                	<SymptomText symptoms = {this.props.symptomList} id={1} handleChange={this.handleInputChange}/>
                </div>
                <div className="mt-2 mb-2 col-12">
                	<SymptomText symptoms = {this.props.symptomList} id={2} handleChange={this.handleInputChange}/>
                </div>
                <div className="mt-2 mb-2 col-12">
                	<SymptomText symptoms = {this.props.symptomList} id={3} handleChange={this.handleInputChange}/>
                </div>
                <div className="mt-2 mb-2 col-12">
                	<SymptomText symptoms = {this.props.symptomList} id={4} handleChange={this.handleInputChange}/>
                </div>
                <div className="mt-2 mb-2 col-12">
                	 <SymptomText symptoms = {this.props.symptomList} id={5} handleChange={this.handleInputChange}/>
                </div>
                <div className="mt-2 mb-2 col-12">
                	<SymptomText symptoms = {this.props.symptomList} id={6} handleChange={this.handleInputChange}/>
                </div>
                <div className="mt-2 mb-2 col-12">
                	<SymptomText symptoms = {this.props.symptomList} id={7} handleChange={this.handleInputChange}/>
                </div>
                <div className="mt-2 mb-2 col-12">
                	<SymptomText symptoms = {this.props.symptomList} id={8} handleChange={this.handleInputChange}/>
                </div>
                <div className="mt-2 mb-2 col-12">
                	<SymptomText symptoms = {this.props.symptomList} id={9} handleChange={this.handleInputChange}/>
                </div>
                <div className="mt-2 mb-2 col-12">
                	<SymptomText symptoms = {this.props.symptomList} id={10} handleChange={this.handleInputChange}/>
                </div>
                <div className="mt-2 mb-2 col-12">
                	<Button onClick={this.getDisease} color="primary">Predict Disease</Button>
                </div>
               
            </div>
        );
    }
}

export default AiSuggest;

