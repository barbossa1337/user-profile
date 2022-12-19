import React, {useEffect, useState} from "react";
import axios from "axios";
import Name from "./Components/Name";
import PP from "./Components/PP";
import Info from "./Components/Info";
import Comment from "./Components/Comment";

function App() {
    const [user, setUser] = useState([]);
    const [image, setImage] = useState([]);
    const [comment, setComment] = useState([]);
    const [selectedData, setSelectedData] = useState("1");
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${selectedData}`)
            .then((result) => {
                setUser(result.data);
            }).catch((err) => console.error(err));
        axios.get(`https://jsonplaceholder.typicode.com/photos/${selectedData}`)
            .then((response) => {
                setImage(response.data);
            }).catch((err) => console.error(err));
        axios.get(`https://jsonplaceholder.typicode.com/comments/${selectedData}`)
            .then((res) => {
                setComment(res.data);
            }).catch((err) => console.error(err));
    }, [user, image, comment]);
    return (
        <div>
            <span className="text-primary border-bottom border-2 border-primary">Users</span>
            <select onChange={(e) => setSelectedData(e.target.value)} className="text-center fw-bold mx-auto" style={{width: "150px"}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <Name user={user}/>
            <PP image={image}/>
            <Info user={user}/>
            <Comment comment={comment}/>
        </div>
    );
}

export default App;
