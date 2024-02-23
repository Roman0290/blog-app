import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://media.istockphoto.com/id/1128762382/photo/girl-ipreparing-a-bouquet-of-white-roses-before-putting-them-in-a-vase.jpg?s=612x612&w=0&k=20&c=w0cuAsn5x2o32x7q2NSivDgw24zjFLf0TAQQP3td8Dc=" alt="" className="sidebarImg" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi laudantium similique fuga numquam pariatur iste.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Catagoreis</span>
            <ul className="sidebarList">
                <li className="sidbarListItems">Life</li>
                <li className="sidbarListItems">Music</li>
                <li className="sidbarListItems">sport</li>
                <li className="sidbarListItems">style</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            <div className="sidebarSocial">
                <i className="sidbarIcon fa-brands fa-square-facebook"></i>
                <i className="sidbarIcon fa-brands fa-square-twitter"></i>
                <i className="sidbarIcon fa-brands fa-linkedin"></i>
            </div>
        </div>
        
    </div>
  )
}
