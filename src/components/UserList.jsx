const UserList = ({users,onRemove,onSelect})=>{


    return (<>
    
        {users.map((obj)=>(
                    <li><span onClick={()=> onSelect(obj)}>{obj.username}</span> : {obj.email}
                    
                        <button onClick={()=>onRemove(obj.id)}>삭제</button>
                    
                    </li>
                ))}
    
    </>)
}
export default UserList