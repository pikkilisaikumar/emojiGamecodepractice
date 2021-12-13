// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {each, emojiImageClicked} = props
  const {id, emojiName, emojiUrl} = each
  const onClickEmoji = () => {
    emojiImageClicked(id)
  }
  return (
    <li className="list-itemone">
      <button type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
