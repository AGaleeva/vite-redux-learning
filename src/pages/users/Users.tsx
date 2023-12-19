import { useSelector, useDispatch } from "react-redux"
import {usersActions} from 'store/redux/users/userSlice'
import { usersState } from "store/redux/users/selectors"
import { Card, UsersWrapper } from "./styles"
import Button from "components/button";
import { User } from "store/redux/users/types"
import { v4 } from 'uuid';

function Users() {
  const usersArr = useSelector(usersState)
  const dispatch = useDispatch()

  // console.log(v4());
  // console.log(crypto.randomUUID);
  
  return (
     <UsersWrapper>
      {usersArr.map((user: User) => (
      <Card key={v4()}>
        <li>{`First and last names: ${user.firstLastName}`}</li>
        <li>{`Age: ${user.age}`}</li>
        <li>{`Job title: ${user.jobTitle}`}</li>
        <Button name="Delete user" type="button" onClick={() => {
          dispatch(usersActions.deleteUser(user.id))
        }} />        
      </Card>
    ))}
   {usersArr.length > 0 && <Button name="Delete all users" onClick={() => {
      dispatch(usersActions.deleteAllUsers())
   }} />}
    </UsersWrapper>
  )  
}


// function Users() {
//   const usersArr = useSelector(usersState)

//   const userCard = usersArr.users.map((user) => {
//     return (
//       <Card>
//         <li>First and last names: {user.firstLastName}</li>
//         <li>Age: {user.age}</li>
//         <li>Job title: {user.jobTitle}</li>
//       </Card>
//     )
//   })

//   return <UsersWrapper>{userCard}</UsersWrapper>
// }

export default Users
