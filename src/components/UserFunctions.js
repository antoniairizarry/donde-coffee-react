import axios from 'axios'

export const signup = newUser => {
  return axios
  .post(process.env.REACT_APP_FLASK_API_URL + '/signup', {
    email: newUser.email,
    name: newUser.name,
    password: newUser.password
  })
  .then(res => {
    console.log(res)
  })
}

export const login = user => {
  return axios
  .post('users/login', {
    email: user.email,
    password: user.password
  })
  .then(res => {
    localStorage.setItem('usertoken', res.data.token)
    return res.data
  })
  .catch(err => {
    console.log(err)
  } )
}