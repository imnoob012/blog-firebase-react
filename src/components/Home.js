import React, { useEffect, useState } from 'react'
import "./Home.css"
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase"

const Home = () => {
  const [postList, setPostList] = useState([]);
  // 投稿を削除する関数
  const deletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/"; // ホームにリダイレクトする
  };


  useEffect( () => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    // useEffectの中で非同期処理をするなら、中にもう一個関数を作る
    getPosts();
  }, []);

  return (
    <div className='homePage'>
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
            <h1>{post.title}</h1>
            </div>
            <div className="postContent">
              {post.content}
          </div>
          <div className="nameAndDeleteButton">
            <h3>{post.author.username}</h3>
            
            <button onClick={() => deletePost(post.id)}>削除</button>
          </div>
          </div>
        )
      })}

      
    </div>
  )
}

export default Home