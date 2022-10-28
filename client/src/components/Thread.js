import { useSelector } from "react-redux";
// import { getPosts } from "../actions/postActions";
import Card from "./Post/Card";
import { isEmpty } from "./Utils";

const Thread = () => {

  const posts = useSelector((state) => state.postReducer);

  return (
    <div className="thread-container">
      <ul>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Card post={post} key={post._id} />; //key unique toujours obligatoire pour les maps
          })}
      </ul>
    </div>
  );
};

export default Thread;
