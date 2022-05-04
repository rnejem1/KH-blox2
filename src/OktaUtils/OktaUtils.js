import {okta_config} from './okta-config'

import axios from 'axios'

axios.defaults.baseURL = 'https://robabank.okta.com/';


export const CreateOktaUser = (user_payload) =>{
    
    // create a user in Okta .. 
    let url = 'https://robabank.okta.com/api/v1/users?activate=true'

    console.log("Logging url: "+url)

    let payload = JSON.stringify({
        "profile": {
          "firstName": `${user_payload.first_name}`,
          "lastName": `${user_payload.last_name}`,
          "email": `${user_payload.email}`,
          "login": `${user_payload.email}`
        },
        "credentials": {
          "password": {
            "value": `${user_payload.password}`
          }
        }
      });

      let config = {
        method: 'post',
        url: url,
        headers: { 
          'Accept': 'application/json', 
          'Content-Type': 'application/json', 
          'Authorization': `SSWS ${okta_config.api_key}`
        },
        data : payload
      };

      console.log(payload)
      console.log("gonna do the call now")

      axios(config).then(function (response) {
        // seems like a lot... 
        console.log('user created')
        //console.log(JSON.stringify(response.data));
    }).catch(function (error) {
        console.log("user not created... check some things..")
        console.log(error);
    });


}

export const ResetOktaMFA = () =>{
  var axios = require('axios');
  var FormData = require('form-data');
  var data = new FormData();

  let url = 'https://robabank.okta.com/users/00ufqtjyjH7eakFNI696/lifecycle/reset_factors'

  var config = {
    method: 'POST',
    url: url,
    headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json', 
      'Authorization': 'SSWS 00Ud1bjLWBKahidkUfiSLCNe3RR34pzVBSHH5p67hE'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}