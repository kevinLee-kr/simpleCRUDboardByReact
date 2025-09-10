const UserInput = ({user,onChange,onCreate,onEdit})=>{





    return(<>
        <p>username : <input type="text" name="username" value={user.username} onChange={onChange}/></p>
        <p>email : <input type="text" name="email" value={user.email} onChange={onChange}/></p>


        <button onClick={onCreate}>생성</button><button onClick={onEdit}>수정</button>
        
    
    </>)
}
export default UserInput