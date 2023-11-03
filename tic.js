function createGame(game){
        const gameBoard = (function (){
                
            let boardOfGame = ['?','?','?','?','?','?','?','?','?'];
            
            
            const createBoard = function (){
                let j = 0;
                const place =  document.querySelectorAll('.place');     
                place.forEach((p) => {
                    p.innerHTML = "";
                })
                for (let i in boardOfGame){
                    const placeHolder = document.querySelector(`.holder${j + 1}`)
                    const userAction = document.createElement('div')
                    userAction.textContent = `${TTTGameBoard.boardOfGame[j]}`;
                    placeHolder.append(userAction);
                    j++;
                }
            }
            
            const piece1 = document.querySelector('.holder1');
            const piece2 = document.querySelector('.holder2');
            const piece3 = document.querySelector('.holder3');
            const piece4 = document.querySelector('.holder4');
            const piece5 = document.querySelector('.holder5');
            const piece6 = document.querySelector('.holder6');
            const piece7 = document.querySelector('.holder7');
            const piece8 = document.querySelector('.holder8');
            const piece9 = document.querySelector('.holder9');

            

            return{boardOfGame, createBoard, piece1, piece2, piece3, piece4, piece5, piece6, piece7, piece8, piece9};
    })();
    
    const gameController = (function (controller){
        //const start = () =>  {};
        //const end = () =>  {}};

        function setPiece(p){
            TTTGameBoard.boardOfGame[p] = "x" ;
            TTTGameBoard.createBoard();
            //testing
            console.log("Piece set")

            }


            
        return {setPiece}
    })();

    function createPlayer(player){

        const playerName = player;

        const playerStats = (function (){

            let playerScore = 0;

            const addScore = (point) => playerScore += point;

            return {addScore, playerScore};

        })();
        return {playerName, player, playerStats};
    }



    return {game, gameBoard, createPlayer, gameController};
};

//Creating game and player here
const ticTacToe = createGame("TicTacToe");
const fola = ticTacToe.createPlayer("fola");

// "TTT" means : TicTacToe
const TTTGameBoard = ticTacToe.gameBoard;
const TTTController = ticTacToe.gameController;

//functions to build game under here
TTTGameBoard.createBoard();
TTTGameBoard.piece1.addEventListener('click', function(){
    TTTController.setPiece(1-1);
})
TTTGameBoard.piece2.addEventListener('click', function(){
    TTTController.setPiece(2-1);
})
TTTGameBoard.piece3.addEventListener('click', function(){
    TTTController.setPiece(3-1);
})
TTTGameBoard.piece4.addEventListener('click', function(){
    TTTController.setPiece(4-1);
})
TTTGameBoard.piece5.addEventListener('click', function(){
    TTTController.setPiece(5-1);
})
TTTGameBoard.piece6.addEventListener('click', function(){
    TTTController.setPiece(6-1);
})
TTTGameBoard.piece7.addEventListener('click', function(){
    TTTController.setPiece(7-1);
})
TTTGameBoard.piece8.addEventListener('click', function(){
    TTTController.setPiece(8-1);
})
TTTGameBoard.piece9.addEventListener('click', function(){
    TTTController.setPiece(9-1);
})

//Tests



