import { useEffect, useRef, useState } from "react"
import { useFormState } from "react-dom"
import axios from "axios";
import UserInput from "../components/UserInput"
import UserList from "../components/UserList"
import { Link } from "react-router-dom";

const Hello = () =>{

    // let cnt = 0;
    const[count,setCount] = useState(0)

    const increase = ()=>{
        setCount(count+1)
        console.log(count)
    }
    const decrease = ()=>{
        setCount(count-1)
        console.log(count)
    }
    // 삼항 연산자.
    let seen = 'test1'

    // 반복문
    let arr = [
         {text:'text1Text111'}
        ,{text:'text1Text122'}
        ,{text:'text1Text1131'}
    ]


    const userInput ={
        username :''
        ,email : ''
    }

    const [user,setUser] = useState(userInput)
    const [users,setUsers] = useState([])
    const nextId = useRef(0)

    const onChange =(e) =>{
        const {name,value} = e.target
        setUser({
            ...user
            ,[name] : value
        })
    }

    const onCreate = ()=>{

    const inputUser = {
        id:nextId.current
        ,username:user.username
        ,email:user.email
    }

        setUsers([
            ...users,
            ,inputUser
        ])

        setUser({
            username:''
            ,email:''
        })
        nextId.current++
    }

    const onRemove=(id) =>{
        setUsers(users.filter((obj)=> obj.id !== id))
    }


    const onLoard=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log("res : " + res)
            setUsers(res.data)
        })
    }

    useEffect(()=>{
        const axiosLoad = async()=>{
            const resData = await axios.get('https://jsonplaceholder.typicode.com/users')

            setUsers(resData.data)
        }
        axiosLoad()
    },[])


    const onSelect =(obj) =>{
        setUser(obj)
    }

    //update 구문이다. 
    //객체에 접근해서 객체 반복문 돌려서 돌리고 있는 객체를 리턴. 
    const onEdit = () =>{
        setUsers(users.map((obj)=>obj.id===user.id?{...obj,username:user.username,email:user.email}:obj))
    }
    

    return(<>
            <Link to='/test'>Test</Link>

            <h1>Hello React JS!!!</h1>
            <p>count : {count}</p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>


        {seen == false && <p>true 가 보입니다. </p>}

        {seen == false ? <p>true가 보입니다.</p> : <p>false 가 보입니다.</p>}

        {seen == 'test' ? <p>{seen}가 보입니다.</p> 
        : seen == 'test1' ? <p>{seen}가 보입니다.</p> :
        <p>false 가 보입니다.</p>}

        {arr.map((obj)=>(
            <li>{obj.text}</li>
        ))}

        <button onClick={onLoard}>데이터 로드</button>

        <UserInput
            user={user}
            onChange={onChange}
            onCreate={onCreate}
            onEdit={onEdit}
            />

        <UserList
            users={users}
            onRemove={onRemove}
            onSelect={onSelect}
            />
        
    </>)
}
export default Hello