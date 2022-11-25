import { useEffect, useState } from "react";

const useVerifyToken = email => {
  const [token, setToken] = useState('')

  useEffect(() => {
    if (email) {
      console.log(email);
      fetch(`http://localhost:5000/getjwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
          if (data.accessToken) {
            localStorage.setItem('accessToken', data.accessToken)
            setToken(data.accessToken)
          }
        })
    }
  }, [email])

  return [token];

}
export default useVerifyToken;