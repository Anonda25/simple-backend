import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loderUseraData = useLoaderData();
    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const newUpdate = {name, email}
        console.log(newUpdate);
        fetch(`http://localhost:5000/users/${loderUseraData._id}`,{
             method:"PUT",
             headers:{
                "Content-Type": "application/json",
             },
             body:JSON.stringify(newUpdate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount){
                alert('Update is successFully')
                
            }
        })
    }

    return (
        <div>
            <h1>Update information of {loderUseraData.name}</h1>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loderUseraData?.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={loderUseraData?.email} />
                <br />
                <input type="submit" value="Update Now" />
            </form>
        </div>
    );
};

export default Update;