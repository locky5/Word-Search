var exist = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (checkNeighbors(board, i, j, word)) {
                return true
            }
        }
    }

    return false

    function checkNeighbors(board, i, j, word) {
        if (!word.length) {
            return true
        }

        if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== word[0]) {
            return false
        }

        word = word.substring(1)
        console.log(word)
        let currentChar = board[i][j]

        board[i][j] = '0'

        let result = checkNeighbors(board, i + 1, j, word) || checkNeighbors(board, i - 1, j, word) || checkNeighbors(board, i, j + 1, word) || checkNeighbors(board, i, j - 1, word)

        board[i][j] = currentChar

        return result
    }
};
