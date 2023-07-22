import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'


const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/"><FontAwesomeIcon icon={faHouse} />ホーム</Link>
      {/* { !isAuth ? (trueの時に実行したい処理) : (falseの時に実行したい処理) } 三項演算子 ! 論理否定演算子*/}
      {/* { !isAuth ? (<Link to="/login"><FontAwesomeIcon icon={faRightToBracket} />
      ログイン</Link>) : (
        <Link to="/logout"><FontAwesomeIcon icon={faRightToBracket} />
        ログアウト</Link>) } */}
      {isAuth ? (
        <>
          <Link to="/createpost"><FontAwesomeIcon icon={faNewspaper} />記事投稿</Link>
          <Link to="/logout"><FontAwesomeIcon icon={faRightToBracket} />
          ログアウト
          </Link>
        </>
      ) : (
        <Link to="/login"><FontAwesomeIcon icon={faRightToBracket} />
        ログイン
        </Link>
      )}

    </nav>
  )
}

export default Navbar