import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img 
        className="writeImg"
        src="https://w0.peakpx.com/wallpaper/670/354/HD-wallpaper-enjoying-the-wind-fence-brunette-tree-woman.jpg" 
        alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput"/>
                <input type="text" className="writeInput" placeholder="Title" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea className="writeInput writeText" type="text" placeholder="Tell your story..."></textarea>
            </div>
            <button className="writeSubmit">Publish</button>

        </form>
    </div>
  )
}
