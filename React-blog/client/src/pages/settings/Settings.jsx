import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form  className="settingForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img className="settingsImg" src="https://w0.peakpx.com/wallpaper/670/354/HD-wallpaper-enjoying-the-wind-fence-brunette-tree-woman.jpg" alt="img" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file"  id="fileInput" />
                </div>
                <label >Username</label>
                <input type="text" placeholder="Romeo" />
                <label >Email</label>
                <input type="email" placeholder="romeo@gmail.com" />
                <label >Password</label>
                <input type="password"  />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
