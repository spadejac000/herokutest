@extends('layouts.app')

@section('content')

      <div class="entire-view">
        <div class="row">
          <div class="col-md-3">
              <form class="panel mt-5">
                <div>
                    <p class="howMuch">HOW MUCH?</p>
                    <input type="text" id="betAmount">
                </div>
                <button type="button" class="btn btn-warning" id="bet">Bet</button>
                <button type="button" class="btn btn-warning" id="deal">Deal</button>
                <button type="button" class="btn btn-warning" id="hit">Hit!</button>
                <button type="button" class="btn btn-warning" id="double-down">Double Down</button>
                <button type="button" class="btn btn-warning" id="split-button">Split</button>
                <button type="button" class="btn btn-warning" id="stand">Stand</button>
                <button type="button" class="btn btn-warning" id="replay">Replay</button>
                 <!-- Button trigger modal -->
                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter" id="instructions">
                    Instructions
                </button>
              </form>
          </div>
          <div class="col-md-9 card-table-top">
              <div class="youWin">
                <p class="mt-3">You Win!</p>
              </div>
              <div class="dealerWins">
                <p class="mt-3">Dealer Wins</p>
              </div>
              <div>
                <p class="youBusted">You Busted!</p>
              </div>
              <div class="nobodyWins">
                <p>NOBODY WINS!!!</p>
              </div>
              <div class="container usersMoney">
                <div class="row">
                  <div class="col-xs">
                    <div class="bet" id="bet1"></div>
                  </div>
                  <div class="col-xs">
                    <p class="equals">=</p>
                  </div>
                  <div class="col-xs">
                    <div class="amountOfMoney">{{$users->money}}</div>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md playerSide">
                    <h1 class="text-center playerLabel">Player</h1>
                    <div id="extraButtonsContainer"></div>
                    <div class="player1Box player"></div>
                    <div class="extraPlayerBox" id="extraPlayerBox">
                      <div class="splitButtonsContainer">
                          <button type="button" class="btn btn-warning" id="splitHitButton">Hit!</button>
                          <button type="button" class="btn btn-warning" id="splitDoubleDownButton">Double Down</button>
                          <button type="button" class="btn btn-warning" id="splitStandButton">Stand</button>
                      </div>
                    </div> 
                  </div>
                  <div class="col-md dealerSide">
                    <h1 class="text-center dealerLabel">Dealer</h1>
                    <div class="dealerCardBox" id="dealer"></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  
            <!-- Modal -->
        <div class="modal fade col-12" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered text-center" role="document">
            <div class="modal-content text-center">
              <div class="modal-header text-center">
                <h5 class="modal-title text-center display-4" id="exampleModalCenterTitle"><strong class="text-center">Instructions</strong></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <h2 class="text-center">THE PACK</h2>
                <p>The standard 52-card pack is used, but in most casinos several decks of cards are shuffled together. The six-deck game (312 cards) is the most popular. In addition, the dealer uses a blank plastic card, which is never dealt, but is placed toward the bottom of the pack to indicate when it will be time for the cards to be reshuffled. When four or more decks are used, they are dealt from a shoe (a box that allows the dealer to remove cards one at a time, face down, without actually holding one or more packs). For this version of Blackjack there is an infinite amount of decks being used to prevent any type of card counting.</p>
                <h2 class="text-center">OBJECT OF THE GAME</h2>
                <p>Attempt to beat the dealer by getting a count as close to 21 as possible, without going over 21.</p>
                <h2 class="text-center">CARD VALUES/SCORING</h2>
                <p>It is up to the player if an ace is worth 1 or 11. Face cards are 10 and any other card is its pip value.</p>
                <h2>BETTING</h2>
                <p>Before the deal begins, each player places a bet, in chips, in front of him in the designated area. Minimum and maximum limits are established on the betting, and the general limits are from $2 to $500. For this game the limits are from $5 to infinity.</p>
                <h2 class="text-center">THE DEAL</h2>
                <p>The dealer gives one card face up to the player in rotation clockwise, and then one card face up to himself. Another round of cards is then dealt face up to the player, but the dealer takes his second card face down. Thus, the player receives two cards face up, and the dealer receives one card face up and one card face down.</p>
                <h2>NATURALS</h2>
                <p>If a player's first two cards are an ace and a "ten-card" (a picture card or 10), giving him a count of 21 in two cards, this is a natural or "blackjack." If any player has a natural and the dealer does not, the dealer immediately pays that player one and a half times the amount of his bet. If the dealer has a natural, he immediately collects the bets of all players who do not have naturals, (but no additional amount). If the dealer and another player both have naturals, the bet of that player is a stand-off (a tie), and the player takes back his chips. If the dealer's face-up card is a ten-card or an ace, he looks at his face-down card to see if the two cards make a natural. If the face-up card is not a ten-card or an ace, he does not look at the face-down card until it is the dealer's turn to play.</p>
                <h2 class="text-center">THE PLAY</h2>
                <p>The player must decide whether to "stand" (not ask for another card) or "hit" (ask for another card in an attempt to get closer to a count of 21, or even hit 21 exactly). Thus, the player may stand on the two cards originally dealt him, or he may ask the dealer for additional cards, one at a time, until he either decides to stand on the total (if it is 21 or under), or goes "bust" (if it is over 21). In the latter case, the player loses and the dealer collects the bet wagered. The combination of an ace with a card other than a ten-card is known as a "soft hand," because the player can count the ace as a 1 or 11, and either draw cards or not. For example with a "soft 17" (an ace and a 6), the total is 7 or 17. While a count of 17 is a good hand, the player may wish to draw for a higher total. If the draw creates a bust hand by counting the ace as an 11, the player simply counts the ace as a 1 and continues playing by standing or "hitting" (asking the dealer for additional cards, one at a time).
                </p>
                <h2 class="text-center">THE DEALER'S PLAY</h2>
                <p>When the dealer has served every player, his face-down card is turned up. If the total is 17 or more, he must stand. If the total is 16 or under, he must take a card. He must continue to take cards until the total is 17 or more, at which point the dealer must stand. If the dealer has an ace, and counting it as 11 would bring his total to 17 or more (but not over 21), he must count the ace as 11 and stand. The dealer's decisions, then, are automatic on all plays, whereas the player always has the option of taking one or more cards.</p>
                <h2>THE DEALER'S PLAY</h2>
                <p>When the dealer has served every player, his face-down card is turned up. If the total is 17 or more, he must stand. If the total is 16 or under, he must take a card. He must continue to take cards until the total is 17 or more, at which point the dealer must stand. If the dealer has an ace, and counting it as 11 would bring his total to 17 or more (but not over 21), he must count the ace as 11 and stand. The dealer's decisions, then, are automatic on all plays, whereas the player always has the option of taking one or more cards.</p>
                <h2>SPLITTING PAIRS</h2>
                <p>If a player's first two cards are of the same denomination, such as two jacks or two sixes, he may choose to treat them as two separate hands when his turn comes around. The amount of his original bet then goes on one of the cards, and an equal amount must be placed as a bet on the other card. The player first plays the hand to his left by standing or hitting one or more times; only then is the hand to the right played. The two hands are thus treated separately, and the dealer settles with each on its own merits. With a pair of aces, the player is given one card for each ace and may not draw again. Also, if a ten-card is dealt to one of these aces, the payoff is equal to the bet (not one and one-half to one, as with a blackjack at any other time). For this game, only one split is allowed per initial deal.</p>
                <h2>DOUBLING DOWN</h2>
                <p>Another option open to the player is doubling his bet. When the player's turn comes, he places a bet equal to the original bet, and the dealer gives him just one card, which is placed face down and is not turned up until the bets are settled at the end of the hand. Note that the dealer does not have the option of splitting or doubling down.</p>
                <h2>SETTLEMENT</h2>
                <p>A bet once paid and collected is never returned. Thus, one key advantage to the dealer is that the player goes first. If the player goes bust, he has already lost his wager, even if the dealer goes bust as well. If the dealer goes over 21, he pays each player who has stood the amount of that player's bet. If the dealer stands at 21 or less, he pays the bet of any player having a higher total (not exceeding 21) and collects the bet of any player having a lower total. If there is a stand-off (a player having the same total as the dealer), no chips are paid out or collected.</p>
                <h2>BASIC STRATEGY</h2>
                <p>Winning tactics in Blackjack require that the player play each hand in the optimum way, and such strategy always takes into account what the dealer's upcard is. When the dealer's upcard is a good one, a 7, 8, 9, 10-card, or ace for example, the player should not stop drawing until a total of 17 or more is reached. When the dealer's upcard is a poor one, 4, 5, or 6, the player should stop drawing as soon as he gets a total of 12 or higher. The strategy here is never to take a card if there is any chance of going bust. The desire with this poor holding is to let the dealer hit and hopefully go over 21. Finally, when the dealer's up card is a fair one, 2 or 3, the player should stop with a total of 13 or higher.

                    With a soft hand, the general strategy is to keep hitting until a total of at least 18 is reached. Thus, with an ace and a six (7 or 17), the player would not stop at 17, but would hit.
                    
                    The basic strategy for doubling down is as follows: With a total of 11, the player should always double down. With a total of 10, he should double down unless the dealer shows a ten-card or an ace. With a total of 9, he should double down only if the dealer's card is fair or poor (2 through 6).
                    
                    For splitting, the player should always split a pair of aces or 8s; identical ten-cards should not be split, and neither should a pair of 5s, since two 5s are a total of 10, which can be used more effectively in doubling down. A pair of 4s should not be split either, as a total of 8 is a good number to draw to. Generally, 2s, 3s, or 7s can be split unless the dealer has an 8, 9, ten-card, or ace. Finally, 6s should not be split unless the dealer's card is poor (2 through 6).</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <audio id='deal-audio' src="audio/deal.mp3"></audio>
        <audio id='shuffle-audio' src="audio/shuffle.mp3"></audio>
        <audio id='coins-audio' src="audio/coins.mp3"></audio>
        <audio id='win-audio' src="audio/win.mp3"></audio>
        <audio id='tie-audio' src="audio/tie.wav"></audio>
        <audio id='lose-audio' src="audio/lose.wav"></audio>

<!-- audio credit goes to: http://www.freesfx.co.uk -->
       
@endsection
