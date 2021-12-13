// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {topScore} = props
  let vani
  if (topScore === 12) {
    vani = (
      <div className="containerwhole">
        <div>
          <h1 className="youwonheading">You Won</h1>
          <div className="containerone">
            <h1 className="bestscore">Best Score</h1>
            <h1>{topScore}/12</h1>
          </div>
          <button type="button">Play Again</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="won-game"
          className="won-gameclass"
        />
      </div>
    )
  } else {
    vani = (
      <div className="containerwhole">
        <div>
          <h1 className="youwonheading">You Won</h1>
          <div className="containerone">
            <h1 className="bestscore">Best Score</h1>
            <h1>{topScore}/12</h1>
          </div>
          <button type="button">Play Again</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="won-game"
          className="won-gameclass"
        />
      </div>
    )
  }
  return {vani}
}

export default WinOrLoseCard
