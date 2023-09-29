const rpsScore = JSON.parse(localStorage.getItem('rpsScore')) || {
    wins: 0,
    losses: 0,
    ties: 0,
    currentWinStreak: 0,
    longestWinStreak: 0
};
function rpsScoreUpdate() {
    document.querySelector('#rps-scoreText').innerHTML = `Wins: ${rpsScore.wins}, Losses: ${rpsScore.losses},  Ties: ${rpsScore.ties},
    <br> Current Win Streak: ${rpsScore.currentWinStreak}, Longest Win Streak: ${rpsScore.longestWinStreak}`;
}
function hotScoreUpdate() {
    document.querySelector('#hot-scoreText').innerHTML = `Wins: ${hotScore.wins}, Losses: ${hotScore.losses},
    <br> Current Win Streak: ${hotScore.currentWinStreak} Longest Win Streak: ${hotScore.longestWinStreak}`;
}
const filePath = "/Milad's%20Games/"
window.onload = function(){
    if (window.location.pathname === filePath + "rps.html"){
        rpsScoreUpdate();
    } else if(window.location.pathname === filePath + "hot.html") {
        hotScoreUpdate();
    }
}
function rps(humanPick) {
    if (humanPick === 'reset') {
        rpsScore.wins = 0;
        rpsScore.losses = 0;
        rpsScore.ties = 0;
        rpsScore.currentWinStreak = 0;
        rpsScore.longestWinStreak = 0;
        localStorage.removeItem("rpsScore");
        rpsScoreUpdate();
        document.querySelector('#rps-resultText').innerHTML = '';
        document.querySelector('#rps-pickedWhatText').innerHTML = '';
    }
    else{
        let computerPick;
        let result;
        let humanResult;
        let computerResult;
        const picks = ['rock', 'paper', 'scissors'];
        const winText = 'Won';
        const lostText = 'Lost';
        const tieText = 'Tied';

        computerPick = picks[Math.floor(Math.random() * picks.length)]
        

        if (computerPick === 'rock'){
            computerResult = '-fist';
        } else if (computerPick === 'paper'){
            computerResult = ' ';
        } else{
            computerResult = '-peace';
        }
        if (humanPick === 'rock'){
            humanResult = '-fist';
        } else if (humanPick === 'paper'){
            humanResult = ' ';
        } else{
            humanResult = '-peace';
        }
        
        if (humanPick === computerPick) {
            result = tieText;
        } else{
            if (humanPick === 'rock') {
                if (computerPick === 'paper'){
                    result = lostText;
                } else{
                    result = winText;
                }
                } else if (humanPick === 'paper') {
                    if (computerPick === 'scissors'){
                        result = lostText;
                    } else{
                        result = winText;
                    }
                } else{
                    if (computerPick === 'rock'){
                        result = lostText;
                    } else{
                        result = winText;
                    }
                }
            }

            if (result === winText){
                rpsScore.wins++;
                rpsScore.currentWinStreak++;
            }else if (result === lostText) {
                rpsScore.losses++;
                rpsScore.currentWinStreak = 0;
            }else {
                rpsScore.ties++;
            }

            if (rpsScore.currentWinStreak > rpsScore.longestWinStreak) {
                rpsScore.longestWinStreak = rpsScore.currentWinStreak;
            }

            localStorage.setItem("rpsScore", JSON.stringify(rpsScore))

            document.querySelector('#rps-resultText').innerHTML = 'You ' + result;
            document.querySelector('#rps-pickedWhatText').innerHTML = `You <i class="fa-solid rps-scoreText-icon fa-hand${humanResult}"></i> <i class="fa-solid rps-scoreText-icon fa-hand${computerResult}"></i> Computer`;
            rpsScoreUpdate();
        }
    }


const hotScore = JSON.parse(localStorage.getItem('hotScore')) || {
    wins: 0,
    losses: 0,
    currentWinStreak: 0,
    longestWinStreak: 0
};

function hot(humanPick) {
    if (humanPick === 'reset') {
        hotScore.wins = 0;
        hotScore.losses = 0;
        hotScore.currentWinStreak = 0;
        hotScore.longestWinStreak = 0;
        localStorage.removeItem('hotScore');
        hotScoreUpdate();
    } else {
        const picks = ['heads', 'tails']
        const winText = 'Won';
        const lossText = 'Lost';
        let result;
        let humanResult;
        let computerResult;

        if (Math.random() < 0.5) {
            computerWinner = picks[0];
            computerResult = '<img src="Images/hot-heads.png" alt="heads" class="Small-Game-Img"></img>';
        } else {
            computerWinner = picks[1];
            computerResult = '<img src="Images/hot-tails.png" alt="tails" class="Small-Game-Img" id="small-tails-size">'
        };

        if (humanPick === picks[0]) {
            humanResult = '<img src="Images/hot-heads.png" alt="heads" class="Small-Game-Img"></img>';
        } else{
            humanResult = '<img src="Images/hot-tails.png" alt="tails" class="Small-Game-Img" id="small-tails-size">';
        }

        if (computerWinner === humanPick) {
            result = winText;
            hotScore.wins ++;
            hotScore.currentWinStreak ++;
        } else {
            result = lossText;
            hotScore.losses++;
            hotScore.currentWinStreak = 0;
        };

        if (hotScore.currentWinStreak > hotScore.longestWinStreak) {
            hotScore.longestWinStreak = hotScore.currentWinStreak;
        }

        localStorage.setItem('hotScore', JSON.stringify(hotScore));

        document.querySelector('#hot-resultText').innerHTML = 'You ' + result;
        document.querySelector('#hot-pickedWhatText').innerHTML = `You ${humanResult}  ${computerResult} Computer`;
        hotScoreUpdate();
};
};
