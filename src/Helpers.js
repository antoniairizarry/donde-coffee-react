export function getHeaders() {
  let headers = { }
  if (localStorage.token) {
    headers = {
      Authorization: `Bearer ${localStorage.token}`   
    }
  }
  return headers;
}

//in flask, some end points are protected
//this fx provides a way to get the header
//header is needed to access the token