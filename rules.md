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
- 3 timed-out balls in a row: forfeit, the computer wins.
- The timer keeps running when the tab is hidden, so leaving the game leads to a forfeit.

## Between balls
- The result of each ball stays on screen until the next ball starts.
- Key presses between balls are ignored.
- Step 2: the player clicks Bowl to start each ball.
- Step 3 (planned): balls start automatically after a 2-second pause showing the result.
  Bowl is clicked once to start the innings. Needed for the forfeit rule to work.
- The Bowl button gives up keyboard focus when clicked, so Space (10 runs) cannot press it by accident.

## Match
- Single wicket, unlimited overs.
- A toss (odd or even) decides who bats first.
- First innings: the batter scores until out.
- Second innings: the other side chases the target (first innings score + 1)
  until they pass it or get out.
- Runs are added to the total only when a ball ends and the batter is not out.

## Ball history (the data the AI learns from)
- Every ball is recorded: key pressed, runs scored, out or not, score, target,
  balls faced, and whether it timed out.
- Timed-out balls are recorded but not used for training, since they are not
  a choice the player made.

## Progress
- Step 1 done: key input, pick shown on page.
- Step 2 done: one complete ball (countdown, computer's random pick, OUT / runs / dot ball).
- Step 3 next: full match (total, toss, both innings, chase, automatic balls, forfeit).

## Known limitations
- Some Ctrl combinations are browser shortcuts (Ctrl+W closes the tab and cannot be blocked).
  Use the game keys on their own.

## Design history
- First design used Shift combinations (Shift+Q = 1 … Shift alone = 10).
  Replaced with one key per number: simpler input, fewer edge cases.
- Space on a focused Bowl button started a new ball by accident; fixed by removing focus from the button on click.
