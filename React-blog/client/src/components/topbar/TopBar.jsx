import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
  const user =false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topicon fa-brands fa-square-facebook"></i>
        <i className="topicon fa-brands fa-square-twitter"></i>
        <i className="topicon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className="toplist">
          <li className="topListItem">
            <Link className="link" to="/" >Home</Link>
          </li>
          <li className="topListItem"><Link className="link" to="/" >About</Link></li>
          <li className="topListItem"><Link className="link" to="/" >Contact</Link></li>
          <li className="topListItem"><Link className="link" to="/write" >Write</Link></li>
          <li className="topListItem"><Link className="link" to="/" >{user && "Logout"}</Link></li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ?(
            <img className="topImg" src="https://media.istockphoto.com/id/966858802/photo/child-profile-and-ai-concept.jpg?s=612x612&w=is&k=20&c=NIUwCf84U28y8BIbwSrE9YzGJjCrZf832Svg1enmtbs=" alt="image" />
          ):(
            <ul className="toplist">
              <li className="topListItem"><Link className="link" to="/login" >Login</Link></li>
              <li className="topListItem"><Link className="link" to="/register" >Register</Link></li>
            </ul>
          )
        }
        
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
