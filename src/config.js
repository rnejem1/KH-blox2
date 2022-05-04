const oktaAuthConfig = {
    // Note: If your app is configured to use the Implicit flow
    // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
    // you will need to add `pkce: false`
    issuer: 'https://robabank.okta.com/oauth2/default',
    clientId: '0oaepy9t4FpR7RKvv696',
    redirectUri: window.location.origin + '/login/callback',
  };
  const oktaSignInConfig = { 

    logo: "//logo.clearbit.com/okta.com",
    features:{ 
        registration: true, 
    },
    baseUrl : 'https://robabank.okta.com', 
    clientId: '0oaepy9t4FpR7RKvv696',
    redirectUri: window.location.origin + '/login/callback',
    authParms:{

    },
   /* idps : [
        { 
            type: 'GOOGLE',
            text: "Google Workspace",
            id: '0oa1iq4avqn6YetEg696', 
            idpDisplay:"Secondary"
        }

      ]
    */
}; 

  
  export { oktaAuthConfig, oktaSignInConfig };

  