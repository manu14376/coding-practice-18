// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, emojiClick} = props
  const {id, emojiName, emojiUrl} = details
  const clicked = () => {
    emojiClick(id)
  }
  return (
    <li className="emoji-card">
      <button type="button" className="button" onClick={clicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji-btn" />
      </button>
    </li>
  )
}
export default EmojiCard
