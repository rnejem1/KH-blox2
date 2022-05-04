
import {db} from './firebase-utils'

export function addUserToFirestore(userInfo){

    var collection = db.collection('users')

    collection.where('email', "==", userInfo.email).get().then((querySnapshot)=>{
      
        if(querySnapshot.size == 0){
            db.collection('users').add({
                first_name:userInfo.first_name,
                last_name:userInfo.last_name,
                email:userInfo.email
            })        
        }else{
            console.log("user already exists.. not adding ")
        }

        return true     
    }).catch((error)=>{return})
    
}
