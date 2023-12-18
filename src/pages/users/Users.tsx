import { useSelector } from "react-redux"
import { usersState } from "store/redux/users/selectors"
import { Card, UsersWrapper } from "./styles"

function Users() {
  const usersArr = useSelector(usersState)

  const userCard = usersArr.users.map((user) => {
    return (
      <Card>      
        <li>First and last names: {user.firstLastName}</li>
        <li>Age: {user.age}</li>
        <li>Job title: {user.jobTitle}</li>
      </Card>
    )  
  })

  return (    
    <UsersWrapper>      
      {userCard}      
    </UsersWrapper>
  )
}

export default Users
