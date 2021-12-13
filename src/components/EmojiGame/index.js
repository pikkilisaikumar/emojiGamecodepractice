/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {emoji: '', score: 0, topScore: 0, isTrue: true}

  emojiImageClicked = id => {
    const {emoji, score} = this.state
    if (emoji === id || score === 12) {
      this.setState({topScore: score, score: 0, isTrue: false})
    } else {
      this.setState({
        score: score + 1,
        emoji: id,
        isTrue: true,
      })
    }
  }

  render() {
    const {emojisList} = this.props
    const {score, topScore, isTrue} = this.state
    emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="background-one">
        <NavBar score={score} topScore={topScore} isTrue={isTrue} />
        <div className="unroderlistone">
          {isTrue ? (
            <ul className="unorderone">
              {emojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  each={each}
                  emojiImageClicked={this.emojiImageClicked}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard topScore={topScore} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
