import Searchbar from "./Searchbar";
import UserlistTable from "./UserlistTable";

export default function Userlist() {
  return (
    <section className="card users-container">
      <Searchbar />
      <UserlistTable />
    </section>
  );
}
