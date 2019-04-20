import React, { Component } from 'react';
import { Widget ,addResponseMessage,renderCustomComponent,addLinkSnippet  } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './App.css';
import logo from './logo.svg';
import moment from 'moment'
import io from "socket.io-client";
import Webcam from "react-webcam";
import axios from 'axios';

//import { database ,dbstore } from './firebase';


//_____Import teh other components___________//
//import { WelcomeComponent } from './components/WelcomeComponent';

import QuizzComponent from './components/QuizzComponent';
import  WelcomeComponent from './components/WelcomeComponent';
import FaceDetectionComponent from './components/faceDetectionComponent';
import NotificationButton from './components/NotificationsButton';
import MapComponent from './components/MapsComponent';
import FaceDetectedComponent from './components/FaceDetectedComponent';
import AlertsComponent from './components/AlertsComponent';
import DetectlostComponent from './components/DetetcLost';
import AlerteMsgComponent from './components/AlertMessage';

import Tracking from '../src/MapMonuments';

const URL_SOCKET = 'localhost:3001'



class App extends Component {


  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 'index' :0 ,locationName: ''  ,messagesList :[], Quizz :[
      {'id:':0,'question_content':'Quel Est la date de votre marriage ?','reponse1':'13 aout 1978',
      'reponse2':'17 sept 1978','reponse3':'13 aout 1979','reponsecorrecte':'1'},
      {'id:':1,'question_content':'Quel Est le prénom de votre fille ?','reponse1':'Karim',
      'reponse2':'Foued','reponse3':'Adnen','reponsecorrecte':'3'},
      {'id:':2,'question_content':'Quand vous Avez eu votre retraite ?','reponse1':'2015',
      'reponse2':'2017','reponse3':'2018','reponsecorrecte':'1'}
    ]};
    this.socket = io('http://localhost:3001/');

    //__________________________________________//
    this.handleMap  =this.handleMap.bind(this);
    this.DisplayMap =this.DisplayMap.bind(this);
    this.DisplayQuizz = this.DisplayQuizz.bind(this);
    this.handleQuizz = this.handleQuizz.bind(this);

  

 
   //_______RECEIVE MESSAGE FROM THE BACK-END_______//
   this.socket.on('RECEIVE_MESSAGE', function(data){
     console.log('the data from the user' + JSON.stringify(data.type));
     switch(data.type)
     {
       case 'location' :
             console.log('ask about location');
             addResponseMessage("Merci de Suivre cet Map !");
             renderCustomComponent(MapComponent,{"handleMap":this.handleMap})
             break ;

      case 'face_recognition' :
             console.log('ask about persons' + this.capture);
             //addResponseMessage(data.text);
             renderCustomComponent(FaceDetectionComponent)
             break ;      
      

      case 'face_detected' :
             console.log('display face detected !!')
             renderCustomComponent(FaceDetectedComponent)
             addResponseMessage(data.text);
             break ; 


      case 'alerts' :
             console.log('display alerts here!!')
             renderCustomComponent(AlertsComponent,{"text":data.text})
             //addResponseMessage(data.text);
             break ;

      case 'quizz' :
             console.log('display QUIZZ here!!')
             renderCustomComponent(QuizzComponent)
             addResponseMessage(data.text);
             break ; 
             
      case '' :
             console.log('display QUIZZ here!!')
             renderCustomComponent(QuizzComponent)
             addResponseMessage(data.text);
             break ;        



       default:
             addResponseMessage(data.text);

     }
   
   });

    this.socket.on('RECEIVE_DATA', function(data){
      console.log("there is dataa" + data.length)
      
  });

    
  }

  componentDidMount() {
    
    //render the first Message
    renderCustomComponent(WelcomeComponent,{"DisplayQuizz":this.DisplayQuizz,
  "DisplayAlertes":this.DisplayAlertes ,"DisplayMap":this.DisplayMap,
"DisplayWbeCam":this.DisplayWbeCam})







  }


  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);

   
    // Now send the message throught the backend API
    //send the Message to the API_________//
    var message = {};
    message.text =newMessage;
    this.socket.emit('SEND_MESSAGE', {
      message
    });
  }




  componentWillUnmount() {
    this.socket.close()
  }

  onChange(event)
  {
    console.log('event' + event)
    //this.setState({message: event.target.value});
    this.setState({...this.state.message, value: event.target.value});
    console.log('message is updating' + this.state.message)
  
  }

  //_____________Function to send a Message__________________//

sendMessage =(msgValue)=> {
  //e.preventDefault()
  //alert("send send !")
  var message ={
    'text' : msgValue,
    'parseDate' : moment().format('llll'),
    'id' : '_' + Math.random().toString(36),
    'type' :'user' ,
    'own' : true
  }
  
  //__________update the litst of messages_________
  this.setState({
    messagesList: [...this.state.messagesList,message]
  })
  this.socket.emit('SEND_MESSAGE', {
    message
  });
  
  
  
  }
  
  
  onReceiveMessage(message)
  {
  
    this.setState({
      messagesList: [...this.state.messagesList,message]
    })
  }
  
  
  
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    var message ={
      'text' : newMessage,
      'parseDate' : moment().format('llll'),
      'id' : '_' + Math.random().toString(36),
      'type' :'user' ,
      'own' : true
    }
    
    //__________update the litst of messages_________
    /*this.setState({
      messagesList: [...this.state.messagesList,message]
    })*/
    this.socket.emit('SEND_MESSAGE', {
      message
    });
  
    //addResponseMessage(newMessage)
  }


  

  handleMap= param => e => {
   console.log('the params is' + JSON.stringify(param));
   //___check about the value 
   if(param.answer=="Oui")
   {
     addResponseMessage("Bon route , Je suis Toujours Pour Vous Aider :)");
   }else{
     var message ={};
     message.text="Person Perdu"
     message.pos = param.pos ;
     //____send en real time to server to notify patient helper !!
     this.socket.emit('PERSON_LOST', {
      message
    });

     
   }
};

//___________________________________//
handleQuizz = param => e => 
{
 
  
  let {Quizz,index} = this.state ;
  console.log('quizz is' + JSON.stringify(Quizz));
  console.log('malad answer' + param.answer);
  var message ={};
  

  if( index<Quizz.length && param.answer===(Quizz[index].reponsecorrecte)  )
  {
 
  
  message.score+=1;
  message.question=JSON.stringify(Quizz[index])
  /*this.socket.emit('SEND_SCORE', {
    message
  });*/
/*var firebaseRef = database.ref('score');
firebaseRef.push(message);*/
  //send data to socket.emit score a
  }else{
    message.score=-1;
    message.question=Quizz[index]
    /*this.socket.emit('SEND_SCORE', {
      message
    })*/

 
 

  }

    //____display THE NEXT QUIZZ_____//
 //___chekc if last QUIZZ 
 if(Quizz.length==index)
 {
   addResponseMessage("Merci Pour Votre Participation , vos résulats seront evaluées a toute l'heure");

 }else{

//____Save the SCORE_______________//
/*var firebaseRef = database.ref('scores');
var newStoreRef = firebaseRef.push();
newStoreRef.set({
  "question":Quizz[index],
  "score": message.score,
  "answer" :param.answer
});*/

  renderCustomComponent(QuizzComponent,{"Quizz":Quizz[index],
"id_quizz":Quizz[index], 'handleQuizz':this.handleQuizz});
this.setState({ index: this.state.index + 1 })
 }
  

 

}

//_____Functins for the First Interact____________________//

DisplayQuizz()
{
 
  //____display THE QUIZZ_____//
  //render the first Message
  let {Quizz,index} = this.state ;
  
  renderCustomComponent(QuizzComponent,{"Quizz":Quizz[index],
"id_quizz":Quizz[index], 'handleQuizz':this.handleQuizz});
this.setState({ index: this.state.index + 1 })
}

DisplayAlertes()
{
 
  //____display THE QUIZZ_____//
  //render the first Message
  renderCustomComponent(AlertsComponent,{})

}


DisplayMap()
{
 
  //____display THE QUIZZ_____//
  //render the first Message
  renderCustomComponent(MapComponent,{"handleMap":this.handleMap})
  //renderCustomComponent(DetectlostComponent,{"handleMap":this.handleMap})
  

}




DisplayWbeCam()
{
 
  //____display THE QUIZZ_____//
  //render the first Message
  renderCustomComponent(FaceDetectionComponent,{})

}






  render() {
    const divStyle = {
      position: 'absolute',

      margintop: '-50px',
      
      marginleft: '-150px',
    };
    return (
      <div className="container">


< Tracking />





      
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Alzeimer"
          subtitle=""/>
      </div>
    );
  }
}

export default App;
