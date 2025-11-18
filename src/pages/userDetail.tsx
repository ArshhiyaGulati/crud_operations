import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import type { User } from "../types/user";





const UserDetail = () => {
const { id } = useParams();
const [user, setUser] = useState<User | null>(null);


useEffect(() => {
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
.then(res => res.json())
.then(setUser);
}, [id]);


if (!user) return <p>Loading...</p>;


return (
<div>
<Link className="btn" to="/">← Back</Link>
<h2>{user.name}</h2>
<p>{user.email}</p>
<p>{user.phone}</p>
</div>
);
};


export default UserDetail;


