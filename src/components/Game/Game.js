import React from 'react'

import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { WORDS } from '../../data'
import { sample } from '../../utils'
import { Banner } from './Banner'
import { GuessInput } from './GuessInput'
import { GuessResult } from './GuessResult'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
	const [guesses, setGuesses] = React.useState([])
	const [gameStatus, setGameStatus] = React.useState('running')

	function handleGuessSubmit(newGuess) {
		const newArr = [...guesses, newGuess]
		setGuesses(newArr)

		if (newGuess === answer) {
			setGameStatus('won')
		} else if (newArr.length === NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost')
		}
	}

	return (
		<>
			<Banner
				state={gameStatus}
				answer={answer}
				totalGuesses={guesses.length}
			/>
			<GuessResult guesses={guesses} answer={answer} />

			<GuessInput
				handleGuessSubmit={handleGuessSubmit}
				gameFinishes={gameStatus === 'won' || gameStatus === 'lost'}
			/>
		</>
	)
}

export default Game
