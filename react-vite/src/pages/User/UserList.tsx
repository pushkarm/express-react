import { User } from "./User.model";
import { useUserList } from "./useUserList";

const userNotFound = (users: User[]) => {
  if (users.length == 0) {
    return <tr><td colSpan={5}>No result.</td></tr>
  } else {
    return <></>
  }
}

export const UserList = () => {

    const { search, searchAll, users, handleChange, handleChangeAll } = useUserList();
    return (
        <>
          <div style={{'padding': '2em'}}>
            <div style={{"display": 'flex'}}>
              <div>
                Search By Name:
                <input type='text' onChange={handleChange} value={search}></input>
              </div>
              <div>
                Search All:
                <input type='text' onChange={handleChangeAll} value={searchAll}></input>
              </div>
            </div>
            
            <table className='table'>
              <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Account Number</th>
                </tr>
              </thead>
              <tbody>
              {users.map(u => 
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.phoneNumber}</td>
                  <td>{u.address}</td>
                  <td>{u.accountNumber}</td>
                </tr>
              )}

              {userNotFound(users)}
              </tbody>
            </table>
          </div>
        </>
      );

}