import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    //this is read section on the server site on the replex on the web site and read the proparty 
    const Loderusers = useLoaderData();
    const [users, setUsers]= useState(Loderusers)
    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount >0){
                alert(' delete sucessfully')
                const remaing = users.filter(user => user._id !== _id)
                setUsers(remaing)
            }
        })
    }
    return (
        <div>
            <h1>all user {users.length}</h1>
            <div>
                {
                    users.map(user => <p
                     key={user._id}
                     >
                        {user.name} : {user.email}  : {user._id}
                        <Link to={`/update/${user._id}`}>Update</Link>
                        <button onClick={() => handleDelete(user._id)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;