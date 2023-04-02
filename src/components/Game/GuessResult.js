import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils'
import { Guess } from './Guess'

export const GuessResult = ({ guesses, answer }) => {
	return (
		<div className="guess-results">
			{range(NUM_OF_GUESSES_ALLOWED).map((num) => {
				return <Guess key={num} value={guesses[num]} answer={answer} />
			})}
		</div>
	)
}
