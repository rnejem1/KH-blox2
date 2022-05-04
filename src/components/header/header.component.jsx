import React from 'react'
import '../header/header.styles.scss'
import './header.styles.scss'

import {Link} from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg'


// okta library fo tapping into the authstate 
import { useOktaAuth } from '@okta/okta-react';
import ProfileList from './profile-list/profile-list.component'
import { height } from '@mui/system'


const Header = () =>{


    const {authState} = useOktaAuth();
    // authState.isAuthenticated is our friend here.  

    try{
        var logged_in = authState.isAuthenticated; 
    }catch(e){
        logged_in = false
    }
    
    const sign_in_or_profile = () =>{

        if(logged_in){
            return(<ProfileList />)
        }

        return(
            <Link className = "option" to="/signin"> SIGN IN </Link>
        )
        
    }

return (
    <div className='header'> 
        <Link to="/" className='link-container'>

            <div>
                <img style={{width:'8vw', marginTop:'-10%', position:'relative'}} src="//logo.clearbit.com/okta.com" />
            </div>
            
        </Link>
        <div className='options'> 
             {sign_in_or_profile()}
            <Link className = "option" to="/shop">SHOP</Link>
            <Link className = "option" to="/contact"> CONTACT </Link>
        </div>
    </div> )
}

export default Header; 