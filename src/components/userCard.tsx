import { Link } from "react-router-dom";
import type { User } from "../types/user";




const UserCard = ({ user, onEdit, onDelete }: { user: User; onEdit: any; onDelete: any }) => (
<div className="card">
<h3 className="card-title">{user.name}</h3>
<p><strong>Email:</strong>{user.email}</p>
<p><strong>Phone:</strong>{user.phone}</p>


<div className="card-actions">
<Link to={`/users/${user.id}`} className="btn small">View</Link>
<button className="btn small" onClick={() => onEdit(user)}>Edit</button>
<button className="btn small danger" onClick={() => onDelete(user)}>Delete</button>
</div>
</div>
);


export default UserCard;