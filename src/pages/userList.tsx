import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import Confirm from "../components/confirm";
import type { User } from "../types/user";
import UserCard from "../components/userCard";

const API = "https://jsonplaceholder.typicode.com/users";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [deleteUser, setDeleteUser] = useState<User | null>(null);

  useEffect(() => {
    load();
  }, []);
//when i was running the website , the jsonPlaceholder was not working and showinh error 500 , so i added a fallback mock data
//if jsonPlaceholder is working then it will fetch data from there only 
//this error took more of my time than the whole code.
  const load = async () => {
  try {
    const res = await fetch(API);

    if (!res.ok) throw new Error("API failed");

    const data = await res.json();
    setUsers(data);
    setLoading(false);

  } catch (err) {
    console.warn("JSONPlaceholder failed. Using fallback mock data.");

    const fallback = [
      { id: 1, name: "Leanne Graham", email: "leanne@example.com", phone: "123-456" },
      { id: 2, name: "Ervin Howell", email: "ervin@example.com", phone: "987-654" },
      {
    "id": 102,
    "name": "Ishita Verma",
    "email": "ishita.verma@example.com",
    "phone": "9988776655"
  },
  { "id": 108,
    "name": "Saanvi Sharma",
    "email": "saanvi.sharma@example.com",
    "phone": "8999776655"
  },
  {
    "id": 109,
    "name": "Kabir Khurana",
    "email": "kabir.khurana@example.com",
    "phone": "9877012345"
  },
    ];

    setUsers(fallback);
    setLoading(false);
  }
};


  const create = (data: Partial<User>) => {
    setUsers([{ id: Date.now(), ...data } as User, ...users]);
    setShowForm(false);
  };

  const update = (data: Partial<User>) => {
    setUsers(
      users.map((u) =>
        u.id === editUser!.id ? { ...u, ...data } : u
      )
    );
    setEditUser(null);
  };

  const remove = () => {
    setUsers(users.filter((u) => u.id !== deleteUser!.id));
    setDeleteUser(null);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <button className="btn" onClick={() => setShowForm(true)}>
        Add User
      </button>

      <div className="grid">
        {users.map((u) => (
          <UserCard
            key={u.id}
            user={u}
            onEdit={setEditUser}
            onDelete={setDeleteUser}
          />
        ))}
      </div>

      <UserForm
        open={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={create}
      />

      <UserForm
        open={!!editUser}
        initial={editUser}
        onClose={() => setEditUser(null)}
        onSubmit={update}
      />

      <Confirm
        open={!!deleteUser}
        user={deleteUser}
        onCancel={() => setDeleteUser(null)}
        onConfirm={remove}
      />
    </div>
  );
};

export default UsersList;

