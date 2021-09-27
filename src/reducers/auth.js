import * as authConstants from "../actions/constants"

const initialState = {
    auLoading : false,
    error : null,
    user: null,
}

export const Auth = ((state = initialState, action)=>{
    const {type  , payload} = action ;
    switch(type){
        case authConstants.REGISTER_USER:
            return{
                ...state,
                auLoading : true
            }
            
        case authConstants.REGISTER_USER_SUCCESS:
            return{
                ...state,
                auLoading : false,
                error : null
            }
        case authConstants.REGISTER_USER_FAIL:
            return{
                ...state,
                error: payload,
                auLoading : false
            }

        case authConstants.LOGIN_USER:
            return{
                ...state,
                auLoading: true
            }
        case authConstants.LOGIN_USER_SUCCESS:
            return{
                ...state,
                auLoading: false,
                error: null,
                user: payload
            }
        case authConstants.LOGIN_USER_FAIL:
            return{
                ...state,
                auLoading: false,
                error: payload
            }
        
        case authConstants.POST_EXCHANGE:
            console.log(payload)
            return{
                ...state,
                user: payload
            }
        default:
            return state
        }

})