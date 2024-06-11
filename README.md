This is a module that displays a clock for an alternative time-keeping paradigm based on ternary numbers.

## Installation

Navigate to your modules folder (cd ~/MagicMirror/modules) and execute this command:
```
git clone https://github.com/sdetweil/MMM-Ternary-clock.git
```

or 
```
git clone https://github.com/dkallen78/MMM-Ternary-clock.git
```
## Explanation

This clock was inspired by a conversation I had with someone on Reddit who challenged me to make a clock that used numbers in a balanced ternary base. Displaying regular sexagesimal time in a different base isn't too interesting from a visual standpoint so I wanted to do something different. 

I built this from the ground up around bae 3. So the big wedges in the middle represent thirds of the day (I call them "terns," feel free to use your own word). The next ring out breaks each of those wedges into 9 "hours" which are broken down into 27 "minutes" made of 81 "seconds" each.

There isn't really a lot of functional use for something like this, it just looks neat. But, I like to think of each tern as having a role. The first tern is for sleeping, the second for work, and the third for recreation. Each tern is exactly 8 hours, so it works out pretty well.