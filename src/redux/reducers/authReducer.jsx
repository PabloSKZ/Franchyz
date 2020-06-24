import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../types/authTypes'

let tempo
let decodedToken 
if (Cookies.get('token') === undefined || Cookies.get('token') === null){
  tempo = {
    loading: false,
    isAuth: false,
    id: null,
    typeUser: '',
    error: '',
  }
}
else{
  decodedToken =jwt_decode(Cookies.get('token'))
  tempo = {
    loading: false,
    isAuth: true,
    error: '',
    typeUser: decodedToken['scp'],
  } 
}



const initialState = tempo

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      } 
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        typeUser: action.typeUser,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: false,
        id: null,
      }
    default:
      return {
        ...state
      }
  }
}

export default authReducer
