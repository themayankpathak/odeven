# odeven 🏏

Relive the hand cricket experience which defined school bus rides for an entire generation,
now against a computer, in your browser.

**Play it:** https://themayankpathak.github.io/odeven/

## How to play

You and the computer each throw a number. The batter scores their number,
unless both throw the same number: then the batter is **out**.

**Keys** (one key per number):

| Key | Q | A | W | S | E | D | Space |
|---|---|---|---|---|---|---|---|
| Runs | 1 | 2 | 3 | 4 | 5 | 6 | 10 |

- Click **Bowl** to start. Each ball gives you **3 seconds** to press a key; your last press counts.
- **Batting:** score your number, or get out if the computer matches it.
  Press nothing and it's a dot ball.
- **Bowling:** your key is your ball. Match the computer's number to get it out.
  Press nothing and it scores freely.
- **Single wicket, unlimited overs.** When you're out, the computer chases your score + 1.
- **3 balls in a row without pressing a key: forfeit.**
- House rule: if the computer gets out exactly level with your score, **the computer wins**.

Full rules and the reasoning behind them: [rules.md](rules.md)

## Status

- ✅ Full match: your innings, innings break, the computer's chase, the result
- ⏳ Next: the toss (odd or even decides who bats first), play again
- 🔜 Then: a computer that **learns your patterns**:
  1. **Ball log:** every ball recorded as data
  2. **Counting baseline:** predicts your next throw from how often you've played each number
  3. **Neural network** (TensorFlow.js): predicts your next throw from your recent throws and the match situation
- Measured honestly: a random bowler gets you out 1 time in 7 (about 14%);
  the AI has to beat that and the counting baseline.

## Built with

Plain HTML, CSS and JavaScript. No frameworks.


## Files

| File | Purpose |
|---|---|
| `index.html` | the page |
| `style.css` | dark theme |
| `game.js` | the game logic (to be split into topic files next) |
| `rules.md` | rules and design decisions |
| `devlog.md` | day-by-day development log |
