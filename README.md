# Dead by Daylight Quiz

> *"You can't escape the fog."*

A browser-based trivia game for Dead by Daylight fans. Test your knowledge of survivors, killers, lore, and game facts across 10 randomized questions. How well do you know the Entity's realm?

![Mock-up Screenshot](assets/screenshots/Mock-up-screenshot.JPG)

[Play Now](https://timothyyw.github.io/Dead-by-daylight-quiz/)

---

## About

This quiz challenges your Dead by Daylight knowledge across survivors, killers, chapters, and lore. Questions shuffle every run so no two trials are alike. Your final score determines whether you are worthy of the Entity's recognition — or just another soul lost in the fog.

---

## Features

### The Fog — Home Screen

The landing page sets the atmosphere with the game's iconic dark background. An instruction panel explains the rules, and the **Start** button leads you into the trial.

![Instruction Panel](assets/screenshots/instruction-screenshot.JPG)
![Start Button](assets/screenshots/start-button-screenshot.JPG)

### The Trial — Quiz

- **10 randomized questions** per run — shuffled on every playthrough for replayability
- **Progress bar** tracks how far into the trial you are
- **Instant feedback** — correct answers glow green, wrong ones flash red with a shake
- **Answer lock** — once selected, you cannot change your pick
- **Next** button advances to the following question

![Quiz Question](assets/screenshots/question-screenshot.JPG)

### The Verdict — Score Screen

After all 10 questions, your score is revealed alongside a message from the Entity:

| Score | Entity's Verdict |
|-------|-----------------|
| 0 – 2 | "The Entity claims your soul... You belong to the fog now." |
| 3 – 4 | "You stumbled in the darkness. Return to the fog and try again." |
| 5 – 6 | "Not bad, Survivor. But the fog still holds secrets from you." |
| 7 – 8 | "The Entity takes notice... Your knowledge is formidable." |
| 9 – 10 | "You are one with the fog. The Entity bows before your knowledge!" |

![Score Screen](assets/screenshots/end-of-quiz-screenshot.JPG)

### Navigation

The **Dead by Daylight Quiz** logo in the header always links back to the home page — your escape route when you need to leave the fog.

![Logo](assets/screenshots/logo-screenshot.JPG)

---

## Design

### Visual Theme

The quiz uses a dark horror aesthetic to match Dead by Daylight's atmosphere:

- **Background**: Near-black (`#080510`) with a subtle, oppressive undertone
- **Accent**: Blood red (`#8b0000`) used for borders, buttons, and glowing effects
- **Correct answers**: Neon green glow with a pulse animation
- **Incorrect answers**: Deep red with a shake animation
- **Quiz container**: Pulsing red border glow that breathes in and out
- **Logo**: Flickering text-shadow that mimics a dying light

### Typography

- **Creepster** (Google Fonts) — logo, headings, and UI labels, matching the game's horror aesthetic
- **Roboto** (Google Fonts) — question and answer text for readability

![Dead by Daylight Logo Reference](assets/screenshots/dbd-logo.png)

### Wireframes

Initial wireframes created in Balsamiq:

![Index Wireframe](assets/screenshots/Index-wireframe.jpg)
![Game Wireframe](assets/screenshots/game-wireframe.jpg)

---

## Testing

### Automated Validators

**HTML — W3C Validator**

Index:

![Index Validation](assets/screenshots/index-result-screenshot.JPG)

Game:

![Game Validation](assets/screenshots/game-result-screenshot.JPG)

**CSS — Jigsaw Validator**

![CSS Validation](assets/screenshots/css-test-result.JPG)

**Lighthouse (Chrome DevTools)**

Performance, accessibility, best practices, and SEO:

![Lighthouse Score](assets/screenshots/Lighthouse-tool-screenshot.JPG)

**WAVE Accessibility**

Color contrast and accessibility audit:

![WAVE Result](assets/screenshots/Wave-result-screenshot.JPG)

### Manual Testing

| Purpose | Method | Expected | Result |
|---------|--------|----------|--------|
| Logo acts as home button | Click logo after finishing quiz | Returns to start page | Pass |
| Next button appears after answering | Select an answer | Next button becomes visible | Pass |
| Answer lock after selection | Click another answer after selecting | No change possible | Pass |
| Correct score-based message | Complete quiz above and below score thresholds | Correct tier message displayed | Pass |
| Questions shuffle on restart | Restart quiz and compare question order | Order differs between runs | Pass |

### JavaScript Stats

- 7 functions
- Largest function signature: 1 argument (median: 0)
- Largest function: 10 statements (median: 5)
- Highest cyclomatic complexity: 2 (median: 2)

---

## Known Bugs

None currently known. A previous issue where `resetState()` duplicated answer buttons was resolved by fully clearing the DOM before rendering each new question.

---

## Technologies

| Technology | Purpose |
|-----------|---------|
| HTML5 | Page structure |
| CSS3 | Styling and animations |
| JavaScript (ES6) | Quiz logic and interactivity |
| Google Fonts | Creepster and Roboto typefaces |
| GitHub Pages | Hosting and deployment |
| Balsamiq | Wireframing |
| W3C Validator | HTML validation |
| Jigsaw | CSS validation |
| Lighthouse | Performance and accessibility audit |
| WAVE | Color contrast and accessibility |

---

## Deployment

Deployed via GitHub Pages:

1. Log in to GitHub and open the repository
2. Go to the **Settings** tab
3. Navigate to **Pages** (under *Code and automation*)
4. Under **Branch**, select `main` and click **Save**
5. Wait a few minutes — a live link will appear at the top of the Pages section

---

## Version Control

```bash
git add <file>        # Stage specific files
git commit -m "msg"   # Commit with a descriptive message
git push              # Push to the remote repository
```

Each commit creates a versioned snapshot you can compare against previous states of the project.

---

## Cloning the Repository

```bash
# HTTPS
git clone https://github.com/TimothyYW/Dead-by-daylight-quiz.git

# SSH
git clone git@github.com:TimothyYW/Dead-by-daylight-quiz.git
```

Or download the ZIP from the **Code** dropdown on GitHub.

---

## Future Plans

- Add more questions (aiming for 30+)
- Image-based questions — identify the killer or survivor from a screenshot
- Difficulty tiers: Survivor / Killer / Entity
- Timer-based challenge mode
- Local high score tracking

---

## Credits

**Mentor:** Daisy McGirr — for guidance throughout the project

**Tutorial reference:** [Build a Quiz App with JavaScript](https://www.youtube.com/watch?v=PBcqGxrr9g8&t=1004s) by Web Dev Simplified

**Resources used:**
- [JavaScript For Loop — TutorialsPoint](https://www.tutorialspoint.com/javascript/javascript_for_loop.htm)
- [Quiz resetState fix — StackOverflow](https://stackoverflow.com/questions/75571616/quiz-in-javascript)
- [JavaScript Docstrings — Dev.to](https://dev.to/stephencweiss/write-your-own-javascript-contracts-and-docstrings-42ho)

**Assets:**
- Hero image: [WallpaperCave — Dead by Daylight Wallpapers](https://wallpapercave.com/dead-by-daylight-wallpapers)
- Favicon: [CleanPNG — Dead by Daylight](https://www.cleanpng.com/free/dead-by-daylight.html)

---

*Created by Timothy Y W*
