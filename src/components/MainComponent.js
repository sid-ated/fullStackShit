import React, {Component} from 'react';
import Home from './Home/HomeComponent';
import Payment from './UtilComp/PaymentComponent';
import Registration from './Users/UserRegComponent.js';
import UserProfile from './Users/UserProfileComponent.js';
import Header from './Header/HeaderComponent.js';
import Footer from './Footer/FooterComponent';
import AiSuggest from './AIsuggest/AiSuggestComponent';
import AboutUs from './AboutUs/AboutUsComponent';
import Feedback from './AIsuggest/FeedbackComponent';
import Chatbot from './ChatBox/ChatComponent';
import MedicalStore from './MedicalStore/AllMedicinesComponent';
import ContactUs from './ContactUs/ContactUsComponent';
import Articles from './Articles/ArticleComponent';
import Cart from './Cart/CartComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMedicine, fetchComments, fetchSymptoms, loginUser, logoutUser, registerUser, fetchDisease } from '../redux/ActionCreator';
//import { actions } from 'react-redux-form';

const mapStateToProps = state =>{
    return {
      medicines: state.medicines,
      comments: state.comments,
      symptoms: state.symptoms,
      auth: state.auth
    }
}

const mapDispatchToProps = dispatch => ({
  fetchMedicines: () => { dispatch(fetchMedicine())},
  fetchComments: () => dispatch(fetchComments()),
  fetchSymptoms: () => dispatch(fetchSymptoms()),
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  registerUser: (creds) => dispatch(registerUser(creds)),
  fetchDisease:  (temp) => { dispatch(fetchDisease(temp))},
}); 


class Main extends Component {


  componentDidMount() {
    this.props.fetchMedicines();
    this.props.fetchComments();
    this.props.fetchSymptoms();
  }

  render(){
    const HomePage = () =>{
      return(
        <Home 
              medicine={this.props.medicines.medicines}
              medicinesLoading={this.props.medicines.isLoading}
              medicineErrMess={this.props.medicines.errMess}
          />
      );
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} />
          : 
          <div>
            <h1>You are not authorized. </h1>
          </div>
      )} />
    );


    return (
      <div>
        <Header
          auth={this.props.auth} 
          loginUser={this.props.loginUser} 
          logoutUser={this.props.logoutUser} 
          registerUser={this.props.registerUser}
          medicine={this.props.medicines.medicines}
        />
            <Switch>
              <Route path="/home" component={HomePage}/>
              <Route exact path ="/registration" component = {() => <Registration 
                                                                registerUser={this.props.registerUser}
                                                                auth={this.props.auth} />} />
              <Route exact path = "/aisuggest" component = {() => <AiSuggest
                                                                  symptomList={this.props.symptoms.symptoms}
                                                                  fetchDisease={this.props.fetchDisease}
                                                                  />}/>
              <Route exact path ="/aboutus" component = {() => <AboutUs/>} />    
              <Route exact path ="/feedback" component = {() => <Feedback/>} />   
              <Route exact path ="/chatbot" component = {() => <Chatbot/>} />  
              <Route exact path ="/medical_store" component = {() => <MedicalStore/>} /> 
              <Route exact path ="/articles" component = {() => <Articles/>} />    
              <Route exact path ="/contactus" component = {() => <ContactUs/>} />                       
              <PrivateRoute exact path ="/payment" component={() => <Payment auth={this.props.auth}/>} />
              <PrivateRoute exact path ="/yourCart" component={() => <Cart auth={this.props.auth}/>} />
              <PrivateRoute exact path ="/user/userProfile" component={() => <UserProfile auth={this.props.auth}/>} />
              <Redirect to="/home" />
              
            </Switch>
        <Footer/> 
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
