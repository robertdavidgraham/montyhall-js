# montyhall-js

This is the Monty Hall problem written in JavaScript (for NodeJS).
Run it from the command line as such:

    $ node montyhall.js

You'll get back results like:

    Pat = 0.34
    Swap = 0.683

# The Monty Hall problem

The Monty Hall problem is a brain-teaser well-known for making people
angry. That's because many, even math/statistics experts, convince themselves
of the wrong answer, and cannot intuitively grasp the right answer.
It's some weird barrier where you cannot see the right answer, until you can,
at which point it becomes obvious to you, and inexplicable that others
cannot see the obviousness. Of course, those with the wrong answer likewise
cannot see what the other side cannot see the obviousness of their conclusion
as well.

Specifically, the brain-teaser is as follows:

> You are a game show contestant. Monty Hall, the host, shows you three doors.
> Behind one door is a pile of gold. Behind the other two doors are goats.
> Monty asks you to pick one door at random, and you'll get whatever is behind
> the door you choose. After you choose, but before he opens the door revealing
> your prize, who opens one of the other doors, behind which there is a goat.
> Monty now offers you a choice. You may either stick with your original door
> or you may instead change your choice to the remaining unopened door. Is there
> a benefit to changing your choice (are you more likely to win the gold)? Or
> does it make no difference?


# The Computer Science problem

One way of resolving this debate is with software. We simply write some code
to simulate the game. That's what this project does, with a bit of JavaScript.

The biggest problem in software, and one least described in college, is
getting the "requirements" correct. The original problem has a number of 
ambiguities.

1. The first is wether the contestant even wants the gold. Goats, after all, are fine animals, smarter than most in the farmyard, and not as dirty as pigs. We'll assume the contestant would prefer gold, however.
2. Does Monty Hall always open a second door? Or does he only do so when he knows you've chosen the gold? We'll assume he always opens one of the doors.
3. Does the door Monty open always contain a goat? Or does he pick one of the remaining doors at random, which can contain either gold or a goat? We'll assume he'll always choose one with a goat.

# The Solution

In the `montyhall.js` code in this project, you can see the solution. You can
run the simulation and see the results.

As you can see, if you stand pat and don't change your choice, you'll win 33%
of the time, but if you swap your choice to the other door, you'll win 66%
of the time.

This will seem intuitively wrong to many of you. How you reconcile this is
your own problem. :)
