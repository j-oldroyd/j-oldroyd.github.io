var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Annual Edition 2023   j-oldroyd.github.io\/wvwc-calculus  https:\/\/j-oldroyd.github.io\/wvwc-calculus\/output\/html\/wvwc-calculus.html   copyright  "
},
{
  "id": "author-bio-JEO",
  "level": "1",
  "url": "author-bio-JEO.html",
  "type": "Author Biography",
  "number": "",
  "title": "Author Biography",
  "body": " Go Seahawks.  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This document was created to serve as a single source for my lecture notes for the calculus sequence at West Virginia Wesleyan College. As such these notes are divided into three self-explanatory parts.   The first part, Differential Calculus , introduces the derivative and covers its important properties and applications. This content forms the majority of the Calculus I course.    The next part, Integral Calculus , introduces the integral and goes over multiple methods for its calculation. This content forms the majority of the Calculus II course.    The final part, Multivariable Calculus , generalizes the concepts of derivatives and integrals to two and three dimensions. This content forms basis of the Calculus III course.     This document is very much in progress and therefore typos and other errors are to be expected. If you find any, I would appreciate you letting me know by contacting me by email.  "
},
{
  "id": "section-function-review",
  "level": "1",
  "url": "section-function-review.html",
  "type": "Section",
  "number": "1.1",
  "title": "Function Review",
  "body": " Function Review  This section reviews basic facts about functions. To appear in a later version.  "
},
{
  "id": "section-types-of-functions",
  "level": "1",
  "url": "section-types-of-functions.html",
  "type": "Section",
  "number": "1.2",
  "title": "Types of Functions",
  "body": " Types of Functions   Linear Functions  The most basic example of a function that we'll study in calculus is the linear function .   functions linear  Linear Functions   A linear function is a function of the form for constants and .    As the name suggests, any (non-vertical) line is an example of a linear function. Such functions are completely determined by the slope of the corresponding line and the -intercept.  Equivalently, any line is determined by knowing two distinct points on the line.  In particular, if then is the slope and is the -intercept. This is known as the slope-intercept equation of a line. Equations of lines are also often written in point-slope form as .   Finding the Equation of a Line   Find a function whose graph is a line passing through and .      Polynomial Functions  After linear functions, we also study functions with higher powers of .   functions polynomial  Polynomial Functions   A polynomial function is a function of the form where is a nonnegative whole number and the coefficients  are constants and is the degree of the polynomial.     If , then we say that has degree .   So linear functions are just polynomial functions of degree at most . And just as linear functions are determined by knowing two distinct points on the line, any polynomial functions is determined by knowing distinct points on the polynomial.   Composition of Polynomial Functions   Let and . Find .      Algebraic Functions  The operations of addition, subtraction, multiplication, division, taking whole number powers and taking whole number roots applied to polynomials give rise to algebraic functions . Two particularly important examples are rational functions and root functions .    functions  rational  root   Rational and Root Functions   A rational function is a function of the form where and are polynomial functions. A root function is a function of the form for some natural number .    As functions become more complicated, we have to worry more and more about their domains. For a polynomial function, the domain is the set of all real numbers (if we ignore complex numbers). The domain of a rational function is the set of all numbers where the denominator is nonzero. The domain of a root function is the set of all nonnegative numbers.   Finding the Domain of an Algebraic Function   Find the domain of .    We need to find where both the radicand is nonnegative and where . If we solve , we see that must be in . Likewise, if and only if . Hence the domain is .    We'll make use of the computer algebra system Sage to perform certain computations. As an example, we use it below to solve the inequality :    "
},
{
  "id": "definition-linear-functions",
  "level": "2",
  "url": "section-types-of-functions.html#definition-linear-functions",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Linear Functions.",
  "body": " functions linear  Linear Functions   A linear function is a function of the form for constants and .   "
},
{
  "id": "example-finding-the-equation-of-a-line",
  "level": "2",
  "url": "section-types-of-functions.html#example-finding-the-equation-of-a-line",
  "type": "Example",
  "number": "1.2.2",
  "title": "Finding the Equation of a Line.",
  "body": " Finding the Equation of a Line   Find a function whose graph is a line passing through and .   "
},
{
  "id": "definition-polynomial-functions",
  "level": "2",
  "url": "section-types-of-functions.html#definition-polynomial-functions",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Polynomial Functions.",
  "body": " functions polynomial  Polynomial Functions   A polynomial function is a function of the form where is a nonnegative whole number and the coefficients  are constants and is the degree of the polynomial.   "
},
{
  "id": "example-composition-of-polynomial-functions",
  "level": "2",
  "url": "section-types-of-functions.html#example-composition-of-polynomial-functions",
  "type": "Example",
  "number": "1.2.4",
  "title": "Composition of Polynomial Functions.",
  "body": " Composition of Polynomial Functions   Let and . Find .   "
},
{
  "id": "definition-rational-and-root-functions",
  "level": "2",
  "url": "section-types-of-functions.html#definition-rational-and-root-functions",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Rational and Root Functions.",
  "body": "  functions  rational  root   Rational and Root Functions   A rational function is a function of the form where and are polynomial functions. A root function is a function of the form for some natural number .   "
},
{
  "id": "example-finding-the-domain-of-an-algebraic-function",
  "level": "2",
  "url": "section-types-of-functions.html#example-finding-the-domain-of-an-algebraic-function",
  "type": "Example",
  "number": "1.2.6",
  "title": "Finding the Domain of an Algebraic Function.",
  "body": " Finding the Domain of an Algebraic Function   Find the domain of .    We need to find where both the radicand is nonnegative and where . If we solve , we see that must be in . Likewise, if and only if . Hence the domain is .   "
},
{
  "id": "section-trigonometric-functions",
  "level": "1",
  "url": "section-trigonometric-functions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Trigonometric Functions",
  "body": " Trigonometric Functions   Angles and Terminal Points  Consider the unit circle in , which is given by . Each point on this circle makes an angle with the positive -axis, and therefore must also determine the point completely. The angle is typically specified using either radians or degrees . Converting from one unit to the other can be done by noting that radians is precisely equal to degrees.  Unless otherwise specified, we will use radians for angle measures in this course.     Converting from Degrees to Radians   Convert degrees to radians and radians to degrees.    Just as points on the unit circle determine angles, angles also determine points. A point determined by an angle is also known as the terminal point for the angle. Terminal points for certain reference angles are useful to remember.   Finding Terminal Points   Find the terminal points for the angles and .    First, note that . We therefore choose as our reference angle and obtain the terminal point . The terminal point for is likewise .      The Trigonometric Functions  Since angles determine terminal points on circles, the coordinates of each point on the circle can be viewed as functions of the angle . These coordinate functions , and , are the fundamental trigonometric functions sine and cosine , and can be used to define the other four trigonometric functions commonly used.   Trigonometric Functions  trigonometric functions   Let and let denote the corresponding terminal point. The cosine function is the function , and the sine function is the function . The secant, cosecant, tangent and cotangent functions are defined as follows: .    The trigonometric functions satisfy important equalities known as Pythagorean identities .   Pythagorean Identities  trigonometric functions Pythagorean identities   Let . Then . If for some , then . If for some , then .     "
},
{
  "id": "example-converting-from-degrees-to-radians",
  "level": "2",
  "url": "section-trigonometric-functions.html#example-converting-from-degrees-to-radians",
  "type": "Example",
  "number": "1.3.1",
  "title": "Converting from Degrees to Radians.",
  "body": " Converting from Degrees to Radians   Convert degrees to radians and radians to degrees.   "
},
{
  "id": "example-finding-terminal-points",
  "level": "2",
  "url": "section-trigonometric-functions.html#example-finding-terminal-points",
  "type": "Example",
  "number": "1.3.2",
  "title": "Finding Terminal Points.",
  "body": " Finding Terminal Points   Find the terminal points for the angles and .    First, note that . We therefore choose as our reference angle and obtain the terminal point . The terminal point for is likewise .   "
},
{
  "id": "definition-trigonometric-functions",
  "level": "2",
  "url": "section-trigonometric-functions.html#definition-trigonometric-functions",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Trigonometric Functions.",
  "body": " Trigonometric Functions  trigonometric functions   Let and let denote the corresponding terminal point. The cosine function is the function , and the sine function is the function . The secant, cosecant, tangent and cotangent functions are defined as follows: .   "
},
{
  "id": "theorem-pythagorean-identities",
  "level": "2",
  "url": "section-trigonometric-functions.html#theorem-pythagorean-identities",
  "type": "Theorem",
  "number": "1.3.4",
  "title": "Pythagorean Identities.",
  "body": " Pythagorean Identities  trigonometric functions Pythagorean identities   Let . Then . If for some , then . If for some , then .   "
},
{
  "id": "section-the-limit-of-a-function",
  "level": "1",
  "url": "section-the-limit-of-a-function.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Limit of a Function",
  "body": " The Limit of a Function   Motivating Limits  Imagine creating a mathematical valley out of the graph of , and in this valley walks a mathematical ant. The ant is walking towards the place on the hill directly above . At , the ant is units above the ground. At , the ant is now unit above the ground. As the ant moves towards , its height above the ground gets closer and closer to . To say it more clearly, and because modern calculus is built on this idea, as the ant approaches the point above , its height above the ground approaches the value . In other words, the limit of as approaches is .      A mathematical valley minus a mathematical ant.   Remember that a function of the variable is just a rule that turns one number, , into another number, . So the idea that the limit of a function is trying to express is what happens to the number (the output) as the number (the input) approaches some particular value.   Actually, functions are much more general than this. But for calculus, it won't hurt us to view functions in this way.   We're not quite ready to define the limit of a function precisely, but we can point one thing out right away: the limit of a function requires two pieces of information: the function itself and the number that is approaching. The limit should then be whatever number that is approaching.   Estimating the limit of a trigonometric function   Let . What is the limit of as approaches the number ?    We don't have a lot of tools to find limits yet, so we'll try to estimate it instead. What we'll do is we'll plug numbers that are closer and closer to into . Let's list several values of as gets closer to from the left:   Estimating                     We can even let approach from the other direction as well (i.e. \"from the right\") and will still approach as gets closer and closer to . So it looks like the limit should be .    To keep ourselves from writing \"the limit of as approaches some number \" over and over, let's introduce some notation: .   Limit of a piecewise function   Let   Find .    If we graph this function, we see that at there is a jump in the graph. In particular, if approaches from the left then approaches , whereas if approaches from the right then approaches . So this function does not appear to have an unambiguous limit as approaches . Another way to say this:  does not exist .     shows us something very important about limits: they depend on the two different ways can approach a number. So we introduce two new pieces of notation: the left-hand limit  will stand for the value approaches (if any) as approaches from the left (i.e. as increases to ), and the right-hand limit  will stand for the value approaches (if any) as approaches from the right (i.e. as decreases to ). In , we would say that .  At this point, we can make a rough definition for the limit of a function.   Limit of a Function  limit function of a single variable   Let be a function. Suppose that both the left-hand limit and the right-hand limit exist and are equal to the same number . Then we say that the limit of as approaches exists and is equal to . We denote this by writing .     Piecewise function again   Let be given by Evaluate and .    If we graph , we get the following:      Graphing .   The graph shows us that , while . Therefore does not exist. On the other hand, exists and is equal to .    It's important to note that the value of a function at a point is in general completely independent of the value of , i.e., we can't always expect to be equal to . Functions for which this is true, however, are known as continuous functions and will be very important in and beyond.   "
},
{
  "id": "figure-math-valley",
  "level": "2",
  "url": "section-the-limit-of-a-function.html#figure-math-valley",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "    A mathematical valley minus a mathematical ant.  "
},
{
  "id": "example-estimating-the-limit-of-a-trigonometric-function",
  "level": "2",
  "url": "section-the-limit-of-a-function.html#example-estimating-the-limit-of-a-trigonometric-function",
  "type": "Example",
  "number": "2.1.2",
  "title": "Estimating the limit of a trigonometric function.",
  "body": " Estimating the limit of a trigonometric function   Let . What is the limit of as approaches the number ?    We don't have a lot of tools to find limits yet, so we'll try to estimate it instead. What we'll do is we'll plug numbers that are closer and closer to into . Let's list several values of as gets closer to from the left:   Estimating                     We can even let approach from the other direction as well (i.e. \"from the right\") and will still approach as gets closer and closer to . So it looks like the limit should be .   "
},
{
  "id": "example-limit-of-a-piecewise-function",
  "level": "2",
  "url": "section-the-limit-of-a-function.html#example-limit-of-a-piecewise-function",
  "type": "Example",
  "number": "2.1.4",
  "title": "Limit of a piecewise function.",
  "body": " Limit of a piecewise function   Let   Find .    If we graph this function, we see that at there is a jump in the graph. In particular, if approaches from the left then approaches , whereas if approaches from the right then approaches . So this function does not appear to have an unambiguous limit as approaches . Another way to say this:  does not exist .   "
},
{
  "id": "p-47",
  "level": "2",
  "url": "section-the-limit-of-a-function.html#p-47",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "left-hand limit the right-hand limit "
},
{
  "id": "definition-limit-of-a-function",
  "level": "2",
  "url": "section-the-limit-of-a-function.html#definition-limit-of-a-function",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Limit of a Function.",
  "body": " Limit of a Function  limit function of a single variable   Let be a function. Suppose that both the left-hand limit and the right-hand limit exist and are equal to the same number . Then we say that the limit of as approaches exists and is equal to . We denote this by writing .   "
},
{
  "id": "example-piecewise-function-again",
  "level": "2",
  "url": "section-the-limit-of-a-function.html#example-piecewise-function-again",
  "type": "Example",
  "number": "2.1.6",
  "title": "Piecewise function again.",
  "body": " Piecewise function again   Let be given by Evaluate and .    If we graph , we get the following:      Graphing .   The graph shows us that , while . Therefore does not exist. On the other hand, exists and is equal to .   "
},
{
  "id": "section-computing-limits",
  "level": "1",
  "url": "section-computing-limits.html",
  "type": "Section",
  "number": "2.2",
  "title": "Computing Limits",
  "body": " Computing Limits   We've got a handle on how to estimate limits from , but the process is very tedious. It requires either graphing the function in question or laboriously entering values into a calculator. So our first order of business now that we have the concept of a limit is to find an easier way to calculate it. This will be a running theme throughout the course.    The Limit Laws  In many cases of interest, we can use knowledge of simpler limits to obtain more complicated limits. We do this via the Limit Laws . Before we get to them, we'll state two very simple (and hopefully very believable) limits.   Simple Limits   For any value of , the following limits hold: if is a constant and      The Limit Laws   Let be a constant, let be a positive whole number and let and be functions. Suppose that and both exist for some number . Then the following rules hold:   The Limit Laws          (if )         Note that item six in the table above only holds (in this class...) if is odd or if .     gives us the ability to compute a wide variety of limits.   Limit of a rational function   Let Evaluate .    We can evaluate by making use of the appropriate Limit Laws and :     In particular, Limit Laws 1-5 give us the following: if is a polynomial or rational function, then as long as is in the domain of . If is not in the domain, trickery may be required.   Trickery   Evaluate     First, note that we can't use the Limit Laws right away since the denominator is at . What we need to do is use algebra to simplify the expression inside the limit:   Now we can use the Limit Laws to find the limit as approaches , since we no longer have a divide-by-zero problem in the denominator:      "
},
{
  "id": "p-55",
  "level": "2",
  "url": "section-computing-limits.html#p-55",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Limit Laws "
},
{
  "id": "proposition-simple-limits",
  "level": "2",
  "url": "section-computing-limits.html#proposition-simple-limits",
  "type": "Proposition",
  "number": "2.2.1",
  "title": "Simple Limits.",
  "body": " Simple Limits   For any value of , the following limits hold: if is a constant and    "
},
{
  "id": "theorem-the-limit-laws",
  "level": "2",
  "url": "section-computing-limits.html#theorem-the-limit-laws",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "The Limit Laws.",
  "body": " The Limit Laws   Let be a constant, let be a positive whole number and let and be functions. Suppose that and both exist for some number . Then the following rules hold:   The Limit Laws          (if )         Note that item six in the table above only holds (in this class...) if is odd or if .   "
},
{
  "id": "example-limit-of-a-rational-function",
  "level": "2",
  "url": "section-computing-limits.html#example-limit-of-a-rational-function",
  "type": "Example",
  "number": "2.2.4",
  "title": "Limit of a rational function.",
  "body": " Limit of a rational function   Let Evaluate .    We can evaluate by making use of the appropriate Limit Laws and :    "
},
{
  "id": "example-trickery",
  "level": "2",
  "url": "section-computing-limits.html#example-trickery",
  "type": "Example",
  "number": "2.2.5",
  "title": "Trickery.",
  "body": " Trickery   Evaluate     First, note that we can't use the Limit Laws right away since the denominator is at . What we need to do is use algebra to simplify the expression inside the limit:   Now we can use the Limit Laws to find the limit as approaches , since we no longer have a divide-by-zero problem in the denominator:    "
},
{
  "id": "section-continuity",
  "level": "1",
  "url": "section-continuity.html",
  "type": "Section",
  "number": "2.3",
  "title": "Continuity",
  "body": " Continuity  We saw in that for a function like , we could evaluate by simply plugging in . In other words, . Functions that have this property are extremely important in mathematics, so we give them a name.   Continuous Functions  continuous functions definition   Let be a function and suppose that is in the domain of . Then we say that is continuous at if . Otherwise, we say that is discontinuous at . We say that is continuous on an interval if it is continuous at every point of an interval. Otherwise, we say that is discontinuous on the interval.     says that it is extremely easy to evaluate limits of continuous functions: just plug the value that is approaching into the function . So the limit is then . If a function is continuous on an interval, then this means that the graph of has no \"gaps\" over this interval.   Determining if a function is continuous   Let . Is continuous on ?    If we graph , then we see that it is discontinuous at . Therefore is discontinuous on the interval .    If we're dealing with a function on a (bounded) closed interval, we need to introduce some new terminology. We say that a function is continuous from the left at if . Similarly, we say that is continuous from the right at if . This is of course assuming that is in the domain of . Finally, we say that is continuous on the closed interval if it is continuous on , continuous from the right at and continuous from the left at . The main idea is still that the graph contains no gaps over this interval.   Continuity over a closed interval   Let be given by Is continuous over ?    If we graph over this interval, we get the following:      Graphing over .   So from the graph it appears that is continuous on this interval.    Remember that we said a function is continuous over an interval if its graph has no gaps over that interval. This is a very rough explanation of continuity, but it should make the following theorem plausible.   Continuous Functions   Polynomial, rational, root and trigonometric functions are continuous at every point of their domain.    Although it doesn't directly mention piecewise functions, is still useful for determining if they are continuous. If a piecewise function is defined using any of the functions from , then the only points we really need to check for continuity are the the places where the function \"changes rules\".   Another piecewise function   Over what intervals is the function given by continuous?    We need to check continuity at and . At , we need to make sure that exists and is equal to . Since and it follows that does not exist. So can't be continuous at .  On the other hand, since , it follows that exists and is equal to . Since also equals , is continuous at . So must be continuous on .    We can also build more complicated continuous functions out of simpler ones.   Combining Continuous Functions   Let and be continuous at a point . Then the following statements are true:  is continuous at .  is continuous at .  is continuous at if .  is continuous at if is in the domain of .       Determining where functions are continuous   Let . On what intervals is continuous?    By , should be continuous wherever and are all defined. Since is defined for , is defined for and is defined for , it follows that is continuous on .     Using continuity to evaluate a limit   Evaluate .    Since and are all continuous, this means that must be continuous as well. Therefore     "
},
{
  "id": "definition-continuous-functions",
  "level": "2",
  "url": "section-continuity.html#definition-continuous-functions",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Continuous Functions.",
  "body": " Continuous Functions  continuous functions definition   Let be a function and suppose that is in the domain of . Then we say that is continuous at if . Otherwise, we say that is discontinuous at . We say that is continuous on an interval if it is continuous at every point of an interval. Otherwise, we say that is discontinuous on the interval.   "
},
{
  "id": "example-determining-if-a-function-is-continuous",
  "level": "2",
  "url": "section-continuity.html#example-determining-if-a-function-is-continuous",
  "type": "Example",
  "number": "2.3.2",
  "title": "Determining if a function is continuous.",
  "body": " Determining if a function is continuous   Let . Is continuous on ?    If we graph , then we see that it is discontinuous at . Therefore is discontinuous on the interval .   "
},
{
  "id": "p-71",
  "level": "2",
  "url": "section-continuity.html#p-71",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous from the left continuous from the right "
},
{
  "id": "example-continuity-over-a-closed-interval",
  "level": "2",
  "url": "section-continuity.html#example-continuity-over-a-closed-interval",
  "type": "Example",
  "number": "2.3.3",
  "title": "Continuity over a closed interval.",
  "body": " Continuity over a closed interval   Let be given by Is continuous over ?    If we graph over this interval, we get the following:      Graphing over .   So from the graph it appears that is continuous on this interval.   "
},
{
  "id": "theorem-continuous-functions",
  "level": "2",
  "url": "section-continuity.html#theorem-continuous-functions",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "Continuous Functions.",
  "body": " Continuous Functions   Polynomial, rational, root and trigonometric functions are continuous at every point of their domain.   "
},
{
  "id": "example-another-piecewise-function",
  "level": "2",
  "url": "section-continuity.html#example-another-piecewise-function",
  "type": "Example",
  "number": "2.3.6",
  "title": "Another piecewise function.",
  "body": " Another piecewise function   Over what intervals is the function given by continuous?    We need to check continuity at and . At , we need to make sure that exists and is equal to . Since and it follows that does not exist. So can't be continuous at .  On the other hand, since , it follows that exists and is equal to . Since also equals , is continuous at . So must be continuous on .   "
},
{
  "id": "theorem-combining-continuous-functions",
  "level": "2",
  "url": "section-continuity.html#theorem-combining-continuous-functions",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "Combining Continuous Functions.",
  "body": " Combining Continuous Functions   Let and be continuous at a point . Then the following statements are true:  is continuous at .  is continuous at .  is continuous at if .  is continuous at if is in the domain of .     "
},
{
  "id": "example-determining-where-functions-are-continuous",
  "level": "2",
  "url": "section-continuity.html#example-determining-where-functions-are-continuous",
  "type": "Example",
  "number": "2.3.8",
  "title": "Determining where functions are continuous.",
  "body": " Determining where functions are continuous   Let . On what intervals is continuous?    By , should be continuous wherever and are all defined. Since is defined for , is defined for and is defined for , it follows that is continuous on .   "
},
{
  "id": "example-using-continuity-to-evaluate-a-limit",
  "level": "2",
  "url": "section-continuity.html#example-using-continuity-to-evaluate-a-limit",
  "type": "Example",
  "number": "2.3.9",
  "title": "Using continuity to evaluate a limit.",
  "body": " Using continuity to evaluate a limit   Evaluate .    Since and are all continuous, this means that must be continuous as well. Therefore    "
},
{
  "id": "section-limits-involving-infinity",
  "level": "1",
  "url": "section-limits-involving-infinity.html",
  "type": "Section",
  "number": "2.4",
  "title": "Limits Involving Infinity",
  "body": " Limits Involving Infinity   Limits Involving Vertical Asymptotes  Consider the function . We know from algebra that this function has a vertical asymptote at , and so in particular is undefined there. However, just because it's undefined at doesn't mean that we can't gather important information about the function near . This is because the function behaves in a very specific way as we let approach . For example, if we let approach from the right, then increases without bound. Similarly, decreases without bound as approaches from the left.  Even though is not approaching a specific value as approaches from either direction, this behavior shows up often enough and is important enough that we want to introduce notation to describe it. For this function, we would say and .  Now consider . Then since the function increases without bound when approaches from both directions. In this case, we say that .   It's extremely important to remember that the symbol is not being used to represent a number or variable that we can perform algebra on. It's a symbol indicating how a particular function is behaving at a certain point.   If is a function and , or , then this means that the function has a vertical asymptote at . In this course, this basically corresponds to a divide-by-zero problem.   Infinite limit involving a rational function   Determine .    If we try to plug in into we get , which means we have run into a divide-by-zero problem. This is a good hint that the limit should be , we just need to figure out the correct sign. There are a couple ways we can do this. First, we could set up a sign chart for this function to see where it's positive and negative and then use that to see if it's increasing or decreasing without bound as . Second, we could just plug in values of that are closer and closer to and see how the function behaves. Either way, we see that it's negative for values of that are close to (but less than) . Hence .      Limits at Infinity  The previous subsection involved limits of functions whose values approached . Now we look at what can happen to a function if its input values approach . First, a definition of sorts.   Limit at Infinity   Let be a function. We say that if gets (and stays) arbitrarily close to as is made arbitrarily large. Similarly, we say that if gets (and stays) arbitrarily close to as is made arbitrarily small.     An important limit at infinity   Let . Determine .    As gets arbitrarily large, gets arbitrarily close to . Therefore .     holds for many other reciprocal powers of . In particular, if then .   A limit at infinity involving cosine   Let . Compute .    First, note that . By the previous remark, we know that . Therefore .     The reason we were able to find the limit in was because of the following fact: if exists and if is continuous at , then . Basically, we can swap continuous functions with limits without causing any harm.   For limits at infinity involving powers of a variable, it is the highest power variables that determine the outcome.   Limit at infinity of a rational function   Let Find and .    Let's start with . To figure out what this limit should be, we could try the following. As gets very large the term in the numerator should drown out everything else in the numerator. Similarly, the term in the denominator should drown out everything else in the denominator. So for very large, . Hence should probably go to as goes to . To make this more precise, we'll just divide the numerator and denominator by the largest power of the denominator, , and then take the limit:   We can find using the same idea. Just divide by the highest power in the denominator and then take the limit:     These limits at infinity have a graphical meaning as well. If or exists and is equal to , then the line is a horizontal asymptote of the graph of .   Asymptotic equivalence   Two functions and are said to be asymptotically equivalent , written , if the following is true: Show that .    All we need to do is compute  Therefore .     "
},
{
  "id": "example-infinite-limit-involving-a-rational-function",
  "level": "2",
  "url": "section-limits-involving-infinity.html#example-infinite-limit-involving-a-rational-function",
  "type": "Example",
  "number": "2.4.1",
  "title": "Infinite limit involving a rational function.",
  "body": " Infinite limit involving a rational function   Determine .    If we try to plug in into we get , which means we have run into a divide-by-zero problem. This is a good hint that the limit should be , we just need to figure out the correct sign. There are a couple ways we can do this. First, we could set up a sign chart for this function to see where it's positive and negative and then use that to see if it's increasing or decreasing without bound as . Second, we could just plug in values of that are closer and closer to and see how the function behaves. Either way, we see that it's negative for values of that are close to (but less than) . Hence .   "
},
{
  "id": "definition-limit-at-infinity",
  "level": "2",
  "url": "section-limits-involving-infinity.html#definition-limit-at-infinity",
  "type": "Definition",
  "number": "2.4.2",
  "title": "Limit at Infinity.",
  "body": " Limit at Infinity   Let be a function. We say that if gets (and stays) arbitrarily close to as is made arbitrarily large. Similarly, we say that if gets (and stays) arbitrarily close to as is made arbitrarily small.   "
},
{
  "id": "example-an-important-limit-at-infinity",
  "level": "2",
  "url": "section-limits-involving-infinity.html#example-an-important-limit-at-infinity",
  "type": "Example",
  "number": "2.4.3",
  "title": "An important limit at infinity.",
  "body": " An important limit at infinity   Let . Determine .    As gets arbitrarily large, gets arbitrarily close to . Therefore .   "
},
{
  "id": "example-a-limit-at-infinity-involving-sine",
  "level": "2",
  "url": "section-limits-involving-infinity.html#example-a-limit-at-infinity-involving-sine",
  "type": "Example",
  "number": "2.4.4",
  "title": "A limit at infinity involving cosine.",
  "body": " A limit at infinity involving cosine   Let . Compute .    First, note that . By the previous remark, we know that . Therefore .   "
},
{
  "id": "example-limit-at-infinity-of-a-rational-function",
  "level": "2",
  "url": "section-limits-involving-infinity.html#example-limit-at-infinity-of-a-rational-function",
  "type": "Example",
  "number": "2.4.5",
  "title": "Limit at infinity of a rational function.",
  "body": " Limit at infinity of a rational function   Let Find and .    Let's start with . To figure out what this limit should be, we could try the following. As gets very large the term in the numerator should drown out everything else in the numerator. Similarly, the term in the denominator should drown out everything else in the denominator. So for very large, . Hence should probably go to as goes to . To make this more precise, we'll just divide the numerator and denominator by the largest power of the denominator, , and then take the limit:   We can find using the same idea. Just divide by the highest power in the denominator and then take the limit:    "
},
{
  "id": "example-asymptotic-equivalence",
  "level": "2",
  "url": "section-limits-involving-infinity.html#example-asymptotic-equivalence",
  "type": "Example",
  "number": "2.4.6",
  "title": "Asymptotic equivalence.",
  "body": " Asymptotic equivalence   Two functions and are said to be asymptotically equivalent , written , if the following is true: Show that .    All we need to do is compute  Therefore .   "
},
{
  "id": "section-the-definition-of-the-derivative",
  "level": "1",
  "url": "section-the-definition-of-the-derivative.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Definition of the Derivative",
  "body": " The Definition of the Derivative   Tangent Lines  Consider . If we graph this, we get a parabola. What we'd like to do is to find a way to describe how quickly this parabola is changing at a point, i.e. find the \"slope\" of the parabola. One way to try to deal with this is to use secant lines . Recall that the secant line through the points and has slope , which is just the average rate of change of from to . If is very close to , then the slope of the secant line through these points should be a good approximation to the \"slope\" of at the point .   Secant lines on a parabola   Let . Find the slope of the secant line through and .    Since the slope of the secant line is the average rate of change, we get that the slope must be equal to     What is telling us is that if , then the slope of at should be very close to , the slope of the secant line. Now we'll do a trick that shows up everywhere in calculus, and is the entire reason we introduced limits in the first place. We'll make this approximation exact by taking a limit. In particular, we'll say that the slope of should be equal to This is the slope of the tangent line to at . Instead of an average rate of change over an interval , we now have an instantaneous rate of change at a point .   Tangent Lines   The tangent line to a curve through a point is the line passing through with slope given by assuming this limit exists. The slope of the tangent line represents the slope of the graph of at and gives the instantaneous rate of change of at .     Tangent line to a root   Find the equation of the tangent line to through the point .    We need two things to find the equation of a line: the slope of the line and a point on the line. Since we know the tangent line has to pass through , we just need to find the slope. The slope is given by Hence the equation of the tangent line through is     As a reminder, the slope of the tangent line represents the slope, or instantaneous rate of change, of the function.   Velocity from position   The displacement (i.e. position) of a particle moving in a straight line is described by the function , where is in seconds and is in meters. Find the velocity, or instantaneous rate of change, of the particle at .    The velocity is just the slope of the tangent line to at , which we can find as follows:   At this step it's a little unclear where to go next, so we'll try long division. If we do so, we get Hence the velocity must be meters per second.     was a little tricky because we needed to compute , and it was unclear how to simplify this at first. This stemmed in large part from how we computed the velocity in the first place, using the formula or more generally .  We want to rewrite this formula to make it a little easier to work with in certain cases. We'll do this by making the denominator easier to handle. In particular, set . Then Either formula can be used to compute the slope of the tangent line.   Velocity revisited   Let be given as in . Find the velocity at .    We know that the velocity should be , but we'll try to find it again using our new formula. So the velocity should also be     Typically, if is easy to factor in terms of we'll want to use the first formula we had for computing rates of change. Otherwise, we'll stick with the new formula involving .    The Derivative  Suppose we go back to one more time, but now we want to find the velocity of at an arbitrary number . Then we could still use our limit formulas, which would give us   So the velocity at of the particle modeled by is given by . So we can represent the velocity, or rate of change or slope of the tangent line, by a function. We call this the derivative .   Definition of the Derivative  derivative definition  functions differentiable   Let be a function. Then its derivative at is the number given by assuming the limit exists. If this limit exists, we say that the function is differentiable at .     We could also define the derivative by These two limits are equivalent.   The derivative of a function at a point represents two things: the slope of the tangent line to at and the instantaneous rate of change of at .   Slope of the sine function   Let . Find its slope at .    The slope at is exactly , which is      Tangent line of the sine function   Find the equation of the tangent line to at .    The tangent line must pass through and must have slope , so its equation is or just .     "
},
{
  "id": "p-110",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#p-110",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant lines "
},
{
  "id": "example-secant-lines-on-a-parabola",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#example-secant-lines-on-a-parabola",
  "type": "Example",
  "number": "3.1.1",
  "title": "Secant lines on a parabola.",
  "body": " Secant lines on a parabola   Let . Find the slope of the secant line through and .    Since the slope of the secant line is the average rate of change, we get that the slope must be equal to    "
},
{
  "id": "p-113",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#p-113",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent line instantaneous rate of change "
},
{
  "id": "definition-tangent-lines",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#definition-tangent-lines",
  "type": "Definition",
  "number": "3.1.2",
  "title": "Tangent Lines.",
  "body": " Tangent Lines   The tangent line to a curve through a point is the line passing through with slope given by assuming this limit exists. The slope of the tangent line represents the slope of the graph of at and gives the instantaneous rate of change of at .   "
},
{
  "id": "example-tangent-line-to-a-root",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#example-tangent-line-to-a-root",
  "type": "Example",
  "number": "3.1.3",
  "title": "Tangent line to a root.",
  "body": " Tangent line to a root   Find the equation of the tangent line to through the point .    We need two things to find the equation of a line: the slope of the line and a point on the line. Since we know the tangent line has to pass through , we just need to find the slope. The slope is given by Hence the equation of the tangent line through is    "
},
{
  "id": "example-velocity-from-position",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#example-velocity-from-position",
  "type": "Example",
  "number": "3.1.4",
  "title": "Velocity from position.",
  "body": " Velocity from position   The displacement (i.e. position) of a particle moving in a straight line is described by the function , where is in seconds and is in meters. Find the velocity, or instantaneous rate of change, of the particle at .    The velocity is just the slope of the tangent line to at , which we can find as follows:   At this step it's a little unclear where to go next, so we'll try long division. If we do so, we get Hence the velocity must be meters per second.   "
},
{
  "id": "example-velocity-revisited",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#example-velocity-revisited",
  "type": "Example",
  "number": "3.1.5",
  "title": "Velocity revisited.",
  "body": " Velocity revisited   Let be given as in . Find the velocity at .    We know that the velocity should be , but we'll try to find it again using our new formula. So the velocity should also be    "
},
{
  "id": "p-127",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#p-127",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derivative "
},
{
  "id": "definition-definition-of-the-derivative",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#definition-definition-of-the-derivative",
  "type": "Definition",
  "number": "3.1.6",
  "title": "Definition of the Derivative.",
  "body": " Definition of the Derivative  derivative definition  functions differentiable   Let be a function. Then its derivative at is the number given by assuming the limit exists. If this limit exists, we say that the function is differentiable at .   "
},
{
  "id": "example-slope-of-the-sine-function",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#example-slope-of-the-sine-function",
  "type": "Example",
  "number": "3.1.7",
  "title": "Slope of the sine function.",
  "body": " Slope of the sine function   Let . Find its slope at .    The slope at is exactly , which is    "
},
{
  "id": "example-tangent-line-of-the-sine-function",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#example-tangent-line-of-the-sine-function",
  "type": "Example",
  "number": "3.1.8",
  "title": "Tangent line of the sine function.",
  "body": " Tangent line of the sine function   Find the equation of the tangent line to at .    The tangent line must pass through and must have slope , so its equation is or just .   "
},
{
  "id": "section-the-derivative-as-a-function",
  "level": "1",
  "url": "section-the-derivative-as-a-function.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Derivative as a Function",
  "body": " The Derivative as a Function   The Derivative Function  There's no reason we can't look at an arbitrary value for in the definition of given in . If we do this, we can define the derivative function .   The Derivative Function  derivative derivative function   Let be a function. The derivative function , or more simply derivative , of is the function defined by assuming this limit exists. This is also often denoted by or . If this limit exists for all in some interval , we say that is differentiable on , or more simply differentiable if we do not wish to specify the interval.     Computing a derivative   Compute the derivative of .    Using , we have     If is a function, then its derivative (assuming it exists!) is a function that gives the rate of change of at , or equivalently the slope of the tangent line to at .   Sketching a derivative   A function is given by the following graph:     Graph of .    Sketch .    Remember that represents the slope of , so sketching amounts to sketching the different values that the slopes of can take. We can eyeball these values from . A rough sketch of , added to the original graph, may look like the following:     Graph of .      We've mentioned before that continuous functions are functions whose graphs can be drawn without lifting your pencil off of the page. Likewise, differentiable functions are functions whose graphs can be drawn \"smoothly\", without any sudden movements or cusps, and without drawing a vertical tangent line. If we think about these two concepts, we may suspect that a differentiable function is also continuous. If we can draw a graph smoothly, we certainly can't lift our pencil off the page to draw it. The next theorem makes this precise.   Differentiable Functions Are Continuous   Let be a function that is differentiable at . Then is continuous at .    We need to show that exists and is equal to . To do this, we'll start by considering (somewhat counterintuitively) : Note that we are using our alternate definition of the derivative here.  Now we can prove that as follows: So , which means that is continuous at .    At this point we might think that a continuous function should also be differentiable, but this is not the case.   A continuous function that is not differentiable at a point   Let . Show that is not differentiable at .    If we graph it looks like it shouldn't be differentiable at because of the cusp. We'll try to prove this mathematically by showing that the limit in doesn't exist if . First, we'll compute the left hand limit: Now, the right hand limit: Since these limits are different, does not exist. Hence is not differentiable at .     You may think that a continuous function must at least be differentiable \"almost everywhere\" at this point. After all, how could it be possible to draw a graph without lifting your pencil off the paper that still has a cusp or a vertical tangent line everywhere ? Most mathematicians before the century thought this as well, until Weierstrass came up with a function, the Weierstrass function , that is continuous everywhere but differentiable nowhere .     Higher Order Derivatives   Acceleration from position   The position of some particle moving in a line is given by , where is in seconds and is in meters. Find , the acceleration of the particle at time .    Acceleration is the rate of change of velocity, and velocity is the rate of change of position. So we should probably find the velocity first! Let's call it . We have Now we can get the acceleration as well:     In , we had to take two derivatives of the original function in order to get the acceleration . In other words, acceleration is the second derivative of position . So , which we also write as or . This is an example of a second-order derivative . In general, we have the following definition.   -order Derivatives  derivative -order derivative   Let be a function. The -order derivative of is the function obtained by differentiating  times. This function is denoted by If or , we typically write , and instead of or .    Although it gets more difficult to assign a physical or geometric significance to higher order derivatives, we can still derive meaning from the second derivative. One interpretation of the second derivative is as acceleration, as shown in , and it turns out there's a nice geometric interpretation as well. Recall that if is a function then represents the slope, or rate of change, of the graph of at . Therefore represents the rate of change of the slope, i.e. how quickly the slope is increasing or decreasing. If then the slope of should be increasing, leading to a u-shaped graph. Conversely, if then the slope of should be decreasing, leading to an upside down u-shaped graph. This leads to the following definition.   Concavity   Let be a function with second derivative . We say that is concave up (respectively, concave down ) on an interval if (respectively, ) on that interval.    So functions that are concave up on an interval tend to be u-shaped on that interval, and functions that are concave down tend to be upside down u-shaped. See .   Concavity                  "
},
{
  "id": "definition-the-derivative-function",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#definition-the-derivative-function",
  "type": "Definition",
  "number": "3.2.1",
  "title": "The Derivative Function.",
  "body": " The Derivative Function  derivative derivative function   Let be a function. The derivative function , or more simply derivative , of is the function defined by assuming this limit exists. This is also often denoted by or . If this limit exists for all in some interval , we say that is differentiable on , or more simply differentiable if we do not wish to specify the interval.   "
},
{
  "id": "example-computing-a-derivative",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#example-computing-a-derivative",
  "type": "Example",
  "number": "3.2.2",
  "title": "Computing a derivative.",
  "body": " Computing a derivative   Compute the derivative of .    Using , we have    "
},
{
  "id": "example-sketching-a-derivative",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#example-sketching-a-derivative",
  "type": "Example",
  "number": "3.2.3",
  "title": "Sketching a derivative.",
  "body": " Sketching a derivative   A function is given by the following graph:     Graph of .    Sketch .    Remember that represents the slope of , so sketching amounts to sketching the different values that the slopes of can take. We can eyeball these values from . A rough sketch of , added to the original graph, may look like the following:     Graph of .     "
},
{
  "id": "theorem-differentiable-functions-are-continuous",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#theorem-differentiable-functions-are-continuous",
  "type": "Theorem",
  "number": "3.2.6",
  "title": "Differentiable Functions Are Continuous.",
  "body": " Differentiable Functions Are Continuous   Let be a function that is differentiable at . Then is continuous at .    We need to show that exists and is equal to . To do this, we'll start by considering (somewhat counterintuitively) : Note that we are using our alternate definition of the derivative here.  Now we can prove that as follows: So , which means that is continuous at .   "
},
{
  "id": "example-a-continuous-function-that-is-not-differentiable-at-a-point",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#example-a-continuous-function-that-is-not-differentiable-at-a-point",
  "type": "Example",
  "number": "3.2.7",
  "title": "A continuous function that is not differentiable at a point.",
  "body": " A continuous function that is not differentiable at a point   Let . Show that is not differentiable at .    If we graph it looks like it shouldn't be differentiable at because of the cusp. We'll try to prove this mathematically by showing that the limit in doesn't exist if . First, we'll compute the left hand limit: Now, the right hand limit: Since these limits are different, does not exist. Hence is not differentiable at .   "
},
{
  "id": "example-acceleration-from-position",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#example-acceleration-from-position",
  "type": "Example",
  "number": "3.2.8",
  "title": "Acceleration from position.",
  "body": " Acceleration from position   The position of some particle moving in a line is given by , where is in seconds and is in meters. Find , the acceleration of the particle at time .    Acceleration is the rate of change of velocity, and velocity is the rate of change of position. So we should probably find the velocity first! Let's call it . We have Now we can get the acceleration as well:    "
},
{
  "id": "p-153",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#p-153",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second-order derivative "
},
{
  "id": "definition-nth-order-derivatives",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#definition-nth-order-derivatives",
  "type": "Definition",
  "number": "3.2.9",
  "title": "<span class=\"process-math\">\\(n^{\\text{th}}\\)<\/span>-order Derivatives.",
  "body": " -order Derivatives  derivative -order derivative   Let be a function. The -order derivative of is the function obtained by differentiating  times. This function is denoted by If or , we typically write , and instead of or .   "
},
{
  "id": "definition-concavity",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#definition-concavity",
  "type": "Definition",
  "number": "3.2.10",
  "title": "Concavity.",
  "body": " Concavity   Let be a function with second derivative . We say that is concave up (respectively, concave down ) on an interval if (respectively, ) on that interval.   "
},
{
  "id": "figure-concavity-graphs",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#figure-concavity-graphs",
  "type": "Figure",
  "number": "3.2.11",
  "title": "",
  "body": " Concavity                "
},
{
  "id": "section-differentiation-formulas",
  "level": "1",
  "url": "section-differentiation-formulas.html",
  "type": "Section",
  "number": "3.3",
  "title": "Differentiation Formulas",
  "body": " Differentiation Formulas   Now we start to find methods that allow us to compute derivatives without going back to . Perhaps the easiest rule is the constant rule , which just says that the derivative of a constant is . We'll derive more complicated rules in this section and the next two.    The Power Rule and Trigonometric Derivatives  Our first goal will be to determine a general formula for the derivative of for some power . If is a whole number, then we can find the derivative of without too much trouble. In fact, from the it's not too hard to show that the derivative of is , the derivative of is , the derivative of is , and so on. This suggests our first derivative rule, the power rule .   The Power Rule  derivative differentiation formulas power rule   Let where is some real number. Then .    Note that is actually quite general: it works for all powers of ! This includes negative powers and fractional powers.   Derivatives using the power rule   Find the derivatives of the following functions:  .  .  .      The derivative of isn't too hard to find using the power rule, and we quickly get . For , first rewrite it as . Then . Finally, .    With a little bit of geometry and the squeeze theorem, we can get the derivatives of the basic trigonometric functions and .   Derivatives of Sine and Cosine  derivatives differentiation formulas sine and cosine   Let be in radians. Then     Note that if is in degrees instead of radians these formulas don't work. Instead, they become    Concavity of the sine function   On which intervals is concave up?    We need to find where is positive. Since , this means we need to figure out where is negative . If we go back to the unit circle definition of sine, then we can see that on the following intervals: So is concave up on every open interval of the form where is some integer.      Derivatives of Sums and Constant Multiples  Now that we have derivative formulas for some basic functions, we want to extend these to more complicated functions. For this section we'll look at what happens when we multiply a function by a constant or add it to another function. In the next two sections we'll consider more advanced rules.   Constant Multiple Rule  derivative differentiation formulas constant multiple rule   Let be differentiable function and let be some constant. Then .    To prove this, we go back to : Hence the derivative of is .    We can find the derivative of the sum of two functions just as easily.   Sum Rule  derivative differentiation formulas sum rule   Let and be two differentiable functions. Then .      Product Rule and Quotient Rule  Many functions can be written in the form , where may each have previously known derivatives. What we want to do now is to find a way to get the derivative of from the derivatives of and . We do this using the product rule .   The Product Rule  derivative differentiation formulas product rule   Let and be differentiable functions. Then     We prove this using the definition of the derivative:      Using the product rule   Let . Find .    We could foil this out and take derivatives, but it will be easier to use the product rule.      The Quotient Rule  Now that we know how to differentiate products, we move on to quotients.   The Quotient Rule   Let and be differentiable functions. Then wherever .     Derivative of tangent   Let . Find .    Since , then we can apply the quotient rule to get the derivative of :     The derivatives for and may also be computed using the quotient rule and the facts that and .   "
},
{
  "id": "p-158",
  "level": "2",
  "url": "section-differentiation-formulas.html#p-158",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constant rule "
},
{
  "id": "p-159",
  "level": "2",
  "url": "section-differentiation-formulas.html#p-159",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power rule "
},
{
  "id": "theorem-the-power-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#theorem-the-power-rule",
  "type": "Theorem",
  "number": "3.3.1",
  "title": "The Power Rule.",
  "body": " The Power Rule  derivative differentiation formulas power rule   Let where is some real number. Then .   "
},
{
  "id": "example-derivatives-using-the-power-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#example-derivatives-using-the-power-rule",
  "type": "Example",
  "number": "3.3.2",
  "title": "Derivatives using the power rule.",
  "body": " Derivatives using the power rule   Find the derivatives of the following functions:  .  .  .      The derivative of isn't too hard to find using the power rule, and we quickly get . For , first rewrite it as . Then . Finally, .   "
},
{
  "id": "theorem-derivatives-of-sine-and-cosine",
  "level": "2",
  "url": "section-differentiation-formulas.html#theorem-derivatives-of-sine-and-cosine",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "Derivatives of Sine and Cosine.",
  "body": " Derivatives of Sine and Cosine  derivatives differentiation formulas sine and cosine   Let be in radians. Then    "
},
{
  "id": "example-concavity-of-the-sine-function",
  "level": "2",
  "url": "section-differentiation-formulas.html#example-concavity-of-the-sine-function",
  "type": "Example",
  "number": "3.3.4",
  "title": "Concavity of the sine function.",
  "body": " Concavity of the sine function   On which intervals is concave up?    We need to find where is positive. Since , this means we need to figure out where is negative . If we go back to the unit circle definition of sine, then we can see that on the following intervals: So is concave up on every open interval of the form where is some integer.   "
},
{
  "id": "theorem-constant-multiple-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#theorem-constant-multiple-rule",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "Constant Multiple Rule.",
  "body": " Constant Multiple Rule  derivative differentiation formulas constant multiple rule   Let be differentiable function and let be some constant. Then .    To prove this, we go back to : Hence the derivative of is .   "
},
{
  "id": "theorem-sum-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#theorem-sum-rule",
  "type": "Theorem",
  "number": "3.3.6",
  "title": "Sum Rule.",
  "body": " Sum Rule  derivative differentiation formulas sum rule   Let and be two differentiable functions. Then .   "
},
{
  "id": "p-174",
  "level": "2",
  "url": "section-differentiation-formulas.html#p-174",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "product rule "
},
{
  "id": "theorem-the-product-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#theorem-the-product-rule",
  "type": "Theorem",
  "number": "3.3.7",
  "title": "The Product Rule.",
  "body": " The Product Rule  derivative differentiation formulas product rule   Let and be differentiable functions. Then     We prove this using the definition of the derivative:    "
},
{
  "id": "example-using-the-product-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#example-using-the-product-rule",
  "type": "Example",
  "number": "3.3.8",
  "title": "Using the product rule.",
  "body": " Using the product rule   Let . Find .    We could foil this out and take derivatives, but it will be easier to use the product rule.   "
},
{
  "id": "theorem-the-quotient-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#theorem-the-quotient-rule",
  "type": "Theorem",
  "number": "3.3.9",
  "title": "The Quotient Rule.",
  "body": " The Quotient Rule   Let and be differentiable functions. Then wherever .   "
},
{
  "id": "example-derivative-of-tangent",
  "level": "2",
  "url": "section-differentiation-formulas.html#example-derivative-of-tangent",
  "type": "Example",
  "number": "3.3.10",
  "title": "Derivative of tangent.",
  "body": " Derivative of tangent   Let . Find .    Since , then we can apply the quotient rule to get the derivative of :    "
},
{
  "id": "section-the-chain-rule",
  "level": "1",
  "url": "section-the-chain-rule.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Chain Rule",
  "body": " The Chain Rule  At this point, we can take derivatives of sums, differences, products and quotients of functions. However, these rules aren't very useful for differentiating functions like . We could technically evaluate using these rules but it would be an awful way to spend your weekend. But if we make the substitution , then we can rewrite as , which is much easier to differentiate: . At this step we might be tempted to say that , but this isn't quite right. To get the actual derivative we need to consider how the new variable depends on as well. The Chain Rule is what we need.   The Chain Rule  derivative differentiation formulas chain rule   Let and be differentiable functions. Then Equivalently, if we set we have      Using the chain rule   Let . Find .    We'll try the same trick we used before and we'll set . Then the chain rule says that     As the last example highlighted, we can use the chain rule in combination with any of the other derivative rules we know if the function we're differentiating is complicated.   Combining rules   Let . Find .    We'll let stand in for the \"inside function.\" Then we have and so      Chain rule within a chain rule   Find the slope of at .    We need to compute . First, note that , so let . Now we could try to use the chain rule right here but this would require finding , and is itself a complicated function of . So let , and finally let . Then we can say that We could plug in what are in terms of and then plug in , but it's easier to just find at and enter these values into the above. At we have and , so     "
},
{
  "id": "p-184",
  "level": "2",
  "url": "section-the-chain-rule.html#p-184",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Chain Rule "
},
{
  "id": "theorem-the-chain-rule",
  "level": "2",
  "url": "section-the-chain-rule.html#theorem-the-chain-rule",
  "type": "Theorem",
  "number": "3.4.1",
  "title": "The Chain Rule.",
  "body": " The Chain Rule  derivative differentiation formulas chain rule   Let and be differentiable functions. Then Equivalently, if we set we have    "
},
{
  "id": "example-using-the-chain-rule",
  "level": "2",
  "url": "section-the-chain-rule.html#example-using-the-chain-rule",
  "type": "Example",
  "number": "3.4.2",
  "title": "Using the chain rule.",
  "body": " Using the chain rule   Let . Find .    We'll try the same trick we used before and we'll set . Then the chain rule says that    "
},
{
  "id": "example-combining-rules",
  "level": "2",
  "url": "section-the-chain-rule.html#example-combining-rules",
  "type": "Example",
  "number": "3.4.3",
  "title": "Combining rules.",
  "body": " Combining rules   Let . Find .    We'll let stand in for the \"inside function.\" Then we have and so    "
},
{
  "id": "example-chain-rule-within-a-chain-rule",
  "level": "2",
  "url": "section-the-chain-rule.html#example-chain-rule-within-a-chain-rule",
  "type": "Example",
  "number": "3.4.4",
  "title": "Chain rule within a chain rule.",
  "body": " Chain rule within a chain rule   Find the slope of at .    We need to compute . First, note that , so let . Now we could try to use the chain rule right here but this would require finding , and is itself a complicated function of . So let , and finally let . Then we can say that We could plug in what are in terms of and then plug in , but it's easier to just find at and enter these values into the above. At we have and , so    "
},
{
  "id": "section-implicit-differentiation",
  "level": "1",
  "url": "section-implicit-differentiation.html",
  "type": "Section",
  "number": "3.5",
  "title": "Implicit Differentiation",
  "body": " Implicit Differentiation   Derivative of an implicit function   Consider the curve given by the equation . Find the slope of this curve at the point .    We could try to solve for and then differentiate that to find the slope, but we have a slight problem: it's impossible, at least in terms of \"elementary functions\". However, we can still use the chain rule to find , at least in terms of and . We just need to remember that is a function of . If we differentiate with respect to , we get and so So the slope of the curve at is just .    The method we used to get in is called implicit differentiation . It's extremely useful if we want to solve for without first solving for . Even if we can solve for without too much trouble, it's often easier to find implicitly as the next example shows.   Implicit differentiation to save algebra   Let . Find .    If we let , then . Then which means that     We must also be aware of when to use appropriate derivative rules when doing implicit differentiation.   Chain and quotient rule   Suppose is defined implicitly by . Find .    We start by taking the derivative with respect to of each side of the equation:   Therefore and we can solve this for : or just      A differential equation   Let denote the population of the United States, where is in millions and is the number of years after 1990. Then the growth of can be modeled by the differential equation  According to this model, it's not too hard to see that should be positive given the current population of the US, so the model predicts the population to increase. Is this rate of growth increasing or decreasing?    We need to find , which is the rate of change of . This means we need to differentiate both sides of the differential equation with respect to : The current population is about 323.1 million, so we can take , which also gives and so Hence it appears that the rate of population increase is itself decreasing, which implies that the population growth of the US is slowing down.    "
},
{
  "id": "example-derivative-of-an-implicit-function",
  "level": "2",
  "url": "section-implicit-differentiation.html#example-derivative-of-an-implicit-function",
  "type": "Example",
  "number": "3.5.1",
  "title": "Derivative of an implicit function.",
  "body": " Derivative of an implicit function   Consider the curve given by the equation . Find the slope of this curve at the point .    We could try to solve for and then differentiate that to find the slope, but we have a slight problem: it's impossible, at least in terms of \"elementary functions\". However, we can still use the chain rule to find , at least in terms of and . We just need to remember that is a function of . If we differentiate with respect to , we get and so So the slope of the curve at is just .   "
},
{
  "id": "p-195",
  "level": "2",
  "url": "section-implicit-differentiation.html#p-195",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "implicit differentiation "
},
{
  "id": "example-implicit-differentiation-to-save-algebra",
  "level": "2",
  "url": "section-implicit-differentiation.html#example-implicit-differentiation-to-save-algebra",
  "type": "Example",
  "number": "3.5.2",
  "title": "Implicit differentiation to save algebra.",
  "body": " Implicit differentiation to save algebra   Let . Find .    If we let , then . Then which means that    "
},
{
  "id": "example-chain-and-quotient-rule",
  "level": "2",
  "url": "section-implicit-differentiation.html#example-chain-and-quotient-rule",
  "type": "Example",
  "number": "3.5.3",
  "title": "Chain and quotient rule.",
  "body": " Chain and quotient rule   Suppose is defined implicitly by . Find .    We start by taking the derivative with respect to of each side of the equation:   Therefore and we can solve this for : or just    "
},
{
  "id": "example-a-differential-equation",
  "level": "2",
  "url": "section-implicit-differentiation.html#example-a-differential-equation",
  "type": "Example",
  "number": "3.5.4",
  "title": "A differential equation.",
  "body": " A differential equation   Let denote the population of the United States, where is in millions and is the number of years after 1990. Then the growth of can be modeled by the differential equation  According to this model, it's not too hard to see that should be positive given the current population of the US, so the model predicts the population to increase. Is this rate of growth increasing or decreasing?    We need to find , which is the rate of change of . This means we need to differentiate both sides of the differential equation with respect to : The current population is about 323.1 million, so we can take , which also gives and so Hence it appears that the rate of population increase is itself decreasing, which implies that the population growth of the US is slowing down.   "
},
{
  "id": "section-related-rates",
  "level": "1",
  "url": "section-related-rates.html",
  "type": "Section",
  "number": "3.6",
  "title": "Related Rates",
  "body": " Related Rates   Changing volume on a sphere   The radius of a sphere is increasing at a rate of 4 . How fast is the volume increasing when the radius is 13 ?    First, let's assign names to all of the changing quantities in this problem: Note that we're considering and to be functions of time, i.e. and , where is in seconds. Then we're given that and we need to find when . To do this, we had better find some relationship between and . We can find this by looking at the volume formula for a sphere: This equation relates and , and if we take the derivatives of both sides with respect to time (using implicit differentiation) then we get an equation relating and . So let's do that: Now we can plug in our given information to get So the volume is increasing at a rate of 2704\\pi .    Note that we never found what and were in , but we didn't need to. All we needed to find was a relationship between the two changing quantities, i.e. the two derivatives, to answer the question.   A tank problem   Water is leaking out of a conical tank at a rate of 10000 while water is being pumped into the tank at some (unknown) constant rate. The tank has a height of 6 and the diameter of the top is 4 . If the water level is rising at a rate of 20 when the height of the water is 2 , what is the rate at which water is being poured into the tank?    We have a lot of information to process here, so we'll take things a step at a time. The changing quantities are where is in minutes. We need to find the rate at which water is entering the tank, so let's call this mystery number . Then all we know about is that it's related to the rate that the volume is changing. In particular, we should have . So to find we need to find , which means we need to set up a relationship between and the other changing quantities to determine how exactly is changing, using the fact that when (after converting to centimeters).  Using the fact that the water is in a conical tank, we can use the formula for the volume of a cone to say that . If we differentiate both sides with respect to , then we get Unfortunately, we don't have any information on or that we can use, just information on and . So we need to get in terms of . By similar triangles, we can say that , and so and likewise . Hence which boils down to   Now, finally , we can answer the original question. The rate that water is flowing into the tank is or just 289252.68 . In terms of meters this is .29 , which perhaps looks a bit more reasonable.    "
},
{
  "id": "example-changing-volume-on-a-sphere",
  "level": "2",
  "url": "section-related-rates.html#example-changing-volume-on-a-sphere",
  "type": "Example",
  "number": "3.6.1",
  "title": "Changing volume on a sphere.",
  "body": " Changing volume on a sphere   The radius of a sphere is increasing at a rate of 4 . How fast is the volume increasing when the radius is 13 ?    First, let's assign names to all of the changing quantities in this problem: Note that we're considering and to be functions of time, i.e. and , where is in seconds. Then we're given that and we need to find when . To do this, we had better find some relationship between and . We can find this by looking at the volume formula for a sphere: This equation relates and , and if we take the derivatives of both sides with respect to time (using implicit differentiation) then we get an equation relating and . So let's do that: Now we can plug in our given information to get So the volume is increasing at a rate of 2704\\pi .   "
},
{
  "id": "example-a-tank-problem",
  "level": "2",
  "url": "section-related-rates.html#example-a-tank-problem",
  "type": "Example",
  "number": "3.6.2",
  "title": "A tank problem.",
  "body": " A tank problem   Water is leaking out of a conical tank at a rate of 10000 while water is being pumped into the tank at some (unknown) constant rate. The tank has a height of 6 and the diameter of the top is 4 . If the water level is rising at a rate of 20 when the height of the water is 2 , what is the rate at which water is being poured into the tank?    We have a lot of information to process here, so we'll take things a step at a time. The changing quantities are where is in minutes. We need to find the rate at which water is entering the tank, so let's call this mystery number . Then all we know about is that it's related to the rate that the volume is changing. In particular, we should have . So to find we need to find , which means we need to set up a relationship between and the other changing quantities to determine how exactly is changing, using the fact that when (after converting to centimeters).  Using the fact that the water is in a conical tank, we can use the formula for the volume of a cone to say that . If we differentiate both sides with respect to , then we get Unfortunately, we don't have any information on or that we can use, just information on and . So we need to get in terms of . By similar triangles, we can say that , and so and likewise . Hence which boils down to   Now, finally , we can answer the original question. The rate that water is flowing into the tank is or just 289252.68 . In terms of meters this is .29 , which perhaps looks a bit more reasonable.   "
},
{
  "id": "section-linear-approximations",
  "level": "1",
  "url": "section-linear-approximations.html",
  "type": "Section",
  "number": "3.7",
  "title": "Linear Approximations",
  "body": " Linear Approximations  Suppose we graph the tangent line to at . The equation of this line will be If we look at the tangent line next to the graph, we'll see that the line is very close to the graph of if is very close to . So we can use the equation of the tangent line to approximate when is near . For example, we can say that We call this the linear approximation of at .   Linear Approximation  derivative linear approximation   Let be a function that is differentiable at . The linear approximation (or linearization ) of at is the function given by     The formula of the linear approximation to a function at is nothing more than the equation of the tangent line to at .   Linear approximation of sine   Find the linear approximation of at and use this to estimate .    The linear approximation is given by so . Therefore since is very close to .     Estimating a tangent   Estimate .    We want to estimate this using a linear approximation, and we want to make sure the linear approximation is easy to set up. This means we want to base the linear approximation at a value of that both tangent and its derivative are relatively easy to compute at, and is also close to . So we'll pick and find the linear approximation to at : Set . Then So      Estimating the population of the United States in 2020   Use the differential equation from and the fact that the current population of the US is about 323.1 million to estimate the population of the US in 2020.    Recall that in represented the population of the US (in millions) years after 1990. To estimate the population in 2020, we want to find the linearization of at . This is given by Since and we have Hence the population of the US in 2020 should be or about 331.8 million people.    "
},
{
  "id": "p-211",
  "level": "2",
  "url": "section-linear-approximations.html#p-211",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear approximation "
},
{
  "id": "definition-linear-approximation",
  "level": "2",
  "url": "section-linear-approximations.html#definition-linear-approximation",
  "type": "Definition",
  "number": "3.7.1",
  "title": "Linear Approximation.",
  "body": " Linear Approximation  derivative linear approximation   Let be a function that is differentiable at . The linear approximation (or linearization ) of at is the function given by    "
},
{
  "id": "example-linear-approximation-of-sine",
  "level": "2",
  "url": "section-linear-approximations.html#example-linear-approximation-of-sine",
  "type": "Example",
  "number": "3.7.2",
  "title": "Linear approximation of sine.",
  "body": " Linear approximation of sine   Find the linear approximation of at and use this to estimate .    The linear approximation is given by so . Therefore since is very close to .   "
},
{
  "id": "example-estimating-a-tangent",
  "level": "2",
  "url": "section-linear-approximations.html#example-estimating-a-tangent",
  "type": "Example",
  "number": "3.7.3",
  "title": "Estimating a tangent.",
  "body": " Estimating a tangent   Estimate .    We want to estimate this using a linear approximation, and we want to make sure the linear approximation is easy to set up. This means we want to base the linear approximation at a value of that both tangent and its derivative are relatively easy to compute at, and is also close to . So we'll pick and find the linear approximation to at : Set . Then So    "
},
{
  "id": "example-estimating-the-population-of-the-united-states-in-2020",
  "level": "2",
  "url": "section-linear-approximations.html#example-estimating-the-population-of-the-united-states-in-2020",
  "type": "Example",
  "number": "3.7.4",
  "title": "Estimating the population of the United States in 2020.",
  "body": " Estimating the population of the United States in 2020   Use the differential equation from and the fact that the current population of the US is about 323.1 million to estimate the population of the US in 2020.    Recall that in represented the population of the US (in millions) years after 1990. To estimate the population in 2020, we want to find the linearization of at . This is given by Since and we have Hence the population of the US in 2020 should be or about 331.8 million people.   "
},
{
  "id": "section-exponential-functions",
  "level": "1",
  "url": "section-exponential-functions.html",
  "type": "Section",
  "number": "4.1",
  "title": "Exponential Functions",
  "body": " Exponential Functions  Many changing quantities can be modeled by using exponential functions , which are functions of the form where . Exponential functions have several important properties which we list below.   Properties of Exponential Functions  exponential functions properties   Let and be real numbers. Then  and .  .  and .  is .  .  Finally, if as well, then .     Limit of an exponential function   Let . Find .    First, note that So as , the denominator as well. Hence the fraction as a whole should decrease to , and so     In general, we have the following:   Every exponential function is continuous everywhere. In fact, they are differentiable everywhere, though we'll see more about that later. We can also say the following: if then is an increasing function, and if then is a decreasing function. In neither case will have any local maxima or minima.  Of all the different exponential functions, the most important one is the so-called natural exponential function , denoted where This is the unique exponential function by the property that its derivative at is . In fact, as we will see later is its own derivative.   Exponential derivative   Using the fact that , compute .    We'll have to use the chain rule. If we do so, we get     Since is its own derivative, this makes computing derivatives of functions of the form relatively straightforward:   Technically, we have worked with the natural exponential function before in this class. Recall from that if represents the population of the USA (in millions) years after 1990, then we said that satisfied the differential equation If we say the population of the US in 1990 was 250 million (i.e. ), then Now, in we used linear approximation to estimate the population of the US using this model in the year 2020, where we got 331.8 million people. If we use the above formula for , we get that the population of the US in 2020 should be about or 339.8 million people.   The Census Bureau predicted in 2014 that the population in 2020 would be 334.5 million. So our simple predictions before actually aren't too far off from what the Census Bureau is expecting. This suggests that the differential equation is a reasonable model for the growth of the US.   "
},
{
  "id": "p-221",
  "level": "2",
  "url": "section-exponential-functions.html#p-221",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential functions "
},
{
  "id": "theorem-properties-of-exponential-functions",
  "level": "2",
  "url": "section-exponential-functions.html#theorem-properties-of-exponential-functions",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "Properties of Exponential Functions.",
  "body": " Properties of Exponential Functions  exponential functions properties   Let and be real numbers. Then  and .  .  and .  is .  .  Finally, if as well, then .   "
},
{
  "id": "example-limit-of-an-exponential-function",
  "level": "2",
  "url": "section-exponential-functions.html#example-limit-of-an-exponential-function",
  "type": "Example",
  "number": "4.1.2",
  "title": "Limit of an exponential function.",
  "body": " Limit of an exponential function   Let . Find .    First, note that So as , the denominator as well. Hence the fraction as a whole should decrease to , and so    "
},
{
  "id": "p-227",
  "level": "2",
  "url": "section-exponential-functions.html#p-227",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural exponential function "
},
{
  "id": "example-exponential-derivative",
  "level": "2",
  "url": "section-exponential-functions.html#example-exponential-derivative",
  "type": "Example",
  "number": "4.1.3",
  "title": "Exponential derivative.",
  "body": " Exponential derivative   Using the fact that , compute .    We'll have to use the chain rule. If we do so, we get    "
},
{
  "id": "section-logarithms",
  "level": "1",
  "url": "section-logarithms.html",
  "type": "Section",
  "number": "4.2",
  "title": "Logarithms",
  "body": " Logarithms   Inverse Function Review  Suppose we want to solve the equation for . Then we can only do so unambiguously if is an invertible function .   Invertible Functions  functions invertible functions   A function is invertible if and only if it is a one-to-one function. That is, forces .    Since a function is one-to-one if and only if its graph passes the horizontal line test, the horizontal line test also gives us a useful way to check if a function is invertible.   Let , the natural exponential function introduced in . Then is an invertible function, since its graph passes the horizontal line test.   If a function is invertible, then there exists an inverse function  satisfying the following equations: Essentially, is the rule that undoes the transformation that applies to . The domain of is the range of and the range of is the domain of . Note that !.  The graph of an inverse function is related to the graph of the original function in a very nice way. To get the graph of from , just reflect the graph of across the line .   Graphing the inverse of the natural exponential   Let . Graph .    If we graph and then rotate the graph across the line , we get      The inverse of .       Calculus with Inverse Functions  There are two important things to notice about the graph of the inverse function in : it's continuous and differentiable. This is because the same was true of the original graph, and if we think about it this should be true in general as well since graphing the inverse doesn't add any new gaps or cusps to the graph.   Continuity and Differentiability of Inverses   Let be a continuous (respectively, differentiable) function. Suppose that is invertible, and has inverse . Then is continuous (respectively, differentiable).     Finding the derivative of an inverse function   Let and note that is invertible. Find the derivative of .    One way to do this is just start by finding . So we'll set , solve for and then switch and . If we do this, we get so (and note that the domain of is since this is the range of !). Hence     The method used in will certainly work in simple cases. But what do we do if we can't (or don't want to) find an explicit formula for the inverse function? The following formula will help us to do this.   Derivative of an Inverse Function  functions inverse functions derivatives   Let be a differentiable function with inverse . Assume that is itself differentiable. Then     First, let , so that we need to find . Then we can say that . Now differentiate this equation implicitly to get or just      Exponential inverse revisited   Using the fact that the derivative of is itself, find the derivative of its inverse.    Let . Then by we have So the derivative of the inverse of is .     Derivative at a point   Let . Find     By , we know that By inspection, which means . Since this gives       Logarithms  Since exponential functions are important in mathematics and its applications, their inverses are important as well. Each exponential function ( ) has an inverse function that we call the logarithm with base , and denote by . The domain of each logarithm is and the range is . The defining properties of the logarithm function are as follows: Essentially, logarithms and exponentials cancel each other out. To put this another way, is the exponent needed to turn into .  We can say a few things about logarithms just from looking at graphs of exponentials. Suppose that . Then is both continuous and differentiable for all , and the derivative of approaches as .  The properties of the exponential listed in have corresponding properties for logarithms.   Properties of Logarithm Functions  logarithm functions properties   Let with . Let be positive real numbers, and let be any real number. Then  and .  .  .  .      An important takeaway from is that logarithms turn the complicated operations of multiplication and division into the simpler operations of addition and subtraction.  Since every exponential function has a corresponding logarithm, the natural exponential function has a logarithm as well. We call this inverse the natural logarithm and denote it by . Note that by .   Simplifying an exponential   Simplify and .    We'll simplify by using the cancellation property . First, we need to put the entire exponent inside of the natural log: and      shows us that every exponential function can be written in terms of the natural exponential: . Similarly, every logarithm can be written in terms of the natural logarithm by using the change of base formula:    "
},
{
  "id": "p-233",
  "level": "2",
  "url": "section-logarithms.html#p-233",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invertible function "
},
{
  "id": "definition-invertible-functions",
  "level": "2",
  "url": "section-logarithms.html#definition-invertible-functions",
  "type": "Definition",
  "number": "4.2.1",
  "title": "Invertible Functions.",
  "body": " Invertible Functions  functions invertible functions   A function is invertible if and only if it is a one-to-one function. That is, forces .   "
},
{
  "id": "example-exponential-inverse",
  "level": "2",
  "url": "section-logarithms.html#example-exponential-inverse",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": " Let , the natural exponential function introduced in . Then is an invertible function, since its graph passes the horizontal line test.  "
},
{
  "id": "p-237",
  "level": "2",
  "url": "section-logarithms.html#p-237",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse function "
},
{
  "id": "example-graphing-the-inverse-of-the-natural-exponential",
  "level": "2",
  "url": "section-logarithms.html#example-graphing-the-inverse-of-the-natural-exponential",
  "type": "Example",
  "number": "4.2.3",
  "title": "Graphing the inverse of the natural exponential.",
  "body": " Graphing the inverse of the natural exponential   Let . Graph .    If we graph and then rotate the graph across the line , we get      The inverse of .    "
},
{
  "id": "theorem-continuity-and-differentiability-of-inverses",
  "level": "2",
  "url": "section-logarithms.html#theorem-continuity-and-differentiability-of-inverses",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "Continuity and Differentiability of Inverses.",
  "body": " Continuity and Differentiability of Inverses   Let be a continuous (respectively, differentiable) function. Suppose that is invertible, and has inverse . Then is continuous (respectively, differentiable).   "
},
{
  "id": "example-finding-the-derivative-of-an-inverse-function",
  "level": "2",
  "url": "section-logarithms.html#example-finding-the-derivative-of-an-inverse-function",
  "type": "Example",
  "number": "4.2.6",
  "title": "Finding the derivative of an inverse function.",
  "body": " Finding the derivative of an inverse function   Let and note that is invertible. Find the derivative of .    One way to do this is just start by finding . So we'll set , solve for and then switch and . If we do this, we get so (and note that the domain of is since this is the range of !). Hence    "
},
{
  "id": "theorem-derivative-of-an-inverse-function",
  "level": "2",
  "url": "section-logarithms.html#theorem-derivative-of-an-inverse-function",
  "type": "Theorem",
  "number": "4.2.7",
  "title": "Derivative of an Inverse Function.",
  "body": " Derivative of an Inverse Function  functions inverse functions derivatives   Let be a differentiable function with inverse . Assume that is itself differentiable. Then     First, let , so that we need to find . Then we can say that . Now differentiate this equation implicitly to get or just    "
},
{
  "id": "example-exponential-inverse-revisited",
  "level": "2",
  "url": "section-logarithms.html#example-exponential-inverse-revisited",
  "type": "Example",
  "number": "4.2.8",
  "title": "Exponential inverse revisited.",
  "body": " Exponential inverse revisited   Using the fact that the derivative of is itself, find the derivative of its inverse.    Let . Then by we have So the derivative of the inverse of is .   "
},
{
  "id": "example-derivative-at-a-point",
  "level": "2",
  "url": "section-logarithms.html#example-derivative-at-a-point",
  "type": "Example",
  "number": "4.2.9",
  "title": "Derivative at a point.",
  "body": " Derivative at a point   Let . Find     By , we know that By inspection, which means . Since this gives    "
},
{
  "id": "p-252",
  "level": "2",
  "url": "section-logarithms.html#p-252",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logarithm with base "
},
{
  "id": "theorem-properties-of-logarithm-functions",
  "level": "2",
  "url": "section-logarithms.html#theorem-properties-of-logarithm-functions",
  "type": "Theorem",
  "number": "4.2.10",
  "title": "Properties of Logarithm Functions.",
  "body": " Properties of Logarithm Functions  logarithm functions properties   Let with . Let be positive real numbers, and let be any real number. Then  and .  .  .  .     "
},
{
  "id": "p-257",
  "level": "2",
  "url": "section-logarithms.html#p-257",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural logarithm "
},
{
  "id": "example-simplifying-an-exponential",
  "level": "2",
  "url": "section-logarithms.html#example-simplifying-an-exponential",
  "type": "Example",
  "number": "4.2.11",
  "title": "Simplifying an exponential.",
  "body": " Simplifying an exponential   Simplify and .    We'll simplify by using the cancellation property . First, we need to put the entire exponent inside of the natural log: and    "
},
{
  "id": "section-derivatives-of-exponential-and-logarithmic-functions",
  "level": "1",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html",
  "type": "Section",
  "number": "4.3",
  "title": "Derivatives of Exponential and Logarithmic Functions",
  "body": " Derivatives of Exponential and Logarithmic Functions   Derivatives of Exponentials  We've already mentioned that , but we've said nothing about differentiating functions such as or . However, it turns out that we can get these derivatives from the derivative of without too much trouble.   Derivatives of Exponential Functions  exponential functions derivatives   Let and set . Then .    To prove this, we need to use what's available to us: the derivative of . From we say that . More generally, we can also say that . Hence      Differentiating an exponential   Let . Find .    If we set , then . By the chain rule,     Although we certainly want to know the derivative of , or at least how to find it, most applications involving exponential functions use the natural exponential function instead. The derivative of is probably the most important derivative in this course.   Solutions of a differential equation   Show that satisfies the differential equation , where are arbitrary constants.    We need to show that if we compute and and plug these expressions into the differential equation, this will simplify out to . Since it follows that     Exponential functions often appear in the solutions of differential equations, which are themselves often viewed as mathematical models of physical systems. Hence exponential functions play a significant role in predicting physical quantities, which goes a long way towards justifying their importance.    Derivatives of Logarithms  Just as we can get the derivative of every exponential function just by knowing the derivative of , we can get the derivative of every logarithmic function just by knowing that .   Derivatives of Logarithmic Functions  logarithm functions derivatives   Let and set . Then      Differentiating nested logarithms   Let . Find .    By the chain rule, we have     Logarithms can be used to greatly simplify derivatives involving products, division or exponentiation using a technique known as logarithmic differentiation .   A simple fraction   Let . Find .    We can find without resorting to logarithms, but this would require using the product, quotient and chain rules. The algebra would be awful. So we'll using logarithms instead! Set . Then Now we differentiate both sides implicitly to obtain   Hence     Logarithmic differentiation is useful for finding derivatives of expressions containing complicated quotients, products or powers.   A simple exponent   Let . Find .    We'll use logarithmic differentiation again to simplify and remove the exponent. Set , which gives So which means that      "
},
{
  "id": "theorem-derivatives-of-exponential-functions",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#theorem-derivatives-of-exponential-functions",
  "type": "Theorem",
  "number": "4.3.1",
  "title": "Derivatives of Exponential Functions.",
  "body": " Derivatives of Exponential Functions  exponential functions derivatives   Let and set . Then .    To prove this, we need to use what's available to us: the derivative of . From we say that . More generally, we can also say that . Hence    "
},
{
  "id": "example-differentiating-an-exponential",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#example-differentiating-an-exponential",
  "type": "Example",
  "number": "4.3.2",
  "title": "Differentiating an exponential.",
  "body": " Differentiating an exponential   Let . Find .    If we set , then . By the chain rule,    "
},
{
  "id": "example-solutions-of-a-differential-equation",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#example-solutions-of-a-differential-equation",
  "type": "Example",
  "number": "4.3.3",
  "title": "Solutions of a differential equation.",
  "body": " Solutions of a differential equation   Show that satisfies the differential equation , where are arbitrary constants.    We need to show that if we compute and and plug these expressions into the differential equation, this will simplify out to . Since it follows that    "
},
{
  "id": "theorem-derivatives-of-logarithmic-functions",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#theorem-derivatives-of-logarithmic-functions",
  "type": "Theorem",
  "number": "4.3.4",
  "title": "Derivatives of Logarithmic Functions.",
  "body": " Derivatives of Logarithmic Functions  logarithm functions derivatives   Let and set . Then    "
},
{
  "id": "example-differentiating-nested-logarithms",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#example-differentiating-nested-logarithms",
  "type": "Example",
  "number": "4.3.5",
  "title": "Differentiating nested logarithms.",
  "body": " Differentiating nested logarithms   Let . Find .    By the chain rule, we have    "
},
{
  "id": "p-274",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#p-274",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logarithmic differentiation "
},
{
  "id": "example-a-simple-fraction",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#example-a-simple-fraction",
  "type": "Example",
  "number": "4.3.6",
  "title": "A simple fraction.",
  "body": " A simple fraction   Let . Find .    We can find without resorting to logarithms, but this would require using the product, quotient and chain rules. The algebra would be awful. So we'll using logarithms instead! Set . Then Now we differentiate both sides implicitly to obtain   Hence    "
},
{
  "id": "example-a-simple-exponent",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#example-a-simple-exponent",
  "type": "Example",
  "number": "4.3.7",
  "title": "A simple exponent.",
  "body": " A simple exponent   Let . Find .    We'll use logarithmic differentiation again to simplify and remove the exponent. Set , which gives So which means that    "
},
{
  "id": "section-exponential-models",
  "level": "1",
  "url": "section-exponential-models.html",
  "type": "Section",
  "number": "4.4",
  "title": "Exponential Models",
  "body": " Exponential Models   Exponential Growth  Suppose we want to predict the spread of some infectious disease through a city. A reasonable, though simplistic, assumption is that the disease will spread quicker if more people are infected. In other words, we'll assume that the rate at which people are infected is proportional to the number of people infected. If we let denote the number of people infected at time , then we're basically saying that for some constant .  This differential equation is a mathematical model that allows us to predict the growth of . We can actually use it to get an expression for . This differential equation is saying that is a function whose derivative looks quite a bit like . In fact, the solution of this differential equation is , where is a constant that represents the number of people infected at time . This is an example of exponential growth , and the proportionality constant is called the relative growth rate .   Modeling an Outbreak   A game of Humans vs. Zombies breaks out at WVWC. When the game starts, there is just one zombie. After one hour, there are zombies. How many zombies will there be after three hours assuming that the relative growth rate is constant?    Let denote the number of zombies hours after the game starts. Then we're given that and . We need to find .  Since the relative growth rate is assumed to be constant, we can say that for some constant . As we saw before, the solution of this differential equation is given by . So if we want to find , then we need to figure out what is.  We can do this by using the fact that . If we plug this into , we get So Hence there will be zombies after three hours.      Exponential Decay  Closely related to the concept of exponential growth is that of exponential decay . A quantity undergoes exponential decay if it satisfies the differential equation where . Every solution of this differential equation looks like .   We often write the decay constant as positive, and then rewrite the ODE for as . The solution becomes . This has the effect of highlighting the negative growth rate inherent to this system.   Perhaps the most important example of exponential decay is that of radioactive decay. If represents the mass of some radioactive substance, then experiments show that substance decays at a rate proportional to the amount of the substance remaining. In symbols, where . If we let denote the initial mass of the substance, then we can say that . The rate of decay is often expressed in terms of half-life : the amount of time it will take for precisely half of the mass to decay.   Decay from Half-Life   A radioactive substance has a half-life of days. If we start with a 50 sample, how much of the mass will remain after days?    If we let denote the mass of the sample at time , and let denote the first day we have the sample, then We still need to find , but we can do this using the fact that the half-life is days. This means that So Hence      "
},
{
  "id": "p-282",
  "level": "2",
  "url": "section-exponential-models.html#p-282",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mathematical model exponential growth relative growth rate "
},
{
  "id": "example-modeling-an-outbreak",
  "level": "2",
  "url": "section-exponential-models.html#example-modeling-an-outbreak",
  "type": "Example",
  "number": "4.4.1",
  "title": "Modeling an Outbreak.",
  "body": " Modeling an Outbreak   A game of Humans vs. Zombies breaks out at WVWC. When the game starts, there is just one zombie. After one hour, there are zombies. How many zombies will there be after three hours assuming that the relative growth rate is constant?    Let denote the number of zombies hours after the game starts. Then we're given that and . We need to find .  Since the relative growth rate is assumed to be constant, we can say that for some constant . As we saw before, the solution of this differential equation is given by . So if we want to find , then we need to figure out what is.  We can do this by using the fact that . If we plug this into , we get So Hence there will be zombies after three hours.   "
},
{
  "id": "p-287",
  "level": "2",
  "url": "section-exponential-models.html#p-287",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential decay "
},
{
  "id": "p-289",
  "level": "2",
  "url": "section-exponential-models.html#p-289",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "half-life "
},
{
  "id": "example-decay-from-half-life",
  "level": "2",
  "url": "section-exponential-models.html#example-decay-from-half-life",
  "type": "Example",
  "number": "4.4.2",
  "title": "Decay from Half-Life.",
  "body": " Decay from Half-Life   A radioactive substance has a half-life of days. If we start with a 50 sample, how much of the mass will remain after days?    If we let denote the mass of the sample at time , and let denote the first day we have the sample, then We still need to find , but we can do this using the fact that the half-life is days. This means that So Hence    "
},
{
  "id": "section-inverse-trigonometric-functions",
  "level": "1",
  "url": "section-inverse-trigonometric-functions.html",
  "type": "Section",
  "number": "4.5",
  "title": "Inverse Trigonometric Functions",
  "body": " Inverse Trigonometric Functions  Recall that is not a one-to-one function since it fails the horizontal line test. Hence it has no inverse function. However, we can restrict the domain of so that what's left over passes the horizontal line test. For example, if we define but restrict the domain to the interval , then  is one-to-one and so has an inverse function. We call this function inverse sine or arcsine .   Inverse Sine  inverse trigonometric functions inverse sine   Let and have domain . Then is called the inverse sine or arcsine of , and is denoted by or . The domain is the interval and the range is .    We can think of as the angle required to turn sine into .  Note that does not mean , which is . It's an unfortunate, though standard, choice of notation.     Finding inverse sine   Find .    This is the angle between and that turns sine into . So .     Simplifying cosine and inverse sine   Simplify , where .    By definition, as long as . So we want to try to rewrite to make use of this cancellation property. We can do this using the Pythagorean identity . Hence whenever .    Since is differentiable, this means is also differentiable.   Derivative of Inverse Sine   Let . Then .    If we set , then we get . Differentiating this gives or just     We can also define the inverse cosine function in much the same way as the inverse sine function. The idea once again is to restrict the domain of to to get an invertible function. We call the inverse of this function the inverse cosine, or arccosine, function. We denote this function by or .   Inverse cosine value   Find .    First, note that . So     Inverse cosine behaves in much the same way as inverse sine. However, this function won't be as useful to us as the inverse sine function or the next function we will look at: the inverse tangent.  If we restrict the domain of to , then we get an invertible function. We call the inverse of this function the inverse tangent or arctangent , and denote it by or . The domain of is and the range is . can be thought of as the angle between and that makes tangent equal to . It satisfies the following cancellation properties: for all and for all in .   Simplifying an inverse tangent   Simplify using the formula .    If we use the double-angle formula given, we get So we just need to find and .  Set , so that . Then we can find and using triangles, which gives Hence      Limit of inverse tangent   Determine .    Recall that is the angle between and for which tangent is equal to . So finding is equivalent to finding what angle between and we have to approach in order for tangent to blow up to . Either from looking at a graph or by using the definition of tangent, we see that the angle we need to approach is exactly . Hence .     Derivative of Inverse Tangent   The derivative of is .    We can prove this the same way we proved that . All we need to do is to set , and then find by implicit differentiation.     Tangent half-angle substitution   An important substitution in integral calculus is the tangent half-angle substitution defined by . Use this equation to find .    We can find implicitly, but we can also solve for to get Therefore     "
},
{
  "id": "p-292",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#p-292",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse sine arcsine "
},
{
  "id": "definition-inverse-sine",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#definition-inverse-sine",
  "type": "Definition",
  "number": "4.5.1",
  "title": "Inverse Sine.",
  "body": " Inverse Sine  inverse trigonometric functions inverse sine   Let and have domain . Then is called the inverse sine or arcsine of , and is denoted by or . The domain is the interval and the range is .   "
},
{
  "id": "example-finding-inverse-sine",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#example-finding-inverse-sine",
  "type": "Example",
  "number": "4.5.2",
  "title": "Finding inverse sine.",
  "body": " Finding inverse sine   Find .    This is the angle between and that turns sine into . So .   "
},
{
  "id": "example-simplifying-cosine-and-inverse-sine",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#example-simplifying-cosine-and-inverse-sine",
  "type": "Example",
  "number": "4.5.3",
  "title": "Simplifying cosine and inverse sine.",
  "body": " Simplifying cosine and inverse sine   Simplify , where .    By definition, as long as . So we want to try to rewrite to make use of this cancellation property. We can do this using the Pythagorean identity . Hence whenever .   "
},
{
  "id": "theorem-derivative-of-inverse-sine",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#theorem-derivative-of-inverse-sine",
  "type": "Theorem",
  "number": "4.5.4",
  "title": "Derivative of Inverse Sine.",
  "body": " Derivative of Inverse Sine   Let . Then .    If we set , then we get . Differentiating this gives or just    "
},
{
  "id": "p-303",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#p-303",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse cosine function "
},
{
  "id": "example-inverse-cosine-value",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#example-inverse-cosine-value",
  "type": "Example",
  "number": "4.5.5",
  "title": "Inverse cosine value.",
  "body": " Inverse cosine value   Find .    First, note that . So    "
},
{
  "id": "p-307",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#p-307",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse tangent arctangent "
},
{
  "id": "example-simplifying-an-inverse-tangent",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#example-simplifying-an-inverse-tangent",
  "type": "Example",
  "number": "4.5.6",
  "title": "Simplifying an inverse tangent.",
  "body": " Simplifying an inverse tangent   Simplify using the formula .    If we use the double-angle formula given, we get So we just need to find and .  Set , so that . Then we can find and using triangles, which gives Hence    "
},
{
  "id": "example-limit-of-inverse-tangent",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#example-limit-of-inverse-tangent",
  "type": "Example",
  "number": "4.5.7",
  "title": "Limit of inverse tangent.",
  "body": " Limit of inverse tangent   Determine .    Recall that is the angle between and for which tangent is equal to . So finding is equivalent to finding what angle between and we have to approach in order for tangent to blow up to . Either from looking at a graph or by using the definition of tangent, we see that the angle we need to approach is exactly . Hence .   "
},
{
  "id": "theorem-derivative-of-inverse-tangent",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#theorem-derivative-of-inverse-tangent",
  "type": "Theorem",
  "number": "4.5.8",
  "title": "Derivative of Inverse Tangent.",
  "body": " Derivative of Inverse Tangent   The derivative of is .    We can prove this the same way we proved that . All we need to do is to set , and then find by implicit differentiation.   "
},
{
  "id": "example-tangent-half-angle-substitution",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#example-tangent-half-angle-substitution",
  "type": "Example",
  "number": "4.5.9",
  "title": "Tangent half-angle substitution.",
  "body": " Tangent half-angle substitution   An important substitution in integral calculus is the tangent half-angle substitution defined by . Use this equation to find .    We can find implicitly, but we can also solve for to get Therefore    "
},
{
  "id": "section-l-hospital-s-rule",
  "level": "1",
  "url": "section-l-hospital-s-rule.html",
  "type": "Section",
  "number": "5.1",
  "title": "L’Hospital’s Rule",
  "body": " L'Hospital's Rule  Consider the important limit . If we try to plug in , we get , which is undefined. However, we can prove using geometry that the limit is . As another example, consider . Once again, if we try to plug the limit in we get an expression of the form . However, the limit is just , which we can find using algebra.  Limits of the form or are known as indeterminate forms . There is no restriction whatsoever on what value a limit involving an indeterminate form may take, or even that it has to exist at all.   Different indeterminate forms   Find indeterminate forms that, respectively, evaluate to and do not exist.    Let , and . Then and are all indeterminate forms. The first evaluates to , the second does not exist (it's ) while the third appears to be equal to .    The goal of this section is to determine a method that can help us evaluate limits involving indeterminate forms. This method is called L'Hospital's Rule .   L'Hospital's Rule  L'Hospital's Rule   Let and be differentiable functions. If is either one of the indeterminate forms or , then if the limit on the right exists or is .    It's important to note that L'Hospital's Rule does not necessarily ask you to use the quotient rule!   Using L'Hospital's Rule   Let . Find .    We saw in that this limit gives us the indeterminate form , so L'Hospital's Rule applies. Hence and so the limit is indeed .    L'Hospital's Rule also applies for limits approaching .   Exponential and polynomial growth   Let and let , where are arbitrary constants. Find .    This is another example of a indeterminate form, and so L'Hospital's Rule applies. If we use it, we get In other words, the exponential function grows faster than any quadratic function.     Another limit involving exponentials   Find .    This is a indeterminate form, so L'Hospital's Rule applies. We get     L'Hospital's Rule only applies directly to the indeterminate forms and , but these are not the only problems when L'Hospital's Rule proves useful.   A different indeterminate form   Find .    If we try to evaluate the limit, we get the expression . This is another indeterminate form, but is not one that we can apply L'Hospital's Rule to without doing some algebra first. We can write which is a indeterminate form. We can use L'Hospital's on this expression!  If we do so, we get So .     shows that indeterminate forms can be dealt with by rewriting them in the form or and then applying L'Hospital's Rule. It's trickier, but we can also deal with indeterminate forms by rewriting them in this way.   indeterminate form   Find .    As , and . So this limit is the indeterminate form . We can't sue L'Hospital's Rule yet, but we can try to rewrite this limit as a or indeterminate form. We'll try to do this by replacing with to get      Limit involving radicals   Find .    This is another form, so we'll try to rewrite it into a form we can use L'Hospital's Rule on. The trick here is to factor an out so we can get a form, which we've already seen how to handle:     There are three other indeterminate forms that L'Hospital's Rule can help us with (after some algebra): and . All of these can be found by first using logarithms.   A natural limit   Find .    This limit is a indeterminate form. We'll try taking logarithms to rewrite it as a form, so set . Then is a form. We can use L'Hospital's by rewriting this limit at a form or . Either way, we get and so the original limit is .    "
},
{
  "id": "p-319",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#p-319",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "indeterminate forms "
},
{
  "id": "example-different-indeterminate-forms",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-different-indeterminate-forms",
  "type": "Example",
  "number": "5.1.1",
  "title": "Different indeterminate forms.",
  "body": " Different indeterminate forms   Find indeterminate forms that, respectively, evaluate to and do not exist.    Let , and . Then and are all indeterminate forms. The first evaluates to , the second does not exist (it's ) while the third appears to be equal to .   "
},
{
  "id": "p-322",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#p-322",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "L'Hospital's Rule "
},
{
  "id": "theorem-l-hospital-s-rule",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#theorem-l-hospital-s-rule",
  "type": "Theorem",
  "number": "5.1.2",
  "title": "L’Hospital’s Rule.",
  "body": " L'Hospital's Rule  L'Hospital's Rule   Let and be differentiable functions. If is either one of the indeterminate forms or , then if the limit on the right exists or is .   "
},
{
  "id": "example-using-l-hospital-s-rule",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-using-l-hospital-s-rule",
  "type": "Example",
  "number": "5.1.3",
  "title": "Using L’Hospital’s Rule.",
  "body": " Using L'Hospital's Rule   Let . Find .    We saw in that this limit gives us the indeterminate form , so L'Hospital's Rule applies. Hence and so the limit is indeed .   "
},
{
  "id": "example-exponential-and-polynomial-growth",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-exponential-and-polynomial-growth",
  "type": "Example",
  "number": "5.1.4",
  "title": "Exponential and polynomial growth.",
  "body": " Exponential and polynomial growth   Let and let , where are arbitrary constants. Find .    This is another example of a indeterminate form, and so L'Hospital's Rule applies. If we use it, we get In other words, the exponential function grows faster than any quadratic function.   "
},
{
  "id": "example-another-limit-involving-exponentials",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-another-limit-involving-exponentials",
  "type": "Example",
  "number": "5.1.5",
  "title": "Another limit involving exponentials.",
  "body": " Another limit involving exponentials   Find .    This is a indeterminate form, so L'Hospital's Rule applies. We get    "
},
{
  "id": "example-a-different-indeterminate-form",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-a-different-indeterminate-form",
  "type": "Example",
  "number": "5.1.6",
  "title": "A different indeterminate form.",
  "body": " A different indeterminate form   Find .    If we try to evaluate the limit, we get the expression . This is another indeterminate form, but is not one that we can apply L'Hospital's Rule to without doing some algebra first. We can write which is a indeterminate form. We can use L'Hospital's on this expression!  If we do so, we get So .   "
},
{
  "id": "example---infty-infty--indeterminate-form",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example---infty-infty--indeterminate-form",
  "type": "Example",
  "number": "5.1.7",
  "title": "<span class=\"process-math\">\\(\\infty-\\infty\\)<\/span> indeterminate form.",
  "body": " indeterminate form   Find .    As , and . So this limit is the indeterminate form . We can't sue L'Hospital's Rule yet, but we can try to rewrite this limit as a or indeterminate form. We'll try to do this by replacing with to get    "
},
{
  "id": "example-limit-involving-radicals",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-limit-involving-radicals",
  "type": "Example",
  "number": "5.1.8",
  "title": "Limit involving radicals.",
  "body": " Limit involving radicals   Find .    This is another form, so we'll try to rewrite it into a form we can use L'Hospital's Rule on. The trick here is to factor an out so we can get a form, which we've already seen how to handle:    "
},
{
  "id": "example-a-natural-limit",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-a-natural-limit",
  "type": "Example",
  "number": "5.1.9",
  "title": "A natural limit.",
  "body": " A natural limit   Find .    This limit is a indeterminate form. We'll try taking logarithms to rewrite it as a form, so set . Then is a form. We can use L'Hospital's by rewriting this limit at a form or . Either way, we get and so the original limit is .   "
},
{
  "id": "section-extreme-values-of-functions",
  "level": "1",
  "url": "section-extreme-values-of-functions.html",
  "type": "Section",
  "number": "5.2",
  "title": "Extreme Values of Functions",
  "body": " Extreme Values of Functions  It's often of interest to determine how large or small some quantity can get.   Absolute Extrema  functions absolute extrema   Let be a function defined on some domain . Let be in . Then  is an absolute maximum of on if for all in .  is an absolute minimum of on if for all in .  These values, if they exist, are extreme values .      List the extreme values, if any, of the following functions:  .  .  .      Some functions may not have extreme values, but they could have values that are smaller or larger than all other values of the function \"nearby\".   Local extrema  functions local extrema   Let be a function and let be in the domain of . Then  is a local maximum if for all near .  is a local minimum if for all near .  Roughly, local maxima correspond to \"hilltops\" whereas local minima correspond to \"valleys\" in the graph of .    In general, local extrema and absolute extrema can be different. However, the following theorem does provide a relationship between the two on closed, bounded intervals.   Extreme Value Theorem  Extreme Value Theorem   Let be a continuous function defined on the interval Then has both an absolute maximum and absolute minimum on . Furthermore, these values occur at either an endpoint or a local extrema.    What tells us is that we can find the extreme values of any continuous function defined on a closed, bounded interval by just checking the function at the endpoint and at its local extrema.   Finding extreme values   Let . Given that has local extrema at , find the extreme values of on the interval .     tells us that we can find the extreme values by checking local extrema and the endpoints of our interval. Since is the only local extreme value inside of our interval, that's the only one we need to check. We have So the absolute minimum of on is and the absolute maximum is     So if we can find where a function has local extrema, then finding absolute extrema won't be too much more difficult. Thankfully, this is relatively straightforward if the function is differentiable.   Fermat's Theorem  Fermat's Theorem   Let be a function and let be a local extreme value of . If exists, then .    So finding local extrema of often amounts to finding where , i.e., where it has a root. However, we also need to worry about where doesn't exist (just think about ). This leads to the following definition.   Critical Points   Let be a differentiable function. The critical points of are the points where or does not exist.    Our method for finding extreme values on a closed interval will proceed as follows: find all the critical points, and then compare the values of our function at the critical points and the endpoints of the interval.   Extreme values of tangent   Let . Find the extreme values of on the interval .    We need to find the critical points first. We have This is if , which occurs in our interval only if . So we need to check at .     Dealing with a cusp   Let . Find the absolute extrema of on .    First, find the critical points of : This is at and undefined at , so our critical points are . So to find the absolute extrema we need to check at . Doing so, we see that the absolute minimum value is at and the absolute maximum is at .    "
},
{
  "id": "definition-absolute-extrema",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#definition-absolute-extrema",
  "type": "Definition",
  "number": "5.2.1",
  "title": "Absolute Extrema.",
  "body": " Absolute Extrema  functions absolute extrema   Let be a function defined on some domain . Let be in . Then  is an absolute maximum of on if for all in .  is an absolute minimum of on if for all in .  These values, if they exist, are extreme values .   "
},
{
  "id": "example-76",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#example-76",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  List the extreme values, if any, of the following functions:  .  .  .     "
},
{
  "id": "definition-local-extrema",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#definition-local-extrema",
  "type": "Definition",
  "number": "5.2.3",
  "title": "Local extrema.",
  "body": " Local extrema  functions local extrema   Let be a function and let be in the domain of . Then  is a local maximum if for all near .  is a local minimum if for all near .  Roughly, local maxima correspond to \"hilltops\" whereas local minima correspond to \"valleys\" in the graph of .   "
},
{
  "id": "theorem-extreme-value-theorem",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#theorem-extreme-value-theorem",
  "type": "Theorem",
  "number": "5.2.4",
  "title": "Extreme Value Theorem.",
  "body": " Extreme Value Theorem  Extreme Value Theorem   Let be a continuous function defined on the interval Then has both an absolute maximum and absolute minimum on . Furthermore, these values occur at either an endpoint or a local extrema.   "
},
{
  "id": "example-finding-extreme-values",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#example-finding-extreme-values",
  "type": "Example",
  "number": "5.2.5",
  "title": "Finding extreme values.",
  "body": " Finding extreme values   Let . Given that has local extrema at , find the extreme values of on the interval .     tells us that we can find the extreme values by checking local extrema and the endpoints of our interval. Since is the only local extreme value inside of our interval, that's the only one we need to check. We have So the absolute minimum of on is and the absolute maximum is    "
},
{
  "id": "theorem-fermat-s-theorem",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#theorem-fermat-s-theorem",
  "type": "Theorem",
  "number": "5.2.6",
  "title": "Fermat’s Theorem.",
  "body": " Fermat's Theorem  Fermat's Theorem   Let be a function and let be a local extreme value of . If exists, then .   "
},
{
  "id": "definition-critical-points",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#definition-critical-points",
  "type": "Definition",
  "number": "5.2.7",
  "title": "Critical Points.",
  "body": " Critical Points   Let be a differentiable function. The critical points of are the points where or does not exist.   "
},
{
  "id": "example-extreme-values-of-tangent",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#example-extreme-values-of-tangent",
  "type": "Example",
  "number": "5.2.8",
  "title": "Extreme values of tangent.",
  "body": " Extreme values of tangent   Let . Find the extreme values of on the interval .    We need to find the critical points first. We have This is if , which occurs in our interval only if . So we need to check at .   "
},
{
  "id": "example-dealing-with-a-cusp",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#example-dealing-with-a-cusp",
  "type": "Example",
  "number": "5.2.9",
  "title": "Dealing with a cusp.",
  "body": " Dealing with a cusp   Let . Find the absolute extrema of on .    First, find the critical points of : This is at and undefined at , so our critical points are . So to find the absolute extrema we need to check at . Doing so, we see that the absolute minimum value is at and the absolute maximum is at .   "
},
{
  "id": "section-the-mean-value-theorem",
  "level": "1",
  "url": "section-the-mean-value-theorem.html",
  "type": "Section",
  "number": "5.3",
  "title": "The Mean Value Theorem",
  "body": " The Mean Value Theorem   The linear approximations we came up with in are useful for estimating complicated functions with simpler, linear models. In essence, we use the derivative of a function to tell us how much to change a given value of the function in order to estimate that function. There is one problem with this approach, at least currently. We have good reason to suspect that our approximations are close to the exact values in certain circumstances, but we don't know how close. The goal of this section is to derive an estimate for the derivative that can help us to find more precise approximations.    Rolle's Theorem  We start with a theorem that is very reasonable, at least geometrically. Let be a differentiable function on some interval , and suppose . Then this means the graph of must \"turn around\" at some point in , i.e., there is a local maximum or minimum contained within the interval. Combining this observation with gives us Rolle's Theorem.    Rolle's Theorem   Let be a differentiable function on and suppose . Then there exists some number in such that .     is an example of an existence theorem . It tells us nothing about how to find the number , or how many such can exist. It only tells us that there is at least one number in for which . This may not seem very useful, but existence theorems can be quite powerful in mathematics.   Rolle's Theorem and Traffic   A car enters a highway going at 45 and leaves the highway going at the same speed. Was the car's acceleration ever ?    The speed of the car can be represented by a velocity function . If we assume that the car entered the highway at time and left at some future time , then we know that By , there must be some time between and for which . Since is exactly the acceleration, we know that the car had to stop accelerating somewhere on the highway.      The Mean Value Theorem   is powerful because it has very general conditions for its use. However, it does require the function in question to take on the same values at the endpoints of , and this is a condition we'd like to try to relax. However, we'll try to be clever about this and use to do most of the heavy lifting for us.  If we imagine graphing some differentiable function on some interval , but , then we can't apply . But maybe we can adjust it just a little bit so that we can? In particular, the only reason we can't use is that . But if we subtract the line through these points from , we should get a new function for which applies.  The line through these points has equation So define Then So  does apply to this function. Hence there exists some number between and for which .  But and if this is then we can solve for to get This gives us the Mean Value Theorem .   Mean Value Theorem  Mean Value Theorem   Let be differentiable on some interval . Then there exists a number in such that or equivalently     The essentially says that there is at least one point inside of for which the slope at that point matches the \"average slope\" Like , this is an existence theorem. However, it's slightly more general, and so is applicable in more situations. It's also useful in deriving error estimates.   Estimating error in a linear approximation   Let and let denote the linear approximation to at . Find the largest possible error between and on the interval .    First, we should find , which from is just The error we need to estimate is , for in . So we'll set and let be some number in . By , there exists some number in such that Now, and . So the above equation becomes   Now, we don't know anything about aside from the fact that it lives in . However, we do have an expression for now: So if is in , then the error is at most  . In other words,     Perhaps the most important example of in this course will be the following theorem.   Zero Derivative Theorem   Let be differentiable on . If for all in , then has to be a constant.    The idea of the proof is to use to show that for any points in . Now, by we have for some in . However, by assumption, and so . In other words, . Hence must be constant.     "
},
{
  "id": "p-364",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#p-364",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Rolle's Theorem. "
},
{
  "id": "theorem-rolle-s-theorem",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#theorem-rolle-s-theorem",
  "type": "Theorem",
  "number": "5.3.1",
  "title": "Rolle’s Theorem.",
  "body": " Rolle's Theorem   Let be a differentiable function on and suppose . Then there exists some number in such that .   "
},
{
  "id": "p-366",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#p-366",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "existence theorem "
},
{
  "id": "example-rolle-s-theorem-and-traffic",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#example-rolle-s-theorem-and-traffic",
  "type": "Example",
  "number": "5.3.2",
  "title": "Rolle’s Theorem and Traffic.",
  "body": " Rolle's Theorem and Traffic   A car enters a highway going at 45 and leaves the highway going at the same speed. Was the car's acceleration ever ?    The speed of the car can be represented by a velocity function . If we assume that the car entered the highway at time and left at some future time , then we know that By , there must be some time between and for which . Since is exactly the acceleration, we know that the car had to stop accelerating somewhere on the highway.   "
},
{
  "id": "p-372",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#p-372",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Mean Value Theorem "
},
{
  "id": "theorem-mean-value-theorem",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#theorem-mean-value-theorem",
  "type": "Theorem",
  "number": "5.3.3",
  "title": "Mean Value Theorem.",
  "body": " Mean Value Theorem  Mean Value Theorem   Let be differentiable on some interval . Then there exists a number in such that or equivalently    "
},
{
  "id": "example-estimating-error-in-a-linear-approximation",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#example-estimating-error-in-a-linear-approximation",
  "type": "Example",
  "number": "5.3.4",
  "title": "Estimating error in a linear approximation.",
  "body": " Estimating error in a linear approximation   Let and let denote the linear approximation to at . Find the largest possible error between and on the interval .    First, we should find , which from is just The error we need to estimate is , for in . So we'll set and let be some number in . By , there exists some number in such that Now, and . So the above equation becomes   Now, we don't know anything about aside from the fact that it lives in . However, we do have an expression for now: So if is in , then the error is at most  . In other words,    "
},
{
  "id": "theorem-zero-derivative-theorem",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#theorem-zero-derivative-theorem",
  "type": "Theorem",
  "number": "5.3.5",
  "title": "Zero Derivative Theorem.",
  "body": " Zero Derivative Theorem   Let be differentiable on . If for all in , then has to be a constant.    The idea of the proof is to use to show that for any points in . Now, by we have for some in . However, by assumption, and so . In other words, . Hence must be constant.   "
},
{
  "id": "section-derivatives-and-graphs",
  "level": "1",
  "url": "section-derivatives-and-graphs.html",
  "type": "Section",
  "number": "5.4",
  "title": "Derivatives and Graphs",
  "body": " Derivatives and Graphs  Recall that if is a function and exists, then for some means that is increasing at , while means that is decreasing at . Now, suppose that is a critical point of . Then . If changes sign from negative to positive, then is a local minimum. Conversely, if changes sign from positive to negative, then is a local maximum. This is the first derivative test .   Local maxima and minima using the first derivative test   Let . Find where is increasing, decreasing, and any local maxima or minima.    We can answer all of these questions by setting up a sign chart for . The critical points are , and on and on . So is decreasing on the first set of intervals, increasing on , has a local maximum at and a local minimum at .     First derivative test and a discontinuous function   Find any local maxima or minima of .    We need to find the critical points, which means we need to find : So the critical points are . Note that  cannot be a local extreme value of since it's not in the domain of . However, we still need to include it in our sign chart. If we do so, we find that has a local minimum at and a local maximum at by the first derivative test.    One benefit of the first derivative test is that we only need to compute first derivatives to use it. However, if a function has a second derivative, then it's often easier to use the concavity of the graph at a critical point to determine whether a critical point is a local maximum or minimum. In particular, if is a function and is continuous near the critical point (so ), then is a local minimum if and is a local maximum if . This is the second derivative test .   Using the second derivative test   Find any local extrema of .    First, we find the critical points: forces . Now we check these critical points in  So has a local minimum at and a local maximum at .    The point in is an example of an inflection point of : a place where the concavity of changes, or equivalently a point where the second derivative changes sign.   Finding Inflection Points   Find the inflection points of .    We need to find the points where changes sign, so our first job is to compute . We'll do so using technology:   We need to find where this is zero, so we'll simplify and then factor:   Therefore , and we can see that is zero when or . Since changes sign at each of these points (as can be seen from a sign chart), all of these are inflection points. This is also indicated on the graph below:     The code used in is the Sage programming language, a variant of Python that is designed for mathematical applications. The Sage computer algebra system (CAS) is very useful for quickly performing tedious algebraic calculations. We could also have used Sage to solve the equation for us with the solve() command, like so:   However, it may be the case that some solutions of are not inflection points. As a simple example, consider . From the graph of this function it's clearly concave up everywhere even though the . The problem here is that doesn't change sign at , and so this point can't be an inflection point.  "
},
{
  "id": "p-381",
  "level": "2",
  "url": "section-derivatives-and-graphs.html#p-381",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first derivative test "
},
{
  "id": "example-local-maxima-and-minima-using-the-first-derivative-test",
  "level": "2",
  "url": "section-derivatives-and-graphs.html#example-local-maxima-and-minima-using-the-first-derivative-test",
  "type": "Example",
  "number": "5.4.1",
  "title": "Local maxima and minima using the first derivative test.",
  "body": " Local maxima and minima using the first derivative test   Let . Find where is increasing, decreasing, and any local maxima or minima.    We can answer all of these questions by setting up a sign chart for . The critical points are , and on and on . So is decreasing on the first set of intervals, increasing on , has a local maximum at and a local minimum at .   "
},
{
  "id": "example-first-derivative-test-and-a-discontinuous-function",
  "level": "2",
  "url": "section-derivatives-and-graphs.html#example-first-derivative-test-and-a-discontinuous-function",
  "type": "Example",
  "number": "5.4.2",
  "title": "First derivative test and a discontinuous function.",
  "body": " First derivative test and a discontinuous function   Find any local maxima or minima of .    We need to find the critical points, which means we need to find : So the critical points are . Note that  cannot be a local extreme value of since it's not in the domain of . However, we still need to include it in our sign chart. If we do so, we find that has a local minimum at and a local maximum at by the first derivative test.   "
},
{
  "id": "p-386",
  "level": "2",
  "url": "section-derivatives-and-graphs.html#p-386",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second derivative test "
},
{
  "id": "example-using-the-second-derivative-test",
  "level": "2",
  "url": "section-derivatives-and-graphs.html#example-using-the-second-derivative-test",
  "type": "Example",
  "number": "5.4.3",
  "title": "Using the second derivative test.",
  "body": " Using the second derivative test   Find any local extrema of .    First, we find the critical points: forces . Now we check these critical points in  So has a local minimum at and a local maximum at .   "
},
{
  "id": "p-389",
  "level": "2",
  "url": "section-derivatives-and-graphs.html#p-389",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inflection point "
},
{
  "id": "example-finding-inflection-points",
  "level": "2",
  "url": "section-derivatives-and-graphs.html#example-finding-inflection-points",
  "type": "Example",
  "number": "5.4.4",
  "title": "Finding Inflection Points.",
  "body": " Finding Inflection Points   Find the inflection points of .    We need to find the points where changes sign, so our first job is to compute . We'll do so using technology:   We need to find where this is zero, so we'll simplify and then factor:   Therefore , and we can see that is zero when or . Since changes sign at each of these points (as can be seen from a sign chart), all of these are inflection points. This is also indicated on the graph below:    "
},
{
  "id": "section-optimization-problems",
  "level": "1",
  "url": "section-optimization-problems.html",
  "type": "Section",
  "number": "5.5",
  "title": "Optimization Problems",
  "body": " Optimization Problems  Now that we can use derivatives to find local maxima and minima, we can solve optimization problems .   Minimizing a product   Find two numbers that differ by and whose product is a minimum.    Call our numbers and suppose . Then and we need to choose in such a way that is as small as possible. If we replace with , then this means we need to minimize The critical point of is , and since is a parabola we know that this must be the location of the absolute minimum value on the graph. So the numbers we need are .     Minimizing material costs   A box with an open top and a square base is to be built using material that costs \\$5 per square meter. The box must have a volume of 32000 . Find the dimensions of the box that will be cheapest to build to these specifications.    There are two things we need to do here:  Find the quantity to be optimize.  Solve the resulting optimization problem.  We need to minimize costs, which means we need to minimize how much material is used to construct this box. Hence we must minimize the surface area of the box. If we let denote the length of the base of the box and the height of the box, then the surface area is given by Now, we can't minimize this yet because we have too many variables. However, we can solve for in terms of by using the volume constraint. Since the volume of the box is this gives So the quantity we need to minimize is   To minimize this, we find the critical points by solving . This gives, after some algebra, . Now we need to be careful here! We only have a critical point at this step. We need to make an argument now as to why this critical point should be an absolute minimum of . One way to do this is by setting up a sign chart for . If we do this, then we see that for in , while for in . If we think about what this tells us of the graph of , we see that must minimize , at least for . So the dimensions that minimize the cost of building this box are .     Distance on an ellipse   Find the point(s) on the ellipse that are farthest from the point .    This is an optimization problem since we're trying to maximize distance. There are two things we need to do:  Find the function we need to optimize.  Find the extrema.  The function we need to optimize is just the distance function. In particular, if is a point on the ellipse then we need to maximize   Now, we have a constraint that must satisfy; namely, this must lie on the ellipse . This means that , and if we plug this into our distance function we get Now here's a trick we can use: maximizing is the same thing as maximizing , but is much nicer to work with algebraically. So instead of maximizing , we'll maximize the function   We'll start by finding it's local extrema, which means we need to find the critical points. These are the solutions of . Since we see that the only critical point is . Since , this means that gives us a local maximum of by the second derivative test. In fact, we can go further: this must be an absolute maximum of , since is always concave down (it's actually a parabola).  So the point on the ellipse farthest from has -coordinate equal to . This means that the corresponding -coordinate is so the points on the ellipse that are the farthest from are the points     "
},
{
  "id": "p-396",
  "level": "2",
  "url": "section-optimization-problems.html#p-396",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "optimization problems "
},
{
  "id": "example-minimizing-a-product",
  "level": "2",
  "url": "section-optimization-problems.html#example-minimizing-a-product",
  "type": "Example",
  "number": "5.5.1",
  "title": "Minimizing a product.",
  "body": " Minimizing a product   Find two numbers that differ by and whose product is a minimum.    Call our numbers and suppose . Then and we need to choose in such a way that is as small as possible. If we replace with , then this means we need to minimize The critical point of is , and since is a parabola we know that this must be the location of the absolute minimum value on the graph. So the numbers we need are .   "
},
{
  "id": "example-minimizing-material-costs",
  "level": "2",
  "url": "section-optimization-problems.html#example-minimizing-material-costs",
  "type": "Example",
  "number": "5.5.2",
  "title": "Minimizing material costs.",
  "body": " Minimizing material costs   A box with an open top and a square base is to be built using material that costs \\$5 per square meter. The box must have a volume of 32000 . Find the dimensions of the box that will be cheapest to build to these specifications.    There are two things we need to do here:  Find the quantity to be optimize.  Solve the resulting optimization problem.  We need to minimize costs, which means we need to minimize how much material is used to construct this box. Hence we must minimize the surface area of the box. If we let denote the length of the base of the box and the height of the box, then the surface area is given by Now, we can't minimize this yet because we have too many variables. However, we can solve for in terms of by using the volume constraint. Since the volume of the box is this gives So the quantity we need to minimize is   To minimize this, we find the critical points by solving . This gives, after some algebra, . Now we need to be careful here! We only have a critical point at this step. We need to make an argument now as to why this critical point should be an absolute minimum of . One way to do this is by setting up a sign chart for . If we do this, then we see that for in , while for in . If we think about what this tells us of the graph of , we see that must minimize , at least for . So the dimensions that minimize the cost of building this box are .   "
},
{
  "id": "example-distance-on-an-ellipse",
  "level": "2",
  "url": "section-optimization-problems.html#example-distance-on-an-ellipse",
  "type": "Example",
  "number": "5.5.3",
  "title": "Distance on an ellipse.",
  "body": " Distance on an ellipse   Find the point(s) on the ellipse that are farthest from the point .    This is an optimization problem since we're trying to maximize distance. There are two things we need to do:  Find the function we need to optimize.  Find the extrema.  The function we need to optimize is just the distance function. In particular, if is a point on the ellipse then we need to maximize   Now, we have a constraint that must satisfy; namely, this must lie on the ellipse . This means that , and if we plug this into our distance function we get Now here's a trick we can use: maximizing is the same thing as maximizing , but is much nicer to work with algebraically. So instead of maximizing , we'll maximize the function   We'll start by finding it's local extrema, which means we need to find the critical points. These are the solutions of . Since we see that the only critical point is . Since , this means that gives us a local maximum of by the second derivative test. In fact, we can go further: this must be an absolute maximum of , since is always concave down (it's actually a parabola).  So the point on the ellipse farthest from has -coordinate equal to . This means that the corresponding -coordinate is so the points on the ellipse that are the farthest from are the points    "
},
{
  "id": "section-newton-s-method",
  "level": "1",
  "url": "section-newton-s-method.html",
  "type": "Section",
  "number": "5.6",
  "title": "Newton’s Method",
  "body": " Newton's Method  Consider a differentiable function , and suppose we want to find a root of , which is a number such that . In some cases this is very easy (like ), but in others this may be more complicated (such as ). So we'd like to find a way to approximate the root .   Newton's Method begins as follows: pick some starting point, or guess, . Then draw the tangent line to the graph of at . Now, the -intercept of this line may not be a root, but hopefully it'll be closer to the root. So call this point . We can solve for (if ) to get Now, at this point is (hopefully!) a better approximation to the root than , and we can run through the same procedure to get a new point .  In general, we can get a sequence of approximations to the root by using the formula as long as .   Approximating a root   Find the third approximation given by Newton's Method for the root of , using .    First, note that . Then so . Now we run through this method again to get : So      Approximating   Approximate using Newton's method.    We need to find a function for which . Perhaps the easiest is . Now, to use Newton's method we also need a starting guess. We'll pick since this is close to . Then so . Similarly, Since these approximations are so close, we estimate that .     A Babylonian problem   Use Newton's method to find an algorithm for computing .    To use Newton's method, we need to come up with a function whose root is . A simple choice for this is , since . Now, if we're getting some sequence from Newton's method then the next term in the sequence is After some algebra, we can rewrite this as   We can actually test this algorithm out. Say we want to approximate . A reasonable guess would be , since this should be close to . Then we get So it looks like , and indeed this is quite close to the actual value of .  We can go one step further for this algorithm. If is the sequence we obtain using Newton's method for approximating , then as we saw earlier Now, assume that exists and is nonzero, and call it . Then becomes which we can rearrange to get or just . Hence .    "
},
{
  "id": "p-408",
  "level": "2",
  "url": "section-newton-s-method.html#p-408",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton's Method "
},
{
  "id": "p-409",
  "level": "2",
  "url": "section-newton-s-method.html#p-409",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequence "
},
{
  "id": "example-approximating-a-root",
  "level": "2",
  "url": "section-newton-s-method.html#example-approximating-a-root",
  "type": "Example",
  "number": "5.6.1",
  "title": "Approximating a root.",
  "body": " Approximating a root   Find the third approximation given by Newton's Method for the root of , using .    First, note that . Then so . Now we run through this method again to get : So    "
},
{
  "id": "example-approximating-pi",
  "level": "2",
  "url": "section-newton-s-method.html#example-approximating-pi",
  "type": "Example",
  "number": "5.6.2",
  "title": "Approximating <span class=\"process-math\">\\(\\pi\\)<\/span>.",
  "body": " Approximating   Approximate using Newton's method.    We need to find a function for which . Perhaps the easiest is . Now, to use Newton's method we also need a starting guess. We'll pick since this is close to . Then so . Similarly, Since these approximations are so close, we estimate that .   "
},
{
  "id": "example-a-babylonian-problem",
  "level": "2",
  "url": "section-newton-s-method.html#example-a-babylonian-problem",
  "type": "Example",
  "number": "5.6.3",
  "title": "A Babylonian problem.",
  "body": " A Babylonian problem   Use Newton's method to find an algorithm for computing .    To use Newton's method, we need to come up with a function whose root is . A simple choice for this is , since . Now, if we're getting some sequence from Newton's method then the next term in the sequence is After some algebra, we can rewrite this as   We can actually test this algorithm out. Say we want to approximate . A reasonable guess would be , since this should be close to . Then we get So it looks like , and indeed this is quite close to the actual value of .  We can go one step further for this algorithm. If is the sequence we obtain using Newton's method for approximating , then as we saw earlier Now, assume that exists and is nonzero, and call it . Then becomes which we can rearrange to get or just . Hence .   "
},
{
  "id": "section-antiderivatives",
  "level": "1",
  "url": "section-antiderivatives.html",
  "type": "Section",
  "number": "5.7",
  "title": "Antiderivatives",
  "body": " Antiderivatives  Suppose we're tracking a moving object, and through experimentation we know its acceleration to be equal to 3 to the right. Say we want to find the velocity of the mass at time . Then if we set equal to the velocity and equal to the acceleration, we know that Therefore is a function whose derivative is . So one possible choice for is . This leads us to the definition of an antiderivative .   Antiderivatives  antiderivatives   A function is called an antiderivative of the function if for all in an interval .     Multiple antiderivatives   Find three different antiderivatives for .    An antiderivative of is any function whose derivative is . So three antiderivatives could be     From we see that any function of the form is an antiderivative of . In fact, this describes all possible antiderivatives of . This suggests the following theorem.   General Antiderivatives   Let be some function with antiderivative on some interval . Then the most general antiderivative of is where is an arbitrary constant.    It might not seem like this statement requires a proof, but it does! We can check very easily that every function of the form is an antiderivative of , but how do we know every antiderivative takes this form? To prove this, let be an arbitrary antiderivative of . Then we need to show that , or equivalently that . We can do this by taking the derivative of to get and so by we know that must be constant on . Hence for some constant , or equivalently . Therefore every antiderivative of can be written as .    It might seem superfluous, but typically when dealing with models requiring us to find antiderivatives we'll want to find the most general antiderivative somewhere along the way. Moral of the story: don't forget to add .    Finding antiderivatives   Find the most general antiderivatives of the following functions:          We have the following:  The general antiderivative of is  The general antiderivative of is  The general antiderivative of is .  The general antiderivative of is       The antiderivative of   Find the general antiderivative of .    We have two cases we need to consider, since the domain of consists of two intervals. First, suppose that is in . Then we know that , so on this interval the most general antiderivative of is .  Now let be in . Then isn't defined here. However, we can write and if then and is defined, and in fact So the most general antiderivative of on is . Putting this all together, we can say that the most general antiderivative of is given by If we know that we're only selecting values of with the same sign, then we can just say that the antiderivative of is .     Antiderivatives involving secant   Find the general antiderivatives of and .    The first antiderivative isn't too hard; it's just . The second is a little more complicated but still not too bad. Since , a good guess for an antiderivative of would be However, the derivative of this is , so we're off by a factor of . So we just need to divide our guess by to correct for this. Hence the general antiderivative of is .     Antidifferentiation Formulas   Let and denote antiderivatives of and , and let be a constant. Then we have the following:  Particular antiderivatives of functions    Function  Antiderivative                            These are by no means the only antiderivatives that you will need to deal with, but they are probably the most common.     Falling objects   An object is dropped from a height of 100 above sea level and falls with downward acceleration equal to 9.8 . Find the height of the object seconds after it's dropped.    Take downward to be the negative direction and sea level to be . Since acceleration is the second derivative of position, then the position (i.e. height) of the object should be the second antiderivative of acceleration. At this step, it's tempting to say that since , we have . And indeed, is a function whose second derivative is . However, we have a slight problem here. We know that and . If , then it's impossible for to equal . The problem here is we forgot about the arbitrary constants.  To get an accurate expression for , we go back to . Then for some constant . Since , this forces . So we have . Now we antidifferentiate one more time to get . Since , this forces . So .    Some functions that do not have an obvious antiderivative can be simplified through algebra into a form that is perhaps more helpful.   A tricky antiderivative   Find the most general antiderivative of     It's tough to think of a function whose derivative is , though since the denominator is it seems likely that this antiderivative will involve in some way. In order to actually find the antiderivative, we'll rewrite into a more convenient form. First, note that the numerator is very close to the denominator, which means we can almost cancel it out. So we'll split up the numerator as follows:   We can find the antiderivative of this term by term, so the most general antiderivative of is     At this point, it's natural to think about what an antiderivative means geometrically since the derivative of a function has such a nice interpretation. One approach to this is to think about net change of the antiderivative. Let be an antiderivative of on some interval containing . The net change of from to is given by Now, represents instantaneous rate of change, not net change. However, if we can somehow add these instantaneous changes from to , they should accumulate until they give the net change of from to . Graphically, adding these instantaneous rates of change looks like it's giving us the area under , which suggests the following geometric interpretation: the area under of from to is just the net change of an antiderivative from to . Much of the next chapter is devoted to making this idea precise.  "
},
{
  "id": "p-418",
  "level": "2",
  "url": "section-antiderivatives.html#p-418",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "antiderivative "
},
{
  "id": "definition-antiderivatives",
  "level": "2",
  "url": "section-antiderivatives.html#definition-antiderivatives",
  "type": "Definition",
  "number": "5.7.1",
  "title": "Antiderivatives.",
  "body": " Antiderivatives  antiderivatives   A function is called an antiderivative of the function if for all in an interval .   "
},
{
  "id": "example-multiple-antiderivatives",
  "level": "2",
  "url": "section-antiderivatives.html#example-multiple-antiderivatives",
  "type": "Example",
  "number": "5.7.2",
  "title": "Multiple antiderivatives.",
  "body": " Multiple antiderivatives   Find three different antiderivatives for .    An antiderivative of is any function whose derivative is . So three antiderivatives could be    "
},
{
  "id": "theorem-general-antiderivatives",
  "level": "2",
  "url": "section-antiderivatives.html#theorem-general-antiderivatives",
  "type": "Theorem",
  "number": "5.7.3",
  "title": "General Antiderivatives.",
  "body": " General Antiderivatives   Let be some function with antiderivative on some interval . Then the most general antiderivative of is where is an arbitrary constant.    It might not seem like this statement requires a proof, but it does! We can check very easily that every function of the form is an antiderivative of , but how do we know every antiderivative takes this form? To prove this, let be an arbitrary antiderivative of . Then we need to show that , or equivalently that . We can do this by taking the derivative of to get and so by we know that must be constant on . Hence for some constant , or equivalently . Therefore every antiderivative of can be written as .   "
},
{
  "id": "example-finding-antiderivatives",
  "level": "2",
  "url": "section-antiderivatives.html#example-finding-antiderivatives",
  "type": "Example",
  "number": "5.7.4",
  "title": "Finding antiderivatives.",
  "body": " Finding antiderivatives   Find the most general antiderivatives of the following functions:          We have the following:  The general antiderivative of is  The general antiderivative of is  The general antiderivative of is .  The general antiderivative of is     "
},
{
  "id": "example-the-antiderivative-of--frac-1-x-m-",
  "level": "2",
  "url": "section-antiderivatives.html#example-the-antiderivative-of--frac-1-x-m-",
  "type": "Example",
  "number": "5.7.5",
  "title": "The antiderivative of <span class=\"process-math\">\\(\\frac{1}{x}\\)<\/span>.",
  "body": " The antiderivative of   Find the general antiderivative of .    We have two cases we need to consider, since the domain of consists of two intervals. First, suppose that is in . Then we know that , so on this interval the most general antiderivative of is .  Now let be in . Then isn't defined here. However, we can write and if then and is defined, and in fact So the most general antiderivative of on is . Putting this all together, we can say that the most general antiderivative of is given by If we know that we're only selecting values of with the same sign, then we can just say that the antiderivative of is .   "
},
{
  "id": "example-antiderivatives-involving-secant",
  "level": "2",
  "url": "section-antiderivatives.html#example-antiderivatives-involving-secant",
  "type": "Example",
  "number": "5.7.6",
  "title": "Antiderivatives involving secant.",
  "body": " Antiderivatives involving secant   Find the general antiderivatives of and .    The first antiderivative isn't too hard; it's just . The second is a little more complicated but still not too bad. Since , a good guess for an antiderivative of would be However, the derivative of this is , so we're off by a factor of . So we just need to divide our guess by to correct for this. Hence the general antiderivative of is .   "
},
{
  "id": "theorem-antidifferentiation-formulas",
  "level": "2",
  "url": "section-antiderivatives.html#theorem-antidifferentiation-formulas",
  "type": "Theorem",
  "number": "5.7.7",
  "title": "Antidifferentiation Formulas.",
  "body": " Antidifferentiation Formulas   Let and denote antiderivatives of and , and let be a constant. Then we have the following:  Particular antiderivatives of functions    Function  Antiderivative                            These are by no means the only antiderivatives that you will need to deal with, but they are probably the most common.   "
},
{
  "id": "example-falling-objects",
  "level": "2",
  "url": "section-antiderivatives.html#example-falling-objects",
  "type": "Example",
  "number": "5.7.9",
  "title": "Falling objects.",
  "body": " Falling objects   An object is dropped from a height of 100 above sea level and falls with downward acceleration equal to 9.8 . Find the height of the object seconds after it's dropped.    Take downward to be the negative direction and sea level to be . Since acceleration is the second derivative of position, then the position (i.e. height) of the object should be the second antiderivative of acceleration. At this step, it's tempting to say that since , we have . And indeed, is a function whose second derivative is . However, we have a slight problem here. We know that and . If , then it's impossible for to equal . The problem here is we forgot about the arbitrary constants.  To get an accurate expression for , we go back to . Then for some constant . Since , this forces . So we have . Now we antidifferentiate one more time to get . Since , this forces . So .   "
},
{
  "id": "example-a-tricky-antiderivative",
  "level": "2",
  "url": "section-antiderivatives.html#example-a-tricky-antiderivative",
  "type": "Example",
  "number": "5.7.10",
  "title": "A tricky antiderivative.",
  "body": " A tricky antiderivative   Find the most general antiderivative of     It's tough to think of a function whose derivative is , though since the denominator is it seems likely that this antiderivative will involve in some way. In order to actually find the antiderivative, we'll rewrite into a more convenient form. First, note that the numerator is very close to the denominator, which means we can almost cancel it out. So we'll split up the numerator as follows:   We can find the antiderivative of this term by term, so the most general antiderivative of is    "
},
{
  "id": "p-441",
  "level": "2",
  "url": "section-antiderivatives.html#p-441",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "net change "
},
{
  "id": "section-areas-under-curves",
  "level": "1",
  "url": "section-areas-under-curves.html",
  "type": "Section",
  "number": "6.1",
  "title": "Areas Under Curves",
  "body": " Areas Under Curves  We know how to find areas of simple shapes, such as rectangles, triangles and circles. But how can we find the area of a more complicated shape? Say, for example, the area under from to ? Well, if we don't know it exactly then we can at least approximate it using a shape we do know. For example, using rectangles.  A simple way to divide the graph of using rectangles is to pick several equally spaced points in the interval , say and then draw rectangles using these points to determine the base of each rectangle and the height of the graph above the points to determine the height of each rectangle. In particular, we will have three rectangles; the first with base , the second with base and the third with base . Now, the height of each rectangle comes from a point on the graph above the corresponding interval. To make these specific (and relatively straightforward), we'll use right endpoints to determine the height of each rectangle. So the height of each respective rectangle is given by , and by .  Now, if we add up the areas of these rectangles we get an approximation for the area under the graph. Call these areas . So the area under the graph of from to is about   There's nothing stopping us from going further here. For example, we pick rectangles, each with base length and heights determined by right endpoints as above, then the area of all of the rectangles will be an approximation (in fact, an overestimate) of the area of . The bases of these rectangles are given by So the areas of these rectangles are Adding these up, we get or just So if we sent to , we should get the exact area. In other words, the area under from to is given by   Actually finding this limit requires some trickery. It's not at all obvious, but we can write Hence So the exact area under from to is . Note that this matches up with our intuition from the last chapter: the area should be equal to the net change of an antiderivative. In this case, an antiderivative of is , and the net change of from to is exactly .  The process we used above for can be carried out for any continuous function. If we have a function defined on the interval , we can approximate the area under the graph by using rectangles. First, we split into different subintervals , each of width and where The approximate area under the graph of from to is then We can now define the area under a graph of a continuous function. Again, the idea is to approximate the graph with more and more rectangles.   Area   The area under the graph of a continuous function is the limit of the sum of the areas of the approximating rectangles:     Although the previous definition used right endpoints to find the height of each rectangle, this doesn't have to be the case. We can use left endpoints, midpoints or any other sample points  , where each is a point in the interval   Since finding areas in this way requires writing complicated sums, it seems like a good idea at this point to introduce notation for writing large summations. We call this sigma notation . Sigma notation takes the following form: To evaluate such an expression, just plug in the different values for from start to finish and add up what you get.   Evaluating a sum   Determine     We start at and finish at . Plugging all of these values in for , we get the following table:  Table of values for                                So we can say that      Using sigma notation   Use sigma notation to write the sum of all squares from to .    We need to start at and stop at . So the first component of this sum using sigma notation looks like . Now we just need to figure out what goes inside of it. Since we're adding squares of numbers, we'll just put inside of this sum. Hence the sum of all squares from to can be denoted     Sigma notation has some useful properties, since it's just another way to write sums.   Properties of Sigma Notation   Let and let . Let be a constant. Then the following are true: In other words, we can break sigma notation up over addition and subtraction, and we can move constants outside of it.     Areas using sigma notation   Write down a limit that gives the area under from to using sigma notation.    First, note that we can rewrite using sigma notation as We know what is, so we just need to identify and . isn't too bad here, it's just The are a little more complicated, but we'll still use right endpoints to find them. So we have In general, for .  Now we have everything we need to write our limit. Hence the area under from to is given by     Just as the problem of finding the slope of a tangent line can be viewed as a rate of change problem, the problem of finding areas can be viewed as an accumulation problem .   Finding work done   In physics, the work done by a constant force on some particle that moves a displacement is given by the formula How should we define the work done by a variable force?    The main idea here is to treat the variable force as the combination of several constant forces. To be specific, let denote our force (which depends on position ) and suppose it acts on a particle moving from to . itself may not be constant, but if we break up into subintervals of the form each of length , then should be nearly constant on each subinterval. So we can pick points from each subinterval and say that for all in .  Now we can approximate the work done by as the particle moves through the subinterval . The work done should be about equal to . Now, if we add up these estimates for each subinterval, we see that the total work done should be approximated by which suggests that we should define the exact work done to be     Note that was not written in terms of finding areas, but still involved the limit from . This tells us that the ideas in this section have a wider use than in just finding areas under curves.  "
},
{
  "id": "p-450",
  "level": "2",
  "url": "section-areas-under-curves.html#p-450",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right endpoints "
},
{
  "id": "definition-area",
  "level": "2",
  "url": "section-areas-under-curves.html#definition-area",
  "type": "Definition",
  "number": "6.1.1",
  "title": "Area.",
  "body": " Area   The area under the graph of a continuous function is the limit of the sum of the areas of the approximating rectangles:    "
},
{
  "id": "p-456",
  "level": "2",
  "url": "section-areas-under-curves.html#p-456",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample points "
},
{
  "id": "p-457",
  "level": "2",
  "url": "section-areas-under-curves.html#p-457",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sigma notation "
},
{
  "id": "example-evaluating-a-sum",
  "level": "2",
  "url": "section-areas-under-curves.html#example-evaluating-a-sum",
  "type": "Example",
  "number": "6.1.2",
  "title": "Evaluating a sum.",
  "body": " Evaluating a sum   Determine     We start at and finish at . Plugging all of these values in for , we get the following table:  Table of values for                                So we can say that    "
},
{
  "id": "example-using-sigma-notation",
  "level": "2",
  "url": "section-areas-under-curves.html#example-using-sigma-notation",
  "type": "Example",
  "number": "6.1.4",
  "title": "Using sigma notation.",
  "body": " Using sigma notation   Use sigma notation to write the sum of all squares from to .    We need to start at and stop at . So the first component of this sum using sigma notation looks like . Now we just need to figure out what goes inside of it. Since we're adding squares of numbers, we'll just put inside of this sum. Hence the sum of all squares from to can be denoted    "
},
{
  "id": "theorem-properties-of-sigma-notation",
  "level": "2",
  "url": "section-areas-under-curves.html#theorem-properties-of-sigma-notation",
  "type": "Theorem",
  "number": "6.1.5",
  "title": "Properties of Sigma Notation.",
  "body": " Properties of Sigma Notation   Let and let . Let be a constant. Then the following are true: In other words, we can break sigma notation up over addition and subtraction, and we can move constants outside of it.   "
},
{
  "id": "example-areas-using-sigma-notation",
  "level": "2",
  "url": "section-areas-under-curves.html#example-areas-using-sigma-notation",
  "type": "Example",
  "number": "6.1.6",
  "title": "Areas using sigma notation.",
  "body": " Areas using sigma notation   Write down a limit that gives the area under from to using sigma notation.    First, note that we can rewrite using sigma notation as We know what is, so we just need to identify and . isn't too bad here, it's just The are a little more complicated, but we'll still use right endpoints to find them. So we have In general, for .  Now we have everything we need to write our limit. Hence the area under from to is given by    "
},
{
  "id": "example-finding-work-done",
  "level": "2",
  "url": "section-areas-under-curves.html#example-finding-work-done",
  "type": "Example",
  "number": "6.1.7",
  "title": "Finding work done.",
  "body": " Finding work done   In physics, the work done by a constant force on some particle that moves a displacement is given by the formula How should we define the work done by a variable force?    The main idea here is to treat the variable force as the combination of several constant forces. To be specific, let denote our force (which depends on position ) and suppose it acts on a particle moving from to . itself may not be constant, but if we break up into subintervals of the form each of length , then should be nearly constant on each subinterval. So we can pick points from each subinterval and say that for all in .  Now we can approximate the work done by as the particle moves through the subinterval . The work done should be about equal to . Now, if we add up these estimates for each subinterval, we see that the total work done should be approximated by which suggests that we should define the exact work done to be    "
},
{
  "id": "section-the-definite-integral",
  "level": "1",
  "url": "section-the-definite-integral.html",
  "type": "Section",
  "number": "6.2",
  "title": "The Definite Integral",
  "body": " The Definite Integral  The process used in can be generalized quite a bit. Start with a function defined on some interval , and divide into subintervals where and each subinterval has length (i.e. ). This is known as a partition of . Then we can choose sample points from , from , all the way up to from . Note that the only restriction we're placing on the sample point is that is must come from the interval , but it may be any point in this interval.  The partition and sample points selected are now used to determine a sum that represents an approximation to the area under the curve: Geometrically, this sum represents the areas of multiple rectangles added together. Since these sums are essential for what follows, we will give them a name.   Riemann Sum  Riemann sum   Let with and let be a function defined on the interval . Let be a partition of and choose corresponding sample points for . Then a Riemann sum is a sum of the form where .    Although this can be more complicated than our definition in , it still approximates the area under from to . And as each subinterval in this partition gets smaller (i.e. as or equivalently as ), then this approximation should become exact, at least if is nice enough (see for a more precise statement).   The Definite Integral   Let be a function defined on . Then the definite integral of from to is the number provided that the limit exists (and that ). If this limit exists, we say that is integrable on .    We can use to rewrite our area definition: the area under from to is defined to be the definite integral of on , assuming it exists. For a function to be integrable, the particular partition of that we use cannot affect the limit in . This gives us a great deal of freedom in approximating the definite integral\/area under a curve: when choosing sample points, we can use left endpoints; right endpoints; midpoints and more. However, if is integrable then we lose nothing by just using right endpoints and subintervals of equal length, as in .   Integrability of Piecewise Continuous Functions   Let be a bounded, piecewise continuous function on with finitely many jump discontinuities. Then is integrable on . In particular, continuous functions are always integrable on bounded, closed intervals.    All of the functions that we will work with will be piecewise continuous, and many important quantities in mathematics and its applications can be represented by bounded, piecewise continuous functions. Definite integrals of such quantities therefore exist and are often used as a measure of accumulation. In particular, can be generalized to provide the following definition of work done by a force.   Work  work   Let denote the force acting on a particle over . The work done by the force on the particle as it moves from to is defined to be .     Expressing work done   A particle moving from to is acted upon by the force . Find the work done by the force on this particle.    Using , we see that the work done should be Since the definite integral represents area, and the definite integral of exists (since this is continuous), then we can see from that    Note that regions underneath the -axis correspond to negative areas!    A graph of the force and shaded areas corresponding to work.   A graph of a function representing force and shaded areas representing work.       In we used the connection between definite integrals and areas to find the work done. For the moment, this is our only method for calculating definite integrals. We will develop other methods starting in , but the connection between definite integrals and areas is an important one that we will make use of frequently.   A radical integral   Determine .    We won't be able to solve this integral algebraically until Calculus 2, but we can solve it geometrically instead. If we graph , we get the upper half of the circle of radius centered at the origin, as seen in . So the integral given must be exactly one-fourth the area of this circle, so    The graph of .   The graph of the top half of the circle of radius two centered at the origin.       Since the definite integral is defined as a limit of sums, it shares many properties with sums. In particular, we have the following version of    Properties of the Definite Integral   Let and be integrable on and let be a constant. Let be any number in . Then the following are true: In other words, we can break definite integrals up over addition and subtraction, and we can move constants outside of it.    Computing integrals in practice often involves setting up and approximating Riemann sums . These sums depend on how we choose the sample points from each interval . We've mostly worked with , or right endpoints. We could also choose , using left endpoints. However, it's often more accurate to use midpoints : . The reason for this is that if we choose midpoints of intervals as our sample points, these tend to be less affected than either endpoint if the function is increasing or decreasing. In particular, we have the midpoint rule .   Midpoint Rule   Let be a continuous function. Then where . Note that this rule calls for evenly dividing into a partition where each subinterval has equal length .    Replacing the midpoints in with corresponding left endpoints (respectively, right endpoints) gives the left endpoint rule (respectively, the right endpoint rule ). Together with the midpoint rule, these approximations are .   Careful! In general, .    Approximating an integral   Approximate using Riemann sums with .    For this integral, we have We will have different estimates using left endpoints, right endpoints and midpoints. Using left endpoints, we have Using midpoints, we have Using right endpoints, we have   Geometrically, we see that The exact value of this integral is actually , and we see that , the midpoint estimate, is clearly the best approximation to the integral in this case.    As gets larger, ideally the approximations produced by the midpoint and endpoint rules become more exact. The figure below is adapted from an example by Marshall Hampton located at and approximates integrals of the form . This makes use of the computer algebra system Sage which is itself based on the Python language.   Numerical integrals using the midpoint, left endpoint and right endpoint rules    The geometric interpretation of definite integrals as areas also suggests the following formulas. These can be useful for simplifying and estimating certain definite integrals.   More Properties of the Definite Integral   Let be integrable functions on . Then    If on , then .  If on , then .      "
},
{
  "id": "p-472",
  "level": "2",
  "url": "section-the-definite-integral.html#p-472",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partition "
},
{
  "id": "definition-riemann-sum",
  "level": "2",
  "url": "section-the-definite-integral.html#definition-riemann-sum",
  "type": "Definition",
  "number": "6.2.1",
  "title": "Riemann Sum.",
  "body": " Riemann Sum  Riemann sum   Let with and let be a function defined on the interval . Let be a partition of and choose corresponding sample points for . Then a Riemann sum is a sum of the form where .   "
},
{
  "id": "definition-the-definite-integral",
  "level": "2",
  "url": "section-the-definite-integral.html#definition-the-definite-integral",
  "type": "Definition",
  "number": "6.2.2",
  "title": "The Definite Integral.",
  "body": " The Definite Integral   Let be a function defined on . Then the definite integral of from to is the number provided that the limit exists (and that ). If this limit exists, we say that is integrable on .   "
},
{
  "id": "theorem-integrability-of-piecewise-continuous-functions",
  "level": "2",
  "url": "section-the-definite-integral.html#theorem-integrability-of-piecewise-continuous-functions",
  "type": "Theorem",
  "number": "6.2.3",
  "title": "Integrability of Piecewise Continuous Functions.",
  "body": " Integrability of Piecewise Continuous Functions   Let be a bounded, piecewise continuous function on with finitely many jump discontinuities. Then is integrable on . In particular, continuous functions are always integrable on bounded, closed intervals.   "
},
{
  "id": "definition-work",
  "level": "2",
  "url": "section-the-definite-integral.html#definition-work",
  "type": "Definition",
  "number": "6.2.4",
  "title": "Work.",
  "body": " Work  work   Let denote the force acting on a particle over . The work done by the force on the particle as it moves from to is defined to be .   "
},
{
  "id": "example-expressing-work-done",
  "level": "2",
  "url": "section-the-definite-integral.html#example-expressing-work-done",
  "type": "Example",
  "number": "6.2.5",
  "title": "Expressing work done.",
  "body": " Expressing work done   A particle moving from to is acted upon by the force . Find the work done by the force on this particle.    Using , we see that the work done should be Since the definite integral represents area, and the definite integral of exists (since this is continuous), then we can see from that    Note that regions underneath the -axis correspond to negative areas!    A graph of the force and shaded areas corresponding to work.   A graph of a function representing force and shaded areas representing work.      "
},
{
  "id": "example-a-radical-integral",
  "level": "2",
  "url": "section-the-definite-integral.html#example-a-radical-integral",
  "type": "Example",
  "number": "6.2.7",
  "title": "A radical integral.",
  "body": " A radical integral   Determine .    We won't be able to solve this integral algebraically until Calculus 2, but we can solve it geometrically instead. If we graph , we get the upper half of the circle of radius centered at the origin, as seen in . So the integral given must be exactly one-fourth the area of this circle, so    The graph of .   The graph of the top half of the circle of radius two centered at the origin.      "
},
{
  "id": "theorem-properties-of-the-definite-integral",
  "level": "2",
  "url": "section-the-definite-integral.html#theorem-properties-of-the-definite-integral",
  "type": "Theorem",
  "number": "6.2.9",
  "title": "Properties of the Definite Integral.",
  "body": " Properties of the Definite Integral   Let and be integrable on and let be a constant. Let be any number in . Then the following are true: In other words, we can break definite integrals up over addition and subtraction, and we can move constants outside of it.   "
},
{
  "id": "p-489",
  "level": "2",
  "url": "section-the-definite-integral.html#p-489",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "midpoint rule "
},
{
  "id": "definition-midpoint-rule",
  "level": "2",
  "url": "section-the-definite-integral.html#definition-midpoint-rule",
  "type": "Definition",
  "number": "6.2.10",
  "title": "Midpoint Rule.",
  "body": " Midpoint Rule   Let be a continuous function. Then where . Note that this rule calls for evenly dividing into a partition where each subinterval has equal length .   "
},
{
  "id": "p-491",
  "level": "2",
  "url": "section-the-definite-integral.html#p-491",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "left endpoint rule right endpoint rule "
},
{
  "id": "example-approximating-an-integral",
  "level": "2",
  "url": "section-the-definite-integral.html#example-approximating-an-integral",
  "type": "Example",
  "number": "6.2.11",
  "title": "Approximating an integral.",
  "body": " Approximating an integral   Approximate using Riemann sums with .    For this integral, we have We will have different estimates using left endpoints, right endpoints and midpoints. Using left endpoints, we have Using midpoints, we have Using right endpoints, we have   Geometrically, we see that The exact value of this integral is actually , and we see that , the midpoint estimate, is clearly the best approximation to the integral in this case.   "
},
{
  "id": "figure-interactive-numerical-integral",
  "level": "2",
  "url": "section-the-definite-integral.html#figure-interactive-numerical-integral",
  "type": "Figure",
  "number": "6.2.12",
  "title": "",
  "body": " Numerical integrals using the midpoint, left endpoint and right endpoint rules   "
},
{
  "id": "theorem-more-properties-of-the-definite-integral",
  "level": "2",
  "url": "section-the-definite-integral.html#theorem-more-properties-of-the-definite-integral",
  "type": "Theorem",
  "number": "6.2.13",
  "title": "More Properties of the Definite Integral.",
  "body": " More Properties of the Definite Integral   Let be integrable functions on . Then    If on , then .  If on , then .     "
},
{
  "id": "section-evaluating-integrals",
  "level": "1",
  "url": "section-evaluating-integrals.html",
  "type": "Section",
  "number": "6.3",
  "title": "Evaluating Integrals",
  "body": " Evaluating Integrals  Just as we did with derivatives, we want to find a way to calculate integrals without having to compute limits every time.   Evaluation Theorem   Let be continuous on and let be a single antiderivative of on this interval. Then     First, partition into . Then we can say that By the Mean Value Theorem, we can rewrite each term in the sum using : where is just some point in . So we have If we now send (i.e,, ), then the above becomes      tells us that if we want to evaluate the definite integral of a continuous function, we need to first find an antiderivative. We can also think of this result as follows: the definite integral of a rate of change is just the net change of the antiderivative.   Modeling a population   A honeybee population starts with members and grows at a rate of per week. Find the total population after weeks in terms of .    The total population after should be given by     As a useful shorthand, we introduce the notation So if is an antiderivative of , we can say that    Area under a rational function   Find the area under from to .    The area is just the definite integral, which is     The average value of a continuous function on an interval is defined to be    Average force   An object of mass 3 is acted upon by several forces that combine to give it an acceleration of , where is in units of and is in seconds. Find the average force acting on the mass from to .    We first need to find the net force acting on the particle. By Newton's Second Law, this is . So the average force should be     Because of the relationship between definite integrals and antiderivatives, we introduce a notation for antiderivatives that reinforces this connect.   Indefinite Integral   Let be a continuous function. The indefinite integral of , denoted , is the general antiderivative of . In symbols, if is an antiderivative of then      Finding an indefinite integral   Given that find .    We can find this integral by splitting it up, since the antiderivative of a sum is just the sum of the antiderivatives. So     Note that using to find definite integrals relies on having a particular antiderivative of a function , but we've said nothing about whether or not such an antiderivative can exist. In the next section, we'll see how to use integrals to construct antiderivatives.  "
},
{
  "id": "theorem-evaluation-theorem",
  "level": "2",
  "url": "section-evaluating-integrals.html#theorem-evaluation-theorem",
  "type": "Theorem",
  "number": "6.3.1",
  "title": "Evaluation Theorem.",
  "body": " Evaluation Theorem   Let be continuous on and let be a single antiderivative of on this interval. Then     First, partition into . Then we can say that By the Mean Value Theorem, we can rewrite each term in the sum using : where is just some point in . So we have If we now send (i.e,, ), then the above becomes    "
},
{
  "id": "example-modeling-a-population",
  "level": "2",
  "url": "section-evaluating-integrals.html#example-modeling-a-population",
  "type": "Example",
  "number": "6.3.2",
  "title": "Modeling a population.",
  "body": " Modeling a population   A honeybee population starts with members and grows at a rate of per week. Find the total population after weeks in terms of .    The total population after should be given by    "
},
{
  "id": "example-area-under-a-rational-function",
  "level": "2",
  "url": "section-evaluating-integrals.html#example-area-under-a-rational-function",
  "type": "Example",
  "number": "6.3.3",
  "title": "Area under a rational function.",
  "body": " Area under a rational function   Find the area under from to .    The area is just the definite integral, which is    "
},
{
  "id": "p-508",
  "level": "2",
  "url": "section-evaluating-integrals.html#p-508",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "average value "
},
{
  "id": "example-average-force",
  "level": "2",
  "url": "section-evaluating-integrals.html#example-average-force",
  "type": "Example",
  "number": "6.3.4",
  "title": "Average force.",
  "body": " Average force   An object of mass 3 is acted upon by several forces that combine to give it an acceleration of , where is in units of and is in seconds. Find the average force acting on the mass from to .    We first need to find the net force acting on the particle. By Newton's Second Law, this is . So the average force should be    "
},
{
  "id": "definition-indefinite-integral",
  "level": "2",
  "url": "section-evaluating-integrals.html#definition-indefinite-integral",
  "type": "Definition",
  "number": "6.3.5",
  "title": "Indefinite Integral.",
  "body": " Indefinite Integral   Let be a continuous function. The indefinite integral of , denoted , is the general antiderivative of . In symbols, if is an antiderivative of then    "
},
{
  "id": "example-finding-an-indefinite-integral",
  "level": "2",
  "url": "section-evaluating-integrals.html#example-finding-an-indefinite-integral",
  "type": "Example",
  "number": "6.3.6",
  "title": "Finding an indefinite integral.",
  "body": " Finding an indefinite integral   Given that find .    We can find this integral by splitting it up, since the antiderivative of a sum is just the sum of the antiderivatives. So    "
},
{
  "id": "section-the-fundamental-theorem-of-calculus",
  "level": "1",
  "url": "section-the-fundamental-theorem-of-calculus.html",
  "type": "Section",
  "number": "6.4",
  "title": "The Fundamental Theorem of Calculus",
  "body": " The Fundamental Theorem of Calculus  The previous section used antiderivatives to find definite integrals. Now we'll go the other direction and use integrals to define antiderivatives. We can do this as follows.  Let be some function continuous on . Then we can say that must be continuous on every interval of the form for in . This means that the definite integrals exist, and so we can use these to define a function, say .   Functions from integrals   Let and define . Find . Where is the largest?    First, note that we can compute by finding an antiderivative of . So or just   We can find where is largest by using a derivative test or just geometry. Since represents the area under from to , it follows that this area will be largest at , since this is where crosses the axis.    There's one important thing to take away from the previous example. The function turned out to be an antiderivative of , so in particular . This is not a coincidence.   Fundamental Theorem of Calculus   Let be a continuous function defined on .   Define for in . Then , i.e., is an antiderivative of .  Let be a particular antiderivative of . Then     We'll sketch the proof of the first part. First, assume that . Then Now, if is small and if , then should be approximately equal to since is continuous. Therefore and so .    The second part of is something we've seen before in , but the first part is new. Essentially, this result says that integration and differentiation are inverses of each other.   Error function   The error function , defined by is one of the most important functions in statistics and other applications of mathematics (such as modeling the spread of a virus or the spread of heat). Find the derivative of .    By the Fundamental Theorem of Calculus, we have Note that as , which suggests that the error function \"levels out\" as increases, which is in fact true.    Note that we can also use the FTC to differentiate expressions of the form by making use of the chain rule and treating the upper limit as our inside function. Functions of in the lower limit can also be dealt with by using to switch the limits. In general, .   Computing derivatives   Let Find .    We have Here, acts like an inside function so we must use the chain rule in addition to the Fundamental Theorem of Calculus to find this derivative.     A business problem   A company purchases equipment that depreciates at a rate and accumulates maintenance costs at a rate , where denotes the number of months after purchase. The company wants to minimize the cost per month of the equipment due to depreciation and maintenance. After how much time should the company replace the equipment?    First, we need to figure out the cost per month due to depreciation and maintenance, call it . Then Now, the total depreciation after months is , and the total maintenance cost after months is . So This is the function we need to minimize.  To minimize , we'll start by finding its critical points. Assuming that each of these functions is differentiable, we have which reduces to So the critical points occur at any value for which , i.e., the cost per month due to depreciation and maintenance equals the rate of depreciation plus the rate of maintenance costs.  Now we need to see if we have a minimum or a maximum. To do so, we can use the second derivative test. After some algebra, we get that and so Therefore gives a local minimum. If we assume that is differentiable everywhere, then this local minimum should also be an absolute minimum since it's the only critical point.    "
},
{
  "id": "example-functions-from-integrals",
  "level": "2",
  "url": "section-the-fundamental-theorem-of-calculus.html#example-functions-from-integrals",
  "type": "Example",
  "number": "6.4.1",
  "title": "Functions from integrals.",
  "body": " Functions from integrals   Let and define . Find . Where is the largest?    First, note that we can compute by finding an antiderivative of . So or just   We can find where is largest by using a derivative test or just geometry. Since represents the area under from to , it follows that this area will be largest at , since this is where crosses the axis.   "
},
{
  "id": "theorem-fundamental-theorem-of-calculus",
  "level": "2",
  "url": "section-the-fundamental-theorem-of-calculus.html#theorem-fundamental-theorem-of-calculus",
  "type": "Theorem",
  "number": "6.4.2",
  "title": "Fundamental Theorem of Calculus.",
  "body": " Fundamental Theorem of Calculus   Let be a continuous function defined on .   Define for in . Then , i.e., is an antiderivative of .  Let be a particular antiderivative of . Then     We'll sketch the proof of the first part. First, assume that . Then Now, if is small and if , then should be approximately equal to since is continuous. Therefore and so .   "
},
{
  "id": "example-error-function",
  "level": "2",
  "url": "section-the-fundamental-theorem-of-calculus.html#example-error-function",
  "type": "Example",
  "number": "6.4.3",
  "title": "Error function.",
  "body": " Error function   The error function , defined by is one of the most important functions in statistics and other applications of mathematics (such as modeling the spread of a virus or the spread of heat). Find the derivative of .    By the Fundamental Theorem of Calculus, we have Note that as , which suggests that the error function \"levels out\" as increases, which is in fact true.   "
},
{
  "id": "example-computing-derivatives",
  "level": "2",
  "url": "section-the-fundamental-theorem-of-calculus.html#example-computing-derivatives",
  "type": "Example",
  "number": "6.4.4",
  "title": "Computing derivatives.",
  "body": " Computing derivatives   Let Find .    We have Here, acts like an inside function so we must use the chain rule in addition to the Fundamental Theorem of Calculus to find this derivative.   "
},
{
  "id": "example-a-business-problem",
  "level": "2",
  "url": "section-the-fundamental-theorem-of-calculus.html#example-a-business-problem",
  "type": "Example",
  "number": "6.4.5",
  "title": "A business problem.",
  "body": " A business problem   A company purchases equipment that depreciates at a rate and accumulates maintenance costs at a rate , where denotes the number of months after purchase. The company wants to minimize the cost per month of the equipment due to depreciation and maintenance. After how much time should the company replace the equipment?    First, we need to figure out the cost per month due to depreciation and maintenance, call it . Then Now, the total depreciation after months is , and the total maintenance cost after months is . So This is the function we need to minimize.  To minimize , we'll start by finding its critical points. Assuming that each of these functions is differentiable, we have which reduces to So the critical points occur at any value for which , i.e., the cost per month due to depreciation and maintenance equals the rate of depreciation plus the rate of maintenance costs.  Now we need to see if we have a minimum or a maximum. To do so, we can use the second derivative test. After some algebra, we get that and so Therefore gives a local minimum. If we assume that is differentiable everywhere, then this local minimum should also be an absolute minimum since it's the only critical point.   "
},
{
  "id": "section-substitution",
  "level": "1",
  "url": "section-substitution.html",
  "type": "Section",
  "number": "6.5",
  "title": "Substitution",
  "body": " Substitution  By , we know that integration and differentiation are inverse operations. This means that differentiation rules, such as the chain rule and product rule, have corresponding integration rules. In this section we look at the integration rule corresponding to the chain rule, known as -substitution, and in Calculus 2 you'll see the integration rule corresponding to the product rule.  To see how the chain rule leads to an integration rule, suppose we have an expression where are differentiable. Then the chain rule says that Now, write and make the substitution . Then we get Now we can integrate both sides of this equation with respect to to get This method is known as -substitution .   -Substitution   Let be a differentiable function whose range is an interval . Let be a continuous function on . Then     Solving an integral by -substitution typically proceeds as follows:  Choose some substitution to simplify your integral. Your choice for will most likely be an \"inside function\".  Rewrite your integral in terms of and instead of and .  Solve the resulting integral in terms of if possible, and then rewrite your answer in terms of the original variable .     A simple substitution   Determine by using the substitution .    We need to rewrite the integral in terms of . An easy way to start is to replace with : However, we can't integrate yet . This is because the integral needs to be written entirely in terms of and ; no terms involving , including , can remain. to rewrite in terms of , we'll find and then \"solve\" for : So our integral turns into The last step is to replace with , and so We can also check this by differentiating.     Simplifying an integral with substitution   Determine .    We can find without too much trouble, but this integral is more complicated. However, we can use -substitution to get our integral into this form. So we'll let . Then , which means and so      -substitution is often useful if one part of an integral can be written as the derivative of another part of the integral.   Integral of tangent   Find the general antiderivative of .    We need to find . If we rewrite in terms of sine and cosine, we get It's not obvious, but we can solve this using -substitution since looks a lot like the derivative of . So we'll let , giving or just . This simplifies our integral to Since , this shows that the general antiderivative of is Note that  would not work in this example, at least not without some nasty algebra.    We can also use -substitution to find definite integrals.   Integrating with a natural log   Determine .    This integral looks awful, but the integrand contains and its derivative , which suggests that the substitution might simplify things. So let . Then , or , and the integral becomes     In the last example we had to be careful about our limits of integration since they applied to but not . We can simplify the process a little by converting the limits to limits, as shown in the next example.   Area under   Find the area under the graph of from to .    The area is given by . We can solve this by -substitution. Let , our inside function. Then , so and our integral turns into Now we change the limits to be in terms of , giving us and . So the area is just     "
},
{
  "id": "p-535",
  "level": "2",
  "url": "section-substitution.html#p-535",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-substitution "
},
{
  "id": "theorem--u--substitution",
  "level": "2",
  "url": "section-substitution.html#theorem--u--substitution",
  "type": "Theorem",
  "number": "6.5.1",
  "title": "<span class=\"process-math\">\\(u\\)<\/span>-Substitution.",
  "body": " -Substitution   Let be a differentiable function whose range is an interval . Let be a continuous function on . Then    "
},
{
  "id": "example-a-simple-substitution",
  "level": "2",
  "url": "section-substitution.html#example-a-simple-substitution",
  "type": "Example",
  "number": "6.5.2",
  "title": "A simple substitution.",
  "body": " A simple substitution   Determine by using the substitution .    We need to rewrite the integral in terms of . An easy way to start is to replace with : However, we can't integrate yet . This is because the integral needs to be written entirely in terms of and ; no terms involving , including , can remain. to rewrite in terms of , we'll find and then \"solve\" for : So our integral turns into The last step is to replace with , and so We can also check this by differentiating.   "
},
{
  "id": "example-simplifying-an-integral-with-substitution",
  "level": "2",
  "url": "section-substitution.html#example-simplifying-an-integral-with-substitution",
  "type": "Example",
  "number": "6.5.3",
  "title": "Simplifying an integral with substitution.",
  "body": " Simplifying an integral with substitution   Determine .    We can find without too much trouble, but this integral is more complicated. However, we can use -substitution to get our integral into this form. So we'll let . Then , which means and so    "
},
{
  "id": "example-integral-of-tangent",
  "level": "2",
  "url": "section-substitution.html#example-integral-of-tangent",
  "type": "Example",
  "number": "6.5.4",
  "title": "Integral of tangent.",
  "body": " Integral of tangent   Find the general antiderivative of .    We need to find . If we rewrite in terms of sine and cosine, we get It's not obvious, but we can solve this using -substitution since looks a lot like the derivative of . So we'll let , giving or just . This simplifies our integral to Since , this shows that the general antiderivative of is Note that  would not work in this example, at least not without some nasty algebra.   "
},
{
  "id": "example-integrating-with-a-natural-log",
  "level": "2",
  "url": "section-substitution.html#example-integrating-with-a-natural-log",
  "type": "Example",
  "number": "6.5.5",
  "title": "Integrating with a natural log.",
  "body": " Integrating with a natural log   Determine .    This integral looks awful, but the integrand contains and its derivative , which suggests that the substitution might simplify things. So let . Then , or , and the integral becomes    "
},
{
  "id": "example-area-under-sine",
  "level": "2",
  "url": "section-substitution.html#example-area-under-sine",
  "type": "Example",
  "number": "6.5.6",
  "title": "Area under <span class=\"process-math\">\\(x\\sin x^{2}\\)<\/span>.",
  "body": " Area under   Find the area under the graph of from to .    The area is given by . We can solve this by -substitution. Let , our inside function. Then , so and our integral turns into Now we change the limits to be in terms of , giving us and . So the area is just    "
},
{
  "id": "section-integration-by-parts",
  "level": "1",
  "url": "section-integration-by-parts.html",
  "type": "Section",
  "number": "7.1",
  "title": "Integration by Parts",
  "body": " Integration by Parts  Suppose we want to integrate . This can't be simplified using algebra (since integrals don't split up over products!) and substitution probably won't be very helpful, since does not already contain an \"inside function\" that we could replace. The integration tools that we have are unable to compute this integral, so we need to develop more tools!  Recall that the substitution method for solving integrals from is derived from the chain rule. In fact, by every derivative rule available to us also provides a corresponding integration rule. So perhaps the integration rule corresponding to the product rule can help us to integrate products. We call this method integration by parts .   Integration by Parts  integration techniques integration by parts   Let and be continuous functions, with differentiable. Then     By the product rule, we have . Rearranging this, we have Finally, we can integrate both sides to get     A useful way to remember the integration by parts method is as follows: Integration by parts can be used to integrate products of functions that can't already be evaluated by simpler means .   Using the Integration by Parts Formula   Compute .    To use , we need to write in the form . Once we have and , then we can set up the rest of the formula. One thing that can make this method tricky is the fact that we can have many different choices for and ; the only thing we need for certain is for here. However, if we look at the formula then we'll see two new terms on the right hand side: and , together in the second integral. This means that we'll need to differentiate and integrate , and this will suggest what both should be.  Since we need to compute , then we want to be easy to differentiate. Similarly, we want to be easy to integrate. And since we'd like to be able to compute this integral, we'd also like to be simpler than . Now return to . Since gets simpler if we differentiate it by doesn't, this suggests that we should set . And since , we must have (since automatically becomes whatever is left over). With these choices, we have   Therefore      You may be wondering why we didn't include an arbitrary constant when we found in . This is because including an arbitrary constant here doesn't affect the final answer. It's certainly not incorrect to include one here, but it adds more work than is already necessary.   When using the integration by parts method, it's usually a good idea to choose to be the polynomial portion of your integrand if there is one. This is because polynomials become simpler when they're differentiated. However, there are examples where should be something else.   Integrals Involving the Natural Logarithm   Determine .    Since we need to integrate a product, and we can't easily do so with -substitution or algebra, we'll try integration by parts. We could pick , and this is certainly easy to differentiate so we can find . However, doing so leaves us with , which is tricky to integrate, but is easy to differentiate. So we'll try setting and . Then   and so      An Integral from Differential Equations   An important concept in the field of differential equations is that of the Laplace transform . In the process of computing the Laplace transform of , an integral similar to appears. Determine this integral.    Here, it doesn't make much difference what we select for or , since both and are easy to differentiate and integrate, while neither becomes simpler. But since we're integrating a product, we'll try to use integration by parts anyway and hope for the best. To that end, let and . Then and , which gives   As expected, the new integral isn't any simpler than the one that we started with. However, it's not any more complicated either. So we'll try integration by parts on the new integral as well, with and . Then   So we have   There is something very strange about this equation: the same integral appears on both sides . This is no longer a calculus problem, it's an algebra problem! Solving for the integral algebraically (and including the arbitrary constant!) gives     Integrals with integrands of the form , or (where is a polynomials) can be successfully evaluated using the tabular method .   The Tabular Method   Evaluate .    Integration by parts also applies to definite integrals. You only need to remember to carry the limits through.   Sign of a Sine   Let . Does tend to be positive or negative along ?    We need to check the sign of . Using the tabular method, we get Since this is negative, tends to be negative along .    "
},
{
  "id": "theorem-integration-by-parts",
  "level": "2",
  "url": "section-integration-by-parts.html#theorem-integration-by-parts",
  "type": "Theorem",
  "number": "7.1.1",
  "title": "Integration by Parts.",
  "body": " Integration by Parts  integration techniques integration by parts   Let and be continuous functions, with differentiable. Then     By the product rule, we have . Rearranging this, we have Finally, we can integrate both sides to get    "
},
{
  "id": "example-using-the-integration-by-parts-formula",
  "level": "2",
  "url": "section-integration-by-parts.html#example-using-the-integration-by-parts-formula",
  "type": "Example",
  "number": "7.1.2",
  "title": "Using the Integration by Parts Formula.",
  "body": " Using the Integration by Parts Formula   Compute .    To use , we need to write in the form . Once we have and , then we can set up the rest of the formula. One thing that can make this method tricky is the fact that we can have many different choices for and ; the only thing we need for certain is for here. However, if we look at the formula then we'll see two new terms on the right hand side: and , together in the second integral. This means that we'll need to differentiate and integrate , and this will suggest what both should be.  Since we need to compute , then we want to be easy to differentiate. Similarly, we want to be easy to integrate. And since we'd like to be able to compute this integral, we'd also like to be simpler than . Now return to . Since gets simpler if we differentiate it by doesn't, this suggests that we should set . And since , we must have (since automatically becomes whatever is left over). With these choices, we have   Therefore    "
},
{
  "id": "example-integrals-involving-the-natural-logarithm",
  "level": "2",
  "url": "section-integration-by-parts.html#example-integrals-involving-the-natural-logarithm",
  "type": "Example",
  "number": "7.1.3",
  "title": "Integrals Involving the Natural Logarithm.",
  "body": " Integrals Involving the Natural Logarithm   Determine .    Since we need to integrate a product, and we can't easily do so with -substitution or algebra, we'll try integration by parts. We could pick , and this is certainly easy to differentiate so we can find . However, doing so leaves us with , which is tricky to integrate, but is easy to differentiate. So we'll try setting and . Then   and so    "
},
{
  "id": "example-an-integral-from-differential-equations",
  "level": "2",
  "url": "section-integration-by-parts.html#example-an-integral-from-differential-equations",
  "type": "Example",
  "number": "7.1.4",
  "title": "An Integral from Differential Equations.",
  "body": " An Integral from Differential Equations   An important concept in the field of differential equations is that of the Laplace transform . In the process of computing the Laplace transform of , an integral similar to appears. Determine this integral.    Here, it doesn't make much difference what we select for or , since both and are easy to differentiate and integrate, while neither becomes simpler. But since we're integrating a product, we'll try to use integration by parts anyway and hope for the best. To that end, let and . Then and , which gives   As expected, the new integral isn't any simpler than the one that we started with. However, it's not any more complicated either. So we'll try integration by parts on the new integral as well, with and . Then   So we have   There is something very strange about this equation: the same integral appears on both sides . This is no longer a calculus problem, it's an algebra problem! Solving for the integral algebraically (and including the arbitrary constant!) gives    "
},
{
  "id": "example-the-tabular-method",
  "level": "2",
  "url": "section-integration-by-parts.html#example-the-tabular-method",
  "type": "Example",
  "number": "7.1.5",
  "title": "The Tabular Method.",
  "body": " The Tabular Method   Evaluate .   "
},
{
  "id": "example-sign-of-a-sine",
  "level": "2",
  "url": "section-integration-by-parts.html#example-sign-of-a-sine",
  "type": "Example",
  "number": "7.1.6",
  "title": "Sign of a Sine.",
  "body": " Sign of a Sine   Let . Does tend to be positive or negative along ?    We need to check the sign of . Using the tabular method, we get Since this is negative, tends to be negative along .   "
},
{
  "id": "section-trigonometric-integrals-and-substitution",
  "level": "1",
  "url": "section-trigonometric-integrals-and-substitution.html",
  "type": "Section",
  "number": "7.2",
  "title": "Trigonometric Integrals and Substitution",
  "body": " Trigonometric Integrals and Substitution   In this section we determine how to evaluate integrals involving powers of trigonometric functions (such as , and others), as well as integrals involving certain radicals. Much of our work will follow from the important identity , as well as the half-angle formulas      Integrals Involving Powers of Sine and Cosine   Integrating an Odd Power of Cosine   Determine .    Although it's not obvious, we can actually solve this integral with substitution. First, we'll separate a power of from the rest in order to act as our : Now, if we want to act as in a substitution, then we need to look like . We can do this by using the Pythagorean Identity and writing .  Now we'll set , which gives and   which we can finish integrating without much trouble.    The trick we used above only worked because we had an odd power of cosine. In general, when integrating , you want to separate a factor from an odd power (if there is one). Then finish by using substitution.   Odd Powers of Sine and Cosine   Determine .    Remember: we want to separate a factor off of an odd power if there is one. Thankfully, we have two! We'll pick sine this time:   At this point, the integral isn't too difficult to complete.    If integrating even powers of sine and cosine, the algebra gets a little worse since the substitution trick applied above no longer works.   Integrating Even Powers of Cosine   The integral appears when finding the area of the circle using integration. Find the value of this integral.    Since we have an even power to work with, we'll try the half-angle formula. This lets us reduce the power on the cosine, at the expense of multiplying by , which greatly works in our favor:     Trying to evaluate integrals of higher even powers of sine and cosine quickly becomes tedious and is a job best left to computer algebra systems (like Sage).   Using Sage to Simplify Half-Angle Expansion   Evaluate .    We will need to use the half-angle identity for cosine three times before we can integrate. To help us do this we will make use of the .trig_reduce() method in Sage:   We can integrate this without too much trouble now (or even let Sage do the integral for us!).      Integrals Involving Powers of Secant and Tangent  In contrast to those involving sine and cosine, all of the integrals here involving secant and tangent are solvable using substitution. Generally, we'll attack these problems by separating a factor of (in which case we use ) or a factor of (in which case we use ). This will often be done using the Pythagorean identity  We will occasionally need to make use of two integral formulas:    Integrating a Power of Tangent   Determine .    Our goal is to separate a factor of either or to serve as our . Since neither appears, we'll use the Pythagorean identity to introduce a into our integral:   At this point the first integral can be solved using substitution, but the second integral needs to be rewritten again. However, the same trick we applied before works here too: just use the Pythagorean identity to introduce a factor of . This gives So      Integrating a Product of Tangent and Secant   Determine     Here, we see that we can separate a factor of from the integrand, so we'll do that and use :     In general, try to follow the guidelines below when integrating products of secant and tangent:  If the power of secant is even , then separate a factor of and use , along with the Pythagorean identity if necessary.  If the power of tangent is odd , then separate a factor of and use , along with the Pythagorean identity if necessary.    Now, for an example that does not fall into the above guidelines.   Integrating Secant Cubed   Determine .    We're dealing with an odd power of secant, so splitting off a factor of won't help here. We also lack a term, so splitting off a factor of is tricky as well. We'll try integrating by parts instead, with This gives   Therefore       Trigonometric Substitutions  An ellipse with horizontal axis length and vertical axis length centered at the origin is given by If we want to find the area of this ellipse, then we can compute the following integral and multiply it by : This integral is difficult to solve due to the square root in the integrand; it's tough to imagine what an antiderivative might be. So what we'll try to do is to use a \"reverse substitution\" that simplifies the square root.  To do so, notice that the Pythagorean identity gives . Taking the square root of the left hand side is much easier here than taking a root of the right hand side. So we'll try that substitution here: let Then Before we go further, let's figure out what our new limits are. Since , we have , and so . Hence we need our limits for to be and , and so we get We've seen how to integrate a function like this in . Hence the area of this ellipse is   This method is known as trigonometric substitution , and is useful for simplifying radicals. shows the various substitutions that can be used.   Trigonometric substitutions    radical  substitution  identity                     An Exponential Integral   Determine    This is adapted from Thomas' Calculus, edition, exercise 30 on page 591.      Even though this integral involves only exponentials, we can simplify it using trigonometric substitution due to the presence of the radical. First, we'll use -substitution to rewrite the integral into a form more suitable for trigonometric substitution: with and , we get   The appearance of in the denominator suggests that we use a tangent substitution, namely, . Then , and we get Using triangles, we can simplify this further to get      "
},
{
  "id": "example-integrating-an-odd-power-of-cosine",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-integrating-an-odd-power-of-cosine",
  "type": "Example",
  "number": "7.2.1",
  "title": "Integrating an Odd Power of Cosine.",
  "body": " Integrating an Odd Power of Cosine   Determine .    Although it's not obvious, we can actually solve this integral with substitution. First, we'll separate a power of from the rest in order to act as our : Now, if we want to act as in a substitution, then we need to look like . We can do this by using the Pythagorean Identity and writing .  Now we'll set , which gives and   which we can finish integrating without much trouble.   "
},
{
  "id": "example-odd-powers-of-sine-and-cosine",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-odd-powers-of-sine-and-cosine",
  "type": "Example",
  "number": "7.2.2",
  "title": "Odd Powers of Sine and Cosine.",
  "body": " Odd Powers of Sine and Cosine   Determine .    Remember: we want to separate a factor off of an odd power if there is one. Thankfully, we have two! We'll pick sine this time:   At this point, the integral isn't too difficult to complete.   "
},
{
  "id": "example-integrating-even-powers-of-cosine",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-integrating-even-powers-of-cosine",
  "type": "Example",
  "number": "7.2.3",
  "title": "Integrating Even Powers of Cosine.",
  "body": " Integrating Even Powers of Cosine   The integral appears when finding the area of the circle using integration. Find the value of this integral.    Since we have an even power to work with, we'll try the half-angle formula. This lets us reduce the power on the cosine, at the expense of multiplying by , which greatly works in our favor:    "
},
{
  "id": "example-using-sage-to-simplify-half-angle-expansion",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-using-sage-to-simplify-half-angle-expansion",
  "type": "Example",
  "number": "7.2.4",
  "title": "Using Sage to Simplify Half-Angle Expansion.",
  "body": " Using Sage to Simplify Half-Angle Expansion   Evaluate .    We will need to use the half-angle identity for cosine three times before we can integrate. To help us do this we will make use of the .trig_reduce() method in Sage:   We can integrate this without too much trouble now (or even let Sage do the integral for us!).   "
},
{
  "id": "example-integrating-a-power-of-tangent",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-integrating-a-power-of-tangent",
  "type": "Example",
  "number": "7.2.5",
  "title": "Integrating a Power of Tangent.",
  "body": " Integrating a Power of Tangent   Determine .    Our goal is to separate a factor of either or to serve as our . Since neither appears, we'll use the Pythagorean identity to introduce a into our integral:   At this point the first integral can be solved using substitution, but the second integral needs to be rewritten again. However, the same trick we applied before works here too: just use the Pythagorean identity to introduce a factor of . This gives So    "
},
{
  "id": "example-integrating-a-product-of-tangent-and-secant",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-integrating-a-product-of-tangent-and-secant",
  "type": "Example",
  "number": "7.2.6",
  "title": "Integrating a Product of Tangent and Secant.",
  "body": " Integrating a Product of Tangent and Secant   Determine     Here, we see that we can separate a factor of from the integrand, so we'll do that and use :    "
},
{
  "id": "example-integrating-secant-cubed",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-integrating-secant-cubed",
  "type": "Example",
  "number": "7.2.7",
  "title": "Integrating Secant Cubed.",
  "body": " Integrating Secant Cubed   Determine .    We're dealing with an odd power of secant, so splitting off a factor of won't help here. We also lack a term, so splitting off a factor of is tricky as well. We'll try integrating by parts instead, with This gives   Therefore    "
},
{
  "id": "p-605",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#p-605",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometric substitution "
},
{
  "id": "table-trig-substitutions",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#table-trig-substitutions",
  "type": "Table",
  "number": "7.2.8",
  "title": "Trigonometric substitutions",
  "body": " Trigonometric substitutions    radical  substitution  identity                   "
},
{
  "id": "example-an-exponential-integral",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-an-exponential-integral",
  "type": "Example",
  "number": "7.2.9",
  "title": "An Exponential Integral.",
  "body": " An Exponential Integral   Determine    This is adapted from Thomas' Calculus, edition, exercise 30 on page 591.      Even though this integral involves only exponentials, we can simplify it using trigonometric substitution due to the presence of the radical. First, we'll use -substitution to rewrite the integral into a form more suitable for trigonometric substitution: with and , we get   The appearance of in the denominator suggests that we use a tangent substitution, namely, . Then , and we get Using triangles, we can simplify this further to get    "
},
{
  "id": "section-partial-fractions",
  "level": "1",
  "url": "section-partial-fractions.html",
  "type": "Section",
  "number": "7.3",
  "title": "Partial Fractions",
  "body": " Partial Fractions  At this point we have tools available to us that allow us to compute integrals of products ( ), and trigonometric functions and certain radicals( ). Now we'll move on to a tool that will help us integrate rational functions (quotients of polynomials). The idea behind this method is to write a rational function, such as , in terms of simpler fractions. We'll demonstrate by example.   Integrating a Rational Function   Let Find .    We could try secant substitution, but that we'll instead focus on simplifying this fraction. First, factor the denominator:   Now, assume that we can find constants such that If we could find such constants, we could integrate the right hand side instead of the left hand side. There are a few ways to find these constants, but the easiest might be to just clear fractions by multiplying both sides by :   So need to satisfy this equation for all possible values of  . We'll pick values for that make it easy to find and . If , then becomes Similarly, Therefore     Finding partial fraction decompositions as in isn't too bad as long as the denominator can be factored into distinct (i.e. non-repeated) linear factors . The situation is more complicated if the factors are repeated or are quadratics (or both).   Finding a Partial Fraction Decomposition with Repeated Powers   Find the partial fraction decomposition for .    Since , it's tempting to write Unfortunately, doing so gives , which obviously won't work. If we instead use we get . However,   What we need to do is assume If we don't account for each power, we're not guaranteed a partial fraction decomposition. Now let's clear fractions: Quickly, using we find that , and using we find that .  At this point there are no nice values left to plug into the right hand side of , so we need to find and another way. One possibility is to differentiate both sides to make the right hand side simpler, which gives Now, entering into gives and so . Similarly, . Therefore     In order to find partial fraction decompositions when the denominator contains a quadratic, we must allow for the possibility of the numerator being linear .   Partial Fraction Decomposition with a Quadratic   Determine     First, we can simplify: Now that we've factored the denominator, we can attempt to find the partial fraction decomposition. So assume that Note the linear term above the quadratic!  The rest of this computation goes like it did before. If we clear fractions, we get If we plug in , we obtain . At this point, we could plug in (which would be okay!) or differentiate both sides, but it might be easier to take the following approach: expand the right hand side and collect like terms to get   For the right hand side to equal the left hand side,  must be zero . Hence . Similarly,  must equal one . Therefore     Comparing like terms as in is a useful technique even beyond partial fractions.  The method of partial fractions works as long as the degree of the numerator is strictly less than that of the denominator.    Partial Fractions Algorithm  partial fractions algorithm   To find the partial fraction decomposition for the rational function , do the following:  Simplify as much as possible, using long division if necessary when .  Factor .  Based on the factors of , determine the proper form of the partial fraction decomposition.  Clear fractions.  Find the unknown constants of the decomposition by plugging values for that simplify the equation, differentiating both sides, and\/or comparing like terms.       Using Long Division   Determine .    Before setting up partial fractions, we should simplify the integrand as much as possible. Here, we can use long division since the degree of the numerator is greater than or equal to the degree of the denominator. Doing so, we get We can integrate the first two terms on the right hand side easily, but we'll use partial fractions to rewrite the fraction:   Now clear fractions to get Setting gives , and setting gives . To find , we can expand the right hand side to write Hence .  Therefore     The next example shows a substitution that may occasionally work when partial fractions fails.   Twisty Substitution   Determine     Once again we have a radical causing problems, and it's not in any of the three trigonometric substitution forms we can use either. We want it to go away, so we'll try just that: set , which gives . Then Now, we use the fact that to write which simplifies to     The computation of partial fraction decompositions can be greatly simplified with Sage. This can be done by using the partial_fraction() method. For example, the partial fraction decomposition of is determined by Sage to be as follows:   Sage can also handle fractions that require long division as in the next example.   Partial Fraction Decomposition in Sage   Find the partial fraction decomposition of .    We will make quick work of this problem using Sage:     "
},
{
  "id": "example-integrating-a-rational-function",
  "level": "2",
  "url": "section-partial-fractions.html#example-integrating-a-rational-function",
  "type": "Example",
  "number": "7.3.1",
  "title": "Integrating a Rational Function.",
  "body": " Integrating a Rational Function   Let Find .    We could try secant substitution, but that we'll instead focus on simplifying this fraction. First, factor the denominator:   Now, assume that we can find constants such that If we could find such constants, we could integrate the right hand side instead of the left hand side. There are a few ways to find these constants, but the easiest might be to just clear fractions by multiplying both sides by :   So need to satisfy this equation for all possible values of  . We'll pick values for that make it easy to find and . If , then becomes Similarly, Therefore    "
},
{
  "id": "example-finding-a-partial-fraction-decomposition-with-repeated-powers",
  "level": "2",
  "url": "section-partial-fractions.html#example-finding-a-partial-fraction-decomposition-with-repeated-powers",
  "type": "Example",
  "number": "7.3.2",
  "title": "Finding a Partial Fraction Decomposition with Repeated Powers.",
  "body": " Finding a Partial Fraction Decomposition with Repeated Powers   Find the partial fraction decomposition for .    Since , it's tempting to write Unfortunately, doing so gives , which obviously won't work. If we instead use we get . However,   What we need to do is assume If we don't account for each power, we're not guaranteed a partial fraction decomposition. Now let's clear fractions: Quickly, using we find that , and using we find that .  At this point there are no nice values left to plug into the right hand side of , so we need to find and another way. One possibility is to differentiate both sides to make the right hand side simpler, which gives Now, entering into gives and so . Similarly, . Therefore    "
},
{
  "id": "example-partial-fraction-decomposition-with-a-quadratic",
  "level": "2",
  "url": "section-partial-fractions.html#example-partial-fraction-decomposition-with-a-quadratic",
  "type": "Example",
  "number": "7.3.3",
  "title": "Partial Fraction Decomposition with a Quadratic.",
  "body": " Partial Fraction Decomposition with a Quadratic   Determine     First, we can simplify: Now that we've factored the denominator, we can attempt to find the partial fraction decomposition. So assume that Note the linear term above the quadratic!  The rest of this computation goes like it did before. If we clear fractions, we get If we plug in , we obtain . At this point, we could plug in (which would be okay!) or differentiate both sides, but it might be easier to take the following approach: expand the right hand side and collect like terms to get   For the right hand side to equal the left hand side,  must be zero . Hence . Similarly,  must equal one . Therefore    "
},
{
  "id": "algorithm-partial-fractions-algorithm",
  "level": "2",
  "url": "section-partial-fractions.html#algorithm-partial-fractions-algorithm",
  "type": "Algorithm",
  "number": "7.3.4",
  "title": "Partial Fractions Algorithm.",
  "body": " Partial Fractions Algorithm  partial fractions algorithm   To find the partial fraction decomposition for the rational function , do the following:  Simplify as much as possible, using long division if necessary when .  Factor .  Based on the factors of , determine the proper form of the partial fraction decomposition.  Clear fractions.  Find the unknown constants of the decomposition by plugging values for that simplify the equation, differentiating both sides, and\/or comparing like terms.     "
},
{
  "id": "example-using-long-division",
  "level": "2",
  "url": "section-partial-fractions.html#example-using-long-division",
  "type": "Example",
  "number": "7.3.5",
  "title": "Using Long Division.",
  "body": " Using Long Division   Determine .    Before setting up partial fractions, we should simplify the integrand as much as possible. Here, we can use long division since the degree of the numerator is greater than or equal to the degree of the denominator. Doing so, we get We can integrate the first two terms on the right hand side easily, but we'll use partial fractions to rewrite the fraction:   Now clear fractions to get Setting gives , and setting gives . To find , we can expand the right hand side to write Hence .  Therefore    "
},
{
  "id": "example-twisty-substitution",
  "level": "2",
  "url": "section-partial-fractions.html#example-twisty-substitution",
  "type": "Example",
  "number": "7.3.6",
  "title": "Twisty Substitution.",
  "body": " Twisty Substitution   Determine     Once again we have a radical causing problems, and it's not in any of the three trigonometric substitution forms we can use either. We want it to go away, so we'll try just that: set , which gives . Then Now, we use the fact that to write which simplifies to    "
},
{
  "id": "example-partial-fraction-decomposition-in-sage",
  "level": "2",
  "url": "section-partial-fractions.html#example-partial-fraction-decomposition-in-sage",
  "type": "Example",
  "number": "7.3.7",
  "title": "Partial Fraction Decomposition in Sage.",
  "body": " Partial Fraction Decomposition in Sage   Find the partial fraction decomposition of .    We will make quick work of this problem using Sage:    "
},
{
  "id": "section-improper-integrals",
  "level": "1",
  "url": "section-improper-integrals.html",
  "type": "Section",
  "number": "7.4",
  "title": "Improper Integrals",
  "body": " Improper Integrals   (Note: this section corresponds to Section 6.6 of the text.) Consider the following problem: determine the smallest velocity required for an object to escape the earth's gravitational pull (i.e., the escape velocity ). We can try to answer this problem by looking at the total work needed to move this object. From one viewpoint, work is just the total change in kinetic energy. If the object is moving at escape velocity, say , then all of its kinetic energy must have been converted into work: , where is the mass of the object.  As we'll see later, work is also the integral of force, so let's examine the force on the object. If we neglect air resistance and assume that the only force acting on the object is gravity, then the force exerted on the object is given by where is the mass of the Earth, is still the mass of the object, is the distance from the center of mass of the Earth to the center of mass of the object, and is the gravitational constant. Now assume that the Earth is a sphere of radius , and that the object has enough velocity to move it a distance of units from the surface of the Earth. Then the total work done in moving the object this distance is Now let's think about should happen if the object is at escape velocity. In this case, theoretically at least, there should be no limit to the distance the object can travel if given enough time. So what's the total work done?  Let's try to compute We get Note that this is still an underestimate for the total work theoretically done, since can increase without bound. So let's send to and see what we get:   So, to summarize, the total work should be or just  We can solve this equation for , and so the escape velocity should be As a neat bonus, this shows that the escape velocity only depends on , the mass of the Earth and the \"radius\" of the Earth . Plugging in values for these figures, we get meters per second, or kilometers per second.  This is all very important obviously, but this is calculus, and what we really care about are the mathematical tools required to solve this problem. To do this, we basically had to figure out what the integral of was over the interval . This is our first example of an improper integral .    Improper Integrals over Infinite Intervals  First, a definition.   Type 1 Improper Integral   Let be some function, and let be a constant. If exists for every , then we define assuming this limit exists. Similarly, if exists for every , then we define assuming this limit exists. These improper integrals are convergent if the corresponding limits exist and divergent otherwise.  Finally, if both and are convergent, then we define      A Divergent Integral   Determine if is convergent or divergent.    By definition, we have Hence the integral is divergent.    In , note that as . However, it doesn't go to  fast enough for the integral to converge.    Is convergent?    The convergence of depends on the value of .   Integral -test   The integral converges if and only if .     Area Under a Graph   Find the area under .    The area under is given by . To evaluate this integral, we must split it into two improper integrals:   At this point, we can use -substitution to find each integral, using and . So we get   Hence the area under is (which might not be so surprising if you graph ).     Radioactive Decay   A radioactive substance undergoes decay, and has mass at time given by for some . The expected lifetime of a particle is given by Find this value.    We can solve this using integration by parts. Doing so, we get This can be verified using the code cell below.       A Probability Distribution   In probability, a probability distribution is a function satisfying . Is a probability distribution?    We have . So this isn't a probability distribution.     Another Laplace Transform   The Laplace transform of a function is defined to be , assuming is chosen so that the integral converges. Find the Laplace transform of .     Improper Integrals with Discontinuous Integrands  The second type of improper integral we'll consider involves integrands with \"divide-by-zero\" problems.   Type 2 Improper Integral   If is continuous on and is discontinuous at , then assuming this limit exists.  If is continuous on and is discontinuous at , then assuming this limit exists.  If is at where , then assuming these integrals are convergent.     Logarithmic Discontinuity   Determine if is convergent.    This integral is improper since is discontinuous at . To evaluate it, we'll use limits: where we used the fact that as by L'Hopital's Rule.     Another Integral -Test   For what values of is the integral convergent?    We could try to compute this as is, but we can save ourselves some work by making use of . First, we'll use the substitution . Then and Therefore which we know converges if and only if . Hence the original integral converges if and only if .      Comparison Tests for Improper Integrals  For integrals, we have two comparison tests that allow us to determine if an improper integral converges by comparing it with a simpler integral. First, we'll look at the direct comparison test .   convergence tests integrals direct comparison test  Direct Comparison Test   Suppose that and are continuous functions and that for , for some real number . Then if converges, so goes . Likewise, if diverges, then so does .      Does converge?    This integrand looks pretty awful. However, we can say that Since  implies that the original integral must converge as well. Note that we don't know what it converges to, only that it does.     The Gaussian Integral   Show that the integral is convergent.    We can do this by breaking the integral into two parts: If is between and , then . On the other hand, if , then . Therefore Hence the original integral must also be convergent. It's value is actually known (see ), and Sage can also be used to compute its value as below.     To use successfully, we need to choose a simpler function that's related to the integrand and then use algebra to justify a specific inequality. It is sometimes more straightforward to apply the limit comparison test .   convergence tests integrals limit comparison test  Limit Comparison Test   Let and be positive, continuous functions on for some constant . If exists and is positive, then the integrals must both converge or both diverge.      Determine if converges.    The integrand is awful again, but if is very large then we can say that Since converges, this suggests that maybe the original integral does as well. We can prove this using .  In fact, we have Since this limit exists and is positive, then the original integral must also converge by the Limit Comparison Test.     "
},
{
  "id": "p-639",
  "level": "2",
  "url": "section-improper-integrals.html#p-639",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "escape velocity "
},
{
  "id": "p-643",
  "level": "2",
  "url": "section-improper-integrals.html#p-643",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "improper integral "
},
{
  "id": "definition-type-1-improper-integral",
  "level": "2",
  "url": "section-improper-integrals.html#definition-type-1-improper-integral",
  "type": "Definition",
  "number": "7.4.1",
  "title": "Type 1 Improper Integral.",
  "body": " Type 1 Improper Integral   Let be some function, and let be a constant. If exists for every , then we define assuming this limit exists. Similarly, if exists for every , then we define assuming this limit exists. These improper integrals are convergent if the corresponding limits exist and divergent otherwise.  Finally, if both and are convergent, then we define    "
},
{
  "id": "example-a-divergent-integral",
  "level": "2",
  "url": "section-improper-integrals.html#example-a-divergent-integral",
  "type": "Example",
  "number": "7.4.2",
  "title": "A Divergent Integral.",
  "body": " A Divergent Integral   Determine if is convergent or divergent.    By definition, we have Hence the integral is divergent.   "
},
{
  "id": "example-convergent-improper-integral",
  "level": "2",
  "url": "section-improper-integrals.html#example-convergent-improper-integral",
  "type": "Example",
  "number": "7.4.3",
  "title": "",
  "body": "  Is convergent?   "
},
{
  "id": "theorem-integral-p-test",
  "level": "2",
  "url": "section-improper-integrals.html#theorem-integral-p-test",
  "type": "Theorem",
  "number": "7.4.4",
  "title": "Integral <span class=\"process-math\">\\(p\\)<\/span>-test.",
  "body": " Integral -test   The integral converges if and only if .   "
},
{
  "id": "example-area-under-a-graph",
  "level": "2",
  "url": "section-improper-integrals.html#example-area-under-a-graph",
  "type": "Example",
  "number": "7.4.5",
  "title": "Area Under a Graph.",
  "body": " Area Under a Graph   Find the area under .    The area under is given by . To evaluate this integral, we must split it into two improper integrals:   At this point, we can use -substitution to find each integral, using and . So we get   Hence the area under is (which might not be so surprising if you graph ).   "
},
{
  "id": "example-radioactive-decay",
  "level": "2",
  "url": "section-improper-integrals.html#example-radioactive-decay",
  "type": "Example",
  "number": "7.4.6",
  "title": "Radioactive Decay.",
  "body": " Radioactive Decay   A radioactive substance undergoes decay, and has mass at time given by for some . The expected lifetime of a particle is given by Find this value.    We can solve this using integration by parts. Doing so, we get This can be verified using the code cell below.   "
},
{
  "id": "example-a-probability-distribution",
  "level": "2",
  "url": "section-improper-integrals.html#example-a-probability-distribution",
  "type": "Example",
  "number": "7.4.7",
  "title": "A Probability Distribution.",
  "body": " A Probability Distribution   In probability, a probability distribution is a function satisfying . Is a probability distribution?    We have . So this isn't a probability distribution.   "
},
{
  "id": "example-another-laplace-transform",
  "level": "2",
  "url": "section-improper-integrals.html#example-another-laplace-transform",
  "type": "Example",
  "number": "7.4.8",
  "title": "Another Laplace Transform.",
  "body": " Another Laplace Transform   The Laplace transform of a function is defined to be , assuming is chosen so that the integral converges. Find the Laplace transform of .   "
},
{
  "id": "definition-type-2-improper-integral",
  "level": "2",
  "url": "section-improper-integrals.html#definition-type-2-improper-integral",
  "type": "Definition",
  "number": "7.4.9",
  "title": "Type 2 Improper Integral.",
  "body": " Type 2 Improper Integral   If is continuous on and is discontinuous at , then assuming this limit exists.  If is continuous on and is discontinuous at , then assuming this limit exists.  If is at where , then assuming these integrals are convergent.   "
},
{
  "id": "example-logarithmic-discontinuity",
  "level": "2",
  "url": "section-improper-integrals.html#example-logarithmic-discontinuity",
  "type": "Example",
  "number": "7.4.10",
  "title": "Logarithmic Discontinuity.",
  "body": " Logarithmic Discontinuity   Determine if is convergent.    This integral is improper since is discontinuous at . To evaluate it, we'll use limits: where we used the fact that as by L'Hopital's Rule.   "
},
{
  "id": "example-another-integral-p-test",
  "level": "2",
  "url": "section-improper-integrals.html#example-another-integral-p-test",
  "type": "Example",
  "number": "7.4.11",
  "title": "Another Integral <span class=\"process-math\">\\(p\\)<\/span>-Test.",
  "body": " Another Integral -Test   For what values of is the integral convergent?    We could try to compute this as is, but we can save ourselves some work by making use of . First, we'll use the substitution . Then and Therefore which we know converges if and only if . Hence the original integral converges if and only if .   "
},
{
  "id": "p-670",
  "level": "2",
  "url": "section-improper-integrals.html#p-670",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direct comparison test "
},
{
  "id": "theorem-direct-comparison-test-integral",
  "level": "2",
  "url": "section-improper-integrals.html#theorem-direct-comparison-test-integral",
  "type": "Theorem",
  "number": "7.4.12",
  "title": "Direct Comparison Test.",
  "body": " convergence tests integrals direct comparison test  Direct Comparison Test   Suppose that and are continuous functions and that for , for some real number . Then if converges, so goes . Likewise, if diverges, then so does .   "
},
{
  "id": "example-145",
  "level": "2",
  "url": "section-improper-integrals.html#example-145",
  "type": "Example",
  "number": "7.4.13",
  "title": "",
  "body": "  Does converge?    This integrand looks pretty awful. However, we can say that Since  implies that the original integral must converge as well. Note that we don't know what it converges to, only that it does.   "
},
{
  "id": "example-the-gaussian-integral",
  "level": "2",
  "url": "section-improper-integrals.html#example-the-gaussian-integral",
  "type": "Example",
  "number": "7.4.14",
  "title": "The Gaussian Integral.",
  "body": " The Gaussian Integral   Show that the integral is convergent.    We can do this by breaking the integral into two parts: If is between and , then . On the other hand, if , then . Therefore Hence the original integral must also be convergent. It's value is actually known (see ), and Sage can also be used to compute its value as below.   "
},
{
  "id": "p-676",
  "level": "2",
  "url": "section-improper-integrals.html#p-676",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "limit comparison test "
},
{
  "id": "theorem-limit-comparison-test-integral",
  "level": "2",
  "url": "section-improper-integrals.html#theorem-limit-comparison-test-integral",
  "type": "Theorem",
  "number": "7.4.15",
  "title": "Limit Comparison Test.",
  "body": " convergence tests integrals limit comparison test  Limit Comparison Test   Let and be positive, continuous functions on for some constant . If exists and is positive, then the integrals must both converge or both diverge.   "
},
{
  "id": "example-147",
  "level": "2",
  "url": "section-improper-integrals.html#example-147",
  "type": "Example",
  "number": "7.4.16",
  "title": "",
  "body": "  Determine if converges.    The integrand is awful again, but if is very large then we can say that Since converges, this suggests that maybe the original integral does as well. We can prove this using .  In fact, we have Since this limit exists and is positive, then the original integral must also converge by the Limit Comparison Test.   "
},
{
  "id": "section-numerical-integration",
  "level": "1",
  "url": "section-numerical-integration.html",
  "type": "Section",
  "number": "7.5",
  "title": "Numerical Integration",
  "body": " Numerical Integration  Up to now we have primarily considered integrals whose integrands involve functions with elementary antiderivatives . This roughly means that the antiderivative of such a function can be expressed with the usual functions of calculus. However, many important functions do not have elementary antiderivatives. One such example is the Gaussian function  . This is one of the most important functions in mathematics and its applications, but its integral has no exact form in terms of elementary functions like sine, cosine, the logarithm, and so on. Therefore it is important to approximate such integrals with numerical methods (a process also known as quadrature ).  "
},
{
  "id": "section-areas-between-curves",
  "level": "1",
  "url": "section-areas-between-curves.html",
  "type": "Section",
  "number": "8.1",
  "title": "Areas Between Curves",
  "body": " Areas Between Curves  We already know that geometrically represents the area under from to . Now we'd like to try to extend the integral to other geometrical concepts such as surface areas and volumes. An easy generalization we can make right now is that of areas between curves , as in .      Area between curves. Adapted from here .   It may not be too much of a stretch to say that the area should be given by , and indeed it is, but we will prove this using Riemann sums for the reason that Riemann sums appear a lot in applications. Furthermore, Riemann sums provide us with the formula we need to evaluate integrals numerically using libraries such as NumPy. So let's start by partitioning the interval into  subintervals  where and   Now we'll use the subintervals to break the region up into rectangles to approximate the area. So choose a point from each subinterval and use it to determine the height of the corresponding rectangle: . Then the area is , and adding up the areas of all of the rectangles lets us approximate the area of :   Now send (equivalently, send ) to make the approximation exact:    Area Between Parabolas   Find the area between and .    If we graph and , we see that the area will be given by , where and are the values of where . Using a bit of algebra, we get and . Therefore the area between the parabolas is     Although we found an exact solution in , we can also use this to test our NumPy skills. shows us how we can use NumPy to find this quantity.    Area with Changing Limits   Find the area of the region bounded by and .    If we solve both equations for , we get and . We can then graph the region below:      The region bounded by and .   To find the area between these curves, we'll need to compute two integrals: one for and another for . In particular, the area will be given by . Doing so, we get for the area between the curves.    Part of the reason why finding the area in was more complicated was because the curves did not represent functions of . However, we can view each curve as representing a function of , namely, Then the area can be found as So it can be much easier if we find the area by integrating with respect to as opposed to .    Find the area contained by the curves and .    If we graph the region, we get .      Region between two parabolas.   Finding the area by using integrals with respect to would require setting up and solving three different integrals! So, not terrific. However, we can integrate with respect to fairly easily. By finding where the curves intersect, we see that . Hence the area should be and so the area is just units.    "
},
{
  "id": "figure-area-between-curves",
  "level": "2",
  "url": "section-areas-between-curves.html#figure-area-between-curves",
  "type": "Figure",
  "number": "8.1.1",
  "title": "",
  "body": "    Area between curves. Adapted from here .  "
},
{
  "id": "example-area-between-parabolas",
  "level": "2",
  "url": "section-areas-between-curves.html#example-area-between-parabolas",
  "type": "Example",
  "number": "8.1.2",
  "title": "Area Between Parabolas.",
  "body": " Area Between Parabolas   Find the area between and .    If we graph and , we see that the area will be given by , where and are the values of where . Using a bit of algebra, we get and . Therefore the area between the parabolas is    "
},
{
  "id": "example-area-with-changing-limits",
  "level": "2",
  "url": "section-areas-between-curves.html#example-area-with-changing-limits",
  "type": "Example",
  "number": "8.1.3",
  "title": "Area with Changing Limits.",
  "body": " Area with Changing Limits   Find the area of the region bounded by and .    If we solve both equations for , we get and . We can then graph the region below:      The region bounded by and .   To find the area between these curves, we'll need to compute two integrals: one for and another for . In particular, the area will be given by . Doing so, we get for the area between the curves.   "
},
{
  "id": "example-150",
  "level": "2",
  "url": "section-areas-between-curves.html#example-150",
  "type": "Example",
  "number": "8.1.5",
  "title": "",
  "body": "  Find the area contained by the curves and .    If we graph the region, we get .      Region between two parabolas.   Finding the area by using integrals with respect to would require setting up and solving three different integrals! So, not terrific. However, we can integrate with respect to fairly easily. By finding where the curves intersect, we see that . Hence the area should be and so the area is just units.   "
},
{
  "id": "section-volumes",
  "level": "1",
  "url": "section-volumes.html",
  "type": "Section",
  "number": "8.2",
  "title": "Volumes",
  "body": " Volumes  Just as we can with areas, we can attempt to find volumes using integrals as well. At the moment we can't find volumes of general regions without first describing integrals in higher dimensions, which is the content of . Until then, we'll need to restrict ourselves to so-called solids of revolution .  As an example, consider . To generate the solid of revolution on the right, we take the graph of and rotate it about the -axis, creating a three-dimensional region.           Generating a solid of revolution.   To find the volume of such a region, the idea is to find the area of a general cross-section of the region, which by design should be a function of alone, say . Then, roughly, should represent the volume of a small cross-section of the solid, and so the integral should give us the volume of the region. This entire argument can be made precise using Riemann sums as in the previous section, and so we get the following: the solid from to whose cross-sections (with respect to the -axis) have area has volume given by    Finding the Volume of a Sphere   Find the volume of a sphere of radius .    To begin, let's assume that the sphere is centered at the origin. Then each cross section perpendicular to the -axis is just a circle with radius . Hence each cross-sectional area is given by , which means the volume of the sphere should be     Again, the idea for finding the volumes of these regions is to determine the cross-sectional areas perpendicular to the -axis (or whatever the axis of rotation happens to be) and then integrate.    Find the volume of the region obtained by rotating the graph of from to about the line .    As is almost always the case, a good way to start is by graphing the region to get a rough idea of what it looks like. Doing so, we see that each of the cross-sections are circles. But this is to be expected, since the region is a solid of revolution. Given between and , the area of the corresponding cross-section is given by Hence the volume of this region should be     The previous problems involved finding volumes by using disks since disks were natural cross-sections. The next example instead uses washers as cross-sections instead. Although the formula we get for the volume is slightly different, it's still essentially integrating the areas of the cross-sections.    Find the volume of the solid obtained by rotating the region bounded by , and about the line .    Since the axis of rotation is , we want to look at cross-sections perpendicular to this line, i.e., parallel to the -axis. Each such cross-section will look like a washer, and hence its area will involve the inner radius and outer radius of the washer. Since the radii are measured in terms of horizontal distance, we'll need to find in terms of . Doing so, we see that the inner radius is given by while the outer radius is given by . Therefore the volume of the region is given by     "
},
{
  "id": "p-696",
  "level": "2",
  "url": "section-volumes.html#p-696",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solids of revolution "
},
{
  "id": "figure-solid-revolution-1",
  "level": "2",
  "url": "section-volumes.html#figure-solid-revolution-1",
  "type": "Figure",
  "number": "8.2.1",
  "title": "",
  "body": "         Generating a solid of revolution.  "
},
{
  "id": "example-finding-the-volume-of-a-sphere",
  "level": "2",
  "url": "section-volumes.html#example-finding-the-volume-of-a-sphere",
  "type": "Example",
  "number": "8.2.2",
  "title": "Finding the Volume of a Sphere.",
  "body": " Finding the Volume of a Sphere   Find the volume of a sphere of radius .    To begin, let's assume that the sphere is centered at the origin. Then each cross section perpendicular to the -axis is just a circle with radius . Hence each cross-sectional area is given by , which means the volume of the sphere should be    "
},
{
  "id": "example-152",
  "level": "2",
  "url": "section-volumes.html#example-152",
  "type": "Example",
  "number": "8.2.3",
  "title": "",
  "body": "  Find the volume of the region obtained by rotating the graph of from to about the line .    As is almost always the case, a good way to start is by graphing the region to get a rough idea of what it looks like. Doing so, we see that each of the cross-sections are circles. But this is to be expected, since the region is a solid of revolution. Given between and , the area of the corresponding cross-section is given by Hence the volume of this region should be    "
},
{
  "id": "example-solid-rev-4",
  "level": "2",
  "url": "section-volumes.html#example-solid-rev-4",
  "type": "Example",
  "number": "8.2.4",
  "title": "",
  "body": "  Find the volume of the solid obtained by rotating the region bounded by , and about the line .    Since the axis of rotation is , we want to look at cross-sections perpendicular to this line, i.e., parallel to the -axis. Each such cross-section will look like a washer, and hence its area will involve the inner radius and outer radius of the washer. Since the radii are measured in terms of horizontal distance, we'll need to find in terms of . Doing so, we see that the inner radius is given by while the outer radius is given by . Therefore the volume of the region is given by    "
},
{
  "id": "section-volumes-by-cylindrical-shells",
  "level": "1",
  "url": "section-volumes-by-cylindrical-shells.html",
  "type": "Section",
  "number": "8.3",
  "title": "Volumes by Cylindrical Shells",
  "body": " Volumes by Cylindrical Shells  The method we used to find volumes in applies to solids that have cross-sections depending on or alone. Once we had a formula for this area, we could then integrate it to get the volume. However, not all shapes have such simple cross-sections, and so this method doesn't apply in general. In this section, we'll look at using cylindrical shells instead.  Therefore, the following fact will prove useful: the volume of a cylindrical shell of height , inner radius and outer radius is given by where is the \"average radius\" and is the thickness of the shell. If we can break a solid up into these cylindrical \"cross-sections,\" then integrating these areas should again give us the volume of the solid. For shells that are perpendicular to the -axis, we can typically replace with and with , leading to an integral of the form   Finding areas using disks and washers usually involves finding disks\/washers that are perpendicular to the axis of rotation. When finding volumes using shells, we'll typically use shells that are parallel to the axis of rotation.    One final note: this method, as in , applies only to solids with a certain degree of symmetry. If you continue on to Calculus 3, the techniques you'll learn in will replace this method as they do the disk and washer methods from . In particular, this method is a special case of the transformation to cylindrical coordinates presented in .   Finding Volumes Using Cylindrical Shells   Find the volume of the solid obtained by rotating the region bounded by , and about the -axis.    The axis of rotation is the -axis, so each shell should be perpendicular to this axis as well. Drawing a typical shell, we see that the radius at should be while the height is . So the volume of this region should be     It should be noted that the volume in could also have been found using washers instead of shells. If you can, you should use disks or washers before using shells, since integrals derived from using shells are typically more complicated.    Find the volume of the solid obtained by rotating the region bounded by , and about the line .    A good first step, as always, is to plot the region. Since and give downward opening parabolas, we can quickly sketch a rough graph by finding the -coordinates of the vertices, which occur at . Finding the corresponding values, and noticing that each parabola intersects the -axis at , gives a pretty good picture of the graph.  If we tried to find the volume using disks\/washers, we'd need to solve and for since each cross-section would be parallel to the -axis. This is doable using the quadratic formula, but the algebra would get very bad very quickly once we start integrating. So we'll try shells instead.  A typical shell for this region has radius and height . Hence the volume is given by     "
},
{
  "id": "example-finding-volumes-using-cylindrical-shells",
  "level": "2",
  "url": "section-volumes-by-cylindrical-shells.html#example-finding-volumes-using-cylindrical-shells",
  "type": "Example",
  "number": "8.3.1",
  "title": "Finding Volumes Using Cylindrical Shells.",
  "body": " Finding Volumes Using Cylindrical Shells   Find the volume of the solid obtained by rotating the region bounded by , and about the -axis.    The axis of rotation is the -axis, so each shell should be perpendicular to this axis as well. Drawing a typical shell, we see that the radius at should be while the height is . So the volume of this region should be    "
},
{
  "id": "example-cylindrical-shells-2",
  "level": "2",
  "url": "section-volumes-by-cylindrical-shells.html#example-cylindrical-shells-2",
  "type": "Example",
  "number": "8.3.2",
  "title": "",
  "body": "  Find the volume of the solid obtained by rotating the region bounded by , and about the line .    A good first step, as always, is to plot the region. Since and give downward opening parabolas, we can quickly sketch a rough graph by finding the -coordinates of the vertices, which occur at . Finding the corresponding values, and noticing that each parabola intersects the -axis at , gives a pretty good picture of the graph.  If we tried to find the volume using disks\/washers, we'd need to solve and for since each cross-section would be parallel to the -axis. This is doable using the quadratic formula, but the algebra would get very bad very quickly once we start integrating. So we'll try shells instead.  A typical shell for this region has radius and height . Hence the volume is given by    "
},
{
  "id": "section-arc-length",
  "level": "1",
  "url": "section-arc-length.html",
  "type": "Section",
  "number": "8.4",
  "title": "Arc Length",
  "body": " Arc Length  Say the motion of a particle is described by Then the path that the particle travels will look like a curve, say     Trajectory of our particle.    Our goal now is to determine how far the particle travels as goes from to . In other words, we want to find the length of this curve from to .  If the curve were just a line we could easily find its length by using the Pythagorean theorem, but for a more general curve like this we're stuck. So we'll start by approximating the curve by using line segments, which we'll call , , and so on up to , then we'll find the lengths of the line segments. Say the first line segment goes from to , the second from to and so on. To make life simpler, we'll assume that all these intervals have equal length . That is, for . Also, we'll define .      Approximating arc length with line segments.   If we look at , then the line goes in the -direction and in the -direction, so by the Pythagorean theorem, Now if , then . Hence if .  We can extend this estimate to the other line segments as well, so we can say that the total length of the curve is approximately If the curve is nice enough, this approximation should become exact as . So we can take this as the definition of the arc length of the curve .   arc length Cartesian coordinates  Arc Length of a Curve   Let denote a continuous function defined on some interval . The arc length of over this interval is defined to be      The Circumference of a Circle   Find the circumference of a circle of radius .    To find the circumference of this circle, we need to find an equation whose graph is the circle, or at least part of it. One choice is for . Since this gives the top half of a circle, the circumference is then     We could try to use to find the arc length of an ellipse, but it turns out the resulting integral is too complicated to have a \"closed form\" solution.  We can use to define the arc length function : This function can be useful to parameterize movement along a curve, which you'll see in Calculus 3.    Find the arc length function for assuming that is the starting point.    We have To find this, we'll use trigonometric substitution with to get     "
},
{
  "id": "figure-arc-length-basic-curve",
  "level": "2",
  "url": "section-arc-length.html#figure-arc-length-basic-curve",
  "type": "Figure",
  "number": "8.4.1",
  "title": "",
  "body": "    Trajectory of our particle.  "
},
{
  "id": "figure-arc-length-breaking-into-line-segments",
  "level": "2",
  "url": "section-arc-length.html#figure-arc-length-breaking-into-line-segments",
  "type": "Figure",
  "number": "8.4.2",
  "title": "",
  "body": "    Approximating arc length with line segments.  "
},
{
  "id": "definition-arc-length-of-a-curve",
  "level": "2",
  "url": "section-arc-length.html#definition-arc-length-of-a-curve",
  "type": "Definition",
  "number": "8.4.3",
  "title": "Arc Length of a Curve.",
  "body": " arc length Cartesian coordinates  Arc Length of a Curve   Let denote a continuous function defined on some interval . The arc length of over this interval is defined to be    "
},
{
  "id": "example-the-circumference-of-a-circle",
  "level": "2",
  "url": "section-arc-length.html#example-the-circumference-of-a-circle",
  "type": "Example",
  "number": "8.4.4",
  "title": "The Circumference of a Circle.",
  "body": " The Circumference of a Circle   Find the circumference of a circle of radius .    To find the circumference of this circle, we need to find an equation whose graph is the circle, or at least part of it. One choice is for . Since this gives the top half of a circle, the circumference is then    "
},
{
  "id": "p-727",
  "level": "2",
  "url": "section-arc-length.html#p-727",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arc length function "
},
{
  "id": "example-157",
  "level": "2",
  "url": "section-arc-length.html#example-157",
  "type": "Example",
  "number": "8.4.5",
  "title": "",
  "body": "  Find the arc length function for assuming that is the starting point.    We have To find this, we'll use trigonometric substitution with to get    "
},
{
  "id": "section-area-of-a-surface-of-revolution",
  "level": "1",
  "url": "section-area-of-a-surface-of-revolution.html",
  "type": "Section",
  "number": "8.5",
  "title": "Area of a Surface of Revolution",
  "body": " Area of a Surface of Revolution  Consider a function . We generate a solid of revolution by rotating the graph of from to about the -axis. We want to find the surface area of this figure. We can't find it directly yet, but we can approximate it by using conical frustums.  The surface area of a conical frustum is given by the formula If then we can say for some between and .  By using multiple frustums, we can approximate the surface area of the solid. Break into subintervals with and , where each subinterval has length . Then if is the surface area of the solid, we have This approximation should become more exact as , so we have or   Similarly, if we generate a solid of revolution by rotating from to about the -axis, the surface area of this solid is given by    Finding Surface Area of a Sphere   Find the surface area of a sphere of radius .    We can create a sphere of radius by rotating the semicircle about the -axis, from to . So and . So the surface area is or just       Find the surface area of the solid generated by rotating the graph of from to about the -axis.    Since we are rotating about the -axis, we need to use the other formula. Since , we can rewrite this as . So the surface area is       Find the integral that gives the surface area of the solid generated by rotating the graph of from to about the -axis.    By the surface area formula, the surface area is      Gabriel's Horn   Find the volume of the solid of revolution obtained by rotating the graph of about the -axis from onwards. Estimate the surface area of this solid of revolution.    The volume is given by . The integral that gives the surface area is   Oddly enough, the volume of this region is finite, but the surface area is infinite . A silly way to describe this situation: you can fill this region with a finite amount of paint, but it would take an infinite amount to paint the surface.      Find the surface area of the solid generated by rotating the graph of from to about the -axis.    Since , then and the surface area of the solid is     "
},
{
  "id": "example-finding-surface-area-of-a-sphere",
  "level": "2",
  "url": "section-area-of-a-surface-of-revolution.html#example-finding-surface-area-of-a-sphere",
  "type": "Example",
  "number": "8.5.1",
  "title": "Finding Surface Area of a Sphere.",
  "body": " Finding Surface Area of a Sphere   Find the surface area of a sphere of radius .    We can create a sphere of radius by rotating the semicircle about the -axis, from to . So and . So the surface area is or just    "
},
{
  "id": "example-159",
  "level": "2",
  "url": "section-area-of-a-surface-of-revolution.html#example-159",
  "type": "Example",
  "number": "8.5.2",
  "title": "",
  "body": "  Find the surface area of the solid generated by rotating the graph of from to about the -axis.    Since we are rotating about the -axis, we need to use the other formula. Since , we can rewrite this as . So the surface area is    "
},
{
  "id": "example-160",
  "level": "2",
  "url": "section-area-of-a-surface-of-revolution.html#example-160",
  "type": "Example",
  "number": "8.5.3",
  "title": "",
  "body": "  Find the integral that gives the surface area of the solid generated by rotating the graph of from to about the -axis.    By the surface area formula, the surface area is    "
},
{
  "id": "example-gabriel-s-horn",
  "level": "2",
  "url": "section-area-of-a-surface-of-revolution.html#example-gabriel-s-horn",
  "type": "Example",
  "number": "8.5.4",
  "title": "Gabriel’s Horn.",
  "body": " Gabriel's Horn   Find the volume of the solid of revolution obtained by rotating the graph of about the -axis from onwards. Estimate the surface area of this solid of revolution.    The volume is given by . The integral that gives the surface area is   Oddly enough, the volume of this region is finite, but the surface area is infinite . A silly way to describe this situation: you can fill this region with a finite amount of paint, but it would take an infinite amount to paint the surface.   "
},
{
  "id": "example-162",
  "level": "2",
  "url": "section-area-of-a-surface-of-revolution.html#example-162",
  "type": "Example",
  "number": "8.5.5",
  "title": "",
  "body": "  Find the surface area of the solid generated by rotating the graph of from to about the -axis.    Since , then and the surface area of the solid is    "
},
{
  "id": "section-applications-to-physics-and-engineering",
  "level": "1",
  "url": "section-applications-to-physics-and-engineering.html",
  "type": "Section",
  "number": "8.6",
  "title": "Applications to Physics and Engineering",
  "body": " Applications to Physics and Engineering   The primary use of integrals in physics and engineering is to measure the accumulation of continuously varying quantities. The running theme in this section:   Measure the accumulation of some quantity by approximating it as a (finite) sum of \"small\" values.  Improve the approximation by taking more and more values.  Introduce a limit to make the approximation exact, resulting in an integral.     Work  We introduced a formula for work in , and now we'll actually derive it. First, recall that work (very roughly) represents the net effect of a force  acting on a mass over some displacement . If the force is constant (in both magnitude and direction), then we can simply define the work accomplished by a force as a particle is displaced by units by the formula   So with this definition, work is proportional to the magnitude of the force as well as the displacement over which the force acts. If is measured in units of    or more simply   , and is measured in units of   the takes on units of    or just   .  Although there are important forces that are reasonably approximated by constants, such as the force due to gravity, this isn't reasonable for every force of interest. For example, consider the force due to drag against an object moving through the atmosphere, which should increase as velocity increases. Another basic example is the Hooke's Law , which states that the force a spring exerts on an attached mass is proportional to the displacement of the mass from the spring's equilibrium position. For these non-constant forces, our old formula doesn't work so well. To be precise, how can we measure the work done by a non-constant force on a particle as it moves from to ?  As you might guess from this section's running theme, we'll start by approximating the work done by measuring work in small displacements as the particle moves from to . Over small enough intervals, even variable forces will look almost constant, which makes a reasonable estimate of the work done (on this small interval!). So let's start by breaking up into smaller subintervals where , and let be the width of each subinterval. Now choose sample points from each subinterval. Once again, if is small enough, then the work done by the force over should be approximately   This is the approximate work for one subinterval, so adding in the approximations from the other subintervals also provides an estimate of the total work done by over . That is, As , the approximation becomes exact. Therefore    A mass attached to a spring   A mass attached to a spring is acted upon by a spring force given by , where is the displacement of the mass from the equilibrium position of the spring. Suppose that the mass is held  1   to the right of the spring's equilibrium position (so that the spring will try to pull the mass back towards its equilibrium which we'll say occurs at ). What is the work done by the spring on the mass in moving the mass from its current position back to equilibrium?    Since equilibrium occurs at , the work done should be     In , the reason the work done was positive was because the force and the direction the mass was moving tended to align. Once the mass moves past equilibrium and to the left, the force will begin acting against the motion of the mass resulting in negative work over that particular interval. The spring force itself is an example of a restoring force , since it's always trying to pull the mass back to equilibrium. To highlight this, we often write the spring force as for some positive .    Moments and Centers of Mass  Consider a system of two point masses connected by a rod of negligible mass (so we can assume that the mass of the system is just ). These masses are located at the points on the -axis. The rod is then placed upon a fulcrum at the point , as shown below:      Rod on a fulcrum.   Our goal is to find the center of mass of the rod.  Suppose that the first mass is units away from the fulcrum, and that the second mass is units away. Archimedes' Law of the Lever states that the rod will balance if . Since and (since are positive!), we can rewrite this as which simplifies down to Hence is the location of the center of mass of the rod if this equation is true!  More generally, if point masses at position are connected by a rod of negligible mass, then the center of mass of the resulting system is given by where is the total mass of the system and is called the moment of the system about the origin .    Consider the following system of three point masses at positions given as follows:      Three point masses.   Find the following:  The moment of the system about the origin.  The center of mass.       The moment of the system about the origin is defined to be So the moment is .  The center of mass is just the moment divided by the total mass of the system: So the center of mass of the rod is at the point .     We now move from one dimension to two. Consider a system of point masses at the points , and suppose that these masses are connected by a thin plate of negligible mass. The moment of the system about the -axis is the number given by   This can be thought of as tendency of the system to rotate about the -axis. Increasing the mass or the distance from the -axis increases this tendency.  The moment of the system about the -axis is the number given by Just as in the one-dimensional case, the center of mass for this system will be determined by the total mass and the above moments. In particular, the center of mass of this system is located at the point with coordinates where is the total mass .    Four point masses are located in the plane at the points and .  Find the moments of the system about the -axis and the -axis.  Find the center of mass of this system.       The moment about the -axis is  Similarly, the moment about the -axis is given by  The center of mass is the point where and is the total mass of the system.    } We now consider a more complicated situation than the above. Suppose that we have a thin, flat plate (or lamina ) of uniform density in the plane. Our goal now is to find the center of mass, or centroid , of the plate. To do so, we will use the following fact: the centroid of a rectangular lamina of uniform density is just the center of the rectangle. Now consider a lamina with uniform density in the -plane and bounded between and the functions and :      A lamina in .   To find the centroid of this lamina we will break it up into (vertical) approximating rectangles , each of which has width and centroid :      Breaking the lamina into subrectangles.   Then the lamina may be approximated by a system of point masses , with located at the centroid rectangle and having the mass of the corresponding rectangle. To find the center of mass of the lamina, we will approximate it with the center of mass of the system of point masses.  To do so, we will need:   Consider a single rectangle :      A single rectangle.   Then we have   We can now fill in the following table:   Moments and center of mass     System of point masses  Lamina                    The center of mass for this lamina is then the point where    "
},
{
  "id": "p-749",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-749",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "work force "
},
{
  "id": "p-751",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-751",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hooke's Law "
},
{
  "id": "example-a-mass-attached-to-a-spring",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#example-a-mass-attached-to-a-spring",
  "type": "Example",
  "number": "8.6.1",
  "title": "A mass attached to a spring.",
  "body": " A mass attached to a spring   A mass attached to a spring is acted upon by a spring force given by , where is the displacement of the mass from the equilibrium position of the spring. Suppose that the mass is held  1   to the right of the spring's equilibrium position (so that the spring will try to pull the mass back towards its equilibrium which we'll say occurs at ). What is the work done by the spring on the mass in moving the mass from its current position back to equilibrium?    Since equilibrium occurs at , the work done should be    "
},
{
  "id": "p-756",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-756",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "restoring force "
},
{
  "id": "figure-rod-fulcrum",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#figure-rod-fulcrum",
  "type": "Figure",
  "number": "8.6.2",
  "title": "",
  "body": "    Rod on a fulcrum.  "
},
{
  "id": "p-760",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-760",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moment of the system about the origin "
},
{
  "id": "example-164",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#example-164",
  "type": "Example",
  "number": "8.6.3",
  "title": "",
  "body": "  Consider the following system of three point masses at positions given as follows:      Three point masses.   Find the following:  The moment of the system about the origin.  The center of mass.       The moment of the system about the origin is defined to be So the moment is .  The center of mass is just the moment divided by the total mass of the system: So the center of mass of the rod is at the point .    "
},
{
  "id": "p-767",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-767",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moment of the system about the -axis "
},
{
  "id": "p-769",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-769",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moment of the system about the -axis "
},
{
  "id": "example-165",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#example-165",
  "type": "Example",
  "number": "8.6.5",
  "title": "",
  "body": "  Four point masses are located in the plane at the points and .  Find the moments of the system about the -axis and the -axis.  Find the center of mass of this system.       The moment about the -axis is  Similarly, the moment about the -axis is given by  The center of mass is the point where and is the total mass of the system.    "
},
{
  "id": "p-776",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-776",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centroid "
},
{
  "id": "figure-lamina",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#figure-lamina",
  "type": "Figure",
  "number": "8.6.6",
  "title": "",
  "body": "    A lamina in .  "
},
{
  "id": "figure-approximaing-the-lamina",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#figure-approximaing-the-lamina",
  "type": "Figure",
  "number": "8.6.7",
  "title": "",
  "body": "    Breaking the lamina into subrectangles.  "
},
{
  "id": "figure-lamina-single-rectangle",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#figure-lamina-single-rectangle",
  "type": "Figure",
  "number": "8.6.8",
  "title": "",
  "body": "    A single rectangle.  "
},
{
  "id": "table-center-of-mass-formulas",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#table-center-of-mass-formulas",
  "type": "Table",
  "number": "8.6.9",
  "title": "Moments and center of mass",
  "body": " Moments and center of mass     System of point masses  Lamina                   "
},
{
  "id": "section-differential-equations",
  "level": "1",
  "url": "section-differential-equations.html",
  "type": "Section",
  "number": "8.7",
  "title": "Differential Equations",
  "body": " Differential Equations   Basic Concepts   Differential Equations  differential equations definition   A differential equation is an equation relating some function with its derivatives. A differential equation that involves a function of only one independent variable is called an ordinary differential equation , or ODE. A differential equation that involves a function of more than one independent variable (which you see a lot of in Calculus 3) is called a partial differential equation , or PDE. The order of a differential equation is the highest derivative that appears in the equation.    Examples of ODEs:   ; this is a second order ODE relating the unknown function with its second derivative.   ; this is a seventh order ODE involving the derivatives of the unknown function . Note that in this ODE is the independent variable whereas serves as the dependent variable.    Differential equations serve as useful mathematical models for quantities that change over time. In particular, Newton's Second Law leads to a number of significant differential equations.   The Spring Equation   Consider an object of mass attached to a spring, and suppose that the spring force is the only force acting on the mass. Assuming that Hooke's Law describes the spring force, find a differential equation modeling the motion of the mass.    Recall that Hooke's Law says that , where is a positive constant and is the displacement of the mass from equilibrium. If this is the only force acting on the mass, then by Newton's Second Law Therefore the displacement satisfies the differential equation      Solution of a Differential Equation  differential equations solution   A function is a solution of a differential equation if it satisfies the differential equation.    It is straightforward to check if a function is a solution of some given differential equation, but finding solutions involves a bit more work.   Verifying solutions   Is a solution of the ODE ?    At this point we don't know how to solve differential equations, but that doesn't mean we can't check solutions of differential equations. To do so, we just plug wherever shows up in the ODE and see if the resulting equation is true. So we have This is a true statement, so satisfies the ODE. Hence is a solution of the ODE.    In , is not the only solution of . You can check that and are also solutions. In fact, any function of the form where is a constant is a solution of .  To specify a unique solution to a differential equation, we need to add another condition known as an initial condition or initial value , often of the form .    An ODE together with an initial condition is known as an initial value problem , or IVP.      Separable Equations  Many ODEs are difficult, if not impossible, to solve exactly. The simplest ODEs to solve are the first-order ODEs of the form . The Fundamental Theorem of Calculus guarantees that the solution is given by .  Another type of ODE that is relatively straightforward to solve is the separable ODE , which is a first-order ODE that can be written in the form   These ODEs can be solved by integration as well, but only after some rearranging.   Solving a separable ODE   Solve the IVP given by .    The first step to solving this IVP is to solve the ODE . It may not look like it at first, but this ODE is separable since we can rewrite it as . To solve this ODE, we need to move the terms to the left hand side of the equation and the terms to the right hand side. We'll abuse notation a little bit to do so by rewriting and treating as a fraction, but it won't get us into too much trouble here:   At this step we can either leave the solution as is (in implicit form ) or solve for to get an explicit form . We'll leave this in implicit form and then plug in the initial condition to get So the implicit solution of this IVP is given by     In , we can also find an explicit form of the solution by solving for :     Population Equations  Suppose we're monitoring the population of some species, and let's denote the population at time by . An obvious question to consider is how that population will change over time. Mathematically, this means we want to obtain information on and then use it to estimate .  A simple model for is to assume it depends only on the birth rate and death rate of the species in question. Then we can write If we assume that are constants, then this equation is separable and we can solve it to obtain where represents the \"initial population\", or population at time . We call the natural growth equation .  The natural growth equation is simple, but it's probably too simple to be useful expect in certain scenarios (such as measuring half-life). To get a more flexible model, we can generalize by assuming that the birth and death rates are actually functions of time. This gives us the general population equation .   General Population Equation   The general population equation for a population is given by      Population Explosion   A population has members at time years with a death rate of and a birth rate of , where denotes the population after years. Find and determine if this is a reasonable population model.    If we assume that the population obeys the general growth equation, then we get This ODE is separable, and we can therefore solve it to get   So we have a solution, and it can be shown that the solution is unique. But if you stare at this for a bit, you might see that it has a divide-by-zero problem. In particular, In other words, the population becomes infinite in about two weeks!      The Logistic Equation   shows that we need to be more careful with our assumptions on population growth. One relatively simple assumption we can make is to assume that the birth rate decreases as population increases. This makes sense in the physical world as well: as population increases, existing and finite resources (such as food) must be shared between more and more members of the population. Since there's less to go around, we should expect growth to slow down. In particular, let's assume that where and are all positive constants. Then the population equation for this scenario becomes   With a little algebra, we get the logistic equation : for constants and . This equation is separable, and can be solved using partial fractions to obtain where . In order to verify the reasonableness of our logistic model, let's see what happens to the population as time increases.   Long-Term Behavior of Logistic Growth   What is the long-term population of a species that grows according to the logistic equation ?    Using the fact that we have So the population should eventually level out at .    In the logistic equation , the value is the carrying capacity , and denotes the maximum sustainable population according to the model.   Population Growth in the USA   In millions, the population of the USA in 1990 was and was growing at a rate of per year. In 2012, the population was and was growing at a rate of per year. Assuming that the population of the USA grows logistically, estimate the population of the USA in 2017 and compare it to the current estimate of .    Let denote the population of the USA (in millions), where is the number of years after 1990. Then and So we need to find and .  When , we have and . Similarly, when we have and . Therefore Solving this system gives us and . Hence   This model estimates the population in 2017 to be which is about a error. Note also that this model predicts the carrying capacity of the USA to be .      Stability of Solutions  The logistic equation is a particularly nice separable ODE since the right hand side depends only on the unknown function . So we can write , where . ODEs like this (where the independent variable does not appear explicitly) are called autonomous ODEs .  Autonomous ODEs like are useful because the behavior of their solutions can be determined qualitatively , without actually solving the ODE. This is done by looking for the constant solutions of the ODE, that is, solutions of the form . For any such solution, we must have as well. These solutions (i.e., the solutions of ) are called the critical points or equilibrium solutions of the ODE. These solutions completely determine the long-term behavior of every other solution .   Finding Equilibrium Solutions   Find the equilibrium solutions of .    We need to solve the equation . Thankfully, we can factor this to get , and so the equilibrium solutions are .     Stability of Solutions   A critical point is stable if solutions that start \"near\" the point stay near it. A critical point is unstable if solutions that start \"near\" the point can diverge away from it.     Determining the Stability of Solutions   What are the stable critical points of ?    We already know that the critical points are . We can determine their stability by making use of a phase diagram , which is essentially a sign chart for :   The phase diagram for      This shows us that solutions that begin near tend to move away from , which solutions near tend to move towards . So is unstable and is stable.     Determining a Sustainable Population   Consider a population of fish that obeys the logistic equation where is the population of fish (in thousands) after years. Suppose that the population is also harvested at some rate (in thousands per year). What is the maximum sustainable rate of harvesting?    To account for the harvesting, we need to modify the ODE: The harvesting will be sustainable as long as the population does not become extinct. To determine this long term behavior, we'll find the critical points and set up a phase diagram.  The critical points are given by by the quadratic formula. We now have three cases to consider: In terms of , these reduce to .    In the first case, if then we have two positive, real critical points: The phase diagram for this situation is      Phase diagram for .   So we see that is unstable while is stable. In particular, as long as , then the rate of harvesting is sustainable.    Now assume that . Then we have only one equilibrium solution: . The corresponding phase diagram is      Phase diagram for = 450.   We interpret the phase diagram as follows: if is less than 15,000 then the population will collapse to extinction. Otherwise, the population will stabilize at . This type of critical point is often called semi-stable.     Finally, consider the case . Then we have no (real) critical points. Since imaginary populations don't make sense in this model, there is no sustainable population. No matter how large the initial population, it will eventually go extinct if harvested at a rate greater than .    By the above, the largest sustainable harvesting rate is as long as .      Linear Stability Analysis  Given the autonomous ODE , we saw above that we can qualify the behavior of equilibrium solutions by setting up a phase diagram. We can go a step further and actually qualify the growth of solutions that are \"near\" equilibrium solutions. In particular, we have the following theorem.   Linear Stability Analysis   Suppose where is continuously differentiable, and let denote a critical point\/equilibrium solution of the ODE. If , then is stable and solutions near will move exponentially towards . If , then is unstable and solutions near will move exponentially away from . If , then more advanced methods are required.     Classifying the Critical Points of the Logistic Equation   Classify the critical points of the logistic equation as stable or unstable.    Recall that the logistic equation is given by for (we'll assume) positive constants . From here, we clearly see that the critical points are and (which makes sense from a population standpoint!). We could set up a phase diagram to determine stability, but we'll use instead.  Since , we see that Hence is unstable, while is stable.     "
},
{
  "id": "definition-differential-equations",
  "level": "2",
  "url": "section-differential-equations.html#definition-differential-equations",
  "type": "Definition",
  "number": "8.7.1",
  "title": "Differential Equations.",
  "body": " Differential Equations  differential equations definition   A differential equation is an equation relating some function with its derivatives. A differential equation that involves a function of only one independent variable is called an ordinary differential equation , or ODE. A differential equation that involves a function of more than one independent variable (which you see a lot of in Calculus 3) is called a partial differential equation , or PDE. The order of a differential equation is the highest derivative that appears in the equation.   "
},
{
  "id": "example-the-spring-equation",
  "level": "2",
  "url": "section-differential-equations.html#example-the-spring-equation",
  "type": "Example",
  "number": "8.7.2",
  "title": "The Spring Equation.",
  "body": " The Spring Equation   Consider an object of mass attached to a spring, and suppose that the spring force is the only force acting on the mass. Assuming that Hooke's Law describes the spring force, find a differential equation modeling the motion of the mass.    Recall that Hooke's Law says that , where is a positive constant and is the displacement of the mass from equilibrium. If this is the only force acting on the mass, then by Newton's Second Law Therefore the displacement satisfies the differential equation    "
},
{
  "id": "definition-solution-of-a-differential-equation",
  "level": "2",
  "url": "section-differential-equations.html#definition-solution-of-a-differential-equation",
  "type": "Definition",
  "number": "8.7.3",
  "title": "Solution of a Differential Equation.",
  "body": " Solution of a Differential Equation  differential equations solution   A function is a solution of a differential equation if it satisfies the differential equation.   "
},
{
  "id": "example-verifying-solutions",
  "level": "2",
  "url": "section-differential-equations.html#example-verifying-solutions",
  "type": "Example",
  "number": "8.7.4",
  "title": "Verifying solutions.",
  "body": " Verifying solutions   Is a solution of the ODE ?    At this point we don't know how to solve differential equations, but that doesn't mean we can't check solutions of differential equations. To do so, we just plug wherever shows up in the ODE and see if the resulting equation is true. So we have This is a true statement, so satisfies the ODE. Hence is a solution of the ODE.   "
},
{
  "id": "definition-ivp",
  "level": "2",
  "url": "section-differential-equations.html#definition-ivp",
  "type": "Definition",
  "number": "8.7.5",
  "title": "",
  "body": "  An ODE together with an initial condition is known as an initial value problem , or IVP.   "
},
{
  "id": "p-799",
  "level": "2",
  "url": "section-differential-equations.html#p-799",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separable ODE "
},
{
  "id": "example-solving-a-separable-ode",
  "level": "2",
  "url": "section-differential-equations.html#example-solving-a-separable-ode",
  "type": "Example",
  "number": "8.7.6",
  "title": "Solving a separable ODE.",
  "body": " Solving a separable ODE   Solve the IVP given by .    The first step to solving this IVP is to solve the ODE . It may not look like it at first, but this ODE is separable since we can rewrite it as . To solve this ODE, we need to move the terms to the left hand side of the equation and the terms to the right hand side. We'll abuse notation a little bit to do so by rewriting and treating as a fraction, but it won't get us into too much trouble here:   At this step we can either leave the solution as is (in implicit form ) or solve for to get an explicit form . We'll leave this in implicit form and then plug in the initial condition to get So the implicit solution of this IVP is given by    "
},
{
  "id": "p-806",
  "level": "2",
  "url": "section-differential-equations.html#p-806",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural growth equation "
},
{
  "id": "p-807",
  "level": "2",
  "url": "section-differential-equations.html#p-807",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general population equation "
},
{
  "id": "definition-general-population-equation",
  "level": "2",
  "url": "section-differential-equations.html#definition-general-population-equation",
  "type": "Definition",
  "number": "8.7.7",
  "title": "General Population Equation.",
  "body": " General Population Equation   The general population equation for a population is given by    "
},
{
  "id": "example-population-explosion",
  "level": "2",
  "url": "section-differential-equations.html#example-population-explosion",
  "type": "Example",
  "number": "8.7.8",
  "title": "Population Explosion.",
  "body": " Population Explosion   A population has members at time years with a death rate of and a birth rate of , where denotes the population after years. Find and determine if this is a reasonable population model.    If we assume that the population obeys the general growth equation, then we get This ODE is separable, and we can therefore solve it to get   So we have a solution, and it can be shown that the solution is unique. But if you stare at this for a bit, you might see that it has a divide-by-zero problem. In particular, In other words, the population becomes infinite in about two weeks!   "
},
{
  "id": "p-813",
  "level": "2",
  "url": "section-differential-equations.html#p-813",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logistic equation "
},
{
  "id": "example-long-term-behavior-of-logistic-growth",
  "level": "2",
  "url": "section-differential-equations.html#example-long-term-behavior-of-logistic-growth",
  "type": "Example",
  "number": "8.7.9",
  "title": "Long-Term Behavior of Logistic Growth.",
  "body": " Long-Term Behavior of Logistic Growth   What is the long-term population of a species that grows according to the logistic equation ?    Using the fact that we have So the population should eventually level out at .   "
},
{
  "id": "p-816",
  "level": "2",
  "url": "section-differential-equations.html#p-816",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "carrying capacity "
},
{
  "id": "example-population-growth-in-the-usa",
  "level": "2",
  "url": "section-differential-equations.html#example-population-growth-in-the-usa",
  "type": "Example",
  "number": "8.7.10",
  "title": "Population Growth in the USA.",
  "body": " Population Growth in the USA   In millions, the population of the USA in 1990 was and was growing at a rate of per year. In 2012, the population was and was growing at a rate of per year. Assuming that the population of the USA grows logistically, estimate the population of the USA in 2017 and compare it to the current estimate of .    Let denote the population of the USA (in millions), where is the number of years after 1990. Then and So we need to find and .  When , we have and . Similarly, when we have and . Therefore Solving this system gives us and . Hence   This model estimates the population in 2017 to be which is about a error. Note also that this model predicts the carrying capacity of the USA to be .   "
},
{
  "id": "p-821",
  "level": "2",
  "url": "section-differential-equations.html#p-821",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "autonomous ODEs "
},
{
  "id": "p-822",
  "level": "2",
  "url": "section-differential-equations.html#p-822",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "critical points equilibrium solutions "
},
{
  "id": "example-finding-equilibrium-solutions",
  "level": "2",
  "url": "section-differential-equations.html#example-finding-equilibrium-solutions",
  "type": "Example",
  "number": "8.7.11",
  "title": "Finding Equilibrium Solutions.",
  "body": " Finding Equilibrium Solutions   Find the equilibrium solutions of .    We need to solve the equation . Thankfully, we can factor this to get , and so the equilibrium solutions are .   "
},
{
  "id": "definition-stability-critial-points",
  "level": "2",
  "url": "section-differential-equations.html#definition-stability-critial-points",
  "type": "Definition",
  "number": "8.7.12",
  "title": "Stability of Solutions.",
  "body": " Stability of Solutions   A critical point is stable if solutions that start \"near\" the point stay near it. A critical point is unstable if solutions that start \"near\" the point can diverge away from it.   "
},
{
  "id": "example-determining-the-stability-of-solutions",
  "level": "2",
  "url": "section-differential-equations.html#example-determining-the-stability-of-solutions",
  "type": "Example",
  "number": "8.7.13",
  "title": "Determining the Stability of Solutions.",
  "body": " Determining the Stability of Solutions   What are the stable critical points of ?    We already know that the critical points are . We can determine their stability by making use of a phase diagram , which is essentially a sign chart for :   The phase diagram for      This shows us that solutions that begin near tend to move away from , which solutions near tend to move towards . So is unstable and is stable.   "
},
{
  "id": "example-determining-a-sustainable-population",
  "level": "2",
  "url": "section-differential-equations.html#example-determining-a-sustainable-population",
  "type": "Example",
  "number": "8.7.15",
  "title": "Determining a Sustainable Population.",
  "body": " Determining a Sustainable Population   Consider a population of fish that obeys the logistic equation where is the population of fish (in thousands) after years. Suppose that the population is also harvested at some rate (in thousands per year). What is the maximum sustainable rate of harvesting?    To account for the harvesting, we need to modify the ODE: The harvesting will be sustainable as long as the population does not become extinct. To determine this long term behavior, we'll find the critical points and set up a phase diagram.  The critical points are given by by the quadratic formula. We now have three cases to consider: In terms of , these reduce to .    In the first case, if then we have two positive, real critical points: The phase diagram for this situation is      Phase diagram for .   So we see that is unstable while is stable. In particular, as long as , then the rate of harvesting is sustainable.    Now assume that . Then we have only one equilibrium solution: . The corresponding phase diagram is      Phase diagram for = 450.   We interpret the phase diagram as follows: if is less than 15,000 then the population will collapse to extinction. Otherwise, the population will stabilize at . This type of critical point is often called semi-stable.     Finally, consider the case . Then we have no (real) critical points. Since imaginary populations don't make sense in this model, there is no sustainable population. No matter how large the initial population, it will eventually go extinct if harvested at a rate greater than .    By the above, the largest sustainable harvesting rate is as long as .   "
},
{
  "id": "theorem-linear-stability-analysis",
  "level": "2",
  "url": "section-differential-equations.html#theorem-linear-stability-analysis",
  "type": "Theorem",
  "number": "8.7.18",
  "title": "Linear Stability Analysis.",
  "body": " Linear Stability Analysis   Suppose where is continuously differentiable, and let denote a critical point\/equilibrium solution of the ODE. If , then is stable and solutions near will move exponentially towards . If , then is unstable and solutions near will move exponentially away from . If , then more advanced methods are required.   "
},
{
  "id": "example-classifying-the-critical-points-of-the-logistic-equation",
  "level": "2",
  "url": "section-differential-equations.html#example-classifying-the-critical-points-of-the-logistic-equation",
  "type": "Example",
  "number": "8.7.19",
  "title": "Classifying the Critical Points of the Logistic Equation.",
  "body": " Classifying the Critical Points of the Logistic Equation   Classify the critical points of the logistic equation as stable or unstable.    Recall that the logistic equation is given by for (we'll assume) positive constants . From here, we clearly see that the critical points are and (which makes sense from a population standpoint!). We could set up a phase diagram to determine stability, but we'll use instead.  Since , we see that Hence is unstable, while is stable.   "
},
{
  "id": "section-sequences",
  "level": "1",
  "url": "section-sequences.html",
  "type": "Section",
  "number": "9.1",
  "title": "Sequences",
  "body": " Sequences  In this chapter we'll be using infinite sums of the form to represent functions and compute integrals. In order to make sense of these series, we need to introduce the concept of a sequence and the limit of a sequence.  A sequence is a list of numbers: often written . We will often take as our starting index, but not always. We call the term of the sequence, and itself the index . We can view as denoting the position of the number within the sequence.   Finding a Formula for a Sequence   Given the sequence , make a reasonable guess of the value of and the general formula for .    Sequences are usually specified in one of two ways: as an explicit formula such as , or recursively by means of a recurrence relation , such as Note that for recurrence relations, we need to specify base cases .   An Alternating Sequence   Find the first few terms of the sequence .    This sequence simplifies down to .    Sequences have limits just as functions do.   Limit of a Sequence   A sequence has limit , denoted , if gets arbitrarily close to as increases. If a sequence has a limit, we say the sequence is convergent and converges . Otherwise, we say the sequence is divergent and diverges .    Graphically, we can say that a sequence has a limit if the points become arbitrarily close to the line : If you run the above code cell, you get some pretty convincing evidence that as .  One of the most important sequential limits is the following: if . Many limits involving sequences with terms that are rational functions of can be reduced to this form when finding limits.    Find the limit of the sequence     We can try dividing the numerator and denominator by the highest power of that appears: . This gives . Now we can take the limit as to get .    We can also apply Calculus 1 limits to sequences by using the following theorem.   Sequential and Functional Limits   Let be a function and suppose that . Then also.    One immediate advantage of is that L'Hospital's Rule from applies to sequential limits as well, as long as the sequence consists of values from a differentiable function .   Finding a Sequential Limit Using L'Hospital's Rule   Let . Find .    First, note that where . Therefore  .    Geometric Sequences   A geometric sequence is a sequence of the form Find .    This limit depends on whether or not is in . If then . If then for all . Finally, if is outside of this interval, then diverges. Therefore and diverges otherwise.    May decimals can be represented using geometric sequences.   Repeating   Determine the limit of the sequence .    It looks like the terms of the sequence are approaching , and we can verify this using a geometric sequence. We can write this sequence as . So the limit of the sequence is . Note that this suggests the (true!) statement that .     Infinite Limits   Let be a sequence. If the terms of grow without bound as increases, we say that . If the terms of decrease without bound as increases, we say that .     Limit of the Fibonacci Sequence   Let denote the term of the Fibonacci sequence. Determine . Estimate .    One approach to estimate the limit is to graph the ratio to see if it approaches a limiting value. A computer system can handle this easily. The values of appear to settle in quickly around .  The actual limiting value is , the golden ratio .       To calculate limits, we can use a version of the limit laws.   Sequential Limit Laws   Let and be sequences with and . Let be a constant. Then the following are true:             assuming .   if .   if is continuous at .     Another useful tool for evaluating limits of recursive sequences is the following result: if , then also.   A Limit from Newton's Method   Find the limit of the sequence .    First, assume . Then taking the limit of both sides of the recurrence relation gives . Solving for , we get , which simplifies to .     A False Limit   Find the limit of the sequence .    If we let and take the limit of both sides of the recurrence, we get or just . However, the actual terms of the sequence are given by , which is clearly divergent! The problem here is that we assumed a limit existed in the first place. This is not always valid . So we need to be careful.    We can check whether or not a sequence is convergent without actually finding a limit, at least in certain cases.   Absolute Value Test   Suppose that . Then as well.     The Squeeze Theorem for Sequences   Let and be sequences such that . If , then .     Applying the Squeeze Theorem and the Absolute Value Test   Let . Find .    This sequence is complicated, so we'll try comparing with simpler sequences instead. First, we'll take the absolute value to get rid of the term: . Now we'll use the fact that and to write . Since , this forces , and this , to converge to as well.    Another important way to check if a sequence converges is the Monotone Convergence Theorem  .   Monotone Sequences   Let be a sequence. Then is increasing if for all and decreasing if for all . In either case, we say that the sequence is monotone.    If we add one more condition to a monotone sequence, we get a convergent sequence.   Bounded Sequences   Let be a sequence. We say that is bounded if there exists some real number such that for all .     Monotone Convergence Theorem   Let be a bounded monotone sequence. Then converges.     Applying the MCT   Let denote the sequence Determine if the sequence converges and if so find its limit.    First, note that To show this converges, we'll use the MCT. To do so, we must show that the sequence is bounded and increasing. To show it's bounded, we'll guess that for some . Then , implying the claim. Now, , showing the sequence is increasing. Hence it's convergent by the MCT. The limit is equal to .    "
},
{
  "id": "p-854",
  "level": "2",
  "url": "section-sequences.html#p-854",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sequence index "
},
{
  "id": "example-finding-a-formula-for-a-sequence",
  "level": "2",
  "url": "section-sequences.html#example-finding-a-formula-for-a-sequence",
  "type": "Example",
  "number": "9.1.1",
  "title": "Finding a Formula for a Sequence.",
  "body": " Finding a Formula for a Sequence   Given the sequence , make a reasonable guess of the value of and the general formula for .   "
},
{
  "id": "p-857",
  "level": "2",
  "url": "section-sequences.html#p-857",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "explicit formula recurrence relation "
},
{
  "id": "example-an-alternating-sequence",
  "level": "2",
  "url": "section-sequences.html#example-an-alternating-sequence",
  "type": "Example",
  "number": "9.1.2",
  "title": "An Alternating Sequence.",
  "body": " An Alternating Sequence   Find the first few terms of the sequence .    This sequence simplifies down to .   "
},
{
  "id": "definition-limit-of-a-sequence",
  "level": "2",
  "url": "section-sequences.html#definition-limit-of-a-sequence",
  "type": "Definition",
  "number": "9.1.3",
  "title": "Limit of a Sequence.",
  "body": " Limit of a Sequence   A sequence has limit , denoted , if gets arbitrarily close to as increases. If a sequence has a limit, we say the sequence is convergent and converges . Otherwise, we say the sequence is divergent and diverges .   "
},
{
  "id": "example-178",
  "level": "2",
  "url": "section-sequences.html#example-178",
  "type": "Example",
  "number": "9.1.4",
  "title": "",
  "body": "  Find the limit of the sequence     We can try dividing the numerator and denominator by the highest power of that appears: . This gives . Now we can take the limit as to get .   "
},
{
  "id": "theorem-sequential-and-functional-limits",
  "level": "2",
  "url": "section-sequences.html#theorem-sequential-and-functional-limits",
  "type": "Theorem",
  "number": "9.1.5",
  "title": "Sequential and Functional Limits.",
  "body": " Sequential and Functional Limits   Let be a function and suppose that . Then also.   "
},
{
  "id": "example-finding-a-sequential-limit-using-l-hospital-s-rule",
  "level": "2",
  "url": "section-sequences.html#example-finding-a-sequential-limit-using-l-hospital-s-rule",
  "type": "Example",
  "number": "9.1.6",
  "title": "Finding a Sequential Limit Using L’Hospital’s Rule.",
  "body": " Finding a Sequential Limit Using L'Hospital's Rule   Let . Find .    First, note that where . Therefore  .  "
},
{
  "id": "example-geometric-sequences",
  "level": "2",
  "url": "section-sequences.html#example-geometric-sequences",
  "type": "Example",
  "number": "9.1.7",
  "title": "Geometric Sequences.",
  "body": " Geometric Sequences   A geometric sequence is a sequence of the form Find .    This limit depends on whether or not is in . If then . If then for all . Finally, if is outside of this interval, then diverges. Therefore and diverges otherwise.   "
},
{
  "id": "example---9--repeating",
  "level": "2",
  "url": "section-sequences.html#example---9--repeating",
  "type": "Example",
  "number": "9.1.8",
  "title": "<span class=\"process-math\">\\(.9\\)<\/span> Repeating.",
  "body": " Repeating   Determine the limit of the sequence .    It looks like the terms of the sequence are approaching , and we can verify this using a geometric sequence. We can write this sequence as . So the limit of the sequence is . Note that this suggests the (true!) statement that .   "
},
{
  "id": "definition-infinite-limits",
  "level": "2",
  "url": "section-sequences.html#definition-infinite-limits",
  "type": "Definition",
  "number": "9.1.9",
  "title": "Infinite Limits.",
  "body": " Infinite Limits   Let be a sequence. If the terms of grow without bound as increases, we say that . If the terms of decrease without bound as increases, we say that .   "
},
{
  "id": "example-limit-of-the-fibonacci-sequence",
  "level": "2",
  "url": "section-sequences.html#example-limit-of-the-fibonacci-sequence",
  "type": "Example",
  "number": "9.1.10",
  "title": "Limit of the Fibonacci Sequence.",
  "body": " Limit of the Fibonacci Sequence   Let denote the term of the Fibonacci sequence. Determine . Estimate .    One approach to estimate the limit is to graph the ratio to see if it approaches a limiting value. A computer system can handle this easily. The values of appear to settle in quickly around .  The actual limiting value is , the golden ratio .     "
},
{
  "id": "theorem-sequential-limit-laws",
  "level": "2",
  "url": "section-sequences.html#theorem-sequential-limit-laws",
  "type": "Theorem",
  "number": "9.1.11",
  "title": "Sequential Limit Laws.",
  "body": " Sequential Limit Laws   Let and be sequences with and . Let be a constant. Then the following are true:             assuming .   if .   if is continuous at .    "
},
{
  "id": "example-a-limit-from-newton-s-method",
  "level": "2",
  "url": "section-sequences.html#example-a-limit-from-newton-s-method",
  "type": "Example",
  "number": "9.1.12",
  "title": "A Limit from Newton’s Method.",
  "body": " A Limit from Newton's Method   Find the limit of the sequence .    First, assume . Then taking the limit of both sides of the recurrence relation gives . Solving for , we get , which simplifies to .   "
},
{
  "id": "example-a-false-limit",
  "level": "2",
  "url": "section-sequences.html#example-a-false-limit",
  "type": "Example",
  "number": "9.1.13",
  "title": "A False Limit.",
  "body": " A False Limit   Find the limit of the sequence .    If we let and take the limit of both sides of the recurrence, we get or just . However, the actual terms of the sequence are given by , which is clearly divergent! The problem here is that we assumed a limit existed in the first place. This is not always valid . So we need to be careful.   "
},
{
  "id": "theorem-absolute-value-test",
  "level": "2",
  "url": "section-sequences.html#theorem-absolute-value-test",
  "type": "Theorem",
  "number": "9.1.14",
  "title": "Absolute Value Test.",
  "body": " Absolute Value Test   Suppose that . Then as well.   "
},
{
  "id": "theorem-the-squeeze-theorem-for-sequences",
  "level": "2",
  "url": "section-sequences.html#theorem-the-squeeze-theorem-for-sequences",
  "type": "Theorem",
  "number": "9.1.15",
  "title": "The Squeeze Theorem for Sequences.",
  "body": " The Squeeze Theorem for Sequences   Let and be sequences such that . If , then .   "
},
{
  "id": "example-applying-the-squeeze-theorem-and-the-absolute-value-test",
  "level": "2",
  "url": "section-sequences.html#example-applying-the-squeeze-theorem-and-the-absolute-value-test",
  "type": "Example",
  "number": "9.1.16",
  "title": "Applying the Squeeze Theorem and the Absolute Value Test.",
  "body": " Applying the Squeeze Theorem and the Absolute Value Test   Let . Find .    This sequence is complicated, so we'll try comparing with simpler sequences instead. First, we'll take the absolute value to get rid of the term: . Now we'll use the fact that and to write . Since , this forces , and this , to converge to as well.   "
},
{
  "id": "p-892",
  "level": "2",
  "url": "section-sequences.html#p-892",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Monotone Convergence Theorem "
},
{
  "id": "definition-monotone-sequences",
  "level": "2",
  "url": "section-sequences.html#definition-monotone-sequences",
  "type": "Definition",
  "number": "9.1.17",
  "title": "Monotone Sequences.",
  "body": " Monotone Sequences   Let be a sequence. Then is increasing if for all and decreasing if for all . In either case, we say that the sequence is monotone.   "
},
{
  "id": "definition-bounded-sequences",
  "level": "2",
  "url": "section-sequences.html#definition-bounded-sequences",
  "type": "Definition",
  "number": "9.1.18",
  "title": "Bounded Sequences.",
  "body": " Bounded Sequences   Let be a sequence. We say that is bounded if there exists some real number such that for all .   "
},
{
  "id": "theorem-monotone-convergence-theorem",
  "level": "2",
  "url": "section-sequences.html#theorem-monotone-convergence-theorem",
  "type": "Theorem",
  "number": "9.1.19",
  "title": "Monotone Convergence Theorem.",
  "body": " Monotone Convergence Theorem   Let be a bounded monotone sequence. Then converges.   "
},
{
  "id": "example-applying-the-mct",
  "level": "2",
  "url": "section-sequences.html#example-applying-the-mct",
  "type": "Example",
  "number": "9.1.20",
  "title": "Applying the MCT.",
  "body": " Applying the MCT   Let denote the sequence Determine if the sequence converges and if so find its limit.    First, note that To show this converges, we'll use the MCT. To do so, we must show that the sequence is bounded and increasing. To show it's bounded, we'll guess that for some . Then , implying the claim. Now, , showing the sequence is increasing. Hence it's convergent by the MCT. The limit is equal to .   "
},
{
  "id": "section-series",
  "level": "1",
  "url": "section-series.html",
  "type": "Section",
  "number": "9.2",
  "title": "Series",
  "body": " Series  Consider the number . This number is irrational and so cannot be represented as a rational number . This leads to the question of what we mean by ? Or in particular, how can we actually make sense of , or represent it?  We can consider rewriting as follows: . So we can identify with the sequence and the series  .   Infinite Series   An infinite series is a sum of the form where is a sequence.    Infinite series are useful for representing (and computing) irrational numbers (which includes almost all numbers).   Guessing Sums   Guess the sums of the following series:               We have the following:         For this last sum we have an issue: there's no sensible way to define this sum. We can say that or by grouping terms differently.       We can determine what the value of a series should be by using limits.   Partial Sums and Convergence   Given the series , we denote its  partial sum by . If the sequence is convergent and , then we say that the original series converges and . If the sequence of partial sums diverges, we say the original series diverges .    Using , we can say that the sum diverges, since its sequence of partial sums is . The same is true for the first series in , but the second series converges.   Determining Convergence of a Series   Does the series converge?    We'll look at the sequence of partial sums. We have and so on. It looks like the sequence of partial sums approaches , so we guess that the series equals the same.    The series in , as well as the first two series in , are examples of an important series known as a geometric series .   Geometric Series   A series is a geometric series if for some constants and . Equivalently, the terms of the series form a geometric sequence (see ).    Geometric series are useful because it's straightforward to find their values. To see how, let be a geometric series and let denote the corresponding sequence of partial sums. Then which gives . We can solve this for to get .  At this point, we can find the limit of the partial sums using . Therefore converges to if and diverges otherwise.  As a quick example of this result, we can find the value of since this series is geometric. To do so, we must determine and for this sum. Since , we have and also. Hence the series sums to .   Computing a Geometric Series   Determine the value of if it exists.    Since this series contains terms being raised to the power, we suspect it may be geometric. If we write out the first several terms, we get , so at each step we're dividing by . This series is therefore a geometric series with and . Since , this series converges. The value of this series is .    We can also find and without writing out the first few terms of the series.   Finding and   Determine the value of .    We can rewrite the series as . This is a geometric series with . Since , the series diverges.     repeating   Prove that using geometric series.    First, we need to write as a geometric series. We can do so as follows: , and so we see that . This is a geometric series with and (and so is convergent!), and so .     Writing a Decimal as a Fraction   Rewrite the decimal as a fraction .    First, it's a mathematical fact that any repeating decimal can be written as a rational number so we know that we can actually write as a fraction. We'll do so by rewriting the decimal as a geometric series: , which is a geometric series with and . This series is also convergent, and has sum .    Another type of series that can be calculated (relatively) easily is the telescoping series . We'll demonstrate by way of example.   Telescoping Logarithms   Find .    If we write out the first few terms, we get so it looks like many of these terms cancel each other out. To be precise about this, we'll find the partial sums of this series and then consider their limit: , which goes to as . So the series diverges.    Not every series is obviously a telescoping series.   Rewriting a Telescoping Series   Find .    It's not obvious at all that the series is telescoping, even if we write out a few terms. However, if we try partial fractions on we obtain (see SageMath cell below) . So .  The partial sum is , and so . Hence .     The next series is important despite diverging.   The Harmonic Series   Show that the harmonic series  is divergent.    The idea here (which will return later) is to compare this series with a simpler one that we know diverges. We'll do so by looking at a specific set of partial sums: and in general .  So it follows that . Hence the harmonic series is divergent.    A useful test for divergence of a series involves the long-term behavior of the terms of the series.   Divergence Test   Consider the series . If , then diverges.    We'll prove the contrapositive of this statement. That is, we'll show that if the series converges then the terms go to . So suppose converges and let denote the sequence of partial sums. Then which must go to since the partial sums converge.    Note that cannot be used to prove convergence , only divergence. For example, the terms of the harmonic series go to but the series itself diverges.   Using the Divergence Test   Determine if diverges.    Since (in fact, it doesn't exist at all), the series must diverge.    Series, or rather the summation symbol , obey many of the same laws as integrals: they split over sums and we may pull constants out.   Splitting a Sum   Find the value of .    "
},
{
  "id": "p-900",
  "level": "2",
  "url": "section-series.html#p-900",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "series "
},
{
  "id": "definition-infinite-series",
  "level": "2",
  "url": "section-series.html#definition-infinite-series",
  "type": "Definition",
  "number": "9.2.1",
  "title": "Infinite Series.",
  "body": " Infinite Series   An infinite series is a sum of the form where is a sequence.   "
},
{
  "id": "example-guessing-sums",
  "level": "2",
  "url": "section-series.html#example-guessing-sums",
  "type": "Example",
  "number": "9.2.2",
  "title": "Guessing Sums.",
  "body": " Guessing Sums   Guess the sums of the following series:               We have the following:         For this last sum we have an issue: there's no sensible way to define this sum. We can say that or by grouping terms differently.      "
},
{
  "id": "definition-partial-sums-and-convergence",
  "level": "2",
  "url": "section-series.html#definition-partial-sums-and-convergence",
  "type": "Definition",
  "number": "9.2.3",
  "title": "Partial Sums and Convergence.",
  "body": " Partial Sums and Convergence   Given the series , we denote its  partial sum by . If the sequence is convergent and , then we say that the original series converges and . If the sequence of partial sums diverges, we say the original series diverges .   "
},
{
  "id": "example-determining-convergence-of-a-series",
  "level": "2",
  "url": "section-series.html#example-determining-convergence-of-a-series",
  "type": "Example",
  "number": "9.2.4",
  "title": "Determining Convergence of a Series.",
  "body": " Determining Convergence of a Series   Does the series converge?    We'll look at the sequence of partial sums. We have and so on. It looks like the sequence of partial sums approaches , so we guess that the series equals the same.   "
},
{
  "id": "p-911",
  "level": "2",
  "url": "section-series.html#p-911",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "geometric series "
},
{
  "id": "definition-geometric-series",
  "level": "2",
  "url": "section-series.html#definition-geometric-series",
  "type": "Definition",
  "number": "9.2.5",
  "title": "Geometric Series.",
  "body": " Geometric Series   A series is a geometric series if for some constants and . Equivalently, the terms of the series form a geometric sequence (see ).   "
},
{
  "id": "example-computing-a-geometric-series",
  "level": "2",
  "url": "section-series.html#example-computing-a-geometric-series",
  "type": "Example",
  "number": "9.2.6",
  "title": "Computing a Geometric Series.",
  "body": " Computing a Geometric Series   Determine the value of if it exists.    Since this series contains terms being raised to the power, we suspect it may be geometric. If we write out the first several terms, we get , so at each step we're dividing by . This series is therefore a geometric series with and . Since , this series converges. The value of this series is .   "
},
{
  "id": "example-finding-a--and-r-",
  "level": "2",
  "url": "section-series.html#example-finding-a--and-r-",
  "type": "Example",
  "number": "9.2.7",
  "title": "Finding <span class=\"process-math\">\\(a\\)<\/span> and <span class=\"process-math\">\\(r\\)<\/span>.",
  "body": " Finding and   Determine the value of .    We can rewrite the series as . This is a geometric series with . Since , the series diverges.   "
},
{
  "id": "example---9-ldots--repeating",
  "level": "2",
  "url": "section-series.html#example---9-ldots--repeating",
  "type": "Example",
  "number": "9.2.8",
  "title": "<span class=\"process-math\">\\(.9\\ldots\\)<\/span> repeating.",
  "body": " repeating   Prove that using geometric series.    First, we need to write as a geometric series. We can do so as follows: , and so we see that . This is a geometric series with and (and so is convergent!), and so .   "
},
{
  "id": "example-writing-a-decimal-as-a-fraction",
  "level": "2",
  "url": "section-series.html#example-writing-a-decimal-as-a-fraction",
  "type": "Example",
  "number": "9.2.9",
  "title": "Writing a Decimal as a Fraction.",
  "body": " Writing a Decimal as a Fraction   Rewrite the decimal as a fraction .    First, it's a mathematical fact that any repeating decimal can be written as a rational number so we know that we can actually write as a fraction. We'll do so by rewriting the decimal as a geometric series: , which is a geometric series with and . This series is also convergent, and has sum .   "
},
{
  "id": "p-925",
  "level": "2",
  "url": "section-series.html#p-925",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "telescoping series "
},
{
  "id": "example-telescoping-logarithms",
  "level": "2",
  "url": "section-series.html#example-telescoping-logarithms",
  "type": "Example",
  "number": "9.2.10",
  "title": "Telescoping Logarithms.",
  "body": " Telescoping Logarithms   Find .    If we write out the first few terms, we get so it looks like many of these terms cancel each other out. To be precise about this, we'll find the partial sums of this series and then consider their limit: , which goes to as . So the series diverges.   "
},
{
  "id": "example-rewriting-a-telescoping-series",
  "level": "2",
  "url": "section-series.html#example-rewriting-a-telescoping-series",
  "type": "Example",
  "number": "9.2.11",
  "title": "Rewriting a Telescoping Series.",
  "body": " Rewriting a Telescoping Series   Find .    It's not obvious at all that the series is telescoping, even if we write out a few terms. However, if we try partial fractions on we obtain (see SageMath cell below) . So .  The partial sum is , and so . Hence .   "
},
{
  "id": "example-the-harmonic-series",
  "level": "2",
  "url": "section-series.html#example-the-harmonic-series",
  "type": "Example",
  "number": "9.2.12",
  "title": "The Harmonic Series.",
  "body": " The Harmonic Series   Show that the harmonic series  is divergent.    The idea here (which will return later) is to compare this series with a simpler one that we know diverges. We'll do so by looking at a specific set of partial sums: and in general .  So it follows that . Hence the harmonic series is divergent.   "
},
{
  "id": "theorem-divergence-test",
  "level": "2",
  "url": "section-series.html#theorem-divergence-test",
  "type": "Theorem",
  "number": "9.2.13",
  "title": "Divergence Test.",
  "body": " Divergence Test   Consider the series . If , then diverges.    We'll prove the contrapositive of this statement. That is, we'll show that if the series converges then the terms go to . So suppose converges and let denote the sequence of partial sums. Then which must go to since the partial sums converge.   "
},
{
  "id": "example-using-the-divergence-test",
  "level": "2",
  "url": "section-series.html#example-using-the-divergence-test",
  "type": "Example",
  "number": "9.2.14",
  "title": "Using the Divergence Test.",
  "body": " Using the Divergence Test   Determine if diverges.    Since (in fact, it doesn't exist at all), the series must diverge.   "
},
{
  "id": "example-splitting-a-sum",
  "level": "2",
  "url": "section-series.html#example-splitting-a-sum",
  "type": "Example",
  "number": "9.2.15",
  "title": "Splitting a Sum.",
  "body": " Splitting a Sum   Find the value of .   "
},
{
  "id": "section-the-integral-and-comparison-tests",
  "level": "1",
  "url": "section-the-integral-and-comparison-tests.html",
  "type": "Section",
  "number": "9.3",
  "title": "The Integral and Comparison Tests",
  "body": " The Integral and Comparison Tests   Convergence Tests  The Divergence Test proven in is our first example of a convergence test : a test that determines if a given series converges or diverges. In this section we'll introduce two more such tests. It's important to remember that convergence tests usually cannot be used to evaluate a series . Their primary importance is to check if a given series converges.    The Integral Test  The main idea behind the integral test is to relate the value of a series to the value of a certain (improper) integral. This is useful since integrals are often easier to compute than series.   Integral Test   Suppose that is a positive, decreasing function on and let . Then must both converge or both diverge.     Remember that the Integral Test usually cannot determine the value of a series. It can only be used to determine convergence.    Determining Convergence Using the Integral Test   Determine if the series converges or diverges.    We can use the Integral Test here since is positive and decreasing. If we define , then . Now we'll compute : . Since the integral converges, so does the series. In fact, the value of the series is .     The Alternating Harmonic Series   Explain why cannot be applied to the alternating harmonic series  .    Since is neither decreasing nor positive, the Integral Test doesn't apply here.    An important corollary to is that the integral -test from applies to series as well.   Series -Test   The series converges if and only if .      Comparison Tests   convergence tests series direct comparison test  Comparison Test   Let and be series with positive terms. Then   If and converges, then so does .    If and diverges, then so does .        Using the Comparison Test   Show that diverges.    Sometimes using the Comparison Test requires a little ingenuity.   A Little Ingenuity   Show that converges.    A test that is sometimes more straightforward is the Limit Comparison Test .   convergence tests series limit comparison test  Limit Comparison Test   Suppose that and are both series with positive terms, and suppose exists. Then   if , then either both series converge or both series diverge.    if and converges, then so does .    if and diverges, then so does .       The quantity in can be thought of as the relative size of as compared to .   A Little Less Ingenuity   Show that converges.    We saw previously that , which suggests comparing the original series with the -series . If we let and , then we see that . By and , the original series converges.    The Limit Comparison Test works very well with series containing terms given by a ratio of powers, in conjunction with the -series Test.   Radical Powers of   Does converge or diverge?    The series diverges by comparison with .     "
},
{
  "id": "p-944",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#p-944",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convergence test "
},
{
  "id": "p-945",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#p-945",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral test "
},
{
  "id": "theorem-integral-test",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#theorem-integral-test",
  "type": "Theorem",
  "number": "9.3.1",
  "title": "Integral Test.",
  "body": " Integral Test   Suppose that is a positive, decreasing function on and let . Then must both converge or both diverge.   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#remark-1",
  "type": "Remark",
  "number": "9.3.2",
  "title": "",
  "body": " Remember that the Integral Test usually cannot determine the value of a series. It can only be used to determine convergence.  "
},
{
  "id": "example-determining-convergence-using-the-integral-test",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-determining-convergence-using-the-integral-test",
  "type": "Example",
  "number": "9.3.3",
  "title": "Determining Convergence Using the Integral Test.",
  "body": " Determining Convergence Using the Integral Test   Determine if the series converges or diverges.    We can use the Integral Test here since is positive and decreasing. If we define , then . Now we'll compute : . Since the integral converges, so does the series. In fact, the value of the series is .   "
},
{
  "id": "example-the-alternating-harmonic-series",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-the-alternating-harmonic-series",
  "type": "Example",
  "number": "9.3.4",
  "title": "The Alternating Harmonic Series.",
  "body": " The Alternating Harmonic Series   Explain why cannot be applied to the alternating harmonic series  .    Since is neither decreasing nor positive, the Integral Test doesn't apply here.   "
},
{
  "id": "theorem-series-p--test",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#theorem-series-p--test",
  "type": "Theorem",
  "number": "9.3.5",
  "title": "Series <span class=\"process-math\">\\(p\\)<\/span>-Test.",
  "body": " Series -Test   The series converges if and only if .   "
},
{
  "id": "theorem-direct-comparison-test-series",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#theorem-direct-comparison-test-series",
  "type": "Theorem",
  "number": "9.3.6",
  "title": "Comparison Test.",
  "body": " convergence tests series direct comparison test  Comparison Test   Let and be series with positive terms. Then   If and converges, then so does .    If and diverges, then so does .      "
},
{
  "id": "example-using-the-comparison-test",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-using-the-comparison-test",
  "type": "Example",
  "number": "9.3.7",
  "title": "Using the Comparison Test.",
  "body": " Using the Comparison Test   Show that diverges.   "
},
{
  "id": "example-a-little-ingenuity",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-a-little-ingenuity",
  "type": "Example",
  "number": "9.3.8",
  "title": "A Little Ingenuity.",
  "body": " A Little Ingenuity   Show that converges.   "
},
{
  "id": "p-960",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#p-960",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Limit Comparison Test "
},
{
  "id": "theorem-limit-comparison-test-series",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#theorem-limit-comparison-test-series",
  "type": "Theorem",
  "number": "9.3.9",
  "title": "Limit Comparison Test.",
  "body": " convergence tests series limit comparison test  Limit Comparison Test   Suppose that and are both series with positive terms, and suppose exists. Then   if , then either both series converge or both series diverge.    if and converges, then so does .    if and diverges, then so does .      "
},
{
  "id": "example-a-little-less-ingenuity",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-a-little-less-ingenuity",
  "type": "Example",
  "number": "9.3.10",
  "title": "A Little Less Ingenuity.",
  "body": " A Little Less Ingenuity   Show that converges.    We saw previously that , which suggests comparing the original series with the -series . If we let and , then we see that . By and , the original series converges.   "
},
{
  "id": "example-radical-powers-of-k-",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-radical-powers-of-k-",
  "type": "Example",
  "number": "9.3.11",
  "title": "Radical Powers of <span class=\"process-math\">\\(k\\)<\/span>.",
  "body": " Radical Powers of   Does converge or diverge?    The series diverges by comparison with .   "
},
{
  "id": "section-other-convergence-tests",
  "level": "1",
  "url": "section-other-convergence-tests.html",
  "type": "Section",
  "number": "9.4",
  "title": "Other Convergence Tests",
  "body": " Other Convergence Tests   Alternating Series  An alternating series is any series whose terms switch sign. Written in summation notation, they take the form where is a positive sequence. Alternating series have a very useful test for convergence.   Alternating Series Test   Consider the alternating series , where is positive and decreasing . If , then the series converges. Furthermore, for such a series we have the remainder estimate .    Note that is not the same as .   An Alternating Series with Roots   Does converge or diverge?    Let . Then is decreasing, and , so the series converges.     Alternating Harmonic Series   Show that the Alternating Harmonic Series converges, and determine a value of for which is within of the actual value of .    Since the Alternating Harmonic Series is an alternating series with , and because these terms decrease to , the sum must converge. However, we do not yet know what it converges to yet. Now let denote the partial sum. Then we know the error between and is at most . To make this less than , we must have .    The Alternating Harmonic Series is also a useful example to illustrate the following definitions.   Absolute and Conditional Convergence   A series is absolutely convergent if converges. A series is conditionally convergent if it converges but diverges.    The Alternating Harmonic Series is an example of a conditionally convergent series. There are two important consequences of :   Absolutely convergent series are also convergent series.    For conditionally convergent series, order matters .      Convergence of a Series Involving Sine   Determine if converges or diverges.    If we take the absolute value of each term, then we get . Since is a geometric series with , then must converge by .  Hence the original series is absolutely convergent, and so also convergent.      Ratio Test  Geometric series are among the easiest to sum and determine convergence for. So it's useful to try to compare an arbitrary series with a geometric series. The main idea is to look at the long-term behavior of ratios of consecutive terms.   Ratio Test   Let be an infinite series and let . Then   If the series converges absolutely.    If the series diverges.    If the test fails.        Using the Ratio Test   Does converge or diverge?    Since , the series diverges by .    The ratio test works well with series whose terms involve factorials or powers involving .   Factorials over Powers   Show that converges.    Since , we have . We can find this limit using L'Hospital's Rule (see ) since this limit is the indeterminate form . So set . Then . Therefore , which means that the series converges by the ratio test.      Root Test  The root test is similar to the ratio test in that it compares a given series with an appropriate geometric series to determine if the original converges.   Root Test   Let be an infinite series and let . Then   If the series converges absolutely.    If the series diverges.    If the test fails.        A Power   Show that diverges.     A Series with Rational Terms   Does converge or diverge?     "
},
{
  "id": "p-971",
  "level": "2",
  "url": "section-other-convergence-tests.html#p-971",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "alternating series "
},
{
  "id": "theorem-alternating-series-test",
  "level": "2",
  "url": "section-other-convergence-tests.html#theorem-alternating-series-test",
  "type": "Theorem",
  "number": "9.4.1",
  "title": "Alternating Series Test.",
  "body": " Alternating Series Test   Consider the alternating series , where is positive and decreasing . If , then the series converges. Furthermore, for such a series we have the remainder estimate .   "
},
{
  "id": "example-an-alternating-series-with-roots",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-an-alternating-series-with-roots",
  "type": "Example",
  "number": "9.4.2",
  "title": "An Alternating Series with Roots.",
  "body": " An Alternating Series with Roots   Does converge or diverge?    Let . Then is decreasing, and , so the series converges.   "
},
{
  "id": "example-alternating-harmonic-series",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-alternating-harmonic-series",
  "type": "Example",
  "number": "9.4.3",
  "title": "Alternating Harmonic Series.",
  "body": " Alternating Harmonic Series   Show that the Alternating Harmonic Series converges, and determine a value of for which is within of the actual value of .    Since the Alternating Harmonic Series is an alternating series with , and because these terms decrease to , the sum must converge. However, we do not yet know what it converges to yet. Now let denote the partial sum. Then we know the error between and is at most . To make this less than , we must have .   "
},
{
  "id": "definition-absolute-and-conditional-convergence",
  "level": "2",
  "url": "section-other-convergence-tests.html#definition-absolute-and-conditional-convergence",
  "type": "Definition",
  "number": "9.4.4",
  "title": "Absolute and Conditional Convergence.",
  "body": " Absolute and Conditional Convergence   A series is absolutely convergent if converges. A series is conditionally convergent if it converges but diverges.   "
},
{
  "id": "example-convergence-of-a-series-involving-sine",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-convergence-of-a-series-involving-sine",
  "type": "Example",
  "number": "9.4.5",
  "title": "Convergence of a Series Involving Sine.",
  "body": " Convergence of a Series Involving Sine   Determine if converges or diverges.    If we take the absolute value of each term, then we get . Since is a geometric series with , then must converge by .  Hence the original series is absolutely convergent, and so also convergent.   "
},
{
  "id": "theorem-ratio-test",
  "level": "2",
  "url": "section-other-convergence-tests.html#theorem-ratio-test",
  "type": "Theorem",
  "number": "9.4.6",
  "title": "Ratio Test.",
  "body": " Ratio Test   Let be an infinite series and let . Then   If the series converges absolutely.    If the series diverges.    If the test fails.      "
},
{
  "id": "example-using-the-ratio-test",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-using-the-ratio-test",
  "type": "Example",
  "number": "9.4.7",
  "title": "Using the Ratio Test.",
  "body": " Using the Ratio Test   Does converge or diverge?    Since , the series diverges by .   "
},
{
  "id": "example-factorials-over-powers",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-factorials-over-powers",
  "type": "Example",
  "number": "9.4.8",
  "title": "Factorials over Powers.",
  "body": " Factorials over Powers   Show that converges.    Since , we have . We can find this limit using L'Hospital's Rule (see ) since this limit is the indeterminate form . So set . Then . Therefore , which means that the series converges by the ratio test.   "
},
{
  "id": "theorem-root-test",
  "level": "2",
  "url": "section-other-convergence-tests.html#theorem-root-test",
  "type": "Theorem",
  "number": "9.4.9",
  "title": "Root Test.",
  "body": " Root Test   Let be an infinite series and let . Then   If the series converges absolutely.    If the series diverges.    If the test fails.      "
},
{
  "id": "example-a-k-text-th-m-power",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-a-k-text-th-m-power",
  "type": "Example",
  "number": "9.4.10",
  "title": "A <span class=\"process-math\">\\(k^{\\text{th}}\\)<\/span> Power.",
  "body": " A Power   Show that diverges.   "
},
{
  "id": "example-a-series-with-rational-terms",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-a-series-with-rational-terms",
  "type": "Example",
  "number": "9.4.11",
  "title": "A Series with Rational Terms.",
  "body": " A Series with Rational Terms   Does converge or diverge?   "
},
{
  "id": "section-power-series",
  "level": "1",
  "url": "section-power-series.html",
  "type": "Section",
  "number": "9.5",
  "title": "Power Series",
  "body": " Power Series  A power series is a series of the form where is a variable. Note that for such a series, only nonnegative, integer powers of are permitted. The terms are called coefficients , and we'll see later that they determine all properties of the series.   Examples of Power Series   Determine which of the following are power series:               Power series can also be centered at other numbers. A power series centered about  is a series of the form .  An important concern about power series is for which values of the series will converge. These questions are usually answered using the root or ratio tests.   Convergence of a Power Series   For what values of does the series converge?    We'll try the ratio test to check convergence of this series. Doing so, we get . So the series converges if and diverges if .  When , or , the test fails. So we need to use other methods to determine the convergence or the series at these points. At , the series becomes , which diverges by the comparison test. At , the series reduces to the alternating harmonic series which converges by .  Therefore this series converges for all in the interval and diverges otherwise.    In , the values of for which the series converged was an interval. It turns out that this will always be the case, and the resulting interval is known as the interval of convergence of the series. The radius of this interval is called the radius of convergence . In general, we have the following.   Convergence of Power Series   Given a series , there exists such that the series converges on the interval . The largest such is the radius of convergence.    For most series we'll consider (i.e., those of the form ), we can find using the following formula: .   Interval and Radius of Convergence   Find the interval and radius of convergence of the series .    We'll find the radius of convergence first, which is given by . So the radius of convergence is infinite, implying that the interval of convergence is .    We can also use the root test instead of the ratio test.   Interval and Radius of Convergence from Root Test   Determine the interval and radius of convergence of .    If we apply the root test to this series, we get . We need this to be less than , which gives , and so the series converges for all in . So the radius of convergence is .  Now we need to check the endpoints. At , the series becomes , which diverges by the -series test. At , the series becomes which converges by the alternating series test.  Therefore the interval of convergence is .    "
},
{
  "id": "p-1003",
  "level": "2",
  "url": "section-power-series.html#p-1003",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "power series coefficients "
},
{
  "id": "example-examples-of-power-series",
  "level": "2",
  "url": "section-power-series.html#example-examples-of-power-series",
  "type": "Example",
  "number": "9.5.1",
  "title": "Examples of Power Series.",
  "body": " Examples of Power Series   Determine which of the following are power series:              "
},
{
  "id": "p-1005",
  "level": "2",
  "url": "section-power-series.html#p-1005",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centered about "
},
{
  "id": "example-convergence-of-a-power-series",
  "level": "2",
  "url": "section-power-series.html#example-convergence-of-a-power-series",
  "type": "Example",
  "number": "9.5.2",
  "title": "Convergence of a Power Series.",
  "body": " Convergence of a Power Series   For what values of does the series converge?    We'll try the ratio test to check convergence of this series. Doing so, we get . So the series converges if and diverges if .  When , or , the test fails. So we need to use other methods to determine the convergence or the series at these points. At , the series becomes , which diverges by the comparison test. At , the series reduces to the alternating harmonic series which converges by .  Therefore this series converges for all in the interval and diverges otherwise.   "
},
{
  "id": "p-1011",
  "level": "2",
  "url": "section-power-series.html#p-1011",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "interval of convergence radius of convergence "
},
{
  "id": "theorem-convergence-of-power-series",
  "level": "2",
  "url": "section-power-series.html#theorem-convergence-of-power-series",
  "type": "Theorem",
  "number": "9.5.3",
  "title": "Convergence of Power Series.",
  "body": " Convergence of Power Series   Given a series , there exists such that the series converges on the interval . The largest such is the radius of convergence.   "
},
{
  "id": "example-interval-and-radius-of-convergence",
  "level": "2",
  "url": "section-power-series.html#example-interval-and-radius-of-convergence",
  "type": "Example",
  "number": "9.5.4",
  "title": "Interval and Radius of Convergence.",
  "body": " Interval and Radius of Convergence   Find the interval and radius of convergence of the series .    We'll find the radius of convergence first, which is given by . So the radius of convergence is infinite, implying that the interval of convergence is .   "
},
{
  "id": "example-interval-and-radius-of-convergence-from-root-test",
  "level": "2",
  "url": "section-power-series.html#example-interval-and-radius-of-convergence-from-root-test",
  "type": "Example",
  "number": "9.5.5",
  "title": "Interval and Radius of Convergence from Root Test.",
  "body": " Interval and Radius of Convergence from Root Test   Determine the interval and radius of convergence of .    If we apply the root test to this series, we get . We need this to be less than , which gives , and so the series converges for all in . So the radius of convergence is .  Now we need to check the endpoints. At , the series becomes , which diverges by the -series test. At , the series becomes which converges by the alternating series test.  Therefore the interval of convergence is .   "
},
{
  "id": "section-representing-functions-as-power-series",
  "level": "1",
  "url": "section-representing-functions-as-power-series.html",
  "type": "Section",
  "number": "9.6",
  "title": "Representing Functions as Power Series",
  "body": " Representing Functions as Power Series  A power series can be viewed as a function with domain given by the interval of convergence. One of our goals is to use power series to represent functions that can't be written in terms of elementary functions . Our first example comes from the geometric series.   Power Series from Geometric Series   Let . Then the domain of is and for in this interval we have .    Note that the equation is only valid where the series on the left converges. If we try to plug in into this equation and treat it as valid, we get , which is nonsense.  Now that we have a power series representation of , we can use it to find other power series representations.   Finding a Power Series Representation   Find a power series representation for and state the interval over which it is valid.    We'll try to relate this to the series in : . This representation is valid for , or for in the interval .    One of the most useful properties of power series is that the fundamental calculus operations, differentiation and integration, are valid for power series within their intervals of convergence.   Differentiation and Integration of Power Series   Suppose the power series has radius of convergence , and let denote the series on the interval . Then is differentiable on and or in other words . Similarly, . Both of these series have radius of convergence .     shows that integrating and differentiating power series is as easy as integrating or differentiating powers of . However, we do need to be careful at the endpoints.   Power Series for the Logarithm   Find a power series representation of centered at and its interval of convergence.    Since , we can integrate the series for to get the series for the logarithm. Doing so, we get . The series on the right has radius of convergence and interval of convergence by . To find , we can substitute into the equation (which is valid!) to get . So , and . Plugging in , we get the series .    "
},
{
  "id": "example-power-series-from-geometric-series",
  "level": "2",
  "url": "section-representing-functions-as-power-series.html#example-power-series-from-geometric-series",
  "type": "Example",
  "number": "9.6.1",
  "title": "Power Series from Geometric Series.",
  "body": " Power Series from Geometric Series   Let . Then the domain of is and for in this interval we have .   "
},
{
  "id": "example-finding-a-power-series-representation",
  "level": "2",
  "url": "section-representing-functions-as-power-series.html#example-finding-a-power-series-representation",
  "type": "Example",
  "number": "9.6.2",
  "title": "Finding a Power Series Representation.",
  "body": " Finding a Power Series Representation   Find a power series representation for and state the interval over which it is valid.    We'll try to relate this to the series in : . This representation is valid for , or for in the interval .   "
},
{
  "id": "theorem-differentiation-and-integration-of-power-series",
  "level": "2",
  "url": "section-representing-functions-as-power-series.html#theorem-differentiation-and-integration-of-power-series",
  "type": "Theorem",
  "number": "9.6.3",
  "title": "Differentiation and Integration of Power Series.",
  "body": " Differentiation and Integration of Power Series   Suppose the power series has radius of convergence , and let denote the series on the interval . Then is differentiable on and or in other words . Similarly, . Both of these series have radius of convergence .   "
},
{
  "id": "example-power-series-for-the-logarithm",
  "level": "2",
  "url": "section-representing-functions-as-power-series.html#example-power-series-for-the-logarithm",
  "type": "Example",
  "number": "9.6.4",
  "title": "Power Series for the Logarithm.",
  "body": " Power Series for the Logarithm   Find a power series representation of centered at and its interval of convergence.    Since , we can integrate the series for to get the series for the logarithm. Doing so, we get . The series on the right has radius of convergence and interval of convergence by . To find , we can substitute into the equation (which is valid!) to get . So , and . Plugging in , we get the series .   "
},
{
  "id": "section-taylor-and-maclaurin-series",
  "level": "1",
  "url": "section-taylor-and-maclaurin-series.html",
  "type": "Section",
  "number": "9.7",
  "title": "Taylor and Maclaurin Series",
  "body": " Taylor and Maclaurin Series  In we found how to obtain power series using the geometric series. What we'll do in this section is determine how to find more general power series. To start, suppose we can represent as a power series centered at some number : Then this representation is valid on some interval . Our goal is to find what the coefficients are.  We'll start with the first coefficient . We can find it very easily by setting to get . So the first coefficient must be equal to . Now we'll try to find , which we can do by differentiating: , which is still valid for . Now set again to obtain .  Now differentiate again to get which gives . Similarly, . We can continue this process in general to get the following theorem.   Taylor's Formula   If has a power series representation\/expansion at with positive radius of convergence , then where . This series is called the Taylor series of about .    A Taylor series about is also known as a Maclaurin series .   Maclaurin Series for the Exponential   Find the Maclaurin series for .    If we let , then the Maclaurin series is where . So the Maclaurin series is .     gives us the Taylor series about for , but at the moment we don't know if it actually equals . However, if we differentiate the series we get the same series back. In other words, the Taylor series of  is its own derivative , which is a promising sign.   Taylor Series from the Exponential   Assuming that equals its Taylor series, find the Maclaurin series for . Also, find the derivative of at .    We could use to find the Maclaurin series for , but it's far, far easier to use the series for : .  It turns out that this lets us find derivatives at incredibly quickly. If we let , then it follows that is the coefficient of in the power series for . Therefore .    Showing that a function equals its power series requires the Lagrange remainder formula for Taylor series, which states the following: if is differentiable times on an interval containing , then for each in there exists in such that is equal to . A useful fact when using this is that as for all .   Maclaurin Series for Cosine   Find the Maclaurin series for and show that equals its Maclaurin series for all .    Using , the Taylor series for at is given by . So to find this series we need to find the derivatives of cosine at : and so on. So the Maclaurin series for is given by .  To express this using sigma notation, note that this series has only even powers of . Hence the sum should look like . Looking at the pattern of the coefficients here, we can rewrite this as . Using the ratio test, we can also show that this series converges for all . To show that this series actually equals , we need to consider the remainder term .  We don't know what exactly is, except that it's in some interval around . However, we do know that , which means that the remainder satisfies . Therefore equals its Maclaurin series.    Now that we know how to express as a power series, we can do the same for .   Maclaurin Series for Sine   Find the Maclaurin series for .    Knowing a power series representation for a function makes calculus with that function extremely straightforward, at least if you're willing to use series.   Computing a Definite Integral   Use power series to find , and find an approximation within of the exact value.    Using the power series for from , we have . This is an alternating series, so by the alternating series test the partial sum is always within of the exact value. So if we want to get enough terms of the series to be within of the exact value, we need to pick so that , which occurs at . So . This is within about of the exact value.    One extremely useful application of power series in mathematics and its applications is in deriving Euler's Formula .   Euler's Formula   Let . Then .    We can try to use power series to make sense of . Our idea is that since the power series for is valid for all , it should be valid for all as well, giving . In particular, .    "
},
{
  "id": "theorem-taylor-s-formula",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#theorem-taylor-s-formula",
  "type": "Theorem",
  "number": "9.7.1",
  "title": "Taylor’s Formula.",
  "body": " Taylor's Formula   If has a power series representation\/expansion at with positive radius of convergence , then where . This series is called the Taylor series of about .   "
},
{
  "id": "p-1036",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#p-1036",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Maclaurin series "
},
{
  "id": "example-maclaurin-series-for-the-exponential",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#example-maclaurin-series-for-the-exponential",
  "type": "Example",
  "number": "9.7.2",
  "title": "Maclaurin Series for the Exponential.",
  "body": " Maclaurin Series for the Exponential   Find the Maclaurin series for .    If we let , then the Maclaurin series is where . So the Maclaurin series is .   "
},
{
  "id": "example-taylor-series-from-the-exponential",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#example-taylor-series-from-the-exponential",
  "type": "Example",
  "number": "9.7.3",
  "title": "Taylor Series from the Exponential.",
  "body": " Taylor Series from the Exponential   Assuming that equals its Taylor series, find the Maclaurin series for . Also, find the derivative of at .    We could use to find the Maclaurin series for , but it's far, far easier to use the series for : .  It turns out that this lets us find derivatives at incredibly quickly. If we let , then it follows that is the coefficient of in the power series for . Therefore .   "
},
{
  "id": "p-1043",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#p-1043",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lagrange remainder formula "
},
{
  "id": "example-maclaurin-series-for-cosine",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#example-maclaurin-series-for-cosine",
  "type": "Example",
  "number": "9.7.4",
  "title": "Maclaurin Series for Cosine.",
  "body": " Maclaurin Series for Cosine   Find the Maclaurin series for and show that equals its Maclaurin series for all .    Using , the Taylor series for at is given by . So to find this series we need to find the derivatives of cosine at : and so on. So the Maclaurin series for is given by .  To express this using sigma notation, note that this series has only even powers of . Hence the sum should look like . Looking at the pattern of the coefficients here, we can rewrite this as . Using the ratio test, we can also show that this series converges for all . To show that this series actually equals , we need to consider the remainder term .  We don't know what exactly is, except that it's in some interval around . However, we do know that , which means that the remainder satisfies . Therefore equals its Maclaurin series.   "
},
{
  "id": "example-maclaurin-series-for-sine",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#example-maclaurin-series-for-sine",
  "type": "Example",
  "number": "9.7.5",
  "title": "Maclaurin Series for Sine.",
  "body": " Maclaurin Series for Sine   Find the Maclaurin series for .   "
},
{
  "id": "example-computing-a-definite-integral",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#example-computing-a-definite-integral",
  "type": "Example",
  "number": "9.7.6",
  "title": "Computing a Definite Integral.",
  "body": " Computing a Definite Integral   Use power series to find , and find an approximation within of the exact value.    Using the power series for from , we have . This is an alternating series, so by the alternating series test the partial sum is always within of the exact value. So if we want to get enough terms of the series to be within of the exact value, we need to pick so that , which occurs at . So . This is within about of the exact value.   "
},
{
  "id": "p-1053",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#p-1053",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler's Formula "
},
{
  "id": "theorem-euler-s-formula",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#theorem-euler-s-formula",
  "type": "Theorem",
  "number": "9.7.7",
  "title": "Euler’s Formula.",
  "body": " Euler's Formula   Let . Then .    We can try to use power series to make sense of . Our idea is that since the power series for is valid for all , it should be valid for all as well, giving . In particular, .   "
},
{
  "id": "section-parametric-equations",
  "level": "1",
  "url": "section-parametric-equations.html",
  "type": "Section",
  "number": "10.1",
  "title": "Parametric Equations",
  "body": " Parametric Equations  If a particle is moving in two dimensions (i.e., the -plane), then it makes sense to write the - and -coordinates of its trajectory in terms of time : . We can use parametric equations to describe the resulting parametric curves . For example, the parametric equations   produce the following parametric curve in the -plane.      The graph of for .   Note that the parametric curve above has a starting point and an ending point , determined by the interval of values for . When plotting parametric curves, we'll often specify a corresponding interval of values for . This curve can also be plotted relatively painlessly with SymPy, as below:   A set of parametric equations (along with a corresponding interval of values for ) can be viewed as defining a single function that assigns points in the -plane to real numbers . We'll introduce some notation that will come in handy later: let denote the set of real numbers (also known as scalars ), and let denote the -plane. Then a set of parametric equations describes a function from (specifically, an interval in ) to . We'll see more of this in the following chapters.  Plotting points and plugging them into parametric equations can be tedious. Another way to describe a parametric curve is to eliminate parameters.   Eliminating parameters   Rewrite the parametric equations  as a single Cartesian equation, i.e., eliminate the parameter .   First, solve for in the second equation to get . If we plug this into the first equation, we get an equation in and alone:   We can see from this equation that the original parametric equations should trace out a rightward opening parabola. Note however that this equation tells us nothing about which portion of the parabola is traced out.     Parameterizing a Line Segment   Give a set of parametric equations and a corresponding interval that trace out the line segment starting at and ending at .    First, we'll try to figure out what our equations should look like. We know that starts at and starts at on this segment, so a reasonable guess is for some unknown constants and . To find and , we'll specify the interval of values we want to range over. To make things easier, let's fix between and . Then at we need to have which gives and . Therefore the line segment is parameterized by .  We can also rewrite these equations in terms of the starting and ending values of and . In particular, we have . To see why this works, note that the second term in each equation vanishes at , leaving the starting value for each coordinate. Likewise, the first term in each equation vanishes at , leaving the terminal value for each coordinate. Expanding the equations gives the previous result. Note that this method only works if you select as your interval of values for .    Parametric equations are especially useful for tracing movement along a curve that is not the graph of a function, like a circle. In particular, a circle of radius centered at is traced out by the parametric equations over the interval .   Parametric Equations for Motion on a Circle   Find parametric equations and a corresponding interval of values for that describe a particle moving along a circle of radius centered at and starting at moving clockwise three times around the circle.    This problem has a lot to unpack, but we know the basic form of our equations will be . Since we want to start at , we can let be our starting value. And since we want to move around the circle times, we'll let vary from to . Finally, to get clockwise motion we need to replace with , getting for .     Parametric Equations for an Ellipse   Find parametric equations for the ellipse .    These equations will look much like the parametric equations for a circle: for .    "
},
{
  "id": "p-1057",
  "level": "2",
  "url": "section-parametric-equations.html#p-1057",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trajectory parametric equations parametric curves "
},
{
  "id": "figure-parametric-parabola",
  "level": "2",
  "url": "section-parametric-equations.html#figure-parametric-parabola",
  "type": "Figure",
  "number": "10.1.1",
  "title": "",
  "body": "    The graph of for .  "
},
{
  "id": "p-1060",
  "level": "2",
  "url": "section-parametric-equations.html#p-1060",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalars "
},
{
  "id": "example-eliminating-parameters",
  "level": "2",
  "url": "section-parametric-equations.html#example-eliminating-parameters",
  "type": "Example",
  "number": "10.1.2",
  "title": "Eliminating parameters.",
  "body": " Eliminating parameters   Rewrite the parametric equations  as a single Cartesian equation, i.e., eliminate the parameter .   First, solve for in the second equation to get . If we plug this into the first equation, we get an equation in and alone:   We can see from this equation that the original parametric equations should trace out a rightward opening parabola. Note however that this equation tells us nothing about which portion of the parabola is traced out.   "
},
{
  "id": "example-parameterizing-a-line-segment",
  "level": "2",
  "url": "section-parametric-equations.html#example-parameterizing-a-line-segment",
  "type": "Example",
  "number": "10.1.3",
  "title": "Parameterizing a Line Segment.",
  "body": " Parameterizing a Line Segment   Give a set of parametric equations and a corresponding interval that trace out the line segment starting at and ending at .    First, we'll try to figure out what our equations should look like. We know that starts at and starts at on this segment, so a reasonable guess is for some unknown constants and . To find and , we'll specify the interval of values we want to range over. To make things easier, let's fix between and . Then at we need to have which gives and . Therefore the line segment is parameterized by .  We can also rewrite these equations in terms of the starting and ending values of and . In particular, we have . To see why this works, note that the second term in each equation vanishes at , leaving the starting value for each coordinate. Likewise, the first term in each equation vanishes at , leaving the terminal value for each coordinate. Expanding the equations gives the previous result. Note that this method only works if you select as your interval of values for .   "
},
{
  "id": "example-parametric-equations-for-motion-on-a-circle",
  "level": "2",
  "url": "section-parametric-equations.html#example-parametric-equations-for-motion-on-a-circle",
  "type": "Example",
  "number": "10.1.4",
  "title": "Parametric Equations for Motion on a Circle.",
  "body": " Parametric Equations for Motion on a Circle   Find parametric equations and a corresponding interval of values for that describe a particle moving along a circle of radius centered at and starting at moving clockwise three times around the circle.    This problem has a lot to unpack, but we know the basic form of our equations will be . Since we want to start at , we can let be our starting value. And since we want to move around the circle times, we'll let vary from to . Finally, to get clockwise motion we need to replace with , getting for .   "
},
{
  "id": "example-parametric-equations-for-an-ellipse",
  "level": "2",
  "url": "section-parametric-equations.html#example-parametric-equations-for-an-ellipse",
  "type": "Example",
  "number": "10.1.5",
  "title": "Parametric Equations for an Ellipse.",
  "body": " Parametric Equations for an Ellipse   Find parametric equations for the ellipse .    These equations will look much like the parametric equations for a circle: for .   "
},
{
  "id": "section-calculus-and-parametric-curves",
  "level": "1",
  "url": "section-calculus-and-parametric-curves.html",
  "type": "Section",
  "number": "10.2",
  "title": "Calculus and Parametric Curves",
  "body": " Calculus and Parametric Curves   Tangent Lines to Parametric Curves  We have an idea of how to represent curves in the -plane using parametric equations. What we'd like to do now is to figure out how to do calculus with parametric equations. To start, we'll find the slope of a parametric curve at some value . Suppose that . Then we can find the slope using the chain rule: and so , assuming that .   Cusps on a Cycloid   The parametric equations trace out a cycloid , also known as the brachistochrone or curve of fastest descent . Find the values of for which this curve has a cusp.    First, note that a curve cannot be differentiable at a cusp. So we can try to find the cusps by looking at where fails to exist. This occurs precisely at for any integer . Hence the cycloid should have a cusp at these values of .      Area Under Parametric Curves  We can also find areas by using -substitution and the Fundamental Theorem of Calculus. If , then the area under the curve from to is given by . If we instead have parametric equations then and . If the curve goes from to exactly once as goes from to , then the area under the curve is given by    Area of a Circle  Suppose we want to find the area of a circle of radius . We can do so by parameterizing such a circle with   Then the area of the circle is given by One thing to watch out for in the previous calculation is that the limits went from to . This was because of the particular parameterization we chose.     Arc Length of Parametric Curves  Now we move on to finding lengths of parametric curves. We won't derive the formula here, but it essentially follows from the Pythagorean theorem. We'll see a motivation of the formula later using vector calculus. But for now, suppose we have   Then the length of the associated parametric curve from to is given by    Arc Length of a Parametric Curve  Let and for Then the length of this curve is given by    SUGGESTED PROBLEMS: 1, 3, 13, 37   "
},
{
  "id": "example-cusps-on-a-cycloid",
  "level": "2",
  "url": "section-calculus-and-parametric-curves.html#example-cusps-on-a-cycloid",
  "type": "Example",
  "number": "10.2.1",
  "title": "Cusps on a Cycloid.",
  "body": " Cusps on a Cycloid   The parametric equations trace out a cycloid , also known as the brachistochrone or curve of fastest descent . Find the values of for which this curve has a cusp.    First, note that a curve cannot be differentiable at a cusp. So we can try to find the cusps by looking at where fails to exist. This occurs precisely at for any integer . Hence the cycloid should have a cusp at these values of .   "
},
{
  "id": "example-area-of-a-circle",
  "level": "2",
  "url": "section-calculus-and-parametric-curves.html#example-area-of-a-circle",
  "type": "Example",
  "number": "10.2.2",
  "title": "Area of a Circle.",
  "body": " Area of a Circle  Suppose we want to find the area of a circle of radius . We can do so by parameterizing such a circle with   Then the area of the circle is given by One thing to watch out for in the previous calculation is that the limits went from to . This was because of the particular parameterization we chose.  "
},
{
  "id": "example-arc-length-of-a-parametric-curve",
  "level": "2",
  "url": "section-calculus-and-parametric-curves.html#example-arc-length-of-a-parametric-curve",
  "type": "Example",
  "number": "10.2.3",
  "title": "Arc Length of a Parametric Curve.",
  "body": " Arc Length of a Parametric Curve  Let and for Then the length of this curve is given by   "
},
{
  "id": "section-polar-coordinates",
  "level": "1",
  "url": "section-polar-coordinates.html",
  "type": "Section",
  "number": "10.3",
  "title": "Polar Coordinates",
  "body": " Polar Coordinates   Introducing Polar Coordinates  We typically use Cartesian or rectangular coordinates to plot points. However, this can lead to issues if we have a graph that isn't rectangular. For example, the circle has a simple geometric description based on its center and radius, but in Cartesian coordinates it can be difficult to work with since every point on the (unit) circle takes the form . This square root makes integrals and derivatives complicated. The main problem lies in the fact that we are trying to describe a circle using a rectangular coordinate system. So our goal in this section is to find a more suitable coordinate system for circles.  A circle can be described as the set of all points some fixed distance from a given point, and we can specify any point on the circle by using an angle :      Using distance and angle to specify a point.   Any point on the circle can be described solely using the distance and the direction . This leads directly to the idea of polar coordinates. In polar coordinates, the -plane is replaced with an -plane, or polar plane . Each point in the polar plane has the form , where the radial coordinate  denotes the distance from the origin, or pole , and the angular coordinate  determines the angle the point makes with the horizontal polar axis . The polar axis replaces the positive -axis from Cartesian coordinates:      The polar plane.   In polar coordinates, positive correspond to counterclockwise direction, and negative correspond to clockwise direction. We also allow for to be negative: this just means go in the direction opposite of .   Plotting polar coordinates  Suppose we want to plot the points and We can do so in the polar plane by remembering that the first coordinate is distance from the pole, and the second coordinate is direction from the polar axis. If we plot these points, we see that and actually represent the same point. This is typical of polar coordinates: every point has, in general, infinitely many representations.       The plot from .     Converting Coordinates  If we want to use polar coordinates, then it'd be helpful to know how to convert between Cartesian (rectangular) coordinates and polar coordinates. The following diagram will help us to make these conversions.      Converting between Cartesian and polar coordinates.   So in terms of , we have   Going in the other direction, the Pythagorean theorem tells us that , while .   Converting polar to Cartesian  Suppose we want to convert the point in polar coordinates to Cartesian coordinates . Then we have   and so the Cartesian point is    Converting Cartesian to polar  Suppose we now want to convert the point in Cartesian coordinates to polar coordinates. Then finding is relatively straightforward:   Finding requires a bit more care. We know that has to satisfy . One choice that makes this work is . However, this is incorrect! Whatever is needs to be consistent with the fact that our point lies in the second quadrant. So we'll pick instead. Hence one way to write the point in polar coordinates is given by    Converting equations  Consider the polar equation . We can convert this into a Cartesian equation using the above formulas. In particular, we use and . So and the equation becomes      Polar Curves  Now we move on to graphing polar equations.   Graphs of constants in polar coordinates  In Cartesian coordinates, the graphs of and give horizontal and vertical lines, respectively. In polar coordinates, the graphs of and have simple descriptions as well. The graph of is just the set of all points units away from the pole, so it's just a circle of radius centered at the pole. Likewise, the graph of is the set of all points that make an angle of with the polar axis, so it's just a line through the pole.    Graphs from Cartesian equations  In some cases it's beneficial to convert a polar equation to a Cartesian equation. The Cartesian equation may have a recognizable form that helps us to identify the corresponding polar graph. For example, suppose we want to describe the graph of for some constant . Then we can convert it to a Cartesian equation, in particular   If we complete the square, we get , which describes a circle centered at (in the -plane) and with radius . In the polar plane, this is a circle of radius centered at Similarly, describes a circle of radius centered at .    Another circle  Suppose we want to graph . From the previous example, we know that this will be a circle of radius centered at . See the following figure.       The circle from .     Cartesian to Polar Method  Graphing polar equations can be tricky, because it's easy to miss aspects of the graph unless you're careful. A useful method for graphing polar equations involves treating them as Cartesian equations first to get a better sense of how the graph behaves.   Three leaf rose  Suppose we want to graph . We don't know what this looks like in the polar plane yet, but we have a pretty good idea of how it looks when treated as a Cartesian equation in the -plane (which we view as different from the polar plane!):      The graph of as a Cartesian equation.   So we see that at goes from to , decreases from to , hitting along the way at .      to .   Now, as goes from to  will go from to , hitting at :      to .   Continuing in this manner lets us complete the graph:      The graph of in the polar plane.    SUGGESTED PROBLEMS: 1, 3, 11, 23, 37   "
},
{
  "id": "p-1083",
  "level": "2",
  "url": "section-polar-coordinates.html#p-1083",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cartesian rectangular "
},
{
  "id": "figure-polar-coords",
  "level": "2",
  "url": "section-polar-coordinates.html#figure-polar-coords",
  "type": "Figure",
  "number": "10.3.1",
  "title": "",
  "body": "    Using distance and angle to specify a point.  "
},
{
  "id": "p-1085",
  "level": "2",
  "url": "section-polar-coordinates.html#p-1085",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polar plane radial coordinate pole angular coordinate polar axis "
},
{
  "id": "figure-polar-plane",
  "level": "2",
  "url": "section-polar-coordinates.html#figure-polar-plane",
  "type": "Figure",
  "number": "10.3.2",
  "title": "",
  "body": "    The polar plane.  "
},
{
  "id": "example-plotting-polar-coordinates",
  "level": "2",
  "url": "section-polar-coordinates.html#example-plotting-polar-coordinates",
  "type": "Example",
  "number": "10.3.3",
  "title": "Plotting polar coordinates.",
  "body": " Plotting polar coordinates  Suppose we want to plot the points and We can do so in the polar plane by remembering that the first coordinate is distance from the pole, and the second coordinate is direction from the polar axis. If we plot these points, we see that and actually represent the same point. This is typical of polar coordinates: every point has, in general, infinitely many representations.  "
},
{
  "id": "figure-example-polar-coords",
  "level": "2",
  "url": "section-polar-coordinates.html#figure-example-polar-coords",
  "type": "Figure",
  "number": "10.3.4",
  "title": "",
  "body": "    The plot from .  "
},
{
  "id": "figure-cartesian-to-polar",
  "level": "2",
  "url": "section-polar-coordinates.html#figure-cartesian-to-polar",
  "type": "Figure",
  "number": "10.3.5",
  "title": "",
  "body": "    Converting between Cartesian and polar coordinates.  "
},
{
  "id": "example-converting-polar-to-cartesian",
  "level": "2",
  "url": "section-polar-coordinates.html#example-converting-polar-to-cartesian",
  "type": "Example",
  "number": "10.3.6",
  "title": "Converting polar to Cartesian.",
  "body": " Converting polar to Cartesian  Suppose we want to convert the point in polar coordinates to Cartesian coordinates . Then we have   and so the Cartesian point is  "
},
{
  "id": "example-converting-cartesian-to-polar",
  "level": "2",
  "url": "section-polar-coordinates.html#example-converting-cartesian-to-polar",
  "type": "Example",
  "number": "10.3.7",
  "title": "Converting Cartesian to polar.",
  "body": " Converting Cartesian to polar  Suppose we now want to convert the point in Cartesian coordinates to polar coordinates. Then finding is relatively straightforward:   Finding requires a bit more care. We know that has to satisfy . One choice that makes this work is . However, this is incorrect! Whatever is needs to be consistent with the fact that our point lies in the second quadrant. So we'll pick instead. Hence one way to write the point in polar coordinates is given by  "
},
{
  "id": "example-converting-equations",
  "level": "2",
  "url": "section-polar-coordinates.html#example-converting-equations",
  "type": "Example",
  "number": "10.3.8",
  "title": "Converting equations.",
  "body": " Converting equations  Consider the polar equation . We can convert this into a Cartesian equation using the above formulas. In particular, we use and . So and the equation becomes   "
},
{
  "id": "example-graphs-of-constants-in-polar-coordinates",
  "level": "2",
  "url": "section-polar-coordinates.html#example-graphs-of-constants-in-polar-coordinates",
  "type": "Example",
  "number": "10.3.9",
  "title": "Graphs of constants in polar coordinates.",
  "body": " Graphs of constants in polar coordinates  In Cartesian coordinates, the graphs of and give horizontal and vertical lines, respectively. In polar coordinates, the graphs of and have simple descriptions as well. The graph of is just the set of all points units away from the pole, so it's just a circle of radius centered at the pole. Likewise, the graph of is the set of all points that make an angle of with the polar axis, so it's just a line through the pole.  "
},
{
  "id": "example-graphs-from-cartesian-equations",
  "level": "2",
  "url": "section-polar-coordinates.html#example-graphs-from-cartesian-equations",
  "type": "Example",
  "number": "10.3.10",
  "title": "Graphs from Cartesian equations.",
  "body": " Graphs from Cartesian equations  In some cases it's beneficial to convert a polar equation to a Cartesian equation. The Cartesian equation may have a recognizable form that helps us to identify the corresponding polar graph. For example, suppose we want to describe the graph of for some constant . Then we can convert it to a Cartesian equation, in particular   If we complete the square, we get , which describes a circle centered at (in the -plane) and with radius . In the polar plane, this is a circle of radius centered at Similarly, describes a circle of radius centered at .  "
},
{
  "id": "example-another-circle",
  "level": "2",
  "url": "section-polar-coordinates.html#example-another-circle",
  "type": "Example",
  "number": "10.3.11",
  "title": "Another circle.",
  "body": " Another circle  Suppose we want to graph . From the previous example, we know that this will be a circle of radius centered at . See the following figure.  "
},
{
  "id": "figure-cosine-polar-circle",
  "level": "2",
  "url": "section-polar-coordinates.html#figure-cosine-polar-circle",
  "type": "Figure",
  "number": "10.3.12",
  "title": "",
  "body": "    The circle from .  "
},
{
  "id": "example-three-leaf-rose",
  "level": "2",
  "url": "section-polar-coordinates.html#example-three-leaf-rose",
  "type": "Example",
  "number": "10.3.13",
  "title": "Three leaf rose.",
  "body": " Three leaf rose  Suppose we want to graph . We don't know what this looks like in the polar plane yet, but we have a pretty good idea of how it looks when treated as a Cartesian equation in the -plane (which we view as different from the polar plane!):      The graph of as a Cartesian equation.   So we see that at goes from to , decreases from to , hitting along the way at .      to .   Now, as goes from to  will go from to , hitting at :      to .   Continuing in this manner lets us complete the graph:      The graph of in the polar plane.   "
},
{
  "id": "section-calculus-and-polar-coordinates",
  "level": "1",
  "url": "section-calculus-and-polar-coordinates.html",
  "type": "Section",
  "number": "10.4",
  "title": "Calculus and Polar Coordinates",
  "body": " Calculus and Polar Coordinates   Areas of Polar Curves  To find the area of a region swept out by a polar curve, we need to reinvent the integral so to speak. In Cartesian coordinates, the integral was based on using rectangles to approximate areas. For polar coordinates, it makes more sense to use circular sectors.  Consider a region bounded by the polar curve :      The polar region .   To find the area of this region, we'll approximate it using circular sectors. Since we want to find the area between and , we'll break the interval into subintervals of equal length , with       Approximating the region with circular sectors.   The area of each slice is given by   For one of our slices, this takes the form   Adding these areas up gives us the approximate area of the region. So we can say that   As gets smaller, this approximation should become exact. So we can say   This limit is exactly the definition of an integral! So we have   We can summarize this in the following theorem.   Area in Polar Coordinates  polar coordinates area   Suppose that is a region bounded by the polar curves and between and . If and are continuous and for then the area of is given by     Area bounded by a cardioid  Consider the cardioid The name will become clearer once we graph this.  . The area is given by   To find this, we'll need to figure out the limits of integration. For polar plots, the best way to do this is by graphing. We'll graph by using the Cartesian to polar methods described in . First, we treat this as a Cartesian curve in the -plane and graph it to get      as a Cartesian equation.   Now we can plot the corresponding polar curve:      as a polar equation.   The important thing to notice is that we trace out the curve exactly once as goes from to , so our limits should be and . Hence the area of this region is given by     Area inside a rose and outside a circle  As another example of the use of , we'll find the area of the region contained by the polar curves and outside the circle . Again, a great way to start this problem is to graph the region under consideration.      Region contained between polar curves.   With a little bit of work, we can see that the area of one of these shaded regions is given by   and so the area of the entire region is      Arc Length in Polar Coordinates  Our goal now is to find the length of a polar curve . From we know how to find the length of a parametric curve, and a polar curve is really just a parametric curve with parametric equations   Using the formula and simplifying, we get the following result.   Arc Length of a Polar Curve  polar coordinates arc length   The length of a polar curve from to is given by     Arc length of a leaf  Let . Then this gives a four-leaf rose in the polar plane. We want to find the length of one leaf of this rose. As usual, it's a good idea to graph this curve first.      The four leaf rose .   One leaf of the rose should be captured as varies from to , so using we can find the length of this leaf:    SUGGESTED PROBLEMS: 1, 3, 7, 9, 15, 19, 35   "
},
{
  "id": "figure-polar-region",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#figure-polar-region",
  "type": "Figure",
  "number": "10.4.1",
  "title": "",
  "body": "    The polar region .  "
},
{
  "id": "figure-polar-region-1",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#figure-polar-region-1",
  "type": "Figure",
  "number": "10.4.2",
  "title": "",
  "body": "    Approximating the region with circular sectors.  "
},
{
  "id": "theorem-area-in-polar-coordinates",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#theorem-area-in-polar-coordinates",
  "type": "Theorem",
  "number": "10.4.3",
  "title": "Area in Polar Coordinates.",
  "body": " Area in Polar Coordinates  polar coordinates area   Suppose that is a region bounded by the polar curves and between and . If and are continuous and for then the area of is given by   "
},
{
  "id": "example-area-bounded-by-a-cardioid",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#example-area-bounded-by-a-cardioid",
  "type": "Example",
  "number": "10.4.4",
  "title": "Area bounded by a cardioid.",
  "body": " Area bounded by a cardioid  Consider the cardioid The name will become clearer once we graph this.  . The area is given by   To find this, we'll need to figure out the limits of integration. For polar plots, the best way to do this is by graphing. We'll graph by using the Cartesian to polar methods described in . First, we treat this as a Cartesian curve in the -plane and graph it to get      as a Cartesian equation.   Now we can plot the corresponding polar curve:      as a polar equation.   The important thing to notice is that we trace out the curve exactly once as goes from to , so our limits should be and . Hence the area of this region is given by   "
},
{
  "id": "example-area-inside-a-rose-and-outside-a-circle",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#example-area-inside-a-rose-and-outside-a-circle",
  "type": "Example",
  "number": "10.4.7",
  "title": "Area inside a rose and outside a circle.",
  "body": " Area inside a rose and outside a circle  As another example of the use of , we'll find the area of the region contained by the polar curves and outside the circle . Again, a great way to start this problem is to graph the region under consideration.      Region contained between polar curves.   With a little bit of work, we can see that the area of one of these shaded regions is given by   and so the area of the entire region is   "
},
{
  "id": "theorem-arc-length-of-a-polar-curve",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#theorem-arc-length-of-a-polar-curve",
  "type": "Theorem",
  "number": "10.4.9",
  "title": "Arc Length of a Polar Curve.",
  "body": " Arc Length of a Polar Curve  polar coordinates arc length   The length of a polar curve from to is given by   "
},
{
  "id": "example-arc-length-of-a-leaf",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#example-arc-length-of-a-leaf",
  "type": "Example",
  "number": "10.4.10",
  "title": "Arc length of a leaf.",
  "body": " Arc length of a leaf  Let . Then this gives a four-leaf rose in the polar plane. We want to find the length of one leaf of this rose. As usual, it's a good idea to graph this curve first.      The four leaf rose .   One leaf of the rose should be captured as varies from to , so using we can find the length of this leaf:   "
},
{
  "id": "section-coordinates-in-3-space",
  "level": "1",
  "url": "section-coordinates-in-3-space.html",
  "type": "Section",
  "number": "11.1",
  "title": "Coordinates in 3-Space",
  "body": " Coordinates in 3-Space   -coordinates  We're used to Cartesian coordinates in the plane: each point in the plane can be represented by an -coordinate and a -coordinate. This representation is determined by the coordinate axes (the - and -axes). There's nothing preventing us from doing the same for three dimensions. We'll just need three coordinate axes: the -, - and -axes. We typically view the -plane as horizontal, and the -axis as vertical, but there's no mathematical preference either way.  Just as the - and -axes determined the -plane, we can also get the - and -planes. These planes divide space into eight octants . And just as any point in the -plane can be represented by measuring along the -axis and -axis to get a point , we can do the same in space to get a point . The set of all points like this is denoted by , and is the three-dimensional coordinate system .  Given any point in , we can find its projections onto any of the coordinate axes or coordinate planes without too much trouble. The projection onto a line or plane is the point on that line or plane that is closest to the original point .   Projection   Find the projection of the point onto the -plane.    Here's how we can find the projection of the point onto the -plane. Note that the -plane is just the set of all points with -coordinate equation to , so the projection of onto the -plane is the point .     Equations in space   Sketch in .    This is just the set of all points in of the form . This forms a plane in .      More equations in space   Sketch in .    We can do so as follows. First, sketch in the -plane, which will just be the line . Then the surface in represented by is actually the surface consisting of all points directly above and directly below the line in the -plane.     Intersection of a sphere and a plane   Describe the intersection of the sphere given by the equation with the -plane.    We can do this without too much trouble if we remember that the -plane is just the set of all points with -coordinate equal to . So the intersection of this sphere with the -plane traces out the curve in the -plane, which is just the point .     Intersection of the sphere with the -plane.      The Distance Formula  Recall that the distance between two points and in (the -plane) is given by   This is proved using the Pythagorean theorem. We can do the same exact thing in !   Distances in Space  distance formula three dimensions   Let and be two points in . Then the distance between these two points, , is given by      Computing distances   lets us find the distance between the points and as follows:    One important use of the distance formula in is that it lets us find equations of spheres. The equation of a sphere of radius and center is given by which is more commonly written as    Equation of a sphere  The equation represents a sphere in . To see how, we can rearrange the equation and complete the square to get   So this equation describes a sphere of radius centered at .    Spherical shells  We can also use inequalities to describe regions in addition to equalities. For example, describes the region contained between the sphere of radius and the sphere of radius , both centered at the origin.    The spherical shells .     "
},
{
  "id": "p-1131",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#p-1131",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate axes "
},
{
  "id": "p-1132",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#p-1132",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "octants three-dimensional coordinate system "
},
{
  "id": "p-1133",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#p-1133",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projections "
},
{
  "id": "example-projection",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-projection",
  "type": "Example",
  "number": "11.1.1",
  "title": "Projection.",
  "body": " Projection   Find the projection of the point onto the -plane.    Here's how we can find the projection of the point onto the -plane. Note that the -plane is just the set of all points with -coordinate equation to , so the projection of onto the -plane is the point .   "
},
{
  "id": "example-equations-in-space",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-equations-in-space",
  "type": "Example",
  "number": "11.1.2",
  "title": "Equations in space.",
  "body": " Equations in space   Sketch in .    This is just the set of all points in of the form . This forms a plane in .   "
},
{
  "id": "example-more-equations-in-space",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-more-equations-in-space",
  "type": "Example",
  "number": "11.1.3",
  "title": "More equations in space.",
  "body": " More equations in space   Sketch in .    We can do so as follows. First, sketch in the -plane, which will just be the line . Then the surface in represented by is actually the surface consisting of all points directly above and directly below the line in the -plane.   "
},
{
  "id": "example-intersection-of-a-sphere-and-a-plane",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-intersection-of-a-sphere-and-a-plane",
  "type": "Example",
  "number": "11.1.4",
  "title": "Intersection of a sphere and a plane.",
  "body": " Intersection of a sphere and a plane   Describe the intersection of the sphere given by the equation with the -plane.    We can do this without too much trouble if we remember that the -plane is just the set of all points with -coordinate equal to . So the intersection of this sphere with the -plane traces out the curve in the -plane, which is just the point .   "
},
{
  "id": "figure-sphere-xz-plane-intersection",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#figure-sphere-xz-plane-intersection",
  "type": "Figure",
  "number": "11.1.5",
  "title": "",
  "body": " Intersection of the sphere with the -plane.   "
},
{
  "id": "theorem-distances-in-space",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#theorem-distances-in-space",
  "type": "Theorem",
  "number": "11.1.6",
  "title": "Distances in Space.",
  "body": " Distances in Space  distance formula three dimensions   Let and be two points in . Then the distance between these two points, , is given by    "
},
{
  "id": "example-computing-distances",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-computing-distances",
  "type": "Example",
  "number": "11.1.7",
  "title": "Computing distances.",
  "body": " Computing distances   lets us find the distance between the points and as follows:   "
},
{
  "id": "example-equation-of-a-sphere",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-equation-of-a-sphere",
  "type": "Example",
  "number": "11.1.8",
  "title": "Equation of a sphere.",
  "body": " Equation of a sphere  The equation represents a sphere in . To see how, we can rearrange the equation and complete the square to get   So this equation describes a sphere of radius centered at .  "
},
{
  "id": "example-spherical-shells",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-spherical-shells",
  "type": "Example",
  "number": "11.1.9",
  "title": "Spherical shells.",
  "body": " Spherical shells  We can also use inequalities to describe regions in addition to equalities. For example, describes the region contained between the sphere of radius and the sphere of radius , both centered at the origin.  "
},
{
  "id": "figure-spherical-shells-radii-3-4",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#figure-spherical-shells-radii-3-4",
  "type": "Figure",
  "number": "11.1.10",
  "title": "",
  "body": " The spherical shells .   "
},
{
  "id": "section-vectors",
  "level": "1",
  "url": "section-vectors.html",
  "type": "Section",
  "number": "11.2",
  "title": "Vectors",
  "body": " Vectors   One of our goals in this chapter is to adequately describe motion in space. A useful way to do this uses the concept of vector , which we think of as a quantity that has both direction and magnitude\/length. A simple example would be velocity: velocity in space has a direction and also a magnitude (speed). We will typically denote vectors by using boldface letters such as or letters with a bar overhead such as . We represent vectors as arrows with an initial point and a terminal point :      A vector.   We say that two vectors are equivalent , or equal , if they have the same magnitude and direction. We write this as .    Addition and Scalar Multiplication  Given two vectors , we can add them to get the new vector   So the vector is obtained by moving the tail of to the tip of and then drawing a vector from the tail of to the tip of .      Vector addition.   The sum of vectors can be computed using either the triangle law , illustrated above in , or the similar parallelogram law . We can also scale vectors using scalar multiplication : if is a scalar In other words, a number. then is defined to be the vector that has the same direction as if and the opposite direction if , but the magnitude is rescaled by the factor .   Vector subtraction  Using the previous graph, we can compute . We just need to scale the vectors properly and then add to .     Vector Components  Although it isn't too hard to add and scale vectors visually, it'll be beneficial to do the same algebraically. We can do so by breaking a vector down into its components . Consider a vector in in , and suppose if we move it to the origin then the tip of the vector is at the point . Then the components of are and , and we write   Note the use of brackets here, since technically we are saying that the vector is distinct from the point , even though they are closely related. We say that the position vector of a point is the vector whose components are the same as the coordinates of the point. Geometrically, the position vector of a point is the vector with its tail at the origin and its tip at .  So any vector in can be represented using components by . Similarly, any vector in can be represented as . Once you represent a vector in component form, addition and scalar multiplication is straightforward.   Vector addition with components  Let and . Then    Finding magnitudes of vectors can also be done by applying the distance formula from to the components of the vectors. The magnitude of a vector is denoted by or . For example, the magnitude of from the previous example is   Given a vector     A vector equation  We can use vectors to describe curves and surfaces. For example, let and . Let . Then the set of all points that satisfy the equation has a very nice description: it's just the sphere of radius centered at .    Finding components of vectors  Consider the points and . We want to find the components of the vector . We can do this by translating to the origin, which is done by subtracting from each coordinate of the corresponding coordinate of . So the vector is given by    In general, given and the vector is given by    Properties of Vector Addition and Scalar Multiplication  vectors properties of vector addition and scalar multiplication   Let be vectors and let be scalars. Then the following are true:    .                .            Basis Vectors and Unit Vectors  Every vector in can be written using three components: Each component corresponds to a coordinate axis, and we can rewrite as a linear combination of three different vectors, with each vector corresponding to a coordinate axis:  These vectors are important enough that we'll give them a name: the standard basis vectors .  Standard Basis Vectors  vectors standard basis   The standard basis for is the set , where     As we've seen, every vector in can be expressed using only these three vectors. The standard basis has two important properties: it is perpendicular (also called orthogonal ) and every vector in the collection has magnitude . In other words,   These vectors are essentially designed to capture the \"coordinate directions\", and are plotted below.      The standard basis.   This also leads us to our next definition.   Unit Vectors  vectors unit vectors   A vector is a unit vector if .    Unit vectors are useful if we just need to indicate a direction, and we don't care about magnitude. Every nonzero vector can be rescaled to a unit vector: just divide the vector by its norm.   Direction from one point to another  Consider the points and . Then we can find the unit vector indicating the direction from to . First, set   Then the unit vector that gives the direction from to is given by     A vector equation for the unit sphere  Using the concept of a unit vector, we can very easily describe the unit sphere The sphere of radius centered at the origin. using a vector equation. If we set , then the unit sphere is just the set of all solutions of      Applications  Many physical quantities have both a direction and a magnitude, like velocity, acceleration and forces. Vectors are ideally suited to measure these quantities.   Weight of a chain  A still chain is fixed to two ends of a level divide. The tension of the chain at each fixed end can be represented by vectors pointing away from the chain. Call these tension forces and . Suppose we know that each force vector makes an angle of with the ground on either side of the chain's fixed ends, and that the magnitude of each tension is 43 . Then we can use vector addition to find the weight of the chain.  Let denote the weight of the chain considered as a vector (so that it's pointing down). Since the chain is still, its resultant The sum of all forces acting on the chain. must be . So we can say that   or in other words   What we need to find is , which we can do without too much trouble if we can rewrite the tension vectors in component form. In fact, we have   So it follows that   Therefore the chain weighs .   SUGGESTED PROBLEMS: 1--17 odd, 23, 25, 27   "
},
{
  "id": "p-1150",
  "level": "2",
  "url": "section-vectors.html#p-1150",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector initial point terminal point "
},
{
  "id": "figure-vector-representation",
  "level": "2",
  "url": "section-vectors.html#figure-vector-representation",
  "type": "Figure",
  "number": "11.2.1",
  "title": "",
  "body": "    A vector.  "
},
{
  "id": "p-1151",
  "level": "2",
  "url": "section-vectors.html#p-1151",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent equal "
},
{
  "id": "figure-vector-addition",
  "level": "2",
  "url": "section-vectors.html#figure-vector-addition",
  "type": "Figure",
  "number": "11.2.2",
  "title": "",
  "body": "    Vector addition.  "
},
{
  "id": "p-1154",
  "level": "2",
  "url": "section-vectors.html#p-1154",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "triangle law parallelogram law scalar multiplication "
},
{
  "id": "example-vector-subtraction",
  "level": "2",
  "url": "section-vectors.html#example-vector-subtraction",
  "type": "Example",
  "number": "11.2.3",
  "title": "Vector subtraction.",
  "body": " Vector subtraction  Using the previous graph, we can compute . We just need to scale the vectors properly and then add to .  "
},
{
  "id": "p-1156",
  "level": "2",
  "url": "section-vectors.html#p-1156",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "components "
},
{
  "id": "p-1157",
  "level": "2",
  "url": "section-vectors.html#p-1157",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "position vector "
},
{
  "id": "example-vector-addition-with-components",
  "level": "2",
  "url": "section-vectors.html#example-vector-addition-with-components",
  "type": "Example",
  "number": "11.2.4",
  "title": "Vector addition with components.",
  "body": " Vector addition with components  Let and . Then   "
},
{
  "id": "example-a-vector-equation",
  "level": "2",
  "url": "section-vectors.html#example-a-vector-equation",
  "type": "Example",
  "number": "11.2.5",
  "title": "A vector equation.",
  "body": " A vector equation  We can use vectors to describe curves and surfaces. For example, let and . Let . Then the set of all points that satisfy the equation has a very nice description: it's just the sphere of radius centered at .  "
},
{
  "id": "example-finding-position-vectors",
  "level": "2",
  "url": "section-vectors.html#example-finding-position-vectors",
  "type": "Example",
  "number": "11.2.6",
  "title": "Finding components of vectors.",
  "body": " Finding components of vectors  Consider the points and . We want to find the components of the vector . We can do this by translating to the origin, which is done by subtracting from each coordinate of the corresponding coordinate of . So the vector is given by   "
},
{
  "id": "theorem-properties-of-vector-addition-and-scalar-multiplication",
  "level": "2",
  "url": "section-vectors.html#theorem-properties-of-vector-addition-and-scalar-multiplication",
  "type": "Theorem",
  "number": "11.2.7",
  "title": "Properties of Vector Addition and Scalar Multiplication.",
  "body": " Properties of Vector Addition and Scalar Multiplication  vectors properties of vector addition and scalar multiplication   Let be vectors and let be scalars. Then the following are true:    .                .         "
},
{
  "id": "p-1174",
  "level": "2",
  "url": "section-vectors.html#p-1174",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "definition-standard-basis-vectors",
  "level": "2",
  "url": "section-vectors.html#definition-standard-basis-vectors",
  "type": "Definition",
  "number": "11.2.8",
  "title": "Standard Basis Vectors.",
  "body": " Standard Basis Vectors  vectors standard basis   The standard basis for is the set , where    "
},
{
  "id": "p-1176",
  "level": "2",
  "url": "section-vectors.html#p-1176",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "figure-standard-basis",
  "level": "2",
  "url": "section-vectors.html#figure-standard-basis",
  "type": "Figure",
  "number": "11.2.9",
  "title": "",
  "body": "    The standard basis.  "
},
{
  "id": "definition-unit-vectors",
  "level": "2",
  "url": "section-vectors.html#definition-unit-vectors",
  "type": "Definition",
  "number": "11.2.10",
  "title": "Unit Vectors.",
  "body": " Unit Vectors  vectors unit vectors   A vector is a unit vector if .   "
},
{
  "id": "example-direction-from-one-point-to-another",
  "level": "2",
  "url": "section-vectors.html#example-direction-from-one-point-to-another",
  "type": "Example",
  "number": "11.2.11",
  "title": "Direction from one point to another.",
  "body": " Direction from one point to another  Consider the points and . Then we can find the unit vector indicating the direction from to . First, set   Then the unit vector that gives the direction from to is given by   "
},
{
  "id": "example-a-vector-equation-for-the-unit-sphere",
  "level": "2",
  "url": "section-vectors.html#example-a-vector-equation-for-the-unit-sphere",
  "type": "Example",
  "number": "11.2.12",
  "title": "A vector equation for the unit sphere.",
  "body": " A vector equation for the unit sphere  Using the concept of a unit vector, we can very easily describe the unit sphere The sphere of radius centered at the origin. using a vector equation. If we set , then the unit sphere is just the set of all solutions of   "
},
{
  "id": "example-weight-of-a-chain",
  "level": "2",
  "url": "section-vectors.html#example-weight-of-a-chain",
  "type": "Example",
  "number": "11.2.13",
  "title": "Weight of a chain.",
  "body": " Weight of a chain  A still chain is fixed to two ends of a level divide. The tension of the chain at each fixed end can be represented by vectors pointing away from the chain. Call these tension forces and . Suppose we know that each force vector makes an angle of with the ground on either side of the chain's fixed ends, and that the magnitude of each tension is 43 . Then we can use vector addition to find the weight of the chain.  Let denote the weight of the chain considered as a vector (so that it's pointing down). Since the chain is still, its resultant The sum of all forces acting on the chain. must be . So we can say that   or in other words   What we need to find is , which we can do without too much trouble if we can rewrite the tension vectors in component form. In fact, we have   So it follows that   Therefore the chain weighs .  "
},
{
  "id": "section-the-dot-product",
  "level": "1",
  "url": "section-the-dot-product.html",
  "type": "Section",
  "number": "11.3",
  "title": "The Dot Product",
  "body": " The Dot Product   Definition and Properties of the Dot Product  Suppose we're given two vectors. What we'd like to do is to come up with a measure of how much these vectors overlap. Such a measure may be useful for determining if forces are too close together, for example. So consider two vectors and as in the following diagram.      Vector overlap.   One way we can measure how much and overlap is to find , or equivalently since this is larger if and are more closely aligned. We are carefully ignoring the case where and point in opposite directions... From , we know that   This simplifies out to   The only part of this that could possibly depend on how closely and overlap is the middle term . So we'll (optimistically... for now) take what's inside the parentheses and use it as the measure we're looking for.   The Dot Product  dot product definition   Let and . The dot product of with , denoted is given by     The dot product is also sometimes called the scalar product (since it always produces a scalar) or the inner product in other settings.   Computing dot products  Let and . Then   It also doesn't matter what order we take the vectors in for the dot product: we get the same answer regardless. However, it does matter that we only use two vectors. The dot product takes two vectors and gives a scalar. In other words, it is impossible to take the dot product of more than two vectors at a time! So quantities such as are not meaningful.    Properties of the Dot Product  dot product properties   Let and be vectors, and let be a scalar. Then the following properties hold:                     Our goal was to define a measure for how much two given vectors align, or are correlated. The following result tells us that the dot product is actually a reasonable measure of this.   Geometry of the Dot Product  dot product geometry   Let and denote vectors, and let denote the angle between these vectors if the tails of both are moved to the origin. Then      Place both vectors and at the origin, and then draw the vector from the tip of to the tip of , like so:      Geometry of the dot product.   Then and form a triangle. We want to relate the dot product with the angle , so we'll start by using the Law of Cosines to get an equation involving . The Law of Cosines states that   Here's where the dot product comes in. Each squared magnitude can be rewritten as a dot product using , so in particular we have   Plugging this into gives us the following:   Which finally simplifies down to     It's usually easier to use to compute dot products. However, gives us extremely useful geometric information about the dot product. For example, we get the following result very quickly: two vectors and are perpendicular if and only if .    Checking orthogonality using the dot product  Let and Then we can say right away that these vectors are not orthogonal to each other since .    Finding angles between lines  Consider the lines and in , plotted below:      Angle between lines.   Suppose we want to find the acute angle these lines make with each other. We can do so by finding vectors and that point in the same directions as these lines. We'll start by finding the vector which points in the same direction as the line . To do so, we need two points on this line: and . So we can take to be   Similarly, since and both lie on , we can take   Then by we know that   So the acute angle between these two lines is given by      Projections  Consider two vectors and arranged as follows:      The vectors and .   Now draw a line from the tip of to the point on that is closest to the tip of ; such a line must be orthogonal to . This point on defines a new vector that we call the projection of onto ; we denote this vector by .      The projection of onto .   The projection can be thought of as the vector parallel to that best approximates . What we'd like to do now is to actually find a formula for this projection. If we let denote the acute angle between the vectors and , then   Since the projection must also be parallel to , then this is enough information to state exactly what should be: We can simplify this formula somewhat by making use of .   Vector Projection Formulas  vectors vector projection   Let and denote vectors in or . Then the projection of onto is given by      Finding vector projections  Let and . Then by the projection of onto is given by    Another example of vector projection is computing work done by a force. In particular, suppose we have a force and some displacement vector . We define the work done by along to be the product of the component of along times the distance moved. If we let denote the acute angle between and , then the work done is given by   which is exactly equal to by .   Finding work done by a force  Suppose a force moves a particle from the point to the point , where the force is measured in newtons and the distance in meters. We want to find the work done by this force on the particle. To do so, we need the displacement :   So the work done is   joules.   SUGGESTED PROBLEMS: 1--19 odd, 35, 39   "
},
{
  "id": "figure-vector-dot-product",
  "level": "2",
  "url": "section-the-dot-product.html#figure-vector-dot-product",
  "type": "Figure",
  "number": "11.3.1",
  "title": "",
  "body": "    Vector overlap.  "
},
{
  "id": "definition-the-dot-product",
  "level": "2",
  "url": "section-the-dot-product.html#definition-the-dot-product",
  "type": "Definition",
  "number": "11.3.2",
  "title": "The Dot Product.",
  "body": " The Dot Product  dot product definition   Let and . The dot product of with , denoted is given by    "
},
{
  "id": "p-1197",
  "level": "2",
  "url": "section-the-dot-product.html#p-1197",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar product inner product "
},
{
  "id": "example-computing-dot-products",
  "level": "2",
  "url": "section-the-dot-product.html#example-computing-dot-products",
  "type": "Example",
  "number": "11.3.3",
  "title": "Computing dot products.",
  "body": " Computing dot products  Let and . Then   It also doesn't matter what order we take the vectors in for the dot product: we get the same answer regardless. However, it does matter that we only use two vectors. The dot product takes two vectors and gives a scalar. In other words, it is impossible to take the dot product of more than two vectors at a time! So quantities such as are not meaningful.  "
},
{
  "id": "theorem-properties-of-the-dot-product",
  "level": "2",
  "url": "section-the-dot-product.html#theorem-properties-of-the-dot-product",
  "type": "Theorem",
  "number": "11.3.4",
  "title": "Properties of the Dot Product.",
  "body": " Properties of the Dot Product  dot product properties   Let and be vectors, and let be a scalar. Then the following properties hold:                    "
},
{
  "id": "theorem-geometry-of-the-dot-product",
  "level": "2",
  "url": "section-the-dot-product.html#theorem-geometry-of-the-dot-product",
  "type": "Theorem",
  "number": "11.3.5",
  "title": "Geometry of the Dot Product.",
  "body": " Geometry of the Dot Product  dot product geometry   Let and denote vectors, and let denote the angle between these vectors if the tails of both are moved to the origin. Then    "
},
{
  "id": "proof-15",
  "level": "2",
  "url": "section-the-dot-product.html#proof-15",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Place both vectors and at the origin, and then draw the vector from the tip of to the tip of , like so:      Geometry of the dot product.   Then and form a triangle. We want to relate the dot product with the angle , so we'll start by using the Law of Cosines to get an equation involving . The Law of Cosines states that   Here's where the dot product comes in. Each squared magnitude can be rewritten as a dot product using , so in particular we have   Plugging this into gives us the following:   Which finally simplifies down to   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "section-the-dot-product.html#remark-2",
  "type": "Remark",
  "number": "11.3.7",
  "title": "",
  "body": " It's usually easier to use to compute dot products. However, gives us extremely useful geometric information about the dot product. For example, we get the following result very quickly: two vectors and are perpendicular if and only if .  "
},
{
  "id": "example-checking-orthogonality-using-the-dot-product",
  "level": "2",
  "url": "section-the-dot-product.html#example-checking-orthogonality-using-the-dot-product",
  "type": "Example",
  "number": "11.3.8",
  "title": "Checking orthogonality using the dot product.",
  "body": " Checking orthogonality using the dot product  Let and Then we can say right away that these vectors are not orthogonal to each other since .  "
},
{
  "id": "example-finding-angles-between-lines",
  "level": "2",
  "url": "section-the-dot-product.html#example-finding-angles-between-lines",
  "type": "Example",
  "number": "11.3.9",
  "title": "Finding angles between lines.",
  "body": " Finding angles between lines  Consider the lines and in , plotted below:      Angle between lines.   Suppose we want to find the acute angle these lines make with each other. We can do so by finding vectors and that point in the same directions as these lines. We'll start by finding the vector which points in the same direction as the line . To do so, we need two points on this line: and . So we can take to be   Similarly, since and both lie on , we can take   Then by we know that   So the acute angle between these two lines is given by   "
},
{
  "id": "figure-orthogonal-projection-1",
  "level": "2",
  "url": "section-the-dot-product.html#figure-orthogonal-projection-1",
  "type": "Figure",
  "number": "11.3.11",
  "title": "",
  "body": "    The vectors and .  "
},
{
  "id": "p-1221",
  "level": "2",
  "url": "section-the-dot-product.html#p-1221",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projection of onto "
},
{
  "id": "figure-orthogonal-projection-2",
  "level": "2",
  "url": "section-the-dot-product.html#figure-orthogonal-projection-2",
  "type": "Figure",
  "number": "11.3.12",
  "title": "",
  "body": "    The projection of onto .  "
},
{
  "id": "theorem-vector-projection-formulas",
  "level": "2",
  "url": "section-the-dot-product.html#theorem-vector-projection-formulas",
  "type": "Theorem",
  "number": "11.3.13",
  "title": "Vector Projection Formulas.",
  "body": " Vector Projection Formulas  vectors vector projection   Let and denote vectors in or . Then the projection of onto is given by    "
},
{
  "id": "example-finding-vector-projections",
  "level": "2",
  "url": "section-the-dot-product.html#example-finding-vector-projections",
  "type": "Example",
  "number": "11.3.14",
  "title": "Finding vector projections.",
  "body": " Finding vector projections  Let and . Then by the projection of onto is given by   "
},
{
  "id": "example-finding-work-done-by-a-force",
  "level": "2",
  "url": "section-the-dot-product.html#example-finding-work-done-by-a-force",
  "type": "Example",
  "number": "11.3.15",
  "title": "Finding work done by a force.",
  "body": " Finding work done by a force  Suppose a force moves a particle from the point to the point , where the force is measured in newtons and the distance in meters. We want to find the work done by this force on the particle. To do so, we need the displacement :   So the work done is   joules.  "
},
{
  "id": "section-the-cross-product",
  "level": "1",
  "url": "section-the-cross-product.html",
  "type": "Section",
  "number": "11.4",
  "title": "The Cross Product",
  "body": " The Cross Product   The dot product, and in particular , gives us a good way to tell if two vectors are perpendicular. However, it says nothing about how to construct perpendicular vectors. The next vector operation, the cross product , is the tool we'll use for that goal.    Definition and Properties of the Cross Product   cross product definition  The Cross Product   Let and . Then the cross product of with is the new vector given by      Cross product of basis vectors  Let's start by computing using the definition. If we do so, we have   On the other hand, we also have . This points out the very important fact that order matters for cross products .   This formula is a lot to remember, so it's beneficial to find another way to express it. One way is by using determinants . In particular, if and , then    Another cross product   is useful to use if you're dealing with vectors that aren't as simple as the basis vectors . For example, let and . Then    Remember that we said the cross product is our tool for finding perpendicular vectors. So it might be nice if we made sure it actually did that. As a quick check, we'll compute and , with these vectors coming from . If we do so, we obtain   Since these dot products are zero, this means that both and are perpendicular to the cross product . This is also true in general.   Orthogonality of the Cross Product  cross product orthogonality    is always orthogonal to both and .    So the cross product always produces orthogonal vectors. To determine the direction of the cross product , we use the right-hand rule : sweep your right hand from to and stick your thumb up. Then is parallel to your thumb.  We would also like to know the magnitude of the cross product. We can just compute it using and find the magnitude using our usual formula. If we do so, we obtain (after a lot of simplifying!)   which reduces to the following result.   Magnitude of the Cross Product  cross product magnitude   Let denote the acute angle between the vectors and , so that . Then     So in particular, two nonzero vectors and are parallel (i.e. have ) if and only if .   Testing collinearity  We say that three points and are collinear if they all lie on the same line. Suppose we want to check if the points and are collinear or not. How can we do so? If we start by defining   then we can say that all three points lie on the same line if and only if and are parallel to each other. So we'll compute their cross product to get . Since these vectors are parallel, then the three given points must lie on the same line.   Another important property of the magnitude of the cross product is the following: is exactly equal to the area of the parallelogram determined by and .   Area of a triangle  Suppose that we want the area of the triangle with vertices and . To start, we need to find vectors that determine the triangle. We can use   Now, the triangle determined by and is precisely half of the parallelogram determined by these same vectors, so the area of this triangle is equal to . We can use Sage as in the cell below to find the cross product of these vectors. Doing so, we get So the area of the triangle with vertices and is      Properties of the Cross Product  cross product properties   Let be vectors and a scalar. Then the following properties are true:           The last item above is an important relationship between the cross product and dot product called the scalar triple product . There is an important geometric significance to this new product.   scalar triple product  Geometry of the Scalar Triple Product   Let and be vectors in . Then is equal to the volume of the parallelepiped determined by and .     Testing if vectors are coplanar  We say that three vectors and are coplanar if they can all lie in a single plane. For example, and are coplanar since they lie in the -plane, but and are not coplanar. Suppose we're given and . These vectors are coplanar if and only if the parallelepiped determined by these vectors has zero volume (i.e. is flat). Since   these vectors are not coplanar.    Another way to compute cross products  Using and the facts that   gives us another way to compute cross products that doesn't involve determinants. As an example, let and Then      Torque  Consider a force acting on a rigid body at some position . This force applies a turning affect to the body, that we measure by torque .   Torque  torque   The torque of a force acting at a position is defined to be the vector     As one example of torque, consider a wrench applied to a bolt. The force is exerted at the end of the wrench, and the torque is a vector that's parallel to the axis of rotation of the bolt. The torque is greater if the force is applied at a direction perpendicular (or nearly so) to that of the wrench, and smaller if the force is nearly parallel to the direction of the wrench. As a quick check, the torque is if the force is exactly parallel to the direction of the wrench, which makes sense: if we're pushing or pulling the wrench, the bolt won't rotate at all.   Torque and hex keys  A hex key (Allen wrench) with a short arm of length 27 and a long arm length of 154 is applied to a screw, with the short arm attached to the screw. To turn the screw, a force of 0.5 is applied to the long arm of the hex key turning the screw clockwise, and is exactly perpendicular to both the short arm and long arm of the hex key. We want to find the torque of this force on the screw.  One way we can do this is to imagine the screw sitting at the origin, and the hex key is (initially) in the -plane. Note that once the force is applied, it will begin to rotate the hex key out of the -plane. Now, the torque is defined by   where is the vector from the screw to the point where the force is applied. We can find without too much trouble: it's . To find the force , note that it's perpendicular to both the long arm and short arm of the screw. So a starting guess would be   Such a force would turn the screw clockwise, but it has the wrong magnitude. So we need to adjust it a bit: . So the torque is given by      SUGGESTED PROBLEMS: 1-19 odd, 29, 41   "
},
{
  "id": "p-1232",
  "level": "2",
  "url": "section-the-cross-product.html#p-1232",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cross product "
},
{
  "id": "definition-the-cross-product",
  "level": "2",
  "url": "section-the-cross-product.html#definition-the-cross-product",
  "type": "Definition",
  "number": "11.4.1",
  "title": "The Cross Product.",
  "body": " cross product definition  The Cross Product   Let and . Then the cross product of with is the new vector given by    "
},
{
  "id": "example-cross-product-of-basis-vectors",
  "level": "2",
  "url": "section-the-cross-product.html#example-cross-product-of-basis-vectors",
  "type": "Example",
  "number": "11.4.2",
  "title": "Cross product of basis vectors.",
  "body": " Cross product of basis vectors  Let's start by computing using the definition. If we do so, we have   On the other hand, we also have . This points out the very important fact that order matters for cross products .  "
},
{
  "id": "p-1236",
  "level": "2",
  "url": "section-the-cross-product.html#p-1236",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "determinants "
},
{
  "id": "example-another-cross-product",
  "level": "2",
  "url": "section-the-cross-product.html#example-another-cross-product",
  "type": "Example",
  "number": "11.4.3",
  "title": "Another cross product.",
  "body": " Another cross product   is useful to use if you're dealing with vectors that aren't as simple as the basis vectors . For example, let and . Then   "
},
{
  "id": "theorem-orthogonality-of-the-cross-product",
  "level": "2",
  "url": "section-the-cross-product.html#theorem-orthogonality-of-the-cross-product",
  "type": "Theorem",
  "number": "11.4.4",
  "title": "Orthogonality of the Cross Product.",
  "body": " Orthogonality of the Cross Product  cross product orthogonality    is always orthogonal to both and .   "
},
{
  "id": "p-1241",
  "level": "2",
  "url": "section-the-cross-product.html#p-1241",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "right-hand rule "
},
{
  "id": "theorem-magnitude-of-the-cross-product",
  "level": "2",
  "url": "section-the-cross-product.html#theorem-magnitude-of-the-cross-product",
  "type": "Theorem",
  "number": "11.4.5",
  "title": "Magnitude of the Cross Product.",
  "body": " Magnitude of the Cross Product  cross product magnitude   Let denote the acute angle between the vectors and , so that . Then    "
},
{
  "id": "example-testing-collinearity",
  "level": "2",
  "url": "section-the-cross-product.html#example-testing-collinearity",
  "type": "Example",
  "number": "11.4.6",
  "title": "Testing collinearity.",
  "body": " Testing collinearity  We say that three points and are collinear if they all lie on the same line. Suppose we want to check if the points and are collinear or not. How can we do so? If we start by defining   then we can say that all three points lie on the same line if and only if and are parallel to each other. So we'll compute their cross product to get . Since these vectors are parallel, then the three given points must lie on the same line.  "
},
{
  "id": "example-areas-of-triangles",
  "level": "2",
  "url": "section-the-cross-product.html#example-areas-of-triangles",
  "type": "Example",
  "number": "11.4.7",
  "title": "Area of a triangle.",
  "body": " Area of a triangle  Suppose that we want the area of the triangle with vertices and . To start, we need to find vectors that determine the triangle. We can use   Now, the triangle determined by and is precisely half of the parallelogram determined by these same vectors, so the area of this triangle is equal to . We can use Sage as in the cell below to find the cross product of these vectors. Doing so, we get So the area of the triangle with vertices and is   "
},
{
  "id": "theorem-properties-of-the-cross-product",
  "level": "2",
  "url": "section-the-cross-product.html#theorem-properties-of-the-cross-product",
  "type": "Theorem",
  "number": "11.4.8",
  "title": "Properties of the Cross Product.",
  "body": " Properties of the Cross Product  cross product properties   Let be vectors and a scalar. Then the following properties are true:          "
},
{
  "id": "p-1252",
  "level": "2",
  "url": "section-the-cross-product.html#p-1252",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar triple product "
},
{
  "id": "theorem-geometry-of-the-scalar-triple-product",
  "level": "2",
  "url": "section-the-cross-product.html#theorem-geometry-of-the-scalar-triple-product",
  "type": "Theorem",
  "number": "11.4.9",
  "title": "Geometry of the Scalar Triple Product.",
  "body": " scalar triple product  Geometry of the Scalar Triple Product   Let and be vectors in . Then is equal to the volume of the parallelepiped determined by and .   "
},
{
  "id": "example-testing-if-vectors-are-coplanar",
  "level": "2",
  "url": "section-the-cross-product.html#example-testing-if-vectors-are-coplanar",
  "type": "Example",
  "number": "11.4.10",
  "title": "Testing if vectors are coplanar.",
  "body": " Testing if vectors are coplanar  We say that three vectors and are coplanar if they can all lie in a single plane. For example, and are coplanar since they lie in the -plane, but and are not coplanar. Suppose we're given and . These vectors are coplanar if and only if the parallelepiped determined by these vectors has zero volume (i.e. is flat). Since   these vectors are not coplanar.  "
},
{
  "id": "example-another-way-to-compute-cross-products",
  "level": "2",
  "url": "section-the-cross-product.html#example-another-way-to-compute-cross-products",
  "type": "Example",
  "number": "11.4.11",
  "title": "Another way to compute cross products.",
  "body": " Another way to compute cross products  Using and the facts that   gives us another way to compute cross products that doesn't involve determinants. As an example, let and Then   "
},
{
  "id": "p-1258",
  "level": "2",
  "url": "section-the-cross-product.html#p-1258",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "torque "
},
{
  "id": "definition-torque",
  "level": "2",
  "url": "section-the-cross-product.html#definition-torque",
  "type": "Definition",
  "number": "11.4.12",
  "title": "Torque.",
  "body": " Torque  torque   The torque of a force acting at a position is defined to be the vector    "
},
{
  "id": "example-torque-and-hex-keys",
  "level": "2",
  "url": "section-the-cross-product.html#example-torque-and-hex-keys",
  "type": "Example",
  "number": "11.4.13",
  "title": "Torque and hex keys.",
  "body": " Torque and hex keys  A hex key (Allen wrench) with a short arm of length 27 and a long arm length of 154 is applied to a screw, with the short arm attached to the screw. To turn the screw, a force of 0.5 is applied to the long arm of the hex key turning the screw clockwise, and is exactly perpendicular to both the short arm and long arm of the hex key. We want to find the torque of this force on the screw.  One way we can do this is to imagine the screw sitting at the origin, and the hex key is (initially) in the -plane. Note that once the force is applied, it will begin to rotate the hex key out of the -plane. Now, the torque is defined by   where is the vector from the screw to the point where the force is applied. We can find without too much trouble: it's . To find the force , note that it's perpendicular to both the long arm and short arm of the screw. So a starting guess would be   Such a force would turn the screw clockwise, but it has the wrong magnitude. So we need to adjust it a bit: . So the torque is given by   "
},
{
  "id": "section-equations-of-lines-and-planes",
  "level": "1",
  "url": "section-equations-of-lines-and-planes.html",
  "type": "Section",
  "number": "11.5",
  "title": "Equations of Lines and Planes",
  "body": " Equations of Lines and Planes   Recall that the equation of a line in has the general form . However, this equation does not give a line in . In fact, it actually gives a plane, as we'll see! What we want to do now is find exactly how to describe a given line or plane.    Equations of Lines  First, suppose we have a line in as follows:      A line in .   Our goal is to find an equation that describes this line. Imagine that we have a vector pointing from the origin to the point , like so:      Tracing out using vectors.   Then we can get to every other point on the line by starting from . In particular, if is any vector parallel to , then must also be on the line :      Tracing out using vectors.   So to get all possible points on , we just need to look at all possible vectors , where is any vector parallel to . If we set , We don't actually have to pick , we just need to be parallel to . then   will trace out all points on as varies from to .   Parametric Equations of a Line  lines parametric equations in   If is a point on a line , and if is parallel to , then   traces out , where   We can also write this as the system of equations      Equation of a line with a given direction and point  Suppose we want to find the equation of a line that passes through and is perpendicular to . says that we only need to find the right choices for and in order to get the equation of such a line, and we can write down one of these right away:   So we just need to find . Since is orthogonal to , this means we want to be orthogonal to as well. A great way to find such a is to use the cross product. If is any nonzero vector, then must be orthogonal to both and , and in particular it must be orthogonal to . So we can take   So the equation of this line is   As varies, this will trace out our line.   When we begin working with line integrals, we'll need to know how to parameterize a line segment, so we'll discuss that now. Suppose we have a line segment between two points and . Let and denote the corresponding position vectors of these points (i.e. the vectors whose components are given by the coordinates of these points). Then the equation of the line between and is given by   To get the line segment we're actually looking for, we just need to restrict to the interval . So we can say that   traces out the line segment between and .    Equations of Planes  Now we move on to finding the equation of a plane. We'll try a vector approach to this like we did for lines, and this won't be too bad to do. We just need to keep the following in mind:   A plane in is uniquely determined by specifying a single point for it to pass through and a direction for it to face.   So in particular, vectors will provide a nice way to specify the direction of a plane, and any vector that does so must be orthogonal to the plane. If a (nonzero) vector is orthogonal to a given plane, then we call a normal vector to the plane. Now we can build up an equation of a given plane.  Let denote a point on the plane, and let be a normal vector to the plane. If is the position vector of any other point on the plane, then it must be true that , where is the position vector of . We can summarize this in the following theorem.   Vector and Scalar Equations of a Plane  planes vector and scalar equations   If is the position vector for some point on a plane with normal vector , then the position vector of any other point on the plane must satisfy the vector equation of the plane :   Equivalently, any point must also satisfy the equivalent scalar equation of the plane :      Equation of a plane orthogonal to a line  Consider the two lines in determined by the equations   We want to find the equation of the plane that contains the intersection of these two lines and is orthogonal to the first line. By , we need a point on the plane and a normal vector. Since the plane must contain the intersection of these two lines, that's our point. To find it, we'll set and go from there:   So the position vector of the point where these lines intersect is given by . We also need a normal vector to the plane, but this is easy to find: since the plane needs to be orthogonal to the first line, we can just take . So the equation of our plane is   or equivalently   This plane is plotted below using the Sage cell immediately after this example.    We can rewrite the equation of a plane in the form   A normal vector to this plane is given by .   Equation of a line orthogonal to a plane  Suppose we're given the plane , and we want to find the equation of the line orthogonal to this plane and passing through the point . Then the equation of this line is   where and is a vector parallel to the line. Since the line must be orthogonal to the plane, we can take . So the equation of this line is     Equation of a plane containing a line and a point  Suppose we're trying to find a plane containing the point and containing the line . To get the equation of this plane, we also need a normal vector to the plane. We can find the normal vector by computing the cross product of two vectors parallel to the plane.  First, since the plane contains the line the direction of this line must be parallel to the plane. So we know that is parallel to the plane. To get another vector parallel to this plane, we can use the given point and a second point in the plane, say , which comes from the line (just set ). So the vector must also be parallel to the plane. Hence a normal vector to this plane is   So an equation of this plane is given by     "
},
{
  "id": "figure-line-in-space",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#figure-line-in-space",
  "type": "Figure",
  "number": "11.5.1",
  "title": "",
  "body": "    A line in .  "
},
{
  "id": "figure-line-in-space-1",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#figure-line-in-space-1",
  "type": "Figure",
  "number": "11.5.2",
  "title": "",
  "body": "    Tracing out using vectors.  "
},
{
  "id": "figure-line-in-space-2",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#figure-line-in-space-2",
  "type": "Figure",
  "number": "11.5.3",
  "title": "",
  "body": "    Tracing out using vectors.  "
},
{
  "id": "theorem-parametric-equations-of-a-line",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#theorem-parametric-equations-of-a-line",
  "type": "Theorem",
  "number": "11.5.4",
  "title": "Parametric Equations of a Line.",
  "body": " Parametric Equations of a Line  lines parametric equations in   If is a point on a line , and if is parallel to , then   traces out , where   We can also write this as the system of equations    "
},
{
  "id": "example-equation-of-a-line-with-a-given-direction-and-point",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#example-equation-of-a-line-with-a-given-direction-and-point",
  "type": "Example",
  "number": "11.5.5",
  "title": "Equation of a line with a given direction and point.",
  "body": " Equation of a line with a given direction and point  Suppose we want to find the equation of a line that passes through and is perpendicular to . says that we only need to find the right choices for and in order to get the equation of such a line, and we can write down one of these right away:   So we just need to find . Since is orthogonal to , this means we want to be orthogonal to as well. A great way to find such a is to use the cross product. If is any nonzero vector, then must be orthogonal to both and , and in particular it must be orthogonal to . So we can take   So the equation of this line is   As varies, this will trace out our line.  "
},
{
  "id": "observation-vectors-and-planes",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#observation-vectors-and-planes",
  "type": "Observation",
  "number": "11.5.6",
  "title": "",
  "body": " A plane in is uniquely determined by specifying a single point for it to pass through and a direction for it to face.  "
},
{
  "id": "p-1284",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#p-1284",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal vector "
},
{
  "id": "theorem-vector-and-scalar-equations-of-a-plane",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#theorem-vector-and-scalar-equations-of-a-plane",
  "type": "Theorem",
  "number": "11.5.7",
  "title": "Vector and Scalar Equations of a Plane.",
  "body": " Vector and Scalar Equations of a Plane  planes vector and scalar equations   If is the position vector for some point on a plane with normal vector , then the position vector of any other point on the plane must satisfy the vector equation of the plane :   Equivalently, any point must also satisfy the equivalent scalar equation of the plane :    "
},
{
  "id": "example-equation-of-a-plane-ortho",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#example-equation-of-a-plane-ortho",
  "type": "Example",
  "number": "11.5.8",
  "title": "Equation of a plane orthogonal to a line.",
  "body": " Equation of a plane orthogonal to a line  Consider the two lines in determined by the equations   We want to find the equation of the plane that contains the intersection of these two lines and is orthogonal to the first line. By , we need a point on the plane and a normal vector. Since the plane must contain the intersection of these two lines, that's our point. To find it, we'll set and go from there:   So the position vector of the point where these lines intersect is given by . We also need a normal vector to the plane, but this is easy to find: since the plane needs to be orthogonal to the first line, we can just take . So the equation of our plane is   or equivalently   This plane is plotted below using the Sage cell immediately after this example.  "
},
{
  "id": "example-equation-of-a-line-orthogonal-to-a-plane",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#example-equation-of-a-line-orthogonal-to-a-plane",
  "type": "Example",
  "number": "11.5.9",
  "title": "Equation of a line orthogonal to a plane.",
  "body": " Equation of a line orthogonal to a plane  Suppose we're given the plane , and we want to find the equation of the line orthogonal to this plane and passing through the point . Then the equation of this line is   where and is a vector parallel to the line. Since the line must be orthogonal to the plane, we can take . So the equation of this line is   "
},
{
  "id": "example-equation-of-a-line-of-intersection-between-two-planes",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#example-equation-of-a-line-of-intersection-between-two-planes",
  "type": "Example",
  "number": "11.5.10",
  "title": "Equation of a plane containing a line and a point.",
  "body": " Equation of a plane containing a line and a point  Suppose we're trying to find a plane containing the point and containing the line . To get the equation of this plane, we also need a normal vector to the plane. We can find the normal vector by computing the cross product of two vectors parallel to the plane.  First, since the plane contains the line the direction of this line must be parallel to the plane. So we know that is parallel to the plane. To get another vector parallel to this plane, we can use the given point and a second point in the plane, say , which comes from the line (just set ). So the vector must also be parallel to the plane. Hence a normal vector to this plane is   So an equation of this plane is given by   "
},
{
  "id": "section-cylinders-and-quadric-surfaces",
  "level": "1",
  "url": "section-cylinders-and-quadric-surfaces.html",
  "type": "Section",
  "number": "11.6",
  "title": "Cylinders and Quadric Surfaces",
  "body": " Cylinders and Quadric Surfaces   Before we move on to doing calculus with vectors, we'll briefly take a look at more graphs in . In particular, we'll look at cylinders and quadric surfaces .    Cylinders   cylinders definition  Cylinders   A cylinder is the collection of all lines parallel to a given line and passing through some plane curve.    A basic example of a cylinder is the set of all lines passing through the unit circle in the -plane and parallel to the -axis. In , this is just the graph of . The graph of this cylinder is provided below.   The cylinder    For our purposes, equations that give a cylinder will often be missing a variable.   A sinusoidal cylinder  Consider the equation in . This equation is missing the variable , which suggests that the graph of this equation should be a cylinder. However, it's not going to look like the cylinders we may be used to at this point. In fact, this is just the set of all lines passing through the curve in the -plane and parallel to the -axis. It's graph is given below.     The cylinder     Another cylinder  Consider the cylinder given by the set of all lines passing through the plane curve in the -plane and parallel to the line in defined by the equation   What does this cylinder look like? Well, we can view it as essentially a \"sheet\" of lines cutting through the -plane at the line . If we try to imagine this, then this suggests that this cylinder should probably be a plane! In fact, this cylinder is exactly the plane containing the point and parallel to the line given above. As the line itself is parallel to the -plane, the resulting cylinder is just the -plane.     Quadric Surfaces  A quadric surface is any surface that is the graph of an equation of the form   A useful tool for graphing quadric surfaces (and others in ) is the concept of a trace , which is what the curve looks like in a plane parallel to the one the coordinate planes. This amounts to setting either, or equal to a constant and graphing the resulting equation.   An ellipsoid  Consider the equation   If we want to graph this, we can graph a few of it's traces to get an idea of what it looks like. Let's graph traces parallel the -plane to start. This means we'll set equal to different constants. For , we get the equation   which we rewrite as   This is an ellipse in the -plane, with minor axis and major axis . We can graph another trace, say in the -plane, we get   which is an ellipse with minor axis and major axis . Similarly, in the -plane we have an ellipse with minor axis and major axis . Putting these together gives us a rough idea of the shape of this surface, which we call an ellipsoid .    Region between surfaces  Suppose we want to sketch the region between the surface and the cylinder for . First, we can graph . If we look at the horizontal traces of this surface, we get circles of varying radii. As increases, the radii of these circles increase as well. This surface is just a cone! So we're describing the region of this cone bounded between and , and contained inside the cylinder .    The region contained between and     "
},
{
  "id": "p-1300",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#p-1300",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cylinders quadric surfaces "
},
{
  "id": "definition-cylinders",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#definition-cylinders",
  "type": "Definition",
  "number": "11.6.1",
  "title": "Cylinders.",
  "body": " cylinders definition  Cylinders   A cylinder is the collection of all lines parallel to a given line and passing through some plane curve.   "
},
{
  "id": "figure-59",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#figure-59",
  "type": "Figure",
  "number": "11.6.2",
  "title": "",
  "body": " The cylinder   "
},
{
  "id": "example-a-sinusoidal-cylinder",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#example-a-sinusoidal-cylinder",
  "type": "Example",
  "number": "11.6.3",
  "title": "A sinusoidal cylinder.",
  "body": " A sinusoidal cylinder  Consider the equation in . This equation is missing the variable , which suggests that the graph of this equation should be a cylinder. However, it's not going to look like the cylinders we may be used to at this point. In fact, this is just the set of all lines passing through the curve in the -plane and parallel to the -axis. It's graph is given below.  "
},
{
  "id": "figure-60",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#figure-60",
  "type": "Figure",
  "number": "11.6.4",
  "title": "",
  "body": " The cylinder   "
},
{
  "id": "example-another-cylinder",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#example-another-cylinder",
  "type": "Example",
  "number": "11.6.5",
  "title": "Another cylinder.",
  "body": " Another cylinder  Consider the cylinder given by the set of all lines passing through the plane curve in the -plane and parallel to the line in defined by the equation   What does this cylinder look like? Well, we can view it as essentially a \"sheet\" of lines cutting through the -plane at the line . If we try to imagine this, then this suggests that this cylinder should probably be a plane! In fact, this cylinder is exactly the plane containing the point and parallel to the line given above. As the line itself is parallel to the -plane, the resulting cylinder is just the -plane.  "
},
{
  "id": "p-1307",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#p-1307",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadric surface "
},
{
  "id": "p-1308",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#p-1308",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trace "
},
{
  "id": "example-an-ellipsoid",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#example-an-ellipsoid",
  "type": "Example",
  "number": "11.6.6",
  "title": "An ellipsoid.",
  "body": " An ellipsoid  Consider the equation   If we want to graph this, we can graph a few of it's traces to get an idea of what it looks like. Let's graph traces parallel the -plane to start. This means we'll set equal to different constants. For , we get the equation   which we rewrite as   This is an ellipse in the -plane, with minor axis and major axis . We can graph another trace, say in the -plane, we get   which is an ellipse with minor axis and major axis . Similarly, in the -plane we have an ellipse with minor axis and major axis . Putting these together gives us a rough idea of the shape of this surface, which we call an ellipsoid .  "
},
{
  "id": "example-region-between-surfaces",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#example-region-between-surfaces",
  "type": "Example",
  "number": "11.6.7",
  "title": "Region between surfaces.",
  "body": " Region between surfaces  Suppose we want to sketch the region between the surface and the cylinder for . First, we can graph . If we look at the horizontal traces of this surface, we get circles of varying radii. As increases, the radii of these circles increase as well. This surface is just a cone! So we're describing the region of this cone bounded between and , and contained inside the cylinder .  "
},
{
  "id": "figure-61",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#figure-61",
  "type": "Figure",
  "number": "11.6.8",
  "title": "",
  "body": " The region contained between and   "
},
{
  "id": "section-vector-functions",
  "level": "1",
  "url": "section-vector-functions.html",
  "type": "Section",
  "number": "11.7",
  "title": "Vector Functions",
  "body": " Vector Functions   Recall from that the equation of a line can be written as This is our first example of a vector function . Vector functions are functions of the form and graphs of vector functions are called space curves . We call the component functions of . We're interested in how these curves change, which means we're interested in how to do calculus on space curves. Although these curves live in , there's still only one independent variable: . So much of what we learned in Calculus I applies to space curves.    Limits with Space Curves  We can take limits with vector functions just as we can with regular functions.  Let . Then   In other words, if you want to take the limit of a vector function you can just take the limits of the component functions.   Limit of a vector function  Let   Suppose we want to find . Then we just need to take the limit of each component. So    Just as in Calculus I, we say that a vector function is continuous at if . In general, a vector function is continuous wherever all of its components functions are continuous.   A horiztonal helix  Let , and suppose we want to sketch this function. One way to do so is to plug in values for and connect the resulting points with a curve, but we can also do the following to get an idea of what this looks like. First, note that we have and . So , which means that this looks like the unit circle in the -plane, traced clockwise . Since we also have , this curve moves farther along the -axis as increases. If we trace this out, we get a helix (see the below plot). We can also see from the graph that it has no jumps or gaps, so is continuous everywhere.     Finding vector functions  Consider the cylinder and the surface , and suppose we want to trace out there intersection with a vector function. Here's how we can do this. First, we'll come up with the and components of . Since , this suggests that we should take   So that's two down, one to go. To get , we just need to use the equation . So   So our vector function is   This is also plotted below.      Derivatives with Space Curves  Now that we know how to take limits with vector functions, we can take derivatives as well.   Derivatives of Vector Functions  vector functions derivatives   Let denote a vector function. The derivative of is the new vector function given by   assuming that the limit exists. If this limit exists, we say that is differentiable .    If then is differentiable if and only if are, and Just as in Calculus I, the derivative represents how quickly a space curve is changing at some value of . However, derivatives of vector functions also carry information about the direction a curve is moving. We call the tangent vector to . In particular, is parallel to the space curve at , and its magnitude represents how quickly the curve is changing at . If we only care about direction, then we can define the unit tangent  , which is given by   We also have the usual ideas from Calculus I and physics regarding motion: velocity is the derivative of position and acceleration is the derivative of velocity.   Velocity on a saddle  A particle moves counterclockwise along the \"saddle\" . We want its velocity at . First, find to get   At , we have the velocity vector   So at the point , the space curve is parallel to the vector . In other words, the particle is moving in this direction at .    Motion along the saddle traced by in     Tangents on a circle  A particle moves along the circle in the -plane, counterclockwise and with an angular frequency of 5\\pi . Then we can assume that its position is described by   Suppose we want to find the direction this particle is going at any given moment. Then we can just find the unit tangent vector :    We also have derivative rules for vector functions, based off of the familiar formulas from Calculus I.   Vector Derivative Rules  vector functions derivative rules   Let and be differentiable vector functions, be a scalar and let be a differentiable (scalar) function. Then the following formulas hold:              Integrals with Space Curves  We can also integrate vector functions without too much trouble. Just as taking the derivative of a vector function reduces down to differentiating each component, integrating a vector function reduces down to integrating each component. If then   SUGGESTED PROBLEMS: 1, 3, 5, 7, 17, 21, 23, 37, 41, 45, 59, 61   "
},
{
  "id": "p-1315",
  "level": "2",
  "url": "section-vector-functions.html#p-1315",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector function space curves component functions "
},
{
  "id": "example-limit-of-a-vector-function",
  "level": "2",
  "url": "section-vector-functions.html#example-limit-of-a-vector-function",
  "type": "Example",
  "number": "11.7.1",
  "title": "Limit of a vector function.",
  "body": " Limit of a vector function  Let   Suppose we want to find . Then we just need to take the limit of each component. So   "
},
{
  "id": "p-1321",
  "level": "2",
  "url": "section-vector-functions.html#p-1321",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous "
},
{
  "id": "example-a-horiztonal-helix",
  "level": "2",
  "url": "section-vector-functions.html#example-a-horiztonal-helix",
  "type": "Example",
  "number": "11.7.2",
  "title": "A horiztonal helix.",
  "body": " A horiztonal helix  Let , and suppose we want to sketch this function. One way to do so is to plug in values for and connect the resulting points with a curve, but we can also do the following to get an idea of what this looks like. First, note that we have and . So , which means that this looks like the unit circle in the -plane, traced clockwise . Since we also have , this curve moves farther along the -axis as increases. If we trace this out, we get a helix (see the below plot). We can also see from the graph that it has no jumps or gaps, so is continuous everywhere.  "
},
{
  "id": "example-finding-vector-functions",
  "level": "2",
  "url": "section-vector-functions.html#example-finding-vector-functions",
  "type": "Example",
  "number": "11.7.3",
  "title": "Finding vector functions.",
  "body": " Finding vector functions  Consider the cylinder and the surface , and suppose we want to trace out there intersection with a vector function. Here's how we can do this. First, we'll come up with the and components of . Since , this suggests that we should take   So that's two down, one to go. To get , we just need to use the equation . So   So our vector function is   This is also plotted below.  "
},
{
  "id": "definition-derivatives-of-vector-functions",
  "level": "2",
  "url": "section-vector-functions.html#definition-derivatives-of-vector-functions",
  "type": "Definition",
  "number": "11.7.4",
  "title": "Derivatives of Vector Functions.",
  "body": " Derivatives of Vector Functions  vector functions derivatives   Let denote a vector function. The derivative of is the new vector function given by   assuming that the limit exists. If this limit exists, we say that is differentiable .   "
},
{
  "id": "p-1330",
  "level": "2",
  "url": "section-vector-functions.html#p-1330",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent vector unit tangent "
},
{
  "id": "example-velocity-on-a-saddle",
  "level": "2",
  "url": "section-vector-functions.html#example-velocity-on-a-saddle",
  "type": "Example",
  "number": "11.7.5",
  "title": "Velocity on a saddle.",
  "body": " Velocity on a saddle  A particle moves counterclockwise along the \"saddle\" . We want its velocity at . First, find to get   At , we have the velocity vector   So at the point , the space curve is parallel to the vector . In other words, the particle is moving in this direction at .  "
},
{
  "id": "figure-62",
  "level": "2",
  "url": "section-vector-functions.html#figure-62",
  "type": "Figure",
  "number": "11.7.6",
  "title": "",
  "body": " Motion along the saddle traced by in   "
},
{
  "id": "example-tangents-on-a-circle",
  "level": "2",
  "url": "section-vector-functions.html#example-tangents-on-a-circle",
  "type": "Example",
  "number": "11.7.7",
  "title": "Tangents on a circle.",
  "body": " Tangents on a circle  A particle moves along the circle in the -plane, counterclockwise and with an angular frequency of 5\\pi . Then we can assume that its position is described by   Suppose we want to find the direction this particle is going at any given moment. Then we can just find the unit tangent vector :   "
},
{
  "id": "theorem-vector-derivative-rules",
  "level": "2",
  "url": "section-vector-functions.html#theorem-vector-derivative-rules",
  "type": "Theorem",
  "number": "11.7.8",
  "title": "Vector Derivative Rules.",
  "body": " Vector Derivative Rules  vector functions derivative rules   Let and be differentiable vector functions, be a scalar and let be a differentiable (scalar) function. Then the following formulas hold:           "
},
{
  "id": "section-arc-length-and-curvature",
  "level": "1",
  "url": "section-arc-length-and-curvature.html",
  "type": "Section",
  "number": "11.8",
  "title": "Arc Length and Curvature",
  "body": " Arc Length and Curvature   Arc Length  Suppose some particle travels along the space curve given by for . What we'd like to do is determine how far the particle travels over this time interval. Recall that distance is just speed multiplied by time, and the speed of this particle is given by . So we can imagine that the distance traveled by this particle over some infinitesimal time interval to be given by . So adding up all of these distances from to should give us the arc length. This suggests (but does not prove!) the following formula for arc length:    gives the length of the space curve from to , assuming that the integral exists.   Arc length of a helix  Suppose we want to find the arc length of the helix from to . Then this is given by    One thing we'd like to do now is to parametrize a space curve with respect to arc length. Here's what we mean by this: given some with , we define its arc length function  by   If we can then solve for in terms of , this parametrizes the curve in terms of the arc length variable .   Reparametrizing a space curve  Suppose we're given the space curve   which starts at , (so starts at ) and we want to find the point that is units along the curve in the positive direction. Then we can do this by reparametrizing the curve using arc length. Here's how. First, we find the arc length function :   Since , we get . So   reparametrizes the space curve in terms of arc length. So the point on the curve that is units along in the positive direction is given by       Curvature  What we want to do now is measure how much a curve \"turns\" at some point. First, we call a space curve  smooth on some interval if for any in . Now, if we want to measure how quickly a curve is changing direction then we can use the unit tangent vector to measure this. In particular, the derivative of the unit tangent should provide a good measure of how quickly a curve turns. However, we don't want to let the specific parametrization of the curve affect this; in other words, the rate at which a curve is turning should not depend on the speed at which the curve is traveled. This leads to the following definition.   vector functions curvature  Curvature   Let denote a smooth curve on some interval . The curvature of on is defined to be the function given by   where is the unit tangent to the curve.     Computing a curvature  Consider the curve We'll try to find the curvature by making use of . First, we need to find so we can take its derivative:   Therefore   So the curvature is given by     Using curvature  Consider the curve once again. We'll try to find where this curve turns the fastest. To do this, we look at the curvature we found from :   This curve is turning the fastest precisely where the curvature is largest, and this happens at .   We can use to compute curvatures, but we've seen that it can be pretty awful. So we'd like to use another formula if we can; thankfully, there is another option.   vector functions curvature alternative formula  Alternative Curvature Formula   The curvature of in is given by     The formula in may look worse than the formula given in , but it has one significant advantage: we don't need to differentiate any magnitudes, which is required in the previous formula to compute .   Using the alternative formula   Let . We'll make use of to find We have   and so       Normal and Binormal Vectors  Consider a curve . Then the direction of the curve is given by the unit tangent vector . If we differentiate to get , we can view this vector as telling us the direction the curve is turning. This leads us to the concept of unit normal vectors to a space curve.   vector functions unit normal vector  Unit Normal Vectors   Consider a space curve given by . The unit normal vector is the vector given by   where is the derivative of the unit tangent vector.     Unit normal on a circle   Find the unit normal vector of the curve given by .    If we think of a particle moving along , then this particle is just moving along the unit circle. So at every point along this path, the particle should be turning toward the origin in order to stay on the unit circle. So at all points of the curve, should point towards the origin. To prove this, we'll use the formula above to find the unit normal:   So . So at every point of the circle, the unit normal points in the opposite direction of the corresponding position vector, i.e. it points towards the origin.    It's not clear from , but is always orthogonal to for any space curve\/vector function . We can use these two vectors to get another vector called the binormal vector .   vector functions binormal vector  Binormal Vector   Let be a vector function with unit tangent and unit normal . Then the unit binormal vector is the vector given by      "
},
{
  "id": "example-arc-length-of-a-helix",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#example-arc-length-of-a-helix",
  "type": "Example",
  "number": "11.8.1",
  "title": "Arc length of a helix.",
  "body": " Arc length of a helix  Suppose we want to find the arc length of the helix from to . Then this is given by   "
},
{
  "id": "p-1344",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#p-1344",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arc length function "
},
{
  "id": "example-reparametrizing-a-space-curve",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#example-reparametrizing-a-space-curve",
  "type": "Example",
  "number": "11.8.2",
  "title": "Reparametrizing a space curve.",
  "body": " Reparametrizing a space curve  Suppose we're given the space curve   which starts at , (so starts at ) and we want to find the point that is units along the curve in the positive direction. Then we can do this by reparametrizing the curve using arc length. Here's how. First, we find the arc length function :   Since , we get . So   reparametrizes the space curve in terms of arc length. So the point on the curve that is units along in the positive direction is given by   "
},
{
  "id": "p-1350",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#p-1350",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "smooth "
},
{
  "id": "definition-curvature",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#definition-curvature",
  "type": "Definition",
  "number": "11.8.3",
  "title": "Curvature.",
  "body": " vector functions curvature  Curvature   Let denote a smooth curve on some interval . The curvature of on is defined to be the function given by   where is the unit tangent to the curve.   "
},
{
  "id": "example-computing-a-curvature",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#example-computing-a-curvature",
  "type": "Example",
  "number": "11.8.4",
  "title": "Computing a curvature.",
  "body": " Computing a curvature  Consider the curve We'll try to find the curvature by making use of . First, we need to find so we can take its derivative:   Therefore   So the curvature is given by   "
},
{
  "id": "example-using-curvature",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#example-using-curvature",
  "type": "Example",
  "number": "11.8.5",
  "title": "Using curvature.",
  "body": " Using curvature  Consider the curve once again. We'll try to find where this curve turns the fastest. To do this, we look at the curvature we found from :   This curve is turning the fastest precisely where the curvature is largest, and this happens at .  "
},
{
  "id": "theorem-alternative-curvature-formula",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#theorem-alternative-curvature-formula",
  "type": "Theorem",
  "number": "11.8.6",
  "title": "Alternative Curvature Formula.",
  "body": " vector functions curvature alternative formula  Alternative Curvature Formula   The curvature of in is given by    "
},
{
  "id": "example-using-the-alternative-formula",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#example-using-the-alternative-formula",
  "type": "Example",
  "number": "11.8.7",
  "title": "Using the alternative formula.",
  "body": " Using the alternative formula   Let . We'll make use of to find We have   and so    "
},
{
  "id": "p-1363",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#p-1363",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit normal vectors "
},
{
  "id": "definition-unit-normal-vectors",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#definition-unit-normal-vectors",
  "type": "Definition",
  "number": "11.8.8",
  "title": "Unit Normal Vectors.",
  "body": " vector functions unit normal vector  Unit Normal Vectors   Consider a space curve given by . The unit normal vector is the vector given by   where is the derivative of the unit tangent vector.   "
},
{
  "id": "example-unit-normal-on-a-circle",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#example-unit-normal-on-a-circle",
  "type": "Example",
  "number": "11.8.9",
  "title": "Unit normal on a circle.",
  "body": " Unit normal on a circle   Find the unit normal vector of the curve given by .    If we think of a particle moving along , then this particle is just moving along the unit circle. So at every point along this path, the particle should be turning toward the origin in order to stay on the unit circle. So at all points of the curve, should point towards the origin. To prove this, we'll use the formula above to find the unit normal:   So . So at every point of the circle, the unit normal points in the opposite direction of the corresponding position vector, i.e. it points towards the origin.   "
},
{
  "id": "p-1369",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#p-1369",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binormal vector "
},
{
  "id": "definition-binormal-vector",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#definition-binormal-vector",
  "type": "Definition",
  "number": "11.8.10",
  "title": "Binormal Vector.",
  "body": " vector functions binormal vector  Binormal Vector   Let be a vector function with unit tangent and unit normal . Then the unit binormal vector is the vector given by    "
},
{
  "id": "section-motion-in-space",
  "level": "1",
  "url": "section-motion-in-space.html",
  "type": "Section",
  "number": "11.9",
  "title": "Motion in Space",
  "body": " Motion in Space  We now move on to examining motion in . First, recall that represents the position vector of some particle moving along a curve in space, then its velocity and acceleration are given by   The speed of the particle is just the magnitude of the velocity: .   Motion of a projectile   A projectile is fired out of a cannon with an initial speed of 200 to the west and with an angle of elevation of . If the particle was fired from a raised platform that is 50 off level ground, where does the particle land?    First, we'll assume that points northward and points straight up. Let's assume that the platform is directly above the origin. If we let denote the position (in meters) of the particle at time (in seconds), then we can say that . We also have   We can integrate up to find the position :   where is an arbitrary constant vector. To find it, we'll use our initial condition on :   So . Integrating once more to get the position, we have  . So .  To find where the particle lands, we just set the third component equal to zero and solve for to get   We need to choose the positive value for , and if we do so we see that when the projectile hits ground it's at position So the projectile is a little over 3.5 to the west.    To describe acceleration on a curve , it can be useful to break it down into tangential components and normal components .   vector function components of acceleration  Components of Acceleration   Let denote a space curve with unit tangent , unit normal and acceleration . The tangential component of acceleration is the scalar given by   The normal component is the scalar given by      represents how much of the acceleration is directed tangent to the curve , whereas represents how much of the acceleration is directed perpendicular to the tangent.   Components of acceleration for a projectile   Consider the particle from . At what point is the tangential component of acceleration greatest?    Since , the tangential component should be greatest when the projectile is fired or when it hits the ground, since these are the points where the direction of the trajectory most closely matches the direction of acceleration. To actually verify this, we'll find the tangential component using . Since   it follows that   So   We can make this as large as possible by making as large as possible, and this reaches its largest value at , when the projectile hits the ground.     "
},
{
  "id": "example-motion-of-a-projectile",
  "level": "2",
  "url": "section-motion-in-space.html#example-motion-of-a-projectile",
  "type": "Example",
  "number": "11.9.1",
  "title": "Motion of a projectile.",
  "body": " Motion of a projectile   A projectile is fired out of a cannon with an initial speed of 200 to the west and with an angle of elevation of . If the particle was fired from a raised platform that is 50 off level ground, where does the particle land?    First, we'll assume that points northward and points straight up. Let's assume that the platform is directly above the origin. If we let denote the position (in meters) of the particle at time (in seconds), then we can say that . We also have   We can integrate up to find the position :   where is an arbitrary constant vector. To find it, we'll use our initial condition on :   So . Integrating once more to get the position, we have  . So .  To find where the particle lands, we just set the third component equal to zero and solve for to get   We need to choose the positive value for , and if we do so we see that when the projectile hits ground it's at position So the projectile is a little over 3.5 to the west.   "
},
{
  "id": "p-1381",
  "level": "2",
  "url": "section-motion-in-space.html#p-1381",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangential components normal components "
},
{
  "id": "definition-components-of-acceleration",
  "level": "2",
  "url": "section-motion-in-space.html#definition-components-of-acceleration",
  "type": "Definition",
  "number": "11.9.2",
  "title": "Components of Acceleration.",
  "body": " vector function components of acceleration  Components of Acceleration   Let denote a space curve with unit tangent , unit normal and acceleration . The tangential component of acceleration is the scalar given by   The normal component is the scalar given by    "
},
{
  "id": "example-components-of-acceleration-for-a-projectile",
  "level": "2",
  "url": "section-motion-in-space.html#example-components-of-acceleration-for-a-projectile",
  "type": "Example",
  "number": "11.9.3",
  "title": "Components of acceleration for a projectile.",
  "body": " Components of acceleration for a projectile   Consider the particle from . At what point is the tangential component of acceleration greatest?    Since , the tangential component should be greatest when the projectile is fired or when it hits the ground, since these are the points where the direction of the trajectory most closely matches the direction of acceleration. To actually verify this, we'll find the tangential component using . Since   it follows that   So   We can make this as large as possible by making as large as possible, and this reaches its largest value at , when the projectile hits the ground.   "
},
{
  "id": "section-functions-of-several-independent-variables",
  "level": "1",
  "url": "section-functions-of-several-independent-variables.html",
  "type": "Section",
  "number": "12.1",
  "title": "Functions of Several Independent Variables",
  "body": " Functions of Several Independent Variables   Now we need to consider calculus with functions of more than one independent variable.    Functions of Two Variables  A function of several variables is a function that depends on more than one independent variable. One such example comes from differential equations, where quantities such as the temperature of a metal rod depend on both a position and a time .   functions of several variables two variables  Functions of Two Variables   A function of two variables is a rule or that assigns pairs of real numbers to real numbers. The domain is the set in for which the rule is defined. The range is the set in of all possible values of . are called independent variables and is called the dependent variable .     Domain of a function   Let . Find the domain of .    We'll break this down into pieces. First, since we're dealing with square roots in real numbers we need . Second, we need to make sure that . So the domain of is the set of all points in such that . In other words, the domain is just the inside of the circle of radius centered at the origin.    We can also graph functions of two variables by viewing as representing the height of some surface over the point in the -plane. In other words, just as represents a curve in , the equation represents a surface in .   Sketching a cone   Sketch the surface given by .    We need to sketch . We can start by squaring both sides to get . If we look at the right hand side, it looks a lot like an ellipse, so we'll try to work with that. Assuming , we can rewrite the equation to get For any given positive value of , this represents an ellipse that extends to in the direction and in the direction. So as increases, these ellipses increase in size as well.      Contour Plots   functions of several variables contour plots  Contour Plots   Given a function , a contour plot is the plot of an equation of the form for some constant .    A contour plot can be viewed as slicing a surface in with a level plane. The contour plot is exactly where the plane intersects the surface.   Contours on a paraboloid   What do the contours of look like?    If we pick different (nonnegative) values for , then all of the contours of take the form which turns into This is a family of ellipses.      SUGGESTED PROBLEMS: 1, 5, 11, 13   "
},
{
  "id": "definition-functions-of-two-variables",
  "level": "2",
  "url": "section-functions-of-several-independent-variables.html#definition-functions-of-two-variables",
  "type": "Definition",
  "number": "12.1.1",
  "title": "Functions of Two Variables.",
  "body": " functions of several variables two variables  Functions of Two Variables   A function of two variables is a rule or that assigns pairs of real numbers to real numbers. The domain is the set in for which the rule is defined. The range is the set in of all possible values of . are called independent variables and is called the dependent variable .   "
},
{
  "id": "example-domain-of-a-function",
  "level": "2",
  "url": "section-functions-of-several-independent-variables.html#example-domain-of-a-function",
  "type": "Example",
  "number": "12.1.2",
  "title": "Domain of a function.",
  "body": " Domain of a function   Let . Find the domain of .    We'll break this down into pieces. First, since we're dealing with square roots in real numbers we need . Second, we need to make sure that . So the domain of is the set of all points in such that . In other words, the domain is just the inside of the circle of radius centered at the origin.   "
},
{
  "id": "example-sketching-a-cone",
  "level": "2",
  "url": "section-functions-of-several-independent-variables.html#example-sketching-a-cone",
  "type": "Example",
  "number": "12.1.3",
  "title": "Sketching a cone.",
  "body": " Sketching a cone   Sketch the surface given by .    We need to sketch . We can start by squaring both sides to get . If we look at the right hand side, it looks a lot like an ellipse, so we'll try to work with that. Assuming , we can rewrite the equation to get For any given positive value of , this represents an ellipse that extends to in the direction and in the direction. So as increases, these ellipses increase in size as well.   "
},
{
  "id": "definition-contour-plots",
  "level": "2",
  "url": "section-functions-of-several-independent-variables.html#definition-contour-plots",
  "type": "Definition",
  "number": "12.1.4",
  "title": "Contour Plots.",
  "body": " functions of several variables contour plots  Contour Plots   Given a function , a contour plot is the plot of an equation of the form for some constant .   "
},
{
  "id": "example-contours-on-a-paraboloid",
  "level": "2",
  "url": "section-functions-of-several-independent-variables.html#example-contours-on-a-paraboloid",
  "type": "Example",
  "number": "12.1.5",
  "title": "Contours on a paraboloid.",
  "body": " Contours on a paraboloid   What do the contours of look like?    If we pick different (nonnegative) values for , then all of the contours of take the form which turns into This is a family of ellipses.   "
},
{
  "id": "section-limits-and-continuity",
  "level": "1",
  "url": "section-limits-and-continuity.html",
  "type": "Section",
  "number": "12.2",
  "title": "Limits and Continuity",
  "body": " Limits and Continuity   In this section we begin extending calculus concepts from one dimension to higher dimensions, starting with limits.    Limits  Just as functions of one variable have a notion of limit, the same can be said for functions of several variables. However, limits involving several variables tend to be more restrictive.   functions of several variables two variables limits  Limit of a Function of Two Variables   Let be some function and let be a point arbitrarily close to the domain of . We say that if gets arbitrarily close to as gets arbitrarily close to .    Here's why limits can be tricky in two dimensions: for the limit to exist, must approach the same value no matter how approaches !    Find or show that it doesn't exist.    First, we'll start simple. If we set then the limit becomes Likewise, if we set then the limit becomes From this, we might suspect that the limit actually exists. However, we need to make sure that this approaches along all possible paths to . Here's another path we can try: . If we do this, then the limit becomes Since the value that approaches as depends on how approaches , we can say that the limit does not exist.    In general, showing limits exist for functions of several variables can be tricky. However, occasionally we can use some tricks to make these problems more manageable.   Showing a limit exists   Find .    Since the inside of the limit depends on , this suggests that switching to polar coordinates might be beneficial. So let's try that! Here's why this helps us. If we look at our new limit, we see that it doesn't depend on at all. In other words, it doesn't depend on the direction we approach the origin from, just the distance from the origin . So and so the original limit also equals .      Continuous Functions  Now that we have the notion of limit, we can define continuous functions of two variables.   functions of several variables two variables continuity  Continuous Function of Two Variables   Let be a function of two variables. We say that is continuous at if If is continuous at all points in a set , we say that is continuous on .    We won't typically use the definition of continuity in this course. We'll just make of several common types of continuous functions:   Polynomials in two variables, such as , are continuous on .  Ratios of polynomials (i.e. rational functions ), such as , are continuous on their domains.  Compositions of the form , where and are continuous, are continuous wherever they are defined.    Limit of a continuous function   Let . Find     First, note that this is a composition of continuous functions, so should be continuous wherever it's defined. Since this is defined at , we can say that is continuous there as well and that       SUGGESTED PROBLEMS: 3, 11, 19, 23, 31   "
},
{
  "id": "definition-limit-of-a-function-of-two-variables",
  "level": "2",
  "url": "section-limits-and-continuity.html#definition-limit-of-a-function-of-two-variables",
  "type": "Definition",
  "number": "12.2.1",
  "title": "Limit of a Function of Two Variables.",
  "body": " functions of several variables two variables limits  Limit of a Function of Two Variables   Let be some function and let be a point arbitrarily close to the domain of . We say that if gets arbitrarily close to as gets arbitrarily close to .   "
},
{
  "id": "example-291",
  "level": "2",
  "url": "section-limits-and-continuity.html#example-291",
  "type": "Example",
  "number": "12.2.2",
  "title": "",
  "body": "  Find or show that it doesn't exist.    First, we'll start simple. If we set then the limit becomes Likewise, if we set then the limit becomes From this, we might suspect that the limit actually exists. However, we need to make sure that this approaches along all possible paths to . Here's another path we can try: . If we do this, then the limit becomes Since the value that approaches as depends on how approaches , we can say that the limit does not exist.   "
},
{
  "id": "example-showing-a-limit-exists",
  "level": "2",
  "url": "section-limits-and-continuity.html#example-showing-a-limit-exists",
  "type": "Example",
  "number": "12.2.3",
  "title": "Showing a limit exists.",
  "body": " Showing a limit exists   Find .    Since the inside of the limit depends on , this suggests that switching to polar coordinates might be beneficial. So let's try that! Here's why this helps us. If we look at our new limit, we see that it doesn't depend on at all. In other words, it doesn't depend on the direction we approach the origin from, just the distance from the origin . So and so the original limit also equals .   "
},
{
  "id": "definition-continuous-function-of-two-variables",
  "level": "2",
  "url": "section-limits-and-continuity.html#definition-continuous-function-of-two-variables",
  "type": "Definition",
  "number": "12.2.4",
  "title": "Continuous Function of Two Variables.",
  "body": " functions of several variables two variables continuity  Continuous Function of Two Variables   Let be a function of two variables. We say that is continuous at if If is continuous at all points in a set , we say that is continuous on .   "
},
{
  "id": "example-limit-of-a-continuous-function",
  "level": "2",
  "url": "section-limits-and-continuity.html#example-limit-of-a-continuous-function",
  "type": "Example",
  "number": "12.2.5",
  "title": "Limit of a continuous function.",
  "body": " Limit of a continuous function   Let . Find     First, note that this is a composition of continuous functions, so should be continuous wherever it's defined. Since this is defined at , we can say that is continuous there as well and that    "
},
{
  "id": "section-partial-derivatives",
  "level": "1",
  "url": "section-partial-derivatives.html",
  "type": "Section",
  "number": "12.3",
  "title": "Partial Derivatives",
  "body": " Partial Derivatives  Now that we know how to take limits for functions of two variables, we can define a notion of derivative for these functions as well, which we'll call the partial derivative . The main idea behind the partial derivative is to measure how a function changes as a single variable changes. Although the definition given is only for functions of two variables, it also extends to functions of many variables.   partial derivatives  Partial Derivatives   Let be a function of two variables. The partial derivative of with respect to is the function , assuming that this limit exists. Similarly, the partial derivative of with respect to is the function , assuming that this limit exists.    When computing partial derivatives with respect to , you just need to differentiate treating it as a function of alone and considering as a constant. Similarly, if you want to compute you differentiate with respect to and treat as constant.    Let . Find .    Since we need to find , we differentiate with respect to and treat as a constant:     Geometrically, represents the rate of change of the surface at the point in the direction, and a similar statement is true for .   Partial derivatives on the unit sphere   Let . Where is equal to ?    We can find this algebraically, but we'll try to answer this geometrically instead. First, note that is actually the top half of the unit sphere. If we're trying to find where is zero, then we need to find where this surface is \"flat\" when moving in the direction. If we think about this a bit, this should only occur when , i.e. along the -axis. At any other location on the unit sphere, moving in the -direction on the unit sphere requires going uphill or downhill, which means at these locations.    We can also find higher partial derivatives. For example, the second partial derivatives of a function are given by The last two derivatives are examples of mixed derivatives .   Mixed partials   Let where are constants. Find the mixed partials and .    We have as well as     In the last example the mixed partial were equal, but this is not always true. However, if is a function with \"nice\" mixed partial derivatives, then its mixed partials will be equal.   Clairaut's Theorem   Suppose that is defined on a disk that contains the point . If and are both continuous on , then In other words, the mixed partials are equal to each other wherever they happen to be continuous.    Partial derivatives are important for their use in partial differential equations (PDEs) , which are equations that involve partial derivatives of an unknown function .   The Wave Equation   One of the most important PDEs is the wave equation  which is used to model the displacement of a string at position and time . Determine if is a solution of the wave equation.    We need to plug into the PDE and check that it satisfies the PDE. Since it follows that . So satisfies the wave equation with , and so is a solution of the wave equation.     SUGGESTED PROBLEMS: 1, 3, 7, 11, 19, 31, 45, 49, 51, 53, 61   "
},
{
  "id": "definition-partial-derivatives",
  "level": "2",
  "url": "section-partial-derivatives.html#definition-partial-derivatives",
  "type": "Definition",
  "number": "12.3.1",
  "title": "Partial Derivatives.",
  "body": " partial derivatives  Partial Derivatives   Let be a function of two variables. The partial derivative of with respect to is the function , assuming that this limit exists. Similarly, the partial derivative of with respect to is the function , assuming that this limit exists.   "
},
{
  "id": "example-294",
  "level": "2",
  "url": "section-partial-derivatives.html#example-294",
  "type": "Example",
  "number": "12.3.2",
  "title": "",
  "body": "  Let . Find .    Since we need to find , we differentiate with respect to and treat as a constant:    "
},
{
  "id": "example-partial-derivatives-on-the-unit-sphere",
  "level": "2",
  "url": "section-partial-derivatives.html#example-partial-derivatives-on-the-unit-sphere",
  "type": "Example",
  "number": "12.3.3",
  "title": "Partial derivatives on the unit sphere.",
  "body": " Partial derivatives on the unit sphere   Let . Where is equal to ?    We can find this algebraically, but we'll try to answer this geometrically instead. First, note that is actually the top half of the unit sphere. If we're trying to find where is zero, then we need to find where this surface is \"flat\" when moving in the direction. If we think about this a bit, this should only occur when , i.e. along the -axis. At any other location on the unit sphere, moving in the -direction on the unit sphere requires going uphill or downhill, which means at these locations.   "
},
{
  "id": "p-1426",
  "level": "2",
  "url": "section-partial-derivatives.html#p-1426",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mixed derivatives "
},
{
  "id": "example-mixed-partials",
  "level": "2",
  "url": "section-partial-derivatives.html#example-mixed-partials",
  "type": "Example",
  "number": "12.3.4",
  "title": "Mixed partials.",
  "body": " Mixed partials   Let where are constants. Find the mixed partials and .    We have as well as    "
},
{
  "id": "theorem-clairaut-s-theorem",
  "level": "2",
  "url": "section-partial-derivatives.html#theorem-clairaut-s-theorem",
  "type": "Theorem",
  "number": "12.3.5",
  "title": "Clairaut’s Theorem.",
  "body": " Clairaut's Theorem   Suppose that is defined on a disk that contains the point . If and are both continuous on , then In other words, the mixed partials are equal to each other wherever they happen to be continuous.   "
},
{
  "id": "p-1431",
  "level": "2",
  "url": "section-partial-derivatives.html#p-1431",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial differential equations (PDEs) "
},
{
  "id": "example-the-wave-equation",
  "level": "2",
  "url": "section-partial-derivatives.html#example-the-wave-equation",
  "type": "Example",
  "number": "12.3.6",
  "title": "The Wave Equation.",
  "body": " The Wave Equation   One of the most important PDEs is the wave equation  which is used to model the displacement of a string at position and time . Determine if is a solution of the wave equation.    We need to plug into the PDE and check that it satisfies the PDE. Since it follows that . So satisfies the wave equation with , and so is a solution of the wave equation.   "
},
{
  "id": "section-tangent-planes-and-linear-approximations",
  "level": "1",
  "url": "section-tangent-planes-and-linear-approximations.html",
  "type": "Section",
  "number": "12.4",
  "title": "Tangent Planes and Linear Approximations",
  "body": " Tangent Planes and Linear Approximations   In Calculus I, derivatives are used to find linear approximations to functions of the form . We can use partial derivatives to do the same for functions with several independent variables.    Tangent Planes  Recall that if a curve is differentiable at a point , then it has a tangent line passing through The tangent line can be viewed as a linear approximation of the curve near the point . We can apply a similar ideas to surfaces . It turns out that if we have a surface and a point on the surface, then every tangent vector at this point is contained in a single plane called the tangent plane .  We'd like to find the equation of this plane. First, recall that every plane can be described by an equation of the form We can view and as given, so we just need to find . If we assume that , then we can rewrite this equation to obtain where and . If we set , then we have . This is the equation of a line tangent to the surface and parallel to the -axis, and so the slope of this line must be since the slope of a tangent line in the -direction gives the rate of change in the -direction. Similarly, Putting all of this together gives the following theorem.   Tangent Planes to Surfaces  tangent planes   Let be a surface and suppose that has continuous partial derivatives at the point . Then the tangent plane to the surface at the point is given by where .     Approximations by tangent planes   Find the tangent plane to at the point . Use this to approximate     The equation of the tangent plane is given by which we can rewrite as So at , we should have       Linear Approximations   shows that we can use tangent planes to approximate complicated functions. This leads us to the idea of a linear approximation, or linearization of a function of the form .   linearization  Linearization   Let be a function for which and are both continuous at a point . Then the linearization of at is the function given by     For well-behaved functions (i.e. functions that have continuous partial derivatives), if is close to the point .   Linearization of an exponential and a sinusoid   Let . Find the linearization of at the point .    By , the linearization is given by      can also be extended to functions with more than two variables.   Linearization in three variables   Let . Find the linearization at the point .    The formula we need to use now is       SUGGESTED PROBLEMS: 1, 15, 19   "
},
{
  "id": "p-1436",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#p-1436",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "tangent plane "
},
{
  "id": "theorem-tangent-planes-to-surfaces",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#theorem-tangent-planes-to-surfaces",
  "type": "Theorem",
  "number": "12.4.1",
  "title": "Tangent Planes to Surfaces.",
  "body": " Tangent Planes to Surfaces  tangent planes   Let be a surface and suppose that has continuous partial derivatives at the point . Then the tangent plane to the surface at the point is given by where .   "
},
{
  "id": "example-approximations-by-tangent-planes",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#example-approximations-by-tangent-planes",
  "type": "Example",
  "number": "12.4.2",
  "title": "Approximations by tangent planes.",
  "body": " Approximations by tangent planes   Find the tangent plane to at the point . Use this to approximate     The equation of the tangent plane is given by which we can rewrite as So at , we should have    "
},
{
  "id": "p-1441",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#p-1441",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearization "
},
{
  "id": "definition-linearization",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#definition-linearization",
  "type": "Definition",
  "number": "12.4.3",
  "title": "Linearization.",
  "body": " linearization  Linearization   Let be a function for which and are both continuous at a point . Then the linearization of at is the function given by    "
},
{
  "id": "example-linearization-of-an-exponential-and-a-sinusoid",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#example-linearization-of-an-exponential-and-a-sinusoid",
  "type": "Example",
  "number": "12.4.4",
  "title": "Linearization of an exponential and a sinusoid.",
  "body": " Linearization of an exponential and a sinusoid   Let . Find the linearization of at the point .    By , the linearization is given by    "
},
{
  "id": "example-linearization-in-three-variables",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#example-linearization-in-three-variables",
  "type": "Example",
  "number": "12.4.5",
  "title": "Linearization in three variables.",
  "body": " Linearization in three variables   Let . Find the linearization at the point .    The formula we need to use now is    "
},
{
  "id": "section-the-chain-rule-in-several-variables",
  "level": "1",
  "url": "section-the-chain-rule-in-several-variables.html",
  "type": "Section",
  "number": "12.5",
  "title": "The Chain Rule in Several Variables",
  "body": " The Chain Rule in Several Variables  Recall that from Calc I, we know that This is just the the chain rule, which tells us how to differentiate functions that depend on other functions. Or to think of it another way, it tells us how to differentiate variables like that depend on other variables like and . What we'd like to do now is to extend the chain rule to more complicated situations. We'll start with the following formula.   chain rule one independent variable  Chain Rule for One Independent Variable   Let be differentiable (so the partial derivatives and exist). If and both depend on (i.e. and ), then See .        The chain rule for one independent variable.    Using the multivariable chain rule   Let where Find .    First, let's try to simplify . If we do so, we get Now, to find we need to use the chain rule, which gives So     If we have more than one independent variable, then the situation becomes a little bit more complicated.   chain rule two independent variables  Chain Rule with Two Independent Variables   Let be differentiable, and suppose that and . Then         The chain rule for two independent variables.    Chain rule with two independent variables   Let , where Find .    A good way to tackle these problems is to set up a tree diagram like to list the dependencies between all of the variables. For , we get     Tree diagram for .  So we can say that      Chain rule from a tree diagram   Let , where , , and . Assume that all of these functions are differentiable. Find a formula for     We can set up a tree diagram as above to find the right formula for . If we do so, we obtain      SUGGESTED PROBLEMS: 1, 7, 11, 15, 21   "
},
{
  "id": "theorem-chain-rule-for-one-independent-variable",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#theorem-chain-rule-for-one-independent-variable",
  "type": "Theorem",
  "number": "12.5.1",
  "title": "Chain Rule for One Independent Variable.",
  "body": " chain rule one independent variable  Chain Rule for One Independent Variable   Let be differentiable (so the partial derivatives and exist). If and both depend on (i.e. and ), then See .   "
},
{
  "id": "figure-chain-rule-one-independent-variable",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#figure-chain-rule-one-independent-variable",
  "type": "Figure",
  "number": "12.5.2",
  "title": "",
  "body": "    The chain rule for one independent variable.  "
},
{
  "id": "example-using-multivariable-chain-rule",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#example-using-multivariable-chain-rule",
  "type": "Example",
  "number": "12.5.3",
  "title": "Using the multivariable chain rule.",
  "body": " Using the multivariable chain rule   Let where Find .    First, let's try to simplify . If we do so, we get Now, to find we need to use the chain rule, which gives So    "
},
{
  "id": "theorem-chain-rule-with-two-independent-variables",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#theorem-chain-rule-with-two-independent-variables",
  "type": "Theorem",
  "number": "12.5.4",
  "title": "Chain Rule with Two Independent Variables.",
  "body": " chain rule two independent variables  Chain Rule with Two Independent Variables   Let be differentiable, and suppose that and . Then    "
},
{
  "id": "figure-chain-rule-two-independent-variables",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#figure-chain-rule-two-independent-variables",
  "type": "Figure",
  "number": "12.5.5",
  "title": "",
  "body": "    The chain rule for two independent variables.  "
},
{
  "id": "example-chain-rule-two-variables",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#example-chain-rule-two-variables",
  "type": "Example",
  "number": "12.5.6",
  "title": "Chain rule with two independent variables.",
  "body": " Chain rule with two independent variables   Let , where Find .    A good way to tackle these problems is to set up a tree diagram like to list the dependencies between all of the variables. For , we get     Tree diagram for .  So we can say that    "
},
{
  "id": "example-chain-rule-from-a-tree-diagram",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#example-chain-rule-from-a-tree-diagram",
  "type": "Example",
  "number": "12.5.8",
  "title": "Chain rule from a tree diagram.",
  "body": " Chain rule from a tree diagram   Let , where , , and . Assume that all of these functions are differentiable. Find a formula for     We can set up a tree diagram as above to find the right formula for . If we do so, we obtain    "
},
{
  "id": "section-directional-derivatives-and-gradients",
  "level": "1",
  "url": "section-directional-derivatives-and-gradients.html",
  "type": "Section",
  "number": "12.6",
  "title": "Directional Derivatives and Gradients",
  "body": " Directional Derivatives and Gradients   For a differentiable function , the partial derivatives and give the rates of change of in the directions of the -axis and -axis, respectively. To put this another way, gives the rate of change of in the direction of the vector , and gives the rate of change in the direction of the vector . But we have infinitely many directions to work with. How can we find the rate of change of in any direction? We'll look at two tools to help us with this: directional derivatives and gradients.    The Directional Derivative  Suppose we have a function defined at a point . We want to find how quickly is changing in the direction of some unit vector . We can estimate this by moving from the point by some small increment , and evaluating at this new point, which is just . So the approximate rate of change in in the direction of is given by As , this should become exact. This leads us to our next definition.   directional derivative definition  Directional Derivative   The directional derivative of the function at the point in the direction of the vector is given by assuming this limit exists. As we mentioned above, and .    We have a definition for the directional derivative, but we don't want to have to use this all the time. So we'd like to get a more practical formula.   directional derivative formula  Computing the Directional Derivative   Let be a function whose partial derivatives and exist and are continuous. Let be a unit vector. Then exists, and is given by     First, set Then by the Calculus I definition of the derivative, On the other hand, if we set and , then . We can then find using the chain rule from to get So Therefore     The formula in extends to functions such as as well. We just need to include more partial derivatives.   Computing a directional derivative   Let . Find the directional derivative of in the direction of at the point .    We can use to find the directional derivative. However, there's something we need to watch out for here. Both and require using a unit vector , but our vector isn't a unit vector at all. So we need to normalize  to get a unit vector that is parallel to : Since we see that the directional derivative we need is given by       Gradients   shows that the partial derivatives of a function are important in computing the directional derivatives. This leads us to the concept of a gradient .   Gradient of a Function   Let be a function with partial derivatives . The gradient of is the vector .     Computing a gradient   Let . Compute .    We have     We can restate very quickly in terms of the gradient. In particular, if is a vector (not necessarily a unit vector) then    Directional derivative using the gradient   Is the function increasing or decreasing at and in the direction of .    We need to compute and check if it's positive or negative. Since and , it follows that Hence is increasing at and in the direction of .    The gradient is also useful for telling us where a function is increasing and decreasing the greatest. By , we can write where is the acute angle between and . It follows that We summarize this in the following theorem.   gradient direction of greatest increase\/decrease  Direction of Greatest Increase and Decrease   Let be a function with continuous first partial derivatives. Then points in the direction of greatest increase of , and the rate of maximum increase of is given by . Similarly, points in the direction of greatest decrease, and the rate of maximum decrease of is given by .     Finding the direction and rate of maximum decrease   Let . What is the direction and rate of greatest decrease of at the point ?    We need to compute , which gives So the direction of greatest decrease at is given by . The rate of maximum decrease in this direction is .      SUGGESTED PROBLEMS: 1, 3, 11, 15, 21   "
},
{
  "id": "definition-directional-derivative",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#definition-directional-derivative",
  "type": "Definition",
  "number": "12.6.1",
  "title": "Directional Derivative.",
  "body": " directional derivative definition  Directional Derivative   The directional derivative of the function at the point in the direction of the vector is given by assuming this limit exists. As we mentioned above, and .   "
},
{
  "id": "theorem-computing-the-directional-derivative",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#theorem-computing-the-directional-derivative",
  "type": "Theorem",
  "number": "12.6.2",
  "title": "Computing the Directional Derivative.",
  "body": " directional derivative formula  Computing the Directional Derivative   Let be a function whose partial derivatives and exist and are continuous. Let be a unit vector. Then exists, and is given by     First, set Then by the Calculus I definition of the derivative, On the other hand, if we set and , then . We can then find using the chain rule from to get So Therefore    "
},
{
  "id": "example-computing-a-directional-derivative",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#example-computing-a-directional-derivative",
  "type": "Example",
  "number": "12.6.3",
  "title": "Computing a directional derivative.",
  "body": " Computing a directional derivative   Let . Find the directional derivative of in the direction of at the point .    We can use to find the directional derivative. However, there's something we need to watch out for here. Both and require using a unit vector , but our vector isn't a unit vector at all. So we need to normalize  to get a unit vector that is parallel to : Since we see that the directional derivative we need is given by    "
},
{
  "id": "p-1470",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#p-1470",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gradient "
},
{
  "id": "definition-gradient-of-a-function",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#definition-gradient-of-a-function",
  "type": "Definition",
  "number": "12.6.4",
  "title": "Gradient of a Function.",
  "body": " Gradient of a Function   Let be a function with partial derivatives . The gradient of is the vector .   "
},
{
  "id": "example-computing-a-gradient",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#example-computing-a-gradient",
  "type": "Example",
  "number": "12.6.5",
  "title": "Computing a gradient.",
  "body": " Computing a gradient   Let . Compute .    We have    "
},
{
  "id": "example-directional-derivative-using-the-gradient",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#example-directional-derivative-using-the-gradient",
  "type": "Example",
  "number": "12.6.6",
  "title": "Directional derivative using the gradient.",
  "body": " Directional derivative using the gradient   Is the function increasing or decreasing at and in the direction of .    We need to compute and check if it's positive or negative. Since and , it follows that Hence is increasing at and in the direction of .   "
},
{
  "id": "theorem-direction-of-greatest-increase-and-decrease",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#theorem-direction-of-greatest-increase-and-decrease",
  "type": "Theorem",
  "number": "12.6.7",
  "title": "Direction of Greatest Increase and Decrease.",
  "body": " gradient direction of greatest increase\/decrease  Direction of Greatest Increase and Decrease   Let be a function with continuous first partial derivatives. Then points in the direction of greatest increase of , and the rate of maximum increase of is given by . Similarly, points in the direction of greatest decrease, and the rate of maximum decrease of is given by .   "
},
{
  "id": "example-finding-the-direction-and-rate-of-maximum-decrease",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#example-finding-the-direction-and-rate-of-maximum-decrease",
  "type": "Example",
  "number": "12.6.8",
  "title": "Finding the direction and rate of maximum decrease.",
  "body": " Finding the direction and rate of maximum decrease   Let . What is the direction and rate of greatest decrease of at the point ?    We need to compute , which gives So the direction of greatest decrease at is given by . The rate of maximum decrease in this direction is .   "
},
{
  "id": "section-extreme-values",
  "level": "1",
  "url": "section-extreme-values.html",
  "type": "Section",
  "number": "12.7",
  "title": "Extreme Values",
  "body": " Extreme Values   Finding the extreme values of a function remains in important goal for functions of several independent variables.    Local Maxima and Minima  One of the most important applications of the derivative in Calculus I is in finding local maxima and minima of functions . We'd like to extend this concept to functions of multiple variables, but first we need to define what local maxima and minima actually are in this new setting.   maxima and minima local  Local Maxima and Minima   We say that a function has a local maximum (respectively, local minimum) at if (respectively, ) for all points contained in some disk centered at .    Just as we used derivatives in Calculus I to find maxima and minima, we can use partial derivatives for that purpose here.   Derivatives at a Local Maximum or Minimum   Suppose that is differentiable, and has a local maximum or minimum at . Then      does not tell us if a differentiable function has a local maximum or minimum at , but it does tell us where to look. We call a critical point of if or if these partial derivatives fail to exist at .   Critical points of an exponential   Let . Find its critical points.    Find the critical points by solving and . Since then forces . Similarly, since then forces or . So the only points that satisfy both  and are So these must be our critical points.    We found the critical points in without too much trouble, but these are still not guaranteed to be local maxima or minima. To determine if they are, we need to use the second derivative test .   maxima and minima second derivative test  Second Derivative Test   Let be a differentiable function with continuous second partial derivatives, and let be a critical point of . Define to be Then we have the following possibilities:  If and , then is a local minimum.  If and , then is a local maximum.  If , then is a neither a local minimum nor local maximum. In this case we call a saddle point .  If , the test is inconclusive.      The quantity from is actually a determinant:    Local extrema of an exponential   Classify the critical points of the function from .    We have , and the critical points are and . We need to find . Since , we get and similarly At , we have and as well. So this is a local minimum. At , we still have , but now . So this is a local maximum.      Absolute Maxima and Minima  Even if a function has a local minimum at , there's no guarantee that this is the smallest value the function can take on its domain. A similar statement is also true for local maxima, which leads to the following definition.   maxima and minima absolute  Absolute Maxima and Minima   Let be a function defined on the set . We call the point an absolute minimum (respectively, absolute maximum ) if (respectively, ) for all points in .    As a first example, consider , which gives the top half of the unit sphere. Using critical points and the second derivative test, we can show that the origin is a local maximum. However, this method is blind to the absolute minimum values of , which occur at the boundary , where the sphere intersects the -plane. So this means we can't use critical points alone to find absolute maxima and minima, in general. However, the following theorem says that they'll get us most of the way there.   Extreme Value Theorem functions of several variables  Extreme Value Theorem   Let be a continuous function defined on a closed and bounded set . This means that is finite in size and that it includes its boundary. Then is guaranteed to have an absolute maximum and absolute minimum. Furthermore, these must occur either at a critical point or on the boundary of .     Absolute values on a triangle   Let . Find the absolute maxima and minima of on the triangle with vertices and .    We'll start off by finding any critical points. Since , we see that the only critical point is . Now we need to see what happens to on the edges of the triangle, and to do that we need to find equations for the edges. Let denote the edge from to , the edge from to and the edge from to . Then is given by the equation , is given by and is given by . So on we have , on we have and on we have . We can then set up the following table:   Absolute values on the boundary    edge   max  min                       Finally, at the critical point we have . So putting this all together, we can say that the absolute maximum of on this triangle is , and this is reached at . Similarly, the absolute minimum is , and this is reached at the origin.    Note that in , we don't actually determine if the critical point is a local maximum or minimum. We just compare the value reaches at the critical point with its maximum and minimum values on the boundary.   Absolute maxima and minima on a circular sector   Let and let Find the absolute maxima and minima of on .    First we'll find the critical point(s). If we compute , we get . This is if and only if , and if then this forces .  Now we need to determine the maximum and minimum values of on the boundary of . Let denote the line segment from to , the circular arc from to and the line segment from to . Then on we have , on we have and on we have . So the smallest value that takes on the boundary is , and the largest value is . So the absolute maximum is and the absolute minimum is .      SUGGESTED PROBLEMS: 1, 3, 13, 23   "
},
{
  "id": "definition-local-maxima-and-minima",
  "level": "2",
  "url": "section-extreme-values.html#definition-local-maxima-and-minima",
  "type": "Definition",
  "number": "12.7.1",
  "title": "Local Maxima and Minima.",
  "body": " maxima and minima local  Local Maxima and Minima   We say that a function has a local maximum (respectively, local minimum) at if (respectively, ) for all points contained in some disk centered at .   "
},
{
  "id": "theorem-derivatives-at-a-local-maximum-or-minimum",
  "level": "2",
  "url": "section-extreme-values.html#theorem-derivatives-at-a-local-maximum-or-minimum",
  "type": "Theorem",
  "number": "12.7.2",
  "title": "Derivatives at a Local Maximum or Minimum.",
  "body": " Derivatives at a Local Maximum or Minimum   Suppose that is differentiable, and has a local maximum or minimum at . Then    "
},
{
  "id": "p-1487",
  "level": "2",
  "url": "section-extreme-values.html#p-1487",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "critical point "
},
{
  "id": "example-critical-points-of-an-exponential",
  "level": "2",
  "url": "section-extreme-values.html#example-critical-points-of-an-exponential",
  "type": "Example",
  "number": "12.7.3",
  "title": "Critical points of an exponential.",
  "body": " Critical points of an exponential   Let . Find its critical points.    Find the critical points by solving and . Since then forces . Similarly, since then forces or . So the only points that satisfy both  and are So these must be our critical points.   "
},
{
  "id": "p-1490",
  "level": "2",
  "url": "section-extreme-values.html#p-1490",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second derivative test "
},
{
  "id": "theorem-second-derivative-test",
  "level": "2",
  "url": "section-extreme-values.html#theorem-second-derivative-test",
  "type": "Theorem",
  "number": "12.7.4",
  "title": "Second Derivative Test.",
  "body": " maxima and minima second derivative test  Second Derivative Test   Let be a differentiable function with continuous second partial derivatives, and let be a critical point of . Define to be Then we have the following possibilities:  If and , then is a local minimum.  If and , then is a local maximum.  If , then is a neither a local minimum nor local maximum. In this case we call a saddle point .  If , the test is inconclusive.     "
},
{
  "id": "example-local-extrema-of-an-exponential",
  "level": "2",
  "url": "section-extreme-values.html#example-local-extrema-of-an-exponential",
  "type": "Example",
  "number": "12.7.5",
  "title": "Local extrema of an exponential.",
  "body": " Local extrema of an exponential   Classify the critical points of the function from .    We have , and the critical points are and . We need to find . Since , we get and similarly At , we have and as well. So this is a local minimum. At , we still have , but now . So this is a local maximum.   "
},
{
  "id": "definition-absolute-maxima-and-minima",
  "level": "2",
  "url": "section-extreme-values.html#definition-absolute-maxima-and-minima",
  "type": "Definition",
  "number": "12.7.6",
  "title": "Absolute Maxima and Minima.",
  "body": " maxima and minima absolute  Absolute Maxima and Minima   Let be a function defined on the set . We call the point an absolute minimum (respectively, absolute maximum ) if (respectively, ) for all points in .   "
},
{
  "id": "theorem-extreme-value-multivariable",
  "level": "2",
  "url": "section-extreme-values.html#theorem-extreme-value-multivariable",
  "type": "Theorem",
  "number": "12.7.7",
  "title": "Extreme Value Theorem.",
  "body": " Extreme Value Theorem functions of several variables  Extreme Value Theorem   Let be a continuous function defined on a closed and bounded set . This means that is finite in size and that it includes its boundary. Then is guaranteed to have an absolute maximum and absolute minimum. Furthermore, these must occur either at a critical point or on the boundary of .   "
},
{
  "id": "example-absolute-values-on-a-triangle",
  "level": "2",
  "url": "section-extreme-values.html#example-absolute-values-on-a-triangle",
  "type": "Example",
  "number": "12.7.8",
  "title": "Absolute values on a triangle.",
  "body": " Absolute values on a triangle   Let . Find the absolute maxima and minima of on the triangle with vertices and .    We'll start off by finding any critical points. Since , we see that the only critical point is . Now we need to see what happens to on the edges of the triangle, and to do that we need to find equations for the edges. Let denote the edge from to , the edge from to and the edge from to . Then is given by the equation , is given by and is given by . So on we have , on we have and on we have . We can then set up the following table:   Absolute values on the boundary    edge   max  min                       Finally, at the critical point we have . So putting this all together, we can say that the absolute maximum of on this triangle is , and this is reached at . Similarly, the absolute minimum is , and this is reached at the origin.   "
},
{
  "id": "example-absolute-maxima-and-minima-on-a-circular-sector",
  "level": "2",
  "url": "section-extreme-values.html#example-absolute-maxima-and-minima-on-a-circular-sector",
  "type": "Example",
  "number": "12.7.10",
  "title": "Absolute maxima and minima on a circular sector.",
  "body": " Absolute maxima and minima on a circular sector   Let and let Find the absolute maxima and minima of on .    First we'll find the critical point(s). If we compute , we get . This is if and only if , and if then this forces .  Now we need to determine the maximum and minimum values of on the boundary of . Let denote the line segment from to , the circular arc from to and the line segment from to . Then on we have , on we have and on we have . So the smallest value that takes on the boundary is , and the largest value is . So the absolute maximum is and the absolute minimum is .   "
},
{
  "id": "section-lagrange-multipliers",
  "level": "1",
  "url": "section-lagrange-multipliers.html",
  "type": "Section",
  "number": "12.8",
  "title": "Lagrange Multipliers",
  "body": " Lagrange Multipliers   is useful for finding local maxima and minima of a function , but it's often the case where we have an additional restriction on the variables and , which we interpret as an equality for some constant . Geometrically, this reduces down to finding the maximum and minimum values of on the curve . This problem can be attacked algebraically using contours, as in the example below.   Constrained Optimization Using Contours   Estimate the minimum and maximum values of subject to the constraint .    The constraint is represented as a contour plot of . We can compare this with contours of , and any point where there two contours intersect is a point for which the constraint is satisfied.   An interactive contour plot of and .    Using these contours, we see that the maximum value of subject to appears to be , while the minimum value of subject to appears to be .    Although the graphical approach used in and specifically in is useful for estimating solutions of constrained optimization problems in two dimensions, it's neither exact nor easy to visualize in higher dimensions. We therefore want to determine an algebraic approach for solving these problems. In these cases, is not as useful because there's no guarantee that the critical points of will lie on the curve . For this scenario, we must use the method of Lagrange multipliers .   Lagrange multipliers  Method of Lagrange Multipliers   Suppose that and are both differentiable functions, and suppose that on the curve . To find the extreme values of subject to the constraint , perform the following steps:  Find all points such that , where is a constant we call the Lagrange multiplier .  Compute at all points from the first step and compare values to find any maxima or minima.        Maximizing volume   A lidless box may be made from 12 of material. What dimensions give the maximum volume?    If we denote the dimensions of the box by , then the function we need to maximize is . However, not all dimensions are valid since we're only allowed to use 12 of material. This means that the surface area of the box, which is given by , must be equal to . So our constraint is that , and because we have this constraint we'll try to solve this using .  To begin, we need to solve . Equivalently, we need to solve the system which turns into Now, we don't actually need to find a value for . We just need values for . If we multiply these equations by , and respectively, then we get or just We can also divide by , since there's no way could equal and satisfy the above equations (since are all positive). This gives us   The first two expressions in simplify to , while the first and third reduce to . So . But these variables also need to satisfy : Therefore , so we take (since we're dealing with dimensions). This also means that . So the point is therefore our candidate for the dimensions that maximize volume subject to the constraint .  In order to actually verify that is actually the largest possible volume we can obtain, we need to show that it's actually a maximum and not a minimum. This means we need to find another point that also satisfies , and show that it gives a smaller value for . One such point is just , and . So is actually a maximum value and not a minimum value.    The points we'll obtain using Lagrange multipliers will be either maxima or minima, but the method itself doesn't always tell us which is which. As in the last example, sometimes it's up to us to find that on our own.    Extreme values on a paraboloid   Find the absolute maxima and minima for over this disk .    First, recall from that the absolute maxima and minima of a differentiable function over a bounded set occur at either a critical point or somewhere on the boundary. So first, we need to find if has any critical points inside the disk. If we solve , then we quickly get that is a critical point, and hence a possible maximum or minimum value. The only other place we need to check is the boundary , and this is something we can use Lagrange multipliers for.  Set . Then we need to find the extreme values of subject to the constraint . The system of equations we need to solve is then The first equation is true if , but then this forces in the second equation. If we then plug into the constraint, this forces . So the case gives us two points to test: and . On the other hand, the second equation is true if . This then forces and , which gives us the points and . Finally, if , then this forces . But there's no way to satisfy the constraint if , so we discard this possibility.  So we have five points that we need to check, which we arrange in the following table:  Absolute values on the disk                            So the absolute minimum is , which occurs at the origin. The absolute maximum is , which occurs at the points .     Maximizing the volume of a prism within an ellipsoid   A rectangular prism, centered at the origin and with sides parallel to the coordinate planes, is inscribed within the ellipsoid . Find the dimensions of the prism that maximize the volume.    Let denote the corner of the prism located in the first octant. Then we want to maximize subject to the constraint . So we'll use the method of Lagrange multipliers again to get the system We can assume that are all positive (since we're trying to find the maximum volume), so we can go ahead and solve each equation for to get Setting the first two fractions equal and simplifying gives . Similarly, the second and third fractions give . So   Now we plug this into our constraint to get so . Since we're assuming that lies in the first octant, this means that , along with and . So To check that these values actually maximize , we can compare them with the point , which also satisfies the constraint . Since , this means that the dimensions that maximize the volume are given by     SUGGESTED PROBLEMS: 1-11 odd, 17, 19  "
},
{
  "id": "example-constrained-optimization-using-contours",
  "level": "2",
  "url": "section-lagrange-multipliers.html#example-constrained-optimization-using-contours",
  "type": "Example",
  "number": "12.8.1",
  "title": "Constrained Optimization Using Contours.",
  "body": " Constrained Optimization Using Contours   Estimate the minimum and maximum values of subject to the constraint .    The constraint is represented as a contour plot of . We can compare this with contours of , and any point where there two contours intersect is a point for which the constraint is satisfied.   An interactive contour plot of and .    Using these contours, we see that the maximum value of subject to appears to be , while the minimum value of subject to appears to be .   "
},
{
  "id": "p-1512",
  "level": "2",
  "url": "section-lagrange-multipliers.html#p-1512",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lagrange multipliers "
},
{
  "id": "algorithm-method-of-lagrange-multipliers",
  "level": "2",
  "url": "section-lagrange-multipliers.html#algorithm-method-of-lagrange-multipliers",
  "type": "Algorithm",
  "number": "12.8.3",
  "title": "Method of Lagrange Multipliers.",
  "body": " Lagrange multipliers  Method of Lagrange Multipliers   Suppose that and are both differentiable functions, and suppose that on the curve . To find the extreme values of subject to the constraint , perform the following steps:  Find all points such that , where is a constant we call the Lagrange multiplier .  Compute at all points from the first step and compare values to find any maxima or minima.     "
},
{
  "id": "example-maximizing-volume",
  "level": "2",
  "url": "section-lagrange-multipliers.html#example-maximizing-volume",
  "type": "Example",
  "number": "12.8.4",
  "title": "Maximizing volume.",
  "body": "  Maximizing volume   A lidless box may be made from 12 of material. What dimensions give the maximum volume?    If we denote the dimensions of the box by , then the function we need to maximize is . However, not all dimensions are valid since we're only allowed to use 12 of material. This means that the surface area of the box, which is given by , must be equal to . So our constraint is that , and because we have this constraint we'll try to solve this using .  To begin, we need to solve . Equivalently, we need to solve the system which turns into Now, we don't actually need to find a value for . We just need values for . If we multiply these equations by , and respectively, then we get or just We can also divide by , since there's no way could equal and satisfy the above equations (since are all positive). This gives us   The first two expressions in simplify to , while the first and third reduce to . So . But these variables also need to satisfy : Therefore , so we take (since we're dealing with dimensions). This also means that . So the point is therefore our candidate for the dimensions that maximize volume subject to the constraint .  In order to actually verify that is actually the largest possible volume we can obtain, we need to show that it's actually a maximum and not a minimum. This means we need to find another point that also satisfies , and show that it gives a smaller value for . One such point is just , and . So is actually a maximum value and not a minimum value.   "
},
{
  "id": "example-extreme-values-on-a-paraboloid",
  "level": "2",
  "url": "section-lagrange-multipliers.html#example-extreme-values-on-a-paraboloid",
  "type": "Example",
  "number": "12.8.5",
  "title": "Extreme values on a paraboloid.",
  "body": "  Extreme values on a paraboloid   Find the absolute maxima and minima for over this disk .    First, recall from that the absolute maxima and minima of a differentiable function over a bounded set occur at either a critical point or somewhere on the boundary. So first, we need to find if has any critical points inside the disk. If we solve , then we quickly get that is a critical point, and hence a possible maximum or minimum value. The only other place we need to check is the boundary , and this is something we can use Lagrange multipliers for.  Set . Then we need to find the extreme values of subject to the constraint . The system of equations we need to solve is then The first equation is true if , but then this forces in the second equation. If we then plug into the constraint, this forces . So the case gives us two points to test: and . On the other hand, the second equation is true if . This then forces and , which gives us the points and . Finally, if , then this forces . But there's no way to satisfy the constraint if , so we discard this possibility.  So we have five points that we need to check, which we arrange in the following table:  Absolute values on the disk                            So the absolute minimum is , which occurs at the origin. The absolute maximum is , which occurs at the points .   "
},
{
  "id": "example-maximizing-the-volume-of-a-prism-within-an-ellipsoid",
  "level": "2",
  "url": "section-lagrange-multipliers.html#example-maximizing-the-volume-of-a-prism-within-an-ellipsoid",
  "type": "Example",
  "number": "12.8.7",
  "title": "Maximizing the volume of a prism within an ellipsoid.",
  "body": " Maximizing the volume of a prism within an ellipsoid   A rectangular prism, centered at the origin and with sides parallel to the coordinate planes, is inscribed within the ellipsoid . Find the dimensions of the prism that maximize the volume.    Let denote the corner of the prism located in the first octant. Then we want to maximize subject to the constraint . So we'll use the method of Lagrange multipliers again to get the system We can assume that are all positive (since we're trying to find the maximum volume), so we can go ahead and solve each equation for to get Setting the first two fractions equal and simplifying gives . Similarly, the second and third fractions give . So   Now we plug this into our constraint to get so . Since we're assuming that lies in the first octant, this means that , along with and . So To check that these values actually maximize , we can compare them with the point , which also satisfies the constraint . Since , this means that the dimensions that maximize the volume are given by    "
},
{
  "id": "section-double-integrals-over-rectangles",
  "level": "1",
  "url": "section-double-integrals-over-rectangles.html",
  "type": "Section",
  "number": "13.1",
  "title": "Double Integrals over Rectangles",
  "body": " Double Integrals over Rectangles   We want to try to find the volume under the surface and above some rectangle in the -plane. If is a constant function, then this is easy: the resulting surface and the -plane then form a rectangular prism. If is more complicated, then we might not have a nice volume formula to use. However, we can steal an idea from Calculus I and try to approximate the volume by using simpler shapes; in this case, rectangular prisms.    Riemann Sums  Given a continuous function defined over the rectangle to approximate the volume under and above we'll divide the rectangle up into smaller rectangles. In particular, let's divide the intervals and into subintervals where If we let denote the subrectangle given by then the volume under and above is about equal to Hence the volume under and above should be about equal to If we replace with and send , this approximation becomes exact. This gives us the following definition.   double integrals over a rectangle  Double Integral Over a Rectangle   Let be a function defined over the rectangle . Then the double integral of over is defined to be If the limit exists, we say that is integrable over .    The geometric intuition behind the double integral is that it represents a volume under a surface. Negative values for a double integral indicate that a surface tends to lie below the -plane, while positive values indicate that the surface tends to lie above the -plane. Furthermore, continuous functions are integrable over any rectangle .   Double integrals by volume   Let and let Find .    If we graph , we get a triangular cylinder running along the axis. The volume of this cylinder over is just the area of the triangular \"base\" times the \"height,\" or just So       Fubini's Theorem  Now that we have a definition for the double integral, we want to find a better way of computing it. Thankfully, we do have such a method: Fubini's Theorem.   Fubini's Theorem   Let be continuous on the rectangle Then      Fubini's Theorem double integrals  Double integrals by Fubini's Theorem   Let and let Find .    We found this previously in , so we'll try it again using Fubini's Theorem and see if we get the same answer. By , we have     The double integral, like the Calculus I integral, derivative and partial derivatives, is linear . This means that you can break it up over addition and pull constants outside of it. In other words, if and are integrable and if is a constant, then    Double integral of a logarithm   Find     First, note that To find the first double integral on the right, first we integrate with respect to to get Now we can use -sub with and to get The same exact process shows that must also equal . Therefore       SUGGESTED PROBLEMS: 7, 9, 15, 19   "
},
{
  "id": "definition-double-integral-over-a-rectangle",
  "level": "2",
  "url": "section-double-integrals-over-rectangles.html#definition-double-integral-over-a-rectangle",
  "type": "Definition",
  "number": "13.1.1",
  "title": "Double Integral Over a Rectangle.",
  "body": " double integrals over a rectangle  Double Integral Over a Rectangle   Let be a function defined over the rectangle . Then the double integral of over is defined to be If the limit exists, we say that is integrable over .   "
},
{
  "id": "example-double-integrals-by-volume",
  "level": "2",
  "url": "section-double-integrals-over-rectangles.html#example-double-integrals-by-volume",
  "type": "Example",
  "number": "13.1.2",
  "title": "Double integrals by volume.",
  "body": " Double integrals by volume   Let and let Find .    If we graph , we get a triangular cylinder running along the axis. The volume of this cylinder over is just the area of the triangular \"base\" times the \"height,\" or just So    "
},
{
  "id": "theorem-fubini-s-theorem",
  "level": "2",
  "url": "section-double-integrals-over-rectangles.html#theorem-fubini-s-theorem",
  "type": "Theorem",
  "number": "13.1.3",
  "title": "Fubini’s Theorem.",
  "body": " Fubini's Theorem   Let be continuous on the rectangle Then    "
},
{
  "id": "example-double-integrals-by-fubini-s-theorem",
  "level": "2",
  "url": "section-double-integrals-over-rectangles.html#example-double-integrals-by-fubini-s-theorem",
  "type": "Example",
  "number": "13.1.4",
  "title": "Double integrals by Fubini’s Theorem.",
  "body": " Fubini's Theorem double integrals  Double integrals by Fubini's Theorem   Let and let Find .    We found this previously in , so we'll try it again using Fubini's Theorem and see if we get the same answer. By , we have    "
},
{
  "id": "example-double-integral-of-a-logarithm",
  "level": "2",
  "url": "section-double-integrals-over-rectangles.html#example-double-integral-of-a-logarithm",
  "type": "Example",
  "number": "13.1.5",
  "title": "Double integral of a logarithm.",
  "body": " Double integral of a logarithm   Find     First, note that To find the first double integral on the right, first we integrate with respect to to get Now we can use -sub with and to get The same exact process shows that must also equal . Therefore    "
},
{
  "id": "section-double-integrals-over-general-regions",
  "level": "1",
  "url": "section-double-integrals-over-general-regions.html",
  "type": "Section",
  "number": "13.2",
  "title": "Double Integrals over General Regions",
  "body": " Double Integrals over General Regions    shows how to define the double integral over a rectangle . Now we want to extend it to more general regions. We'll be skipping an issue with how to actually define such an integral in terms of Riemann sums, but the main idea is to take a function defined over some general region and then extend it to cover a rectangular region . Then we can just use to define this new integral as well.  Our primary tool for computing double integrals will still be . The main difficulty we'll encounter (aside from the usual integration issues) is how to properly set up limits for and for some region .    Integrating over a region defined by a parabola   Let and let be the region under the parabola , above the -axis and between and . Find .    The first step is to determine limits for and that describe this region. One possible description is the following: If we use this, we can write   We also could have described as the set of all points If we do this instead, we get By , this is guaranteed to equal . However, the actual process of computing the double integral using this choice for the limits is much more difficult, since we would need to integrate with respect to .    There are several important things we can take away from the above example:  Much of the difficulty in computing double integrals lies in finding limits that describe the region you're integrating over. In general, it's a good idea to sketch the region you're integrating over in order to figure out what your limits should be.  There can be multiple ways to describe a single region. This leads to multiple ways of setting up limits for double integrals over this region. If the integrand is continuous, then guarantees that these different methods will all produce the same value.  It's important to choose limits in such a way as to make computing the double integral more manageable.  When finding limits for a double integral, the outermost limits must be constant since the double integral must eventually simplify to a constant. In other words, we don't really have a notion of an \"indefinite\" double integral.     Reversing the order of integration   Compute .    If we try to integrate with respect to right away, then we're stuck: has no elementary antiderivative, which for us means that we can only integrate it using power series. However, it is continuous, so tells us that if we can integrate it with respect to first and then (i.e. replace with ), we'll still get the same answer. And integrating with respect to is actually very easy. This is called reversing the order of integration .  In order to change the order of integration, we need to change the limits. The region we're integrating over is the region If we sketch this, we see that this is just the region below the line , above the -axis and bounded from to . So we can also write Therefore     Sometimes, the order of integration can be chosen to make the limits of integration easier to set up.   Integrating over a Triangle   Integrate over the triangle with vertices and .    If we wanted to integrate with respect to first, we would have to break our double integral up into two different double integrals. This is because the limits for change halfway up the triangle. So it'd be better for us to integrate with respect to first. Since we have     Besides finding volumes, we can also use double integrals to find areas. If is some region in the -plane, then represents the volume under the surface and above . This is a solid with the constant height of , so the volume should be equal to the area of times . That is, is equal to the area of .  SUGGESTED PROBLEMS: 1, 5, 11, 13, 17, 21  "
},
{
  "id": "example-integrating-over-a-region-defined-by-a-parabola",
  "level": "2",
  "url": "section-double-integrals-over-general-regions.html#example-integrating-over-a-region-defined-by-a-parabola",
  "type": "Example",
  "number": "13.2.1",
  "title": "Integrating over a region defined by a parabola.",
  "body": " Integrating over a region defined by a parabola   Let and let be the region under the parabola , above the -axis and between and . Find .    The first step is to determine limits for and that describe this region. One possible description is the following: If we use this, we can write   We also could have described as the set of all points If we do this instead, we get By , this is guaranteed to equal . However, the actual process of computing the double integral using this choice for the limits is much more difficult, since we would need to integrate with respect to .   "
},
{
  "id": "example-reversing-the-order-of-integration",
  "level": "2",
  "url": "section-double-integrals-over-general-regions.html#example-reversing-the-order-of-integration",
  "type": "Example",
  "number": "13.2.2",
  "title": "Reversing the order of integration.",
  "body": " Reversing the order of integration   Compute .    If we try to integrate with respect to right away, then we're stuck: has no elementary antiderivative, which for us means that we can only integrate it using power series. However, it is continuous, so tells us that if we can integrate it with respect to first and then (i.e. replace with ), we'll still get the same answer. And integrating with respect to is actually very easy. This is called reversing the order of integration .  In order to change the order of integration, we need to change the limits. The region we're integrating over is the region If we sketch this, we see that this is just the region below the line , above the -axis and bounded from to . So we can also write Therefore    "
},
{
  "id": "example-integrating-over-a-triangle",
  "level": "2",
  "url": "section-double-integrals-over-general-regions.html#example-integrating-over-a-triangle",
  "type": "Example",
  "number": "13.2.3",
  "title": "Integrating over a Triangle.",
  "body": " Integrating over a Triangle   Integrate over the triangle with vertices and .    If we wanted to integrate with respect to first, we would have to break our double integral up into two different double integrals. This is because the limits for change halfway up the triangle. So it'd be better for us to integrate with respect to first. Since we have    "
},
{
  "id": "section-double-integrals-in-polar-coordinates",
  "level": "1",
  "url": "section-double-integrals-in-polar-coordinates.html",
  "type": "Section",
  "number": "13.3",
  "title": "Double Integrals in Polar Coordinates",
  "body": " Double Integrals in Polar Coordinates  Recall that the double integral was defined by first setting up a rectangular grid. The reason we used a rectangular grid was because we were working in Cartesian coordinates, so this made the most sense. If we're dealing with a circular region of integration, then using Cartesian coordinates is very awkward. However, polar coordinates from work very nicely with circular regions. So we want to find out how to set up double integrals using polar coordinates.  If we're given a function , then it's not too hard to convert this to the polar form . Just replace with and with . The tricky part with setting up double integrals in polar coordinates is how to deal with the area element  , which in Cartesian coordinates is just or . To figure out what should be in polar coordinates, i.e. in terms of and , consider the following \"polar rectangle\":     A polar grid.    Let represent the area of one of these sectors. If we let denote the distance from the origin to one sector, the length of a sector and the angle spanned by a sector, then we can say that If we assume that and are both small (which means the polar grid in is very fine), then So . As and approach , this becomes more exact, and we get .   double integrals polar coordinates  Double Integrals in Polar Coordinates   Let be a continuous function. Then and limits are chosen using polar coordinates.     Integrating over a circular sector   Find     If we sketch the region of integration, we see that it is the part of the unit circle in the third quadrant. So we'll switch to polar coordinates to solve this integral:     Polar coordinates may also be used, surprisingly, to evaluate the Gaussian integral  .   The Gaussian Integral   We have      First, let . We'll show that . We have Since , this gives     Volume of a sphere   Find the volume of a sphere of radius .    First, we can center the sphere at the origin without loss of generality. Such a sphere is given by . If we solve for , we get Let denote the disk of radius in the -plane centered at the origin. Then the volume of the sphere is     SUGGESTED PROBLEMS: 5, 13, 23  "
},
{
  "id": "p-1557",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#p-1557",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "area element "
},
{
  "id": "theorem-double-integrals-in-polar-coordinates",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#theorem-double-integrals-in-polar-coordinates",
  "type": "Theorem",
  "number": "13.3.2",
  "title": "Double Integrals in Polar Coordinates.",
  "body": " double integrals polar coordinates  Double Integrals in Polar Coordinates   Let be a continuous function. Then and limits are chosen using polar coordinates.   "
},
{
  "id": "example-integrating-over-a-circular-sector",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#example-integrating-over-a-circular-sector",
  "type": "Example",
  "number": "13.3.3",
  "title": "Integrating over a circular sector.",
  "body": " Integrating over a circular sector   Find     If we sketch the region of integration, we see that it is the part of the unit circle in the third quadrant. So we'll switch to polar coordinates to solve this integral:    "
},
{
  "id": "p-1562",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#p-1562",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian integral "
},
{
  "id": "theorem-the-gaussian-integral",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#theorem-the-gaussian-integral",
  "type": "Theorem",
  "number": "13.3.4",
  "title": "The Gaussian Integral.",
  "body": " The Gaussian Integral   We have    "
},
{
  "id": "proof-17",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#proof-17",
  "type": "Proof",
  "number": "13.3.1",
  "title": "",
  "body": " First, let . We'll show that . We have Since , this gives   "
},
{
  "id": "example-volume-of-a-sphere",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#example-volume-of-a-sphere",
  "type": "Example",
  "number": "13.3.5",
  "title": "Volume of a sphere.",
  "body": " Volume of a sphere   Find the volume of a sphere of radius .    First, we can center the sphere at the origin without loss of generality. Such a sphere is given by . If we solve for , we get Let denote the disk of radius in the -plane centered at the origin. Then the volume of the sphere is    "
},
{
  "id": "section-applications-of-double-integrals",
  "level": "1",
  "url": "section-applications-of-double-integrals.html",
  "type": "Section",
  "number": "13.4",
  "title": "Applications of Double Integrals",
  "body": " Applications of Double Integrals   Mass  Consider a thin plate in the -plane, say the region . If the density of the plate at is constant, say , then the mass of the plate is just the density times the area. On the other hand, if the density is varies then this becomes more complicated, and we must use double integrals. In particular, the mass of a plate contained in the region in the -plane with density is given by    Mass of a triangular plate   Find the mass of the plate contained in the triangular region bounded by lines and , given that the density is .    The mass is     The moments of the mass contained in and with density are defined as follows: If we let denote the total mass, then we also define the center of mass (or centroid ) to be the point , where    Center of mass of an annulus   Find the center of mass of the plate outside of the circle and inside the circle , with density .    The mass is given by The moments are and likewise . So the center of mass is .      SUGGESTED PROBLEMS: 3, 5, 13   "
},
{
  "id": "example-mass-of-a-triangular-plate",
  "level": "2",
  "url": "section-applications-of-double-integrals.html#example-mass-of-a-triangular-plate",
  "type": "Example",
  "number": "13.4.1",
  "title": "Mass of a triangular plate.",
  "body": " Mass of a triangular plate   Find the mass of the plate contained in the triangular region bounded by lines and , given that the density is .    The mass is    "
},
{
  "id": "p-1571",
  "level": "2",
  "url": "section-applications-of-double-integrals.html#p-1571",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moments center of mass centroid "
},
{
  "id": "example-center-of-mass-of-an-annulus",
  "level": "2",
  "url": "section-applications-of-double-integrals.html#example-center-of-mass-of-an-annulus",
  "type": "Example",
  "number": "13.4.2",
  "title": "Center of mass of an annulus.",
  "body": " Center of mass of an annulus   Find the center of mass of the plate outside of the circle and inside the circle , with density .    The mass is given by The moments are and likewise . So the center of mass is .   "
},
{
  "id": "section-triple-integrals",
  "level": "1",
  "url": "section-triple-integrals.html",
  "type": "Section",
  "number": "13.5",
  "title": "Triple Integrals",
  "body": " Triple Integrals  In , we have This represents the area under and over . Furthermore, gives the length of . In , we have This represents the volume under and above the region , where . Furthermore, gives the area of .  We can extend all of this to by introducing the concept of the triple integral .   triple integrals rectangular coordinates  Triple Integrals over a Rectangle   Let be defined on some region in . Then the triple integral of over is given by where . If the limit exists, we say that is integrable on .    For a double integral in rectangular coordinates, we have or . Similarly, for a triple integral in rectangular coordinates we have six different choices for :  Absolute values on the disk                Just as we can view as an infinitesimal length and as an infinitesimal area, represents an infinitesimal volume.  Our main use for will be to recognize a triple integral \"in the wild,\" but we won't actually use it to compute integrals. For this purpose, we still use Fubini's Theorem.   Fubini's Theorem triple integrals  Fubini's Theorem for Triple Integrals   Suppose is a continuous function on the closed and bounded region in . Then can be computed as an iterated integral, and the answer does not depend on the choice of .     A triple integral over a rectangular prism   Compute , where     We'll integrate using . Then we have     An unfortunate side effect of increasing the dimension for our integral is that we lose a little bit of geometric intuition. For instance, is indeed calculating a \"volume,\" but the volume in question is for a four dimensional region (the graph of over the rectangular prism). We can only really visualize the \"base\" of this region, which served as our region of integration in . Even so, the triple integral can still tell us important things about functions of three variables.   Finding an average value   Find the average value of the function over the region given in .    First, let denote the volume of . Then the average value of over is just     We can also compute triple integrals over more general regions.   Volume using triple integrals   Find the volume of the region bounded by the cylinder and the planes and .    If we let denote this region, then its volume is given by . The volume is then     When setting up limits for triple integrals, say using , then the limits on the innermost integral are typically functions of and , the limits on the middle integral are functions of and the limits on the outermost integral are constant. We can also change the order of integration to make an integral more tractable.   Changing the order of integration   Compute .    This looks awful to integrate with respect to first, so we'll try changing the order of integration. looks easiest, so let's try using instead. If we sketch the region, we see that the limits are actually the same, expect we just need to swap the middle and innermost integrals. So     SUGGESTED PROBLEMS: 5, 11, 13, 19, 25, 29  "
},
{
  "id": "p-1576",
  "level": "2",
  "url": "section-triple-integrals.html#p-1576",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "triple integral "
},
{
  "id": "definition-triple-integrals-over-a-rectangle",
  "level": "2",
  "url": "section-triple-integrals.html#definition-triple-integrals-over-a-rectangle",
  "type": "Definition",
  "number": "13.5.1",
  "title": "Triple Integrals over a Rectangle.",
  "body": " triple integrals rectangular coordinates  Triple Integrals over a Rectangle   Let be defined on some region in . Then the triple integral of over is given by where . If the limit exists, we say that is integrable on .   "
},
{
  "id": "table-volume-elements",
  "level": "2",
  "url": "section-triple-integrals.html#table-volume-elements",
  "type": "Table",
  "number": "13.5.2",
  "title": "Absolute values on the disk",
  "body": " Absolute values on the disk                "
},
{
  "id": "theorem-fubini-s-theorem-for-triple-integrals",
  "level": "2",
  "url": "section-triple-integrals.html#theorem-fubini-s-theorem-for-triple-integrals",
  "type": "Theorem",
  "number": "13.5.3",
  "title": "Fubini’s Theorem for Triple Integrals.",
  "body": " Fubini's Theorem triple integrals  Fubini's Theorem for Triple Integrals   Suppose is a continuous function on the closed and bounded region in . Then can be computed as an iterated integral, and the answer does not depend on the choice of .   "
},
{
  "id": "example-a-triple-integral-over-a-rectangular-prism",
  "level": "2",
  "url": "section-triple-integrals.html#example-a-triple-integral-over-a-rectangular-prism",
  "type": "Example",
  "number": "13.5.4",
  "title": "A triple integral over a rectangular prism.",
  "body": " A triple integral over a rectangular prism   Compute , where     We'll integrate using . Then we have    "
},
{
  "id": "example-finding-an-average-value",
  "level": "2",
  "url": "section-triple-integrals.html#example-finding-an-average-value",
  "type": "Example",
  "number": "13.5.5",
  "title": "Finding an average value.",
  "body": " Finding an average value   Find the average value of the function over the region given in .    First, let denote the volume of . Then the average value of over is just    "
},
{
  "id": "example-volume-using-triple-integrals",
  "level": "2",
  "url": "section-triple-integrals.html#example-volume-using-triple-integrals",
  "type": "Example",
  "number": "13.5.6",
  "title": "Volume using triple integrals.",
  "body": " Volume using triple integrals   Find the volume of the region bounded by the cylinder and the planes and .    If we let denote this region, then its volume is given by . The volume is then    "
},
{
  "id": "example-changing-the-order-of-integration",
  "level": "2",
  "url": "section-triple-integrals.html#example-changing-the-order-of-integration",
  "type": "Example",
  "number": "13.5.7",
  "title": "Changing the order of integration.",
  "body": " Changing the order of integration   Compute .    This looks awful to integrate with respect to first, so we'll try changing the order of integration. looks easiest, so let's try using instead. If we sketch the region, we see that the limits are actually the same, expect we just need to swap the middle and innermost integrals. So    "
},
{
  "id": "section-cylindrical-coordinates",
  "level": "1",
  "url": "section-cylindrical-coordinates.html",
  "type": "Section",
  "number": "13.6",
  "title": "Triple Integrals in Cylindrical Coordinates",
  "body": " Triple Integrals in Cylindrical Coordinates  In , we saw that introducing a new coordinate system made certain double integrals much easier to work with. The same idea works with triple integrals. The first such system we'll look at is cylindrical coordinates , which are useful for computing triple integrals over cylindrical regions. To convert Cartesian coordinates into cylindrical coordinates , simply replace with polar coordinates, and use . We leave alone.   Computing a triple integral over a cylinder   Let be the cylinder in with height and base given by the circle of radius centered at the origin, restricted to the first and second octants. Let . Compute .    Since we're dealing with a cylinder, we'll switch to cylindrical coordinates :      Cylindrical Volume   Find the volume of the region below the inverted cone and in the first and second octants.    First, let denote the region in question. Then . The graph of this region isn't too difficult to find, especially using resources such as CalcPlot3D , and is given by    However, this region is much easier to describe in cylindrical coorindates: . Hence the volume is .     Finding the Volume of the Unit Sphere   Find the volume of the unit sphere; that is, the sphere of radius centered at the origin.    The unit sphere is specified by the inequalities . It's much easier to describe this region using cylindrical coordinates: . By symmetry, the volume must be .    "
},
{
  "id": "p-1592",
  "level": "2",
  "url": "section-cylindrical-coordinates.html#p-1592",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cylindrical coordinates "
},
{
  "id": "example-computing-a-triple-integral-over-a-cylinder",
  "level": "2",
  "url": "section-cylindrical-coordinates.html#example-computing-a-triple-integral-over-a-cylinder",
  "type": "Example",
  "number": "13.6.1",
  "title": "Computing a triple integral over a cylinder.",
  "body": " Computing a triple integral over a cylinder   Let be the cylinder in with height and base given by the circle of radius centered at the origin, restricted to the first and second octants. Let . Compute .    Since we're dealing with a cylinder, we'll switch to cylindrical coordinates :    "
},
{
  "id": "example-cylindrical-volume",
  "level": "2",
  "url": "section-cylindrical-coordinates.html#example-cylindrical-volume",
  "type": "Example",
  "number": "13.6.2",
  "title": "Cylindrical Volume.",
  "body": " Cylindrical Volume   Find the volume of the region below the inverted cone and in the first and second octants.    First, let denote the region in question. Then . The graph of this region isn't too difficult to find, especially using resources such as CalcPlot3D , and is given by    However, this region is much easier to describe in cylindrical coorindates: . Hence the volume is .   "
},
{
  "id": "example-finding-the-volume-of-the-unit-sphere",
  "level": "2",
  "url": "section-cylindrical-coordinates.html#example-finding-the-volume-of-the-unit-sphere",
  "type": "Example",
  "number": "13.6.4",
  "title": "Finding the Volume of the Unit Sphere.",
  "body": " Finding the Volume of the Unit Sphere   Find the volume of the unit sphere; that is, the sphere of radius centered at the origin.    The unit sphere is specified by the inequalities . It's much easier to describe this region using cylindrical coordinates: . By symmetry, the volume must be .   "
},
{
  "id": "section-triple-integrals-in-spherical-coordinates",
  "level": "1",
  "url": "section-triple-integrals-in-spherical-coordinates.html",
  "type": "Section",
  "number": "13.7",
  "title": "Triple Integrals in Spherical Coordinates",
  "body": " Triple Integrals in Spherical Coordinates  Although cylindrical coordinates worked just fine in , it makes more sense to use a coordinate system based on spheres in this case. These situations call for spherical coordinates .  Just as any point in can be represented as a point in polar coordinates, we can represent any point in using the spherical coordinates . Here, is distance from the origin, is the angle the point makes with the -axis and is the angle the point makes with the -axis. In general, . corresponds to a point on the positive -axis, while corresponds to a point on the negative -axis.  Using triangles, we have the conversion formulas . Note that .  Just as constant limits in Cartesian coordinates correspond to rectangular regions of integration, constant limits in spherical coordinates give rise to spherical regions of integration.   Sketching a Spherical Region   Sketch the region determined by the spherical inequalities .    If we wish to compute integrals using spherical coordinates, then we must alter just as we did in . In particular, we use .   Volume of the Unit Sphere   Find the volume of the unit sphere .    The volume of can be found using the triple integral . Because of the spherical region of integration, this is best found using spherical coordinates. So .    The integrand can also suggest a transformation to spherical coordinates. In particular, integrands depending on are often made easier by converting to spherical.   Average Value Inside of the Unit Sphere   Let . Find the average value of over the unit sphere.    By definition, the average value of is given by . We'll follow the same strategy we used in to compute this integral. If we convert to spherical coordinates, we get .  So the average value of over is .    "
},
{
  "id": "p-1599",
  "level": "2",
  "url": "section-triple-integrals-in-spherical-coordinates.html#p-1599",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spherical coordinates "
},
{
  "id": "example-sketching-a-spherical-region",
  "level": "2",
  "url": "section-triple-integrals-in-spherical-coordinates.html#example-sketching-a-spherical-region",
  "type": "Example",
  "number": "13.7.1",
  "title": "Sketching a Spherical Region.",
  "body": " Sketching a Spherical Region   Sketch the region determined by the spherical inequalities .   "
},
{
  "id": "example-volume-of-the-unit-sphere",
  "level": "2",
  "url": "section-triple-integrals-in-spherical-coordinates.html#example-volume-of-the-unit-sphere",
  "type": "Example",
  "number": "13.7.2",
  "title": "Volume of the Unit Sphere.",
  "body": " Volume of the Unit Sphere   Find the volume of the unit sphere .    The volume of can be found using the triple integral . Because of the spherical region of integration, this is best found using spherical coordinates. So .   "
},
{
  "id": "example-average-value-inside-of-the-unit-sphere",
  "level": "2",
  "url": "section-triple-integrals-in-spherical-coordinates.html#example-average-value-inside-of-the-unit-sphere",
  "type": "Example",
  "number": "13.7.3",
  "title": "Average Value Inside of the Unit Sphere.",
  "body": " Average Value Inside of the Unit Sphere   Let . Find the average value of over the unit sphere.    By definition, the average value of is given by . We'll follow the same strategy we used in to compute this integral. If we convert to spherical coordinates, we get .  So the average value of over is .   "
},
{
  "id": "section-change-of-variables",
  "level": "1",
  "url": "section-change-of-variables.html",
  "type": "Section",
  "number": "13.8",
  "title": "Change of Variables",
  "body": " Change of Variables   The goal now is to determine a general method to change coordinates in multiple integrals. We'll start with double integrals.    Change of Variables in Double Integrals  Any change of coordinates involves a transformation between new variables and the original variables . We indicate this as follows: . In , the transformation was just .  So the goal behind integrating with change of variables is to find relate the integral , where is in the -plane, to a new integral , where is in the -plane. The main issue with such a transformation is one that we're familiar with from working with polar coordinates: in the first set of coordinates is not necessarily equal to in the new set of coordinates. In general we'll need a scaling factor that depends on and . As it turns out, the proper scaling factor comes from a determinant.   Jacobian  Jacobian   The Jacobian determinant or Jacobian of the coordinate transformation and is the quantity .     Jacobian in Polar Coordinates   Determine for the transformation to polar coordinates.    We have . Hence .    The Jacobian helps us in the following way: when making the change of variables , the area element becomes .    Compute for the transformation .    We need to get and in terms of and first. Since , it follows that . Hence .     Change of Variables in Two Dimensions   Find the volume of the region under the surface and over the region bounded by , and .    Both the integrand and the region of integration are awful here, but if we set and then the limits of integration become very simple: . See . The integrand gets better too: . So we can write . Essentially, we're moving from integrating over a diamond in the -plane to integrating over a square in the -plane. If we can find , we can start computing the integral.   The region of integration in the -plane and in the -plane.                 To find , we need to get in terms of in order to use . Since and , we get . Hence , and we have .     Integrating Between Hyperbolas   Compute where is the region bounded between the curves , , and in the first quadrant.    The integrand doesn't look too bad at first, but the region of integration would be very annoying here:        To deal with this, we'll use the change of variables and . The corresponding limits are and , and our integral becomes . We also get that the Jacobian is . Therefore .      Change of Variables in Triple Integrals  What we did in carries over directly to triple integrals and beyond. We just need to compute determinants instead of .   Volume of a Region Between Planes   Find the volume of the region bounded by the planes , , , , and .    If we let denote the region we're trying to find the volume of, then the volume of this region is just , where , and .     Transforming to a Spherical Region   Evaluate where .   Problem adapted from Exercise 21 on page 1137 in Thomas' Calculus , edition.     The region of integration is an ellipsoid, but if we can change this to a sphere then we can use spherical coordinates to help us. A quick fix is to set . Then these new variables satisfy and so the corresponding region in -space is the unit sphere.  Now we need to find . Thankfully, this is straightforward and we get . Therefore , which we can actually integrate without too much trouble.     "
},
{
  "id": "definition-jacobian",
  "level": "2",
  "url": "section-change-of-variables.html#definition-jacobian",
  "type": "Definition",
  "number": "13.8.1",
  "title": "Jacobian.",
  "body": " Jacobian  Jacobian   The Jacobian determinant or Jacobian of the coordinate transformation and is the quantity .   "
},
{
  "id": "example-jacobian-in-polar-coordinates",
  "level": "2",
  "url": "section-change-of-variables.html#example-jacobian-in-polar-coordinates",
  "type": "Example",
  "number": "13.8.2",
  "title": "Jacobian in Polar Coordinates.",
  "body": " Jacobian in Polar Coordinates   Determine for the transformation to polar coordinates.    We have . Hence .   "
},
{
  "id": "example-finding-jacobian",
  "level": "2",
  "url": "section-change-of-variables.html#example-finding-jacobian",
  "type": "Example",
  "number": "13.8.3",
  "title": "",
  "body": "  Compute for the transformation .    We need to get and in terms of and first. Since , it follows that . Hence .   "
},
{
  "id": "example-change-of-variables-in-two-dimensions",
  "level": "2",
  "url": "section-change-of-variables.html#example-change-of-variables-in-two-dimensions",
  "type": "Example",
  "number": "13.8.4",
  "title": "Change of Variables in Two Dimensions.",
  "body": " Change of Variables in Two Dimensions   Find the volume of the region under the surface and over the region bounded by , and .    Both the integrand and the region of integration are awful here, but if we set and then the limits of integration become very simple: . See . The integrand gets better too: . So we can write . Essentially, we're moving from integrating over a diamond in the -plane to integrating over a square in the -plane. If we can find , we can start computing the integral.   The region of integration in the -plane and in the -plane.                 To find , we need to get in terms of in order to use . Since and , we get . Hence , and we have .   "
},
{
  "id": "example-integrating-between-hyperbolas",
  "level": "2",
  "url": "section-change-of-variables.html#example-integrating-between-hyperbolas",
  "type": "Example",
  "number": "13.8.6",
  "title": "Integrating Between Hyperbolas.",
  "body": " Integrating Between Hyperbolas   Compute where is the region bounded between the curves , , and in the first quadrant.    The integrand doesn't look too bad at first, but the region of integration would be very annoying here:        To deal with this, we'll use the change of variables and . The corresponding limits are and , and our integral becomes . We also get that the Jacobian is . Therefore .   "
},
{
  "id": "example-volume-of-a-region-between-planes",
  "level": "2",
  "url": "section-change-of-variables.html#example-volume-of-a-region-between-planes",
  "type": "Example",
  "number": "13.8.8",
  "title": "Volume of a Region Between Planes.",
  "body": " Volume of a Region Between Planes   Find the volume of the region bounded by the planes , , , , and .    If we let denote the region we're trying to find the volume of, then the volume of this region is just , where , and .   "
},
{
  "id": "example-transforming-to-a-spherical-region",
  "level": "2",
  "url": "section-change-of-variables.html#example-transforming-to-a-spherical-region",
  "type": "Example",
  "number": "13.8.9",
  "title": "Transforming to a Spherical Region.",
  "body": " Transforming to a Spherical Region   Evaluate where .   Problem adapted from Exercise 21 on page 1137 in Thomas' Calculus , edition.     The region of integration is an ellipsoid, but if we can change this to a sphere then we can use spherical coordinates to help us. A quick fix is to set . Then these new variables satisfy and so the corresponding region in -space is the unit sphere.  Now we need to find . Thankfully, this is straightforward and we get . Therefore , which we can actually integrate without too much trouble.   "
},
{
  "id": "section-vector-fields",
  "level": "1",
  "url": "section-vector-fields.html",
  "type": "Section",
  "number": "14.1",
  "title": "Vector Fields",
  "body": " Vector Fields   Consider the function . The gradient of this function is . We can view the gradient as a function that assigns the vector to each point in the plane. We often draw these vectors so that they're rescaled or normalized.     Rescaled gradient field for .       Normalized gradient field .       Such functions are the main object of this section.    Vector Fields in and   vector fields  Vector Fields   A vector field is a function that assigns vectors to points.    A vector field on would look like . Similarly, a vector field on would be .   Sketching a Vector Field   Sketch .    Our sketch looks like      Note that the vectors in get extremely small as increases, so it may be better to represent the vector field using normalized vectors instead.     A Vector Field in   Sketch .    An interactive sketch from CalcPlot3D is given below:  A vector field in -space.     The vector field rotates about the -axis in the counterclockwise direction, flowing upwards if and flowing downwards if .    A velocity field is just a vector field that assigns velocities to points.   Particle Trapped in a Velocity Field   At time seconds, a particle is at position . The particle is within the velocity field . Estimate the particle's position at seconds.    Since the particle starts at , its velocity at time is given by . Hence the displacement of the particle from to seconds should be approximately , which gives the new position as roughly .    In , we're actually attempting to approximate the integral curve for that passes through . For velocity fields these are also known as streamlines , while for magnetic fields these can be known as field lines . For a velocity field, streamlines represent the valid paths a particle subject to the field can travel. By sketching , we see that every streamline of is parallel to .    Gradient Fields and Potential Functions  Recall that the gradient of a function is a kind of derivative of that function. Hence we can view the original scalar function , also known as the potential function , as a kind of antiderivative for the gradient . Since the gradient is also a vector field, called the gradient field , this means that vector fields that have a corresponding potential function should obey familiar rules from calculus. In particular, they obey a version of the Fundamental Theorem of Calculus (see ).   Gradient Field for Gravitational Potential   Find the gradient field associated to .    We can find the gradient field right away: .    A vector field is conservative if it can be written as the gradient of some corresponding potential function , that is, . In physics, the convention is often written .    SUGGESTED PROBLEMS: 3, 5, 7, 11, 13, 21, 31   "
},
{
  "id": "figure-the-gradient-field-for--grad-f-",
  "level": "2",
  "url": "section-vector-fields.html#figure-the-gradient-field-for--grad-f-",
  "type": "Figure",
  "number": "14.1.1",
  "title": "",
  "body": "    Rescaled gradient field for .       Normalized gradient field .       "
},
{
  "id": "definition-vector-fields",
  "level": "2",
  "url": "section-vector-fields.html#definition-vector-fields",
  "type": "Definition",
  "number": "14.1.2",
  "title": "Vector Fields.",
  "body": " vector fields  Vector Fields   A vector field is a function that assigns vectors to points.   "
},
{
  "id": "example-sketching-a-vector-field",
  "level": "2",
  "url": "section-vector-fields.html#example-sketching-a-vector-field",
  "type": "Example",
  "number": "14.1.3",
  "title": "Sketching a Vector Field.",
  "body": " Sketching a Vector Field   Sketch .    Our sketch looks like      Note that the vectors in get extremely small as increases, so it may be better to represent the vector field using normalized vectors instead.   "
},
{
  "id": "example-a-vector-field-in--rr-3-m-",
  "level": "2",
  "url": "section-vector-fields.html#example-a-vector-field-in--rr-3-m-",
  "type": "Example",
  "number": "14.1.5",
  "title": "A Vector Field in <span class=\"process-math\">\\(\\RR^{3}\\)<\/span>.",
  "body": " A Vector Field in   Sketch .    An interactive sketch from CalcPlot3D is given below:  A vector field in -space.     The vector field rotates about the -axis in the counterclockwise direction, flowing upwards if and flowing downwards if .   "
},
{
  "id": "p-1642",
  "level": "2",
  "url": "section-vector-fields.html#p-1642",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "velocity field "
},
{
  "id": "example-particle-in-velocity-field",
  "level": "2",
  "url": "section-vector-fields.html#example-particle-in-velocity-field",
  "type": "Example",
  "number": "14.1.7",
  "title": "Particle Trapped in a Velocity Field.",
  "body": " Particle Trapped in a Velocity Field   At time seconds, a particle is at position . The particle is within the velocity field . Estimate the particle's position at seconds.    Since the particle starts at , its velocity at time is given by . Hence the displacement of the particle from to seconds should be approximately , which gives the new position as roughly .   "
},
{
  "id": "p-1645",
  "level": "2",
  "url": "section-vector-fields.html#p-1645",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral curve streamlines field lines "
},
{
  "id": "p-1646",
  "level": "2",
  "url": "section-vector-fields.html#p-1646",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "potential function gradient field "
},
{
  "id": "example-gradient-field-for-gravitational-potential",
  "level": "2",
  "url": "section-vector-fields.html#example-gradient-field-for-gravitational-potential",
  "type": "Example",
  "number": "14.1.8",
  "title": "Gradient Field for Gravitational Potential.",
  "body": " Gradient Field for Gravitational Potential   Find the gradient field associated to .    We can find the gradient field right away: .   "
},
{
  "id": "p-1649",
  "level": "2",
  "url": "section-vector-fields.html#p-1649",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conservative "
},
{
  "id": "section-line-integrals",
  "level": "1",
  "url": "section-line-integrals.html",
  "type": "Section",
  "number": "14.2",
  "title": "Line Integrals",
  "body": " Line Integrals   In this section we move on to computing integrals over curves in and .    Scalar Line Integrals  Suppose we wish to find the mass of a wire given by a curve in the -plane. If the density is a constant then this is simple: the mass is just where denotes the length of the wire.  Now suppose that the density varies, and is now a function . Then we can estimate the mass of the wire by chopping the wire into smaller segments, each of length , choosing points from each segment, and then computing . If we send the approximation becomes exact, and defines the scalar line integral of along .   line integrals scalar  Scalar Line Integral   Suppose that is a smooth curve in and that the function is continuous on . The scalar line integral of along is the number defined to be .   An analogous definition holds for curves in . We can also replace the assumption that is smooth with the assumption that is rectifiable , which (roughly) means it has a well-defined length.     Geometrically, represents the area under and above .  If is nice enough (i.e., piecewise smooth), we can avoid using Riemann sums to compute the scalar line integral. Note that can be viewed as representing an infinitesimal length along the curve . If is traced out by the parametric equations , then the length of from to is given by the arc length function  . See and . Thus , and we can write .  If we view as being traced out by a vector function , then we can write this formula even more compactly: .   Computing a Scalar Line Integral   Compute , where is the segment of the parabola from to .    The curve is traced out by the vector function for . Therefore     Line integrals along piecewise smooth curves can be found without too much trouble.   Integrating Along Line Segments   Find where denotes the line segment from to followed by the segment from to .    We find this by breaking down as the union of two smooth curves and , where Then .    We can also compute scalar line integrals in .   Average Value on a Circle   Let and let . Find the average value of on .    The average value of on is given by where and . Therefore has an average value of on .      Vector Field Line Integrals  Suppose we have a force field  in and some particle that is acted upon by the force. The particle has a trajectory given by a curve .  Trajectory in a force field.       We want to determine how the trajectory of the particle aligns with the forcefield . We can do this by picking an arbitrary point along , finding the unit tangent at this point, and then comparing the direction of and that of by computing the dot product . This is a measure of how and align at a specific point, and integrating this along should tell us how and align overall.   line integrals vector fields  Line Integral of a Vector Field   Let denote a smooth curve and let be a vector field continuous on . Then we define the line integral of over to be .   This integral is also sometimes called the circulation integral of along .     To find line integrals of vector fields, we proceed as follows. Suppose that . Then . We can also write this as , assuming that .  In addition to measuring how well and align, vector field line integrals can also represent work done.   Flow Along a Circle   Let denote the segment of the parabola traversed once from to , and let . Does tend to flow with or against ?    If we graph and , we get the following:  Flow over .        suggests that flows with , and we can verify this by computing : . Since the result is positive, this tells us that tends to flow with .     A Nonconservative Force   Let denote a force field. Is the force conservative?    Here we are using the physical definition of a conservative force, namely that the work done must be path independent . So we'll choose two paths between two points and find the work done on each path. Let the first path, , denote the top half of the unit circle traversed counterclockwise. Similarly, let the second path, , denote the bottom half of the unit circle traversed clockwise. Then both paths have the same initial and terminal points.  From , it appears as though , which suggests that the vector field is path dependent.  A rotating force field.     To verify this, we'll compute the appropriate line integrals.  For , the total circulation is . Likewise, the circulation of along is .  Since the work done by between the points and clearly depends on the path taken between the points, this means that is path dependent and, therefore, not conservative.    We can also compute vector field line integrals in with essentially the same formula.   Circulation in   Find the circulation of along .    We have . Since the circulation is positive, this also shows that tends to flow with .      Flux Integrals  The circulation integral in is useful for measuring how much a vector field flows along a given curve. Now, we want to measure how a vector field flows across a curve, at least in .  Given a smooth curve with unit tangent , recall that measures how well a vector field and align at a point on . By integrating this, we get a measure along the entire curve. So if we want to get a sense of how flows across , we can do so by looking at a single point and then integrating along the curve again.  To do this, let be the unit normal vector to , given in . Then determines how flows across at a specific point, and integrating provides a measure along the entire curve. But there's one slight issue: if is a closed curve then it's possible that points into the region enclosed by . We would like to measure how flows out of instead, so we'll replace with , the outward unit normal . This leads us to the flux integral .   line integrals flux integral  Flux Integral   Let denote a smooth curve and let be a vector field continuous on . Then we define the flux integral of across to be , where is the outward unit normal vector to .    At this point it may be helpful to introduce some new notation. If is a closed curve, then we often denote line integrals involving with instead of .   Flux Across the Unit Circle   Let and let denote the unit circle, traversed exactly once counterclockwise. What is ?    We should have .    In order to actually compute flux integrals, we need to write using . So suppose that is traced out by the vector function . Then must be perpendicular to the unit tangent or equivalently . Our primary tool for finding perpendicular vectors, the cross product, only applies in . So to find we'll (temporarily) move everything into . Now we need to find a vector orthogonal to that also lies in the -plane. This can be done by computing .  At this point we need to decide which direction we want our normal vector to go. We'll usually choose the first option if is traversed counterclockwise and the second option otherwise. Assuming counterclockwise orientation, we have . Now moving back down to , we can write the outward unit normal as .  Therefore .   Verifying the Flux   Compute the flux integral in .    We have .      SUGGESTED PROBLEMS: 1, 7, 13, 17, 19, 39.   "
},
{
  "id": "p-1653",
  "level": "2",
  "url": "section-line-integrals.html#p-1653",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar line integral "
},
{
  "id": "definition-scalar-line-integral",
  "level": "2",
  "url": "section-line-integrals.html#definition-scalar-line-integral",
  "type": "Definition",
  "number": "14.2.1",
  "title": "Scalar Line Integral.",
  "body": " line integrals scalar  Scalar Line Integral   Suppose that is a smooth curve in and that the function is continuous on . The scalar line integral of along is the number defined to be .   An analogous definition holds for curves in . We can also replace the assumption that is smooth with the assumption that is rectifiable , which (roughly) means it has a well-defined length.    "
},
{
  "id": "example-computing-a-scalar-line-integral",
  "level": "2",
  "url": "section-line-integrals.html#example-computing-a-scalar-line-integral",
  "type": "Example",
  "number": "14.2.2",
  "title": "Computing a Scalar Line Integral.",
  "body": " Computing a Scalar Line Integral   Compute , where is the segment of the parabola from to .    The curve is traced out by the vector function for . Therefore    "
},
{
  "id": "example-integrating-along-line-segments",
  "level": "2",
  "url": "section-line-integrals.html#example-integrating-along-line-segments",
  "type": "Example",
  "number": "14.2.3",
  "title": "Integrating Along Line Segments.",
  "body": " Integrating Along Line Segments   Find where denotes the line segment from to followed by the segment from to .    We find this by breaking down as the union of two smooth curves and , where Then .   "
},
{
  "id": "example-average-value-on-a-circle",
  "level": "2",
  "url": "section-line-integrals.html#example-average-value-on-a-circle",
  "type": "Example",
  "number": "14.2.4",
  "title": "Average Value on a Circle.",
  "body": " Average Value on a Circle   Let and let . Find the average value of on .    The average value of on is given by where and . Therefore has an average value of on .   "
},
{
  "id": "figure-trajectory-in-a-force-field",
  "level": "2",
  "url": "section-line-integrals.html#figure-trajectory-in-a-force-field",
  "type": "Figure",
  "number": "14.2.5",
  "title": "",
  "body": " Trajectory in a force field.     "
},
{
  "id": "definition-line-integral-of-a-vector-field",
  "level": "2",
  "url": "section-line-integrals.html#definition-line-integral-of-a-vector-field",
  "type": "Definition",
  "number": "14.2.6",
  "title": "Line Integral of a Vector Field.",
  "body": " line integrals vector fields  Line Integral of a Vector Field   Let denote a smooth curve and let be a vector field continuous on . Then we define the line integral of over to be .   This integral is also sometimes called the circulation integral of along .    "
},
{
  "id": "example-flow-along-a-circle",
  "level": "2",
  "url": "section-line-integrals.html#example-flow-along-a-circle",
  "type": "Example",
  "number": "14.2.7",
  "title": "Flow Along a Circle.",
  "body": " Flow Along a Circle   Let denote the segment of the parabola traversed once from to , and let . Does tend to flow with or against ?    If we graph and , we get the following:  Flow over .        suggests that flows with , and we can verify this by computing : . Since the result is positive, this tells us that tends to flow with .   "
},
{
  "id": "example-a-nonconservative-force",
  "level": "2",
  "url": "section-line-integrals.html#example-a-nonconservative-force",
  "type": "Example",
  "number": "14.2.9",
  "title": "A Nonconservative Force.",
  "body": " A Nonconservative Force   Let denote a force field. Is the force conservative?    Here we are using the physical definition of a conservative force, namely that the work done must be path independent . So we'll choose two paths between two points and find the work done on each path. Let the first path, , denote the top half of the unit circle traversed counterclockwise. Similarly, let the second path, , denote the bottom half of the unit circle traversed clockwise. Then both paths have the same initial and terminal points.  From , it appears as though , which suggests that the vector field is path dependent.  A rotating force field.     To verify this, we'll compute the appropriate line integrals.  For , the total circulation is . Likewise, the circulation of along is .  Since the work done by between the points and clearly depends on the path taken between the points, this means that is path dependent and, therefore, not conservative.   "
},
{
  "id": "example-circulation-in-R3",
  "level": "2",
  "url": "section-line-integrals.html#example-circulation-in-R3",
  "type": "Example",
  "number": "14.2.11",
  "title": "Circulation in <span class=\"process-math\">\\(\\RR^{3}\\)<\/span>.",
  "body": " Circulation in   Find the circulation of along .    We have . Since the circulation is positive, this also shows that tends to flow with .   "
},
{
  "id": "p-1686",
  "level": "2",
  "url": "section-line-integrals.html#p-1686",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outward unit normal flux integral "
},
{
  "id": "definition-line-integral-flux-integral",
  "level": "2",
  "url": "section-line-integrals.html#definition-line-integral-flux-integral",
  "type": "Definition",
  "number": "14.2.12",
  "title": "Flux Integral.",
  "body": " line integrals flux integral  Flux Integral   Let denote a smooth curve and let be a vector field continuous on . Then we define the flux integral of across to be , where is the outward unit normal vector to .   "
},
{
  "id": "example-flux-across-the-unit-circle",
  "level": "2",
  "url": "section-line-integrals.html#example-flux-across-the-unit-circle",
  "type": "Example",
  "number": "14.2.13",
  "title": "Flux Across the Unit Circle.",
  "body": " Flux Across the Unit Circle   Let and let denote the unit circle, traversed exactly once counterclockwise. What is ?    We should have .   "
},
{
  "id": "example-verifying-the-flux",
  "level": "2",
  "url": "section-line-integrals.html#example-verifying-the-flux",
  "type": "Example",
  "number": "14.2.14",
  "title": "Verifying the Flux.",
  "body": " Verifying the Flux   Compute the flux integral in .    We have .   "
},
{
  "id": "section-the-fundamental-theorem-for-line-integrals",
  "level": "1",
  "url": "section-the-fundamental-theorem-for-line-integrals.html",
  "type": "Section",
  "number": "14.3",
  "title": "The Fundamental Theorem for Line Integrals",
  "body": " The Fundamental Theorem for Line Integrals   From , we know that integrals and derivatives are closely related: . We want to extend this result to line integrals of vector fields over curves. In particular, we want to prove a relationship of the form where and are the endpoints of the curve . This is the content of the main result in this section: .    Path Independence  Unless otherwise mentioned, we'll assume that we're always working with an open, simply connected domain  . This is a region that, roughly, does not contain its boundary and does not contain any holes. A curve contained in is closed if its initial and terminal points are the same. We'll denote the boundary of by .  Unless mentioned otherwise, we assume is traversed counterclockwise is is in the -plane.  We often denote line integrals over closed curves using the symbol .  The mathematical definition of a conservative vector field is that it's the gradient of some scalar function.   conservative vector field mathematical definition  Conservative Vector Fields (Mathematical Definition)   Let be a vector field. We say that is conservative on a domain if on for some scalar function .    However, we also have a physical definition! Which may be useful. This definition relies on the concept of path independence .   vector fields path independence  Path Independence   A vector field is path independent on a domain if for any piecewise smooth paths in with the same endpoints. Equivalently, is path independent if for any piecewise smooth closed curve in .     Conservative Vector Fields (Physical Definition)   Let denote a (vector) force field. We say that is conservative on a domain if is path independent on .    In physical terms, says that the work done by a conservative force on a particle moving along a path depends only on the initial and terminal points of the path. Equivalently, the work done on a closed path must always be .  These two definitions are related by .   line integrals Fundamental Theorem of Line Integrals  Fundamental Theorem of Line Integrals   Suppose that is a conservative vector field (in the sense of ) with continuous components on an open simply connected region . Then is path independent. Furthermore, if and is a curve in with initial point and terminal point , then .     An Awful Example   Let and let be the path in the -plane composed of the line segment from to followed by the circular arc from to followed by the logarithmic arc from to . Find .     is piecewise smooth and consists of the components . To find , we can find for and add the resulting values. So let's do that! . Similarly, and finally  . Putting this all together, we get .  Now let's compare this approach with using . Since , is conservative by definition. Hence applies, and (setting ) we get .     Using Potential to Find Work Done   Let be a force field and let denote the parabolic arc from to . Find the work done by along .    The work done is just . Note that , and so the work done is just by .      Conservative Vector Fields   shows that line integrals involving conservative vector fields are straightforward to evaluate if we know a corresponding potential function. So now we want to do two things:   Given a vector field , determine if it's conservative.      Given a conservative vector field , determine a potential function .     For the first, we can use our intuition that conservative vector fields shouldn't rotate. So let's assume that is a (differentiable) vector field on and let be a point in the plane. We can estimate the rotation, or circulation , of at by constructing a rectangle with length and height at and measuring how flows counterclockwise around the rectangle. If we do so, then we can estimate the circulation along each side as follows: . Therefore the total circulation near should be about . If we divide by to normalize, then we can say that the circulation is about .   Conservative Vector Fields are Irrotational   Let be a continuously differentiable vector field on an open simply connected region in . Then is conservative on this region if and only if .     Finding a Line Integral   Let and let denote the ellipse . Find .    We can parameterize and then compute as in , but we'll first check if is conservative. Since , it follows that is conservative. Hence .    The quantity in is called the (two-dimensional) curl of and is denoted by . This represents the tendency of to rotate counterclockwise around a given point. This can be extended to three dimensions using the following formula: where . The direction of provides the axis of rotation at a point, and its magnitude is the tendency of to rotate counterclockwise around this axis of rotation (viewed head on).   Testing a Vector Field in   Let . Determine if is conservative.   This is taken from Example 2 on page 1165 of Thomas' Calculus , edition.     We need to check if . So we compute this like a cross product, giving . Hence the vector field is irrotational and therefore conservative.    So now we have a good test for if a vector field is conservative. Next, we want to be able to find a corresponding potential function to a conservative vector field.  Consider the vector field from . We know this is conservative, so there must exist a corresponding potential function such that . To find this, we start by noting that whatever is, its partial derivatives must be the components of . In particular, . Now we look at to pin down : , and so . Finally, and so . Therefore a potential function for is .   Line Integral Along an Elliptical Arc   Compute , where .    First, we'll check if is conservative. If it is, we can use . Since , we see that is in fact conservative.  Now we need to find a potential function . Since , we can integrate with respect to to get . Now differentiate with respect to to get . Hence a potential function for is , and so .      SUGGESTED PROBLEMS:3-13 odd, 19, 21   "
},
{
  "id": "p-1698",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#p-1698",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "open, simply connected domain closed boundary "
},
{
  "id": "definition-conservative-vector-fields-mathematical-definition",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#definition-conservative-vector-fields-mathematical-definition",
  "type": "Definition",
  "number": "14.3.1",
  "title": "Conservative Vector Fields (Mathematical Definition).",
  "body": " conservative vector field mathematical definition  Conservative Vector Fields (Mathematical Definition)   Let be a vector field. We say that is conservative on a domain if on for some scalar function .   "
},
{
  "id": "p-1702",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#p-1702",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "path independence "
},
{
  "id": "definition-path-independence",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#definition-path-independence",
  "type": "Definition",
  "number": "14.3.2",
  "title": "Path Independence.",
  "body": " vector fields path independence  Path Independence   A vector field is path independent on a domain if for any piecewise smooth paths in with the same endpoints. Equivalently, is path independent if for any piecewise smooth closed curve in .   "
},
{
  "id": "definition-conservative-vector-fields-physical-definition",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#definition-conservative-vector-fields-physical-definition",
  "type": "Definition",
  "number": "14.3.3",
  "title": "Conservative Vector Fields (Physical Definition).",
  "body": " Conservative Vector Fields (Physical Definition)   Let denote a (vector) force field. We say that is conservative on a domain if is path independent on .   "
},
{
  "id": "theorem-fundamental-theorem-line-integrals",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#theorem-fundamental-theorem-line-integrals",
  "type": "Theorem",
  "number": "14.3.4",
  "title": "Fundamental Theorem of Line Integrals.",
  "body": " line integrals Fundamental Theorem of Line Integrals  Fundamental Theorem of Line Integrals   Suppose that is a conservative vector field (in the sense of ) with continuous components on an open simply connected region . Then is path independent. Furthermore, if and is a curve in with initial point and terminal point , then .   "
},
{
  "id": "example-an-awful-example",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#example-an-awful-example",
  "type": "Example",
  "number": "14.3.5",
  "title": "An Awful Example.",
  "body": " An Awful Example   Let and let be the path in the -plane composed of the line segment from to followed by the circular arc from to followed by the logarithmic arc from to . Find .     is piecewise smooth and consists of the components . To find , we can find for and add the resulting values. So let's do that! . Similarly, and finally  . Putting this all together, we get .  Now let's compare this approach with using . Since , is conservative by definition. Hence applies, and (setting ) we get .   "
},
{
  "id": "example-using-potential-to-find-work-done",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#example-using-potential-to-find-work-done",
  "type": "Example",
  "number": "14.3.6",
  "title": "Using Potential to Find Work Done.",
  "body": " Using Potential to Find Work Done   Let be a force field and let denote the parabolic arc from to . Find the work done by along .    The work done is just . Note that , and so the work done is just by .   "
},
{
  "id": "theorem-conservative-vector-fields-are-irrotational",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#theorem-conservative-vector-fields-are-irrotational",
  "type": "Theorem",
  "number": "14.3.7",
  "title": "Conservative Vector Fields are Irrotational.",
  "body": " Conservative Vector Fields are Irrotational   Let be a continuously differentiable vector field on an open simply connected region in . Then is conservative on this region if and only if .   "
},
{
  "id": "example-finding-a-line-integral",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#example-finding-a-line-integral",
  "type": "Example",
  "number": "14.3.8",
  "title": "Finding a Line Integral.",
  "body": " Finding a Line Integral   Let and let denote the ellipse . Find .    We can parameterize and then compute as in , but we'll first check if is conservative. Since , it follows that is conservative. Hence .   "
},
{
  "id": "p-1720",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#p-1720",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curl "
},
{
  "id": "example-testing-a-vector-field-in-RR3",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#example-testing-a-vector-field-in-RR3",
  "type": "Example",
  "number": "14.3.9",
  "title": "Testing a Vector Field in <span class=\"process-math\">\\(\\RR^{3}\\)<\/span>.",
  "body": " Testing a Vector Field in   Let . Determine if is conservative.   This is taken from Example 2 on page 1165 of Thomas' Calculus , edition.     We need to check if . So we compute this like a cross product, giving . Hence the vector field is irrotational and therefore conservative.   "
},
{
  "id": "example-line-integral-along-an-elliptical-arc",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#example-line-integral-along-an-elliptical-arc",
  "type": "Example",
  "number": "14.3.10",
  "title": "Line Integral Along an Elliptical Arc.",
  "body": " Line Integral Along an Elliptical Arc   Compute , where .    First, we'll check if is conservative. If it is, we can use . Since , we see that is in fact conservative.  Now we need to find a potential function . Since , we can integrate with respect to to get . Now differentiate with respect to to get . Hence a potential function for is , and so .   "
},
{
  "id": "section-green-s-theorem",
  "level": "1",
  "url": "section-green-s-theorem.html",
  "type": "Section",
  "number": "14.4",
  "title": "Green’s Theorem",
  "body": " Green's Theorem  Recall that is the circulation of along . Likewise, is a measure of how rotates counterclockwise. These two quantities are tied together by Green's Theorem.   Green's Theorem  Green's Theorem   Let be a positively oriented, piecewise smooth, simple closed curve in the plane containing some region . Let denote a vector field that is continuously differentiable on an open, simply connected domain containing . Then .     Green's Theorem on a Triangle   Compute , where and is the triangle with vertices and traversed once counterclockwise.    First, note that isn't conservative and so we can't just say the integral is . Finding the line integral directly would require computing three separate line integrals, so we'll try Green's Theorem instead.  Let denote the inside of the triangle. Then we have , which simplifies to .     Work with Green's Theorem   Find the work done by along the boundary of the region bounded by and , traversed clockwise exactly once.     Circulation Along an Annulus   Does flow with the boundary of the annulus bounded by and ? Here, assume that the boundary of is oriented in a way that is consistent with Green's Theorem.     applies to circulation integrals, but there's also a version for flux integrals.   Green's Theorem flux integrals  Green's Theorem for Flux Integrals   Let , and satisfy the same hypotheses as in . Then .    The quantity is known as the divergence of , and measures how flows across a point.   Flux Across a Square   Does tend to flow out of the unit square?    SUGGESTED PROBLEMS: 1, 3, 5, 9, 17  "
},
{
  "id": "theorem-green-s-theorem",
  "level": "2",
  "url": "section-green-s-theorem.html#theorem-green-s-theorem",
  "type": "Theorem",
  "number": "14.4.1",
  "title": "Green’s Theorem.",
  "body": " Green's Theorem  Green's Theorem   Let be a positively oriented, piecewise smooth, simple closed curve in the plane containing some region . Let denote a vector field that is continuously differentiable on an open, simply connected domain containing . Then .   "
},
{
  "id": "example-green-s-theorem-on-a-triangle",
  "level": "2",
  "url": "section-green-s-theorem.html#example-green-s-theorem-on-a-triangle",
  "type": "Example",
  "number": "14.4.2",
  "title": "Green’s Theorem on a Triangle.",
  "body": " Green's Theorem on a Triangle   Compute , where and is the triangle with vertices and traversed once counterclockwise.    First, note that isn't conservative and so we can't just say the integral is . Finding the line integral directly would require computing three separate line integrals, so we'll try Green's Theorem instead.  Let denote the inside of the triangle. Then we have , which simplifies to .   "
},
{
  "id": "example-work-with-green-s-theorem",
  "level": "2",
  "url": "section-green-s-theorem.html#example-work-with-green-s-theorem",
  "type": "Example",
  "number": "14.4.3",
  "title": "Work with Green’s Theorem.",
  "body": " Work with Green's Theorem   Find the work done by along the boundary of the region bounded by and , traversed clockwise exactly once.   "
},
{
  "id": "example-circulation-along-an-annulus",
  "level": "2",
  "url": "section-green-s-theorem.html#example-circulation-along-an-annulus",
  "type": "Example",
  "number": "14.4.4",
  "title": "Circulation Along an Annulus.",
  "body": " Circulation Along an Annulus   Does flow with the boundary of the annulus bounded by and ? Here, assume that the boundary of is oriented in a way that is consistent with Green's Theorem.   "
},
{
  "id": "theorem-green-s-theorem-for-flux-integrals",
  "level": "2",
  "url": "section-green-s-theorem.html#theorem-green-s-theorem-for-flux-integrals",
  "type": "Theorem",
  "number": "14.4.5",
  "title": "Green’s Theorem for Flux Integrals.",
  "body": " Green's Theorem flux integrals  Green's Theorem for Flux Integrals   Let , and satisfy the same hypotheses as in . Then .   "
},
{
  "id": "p-1739",
  "level": "2",
  "url": "section-green-s-theorem.html#p-1739",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "divergence "
},
{
  "id": "example-flux-across-a-square",
  "level": "2",
  "url": "section-green-s-theorem.html#example-flux-across-a-square",
  "type": "Example",
  "number": "14.4.6",
  "title": "Flux Across a Square.",
  "body": " Flux Across a Square   Does tend to flow out of the unit square?   "
},
{
  "id": "section-curl-and-divergence",
  "level": "1",
  "url": "section-curl-and-divergence.html",
  "type": "Section",
  "number": "14.5",
  "title": "Curl and Divergence",
  "body": " Curl and Divergence   In this section we look at two different analogues of the derivative for vector fields. Once we have these versions of the derivative, we'll also be able to state a corresponding version of the , just as the corresponds to the gradient.    Curl  In we introduced the operator, which in is given by . In this class, has no meaning when by itself. However, it gains meaning when multiplied by a scalar function , leaving the gradient . We also used it to define the curl , which we repeat below.   vector fields curl in  Curl of a Vector Field in   Let be a vector field in with continuously differentiable components. The curl of is the vector .    We've already seen a couple nice properties of curls. First, the curl vector gives the axis of rotation about which tends to rotate counterclockwise when viewed head on, and is a measure of the amount of rotation. Second, the curl can be used to determine if a vector field is conservative or not.   Conservative Vector Fields in   Let denote a continuously differentiable vector field on an open set containing the simply connected region . Then is conservative if and only if .     Determining Rotation in a Vector Field   Suppose the vector field represents a swirling fluid. Within this fluid you place a small paddle wheel at the point . When viewed from directly above, will the paddle wheel tend to rotate clockwise or counterclockwise?    First we need to get a measure of the rotation of , so we compute the curl: , which is just at our point. This provides the axis around which the paddle wheel rotates counterclockwise. And since , the paddle wheel does not appear to rotate at all when viewed from above.      Divergence  Our second notion of derivative for vector fields is the divergence . If is a continuously differentiable vector field, then we define the divergence of to be the scalar function given by . The divergence of a vector field is a measure of outflow minus inflow . If , then we say that is incompressible or solenoidal (just as we say that is irrotational if ).   Divergence on a Rectangle   Let and let denote the unit circle, traversed counterclockwise once. Find the divergence of at and . Then find the net divergence of through the interior of .    At , . At this particular point, outflow is balanced with inflow. Likewise, at we can see that inflow is greater than outflow.  We can compute the net divergence as , where is the interior of the unit circle. This is equal to , which means the net flow throughout is . By , this is also equal to the net flux across .      Laplacian  From the divergence we get another useful form of (second) derivative for scalar functions. First, let be a differentiable scalar function. Then we can compute its gradient . This is a vector field that represents how changes. Now, since is a vector field we can also consider its curl and divergence. If is nice enough we know that , which is not particularly useful in this case. But if we take the divergence, we get .   Laplacian  Laplacian   Let be a twice differentiable scalar function on . The Laplacian of is the function given by .     extends to other dimensions in the obvious way. The Laplacian is useful since it provides a measure of how a function's value at a point differs from the average value at nearby points.   Laplacians and Average Values   Let and let . Let denote the unit circle traversed once counterclockwise. Find the average values of on , their specific values at and the Laplacians at .    If we compute the average values, we get . Furthermore, . We also have and .    To see how the Laplacian can arise, consider the following situation explained in Evans' Partial Differential Equations , edition. We have some density function ; this could be mass density, charge density, etc. Now we'll let denote the flux of . It's often reasonable to assume that the flux is proportional to the negative of the gradient of : where . This means that the quantity flows from regions of higher concentration to regions of lower concentration. If represents a quantity in equilibrium within some region , then the net flux across should be . In terms of , we have .  Now we'll make the argument that since the above should be true for arbitrary subregions of . But , which means that .  We say that a function is harmonic if its Laplacian is . The equation is known as Laplace's equation . Harmonic functions are extremely useful, as they represent quantities in a kind of equilibrium state. If represents chemical concentration, temperature or electrostatic potential, then Laplace's equation is Fick's law of diffusion, Fourier's law of heat conduction or Ohm's law of electrical conduction, respectively. See Evans text for more.  Laplacians also appear in certain integral identities.   Green's First Identity  Green's First Identity   Let denote a simply connected region with piecewise smooth boundary . Suppose that is continuously differentiable and is twice continuously differentiable on an open domain containing . Then .    Since the right hand side involves a flux integral, this suggests that may prove useful. Applying this to gives .  Now, recall that is a kind of derivative operator. For this reason, it also satisfies a version of the product rule: . Plugging this into the double integral and rearranging proves the result.      acts as a kind of integration by parts in higher dimensions.     SUGGESTED PROBLEMS: 1-9 odd, 10, 11-15 odd.   "
},
{
  "id": "p-1743",
  "level": "2",
  "url": "section-curl-and-divergence.html#p-1743",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curl "
},
{
  "id": "definition-curl-of-a-vector-field-in--rr-3-m-",
  "level": "2",
  "url": "section-curl-and-divergence.html#definition-curl-of-a-vector-field-in--rr-3-m-",
  "type": "Definition",
  "number": "14.5.1",
  "title": "Curl of a Vector Field in <span class=\"process-math\">\\(\\RR^{3}\\)<\/span>.",
  "body": " vector fields curl in  Curl of a Vector Field in   Let be a vector field in with continuously differentiable components. The curl of is the vector .   "
},
{
  "id": "theorem-conservative-vector-fields-in--rr-3-m-",
  "level": "2",
  "url": "section-curl-and-divergence.html#theorem-conservative-vector-fields-in--rr-3-m-",
  "type": "Theorem",
  "number": "14.5.2",
  "title": "Conservative Vector Fields in <span class=\"process-math\">\\(\\RR^{3}\\)<\/span>.",
  "body": " Conservative Vector Fields in   Let denote a continuously differentiable vector field on an open set containing the simply connected region . Then is conservative if and only if .   "
},
{
  "id": "example-determining-rotation-in-a-vector-field",
  "level": "2",
  "url": "section-curl-and-divergence.html#example-determining-rotation-in-a-vector-field",
  "type": "Example",
  "number": "14.5.3",
  "title": "Determining Rotation in a Vector Field.",
  "body": " Determining Rotation in a Vector Field   Suppose the vector field represents a swirling fluid. Within this fluid you place a small paddle wheel at the point . When viewed from directly above, will the paddle wheel tend to rotate clockwise or counterclockwise?    First we need to get a measure of the rotation of , so we compute the curl: , which is just at our point. This provides the axis around which the paddle wheel rotates counterclockwise. And since , the paddle wheel does not appear to rotate at all when viewed from above.   "
},
{
  "id": "p-1749",
  "level": "2",
  "url": "section-curl-and-divergence.html#p-1749",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "divergence incompressible solenoidal "
},
{
  "id": "example-divergence-on-a-rectangle",
  "level": "2",
  "url": "section-curl-and-divergence.html#example-divergence-on-a-rectangle",
  "type": "Example",
  "number": "14.5.4",
  "title": "Divergence on a Rectangle.",
  "body": " Divergence on a Rectangle   Let and let denote the unit circle, traversed counterclockwise once. Find the divergence of at and . Then find the net divergence of through the interior of .    At , . At this particular point, outflow is balanced with inflow. Likewise, at we can see that inflow is greater than outflow.  We can compute the net divergence as , where is the interior of the unit circle. This is equal to , which means the net flow throughout is . By , this is also equal to the net flux across .   "
},
{
  "id": "definition-laplacian",
  "level": "2",
  "url": "section-curl-and-divergence.html#definition-laplacian",
  "type": "Definition",
  "number": "14.5.5",
  "title": "Laplacian.",
  "body": " Laplacian  Laplacian   Let be a twice differentiable scalar function on . The Laplacian of is the function given by .   "
},
{
  "id": "example-laplacians-and-average-values",
  "level": "2",
  "url": "section-curl-and-divergence.html#example-laplacians-and-average-values",
  "type": "Example",
  "number": "14.5.6",
  "title": "Laplacians and Average Values.",
  "body": " Laplacians and Average Values   Let and let . Let denote the unit circle traversed once counterclockwise. Find the average values of on , their specific values at and the Laplacians at .    If we compute the average values, we get . Furthermore, . We also have and .   "
},
{
  "id": "p-1760",
  "level": "2",
  "url": "section-curl-and-divergence.html#p-1760",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "harmonic Laplace's equation "
},
{
  "id": "theorem-green-s-first-identity",
  "level": "2",
  "url": "section-curl-and-divergence.html#theorem-green-s-first-identity",
  "type": "Theorem",
  "number": "14.5.7",
  "title": "Green’s First Identity.",
  "body": " Green's First Identity  Green's First Identity   Let denote a simply connected region with piecewise smooth boundary . Suppose that is continuously differentiable and is twice continuously differentiable on an open domain containing . Then .    Since the right hand side involves a flux integral, this suggests that may prove useful. Applying this to gives .  Now, recall that is a kind of derivative operator. For this reason, it also satisfies a version of the product rule: . Plugging this into the double integral and rearranging proves the result.   "
},
{
  "id": "section-parametric-surfaces-and-areas",
  "level": "1",
  "url": "section-parametric-surfaces-and-areas.html",
  "type": "Section",
  "number": "14.6",
  "title": "Parametric Surfaces and Areas",
  "body": " Parametric Surfaces and Areas   To extend to surfaces in , we need to parameterize surfaces just as we did curves. As before, our computations depend on the specific parameterization we choose.    Parameterizing Surfaces  A curve is a one-dimensional object, and so our parameterizations typically involved only one independent variable. A surface is fundamentally a two-dimensional object, and so we expect its parameterizations to involve two independent variables even if the surface is in . We will use vector functions of the form to represent our parameterizations.   Finding a Surface   Find the surface traced out by in .    For any point on this surface, we know that and . We can use these conditions to find an equation in and that is equivalent to .  First, let's solve for and , giving So , which implies that .    In general, any plane can be represented using a vector function of the form .   Parameterizing a Cylinder   Find a vector function that traces out the portion of the cylinder contained in the seventh octant.    The presence of in the equation defining this surface suggests something like polar coordinates, except for the -plane instead of the -plane. So let and . Then on our surface, and we can parameterize it using . To place this in the correct octant, we must provide limits for and : .      Tangent Planes from Space Curves  If , then gives the tangent vector to at the point corresponding to . In the same way, if a surface is given by , then give tangent vectors to at the point corresponding to . gives the tangent in the direction of increasing , while gives the tangent in the direction of increasing . We say that is smooth if and exist, are continuous and are never . In this case, we can construct the tangent plane to .   Tangent Plane to a Sphere   Let be the sphere centered at the origin of radius . Parameterize the tangent plane to at .    First, note that actually lies on this sphere so the tangent plane here makes sense. To parameterize the tangent plane, we first need to parameterize : . Setting and , it follows that the tangent plane is parameterized by .  If we want the Cartesian equation of the plane instead, that's not too difficult either. We just need a normal vector to the plane, and we can just use for this: . If we want something even simpler, we can use . So a Cartesian equation for our plane is .      Surface Areas  In addition to giving us a normal vector to the surface , the quantity can also be used to estimate the area of a small parallelogram on at a given point . In particular, if , then the area of the surface subject to the above restrictions on and is approximately , where the cross product is evaluated at . This suggests the following definition.   parametric surfaces surface area  Surface Area   Let be a smooth surface parameterized by for . Then the surface area of is defined to be .     Area of a Cone   Find the area of the part of the cone bounded by and in the first octant.    First, we parameterize the cone using . This gives , and so the area of the conical segment is .    The reason we care about smooth surfaces above is that they let us specify a normal vector to that surface. There are typically two choices for such a normal vector (inside vs. outside), but once we choose a direction the normal vector becomes ambiguous. Such surfaces are said to be orientable , and it's these surfaces that we can do calculus on.  As an example of a surface that is not orientable, consider the surface parameterized by for and . After a lot of algebra, we find that the normal vector should be .  Here's the problem: the normal vector is different at compared with since the component gets its sign flipped. But on the original surface there's no difference between and . Hence this surface is non-orientable.    SUGGESTED PROBLEMS:1, 3, 15, 19, 33, 43.   "
},
{
  "id": "example-finding-a-surface",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#example-finding-a-surface",
  "type": "Example",
  "number": "14.6.1",
  "title": "Finding a Surface.",
  "body": " Finding a Surface   Find the surface traced out by in .    For any point on this surface, we know that and . We can use these conditions to find an equation in and that is equivalent to .  First, let's solve for and , giving So , which implies that .   "
},
{
  "id": "example-parameterizing-a-cylinder",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#example-parameterizing-a-cylinder",
  "type": "Example",
  "number": "14.6.2",
  "title": "Parameterizing a Cylinder.",
  "body": " Parameterizing a Cylinder   Find a vector function that traces out the portion of the cylinder contained in the seventh octant.    The presence of in the equation defining this surface suggests something like polar coordinates, except for the -plane instead of the -plane. So let and . Then on our surface, and we can parameterize it using . To place this in the correct octant, we must provide limits for and : .   "
},
{
  "id": "p-1775",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#p-1775",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "smooth "
},
{
  "id": "example-tangent-plane-to-a-sphere",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#example-tangent-plane-to-a-sphere",
  "type": "Example",
  "number": "14.6.3",
  "title": "Tangent Plane to a Sphere.",
  "body": " Tangent Plane to a Sphere   Let be the sphere centered at the origin of radius . Parameterize the tangent plane to at .    First, note that actually lies on this sphere so the tangent plane here makes sense. To parameterize the tangent plane, we first need to parameterize : . Setting and , it follows that the tangent plane is parameterized by .  If we want the Cartesian equation of the plane instead, that's not too difficult either. We just need a normal vector to the plane, and we can just use for this: . If we want something even simpler, we can use . So a Cartesian equation for our plane is .   "
},
{
  "id": "definition-surface-area",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#definition-surface-area",
  "type": "Definition",
  "number": "14.6.4",
  "title": "Surface Area.",
  "body": " parametric surfaces surface area  Surface Area   Let be a smooth surface parameterized by for . Then the surface area of is defined to be .   "
},
{
  "id": "example-area-of-a-cone",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#example-area-of-a-cone",
  "type": "Example",
  "number": "14.6.5",
  "title": "Area of a Cone.",
  "body": " Area of a Cone   Find the area of the part of the cone bounded by and in the first octant.    First, we parameterize the cone using . This gives , and so the area of the conical segment is .   "
},
{
  "id": "p-1783",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#p-1783",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orientable "
},
{
  "id": "section-surface-integrals",
  "level": "1",
  "url": "section-surface-integrals.html",
  "type": "Section",
  "number": "14.7",
  "title": "Surface Integrals",
  "body": " Surface Integrals  A surface integral of a function over a surface in will be an integral of the form . This integral represents the net accumulation, or sum , of on the surface . We use to indicate an infinitesimal surface area on . Since we already know the surface area from , we can say that for some vector function that parameterizes . Hence where is a corresponding region in the -plane. When computing surface integrals, we want to make sure our surface is orientable .   Mass of a Surface   Find the mass of the hemisphere given by assuming that .    We need to compute the surface integral . First, we need to find a vector function that traces out the hemisphere. Using spherical coordinates for inspiration, we can use with Then Now we need to find the magnitude: . So the mass is .    If is given by the equation , then we can use to trace out . This gives .   Surface Integral on a Cone   Set up the surface integral that gives the average value of on the part of the cone that lies above the unit circle in the third octant.    Let denote the part of the cone in the third octant above the unit circle and let denote the portion of the unit circle directly under . The surface area of this part of the cone is , so the average value of on this part of the cone is     We can also talk about surface integrals of vector fields. These are higher dimensional versions of flux integrals.   Surface Integral of a Vector Field   Let be a continuous vector field on the piecewise smooth, oriented surface . Then the surface integral of over is the quantity where is chosen the unit normal vector to .    The surface integral above measures how flows across the surface in the direction of . However, we will always have two possible choices for . If is orientable, then we know we can specify a consistent choice of direction . We just need to make sure this is done before computing the integral.  If , we can replace with , which gives .   Flux Into a Sphere   Does tend to flow into the sphere ?    Stealing our work from , we can parameterize using which gives . However, this is not the normal vector we need to use here. Instead, we'll multiply by a negative to get the inward normal. So     SUGGESTED PROBLEMS: 7, 9, 23, 29.  "
},
{
  "id": "p-1787",
  "level": "2",
  "url": "section-surface-integrals.html#p-1787",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "surface integral orientable "
},
{
  "id": "example-mass-of-a-surface",
  "level": "2",
  "url": "section-surface-integrals.html#example-mass-of-a-surface",
  "type": "Example",
  "number": "14.7.1",
  "title": "Mass of a Surface.",
  "body": " Mass of a Surface   Find the mass of the hemisphere given by assuming that .    We need to compute the surface integral . First, we need to find a vector function that traces out the hemisphere. Using spherical coordinates for inspiration, we can use with Then Now we need to find the magnitude: . So the mass is .   "
},
{
  "id": "example-surface-integral-on-a-cone",
  "level": "2",
  "url": "section-surface-integrals.html#example-surface-integral-on-a-cone",
  "type": "Example",
  "number": "14.7.2",
  "title": "Surface Integral on a Cone.",
  "body": " Surface Integral on a Cone   Set up the surface integral that gives the average value of on the part of the cone that lies above the unit circle in the third octant.    Let denote the part of the cone in the third octant above the unit circle and let denote the portion of the unit circle directly under . The surface area of this part of the cone is , so the average value of on this part of the cone is    "
},
{
  "id": "definition-surface-integral-of-a-vector-field",
  "level": "2",
  "url": "section-surface-integrals.html#definition-surface-integral-of-a-vector-field",
  "type": "Definition",
  "number": "14.7.3",
  "title": "Surface Integral of a Vector Field.",
  "body": " Surface Integral of a Vector Field   Let be a continuous vector field on the piecewise smooth, oriented surface . Then the surface integral of over is the quantity where is chosen the unit normal vector to .   "
},
{
  "id": "example-flux-Into-a-sphere",
  "level": "2",
  "url": "section-surface-integrals.html#example-flux-Into-a-sphere",
  "type": "Example",
  "number": "14.7.4",
  "title": "Flux Into a Sphere.",
  "body": " Flux Into a Sphere   Does tend to flow into the sphere ?    Stealing our work from , we can parameterize using which gives . However, this is not the normal vector we need to use here. Instead, we'll multiply by a negative to get the inward normal. So    "
},
{
  "id": "section-stokes-theorem",
  "level": "1",
  "url": "section-stokes-theorem.html",
  "type": "Section",
  "number": "14.8",
  "title": "Stokes’ Theorem",
  "body": " Stokes' Theorem  Suppose we want to find the circulation of a vector field on a surface . If lies in the plane, then we can use Green's Theorem to say that . If is a surface in , then we must take the dot product of with the unit normal to . The corresponding result is known as Stokes' Theorem .   Stokes' Theorem   Let denote a simple, closed, orientable surface with unit normal and let denote a continuously differentiable vector field on . Then , where is oriented counterclockwise with respect to .     Circulation Along a Triangle   Let denote the triangle formed by the boundary of the plane in the first octant, traversed counterclockwise when viewed from below. Let . Find .    By , we can write where is the surface contained by . To find we'll parameterize using . Then . Likewise, . So .    An easier way to find a normal vector in the last example would be to use our knowledge from . However, the following approach is more general. If is described by the equation , then is guaranteed to be normal to . This is especially useful if can be described by an equation of the form , as above. To see how, note that .   Circulation Along a Paraboloid   Let and let denote the paraboloid that lies inside the cylinder , oriented upwards. Use Stokes' Theorem to set up the surface integral equal to .    SUGGESTED PROBLEMS: 1, 3, 5, 7  "
},
{
  "id": "p-1800",
  "level": "2",
  "url": "section-stokes-theorem.html#p-1800",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Stokes' Theorem "
},
{
  "id": "theorem-stokes-theorem",
  "level": "2",
  "url": "section-stokes-theorem.html#theorem-stokes-theorem",
  "type": "Theorem",
  "number": "14.8.1",
  "title": "Stokes’ Theorem.",
  "body": " Stokes' Theorem   Let denote a simple, closed, orientable surface with unit normal and let denote a continuously differentiable vector field on . Then , where is oriented counterclockwise with respect to .   "
},
{
  "id": "example-circulation-along-a-triangle",
  "level": "2",
  "url": "section-stokes-theorem.html#example-circulation-along-a-triangle",
  "type": "Example",
  "number": "14.8.2",
  "title": "Circulation Along a Triangle.",
  "body": " Circulation Along a Triangle   Let denote the triangle formed by the boundary of the plane in the first octant, traversed counterclockwise when viewed from below. Let . Find .    By , we can write where is the surface contained by . To find we'll parameterize using . Then . Likewise, . So .   "
},
{
  "id": "example-circulation-along-a-paraboloid",
  "level": "2",
  "url": "section-stokes-theorem.html#example-circulation-along-a-paraboloid",
  "type": "Example",
  "number": "14.8.3",
  "title": "Circulation Along a Paraboloid.",
  "body": " Circulation Along a Paraboloid   Let and let denote the paraboloid that lies inside the cylinder , oriented upwards. Use Stokes' Theorem to set up the surface integral equal to .   "
},
{
  "id": "section-the-divergence-theorem",
  "level": "1",
  "url": "section-the-divergence-theorem.html",
  "type": "Section",
  "number": "14.9",
  "title": "The Divergence Theorem",
  "body": " The Divergence Theorem  So far we've considered several different versions of the . There is the which applies to the gradient operator , which applies to the two-dimensional curl, which applies to , and also which applies to the two-dimensional divergence. The only remaining generalization is the divergence theorem .   Divergence Theorem   Let be a simple solid region and let be the boundary surface of oriented outwards. Let denote a continuously differentiable vector field on . Then .     Flux across a spherical cap   Let denote the top half of the sphere of radius centered at the origin. Let . Determine if flows out of or into .    We need to calculate the flux integral , which is made easier using . If we let denote the interior of this region, we get      Flux across a cube   Let denote the surface of the unit cube with vertices at and and let . Find where is the inward unit normal to .    SUGGESTED PROBLEMS: 1, 3, 5, 19.  "
},
{
  "id": "p-1807",
  "level": "2",
  "url": "section-the-divergence-theorem.html#p-1807",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "divergence theorem "
},
{
  "id": "theorem-divergence-theorem",
  "level": "2",
  "url": "section-the-divergence-theorem.html#theorem-divergence-theorem",
  "type": "Theorem",
  "number": "14.9.1",
  "title": "Divergence Theorem.",
  "body": " Divergence Theorem   Let be a simple solid region and let be the boundary surface of oriented outwards. Let denote a continuously differentiable vector field on . Then .   "
},
{
  "id": "example-flux-across-a-spherical-cap",
  "level": "2",
  "url": "section-the-divergence-theorem.html#example-flux-across-a-spherical-cap",
  "type": "Example",
  "number": "14.9.2",
  "title": "Flux across a spherical cap.",
  "body": " Flux across a spherical cap   Let denote the top half of the sphere of radius centered at the origin. Let . Determine if flows out of or into .    We need to calculate the flux integral , which is made easier using . If we let denote the interior of this region, we get    "
},
{
  "id": "example-flux-across-a-cube",
  "level": "2",
  "url": "section-the-divergence-theorem.html#example-flux-across-a-cube",
  "type": "Example",
  "number": "14.9.3",
  "title": "Flux across a cube.",
  "body": " Flux across a cube   Let denote the surface of the unit cube with vertices at and and let . Find where is the inward unit normal to .   "
},
{
  "id": "appendix-gfdl",
  "level": "1",
  "url": "appendix-gfdl.html",
  "type": "Appendix",
  "number": "A",
  "title": "GNU Free Documentation License",
  "body": " GNU Free Documentation License  Version 1.3, 3 November 2008  Copyright copyright 2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc. < >  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.   0. PREAMBLE  The purpose of this License is to make a manual, textbook, or other functional and useful document free in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others.  This License is a kind of copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software.  We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference.    1. APPLICABILITY AND DEFINITIONS  This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law.  A Modified Version of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language.  A Secondary Section is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document's overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them.  The Invariant Sections are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none.  The Cover Texts are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words.  A Transparent copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not Transparent is called Opaque .  Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only.  The Title Page means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such, Title Page means the text near the most prominent appearance of the work's title, preceding the beginning of the body of the text.  The publisher means any person or entity that distributes copies of the Document to the public.  A section Entitled XYZ means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as Acknowledgements , Dedications , Endorsements , or History .) To Preserve the Title of such a section when you modify the Document means that it remains a section Entitled XYZ according to this definition.  The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License.    2. VERBATIM COPYING  You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3.  You may also lend copies, under the same conditions stated above, and you may publicly display copies.    3. COPYING IN QUANTITY  If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document's license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects.  If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages.  If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public.  It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document.    4. MODIFICATIONS  You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version:   Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission.  List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement.  State on the Title page the name of the publisher of the Modified Version, as the publisher.  Preserve all the copyright notices of the Document.  Add an appropriate copyright notice for your modifications adjacent to the other copyright notices.  Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below.  Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document's license notice.  Include an unaltered copy of this License.  Preserve the section Entitled History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled History in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence.  Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on. These may be placed in the History section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission.  For any section Entitled Acknowledgements or Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein.  Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles.  Delete any section Entitled Endorsements . Such a section may not be included in the Modified Version.  Do not retitle any existing section to be Entitled Endorsements or to conflict in title with any Invariant Section.  Preserve any Warranty Disclaimers.   If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version's license notice. These titles must be distinct from any other section titles.  You may add a section Entitled Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard.  You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one.  The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version.    5. COMBINING DOCUMENTS  You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers.  The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work.  In the combination, you must combine any sections Entitled History in the various original documents, forming one section Entitled History ; likewise combine any sections Entitled Acknowledgements , and any sections Entitled Dedications . You must delete all sections Entitled Endorsements .    6. COLLECTIONS OF DOCUMENTS  You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects.  You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document.    7. AGGREGATION WITH INDEPENDENT WORKS  A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an aggregate if the copyright resulting from the compilation is not used to limit the legal rights of the compilation's users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document.  If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document's Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate.    8. TRANSLATION  Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail.  If a section in the Document is Entitled Acknowledgements , Dedications , or History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title.    9. TERMINATION  You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License.  However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.  Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.  Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it.    10. FUTURE REVISIONS OF THIS LICENSE  The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See .  Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License or any later version applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Document.    11. RELICENSING  Massive Multiauthor Collaboration Site (or MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A Massive Multiauthor Collaboration (or MMC ) contained in the site means any set of copyrightable works thus published on the MMC site.  CC-BY-SA means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization.  Incorporate means to publish or republish a Document, in whole or in part, as part of another Document.  An MMC is eligible for relicensing if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008.  The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing.    ADDENDUM: How to use this License for your documents  To use this License in a document you have written, include a copy of the License in the document and put the following copyright and license notices just after the title page:  Copyright (C) YEAR YOUR NAME. Permission is granted to copy, distribute and\/or modify this document under the terms of the GNU Free Documentation License, Version 1.3 or any later version published by the Free Software Foundation; with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts. A copy of the license is included in the section entitled \"GNU Free Documentation License\".  If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the with Texts. line with this:  with the Invariant Sections being LIST THEIR TITLES, with the Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.  If you have Invariant Sections without Cover Texts, or some other combination of the three, merge those two alternatives to suit the situation.  If your document contains nontrivial examples of program code, we recommend releasing these examples in parallel under your choice of free software license, such as the GNU General Public License, to permit their use in free software.   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in MathBook XML.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
