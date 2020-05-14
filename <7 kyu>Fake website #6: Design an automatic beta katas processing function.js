function kataStatus(betaKata) {
  if(betaKata.issue > 0) {
    return "Beta Status:Waiting for issues to be resolved"
  }
  else if(betaKata.vote.length < 5) {
    return "Beta Status:Testing & feedback needed"
  }
  else if(betaKata.rank.length < 8) {
    return "Beta Status:Ranking feedback needed"
  }
  else if(betaKata.example == false && betaKata.random == true) {
    return "Beta Status:Example testcases needed"
  }
  else if(betaKata.example == true && betaKata.random == false) {
    return "Beta Status:Random testcases needed"
  }
  else if(betaKata.example == false && betaKata.random == false) {
    return "Beta Status:Example and random testcases needed"
  }
  else{
    let intVoteScore = betaKata.vote.reduce((a,b) => a + b, 0)
    let intAverageRank = Math.round(betaKata.rank.reduce((a,b) => a + b, 0) / betaKata.rank.length)
    let voteScore = intVoteScore.toString()
    let averageRank = intAverageRank.toString()
    return "Kata approved. vote scores:" + voteScore + ", rank:" + averageRank + "kyu"
  }
}
