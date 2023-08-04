// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props
  return (
    <div className="nav-container">
      <div className="game-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      <div className="game-details">
        <p className="game-name">Score: {score}</p>
        <p className="game-name">Top Score: {topScore}</p>
      </div>
    </div>
  )
}
export default NavBar
