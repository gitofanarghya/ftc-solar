export function login(email) {
    return {
      type: 'login',
      payload: email
    }
  }

export function logout(){
  return{
    type: 'logout',
    payload: null
  }
}