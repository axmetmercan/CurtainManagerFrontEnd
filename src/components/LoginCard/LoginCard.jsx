import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginCard(props) {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center border rounded-4 shadow' style={{width: props.width}}>
    
    <img className='rounded-circle' alt='profile-image' src='../images/profile-pic.jpg' style={{width: "150px", height: "150px"}}/>
      
      
      <form className='m-5  p-3 d-flex flex-column ' style={{width:"100%"}}>
        
        <label className='form-label'>Kullanıcı Adı</label>
        <input placeholder='exampleuser' className='form-control'></input>
        
        
        <label className='form-label'>Şifre</label>
        <input type="password" placeholder='******' className='form-control'></input>

        <button className='btn btn-success mt-3'>Giriş Yap</button>

        <div className="col pt-3 text-center">

        <Link to="/asd">Şifremi Unuttum</Link>
        <span> | </span>
        <Link to="/register"> Kayıt Ol</Link>


        </div>
        

      </form>
    </div>
  )
}
