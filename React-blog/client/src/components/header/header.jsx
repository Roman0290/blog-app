import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTittle">
            <span className="headerTittleSm">React Project</span>
            <span className="headerTittleLg">Blog</span>
        </div>
        <img 
        className="headerImg"
         src="https://as1.ftcdn.net/v2/jpg/06/26/54/02/1000_F_626540216_YFFSDWce4XFM5dxTb7oGKvmJq84nFX4H.jpg" 
         alt="background img" 
         />
    </div>
  )
}
