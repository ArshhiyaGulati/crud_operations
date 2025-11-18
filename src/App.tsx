import { Routes, Route, Link } from "react-router-dom";
import UsersList from "./pages/userList";
import UserDetail from "./pages/userDetail";

const App = () => {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Users CRUD</h1>
        <nav><Link to="/" className="nav-link">Home</Link></nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
