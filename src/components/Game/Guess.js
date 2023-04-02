import { checkGuess } from '../../game-helpers'
import { range } from '../../utils'

export const Guess = ({ value, answer }) => {
	const checkAns = checkGuess(value, answer)
	return (
		<p className="guess">
			{range(5).map((num) => (
				<Cell
					status={checkAns ? checkAns[num].status : undefined}
					letter={checkAns ? checkAns[num].letter : undefined}
					key={num}
				/>
			))}
		</p>
	)
}

function Cell({ letter, status }) {
	return <span className={status ? `cell ${status}` : 'cell'}>{letter}</span>
}
