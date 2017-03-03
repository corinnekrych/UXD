# Practical questions

Let's find the bugs 🐛🐜

and use unit tests as a weapon.

## Pre-requisites
* node 4+

## Build and run

```
npm install
npm test
```

## Steps

### Step 1
To reproduce the 🐛
* comment [line 4](question-1-test.js#4) and uncomment [line 3](question-1-test.js#3) in [question-1-test.js](question-1-test.js).
* run test `npm test`, see the failure.

To fix it:
* comment [line 3](question-1-test.js#3) and uncomment [line 4](question-1-test.js#4) in [question-1-test.js](question-1-test.js).
* run test `npm test`, see all tests passed.

### Step 2
To reproduce the 🐜
* comment [line 4](question-2-test.js#4) and uncomment [line 3](question-2-test.js#3) in [question-1-test.js](question-2-test.js).
* run test `npm test`, see the failure.

To fix it:
* comment [line 3](question-2-test.js#3) and uncomment [line 4](question-2-test.js#4) in [question-1-test.js](question-2-test.js).
* run test `npm test`, see all tests passed.

## License
[Apache-2.0](../LICENSE).