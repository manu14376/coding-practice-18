/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojisList: [],
    gameResult: '',
  }

  finishGame = () => {
    const {clickedEmojisList, score, topScore} = this.state
    if (clickedEmojisList.length === 11) {
      this.setState({gameResult: 'You Won', topScore: score + 1})
    } else {
      if (score > topScore) {
        this.setState({gameResult: 'You Lose', topScore: score})
      }
      this.setState({gameResult: 'You Lose'})
    }
  }

  emojiClick = id => {
    const {clickedEmojisList} = this.state
    const isClickedBefore = clickedEmojisList.includes(id)
    if (isClickedBefore) {
      this.finishGame()
    } else {
      if (clickedEmojisList.length === 11) {
        this.finishGame()
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        score: prevState.score + 1,
      }))
    }
  }

  gameRestartBtn = () => {
    this.setState({gameResult: '', score: 0, clickedEmojisList: []})
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const shuffledList = shuffledEmojisList()
    const {score, topScore, gameResult} = this.state
    return (
      <div className="emojis-container">
        <NavBar score={score} topScore={topScore} />
        <ul className="emojisList">
          {gameResult === '' &&
            shuffledList.map(each => (
              <EmojiCard
                details={each}
                key={each.id}
                emojiClick={this.emojiClick}
              />
            ))}
          {gameResult !== '' && (
            <WinOrLoseCard
              details={gameResult}
              topScore={topScore}
              score={score}
              gameRestartBtn={this.gameRestartBtn}
            />
          )}
        </ul>
      </div>
    )
  }
}
export default EmojiGame
