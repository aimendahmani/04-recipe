function Header (){
return (
    <header className="main_header">
        <div className="text-container">
          <h1 className="header-title">
            Look for <span>banger</span> Food
          </h1>
          <p className="header-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe odio aperiam voluptatibus itaque rem soluta sit ex quas est amet?

          </p>
          <div className="header-input-container">
            <input type="text" name="" id="" placeholder='find a recipe' />
            <button>search</button>
          </div>
        </div>
        <div>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/how-to-make-french-toast-1589827448.jpg?crop=0.734xw:0.490xh;0.0897xw,0.323xh&resize=1200:*"
          alt=""
          className="main_img"
        />
      </div>
      </header>
)
}
export default Header