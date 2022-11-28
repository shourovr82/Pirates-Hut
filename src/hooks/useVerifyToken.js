import { useEffect, useState } from "react";

const useVerifyToken = email => {
  const [token, setToken] = useState('')

  useEffect(() => {
    if (email) {
      fetch(`https://pirates-hut-server.vercel.app/getjwt?email=${email}`)
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