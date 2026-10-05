import { useEffect, useState } from "react";
import api from "../services/api";
type User = {
  id: number;
  name: string;
  email: string;
};
function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await api.get<User[]>("/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Users
      </h1>
      {users.map((user) => (
        <div
          key={user.id}
          className="p-4 border rounded-lg mb-3"
        >
          <h2 className="font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
export default Users;