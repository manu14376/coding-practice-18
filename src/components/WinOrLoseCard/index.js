// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {details, topScore, score, gameRestartBtn} = props
  const imgUrl =
    details === 'You Won'
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const playAgain = () => {
    gameRestartBtn()
  }
  const displayText = score >= topScore ? 'Best Score' : 'Score'
  const imgAlt = details === 'You Won' ? 'win' : 'lose'
  return (
    <div className="gameResultCard">
      <div>
        <h1 className="gameResult-heading">{details}</h1>
        <p className="bestScore-heading">{displayText}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="playAgainBtn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt={imgAlt} />
    </div>
  )
}
export default WinOrLoseCard
