import React from 'react'

export const GuessInput = ({ handleGuessSubmit, gameFinishes }) => {
	const [value, setValue] = React.useState('')

	function handleSubmit(e) {
		e.preventDefault()
		handleGuessSubmit(value)
		setValue('')
	}
	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>

			<input
				id="guess-input"
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value.toUpperCase())}
				pattern="[a-zA-Z]{5}"
				title="5 letter word"
				minLength={5}
				maxLength={5}
				disabled={gameFinishes}
			/>
		</form>
	)
}
