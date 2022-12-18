import React, {useEffect, useLayoutEffect, useState} from "react";
import axios from "axios";
import Name from "./Components/Name";
import PP from "./Components/PP";
import Info from "./Components/Info";
import Comment from "./Components/Comment";

function App() {
    const [user, setUser] = useState([]);
    const [image, setImage] = useState([]);
    const [comment, setComment] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/1`)
            .then((result) => {
                setUser(result.data);
            });
        axios.get("https://jsonplaceholder.typicode.com/photos/1")
            .then((response) => {
                setImage(response.data);
            });
        axios.get("https://jsonplaceholder.typicode.com/comments/1")
            .then((res) => {
                setComment(res.data);
            });
    }, [user, image, comment])
    return (
        <div>
            <Name user={user}/>
            <PP image={image}/>
            <Info user={user}/>
            <Comment comment={comment}/>
        </div>
    );
}

export default App;
