export const PostWithAuth = (url, body) => {

  const  request = fetch("/api"+url,  {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
        body : JSON.stringify(body),
      })

    return request
}

export const PostWithoutAuth = (url, body) => {

  const  request = fetch("/api"+url,  {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(body),
      })

    return request
}

export const PutWithAuth = (url, body) => {

  const  request = fetch("/api"+url,  {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
        body : JSON.stringify(body),
      })

    return request
}

export const GetWithAuth = (url) => {

  const  request = fetch("/api"+url,  {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
      })

    return request
}

export const DeleteWithAuth = (url) => {

  const  request = fetch("/api"+url,  {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : localStorage.getItem("tokenKey"),
        },
      })

    return request
}

export const RefreshToken = () => {

  const request = fetch("/api/auth/refresh", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: localStorage.getItem("currentUser"),
      refreshToken: localStorage.getItem("refreshKey"),
    }),
  })
  return request
}