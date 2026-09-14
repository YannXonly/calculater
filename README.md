# 🧮 Calculator By Yanis :

A lightweight, browser-based calculator implemented with **HTML, CSS, and vanilla JavaScript**.

The calculator provides standard arithmetic operations with a simple display system, input validation, deletion, sign reversal, percentage handling, and basic error-state management.

---

## ✨ Features

### Basic Arithmetic

Supports the following operations:

* Addition `+`
* Subtraction `-`
* Multiplication `×`
* Division `÷`
* Percentage `%`

The calculator internally converts display operators into JavaScript-compatible operators before evaluating expressions.

For example:

```text
5 × 10
```

is internally converted to:

```text
5 * 10
```

---

### 🔢 Dynamic Display

The calculator uses two display areas:

* **Current display** — shows the expression or current value.
* **Previous/result display** — stores the calculated result.

The display automatically handles the initial `0` state so that entering a number replaces `0` instead of producing values such as:

```text
05
```

---

### ➕ / ➖ Sign Reversal

The sign-reversal functionality allows the user to switch between positive and negative values.

Examples:

```text
25 → -25
-25 → 25
```

If the display contains `0`, pressing the sign button starts a negative input:

```text
0 → -
```

This also allows negative numbers to be entered naturally.

---

### ⌫ Delete Function

The delete operation removes the last character from the current input.

Examples:

```text
12345 → 1234
1234 → 123
123 → 12
```

When only one character remains, the calculator resets the display to:

```text
0
```

It also handles the negative sign correctly:

```text
- → 0
```

If the calculator is currently displaying an error, pressing delete resets the calculator.

---

### 🧹 Clear Function

The clear operation resets both displays:

```text
Current: 0
Previous: 0
```

This provides a complete reset of the calculator's visible state.

---

### ⚠️ Error Handling

The calculator includes a centralized error-state check through:

```javascript
isErrorState()
```

This prevents additional input from being appended after an error occurs.

For example, invalid expressions are caught and converted into:

```text
EROOR
```

The previous display is also reset to:

```text
0
```

The calculator can then be recovered using the clear or delete functionality.

---

### 📏 Input Length Protection

To prevent excessively long expressions from being displayed, the calculator limits the display to **15 characters**.

When the limit is reached, the calculator enters an error state:

```text
EROOR
```

This protects the UI from uncontrolled input growth and keeps the calculator display readable.

---

## 🧠 Implementation Details

The calculator is built using plain JavaScript and interacts directly with DOM elements.

The main display elements are retrieved using:

```javascript
const display = document.querySelector('.displayNow');
const prevDisplay = document.querySelector('.displayPrev');
```

### Main Functions

| Function            | Responsibility                                                   |
| ------------------- | ---------------------------------------------------------------- |
| `isErrorState()`    | Determines whether the calculator is currently in an error state |
| `appendToDisplay()` | Adds new input to the calculator display                         |
| `ClearDisplay()`    | Resets the calculator                                            |
| `ReverseNotation()` | Toggles the sign of the current value                            |
| `calculate()`       | Converts and evaluates the current expression                    |
| `Delete()`          | Removes the last entered character                               |

---

## 🔄 Expression Processing

Before evaluation, the calculator normalizes the visual operators used by the UI.

```javascript
let expr = display.textContent
    .replace(/x/g, '*')
    .replace(/÷/g, '/')
    .replace(/%/g, '/100');
```

This allows the interface to use user-friendly symbols while maintaining JavaScript-compatible expressions internally.

For example:

```text
100 ÷ 4
```

becomes:

```text
100 / 4
```

And:

```text
50%
```

becomes:

```text
50/100
```

---

## 🛡️ Defensive Programming

Several defensive checks are implemented to keep the calculator in a predictable state.

### Error-state protection

```javascript
if (isErrorState()) return;
```

Prevents additional operations from being performed while the calculator is in an invalid state.

### NaN protection

The sign-reversal function validates numeric input:

```javascript
if (Number.isNaN(value)) return;
```

This prevents invalid values from being manipulated as numbers.

### Try/Catch evaluation

Expression evaluation is protected with:

```javascript
try {
    const result = eval(expr);
    // ...
} catch (e) {
    // Error handling
}
```

Invalid expressions therefore fail gracefully instead of breaking the calculator interface.

---

## 📂 Project Structure

A typical project structure is:

```text
calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the calculator interface and buttons.

### `style.css`

Controls the calculator's layout, styling, buttons, displays, and visual appearance.

### `script.js`

Contains the calculator's functionality and interaction logic.

### `README.md`

Project documentation and implementation overview.

---

## 🚀 Getting Started

No build system or external dependencies are required.

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Open the project

Navigate into the project directory:

```bash
cd calculator
```

### 3. Run the calculator

Open:

```text
index.html
```

in any modern web browser.

---

## 🧪 Supported Examples

The calculator can handle expressions such as:

```text
10 + 5
20 - 8
6 × 7
100 ÷ 4
50%
-25
```

It also supports combining operators into expressions, subject to the limitations of the current expression-evaluation implementation.

---

## ⚙️ Current Architecture

The project follows a simple **DOM-driven architecture**:

```text
User Input
    ↓
Button / Event Handler
    ↓
appendToDisplay()
    ↓
Display State
    ↓
calculate()
    ↓
Expression Normalization
    ↓
Expression Evaluation
    ↓
Result
    ↓
Display Update
```

The implementation intentionally keeps the architecture lightweight and dependency-free, making it easy to understand and extend.

---

## 🔮 Possible Future Improvements

Potential improvements for future versions include:

* Replace `eval()` with a dedicated expression parser.
* Add keyboard support.
* Add calculation history.
* Improve decimal-number handling.
* Add parentheses support.
* Improve percentage behavior for complex expressions.
* Add scientific calculator operations.
* Add automated unit tests.
* Improve accessibility and ARIA labels.
* Introduce a clearer state-management layer.
* Add better handling for division by zero.
* Replace the `EROOR` message with a standardized `ERROR` state.
* Add responsive/mobile layouts.
* Add dark/light themes.

---

## 📌 Technical Notes

This project currently uses:

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **DOM APIs**
* No external JavaScript libraries
* No frameworks
* No build tools required

The current implementation prioritizes simplicity and direct DOM interaction, making it suitable as a small frontend project and a foundation for further calculator functionality.

---

## 📄 License

Add your preferred license here, for example:

```text
MIT License
```

---

## 👨‍💻 Author

Developed as a frontend JavaScript calculator project.

If you found the project useful, consider giving the repository a ⭐.
