export const Banner = ({ state, answer, totalGuesses }) => {
	if (state === 'running') {
		return
	}

	if (state === 'won') {
		return (
			<div className="happy banner">
				<p>
					<strong>Congratulations!</strong> Got it in
					<strong>
						{' '}
						{totalGuesses} {totalGuesses === 1 ? 'guess' : 'guesses'}
					</strong>
					.
				</p>
			</div>
		)
	}

	return (
		<div className="sad banner">
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</div>
	)
}
