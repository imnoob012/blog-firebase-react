import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    // ログアウト処理
    signOut(auth).then(() => {
    // Sign-out successful.
    localStorage.clear();
    setIsAuth(false);
    navigate("/login");
    })
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout