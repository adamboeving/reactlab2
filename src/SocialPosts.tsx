import { useState } from "react";
import { Post } from "./Post";
import { PostInList } from "./PostInList";

export function SocialPosts () {

  const [posts, setPosts] = useState<Post[]>([])


  return (

    {posts.map(post => <PostInList post={post}></PostInList>)}
  )
}