import React, { useEffect, useState } from 'react'
import "./CreatePost.css"
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const createPost = async () => {
    await addDoc(collection(db, "posts"), { // "posts"はドキュメント名
      title: title,
      content: content,
      author: {
        username: auth.currentUser.displayName, // ログインしているユーザーの名前取得
        id: auth.currentUser.uid // ログインしているユーザーのidを取得
      }
    });
    navigate("/");
  }
  // ログインしていないのに記事が書けてしまうバグを修正
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []) // 初回レンダリング(Reactではコンポーネントを呼び出す)時に副作用関数を呼び出す。


  return (
    <div className='createPostPage'>
      <div className="postContainer">
        <h2>記事を投稿する</h2>
        <div className="postTitle">
          <p>タイトル</p>
          <input type="text" placeholder='タイトルを記入' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="content">
          <p>投稿内容</p>
          <textarea placeholder='投稿内容を記入' onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button className="postButton" onClick={createPost}>投稿する！</button>
      </div>
    </div>
  )
}

export default CreatePost