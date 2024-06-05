import { useState } from "react"
import "./Login.scss"
const Login = () => {
    const [username,setUsername]= useState("")
    const [password,setPassword]= useState("")
    return (
        <>
            <section className="login">
                <div className="container">
                    <form>
                        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Login