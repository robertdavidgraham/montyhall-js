/* License: public domain, by Robert David Graham */

function Game() 
{
    /* We have three doors that may have goat behind them */
    this.doors = ["goat", "goat", "goat"];

    /* This function will choose one of the doors at random, using the 
     * built-in JavaScript random function. */
    this.pick_random = function() {
        return Math.floor(Math.random() * 3)
    };

    /* We initialize this game with a random door having GOLD instead
     * of a goat */
    this.doors[this.pick_random()] = "GOLD";


    /* This randomly chooses a door that is NOT the given choice. There
     * are, of course, better ways of writing this, but I'm trying to
     * echo the feel of the game, the way a human might go about
     * choosing the next door to open */
    this.open_other = function (contestant_choice) {
        while (true) {
            var new_choice = this.pick_random();

            /* We can't open the door the contestant has chosen */
            if (new_choice == contestant_choice)
                continue;
            
            /* We can't open the door with the GOLD */
            if (this.doors[new_choice] == "GOLD")
                continue;
            
            /* Return the door to open to show to the contestant */
            return new_choice;
        }
    }

    /* In this function, the customer decides to change their choice,
     * being neither their original choice, nor the door that Monty
     * opened */
    this.change_choice = function (contestant_choice, montys_choice) {
        for (var i in this.doors) {
            if (i == contestant_choice)
                continue;
            if (i == montys_choice)
                continue;
            return i;
        }
    }


}

/**
 * Simulate playing the game once, returning the result of game
 * (either 'goat' or 'GOLD'). The variable 'do_change' indicates
 * whether the customer is going to always swap their choice (true)
 * or wethey they will stand pat with their first choice (false).
 */
function RunSimulation(do_change)
{
    /* Craete a new game instance with GOLD behind one door chosen
     * at random, and a goat behind the rest */
    var game = new Game();

    /* The contestant picks a door at random */
    var choice = game.pick_random();

    /* Monty Hall opens another door, that is not the contestent's
     * door, showing a goat */
    var open = game.open_other(choice);

    /* Now the contestant decides whether to change */
    if (do_change)
        choice = game.change_choice(choice, open);
    
    /* Now return either 'goat' or 'GOLD' */
    return game.doors[choice];
}

/**
 * This funs many simulations of the game, returning the how often
 * the contestant wins the GOLD. The 'do_change' variable indicates
 * if the contestant always swaps their choice (true) or never does (false)
 */
function RunManySimulations(do_change)
{
    var attempts = 1000;
    var win = 0;

    for (var i=0; i<attempts; i++) {
        if (RunSimulation(do_change) == "GOLD")
            win++;
    }

    return win / attempts;
}

console.log("Pat = " + RunManySimulations(false));
console.log("Swap = " + RunManySimulations(true));

