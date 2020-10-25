/**
 * @author    Francisco Huergo <fhuergo@wayfair.com>
 * @copyright 2020 Wayfair LLC - All rights reserved
 */

import ClassAquarium from '../../public/classes/aquarium.png';
import ClassDog from '../../public/classes/dog.png';
import ClassBFFs from '../../public/classes/best_friends.png';
import ClassEmail from '../../public/classes/email.png';
import ClassSquare from '../../public/classes/shapes.png';
import ClassStudent from '../../public/classes/student_class.png';
import ClassMSO from '../../public/classes/sea_game_1.png';
import ClassMerPerson from '../../public/classes/sea_game_2.png';
import ClassHPInterface from '../../public/classes/sea_game_3.png';

const MERMAID_GAME_CLASSES = [ClassMSO, ClassMerPerson, ClassHPInterface];

const ANSWER_1  = 'getFavoriteFood()';
const ANSWER_2  = 'make a new class with it';
const ANSWER_3  = 'We have to add a new method and field for each new friend';
const ANSWER_4  = 'One method that takes a friend as a parameter';
const ANSWER_5  = 'Figure out a pattern among the friends to simplify code, for example some friends sleep in early, others are only free Thursday, and group in case/switch or if blocks accordingly. New expansions would then be types of friends, instead of individual friends.';
const ANSWER_6  = 'setSideLength';
const ANSWER_7  = 'Create an abstract class Shape that is extended by Rectangle and Square';
const ANSWER_8  = 'Write a new interface';
const ANSWER_9  = 'Student is limited to receiving homework help from Teacher instead of other potential classes';
const ANSWER_10 = 'It has THREE: dealing with fish on display, whether the place is open, and cleaning duties';
const ANSWER_11 = 'Put each responsibility in its own class, and have the Aquarium class ‘use’ them';
const ANSWER_12 = 'setFishToDisplay()';
const ANSWER_13 = 'makeClearanceSale()';
const ANSWER_14 = 'putUpFlashyRedSign()';
const ANSWER_15 = 'Create an interface that best suits this class, or rewrite the interface to accommodate the class';
const ANSWER_16 = 'Student clicks mopFloorsBeforeClosing which takes cleaningEmployee';
const ANSWER_17 = 'Rewrite the method to take an interface that accepts employees with cleaning abilities';
const ANSWER_18 = 'Abstract class was overwritten';
const ANSWER_19 = 'Interface methods were overwritten to be ignored';

const ANSWER_COMPOSITION_INSTEAD_OF_INHERITANCE = 'Use composition instead of inheritance';

const OPTION_OPEN_BUSINESS                  = 'openBusiness()';
const OPTION_CLOSE_BUSINESS                 = 'closeBusiness()';
const OPTION_SHOULD_BE_OPEN                 = 'shouldBeOpen()';
const OPTION_MOP_FLOORS                     = 'mopFloorsBeforeClosing()';
const OPTION_RESPONSE_CLOSE_LIFELONG_METHOD = 'Close! This method looks like it’ll have a consistent and long lifespan, much like the neon tetra fish, that lives for around ten years.';
const OPTION_RESPONSE_LOOK_AGAIN            = 'Look again...';

const QuizData = [
    {
        classNames: [ClassDog],
        question: 'Here we have a class Dog. Its methods are mostly about what it does. But there is something that shouldn’t be here - can you guess which it is?',
        options: [
            [
                'bark()',
                'This is different in that it makes a sound, but there\'s something even more different'
            ],
            [
                'eat()',
                'Close, keep trying'
            ],
            [
                ANSWER_1,
                'That’s right! Getting a favorite food isn’t something the dog does; it’s something WE do to fulfill something else the dog needs. This would be a violation of the Single Responsibility Principle: assuring every class has its own responsibility, and that those don’t bleed over one another.'
            ],
            [
                'sleep()',
                'It is certainly pretty inactive, but look closely at the other options'
            ]
        ],
        answer: ANSWER_1
    },
    {
        classNames: [ClassDog],
        question: 'What are some solutions to that?',
        options: [
            [
                'delete it',
                'Hmm, it will probably still be needed somewhere'
            ],
            [
                'put it inside eat()',
                'The dog might not be eating its favorite food all the time, so running it or checking whether we want it each time is not efficient. Plus it might be useful in other parts of the codebase, and we don’t want the method to be any lengthier than it needs to be.'
            ],
            [
                ANSWER_2,
                'Great idea! That way, every class has a distinct responsibility, and the code is reusable to other engineers.'
            ]
        ],
        answer: ANSWER_2
    },
    {
        classNames: [ClassBFFs],
        question: 'We’ve got a class with a user’s best friends, and there are methods to check if any of them currently want to go out. What is a potential problem with this code?',
        options: [
            [
                'The friends\' names could be long',
                'No problem there! When dealing with long words in method names we can always abbreviate.'
            ],
            [
                'Methods have similar names',
                'Maybe, but eventually we might want to add other types of checks on the friends, so it’s fair for now.'
            ],
            [
                ANSWER_3,
                'That’s right! It violates the Open/Closed Principle, which states: code should be open for expansion (any changes should be additions to what we have) but closed for modification (we shouldn’t need to go back and change a bunch of stuff every time we want to add features). Having to add a field and method each time we add a friend is an example of a need to modify instead of allowing to expand.'
            ]

        ],
        answer: ANSWER_3
    },
    {
        classNames: [ClassBFFs],
        question: 'So what\'s a solution to that?',
        options: [
            [
                'One class per friend',
                'Hmm, that might be a lot of classes - in fact, a new one per new person. Definitely an example of being open to expansion, but then we’d have lots of code duplication.'
            ],
            [
                'One field with all the friends in an object, that each method checks on',
                'The object would still require to write a new method for each new friend we have.'
            ],
            [
                ANSWER_4,
                'That’s right! It’s one method to rule them all, instead of various.'
            ]
        ],
        answer: ANSWER_4
    },
    {
        classNames: [ClassBFFs],
        question: 'We’re on the right track, but that still could be a lot of new lines of code for each friend within the method. How can we consolidate further?',
        options: [
            [
                ANSWER_5,
                'Correct! That is way more modular than one for each friend. We are one step closer to making this super Open/Close approved - we will expand on this idea in part 5!'
            ],
            [
                'Have some methods deal with certain friends, while other methods deal with other friends, for example one method is to check on generally available friends, and the other is to check on friends that are busier. This would make the code less compressed and easier to scan.',
                'Very close. The problem with this is then we have more than one method promising to do the same thing, and we have to remember a lot about the friend before triggering each method.'
            ]
        ],
        answer: ANSWER_5
    },
    {
        classNames: [ClassSquare],
        question: 'All right, help me out: Which set of methods would be most sufficient for a class "Square"?',
        options: [
            [
                'setWidth and setHeight',
                'True, but what would be more succinct?'
            ],
            [
                'setWidth or setHeight',
                'We would need to set both width and height. What would be a more complete naming convention?'
            ],
            [
                ANSWER_6,
                'Correct! The others don’t make sense since a square has four equal sides.'
            ]
        ],
        answer: ANSWER_6
    },
    {
        classNames: [ClassSquare],
        question: 'Wait a second! We are using setSideLength, but that makes setWidth and setHeight obsolete. So this is an issue because we’re invalidating the parent class methods - we’re saying “oh, don’t use those,” which violates the Liskov Substitution Principle.\nWhat\'s the best solution?',
        options: [
            [
                'Have Rectangle’s setWidth() and setHeight() check to see if it’s a square, and if so to call them equally',
                'That’s switching up what those methods fundamentally do, and we don’t want to do that. We want each method to be doing one thing.'
            ],
            [
                ANSWER_7,
                'Correct! The methods in Square and Rectangle will never be on the same page, but we can agree these are Shapes. Shape can hold fields and methods they have in common such as calculatedArea and calculateArea(), supposing we want to stick with inheritance.'
            ]
        ],
        answer: ANSWER_7
    },
    {
        classNames: [ClassEmail],
        question: 'Clients implement an email interface that only has methods reply() and forward(). One of the clients - for higher end customers - now wants to write a videoRecord() method on their class but the original interface does not line up. What is the best solution?',
        options: [
            [
                'Utilize all available methods in the interface, and find creative ways to make each one work',
                'Nope, we only want to use what we really need. An interface should serve the class instead of the class serving the interface.'
            ],
            [
                ANSWER_8,
                'That’s right! Interfaces should serve classes, instead of classes serving interfaces.'
            ],
            [
                'Do not use an interface',
                'Arguably, but in this case the interface was implemented to match across various concretions.'
            ]
        ],
        answer: ANSWER_8
    },
    {
        classNames: [ClassStudent],
        question: 'Let’s consider this class. Why might it be limited?',
        options: [
            [
                'The teacher may not be available for help',
                'True, but it is probably class Teacher’s job to decide whether it is available for help or not; class Student should be able to ask and expect some sort of response. It shouldn’t have awareness of Teacher’s schedule.'
            ],
            [
                'Teacher’s method askQuestion() may be deleted at some point from Teacher, which is a concrete object, and we can’t count on it',
                'That is actually not an invalid reason to justify how we are going to solve this problem. If that method goes away, whoever does that should be sure that other methods from other classes are not calling it!'
            ],
            [
                ANSWER_9,
                'That’s right! It would make more sense to include parents and even other students.'
            ],
            [
                'Teacher’s askQuestion() may be restricted to its inheritance tree, or be private',
                'You always want to verify that a method is public before calling it from another class that is not part of its inheritance tree. In this case, we got verification and we’re good to go. If another engineer changes this, they would make sure other classes don’t come crashing down!'
            ]
        ],
        answer: ANSWER_9
    },
    // part 2, class change
    {
        classNames: [ClassAquarium],
        question: 'How many responsibilities is this class taking on?',
        options: [
            [
                'It has ONE: dealing with managing an aquarium',
                'That’s a very fair assessment, but managing an aquarium is like saying “managing my life.” It’s a lot for one class. How many total responsibilities do you see that could be cut up?'
            ],
            [
                'It has TWO: dealing with fish on display, and whether the place is open',
                'That’s part of it, but what else is it up to?'
            ],
            [
                ANSWER_10,
                'That’s right - two too many! One class should not be up to this much. That violates the Single Responsibility Principle. Nice catch.'
            ]
        ],
        answer: ANSWER_10
    },
    {
        classNames: [ClassAquarium],
        question: 'How do we solve this problem?',
        options: [
            [
                'Put each responsibility in its own class, and have the classes interact with each other as little as possible',
                'It’s actually okay if they interact; these aren’t minos and sharks we’re talking about. The question is, how do we have each class own its very own responsibility?'
            ],
            [
                ANSWER_11,
                'That’s right, we can ‘import’ these, thereby giving each responsibility its own class, and making the Aquarium class look a lot cleaner.'
            ]
        ],
        answer: ANSWER_11
    },
    {
        classNames: [ClassAquarium],
        question: 'Click on the method that seems most at risk of needing constant modification.',
        options: [
            [
                ANSWER_12,
                'That’s right! Any time the aquarium acquires a new fish species, they will need to modify that method. I’m not biting on that line! Looks like a violation of the Open/Closed Principle. I need an interface, I need Shark to implement it, and I need it now!'
            ],
            [
                OPTION_OPEN_BUSINESS,
                OPTION_RESPONSE_CLOSE_LIFELONG_METHOD
            ],
            [
                OPTION_CLOSE_BUSINESS,
                OPTION_RESPONSE_CLOSE_LIFELONG_METHOD
            ],
            [
                OPTION_SHOULD_BE_OPEN,
                OPTION_RESPONSE_CLOSE_LIFELONG_METHOD
            ],
            [
                OPTION_MOP_FLOORS,
                OPTION_RESPONSE_CLOSE_LIFELONG_METHOD
            ],
            [
                ANSWER_14,
                OPTION_RESPONSE_CLOSE_LIFELONG_METHOD
            ],
            [
                ANSWER_13,
                OPTION_RESPONSE_CLOSE_LIFELONG_METHOD
            ]
        ],
        answer: ANSWER_12
    },
    {
        classNames: [ClassAquarium],
        question: 'Inheritance can be useful to avoid duplicate code and categorize types of things, but something smells fishy about our class extension. What method is making this class extension not seem like such a great idea after all?',
        options: [
            [
                ANSWER_12,
                OPTION_RESPONSE_LOOK_AGAIN
            ],
            [
                OPTION_OPEN_BUSINESS,
                OPTION_RESPONSE_LOOK_AGAIN
            ],
            [
                OPTION_CLOSE_BUSINESS,
                OPTION_RESPONSE_LOOK_AGAIN
            ],
            [
                OPTION_SHOULD_BE_OPEN,
                OPTION_RESPONSE_LOOK_AGAIN
            ],
            [
                OPTION_MOP_FLOORS,
                OPTION_RESPONSE_LOOK_AGAIN
            ],
            [
                ANSWER_14,
                OPTION_RESPONSE_LOOK_AGAIN
            ],
            [
                ANSWER_13,
                'That’s right! This is what\'s violating the Liskov Substitution Principle.'
            ]
        ],
        answer: ANSWER_13
    },
    {
        classNames: [ClassAquarium],
        question: 'What is the best solution?',
        options: [
            [
                'Rewrite the inheritance tree so it fits nicely',
                'We COULD do this, but we’re at risk of rewriting the inheritance tree whenever we get a new type of store, and that might not work every time.'
            ],
            [
                ANSWER_COMPOSITION_INSTEAD_OF_INHERITANCE,
                'Bingo! That’s much less messy and allows for easier modification than potentially rewriting the tree whenever a new type of store swims our way.'
            ]
        ],
        answer: ANSWER_COMPOSITION_INSTEAD_OF_INHERITANCE
    },
    {
        classNames: [ClassAquarium],
        question: 'Turns out using this interface wasn’t the best way to go about this. What method betrays that fact?',
        options: [
            [
                ANSWER_12,
                OPTION_RESPONSE_LOOK_AGAIN
            ],
            [
                OPTION_OPEN_BUSINESS,
                OPTION_RESPONSE_LOOK_AGAIN
            ],
            [
                OPTION_CLOSE_BUSINESS,
                OPTION_RESPONSE_LOOK_AGAIN
            ],
            [
                OPTION_SHOULD_BE_OPEN,
                OPTION_RESPONSE_LOOK_AGAIN
            ],
            [
                OPTION_MOP_FLOORS,
                OPTION_RESPONSE_LOOK_AGAIN
            ],
            [
                ANSWER_14,
                'That’s right! Aquariums are glamorous places that would find flashy signs a little ordinary, so that’s why they’re not using this method.'
            ],
            [
                ANSWER_13,
                OPTION_RESPONSE_LOOK_AGAIN
            ]
        ],
        answer: ANSWER_14
    },
    {
        classNames: [ClassAquarium],
        question: 'Knowing what we know of this class, what is the best solution? Select all that apply',
        options: [
            [
                ANSWER_15,
                'Correct.\nCreating is correct, especially if this interface is particularly useful for other classes.\nRewriting is also correct, but to be fair, we don’t know what other classes are using the interface and why they might need it, and that would require a little more investigation.\nGreat job!',
            ],
            [
                'Rewrite the class to accommodate the interface',
                'No, we never want to write classes for interfaces, but the other way around?: Find out!'
            ]
        ],
        answer: ANSWER_15
    },
    // see document to figure out how to give answer then transition
    {
        classNames: [ClassAquarium],
        question: 'One of these methods is taking a parameter that could probably be expanded. Which seems like that’s the case?',
        options: [
            [
                'Student clicks shouldBeOpen which takes Time',
                'Maybe, but for now we are pretty sure the current time is a sufficient metric for determining whether the aquarium should be open.'
            ],
            [
                'Student clicks setFishToDisplay which takes Fish',
                'While we might want the method to take other things, as far as fish are concerned, Fish is generic enough.'
            ],
            [
                ANSWER_16,
                'That’s what I’m talking about! Who says only cleaners need to clean a place up? If we expand it to employee, we won’t have an error if a fish-caretaker or fish-bodyguard wants to sanitize their own work area.\n'
            ]
        ],
        answer: ANSWER_16
    },
    {
        classNames: [ClassAquarium],
        question: 'How do we solve this problem?',
        options: [
            [
                'Write a different method for each type of employee',
                'Actually, we can have just one method'
            ],
            [
                ANSWER_17,
                'That’s correct, and cleaning abilities are not easy to come by'
            ]
        ],
        answer: ANSWER_17
    },
    // part 3, class change.
    // the following question would ideally follow a guess of which ones are violated. so let's have random pairs and have users click the correct answer, four options
    {
        classNames: MERMAID_GAME_CLASSES,
        question: 'These classes and interface violate two principles which are very similar: Liskov Substitution Principle and Interface Segregation Principle.\n' +
            'How was the Liskov Substitution Principle violated?',
        options: [
            [
                'Leakage of responsibility',
                'Nope, these were technically tidy although there were other issues for certain'
            ],
            [
                'Dependency injection was too specific',
                'Actually, DI was just right from what we saw!'
            ],
            [
                ANSWER_18,
                'Exactly! The abstract class was not right for the MerPerson for so many reasons: the abstract class states in the name that it can’t be identified. But the MerPerson class not only expects a name; it happily gives it, unlike the abstract Unidentifiable Swimming Organism abstract class. In fact, not only was the name overwritten, but an exception was thrown in case.'
            ]
        ],
        answer: ANSWER_18
    },
    {
        classNames: MERMAID_GAME_CLASSES,
        question: 'How was the Interface Segregation Principle violated?',
        options: [
            [
                'Interface didn’t have enough info',
                'Nope! Actually, interfaces usually look like that. Pretty weird, I know. They just define the method, parameters and return type, and require classes which implement them to use methods with those names, parameters and return type.'
            ],
            [
                ANSWER_19,
                'Correct! It looks like whoever wrote MerPerson did not want MerPeople to gain hitpoints by having oysters. MerPeople are strict vegetarians in this world, so that makes sense. But that interface should therefore not be used in this case. It violates the principle to use an interface we need to overwrite; instead, a new one should be written for the class.'
            ]
        ],
        answer: ANSWER_19
    }
    // insert here: a simple check of which two principles are wrong; see document
    // part 4, end of multiple choice

];

export default QuizData;