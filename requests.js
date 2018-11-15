const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    const data = await response.json()
    const newPuzzle = await data.puzzle
    return newPuzzle
}