# Rules and design decisions

## Controls
- Keys: Q = 1, A = 2, W = 3, S = 4, E = 5, D = 6, Space = 10.
- One key per number. No key combinations.
- Keys are read by physical position (`event.code`), so Caps Lock and keyboard language don't matter.
- Shift, Ctrl or Alt held alongside a game key are ignored: Shift+Q counts as 1.
- Any other key is ignored and does not change the current pick.
- Holding a key down does not count again: only fresh presses count (repeat events are ignored).
- Keys only count while a ball is in progress; before or after a ball they are ignored.

## One ball
- Each ball has a 3-second window. The latest valid key press in that window is the pick.
- If several game keys are pressed together, whichever press arrives last is the pick.
- The computer chooses its number at the start of the ball, from all seven values,
  before reading the player's input. It never sees the current throw.
- When the window ends, both numbers are revealed:
  - same number: the batter is out;
  - different: the batter scores their own pick.
- No valid key press in the window: dot ball (0 runs, not out).

## Innings
- The player clicks Bowl once to start the innings.
- Balls then follow automatically: the result stays on screen for 2.5 seconds,
  then the next ball starts.
- The Bowl button is disabled during the innings, so an extra click cannot start a ball early.
- The Bowl button gives up keyboard focus when clicked, so Space (10 runs) cannot press it by accident.
- The score shows total runs and balls faced, updated after every ball.
- Every ball counts as a ball faced: runs, dot ball or out.
- Runs are added to the total only when the batter scores (not on a dot ball or an out).
- The innings ends when the batter is out. The final score is shown.

## Forfeit
- 3 dot balls in a row: forfeit, the computer wins.
- "In a row" means consecutive: any scoring ball resets the count to 0.
- The timer keeps running when the tab is hidden, so leaving the game leads to a forfeit.
- A forfeit ends the whole match, not just the innings (to be wired up when the second innings exists).

## Match
- Single wicket, unlimited overs.
- A toss (odd or even) decides who bats first. (Planned, 3d. For now the player always bats first.)
- Second innings: the other side chases the target (first innings score + 1)
  until they pass it or get out. (Planned, 3c.)

## Open questions for 3c (to decide before building)
- When the computer bats: same number = computer out; otherwise the computer scores its own pick?
- Does the computer win the moment it passes the target, mid-innings?
- Tie: computer out with exactly the player's score. Tie, or super over?
- Player does not press while bowling: does the computer score freely? Does the forfeit rule apply?
- Innings break: automatic start after a pause, or a "Start 2nd innings" button?

## Ball history (the data the AI learns from)
- Every ball is recorded: key pressed, runs scored, out or not, score, target,
  balls faced, and whether it timed out.
- Timed-out balls are recorded but not used for training, since they are not
  a choice the player made.

## Progress
- Step 1 done: key input, pick shown on page.
- Step 2 done: one complete ball (countdown, computer's random pick, OUT / runs / dot ball).
- Step 3a done: running score and balls faced; the innings ends on OUT.
- Step 3b done: automatic balls with a 2.5-second pause; 3-dot-ball forfeit; Bowl disabled during the innings.
- Step 3c next: the computer bats and chases.

## Known limitations
- Some Ctrl combinations are browser shortcuts (Ctrl+W closes the tab and cannot be blocked).
  Use the game keys on their own.
- Reloading the page resets the match (a "play again" button is planned for 3e).

## Design history
- First design used Shift combinations (Shift+Q = 1 … Shift alone = 10).
  Replaced with one key per number: simpler input, fewer edge cases.
- Space on a focused Bowl button started a new ball by accident; fixed by removing focus from the button on click.
- First forfeit version counted total dot balls; changed to dot balls in a row (scoring resets the count).
