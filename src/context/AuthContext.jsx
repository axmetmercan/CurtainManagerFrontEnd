import alertify from 'alertifyjs';
import { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom'; // version 5.2.0

const AuthContext = createContext();


export default AuthContext;

export const AuthContextProvider = ({children}) => {

    let localAuthTokens = localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null

    let [authTokens, setAuthTokens] = useState(()=> {
        if (localAuthTokens){
            return localAuthTokens
        }else {
            return null
        }
    });
    let localUser =localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens")) : null

    let [user, setUser] = useState(localUser)

    let [loading, setLoading] = useState(true);

    let navigate = useNavigate();


    let loginUser = async (e) => {
        e.preventDefault();
        let response = await fetch("http://127.0.0.1:8000/api/token/", {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
        })
        let data = await response.json()
        // console.log('data:', data)

        if (response.status === 200){
            setAuthTokens(data);
            setUser(jwt_decode(data.access))
            alertify.success("Başarılı şekilde giriş yapıldı.")
            localStorage.setItem("authTokens", JSON.stringify(data))
            navigate("products")
 
        }else {
            alertify.error("Kullanıcı Bulunamadı")
        }
    }

    let logoutUser= () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens')
        navigate('/')
    }


    let updateToken = async (e) => {
        // alertify.success("Update Token")
        let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({'refresh':authTokens?.refresh})
        })
        let data = await response.json()
        if (response.status === 200){
            setAuthTokens(data);
            setUser(jwt_decode(data.access))
            // alertify.success("Login Yenilendi.")
            localStorage.setItem("authTokens", JSON.stringify(data))

        }else {
            // alertify.warning ('Çıkış Yapılıyor.');
            logoutUser();
        }

        if (loading){
            setLoading(false);
        }

    }

    useEffect(()=>{

        if (loading){
            updateToken();
        }

        const refreshTime = 1000*60*4;
  
        setTimeout(()=>{
            if (authTokens){
                updateToken();
            }
        }, refreshTime)

        

    }, [authTokens, loading])


    let contextData = {
        loginUser:loginUser, 
        logoutUser:logoutUser,
        authTokens:authTokens, 
        user: user,
    }

    return (
        <AuthContext.Provider
            value={contextData}
        >
            {children}

        </AuthContext.Provider>
    )
}
