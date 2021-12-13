// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, isTrue} = props
  return (
    <div className="navcontainerone">
      <nav className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emojigameheading">Emoji Game</h1>
      </nav>
      <div className="scorecontainerone">
        {isTrue && <p className="scoreparagraph">Score: {score}</p>}
        {isTrue && <p className="topscore">Top Score: {topScore}</p>}
      </div>
    </div>
  )
}

export default NavBar
