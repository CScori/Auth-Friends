JWT jot is the json w token
 creating a custom token in an env. environment file allows choice encription soft to hold the decoder in hub server while the token 

 login with auth

 axios.post to send in data
 axios
 .post(localhost:5000/api/login) //api/login is from the endpoints

 make a request with post and look for data.payload from backend to get token which will save to local storage

 localStorage.setItem

 history.push redirects to a new route with token


 !// Switch wrapped around routes will create a flipable route that lets history.push


 Axios with auth lives in utils folder. its a function that takes axios create and a object and then state 

 base url is a set to the main from http: until .whatever allows it to be passed in to request and tag on other endpoints

 headers is an object with a list of headers in that object 
 !!!Authorization: token

 best practice to name a const token 
 const token - localStorage.getItem('token')

 axiosWithAuth()
 .get('/api/data')
 .then(res => {
     console.log(res)
     this.setState({state:res.data.})
 })
 .catch(err => console.log(err))


filtering data from api
const sing = data.filter(sin = spec key === && (a second kvp like location))




