# Recursive Flatten ( JS version )

Practice your recursion skills by writing a `flatten` function that turns multi-dimension arrays into flat arrays.

---

### Requirements
- web browser to open and run `index.html`

---

### Installation
```
git clone git@github.com:KaoruDev/mentoring-js-recursive-flatten.git
```
---

### Tests

From OS console ( not vagrant )
```
open index.html
```

---
### Examples

Single dimension arrays
```
flatten([1, 2, 3]); // returns [1, 2, 3]
```

Double dimension arrays
```
flatten([1, [2, 3], 4]); // returns [1, 2, 3, 4]
```

N dimension arrays
```
flatten([1, [2, [3]], 4, [[5]]]); // returns [1, 2, 3, 4, 5]
```
