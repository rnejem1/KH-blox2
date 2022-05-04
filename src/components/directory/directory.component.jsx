import {React, Component} from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

import { withOktaAuth } from '@okta/okta-react';

import {addUserToFirestore} from '../../firebase/firebase-user-utils'



export default withOktaAuth(class Directory extends Component{ 
    constructor(props){
        super(props);
        this.state={
          sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens',
                  size:'large'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens',
                  size:'large'
                }
              ],
            authenticated: false,
            idToken: this.props.authState,
        }
    }


    // sometimes the props aren't set in the right ways.. i.e.. the authState not being set correctly. 
    // so what we're going to do is check if the updated and set the state to force a re-render of the compoenent. 
    componentDidUpdate(prevProps){

      console.log(prevProps)

      if(prevProps != this.props){
        // check that the authState is not null 
        if(this.props.authState){
          this.setState({
            authenticated:this.props.authState.isAuthenticated, 
            idToken: this.props.authState.idToken
          }, ()=>{

            if(this.state.authenticated){
              addUserToFirestore({
                first_name:this.state.idToken.claims.first_name,
                last_name:this.state.idToken.claims.last_name,
                email:this.state.idToken.claims.email
            })
        }
        }
      )
    }
  }
}

   
    render(){

      return(
            <div className='directory-menu'>
                {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
                
                }

            </div>
        )
    }
})
