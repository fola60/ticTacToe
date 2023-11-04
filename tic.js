function createGame(game){
        const gameBoard = (function (){
                
            let boardOfGame = ['','','','','','','','',''];
            
            
            const createBoard = function (){
                let j = 0;
                let k = 0;
                const place =  document.querySelectorAll('.place');     
                place.forEach((p) => {
                    p.innerHTML = "";
                })
                for (let i in boardOfGame){
                    const placeHolder = document.querySelector(`.holder${j + 1}`)
                    const userAction  = document.createElement('div'); 
                    userAction.textContent = `${TTTGameBoard.boardOfGame[j]}`;
                    placeHolder.append(userAction);
                    // for (let n in boardOfGame){
                    //     if(n != "x" || n != "o"){
                    //     userAction.classList.add('invisible');
                    //     }else{
                    //         userAction.id = 'visible';
                    //         console.log("useract")
                    //     }
                    // }
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
        const submit = document.getElementById('submitBtn');
        const start = document.querySelector('.start-button');
        const userEntry = document.querySelector('.player-hub');
        const player1Score = document.querySelector('.player1-score');
        const player2Score = document.querySelector('.player2-score');
        function setPiece(p){
            
            TTTGameBoard.createBoard();
            //testing
            console.log("Piece set");
            if (player1.playerTurn == true && TTTGameBoard.boardOfGame[p] == ''){
                console.log("working");
                TTTGameBoard.boardOfGame[p] = "x" ;
                player1.playerTurn = false;
                player2.playerTurn = true;
            }else if(player2.playerTurn == true && TTTGameBoard.boardOfGame[p] == ''){
                console.log("working2");
                TTTGameBoard.boardOfGame[p] = "o" ;
                player2.playerTurn = false;
                player1.playerTurn = true;
            }
            TTTGameBoard.createBoard();

            console.log("Piece set");
            if (player1.playerTurn == true && TTTGameBoard.boardOfGame[p] == ''){
                console.log("working");
                TTTGameBoard.boardOfGame[p] = "x" ;
                player1.playerTurn = false;
                player2.playerTurn = true;
            }else if(player2.playerTurn == true && TTTGameBoard.boardOfGame[p] == ''){
                console.log("working2");
                TTTGameBoard.boardOfGame[p] = "o" ;
                player2.playerTurn = false;
                player1.playerTurn = true;
            }

            TTTGameBoard.createBoard();

            if(TTTGameBoard.boardOfGame[0] == "x" && TTTGameBoard.boardOfGame[1] == "x" && TTTGameBoard.boardOfGame[2] == "x"){
                player1Win();
            }else if(TTTGameBoard.boardOfGame[3] == "x" && TTTGameBoard.boardOfGame[4] == "x" && TTTGameBoard.boardOfGame[5] == "x"){
                player1Win();
            }else if(TTTGameBoard.boardOfGame[6] == "x" && TTTGameBoard.boardOfGame[7] == "x" && TTTGameBoard.boardOfGame[8] == "x"){
                player1Win();
            }else if (TTTGameBoard.boardOfGame[0] == "x" && TTTGameBoard.boardOfGame[3] == "x" && TTTGameBoard.boardOfGame[6] == "x"){
                player1Win();
            }else if (TTTGameBoard.boardOfGame[1] == "x" && TTTGameBoard.boardOfGame[4] == "x" && TTTGameBoard.boardOfGame[7] == "x"){
                player1Win();
            }else if (TTTGameBoard.boardOfGame[2] == "x" && TTTGameBoard.boardOfGame[5] == "x" && TTTGameBoard.boardOfGame[8] == "x"){
                player1Win();
            }else if (TTTGameBoard.boardOfGame[0] == "x" && TTTGameBoard.boardOfGame[4] == "x" && TTTGameBoard.boardOfGame[8] == "x"){
                player1Win();
            }else if (TTTGameBoard.boardOfGame[2] == "x" && TTTGameBoard.boardOfGame[4] == "x" && TTTGameBoard.boardOfGame[6] == "x"){
                player1Win();
            }

            if(TTTGameBoard.boardOfGame[0] == "o" && TTTGameBoard.boardOfGame[1] == "o" && TTTGameBoard.boardOfGame[2] == "o"){
                player2Win();
            }else if(TTTGameBoard.boardOfGame[3] == "o" && TTTGameBoard.boardOfGame[4] == "o" && TTTGameBoard.boardOfGame[5] == "o"){
                player2Win();
            }else if(TTTGameBoard.boardOfGame[6] == "o" && TTTGameBoard.boardOfGame[7] == "o" && TTTGameBoard.boardOfGame[8] == "o"){
                player2Win();
            }else if (TTTGameBoard.boardOfGame[0] == "o" && TTTGameBoard.boardOfGame[3] == "o" && TTTGameBoard.boardOfGame[6] == "o"){
                player2Win();
            }else if (TTTGameBoard.boardOfGame[1] == "o" && TTTGameBoard.boardOfGame[4] == "o" && TTTGameBoard.boardOfGame[7] == "o"){
                player2Win();
            }else if (TTTGameBoard.boardOfGame[2] == "o" && TTTGameBoard.boardOfGame[5] == "o" && TTTGameBoard.boardOfGame[8] == "o"){
                player2Win();
            }else if (TTTGameBoard.boardOfGame[0] == "o" && TTTGameBoard.boardOfGame[4] == "o" && TTTGameBoard.boardOfGame[8] == "o"){
                player2Win();
            }else if (TTTGameBoard.boardOfGame[2] == "o" && TTTGameBoard.boardOfGame[4] == "o" && TTTGameBoard.boardOfGame[6] == "o"){
                player2Win();
            }


            }
            

            
        return {setPiece,submit,start,userEntry,player1Score,player2Score};
    })();

    function createPlayer(player){

        const playerName = player;

        
        const playerTurn = false;

        const playerStats = (function (){

            let playerScore = 0;

            const addScore = (point) => playerScore += point;

            return {addScore, playerScore};

        })();
        return {playerName, player, playerStats,playerTurn};
    }



    return {game, gameBoard, createPlayer, gameController};
};
//Stop page reload
function reload(){

    
    

    return false;
}



//Creating game and player here
const ticTacToe = createGame("TicTacToe");
const fola = ticTacToe.createPlayer("fola");



// "TTT" means : TicTacToe
const TTTGameBoard = ticTacToe.gameBoard;
const TTTController = ticTacToe.gameController;

//functions to build game under here
//TTTGameBoard.createBoard();

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

let player1 = ticTacToe.createPlayer(document.getElementById('player1Name').value);
let player2 = ticTacToe.createPlayer(document.getElementById('player2Name').value);

TTTController.submit.addEventListener('click',function submission(){
    let player1 = ticTacToe.createPlayer(document.getElementById('player1Name').value);
    let player2 = ticTacToe.createPlayer(document.getElementById('player2Name').value);
    TTTController.userEntry.removeAttribute('id','visible');
    const player1Div = document.createElement('div');
    const player2Div = document.createElement('div');
    player1Div.textContent = `${player1.playerName} score is : `
    player2Div.textContent = `${player2.playerName} score is : `
    TTTController.player1Score.append(player1Div);
    TTTController.player2Score.append(player2Div);
    console.log(player1);
    console.log(player2);
});
function start(){
    TTTController.userEntry.setAttribute('id','visible');
}
TTTController.start.addEventListener('click', start)
//Tests
console.log(document.getElementsByClassName('start-button'))
player1.playerTurn = true;
console.log(player1)

