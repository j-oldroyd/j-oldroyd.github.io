var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "Annual Edition 2019 \n             github.com\/j-oldroyd\/wvwc-calculus \n             https:\/\/github.com\/j-oldroyd\/wvwc-calculus \n         copyright "
},
{
  "id": "author-bio-TWJ",
  "level": "1",
  "url": "author-bio-TWJ.html",
  "type": "Author Biography",
  "number": "",
  "title": "Author Biography",
  "body": "\n            Go Seahawks.\n         "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "\n            So much calculus.\n         "
},
{
  "id": "section-function-review",
  "level": "1",
  "url": "section-function-review.html",
  "type": "Section",
  "number": "1.1",
  "title": "Function Review",
  "body": "Function Review \n            This section reviews basic facts about functions.\n            To appear in a later version.\n         "
},
{
  "id": "section-types-of-functions",
  "level": "1",
  "url": "section-types-of-functions.html",
  "type": "Section",
  "number": "1.2",
  "title": "Types of Functions",
  "body": "Types of Functions Linear Functions \n                The most basic example of a function that we'll study in calculus is the  linear function .\n             functions linear Linear Functions linear function \n                As the name suggests, any (non-vertical) line is an example of a linear function.\n                Such functions are completely determined by the slope of the corresponding line and the  -intercept.\n                 \n                        Equivalently, any line is determined by knowing two distinct points on the line.\n                     \n                In particular, if   then   is the slope and   is the  -intercept.\n                This is known as the  slope-intercept  equation of a line.\n                Equations of lines are also often written in  point-slope form  as  .\n             Finding the Equation of a Line \n                  Find a function   whose graph is a line passing through   and  .\n                 Polynomial Functions \n                After linear functions, we also study functions with higher powers of  .\n             functions polynomial Polynomial Functions polynomial function coefficients degree \n                    If  , then we say that   has degree  .\n                 \n                So linear functions are just polynomial functions of degree at most  .\n                And just as linear functions are determined by knowing two distinct points on the line, any polynomial functions is determined by knowing   distinct points on the polynomial.\n             Composition of Polynomial Functions \n                  Let   and  .\n                  Find  .\n                 Algebraic Functions \n                The operations of addition, subtraction, multiplication, division, taking whole number powers and taking whole number roots applied to polynomials give rise to  algebraic functions .\n                Two particularly important examples are  rational functions  and  root functions .\n             \n                     functions \n                     rational \n                     root \n                 Rational and Root Functions rational function root function \n                As functions become more complicated, we have to worry more and more about their domains.\n                For a polynomial function, the domain is the set of all real numbers   (if we ignore complex numbers).\n                The domain of a rational function is the set of all numbers where the denominator is nonzero.\n                The domain of a root function is the set of all nonnegative numbers.\n             Finding the Domain of an Algebraic Function \n                  Find the domain of\n                   .\n                 \n                  We need to find where both the radicand   is nonnegative and where  .\n                  If we solve  , we see that   must be in  .\n                  Likewise,   if and only if  .\n                  Hence the domain is\n                   .\n                 \n                We'll make use of the computer algebra system Sage to perform certain computations.\n                As an example, we use it below to solve the inequality  :\n             "
},
{
  "id": "definition-linear-functions",
  "level": "2",
  "url": "section-types-of-functions.html#definition-linear-functions",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Linear Functions.",
  "body": "functions linear Linear Functions linear function "
},
{
  "id": "example-finding-the-equation-of-a-line",
  "level": "2",
  "url": "section-types-of-functions.html#example-finding-the-equation-of-a-line",
  "type": "Example",
  "number": "1.2.2",
  "title": "Finding the Equation of a Line.",
  "body": "Finding the Equation of a Line \n                  Find a function   whose graph is a line passing through   and  .\n                 "
},
{
  "id": "definition-polynomial-functions",
  "level": "2",
  "url": "section-types-of-functions.html#definition-polynomial-functions",
  "type": "Definition",
  "number": "1.2.3",
  "title": "Polynomial Functions.",
  "body": "functions polynomial Polynomial Functions polynomial function coefficients degree "
},
{
  "id": "example-composition-of-polynomial-functions",
  "level": "2",
  "url": "section-types-of-functions.html#example-composition-of-polynomial-functions",
  "type": "Example",
  "number": "1.2.4",
  "title": "Composition of Polynomial Functions.",
  "body": "Composition of Polynomial Functions \n                  Let   and  .\n                  Find  .\n                 "
},
{
  "id": "definition-rational-and-root-functions",
  "level": "2",
  "url": "section-types-of-functions.html#definition-rational-and-root-functions",
  "type": "Definition",
  "number": "1.2.5",
  "title": "Rational and Root Functions.",
  "body": "\n                     functions \n                     rational \n                     root \n                 Rational and Root Functions rational function root function "
},
{
  "id": "example-finding-the-domain-of-an-algebraic-function",
  "level": "2",
  "url": "section-types-of-functions.html#example-finding-the-domain-of-an-algebraic-function",
  "type": "Example",
  "number": "1.2.6",
  "title": "Finding the Domain of an Algebraic Function.",
  "body": "Finding the Domain of an Algebraic Function \n                  Find the domain of\n                   .\n                 \n                  We need to find where both the radicand   is nonnegative and where  .\n                  If we solve  , we see that   must be in  .\n                  Likewise,   if and only if  .\n                  Hence the domain is\n                   .\n                 "
},
{
  "id": "section-trigonometric-functions",
  "level": "1",
  "url": "section-trigonometric-functions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Trigonometric Functions",
  "body": "Trigonometric Functions Angles and Terminal Points \n                Consider the unit circle in  , which is given by  .\n                Each point   on this circle makes an angle   with the positive  -axis, and therefore   must also determine the point completely.\n                The angle   is typically specified using either  radians  or  degrees .\n                Converting from one unit to the other can be done by noting that   radians is precisely equal to   degrees.\n                 \n                        Unless otherwise specified, we will use radians for angle measures in this course.\n                     \n             Converting from Degrees to Radians \n                        Convert   degrees to radians and   radians to degrees.\n                     \n                Just as points on the unit circle determine angles, angles also determine points.\n                A point   determined by an angle   is also known as the  terminal point  for the angle.\n                Terminal points for certain  reference angles  are useful to remember.\n             Finding Terminal Points \n                        Find the terminal points for the angles   and  .\n                     \n                        First, note that  .\n                        We therefore choose   as our reference angle and obtain the terminal point  .\n                        The terminal point for   is likewise  .\n                     The Trigonometric Functions \n                Since angles determine terminal points on circles, the coordinates   of each point on the circle can be viewed as functions of the angle  .\n                These  coordinate functions ,   and  , are the fundamental trigonometric functions  sine  and  cosine , and can be used to define the other four trigonometric functions commonly used.\n             Trigonometric Functions trigonometric functions cosine sine secant, cosecant, tangent cotangent \n                The trigonometric functions satisfy important equalities known as  Pythagorean identities .\n             Pythagorean Identities trigonometric functions Pythagorean identities \n                        Let  .\n                        Then\n                         .\n                        If   for some  , then\n                         .\n                        If   for some  , then\n                         .\n                     "
},
{
  "id": "example-converting-from-degrees-to-radians",
  "level": "2",
  "url": "section-trigonometric-functions.html#example-converting-from-degrees-to-radians",
  "type": "Example",
  "number": "1.3.1",
  "title": "Converting from Degrees to Radians.",
  "body": "Converting from Degrees to Radians \n                        Convert   degrees to radians and   radians to degrees.\n                     "
},
{
  "id": "example-finding-terminal-points",
  "level": "2",
  "url": "section-trigonometric-functions.html#example-finding-terminal-points",
  "type": "Example",
  "number": "1.3.2",
  "title": "Finding Terminal Points.",
  "body": "Finding Terminal Points \n                        Find the terminal points for the angles   and  .\n                     \n                        First, note that  .\n                        We therefore choose   as our reference angle and obtain the terminal point  .\n                        The terminal point for   is likewise  .\n                     "
},
{
  "id": "definition-trigonometric-functions",
  "level": "2",
  "url": "section-trigonometric-functions.html#definition-trigonometric-functions",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Trigonometric Functions.",
  "body": "Trigonometric Functions trigonometric functions cosine sine secant, cosecant, tangent cotangent "
},
{
  "id": "theorem-pythagorean-identities",
  "level": "2",
  "url": "section-trigonometric-functions.html#theorem-pythagorean-identities",
  "type": "Theorem",
  "number": "1.3.4",
  "title": "Pythagorean Identities.",
  "body": "Pythagorean Identities trigonometric functions Pythagorean identities \n                        Let  .\n                        Then\n                         .\n                        If   for some  , then\n                         .\n                        If   for some  , then\n                         .\n                     "
},
{
  "id": "section-the-limit-of-a-function",
  "level": "1",
  "url": "section-the-limit-of-a-function.html",
  "type": "Section",
  "number": "2.1",
  "title": "The Limit of a Function",
  "body": "The Limit of a Function Motivating Limits \n                Imagine creating a mathematical valley out of the graph of  , and in this valley walks a mathematical ant.\n                The ant is walking towards the place on the hill directly above  .\n                At  , the ant is   units above the ground.\n                At  , the ant is now   unit above the ground.\n                As the ant moves towards  , its height above the ground gets closer and closer to  .\n                To say it more clearly, and because modern calculus is built on this idea,  as the ant approaches  the point above  , its  height above the ground approaches  the value  .\n                In other words, the  limit  of   as   approaches   is  .\n             A mathematical valley minus a mathematical ant. \n                Remember that a function   of the variable   is just a rule that turns one number,  , into another number,  .\n                So the idea that the  limit of a function  is trying to express is what happens to the number   (the output) as the number   (the input) approaches some particular value.\n             \n                    Actually, functions are much more general than this.\n                    But for calculus, it won't hurt us to view functions in this way.\n                 \n                We're not quite ready to define the limit of a function precisely, but we can point one thing out right away:  the limit of a function requires two pieces of information: the function itself and the number that   is approaching. \n                The limit should then be whatever number that   is approaching.\n             Estimating the limit of a trigonometric function \n                        Let  .\n                        What is the limit of   as   approaches the number  ?\n                     \n                        We don't have a lot of tools to find limits yet, so we'll try to estimate it instead.\n                        What we'll do is we'll plug numbers that are closer and closer to   into  .\n                        Let's list several values of   as   gets closer to   from the left:\n                     Estimating  \n                        We can even let   approach   from the other direction as well (i.e. \"from the right\") and   will still approach   as   gets closer and closer to  .\n                        So it looks like the limit should be  .\n                     \n                To keep ourselves from writing \"the limit of   as   approaches some number  \" over and over, let's introduce some notation:  .\n             Limit of a piecewise function \n                        Let\n                     \n                        Find  .\n                     \n                        If we graph this function, we see that at   there is a jump in the graph.\n                        In particular, if   approaches   from the left then   approaches  , whereas if   approaches   from the right then   approaches  .\n                        So this function does not appear to have an unambiguous limit as   approaches  .\n                        Another way to say this:    does not exist .\n                     left-hand limit the right-hand limit \n                At this point, we can make a rough definition for the limit of a function.\n             Limit of a Function limit function of a single variable \n                        Let   be a function.\n                        Suppose that both the left-hand limit   and the right-hand limit   exist and are equal to the same number  .\n                        Then we say that the limit of   as   approaches   exists and is equal to  .\n                        We denote this by writing  .\n                     Piecewise function again \n                        Let   be given by\n                         \n                        Evaluate   and  .\n                     \n                        If we graph  , we get the following:\n                     Graphing  . \n                        The graph shows us that  , while  .\n                        Therefore   does not exist.\n                        On the other hand,   exists and is equal to  .\n                     \n                It's important to note that the value of a function at a point   is in general  completely independent  of the value of  , i.e., we can't always expect   to be equal to  .\n                Functions for which this is true, however, are known as  continuous functions  and will be very important in   and beyond.\n             "
},
{
  "id": "figure-math-valley",
  "level": "2",
  "url": "section-the-limit-of-a-function.html#figure-math-valley",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "A mathematical valley minus a mathematical ant. "
},
{
  "id": "example-estimating-the-limit-of-a-trigonometric-function",
  "level": "2",
  "url": "section-the-limit-of-a-function.html#example-estimating-the-limit-of-a-trigonometric-function",
  "type": "Example",
  "number": "2.1.2",
  "title": "Estimating the limit of a trigonometric function.",
  "body": "Estimating the limit of a trigonometric function \n                        Let  .\n                        What is the limit of   as   approaches the number  ?\n                     \n                        We don't have a lot of tools to find limits yet, so we'll try to estimate it instead.\n                        What we'll do is we'll plug numbers that are closer and closer to   into  .\n                        Let's list several values of   as   gets closer to   from the left:\n                     Estimating  \n                        We can even let   approach   from the other direction as well (i.e. \"from the right\") and   will still approach   as   gets closer and closer to  .\n                        So it looks like the limit should be  .\n                     "
},
{
  "id": "example-limit-of-a-piecewise-function",
  "level": "2",
  "url": "section-the-limit-of-a-function.html#example-limit-of-a-piecewise-function",
  "type": "Example",
  "number": "2.1.4",
  "title": "Limit of a piecewise function.",
  "body": "Limit of a piecewise function \n                        Let\n                     \n                        Find  .\n                     \n                        If we graph this function, we see that at   there is a jump in the graph.\n                        In particular, if   approaches   from the left then   approaches  , whereas if   approaches   from the right then   approaches  .\n                        So this function does not appear to have an unambiguous limit as   approaches  .\n                        Another way to say this:    does not exist .\n                     "
},
{
  "id": "p-43",
  "level": "2",
  "url": "section-the-limit-of-a-function.html#p-43",
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
  "body": "Limit of a Function limit function of a single variable \n                        Let   be a function.\n                        Suppose that both the left-hand limit   and the right-hand limit   exist and are equal to the same number  .\n                        Then we say that the limit of   as   approaches   exists and is equal to  .\n                        We denote this by writing  .\n                     "
},
{
  "id": "example-piecewise-function-again",
  "level": "2",
  "url": "section-the-limit-of-a-function.html#example-piecewise-function-again",
  "type": "Example",
  "number": "2.1.6",
  "title": "Piecewise function again.",
  "body": "Piecewise function again \n                        Let   be given by\n                         \n                        Evaluate   and  .\n                     \n                        If we graph  , we get the following:\n                     Graphing  . \n                        The graph shows us that  , while  .\n                        Therefore   does not exist.\n                        On the other hand,   exists and is equal to  .\n                     "
},
{
  "id": "section-computing-limits",
  "level": "1",
  "url": "section-computing-limits.html",
  "type": "Section",
  "number": "2.2",
  "title": "Computing Limits",
  "body": "Computing Limits \n                We've got a handle on how to estimate limits from  , but the process is very tedious.\n                It requires either graphing the function in question or laboriously entering values into a calculator.\n                So our first order of business now that we have the concept of a limit is to find an easier way to calculate it.\n                This will be a running theme throughout the course.\n             The Limit Laws Limit Laws Simple Limits \n                        For any value of  , the following limits hold:\n                         \n                        if   is a constant and\n                         \n                     The Limit Laws \n                        Let   be a constant, let   be a positive whole number and let   and   be functions.\n                        Suppose that   and   both exist for some number  .\n                        Then the following rules hold:\n                     The Limit Laws    (if  ) \n                        Note that item six in the table above only holds (in this class...) if   is odd or if  .\n                     \n                  gives us the ability to compute a wide variety of limits.\n             Limit of a rational function \n                        Let \n                         \n                        Evaluate  .\n                     \n                        We can evaluate   by making use of the appropriate Limit Laws and  :\n                     \n                In particular, Limit Laws 1-5 give us the following: if   is a polynomial or rational function, then   as long as   is in the domain of  .\n                If   is not in the domain, trickery may be required.\n             Trickery \n                        Evaluate \n                         \n                     \n                        First, note that we can't use the Limit Laws right away since the denominator is   at  .\n                        What we need to do is use algebra to simplify the expression inside the limit:\n                     \n                        Now we can use the Limit Laws to find the limit as   approaches  , since we no longer have a divide-by-zero problem in the denominator:\n                     "
},
{
  "id": "p-51",
  "level": "2",
  "url": "section-computing-limits.html#p-51",
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
  "body": "Simple Limits \n                        For any value of  , the following limits hold:\n                         \n                        if   is a constant and\n                         \n                     "
},
{
  "id": "theorem-the-limit-laws",
  "level": "2",
  "url": "section-computing-limits.html#theorem-the-limit-laws",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "The Limit Laws.",
  "body": "The Limit Laws \n                        Let   be a constant, let   be a positive whole number and let   and   be functions.\n                        Suppose that   and   both exist for some number  .\n                        Then the following rules hold:\n                     The Limit Laws    (if  ) \n                        Note that item six in the table above only holds (in this class...) if   is odd or if  .\n                     "
},
{
  "id": "example-limit-of-a-rational-function",
  "level": "2",
  "url": "section-computing-limits.html#example-limit-of-a-rational-function",
  "type": "Example",
  "number": "2.2.4",
  "title": "Limit of a rational function.",
  "body": "Limit of a rational function \n                        Let \n                         \n                        Evaluate  .\n                     \n                        We can evaluate   by making use of the appropriate Limit Laws and  :\n                     "
},
{
  "id": "example-trickery",
  "level": "2",
  "url": "section-computing-limits.html#example-trickery",
  "type": "Example",
  "number": "2.2.5",
  "title": "Trickery.",
  "body": "Trickery \n                        Evaluate \n                         \n                     \n                        First, note that we can't use the Limit Laws right away since the denominator is   at  .\n                        What we need to do is use algebra to simplify the expression inside the limit:\n                     \n                        Now we can use the Limit Laws to find the limit as   approaches  , since we no longer have a divide-by-zero problem in the denominator:\n                     "
},
{
  "id": "section-continuity",
  "level": "1",
  "url": "section-continuity.html",
  "type": "Section",
  "number": "2.3",
  "title": "Continuity",
  "body": "Continuity \n            We saw in   that for a function like  , we could evaluate   by simply plugging in  .\n            In other words,  .\n            Functions that have this property are extremely important in mathematics, so we give them a name.\n         Continuous Functions continuous functions definition continuous at  discontinuous at  \n              says that it is extremely easy to evaluate limits of continuous functions: just plug the value that   is approaching into the function  .\n            So the limit is then  .\n            If a function   is continuous on an interval, then this means that the graph of   has no \"gaps\" over this interval.\n         Determining if a function is continuous \n                    Let  .\n                    Is   continuous on  ?\n                 \n                    If we graph  , then we see that it is discontinuous at  .\n                    Therefore   is discontinuous on the interval  .\n                 continuous from the left continuous from the right Continuity over a closed interval \n                    Let   be given by\n                     \n                    Is   continuous over  ?\n                 \n                    If we graph   over this interval, we get the following:\n                 Graphing   over  . \n                    So from the graph it appears that   is continuous on this interval.\n                 \n            Remember that we said a function is continuous over an interval if its graph has no gaps over that interval.\n            This is a very rough explanation of continuity, but it should make the following theorem plausible.\n         Continuous Functions \n                    Polynomial, rational, root and trigonometric functions are continuous at every point of their domain.\n                 \n            Although it doesn't directly mention piecewise functions,   is still useful for determining if they are continuous.\n            If a piecewise function is defined using any of the functions from  , then the only points we really need to check for continuity are the the places where the function \"changes rules\".\n         Another piecewise function \n                    Over what intervals is the function   given by\n                     \n                    continuous?\n                 \n                    We need to check continuity at   and  .\n                    At  , we need to make sure that   exists and is equal to  .\n                    Since\n                     \n                    and\n                     \n                    it follows that   does not exist.\n                    So   can't be continuous at  .\n                 \n                    On the other hand, since  , it follows that   exists and is equal to  .\n                    Since   also equals  ,   is continuous at  .\n                    So   must be continuous on  .\n                 \n            We can also build more complicated continuous functions out of simpler ones.\n         Combining Continuous Functions \n                    Let   and   be continuous at a point  .\n                    Then the following statements are true:\n                      is continuous at  .  is continuous at  .  is continuous at   if  .  is continuous at   if   is in the domain of  . \n                 Determining where functions are continuous \n                    Let  .\n                    On what intervals is   continuous?\n                 \n                    By  ,   should be continuous wherever   and   are all defined.\n                    Since   is defined for  ,   is defined for   and   is defined for  , it follows that   is continuous on  .\n                 Using continuity to evaluate a limit \n                    Evaluate  .\n                 \n                    Since   and   are all continuous, this means that   must be continuous as well.\n                    Therefore\n                     \n                 "
},
{
  "id": "definition-continuous-functions",
  "level": "2",
  "url": "section-continuity.html#definition-continuous-functions",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Continuous Functions.",
  "body": "Continuous Functions continuous functions definition continuous at  discontinuous at  "
},
{
  "id": "example-determining-if-a-function-is-continuous",
  "level": "2",
  "url": "section-continuity.html#example-determining-if-a-function-is-continuous",
  "type": "Example",
  "number": "2.3.2",
  "title": "Determining if a function is continuous.",
  "body": "Determining if a function is continuous \n                    Let  .\n                    Is   continuous on  ?\n                 \n                    If we graph  , then we see that it is discontinuous at  .\n                    Therefore   is discontinuous on the interval  .\n                 "
},
{
  "id": "p-67",
  "level": "2",
  "url": "section-continuity.html#p-67",
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
  "body": "Continuity over a closed interval \n                    Let   be given by\n                     \n                    Is   continuous over  ?\n                 \n                    If we graph   over this interval, we get the following:\n                 Graphing   over  . \n                    So from the graph it appears that   is continuous on this interval.\n                 "
},
{
  "id": "theorem-continuous-functions",
  "level": "2",
  "url": "section-continuity.html#theorem-continuous-functions",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "Continuous Functions.",
  "body": "Continuous Functions \n                    Polynomial, rational, root and trigonometric functions are continuous at every point of their domain.\n                 "
},
{
  "id": "example-another-piecewise-function",
  "level": "2",
  "url": "section-continuity.html#example-another-piecewise-function",
  "type": "Example",
  "number": "2.3.6",
  "title": "Another piecewise function.",
  "body": "Another piecewise function \n                    Over what intervals is the function   given by\n                     \n                    continuous?\n                 \n                    We need to check continuity at   and  .\n                    At  , we need to make sure that   exists and is equal to  .\n                    Since\n                     \n                    and\n                     \n                    it follows that   does not exist.\n                    So   can't be continuous at  .\n                 \n                    On the other hand, since  , it follows that   exists and is equal to  .\n                    Since   also equals  ,   is continuous at  .\n                    So   must be continuous on  .\n                 "
},
{
  "id": "theorem-combining-continuous-functions",
  "level": "2",
  "url": "section-continuity.html#theorem-combining-continuous-functions",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "Combining Continuous Functions.",
  "body": "Combining Continuous Functions \n                    Let   and   be continuous at a point  .\n                    Then the following statements are true:\n                      is continuous at  .  is continuous at  .  is continuous at   if  .  is continuous at   if   is in the domain of  . \n                 "
},
{
  "id": "example-determining-where-functions-are-continuous",
  "level": "2",
  "url": "section-continuity.html#example-determining-where-functions-are-continuous",
  "type": "Example",
  "number": "2.3.8",
  "title": "Determining where functions are continuous.",
  "body": "Determining where functions are continuous \n                    Let  .\n                    On what intervals is   continuous?\n                 \n                    By  ,   should be continuous wherever   and   are all defined.\n                    Since   is defined for  ,   is defined for   and   is defined for  , it follows that   is continuous on  .\n                 "
},
{
  "id": "example-using-continuity-to-evaluate-a-limit",
  "level": "2",
  "url": "section-continuity.html#example-using-continuity-to-evaluate-a-limit",
  "type": "Example",
  "number": "2.3.9",
  "title": "Using continuity to evaluate a limit.",
  "body": "Using continuity to evaluate a limit \n                    Evaluate  .\n                 \n                    Since   and   are all continuous, this means that   must be continuous as well.\n                    Therefore\n                     \n                 "
},
{
  "id": "section-limits-involving-infinity",
  "level": "1",
  "url": "section-limits-involving-infinity.html",
  "type": "Section",
  "number": "2.4",
  "title": "Limits Involving Infinity",
  "body": "Limits Involving Infinity Limits Involving Vertical Asymptotes \n                Consider the function  .\n                We know from algebra that this function has a vertical asymptote at  , and so in particular is undefined there.\n                However, just because it's undefined at   doesn't mean that we can't gather important information about the function near  .\n                This is because the function behaves in a very specific way as we let   approach  .\n                For example, if we let   approach   from the right, then   increases without bound.\n                Similarly,   decreases without bound as   approaches   from the left.\n             \n                Even though   is not approaching a specific value as   approaches   from either direction, this behavior shows up often enough and is important enough that we want to introduce notation to describe it.\n                For this function, we would say   and  .\n             \n                Now consider  .\n                Then   since the function increases without bound when   approaches   from both directions.\n                In this case, we say that  .\n             \n                    It's  extremely  important to remember that the symbol   is not being used to represent a number or variable that we can perform algebra on.\n                    It's a symbol indicating how a particular function is behaving at a certain point.\n                 \n                If   is a function and  ,   or  , then this means that the function has a vertical asymptote at  .\n                In this course, this basically corresponds to a divide-by-zero problem.\n             Infinite limit involving a rational function \n                        Determine  .\n                     \n                        If we try to plug in   into   we get  , which means we have run into a divide-by-zero problem.\n                        This is a good hint that the limit should be  , we just need to figure out the correct sign.\n                        There are a couple ways we can do this.\n                        First, we could set up a sign chart for this function to see where it's positive and negative and then use that to see if it's increasing or decreasing without bound as  .\n                        Second, we could just plug in values of   that are closer and closer to   and see how the function behaves.\n                        Either way, we see that it's negative for values of   that are close to (but less than)  .\n                        Hence  .\n                     Limits at Infinity \n                The previous subsection involved limits of functions whose values approached  .\n                Now we look at what can happen to a function if its input values approach  .\n                First, a definition of sorts.\n             Limit at Infinity \n                        Let   be a function.\n                        We say that   if   gets (and stays) arbitrarily close to   as   is made arbitrarily large.\n                        Similarly, we say that   if   gets (and stays) arbitrarily close to   as   is made arbitrarily small.\n                     An important limit at infinity \n                        Let  .\n                        Determine  .\n                     \n                        As   gets arbitrarily large,   gets arbitrarily close to  .\n                        Therefore  .\n                     \n                  holds for many other reciprocal powers of  .\n                In particular, if   then  .\n             A limit at infinity involving cosine \n                        Let  .\n                        Compute  .\n                     \n                        First, note that  .\n                        By the previous remark, we know that  .\n                        Therefore  .\n                     \n                    The reason we were able to find the limit in   was because of the following fact: if   exists and if   is continuous at  , then  .\n                    Basically, we can swap continuous functions with limits without causing any harm.\n                 \n                For limits at infinity involving powers of a variable, it is the highest power variables that determine the outcome.\n             Limit at infinity of a rational function \n                        Let \n                         \n                        Find   and  .\n                     \n                        Let's start with  .\n                        To figure out what this limit should be, we could try the following.\n                        As   gets very large the   term in the numerator should drown out everything else in the numerator.\n                        Similarly, the   term in the denominator should drown out everything else in the denominator.\n                        So for   very large,  .\n                        Hence   should probably go to   as   goes to  .\n                        To make this more precise, we'll just divide the numerator and denominator by the largest power of the denominator,  , and then take the limit:\n                     \n                        We can find   using the same idea.\n                        Just divide by the highest power in the denominator and then take the limit:\n                     \n                These limits at infinity have a graphical meaning as well.\n                If   or   exists and is equal to  , then the line   is a horizontal asymptote of the graph of  .\n             Asymptotic equivalence asymptotically equivalent \n                        All we need to do is compute  \n                         \n                        Therefore  .\n                     "
},
{
  "id": "example-infinite-limit-involving-a-rational-function",
  "level": "2",
  "url": "section-limits-involving-infinity.html#example-infinite-limit-involving-a-rational-function",
  "type": "Example",
  "number": "2.4.1",
  "title": "Infinite limit involving a rational function.",
  "body": "Infinite limit involving a rational function \n                        Determine  .\n                     \n                        If we try to plug in   into   we get  , which means we have run into a divide-by-zero problem.\n                        This is a good hint that the limit should be  , we just need to figure out the correct sign.\n                        There are a couple ways we can do this.\n                        First, we could set up a sign chart for this function to see where it's positive and negative and then use that to see if it's increasing or decreasing without bound as  .\n                        Second, we could just plug in values of   that are closer and closer to   and see how the function behaves.\n                        Either way, we see that it's negative for values of   that are close to (but less than)  .\n                        Hence  .\n                     "
},
{
  "id": "definition-limit-at-infinity",
  "level": "2",
  "url": "section-limits-involving-infinity.html#definition-limit-at-infinity",
  "type": "Definition",
  "number": "2.4.2",
  "title": "Limit at Infinity.",
  "body": "Limit at Infinity \n                        Let   be a function.\n                        We say that   if   gets (and stays) arbitrarily close to   as   is made arbitrarily large.\n                        Similarly, we say that   if   gets (and stays) arbitrarily close to   as   is made arbitrarily small.\n                     "
},
{
  "id": "example-an-important-limit-at-infinity",
  "level": "2",
  "url": "section-limits-involving-infinity.html#example-an-important-limit-at-infinity",
  "type": "Example",
  "number": "2.4.3",
  "title": "An important limit at infinity.",
  "body": "An important limit at infinity \n                        Let  .\n                        Determine  .\n                     \n                        As   gets arbitrarily large,   gets arbitrarily close to  .\n                        Therefore  .\n                     "
},
{
  "id": "example-a-limit-at-infinity-involving-sine",
  "level": "2",
  "url": "section-limits-involving-infinity.html#example-a-limit-at-infinity-involving-sine",
  "type": "Example",
  "number": "2.4.4",
  "title": "A limit at infinity involving cosine.",
  "body": "A limit at infinity involving cosine \n                        Let  .\n                        Compute  .\n                     \n                        First, note that  .\n                        By the previous remark, we know that  .\n                        Therefore  .\n                     "
},
{
  "id": "example-limit-at-infinity-of-a-rational-function",
  "level": "2",
  "url": "section-limits-involving-infinity.html#example-limit-at-infinity-of-a-rational-function",
  "type": "Example",
  "number": "2.4.5",
  "title": "Limit at infinity of a rational function.",
  "body": "Limit at infinity of a rational function \n                        Let \n                         \n                        Find   and  .\n                     \n                        Let's start with  .\n                        To figure out what this limit should be, we could try the following.\n                        As   gets very large the   term in the numerator should drown out everything else in the numerator.\n                        Similarly, the   term in the denominator should drown out everything else in the denominator.\n                        So for   very large,  .\n                        Hence   should probably go to   as   goes to  .\n                        To make this more precise, we'll just divide the numerator and denominator by the largest power of the denominator,  , and then take the limit:\n                     \n                        We can find   using the same idea.\n                        Just divide by the highest power in the denominator and then take the limit:\n                     "
},
{
  "id": "example-asymptotic-equivalence",
  "level": "2",
  "url": "section-limits-involving-infinity.html#example-asymptotic-equivalence",
  "type": "Example",
  "number": "2.4.6",
  "title": "Asymptotic equivalence.",
  "body": "Asymptotic equivalence asymptotically equivalent \n                        All we need to do is compute  \n                         \n                        Therefore  .\n                     "
},
{
  "id": "section-the-definition-of-the-derivative",
  "level": "1",
  "url": "section-the-definition-of-the-derivative.html",
  "type": "Section",
  "number": "3.1",
  "title": "The Definition of the Derivative",
  "body": "The Definition of the Derivative Tangent Lines secant lines Secant lines on a parabola \n                        Let  .\n                        Find the slope of the secant line through   and  .\n                     \n                        Since the slope of the secant line is the average rate of change, we get that the slope must be equal to\n                         \n                     tangent line instantaneous rate of change Tangent Lines \n                        The tangent line to a curve   through a point   is the line passing through   with slope given by\n                         \n                        assuming this limit exists.\n                        The slope of the tangent line represents the slope of the graph of   at   and gives the instantaneous rate of change of   at  .\n                     Tangent line to a root \n                        Find the equation of the tangent line to   through the point  .\n                     \n                        We need two things to find the equation of a line: the slope of the line and a point on the line.\n                        Since we know the tangent line has to pass through  , we just need to find the slope.\n                        The slope is given by\n                         \n                        Hence the equation of the tangent line through   is\n                         \n                     \n                As a reminder, the slope of the tangent line represents the slope, or instantaneous rate of change, of the function.\n             Velocity from position \n                        The displacement (i.e. position) of a particle moving in a straight line is described by the function  , where   is in seconds and   is in meters.\n                        Find the velocity, or instantaneous rate of change, of the particle at  .\n                     \n                        The velocity is just the slope of the tangent line to   at  , which we can find as follows:\n                     \n                        At this step it's a little unclear where to go next, so we'll try long division.\n                        If we do so, we get\n                         \n                        Hence the velocity must be\n                         \n                        meters per second.\n                     \n                  was a little tricky because we needed to compute  , and it was unclear how to simplify this at first.\n                This stemmed in large part from how we computed the velocity in the first place, using the formula\n                 \n                or more generally\n                 .\n             \n                We want to rewrite this formula to make it a little easier to work with in certain cases.\n                We'll do this by making the denominator easier to handle.\n                In particular, set  .\n                Then\n                 \n                Either formula can be used to compute the slope of the tangent line.\n             Velocity revisited \n                        Let   be given as in  .\n                        Find the velocity at  .\n                     \n                        We know that the velocity should be  , but we'll try to find it again using our new formula.\n                        So the velocity should also be\n                     \n                Typically, if   is easy to factor in terms of   we'll want to use the first formula we had for computing rates of change.\n                Otherwise, we'll stick with the new formula involving  .\n             The Derivative \n                Suppose we go back to   one more time, but now we want to find the velocity of   at an arbitrary number  .\n                Then we could still use our limit formulas, which would give us\n             derivative Definition of the Derivative derivative definition functions differentiable differentiable \n                    We could also define the derivative by\n                     \n                    These two limits are equivalent.\n                 \n                The derivative of a function   at a point   represents two things: the slope of the tangent line to   at   and the instantaneous rate of change of   at  .\n             Slope of the sine function \n                        Let  .\n                        Find its slope at  .\n                     \n                        The slope at   is exactly  , which is\n                         \n                     Tangent line of the sine function \n                        Find the equation of the tangent line to   at  .\n                     \n                        The tangent line must pass through   and must have slope  , so its equation is\n                         \n                        or just  .\n                     "
},
{
  "id": "p-106",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#p-106",
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
  "body": "Secant lines on a parabola \n                        Let  .\n                        Find the slope of the secant line through   and  .\n                     \n                        Since the slope of the secant line is the average rate of change, we get that the slope must be equal to\n                         \n                     "
},
{
  "id": "p-109",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#p-109",
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
  "body": "Tangent Lines \n                        The tangent line to a curve   through a point   is the line passing through   with slope given by\n                         \n                        assuming this limit exists.\n                        The slope of the tangent line represents the slope of the graph of   at   and gives the instantaneous rate of change of   at  .\n                     "
},
{
  "id": "example-tangent-line-to-a-root",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#example-tangent-line-to-a-root",
  "type": "Example",
  "number": "3.1.3",
  "title": "Tangent line to a root.",
  "body": "Tangent line to a root \n                        Find the equation of the tangent line to   through the point  .\n                     \n                        We need two things to find the equation of a line: the slope of the line and a point on the line.\n                        Since we know the tangent line has to pass through  , we just need to find the slope.\n                        The slope is given by\n                         \n                        Hence the equation of the tangent line through   is\n                         \n                     "
},
{
  "id": "example-velocity-from-position",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#example-velocity-from-position",
  "type": "Example",
  "number": "3.1.4",
  "title": "Velocity from position.",
  "body": "Velocity from position \n                        The displacement (i.e. position) of a particle moving in a straight line is described by the function  , where   is in seconds and   is in meters.\n                        Find the velocity, or instantaneous rate of change, of the particle at  .\n                     \n                        The velocity is just the slope of the tangent line to   at  , which we can find as follows:\n                     \n                        At this step it's a little unclear where to go next, so we'll try long division.\n                        If we do so, we get\n                         \n                        Hence the velocity must be\n                         \n                        meters per second.\n                     "
},
{
  "id": "example-velocity-revisited",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#example-velocity-revisited",
  "type": "Example",
  "number": "3.1.5",
  "title": "Velocity revisited.",
  "body": "Velocity revisited \n                        Let   be given as in  .\n                        Find the velocity at  .\n                     \n                        We know that the velocity should be  , but we'll try to find it again using our new formula.\n                        So the velocity should also be\n                     "
},
{
  "id": "p-123",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#p-123",
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
  "body": "Definition of the Derivative derivative definition functions differentiable differentiable "
},
{
  "id": "example-slope-of-the-sine-function",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#example-slope-of-the-sine-function",
  "type": "Example",
  "number": "3.1.7",
  "title": "Slope of the sine function.",
  "body": "Slope of the sine function \n                        Let  .\n                        Find its slope at  .\n                     \n                        The slope at   is exactly  , which is\n                         \n                     "
},
{
  "id": "example-tangent-line-of-the-sine-function",
  "level": "2",
  "url": "section-the-definition-of-the-derivative.html#example-tangent-line-of-the-sine-function",
  "type": "Example",
  "number": "3.1.8",
  "title": "Tangent line of the sine function.",
  "body": "Tangent line of the sine function \n                        Find the equation of the tangent line to   at  .\n                     \n                        The tangent line must pass through   and must have slope  , so its equation is\n                         \n                        or just  .\n                     "
},
{
  "id": "section-the-derivative-as-a-function",
  "level": "1",
  "url": "section-the-derivative-as-a-function.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Derivative as a Function",
  "body": "The Derivative as a Function The Derivative Function \n                There's no reason we can't look at an arbitrary value for   in the definition of   given in  .\n                If we do this, we can define the  derivative function .\n             The Derivative Function derivative derivative function derivative function derivative differentiable on  differentiable Computing a derivative \n                        Compute the derivative of  .\n                     \n                        Using  , we have\n                         \n                     \n                If   is a function, then its derivative   (assuming it exists!) is a function that gives the rate of change of   at  , or equivalently the slope of the tangent line to   at  .\n             Sketching a derivative \n                        A function   is given by the following graph:\n                         Graph of  . \n                     \n                        Sketch  .\n                     \n                        Remember that   represents the slope of  , so sketching   amounts to sketching the different values that the slopes of   can take.\n                        We can eyeball these values from  .\n                        A rough sketch of  , added to the original graph, may look like the following:\n                         Graph of  . \n                     \n                We've mentioned before that continuous functions are functions whose graphs can be drawn without lifting your pencil off of the page.\n                Likewise, differentiable functions are functions whose graphs can be drawn \"smoothly\", without any sudden movements or cusps, and without drawing a vertical tangent line.\n                If we think about these two concepts, we may suspect that a differentiable function is also continuous.\n                If we can draw a graph smoothly, we certainly can't lift our pencil off the page to draw it.\n                The next theorem makes this precise.\n             Differentiable Functions Are Continuous \n                        Let   be a function that is differentiable at  .\n                        Then   is continuous at  .\n                     \n                        We need to show that   exists and is equal to  .\n                        To do this, we'll start by considering (somewhat counterintuitively)  :\n                         \n                        Note that we are using our alternate definition of the derivative here.\n                     \n                        Now we can prove that   as follows:\n                         \n                        So  , which means that   is continuous at  .\n                     \n                At this point we might think that a continuous function should also be differentiable, but this is not the case.\n             A continuous function that is not differentiable at a point \n                        Let  .\n                        Show that   is  not  differentiable at  .\n                     \n                        If we graph   it looks like it shouldn't be differentiable at   because of the cusp.\n                        We'll try to prove this mathematically by showing that the limit in   doesn't exist if  .\n                        First, we'll compute the left hand limit:\n                         \n                        Now, the right hand limit:\n                         \n                        Since these limits are different,   does not exist.\n                        Hence   is not differentiable at  .\n                     \n                    You may think that a continuous function must at least be differentiable \"almost everywhere\" at this point.\n                    After all, how could it be possible to draw a graph without lifting your pencil off the paper that still has a cusp or a vertical tangent line  everywhere ?\n                    Most mathematicians before the   century thought this as well, until Weierstrass came up with a function, the  Weierstrass function , that is continuous everywhere but differentiable  nowhere .\n                 Higher Order Derivatives Acceleration from position \n                        The position of some particle moving in a line is given by  , where   is in seconds and   is in meters.\n                        Find  , the acceleration of the particle at time  .\n                     \n                        Acceleration is the rate of change of velocity, and velocity is the rate of change of position.\n                        So we should probably find the velocity first!\n                        Let's call it  .\n                        We have\n                         \n                        Now we can get the acceleration as well:\n                         \n                     second-order derivative -order Derivatives derivative -order derivative -order derivative \n                Although it gets more difficult to assign a physical or geometric significance to higher order derivatives, we can still derive meaning from the second derivative.\n                One interpretation of the second derivative is as acceleration, as shown in  , and it turns out there's a nice geometric interpretation as well.\n                Recall that if   is a function then   represents the slope, or rate of change, of the graph of   at  .\n                Therefore   represents the rate of change of the slope, i.e. how quickly the slope is increasing or decreasing.\n                If   then the slope of   should be increasing, leading to a u-shaped graph.\n                Conversely, if   then the slope of   should be decreasing, leading to an upside down u-shaped graph.\n                This leads to the following definition.\n             Concavity concave up concave down \n                So functions that are concave up on an interval tend to be u-shaped on that interval, and functions that are concave down tend to be upside down u-shaped.\n                See  .\n             Concavity "
},
{
  "id": "definition-the-derivative-function",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#definition-the-derivative-function",
  "type": "Definition",
  "number": "3.2.1",
  "title": "The Derivative Function.",
  "body": "The Derivative Function derivative derivative function derivative function derivative differentiable on  differentiable "
},
{
  "id": "example-computing-a-derivative",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#example-computing-a-derivative",
  "type": "Example",
  "number": "3.2.2",
  "title": "Computing a derivative.",
  "body": "Computing a derivative \n                        Compute the derivative of  .\n                     \n                        Using  , we have\n                         \n                     "
},
{
  "id": "example-sketching-a-derivative",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#example-sketching-a-derivative",
  "type": "Example",
  "number": "3.2.3",
  "title": "Sketching a derivative.",
  "body": "Sketching a derivative \n                        A function   is given by the following graph:\n                         Graph of  . \n                     \n                        Sketch  .\n                     \n                        Remember that   represents the slope of  , so sketching   amounts to sketching the different values that the slopes of   can take.\n                        We can eyeball these values from  .\n                        A rough sketch of  , added to the original graph, may look like the following:\n                         Graph of  . \n                     "
},
{
  "id": "theorem-differentiable-functions-are-continuous",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#theorem-differentiable-functions-are-continuous",
  "type": "Theorem",
  "number": "3.2.6",
  "title": "Differentiable Functions Are Continuous.",
  "body": "Differentiable Functions Are Continuous \n                        Let   be a function that is differentiable at  .\n                        Then   is continuous at  .\n                     \n                        We need to show that   exists and is equal to  .\n                        To do this, we'll start by considering (somewhat counterintuitively)  :\n                         \n                        Note that we are using our alternate definition of the derivative here.\n                     \n                        Now we can prove that   as follows:\n                         \n                        So  , which means that   is continuous at  .\n                     "
},
{
  "id": "example-a-continuous-function-that-is-not-differentiable-at-a-point",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#example-a-continuous-function-that-is-not-differentiable-at-a-point",
  "type": "Example",
  "number": "3.2.7",
  "title": "A continuous function that is not differentiable at a point.",
  "body": "A continuous function that is not differentiable at a point \n                        Let  .\n                        Show that   is  not  differentiable at  .\n                     \n                        If we graph   it looks like it shouldn't be differentiable at   because of the cusp.\n                        We'll try to prove this mathematically by showing that the limit in   doesn't exist if  .\n                        First, we'll compute the left hand limit:\n                         \n                        Now, the right hand limit:\n                         \n                        Since these limits are different,   does not exist.\n                        Hence   is not differentiable at  .\n                     "
},
{
  "id": "example-acceleration-from-position",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#example-acceleration-from-position",
  "type": "Example",
  "number": "3.2.8",
  "title": "Acceleration from position.",
  "body": "Acceleration from position \n                        The position of some particle moving in a line is given by  , where   is in seconds and   is in meters.\n                        Find  , the acceleration of the particle at time  .\n                     \n                        Acceleration is the rate of change of velocity, and velocity is the rate of change of position.\n                        So we should probably find the velocity first!\n                        Let's call it  .\n                        We have\n                         \n                        Now we can get the acceleration as well:\n                         \n                     "
},
{
  "id": "p-149",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#p-149",
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
  "body": "-order Derivatives derivative -order derivative -order derivative "
},
{
  "id": "definition-concavity",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#definition-concavity",
  "type": "Definition",
  "number": "3.2.10",
  "title": "Concavity.",
  "body": "Concavity concave up concave down "
},
{
  "id": "figure-concavity-graphs",
  "level": "2",
  "url": "section-the-derivative-as-a-function.html#figure-concavity-graphs",
  "type": "Figure",
  "number": "3.2.11",
  "title": "",
  "body": "Concavity "
},
{
  "id": "section-differentiation-formulas",
  "level": "1",
  "url": "section-differentiation-formulas.html",
  "type": "Section",
  "number": "3.3",
  "title": "Differentiation Formulas",
  "body": "Differentiation Formulas constant rule The Power Rule and Trigonometric Derivatives power rule The Power Rule derivative differentiation formulas power rule \n                        Let   where   is some real number.\n                        Then  .\n                     \n                Note that   is actually quite general: it works for all powers of  !\n                This includes negative powers and fractional powers.\n             Derivatives using the power rule \n                        Find the derivatives of the following functions:\n                         . . . \n                     \n                        The derivative of   isn't too hard to find using the power rule, and we quickly get  .\n                        For  , first rewrite it as  .\n                        Then  .\n                        Finally,  .\n                     \n                With a little bit of geometry and the squeeze theorem, we can get the derivatives of the basic trigonometric functions   and  .\n             Derivatives of Sine and Cosine derivatives differentiation formulas sine and cosine \n                        Let   be in radians.\n                        Then\n                         \n                     \n                Note that if   is in degrees instead of radians these formulas don't work.\n                Instead, they become\n                 \n             Concavity of the sine function \n                        On which intervals is   concave up?\n                     \n                        We need to find where   is positive.\n                        Since  , this means we need to figure out where   is  negative .\n                        If we go back to the unit circle definition of sine, then we can see that   on the following intervals:\n                         \n                        So   is concave up on every open interval of the form   where   is some integer.\n                     Derivatives of Sums and Constant Multiples \n                Now that we have derivative formulas for some basic functions, we want to extend these to more complicated functions.\n                For this section we'll look at what happens when we multiply a function by a constant or add it to another function.\n                In the next two sections we'll consider more advanced rules.\n             Constant Multiple Rule derivative differentiation formulas constant multiple rule \n                        Let   be differentiable function and let   be some constant.\n                        Then  .\n                     \n                        To prove this, we go back to  :\n                         \n                        Hence the derivative of   is  .\n                     \n                We can find the derivative of the sum of two functions just as easily.\n             Sum Rule derivative differentiation formulas sum rule \n                        Let   and   be two differentiable functions.\n                        Then  .\n                     Product Rule and Quotient Rule product rule The Product Rule derivative differentiation formulas product rule \n                        Let   and   be differentiable functions.\n                        Then\n                         \n                     \n                        We prove this using the definition of the derivative:\n                         \n                     Using the product rule \n                        Let  .\n                        Find  .\n                     \n                        We could foil this out and take derivatives, but it will be easier to use the product rule.\n                     The Quotient Rule \n                Now that we know how to differentiate products, we move on to quotients.\n             The Quotient Rule \n                        Let   and   be differentiable functions.\n                        Then\n                         \n                        wherever  .\n                     Derivative of tangent \n                        Let  .\n                        Find  .\n                     \n                        Since  , then we can apply the quotient rule to get the derivative of  :\n                         \n                     \n                The derivatives for   and   may also be computed using the quotient rule and the facts that   and  .\n             "
},
{
  "id": "p-154",
  "level": "2",
  "url": "section-differentiation-formulas.html#p-154",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "constant rule "
},
{
  "id": "p-155",
  "level": "2",
  "url": "section-differentiation-formulas.html#p-155",
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
  "body": "The Power Rule derivative differentiation formulas power rule \n                        Let   where   is some real number.\n                        Then  .\n                     "
},
{
  "id": "example-derivatives-using-the-power-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#example-derivatives-using-the-power-rule",
  "type": "Example",
  "number": "3.3.2",
  "title": "Derivatives using the power rule.",
  "body": "Derivatives using the power rule \n                        Find the derivatives of the following functions:\n                         . . . \n                     \n                        The derivative of   isn't too hard to find using the power rule, and we quickly get  .\n                        For  , first rewrite it as  .\n                        Then  .\n                        Finally,  .\n                     "
},
{
  "id": "theorem-derivatives-of-sine-and-cosine",
  "level": "2",
  "url": "section-differentiation-formulas.html#theorem-derivatives-of-sine-and-cosine",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "Derivatives of Sine and Cosine.",
  "body": "Derivatives of Sine and Cosine derivatives differentiation formulas sine and cosine \n                        Let   be in radians.\n                        Then\n                         \n                     "
},
{
  "id": "example-concavity-of-the-sine-function",
  "level": "2",
  "url": "section-differentiation-formulas.html#example-concavity-of-the-sine-function",
  "type": "Example",
  "number": "3.3.4",
  "title": "Concavity of the sine function.",
  "body": "Concavity of the sine function \n                        On which intervals is   concave up?\n                     \n                        We need to find where   is positive.\n                        Since  , this means we need to figure out where   is  negative .\n                        If we go back to the unit circle definition of sine, then we can see that   on the following intervals:\n                         \n                        So   is concave up on every open interval of the form   where   is some integer.\n                     "
},
{
  "id": "theorem-constant-multiple-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#theorem-constant-multiple-rule",
  "type": "Theorem",
  "number": "3.3.5",
  "title": "Constant Multiple Rule.",
  "body": "Constant Multiple Rule derivative differentiation formulas constant multiple rule \n                        Let   be differentiable function and let   be some constant.\n                        Then  .\n                     \n                        To prove this, we go back to  :\n                         \n                        Hence the derivative of   is  .\n                     "
},
{
  "id": "theorem-sum-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#theorem-sum-rule",
  "type": "Theorem",
  "number": "3.3.6",
  "title": "Sum Rule.",
  "body": "Sum Rule derivative differentiation formulas sum rule \n                        Let   and   be two differentiable functions.\n                        Then  .\n                     "
},
{
  "id": "p-170",
  "level": "2",
  "url": "section-differentiation-formulas.html#p-170",
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
  "body": "The Product Rule derivative differentiation formulas product rule \n                        Let   and   be differentiable functions.\n                        Then\n                         \n                     \n                        We prove this using the definition of the derivative:\n                         \n                     "
},
{
  "id": "example-using-the-product-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#example-using-the-product-rule",
  "type": "Example",
  "number": "3.3.8",
  "title": "Using the product rule.",
  "body": "Using the product rule \n                        Let  .\n                        Find  .\n                     \n                        We could foil this out and take derivatives, but it will be easier to use the product rule.\n                     "
},
{
  "id": "theorem-the-quotient-rule",
  "level": "2",
  "url": "section-differentiation-formulas.html#theorem-the-quotient-rule",
  "type": "Theorem",
  "number": "3.3.9",
  "title": "The Quotient Rule.",
  "body": "The Quotient Rule \n                        Let   and   be differentiable functions.\n                        Then\n                         \n                        wherever  .\n                     "
},
{
  "id": "example-derivative-of-tangent",
  "level": "2",
  "url": "section-differentiation-formulas.html#example-derivative-of-tangent",
  "type": "Example",
  "number": "3.3.10",
  "title": "Derivative of tangent.",
  "body": "Derivative of tangent \n                        Let  .\n                        Find  .\n                     \n                        Since  , then we can apply the quotient rule to get the derivative of  :\n                         \n                     "
},
{
  "id": "section-the-chain-rule",
  "level": "1",
  "url": "section-the-chain-rule.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Chain Rule",
  "body": "The Chain Rule Chain Rule The Chain Rule derivative differentiation formulas chain rule \n                    Let   and   be differentiable functions.\n                    Then\n                     \n                    Equivalently, if we set   we have\n                     \n                 Using the chain rule \n                    Let  .\n                    Find  .\n                 \n                    We'll try the same trick we used before and we'll set  .\n                    Then the chain rule says that\n                     \n                 \n            As the last example highlighted, we can use the chain rule in combination with any of the other derivative rules we know if the function we're differentiating is complicated.\n         Combining rules \n                    Let  .\n                    Find  .\n                 \n                    We'll let   stand in for the \"inside function.\"\n                    Then we have   and so\n                     \n                 Chain rule within a chain rule \n                    Find the slope of   at  .\n                 \n                    We need to compute  .\n                    First, note that  , so let  .\n                    Now we could try to use the chain rule right here but this would require finding  , and   is itself a complicated function of  .\n                    So let  , and finally let  .\n                    Then we can say that\n                     \n                    We could plug in what   are in terms of   and then plug in  , but it's easier to just find   at   and enter these values into the above.\n                    At   we have   and  , so\n                     \n                 "
},
{
  "id": "p-180",
  "level": "2",
  "url": "section-the-chain-rule.html#p-180",
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
  "body": "The Chain Rule derivative differentiation formulas chain rule \n                    Let   and   be differentiable functions.\n                    Then\n                     \n                    Equivalently, if we set   we have\n                     \n                 "
},
{
  "id": "example-using-the-chain-rule",
  "level": "2",
  "url": "section-the-chain-rule.html#example-using-the-chain-rule",
  "type": "Example",
  "number": "3.4.2",
  "title": "Using the chain rule.",
  "body": "Using the chain rule \n                    Let  .\n                    Find  .\n                 \n                    We'll try the same trick we used before and we'll set  .\n                    Then the chain rule says that\n                     \n                 "
},
{
  "id": "example-combining-rules",
  "level": "2",
  "url": "section-the-chain-rule.html#example-combining-rules",
  "type": "Example",
  "number": "3.4.3",
  "title": "Combining rules.",
  "body": "Combining rules \n                    Let  .\n                    Find  .\n                 \n                    We'll let   stand in for the \"inside function.\"\n                    Then we have   and so\n                     \n                 "
},
{
  "id": "example-chain-rule-within-a-chain-rule",
  "level": "2",
  "url": "section-the-chain-rule.html#example-chain-rule-within-a-chain-rule",
  "type": "Example",
  "number": "3.4.4",
  "title": "Chain rule within a chain rule.",
  "body": "Chain rule within a chain rule \n                    Find the slope of   at  .\n                 \n                    We need to compute  .\n                    First, note that  , so let  .\n                    Now we could try to use the chain rule right here but this would require finding  , and   is itself a complicated function of  .\n                    So let  , and finally let  .\n                    Then we can say that\n                     \n                    We could plug in what   are in terms of   and then plug in  , but it's easier to just find   at   and enter these values into the above.\n                    At   we have   and  , so\n                     \n                 "
},
{
  "id": "section-implicit-differentiation",
  "level": "1",
  "url": "section-implicit-differentiation.html",
  "type": "Section",
  "number": "3.5",
  "title": "Implicit Differentiation",
  "body": "Implicit Differentiation Derivative of an implicit function \n                    Consider the curve given by the equation  .\n                    Find the slope of this curve at the point  .\n                 \n                    We could try to solve for   and then differentiate that to find the slope, but we have a slight problem: it's impossible, at least in terms of \"elementary functions\".\n                    However, we can still use the chain rule to find  , at least in terms of   and  .\n                    We just need to remember that   is a function of  .\n                    If we differentiate   with respect to  , we get\n                     \n                    and so\n                     \n                    So the slope of the curve at   is just  .\n                 implicit differentiation Implicit differentiation to save algebra \n                    Let  .\n                    Find  .\n                 \n                    If we let  , then  .\n                    Then\n                     \n                    which means that\n                     \n                 \n            We must also be aware of when to use appropriate derivative rules when doing implicit differentiation.\n         Chain and quotient rule \n                    Suppose   is defined implicitly by  .\n                    Find  .\n                 \n                    We start by taking the derivative with respect to   of each side of the equation:\n                     \n                 \n                    Therefore\n                     \n                    and we can solve this for  :\n                     \n                    or just\n                     \n                 A differential equation differential equation \n                    We need to find  , which is the rate of change of  .\n                    This means we need to differentiate both sides of the differential equation   with respect to  :\n                     \n                    The current population is about 323.1 million, so we can take  , which also gives\n                     \n                    and so \n                     \n                    Hence it appears that the rate of population increase is itself decreasing, which implies that the population growth of the US is slowing down.\n                 "
},
{
  "id": "example-derivative-of-an-implicit-function",
  "level": "2",
  "url": "section-implicit-differentiation.html#example-derivative-of-an-implicit-function",
  "type": "Example",
  "number": "3.5.1",
  "title": "Derivative of an implicit function.",
  "body": "Derivative of an implicit function \n                    Consider the curve given by the equation  .\n                    Find the slope of this curve at the point  .\n                 \n                    We could try to solve for   and then differentiate that to find the slope, but we have a slight problem: it's impossible, at least in terms of \"elementary functions\".\n                    However, we can still use the chain rule to find  , at least in terms of   and  .\n                    We just need to remember that   is a function of  .\n                    If we differentiate   with respect to  , we get\n                     \n                    and so\n                     \n                    So the slope of the curve at   is just  .\n                 "
},
{
  "id": "p-191",
  "level": "2",
  "url": "section-implicit-differentiation.html#p-191",
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
  "body": "Implicit differentiation to save algebra \n                    Let  .\n                    Find  .\n                 \n                    If we let  , then  .\n                    Then\n                     \n                    which means that\n                     \n                 "
},
{
  "id": "example-chain-and-quotient-rule",
  "level": "2",
  "url": "section-implicit-differentiation.html#example-chain-and-quotient-rule",
  "type": "Example",
  "number": "3.5.3",
  "title": "Chain and quotient rule.",
  "body": "Chain and quotient rule \n                    Suppose   is defined implicitly by  .\n                    Find  .\n                 \n                    We start by taking the derivative with respect to   of each side of the equation:\n                     \n                 \n                    Therefore\n                     \n                    and we can solve this for  :\n                     \n                    or just\n                     \n                 "
},
{
  "id": "example-a-differential-equation",
  "level": "2",
  "url": "section-implicit-differentiation.html#example-a-differential-equation",
  "type": "Example",
  "number": "3.5.4",
  "title": "A differential equation.",
  "body": "A differential equation differential equation \n                    We need to find  , which is the rate of change of  .\n                    This means we need to differentiate both sides of the differential equation   with respect to  :\n                     \n                    The current population is about 323.1 million, so we can take  , which also gives\n                     \n                    and so \n                     \n                    Hence it appears that the rate of population increase is itself decreasing, which implies that the population growth of the US is slowing down.\n                 "
},
{
  "id": "section-related-rates",
  "level": "1",
  "url": "section-related-rates.html",
  "type": "Section",
  "number": "3.6",
  "title": "Related Rates",
  "body": "Related Rates Changing volume on a sphere \n                    The radius of a sphere is increasing at a rate of  4 .\n                    How fast is the volume increasing when the radius is  13 ?\n                 \n                    First, let's assign names to all of the changing quantities in this problem:\n                     \n                    Note that we're considering   and   to be functions of time, i.e.   and  , where   is in seconds.\n                    Then we're given that   and we need to find   when  .\n                    To do this, we had better find some relationship between   and  .\n                    We can find this by looking at the volume formula for a sphere:\n                     \n                    This equation relates   and  , and if we take the derivatives of both sides with respect to time   (using implicit differentiation) then we get an equation relating   and  .\n                    So let's do that:\n                     \n                    Now we can plug in our given information to get\n                     \n                    So the volume is increasing at a rate of  2704\\pi .\n                 \n            Note that we  never  found what   and   were in  , but we didn't need to.\n            All we needed to find was a relationship between the two changing quantities, i.e. the two derivatives, to answer the question.\n         A tank problem \n                    Water is leaking out of a conical tank at a rate of  10000  while water is being pumped into the tank at some (unknown) constant rate.\n                    The tank has a height of  6  and the diameter of the top is  4 .\n                    If the water level is rising at a rate of  20  when the height of the water is  2 , what is the rate at which water is being poured into the tank?\n                 \n                    We have a  lot  of information to process here, so we'll take things a step at a time.\n                    The changing quantities are\n                     \n                    where   is in minutes.\n                    We need to find the rate at which water is entering the tank, so let's call this mystery number  .\n                    Then all we know about   is that it's related to the rate that the volume is changing.\n                    In particular, we should have  .\n                    So to find   we need to find  , which means we need to set up a relationship between   and the other changing quantities to determine how exactly   is changing, using the fact that   when   (after converting to centimeters).\n                 \n                    Using the fact that the water is in a conical tank, we can use the formula for the volume of a cone to say that  .\n                    If we differentiate both sides with respect to  , then we get\n                     \n                    Unfortunately, we don't have any information on   or   that we can use, just information on   and  .\n                    So we need to get   in terms of  .\n                    By similar triangles, we can say that  , and so   and likewise  .\n                    Hence\n                     \n                    which boils down to\n                     \n                 \n                    Now,  finally , we can answer the original question.\n                    The rate that water is flowing into the tank is\n                     \n                    or just  289252.68 .\n                    In terms of meters this is  .29 , which perhaps looks a bit more reasonable.\n                 "
},
{
  "id": "example-changing-volume-on-a-sphere",
  "level": "2",
  "url": "section-related-rates.html#example-changing-volume-on-a-sphere",
  "type": "Example",
  "number": "3.6.1",
  "title": "Changing volume on a sphere.",
  "body": "Changing volume on a sphere \n                    The radius of a sphere is increasing at a rate of  4 .\n                    How fast is the volume increasing when the radius is  13 ?\n                 \n                    First, let's assign names to all of the changing quantities in this problem:\n                     \n                    Note that we're considering   and   to be functions of time, i.e.   and  , where   is in seconds.\n                    Then we're given that   and we need to find   when  .\n                    To do this, we had better find some relationship between   and  .\n                    We can find this by looking at the volume formula for a sphere:\n                     \n                    This equation relates   and  , and if we take the derivatives of both sides with respect to time   (using implicit differentiation) then we get an equation relating   and  .\n                    So let's do that:\n                     \n                    Now we can plug in our given information to get\n                     \n                    So the volume is increasing at a rate of  2704\\pi .\n                 "
},
{
  "id": "example-a-tank-problem",
  "level": "2",
  "url": "section-related-rates.html#example-a-tank-problem",
  "type": "Example",
  "number": "3.6.2",
  "title": "A tank problem.",
  "body": "A tank problem \n                    Water is leaking out of a conical tank at a rate of  10000  while water is being pumped into the tank at some (unknown) constant rate.\n                    The tank has a height of  6  and the diameter of the top is  4 .\n                    If the water level is rising at a rate of  20  when the height of the water is  2 , what is the rate at which water is being poured into the tank?\n                 \n                    We have a  lot  of information to process here, so we'll take things a step at a time.\n                    The changing quantities are\n                     \n                    where   is in minutes.\n                    We need to find the rate at which water is entering the tank, so let's call this mystery number  .\n                    Then all we know about   is that it's related to the rate that the volume is changing.\n                    In particular, we should have  .\n                    So to find   we need to find  , which means we need to set up a relationship between   and the other changing quantities to determine how exactly   is changing, using the fact that   when   (after converting to centimeters).\n                 \n                    Using the fact that the water is in a conical tank, we can use the formula for the volume of a cone to say that  .\n                    If we differentiate both sides with respect to  , then we get\n                     \n                    Unfortunately, we don't have any information on   or   that we can use, just information on   and  .\n                    So we need to get   in terms of  .\n                    By similar triangles, we can say that  , and so   and likewise  .\n                    Hence\n                     \n                    which boils down to\n                     \n                 \n                    Now,  finally , we can answer the original question.\n                    The rate that water is flowing into the tank is\n                     \n                    or just  289252.68 .\n                    In terms of meters this is  .29 , which perhaps looks a bit more reasonable.\n                 "
},
{
  "id": "section-linear-approximations",
  "level": "1",
  "url": "section-linear-approximations.html",
  "type": "Section",
  "number": "3.7",
  "title": "Linear Approximations",
  "body": "Linear Approximations linear approximation Linear Approximation derivative linear approximation linearization \n            The formula of the linear approximation to a function   at   is nothing more than the equation of the tangent line to   at  .\n         Linear approximation of sine \n                    Find the linear approximation of   at   and use this to estimate  .\n                 \n                    The linear approximation is given by\n                     \n                    so  .\n                    Therefore\n                     \n                    since   is very close to  .\n                 Estimating a tangent \n                    Estimate  .\n                 \n                    We want to estimate this using a linear approximation, and we want to make sure the linear approximation is easy to set up.\n                    This means we want to base the linear approximation at a value of   that both tangent and its derivative are relatively easy to compute at, and is also close to  .\n                    So we'll pick   and find the linear approximation to   at  :\n                    Set  .\n                    Then\n                     \n                    So\n                     \n                 Estimating the population of the United States in 2020 \n                    Use the differential equation from   and the fact that the current population of the US is about 323.1 million to estimate the population of the US in 2020.\n                 \n                    Recall that   in   represented the population of the US (in millions)   years after 1990.\n                    To estimate the population in 2020, we want to find the linearization of   at  .\n                    This is given by\n                     \n                    Since   and\n                     \n                    we have\n                     \n                    Hence the population of the US in 2020 should be\n                     \n                    or about 331.8 million people.\n                 "
},
{
  "id": "p-207",
  "level": "2",
  "url": "section-linear-approximations.html#p-207",
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
  "body": "Linear Approximation derivative linear approximation linearization "
},
{
  "id": "example-linear-approximation-of-sine",
  "level": "2",
  "url": "section-linear-approximations.html#example-linear-approximation-of-sine",
  "type": "Example",
  "number": "3.7.2",
  "title": "Linear approximation of sine.",
  "body": "Linear approximation of sine \n                    Find the linear approximation of   at   and use this to estimate  .\n                 \n                    The linear approximation is given by\n                     \n                    so  .\n                    Therefore\n                     \n                    since   is very close to  .\n                 "
},
{
  "id": "example-estimating-a-tangent",
  "level": "2",
  "url": "section-linear-approximations.html#example-estimating-a-tangent",
  "type": "Example",
  "number": "3.7.3",
  "title": "Estimating a tangent.",
  "body": "Estimating a tangent \n                    Estimate  .\n                 \n                    We want to estimate this using a linear approximation, and we want to make sure the linear approximation is easy to set up.\n                    This means we want to base the linear approximation at a value of   that both tangent and its derivative are relatively easy to compute at, and is also close to  .\n                    So we'll pick   and find the linear approximation to   at  :\n                    Set  .\n                    Then\n                     \n                    So\n                     \n                 "
},
{
  "id": "example-estimating-the-population-of-the-united-states-in-2020",
  "level": "2",
  "url": "section-linear-approximations.html#example-estimating-the-population-of-the-united-states-in-2020",
  "type": "Example",
  "number": "3.7.4",
  "title": "Estimating the population of the United States in 2020.",
  "body": "Estimating the population of the United States in 2020 \n                    Use the differential equation from   and the fact that the current population of the US is about 323.1 million to estimate the population of the US in 2020.\n                 \n                    Recall that   in   represented the population of the US (in millions)   years after 1990.\n                    To estimate the population in 2020, we want to find the linearization of   at  .\n                    This is given by\n                     \n                    Since   and\n                     \n                    we have\n                     \n                    Hence the population of the US in 2020 should be\n                     \n                    or about 331.8 million people.\n                 "
},
{
  "id": "section-exponential-functions",
  "level": "1",
  "url": "section-exponential-functions.html",
  "type": "Section",
  "number": "4.1",
  "title": "Exponential Functions",
  "body": "Exponential Functions exponential functions Properties of Exponential Functions exponential functions properties \n                    Let   and   be real numbers.\n                    Then\n                      and  . .  and  .  is  . . \n                    Finally, if   as well, then  .\n                 Limit of an exponential function \n                    Let  .\n                    Find  .\n                 \n                    First, note that\n                     \n                    So as  , the denominator   as well.\n                    Hence the fraction as a whole should decrease to  , and so\n                     \n                 \n            In general, we have the following:\n             \n         \n            Every exponential function   is continuous everywhere.\n            In fact, they are differentiable everywhere, though we'll see more about that later.\n            We can also say the following: if   then   is an increasing function, and if   then   is a decreasing function.\n            In neither case will   have any local maxima or minima.\n         natural exponential function Exponential derivative \n                    Using the fact that  , compute  .\n                 \n                    We'll have to use the chain rule.\n                    If we do so, we get\n                     \n                 \n            Since   is its own derivative, this makes computing derivatives of functions of the form   relatively straightforward:\n             \n         \n            Technically, we have worked with the natural exponential function before in this class.\n            Recall from   that if   represents the population of the USA (in millions)   years after 1990, then we said that   satisfied the differential equation\n             \n            If we say the population of the US in 1990 was 250 million (i.e.  ), then \n             \n            Now, in   we used linear approximation to estimate the population of the US using this model in the year 2020, where we got 331.8 million people.\n            If we use the above formula for  , we get that the population of the US in 2020 should be about\n             \n            or 339.8 million people.\n         \n                The Census Bureau predicted in 2014 that the population in 2020 would be 334.5 million.\n                So our simple predictions before actually aren't too far off from what the Census Bureau is expecting.\n                This suggests that the differential equation   is a reasonable model for the growth of the US.\n             "
},
{
  "id": "p-217",
  "level": "2",
  "url": "section-exponential-functions.html#p-217",
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
  "body": "Properties of Exponential Functions exponential functions properties \n                    Let   and   be real numbers.\n                    Then\n                      and  . .  and  .  is  . . \n                    Finally, if   as well, then  .\n                 "
},
{
  "id": "example-limit-of-an-exponential-function",
  "level": "2",
  "url": "section-exponential-functions.html#example-limit-of-an-exponential-function",
  "type": "Example",
  "number": "4.1.2",
  "title": "Limit of an exponential function.",
  "body": "Limit of an exponential function \n                    Let  .\n                    Find  .\n                 \n                    First, note that\n                     \n                    So as  , the denominator   as well.\n                    Hence the fraction as a whole should decrease to  , and so\n                     \n                 "
},
{
  "id": "p-223",
  "level": "2",
  "url": "section-exponential-functions.html#p-223",
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
  "body": "Exponential derivative \n                    Using the fact that  , compute  .\n                 \n                    We'll have to use the chain rule.\n                    If we do so, we get\n                     \n                 "
},
{
  "id": "section-logarithms",
  "level": "1",
  "url": "section-logarithms.html",
  "type": "Section",
  "number": "4.2",
  "title": "Logarithms",
  "body": "Logarithms Inverse Function Review invertible function Invertible Functions functions invertible functions \n                        A function   is invertible if and only if it is a one-to-one function.\n                        That is,   forces  .\n                     \n                Since a function is one-to-one if and only if its graph passes the horizontal line test, the horizontal line test also gives us a useful way to check if a function is invertible.\n             \n                    Let  , the natural exponential function introduced in  .\n                    Then   is an invertible function, since its graph passes the horizontal line test.\n                 inverse function \n                The graph of an inverse function is related to the graph of the original function in a very nice way.\n                To get the graph of   from  , just reflect the graph of   across the line  .\n             Graphing the inverse of the natural exponential \n                        Let  .\n                        Graph  .\n                     \n                        If we graph   and then rotate the graph across the line  , we get\n                     The inverse of  . Calculus with Inverse Functions \n                There are two important things to notice about the graph of the inverse function in  : it's continuous and differentiable.\n                This is because the same was true of the original graph, and if we think about it this should be true in general as well since graphing the inverse doesn't add any new gaps or cusps to the graph.\n             Continuity and Differentiability of Inverses \n                        Let   be a continuous (respectively, differentiable) function.\n                        Suppose that   is invertible, and has inverse  .\n                        Then   is continuous (respectively, differentiable).\n                     Finding the derivative of an inverse function \n                        Let   and note that   is invertible.\n                        Find the derivative of  .\n                     \n                        One way to do this is just start by finding  .\n                        So we'll set  , solve for   and then switch   and  .\n                        If we do this, we get\n                         \n                        so   (and note that the domain of   is   since this is the range of  !).\n                        Hence\n                         \n                     \n                The method used in   will certainly work in simple cases.\n                But what do we do if we can't (or don't want to) find an explicit formula for the inverse function?\n                The following formula will help us to do this.\n             Derivative of an Inverse Function functions inverse functions derivatives \n                        Let   be a differentiable function with inverse  .\n                        Assume that   is itself differentiable.\n                        Then\n                         \n                     \n                        First, let  , so that we need to find  .\n                        Then we can say that  .\n                        Now differentiate this equation implicitly to get\n                         \n                        or just\n                         \n                     Exponential inverse revisited \n                        Using the fact that the derivative of   is itself, find the derivative of its inverse.\n                     \n                        Let  .\n                        Then by   we have\n                         \n                        So the derivative of the inverse of   is  .\n                     Derivative at a point \n                        Let  .\n                        Find  \n                     \n                        By  , we know that\n                         \n                        By inspection,   which means  .\n                        Since\n                         \n                        this gives\n                         \n                     Logarithms logarithm with base  \n                We can say a few things about logarithms just from looking at graphs of exponentials.\n                Suppose that  .\n                Then   is both continuous and differentiable for all  ,\n                 \n                and the derivative of   approaches   as  .\n             \n                The properties of the exponential listed in   have corresponding properties for logarithms.\n             Properties of Logarithm Functions logarithm functions properties \n                        Let   with  .\n                        Let   be positive real numbers, and let   be any real number.\n                        Then\n                          and  . . . . \n                     \n                An important takeaway from   is that logarithms turn the complicated operations of multiplication and division into the simpler operations of addition and subtraction.\n             natural logarithm Simplifying an exponential \n                        Simplify   and  .\n                     \n                        We'll simplify by using the cancellation property  .\n                        First, we need to put the entire exponent inside of the natural log:\n                         \n                        and\n                         \n                     \n                  shows us that  every  exponential function can be written in terms of the natural exponential:  .\n                Similarly, every logarithm can be written in terms of the natural logarithm by using the change of base formula:\n                 \n             "
},
{
  "id": "p-229",
  "level": "2",
  "url": "section-logarithms.html#p-229",
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
  "body": "Invertible Functions functions invertible functions \n                        A function   is invertible if and only if it is a one-to-one function.\n                        That is,   forces  .\n                     "
},
{
  "id": "example-exponential-inverse",
  "level": "2",
  "url": "section-logarithms.html#example-exponential-inverse",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "\n                    Let  , the natural exponential function introduced in  .\n                    Then   is an invertible function, since its graph passes the horizontal line test.\n                 "
},
{
  "id": "p-233",
  "level": "2",
  "url": "section-logarithms.html#p-233",
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
  "body": "Graphing the inverse of the natural exponential \n                        Let  .\n                        Graph  .\n                     \n                        If we graph   and then rotate the graph across the line  , we get\n                     The inverse of  . "
},
{
  "id": "theorem-continuity-and-differentiability-of-inverses",
  "level": "2",
  "url": "section-logarithms.html#theorem-continuity-and-differentiability-of-inverses",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "Continuity and Differentiability of Inverses.",
  "body": "Continuity and Differentiability of Inverses \n                        Let   be a continuous (respectively, differentiable) function.\n                        Suppose that   is invertible, and has inverse  .\n                        Then   is continuous (respectively, differentiable).\n                     "
},
{
  "id": "example-finding-the-derivative-of-an-inverse-function",
  "level": "2",
  "url": "section-logarithms.html#example-finding-the-derivative-of-an-inverse-function",
  "type": "Example",
  "number": "4.2.6",
  "title": "Finding the derivative of an inverse function.",
  "body": "Finding the derivative of an inverse function \n                        Let   and note that   is invertible.\n                        Find the derivative of  .\n                     \n                        One way to do this is just start by finding  .\n                        So we'll set  , solve for   and then switch   and  .\n                        If we do this, we get\n                         \n                        so   (and note that the domain of   is   since this is the range of  !).\n                        Hence\n                         \n                     "
},
{
  "id": "theorem-derivative-of-an-inverse-function",
  "level": "2",
  "url": "section-logarithms.html#theorem-derivative-of-an-inverse-function",
  "type": "Theorem",
  "number": "4.2.7",
  "title": "Derivative of an Inverse Function.",
  "body": "Derivative of an Inverse Function functions inverse functions derivatives \n                        Let   be a differentiable function with inverse  .\n                        Assume that   is itself differentiable.\n                        Then\n                         \n                     \n                        First, let  , so that we need to find  .\n                        Then we can say that  .\n                        Now differentiate this equation implicitly to get\n                         \n                        or just\n                         \n                     "
},
{
  "id": "example-exponential-inverse-revisited",
  "level": "2",
  "url": "section-logarithms.html#example-exponential-inverse-revisited",
  "type": "Example",
  "number": "4.2.8",
  "title": "Exponential inverse revisited.",
  "body": "Exponential inverse revisited \n                        Using the fact that the derivative of   is itself, find the derivative of its inverse.\n                     \n                        Let  .\n                        Then by   we have\n                         \n                        So the derivative of the inverse of   is  .\n                     "
},
{
  "id": "example-derivative-at-a-point",
  "level": "2",
  "url": "section-logarithms.html#example-derivative-at-a-point",
  "type": "Example",
  "number": "4.2.9",
  "title": "Derivative at a point.",
  "body": "Derivative at a point \n                        Let  .\n                        Find  \n                     \n                        By  , we know that\n                         \n                        By inspection,   which means  .\n                        Since\n                         \n                        this gives\n                         \n                     "
},
{
  "id": "p-248",
  "level": "2",
  "url": "section-logarithms.html#p-248",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logarithm with base  "
},
{
  "id": "theorem-properties-of-logarithm-functions",
  "level": "2",
  "url": "section-logarithms.html#theorem-properties-of-logarithm-functions",
  "type": "Theorem",
  "number": "4.2.10",
  "title": "Properties of Logarithm Functions.",
  "body": "Properties of Logarithm Functions logarithm functions properties \n                        Let   with  .\n                        Let   be positive real numbers, and let   be any real number.\n                        Then\n                          and  . . . . \n                     "
},
{
  "id": "p-253",
  "level": "2",
  "url": "section-logarithms.html#p-253",
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
  "body": "Simplifying an exponential \n                        Simplify   and  .\n                     \n                        We'll simplify by using the cancellation property  .\n                        First, we need to put the entire exponent inside of the natural log:\n                         \n                        and\n                         \n                     "
},
{
  "id": "section-derivatives-of-exponential-and-logarithmic-functions",
  "level": "1",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html",
  "type": "Section",
  "number": "4.3",
  "title": "Derivatives of Exponential and Logarithmic Functions",
  "body": "Derivatives of Exponential and Logarithmic Functions Derivatives of Exponentials \n                We've already mentioned that  , but we've said nothing about differentiating functions such as   or  .\n                However, it turns out that we can get these derivatives from the derivative of   without too much trouble.\n             Derivatives of Exponential Functions exponential functions derivatives \n                        Let   and set  .\n                        Then  .\n                     \n                        To prove this, we need to use what's available to us: the derivative of  .\n                        From   we say that  .\n                        More generally, we can also say that  .\n                        Hence\n                         \n                     Differentiating an exponential \n                        Let  .\n                        Find  .\n                     \n                        If we set  , then  .\n                        By the chain rule,\n                         \n                     \n                Although we certainly want to know the derivative of  , or at least how to find it, most applications involving exponential functions use the natural exponential function   instead.\n                The derivative of   is probably the most important derivative in this course.\n             Solutions of a differential equation \n                        Show that   satisfies the differential equation  , where   are arbitrary constants.\n                     \n                        We need to show that if we compute   and   and plug these expressions into the differential equation, this will simplify out to  .\n                        Since\n                         \n                        it follows that\n                         \n                     \n                Exponential functions often appear in the solutions of differential equations, which are themselves often viewed as mathematical models of physical systems.\n                Hence exponential functions play a significant role in predicting physical quantities, which goes a long way towards justifying their importance.\n             Derivatives of Logarithms \n                Just as we can get the derivative of every exponential function   just by knowing the derivative of  , we can get the derivative of every logarithmic function   just by knowing that  .\n             Derivatives of Logarithmic Functions logarithm functions derivatives \n                        Let   and set  .\n                        Then\n                         \n                     Differentiating nested logarithms \n                        Let  .\n                        Find  .\n                     \n                        By the chain rule, we have\n                         \n                     logarithmic differentiation A simple fraction \n                        Let  .\n                        Find  .\n                     \n                        We can find   without resorting to logarithms, but this would require using the product, quotient and chain rules.\n                        The algebra would be awful.\n                        So we'll using logarithms instead!\n                        Set  .\n                        Then\n                         \n                        Now we differentiate both sides implicitly to obtain\n                         \n                     \n                        Hence\n                         \n                     \n                Logarithmic differentiation is useful for finding derivatives of expressions containing complicated quotients, products or powers.\n             A simple exponent \n                        Let  .\n                        Find  .\n                     \n                        We'll use logarithmic differentiation again to simplify   and remove the exponent.\n                        Set  , which gives\n                         \n                        So\n                         \n                        which means that\n                         \n                     "
},
{
  "id": "theorem-derivatives-of-exponential-functions",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#theorem-derivatives-of-exponential-functions",
  "type": "Theorem",
  "number": "4.3.1",
  "title": "Derivatives of Exponential Functions.",
  "body": "Derivatives of Exponential Functions exponential functions derivatives \n                        Let   and set  .\n                        Then  .\n                     \n                        To prove this, we need to use what's available to us: the derivative of  .\n                        From   we say that  .\n                        More generally, we can also say that  .\n                        Hence\n                         \n                     "
},
{
  "id": "example-differentiating-an-exponential",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#example-differentiating-an-exponential",
  "type": "Example",
  "number": "4.3.2",
  "title": "Differentiating an exponential.",
  "body": "Differentiating an exponential \n                        Let  .\n                        Find  .\n                     \n                        If we set  , then  .\n                        By the chain rule,\n                         \n                     "
},
{
  "id": "example-solutions-of-a-differential-equation",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#example-solutions-of-a-differential-equation",
  "type": "Example",
  "number": "4.3.3",
  "title": "Solutions of a differential equation.",
  "body": "Solutions of a differential equation \n                        Show that   satisfies the differential equation  , where   are arbitrary constants.\n                     \n                        We need to show that if we compute   and   and plug these expressions into the differential equation, this will simplify out to  .\n                        Since\n                         \n                        it follows that\n                         \n                     "
},
{
  "id": "theorem-derivatives-of-logarithmic-functions",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#theorem-derivatives-of-logarithmic-functions",
  "type": "Theorem",
  "number": "4.3.4",
  "title": "Derivatives of Logarithmic Functions.",
  "body": "Derivatives of Logarithmic Functions logarithm functions derivatives \n                        Let   and set  .\n                        Then\n                         \n                     "
},
{
  "id": "example-differentiating-nested-logarithms",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#example-differentiating-nested-logarithms",
  "type": "Example",
  "number": "4.3.5",
  "title": "Differentiating nested logarithms.",
  "body": "Differentiating nested logarithms \n                        Let  .\n                        Find  .\n                     \n                        By the chain rule, we have\n                         \n                     "
},
{
  "id": "p-270",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#p-270",
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
  "body": "A simple fraction \n                        Let  .\n                        Find  .\n                     \n                        We can find   without resorting to logarithms, but this would require using the product, quotient and chain rules.\n                        The algebra would be awful.\n                        So we'll using logarithms instead!\n                        Set  .\n                        Then\n                         \n                        Now we differentiate both sides implicitly to obtain\n                         \n                     \n                        Hence\n                         \n                     "
},
{
  "id": "example-a-simple-exponent",
  "level": "2",
  "url": "section-derivatives-of-exponential-and-logarithmic-functions.html#example-a-simple-exponent",
  "type": "Example",
  "number": "4.3.7",
  "title": "A simple exponent.",
  "body": "A simple exponent \n                        Let  .\n                        Find  .\n                     \n                        We'll use logarithmic differentiation again to simplify   and remove the exponent.\n                        Set  , which gives\n                         \n                        So\n                         \n                        which means that\n                         \n                     "
},
{
  "id": "section-exponential-models",
  "level": "1",
  "url": "section-exponential-models.html",
  "type": "Section",
  "number": "4.4",
  "title": "Exponential Models",
  "body": "Exponential Models Exponential Growth \n                Suppose we want to predict the spread of some infectious disease through a city.\n                A reasonable, though simplistic, assumption is that the disease will spread quicker if more people are infected.\n                In other words, we'll assume that the rate at which people are infected is proportional to the number of people infected.\n                If we let   denote the number of people infected at time  , then we're basically saying that\n                 \n                for some constant  .\n             mathematical model exponential growth relative growth rate Modeling an Outbreak \n                        A game of Humans vs. Zombies breaks out at WVWC.\n                        When the game starts, there is just one zombie.\n                        After one hour, there are   zombies.\n                        How many zombies will there be after three hours assuming that the relative growth rate is constant?\n                     \n                        Let   denote the number of zombies   hours after the game starts.\n                        Then we're given that   and  .\n                        We need to find  .\n                     \n                        Since the relative growth rate is assumed to be constant, we can say that   for some constant  .\n                        As we saw before, the solution of this differential equation is given by  .\n                        So if we want to find  , then we need to figure out what   is.\n                     \n                        We can do this by using the fact that  .\n                        If we plug this into  , we get\n                         \n                        So\n                         \n                        Hence there will be   zombies after three hours.\n                     Exponential Decay exponential decay \n                    We often write the decay constant   as positive, and then rewrite the ODE for   as  .\n                    The solution becomes  .\n                    This has the effect of highlighting the negative growth rate inherent to this system.\n                 half-life Decay from Half-Life \n                        A radioactive substance has a half-life of   days.\n                        If we start with a  50  sample, how much of the mass will remain after   days?\n                     \n                        If we let   denote the mass of the sample at time  , and let   denote the first day we have the sample, then\n                         \n                        We still need to find  , but we can do this using the fact that the half-life is   days.\n                        This means that\n                         \n                        So\n                         \n                        Hence\n                         \n                     "
},
{
  "id": "p-278",
  "level": "2",
  "url": "section-exponential-models.html#p-278",
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
  "body": "Modeling an Outbreak \n                        A game of Humans vs. Zombies breaks out at WVWC.\n                        When the game starts, there is just one zombie.\n                        After one hour, there are   zombies.\n                        How many zombies will there be after three hours assuming that the relative growth rate is constant?\n                     \n                        Let   denote the number of zombies   hours after the game starts.\n                        Then we're given that   and  .\n                        We need to find  .\n                     \n                        Since the relative growth rate is assumed to be constant, we can say that   for some constant  .\n                        As we saw before, the solution of this differential equation is given by  .\n                        So if we want to find  , then we need to figure out what   is.\n                     \n                        We can do this by using the fact that  .\n                        If we plug this into  , we get\n                         \n                        So\n                         \n                        Hence there will be   zombies after three hours.\n                     "
},
{
  "id": "p-283",
  "level": "2",
  "url": "section-exponential-models.html#p-283",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential decay "
},
{
  "id": "p-285",
  "level": "2",
  "url": "section-exponential-models.html#p-285",
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
  "body": "Decay from Half-Life \n                        A radioactive substance has a half-life of   days.\n                        If we start with a  50  sample, how much of the mass will remain after   days?\n                     \n                        If we let   denote the mass of the sample at time  , and let   denote the first day we have the sample, then\n                         \n                        We still need to find  , but we can do this using the fact that the half-life is   days.\n                        This means that\n                         \n                        So\n                         \n                        Hence\n                         \n                     "
},
{
  "id": "section-inverse-trigonometric-functions",
  "level": "1",
  "url": "section-inverse-trigonometric-functions.html",
  "type": "Section",
  "number": "4.5",
  "title": "Inverse Trigonometric Functions",
  "body": "Inverse Trigonometric Functions inverse sine arcsine Inverse Sine inverse trigonometric functions inverse sine \n                    Let   and have domain  .\n                    Then   is called the inverse sine or arcsine of  , and is denoted by   or  .\n                    The domain is the interval   and the range is  .\n                 \n            We can think of   as the angle required to turn sine into  .\n             \n                    Note that   does  not  mean  , which is  .\n                    It's an unfortunate, though standard, choice of notation.\n                 \n         Finding inverse sine \n                    Find  .\n                 \n                    This is the angle between   and   that turns sine into  .\n                    So  .\n                 Simplifying cosine and inverse sine \n                    Simplify  , where  .\n                 \n                    By definition,   as long as  .\n                    So we want to try to rewrite   to make use of this cancellation property.\n                    We can do this using the Pythagorean identity  .\n                    Hence\n                     \n                    whenever  .\n                 \n            Since   is differentiable, this means   is also differentiable.\n         Derivative of Inverse Sine \n                    Let  .\n                    Then  .\n                 \n                    If we set  , then we get  .\n                    Differentiating this gives   or just\n                     \n                 inverse cosine function Inverse cosine value \n                    Find  .\n                 \n                    First, note that  .\n                    So\n                     \n                 \n            Inverse cosine behaves in much the same way as inverse sine.\n            However, this function won't be as useful to us as the inverse sine function or the next function we will look at: the inverse tangent.\n         inverse tangent arctangent Simplifying an inverse tangent \n                    Simplify   using the formula  .\n                 \n                    If we use the double-angle formula given, we get\n                     \n                    So we just need to find   and  .\n                 \n                    Set  , so that  .\n                    Then we can find   and   using triangles, which gives\n                     \n                    Hence\n                     \n                 Limit of inverse tangent \n                    Determine  .\n                 \n                    Recall that   is the angle between   and   for which tangent is equal to  .\n                    So finding   is equivalent to finding what angle between   and   we have to approach in order for tangent to blow up to  .\n                    Either from looking at a graph or by using the definition of tangent, we see that the angle we need to approach is exactly  .\n                    Hence  .\n                 Derivative of Inverse Tangent \n                    The derivative of   is  .\n                 \n                    We can prove this the same way we proved that  .\n                    All we need to do is to set  , and then find   by implicit differentiation.\n                 Tangent half-angle substitution tangent half-angle substitution \n                    We can find   implicitly, but we can also solve for   to get\n                     \n                    Therefore\n                     \n                 "
},
{
  "id": "p-288",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#p-288",
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
  "body": "Inverse Sine inverse trigonometric functions inverse sine \n                    Let   and have domain  .\n                    Then   is called the inverse sine or arcsine of  , and is denoted by   or  .\n                    The domain is the interval   and the range is  .\n                 "
},
{
  "id": "example-finding-inverse-sine",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#example-finding-inverse-sine",
  "type": "Example",
  "number": "4.5.2",
  "title": "Finding inverse sine.",
  "body": "Finding inverse sine \n                    Find  .\n                 \n                    This is the angle between   and   that turns sine into  .\n                    So  .\n                 "
},
{
  "id": "example-simplifying-cosine-and-inverse-sine",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#example-simplifying-cosine-and-inverse-sine",
  "type": "Example",
  "number": "4.5.3",
  "title": "Simplifying cosine and inverse sine.",
  "body": "Simplifying cosine and inverse sine \n                    Simplify  , where  .\n                 \n                    By definition,   as long as  .\n                    So we want to try to rewrite   to make use of this cancellation property.\n                    We can do this using the Pythagorean identity  .\n                    Hence\n                     \n                    whenever  .\n                 "
},
{
  "id": "theorem-derivative-of-inverse-sine",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#theorem-derivative-of-inverse-sine",
  "type": "Theorem",
  "number": "4.5.4",
  "title": "Derivative of Inverse Sine.",
  "body": "Derivative of Inverse Sine \n                    Let  .\n                    Then  .\n                 \n                    If we set  , then we get  .\n                    Differentiating this gives   or just\n                     \n                 "
},
{
  "id": "p-299",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#p-299",
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
  "body": "Inverse cosine value \n                    Find  .\n                 \n                    First, note that  .\n                    So\n                     \n                 "
},
{
  "id": "p-303",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#p-303",
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
  "body": "Simplifying an inverse tangent \n                    Simplify   using the formula  .\n                 \n                    If we use the double-angle formula given, we get\n                     \n                    So we just need to find   and  .\n                 \n                    Set  , so that  .\n                    Then we can find   and   using triangles, which gives\n                     \n                    Hence\n                     \n                 "
},
{
  "id": "example-limit-of-inverse-tangent",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#example-limit-of-inverse-tangent",
  "type": "Example",
  "number": "4.5.7",
  "title": "Limit of inverse tangent.",
  "body": "Limit of inverse tangent \n                    Determine  .\n                 \n                    Recall that   is the angle between   and   for which tangent is equal to  .\n                    So finding   is equivalent to finding what angle between   and   we have to approach in order for tangent to blow up to  .\n                    Either from looking at a graph or by using the definition of tangent, we see that the angle we need to approach is exactly  .\n                    Hence  .\n                 "
},
{
  "id": "theorem-derivative-of-inverse-tangent",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#theorem-derivative-of-inverse-tangent",
  "type": "Theorem",
  "number": "4.5.8",
  "title": "Derivative of Inverse Tangent.",
  "body": "Derivative of Inverse Tangent \n                    The derivative of   is  .\n                 \n                    We can prove this the same way we proved that  .\n                    All we need to do is to set  , and then find   by implicit differentiation.\n                 "
},
{
  "id": "example-tangent-half-angle-substitution",
  "level": "2",
  "url": "section-inverse-trigonometric-functions.html#example-tangent-half-angle-substitution",
  "type": "Example",
  "number": "4.5.9",
  "title": "Tangent half-angle substitution.",
  "body": "Tangent half-angle substitution tangent half-angle substitution \n                    We can find   implicitly, but we can also solve for   to get\n                     \n                    Therefore\n                     \n                 "
},
{
  "id": "section-l-hospital-s-rule",
  "level": "1",
  "url": "section-l-hospital-s-rule.html",
  "type": "Section",
  "number": "4.6",
  "title": "L'Hospital's Rule",
  "body": "L'Hospital's Rule \n            Consider the important limit  .\n            If we try to plug in  , we get  , which is undefined.\n            However, we can prove using geometry that the limit is  .\n            As another example, consider  .\n            Once again, if we try to plug the limit in we get an expression of the form  .\n            However, the limit is just  , which we can find using algebra.\n         indeterminate forms Different indeterminate forms \n                    Find   indeterminate forms that, respectively, evaluate to   and do not exist.\n                 \n                    Let  ,   and  .\n                    Then   and   are all   indeterminate forms.\n                    The first evaluates to  , the second does not exist (it's  ) while the third appears to be equal to  .\n                 L'Hospital's Rule L'Hospital's Rule L'Hospital's Rule \n                    Let   and   be differentiable functions.\n                    If   is either one of the indeterminate forms   or  , then\n                     \n                    if the limit on the right exists or is  .\n                 \n            It's important to note that L'Hospital's Rule does not necessarily ask you to use the quotient rule!\n         Using L'Hospital's Rule \n                    Let  .\n                    Find  .\n                 \n                    We saw in   that this limit gives us the indeterminate form  , so L'Hospital's Rule applies.\n                    Hence\n                     \n                    and so the limit is indeed  .\n                 \n            L'Hospital's Rule also applies for limits approaching  .\n         Exponential and polynomial growth \n                    Let   and let  , where   are arbitrary constants.\n                    Find  .\n                 \n                    This is another example of a   indeterminate form, and so L'Hospital's Rule applies.\n                    If we use it, we get\n                     \n                    In other words, the exponential function grows faster than  any  quadratic function.\n                 Another limit involving exponentials \n                    Find  .\n                 \n                    This is a   indeterminate form, so L'Hospital's Rule applies.\n                    We get\n                     \n                 \n            L'Hospital's Rule only applies  directly  to the indeterminate forms   and  , but these are not the only problems when L'Hospital's Rule proves useful.\n         A different indeterminate form \n                    Find  .\n                 \n                    If we try to evaluate the limit, we get the expression  .\n                    This is another indeterminate form, but is not one that we can apply L'Hospital's Rule to without doing some algebra first.\n                    We can write\n                     \n                    which is a   indeterminate form.\n                    We  can  use L'Hospital's on this expression!\n                 \n                    If we do so, we get\n                     \n                    So  .\n                 \n              shows that   indeterminate forms can be dealt with by rewriting them in the form   or   and then applying L'Hospital's Rule.\n            It's trickier, but we can also deal with   indeterminate forms by rewriting them in this way.\n          indeterminate form \n                    Find  .\n                 \n                    As  ,   and  .\n                    So this limit is the indeterminate form  .\n                    We can't sue L'Hospital's Rule yet, but we can try to rewrite this limit as a   or   indeterminate form.\n                    We'll try to do this by replacing   with   to get\n                     \n                 Limit involving radicals \n                    Find  .\n                 \n                    This is another   form, so we'll try to rewrite it into a form we can use L'Hospital's Rule on.\n                    The trick here is to factor an   out so we can get a   form, which we've already seen how to handle:\n                     \n                 \n            There are three other indeterminate forms that L'Hospital's Rule can help us with (after some algebra):   and  .\n            All of these can be found by first using logarithms.\n         A natural limit \n                    Find  .\n                 \n                    This limit is a   indeterminate form.\n                    We'll try taking logarithms to rewrite it as a   form, so set  .\n                    Then\n                     \n                    is a   form.\n                    We can use L'Hospital's by rewriting this limit at a   form or  .\n                    Either way, we get   and so the original limit is  .\n                 "
},
{
  "id": "p-314",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#p-314",
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
  "number": "4.6.1",
  "title": "Different indeterminate forms.",
  "body": "Different indeterminate forms \n                    Find   indeterminate forms that, respectively, evaluate to   and do not exist.\n                 \n                    Let  ,   and  .\n                    Then   and   are all   indeterminate forms.\n                    The first evaluates to  , the second does not exist (it's  ) while the third appears to be equal to  .\n                 "
},
{
  "id": "p-317",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#p-317",
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
  "number": "4.6.2",
  "title": "L'Hospital's Rule.",
  "body": "L'Hospital's Rule L'Hospital's Rule \n                    Let   and   be differentiable functions.\n                    If   is either one of the indeterminate forms   or  , then\n                     \n                    if the limit on the right exists or is  .\n                 "
},
{
  "id": "example-using-l-hospital-s-rule",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-using-l-hospital-s-rule",
  "type": "Example",
  "number": "4.6.3",
  "title": "Using L'Hospital's Rule.",
  "body": "Using L'Hospital's Rule \n                    Let  .\n                    Find  .\n                 \n                    We saw in   that this limit gives us the indeterminate form  , so L'Hospital's Rule applies.\n                    Hence\n                     \n                    and so the limit is indeed  .\n                 "
},
{
  "id": "example-exponential-and-polynomial-growth",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-exponential-and-polynomial-growth",
  "type": "Example",
  "number": "4.6.4",
  "title": "Exponential and polynomial growth.",
  "body": "Exponential and polynomial growth \n                    Let   and let  , where   are arbitrary constants.\n                    Find  .\n                 \n                    This is another example of a   indeterminate form, and so L'Hospital's Rule applies.\n                    If we use it, we get\n                     \n                    In other words, the exponential function grows faster than  any  quadratic function.\n                 "
},
{
  "id": "example-another-limit-involving-exponentials",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-another-limit-involving-exponentials",
  "type": "Example",
  "number": "4.6.5",
  "title": "Another limit involving exponentials.",
  "body": "Another limit involving exponentials \n                    Find  .\n                 \n                    This is a   indeterminate form, so L'Hospital's Rule applies.\n                    We get\n                     \n                 "
},
{
  "id": "example-a-different-indeterminate-form",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-a-different-indeterminate-form",
  "type": "Example",
  "number": "4.6.6",
  "title": "A different indeterminate form.",
  "body": "A different indeterminate form \n                    Find  .\n                 \n                    If we try to evaluate the limit, we get the expression  .\n                    This is another indeterminate form, but is not one that we can apply L'Hospital's Rule to without doing some algebra first.\n                    We can write\n                     \n                    which is a   indeterminate form.\n                    We  can  use L'Hospital's on this expression!\n                 \n                    If we do so, we get\n                     \n                    So  .\n                 "
},
{
  "id": "example---infty-infty--indeterminate-form",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example---infty-infty--indeterminate-form",
  "type": "Example",
  "number": "4.6.7",
  "title": "<span class=\"process-math\">\\(\\infty-\\infty\\)<\/span> indeterminate form.",
  "body": " indeterminate form \n                    Find  .\n                 \n                    As  ,   and  .\n                    So this limit is the indeterminate form  .\n                    We can't sue L'Hospital's Rule yet, but we can try to rewrite this limit as a   or   indeterminate form.\n                    We'll try to do this by replacing   with   to get\n                     \n                 "
},
{
  "id": "example-limit-involving-radicals",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-limit-involving-radicals",
  "type": "Example",
  "number": "4.6.8",
  "title": "Limit involving radicals.",
  "body": "Limit involving radicals \n                    Find  .\n                 \n                    This is another   form, so we'll try to rewrite it into a form we can use L'Hospital's Rule on.\n                    The trick here is to factor an   out so we can get a   form, which we've already seen how to handle:\n                     \n                 "
},
{
  "id": "example-a-natural-limit",
  "level": "2",
  "url": "section-l-hospital-s-rule.html#example-a-natural-limit",
  "type": "Example",
  "number": "4.6.9",
  "title": "A natural limit.",
  "body": "A natural limit \n                    Find  .\n                 \n                    This limit is a   indeterminate form.\n                    We'll try taking logarithms to rewrite it as a   form, so set  .\n                    Then\n                     \n                    is a   form.\n                    We can use L'Hospital's by rewriting this limit at a   form or  .\n                    Either way, we get   and so the original limit is  .\n                 "
},
{
  "id": "section-extreme-values-of-functions",
  "level": "1",
  "url": "section-extreme-values-of-functions.html",
  "type": "Section",
  "number": "5.1",
  "title": "Extreme Values of Functions",
  "body": "Extreme Values of Functions \n            It's often of interest to determine how large or small some quantity can get.\n         Absolute Extrema functions absolute extrema absolute maximum absolute minimum extreme values \n                    List the extreme values, if any, of the following functions:\n                     . . . \n                 \n            Some functions may not have extreme values, but they could have values that are smaller or larger than all other values of the function \"nearby\".\n         Local extrema functions local extrema local maximum local minimum \n            In general, local extrema and absolute extrema can be different.\n            However, the following theorem does provide a relationship between the two on  closed, bounded  intervals.\n         Extreme Value Theorem Extreme Value Theorem \n                    Let   be a continuous function defined on the interval  \n                    Then   has both an absolute maximum and absolute minimum on  .\n                    Furthermore, these values occur at either an endpoint or a local extrema.\n                 \n            What   tells us is that we can find the extreme values of any continuous function defined on a closed, bounded interval by just checking the function at the endpoint and at its local extrema.\n         Finding extreme values \n                    Let  .\n                    Given that   has local extrema at  , find the extreme values of   on the interval  .\n                 \n                      tells us that we can find the extreme values by checking local extrema and the endpoints of our interval.\n                    Since   is the only local extreme value inside of our interval, that's the only one we need to check.\n                    We have\n                     \n                    So the absolute minimum of   on   is   and the absolute maximum is  \n                 \n            So if we can find where a function has local extrema, then finding absolute extrema won't be too much more difficult.\n            Thankfully, this is relatively straightforward if the function is differentiable.\n         Fermat's Theorem Fermat's Theorem \n                    Let   be a function and let   be a local extreme value of  .\n                    If   exists, then  .\n                 \n            So finding local extrema of   often amounts to finding where  , i.e., where it has a root.\n            However, we also need to worry about where   doesn't exist (just think about  ).\n            This leads to the following definition.\n         Critical Points critical points \n            Our method for finding extreme values on a closed interval will proceed as follows: find all the critical points, and then compare the values of our function at the critical points and the endpoints of the interval.\n         Extreme values of tangent \n                    Let  .\n                    Find the extreme values of   on the interval  .\n                 \n                    We need to find the critical points first.\n                    We have\n                     \n                    This is   if  , which occurs in our interval only if  .\n                    So we need to check   at  .\n                 Dealing with a cusp \n                    Let  .\n                    Find the absolute extrema of   on  .\n                 \n                    First, find the critical points of  :\n                     \n                    This is   at   and undefined at  , so our critical points are  .\n                    So to find the absolute extrema we need to check   at  .\n                    Doing so, we see that the absolute minimum value is   at   and the absolute maximum is   at  .\n                 "
},
{
  "id": "definition-absolute-extrema",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#definition-absolute-extrema",
  "type": "Definition",
  "number": "5.1.1",
  "title": "Absolute Extrema.",
  "body": "Absolute Extrema functions absolute extrema absolute maximum absolute minimum extreme values "
},
{
  "id": "example-76",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#example-76",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "\n                    List the extreme values, if any, of the following functions:\n                     . . . \n                 "
},
{
  "id": "definition-local-extrema",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#definition-local-extrema",
  "type": "Definition",
  "number": "5.1.3",
  "title": "Local extrema.",
  "body": "Local extrema functions local extrema local maximum local minimum "
},
{
  "id": "theorem-extreme-value-theorem",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#theorem-extreme-value-theorem",
  "type": "Theorem",
  "number": "5.1.4",
  "title": "Extreme Value Theorem.",
  "body": "Extreme Value Theorem Extreme Value Theorem \n                    Let   be a continuous function defined on the interval  \n                    Then   has both an absolute maximum and absolute minimum on  .\n                    Furthermore, these values occur at either an endpoint or a local extrema.\n                 "
},
{
  "id": "example-finding-extreme-values",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#example-finding-extreme-values",
  "type": "Example",
  "number": "5.1.5",
  "title": "Finding extreme values.",
  "body": "Finding extreme values \n                    Let  .\n                    Given that   has local extrema at  , find the extreme values of   on the interval  .\n                 \n                      tells us that we can find the extreme values by checking local extrema and the endpoints of our interval.\n                    Since   is the only local extreme value inside of our interval, that's the only one we need to check.\n                    We have\n                     \n                    So the absolute minimum of   on   is   and the absolute maximum is  \n                 "
},
{
  "id": "theorem-fermat-s-theorem",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#theorem-fermat-s-theorem",
  "type": "Theorem",
  "number": "5.1.6",
  "title": "Fermat's Theorem.",
  "body": "Fermat's Theorem Fermat's Theorem \n                    Let   be a function and let   be a local extreme value of  .\n                    If   exists, then  .\n                 "
},
{
  "id": "definition-critical-points",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#definition-critical-points",
  "type": "Definition",
  "number": "5.1.7",
  "title": "Critical Points.",
  "body": "Critical Points critical points "
},
{
  "id": "example-extreme-values-of-tangent",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#example-extreme-values-of-tangent",
  "type": "Example",
  "number": "5.1.8",
  "title": "Extreme values of tangent.",
  "body": "Extreme values of tangent \n                    Let  .\n                    Find the extreme values of   on the interval  .\n                 \n                    We need to find the critical points first.\n                    We have\n                     \n                    This is   if  , which occurs in our interval only if  .\n                    So we need to check   at  .\n                 "
},
{
  "id": "example-dealing-with-a-cusp",
  "level": "2",
  "url": "section-extreme-values-of-functions.html#example-dealing-with-a-cusp",
  "type": "Example",
  "number": "5.1.9",
  "title": "Dealing with a cusp.",
  "body": "Dealing with a cusp \n                    Let  .\n                    Find the absolute extrema of   on  .\n                 \n                    First, find the critical points of  :\n                     \n                    This is   at   and undefined at  , so our critical points are  .\n                    So to find the absolute extrema we need to check   at  .\n                    Doing so, we see that the absolute minimum value is   at   and the absolute maximum is   at  .\n                 "
},
{
  "id": "section-the-mean-value-theorem",
  "level": "1",
  "url": "section-the-mean-value-theorem.html",
  "type": "Section",
  "number": "5.2",
  "title": "The Mean Value Theorem",
  "body": "The Mean Value Theorem \n                The linear approximations we came up with in   are useful for estimating complicated functions with simpler, linear models.\n                In essence, we use the derivative of a function to tell us how much to change a given value of the function in order to estimate that function.\n                There is one problem with this approach, at least currently.\n                We have good reason to suspect that our approximations are close to the exact values in certain circumstances, but we don't know how close.\n                The goal of this section is to derive an estimate for the derivative that can help us to find more precise approximations.\n             Rolle's Theorem Rolle's Theorem. Rolle's Theorem \n                        Let   be a differentiable function on   and suppose  .\n                        Then there exists some number   in   such that  .\n                     existence theorem Rolle's Theorem and Traffic \n                        A car enters a highway going at  45  and leaves the highway going at the same speed.\n                        Was the car's acceleration ever  ?\n                     \n                        The speed of the car can be represented by a velocity function  .\n                        If we assume that the car entered the highway at time   and left at some future time  , then we know that\n                         \n                        By  , there must be some time   between   and   for which  .\n                        Since   is exactly the acceleration, we know that the car had to stop accelerating somewhere on the highway.\n                     The Mean Value Theorem \n                  is powerful because it has very general conditions for its use.\n                However, it does require the function in question to take on the same values at the endpoints of  , and this is a condition we'd like to try to relax.\n                However, we'll try to be clever about this and use  \n                to do most of the heavy lifting for us.\n             \n                If we imagine graphing some differentiable function   on some interval  , but  , then we can't apply  .\n                But maybe we can adjust it just a little bit so that we can?\n                In particular, the only reason we can't use   is that  .\n                But if we subtract the line through these points from  , we should get a new function for which   applies.\n             \n                The line through these points has equation\n                 \n                So define\n                 \n                Then\n                 \n                So    does  apply to this function.\n                Hence there exists some number   between   and   for which  .\n             Mean Value Theorem Mean Value Theorem Mean Value Theorem \n                        Let   be differentiable on some interval  .\n                        Then there exists a number   in   such that\n                         \n                        or equivalently\n                         \n                     \n                The   essentially says that there is at least one point inside of   for which the slope   at that point matches the \"average slope\"  \n                Like  , this is an existence theorem.\n                However, it's slightly more general, and so is applicable in more situations.\n                It's also useful in deriving error estimates.\n             Estimating error in a linear approximation \n                        Let   and let   denote the linear approximation to   at  .\n                        Find the largest possible error between   and   on the interval  .\n                     \n                        First, we should find  , which from   is just\n                         \n                        The error we need to estimate is  , for   in  .\n                        So we'll set   and let   be some number in  .\n                        By  , there exists some number   in   such that\n                         \n                        Now,   and  .\n                        So the above equation becomes\n                         \n                     \n                        Now, we don't know anything about   aside from the fact that it lives in  .\n                        However, we do have an expression for   now:\n                         \n                        So if   is in  , then the error   is  at most   .\n                        In other words,\n                         \n                     \n                Perhaps the most important example of   in this course will be the following theorem.\n             Zero Derivative Theorem \n                        Let   be differentiable on  .\n                        If   for all   in  , then   has to be a constant.\n                     \n                        The idea of the proof is to use   to show that   for any points   in  .\n                        Now, by   we have\n                         \n                        for some   in  .\n                        However,   by assumption, and so  .\n                        In other words,  .\n                        Hence   must be constant.\n                     "
},
{
  "id": "p-360",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#p-360",
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
  "number": "5.2.1",
  "title": "Rolle's Theorem.",
  "body": "Rolle's Theorem \n                        Let   be a differentiable function on   and suppose  .\n                        Then there exists some number   in   such that  .\n                     "
},
{
  "id": "p-362",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#p-362",
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
  "number": "5.2.2",
  "title": "Rolle's Theorem and Traffic.",
  "body": "Rolle's Theorem and Traffic \n                        A car enters a highway going at  45  and leaves the highway going at the same speed.\n                        Was the car's acceleration ever  ?\n                     \n                        The speed of the car can be represented by a velocity function  .\n                        If we assume that the car entered the highway at time   and left at some future time  , then we know that\n                         \n                        By  , there must be some time   between   and   for which  .\n                        Since   is exactly the acceleration, we know that the car had to stop accelerating somewhere on the highway.\n                     "
},
{
  "id": "p-368",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#p-368",
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
  "number": "5.2.3",
  "title": "Mean Value Theorem.",
  "body": "Mean Value Theorem Mean Value Theorem \n                        Let   be differentiable on some interval  .\n                        Then there exists a number   in   such that\n                         \n                        or equivalently\n                         \n                     "
},
{
  "id": "example-estimating-error-in-a-linear-approximation",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#example-estimating-error-in-a-linear-approximation",
  "type": "Example",
  "number": "5.2.4",
  "title": "Estimating error in a linear approximation.",
  "body": "Estimating error in a linear approximation \n                        Let   and let   denote the linear approximation to   at  .\n                        Find the largest possible error between   and   on the interval  .\n                     \n                        First, we should find  , which from   is just\n                         \n                        The error we need to estimate is  , for   in  .\n                        So we'll set   and let   be some number in  .\n                        By  , there exists some number   in   such that\n                         \n                        Now,   and  .\n                        So the above equation becomes\n                         \n                     \n                        Now, we don't know anything about   aside from the fact that it lives in  .\n                        However, we do have an expression for   now:\n                         \n                        So if   is in  , then the error   is  at most   .\n                        In other words,\n                         \n                     "
},
{
  "id": "theorem-zero-derivative-theorem",
  "level": "2",
  "url": "section-the-mean-value-theorem.html#theorem-zero-derivative-theorem",
  "type": "Theorem",
  "number": "5.2.5",
  "title": "Zero Derivative Theorem.",
  "body": "Zero Derivative Theorem \n                        Let   be differentiable on  .\n                        If   for all   in  , then   has to be a constant.\n                     \n                        The idea of the proof is to use   to show that   for any points   in  .\n                        Now, by   we have\n                         \n                        for some   in  .\n                        However,   by assumption, and so  .\n                        In other words,  .\n                        Hence   must be constant.\n                     "
},
{
  "id": "section-derivatives-and-graphs",
  "level": "1",
  "url": "section-derivatives-and-graphs.html",
  "type": "Section",
  "number": "5.3",
  "title": "Derivatives and Graphs",
  "body": "Derivatives and Graphs first derivative test Local maxima and minima using the first derivative test \n                    Let  .\n                    Find where   is increasing, decreasing, and any local maxima or minima.\n                 \n                    We can answer all of these questions by setting up a sign chart for\n                     .\n                    The critical points are  , and   on   and   on  .\n                    So   is decreasing on the first set of intervals, increasing on  ,   has a local maximum at   and a local minimum at  .\n                 First derivative test and a discontinuous function \n                    Find any local maxima or minima of  .\n                 \n                    We need to find the critical points, which means we need to find  :\n                     \n                    So the critical points are  .\n                    Note that    cannot  be a local extreme value of   since it's not in the domain of  .\n                    However, we still need to include it in our sign chart.\n                    If we do so, we find that   has a local minimum at   and a local maximum at   by the first derivative test.\n                 second derivative test Using the second derivative test \n                    Find any local extrema of  .\n                 \n                    First, we find the critical points:\n                     \n                    forces  .\n                    Now we check these critical points in  \n                     \n                    So   has a local minimum at   and a local maximum at  .\n                 inflection point "
},
{
  "id": "p-377",
  "level": "2",
  "url": "section-derivatives-and-graphs.html#p-377",
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
  "number": "5.3.1",
  "title": "Local maxima and minima using the first derivative test.",
  "body": "Local maxima and minima using the first derivative test \n                    Let  .\n                    Find where   is increasing, decreasing, and any local maxima or minima.\n                 \n                    We can answer all of these questions by setting up a sign chart for\n                     .\n                    The critical points are  , and   on   and   on  .\n                    So   is decreasing on the first set of intervals, increasing on  ,   has a local maximum at   and a local minimum at  .\n                 "
},
{
  "id": "example-first-derivative-test-and-a-discontinuous-function",
  "level": "2",
  "url": "section-derivatives-and-graphs.html#example-first-derivative-test-and-a-discontinuous-function",
  "type": "Example",
  "number": "5.3.2",
  "title": "First derivative test and a discontinuous function.",
  "body": "First derivative test and a discontinuous function \n                    Find any local maxima or minima of  .\n                 \n                    We need to find the critical points, which means we need to find  :\n                     \n                    So the critical points are  .\n                    Note that    cannot  be a local extreme value of   since it's not in the domain of  .\n                    However, we still need to include it in our sign chart.\n                    If we do so, we find that   has a local minimum at   and a local maximum at   by the first derivative test.\n                 "
},
{
  "id": "p-382",
  "level": "2",
  "url": "section-derivatives-and-graphs.html#p-382",
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
  "number": "5.3.3",
  "title": "Using the second derivative test.",
  "body": "Using the second derivative test \n                    Find any local extrema of  .\n                 \n                    First, we find the critical points:\n                     \n                    forces  .\n                    Now we check these critical points in  \n                     \n                    So   has a local minimum at   and a local maximum at  .\n                 "
},
{
  "id": "p-385",
  "level": "2",
  "url": "section-derivatives-and-graphs.html#p-385",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inflection point "
},
{
  "id": "section-optimization-problems",
  "level": "1",
  "url": "section-optimization-problems.html",
  "type": "Section",
  "number": "5.4",
  "title": "Optimization Problems",
  "body": "Optimization Problems optimization problems Minimizing a product \n                    Find two numbers that differ by   and whose product is a minimum.\n                 \n                    Call our numbers   and suppose  .\n                    Then   and we need to choose   in such a way that   is as small as possible.\n                    If we replace   with  , then this means we need to minimize\n                     \n                    The critical point of   is  , and since   is a parabola we know that this must be the location of the absolute minimum value on the graph.\n                    So the numbers we need are  .\n                 Minimizing material costs \n                    A box with an open top and a square base is to be built using material that costs \\$5 per square meter.\n                    The box must have a volume of  32000 .\n                    Find the dimensions of the box that will be cheapest to build to these specifications.\n                 \n                    There are two things we need to do here:\n                     Find the quantity to be optimize. Solve the resulting optimization problem. \n                    We need to minimize costs, which means we need to minimize how much material is used to construct this box.\n                    Hence we must minimize the surface area of the box.\n                    If we let   denote the length of the base of the box and   the height of the box, then the surface area is given by\n                     \n                    Now, we can't minimize this yet because we have too many variables.\n                    However, we can solve for   in terms of   by using the volume constraint.\n                    Since the volume of the box is   this gives  \n                    So the quantity we need to minimize is\n                     \n                 \n                    To minimize this, we find the critical points by solving  .\n                    This gives, after some algebra,  .\n                    Now we need to be careful here! We only have a critical point at this step.\n                    We need to make an argument now as to why this critical point should be an absolute minimum of  .\n                    One way to do this is by setting up a sign chart for  .\n                    If we do this, then we see that   for   in  , while   for   in  .\n                    If we think about what this tells us of the graph of  , we see that   must minimize  , at least for  .\n                    So the dimensions that minimize the cost of building this box are  .\n                 Distance on an ellipse \n                    Find the point(s) on the ellipse   that are farthest from the point  .\n                 \n                    This is an optimization problem since we're trying to maximize distance.\n                    There are two things we need to do:\n                     Find the function we need to optimize. Find the extrema. \n                    The function we need to optimize is just the distance function.\n                    In particular, if   is a point on the ellipse then we need to maximize\n                     \n                 \n                    Now, we have a constraint that   must satisfy; namely, this must lie on the ellipse  .\n                    This means that  , and if we plug this into our distance function we get\n                     \n                    Now here's a trick we can use: maximizing   is the same thing as maximizing  , but   is  much  nicer to work with algebraically.\n                    So instead of maximizing  , we'll maximize the function\n                     \n                 \n                    We'll start by finding it's local extrema, which means we need to find the critical points.\n                    These are the solutions of  .\n                    Since\n                     \n                    we see that the only critical point is  .\n                    Since  , this means that   gives us a local maximum of   by the second derivative test.\n                    In fact, we can go further: this must be an absolute maximum of  , since   is always concave down (it's actually a parabola).\n                 \n                    So the point on the ellipse   farthest from   has  -coordinate equal to  .\n                    This means that the corresponding  -coordinate is   so the points on the ellipse that are the farthest from   are the points  \n                 "
},
{
  "id": "p-386",
  "level": "2",
  "url": "section-optimization-problems.html#p-386",
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
  "number": "5.4.1",
  "title": "Minimizing a product.",
  "body": "Minimizing a product \n                    Find two numbers that differ by   and whose product is a minimum.\n                 \n                    Call our numbers   and suppose  .\n                    Then   and we need to choose   in such a way that   is as small as possible.\n                    If we replace   with  , then this means we need to minimize\n                     \n                    The critical point of   is  , and since   is a parabola we know that this must be the location of the absolute minimum value on the graph.\n                    So the numbers we need are  .\n                 "
},
{
  "id": "example-minimizing-material-costs",
  "level": "2",
  "url": "section-optimization-problems.html#example-minimizing-material-costs",
  "type": "Example",
  "number": "5.4.2",
  "title": "Minimizing material costs.",
  "body": "Minimizing material costs \n                    A box with an open top and a square base is to be built using material that costs \\$5 per square meter.\n                    The box must have a volume of  32000 .\n                    Find the dimensions of the box that will be cheapest to build to these specifications.\n                 \n                    There are two things we need to do here:\n                     Find the quantity to be optimize. Solve the resulting optimization problem. \n                    We need to minimize costs, which means we need to minimize how much material is used to construct this box.\n                    Hence we must minimize the surface area of the box.\n                    If we let   denote the length of the base of the box and   the height of the box, then the surface area is given by\n                     \n                    Now, we can't minimize this yet because we have too many variables.\n                    However, we can solve for   in terms of   by using the volume constraint.\n                    Since the volume of the box is   this gives  \n                    So the quantity we need to minimize is\n                     \n                 \n                    To minimize this, we find the critical points by solving  .\n                    This gives, after some algebra,  .\n                    Now we need to be careful here! We only have a critical point at this step.\n                    We need to make an argument now as to why this critical point should be an absolute minimum of  .\n                    One way to do this is by setting up a sign chart for  .\n                    If we do this, then we see that   for   in  , while   for   in  .\n                    If we think about what this tells us of the graph of  , we see that   must minimize  , at least for  .\n                    So the dimensions that minimize the cost of building this box are  .\n                 "
},
{
  "id": "example-distance-on-an-ellipse",
  "level": "2",
  "url": "section-optimization-problems.html#example-distance-on-an-ellipse",
  "type": "Example",
  "number": "5.4.3",
  "title": "Distance on an ellipse.",
  "body": "Distance on an ellipse \n                    Find the point(s) on the ellipse   that are farthest from the point  .\n                 \n                    This is an optimization problem since we're trying to maximize distance.\n                    There are two things we need to do:\n                     Find the function we need to optimize. Find the extrema. \n                    The function we need to optimize is just the distance function.\n                    In particular, if   is a point on the ellipse then we need to maximize\n                     \n                 \n                    Now, we have a constraint that   must satisfy; namely, this must lie on the ellipse  .\n                    This means that  , and if we plug this into our distance function we get\n                     \n                    Now here's a trick we can use: maximizing   is the same thing as maximizing  , but   is  much  nicer to work with algebraically.\n                    So instead of maximizing  , we'll maximize the function\n                     \n                 \n                    We'll start by finding it's local extrema, which means we need to find the critical points.\n                    These are the solutions of  .\n                    Since\n                     \n                    we see that the only critical point is  .\n                    Since  , this means that   gives us a local maximum of   by the second derivative test.\n                    In fact, we can go further: this must be an absolute maximum of  , since   is always concave down (it's actually a parabola).\n                 \n                    So the point on the ellipse   farthest from   has  -coordinate equal to  .\n                    This means that the corresponding  -coordinate is   so the points on the ellipse that are the farthest from   are the points  \n                 "
},
{
  "id": "section-newton-s-method",
  "level": "1",
  "url": "section-newton-s-method.html",
  "type": "Section",
  "number": "5.5",
  "title": "Newton's Method",
  "body": "Newton's Method \n            Consider a differentiable function  , and suppose we want to find a root of  , which is a number   such that  .\n            In some cases this is very easy (like  ), but in others this may be more complicated (such as  ).\n            So we'd like to find a way to  approximate  the root  .\n         Newton's Method sequence Approximating a root \n                    Find the third approximation given by Newton's Method for the root of  , using  .\n                 \n                    First, note that  .\n                    Then\n                     \n                    so  .\n                    Now we run through this method again to get  :\n                     \n                    So  \n                 Approximating  \n                    Approximate   using Newton's method.\n                 \n                    We need to find a function   for which  .\n                    Perhaps the easiest is  .\n                    Now, to use Newton's method we also need a starting guess.\n                    We'll pick   since this is close to  .\n                    Then\n                     \n                    so  .\n                    Similarly,\n                     \n                    Since these approximations are so close, we estimate that  .\n                 A Babylonian problem \n                    Use Newton's method to find an algorithm for computing  .\n                 \n                    To use Newton's method, we need to come up with a function   whose root is  .\n                    A simple choice for this is  , since  .\n                    Now, if we're getting some sequence   from Newton's method then the next term in the sequence is\n                     \n                    After some algebra, we can rewrite this as\n                     \n                 \n                    We can actually test this algorithm out.\n                    Say we want to approximate  .\n                    A reasonable guess would be  , since this should be close to  .\n                    Then we get\n                     \n                    So it looks like  , and indeed this is quite close to the actual value of  .\n                 \n                    We can go one step further for this algorithm.\n                    If   is the sequence we obtain using Newton's method for approximating  , then as we saw earlier\n                     \n                    Now, assume that   exists and is nonzero, and call it  .\n                    Then\n                     \n                    becomes\n                     \n                    which we can rearrange to get\n                     \n                    or just  .\n                    Hence  .\n                 "
},
{
  "id": "p-398",
  "level": "2",
  "url": "section-newton-s-method.html#p-398",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton's Method "
},
{
  "id": "p-399",
  "level": "2",
  "url": "section-newton-s-method.html#p-399",
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
  "number": "5.5.1",
  "title": "Approximating a root.",
  "body": "Approximating a root \n                    Find the third approximation given by Newton's Method for the root of  , using  .\n                 \n                    First, note that  .\n                    Then\n                     \n                    so  .\n                    Now we run through this method again to get  :\n                     \n                    So  \n                 "
},
{
  "id": "example-approximating-pi",
  "level": "2",
  "url": "section-newton-s-method.html#example-approximating-pi",
  "type": "Example",
  "number": "5.5.2",
  "title": "Approximating <span class=\"process-math\">\\(\\pi\\)<\/span>.",
  "body": "Approximating  \n                    Approximate   using Newton's method.\n                 \n                    We need to find a function   for which  .\n                    Perhaps the easiest is  .\n                    Now, to use Newton's method we also need a starting guess.\n                    We'll pick   since this is close to  .\n                    Then\n                     \n                    so  .\n                    Similarly,\n                     \n                    Since these approximations are so close, we estimate that  .\n                 "
},
{
  "id": "example-a-babylonian-problem",
  "level": "2",
  "url": "section-newton-s-method.html#example-a-babylonian-problem",
  "type": "Example",
  "number": "5.5.3",
  "title": "A Babylonian problem.",
  "body": "A Babylonian problem \n                    Use Newton's method to find an algorithm for computing  .\n                 \n                    To use Newton's method, we need to come up with a function   whose root is  .\n                    A simple choice for this is  , since  .\n                    Now, if we're getting some sequence   from Newton's method then the next term in the sequence is\n                     \n                    After some algebra, we can rewrite this as\n                     \n                 \n                    We can actually test this algorithm out.\n                    Say we want to approximate  .\n                    A reasonable guess would be  , since this should be close to  .\n                    Then we get\n                     \n                    So it looks like  , and indeed this is quite close to the actual value of  .\n                 \n                    We can go one step further for this algorithm.\n                    If   is the sequence we obtain using Newton's method for approximating  , then as we saw earlier\n                     \n                    Now, assume that   exists and is nonzero, and call it  .\n                    Then\n                     \n                    becomes\n                     \n                    which we can rearrange to get\n                     \n                    or just  .\n                    Hence  .\n                 "
},
{
  "id": "section-antiderivatives",
  "level": "1",
  "url": "section-antiderivatives.html",
  "type": "Section",
  "number": "5.6",
  "title": "Antiderivatives",
  "body": "Antiderivatives antiderivative Antiderivatives antiderivatives \n                    A function   is called an antiderivative of the function   if   for all   in an interval  .\n                 Multiple antiderivatives \n                    Find three different antiderivatives for  .\n                 \n                    An antiderivative of   is any function whose derivative is  .\n                    So three antiderivatives could be\n                     \n                 \n            From   we see that any function of the form   is an antiderivative of  .\n            In fact, this describes all possible antiderivatives of  .\n            This suggests the following theorem.\n         General Antiderivatives \n                    Let   be some function with antiderivative   on some interval  .\n                    Then the most general antiderivative of   is\n                     \n                    where   is an arbitrary constant.\n                 \n                    It might not seem like this statement requires a proof, but it does!\n                    We can check very easily that every function of the form   is an antiderivative of  , but how do we know every antiderivative takes this form?\n                    To prove this, let   be an arbitrary antiderivative of  .\n                    Then we need to show that  , or equivalently that  .\n                    We can do this by taking the derivative of   to get\n                     \n                    and so by   we know that   must be constant on  .\n                    Hence   for some constant  , or equivalently  .\n                    Therefore  every  antiderivative of   can be written as  .\n                 \n            It might seem superfluous, but typically when dealing with models requiring us to find antiderivatives we'll want to find the most general antiderivative somewhere along the way.\n            Moral of the story:  don't forget to add  . \n         Finding antiderivatives \n                    Find the most general antiderivatives of the following functions:\n                     \n                 \n                    We have the following:\n                     The general antiderivative of   is  The general antiderivative of   is  The general antiderivative of   is  . The general antiderivative of   is  \n                 The antiderivative of  \n                    Find the general antiderivative of  .\n                 \n                    We have two cases we need to consider, since the domain of   consists of two intervals.\n                    First, suppose that   is in  .\n                    Then we know that  , so on this interval the most general antiderivative of   is  .\n                 \n                    Now let   be in  .\n                    Then   isn't defined here.\n                    However, we can write\n                     \n                    and if   then   and   is defined, and in fact\n                     \n                    So the most general antiderivative of   on   is  .\n                    Putting this all together, we can say that the most general antiderivative of   is given by\n                     \n                    If we know that we're only selecting values of   with the same sign, then we can just say that the antiderivative of   is  .\n                 Antiderivatives involving secant \n                    Find the general antiderivatives of   and  .\n                 \n                    The first antiderivative isn't too hard; it's just  .\n                    The second is a little more complicated but still not too bad.\n                    Since  , a good guess for an antiderivative of   would be  \n                    However, the derivative of this is  , so we're off by a factor of  .\n                    So we just need to divide our guess by   to correct for this.\n                    Hence the general antiderivative of   is  .\n                 Antidifferentiation Formulas \n                    Let   and   denote antiderivatives of   and  , and let   be a constant.\n                    Then we have the following:\n                     Particular antiderivatives of functions Function Antiderivative \n                    These are by no means the only antiderivatives that you will need to deal with, but they are probably the most common.\n                 Falling objects \n                    An object is dropped from a height of  100  above sea level and falls with downward acceleration equal to  9.8 .\n                    Find the height   of the object   seconds after it's dropped.\n                 \n                    Take downward to be the negative direction and sea level to be  .\n                    Since acceleration is the second derivative of position, then the position (i.e. height) of the object should be the second  antiderivative  of acceleration.\n                    At this step, it's tempting to say that since  , we have\n                     .\n                    And indeed,   is a function whose second derivative is  .\n                    However, we have a slight problem here.\n                    We know that   and  .\n                    If  , then it's impossible for   to equal  .\n                    The problem here is we forgot about the arbitrary constants.\n                 \n                    To get an accurate expression for  , we go back to  .\n                    Then   for some constant  .\n                    Since  , this forces  .\n                    So we have  .\n                    Now we antidifferentiate one more time to get  .\n                    Since  , this forces  .\n                    So  .\n                 \n            Some functions that do not have an obvious antiderivative can be simplified through algebra into a form that is perhaps more helpful.\n         A tricky antiderivative \n                    Find the most general antiderivative of\n                     \n                 \n                    It's tough to think of a function whose derivative is  , though since the denominator is   it seems likely that this antiderivative will involve   in some way.\n                    In order to actually find the antiderivative, we'll rewrite   into a more convenient form.\n                    First, note that the numerator is very close to the denominator, which means we can almost cancel it out.\n                    So we'll split up the numerator as follows:\n                     \n                 \n                    We can find the antiderivative of this term by term, so the most general antiderivative of   is\n                     \n                 net change "
},
{
  "id": "p-408",
  "level": "2",
  "url": "section-antiderivatives.html#p-408",
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
  "number": "5.6.1",
  "title": "Antiderivatives.",
  "body": "Antiderivatives antiderivatives \n                    A function   is called an antiderivative of the function   if   for all   in an interval  .\n                 "
},
{
  "id": "example-multiple-antiderivatives",
  "level": "2",
  "url": "section-antiderivatives.html#example-multiple-antiderivatives",
  "type": "Example",
  "number": "5.6.2",
  "title": "Multiple antiderivatives.",
  "body": "Multiple antiderivatives \n                    Find three different antiderivatives for  .\n                 \n                    An antiderivative of   is any function whose derivative is  .\n                    So three antiderivatives could be\n                     \n                 "
},
{
  "id": "theorem-general-antiderivatives",
  "level": "2",
  "url": "section-antiderivatives.html#theorem-general-antiderivatives",
  "type": "Theorem",
  "number": "5.6.3",
  "title": "General Antiderivatives.",
  "body": "General Antiderivatives \n                    Let   be some function with antiderivative   on some interval  .\n                    Then the most general antiderivative of   is\n                     \n                    where   is an arbitrary constant.\n                 \n                    It might not seem like this statement requires a proof, but it does!\n                    We can check very easily that every function of the form   is an antiderivative of  , but how do we know every antiderivative takes this form?\n                    To prove this, let   be an arbitrary antiderivative of  .\n                    Then we need to show that  , or equivalently that  .\n                    We can do this by taking the derivative of   to get\n                     \n                    and so by   we know that   must be constant on  .\n                    Hence   for some constant  , or equivalently  .\n                    Therefore  every  antiderivative of   can be written as  .\n                 "
},
{
  "id": "example-finding-antiderivatives",
  "level": "2",
  "url": "section-antiderivatives.html#example-finding-antiderivatives",
  "type": "Example",
  "number": "5.6.4",
  "title": "Finding antiderivatives.",
  "body": "Finding antiderivatives \n                    Find the most general antiderivatives of the following functions:\n                     \n                 \n                    We have the following:\n                     The general antiderivative of   is  The general antiderivative of   is  The general antiderivative of   is  . The general antiderivative of   is  \n                 "
},
{
  "id": "example-the-antiderivative-of--frac-1-x-m-",
  "level": "2",
  "url": "section-antiderivatives.html#example-the-antiderivative-of--frac-1-x-m-",
  "type": "Example",
  "number": "5.6.5",
  "title": "The antiderivative of <span class=\"process-math\">\\(\\frac{1}{x}\\)<\/span>.",
  "body": "The antiderivative of  \n                    Find the general antiderivative of  .\n                 \n                    We have two cases we need to consider, since the domain of   consists of two intervals.\n                    First, suppose that   is in  .\n                    Then we know that  , so on this interval the most general antiderivative of   is  .\n                 \n                    Now let   be in  .\n                    Then   isn't defined here.\n                    However, we can write\n                     \n                    and if   then   and   is defined, and in fact\n                     \n                    So the most general antiderivative of   on   is  .\n                    Putting this all together, we can say that the most general antiderivative of   is given by\n                     \n                    If we know that we're only selecting values of   with the same sign, then we can just say that the antiderivative of   is  .\n                 "
},
{
  "id": "example-antiderivatives-involving-secant",
  "level": "2",
  "url": "section-antiderivatives.html#example-antiderivatives-involving-secant",
  "type": "Example",
  "number": "5.6.6",
  "title": "Antiderivatives involving secant.",
  "body": "Antiderivatives involving secant \n                    Find the general antiderivatives of   and  .\n                 \n                    The first antiderivative isn't too hard; it's just  .\n                    The second is a little more complicated but still not too bad.\n                    Since  , a good guess for an antiderivative of   would be  \n                    However, the derivative of this is  , so we're off by a factor of  .\n                    So we just need to divide our guess by   to correct for this.\n                    Hence the general antiderivative of   is  .\n                 "
},
{
  "id": "theorem-antidifferentiation-formulas",
  "level": "2",
  "url": "section-antiderivatives.html#theorem-antidifferentiation-formulas",
  "type": "Theorem",
  "number": "5.6.7",
  "title": "Antidifferentiation Formulas.",
  "body": "Antidifferentiation Formulas \n                    Let   and   denote antiderivatives of   and  , and let   be a constant.\n                    Then we have the following:\n                     Particular antiderivatives of functions Function Antiderivative \n                    These are by no means the only antiderivatives that you will need to deal with, but they are probably the most common.\n                 "
},
{
  "id": "example-falling-objects",
  "level": "2",
  "url": "section-antiderivatives.html#example-falling-objects",
  "type": "Example",
  "number": "5.6.9",
  "title": "Falling objects.",
  "body": "Falling objects \n                    An object is dropped from a height of  100  above sea level and falls with downward acceleration equal to  9.8 .\n                    Find the height   of the object   seconds after it's dropped.\n                 \n                    Take downward to be the negative direction and sea level to be  .\n                    Since acceleration is the second derivative of position, then the position (i.e. height) of the object should be the second  antiderivative  of acceleration.\n                    At this step, it's tempting to say that since  , we have\n                     .\n                    And indeed,   is a function whose second derivative is  .\n                    However, we have a slight problem here.\n                    We know that   and  .\n                    If  , then it's impossible for   to equal  .\n                    The problem here is we forgot about the arbitrary constants.\n                 \n                    To get an accurate expression for  , we go back to  .\n                    Then   for some constant  .\n                    Since  , this forces  .\n                    So we have  .\n                    Now we antidifferentiate one more time to get  .\n                    Since  , this forces  .\n                    So  .\n                 "
},
{
  "id": "example-a-tricky-antiderivative",
  "level": "2",
  "url": "section-antiderivatives.html#example-a-tricky-antiderivative",
  "type": "Example",
  "number": "5.6.10",
  "title": "A tricky antiderivative.",
  "body": "A tricky antiderivative \n                    Find the most general antiderivative of\n                     \n                 \n                    It's tough to think of a function whose derivative is  , though since the denominator is   it seems likely that this antiderivative will involve   in some way.\n                    In order to actually find the antiderivative, we'll rewrite   into a more convenient form.\n                    First, note that the numerator is very close to the denominator, which means we can almost cancel it out.\n                    So we'll split up the numerator as follows:\n                     \n                 \n                    We can find the antiderivative of this term by term, so the most general antiderivative of   is\n                     \n                 "
},
{
  "id": "p-431",
  "level": "2",
  "url": "section-antiderivatives.html#p-431",
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
  "body": "Areas Under Curves \n            We know how to find areas of simple shapes, such as rectangles, triangles and circles.\n            But how can we find the area of a more complicated shape?\n            Say, for example, the area under   from   to  ?\n            Well, if we don't know it exactly then we can at least approximate it using a shape we do know.\n            For example, using rectangles.\n         right endpoints \n            Now, if we add up the areas of these rectangles we get an approximation for the area under the graph.\n            Call these areas  .\n            So the area under the graph of   from   to   is about\n             \n         \n            There's nothing stopping us from going further here.\n            For example, we pick   rectangles, each with base length   and heights determined by right endpoints as above, then the area   of all of the rectangles will be an approximation (in fact, an overestimate) of the area of  .\n            The bases of these rectangles are given by\n             \n            So the areas of these rectangles are\n             \n            Adding these up, we get\n             \n            or just\n             \n            So if we sent   to  , we should get the exact area.\n            In other words, the area under   from   to   is given by\n             \n         \n            Actually finding this limit requires some trickery.\n            It's not at all obvious, but we can write\n             \n            Hence\n             \n            So the exact area under   from   to   is  .\n            Note that this matches up with our intuition from the last chapter: the area should be equal to the net change of an antiderivative.\n            In this case, an antiderivative of   is  , and the net change of   from   to   is exactly  .\n         \n            The process we used above for   can be carried out for any continuous function.\n            If we have a function defined on the interval  , we can approximate the area under the graph by using rectangles.\n            First, we split   into   different subintervals  , each of width   and where\n             \n            The approximate area under the graph of   from   to   is then\n             \n            We can now define the area under a graph of a continuous function.\n            Again, the idea is to approximate the graph with more and more rectangles.\n         Area area sample points sigma notation Evaluating a sum \n                    Determine  \n                 \n                    We start at   and finish at  .\n                    Plugging all of these values in for  , we get the following table:\n                     Table of values for  \n                    So we can say that\n                     \n                 Using sigma notation \n                    Use sigma notation to write the sum of all squares from   to  .\n                 \n                    We need to start at   and stop at  .\n                    So the first component of this sum using sigma notation looks like  .\n                    Now we just need to figure out what goes inside of it.\n                    Since we're adding squares of numbers, we'll just put   inside of this sum.\n                    Hence the sum of all squares from   to   can be denoted\n                     \n                 \n            Sigma notation has some useful properties, since it's just another way to write sums.\n         Properties of Sigma Notation \n                    Let   and let  .\n                    Let   be a constant.\n                    Then the following are true:\n                     \n                    In other words, we can break sigma notation up over addition and subtraction, and we can move constants outside of it.\n                 Areas using sigma notation \n                    Write down a limit that gives the area under   from   to   using sigma notation.\n                 \n                    First, note that we can rewrite   using sigma notation as\n                     \n                    We know what   is, so we just need to identify   and  .\n                      isn't too bad here, it's just\n                     \n                    The   are a little more complicated, but we'll still use right endpoints to find them.\n                    So we have\n                     \n                    In general,\n                     \n                    for  .\n                 \n                    Now we have everything we need to write our limit.\n                    Hence the area under   from   to   is given by\n                     \n                 \n            Just as the problem of finding the slope of a tangent line can be viewed as a rate of change problem, the problem of finding areas can be viewed as an  accumulation problem .\n         Finding work done \n                    In physics, the work done by a constant force   on some particle that moves a displacement   is given by the formula\n                     \n                    How should we define the work done by a variable force?\n                 \n                    The main idea here is to treat the variable force as the combination of several constant forces.\n                    To be specific, let   denote our force (which depends on position  ) and suppose it acts on a particle moving from   to  .\n                      itself may not be constant, but if we break   up into   subintervals of the form   each of length  , then   should be nearly constant on each subinterval.\n                    So we can pick points   from each subinterval and say that   for all   in  .\n                 \n                    Now we can approximate the work done by   as the particle moves through the subinterval  .\n                    The work done should be about equal to  .\n                    Now, if we add up these estimates for each subinterval, we see that the total work done should be approximated by\n                     \n                    which suggests that we should define the exact work done to be\n                     \n                 \n            Note that   was not written in terms of finding areas, but still involved the limit from  .\n            This tells us that the ideas in this section have a wider use than in just finding areas under curves.\n         "
},
{
  "id": "p-440",
  "level": "2",
  "url": "section-areas-under-curves.html#p-440",
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
  "body": "Area area "
},
{
  "id": "p-446",
  "level": "2",
  "url": "section-areas-under-curves.html#p-446",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sample points "
},
{
  "id": "p-447",
  "level": "2",
  "url": "section-areas-under-curves.html#p-447",
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
  "body": "Evaluating a sum \n                    Determine  \n                 \n                    We start at   and finish at  .\n                    Plugging all of these values in for  , we get the following table:\n                     Table of values for  \n                    So we can say that\n                     \n                 "
},
{
  "id": "example-using-sigma-notation",
  "level": "2",
  "url": "section-areas-under-curves.html#example-using-sigma-notation",
  "type": "Example",
  "number": "6.1.4",
  "title": "Using sigma notation.",
  "body": "Using sigma notation \n                    Use sigma notation to write the sum of all squares from   to  .\n                 \n                    We need to start at   and stop at  .\n                    So the first component of this sum using sigma notation looks like  .\n                    Now we just need to figure out what goes inside of it.\n                    Since we're adding squares of numbers, we'll just put   inside of this sum.\n                    Hence the sum of all squares from   to   can be denoted\n                     \n                 "
},
{
  "id": "theorem-properties-of-sigma-notation",
  "level": "2",
  "url": "section-areas-under-curves.html#theorem-properties-of-sigma-notation",
  "type": "Theorem",
  "number": "6.1.5",
  "title": "Properties of Sigma Notation.",
  "body": "Properties of Sigma Notation \n                    Let   and let  .\n                    Let   be a constant.\n                    Then the following are true:\n                     \n                    In other words, we can break sigma notation up over addition and subtraction, and we can move constants outside of it.\n                 "
},
{
  "id": "example-areas-using-sigma-notation",
  "level": "2",
  "url": "section-areas-under-curves.html#example-areas-using-sigma-notation",
  "type": "Example",
  "number": "6.1.6",
  "title": "Areas using sigma notation.",
  "body": "Areas using sigma notation \n                    Write down a limit that gives the area under   from   to   using sigma notation.\n                 \n                    First, note that we can rewrite   using sigma notation as\n                     \n                    We know what   is, so we just need to identify   and  .\n                      isn't too bad here, it's just\n                     \n                    The   are a little more complicated, but we'll still use right endpoints to find them.\n                    So we have\n                     \n                    In general,\n                     \n                    for  .\n                 \n                    Now we have everything we need to write our limit.\n                    Hence the area under   from   to   is given by\n                     \n                 "
},
{
  "id": "example-finding-work-done",
  "level": "2",
  "url": "section-areas-under-curves.html#example-finding-work-done",
  "type": "Example",
  "number": "6.1.7",
  "title": "Finding work done.",
  "body": "Finding work done \n                    In physics, the work done by a constant force   on some particle that moves a displacement   is given by the formula\n                     \n                    How should we define the work done by a variable force?\n                 \n                    The main idea here is to treat the variable force as the combination of several constant forces.\n                    To be specific, let   denote our force (which depends on position  ) and suppose it acts on a particle moving from   to  .\n                      itself may not be constant, but if we break   up into   subintervals of the form   each of length  , then   should be nearly constant on each subinterval.\n                    So we can pick points   from each subinterval and say that   for all   in  .\n                 \n                    Now we can approximate the work done by   as the particle moves through the subinterval  .\n                    The work done should be about equal to  .\n                    Now, if we add up these estimates for each subinterval, we see that the total work done should be approximated by\n                     \n                    which suggests that we should define the exact work done to be\n                     \n                 "
},
{
  "id": "section-the-definite-integral",
  "level": "1",
  "url": "section-the-definite-integral.html",
  "type": "Section",
  "number": "6.2",
  "title": "The Definite Integral",
  "body": "The Definite Integral partition \n            The partition and sample points selected are now used to determine a sum that represents an approximation to the area under the curve:\n             \n            Geometrically, this sum represents the areas of multiple rectangles added together.\n            Since these sums are essential for what follows, we will give them a name.\n         Riemann Sum Riemann sum Riemann sum \n            Although this can be more complicated than our definition in  , it still approximates the area under   from   to  .\n            And as each subinterval in this partition gets smaller (i.e. as   or equivalently as  ), then this approximation should become exact, at least if   is  nice enough  (see   for a more precise statement).\n         The Definite Integral definite integral of   from   to  integrable \n            We can use   to rewrite our area definition: the area under   from   to   is defined to be the definite integral of   on  , assuming it exists.\n            For a function to be integrable, the particular partition of   that we use  cannot affect the limit  in  .\n            This gives us a great deal of freedom in approximating the definite integral\/area under a curve: when choosing sample points, we can use left endpoints; right endpoints; midpoints and more.\n            However, if   is integrable then we lose nothing by just using right endpoints and subintervals of equal length, as in  .\n         Integrability of Piecewise Continuous Functions \n                    Let   be a bounded, piecewise continuous function on   with finitely many jump discontinuities.\n                    Then   is integrable on  .\n                    In particular, continuous functions are always integrable on bounded, closed intervals.\n                 \n            All of the functions that we will work with will be piecewise continuous, and many important quantities in mathematics and its applications can be represented by bounded, piecewise continuous functions.\n            Definite integrals of such quantities therefore exist and are often used as a measure of  accumulation. \n            In particular,   can be generalized to provide the following definition of work done by a force.\n         Work work work Expressing work done \n                    A particle moving from   to   is acted upon by the force  .\n                    Find the work done by the force on this particle.\n                 \n                    Using  , we see that the work done should be\n                     \n                    Since the definite integral represents area, and the definite integral of   exists (since this is continuous), then we can say that\n                     \n                 \n            In   we used the connection between definite integrals and areas to find the work done.\n            For the moment, this is our only method for calculating definite integrals.\n            We will develop other methods starting in  , but the connection between definite integrals and areas is an important one that we will make use of frequently.\n         A radical integral \n                    Determine  .\n                 \n                    We won't be able to solve this integral algebraically until Calculus 2, but we can solve it geometrically instead.\n                    If we graph  , we get the upper half of the circle of radius   centered at the origin.\n                    So the integral given must be exactly one-fourth the area of this circle, so\n                     \n                 \n            Since the definite integral is defined as a limit of sums, it shares many properties with sums.\n            In particular, we have the following version of  \n         Properties of the Definite Integral \n                    Let   and   be integrable on   and let   be a constant.\n                    Let   be any number in  .\n                    Then the following are true:\n                     \n                    In other words, we can break definite integrals up over addition and subtraction, and we can move constants outside of it.\n                 midpoint rule Midpoint Rule \n                    Let   be a continuous function.\n                    Then\n                     \n                    where\n                     .\n                    Note that this rule calls for evenly dividing   into a partition   where each subinterval has equal length  .\n                 left endpoint rule right endpoint rule Approximating an integral \n                    Approximate   using Riemann sums with  .\n                 \n                    For this integral, we have\n                     \n                    We will have different estimates using left endpoints, right endpoints and midpoints.\n                    Using left endpoints, we have\n                     \n                    Using midpoints, we have\n                     \n                    Using right endpoints, we have\n                     \n                 \n                    Geometrically, we see that\n                     \n                    The exact value of this integral is actually  , and we see that  , the midpoint estimate, is clearly the best approximation to the integral in this case.\n                 \n            The geometric interpretation of definite integrals as areas also suggests the following formulas.\n            These can be useful for simplifying and estimating certain definite integrals.\n         More Properties of the Definite Integral \n                    Let   be integrable functions on  .\n                    Then\n                     If   on  , then  . If   on  , then  . \n                 "
},
{
  "id": "p-462",
  "level": "2",
  "url": "section-the-definite-integral.html#p-462",
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
  "body": "Riemann Sum Riemann sum Riemann sum "
},
{
  "id": "definition-the-definite-integral",
  "level": "2",
  "url": "section-the-definite-integral.html#definition-the-definite-integral",
  "type": "Definition",
  "number": "6.2.2",
  "title": "The Definite Integral.",
  "body": "The Definite Integral definite integral of   from   to  integrable "
},
{
  "id": "theorem-integrability-of-piecewise-continuous-functions",
  "level": "2",
  "url": "section-the-definite-integral.html#theorem-integrability-of-piecewise-continuous-functions",
  "type": "Theorem",
  "number": "6.2.3",
  "title": "Integrability of Piecewise Continuous Functions.",
  "body": "Integrability of Piecewise Continuous Functions \n                    Let   be a bounded, piecewise continuous function on   with finitely many jump discontinuities.\n                    Then   is integrable on  .\n                    In particular, continuous functions are always integrable on bounded, closed intervals.\n                 "
},
{
  "id": "definition-work",
  "level": "2",
  "url": "section-the-definite-integral.html#definition-work",
  "type": "Definition",
  "number": "6.2.4",
  "title": "Work.",
  "body": "Work work work "
},
{
  "id": "example-expressing-work-done",
  "level": "2",
  "url": "section-the-definite-integral.html#example-expressing-work-done",
  "type": "Example",
  "number": "6.2.5",
  "title": "Expressing work done.",
  "body": "Expressing work done \n                    A particle moving from   to   is acted upon by the force  .\n                    Find the work done by the force on this particle.\n                 \n                    Using  , we see that the work done should be\n                     \n                    Since the definite integral represents area, and the definite integral of   exists (since this is continuous), then we can say that\n                     \n                 "
},
{
  "id": "example-a-radical-integral",
  "level": "2",
  "url": "section-the-definite-integral.html#example-a-radical-integral",
  "type": "Example",
  "number": "6.2.6",
  "title": "A radical integral.",
  "body": "A radical integral \n                    Determine  .\n                 \n                    We won't be able to solve this integral algebraically until Calculus 2, but we can solve it geometrically instead.\n                    If we graph  , we get the upper half of the circle of radius   centered at the origin.\n                    So the integral given must be exactly one-fourth the area of this circle, so\n                     \n                 "
},
{
  "id": "theorem-properties-of-the-definite-integral",
  "level": "2",
  "url": "section-the-definite-integral.html#theorem-properties-of-the-definite-integral",
  "type": "Theorem",
  "number": "6.2.7",
  "title": "Properties of the Definite Integral.",
  "body": "Properties of the Definite Integral \n                    Let   and   be integrable on   and let   be a constant.\n                    Let   be any number in  .\n                    Then the following are true:\n                     \n                    In other words, we can break definite integrals up over addition and subtraction, and we can move constants outside of it.\n                 "
},
{
  "id": "p-478",
  "level": "2",
  "url": "section-the-definite-integral.html#p-478",
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
  "number": "6.2.8",
  "title": "Midpoint Rule.",
  "body": "Midpoint Rule \n                    Let   be a continuous function.\n                    Then\n                     \n                    where\n                     .\n                    Note that this rule calls for evenly dividing   into a partition   where each subinterval has equal length  .\n                 "
},
{
  "id": "p-480",
  "level": "2",
  "url": "section-the-definite-integral.html#p-480",
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
  "number": "6.2.9",
  "title": "Approximating an integral.",
  "body": "Approximating an integral \n                    Approximate   using Riemann sums with  .\n                 \n                    For this integral, we have\n                     \n                    We will have different estimates using left endpoints, right endpoints and midpoints.\n                    Using left endpoints, we have\n                     \n                    Using midpoints, we have\n                     \n                    Using right endpoints, we have\n                     \n                 \n                    Geometrically, we see that\n                     \n                    The exact value of this integral is actually  , and we see that  , the midpoint estimate, is clearly the best approximation to the integral in this case.\n                 "
},
{
  "id": "theorem-more-properties-of-the-definite-integral",
  "level": "2",
  "url": "section-the-definite-integral.html#theorem-more-properties-of-the-definite-integral",
  "type": "Theorem",
  "number": "6.2.10",
  "title": "More Properties of the Definite Integral.",
  "body": "More Properties of the Definite Integral \n                    Let   be integrable functions on  .\n                    Then\n                     If   on  , then  . If   on  , then  . \n                 "
},
{
  "id": "section-evaluating-integrals",
  "level": "1",
  "url": "section-evaluating-integrals.html",
  "type": "Section",
  "number": "6.3",
  "title": "Evaluating Integrals",
  "body": "Evaluating Integrals \n            Just as we did with derivatives, we want to find a way to calculate integrals without having to compute limits every time.\n         Evaluation Theorem \n                    Let   be continuous on   and let   be a single antiderivative of   on this interval.\n                    Then \n                     \n                 \n                    First, partition   into  .\n                    Then we can say that\n                     \n                    By the Mean Value Theorem, we can rewrite each term in the sum using  :\n                     \n                    where   is just some point in  .\n                    So we have\n                     \n                    If we now send   (i.e,,  ), then the above becomes\n                     \n                 \n              tells us that if we want to evaluate the definite integral of a continuous function, we need to first find an antiderivative.\n            We can also think of this result as follows: the definite integral of a rate of change is just the net change of the antiderivative.\n         Modeling a population \n                    A honeybee population starts with   members and grows at a rate of   per week.\n                    Find the total population after   weeks in terms of  .\n                 \n                    The total population after   should be given by\n                     \n                 \n            As a useful shorthand, we introduce the notation  \n            So if   is an antiderivative of  , we can say that\n             \n         Area under a rational function \n                    Find the area under   from   to  .\n                 \n                    The area is just the definite integral, which is\n                     \n                 average value Average force \n                    An object of mass  3  is acted upon by several forces that combine to give it an acceleration of  , where   is in units of   and   is in seconds.\n                    Find the average force acting on the mass from   to  .\n                 \n                    We first need to find the net force acting on the particle.\n                    By Newton's Second Law, this is  .\n                    So the average force should be\n                     \n                 \n            Because of the relationship between definite integrals and antiderivatives, we introduce a notation for antiderivatives that reinforces this connect.\n         Indefinite Integral indefinite integral Finding an indefinite integral \n                    Given that \n                     \n                    find  .\n                 \n                    We can find this integral by splitting it up, since the antiderivative of a sum is just the sum of the antiderivatives.\n                    So\n                     \n                 \n            Note that using   to find definite integrals relies on having a particular antiderivative of a function  , but we've said nothing about whether or not such an antiderivative can exist.\n            In the next section, we'll see how to use integrals to construct antiderivatives.\n         "
},
{
  "id": "theorem-evaluation-theorem",
  "level": "2",
  "url": "section-evaluating-integrals.html#theorem-evaluation-theorem",
  "type": "Theorem",
  "number": "6.3.1",
  "title": "Evaluation Theorem.",
  "body": "Evaluation Theorem \n                    Let   be continuous on   and let   be a single antiderivative of   on this interval.\n                    Then \n                     \n                 \n                    First, partition   into  .\n                    Then we can say that\n                     \n                    By the Mean Value Theorem, we can rewrite each term in the sum using  :\n                     \n                    where   is just some point in  .\n                    So we have\n                     \n                    If we now send   (i.e,,  ), then the above becomes\n                     \n                 "
},
{
  "id": "example-modeling-a-population",
  "level": "2",
  "url": "section-evaluating-integrals.html#example-modeling-a-population",
  "type": "Example",
  "number": "6.3.2",
  "title": "Modeling a population.",
  "body": "Modeling a population \n                    A honeybee population starts with   members and grows at a rate of   per week.\n                    Find the total population after   weeks in terms of  .\n                 \n                    The total population after   should be given by\n                     \n                 "
},
{
  "id": "example-area-under-a-rational-function",
  "level": "2",
  "url": "section-evaluating-integrals.html#example-area-under-a-rational-function",
  "type": "Example",
  "number": "6.3.3",
  "title": "Area under a rational function.",
  "body": "Area under a rational function \n                    Find the area under   from   to  .\n                 \n                    The area is just the definite integral, which is\n                     \n                 "
},
{
  "id": "p-496",
  "level": "2",
  "url": "section-evaluating-integrals.html#p-496",
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
  "body": "Average force \n                    An object of mass  3  is acted upon by several forces that combine to give it an acceleration of  , where   is in units of   and   is in seconds.\n                    Find the average force acting on the mass from   to  .\n                 \n                    We first need to find the net force acting on the particle.\n                    By Newton's Second Law, this is  .\n                    So the average force should be\n                     \n                 "
},
{
  "id": "definition-indefinite-integral",
  "level": "2",
  "url": "section-evaluating-integrals.html#definition-indefinite-integral",
  "type": "Definition",
  "number": "6.3.5",
  "title": "Indefinite Integral.",
  "body": "Indefinite Integral indefinite integral "
},
{
  "id": "example-finding-an-indefinite-integral",
  "level": "2",
  "url": "section-evaluating-integrals.html#example-finding-an-indefinite-integral",
  "type": "Example",
  "number": "6.3.6",
  "title": "Finding an indefinite integral.",
  "body": "Finding an indefinite integral \n                    Given that \n                     \n                    find  .\n                 \n                    We can find this integral by splitting it up, since the antiderivative of a sum is just the sum of the antiderivatives.\n                    So\n                     \n                 "
},
{
  "id": "section-the-fundamental-theorem-of-calculus",
  "level": "1",
  "url": "section-the-fundamental-theorem-of-calculus.html",
  "type": "Section",
  "number": "6.4",
  "title": "The Fundamental Theorem of Calculus",
  "body": "The Fundamental Theorem of Calculus \n            The previous section used antiderivatives to find definite integrals.\n            Now we'll go the other direction and use integrals to define antiderivatives.\n            We can do this as follows.\n         \n            Let   be some function continuous on  .\n            Then we can say that   must be continuous on every interval of the form   for   in  .\n            This means that the definite integrals   exist, and so we can use these to define a function, say  .\n         Functions from integrals \n                    Let   and define  .\n                    Find  .\n                    Where is   the largest?\n                 \n                    First, note that we can compute   by finding an antiderivative of  .\n                    So\n                     \n                    or just\n                     \n                 \n                    We can find where   is largest by using a derivative test or just geometry.\n                    Since   represents the area under   from   to  , it follows that this area will be largest at  , since this is where   crosses the axis.\n                 \n            There's one important thing to take away from the previous example.\n            The function   turned out to be an antiderivative of  , so in particular  .\n            This is not a coincidence.\n         Fundamental Theorem of Calculus \n                    Let   be a continuous function defined on  .\n                 Define   for   in  .\n                    Then  , i.e.,   is an antiderivative of  . Let   be a particular antiderivative of  .\n                    Then  \n                    We'll sketch the proof of the first part.\n                    First, assume that  .\n                    Then\n                     \n                    Now, if   is small and if  , then   should be approximately equal to   since   is continuous.\n                    Therefore\n                     \n                    and so  .\n                 \n            The second part of   is something we've seen before in  , but the first part is new.\n            Essentially, this result says that integration and differentiation are  inverses  of each other.\n         Error function error function \n                    By the Fundamental Theorem of Calculus, we have\n                     \n                    Note that   as  , which suggests that the error function \"levels out\" as   increases, which is in fact true.\n                 Computing derivatives \n                    Let  \n                    Find  .\n                 \n                    We have\n                     \n                    Here,   acts like an inside function so we must use the chain rule in addition to the Fundamental Theorem of Calculus to find this derivative.\n                 A business problem \n                    A company purchases equipment that depreciates at a rate   and accumulates maintenance costs at a rate  , where   denotes the number of months after purchase.\n                    The company wants to minimize the cost per month of the equipment due to depreciation and maintenance. \n                    After how much time should the company replace the equipment?\n                 \n                    First, we need to figure out the cost per month due to depreciation and maintenance, call it  .\n                    Then\n                     \n                    Now, the total depreciation after   months is  , and the total maintenance cost after   months is  .\n                    So\n                     \n                    This is the function we need to minimize.\n                 \n                    To minimize  , we'll start by finding its critical points.\n                    Assuming that each of these functions is differentiable, we have\n                     \n                    which reduces to\n                     \n                    So the critical points occur at any value   for which  , i.e., the cost per month due to depreciation and maintenance equals the rate of depreciation plus the rate of maintenance costs.\n                 \n                    Now we need to see if we have a minimum or a maximum.\n                    To do so, we can use the second derivative test.\n                    After some algebra, we get that\n                     \n                    and so\n                     \n                    Therefore   gives a local minimum.\n                    If we assume that   is differentiable everywhere, then this local minimum should also be an absolute minimum since it's the only critical point.\n                 "
},
{
  "id": "example-functions-from-integrals",
  "level": "2",
  "url": "section-the-fundamental-theorem-of-calculus.html#example-functions-from-integrals",
  "type": "Example",
  "number": "6.4.1",
  "title": "Functions from integrals.",
  "body": "Functions from integrals \n                    Let   and define  .\n                    Find  .\n                    Where is   the largest?\n                 \n                    First, note that we can compute   by finding an antiderivative of  .\n                    So\n                     \n                    or just\n                     \n                 \n                    We can find where   is largest by using a derivative test or just geometry.\n                    Since   represents the area under   from   to  , it follows that this area will be largest at  , since this is where   crosses the axis.\n                 "
},
{
  "id": "theorem-fundamental-theorem-of-calculus",
  "level": "2",
  "url": "section-the-fundamental-theorem-of-calculus.html#theorem-fundamental-theorem-of-calculus",
  "type": "Theorem",
  "number": "6.4.2",
  "title": "Fundamental Theorem of Calculus.",
  "body": "Fundamental Theorem of Calculus \n                    Let   be a continuous function defined on  .\n                 Define   for   in  .\n                    Then  , i.e.,   is an antiderivative of  . Let   be a particular antiderivative of  .\n                    Then  \n                    We'll sketch the proof of the first part.\n                    First, assume that  .\n                    Then\n                     \n                    Now, if   is small and if  , then   should be approximately equal to   since   is continuous.\n                    Therefore\n                     \n                    and so  .\n                 "
},
{
  "id": "example-error-function",
  "level": "2",
  "url": "section-the-fundamental-theorem-of-calculus.html#example-error-function",
  "type": "Example",
  "number": "6.4.3",
  "title": "Error function.",
  "body": "Error function error function \n                    By the Fundamental Theorem of Calculus, we have\n                     \n                    Note that   as  , which suggests that the error function \"levels out\" as   increases, which is in fact true.\n                 "
},
{
  "id": "example-computing-derivatives",
  "level": "2",
  "url": "section-the-fundamental-theorem-of-calculus.html#example-computing-derivatives",
  "type": "Example",
  "number": "6.4.4",
  "title": "Computing derivatives.",
  "body": "Computing derivatives \n                    Let  \n                    Find  .\n                 \n                    We have\n                     \n                    Here,   acts like an inside function so we must use the chain rule in addition to the Fundamental Theorem of Calculus to find this derivative.\n                 "
},
{
  "id": "example-a-business-problem",
  "level": "2",
  "url": "section-the-fundamental-theorem-of-calculus.html#example-a-business-problem",
  "type": "Example",
  "number": "6.4.5",
  "title": "A business problem.",
  "body": "A business problem \n                    A company purchases equipment that depreciates at a rate   and accumulates maintenance costs at a rate  , where   denotes the number of months after purchase.\n                    The company wants to minimize the cost per month of the equipment due to depreciation and maintenance. \n                    After how much time should the company replace the equipment?\n                 \n                    First, we need to figure out the cost per month due to depreciation and maintenance, call it  .\n                    Then\n                     \n                    Now, the total depreciation after   months is  , and the total maintenance cost after   months is  .\n                    So\n                     \n                    This is the function we need to minimize.\n                 \n                    To minimize  , we'll start by finding its critical points.\n                    Assuming that each of these functions is differentiable, we have\n                     \n                    which reduces to\n                     \n                    So the critical points occur at any value   for which  , i.e., the cost per month due to depreciation and maintenance equals the rate of depreciation plus the rate of maintenance costs.\n                 \n                    Now we need to see if we have a minimum or a maximum.\n                    To do so, we can use the second derivative test.\n                    After some algebra, we get that\n                     \n                    and so\n                     \n                    Therefore   gives a local minimum.\n                    If we assume that   is differentiable everywhere, then this local minimum should also be an absolute minimum since it's the only critical point.\n                 "
},
{
  "id": "section-substitution",
  "level": "1",
  "url": "section-substitution.html",
  "type": "Section",
  "number": "6.5",
  "title": "Substitution",
  "body": "Substitution \n            By  , we know that integration and differentiation are inverse operations.\n            This means that differentiation rules, such as the chain rule and product rule, have corresponding  integration  rules.\n            In this section we look at the integration rule corresponding to the chain rule, known as  -substitution, and in Calculus 2 you'll see the integration rule corresponding to the product rule.\n         -substitution -Substitution \n                    Let   be a differentiable function whose range is an interval  .\n                    Let   be a continuous function on  .\n                    Then \n                     \n                 \n            Solving an integral   by  -substitution typically proceeds as follows:\n             Choose some substitution   to simplify your integral. Your choice for   will most likely be an \"inside function\". Rewrite your integral in terms of   and   instead of   and  . Solve the resulting integral in terms of   if possible, and then rewrite your answer in terms of the original variable  . \n         A simple substitution \n                    Determine   by using the substitution  .\n                 \n                    We need to rewrite the integral in terms of  .\n                    An easy way to start is to replace   with  :\n                     \n                    However,  we can't integrate yet .\n                    This is because the integral needs to be written entirely in terms of   and  ; no terms involving  , including  , can remain.\n                    to rewrite   in terms of  , we'll find   and then \"solve\" for  :\n                     \n                    So our integral turns into\n                     \n                    The last step is to replace   with  , and so\n                     \n                    We can also check this by differentiating.\n                 Simplifying an integral with substitution \n                    Determine  .\n                 \n                    We can find   without too much trouble, but this integral is more complicated.\n                    However, we can use  -substitution to get our integral into this form.\n                    So we'll let  .\n                    Then  , which means   and so\n                     \n                 \n             -substitution is often useful if one part of an integral can be written as the derivative of another part of the integral.\n         Integral of tangent \n                    Find the general antiderivative of  .\n                 \n                    We need to find  .\n                    If we rewrite   in terms of sine and cosine, we get\n                     \n                    It's not obvious, but we can solve this using  -substitution since   looks a lot like the derivative of  .\n                    So we'll let  , giving   or just  .\n                    This simplifies our integral to\n                     \n                    Since  , this shows that the general antiderivative of   is\n                     \n                    Note that    would not work  in this example, at least not without some nasty algebra.\n                 \n            We can also use  -substitution to find definite integrals.\n         Integrating with a natural log \n                    Determine  .\n                 \n                    This integral looks awful, but the integrand contains   and its derivative  , which suggests that the substitution   might simplify things.\n                    So let  .\n                    Then  , or  , and the integral becomes\n                     \n                 \n            In the last example we had to be careful about our limits of integration since they applied to   but not  .\n            We can simplify the process a little by converting the   limits to   limits, as shown in the next example.\n         Area under  \n                    Find the area under the graph of   from   to  .\n                 \n                    The area is given by  .\n                    We can solve this by  -substitution.\n                    Let  , our inside function.\n                    Then  , so   and our integral turns into\n                     \n                    Now we change the limits to be in terms of  , giving us   and  .\n                    So the area is just\n                     \n                 "
},
{
  "id": "p-522",
  "level": "2",
  "url": "section-substitution.html#p-522",
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
  "body": "-Substitution \n                    Let   be a differentiable function whose range is an interval  .\n                    Let   be a continuous function on  .\n                    Then \n                     \n                 "
},
{
  "id": "example-a-simple-substitution",
  "level": "2",
  "url": "section-substitution.html#example-a-simple-substitution",
  "type": "Example",
  "number": "6.5.2",
  "title": "A simple substitution.",
  "body": "A simple substitution \n                    Determine   by using the substitution  .\n                 \n                    We need to rewrite the integral in terms of  .\n                    An easy way to start is to replace   with  :\n                     \n                    However,  we can't integrate yet .\n                    This is because the integral needs to be written entirely in terms of   and  ; no terms involving  , including  , can remain.\n                    to rewrite   in terms of  , we'll find   and then \"solve\" for  :\n                     \n                    So our integral turns into\n                     \n                    The last step is to replace   with  , and so\n                     \n                    We can also check this by differentiating.\n                 "
},
{
  "id": "example-simplifying-an-integral-with-substitution",
  "level": "2",
  "url": "section-substitution.html#example-simplifying-an-integral-with-substitution",
  "type": "Example",
  "number": "6.5.3",
  "title": "Simplifying an integral with substitution.",
  "body": "Simplifying an integral with substitution \n                    Determine  .\n                 \n                    We can find   without too much trouble, but this integral is more complicated.\n                    However, we can use  -substitution to get our integral into this form.\n                    So we'll let  .\n                    Then  , which means   and so\n                     \n                 "
},
{
  "id": "example-integral-of-tangent",
  "level": "2",
  "url": "section-substitution.html#example-integral-of-tangent",
  "type": "Example",
  "number": "6.5.4",
  "title": "Integral of tangent.",
  "body": "Integral of tangent \n                    Find the general antiderivative of  .\n                 \n                    We need to find  .\n                    If we rewrite   in terms of sine and cosine, we get\n                     \n                    It's not obvious, but we can solve this using  -substitution since   looks a lot like the derivative of  .\n                    So we'll let  , giving   or just  .\n                    This simplifies our integral to\n                     \n                    Since  , this shows that the general antiderivative of   is\n                     \n                    Note that    would not work  in this example, at least not without some nasty algebra.\n                 "
},
{
  "id": "example-integrating-with-a-natural-log",
  "level": "2",
  "url": "section-substitution.html#example-integrating-with-a-natural-log",
  "type": "Example",
  "number": "6.5.5",
  "title": "Integrating with a natural log.",
  "body": "Integrating with a natural log \n                    Determine  .\n                 \n                    This integral looks awful, but the integrand contains   and its derivative  , which suggests that the substitution   might simplify things.\n                    So let  .\n                    Then  , or  , and the integral becomes\n                     \n                 "
},
{
  "id": "example-area-under-sine",
  "level": "2",
  "url": "section-substitution.html#example-area-under-sine",
  "type": "Example",
  "number": "6.5.6",
  "title": "Area under <span class=\"process-math\">\\(x\\sin x^{2}\\)<\/span>.",
  "body": "Area under  \n                    Find the area under the graph of   from   to  .\n                 \n                    The area is given by  .\n                    We can solve this by  -substitution.\n                    Let  , our inside function.\n                    Then  , so   and our integral turns into\n                     \n                    Now we change the limits to be in terms of  , giving us   and  .\n                    So the area is just\n                     \n                 "
},
{
  "id": "section-integration-by-parts",
  "level": "1",
  "url": "section-integration-by-parts.html",
  "type": "Section",
  "number": "7.1",
  "title": "Integration by Parts",
  "body": "Integration by Parts \n            Suppose we want to integrate  .\n            This can't be simplified using algebra (since integrals don't split up over products!) and substitution probably won't be very helpful, since   does not already contain an \"inside function\" that we could replace.\n            The integration tools that we have are unable to compute this integral, so we need to develop more tools!\n         \n            Recall that the substitution method for solving integrals from   is derived from the chain rule.\n            In fact, by   every derivative rule available to us also provides a corresponding integration rule.\n            So perhaps the integration rule corresponding to the product rule can help us to integrate products.\n            We call this method  integration by parts .\n         Integration by Parts integration techniques integration by parts \n                    Let   and   be continuous functions, with   differentiable.\n                    Then\n                 \n                    By the product rule, we have  .\n                    Rearranging this, we have\n                     \n                    Finally, we can integrate both sides to get\n                     \n                 \n            A useful way to remember the integration by parts method is as follows:\n             \n            Integration by parts can be used to integrate products of functions  that can't already be evaluated by simpler means .\n         Using the Integration by Parts Formula \n                    Compute  .\n                 \n                    To use  , we need to write   in the form  .\n                    Once we have   and  , then we can set up the rest of the formula.\n                    One thing that can make this method tricky is the fact that we can have many different choices for   and  ; the only thing we need for certain is for   here.\n                    However, if we look at the formula   then we'll see two new terms on the right hand side:   and  , together in the second integral.\n                    This means that we'll need to differentiate   and integrate  , and this will suggest what both should be.\n                 \n                    Since we need to compute  , then we want   to be easy to differentiate.\n                    Similarly, we want   to be easy to integrate.\n                    And since we'd like to be able to compute this integral, we'd also like   to be simpler than  .\n                    Now return to  .\n                    Since   gets simpler if we differentiate it by   doesn't, this suggests that we should set  .\n                    And since  , we must have   (since   automatically becomes whatever is left over).\n                    With these choices, we have\n                 \n                    Therefore\n                 \n                You may be wondering why we didn't include an arbitrary constant when we found   in  .\n                This is because including an arbitrary constant here doesn't affect the final answer.\n                It's certainly not incorrect to include one here, but it adds more work than is already necessary.\n             \n            When using the integration by parts method, it's usually a good idea to choose   to be the polynomial portion of your integrand if there is one.\n            This is because polynomials become simpler when they're differentiated.\n            However, there are examples where   should be something else.\n         Integrals Involving the Natural Logarithm \n                    Determine  .\n                 \n                    Since we need to integrate a product, and we can't easily do so with  -substitution or algebra, we'll try integration by parts.\n                    We could pick  , and this is certainly easy to differentiate so we can find  .\n                    However, doing so leaves us with  , which is tricky to integrate, but is easy to differentiate.\n                    So we'll try setting   and  .\n                    Then\n                 \n                    and so\n                 An Integral from Differential Equations \n                    An important concept in the field of differential equations is that of the  Laplace transform .\n                    In the process of computing the Laplace transform of  , an integral similar to   appears.\n                    Determine this integral.\n                 \n                    Here, it doesn't make much difference what we select for   or  , since both   and   are easy to differentiate and integrate, while neither becomes simpler.\n                    But since we're integrating a product, we'll try to use integration by parts anyway and hope for the best.\n                    To that end, let   and  .\n                    Then   and  , which gives\n                 \n                    As expected, the new integral isn't any simpler than the one that we started with.\n                    However, it's not any more  complicated  either.\n                    So we'll try integration by parts on the new integral as well, with   and  .\n                    Then\n                 \n                    So we have\n                 \n                    There is something very strange about this equation:  the same integral appears on both sides .\n                    This is no longer a calculus problem, it's an algebra problem!\n                    Solving for the integral algebraically (and including the arbitrary constant!) gives\n                     \n                 \n            Integrals with integrands of the form  ,   or   (where   is a polynomials) can be successfully evaluated using the  tabular method .\n         The Tabular Method \n                    Evaluate  .\n                 \n            Integration by parts also applies to definite integrals.\n            You only need to remember to carry the limits through.\n         Sign of a Sine \n                    Let  .\n                    Does   tend to be positive or negative along  ?\n                 \n                    We need to check the sign of  .\n                    Using the tabular method, we get\n                     \n                    Since this is negative,   tends to be negative along  .\n                 "
},
{
  "id": "theorem-integration-by-parts",
  "level": "2",
  "url": "section-integration-by-parts.html#theorem-integration-by-parts",
  "type": "Theorem",
  "number": "7.1.1",
  "title": "Integration by Parts.",
  "body": "Integration by Parts integration techniques integration by parts \n                    Let   and   be continuous functions, with   differentiable.\n                    Then\n                 \n                    By the product rule, we have  .\n                    Rearranging this, we have\n                     \n                    Finally, we can integrate both sides to get\n                     \n                 "
},
{
  "id": "example-using-the-integration-by-parts-formula",
  "level": "2",
  "url": "section-integration-by-parts.html#example-using-the-integration-by-parts-formula",
  "type": "Example",
  "number": "7.1.2",
  "title": "Using the Integration by Parts Formula.",
  "body": "Using the Integration by Parts Formula \n                    Compute  .\n                 \n                    To use  , we need to write   in the form  .\n                    Once we have   and  , then we can set up the rest of the formula.\n                    One thing that can make this method tricky is the fact that we can have many different choices for   and  ; the only thing we need for certain is for   here.\n                    However, if we look at the formula   then we'll see two new terms on the right hand side:   and  , together in the second integral.\n                    This means that we'll need to differentiate   and integrate  , and this will suggest what both should be.\n                 \n                    Since we need to compute  , then we want   to be easy to differentiate.\n                    Similarly, we want   to be easy to integrate.\n                    And since we'd like to be able to compute this integral, we'd also like   to be simpler than  .\n                    Now return to  .\n                    Since   gets simpler if we differentiate it by   doesn't, this suggests that we should set  .\n                    And since  , we must have   (since   automatically becomes whatever is left over).\n                    With these choices, we have\n                 \n                    Therefore\n                 "
},
{
  "id": "example-integrals-involving-the-natural-logarithm",
  "level": "2",
  "url": "section-integration-by-parts.html#example-integrals-involving-the-natural-logarithm",
  "type": "Example",
  "number": "7.1.3",
  "title": "Integrals Involving the Natural Logarithm.",
  "body": "Integrals Involving the Natural Logarithm \n                    Determine  .\n                 \n                    Since we need to integrate a product, and we can't easily do so with  -substitution or algebra, we'll try integration by parts.\n                    We could pick  , and this is certainly easy to differentiate so we can find  .\n                    However, doing so leaves us with  , which is tricky to integrate, but is easy to differentiate.\n                    So we'll try setting   and  .\n                    Then\n                 \n                    and so\n                 "
},
{
  "id": "example-an-integral-from-differential-equations",
  "level": "2",
  "url": "section-integration-by-parts.html#example-an-integral-from-differential-equations",
  "type": "Example",
  "number": "7.1.4",
  "title": "An Integral from Differential Equations.",
  "body": "An Integral from Differential Equations \n                    An important concept in the field of differential equations is that of the  Laplace transform .\n                    In the process of computing the Laplace transform of  , an integral similar to   appears.\n                    Determine this integral.\n                 \n                    Here, it doesn't make much difference what we select for   or  , since both   and   are easy to differentiate and integrate, while neither becomes simpler.\n                    But since we're integrating a product, we'll try to use integration by parts anyway and hope for the best.\n                    To that end, let   and  .\n                    Then   and  , which gives\n                 \n                    As expected, the new integral isn't any simpler than the one that we started with.\n                    However, it's not any more  complicated  either.\n                    So we'll try integration by parts on the new integral as well, with   and  .\n                    Then\n                 \n                    So we have\n                 \n                    There is something very strange about this equation:  the same integral appears on both sides .\n                    This is no longer a calculus problem, it's an algebra problem!\n                    Solving for the integral algebraically (and including the arbitrary constant!) gives\n                     \n                 "
},
{
  "id": "example-the-tabular-method",
  "level": "2",
  "url": "section-integration-by-parts.html#example-the-tabular-method",
  "type": "Example",
  "number": "7.1.5",
  "title": "The Tabular Method.",
  "body": "The Tabular Method \n                    Evaluate  .\n                 "
},
{
  "id": "example-sign-of-a-sine",
  "level": "2",
  "url": "section-integration-by-parts.html#example-sign-of-a-sine",
  "type": "Example",
  "number": "7.1.6",
  "title": "Sign of a Sine.",
  "body": "Sign of a Sine \n                    Let  .\n                    Does   tend to be positive or negative along  ?\n                 \n                    We need to check the sign of  .\n                    Using the tabular method, we get\n                     \n                    Since this is negative,   tends to be negative along  .\n                 "
},
{
  "id": "section-trigonometric-integrals-and-substitution",
  "level": "1",
  "url": "section-trigonometric-integrals-and-substitution.html",
  "type": "Section",
  "number": "7.2",
  "title": "Trigonometric Integrals and Substitution",
  "body": "Trigonometric Integrals and Substitution \n                In this section we determine how to evaluate integrals involving powers of trigonometric functions (such as  ,   and others), as well as integrals involving certain radicals.\n                Much of our work will follow from the important identity  , as well as the  half-angle formulas \n                 \n             Integrals Involving Powers of Sine and Cosine Integrating an Odd Power of Cosine \n                        Determine  .\n                     \n                        Although it's not obvious, we can actually solve this integral with substitution.\n                        First, we'll separate a power of   from the rest in order to act as our  :\n                         \n                        Now, if we want   to act as   in a substitution, then we need   to look like  .\n                        We can do this by using the Pythagorean Identity and writing  .\n                     \n                        Now we'll set  , which gives   and\n                     \n                        which we can finish integrating without much trouble.\n                     \n                The trick we used above only worked because we had an odd power of cosine.\n                In general, when integrating  , you want to separate a factor from an odd power (if there is one).\n                Then finish by using substitution.\n             Odd Powers of Sine and Cosine \n                        Determine  .\n                     \n                        Remember: we want to separate a factor off of an odd power if there is one.\n                        Thankfully, we have two!\n                        We'll pick sine this time:\n                     \n                        At this point, the integral isn't too difficult to complete.\n                     \n                If integrating even powers of sine and cosine, the algebra gets a little worse since the substitution trick applied above no longer works.\n             Integrating Even Powers of Cosine \n                        The integral   appears when finding the area of the circle using integration.\n                        Find the value of this integral.\n                     \n                        Since we have an even power to work with, we'll try the half-angle formula.\n                        This lets us reduce the power on the cosine, at the expense of multiplying   by  , which greatly works in our favor:\n                     Integrals Involving Powers of Secant and Tangent \n                In contrast to those involving sine and cosine, all of the integrals here involving secant and tangent are solvable using substitution.\n                Generally, we'll attack these problems by separating a factor of   (in which case we use  ) or a factor of   (in which case we use  ).\n                This will often be done using the  Pythagorean identity \n                 \n                We will occasionally need to make use of two integral formulas:\n                 \n             Integrating a Power of Tangent \n                        Determine  .\n                     \n                        Our goal is to separate a factor of either   or   to serve as our  .\n                        Since neither appears, we'll use the Pythagorean identity to introduce a   into our integral:\n                         \n                     \n                        At this point the first integral can be solved using substitution, but the second integral needs to be rewritten again.\n                        However, the same trick we applied before works here too: just use the Pythagorean identity to introduce a factor of  .\n                        This gives\n                         \n                        So\n                         \n                     Integrating a Product of Tangent and Secant \n                        Determine  \n                     \n                        Here, we see that we can separate a factor of   from the integrand, so we'll do that and use  :\n                     \n                In general, try to follow the guidelines below when integrating products of secant and tangent:\n                 If the power of secant is  even , then separate a factor of   and use  , along with the Pythagorean identity if necessary. If the power of tangent is  odd , then separate a factor of   and use  , along with the Pythagorean identity if necessary. \n             \n                Now, for an example that does not fall into the above guidelines.\n             Integrating Secant Cubed \n                        Determine  .\n                     \n                        We're dealing with an odd power of secant, so splitting off a factor of   won't help here.\n                        We also lack a   term, so splitting off a factor of   is tricky as well.\n                        We'll try integrating by parts instead, with\n                         \n                        This gives\n                     \n                        Therefore\n                         \n                     Trigonometric Substitutions \n                An ellipse with horizontal axis length   and vertical axis length   centered at the origin is given by\n                 \n                If we want to find the area of this ellipse, then we can compute the following integral and multiply it by  :\n                 \n                This integral is difficult to solve due to the square root in the integrand; it's tough to imagine what an antiderivative might be.\n                So what we'll try to do is to use a \"reverse substitution\" that simplifies the square root.\n             \n                To do so, notice that the Pythagorean identity gives  .\n                Taking the square root of the left hand side is much easier here than taking a root of the right hand side.\n                So we'll try that substitution here: let\n                 \n                Then\n                 \n                Before we go further, let's figure out what our new limits are.\n                Since  , we have  , and so  .\n                Hence we need our limits for   to be   and  , and so we get\n                 \n                We've seen how to integrate a function like this in  .\n                Hence the area of this ellipse is\n                 \n             trigonometric substitution Trigonometric substitutions radical substitution identity An Exponential Integral \n                        Determine  \n                     \n                            This is adapted from  Thomas' Calculus,   edition, exercise 30 on page 591. \n                         \n                        Even though this integral involves only exponentials, we can simplify it using trigonometric substitution due to the presence of the radical.\n                        First, we'll use  -substitution to rewrite the integral into a form more suitable for trigonometric substitution: with   and  , we get\n                         \n                     \n                        The appearance of   in the denominator suggests that we use a tangent substitution, namely,  .\n                        Then  , and we get\n                         \n                        Using triangles, we can simplify this further to get\n                         \n                     "
},
{
  "id": "example-integrating-an-odd-power-of-cosine",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-integrating-an-odd-power-of-cosine",
  "type": "Example",
  "number": "7.2.1",
  "title": "Integrating an Odd Power of Cosine.",
  "body": "Integrating an Odd Power of Cosine \n                        Determine  .\n                     \n                        Although it's not obvious, we can actually solve this integral with substitution.\n                        First, we'll separate a power of   from the rest in order to act as our  :\n                         \n                        Now, if we want   to act as   in a substitution, then we need   to look like  .\n                        We can do this by using the Pythagorean Identity and writing  .\n                     \n                        Now we'll set  , which gives   and\n                     \n                        which we can finish integrating without much trouble.\n                     "
},
{
  "id": "example-odd-powers-of-sine-and-cosine",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-odd-powers-of-sine-and-cosine",
  "type": "Example",
  "number": "7.2.2",
  "title": "Odd Powers of Sine and Cosine.",
  "body": "Odd Powers of Sine and Cosine \n                        Determine  .\n                     \n                        Remember: we want to separate a factor off of an odd power if there is one.\n                        Thankfully, we have two!\n                        We'll pick sine this time:\n                     \n                        At this point, the integral isn't too difficult to complete.\n                     "
},
{
  "id": "example-integrating-even-powers-of-cosine",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-integrating-even-powers-of-cosine",
  "type": "Example",
  "number": "7.2.3",
  "title": "Integrating Even Powers of Cosine.",
  "body": "Integrating Even Powers of Cosine \n                        The integral   appears when finding the area of the circle using integration.\n                        Find the value of this integral.\n                     \n                        Since we have an even power to work with, we'll try the half-angle formula.\n                        This lets us reduce the power on the cosine, at the expense of multiplying   by  , which greatly works in our favor:\n                     "
},
{
  "id": "example-integrating-a-power-of-tangent",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-integrating-a-power-of-tangent",
  "type": "Example",
  "number": "7.2.4",
  "title": "Integrating a Power of Tangent.",
  "body": "Integrating a Power of Tangent \n                        Determine  .\n                     \n                        Our goal is to separate a factor of either   or   to serve as our  .\n                        Since neither appears, we'll use the Pythagorean identity to introduce a   into our integral:\n                         \n                     \n                        At this point the first integral can be solved using substitution, but the second integral needs to be rewritten again.\n                        However, the same trick we applied before works here too: just use the Pythagorean identity to introduce a factor of  .\n                        This gives\n                         \n                        So\n                         \n                     "
},
{
  "id": "example-integrating-a-product-of-tangent-and-secant",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-integrating-a-product-of-tangent-and-secant",
  "type": "Example",
  "number": "7.2.5",
  "title": "Integrating a Product of Tangent and Secant.",
  "body": "Integrating a Product of Tangent and Secant \n                        Determine  \n                     \n                        Here, we see that we can separate a factor of   from the integrand, so we'll do that and use  :\n                     "
},
{
  "id": "example-integrating-secant-cubed",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-integrating-secant-cubed",
  "type": "Example",
  "number": "7.2.6",
  "title": "Integrating Secant Cubed.",
  "body": "Integrating Secant Cubed \n                        Determine  .\n                     \n                        We're dealing with an odd power of secant, so splitting off a factor of   won't help here.\n                        We also lack a   term, so splitting off a factor of   is tricky as well.\n                        We'll try integrating by parts instead, with\n                         \n                        This gives\n                     \n                        Therefore\n                         \n                     "
},
{
  "id": "p-588",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#p-588",
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
  "number": "7.2.7",
  "title": "Trigonometric substitutions",
  "body": "Trigonometric substitutions radical substitution identity "
},
{
  "id": "example-an-exponential-integral",
  "level": "2",
  "url": "section-trigonometric-integrals-and-substitution.html#example-an-exponential-integral",
  "type": "Example",
  "number": "7.2.8",
  "title": "An Exponential Integral.",
  "body": "An Exponential Integral \n                        Determine  \n                     \n                            This is adapted from  Thomas' Calculus,   edition, exercise 30 on page 591. \n                         \n                        Even though this integral involves only exponentials, we can simplify it using trigonometric substitution due to the presence of the radical.\n                        First, we'll use  -substitution to rewrite the integral into a form more suitable for trigonometric substitution: with   and  , we get\n                         \n                     \n                        The appearance of   in the denominator suggests that we use a tangent substitution, namely,  .\n                        Then  , and we get\n                         \n                        Using triangles, we can simplify this further to get\n                         \n                     "
},
{
  "id": "section-partial-fractions",
  "level": "1",
  "url": "section-partial-fractions.html",
  "type": "Section",
  "number": "7.3",
  "title": "Partial Fractions",
  "body": "Partial Fractions \n            At this point we have tools available to us that allow us to compute integrals of products ( ), and trigonometric functions and certain radicals( ).\n            Now we'll move on to a tool that will help us integrate rational functions (quotients of polynomials).\n            The idea behind this method is to write a rational function, such as  , in terms of simpler fractions.\n            We'll demonstrate by example.\n         Integrating a Rational Function \n                    Let\n                     \n                    Find  .\n                 \n                    We could try secant substitution, but that we'll instead focus on simplifying this fraction.\n                    First, factor the denominator:\n                     \n                 \n                    Now, assume that we can find constants   such that\n                     \n                    If we could find such constants, we could integrate the right hand side instead of the left hand side.\n                    There are a few ways to find these constants, but the easiest might be to just clear fractions by multiplying both sides by  :\n                     \n                 \n                    So   need to satisfy this equation  for all possible values of   .\n                    We'll pick values for   that make it easy to find   and  .\n                    If  , then   becomes\n                     \n                    Similarly,  \n                    Therefore\n                 \n            Finding partial fraction decompositions as in   isn't too bad as long as the denominator can be factored into distinct (i.e. non-repeated)  linear factors .\n            The situation is more complicated if the factors are repeated or are quadratics (or both).\n         Finding a Partial Fraction Decomposition with Repeated Powers \n                    Find the partial fraction decomposition for  .\n                 \n                    Since  , it's tempting to write\n                     \n                    Unfortunately, doing so gives  , which obviously won't work.\n                    If we instead use\n                     \n                    we get  .\n                    However,\n                     \n                 \n                    What we need to do is assume\n                     \n                    If we don't account for  each  power, we're not guaranteed a partial fraction decomposition.\n                    Now let's clear fractions:\n                     \n                    Quickly, using   we find that  , and using   we find that  .\n                 \n                    At this point there are no nice values left to plug into the right hand side of  , so we need to find   and   another way.\n                    One possibility is to differentiate both sides to make the right hand side simpler, which gives\n                     \n                    Now, entering   into   gives\n                     \n                    and so  .\n                    Similarly,  .\n                    Therefore\n                     \n                 \n            In order to find partial fraction decompositions when the denominator contains a quadratic, we must allow for the possibility of the numerator being  linear .\n         Partial Fraction Decomposition with a Quadratic \n                    Determine\n                     \n                 \n                    First, we can simplify:\n                     \n                    Now that we've factored the denominator, we can attempt to find the partial fraction decomposition.\n                    So assume that\n                     \n                    Note the linear term   above the quadratic!\n                 \n                    The rest of this computation goes like it did before.\n                    If we clear fractions, we get\n                     \n                    If we plug in  , we obtain  .\n                    At this point, we could plug in   (which would be okay!) or differentiate both sides, but it might be easier to take the following approach: expand the right hand side and collect like terms to get\n                     \n                 \n                    For the right hand side to equal the left hand side,    must be zero .\n                    Hence  .\n                    Similarly,    must equal one .\n                    Therefore\n                     \n                 \n            Comparing like terms as in   is a useful technique even beyond partial fractions.\n         \n            The method of partial fractions works  as long as the degree of the numerator is strictly less than that of the denominator. \n         Partial Fractions Algorithm partial fractions algorithm \n                    To find the partial fraction decomposition for the rational function  , do the following:\n                     Simplify   as much as possible, using long division if necessary when  . Factor  . Based on the factors of  , determine the proper form of the partial fraction decomposition. Clear fractions. Find the unknown constants of the decomposition by plugging values for   that simplify the equation, differentiating both sides, and\/or comparing like terms. \n                 Using Long Division \n                    Determine  .\n                 \n                    Before setting up partial fractions, we should simplify the integrand as much as possible.\n                    Here, we can use long division since the degree of the numerator is greater than or equal to the degree of the denominator.\n                    Doing so, we get\n                     \n                    We can integrate the first two terms on the right hand side easily, but we'll use partial fractions to rewrite the fraction:\n                     \n                 \n                    Now clear fractions to get\n                     \n                    Setting   gives  , and setting   gives  .\n                    To find  , we can expand the right hand side to write\n                     \n                    Hence  .\n                 \n                    Therefore\n                     \n                 \n            The next example shows a substitution that may occasionally work when partial fractions fails.\n         Twisty Substitution \n                    Determine  \n                 \n                    Once again we have a radical causing problems, and it's not in any of the three trigonometric substitution forms we can use either.\n                    We want it to go away, so we'll try just that: set  , which gives  .\n                    Then\n                     \n                    Now, we use the fact that   to write\n                     \n                    which simplifies to\n                     \n                 "
},
{
  "id": "example-integrating-a-rational-function",
  "level": "2",
  "url": "section-partial-fractions.html#example-integrating-a-rational-function",
  "type": "Example",
  "number": "7.3.1",
  "title": "Integrating a Rational Function.",
  "body": "Integrating a Rational Function \n                    Let\n                     \n                    Find  .\n                 \n                    We could try secant substitution, but that we'll instead focus on simplifying this fraction.\n                    First, factor the denominator:\n                     \n                 \n                    Now, assume that we can find constants   such that\n                     \n                    If we could find such constants, we could integrate the right hand side instead of the left hand side.\n                    There are a few ways to find these constants, but the easiest might be to just clear fractions by multiplying both sides by  :\n                     \n                 \n                    So   need to satisfy this equation  for all possible values of   .\n                    We'll pick values for   that make it easy to find   and  .\n                    If  , then   becomes\n                     \n                    Similarly,  \n                    Therefore\n                 "
},
{
  "id": "example-finding-a-partial-fraction-decomposition-with-repeated-powers",
  "level": "2",
  "url": "section-partial-fractions.html#example-finding-a-partial-fraction-decomposition-with-repeated-powers",
  "type": "Example",
  "number": "7.3.2",
  "title": "Finding a Partial Fraction Decomposition with Repeated Powers.",
  "body": "Finding a Partial Fraction Decomposition with Repeated Powers \n                    Find the partial fraction decomposition for  .\n                 \n                    Since  , it's tempting to write\n                     \n                    Unfortunately, doing so gives  , which obviously won't work.\n                    If we instead use\n                     \n                    we get  .\n                    However,\n                     \n                 \n                    What we need to do is assume\n                     \n                    If we don't account for  each  power, we're not guaranteed a partial fraction decomposition.\n                    Now let's clear fractions:\n                     \n                    Quickly, using   we find that  , and using   we find that  .\n                 \n                    At this point there are no nice values left to plug into the right hand side of  , so we need to find   and   another way.\n                    One possibility is to differentiate both sides to make the right hand side simpler, which gives\n                     \n                    Now, entering   into   gives\n                     \n                    and so  .\n                    Similarly,  .\n                    Therefore\n                     \n                 "
},
{
  "id": "example-partial-fraction-decomposition-with-a-quadratic",
  "level": "2",
  "url": "section-partial-fractions.html#example-partial-fraction-decomposition-with-a-quadratic",
  "type": "Example",
  "number": "7.3.3",
  "title": "Partial Fraction Decomposition with a Quadratic.",
  "body": "Partial Fraction Decomposition with a Quadratic \n                    Determine\n                     \n                 \n                    First, we can simplify:\n                     \n                    Now that we've factored the denominator, we can attempt to find the partial fraction decomposition.\n                    So assume that\n                     \n                    Note the linear term   above the quadratic!\n                 \n                    The rest of this computation goes like it did before.\n                    If we clear fractions, we get\n                     \n                    If we plug in  , we obtain  .\n                    At this point, we could plug in   (which would be okay!) or differentiate both sides, but it might be easier to take the following approach: expand the right hand side and collect like terms to get\n                     \n                 \n                    For the right hand side to equal the left hand side,    must be zero .\n                    Hence  .\n                    Similarly,    must equal one .\n                    Therefore\n                     \n                 "
},
{
  "id": "algorithm-partial-fractions-algorithm",
  "level": "2",
  "url": "section-partial-fractions.html#algorithm-partial-fractions-algorithm",
  "type": "Algorithm",
  "number": "7.3.4",
  "title": "Partial Fractions Algorithm.",
  "body": "Partial Fractions Algorithm partial fractions algorithm \n                    To find the partial fraction decomposition for the rational function  , do the following:\n                     Simplify   as much as possible, using long division if necessary when  . Factor  . Based on the factors of  , determine the proper form of the partial fraction decomposition. Clear fractions. Find the unknown constants of the decomposition by plugging values for   that simplify the equation, differentiating both sides, and\/or comparing like terms. \n                 "
},
{
  "id": "example-using-long-division",
  "level": "2",
  "url": "section-partial-fractions.html#example-using-long-division",
  "type": "Example",
  "number": "7.3.5",
  "title": "Using Long Division.",
  "body": "Using Long Division \n                    Determine  .\n                 \n                    Before setting up partial fractions, we should simplify the integrand as much as possible.\n                    Here, we can use long division since the degree of the numerator is greater than or equal to the degree of the denominator.\n                    Doing so, we get\n                     \n                    We can integrate the first two terms on the right hand side easily, but we'll use partial fractions to rewrite the fraction:\n                     \n                 \n                    Now clear fractions to get\n                     \n                    Setting   gives  , and setting   gives  .\n                    To find  , we can expand the right hand side to write\n                     \n                    Hence  .\n                 \n                    Therefore\n                     \n                 "
},
{
  "id": "example-twisty-substitution",
  "level": "2",
  "url": "section-partial-fractions.html#example-twisty-substitution",
  "type": "Example",
  "number": "7.3.6",
  "title": "Twisty Substitution.",
  "body": "Twisty Substitution \n                    Determine  \n                 \n                    Once again we have a radical causing problems, and it's not in any of the three trigonometric substitution forms we can use either.\n                    We want it to go away, so we'll try just that: set  , which gives  .\n                    Then\n                     \n                    Now, we use the fact that   to write\n                     \n                    which simplifies to\n                     \n                 "
},
{
  "id": "section-improper-integrals",
  "level": "1",
  "url": "section-improper-integrals.html",
  "type": "Section",
  "number": "7.4",
  "title": "Improper Integrals",
  "body": "Improper Integrals escape velocity \n                As we'll see later, work is also the integral of force, so let's examine the force on the object.\n                If we neglect air resistance and assume that the only force acting on the object is gravity, then the force exerted on the object is given by\n                 \n                where   is the mass of the Earth,   is still the mass of the object,   is the distance from the center of mass of the Earth to the center of mass of the object, and   is the gravitational constant.\n                Now assume that the Earth is a sphere of radius  , and that the object has enough velocity to move it a distance of   units from the surface of the Earth.\n                Then the total work done in moving the object this distance is\n                 \n                Now let's think about should happen if the object is at escape velocity.\n                In this case, theoretically at least, there should be no limit to the distance the object can travel if given enough time.\n                So what's the total work done?\n             \n                Let's try to compute  \n                We get\n                 \n                Note that this is still an underestimate for the total work theoretically done, since   can increase without bound.\n                So let's send   to   and see what we get:\n                 \n             \n                So, to summarize, the total work   should be\n                 \n                or just\n                 \n                 We can solve this equation for  , and so the escape velocity should be\n                 \n                As a neat bonus, this shows that the escape velocity only depends on  , the mass of the Earth   and the \"radius\" of the Earth  .\n                Plugging in values for these figures, we get   meters per second, or   kilometers per second.\n             improper integral Improper Integrals over Infinite Intervals \n                First, a definition.\n             Type 1 Improper Integral convergent divergent \n                        Finally, if both   and   are convergent, then we define\n                         \n                     A Divergent Integral \n                        Determine if   is convergent or divergent.\n                     \n                        By definition, we have\n                         \n                        Hence the integral is divergent.\n                     \n                In  , note that   as  .\n                However, it doesn't go to    fast enough  for the integral to converge.\n             \n                        Is   convergent?\n                     \n                The convergence of   depends on the value of  .\n             Integral  -test \n                        The integral   converges if and only if  .\n                     Area Under a Graph \n                        Find the area under  .\n                     \n                        The area under   is given by  .\n                        To evaluate this integral, we must split it into two improper integrals:\n                         \n                     \n                        At this point, we can use  -substitution to find each integral, using   and  .\n                        So we get\n                         \n                     \n                        Hence the area under   is   (which might not be so surprising if you graph  ).\n                     Radioactive Decay \n                        A radioactive substance undergoes decay, and has mass   at time   given by\n                         \n                        for some  .\n                        The  expected lifetime  of a particle is given by\n                         \n                        Find this value.\n                     \n                        We can solve this using integration by parts.\n                        Doing so, we get\n                         \n                        This can be verified using the code cell below.\n                     A Probability Distribution probability distribution \n              We have\n               .\n            So this isn't a probability distribution.\n             Another Laplace Transform Laplace transform Improper Integrals with Discontinuous Integrands \n                The second type of improper integral we'll consider involves integrands with \"divide-by-zero\" problems.\n             Type 2 Improper Integral \n                        If   is continuous on   and is discontinuous at  , then\n                         \n                        assuming this limit exists.\n                     \n                        If   is continuous on   and is discontinuous at  , then\n                         \n                        assuming this limit exists.\n                     \n                        If   is at   where  , then\n                         \n                        assuming these integrals are convergent.\n                     Logarithmic Discontinuity \n                        Determine if   is convergent.\n                     \n                        This integral is improper since   is discontinuous at  .\n                        To evaluate it, we'll use limits:\n                         \n                        where we used the fact that   as   by L'Hopital's Rule.\n                     Another Integral  -Test \n                        For what values of   is the integral   convergent?\n                     \n                        We could try to compute this as is, but we can save ourselves some work by making use of  .\n                        First, we'll use the substitution  .\n                        Then   and\n                         \n                        Therefore\n                         \n                        which we know converges if and only if  .\n                        Hence the original integral converges if and only if  .\n                     Comparison Tests for Improper Integrals direct comparison test convergence tests integrals direct comparison test Direct Comparison Test \n                        Suppose that   and   are continuous functions and that\n                         \n                        for  , for some real number  .\n                        Then if   converges, so goes  .\n                        Likewise, if   diverges, then so does  .\n                     \n                        Does   converge?\n                     \n                        This integrand looks pretty awful.\n                        However, we can say that\n                         \n                        Since\n                         \n                          implies that the original integral must converge as well.\n                        Note that we don't know  what  it converges to, only that it does.\n                     The Gaussian Integral \n                        Show that the integral   is convergent.\n                     \n                        We can do this by breaking the integral into two parts:\n                         \n                        If   is between   and  , then  .\n                        On the other hand, if  , then  .\n                        Therefore\n                         \n                        Hence the original integral must also be convergent.\n                        It's value is actually known, and SymPy can be used to compute the integral, as below.\n                     limit comparison test convergence tests integrals limit comparison test Limit Comparison Test \n                        Let   and   be positive, continuous functions on   for some constant  .\n                        If\n                         \n                        exists and is positive, then the integrals\n                         \n                        must both converge or both diverge.\n                     \n                        Determine if   converges.\n                     \n                        The integrand is awful again, but if   is very large then we can say that\n                         \n                        Since   converges, this suggests that maybe the original integral does as well.\n                        We can prove this using  .\n                     \n                        In fact, we have\n                         \n                        Since this limit exists and is positive, then the original integral must also converge by the Limit Comparison Test.\n                     "
},
{
  "id": "p-618",
  "level": "2",
  "url": "section-improper-integrals.html#p-618",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "escape velocity "
},
{
  "id": "p-622",
  "level": "2",
  "url": "section-improper-integrals.html#p-622",
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
  "body": "Type 1 Improper Integral convergent divergent \n                        Finally, if both   and   are convergent, then we define\n                         \n                     "
},
{
  "id": "example-a-divergent-integral",
  "level": "2",
  "url": "section-improper-integrals.html#example-a-divergent-integral",
  "type": "Example",
  "number": "7.4.2",
  "title": "A Divergent Integral.",
  "body": "A Divergent Integral \n                        Determine if   is convergent or divergent.\n                     \n                        By definition, we have\n                         \n                        Hence the integral is divergent.\n                     "
},
{
  "id": "example-convergent-improper-integral",
  "level": "2",
  "url": "section-improper-integrals.html#example-convergent-improper-integral",
  "type": "Example",
  "number": "7.4.3",
  "title": "",
  "body": "\n                        Is   convergent?\n                     "
},
{
  "id": "theorem-integral-p-test",
  "level": "2",
  "url": "section-improper-integrals.html#theorem-integral-p-test",
  "type": "Theorem",
  "number": "7.4.4",
  "title": "Integral <span class=\"process-math\">\\(p\\)<\/span>-test.",
  "body": "Integral  -test \n                        The integral   converges if and only if  .\n                     "
},
{
  "id": "example-area-under-a-graph",
  "level": "2",
  "url": "section-improper-integrals.html#example-area-under-a-graph",
  "type": "Example",
  "number": "7.4.5",
  "title": "Area Under a Graph.",
  "body": "Area Under a Graph \n                        Find the area under  .\n                     \n                        The area under   is given by  .\n                        To evaluate this integral, we must split it into two improper integrals:\n                         \n                     \n                        At this point, we can use  -substitution to find each integral, using   and  .\n                        So we get\n                         \n                     \n                        Hence the area under   is   (which might not be so surprising if you graph  ).\n                     "
},
{
  "id": "example-radioactive-decay",
  "level": "2",
  "url": "section-improper-integrals.html#example-radioactive-decay",
  "type": "Example",
  "number": "7.4.6",
  "title": "Radioactive Decay.",
  "body": "Radioactive Decay \n                        A radioactive substance undergoes decay, and has mass   at time   given by\n                         \n                        for some  .\n                        The  expected lifetime  of a particle is given by\n                         \n                        Find this value.\n                     \n                        We can solve this using integration by parts.\n                        Doing so, we get\n                         \n                        This can be verified using the code cell below.\n                     "
},
{
  "id": "example-a-probability-distribution",
  "level": "2",
  "url": "section-improper-integrals.html#example-a-probability-distribution",
  "type": "Example",
  "number": "7.4.7",
  "title": "A Probability Distribution.",
  "body": "A Probability Distribution probability distribution \n              We have\n               .\n            So this isn't a probability distribution.\n             "
},
{
  "id": "example-another-laplace-transform",
  "level": "2",
  "url": "section-improper-integrals.html#example-another-laplace-transform",
  "type": "Example",
  "number": "7.4.8",
  "title": "Another Laplace Transform.",
  "body": "Another Laplace Transform Laplace transform "
},
{
  "id": "definition-type-2-improper-integral",
  "level": "2",
  "url": "section-improper-integrals.html#definition-type-2-improper-integral",
  "type": "Definition",
  "number": "7.4.9",
  "title": "Type 2 Improper Integral.",
  "body": "Type 2 Improper Integral \n                        If   is continuous on   and is discontinuous at  , then\n                         \n                        assuming this limit exists.\n                     \n                        If   is continuous on   and is discontinuous at  , then\n                         \n                        assuming this limit exists.\n                     \n                        If   is at   where  , then\n                         \n                        assuming these integrals are convergent.\n                     "
},
{
  "id": "example-logarithmic-discontinuity",
  "level": "2",
  "url": "section-improper-integrals.html#example-logarithmic-discontinuity",
  "type": "Example",
  "number": "7.4.10",
  "title": "Logarithmic Discontinuity.",
  "body": "Logarithmic Discontinuity \n                        Determine if   is convergent.\n                     \n                        This integral is improper since   is discontinuous at  .\n                        To evaluate it, we'll use limits:\n                         \n                        where we used the fact that   as   by L'Hopital's Rule.\n                     "
},
{
  "id": "example-another-integral-p-test",
  "level": "2",
  "url": "section-improper-integrals.html#example-another-integral-p-test",
  "type": "Example",
  "number": "7.4.11",
  "title": "Another Integral <span class=\"process-math\">\\(p\\)<\/span>-Test.",
  "body": "Another Integral  -Test \n                        For what values of   is the integral   convergent?\n                     \n                        We could try to compute this as is, but we can save ourselves some work by making use of  .\n                        First, we'll use the substitution  .\n                        Then   and\n                         \n                        Therefore\n                         \n                        which we know converges if and only if  .\n                        Hence the original integral converges if and only if  .\n                     "
},
{
  "id": "p-649",
  "level": "2",
  "url": "section-improper-integrals.html#p-649",
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
  "body": "convergence tests integrals direct comparison test Direct Comparison Test \n                        Suppose that   and   are continuous functions and that\n                         \n                        for  , for some real number  .\n                        Then if   converges, so goes  .\n                        Likewise, if   diverges, then so does  .\n                     "
},
{
  "id": "example-142",
  "level": "2",
  "url": "section-improper-integrals.html#example-142",
  "type": "Example",
  "number": "7.4.13",
  "title": "",
  "body": "\n                        Does   converge?\n                     \n                        This integrand looks pretty awful.\n                        However, we can say that\n                         \n                        Since\n                         \n                          implies that the original integral must converge as well.\n                        Note that we don't know  what  it converges to, only that it does.\n                     "
},
{
  "id": "example-the-gaussian-integral",
  "level": "2",
  "url": "section-improper-integrals.html#example-the-gaussian-integral",
  "type": "Example",
  "number": "7.4.14",
  "title": "The Gaussian Integral.",
  "body": "The Gaussian Integral \n                        Show that the integral   is convergent.\n                     \n                        We can do this by breaking the integral into two parts:\n                         \n                        If   is between   and  , then  .\n                        On the other hand, if  , then  .\n                        Therefore\n                         \n                        Hence the original integral must also be convergent.\n                        It's value is actually known, and SymPy can be used to compute the integral, as below.\n                     "
},
{
  "id": "p-655",
  "level": "2",
  "url": "section-improper-integrals.html#p-655",
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
  "body": "convergence tests integrals limit comparison test Limit Comparison Test \n                        Let   and   be positive, continuous functions on   for some constant  .\n                        If\n                         \n                        exists and is positive, then the integrals\n                         \n                        must both converge or both diverge.\n                     "
},
{
  "id": "example-144",
  "level": "2",
  "url": "section-improper-integrals.html#example-144",
  "type": "Example",
  "number": "7.4.16",
  "title": "",
  "body": "\n                        Determine if   converges.\n                     \n                        The integrand is awful again, but if   is very large then we can say that\n                         \n                        Since   converges, this suggests that maybe the original integral does as well.\n                        We can prove this using  .\n                     \n                        In fact, we have\n                         \n                        Since this limit exists and is positive, then the original integral must also converge by the Limit Comparison Test.\n                     "
},
{
  "id": "section-areas-between-curves",
  "level": "1",
  "url": "section-areas-between-curves.html",
  "type": "Section",
  "number": "8.1",
  "title": "Areas Between Curves",
  "body": "Areas Between Curves \n      We already know that   geometrically represents the area under   from   to  .\n      Now we'd like to try to extend the integral to other geometrical concepts such as surface areas and volumes.\n      An easy generalization we can make right now is that of  areas between curves , as in  .\n     Area between curves. Adapted from  here . \n      It may not be too much of a stretch to say that the area   should be given by  , and indeed it is, but we will prove this using Riemann sums for the reason that Riemann sums appear  a lot  in applications.\n      Furthermore, Riemann sums provide us with the formula we need to evaluate integrals numerically using libraries such as NumPy.\n      So let's start by partitioning the interval   into    subintervals \n       \n      where   and\n       \n     \n      Now we'll use the subintervals to break the region   up into rectangles to approximate the area.\n      So choose a point   from each subinterval   and use it to determine the height of the corresponding rectangle:  .\n      Then the area is  , and adding up the areas of all of the rectangles lets us approximate the area of  :\n       \n     \n      Now send   (equivalently, send  ) to make the approximation exact:\n       \n     Area Between Parabolas \n          Find the area between   and  .\n         \n          If we graph   and  , we see that the area will be given by  , where   and   are the values of   where  .\n          Using a bit of algebra, we get   and  .\n          Therefore the area between the parabolas is\n           \n         \n      Although we found an exact solution in  , we can also use this to test our NumPy skills.\n        shows us how we can use NumPy to find this quantity.\n     Area with Changing Limits \n          Find the area of the region bounded by   and  .\n         \n          If we solve both equations for  , we get   and  .\n          We can then graph the region below:\n         The region bounded by   and  . \n          To find the area between these curves, we'll need to compute  two  integrals: one for   and another for  .\n          In particular, the area will be given by\n           .\n          Doing so, we get\n           \n          for the area between the curves.\n         \n      Part of the reason why finding the area in   was more complicated was because the curves did not represent functions of  .\n      However, we can view each curve as representing a function of  , namely,\n       \n      Then the area can be found as\n       \n      So it can be much easier if we find the area by integrating with respect to   as opposed to  .\n     \n          Find the area contained by the curves   and  .\n         \n          If we graph the region, we get  .\n         Region between two parabolas. \n          Finding the area by using integrals with respect to   would require setting up and solving three different integrals!\n          So, not terrific.\n          However, we can integrate with respect to   fairly easily.\n          By finding where the curves intersect, we see that  .\n          Hence the area should be\n           \n          and so the area is just   units.\n         "
},
{
  "id": "figure-area-between-curves",
  "level": "2",
  "url": "section-areas-between-curves.html#figure-area-between-curves",
  "type": "Figure",
  "number": "8.1.1",
  "title": "",
  "body": "Area between curves. Adapted from  here . "
},
{
  "id": "example-area-between-parabolas",
  "level": "2",
  "url": "section-areas-between-curves.html#example-area-between-parabolas",
  "type": "Example",
  "number": "8.1.2",
  "title": "Area Between Parabolas.",
  "body": "Area Between Parabolas \n          Find the area between   and  .\n         \n          If we graph   and  , we see that the area will be given by  , where   and   are the values of   where  .\n          Using a bit of algebra, we get   and  .\n          Therefore the area between the parabolas is\n           \n         "
},
{
  "id": "example-area-with-changing-limits",
  "level": "2",
  "url": "section-areas-between-curves.html#example-area-with-changing-limits",
  "type": "Example",
  "number": "8.1.3",
  "title": "Area with Changing Limits.",
  "body": "Area with Changing Limits \n          Find the area of the region bounded by   and  .\n         \n          If we solve both equations for  , we get   and  .\n          We can then graph the region below:\n         The region bounded by   and  . \n          To find the area between these curves, we'll need to compute  two  integrals: one for   and another for  .\n          In particular, the area will be given by\n           .\n          Doing so, we get\n           \n          for the area between the curves.\n         "
},
{
  "id": "example-147",
  "level": "2",
  "url": "section-areas-between-curves.html#example-147",
  "type": "Example",
  "number": "8.1.5",
  "title": "",
  "body": "\n          Find the area contained by the curves   and  .\n         \n          If we graph the region, we get  .\n         Region between two parabolas. \n          Finding the area by using integrals with respect to   would require setting up and solving three different integrals!\n          So, not terrific.\n          However, we can integrate with respect to   fairly easily.\n          By finding where the curves intersect, we see that  .\n          Hence the area should be\n           \n          and so the area is just   units.\n         "
},
{
  "id": "section-volumes",
  "level": "1",
  "url": "section-volumes.html",
  "type": "Section",
  "number": "8.2",
  "title": "Volumes",
  "body": "Volumes solids of revolution \n      As an example, consider  .\n      To generate the solid of revolution on the right, we take the graph of   and rotate it about the  -axis, creating a three-dimensional region.\n     Generating a solid of revolution. \n      To find the volume of such a region, the idea is to find the  area  of a general cross-section of the region, which by design should be a function of   alone, say  .\n      Then, roughly,   should represent the volume of a small cross-section of the solid, and so the integral   should give us the volume of the region.\n      This entire argument can be made precise using Riemann sums as in the previous section, and so we get the following: the solid   from   to   whose cross-sections (with respect to the  -axis) have area   has volume given by\n       \n     Finding the Volume of a Sphere \n          Find the volume of a sphere of radius  .\n         \n          To begin, let's assume that the sphere is centered at the origin.\n          Then each cross section perpendicular to the  -axis is just a circle with radius  .\n          Hence each cross-sectional area is given by  , which means the volume of the sphere should be\n           \n         \n      Again, the idea for finding the volumes of these regions is to determine the cross-sectional areas perpendicular to the  -axis (or whatever the axis of rotation happens to be) and then integrate.\n     \n          Find the volume of the region obtained by rotating the graph of   from   to   about the line  .\n         \n          As is almost always the case, a good way to start is by graphing the region to get a rough idea of what it looks like.\n          Doing so, we see that each of the cross-sections are circles.\n          But this is to be expected, since the region is a solid of revolution.\n          Given   between   and  , the area of the corresponding cross-section is given by\n           \n          Hence the volume of this region should be\n           \n         \n      The previous problems involved finding volumes by using disks since disks were natural cross-sections.\n      The next example instead uses washers as cross-sections instead.\n      Although the formula we get for the volume is slightly different, it's still essentially integrating the areas of the cross-sections.\n     \n          Find the volume of the solid obtained by rotating the region bounded by  ,   and   about the line  .\n         \n          Since the axis of rotation is  , we want to look at cross-sections perpendicular to this line, i.e., parallel to the  -axis.\n          Each such cross-section will look like a washer, and hence its area will involve the inner radius and outer radius of the washer.\n          Since the radii are measured in terms of horizontal distance, we'll need to find   in terms of  .\n          Doing so, we see that the inner radius is given by   while the outer radius is given by  .\n          Therefore the volume of the region is given by\n           \n         "
},
{
  "id": "p-674",
  "level": "2",
  "url": "section-volumes.html#p-674",
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
  "body": "Generating a solid of revolution. "
},
{
  "id": "example-finding-the-volume-of-a-sphere",
  "level": "2",
  "url": "section-volumes.html#example-finding-the-volume-of-a-sphere",
  "type": "Example",
  "number": "8.2.2",
  "title": "Finding the Volume of a Sphere.",
  "body": "Finding the Volume of a Sphere \n          Find the volume of a sphere of radius  .\n         \n          To begin, let's assume that the sphere is centered at the origin.\n          Then each cross section perpendicular to the  -axis is just a circle with radius  .\n          Hence each cross-sectional area is given by  , which means the volume of the sphere should be\n           \n         "
},
{
  "id": "example-149",
  "level": "2",
  "url": "section-volumes.html#example-149",
  "type": "Example",
  "number": "8.2.3",
  "title": "",
  "body": "\n          Find the volume of the region obtained by rotating the graph of   from   to   about the line  .\n         \n          As is almost always the case, a good way to start is by graphing the region to get a rough idea of what it looks like.\n          Doing so, we see that each of the cross-sections are circles.\n          But this is to be expected, since the region is a solid of revolution.\n          Given   between   and  , the area of the corresponding cross-section is given by\n           \n          Hence the volume of this region should be\n           \n         "
},
{
  "id": "example-solid-rev-4",
  "level": "2",
  "url": "section-volumes.html#example-solid-rev-4",
  "type": "Example",
  "number": "8.2.4",
  "title": "",
  "body": "\n          Find the volume of the solid obtained by rotating the region bounded by  ,   and   about the line  .\n         \n          Since the axis of rotation is  , we want to look at cross-sections perpendicular to this line, i.e., parallel to the  -axis.\n          Each such cross-section will look like a washer, and hence its area will involve the inner radius and outer radius of the washer.\n          Since the radii are measured in terms of horizontal distance, we'll need to find   in terms of  .\n          Doing so, we see that the inner radius is given by   while the outer radius is given by  .\n          Therefore the volume of the region is given by\n           \n         "
},
{
  "id": "section-volumes-by-cylindrical-shells",
  "level": "1",
  "url": "section-volumes-by-cylindrical-shells.html",
  "type": "Section",
  "number": "8.3",
  "title": "Volumes by Cylindrical Shells",
  "body": "Volumes by Cylindrical Shells \n      The method we used to find volumes in   applies to solids that have cross-sections depending on   or   alone.\n      Once we had a formula for this area, we could then integrate it to get the volume.\n      However, not all shapes have such simple cross-sections, and so this method doesn't apply in general.\n      In this section, we'll look at using cylindrical shells instead.\n     \n      Therefore, the following fact will prove useful: the volume of a cylindrical shell of height  , inner radius   and outer radius   is given by\n       \n      where   is the \"average radius\" and   is the thickness of the shell.\n      If we can break a solid up into these cylindrical \"cross-sections,\" then integrating these areas should again give us the volume of the solid.\n      For shells that are perpendicular to the  -axis, we can typically replace   with   and   with  , leading to an integral of the form\n       \n       \n          Finding areas using disks and washers usually involves finding disks\/washers that are perpendicular to the axis of rotation.\n          When finding volumes using shells, we'll typically use shells that are  parallel  to the axis of rotation.\n         \n     \n      One final note: this method, as in  , applies only to solids with a certain degree of symmetry.\n      If you continue on to Calculus 3, the techniques you'll learn in   will replace this method as they do the disk and washer methods from  .\n      In particular, this method is a special case of the transformation to  cylindrical coordinates  presented in  .\n     Finding Volumes Using Cylindrical Shells \n          Find the volume of the solid obtained by rotating the region bounded by  ,   and   about the  -axis.\n         \n          The axis of rotation is the  -axis, so each shell should be perpendicular to this axis as well.\n          Drawing a typical shell, we see that the radius at   should be   while the height is  .\n          So the volume of this region should be\n           \n         \n      It should be noted that the volume in   could also have been found using washers instead of shells.\n      If you can, you should use disks or washers before using shells, since integrals derived from using shells are typically more complicated.\n     \n          Find the volume of the solid obtained by rotating the region bounded by  ,   and   about the line  .\n         \n          A good first step, as always, is to plot the region.\n          Since   and   give downward opening parabolas, we can quickly sketch a rough graph by finding the  -coordinates of the vertices, which occur at  .\n          Finding the corresponding   values, and noticing that each parabola intersects the  -axis at  , gives a pretty good picture of the graph.\n         \n          If we tried to find the volume using disks\/washers, we'd need to solve   and   for   since each cross-section would be parallel to the  -axis.\n          This is doable using the quadratic formula, but the algebra would get very bad very quickly once we start integrating.\n          So we'll try shells instead.\n         \n          A typical shell for this region has radius   and height  .\n          Hence the volume is given by\n           \n         "
},
{
  "id": "example-finding-volumes-using-cylindrical-shells",
  "level": "2",
  "url": "section-volumes-by-cylindrical-shells.html#example-finding-volumes-using-cylindrical-shells",
  "type": "Example",
  "number": "8.3.1",
  "title": "Finding Volumes Using Cylindrical Shells.",
  "body": "Finding Volumes Using Cylindrical Shells \n          Find the volume of the solid obtained by rotating the region bounded by  ,   and   about the  -axis.\n         \n          The axis of rotation is the  -axis, so each shell should be perpendicular to this axis as well.\n          Drawing a typical shell, we see that the radius at   should be   while the height is  .\n          So the volume of this region should be\n           \n         "
},
{
  "id": "example-cylindrical-shells-2",
  "level": "2",
  "url": "section-volumes-by-cylindrical-shells.html#example-cylindrical-shells-2",
  "type": "Example",
  "number": "8.3.2",
  "title": "",
  "body": "\n          Find the volume of the solid obtained by rotating the region bounded by  ,   and   about the line  .\n         \n          A good first step, as always, is to plot the region.\n          Since   and   give downward opening parabolas, we can quickly sketch a rough graph by finding the  -coordinates of the vertices, which occur at  .\n          Finding the corresponding   values, and noticing that each parabola intersects the  -axis at  , gives a pretty good picture of the graph.\n         \n          If we tried to find the volume using disks\/washers, we'd need to solve   and   for   since each cross-section would be parallel to the  -axis.\n          This is doable using the quadratic formula, but the algebra would get very bad very quickly once we start integrating.\n          So we'll try shells instead.\n         \n          A typical shell for this region has radius   and height  .\n          Hence the volume is given by\n           \n         "
},
{
  "id": "section-arc-length",
  "level": "1",
  "url": "section-arc-length.html",
  "type": "Section",
  "number": "8.4",
  "title": "Arc Length",
  "body": "Arc Length \n      Say the motion of a particle is described by\n       \n      Then the path that the particle travels will look like a curve, say\n       Trajectory of our particle. \n     \n      Our goal now is to determine how far the particle travels as   goes from   to  .\n      In other words, we want to find the length of this curve from   to  .\n     \n      If the curve were just a line we could easily find its length by using the Pythagorean theorem, but for a more general curve like this we're stuck.\n      So we'll start by approximating the curve by using line segments, which we'll call  ,  , and so on up to  , then we'll find the lengths of the line segments.\n      Say the first line segment goes from   to  , the second from   to   and so on.\n      To make life simpler, we'll assume that all these intervals have equal length  .\n      That is,   for  .\n      Also, we'll define  .\n     Approximating arc length with line segments. \n      If we look at  , then the line goes   in the  -direction and   in the  -direction, so by the Pythagorean theorem,\n       \n      Now if  , then  .\n      Hence\n       \n      if  .\n     \n      We can extend this estimate to the other line segments as well, so we can say that the total length   of the curve is approximately\n       \n      If the curve is nice enough, this approximation should become exact as  .\n      So we can take this as the definition of the arc length of the curve  .\n     arc length Cartesian coordinates Arc Length of a Curve arc length The Circumference of a Circle \n          Find the circumference of a circle of radius  .\n         \n          To find the circumference of this circle, we need to find an equation whose graph is the circle, or at least part of it.\n          One choice is   for  .\n          Since this gives the top half of a circle, the circumference is then\n           \n         \n      We could try to use   to find the arc length of an ellipse, but it turns out the resulting integral is too complicated to have a \"closed form\" solution.\n     arc length function \n          Find the arc length function for   assuming that   is the starting point.\n         \n          We have\n           \n          To find this, we'll use trigonometric substitution with   to get\n           \n         "
},
{
  "id": "figure-arc-length-basic-curve",
  "level": "2",
  "url": "section-arc-length.html#figure-arc-length-basic-curve",
  "type": "Figure",
  "number": "8.4.1",
  "title": "",
  "body": "Trajectory of our particle. "
},
{
  "id": "figure-arc-length-breaking-into-line-segments",
  "level": "2",
  "url": "section-arc-length.html#figure-arc-length-breaking-into-line-segments",
  "type": "Figure",
  "number": "8.4.2",
  "title": "",
  "body": "Approximating arc length with line segments. "
},
{
  "id": "definition-arc-length-of-a-curve",
  "level": "2",
  "url": "section-arc-length.html#definition-arc-length-of-a-curve",
  "type": "Definition",
  "number": "8.4.3",
  "title": "Arc Length of a Curve.",
  "body": "arc length Cartesian coordinates Arc Length of a Curve arc length "
},
{
  "id": "example-the-circumference-of-a-circle",
  "level": "2",
  "url": "section-arc-length.html#example-the-circumference-of-a-circle",
  "type": "Example",
  "number": "8.4.4",
  "title": "The Circumference of a Circle.",
  "body": "The Circumference of a Circle \n          Find the circumference of a circle of radius  .\n         \n          To find the circumference of this circle, we need to find an equation whose graph is the circle, or at least part of it.\n          One choice is   for  .\n          Since this gives the top half of a circle, the circumference is then\n           \n         "
},
{
  "id": "p-705",
  "level": "2",
  "url": "section-arc-length.html#p-705",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arc length function "
},
{
  "id": "example-154",
  "level": "2",
  "url": "section-arc-length.html#example-154",
  "type": "Example",
  "number": "8.4.5",
  "title": "",
  "body": "\n          Find the arc length function for   assuming that   is the starting point.\n         \n          We have\n           \n          To find this, we'll use trigonometric substitution with   to get\n           \n         "
},
{
  "id": "section-area-of-a-surface-of-revolution",
  "level": "1",
  "url": "section-area-of-a-surface-of-revolution.html",
  "type": "Section",
  "number": "8.5",
  "title": "Area of a Surface of Revolution",
  "body": "Area of a Surface of Revolution \n      Consider a function  .\n      We generate a solid of revolution by rotating the graph of   from   to   about the  -axis.\n      We want to find the surface area of this figure. We can't find it directly yet, but we can approximate it by using conical frustums.\n     \n      The surface area of a conical frustum is given by the formula\n       \n      If   then we can say\n       \n      for some   between   and  .\n     \n      By using multiple frustums, we can approximate the surface area of the solid. Break   into   subintervals\n       \n      with   and  , where each subinterval has length  .\n      Then if   is the surface area of the solid, we have\n       \n      This approximation should become more exact as  , so we have\n       \n      or\n       \n     \n      Similarly, if we generate a solid of revolution by rotating   from   to   about the  -axis, the surface area of this solid is given by\n       \n     Finding Surface Area of a Sphere \n          Find the surface area of a sphere of radius  .\n         \n          We can create a sphere of radius   by rotating the semicircle   about the  -axis, from   to  . So   and  . So the surface area is\n           \n          or just\n           \n         Find the surface area of the solid generated by rotating the graph of   from   to   about the  -axis. \n          Since we are rotating about the  -axis, we need to use the other formula. Since  , we can rewrite this as  . So the surface area is  \n         \n          Find the integral that gives the surface area of the solid generated by rotating the graph of   from   to   about the  -axis.\n         \n          By the surface area formula, the surface area is  \n         Gabriel's Horn \n          Find the volume of the solid of revolution obtained by rotating the graph of   about the  -axis from   onwards.\n          Estimate the surface area of this solid of revolution.\n         \n          The volume is given by  .\n          The integral that gives the surface area is\n         \n          Oddly enough, the volume of this region is finite, but the surface area is  infinite .\n          A silly way to describe this situation: you can fill this region with a finite amount of paint, but it would take an infinite amount to paint the surface.\n         Find the surface area of the solid generated by rotating the graph of   from   to   about the  -axis.  \n          Since  , then   and the surface area of the solid is  \n         "
},
{
  "id": "example-finding-surface-area-of-a-sphere",
  "level": "2",
  "url": "section-area-of-a-surface-of-revolution.html#example-finding-surface-area-of-a-sphere",
  "type": "Example",
  "number": "8.5.1",
  "title": "Finding Surface Area of a Sphere.",
  "body": "Finding Surface Area of a Sphere \n          Find the surface area of a sphere of radius  .\n         \n          We can create a sphere of radius   by rotating the semicircle   about the  -axis, from   to  . So   and  . So the surface area is\n           \n          or just\n           \n         "
},
{
  "id": "example-156",
  "level": "2",
  "url": "section-area-of-a-surface-of-revolution.html#example-156",
  "type": "Example",
  "number": "8.5.2",
  "title": "",
  "body": "Find the surface area of the solid generated by rotating the graph of   from   to   about the  -axis. \n          Since we are rotating about the  -axis, we need to use the other formula. Since  , we can rewrite this as  . So the surface area is  \n         "
},
{
  "id": "example-157",
  "level": "2",
  "url": "section-area-of-a-surface-of-revolution.html#example-157",
  "type": "Example",
  "number": "8.5.3",
  "title": "",
  "body": "\n          Find the integral that gives the surface area of the solid generated by rotating the graph of   from   to   about the  -axis.\n         \n          By the surface area formula, the surface area is  \n         "
},
{
  "id": "example-gabriel-s-horn",
  "level": "2",
  "url": "section-area-of-a-surface-of-revolution.html#example-gabriel-s-horn",
  "type": "Example",
  "number": "8.5.4",
  "title": "Gabriel's Horn.",
  "body": "Gabriel's Horn \n          Find the volume of the solid of revolution obtained by rotating the graph of   about the  -axis from   onwards.\n          Estimate the surface area of this solid of revolution.\n         \n          The volume is given by  .\n          The integral that gives the surface area is\n         \n          Oddly enough, the volume of this region is finite, but the surface area is  infinite .\n          A silly way to describe this situation: you can fill this region with a finite amount of paint, but it would take an infinite amount to paint the surface.\n         "
},
{
  "id": "example-159",
  "level": "2",
  "url": "section-area-of-a-surface-of-revolution.html#example-159",
  "type": "Example",
  "number": "8.5.5",
  "title": "",
  "body": "Find the surface area of the solid generated by rotating the graph of   from   to   about the  -axis.  \n          Since  , then   and the surface area of the solid is  \n         "
},
{
  "id": "section-applications-to-physics-and-engineering",
  "level": "1",
  "url": "section-applications-to-physics-and-engineering.html",
  "type": "Section",
  "number": "8.6",
  "title": "Applications to Physics and Engineering",
  "body": "Applications to Physics and Engineering \n        The primary use of integrals in physics and engineering is to measure the accumulation of continuously varying quantities.\n        The running theme in this section:\n       Measure the accumulation of some quantity by approximating it as a (finite) sum of \"small\" values. Improve the approximation by taking more and more values. Introduce a limit to make the approximation exact, resulting in an integral. Work work force \n        So with this definition, work is proportional to the magnitude of the force   as well as the displacement   over which the force acts.\n        If   is measured in units of\n         \n        or more simply\n         ,\n        and   is measured in units of\n         \n        the   takes on units of\n         \n        or just\n         .\n       Hooke's Law \n        As you might guess from this section's running theme, we'll start by  approximating  the work done by measuring work in small displacements as the particle moves from   to  .\n        Over small enough intervals, even variable forces will look almost constant, which makes   a reasonable estimate of the work done (on this small interval!).\n        So let's start by breaking up   into   smaller subintervals\n         \n        where  , and let   be the width of each subinterval.\n        Now choose sample points   from each subinterval.\n        Once again, if   is small enough, then the work done by the force over   should be approximately\n         \n       \n        This is the approximate work for one subinterval, so adding in the approximations from the other subintervals also provides an estimate of the total work   done by   over  .\n        That is,\n         \n        As  , the approximation becomes exact.\n        Therefore\n         \n       A mass attached to a spring spring force \n            Since equilibrium occurs at  , the work done should be\n             \n           restoring force Moments and Centers of Mass \n        Consider a system of two point masses   connected by a rod of negligible mass (so we can assume that the mass of the system is just  ).\n        These masses are located at the points   on the  -axis.\n        The rod is then placed upon a fulcrum at the point  , as shown below:\n       Rod on a fulcrum. \n        Our goal is to find the center of mass of the rod.\n       \n        Suppose that the first mass is   units away from the fulcrum, and that the second mass is   units away.\n        Archimedes' Law of the Lever states that the rod will balance if  .\n        Since   and   (since   are positive!), we can rewrite this as\n         \n        which simplifies down to\n         \n        Hence   is the location of the center of mass of the rod if this equation is true!\n       moment of the system about the origin \n            Consider the following system of three point masses   at positions   given as follows:\n           Three point masses. \n            Find the following:\n             The moment of the system about the origin.  The center of mass. \n           The moment of the system about the origin is defined to be\n               \n              So the moment is  .  The center of mass is just the moment divided by the total mass   of the system:\n               \n              So the center of mass of the rod is at the point  . moment of the system about the  -axis \n          This can be thought of as tendency of the system to rotate  about  the  -axis.\n          Increasing the mass or the distance from the  -axis increases this tendency.\n         moment of the system about the  -axis \n              Four point masses   are located in the plane at the points   and  .\n\n               Find the moments of the system about the  -axis and the  -axis. Find the center of mass of this system. \n             The moment about the  -axis is\n               \n               Similarly, the moment about the  -axis is given by\n               The center of mass is the point   where\n               \n              and   is the total mass of the system.\n             }\n\n       centroid A lamina in  . \n        To find the centroid of this lamina we will break it up into (vertical) approximating rectangles  , each of which has width   and centroid  :\n       Breaking the lamina into subrectangles. \n        Then the lamina may be approximated by a system of point masses  , with   located at the centroid rectangle   and having the mass of the corresponding rectangle.\n        To find the center of mass of the lamina, we will approximate it with the center of mass of the system of point masses.\n       \n        To do so, we will need:\n         \n       \n        Consider a single rectangle  :\n       A single rectangle. \n        Then we have\n         \n       \n        We can now fill in the following table:\n       Moments and center of mass System of point masses Lamina \n        The center of mass for this lamina is then the point   where\n         \n       "
},
{
  "id": "p-727",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-727",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "work force "
},
{
  "id": "p-729",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-729",
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
  "body": "A mass attached to a spring spring force \n            Since equilibrium occurs at  , the work done should be\n             \n           "
},
{
  "id": "p-734",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-734",
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
  "body": "Rod on a fulcrum. "
},
{
  "id": "p-738",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-738",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moment of the system about the origin "
},
{
  "id": "example-161",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#example-161",
  "type": "Example",
  "number": "8.6.3",
  "title": "",
  "body": "\n            Consider the following system of three point masses   at positions   given as follows:\n           Three point masses. \n            Find the following:\n             The moment of the system about the origin.  The center of mass. \n           The moment of the system about the origin is defined to be\n               \n              So the moment is  .  The center of mass is just the moment divided by the total mass   of the system:\n               \n              So the center of mass of the rod is at the point  . "
},
{
  "id": "p-745",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-745",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moment of the system about the  -axis "
},
{
  "id": "p-747",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-747",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "moment of the system about the  -axis "
},
{
  "id": "example-162",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#example-162",
  "type": "Example",
  "number": "8.6.5",
  "title": "",
  "body": "\n              Four point masses   are located in the plane at the points   and  .\n\n               Find the moments of the system about the  -axis and the  -axis. Find the center of mass of this system. \n             The moment about the  -axis is\n               \n               Similarly, the moment about the  -axis is given by\n               The center of mass is the point   where\n               \n              and   is the total mass of the system.\n             "
},
{
  "id": "p-754",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#p-754",
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
  "body": "A lamina in  . "
},
{
  "id": "figure-approximaing-the-lamina",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#figure-approximaing-the-lamina",
  "type": "Figure",
  "number": "8.6.7",
  "title": "",
  "body": "Breaking the lamina into subrectangles. "
},
{
  "id": "figure-lamina-single-rectangle",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#figure-lamina-single-rectangle",
  "type": "Figure",
  "number": "8.6.8",
  "title": "",
  "body": "A single rectangle. "
},
{
  "id": "table-center-of-mass-formulas",
  "level": "2",
  "url": "section-applications-to-physics-and-engineering.html#table-center-of-mass-formulas",
  "type": "Table",
  "number": "8.6.9",
  "title": "Moments and center of mass",
  "body": "Moments and center of mass System of point masses Lamina "
},
{
  "id": "section-differential-equations",
  "level": "1",
  "url": "section-differential-equations.html",
  "type": "Section",
  "number": "8.7",
  "title": "Differential Equations",
  "body": "Differential Equations Basic Concepts Differential Equations differential equations definition differential equation ordinary differential equation partial differential equation order \n        Examples of ODEs:\n           ; this is a second order ODE relating the unknown function   with its second derivative.   ; this is a seventh order ODE involving the derivatives of the unknown function  .\n          Note that in this ODE   is the independent variable whereas   serves as the dependent variable. \n       \n        Differential equations serve as useful  mathematical models  for quantities that change over time.\n        In particular, Newton's Second Law leads to a number of significant differential equations.\n       The Spring Equation \n            Consider an object of mass   attached to a spring, and suppose that the spring force   is the only force acting on the mass.\n            Assuming that Hooke's Law describes the spring force, find a differential equation modeling the motion of the mass.\n           \n            Recall that Hooke's Law says that  , where   is a positive constant and   is the displacement of the mass from equilibrium.\n            If this is the only force acting on the mass, then by Newton's Second Law\n             \n            Therefore the displacement   satisfies the differential equation\n             \n           Solution of a Differential Equation differential equations solution solution \n        It is straightforward to check if a function is a solution of some given differential equation, but  finding  solutions involves a bit more work.\n       Verifying solutions \n            Is   a solution of the ODE  ?\n           \n            At this point we don't know how to solve differential equations, but that doesn't mean we can't  check  solutions of differential equations.\n            To do so, we just plug   wherever   shows up in the ODE and see if the resulting equation is true.\n            So we have\n             \n            This is a true statement, so   satisfies the ODE.\n            Hence   is a solution of the ODE.\n           \n        In  ,   is not the only solution of  .\n        You can check that   and   are also solutions.\n        In fact,  any  function of the form   where   is a constant is a solution of  .\n       \n        To specify a unique solution to a differential equation, we need to add another condition known as an  initial condition  or  initial value , often of the form  .\n       initial value problem Separable Equations \n        Many ODEs are difficult, if not impossible, to solve exactly.\n        The simplest ODEs to solve are the first-order ODEs of the form  .\n        The Fundamental Theorem of Calculus guarantees that the solution   is given by  .\n       separable ODE \n        These ODEs can be solved by integration as well, but only after some rearranging.\n       Solving a separable ODE \n            Solve the IVP given by  .\n           \n            The first step to solving this IVP is to solve the ODE  .\n            It may not look like it at first, but this ODE is separable since we can rewrite it as  .\n            To solve this ODE, we need to move the   terms to the left hand side of the equation and the   terms to the right hand side.\n            We'll abuse notation a little bit to do so by rewriting   and treating   as a fraction, but it won't get us into too much trouble here:\n           implicit form explicit form \n        In  , we can also find an  explicit  form of the solution by solving for  :\n         \n       Population Equations \n            Suppose we're monitoring the population of some species, and let's denote the population at time   by  .\n            An obvious question to consider is how that population will change over time.\n            Mathematically, this means we want to obtain information on   and then use it to estimate  .\n         natural growth equation general population equation General Population Equation \n                    The general population equation for a population   is given by\n                     \n                 Population Explosion \n                    A population has   members at time   years with a death rate of   and a birth rate of  , where   denotes the population after   years.\n                    Find   and determine if this is a reasonable population model.\n                 \n                    If we assume that the population obeys the general growth equation, then we get\n                     \n                    This ODE is separable, and we can therefore solve it to get\n                     \n                 \n                    So we have a solution, and it can be shown that the solution is unique.\n                    But if you stare at this for a bit, you might see that it has a divide-by-zero problem.\n                    In particular,\n                     \n                    In other words, the population becomes infinite in about two weeks!\n                 The Logistic Equation \n              shows that we need to be more careful with our assumptions on population growth.\n            One relatively simple assumption we can make is to assume that the birth rate   decreases as population   increases.\n            This makes sense in the physical world as well: as population increases, existing and finite resources (such as food) must be shared between more and more members of the population.\n            Since there's less to go around, we should expect growth to slow down.\n            In particular, let's assume that\n             \n            where   and   are all positive constants.\n            Then the population equation for this scenario becomes\n             \n         logistic equation Long-Term Behavior of Logistic Growth \n                    What is the long-term population of a species that grows according to the logistic equation  ?\n                 \n                    Using the fact that\n                     \n                    we have\n                     \n                    So the population should eventually level out at  .\n                 carrying capacity Population Growth in the USA \n                    In millions, the population of the USA in 1990 was   and was growing at a rate of   per year.\n                    In 2012, the population was   and was growing at a rate of   per year.\n                    Assuming that the population of the USA grows logistically, estimate the population of the USA in 2017 and compare it to the current estimate of  .\n                 \n                    Let   denote the population of the USA (in millions), where   is the number of years after 1990.\n                    Then\n                     \n                    and\n                     \n                    So we need to find   and  .\n                 \n                    When  , we have   and  .\n                    Similarly, when   we have   and  .\n                    Therefore\n                     \n                    Solving this system gives us   and  .\n                    Hence\n                     \n                 \n                    This model estimates the population in 2017 to be\n                     \n                    which is about a   error.\n                    Note also that this model predicts the carrying capacity of the USA to be  .\n                 Stability of Solutions autonomous ODEs critical points equilibrium solutions Finding Equilibrium Solutions \n                    Find the equilibrium solutions of  .\n                 \n                    We need to solve the equation  .\n                    Thankfully, we can factor this to get  , and so the equilibrium solutions are  .\n                 Stability of Solutions stable unstable Determining the Stability of Solutions \n                    What are the stable critical points of  ?\n                 phase diagram The phase diagram for  \n                    This shows us that solutions that begin near   tend to move away from  , which solutions near   tend to move towards  .\n                    So   is unstable and   is stable.\n                 Determining a Sustainable Population \n                    Consider a population of fish that obeys the logistic equation\n                     \n                    where   is the population of fish (in thousands) after   years.\n                    Suppose that the population is also harvested at some rate   (in thousands per year).\n                    What is the maximum sustainable rate of harvesting?\n                 \n                    To account for the harvesting, we need to modify the ODE:\n                     \n                    The harvesting will be sustainable as long as the population does not become extinct.\n                    To determine this long term behavior, we'll find the critical points and set up a phase diagram.\n                 \n                    The critical points are given by\n                     \n                    by the quadratic formula.\n                    We now have three cases to consider:  \n                    In terms of  , these reduce to  .\n                 \n                     \n                        In the first case, if   then we have two positive, real critical points:\n                         \n                        The phase diagram for this situation is\n                     \n                     Phase diagram for  . \n                 \n                    So we see that   is unstable while   is stable.\n                    In particular, as long as  , then the rate of harvesting is sustainable.\n                 \n                 \n                     \n                        Now assume that  .\n                        Then we have only one equilibrium solution:  .\n                        The corresponding phase diagram is\n                     \n                         Phase diagram for   = 450. \n                     semi-stable. \n                 \n                     \n                        Finally, consider the case  .\n                        Then we have no (real) critical points.\n                        Since imaginary populations don't make sense in this model, there is no sustainable population.\n                        No matter how large the initial population, it will eventually go extinct if harvested at a rate greater than  .\n                     \n                 \n                By the above, the largest sustainable harvesting rate is   as long as  .\n             Linear Stability Analysis \n            Given the autonomous ODE  , we saw above that we can qualify the behavior of equilibrium solutions by setting up a phase diagram.\n            We can go a step further and actually qualify the growth of solutions that are \"near\" equilibrium solutions.\n            In particular, we have the following theorem.\n         Linear Stability Analysis \n                    Suppose   where   is continuously differentiable, and let   denote a critical point\/equilibrium solution of the ODE.\n                    If  , then   is stable and solutions near   will move exponentially towards  .\n                    If  , then   is unstable and solutions near   will move exponentially away from  .\n                    If  , then more advanced methods are required.\n                 Classifying the Critical Points of the Logistic Equation \n                    Classify the critical points of the logistic equation as stable or unstable.\n                 \n                    Recall that the logistic equation is given by   for (we'll assume) positive constants  .\n                    From here, we clearly see that the critical points are   and   (which makes sense from a population standpoint!).\n                    We could set up a phase diagram to determine stability, but we'll use   instead.\n                 \n                    Since  , we see that\n                     \n                    Hence   is unstable, while   is stable.\n                 "
},
{
  "id": "definition-differential-equations",
  "level": "2",
  "url": "section-differential-equations.html#definition-differential-equations",
  "type": "Definition",
  "number": "8.7.1",
  "title": "Differential Equations.",
  "body": "Differential Equations differential equations definition differential equation ordinary differential equation partial differential equation order "
},
{
  "id": "example-the-spring-equation",
  "level": "2",
  "url": "section-differential-equations.html#example-the-spring-equation",
  "type": "Example",
  "number": "8.7.2",
  "title": "The Spring Equation.",
  "body": "The Spring Equation \n            Consider an object of mass   attached to a spring, and suppose that the spring force   is the only force acting on the mass.\n            Assuming that Hooke's Law describes the spring force, find a differential equation modeling the motion of the mass.\n           \n            Recall that Hooke's Law says that  , where   is a positive constant and   is the displacement of the mass from equilibrium.\n            If this is the only force acting on the mass, then by Newton's Second Law\n             \n            Therefore the displacement   satisfies the differential equation\n             \n           "
},
{
  "id": "definition-solution-of-a-differential-equation",
  "level": "2",
  "url": "section-differential-equations.html#definition-solution-of-a-differential-equation",
  "type": "Definition",
  "number": "8.7.3",
  "title": "Solution of a Differential Equation.",
  "body": "Solution of a Differential Equation differential equations solution solution "
},
{
  "id": "example-verifying-solutions",
  "level": "2",
  "url": "section-differential-equations.html#example-verifying-solutions",
  "type": "Example",
  "number": "8.7.4",
  "title": "Verifying solutions.",
  "body": "Verifying solutions \n            Is   a solution of the ODE  ?\n           \n            At this point we don't know how to solve differential equations, but that doesn't mean we can't  check  solutions of differential equations.\n            To do so, we just plug   wherever   shows up in the ODE and see if the resulting equation is true.\n            So we have\n             \n            This is a true statement, so   satisfies the ODE.\n            Hence   is a solution of the ODE.\n           "
},
{
  "id": "definition-ivp",
  "level": "2",
  "url": "section-differential-equations.html#definition-ivp",
  "type": "Definition",
  "number": "8.7.5",
  "title": "",
  "body": "initial value problem "
},
{
  "id": "p-777",
  "level": "2",
  "url": "section-differential-equations.html#p-777",
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
  "body": "Solving a separable ODE \n            Solve the IVP given by  .\n           \n            The first step to solving this IVP is to solve the ODE  .\n            It may not look like it at first, but this ODE is separable since we can rewrite it as  .\n            To solve this ODE, we need to move the   terms to the left hand side of the equation and the   terms to the right hand side.\n            We'll abuse notation a little bit to do so by rewriting   and treating   as a fraction, but it won't get us into too much trouble here:\n           implicit form explicit form "
},
{
  "id": "p-784",
  "level": "2",
  "url": "section-differential-equations.html#p-784",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural growth equation "
},
{
  "id": "p-785",
  "level": "2",
  "url": "section-differential-equations.html#p-785",
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
  "body": "General Population Equation \n                    The general population equation for a population   is given by\n                     \n                 "
},
{
  "id": "example-population-explosion",
  "level": "2",
  "url": "section-differential-equations.html#example-population-explosion",
  "type": "Example",
  "number": "8.7.8",
  "title": "Population Explosion.",
  "body": "Population Explosion \n                    A population has   members at time   years with a death rate of   and a birth rate of  , where   denotes the population after   years.\n                    Find   and determine if this is a reasonable population model.\n                 \n                    If we assume that the population obeys the general growth equation, then we get\n                     \n                    This ODE is separable, and we can therefore solve it to get\n                     \n                 \n                    So we have a solution, and it can be shown that the solution is unique.\n                    But if you stare at this for a bit, you might see that it has a divide-by-zero problem.\n                    In particular,\n                     \n                    In other words, the population becomes infinite in about two weeks!\n                 "
},
{
  "id": "p-791",
  "level": "2",
  "url": "section-differential-equations.html#p-791",
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
  "body": "Long-Term Behavior of Logistic Growth \n                    What is the long-term population of a species that grows according to the logistic equation  ?\n                 \n                    Using the fact that\n                     \n                    we have\n                     \n                    So the population should eventually level out at  .\n                 "
},
{
  "id": "p-794",
  "level": "2",
  "url": "section-differential-equations.html#p-794",
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
  "body": "Population Growth in the USA \n                    In millions, the population of the USA in 1990 was   and was growing at a rate of   per year.\n                    In 2012, the population was   and was growing at a rate of   per year.\n                    Assuming that the population of the USA grows logistically, estimate the population of the USA in 2017 and compare it to the current estimate of  .\n                 \n                    Let   denote the population of the USA (in millions), where   is the number of years after 1990.\n                    Then\n                     \n                    and\n                     \n                    So we need to find   and  .\n                 \n                    When  , we have   and  .\n                    Similarly, when   we have   and  .\n                    Therefore\n                     \n                    Solving this system gives us   and  .\n                    Hence\n                     \n                 \n                    This model estimates the population in 2017 to be\n                     \n                    which is about a   error.\n                    Note also that this model predicts the carrying capacity of the USA to be  .\n                 "
},
{
  "id": "p-799",
  "level": "2",
  "url": "section-differential-equations.html#p-799",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "autonomous ODEs "
},
{
  "id": "p-800",
  "level": "2",
  "url": "section-differential-equations.html#p-800",
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
  "body": "Finding Equilibrium Solutions \n                    Find the equilibrium solutions of  .\n                 \n                    We need to solve the equation  .\n                    Thankfully, we can factor this to get  , and so the equilibrium solutions are  .\n                 "
},
{
  "id": "definition-stability-critial-points",
  "level": "2",
  "url": "section-differential-equations.html#definition-stability-critial-points",
  "type": "Definition",
  "number": "8.7.12",
  "title": "Stability of Solutions.",
  "body": "Stability of Solutions stable unstable "
},
{
  "id": "example-determining-the-stability-of-solutions",
  "level": "2",
  "url": "section-differential-equations.html#example-determining-the-stability-of-solutions",
  "type": "Example",
  "number": "8.7.13",
  "title": "Determining the Stability of Solutions.",
  "body": "Determining the Stability of Solutions \n                    What are the stable critical points of  ?\n                 phase diagram The phase diagram for  \n                    This shows us that solutions that begin near   tend to move away from  , which solutions near   tend to move towards  .\n                    So   is unstable and   is stable.\n                 "
},
{
  "id": "example-determining-a-sustainable-population",
  "level": "2",
  "url": "section-differential-equations.html#example-determining-a-sustainable-population",
  "type": "Example",
  "number": "8.7.15",
  "title": "Determining a Sustainable Population.",
  "body": "Determining a Sustainable Population \n                    Consider a population of fish that obeys the logistic equation\n                     \n                    where   is the population of fish (in thousands) after   years.\n                    Suppose that the population is also harvested at some rate   (in thousands per year).\n                    What is the maximum sustainable rate of harvesting?\n                 \n                    To account for the harvesting, we need to modify the ODE:\n                     \n                    The harvesting will be sustainable as long as the population does not become extinct.\n                    To determine this long term behavior, we'll find the critical points and set up a phase diagram.\n                 \n                    The critical points are given by\n                     \n                    by the quadratic formula.\n                    We now have three cases to consider:  \n                    In terms of  , these reduce to  .\n                 \n                     \n                        In the first case, if   then we have two positive, real critical points:\n                         \n                        The phase diagram for this situation is\n                     \n                     Phase diagram for  . \n                 \n                    So we see that   is unstable while   is stable.\n                    In particular, as long as  , then the rate of harvesting is sustainable.\n                 \n                 \n                     \n                        Now assume that  .\n                        Then we have only one equilibrium solution:  .\n                        The corresponding phase diagram is\n                     \n                         Phase diagram for   = 450. \n                     semi-stable. \n                 \n                     \n                        Finally, consider the case  .\n                        Then we have no (real) critical points.\n                        Since imaginary populations don't make sense in this model, there is no sustainable population.\n                        No matter how large the initial population, it will eventually go extinct if harvested at a rate greater than  .\n                     \n                 \n                By the above, the largest sustainable harvesting rate is   as long as  .\n             "
},
{
  "id": "theorem-linear-stability-analysis",
  "level": "2",
  "url": "section-differential-equations.html#theorem-linear-stability-analysis",
  "type": "Theorem",
  "number": "8.7.18",
  "title": "Linear Stability Analysis.",
  "body": "Linear Stability Analysis \n                    Suppose   where   is continuously differentiable, and let   denote a critical point\/equilibrium solution of the ODE.\n                    If  , then   is stable and solutions near   will move exponentially towards  .\n                    If  , then   is unstable and solutions near   will move exponentially away from  .\n                    If  , then more advanced methods are required.\n                 "
},
{
  "id": "example-classifying-the-critical-points-of-the-logistic-equation",
  "level": "2",
  "url": "section-differential-equations.html#example-classifying-the-critical-points-of-the-logistic-equation",
  "type": "Example",
  "number": "8.7.19",
  "title": "Classifying the Critical Points of the Logistic Equation.",
  "body": "Classifying the Critical Points of the Logistic Equation \n                    Classify the critical points of the logistic equation as stable or unstable.\n                 \n                    Recall that the logistic equation is given by   for (we'll assume) positive constants  .\n                    From here, we clearly see that the critical points are   and   (which makes sense from a population standpoint!).\n                    We could set up a phase diagram to determine stability, but we'll use   instead.\n                 \n                    Since  , we see that\n                     \n                    Hence   is unstable, while   is stable.\n                 "
},
{
  "id": "section-sequences",
  "level": "1",
  "url": "section-sequences.html",
  "type": "Section",
  "number": "9.1",
  "title": "Sequences",
  "body": "Sequences \n        In this chapter we'll be using infinite sums of the form   to represent functions and compute integrals.\n        In order to make sense of these series, we need to introduce the concept of a sequence and the limit of a sequence.\n       sequence index Finding a Formula for a Sequence \n            Given the sequence  , make a reasonable guess of the value of   and the general formula for  .\n           explicit formula recurrence relation An Alternating Sequence \n            Find the first few terms of the sequence  .\n           \n            This sequence simplifies down to  .\n           \n        Sequences have limits just as functions do.\n       Limit of a Sequence convergent converges divergent diverges \n        Graphically, we can say that a sequence   has a limit   if the points   become arbitrarily close to the line  :\n         \n        If you run the above code cell, you get some pretty convincing evidence that   as  .\n       \n        One of the most important sequential limits is the following:\n         \n        if  .\n        Many limits involving sequences with terms that are rational functions of   can be reduced to this form when finding limits.\n       \n            Find the limit of the sequence\n             \n           \n            We can try dividing the numerator and denominator by the highest power of   that appears:  .\n            This gives\n             .\n            Now we can take the limit as   to get  .\n           \n        We can also apply Calculus 1 limits to sequences by using the following theorem.\n       Sequential and Functional Limits \n            Let   be a function and suppose that\n             .\n            Then\n             \n            also.\n           \n        One immediate advantage of   is that L'Hospital's Rule from   applies to sequential limits as well,  as long as the sequence consists of values from a differentiable function .\n       Finding a Sequential Limit Using L'Hospital's Rule \n            Let  .\n            Find  .\n           \n            First, note that   where\n             .\n            Therefore\n           .\n         Geometric Sequences geometric sequence \n            This limit depends on whether or not   is in  .\n            If   then  .\n            If   then   for all  .\n            Finally, if   is outside of this interval, then   diverges.\n            Therefore\n             \n            and diverges otherwise.\n           \n        May decimals can be represented using geometric sequences.\n        Repeating \n            Determine the limit of the sequence\n             .\n           \n            It looks like the terms of the sequence are approaching  , and we can verify this using a geometric sequence.\n            We can write this sequence as\n             .\n            So the limit of the sequence is\n             .\n            Note that this suggests the (true!) statement that  .\n           Infinite Limits \n            Let   be a sequence.\n            If the terms of   grow without bound as   increases, we say that  .\n            If the terms of   decrease without bound as   increases, we say that  .\n           Limit of the Fibonacci Sequence \n            Let   denote the   term of the Fibonacci sequence.\n            Determine  .\n            Estimate  .\n           golden ratio \n        To calculate limits, we can use a version of the limit laws.\n       Sequential Limit Laws \n            Let   and   be sequences with   and  .\n            Let   be a constant.\n            Then the following are true:\n           \n               \n             \n               \n             \n               \n             \n                assuming  .\n             \n                if  .\n             \n                if   is continuous at  .\n             \n        Another useful tool for evaluating limits of recursive sequences is the following result: if  , then   also.\n       A Limit from Newton's Method \n            Find the limit of the sequence\n             .\n           \n            First, assume  .\n            Then taking the limit of both sides of the recurrence relation gives\n             .\n            Solving for  , we get  , which simplifies to  .\n           A False Limit \n            Find the limit of the sequence\n             .\n           \n            If we let   and take the limit of both sides of the recurrence, we get   or just  .\n            However, the actual terms of the sequence are given by\n             ,\n            which is clearly divergent!\n            The problem here is that we assumed a limit existed in the first place.\n             This is not always valid .\n            So we need to be careful.\n           \n        We can check whether or not a sequence is convergent without actually finding a limit, at least in certain cases.\n       Absolute Value Test \n            Suppose that  .\n            Then   as well.\n           The Squeeze Theorem for Sequences \n            Let   and   be sequences such that\n             .\n            If  , then  .\n           Applying the Squeeze Theorem and the Absolute Value Test \n            Let\n             .\n            Find  .\n           \n            This sequence is complicated, so we'll try comparing with simpler sequences instead.\n            First, we'll take the absolute value to get rid of the   term:\n             .\n            Now we'll use the fact that   and   to write\n             .\n            Since  , this forces  , and this  , to converge to   as well.\n           Monotone Convergence Theorem Monotone Sequences increasing decreasing \n        If we add one more condition to a monotone sequence, we get a convergent sequence.\n       Bounded Sequences bounded Monotone Convergence Theorem \n            Let   be a bounded monotone sequence.\n            Then   converges.\n           Applying the MCT \n            Let   denote the sequence\n             \n            Determine if the sequence converges and if so find its limit.\n           \n            First, note that\n             \n            To show this converges, we'll use the MCT.\n            To do so, we must show that the sequence is bounded and increasing.\n            To show it's bounded, we'll guess that   for some  .\n            Then\n             ,\n            implying the claim.\n            Now,\n             ,\n            showing the sequence is increasing.\n            Hence it's convergent by the MCT.\n            The limit is equal to  .\n           "
},
{
  "id": "p-832",
  "level": "2",
  "url": "section-sequences.html#p-832",
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
  "body": "Finding a Formula for a Sequence \n            Given the sequence  , make a reasonable guess of the value of   and the general formula for  .\n           "
},
{
  "id": "p-835",
  "level": "2",
  "url": "section-sequences.html#p-835",
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
  "body": "An Alternating Sequence \n            Find the first few terms of the sequence  .\n           \n            This sequence simplifies down to  .\n           "
},
{
  "id": "definition-limit-of-a-sequence",
  "level": "2",
  "url": "section-sequences.html#definition-limit-of-a-sequence",
  "type": "Definition",
  "number": "9.1.3",
  "title": "Limit of a Sequence.",
  "body": "Limit of a Sequence convergent converges divergent diverges "
},
{
  "id": "example-175",
  "level": "2",
  "url": "section-sequences.html#example-175",
  "type": "Example",
  "number": "9.1.4",
  "title": "",
  "body": "\n            Find the limit of the sequence\n             \n           \n            We can try dividing the numerator and denominator by the highest power of   that appears:  .\n            This gives\n             .\n            Now we can take the limit as   to get  .\n           "
},
{
  "id": "theorem-sequential-and-functional-limits",
  "level": "2",
  "url": "section-sequences.html#theorem-sequential-and-functional-limits",
  "type": "Theorem",
  "number": "9.1.5",
  "title": "Sequential and Functional Limits.",
  "body": "Sequential and Functional Limits \n            Let   be a function and suppose that\n             .\n            Then\n             \n            also.\n           "
},
{
  "id": "example-finding-a-sequential-limit-using-l-hospital-s-rule",
  "level": "2",
  "url": "section-sequences.html#example-finding-a-sequential-limit-using-l-hospital-s-rule",
  "type": "Example",
  "number": "9.1.6",
  "title": "Finding a Sequential Limit Using L'Hospital's Rule.",
  "body": "Finding a Sequential Limit Using L'Hospital's Rule \n            Let  .\n            Find  .\n           \n            First, note that   where\n             .\n            Therefore\n           .\n         "
},
{
  "id": "example-geometric-sequences",
  "level": "2",
  "url": "section-sequences.html#example-geometric-sequences",
  "type": "Example",
  "number": "9.1.7",
  "title": "Geometric Sequences.",
  "body": "Geometric Sequences geometric sequence \n            This limit depends on whether or not   is in  .\n            If   then  .\n            If   then   for all  .\n            Finally, if   is outside of this interval, then   diverges.\n            Therefore\n             \n            and diverges otherwise.\n           "
},
{
  "id": "example---9--repeating",
  "level": "2",
  "url": "section-sequences.html#example---9--repeating",
  "type": "Example",
  "number": "9.1.8",
  "title": "<span class=\"process-math\">\\(.9\\)<\/span> Repeating.",
  "body": " Repeating \n            Determine the limit of the sequence\n             .\n           \n            It looks like the terms of the sequence are approaching  , and we can verify this using a geometric sequence.\n            We can write this sequence as\n             .\n            So the limit of the sequence is\n             .\n            Note that this suggests the (true!) statement that  .\n           "
},
{
  "id": "definition-infinite-limits",
  "level": "2",
  "url": "section-sequences.html#definition-infinite-limits",
  "type": "Definition",
  "number": "9.1.9",
  "title": "Infinite Limits.",
  "body": "Infinite Limits \n            Let   be a sequence.\n            If the terms of   grow without bound as   increases, we say that  .\n            If the terms of   decrease without bound as   increases, we say that  .\n           "
},
{
  "id": "example-limit-of-the-fibonacci-sequence",
  "level": "2",
  "url": "section-sequences.html#example-limit-of-the-fibonacci-sequence",
  "type": "Example",
  "number": "9.1.10",
  "title": "Limit of the Fibonacci Sequence.",
  "body": "Limit of the Fibonacci Sequence \n            Let   denote the   term of the Fibonacci sequence.\n            Determine  .\n            Estimate  .\n           golden ratio "
},
{
  "id": "theorem-sequential-limit-laws",
  "level": "2",
  "url": "section-sequences.html#theorem-sequential-limit-laws",
  "type": "Theorem",
  "number": "9.1.11",
  "title": "Sequential Limit Laws.",
  "body": "Sequential Limit Laws \n            Let   and   be sequences with   and  .\n            Let   be a constant.\n            Then the following are true:\n           \n               \n             \n               \n             \n               \n             \n                assuming  .\n             \n                if  .\n             \n                if   is continuous at  .\n             "
},
{
  "id": "example-a-limit-from-newton-s-method",
  "level": "2",
  "url": "section-sequences.html#example-a-limit-from-newton-s-method",
  "type": "Example",
  "number": "9.1.12",
  "title": "A Limit from Newton's Method.",
  "body": "A Limit from Newton's Method \n            Find the limit of the sequence\n             .\n           \n            First, assume  .\n            Then taking the limit of both sides of the recurrence relation gives\n             .\n            Solving for  , we get  , which simplifies to  .\n           "
},
{
  "id": "example-a-false-limit",
  "level": "2",
  "url": "section-sequences.html#example-a-false-limit",
  "type": "Example",
  "number": "9.1.13",
  "title": "A False Limit.",
  "body": "A False Limit \n            Find the limit of the sequence\n             .\n           \n            If we let   and take the limit of both sides of the recurrence, we get   or just  .\n            However, the actual terms of the sequence are given by\n             ,\n            which is clearly divergent!\n            The problem here is that we assumed a limit existed in the first place.\n             This is not always valid .\n            So we need to be careful.\n           "
},
{
  "id": "theorem-absolute-value-test",
  "level": "2",
  "url": "section-sequences.html#theorem-absolute-value-test",
  "type": "Theorem",
  "number": "9.1.14",
  "title": "Absolute Value Test.",
  "body": "Absolute Value Test \n            Suppose that  .\n            Then   as well.\n           "
},
{
  "id": "theorem-the-squeeze-theorem-for-sequences",
  "level": "2",
  "url": "section-sequences.html#theorem-the-squeeze-theorem-for-sequences",
  "type": "Theorem",
  "number": "9.1.15",
  "title": "The Squeeze Theorem for Sequences.",
  "body": "The Squeeze Theorem for Sequences \n            Let   and   be sequences such that\n             .\n            If  , then  .\n           "
},
{
  "id": "example-applying-the-squeeze-theorem-and-the-absolute-value-test",
  "level": "2",
  "url": "section-sequences.html#example-applying-the-squeeze-theorem-and-the-absolute-value-test",
  "type": "Example",
  "number": "9.1.16",
  "title": "Applying the Squeeze Theorem and the Absolute Value Test.",
  "body": "Applying the Squeeze Theorem and the Absolute Value Test \n            Let\n             .\n            Find  .\n           \n            This sequence is complicated, so we'll try comparing with simpler sequences instead.\n            First, we'll take the absolute value to get rid of the   term:\n             .\n            Now we'll use the fact that   and   to write\n             .\n            Since  , this forces  , and this  , to converge to   as well.\n           "
},
{
  "id": "p-870",
  "level": "2",
  "url": "section-sequences.html#p-870",
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
  "body": "Monotone Sequences increasing decreasing "
},
{
  "id": "definition-bounded-sequences",
  "level": "2",
  "url": "section-sequences.html#definition-bounded-sequences",
  "type": "Definition",
  "number": "9.1.18",
  "title": "Bounded Sequences.",
  "body": "Bounded Sequences bounded "
},
{
  "id": "theorem-monotone-convergence-theorem",
  "level": "2",
  "url": "section-sequences.html#theorem-monotone-convergence-theorem",
  "type": "Theorem",
  "number": "9.1.19",
  "title": "Monotone Convergence Theorem.",
  "body": "Monotone Convergence Theorem \n            Let   be a bounded monotone sequence.\n            Then   converges.\n           "
},
{
  "id": "example-applying-the-mct",
  "level": "2",
  "url": "section-sequences.html#example-applying-the-mct",
  "type": "Example",
  "number": "9.1.20",
  "title": "Applying the MCT.",
  "body": "Applying the MCT \n            Let   denote the sequence\n             \n            Determine if the sequence converges and if so find its limit.\n           \n            First, note that\n             \n            To show this converges, we'll use the MCT.\n            To do so, we must show that the sequence is bounded and increasing.\n            To show it's bounded, we'll guess that   for some  .\n            Then\n             ,\n            implying the claim.\n            Now,\n             ,\n            showing the sequence is increasing.\n            Hence it's convergent by the MCT.\n            The limit is equal to  .\n           "
},
{
  "id": "section-series",
  "level": "1",
  "url": "section-series.html",
  "type": "Section",
  "number": "9.2",
  "title": "Series",
  "body": "Series \n        Consider the number  .\n        This number is irrational and so cannot be represented as a rational number  .\n        This leads to the question of what we mean by  ?\n        Or in particular, how can we actually make sense of  , or represent it?\n       series Infinite Series \n            An infinite series is a sum of the form\n             \n            where   is a sequence.\n           \n        Infinite series are useful for representing (and computing) irrational numbers (which includes almost all numbers).\n       Guessing Sums \n            Guess the sums of the following series:\n             \n                 \n               \n                 \n               \n                 \n               \n           \n            We have the following:\n             \n                 \n               \n                 \n               \n                 \n                  For this last sum we have an issue: there's no sensible way to define this sum.\n                  We can say that   or   by grouping terms differently.\n                 \n               \n           \n        We can determine what the value of a series should be by using limits.\n       Partial Sums and Convergence partial sum converges diverges \n        Using  , we can say that the sum   diverges, since its sequence of partial sums is  .\n        The same is true for the first series in  , but the second series converges.\n       Determining Convergence of a Series \n            Does the series   converge?\n           \n            We'll look at the sequence of partial sums.\n            We have\n             \n            and so on.\n            It looks like the sequence of partial sums approaches  , so we guess that the series equals the same.\n           geometric series Geometric Series \n            A series   is a geometric series if   for some constants   and  .\n            Equivalently, the terms of the series form a geometric sequence (see  ).\n           \n        Geometric series are useful because it's straightforward to find their values.\n        To see how, let   be a geometric series and let   denote the corresponding sequence of partial sums.\n        Then\n         \n        which gives\n         .\n        We can solve this for   to get\n         .\n       \n        At this point, we can find the limit of the partial sums using  .\n        Therefore   converges to   if   and diverges otherwise.\n       \n        As a quick example of this result, we can find the value of   since this series is geometric.\n        To do so, we must determine   and   for this sum.\n        Since\n         ,\n        we have   and   also.\n        Hence the series sums to  .\n       Computing a Geometric Series \n            Determine the value of   if it exists.\n           \n            Since this series contains terms being raised to the   power, we suspect it may be geometric.\n            If we write out the first several terms, we get\n             ,\n            so at each step we're dividing by  .\n            This series is therefore a geometric series with   and  .\n            Since  , this series converges.\n            The value of this series is\n             .\n           \n        We can also find   and   without writing out the first few terms of the series.\n       Finding   and  \n            Determine the value of  .\n           \n            We can rewrite the series as\n             .\n            This is a geometric series with\n             .\n            Since  , the series diverges.\n            repeating \n            Prove that   using geometric series.\n           \n            First, we need to write   as a geometric series.\n            We can do so as follows:\n             ,\n            and so we see that\n             .\n            This is a geometric series with   and   (and so is convergent!), and so\n             .\n           Writing a Decimal as a Fraction \n            Rewrite the decimal   as a fraction  .\n           \n            First, it's a mathematical fact that any repeating decimal can be written as a rational number so we know that we can actually write   as a fraction.\n            We'll do so by rewriting the decimal as a geometric series:\n             ,\n            which is a geometric series with   and  .\n            This series is also convergent, and has sum\n             .\n           telescoping series Telescoping Logarithms \n            Find  .\n           \n            If we write out the first few terms, we get\n             \n            so it looks like many of these terms cancel each other out.\n            To be precise about this, we'll find the partial sums of this series and then consider their limit:\n             ,\n            which goes to   as  .\n            So the series diverges.\n           \n        Not every series is obviously a telescoping series.\n       Rewriting a Telescoping Series \n            Find  .\n           \n            It's not obvious at all that the series is telescoping, even if we write out a few terms.\n            However, if we try partial fractions on   we obtain (see SageMath cell below)\n             .\n            So\n             .\n           \n            The   partial sum is\n             ,\n            and so  .\n            Hence  .\n           \n        The next series is important despite diverging.\n       The Harmonic Series harmonic series \n            The idea here (which will return later) is to compare this series with a simpler one that we know diverges.\n            We'll do so by looking at a specific set of partial sums:\n             \n            and in general\n             .\n           \n            So it follows that\n             .\n            Hence the harmonic series is divergent.\n           \n        A useful test for divergence of a series involves the long-term behavior of the terms of the series.\n       Divergence Test \n            Consider the series  .\n            If  , then   diverges.\n           contrapositive \n        Note that   cannot be used to prove  convergence , only divergence.\n        For example, the terms of the harmonic series go to   but the series itself diverges.\n       Using the Divergence Test \n            Determine if   diverges.\n           \n            Since   (in fact, it doesn't exist at all), the series must diverge.\n           \n        Series, or rather the summation symbol  , obey many of the same laws as integrals: they split over sums and we may pull constants out.\n       Splitting a Sum \n              Find the value of  .\n             "
},
{
  "id": "p-878",
  "level": "2",
  "url": "section-series.html#p-878",
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
  "body": "Infinite Series \n            An infinite series is a sum of the form\n             \n            where   is a sequence.\n           "
},
{
  "id": "example-guessing-sums",
  "level": "2",
  "url": "section-series.html#example-guessing-sums",
  "type": "Example",
  "number": "9.2.2",
  "title": "Guessing Sums.",
  "body": "Guessing Sums \n            Guess the sums of the following series:\n             \n                 \n               \n                 \n               \n                 \n               \n           \n            We have the following:\n             \n                 \n               \n                 \n               \n                 \n                  For this last sum we have an issue: there's no sensible way to define this sum.\n                  We can say that   or   by grouping terms differently.\n                 \n               \n           "
},
{
  "id": "definition-partial-sums-and-convergence",
  "level": "2",
  "url": "section-series.html#definition-partial-sums-and-convergence",
  "type": "Definition",
  "number": "9.2.3",
  "title": "Partial Sums and Convergence.",
  "body": "Partial Sums and Convergence partial sum converges diverges "
},
{
  "id": "example-determining-convergence-of-a-series",
  "level": "2",
  "url": "section-series.html#example-determining-convergence-of-a-series",
  "type": "Example",
  "number": "9.2.4",
  "title": "Determining Convergence of a Series.",
  "body": "Determining Convergence of a Series \n            Does the series   converge?\n           \n            We'll look at the sequence of partial sums.\n            We have\n             \n            and so on.\n            It looks like the sequence of partial sums approaches  , so we guess that the series equals the same.\n           "
},
{
  "id": "p-889",
  "level": "2",
  "url": "section-series.html#p-889",
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
  "body": "Geometric Series \n            A series   is a geometric series if   for some constants   and  .\n            Equivalently, the terms of the series form a geometric sequence (see  ).\n           "
},
{
  "id": "example-computing-a-geometric-series",
  "level": "2",
  "url": "section-series.html#example-computing-a-geometric-series",
  "type": "Example",
  "number": "9.2.6",
  "title": "Computing a Geometric Series.",
  "body": "Computing a Geometric Series \n            Determine the value of   if it exists.\n           \n            Since this series contains terms being raised to the   power, we suspect it may be geometric.\n            If we write out the first several terms, we get\n             ,\n            so at each step we're dividing by  .\n            This series is therefore a geometric series with   and  .\n            Since  , this series converges.\n            The value of this series is\n             .\n           "
},
{
  "id": "example-finding-a--and-r-",
  "level": "2",
  "url": "section-series.html#example-finding-a--and-r-",
  "type": "Example",
  "number": "9.2.7",
  "title": "Finding <span class=\"process-math\">\\(a\\)<\/span> and <span class=\"process-math\">\\(r\\)<\/span>.",
  "body": "Finding   and  \n            Determine the value of  .\n           \n            We can rewrite the series as\n             .\n            This is a geometric series with\n             .\n            Since  , the series diverges.\n           "
},
{
  "id": "example---9-ldots--repeating",
  "level": "2",
  "url": "section-series.html#example---9-ldots--repeating",
  "type": "Example",
  "number": "9.2.8",
  "title": "<span class=\"process-math\">\\(.9\\ldots\\)<\/span> repeating.",
  "body": " repeating \n            Prove that   using geometric series.\n           \n            First, we need to write   as a geometric series.\n            We can do so as follows:\n             ,\n            and so we see that\n             .\n            This is a geometric series with   and   (and so is convergent!), and so\n             .\n           "
},
{
  "id": "example-writing-a-decimal-as-a-fraction",
  "level": "2",
  "url": "section-series.html#example-writing-a-decimal-as-a-fraction",
  "type": "Example",
  "number": "9.2.9",
  "title": "Writing a Decimal as a Fraction.",
  "body": "Writing a Decimal as a Fraction \n            Rewrite the decimal   as a fraction  .\n           \n            First, it's a mathematical fact that any repeating decimal can be written as a rational number so we know that we can actually write   as a fraction.\n            We'll do so by rewriting the decimal as a geometric series:\n             ,\n            which is a geometric series with   and  .\n            This series is also convergent, and has sum\n             .\n           "
},
{
  "id": "p-903",
  "level": "2",
  "url": "section-series.html#p-903",
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
  "body": "Telescoping Logarithms \n            Find  .\n           \n            If we write out the first few terms, we get\n             \n            so it looks like many of these terms cancel each other out.\n            To be precise about this, we'll find the partial sums of this series and then consider their limit:\n             ,\n            which goes to   as  .\n            So the series diverges.\n           "
},
{
  "id": "example-rewriting-a-telescoping-series",
  "level": "2",
  "url": "section-series.html#example-rewriting-a-telescoping-series",
  "type": "Example",
  "number": "9.2.11",
  "title": "Rewriting a Telescoping Series.",
  "body": "Rewriting a Telescoping Series \n            Find  .\n           \n            It's not obvious at all that the series is telescoping, even if we write out a few terms.\n            However, if we try partial fractions on   we obtain (see SageMath cell below)\n             .\n            So\n             .\n           \n            The   partial sum is\n             ,\n            and so  .\n            Hence  .\n           "
},
{
  "id": "example-the-harmonic-series",
  "level": "2",
  "url": "section-series.html#example-the-harmonic-series",
  "type": "Example",
  "number": "9.2.12",
  "title": "The Harmonic Series.",
  "body": "The Harmonic Series harmonic series \n            The idea here (which will return later) is to compare this series with a simpler one that we know diverges.\n            We'll do so by looking at a specific set of partial sums:\n             \n            and in general\n             .\n           \n            So it follows that\n             .\n            Hence the harmonic series is divergent.\n           "
},
{
  "id": "theorem-divergence-test",
  "level": "2",
  "url": "section-series.html#theorem-divergence-test",
  "type": "Theorem",
  "number": "9.2.13",
  "title": "Divergence Test.",
  "body": "Divergence Test \n            Consider the series  .\n            If  , then   diverges.\n           contrapositive "
},
{
  "id": "example-using-the-divergence-test",
  "level": "2",
  "url": "section-series.html#example-using-the-divergence-test",
  "type": "Example",
  "number": "9.2.14",
  "title": "Using the Divergence Test.",
  "body": "Using the Divergence Test \n            Determine if   diverges.\n           \n            Since   (in fact, it doesn't exist at all), the series must diverge.\n           "
},
{
  "id": "example-splitting-a-sum",
  "level": "2",
  "url": "section-series.html#example-splitting-a-sum",
  "type": "Example",
  "number": "9.2.15",
  "title": "Splitting a Sum.",
  "body": "Splitting a Sum \n              Find the value of  .\n             "
},
{
  "id": "section-the-integral-and-comparison-tests",
  "level": "1",
  "url": "section-the-integral-and-comparison-tests.html",
  "type": "Section",
  "number": "9.3",
  "title": "The Integral and Comparison Tests",
  "body": "The Integral and Comparison Tests Convergence Tests convergence test The Integral Test integral test Integral Test \n                    Suppose that   is a positive, decreasing function on   and let  .\n                    Then\n                     \n                    must both converge or both diverge.\n                   \n                Remember that the Integral Test usually  cannot  determine the value of a series.\n                It can only be used to determine convergence.\n               Determining Convergence Using the Integral Test \n                    Determine if the series   converges or diverges.\n                   \n                    We can use the Integral Test here since   is positive and decreasing.\n                    If we define  , then  .\n                    Now we'll compute  :\n                     .\n                    Since the integral converges, so does the series.\n                    In fact, the value of the series is\n                     .\n                   The Alternating Harmonic Series alternating harmonic series \n                    Since   is neither decreasing nor positive, the Integral Test doesn't apply here.\n                   \n              An important corollary to   is that the integral  -test from   applies to series as well.\n             Series  -Test \n                    The series   converges if and only if  .\n                   Comparison Tests convergence tests series direct comparison test Comparison Test \n                    Let   and   be series with  positive  terms.\n                    Then\n                     \n                         If   and   converges, then so does  . \n                       \n                         If   and   diverges, then so does  . \n                       \n                   Using the Comparison Test \n                    Show that   diverges.\n                   \n              Sometimes using the Comparison Test requires a little ingenuity.\n             A Little Ingenuity \n                    Show that   converges.\n                   Limit Comparison Test convergence tests series limit comparison test Limit Comparison Test \n                  Suppose that   and   are both series with positive terms, and suppose\n                   \n                  exists.\n                  Then\n                   \n                       if  , then either both series converge or both series diverge. \n                     \n                       if   and   converges, then so does  . \n                     \n                       if   and   diverges, then so does  . \n                     \n                 \n              The quantity   in   can be thought of as the relative size of   as compared to  .\n             A Little Less Ingenuity \n                    Show that   converges.\n                   \n                    We saw previously that\n                     ,\n                    which suggests comparing the original series with the  -series  .\n                    If we let   and  , then we see that\n                     .\n                    By   and  , the original series converges.\n                   \n              The Limit Comparison Test works very well with series containing terms given by a ratio of powers, in conjunction with the  -series Test.\n             Radical Powers of  \n                    Does\n                     \n                    converge or diverge?\n                   \n                    The series diverges by comparison with  .\n                   "
},
{
  "id": "p-922",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#p-922",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convergence test "
},
{
  "id": "p-923",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#p-923",
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
  "body": "Integral Test \n                    Suppose that   is a positive, decreasing function on   and let  .\n                    Then\n                     \n                    must both converge or both diverge.\n                   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#remark-1",
  "type": "Remark",
  "number": "9.3.2",
  "title": "",
  "body": "\n                Remember that the Integral Test usually  cannot  determine the value of a series.\n                It can only be used to determine convergence.\n               "
},
{
  "id": "example-determining-convergence-using-the-integral-test",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-determining-convergence-using-the-integral-test",
  "type": "Example",
  "number": "9.3.3",
  "title": "Determining Convergence Using the Integral Test.",
  "body": "Determining Convergence Using the Integral Test \n                    Determine if the series   converges or diverges.\n                   \n                    We can use the Integral Test here since   is positive and decreasing.\n                    If we define  , then  .\n                    Now we'll compute  :\n                     .\n                    Since the integral converges, so does the series.\n                    In fact, the value of the series is\n                     .\n                   "
},
{
  "id": "example-the-alternating-harmonic-series",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-the-alternating-harmonic-series",
  "type": "Example",
  "number": "9.3.4",
  "title": "The Alternating Harmonic Series.",
  "body": "The Alternating Harmonic Series alternating harmonic series \n                    Since   is neither decreasing nor positive, the Integral Test doesn't apply here.\n                   "
},
{
  "id": "theorem-series-p--test",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#theorem-series-p--test",
  "type": "Theorem",
  "number": "9.3.5",
  "title": "Series <span class=\"process-math\">\\(p\\)<\/span>-Test.",
  "body": "Series  -Test \n                    The series   converges if and only if  .\n                   "
},
{
  "id": "theorem-direct-comparison-test-series",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#theorem-direct-comparison-test-series",
  "type": "Theorem",
  "number": "9.3.6",
  "title": "Comparison Test.",
  "body": "convergence tests series direct comparison test Comparison Test \n                    Let   and   be series with  positive  terms.\n                    Then\n                     \n                         If   and   converges, then so does  . \n                       \n                         If   and   diverges, then so does  . \n                       \n                   "
},
{
  "id": "example-using-the-comparison-test",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-using-the-comparison-test",
  "type": "Example",
  "number": "9.3.7",
  "title": "Using the Comparison Test.",
  "body": "Using the Comparison Test \n                    Show that   diverges.\n                   "
},
{
  "id": "example-a-little-ingenuity",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-a-little-ingenuity",
  "type": "Example",
  "number": "9.3.8",
  "title": "A Little Ingenuity.",
  "body": "A Little Ingenuity \n                    Show that   converges.\n                   "
},
{
  "id": "p-938",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#p-938",
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
  "body": "convergence tests series limit comparison test Limit Comparison Test \n                  Suppose that   and   are both series with positive terms, and suppose\n                   \n                  exists.\n                  Then\n                   \n                       if  , then either both series converge or both series diverge. \n                     \n                       if   and   converges, then so does  . \n                     \n                       if   and   diverges, then so does  . \n                     \n                 "
},
{
  "id": "example-a-little-less-ingenuity",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-a-little-less-ingenuity",
  "type": "Example",
  "number": "9.3.10",
  "title": "A Little Less Ingenuity.",
  "body": "A Little Less Ingenuity \n                    Show that   converges.\n                   \n                    We saw previously that\n                     ,\n                    which suggests comparing the original series with the  -series  .\n                    If we let   and  , then we see that\n                     .\n                    By   and  , the original series converges.\n                   "
},
{
  "id": "example-radical-powers-of-k-",
  "level": "2",
  "url": "section-the-integral-and-comparison-tests.html#example-radical-powers-of-k-",
  "type": "Example",
  "number": "9.3.11",
  "title": "Radical Powers of <span class=\"process-math\">\\(k\\)<\/span>.",
  "body": "Radical Powers of  \n                    Does\n                     \n                    converge or diverge?\n                   \n                    The series diverges by comparison with  .\n                   "
},
{
  "id": "section-other-convergence-tests",
  "level": "1",
  "url": "section-other-convergence-tests.html",
  "type": "Section",
  "number": "9.4",
  "title": "Other Convergence Tests",
  "body": "Other Convergence Tests Alternating Series alternating series Alternating Series Test remainder \n              Note that   is  not  the same as  .\n             An Alternating Series with Roots \n                    Does\n                      converge or diverge?\n                   \n                    Let  .\n                    Then   is decreasing, and  , so the series converges.\n                   Alternating Harmonic Series \n                    Show that the Alternating Harmonic Series   converges, and determine a value of   for which   is within   of the actual value of  .\n                   \n                    Since the Alternating Harmonic Series is an alternating series with  , and because these terms decrease to  , the sum must converge.\n                    However, we do not yet know  what  it converges to yet.\n\n                    Now let   denote the   partial sum.\n                    Then we know the error between   and   is at most\n                     .\n                    To make this less than  , we must have  .\n                   \n              The Alternating Harmonic Series is also a useful example to illustrate the following definitions.\n             Absolute and Conditional Convergence absolutely convergent conditionally convergent \n              The Alternating Harmonic Series is an example of a conditionally convergent series.\n              There are two important consequences of  :\n               \n                   Absolutely convergent series are also convergent series. \n                 \n                   For conditionally convergent series,  order matters . \n                 \n             Convergence of a Series Involving Sine \n                    Determine if\n                     \n                    converges or diverges.\n                   \n                    If we take the absolute value of each term, then we get\n                     .\n                    Since   is a geometric series with  , then\n                     \n                    must converge by  .\n                   \n                    Hence the original series is absolutely convergent, and so also convergent.\n                   Ratio Test \n              Geometric series are among the easiest to sum and determine convergence for.\n              So it's useful to try to compare an arbitrary series with a geometric series.\n              The main idea is to look at the long-term behavior of  ratios  of consecutive terms.\n             Ratio Test \n                    Let   be an infinite series and let\n                     .\n                    Then\n                     \n                         If   the series converges absolutely. \n                       \n                         If   the series diverges. \n                       \n                         If   the test fails. \n                       \n                   Using the Ratio Test \n                    Does\n                     \n                    converge or diverge?\n                   \n                    Since\n                     ,\n                    the series diverges by  .\n                   \n              The ratio test works well with series whose terms involve factorials or powers involving  .\n             Factorials over Powers \n                    Show that   converges.\n                   \n                    Since  , we have\n                     .\n                    We can find this limit using L'Hospital's Rule (see  ) since this limit is the indeterminate form  .\n                    So set  .\n                    Then\n                     .\n                    Therefore  , which means that the series converges by the ratio test.\n                   Root Test \n              The root test is similar to the ratio test in that it compares a given series with an appropriate geometric series to determine if the original converges.\n             Root Test \n                    Let   be an infinite series and let\n                     .\n                    Then\n                     \n                         If   the series converges absolutely. \n                       \n                         If   the series diverges. \n                       \n                         If   the test fails. \n                       \n                   A   Power \n                    Show that   diverges.\n                   A Series with Rational Terms \n                    Does   converge or diverge?\n                   "
},
{
  "id": "p-949",
  "level": "2",
  "url": "section-other-convergence-tests.html#p-949",
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
  "body": "Alternating Series Test remainder "
},
{
  "id": "example-an-alternating-series-with-roots",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-an-alternating-series-with-roots",
  "type": "Example",
  "number": "9.4.2",
  "title": "An Alternating Series with Roots.",
  "body": "An Alternating Series with Roots \n                    Does\n                      converge or diverge?\n                   \n                    Let  .\n                    Then   is decreasing, and  , so the series converges.\n                   "
},
{
  "id": "example-alternating-harmonic-series",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-alternating-harmonic-series",
  "type": "Example",
  "number": "9.4.3",
  "title": "Alternating Harmonic Series.",
  "body": "Alternating Harmonic Series \n                    Show that the Alternating Harmonic Series   converges, and determine a value of   for which   is within   of the actual value of  .\n                   \n                    Since the Alternating Harmonic Series is an alternating series with  , and because these terms decrease to  , the sum must converge.\n                    However, we do not yet know  what  it converges to yet.\n\n                    Now let   denote the   partial sum.\n                    Then we know the error between   and   is at most\n                     .\n                    To make this less than  , we must have  .\n                   "
},
{
  "id": "definition-absolute-and-conditional-convergence",
  "level": "2",
  "url": "section-other-convergence-tests.html#definition-absolute-and-conditional-convergence",
  "type": "Definition",
  "number": "9.4.4",
  "title": "Absolute and Conditional Convergence.",
  "body": "Absolute and Conditional Convergence absolutely convergent conditionally convergent "
},
{
  "id": "example-convergence-of-a-series-involving-sine",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-convergence-of-a-series-involving-sine",
  "type": "Example",
  "number": "9.4.5",
  "title": "Convergence of a Series Involving Sine.",
  "body": "Convergence of a Series Involving Sine \n                    Determine if\n                     \n                    converges or diverges.\n                   \n                    If we take the absolute value of each term, then we get\n                     .\n                    Since   is a geometric series with  , then\n                     \n                    must converge by  .\n                   \n                    Hence the original series is absolutely convergent, and so also convergent.\n                   "
},
{
  "id": "theorem-ratio-test",
  "level": "2",
  "url": "section-other-convergence-tests.html#theorem-ratio-test",
  "type": "Theorem",
  "number": "9.4.6",
  "title": "Ratio Test.",
  "body": "Ratio Test \n                    Let   be an infinite series and let\n                     .\n                    Then\n                     \n                         If   the series converges absolutely. \n                       \n                         If   the series diverges. \n                       \n                         If   the test fails. \n                       \n                   "
},
{
  "id": "example-using-the-ratio-test",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-using-the-ratio-test",
  "type": "Example",
  "number": "9.4.7",
  "title": "Using the Ratio Test.",
  "body": "Using the Ratio Test \n                    Does\n                     \n                    converge or diverge?\n                   \n                    Since\n                     ,\n                    the series diverges by  .\n                   "
},
{
  "id": "example-factorials-over-powers",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-factorials-over-powers",
  "type": "Example",
  "number": "9.4.8",
  "title": "Factorials over Powers.",
  "body": "Factorials over Powers \n                    Show that   converges.\n                   \n                    Since  , we have\n                     .\n                    We can find this limit using L'Hospital's Rule (see  ) since this limit is the indeterminate form  .\n                    So set  .\n                    Then\n                     .\n                    Therefore  , which means that the series converges by the ratio test.\n                   "
},
{
  "id": "theorem-root-test",
  "level": "2",
  "url": "section-other-convergence-tests.html#theorem-root-test",
  "type": "Theorem",
  "number": "9.4.9",
  "title": "Root Test.",
  "body": "Root Test \n                    Let   be an infinite series and let\n                     .\n                    Then\n                     \n                         If   the series converges absolutely. \n                       \n                         If   the series diverges. \n                       \n                         If   the test fails. \n                       \n                   "
},
{
  "id": "example-a-k-text-th-m-power",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-a-k-text-th-m-power",
  "type": "Example",
  "number": "9.4.10",
  "title": "A <span class=\"process-math\">\\(k^{\\text{th}}\\)<\/span> Power.",
  "body": "A   Power \n                    Show that   diverges.\n                   "
},
{
  "id": "example-a-series-with-rational-terms",
  "level": "2",
  "url": "section-other-convergence-tests.html#example-a-series-with-rational-terms",
  "type": "Example",
  "number": "9.4.11",
  "title": "A Series with Rational Terms.",
  "body": "A Series with Rational Terms \n                    Does   converge or diverge?\n                   "
},
{
  "id": "section-power-series",
  "level": "1",
  "url": "section-power-series.html",
  "type": "Section",
  "number": "9.5",
  "title": "Power Series",
  "body": "Power Series power series coefficients Examples of Power Series \n                Determine which of the following are power series:\n                 \n                     \n                   \n                     \n                   \n                     \n                   \n               centered about \n          An important concern about power series is for which values of   the series will converge.\n          These questions are usually answered using the root or ratio tests.\n         Convergence of a Power Series \n                For what values of   does the series\n                 \n                converge?\n               \n                We'll try the ratio test to check convergence of this series.\n                Doing so, we get\n                 .\n                So the series converges if   and diverges if  .\n               \n                When  , or  , the test fails.\n                So we need to use other methods to determine the convergence or the series at these points.\n                At  , the series becomes\n                 ,\n                which diverges by the comparison test.\n                At  , the series reduces to the alternating harmonic series which converges by  .\n               \n                Therefore this series converges for all   in the interval   and diverges otherwise.\n               interval of convergence radius of convergence Convergence of Power Series \n                 Given a series  , there exists   such that the series converges on the interval  .\n                 The largest such   is the radius of convergence.\n                \n          For most series we'll consider (i.e., those of the form  ), we can find   using the following formula:\n           .\n         Interval and Radius of Convergence \n                Find the interval and radius of convergence of the series  .\n               \n                We'll find the radius of convergence first, which is given by\n                 .\n                So the radius of convergence is infinite, implying that the interval of convergence is  .\n               \n          We can also use the root test instead of the ratio test.\n         Interval and Radius of Convergence from Root Test \n                Determine the interval and radius of convergence of\n                 .\n               \n                If we apply the root test to this series, we get\n                 .\n                We need this to be less than  , which gives\n                 ,\n                and so the series converges for all   in  .\n                So the radius of convergence is  .\n               \n                Now we need to check the endpoints.\n                At  , the series becomes  , which diverges by the  -series test.\n                At  , the series becomes   which converges by the alternating series test.\n               \n                Therefore the interval of convergence is  .\n               "
},
{
  "id": "p-981",
  "level": "2",
  "url": "section-power-series.html#p-981",
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
  "body": "Examples of Power Series \n                Determine which of the following are power series:\n                 \n                     \n                   \n                     \n                   \n                     \n                   \n               "
},
{
  "id": "p-983",
  "level": "2",
  "url": "section-power-series.html#p-983",
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
  "body": "Convergence of a Power Series \n                For what values of   does the series\n                 \n                converge?\n               \n                We'll try the ratio test to check convergence of this series.\n                Doing so, we get\n                 .\n                So the series converges if   and diverges if  .\n               \n                When  , or  , the test fails.\n                So we need to use other methods to determine the convergence or the series at these points.\n                At  , the series becomes\n                 ,\n                which diverges by the comparison test.\n                At  , the series reduces to the alternating harmonic series which converges by  .\n               \n                Therefore this series converges for all   in the interval   and diverges otherwise.\n               "
},
{
  "id": "p-989",
  "level": "2",
  "url": "section-power-series.html#p-989",
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
  "body": "Convergence of Power Series \n                 Given a series  , there exists   such that the series converges on the interval  .\n                 The largest such   is the radius of convergence.\n                "
},
{
  "id": "example-interval-and-radius-of-convergence",
  "level": "2",
  "url": "section-power-series.html#example-interval-and-radius-of-convergence",
  "type": "Example",
  "number": "9.5.4",
  "title": "Interval and Radius of Convergence.",
  "body": "Interval and Radius of Convergence \n                Find the interval and radius of convergence of the series  .\n               \n                We'll find the radius of convergence first, which is given by\n                 .\n                So the radius of convergence is infinite, implying that the interval of convergence is  .\n               "
},
{
  "id": "example-interval-and-radius-of-convergence-from-root-test",
  "level": "2",
  "url": "section-power-series.html#example-interval-and-radius-of-convergence-from-root-test",
  "type": "Example",
  "number": "9.5.5",
  "title": "Interval and Radius of Convergence from Root Test.",
  "body": "Interval and Radius of Convergence from Root Test \n                Determine the interval and radius of convergence of\n                 .\n               \n                If we apply the root test to this series, we get\n                 .\n                We need this to be less than  , which gives\n                 ,\n                and so the series converges for all   in  .\n                So the radius of convergence is  .\n               \n                Now we need to check the endpoints.\n                At  , the series becomes  , which diverges by the  -series test.\n                At  , the series becomes   which converges by the alternating series test.\n               \n                Therefore the interval of convergence is  .\n               "
},
{
  "id": "section-representing-functions-as-power-series",
  "level": "1",
  "url": "section-representing-functions-as-power-series.html",
  "type": "Section",
  "number": "9.6",
  "title": "Representing Functions as Power Series",
  "body": "Representing Functions as Power Series \n          A power series can be viewed as a function with domain given by the interval of convergence.\n          One of our goals is to use power series to represent functions that can't be written in terms of  elementary functions .\n          Our first example comes from the geometric series.\n         Power Series from Geometric Series \n                Let\n                 .\n                Then the domain of   is   and for   in this interval we have\n                 .\n               \n          Note that the equation\n           \n          is only valid where the series on the left converges.\n          If we try to plug in   into this equation and treat it as valid, we get\n           ,\n          which is nonsense.\n         \n          Now that we have a power series representation of  , we can use it to find other power series representations.\n         Finding a Power Series Representation \n                Find a power series representation for   and state the interval over which it is valid.\n               \n                We'll try to relate this to the series in  :\n                 .\n                This representation is valid for  , or for   in the interval  .\n               \n          One of the most useful properties of power series is that the fundamental calculus operations, differentiation and integration, are valid for power series within their intervals of convergence.\n         Differentiation and Integration of Power Series \n                Suppose the power series   has radius of convergence  , and let   denote the series on the interval  .\n                Then   is differentiable on   and\n                 \n                or in other words\n                 .\n                Similarly,\n                 .\n                Both of these series have radius of convergence  .\n               \n            shows that integrating and differentiating power series is as easy as integrating or differentiating powers of  .\n          However, we do need to be careful at the endpoints.\n         Power Series for the Logarithm \n                Find a power series representation of   centered at   and its interval of convergence.\n               \n                Since  , we can integrate the series for   to get the series for the logarithm.\n                Doing so, we get\n                 .\n                The series on the right has radius of convergence   and interval of convergence   by  .\n                To find  , we can substitute   into the equation (which is valid!) to get\n                 .\n                So  , and\n                 .\n                Plugging in  , we get the series\n                 .\n               "
},
{
  "id": "example-power-series-from-geometric-series",
  "level": "2",
  "url": "section-representing-functions-as-power-series.html#example-power-series-from-geometric-series",
  "type": "Example",
  "number": "9.6.1",
  "title": "Power Series from Geometric Series.",
  "body": "Power Series from Geometric Series \n                Let\n                 .\n                Then the domain of   is   and for   in this interval we have\n                 .\n               "
},
{
  "id": "example-finding-a-power-series-representation",
  "level": "2",
  "url": "section-representing-functions-as-power-series.html#example-finding-a-power-series-representation",
  "type": "Example",
  "number": "9.6.2",
  "title": "Finding a Power Series Representation.",
  "body": "Finding a Power Series Representation \n                Find a power series representation for   and state the interval over which it is valid.\n               \n                We'll try to relate this to the series in  :\n                 .\n                This representation is valid for  , or for   in the interval  .\n               "
},
{
  "id": "theorem-differentiation-and-integration-of-power-series",
  "level": "2",
  "url": "section-representing-functions-as-power-series.html#theorem-differentiation-and-integration-of-power-series",
  "type": "Theorem",
  "number": "9.6.3",
  "title": "Differentiation and Integration of Power Series.",
  "body": "Differentiation and Integration of Power Series \n                Suppose the power series   has radius of convergence  , and let   denote the series on the interval  .\n                Then   is differentiable on   and\n                 \n                or in other words\n                 .\n                Similarly,\n                 .\n                Both of these series have radius of convergence  .\n               "
},
{
  "id": "example-power-series-for-the-logarithm",
  "level": "2",
  "url": "section-representing-functions-as-power-series.html#example-power-series-for-the-logarithm",
  "type": "Example",
  "number": "9.6.4",
  "title": "Power Series for the Logarithm.",
  "body": "Power Series for the Logarithm \n                Find a power series representation of   centered at   and its interval of convergence.\n               \n                Since  , we can integrate the series for   to get the series for the logarithm.\n                Doing so, we get\n                 .\n                The series on the right has radius of convergence   and interval of convergence   by  .\n                To find  , we can substitute   into the equation (which is valid!) to get\n                 .\n                So  , and\n                 .\n                Plugging in  , we get the series\n                 .\n               "
},
{
  "id": "section-taylor-and-maclaurin-series",
  "level": "1",
  "url": "section-taylor-and-maclaurin-series.html",
  "type": "Section",
  "number": "9.7",
  "title": "Taylor and Maclaurin Series",
  "body": "Taylor and Maclaurin Series \n          In   we found how to obtain power series using the geometric series.\n          What we'll do in this section is determine how to find more general power series.\n          To start, suppose we can represent   as a power series centered at some number  :\n           \n          Then this representation is valid on some interval  .\n          Our goal is to find what the coefficients   are.\n         \n          We'll start with the first coefficient  .\n          We can find it very easily by setting   to get\n           .\n          So the first coefficient  must  be equal to  .\n          Now we'll try to find  , which we can do by differentiating:\n           ,\n          which is still valid for  .\n          Now set   again to obtain\n           .\n         \n          Now differentiate again to get\n           \n          which gives\n           .\n          Similarly,\n           .\n          We can continue this process in general to get the following theorem.\n         Taylor's Formula Taylor series Maclaurin series Maclaurin Series for the Exponential \n                Find the Maclaurin series for  .\n               \n                If we let  , then the Maclaurin series is\n                 \n                where\n                 .\n                So the Maclaurin series is\n                 .\n               \n            gives us the Taylor series about   for  , but at the moment we don't know if it actually equals  .\n          However, if we differentiate the series we get the same series back.\n          In other words, the Taylor series of    is its own derivative , which is a promising sign.\n         Taylor Series from the Exponential \n                Assuming that   equals its Taylor series, find the Maclaurin series for  .\n                Also, find the   derivative of   at  .\n               \n                We could use   to find the Maclaurin series for  , but it's far, far easier to use the series for  :\n                 .\n               \n                It turns out that this lets us find derivatives at   incredibly quickly.\n                If we let  , then it follows that   is the coefficient of   in the power series for  .\n                Therefore\n                 .\n               Lagrange remainder formula Maclaurin Series for Cosine \n                Find the Maclaurin series for   and show that   equals its Maclaurin series for all  .\n               \n                Using  , the Taylor series for   at   is given by\n                 .\n                So to find this series we need to find the derivatives of cosine at  :\n                 \n                and so on.\n                So the Maclaurin series for   is given by\n                 .\n               \n                To express this using sigma notation, note that this series has only even powers of  .\n                Hence the sum should look like  .\n                Looking at the pattern of the coefficients here, we can rewrite this as\n                 .\n                Using the ratio test, we can also show that this series converges for all  .\n                To show that this series actually equals  , we need to consider the remainder term\n                 .\n               \n                We don't know what exactly   is, except that it's in some interval around  .\n                However, we do know that  , which means that the remainder satisfies\n                 .\n                Therefore   equals its Maclaurin series.\n               \n          Now that we know how to express   as a power series, we can do the same for  .\n         Maclaurin Series for Sine \n                Find the Maclaurin series for  .\n               \n          Knowing a power series representation for a function makes calculus with that function extremely straightforward, at least if you're willing to use series.\n         Computing a Definite Integral \n                Use power series to find  , and find an approximation within   of the exact value.\n               \n                Using the power series for   from  , we have\n                 .\n                This is an alternating series, so by the alternating series test the partial sum   is always within\n                 \n                of the exact value.\n                So if we want to get enough terms of the series to be within   of the exact value, we need to pick   so that\n                 ,\n                which occurs at  .\n                So\n                 .\n                This is within about   of the exact value.\n               Euler's Formula Euler's Formula \n                Let  .\n                Then  .\n               \n                We can try to use power series to make sense of  .\n                Our idea is that since the power series for   is valid for all  , it should be valid for all   as well, giving\n                 .\n                In particular,\n                 .\n               "
},
{
  "id": "theorem-taylor-s-formula",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#theorem-taylor-s-formula",
  "type": "Theorem",
  "number": "9.7.1",
  "title": "Taylor's Formula.",
  "body": "Taylor's Formula Taylor series "
},
{
  "id": "p-1014",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#p-1014",
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
  "body": "Maclaurin Series for the Exponential \n                Find the Maclaurin series for  .\n               \n                If we let  , then the Maclaurin series is\n                 \n                where\n                 .\n                So the Maclaurin series is\n                 .\n               "
},
{
  "id": "example-taylor-series-from-the-exponential",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#example-taylor-series-from-the-exponential",
  "type": "Example",
  "number": "9.7.3",
  "title": "Taylor Series from the Exponential.",
  "body": "Taylor Series from the Exponential \n                Assuming that   equals its Taylor series, find the Maclaurin series for  .\n                Also, find the   derivative of   at  .\n               \n                We could use   to find the Maclaurin series for  , but it's far, far easier to use the series for  :\n                 .\n               \n                It turns out that this lets us find derivatives at   incredibly quickly.\n                If we let  , then it follows that   is the coefficient of   in the power series for  .\n                Therefore\n                 .\n               "
},
{
  "id": "p-1021",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#p-1021",
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
  "body": "Maclaurin Series for Cosine \n                Find the Maclaurin series for   and show that   equals its Maclaurin series for all  .\n               \n                Using  , the Taylor series for   at   is given by\n                 .\n                So to find this series we need to find the derivatives of cosine at  :\n                 \n                and so on.\n                So the Maclaurin series for   is given by\n                 .\n               \n                To express this using sigma notation, note that this series has only even powers of  .\n                Hence the sum should look like  .\n                Looking at the pattern of the coefficients here, we can rewrite this as\n                 .\n                Using the ratio test, we can also show that this series converges for all  .\n                To show that this series actually equals  , we need to consider the remainder term\n                 .\n               \n                We don't know what exactly   is, except that it's in some interval around  .\n                However, we do know that  , which means that the remainder satisfies\n                 .\n                Therefore   equals its Maclaurin series.\n               "
},
{
  "id": "example-maclaurin-series-for-sine",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#example-maclaurin-series-for-sine",
  "type": "Example",
  "number": "9.7.5",
  "title": "Maclaurin Series for Sine.",
  "body": "Maclaurin Series for Sine \n                Find the Maclaurin series for  .\n               "
},
{
  "id": "example-computing-a-definite-integral",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#example-computing-a-definite-integral",
  "type": "Example",
  "number": "9.7.6",
  "title": "Computing a Definite Integral.",
  "body": "Computing a Definite Integral \n                Use power series to find  , and find an approximation within   of the exact value.\n               \n                Using the power series for   from  , we have\n                 .\n                This is an alternating series, so by the alternating series test the partial sum   is always within\n                 \n                of the exact value.\n                So if we want to get enough terms of the series to be within   of the exact value, we need to pick   so that\n                 ,\n                which occurs at  .\n                So\n                 .\n                This is within about   of the exact value.\n               "
},
{
  "id": "p-1031",
  "level": "2",
  "url": "section-taylor-and-maclaurin-series.html#p-1031",
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
  "title": "Euler's Formula.",
  "body": "Euler's Formula \n                Let  .\n                Then  .\n               \n                We can try to use power series to make sense of  .\n                Our idea is that since the power series for   is valid for all  , it should be valid for all   as well, giving\n                 .\n                In particular,\n                 .\n               "
},
{
  "id": "section-parametric-equations",
  "level": "1",
  "url": "section-parametric-equations.html",
  "type": "Section",
  "number": "10.1",
  "title": "Parametric Equations",
  "body": "Parametric Equations trajectory parametric equations parametric curves \n      produce the following parametric curve in the  -plane.\n     The graph of   for  . \n      Note that the parametric curve above has a  starting point  and an  ending point , determined by the interval of values for  .\n      When plotting parametric curves, we'll often specify a corresponding interval of values for  .\n      This curve can also be plotted relatively painlessly with SymPy, as below:\n     scalars \n      Plotting points and plugging them into parametric equations can be tedious.\n      Another way to describe a parametric curve is to eliminate parameters.\n     Eliminating parameters \n          Rewrite the parametric equations\n         \n        as a single  Cartesian  equation, i.e., eliminate the parameter  .\n       \n          First, solve for   in the second equation to get  .\n          If we plug this into the first equation, we get an equation in   and   alone:\n         \n          We can see from this equation that the original parametric equations should trace out a rightward opening parabola.\n          Note however that this equation tells us nothing about which portion of the parabola is traced out.\n         Parameterizing a Line Segment \n          Give a set of parametric equations and a corresponding interval that trace out the line segment starting at   and ending at  .\n         \n          First, we'll try to figure out what our equations should look like.\n          We know that   starts at   and   starts at   on this segment, so a reasonable guess is\n           \n          for some unknown constants   and  .\n          To find   and  , we'll specify the interval of values we want   to range over.\n          To make things easier, let's fix   between   and  .\n          Then at   we need to have\n           \n          which gives   and  .\n          Therefore the line segment is parameterized by\n           .\n         \n          We can also rewrite these equations in terms of the starting and ending values of   and  .\n          In particular, we have\n           .\n          To see why this works, note that the second term in each equation vanishes at  , leaving the starting value for each coordinate.\n          Likewise, the first term in each equation vanishes at  , leaving the terminal value for each coordinate.\n          Expanding the equations gives the previous result.\n          Note that this method only works if you select   as your interval of values for  .\n         \n      Parametric equations are especially useful for tracing movement along a curve that is not the graph of a function, like a circle.\n      In particular, a circle of radius   centered at   is traced out by the parametric equations\n       \n      over the interval  .\n     Parametric Equations for Motion on a Circle \n          Find parametric equations and a corresponding interval of values for   that describe a particle moving along a circle of radius   centered at   and starting at   moving  clockwise  three times around the circle.\n         \n          This problem has a lot to unpack, but we know the basic form of our equations will be\n           .\n          Since we want to start at  , we can let   be our starting value.\n          And since we want to move around the circle   times, we'll let   vary from   to  .\n          Finally, to get clockwise motion we need to replace   with  , getting\n           \n          for  .\n         Parametric Equations for an Ellipse \n          Find parametric equations for the ellipse\n           .\n         \n          These equations will look much like the parametric equations for a circle:\n           \n          for  .\n         "
},
{
  "id": "p-1035",
  "level": "2",
  "url": "section-parametric-equations.html#p-1035",
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
  "body": "The graph of   for  . "
},
{
  "id": "p-1038",
  "level": "2",
  "url": "section-parametric-equations.html#p-1038",
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
  "body": "Eliminating parameters \n          Rewrite the parametric equations\n         \n        as a single  Cartesian  equation, i.e., eliminate the parameter  .\n       \n          First, solve for   in the second equation to get  .\n          If we plug this into the first equation, we get an equation in   and   alone:\n         \n          We can see from this equation that the original parametric equations should trace out a rightward opening parabola.\n          Note however that this equation tells us nothing about which portion of the parabola is traced out.\n         "
},
{
  "id": "example-parameterizing-a-line-segment",
  "level": "2",
  "url": "section-parametric-equations.html#example-parameterizing-a-line-segment",
  "type": "Example",
  "number": "10.1.3",
  "title": "Parameterizing a Line Segment.",
  "body": "Parameterizing a Line Segment \n          Give a set of parametric equations and a corresponding interval that trace out the line segment starting at   and ending at  .\n         \n          First, we'll try to figure out what our equations should look like.\n          We know that   starts at   and   starts at   on this segment, so a reasonable guess is\n           \n          for some unknown constants   and  .\n          To find   and  , we'll specify the interval of values we want   to range over.\n          To make things easier, let's fix   between   and  .\n          Then at   we need to have\n           \n          which gives   and  .\n          Therefore the line segment is parameterized by\n           .\n         \n          We can also rewrite these equations in terms of the starting and ending values of   and  .\n          In particular, we have\n           .\n          To see why this works, note that the second term in each equation vanishes at  , leaving the starting value for each coordinate.\n          Likewise, the first term in each equation vanishes at  , leaving the terminal value for each coordinate.\n          Expanding the equations gives the previous result.\n          Note that this method only works if you select   as your interval of values for  .\n         "
},
{
  "id": "example-parametric-equations-for-motion-on-a-circle",
  "level": "2",
  "url": "section-parametric-equations.html#example-parametric-equations-for-motion-on-a-circle",
  "type": "Example",
  "number": "10.1.4",
  "title": "Parametric Equations for Motion on a Circle.",
  "body": "Parametric Equations for Motion on a Circle \n          Find parametric equations and a corresponding interval of values for   that describe a particle moving along a circle of radius   centered at   and starting at   moving  clockwise  three times around the circle.\n         \n          This problem has a lot to unpack, but we know the basic form of our equations will be\n           .\n          Since we want to start at  , we can let   be our starting value.\n          And since we want to move around the circle   times, we'll let   vary from   to  .\n          Finally, to get clockwise motion we need to replace   with  , getting\n           \n          for  .\n         "
},
{
  "id": "example-parametric-equations-for-an-ellipse",
  "level": "2",
  "url": "section-parametric-equations.html#example-parametric-equations-for-an-ellipse",
  "type": "Example",
  "number": "10.1.5",
  "title": "Parametric Equations for an Ellipse.",
  "body": "Parametric Equations for an Ellipse \n          Find parametric equations for the ellipse\n           .\n         \n          These equations will look much like the parametric equations for a circle:\n           \n          for  .\n         "
},
{
  "id": "section-calculus-and-parametric-curves",
  "level": "1",
  "url": "section-calculus-and-parametric-curves.html",
  "type": "Section",
  "number": "10.2",
  "title": "Calculus and Parametric Curves",
  "body": "Calculus and Parametric Curves Tangent Lines to Parametric Curves \n        We have an idea of how to represent curves in the  -plane using parametric equations.\n        What we'd like to do now is to figure out how to do calculus with parametric equations.\n        To start, we'll find the slope of a parametric curve at some value  .\n        Suppose that\n         .\n        Then we can find the slope   using the chain rule:\n         \n        and so  , assuming that  .\n       Cusps on a Cycloid cycloid brachistochrone curve of fastest descent \n            First, note that a curve cannot be differentiable at a cusp.\n            So we can try to find the cusps by looking at where   fails to exist.\n            This occurs precisely at   for any integer  .\n            Hence the cycloid should have a cusp at these values of  .\n           Area Under Parametric Curves \n        We can also find areas by using  -substitution and the Fundamental Theorem of Calculus.\n        If  , then the area under the curve   from   to   is given by  .\n        If we instead have parametric equations\n         \n        then   and  . If the curve goes from   to   exactly once as   goes from   to  , then the area under the curve is given by\n         \n       Area of a Circle Suppose we want to find the area of a circle of radius  . We can do so by parameterizing such a circle with \n          Then the area of the circle is given by\n           \n          One thing to watch out for in the previous calculation is that the limits went from   to  . This was because of the particular parameterization we chose.\n         Arc Length of Parametric Curves Now we move on to finding lengths of parametric curves. We won't derive the formula here, but it essentially follows from the Pythagorean theorem. We'll see a motivation of the formula later using vector calculus. But for now, suppose we have Then the length of the associated parametric curve from   to   is given by  Arc Length of a Parametric Curve Let   and   for   Then the length of this curve is given by SUGGESTED PROBLEMS: 1, 3, 13, 37 "
},
{
  "id": "example-cusps-on-a-cycloid",
  "level": "2",
  "url": "section-calculus-and-parametric-curves.html#example-cusps-on-a-cycloid",
  "type": "Example",
  "number": "10.2.1",
  "title": "Cusps on a Cycloid.",
  "body": "Cusps on a Cycloid cycloid brachistochrone curve of fastest descent \n            First, note that a curve cannot be differentiable at a cusp.\n            So we can try to find the cusps by looking at where   fails to exist.\n            This occurs precisely at   for any integer  .\n            Hence the cycloid should have a cusp at these values of  .\n           "
},
{
  "id": "example-area-of-a-circle",
  "level": "2",
  "url": "section-calculus-and-parametric-curves.html#example-area-of-a-circle",
  "type": "Example",
  "number": "10.2.2",
  "title": "Area of a Circle.",
  "body": "Area of a Circle Suppose we want to find the area of a circle of radius  . We can do so by parameterizing such a circle with \n          Then the area of the circle is given by\n           \n          One thing to watch out for in the previous calculation is that the limits went from   to  . This was because of the particular parameterization we chose.\n         "
},
{
  "id": "example-arc-length-of-a-parametric-curve",
  "level": "2",
  "url": "section-calculus-and-parametric-curves.html#example-arc-length-of-a-parametric-curve",
  "type": "Example",
  "number": "10.2.3",
  "title": "Arc Length of a Parametric Curve.",
  "body": "Arc Length of a Parametric Curve Let   and   for   Then the length of this curve is given by "
},
{
  "id": "section-polar-coordinates",
  "level": "1",
  "url": "section-polar-coordinates.html",
  "type": "Section",
  "number": "10.3",
  "title": "Polar Coordinates",
  "body": "Polar Coordinates Introducing Polar Coordinates Cartesian rectangular \n        A circle can be described as the set of all points some fixed distance   from a given point, and we can specify any point on the circle by using an angle  :\n       Using distance and angle to specify a point. polar plane radial coordinate  pole angular coordinate polar axis The polar plane. \n        In polar coordinates, positive   correspond to counterclockwise direction, and negative   correspond to clockwise direction.\n        We also allow for   to be negative: this just means go in the direction opposite of  .\n       Plotting polar coordinates \n          Suppose we want to plot the points   and  \n          We can do so in the polar plane by remembering that the first coordinate is distance from the pole, and the second coordinate is direction from the polar axis.\n          If we plot these points, we see that   and   actually represent the same point. This is typical of polar coordinates: every point has, in general, infinitely many representations.\n         The plot from  . Converting Coordinates \n        If we want to use polar coordinates, then it'd be helpful to know how to convert between Cartesian (rectangular) coordinates and polar coordinates.\n        The following diagram will help us to make these conversions.\n       Converting between Cartesian and polar coordinates. So in terms of  , we have \n        Going in the other direction, the Pythagorean theorem tells us that  , while  .\n       Converting polar to Cartesian Suppose we want to convert the point   in polar coordinates to Cartesian coordinates  . Then we have and so the Cartesian point is  Converting Cartesian to polar Suppose we now want to convert the point   in Cartesian coordinates to polar coordinates. Then finding   is relatively straightforward:  Finding   requires a bit more care. We know that   has to satisfy  . One choice that makes this work is  . However, this is incorrect! Whatever   is needs to be consistent with the fact that our point lies in the second quadrant. So we'll pick   instead. Hence one way to write the point in polar coordinates is given by  Converting equations Consider the polar equation  . We can convert this into a Cartesian equation using the above formulas. In particular, we use   and  . So   and the equation becomes Polar Curves Now we move on to graphing polar equations. Graphs of constants in polar coordinates In Cartesian coordinates, the graphs of   and   give horizontal and vertical lines, respectively. In polar coordinates, the graphs of   and   have simple descriptions as well. The graph of   is just the set of all points   units away from the pole, so it's just a circle of radius   centered at the pole. Likewise, the graph of   is the set of all points that make an angle of   with the polar axis, so it's just a line through the pole. Graphs from Cartesian equations In some cases it's beneficial to convert a polar equation to a Cartesian equation. The Cartesian equation may have a recognizable form that helps us to identify the corresponding polar graph. For example, suppose we want to describe the graph of   for some constant  . Then we can convert it to a Cartesian equation, in particular If we complete the square, we get  , which describes a circle centered at   (in the  -plane) and with radius  . In the polar plane, this is a circle of radius   centered at   Similarly,   describes a circle of radius   centered at  . Another circle Suppose we want to graph  . From the previous example, we know that this will be a circle of radius   centered at  . See the following figure. The circle from  . Cartesian to Polar Method \n        Graphing polar equations can be tricky, because it's easy to miss aspects of the graph unless you're careful.\n        A useful method for graphing polar equations involves treating them as Cartesian equations first to get a better sense of how the graph behaves.\n       Three leaf rose \n          Suppose we want to graph  .\n          We don't know what this looks like in the polar plane yet, but we have a pretty good idea of how it looks when treated as a Cartesian equation in the  -plane (which we view as different from the polar plane!):\n         The graph of   as a Cartesian equation. \n          So we see that at   goes from   to  ,   decreases from   to  , hitting   along the way at  .\n          to  . \n          Now, as   goes from   to     will go from   to  , hitting   at  :\n          to  . \n          Continuing in this manner lets us complete the graph:\n         The graph of   in the polar plane. \n        SUGGESTED PROBLEMS: 1, 3, 11, 23, 37\n       "
},
{
  "id": "p-1061",
  "level": "2",
  "url": "section-polar-coordinates.html#p-1061",
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
  "body": "Using distance and angle to specify a point. "
},
{
  "id": "p-1063",
  "level": "2",
  "url": "section-polar-coordinates.html#p-1063",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polar plane radial coordinate  pole angular coordinate polar axis "
},
{
  "id": "figure-polar-plane",
  "level": "2",
  "url": "section-polar-coordinates.html#figure-polar-plane",
  "type": "Figure",
  "number": "10.3.2",
  "title": "",
  "body": "The polar plane. "
},
{
  "id": "example-plotting-polar-coordinates",
  "level": "2",
  "url": "section-polar-coordinates.html#example-plotting-polar-coordinates",
  "type": "Example",
  "number": "10.3.3",
  "title": "Plotting polar coordinates.",
  "body": "Plotting polar coordinates \n          Suppose we want to plot the points   and  \n          We can do so in the polar plane by remembering that the first coordinate is distance from the pole, and the second coordinate is direction from the polar axis.\n          If we plot these points, we see that   and   actually represent the same point. This is typical of polar coordinates: every point has, in general, infinitely many representations.\n         "
},
{
  "id": "figure-example-polar-coords",
  "level": "2",
  "url": "section-polar-coordinates.html#figure-example-polar-coords",
  "type": "Figure",
  "number": "10.3.4",
  "title": "",
  "body": "The plot from  . "
},
{
  "id": "figure-cartesian-to-polar",
  "level": "2",
  "url": "section-polar-coordinates.html#figure-cartesian-to-polar",
  "type": "Figure",
  "number": "10.3.5",
  "title": "",
  "body": "Converting between Cartesian and polar coordinates. "
},
{
  "id": "example-converting-polar-to-cartesian",
  "level": "2",
  "url": "section-polar-coordinates.html#example-converting-polar-to-cartesian",
  "type": "Example",
  "number": "10.3.6",
  "title": "Converting polar to Cartesian.",
  "body": "Converting polar to Cartesian Suppose we want to convert the point   in polar coordinates to Cartesian coordinates  . Then we have and so the Cartesian point is  "
},
{
  "id": "example-converting-cartesian-to-polar",
  "level": "2",
  "url": "section-polar-coordinates.html#example-converting-cartesian-to-polar",
  "type": "Example",
  "number": "10.3.7",
  "title": "Converting Cartesian to polar.",
  "body": "Converting Cartesian to polar Suppose we now want to convert the point   in Cartesian coordinates to polar coordinates. Then finding   is relatively straightforward:  Finding   requires a bit more care. We know that   has to satisfy  . One choice that makes this work is  . However, this is incorrect! Whatever   is needs to be consistent with the fact that our point lies in the second quadrant. So we'll pick   instead. Hence one way to write the point in polar coordinates is given by  "
},
{
  "id": "example-converting-equations",
  "level": "2",
  "url": "section-polar-coordinates.html#example-converting-equations",
  "type": "Example",
  "number": "10.3.8",
  "title": "Converting equations.",
  "body": "Converting equations Consider the polar equation  . We can convert this into a Cartesian equation using the above formulas. In particular, we use   and  . So   and the equation becomes "
},
{
  "id": "example-graphs-of-constants-in-polar-coordinates",
  "level": "2",
  "url": "section-polar-coordinates.html#example-graphs-of-constants-in-polar-coordinates",
  "type": "Example",
  "number": "10.3.9",
  "title": "Graphs of constants in polar coordinates.",
  "body": "Graphs of constants in polar coordinates In Cartesian coordinates, the graphs of   and   give horizontal and vertical lines, respectively. In polar coordinates, the graphs of   and   have simple descriptions as well. The graph of   is just the set of all points   units away from the pole, so it's just a circle of radius   centered at the pole. Likewise, the graph of   is the set of all points that make an angle of   with the polar axis, so it's just a line through the pole. "
},
{
  "id": "example-graphs-from-cartesian-equations",
  "level": "2",
  "url": "section-polar-coordinates.html#example-graphs-from-cartesian-equations",
  "type": "Example",
  "number": "10.3.10",
  "title": "Graphs from Cartesian equations.",
  "body": "Graphs from Cartesian equations In some cases it's beneficial to convert a polar equation to a Cartesian equation. The Cartesian equation may have a recognizable form that helps us to identify the corresponding polar graph. For example, suppose we want to describe the graph of   for some constant  . Then we can convert it to a Cartesian equation, in particular If we complete the square, we get  , which describes a circle centered at   (in the  -plane) and with radius  . In the polar plane, this is a circle of radius   centered at   Similarly,   describes a circle of radius   centered at  . "
},
{
  "id": "example-another-circle",
  "level": "2",
  "url": "section-polar-coordinates.html#example-another-circle",
  "type": "Example",
  "number": "10.3.11",
  "title": "Another circle.",
  "body": "Another circle Suppose we want to graph  . From the previous example, we know that this will be a circle of radius   centered at  . See the following figure. "
},
{
  "id": "figure-cosine-polar-circle",
  "level": "2",
  "url": "section-polar-coordinates.html#figure-cosine-polar-circle",
  "type": "Figure",
  "number": "10.3.12",
  "title": "",
  "body": "The circle from  . "
},
{
  "id": "example-three-leaf-rose",
  "level": "2",
  "url": "section-polar-coordinates.html#example-three-leaf-rose",
  "type": "Example",
  "number": "10.3.13",
  "title": "Three leaf rose.",
  "body": "Three leaf rose \n          Suppose we want to graph  .\n          We don't know what this looks like in the polar plane yet, but we have a pretty good idea of how it looks when treated as a Cartesian equation in the  -plane (which we view as different from the polar plane!):\n         The graph of   as a Cartesian equation. \n          So we see that at   goes from   to  ,   decreases from   to  , hitting   along the way at  .\n          to  . \n          Now, as   goes from   to     will go from   to  , hitting   at  :\n          to  . \n          Continuing in this manner lets us complete the graph:\n         The graph of   in the polar plane. "
},
{
  "id": "section-calculus-and-polar-coordinates",
  "level": "1",
  "url": "section-calculus-and-polar-coordinates.html",
  "type": "Section",
  "number": "10.4",
  "title": "Calculus and Polar Coordinates",
  "body": "Calculus and Polar Coordinates Areas of Polar Curves \n        To find the area of a region swept out by a polar curve, we need to reinvent the integral so to speak.\n        In Cartesian coordinates, the integral was based on using rectangles to approximate areas. For polar coordinates, it makes more sense to use circular sectors.\n       \n        Consider a region   bounded by the polar curve  :\n       The polar region  . \n        To find the area of this region, we'll approximate it using circular sectors.\n        Since we want to find the area between   and  , we'll break the interval   into   subintervals   of equal length  , with\n       Approximating the region with circular sectors. The area of each slice is given by For one of our slices, this takes the form Adding these areas up gives us the approximate area of the region. So we can say that As   gets smaller, this approximation should become exact. So we can say This limit is exactly the definition of an integral! So we have We can summarize this in the following theorem. Area in Polar Coordinates polar coordinates area Suppose that   is a region bounded by the polar curves   and   between   and  . If   and   are continuous and   for   then the area of   is given by\n           Area bounded by a cardioid Consider the cardioid The name will become clearer once we graph this.   . The area is given by To find this, we'll need to figure out the limits of integration. For polar plots, the best way to do this is by graphing. We'll graph   by using the Cartesian to polar methods described in  . First, we treat this as a Cartesian curve in the  -plane and graph it to get  as a Cartesian equation. Now we can plot the corresponding polar curve:  as a polar equation. The important thing to notice is that we trace out the curve exactly once as   goes from   to  , so our limits should be   and  . Hence the area of this region is given by Area inside a rose and outside a circle As another example of the use of  , we'll find the area of the region contained by the polar curves   and outside the circle  . Again, a great way to start this problem is to graph the region under consideration. Region contained between polar curves. With a little bit of work, we can see that the area of one of these shaded regions is given by and so the area of the entire region is Arc Length in Polar Coordinates Our goal now is to find the length of a polar curve  . From   we know how to find the length of a parametric curve, and a polar curve is really just a parametric curve with parametric equations Using the formula   and simplifying, we get the following result. Arc Length of a Polar Curve polar coordinates arc length The length   of a polar curve   from   to   is given by\n           Arc length of a leaf Let  . Then this gives a four-leaf rose in the polar plane. We want to find the length of one leaf of this rose. As usual, it's a good idea to graph this curve first. The four leaf rose  . \n          One leaf of the rose should be captured as   varies from   to  , so using   we can find the length of this leaf:\n         \n        SUGGESTED PROBLEMS: 1, 3, 7, 9, 15, 19, 35\n       "
},
{
  "id": "figure-polar-region",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#figure-polar-region",
  "type": "Figure",
  "number": "10.4.1",
  "title": "",
  "body": "The polar region  . "
},
{
  "id": "figure-polar-region-1",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#figure-polar-region-1",
  "type": "Figure",
  "number": "10.4.2",
  "title": "",
  "body": "Approximating the region with circular sectors. "
},
{
  "id": "theorem-area-in-polar-coordinates",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#theorem-area-in-polar-coordinates",
  "type": "Theorem",
  "number": "10.4.3",
  "title": "Area in Polar Coordinates.",
  "body": "Area in Polar Coordinates polar coordinates area Suppose that   is a region bounded by the polar curves   and   between   and  . If   and   are continuous and   for   then the area of   is given by\n           "
},
{
  "id": "example-area-bounded-by-a-cardioid",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#example-area-bounded-by-a-cardioid",
  "type": "Example",
  "number": "10.4.4",
  "title": "Area bounded by a cardioid.",
  "body": "Area bounded by a cardioid Consider the cardioid The name will become clearer once we graph this.   . The area is given by To find this, we'll need to figure out the limits of integration. For polar plots, the best way to do this is by graphing. We'll graph   by using the Cartesian to polar methods described in  . First, we treat this as a Cartesian curve in the  -plane and graph it to get  as a Cartesian equation. Now we can plot the corresponding polar curve:  as a polar equation. The important thing to notice is that we trace out the curve exactly once as   goes from   to  , so our limits should be   and  . Hence the area of this region is given by "
},
{
  "id": "example-area-inside-a-rose-and-outside-a-circle",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#example-area-inside-a-rose-and-outside-a-circle",
  "type": "Example",
  "number": "10.4.7",
  "title": "Area inside a rose and outside a circle.",
  "body": "Area inside a rose and outside a circle As another example of the use of  , we'll find the area of the region contained by the polar curves   and outside the circle  . Again, a great way to start this problem is to graph the region under consideration. Region contained between polar curves. With a little bit of work, we can see that the area of one of these shaded regions is given by and so the area of the entire region is "
},
{
  "id": "theorem-arc-length-of-a-polar-curve",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#theorem-arc-length-of-a-polar-curve",
  "type": "Theorem",
  "number": "10.4.9",
  "title": "Arc Length of a Polar Curve.",
  "body": "Arc Length of a Polar Curve polar coordinates arc length The length   of a polar curve   from   to   is given by\n           "
},
{
  "id": "example-arc-length-of-a-leaf",
  "level": "2",
  "url": "section-calculus-and-polar-coordinates.html#example-arc-length-of-a-leaf",
  "type": "Example",
  "number": "10.4.10",
  "title": "Arc length of a leaf.",
  "body": "Arc length of a leaf Let  . Then this gives a four-leaf rose in the polar plane. We want to find the length of one leaf of this rose. As usual, it's a good idea to graph this curve first. The four leaf rose  . \n          One leaf of the rose should be captured as   varies from   to  , so using   we can find the length of this leaf:\n         "
},
{
  "id": "section-coordinates-in-3-space",
  "level": "1",
  "url": "section-coordinates-in-3-space.html",
  "type": "Section",
  "number": "11.1",
  "title": "Coordinates in 3-Space",
  "body": "Coordinates in 3-Space -coordinates coordinate axes octants three-dimensional coordinate system projections Projection \n            Find the projection of the point   onto the  -plane.\n           \n            Here's how we can find the projection of the point   onto the  -plane.\n            Note that the  -plane is just the set of all points with  -coordinate equation to  , so the projection of   onto the  -plane is the point  .\n           Equations in space \n            Sketch   in  .\n           plane More equations in space \n            Sketch   in  .\n           \n            We can do so as follows.\n            First, sketch   in the  -plane, which will just be the line  .\n            Then the surface in   represented by   is actually the surface consisting of all points directly above and directly below the line   in the  -plane.\n           Intersection of a sphere and a plane \n            Describe the intersection of the sphere given by the equation   with the  -plane.\n           \n            We can do this without too much trouble if we remember that the  -plane is just the set of all points with  -coordinate equal to  .\n            So the intersection of this sphere with the  -plane traces out the curve   in the  -plane, which is just the point  .\n           Intersection of the sphere   with the  -plane. The Distance Formula \n        Recall that the distance between two points   and   in   (the  -plane) is given by\n       \n        This is proved using the Pythagorean theorem. We can do the same exact thing in  !\n       Distances in Space distance formula three dimensions \n            Let   and   be two points in  .\n            Then the distance between these two points,  , is given by\n             \n           Computing distances \n            lets us find the distance between the points   and   as follows:\n         \n        One important use of the distance formula in   is that it lets us find equations of spheres.\n        The equation of a sphere of radius   and center   is given by\n         \n        which is more commonly written as\n         \n       Equation of a sphere \n          The equation   represents a sphere in  . To see how, we can rearrange the equation and complete the square to get\n         \n          So this equation describes a sphere of radius   centered at  .\n         Spherical shells \n          We can also use inequalities to describe regions in addition to equalities. For example,   describes the region contained between the sphere of radius   and the sphere of radius  , both centered at the origin.\n         The spherical shells  . "
},
{
  "id": "p-1109",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#p-1109",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate axes "
},
{
  "id": "p-1110",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#p-1110",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "octants three-dimensional coordinate system "
},
{
  "id": "p-1111",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#p-1111",
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
  "body": "Projection \n            Find the projection of the point   onto the  -plane.\n           \n            Here's how we can find the projection of the point   onto the  -plane.\n            Note that the  -plane is just the set of all points with  -coordinate equation to  , so the projection of   onto the  -plane is the point  .\n           "
},
{
  "id": "example-equations-in-space",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-equations-in-space",
  "type": "Example",
  "number": "11.1.2",
  "title": "Equations in space.",
  "body": "Equations in space \n            Sketch   in  .\n           plane "
},
{
  "id": "example-more-equations-in-space",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-more-equations-in-space",
  "type": "Example",
  "number": "11.1.3",
  "title": "More equations in space.",
  "body": "More equations in space \n            Sketch   in  .\n           \n            We can do so as follows.\n            First, sketch   in the  -plane, which will just be the line  .\n            Then the surface in   represented by   is actually the surface consisting of all points directly above and directly below the line   in the  -plane.\n           "
},
{
  "id": "example-intersection-of-a-sphere-and-a-plane",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-intersection-of-a-sphere-and-a-plane",
  "type": "Example",
  "number": "11.1.4",
  "title": "Intersection of a sphere and a plane.",
  "body": "Intersection of a sphere and a plane \n            Describe the intersection of the sphere given by the equation   with the  -plane.\n           \n            We can do this without too much trouble if we remember that the  -plane is just the set of all points with  -coordinate equal to  .\n            So the intersection of this sphere with the  -plane traces out the curve   in the  -plane, which is just the point  .\n           "
},
{
  "id": "figure-sphere-xz-plane-intersection",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#figure-sphere-xz-plane-intersection",
  "type": "Figure",
  "number": "11.1.5",
  "title": "",
  "body": "Intersection of the sphere   with the  -plane. "
},
{
  "id": "theorem-distances-in-space",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#theorem-distances-in-space",
  "type": "Theorem",
  "number": "11.1.6",
  "title": "Distances in Space.",
  "body": "Distances in Space distance formula three dimensions \n            Let   and   be two points in  .\n            Then the distance between these two points,  , is given by\n             \n           "
},
{
  "id": "example-computing-distances",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-computing-distances",
  "type": "Example",
  "number": "11.1.7",
  "title": "Computing distances.",
  "body": "Computing distances \n            lets us find the distance between the points   and   as follows:\n         "
},
{
  "id": "example-equation-of-a-sphere",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-equation-of-a-sphere",
  "type": "Example",
  "number": "11.1.8",
  "title": "Equation of a sphere.",
  "body": "Equation of a sphere \n          The equation   represents a sphere in  . To see how, we can rearrange the equation and complete the square to get\n         \n          So this equation describes a sphere of radius   centered at  .\n         "
},
{
  "id": "example-spherical-shells",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#example-spherical-shells",
  "type": "Example",
  "number": "11.1.9",
  "title": "Spherical shells.",
  "body": "Spherical shells \n          We can also use inequalities to describe regions in addition to equalities. For example,   describes the region contained between the sphere of radius   and the sphere of radius  , both centered at the origin.\n         "
},
{
  "id": "figure-spherical-shells-radii-3-4",
  "level": "2",
  "url": "section-coordinates-in-3-space.html#figure-spherical-shells-radii-3-4",
  "type": "Figure",
  "number": "11.1.10",
  "title": "",
  "body": "The spherical shells  . "
},
{
  "id": "section-vectors",
  "level": "1",
  "url": "section-vectors.html",
  "type": "Section",
  "number": "11.2",
  "title": "Vectors",
  "body": "Vectors vector initial point terminal point A vector. equivalent equal Addition and Scalar Multiplication \n        Given two vectors  , we can add them to get the new vector\n       \n        So the vector   is obtained by moving the tail of   to the tip of   and then drawing a vector from the tail of   to the tip of  .\n       Vector addition. triangle law parallelogram law scalar multiplication Vector subtraction \n        Using the previous graph, we can compute  . We just need to scale the vectors properly and then add   to  .\n       Vector Components components position vector \n      So any vector in   can be represented using components by  .\n      Similarly, any vector in   can be represented as  .\n      Once you represent a vector in component form, addition and scalar multiplication is straightforward.\n     Vector addition with components \n        Let   and  . Then\n       \n      Finding magnitudes of vectors can also be done by applying the distance formula from   to the components of the vectors.\n      The magnitude of a vector   is denoted by   or  .\n      For example, the magnitude of   from the previous example is\n       \n     \n      Given a vector  \n       \n     A vector equation \n        We can use vectors to describe curves and surfaces. For example, let   and  . Let  . Then the set of all points   that satisfy the equation\n         \n        has a very nice description: it's just the sphere of radius   centered at  .\n       Finding components of vectors \n        Consider the points   and  . We want to find the components of the vector  . We can do this by translating   to the origin, which is done by subtracting from each coordinate of   the corresponding coordinate of  . So the vector   is given by\n       \n      In general, given   and   the vector   is given by\n     Properties of Vector Addition and Scalar Multiplication vectors properties of vector addition and scalar multiplication \n          Let   be vectors and let   be scalars. Then the following are true:\n         \n             .\n           \n             \n           \n             \n           \n             \n           \n             \n           \n             \n           .\n           \n             \n           \n             \n           Basis Vectors and Unit Vectors linear combination \n    These vectors are important enough that we'll give them a name: the  standard basis vectors .\n     Standard Basis Vectors vectors standard basis \n          The standard basis for   is the set  , where\n         orthogonal \n      These vectors are essentially designed to capture the \"coordinate directions\", and are plotted below.\n     The standard basis. \n      This also leads us to our next definition.\n     Unit Vectors vectors unit vectors \n          A vector   is a unit vector if  .\n         \n      Unit vectors are useful if we just need to indicate a direction, and we don't care about magnitude. Every nonzero vector can be rescaled to a unit vector: just divide the vector by its norm.\n     Direction from one point to another \n        Consider the points   and  . Then we can find the unit vector indicating the direction from   to  . First, set\n       \n        Then the unit vector that gives the direction from   to   is given by\n       A vector equation for the unit sphere \n        Using the concept of a unit vector, we can very easily describe the unit sphere The sphere of radius   centered at the origin.  using a vector equation. If we set  , then the unit sphere is just the set of all solutions of\n       Applications \n      Many physical quantities have both a direction and a magnitude, like velocity, acceleration and forces. Vectors are ideally suited to measure these quantities.\n     Weight of a chain \n        A still chain is fixed to two ends of a level divide. The tension of the chain at each fixed end can be represented by vectors pointing away from the chain. Call these tension forces   and  . Suppose we know that each force vector makes an angle of   with the ground on either side of the chain's fixed ends, and that the magnitude of each tension is  43 . Then we can use vector addition to find the weight of the chain.\n       resultant \n        or in other words\n       \n        What we need to find is  , which we can do without too much trouble if we can rewrite the tension vectors in component form. In fact, we have\n       \n        So it follows that\n       \n        Therefore the chain weighs  .\n       \n      SUGGESTED PROBLEMS: 1--17 odd, 23, 25, 27\n     "
},
{
  "id": "p-1128",
  "level": "2",
  "url": "section-vectors.html#p-1128",
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
  "body": "A vector. "
},
{
  "id": "p-1129",
  "level": "2",
  "url": "section-vectors.html#p-1129",
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
  "body": "Vector addition. "
},
{
  "id": "p-1132",
  "level": "2",
  "url": "section-vectors.html#p-1132",
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
  "body": "Vector subtraction \n        Using the previous graph, we can compute  . We just need to scale the vectors properly and then add   to  .\n       "
},
{
  "id": "p-1134",
  "level": "2",
  "url": "section-vectors.html#p-1134",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "components "
},
{
  "id": "p-1135",
  "level": "2",
  "url": "section-vectors.html#p-1135",
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
  "body": "Vector addition with components \n        Let   and  . Then\n       "
},
{
  "id": "example-a-vector-equation",
  "level": "2",
  "url": "section-vectors.html#example-a-vector-equation",
  "type": "Example",
  "number": "11.2.5",
  "title": "A vector equation.",
  "body": "A vector equation \n        We can use vectors to describe curves and surfaces. For example, let   and  . Let  . Then the set of all points   that satisfy the equation\n         \n        has a very nice description: it's just the sphere of radius   centered at  .\n       "
},
{
  "id": "example-finding-position-vectors",
  "level": "2",
  "url": "section-vectors.html#example-finding-position-vectors",
  "type": "Example",
  "number": "11.2.6",
  "title": "Finding components of vectors.",
  "body": "Finding components of vectors \n        Consider the points   and  . We want to find the components of the vector  . We can do this by translating   to the origin, which is done by subtracting from each coordinate of   the corresponding coordinate of  . So the vector   is given by\n       "
},
{
  "id": "theorem-properties-of-vector-addition-and-scalar-multiplication",
  "level": "2",
  "url": "section-vectors.html#theorem-properties-of-vector-addition-and-scalar-multiplication",
  "type": "Theorem",
  "number": "11.2.7",
  "title": "Properties of Vector Addition and Scalar Multiplication.",
  "body": "Properties of Vector Addition and Scalar Multiplication vectors properties of vector addition and scalar multiplication \n          Let   be vectors and let   be scalars. Then the following are true:\n         \n             .\n           \n             \n           \n             \n           \n             \n           \n             \n           \n             \n           .\n           \n             \n           \n             \n           "
},
{
  "id": "p-1152",
  "level": "2",
  "url": "section-vectors.html#p-1152",
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
  "body": "Standard Basis Vectors vectors standard basis \n          The standard basis for   is the set  , where\n         "
},
{
  "id": "p-1154",
  "level": "2",
  "url": "section-vectors.html#p-1154",
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
  "body": "The standard basis. "
},
{
  "id": "definition-unit-vectors",
  "level": "2",
  "url": "section-vectors.html#definition-unit-vectors",
  "type": "Definition",
  "number": "11.2.10",
  "title": "Unit Vectors.",
  "body": "Unit Vectors vectors unit vectors \n          A vector   is a unit vector if  .\n         "
},
{
  "id": "example-direction-from-one-point-to-another",
  "level": "2",
  "url": "section-vectors.html#example-direction-from-one-point-to-another",
  "type": "Example",
  "number": "11.2.11",
  "title": "Direction from one point to another.",
  "body": "Direction from one point to another \n        Consider the points   and  . Then we can find the unit vector indicating the direction from   to  . First, set\n       \n        Then the unit vector that gives the direction from   to   is given by\n       "
},
{
  "id": "example-a-vector-equation-for-the-unit-sphere",
  "level": "2",
  "url": "section-vectors.html#example-a-vector-equation-for-the-unit-sphere",
  "type": "Example",
  "number": "11.2.12",
  "title": "A vector equation for the unit sphere.",
  "body": "A vector equation for the unit sphere \n        Using the concept of a unit vector, we can very easily describe the unit sphere The sphere of radius   centered at the origin.  using a vector equation. If we set  , then the unit sphere is just the set of all solutions of\n       "
},
{
  "id": "example-weight-of-a-chain",
  "level": "2",
  "url": "section-vectors.html#example-weight-of-a-chain",
  "type": "Example",
  "number": "11.2.13",
  "title": "Weight of a chain.",
  "body": "Weight of a chain \n        A still chain is fixed to two ends of a level divide. The tension of the chain at each fixed end can be represented by vectors pointing away from the chain. Call these tension forces   and  . Suppose we know that each force vector makes an angle of   with the ground on either side of the chain's fixed ends, and that the magnitude of each tension is  43 . Then we can use vector addition to find the weight of the chain.\n       resultant \n        or in other words\n       \n        What we need to find is  , which we can do without too much trouble if we can rewrite the tension vectors in component form. In fact, we have\n       \n        So it follows that\n       \n        Therefore the chain weighs  .\n       "
},
{
  "id": "section-the-dot-product",
  "level": "1",
  "url": "section-the-dot-product.html",
  "type": "Section",
  "number": "11.3",
  "title": "The Dot Product",
  "body": "The Dot Product Definition and Properties of the Dot Product \n      Suppose we're given two vectors. What we'd like to do is to come up with a measure of how much these vectors overlap.\n      Such a measure may be useful for determining if forces are too close together, for example.\n      So consider two vectors   and   as in the following diagram.\n     Vector overlap. \n      One way we can measure how much   and   overlap is to find  , or equivalently   since this is larger if   and   are more closely aligned. We are carefully ignoring the case where   and   point in opposite directions...  From  , we know that\n     \n      This simplifies out to\n     \n      The only part of this that could possibly depend on how closely   and   overlap is the middle term  . So we'll (optimistically... for now) take what's inside the parentheses and use it as the measure we're looking for.\n     The Dot Product dot product definition dot product scalar product inner product Computing dot products \n        Let   and  . Then\n       \n        It also doesn't matter what order we take the vectors in for the dot product: we get the same answer regardless. However, it does matter that we only use two vectors. The dot product takes two vectors and gives a scalar. In other words,  it is impossible to take the dot product of more than two vectors at a time!  So quantities such as   are not meaningful.\n       Properties of the Dot Product dot product properties \n          Let   and   be vectors, and let   be a scalar. Then the following properties hold:\n         \n             \n           \n             \n           \n             \n           \n             \n           \n             \n           \n      Our goal was to define a measure for how much two given vectors align, or are correlated. The following result tells us that the dot product is actually a reasonable measure of this.\n     Geometry of the Dot Product dot product geometry \n          Let   and   denote vectors, and let   denote the angle between these vectors if the tails of both are moved to the origin. Then\n         \n        Place both vectors   and   at the origin, and then draw the vector   from the tip of   to the tip of  , like so:\n       Geometry of the dot product. \n        Then   and   form a triangle. We want to relate the dot product   with the angle  , so we'll start by using the Law of Cosines to get an equation involving  . The Law of Cosines states that\n       \n        Here's where the dot product comes in. Each squared magnitude can be rewritten as a dot product using  , so in particular we have\n       \n        Plugging this into   gives us the following:\n       \n        Which finally simplifies down to\n       \n        It's usually easier to use   to compute dot products. However,   gives us extremely useful geometric information about the dot product. For example, we get the following result very quickly: two vectors   and   are perpendicular if and only if  .\n       Checking orthogonality using the dot product \n        Let   and   Then we can say right away that these vectors are  not  orthogonal to each other since  .\n       Finding angles between lines \n        Consider the lines   and   in  , plotted below:\n       Angle between lines. \n        Suppose we want to find the acute angle   these lines make with each other. We can do so by finding vectors   and   that point in the same directions as these lines. We'll start by finding the vector   which points in the same direction as the line  . To do so, we need two points on this line:   and  . So we can take   to be\n       \n        Similarly, since   and   both lie on  , we can take\n       \n        Then by   we know that\n       \n        So the acute angle between these two lines is given by\n       Projections \n      Consider two vectors   and   arranged as follows:\n     The vectors   and  . projection of   onto  The projection of   onto  . \n      The projection   can be thought of as the vector parallel to   that best approximates  . What we'd like to do now is to actually find a formula for this projection. If we let   denote the acute angle between the vectors   and  , then\n     \n      Since the projection must also be parallel to  , then this is enough information to state exactly what   should be:   We can simplify this formula somewhat by making use of  .\n     Vector Projection Formulas vectors vector projection \n          Let   and   denote vectors in   or  . Then the projection of   onto   is given by\n         Finding vector projections \n        Let   and  . Then by   the projection of   onto   is given by\n       \n      Another example of vector projection is computing work done by a force. In particular, suppose we have a force   and some displacement vector  . We define the work done by   along   to be the product of the component of   along   times the distance moved. If we let   denote the acute angle between   and  , then the work   done is given by\n     \n      which is exactly equal to   by  .\n     Finding work done by a force \n        Suppose a force   moves a particle from the point   to the point  , where the force is measured in newtons and the distance in meters. We want to find the work done by this force on the particle. To do so, we need the displacement  :\n       \n        So the work done is\n       \n        joules.\n       \n      SUGGESTED PROBLEMS: 1--19 odd, 35, 39\n     "
},
{
  "id": "figure-vector-dot-product",
  "level": "2",
  "url": "section-the-dot-product.html#figure-vector-dot-product",
  "type": "Figure",
  "number": "11.3.1",
  "title": "",
  "body": "Vector overlap. "
},
{
  "id": "definition-the-dot-product",
  "level": "2",
  "url": "section-the-dot-product.html#definition-the-dot-product",
  "type": "Definition",
  "number": "11.3.2",
  "title": "The Dot Product.",
  "body": "The Dot Product dot product definition dot product "
},
{
  "id": "p-1175",
  "level": "2",
  "url": "section-the-dot-product.html#p-1175",
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
  "body": "Computing dot products \n        Let   and  . Then\n       \n        It also doesn't matter what order we take the vectors in for the dot product: we get the same answer regardless. However, it does matter that we only use two vectors. The dot product takes two vectors and gives a scalar. In other words,  it is impossible to take the dot product of more than two vectors at a time!  So quantities such as   are not meaningful.\n       "
},
{
  "id": "theorem-properties-of-the-dot-product",
  "level": "2",
  "url": "section-the-dot-product.html#theorem-properties-of-the-dot-product",
  "type": "Theorem",
  "number": "11.3.4",
  "title": "Properties of the Dot Product.",
  "body": "Properties of the Dot Product dot product properties \n          Let   and   be vectors, and let   be a scalar. Then the following properties hold:\n         \n             \n           \n             \n           \n             \n           \n             \n           \n             \n           "
},
{
  "id": "theorem-geometry-of-the-dot-product",
  "level": "2",
  "url": "section-the-dot-product.html#theorem-geometry-of-the-dot-product",
  "type": "Theorem",
  "number": "11.3.5",
  "title": "Geometry of the Dot Product.",
  "body": "Geometry of the Dot Product dot product geometry \n          Let   and   denote vectors, and let   denote the angle between these vectors if the tails of both are moved to the origin. Then\n         "
},
{
  "id": "proof-15",
  "level": "2",
  "url": "section-the-dot-product.html#proof-15",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": "\n        Place both vectors   and   at the origin, and then draw the vector   from the tip of   to the tip of  , like so:\n       Geometry of the dot product. \n        Then   and   form a triangle. We want to relate the dot product   with the angle  , so we'll start by using the Law of Cosines to get an equation involving  . The Law of Cosines states that\n       \n        Here's where the dot product comes in. Each squared magnitude can be rewritten as a dot product using  , so in particular we have\n       \n        Plugging this into   gives us the following:\n       \n        Which finally simplifies down to\n       "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "section-the-dot-product.html#remark-2",
  "type": "Remark",
  "number": "11.3.7",
  "title": "",
  "body": "\n        It's usually easier to use   to compute dot products. However,   gives us extremely useful geometric information about the dot product. For example, we get the following result very quickly: two vectors   and   are perpendicular if and only if  .\n       "
},
{
  "id": "example-checking-orthogonality-using-the-dot-product",
  "level": "2",
  "url": "section-the-dot-product.html#example-checking-orthogonality-using-the-dot-product",
  "type": "Example",
  "number": "11.3.8",
  "title": "Checking orthogonality using the dot product.",
  "body": "Checking orthogonality using the dot product \n        Let   and   Then we can say right away that these vectors are  not  orthogonal to each other since  .\n       "
},
{
  "id": "example-finding-angles-between-lines",
  "level": "2",
  "url": "section-the-dot-product.html#example-finding-angles-between-lines",
  "type": "Example",
  "number": "11.3.9",
  "title": "Finding angles between lines.",
  "body": "Finding angles between lines \n        Consider the lines   and   in  , plotted below:\n       Angle between lines. \n        Suppose we want to find the acute angle   these lines make with each other. We can do so by finding vectors   and   that point in the same directions as these lines. We'll start by finding the vector   which points in the same direction as the line  . To do so, we need two points on this line:   and  . So we can take   to be\n       \n        Similarly, since   and   both lie on  , we can take\n       \n        Then by   we know that\n       \n        So the acute angle between these two lines is given by\n       "
},
{
  "id": "figure-orthogonal-projection-1",
  "level": "2",
  "url": "section-the-dot-product.html#figure-orthogonal-projection-1",
  "type": "Figure",
  "number": "11.3.11",
  "title": "",
  "body": "The vectors   and  . "
},
{
  "id": "p-1199",
  "level": "2",
  "url": "section-the-dot-product.html#p-1199",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "projection of   onto  "
},
{
  "id": "figure-orthogonal-projection-2",
  "level": "2",
  "url": "section-the-dot-product.html#figure-orthogonal-projection-2",
  "type": "Figure",
  "number": "11.3.12",
  "title": "",
  "body": "The projection of   onto  . "
},
{
  "id": "theorem-vector-projection-formulas",
  "level": "2",
  "url": "section-the-dot-product.html#theorem-vector-projection-formulas",
  "type": "Theorem",
  "number": "11.3.13",
  "title": "Vector Projection Formulas.",
  "body": "Vector Projection Formulas vectors vector projection \n          Let   and   denote vectors in   or  . Then the projection of   onto   is given by\n         "
},
{
  "id": "example-finding-vector-projections",
  "level": "2",
  "url": "section-the-dot-product.html#example-finding-vector-projections",
  "type": "Example",
  "number": "11.3.14",
  "title": "Finding vector projections.",
  "body": "Finding vector projections \n        Let   and  . Then by   the projection of   onto   is given by\n       "
},
{
  "id": "example-finding-work-done-by-a-force",
  "level": "2",
  "url": "section-the-dot-product.html#example-finding-work-done-by-a-force",
  "type": "Example",
  "number": "11.3.15",
  "title": "Finding work done by a force.",
  "body": "Finding work done by a force \n        Suppose a force   moves a particle from the point   to the point  , where the force is measured in newtons and the distance in meters. We want to find the work done by this force on the particle. To do so, we need the displacement  :\n       \n        So the work done is\n       \n        joules.\n       "
},
{
  "id": "section-the-cross-product",
  "level": "1",
  "url": "section-the-cross-product.html",
  "type": "Section",
  "number": "11.4",
  "title": "The Cross Product",
  "body": "The Cross Product cross product Definition and Properties of the Cross Product cross product definition The Cross Product \n          Let   and  . Then the cross product of   with   is the new vector   given by\n         Cross product of basis vectors \n        Let's start by computing   using the definition. If we do so, we have\n       \n        On the other hand, we also have  . This points out the very important fact that  order matters for cross products .\n       determinants Another cross product \n            is useful to use if you're dealing with vectors that aren't as simple as the basis vectors  . For example, let   and  . Then\n         \n          Remember that we said the cross product is our tool for finding perpendicular vectors. So it might be nice if we made sure it actually did that. As a quick check, we'll compute   and  , with these vectors coming from  . If we do so, we obtain\n         \n          Since these dot products are zero, this means that both   and   are perpendicular to the cross product  . This is also true in general.\n         Orthogonality of the Cross Product cross product orthogonality \n                is always orthogonal to both   and  .\n             right-hand rule \n          We would also like to know the magnitude of the cross product. We can just compute it using   and find the magnitude using our usual formula. If we do so, we obtain (after a lot of simplifying!)\n         \n          which reduces to the following result.\n         Magnitude of the Cross Product cross product magnitude \n              Let   denote the acute angle between the vectors   and  , so that  . Then\n             \n          So in particular, two nonzero vectors   and   are parallel (i.e. have  ) if and only if  .\n         Testing collinearity collinear \n            then we can say that all three points lie on the same line if and only if   and   are parallel to each other. So we'll compute their cross product to get  . Since these vectors are parallel, then the three given points must lie on the same line.\n           \n          Another important property of the magnitude of the cross product is the following:   is exactly equal to the area of the parallelogram determined by   and  .\n         Area of a triangle \n            Suppose that we want the area of the triangle with vertices   and  . To start, we need to find vectors that determine the triangle. We can use\n           \n            Now, the triangle determined by   and   is precisely half of the parallelogram determined by these same vectors, so the area of this triangle is equal to  . We can use Sage as in the cell below to find the cross product of these vectors. Doing so, we get   So the area of the triangle with vertices   and   is\n           Properties of the Cross Product cross product properties \n              Let   be vectors and   a scalar. Then the following properties are true:\n             scalar triple product scalar triple product Geometry of the Scalar Triple Product \n              Let   and   be vectors in  . Then   is equal to the volume of the parallelepiped determined by   and  .\n             Testing if vectors are coplanar coplanar \n            these vectors are  not  coplanar.\n           Another way to compute cross products \n            Using   and the facts that\n           \n            gives us another way to compute cross products that doesn't involve determinants. As an example, let   and   Then\n           Torque torque Torque torque \n              The torque   of a force   acting at a position   is defined to be the vector \n             \n          As one example of torque, consider a wrench applied to a bolt. The force is exerted at the end of the wrench, and the torque is a vector that's parallel to the axis of rotation of the bolt. The torque is greater if the force is applied at a direction perpendicular (or nearly so) to that of the wrench, and smaller if the force is nearly parallel to the direction of the wrench. As a quick check, the torque is   if the force is exactly parallel to the direction of the wrench, which makes sense: if we're pushing or pulling the wrench, the bolt won't rotate at all.\n         Torque and hex keys \n            A hex key (Allen wrench) with a short arm of length  27  and a long arm length of  154  is applied to a screw, with the short arm attached to the screw. To turn the screw, a force of  0.5  is applied to the long arm of the hex key turning the screw clockwise, and is exactly perpendicular to both the short arm and long arm of the hex key. We want to find the torque of this force on the screw.\n           \n            One way we can do this is to imagine the screw sitting at the origin, and the hex key is (initially) in the  -plane. Note that once the force is applied, it will begin to rotate the hex key out of the  -plane. Now, the torque is defined by\n           \n            where   is the vector from the screw to the point where the force   is applied. We can find   without too much trouble: it's  . To find the force  , note that it's perpendicular to both the long arm and short arm of the screw. So a starting guess would be\n           \n            Such a force would turn the screw clockwise, but it has the wrong magnitude. So we need to adjust it a bit:  . So the torque is given by\n           \n          SUGGESTED PROBLEMS: 1-19 odd, 29, 41\n         "
},
{
  "id": "p-1210",
  "level": "2",
  "url": "section-the-cross-product.html#p-1210",
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
  "body": "cross product definition The Cross Product \n          Let   and  . Then the cross product of   with   is the new vector   given by\n         "
},
{
  "id": "example-cross-product-of-basis-vectors",
  "level": "2",
  "url": "section-the-cross-product.html#example-cross-product-of-basis-vectors",
  "type": "Example",
  "number": "11.4.2",
  "title": "Cross product of basis vectors.",
  "body": "Cross product of basis vectors \n        Let's start by computing   using the definition. If we do so, we have\n       \n        On the other hand, we also have  . This points out the very important fact that  order matters for cross products .\n       "
},
{
  "id": "p-1214",
  "level": "2",
  "url": "section-the-cross-product.html#p-1214",
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
  "body": "Another cross product \n            is useful to use if you're dealing with vectors that aren't as simple as the basis vectors  . For example, let   and  . Then\n         "
},
{
  "id": "theorem-orthogonality-of-the-cross-product",
  "level": "2",
  "url": "section-the-cross-product.html#theorem-orthogonality-of-the-cross-product",
  "type": "Theorem",
  "number": "11.4.4",
  "title": "Orthogonality of the Cross Product.",
  "body": "Orthogonality of the Cross Product cross product orthogonality \n                is always orthogonal to both   and  .\n             "
},
{
  "id": "p-1219",
  "level": "2",
  "url": "section-the-cross-product.html#p-1219",
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
  "body": "Magnitude of the Cross Product cross product magnitude \n              Let   denote the acute angle between the vectors   and  , so that  . Then\n             "
},
{
  "id": "example-testing-collinearity",
  "level": "2",
  "url": "section-the-cross-product.html#example-testing-collinearity",
  "type": "Example",
  "number": "11.4.6",
  "title": "Testing collinearity.",
  "body": "Testing collinearity collinear \n            then we can say that all three points lie on the same line if and only if   and   are parallel to each other. So we'll compute their cross product to get  . Since these vectors are parallel, then the three given points must lie on the same line.\n           "
},
{
  "id": "example-areas-of-triangles",
  "level": "2",
  "url": "section-the-cross-product.html#example-areas-of-triangles",
  "type": "Example",
  "number": "11.4.7",
  "title": "Area of a triangle.",
  "body": "Area of a triangle \n            Suppose that we want the area of the triangle with vertices   and  . To start, we need to find vectors that determine the triangle. We can use\n           \n            Now, the triangle determined by   and   is precisely half of the parallelogram determined by these same vectors, so the area of this triangle is equal to  . We can use Sage as in the cell below to find the cross product of these vectors. Doing so, we get   So the area of the triangle with vertices   and   is\n           "
},
{
  "id": "theorem-properties-of-the-cross-product",
  "level": "2",
  "url": "section-the-cross-product.html#theorem-properties-of-the-cross-product",
  "type": "Theorem",
  "number": "11.4.8",
  "title": "Properties of the Cross Product.",
  "body": "Properties of the Cross Product cross product properties \n              Let   be vectors and   a scalar. Then the following properties are true:\n             "
},
{
  "id": "p-1230",
  "level": "2",
  "url": "section-the-cross-product.html#p-1230",
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
  "body": "scalar triple product Geometry of the Scalar Triple Product \n              Let   and   be vectors in  . Then   is equal to the volume of the parallelepiped determined by   and  .\n             "
},
{
  "id": "example-testing-if-vectors-are-coplanar",
  "level": "2",
  "url": "section-the-cross-product.html#example-testing-if-vectors-are-coplanar",
  "type": "Example",
  "number": "11.4.10",
  "title": "Testing if vectors are coplanar.",
  "body": "Testing if vectors are coplanar coplanar \n            these vectors are  not  coplanar.\n           "
},
{
  "id": "example-another-way-to-compute-cross-products",
  "level": "2",
  "url": "section-the-cross-product.html#example-another-way-to-compute-cross-products",
  "type": "Example",
  "number": "11.4.11",
  "title": "Another way to compute cross products.",
  "body": "Another way to compute cross products \n            Using   and the facts that\n           \n            gives us another way to compute cross products that doesn't involve determinants. As an example, let   and   Then\n           "
},
{
  "id": "p-1236",
  "level": "2",
  "url": "section-the-cross-product.html#p-1236",
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
  "body": "Torque torque \n              The torque   of a force   acting at a position   is defined to be the vector \n             "
},
{
  "id": "example-torque-and-hex-keys",
  "level": "2",
  "url": "section-the-cross-product.html#example-torque-and-hex-keys",
  "type": "Example",
  "number": "11.4.13",
  "title": "Torque and hex keys.",
  "body": "Torque and hex keys \n            A hex key (Allen wrench) with a short arm of length  27  and a long arm length of  154  is applied to a screw, with the short arm attached to the screw. To turn the screw, a force of  0.5  is applied to the long arm of the hex key turning the screw clockwise, and is exactly perpendicular to both the short arm and long arm of the hex key. We want to find the torque of this force on the screw.\n           \n            One way we can do this is to imagine the screw sitting at the origin, and the hex key is (initially) in the  -plane. Note that once the force is applied, it will begin to rotate the hex key out of the  -plane. Now, the torque is defined by\n           \n            where   is the vector from the screw to the point where the force   is applied. We can find   without too much trouble: it's  . To find the force  , note that it's perpendicular to both the long arm and short arm of the screw. So a starting guess would be\n           \n            Such a force would turn the screw clockwise, but it has the wrong magnitude. So we need to adjust it a bit:  . So the torque is given by\n           "
},
{
  "id": "section-equations-of-lines-and-planes",
  "level": "1",
  "url": "section-equations-of-lines-and-planes.html",
  "type": "Section",
  "number": "11.5",
  "title": "Equations of Lines and Planes",
  "body": "Equations of Lines and Planes \n          Recall that the equation of a line in   has the general form  .\n          However, this equation does not give a line in  .\n          In fact, it actually gives a plane, as we'll see! What we want to do now is find exactly how to describe a given line or plane.\n         Equations of Lines \n          First, suppose we have a line   in   as follows:\n         A line in  . \n          Our goal is to find an equation that describes this line. Imagine that we have a vector   pointing from the origin to the point  , like so:\n         Tracing out   using vectors. \n          Then we can get to every other point on the line by starting from  . In particular, if   is any vector parallel to  , then   must also be on the line  :\n         Tracing out   using vectors. \n          So to get all possible points on  , we just need to look at all possible vectors  , where   is any vector parallel to  . If we set  , We don't actually have to pick  , we just need   to be parallel to  .  then\n         \n          will trace out all points on   as   varies from   to  .\n         Parametric Equations of a Line lines parametric equations in  \n              If   is a point on a line  , and if   is parallel to  , then\n             \n              traces out  , where \n             \n              We can also write this as the system of equations\n             Equation of a line with a given direction and point \n            Suppose we want to find the equation of a line   that passes through   and is perpendicular to  .   says that we only need to find the right choices for   and   in order to get the equation of such a line, and we can write down one of these right away:\n           \n            So we just need to find  . Since   is orthogonal to  , this means we want   to be orthogonal to   as well. A great way to find such a   is to use the cross product. If   is any nonzero vector, then   must be orthogonal to both   and  , and in particular it must be orthogonal to  . So we can take\n           \n            So the equation of this line is\n           \n            As   varies, this will trace out our line.\n           \n          When we begin working with line integrals, we'll need to know how to parameterize a line segment, so we'll discuss that now. Suppose we have a line segment between two points   and  . Let   and   denote the corresponding position vectors of these points (i.e. the vectors whose components are given by the coordinates of these points). Then the equation of the  line  between   and   is given by\n         \n          To get the line segment we're actually looking for, we just need to restrict   to the interval  . So we can say that \n         \n          traces out the line segment between   and  .\n         Equations of Planes \n          Now we move on to finding the equation of a plane. We'll try a vector approach to this like we did for lines, and this won't be too bad to do. We just need to keep the following in mind:\n         \n            A plane in   is uniquely determined by specifying a single point for it to pass through and a direction for it to face.\n           normal vector \n          Let   denote a point on the plane, and let   be a normal vector to the plane. If   is the position vector of any other point on the plane, then it must be true that  , where   is the position vector of  . We can summarize this in the following theorem.\n         Vector and Scalar Equations of a Plane planes vector and scalar equations vector equation of the plane scalar equation of the plane Equation of a plane orthogonal to a line \n            Consider the two lines in   determined by the equations\n           \n            We want to find the equation of the plane that contains the intersection of these two lines and is orthogonal to the first line. By  , we need a point on the plane and a normal vector. Since the plane must contain the intersection of these two lines, that's our point. To find it, we'll set   and go from there:\n           \n            So the position vector   of the point where these lines intersect is given by  . We also need a normal vector to the plane, but this is easy to find: since the plane needs to be orthogonal to the first line, we can just take  . So the equation of our plane is\n           \n            or equivalently\n           \n            This plane is plotted below using the Sage cell immediately after this example.\n           \n          We can rewrite the equation of a plane in the form\n         \n          A normal vector to this plane is given by  .\n         Equation of a line orthogonal to a plane \n            Suppose we're given the plane  , and we want to find the equation of the line orthogonal to this plane and passing through the point  . Then the equation of this line is\n           \n            where   and   is a vector parallel to the line. Since the line must be orthogonal to the plane, we can take  . So the equation of this line is\n           Equation of a plane containing a line and a point \n            Suppose we're trying to find a plane containing the point   and containing the line  . To get the equation of this plane, we also need a normal vector to the plane. We can find the normal vector by computing the cross product of two vectors parallel to the plane.\n           \n            First, since the plane contains the line   the direction of this line must be parallel to the plane. So we know that   is parallel to the plane. To get another vector parallel to this plane, we can use the given point and a second point in the plane, say  , which comes from the line (just set  ). So the vector   must also be parallel to the plane. Hence a normal vector to this plane is\n           \n            So an equation of this plane is given by\n           "
},
{
  "id": "figure-line-in-space",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#figure-line-in-space",
  "type": "Figure",
  "number": "11.5.1",
  "title": "",
  "body": "A line in  . "
},
{
  "id": "figure-line-in-space-1",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#figure-line-in-space-1",
  "type": "Figure",
  "number": "11.5.2",
  "title": "",
  "body": "Tracing out   using vectors. "
},
{
  "id": "figure-line-in-space-2",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#figure-line-in-space-2",
  "type": "Figure",
  "number": "11.5.3",
  "title": "",
  "body": "Tracing out   using vectors. "
},
{
  "id": "theorem-parametric-equations-of-a-line",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#theorem-parametric-equations-of-a-line",
  "type": "Theorem",
  "number": "11.5.4",
  "title": "Parametric Equations of a Line.",
  "body": "Parametric Equations of a Line lines parametric equations in  \n              If   is a point on a line  , and if   is parallel to  , then\n             \n              traces out  , where \n             \n              We can also write this as the system of equations\n             "
},
{
  "id": "example-equation-of-a-line-with-a-given-direction-and-point",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#example-equation-of-a-line-with-a-given-direction-and-point",
  "type": "Example",
  "number": "11.5.5",
  "title": "Equation of a line with a given direction and point.",
  "body": "Equation of a line with a given direction and point \n            Suppose we want to find the equation of a line   that passes through   and is perpendicular to  .   says that we only need to find the right choices for   and   in order to get the equation of such a line, and we can write down one of these right away:\n           \n            So we just need to find  . Since   is orthogonal to  , this means we want   to be orthogonal to   as well. A great way to find such a   is to use the cross product. If   is any nonzero vector, then   must be orthogonal to both   and  , and in particular it must be orthogonal to  . So we can take\n           \n            So the equation of this line is\n           \n            As   varies, this will trace out our line.\n           "
},
{
  "id": "observation-vectors-and-planes",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#observation-vectors-and-planes",
  "type": "Observation",
  "number": "11.5.6",
  "title": "",
  "body": "\n            A plane in   is uniquely determined by specifying a single point for it to pass through and a direction for it to face.\n           "
},
{
  "id": "p-1262",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#p-1262",
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
  "body": "Vector and Scalar Equations of a Plane planes vector and scalar equations vector equation of the plane scalar equation of the plane "
},
{
  "id": "example-equation-of-a-plane-ortho",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#example-equation-of-a-plane-ortho",
  "type": "Example",
  "number": "11.5.8",
  "title": "Equation of a plane orthogonal to a line.",
  "body": "Equation of a plane orthogonal to a line \n            Consider the two lines in   determined by the equations\n           \n            We want to find the equation of the plane that contains the intersection of these two lines and is orthogonal to the first line. By  , we need a point on the plane and a normal vector. Since the plane must contain the intersection of these two lines, that's our point. To find it, we'll set   and go from there:\n           \n            So the position vector   of the point where these lines intersect is given by  . We also need a normal vector to the plane, but this is easy to find: since the plane needs to be orthogonal to the first line, we can just take  . So the equation of our plane is\n           \n            or equivalently\n           \n            This plane is plotted below using the Sage cell immediately after this example.\n           "
},
{
  "id": "example-equation-of-a-line-orthogonal-to-a-plane",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#example-equation-of-a-line-orthogonal-to-a-plane",
  "type": "Example",
  "number": "11.5.9",
  "title": "Equation of a line orthogonal to a plane.",
  "body": "Equation of a line orthogonal to a plane \n            Suppose we're given the plane  , and we want to find the equation of the line orthogonal to this plane and passing through the point  . Then the equation of this line is\n           \n            where   and   is a vector parallel to the line. Since the line must be orthogonal to the plane, we can take  . So the equation of this line is\n           "
},
{
  "id": "example-equation-of-a-line-of-intersection-between-two-planes",
  "level": "2",
  "url": "section-equations-of-lines-and-planes.html#example-equation-of-a-line-of-intersection-between-two-planes",
  "type": "Example",
  "number": "11.5.10",
  "title": "Equation of a plane containing a line and a point.",
  "body": "Equation of a plane containing a line and a point \n            Suppose we're trying to find a plane containing the point   and containing the line  . To get the equation of this plane, we also need a normal vector to the plane. We can find the normal vector by computing the cross product of two vectors parallel to the plane.\n           \n            First, since the plane contains the line   the direction of this line must be parallel to the plane. So we know that   is parallel to the plane. To get another vector parallel to this plane, we can use the given point and a second point in the plane, say  , which comes from the line (just set  ). So the vector   must also be parallel to the plane. Hence a normal vector to this plane is\n           \n            So an equation of this plane is given by\n           "
},
{
  "id": "section-cylinders-and-quadric-surfaces",
  "level": "1",
  "url": "section-cylinders-and-quadric-surfaces.html",
  "type": "Section",
  "number": "11.6",
  "title": "Cylinders and Quadric Surfaces",
  "body": "Cylinders and Quadric Surfaces cylinders quadric surfaces Cylinders cylinders definition Cylinders \n              A cylinder is the collection of all lines parallel to a given line and passing through some plane curve.\n             \n          A basic example of a cylinder is the set of all lines passing through the unit circle in the  -plane and parallel to the  -axis.\n          In  , this is just the graph of  .\n          The graph of this cylinder is provided below.\n         The cylinder  \n          For our purposes, equations that give a cylinder will often be missing a variable.\n         A sinusoidal cylinder \n            Consider the equation   in  .\n            This equation is missing the variable  , which suggests that the graph of this equation should be a cylinder.\n            However, it's not going to look like the cylinders we may be used to at this point.\n            In fact, this is just the set of all lines passing through the curve   in the  -plane and parallel to the  -axis. It's graph is given below.\n           The cylinder  Another cylinder \n            Consider the cylinder given by the set of all lines passing through the plane curve   in the  -plane and parallel to the line in   defined by the equation\n           \n            What does this cylinder look like? Well, we can view it as essentially a \"sheet\" of lines cutting through the  -plane at the line  .\n            If we try to imagine this, then this suggests that this cylinder should probably be a plane!\n            In fact, this cylinder is exactly the plane containing the point   and parallel to the line   given above.\n            As the line itself is parallel to the  -plane, the resulting cylinder is just the  -plane.\n           Quadric Surfaces quadric surface trace An ellipsoid \n            Consider the equation\n           \n            If we want to graph this, we can graph a few of it's traces to get an idea of what it looks like. Let's graph traces parallel the  -plane to start. This means we'll set   equal to different constants. For  , we get the equation\n           \n            which we rewrite as\n           \n            This is an ellipse in the  -plane, with minor axis   and major axis  . We can graph another trace, say in the  -plane, we get\n           ellipsoid Region between surfaces \n            Suppose we want to sketch the region between the surface   and the cylinder   for  .\n            First, we can graph  .\n            If we look at the horizontal traces of this surface, we get circles of varying radii.\n            As   increases, the radii of these circles increase as well.\n            This surface is just a cone!\n            So we're describing the region of this cone bounded between   and  , and contained inside the cylinder  .\n           The region contained between   and  "
},
{
  "id": "p-1278",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#p-1278",
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
  "body": "cylinders definition Cylinders \n              A cylinder is the collection of all lines parallel to a given line and passing through some plane curve.\n             "
},
{
  "id": "figure-56",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#figure-56",
  "type": "Figure",
  "number": "11.6.2",
  "title": "",
  "body": "The cylinder  "
},
{
  "id": "example-a-sinusoidal-cylinder",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#example-a-sinusoidal-cylinder",
  "type": "Example",
  "number": "11.6.3",
  "title": "A sinusoidal cylinder.",
  "body": "A sinusoidal cylinder \n            Consider the equation   in  .\n            This equation is missing the variable  , which suggests that the graph of this equation should be a cylinder.\n            However, it's not going to look like the cylinders we may be used to at this point.\n            In fact, this is just the set of all lines passing through the curve   in the  -plane and parallel to the  -axis. It's graph is given below.\n           "
},
{
  "id": "figure-57",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#figure-57",
  "type": "Figure",
  "number": "11.6.4",
  "title": "",
  "body": "The cylinder  "
},
{
  "id": "example-another-cylinder",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#example-another-cylinder",
  "type": "Example",
  "number": "11.6.5",
  "title": "Another cylinder.",
  "body": "Another cylinder \n            Consider the cylinder given by the set of all lines passing through the plane curve   in the  -plane and parallel to the line in   defined by the equation\n           \n            What does this cylinder look like? Well, we can view it as essentially a \"sheet\" of lines cutting through the  -plane at the line  .\n            If we try to imagine this, then this suggests that this cylinder should probably be a plane!\n            In fact, this cylinder is exactly the plane containing the point   and parallel to the line   given above.\n            As the line itself is parallel to the  -plane, the resulting cylinder is just the  -plane.\n           "
},
{
  "id": "p-1285",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#p-1285",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadric surface "
},
{
  "id": "p-1286",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#p-1286",
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
  "body": "An ellipsoid \n            Consider the equation\n           \n            If we want to graph this, we can graph a few of it's traces to get an idea of what it looks like. Let's graph traces parallel the  -plane to start. This means we'll set   equal to different constants. For  , we get the equation\n           \n            which we rewrite as\n           \n            This is an ellipse in the  -plane, with minor axis   and major axis  . We can graph another trace, say in the  -plane, we get\n           ellipsoid "
},
{
  "id": "example-region-between-surfaces",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#example-region-between-surfaces",
  "type": "Example",
  "number": "11.6.7",
  "title": "Region between surfaces.",
  "body": "Region between surfaces \n            Suppose we want to sketch the region between the surface   and the cylinder   for  .\n            First, we can graph  .\n            If we look at the horizontal traces of this surface, we get circles of varying radii.\n            As   increases, the radii of these circles increase as well.\n            This surface is just a cone!\n            So we're describing the region of this cone bounded between   and  , and contained inside the cylinder  .\n           "
},
{
  "id": "figure-58",
  "level": "2",
  "url": "section-cylinders-and-quadric-surfaces.html#figure-58",
  "type": "Figure",
  "number": "11.6.8",
  "title": "",
  "body": "The region contained between   and  "
},
{
  "id": "section-vector-functions",
  "level": "1",
  "url": "section-vector-functions.html",
  "type": "Section",
  "number": "11.7",
  "title": "Vector Functions",
  "body": "Vector Functions vector function space curves component functions Limits with Space Curves \n          We can take limits with vector functions just as we can with regular functions.\n         \n          Let  . Then\n         \n          In other words, if you want to take the limit of a vector function you can just take the limits of the component functions.\n         Limit of a vector function \n            Let\n           \n            Suppose we want to find  . Then we just need to take the limit of each component. So\n           continuous A horiztonal helix \n            Let  , and suppose we want to sketch this function. One way to do so is to plug in values for   and connect the resulting points with a curve, but we can also do the following to get an idea of what this looks like. First, note that we have   and  . So  , which means that this looks like the unit circle in the  -plane, traced  clockwise . Since we also have  , this curve moves farther along the  -axis as   increases. If we trace this out, we get a helix (see the below plot). We can also see from the graph that it has no jumps or gaps, so   is continuous everywhere.\n           Finding vector functions \n            Consider the cylinder   and the surface  , and suppose we want to trace out there intersection with a vector function. Here's how we can do this. First, we'll come up with the   and   components of  . Since  , this suggests that we should take\n           \n            So that's two down, one to go. To get  , we just need to use the equation  . So\n           \n            So our vector function is\n           \n            This is also plotted below.\n           Derivatives with Space Curves \n          Now that we know how to take limits with vector functions, we can take derivatives as well.\n         Derivatives of Vector Functions vector functions derivatives derivative differentiable tangent vector unit tangent \n          We also have the usual ideas from Calculus I and physics regarding motion: velocity is the derivative of position and acceleration is the derivative of velocity.\n         Velocity on a saddle \n            A particle moves counterclockwise along the \"saddle\"  . We want its velocity at  . First, find   to get\n           \n            At  , we have the velocity vector\n           \n            So at the point  , the space curve is parallel to the vector  . In other words, the particle is moving in this direction at  .\n           Motion along the saddle traced by   in  Tangents on a circle \n            A particle moves along the circle   in the  -plane, counterclockwise and with an angular frequency of  5\\pi . Then we can assume that its position is described by\n           \n            Suppose we want to find the direction this particle is going at any given moment. Then we can just find the unit tangent vector  :\n           \n          We also have derivative rules for vector functions, based off of the familiar formulas from Calculus I.\n         Vector Derivative Rules vector functions derivative rules \n              Let   and   be differentiable vector functions,   be a scalar and let   be a differentiable (scalar) function. Then the following formulas hold:\n             Integrals with Space Curves \n          We can also integrate vector functions without too much trouble. Just as taking the derivative of a vector function reduces down to differentiating each component, integrating a vector function reduces down to integrating each component. If   then\n         \n          SUGGESTED PROBLEMS: 1, 3, 5, 7, 17, 21, 23, 37, 41, 45, 59, 61\n         "
},
{
  "id": "p-1293",
  "level": "2",
  "url": "section-vector-functions.html#p-1293",
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
  "body": "Limit of a vector function \n            Let\n           \n            Suppose we want to find  . Then we just need to take the limit of each component. So\n           "
},
{
  "id": "p-1299",
  "level": "2",
  "url": "section-vector-functions.html#p-1299",
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
  "body": "A horiztonal helix \n            Let  , and suppose we want to sketch this function. One way to do so is to plug in values for   and connect the resulting points with a curve, but we can also do the following to get an idea of what this looks like. First, note that we have   and  . So  , which means that this looks like the unit circle in the  -plane, traced  clockwise . Since we also have  , this curve moves farther along the  -axis as   increases. If we trace this out, we get a helix (see the below plot). We can also see from the graph that it has no jumps or gaps, so   is continuous everywhere.\n           "
},
{
  "id": "example-finding-vector-functions",
  "level": "2",
  "url": "section-vector-functions.html#example-finding-vector-functions",
  "type": "Example",
  "number": "11.7.3",
  "title": "Finding vector functions.",
  "body": "Finding vector functions \n            Consider the cylinder   and the surface  , and suppose we want to trace out there intersection with a vector function. Here's how we can do this. First, we'll come up with the   and   components of  . Since  , this suggests that we should take\n           \n            So that's two down, one to go. To get  , we just need to use the equation  . So\n           \n            So our vector function is\n           \n            This is also plotted below.\n           "
},
{
  "id": "definition-derivatives-of-vector-functions",
  "level": "2",
  "url": "section-vector-functions.html#definition-derivatives-of-vector-functions",
  "type": "Definition",
  "number": "11.7.4",
  "title": "Derivatives of Vector Functions.",
  "body": "Derivatives of Vector Functions vector functions derivatives derivative differentiable "
},
{
  "id": "p-1308",
  "level": "2",
  "url": "section-vector-functions.html#p-1308",
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
  "body": "Velocity on a saddle \n            A particle moves counterclockwise along the \"saddle\"  . We want its velocity at  . First, find   to get\n           \n            At  , we have the velocity vector\n           \n            So at the point  , the space curve is parallel to the vector  . In other words, the particle is moving in this direction at  .\n           "
},
{
  "id": "figure-59",
  "level": "2",
  "url": "section-vector-functions.html#figure-59",
  "type": "Figure",
  "number": "11.7.6",
  "title": "",
  "body": "Motion along the saddle traced by   in  "
},
{
  "id": "example-tangents-on-a-circle",
  "level": "2",
  "url": "section-vector-functions.html#example-tangents-on-a-circle",
  "type": "Example",
  "number": "11.7.7",
  "title": "Tangents on a circle.",
  "body": "Tangents on a circle \n            A particle moves along the circle   in the  -plane, counterclockwise and with an angular frequency of  5\\pi . Then we can assume that its position is described by\n           \n            Suppose we want to find the direction this particle is going at any given moment. Then we can just find the unit tangent vector  :\n           "
},
{
  "id": "theorem-vector-derivative-rules",
  "level": "2",
  "url": "section-vector-functions.html#theorem-vector-derivative-rules",
  "type": "Theorem",
  "number": "11.7.8",
  "title": "Vector Derivative Rules.",
  "body": "Vector Derivative Rules vector functions derivative rules \n              Let   and   be differentiable vector functions,   be a scalar and let   be a differentiable (scalar) function. Then the following formulas hold:\n             "
},
{
  "id": "section-arc-length-and-curvature",
  "level": "1",
  "url": "section-arc-length-and-curvature.html",
  "type": "Section",
  "number": "11.8",
  "title": "Arc Length and Curvature",
  "body": "Arc Length and Curvature Arc Length \n          Suppose some particle travels along the space curve given by   for  . What we'd like to do is determine how far the particle travels over this time interval. Recall that distance is just speed multiplied by time, and the speed of this particle is given by  . So we can imagine that the distance traveled by this particle over some infinitesimal time interval   to be given by  . So adding up all of these distances from   to   should give us the arc length. This suggests (but does not prove!) the following formula for arc length:\n         \n            gives the length   of the space curve   from   to  , assuming that the integral exists.\n         Arc length of a helix \n            Suppose we want to find the arc length of the helix   from   to  . Then this is given by\n           arc length function \n          If we can then solve for   in terms of  , this parametrizes the curve   in terms of the arc length variable  .\n         Reparametrizing a space curve \n            Suppose we're given the space curve\n           \n            which starts at  , (so   starts at  ) and we want to find the point that is   units along the curve in the positive direction. Then we can do this by reparametrizing the curve using arc length. Here's how. First, we find the arc length function  :\n           \n            Since  , we get  . So\n           \n            reparametrizes the space curve   in terms of arc length. So the point on the curve that is   units along in the positive direction is given by\n           Curvature smooth vector functions curvature Curvature curvature \n              where   is the unit tangent to the curve.\n             Computing a curvature \n            Consider the curve   We'll try to find the curvature by making use of  . First, we need to find   so we can take its derivative:\n           \n            Therefore\n           \n            So the curvature is given by\n           Using curvature \n            Consider the curve   once again. We'll try to find where this curve turns the fastest. To do this, we look at the curvature   we found from  :\n           \n            This curve is turning the fastest precisely where the curvature is largest, and this happens at  .\n           \n          We can use   to compute curvatures, but we've seen that it can be pretty awful. So we'd like to use another formula if we can; thankfully, there is another option.\n         vector functions curvature alternative formula Alternative Curvature Formula \n              The curvature of   in   is given by\n             \n          The formula in   may look worse than the formula given in  , but it has one significant advantage: we don't need to differentiate any magnitudes, which is required in the previous formula to compute  .\n         Using the alternative formula \n              Let  . We'll make use of   to find   We have\n             \n              and so\n             Normal and Binormal Vectors unit normal vectors vector functions unit normal vector Unit Normal Vectors \n              Consider a space curve given by  . The unit normal vector is the vector   given by\n             \n              where   is the derivative of the unit tangent vector.\n             Unit normal on a circle \n              Find the unit normal vector of the curve given by  .\n             \n              If we think of a particle moving along  , then this particle is just moving along the unit circle. So at every point along this path, the particle should be turning toward the origin in order to stay on the unit circle. So at all points of the curve,   should point towards the origin. To prove this, we'll use the formula above to find the unit normal:\n             \n              So  . So at every point of the circle, the unit normal points in the opposite direction of the corresponding position vector, i.e. it points towards the origin.\n             binormal vector vector functions binormal vector Binormal Vector \n              Let   be a vector function with unit tangent   and unit normal  . Then the unit binormal vector is the vector   given by\n             "
},
{
  "id": "example-arc-length-of-a-helix",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#example-arc-length-of-a-helix",
  "type": "Example",
  "number": "11.8.1",
  "title": "Arc length of a helix.",
  "body": "Arc length of a helix \n            Suppose we want to find the arc length of the helix   from   to  . Then this is given by\n           "
},
{
  "id": "p-1322",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#p-1322",
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
  "body": "Reparametrizing a space curve \n            Suppose we're given the space curve\n           \n            which starts at  , (so   starts at  ) and we want to find the point that is   units along the curve in the positive direction. Then we can do this by reparametrizing the curve using arc length. Here's how. First, we find the arc length function  :\n           \n            Since  , we get  . So\n           \n            reparametrizes the space curve   in terms of arc length. So the point on the curve that is   units along in the positive direction is given by\n           "
},
{
  "id": "p-1328",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#p-1328",
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
  "body": "vector functions curvature Curvature curvature \n              where   is the unit tangent to the curve.\n             "
},
{
  "id": "example-computing-a-curvature",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#example-computing-a-curvature",
  "type": "Example",
  "number": "11.8.4",
  "title": "Computing a curvature.",
  "body": "Computing a curvature \n            Consider the curve   We'll try to find the curvature by making use of  . First, we need to find   so we can take its derivative:\n           \n            Therefore\n           \n            So the curvature is given by\n           "
},
{
  "id": "example-using-curvature",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#example-using-curvature",
  "type": "Example",
  "number": "11.8.5",
  "title": "Using curvature.",
  "body": "Using curvature \n            Consider the curve   once again. We'll try to find where this curve turns the fastest. To do this, we look at the curvature   we found from  :\n           \n            This curve is turning the fastest precisely where the curvature is largest, and this happens at  .\n           "
},
{
  "id": "theorem-alternative-curvature-formula",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#theorem-alternative-curvature-formula",
  "type": "Theorem",
  "number": "11.8.6",
  "title": "Alternative Curvature Formula.",
  "body": "vector functions curvature alternative formula Alternative Curvature Formula \n              The curvature of   in   is given by\n             "
},
{
  "id": "example-using-the-alternative-formula",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#example-using-the-alternative-formula",
  "type": "Example",
  "number": "11.8.7",
  "title": "Using the alternative formula.",
  "body": "Using the alternative formula \n              Let  . We'll make use of   to find   We have\n             \n              and so\n             "
},
{
  "id": "p-1341",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#p-1341",
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
  "body": "vector functions unit normal vector Unit Normal Vectors \n              Consider a space curve given by  . The unit normal vector is the vector   given by\n             \n              where   is the derivative of the unit tangent vector.\n             "
},
{
  "id": "example-unit-normal-on-a-circle",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#example-unit-normal-on-a-circle",
  "type": "Example",
  "number": "11.8.9",
  "title": "Unit normal on a circle.",
  "body": "Unit normal on a circle \n              Find the unit normal vector of the curve given by  .\n             \n              If we think of a particle moving along  , then this particle is just moving along the unit circle. So at every point along this path, the particle should be turning toward the origin in order to stay on the unit circle. So at all points of the curve,   should point towards the origin. To prove this, we'll use the formula above to find the unit normal:\n             \n              So  . So at every point of the circle, the unit normal points in the opposite direction of the corresponding position vector, i.e. it points towards the origin.\n             "
},
{
  "id": "p-1347",
  "level": "2",
  "url": "section-arc-length-and-curvature.html#p-1347",
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
  "body": "vector functions binormal vector Binormal Vector \n              Let   be a vector function with unit tangent   and unit normal  . Then the unit binormal vector is the vector   given by\n             "
},
{
  "id": "section-motion-in-space",
  "level": "1",
  "url": "section-motion-in-space.html",
  "type": "Section",
  "number": "11.9",
  "title": "Motion in Space",
  "body": "Motion in Space \n        We now move on to examining motion in  . First, recall that   represents the position vector of some particle moving along a curve in space, then its velocity   and acceleration   are given by\n       \n        The speed of the particle is just the magnitude of the velocity:  .\n       Motion of a projectile \n            A projectile is fired out of a cannon with an initial speed of  200  to the west and with an angle of elevation of  . If the particle was fired from a raised platform that is  50  off level ground, where does the particle land?\n           \n            First, we'll assume that   points northward and   points straight up. Let's assume that the platform is directly above the origin. If we let   denote the position (in meters) of the particle at time   (in seconds), then we can say that  . We also have\n           \n            We can integrate up to find the position  :\n           \n            where   is an arbitrary constant vector. To find it, we'll use our initial condition on  :\n           \n            So  . Integrating once more to get the position, we have\n           .\n           \n            So  .\n           \n            To find where the particle lands, we just set the third component equal to zero and solve for   to get\n           \n            We need to choose the positive value for  , and if we do so we see that when the projectile hits ground it's at position   So the projectile is a little over  3.5  to the west.\n           tangential components normal components vector function components of acceleration Components of Acceleration \n            Let   denote a space curve with unit tangent  , unit normal   and acceleration  . The tangential component of acceleration is the scalar   given by\n           \n            The normal component is the scalar   given by\n           \n          represents how much of the acceleration is directed tangent to the curve  , whereas   represents how much of the acceleration is directed perpendicular to the tangent.\n       Components of acceleration for a projectile \n            Consider the particle from  . At what point is the tangential component of acceleration greatest?\n           \n            Since  , the tangential component should be greatest when the projectile is fired or when it hits the ground, since these are the points where the direction of the trajectory most closely matches the direction of acceleration. To actually verify this, we'll find the tangential component using  . Since\n           \n            it follows that\n           \n            So\n           \n            We can make this as large as possible by making   as large as possible, and this reaches its largest value at  , when the projectile hits the ground.\n           "
},
{
  "id": "example-motion-of-a-projectile",
  "level": "2",
  "url": "section-motion-in-space.html#example-motion-of-a-projectile",
  "type": "Example",
  "number": "11.9.1",
  "title": "Motion of a projectile.",
  "body": "Motion of a projectile \n            A projectile is fired out of a cannon with an initial speed of  200  to the west and with an angle of elevation of  . If the particle was fired from a raised platform that is  50  off level ground, where does the particle land?\n           \n            First, we'll assume that   points northward and   points straight up. Let's assume that the platform is directly above the origin. If we let   denote the position (in meters) of the particle at time   (in seconds), then we can say that  . We also have\n           \n            We can integrate up to find the position  :\n           \n            where   is an arbitrary constant vector. To find it, we'll use our initial condition on  :\n           \n            So  . Integrating once more to get the position, we have\n           .\n           \n            So  .\n           \n            To find where the particle lands, we just set the third component equal to zero and solve for   to get\n           \n            We need to choose the positive value for  , and if we do so we see that when the projectile hits ground it's at position   So the projectile is a little over  3.5  to the west.\n           "
},
{
  "id": "p-1359",
  "level": "2",
  "url": "section-motion-in-space.html#p-1359",
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
  "body": "vector function components of acceleration Components of Acceleration \n            Let   denote a space curve with unit tangent  , unit normal   and acceleration  . The tangential component of acceleration is the scalar   given by\n           \n            The normal component is the scalar   given by\n           "
},
{
  "id": "example-components-of-acceleration-for-a-projectile",
  "level": "2",
  "url": "section-motion-in-space.html#example-components-of-acceleration-for-a-projectile",
  "type": "Example",
  "number": "11.9.3",
  "title": "Components of acceleration for a projectile.",
  "body": "Components of acceleration for a projectile \n            Consider the particle from  . At what point is the tangential component of acceleration greatest?\n           \n            Since  , the tangential component should be greatest when the projectile is fired or when it hits the ground, since these are the points where the direction of the trajectory most closely matches the direction of acceleration. To actually verify this, we'll find the tangential component using  . Since\n           \n            it follows that\n           \n            So\n           \n            We can make this as large as possible by making   as large as possible, and this reaches its largest value at  , when the projectile hits the ground.\n           "
},
{
  "id": "section-functions-of-several-independent-variables",
  "level": "1",
  "url": "section-functions-of-several-independent-variables.html",
  "type": "Section",
  "number": "12.1",
  "title": "Functions of Several Independent Variables",
  "body": "Functions of Several Independent Variables \n                Now we need to consider calculus with functions of more than one independent variable.\n             Functions of Two Variables \n                A function of several variables is a function that depends on more than one independent variable.\n                One such example comes from differential equations, where quantities such as the temperature of a metal rod depend on both a position   and a time  .\n             functions of several variables two variables Functions of Two Variables function of two variables domain range dependent variable Domain of a function \n                        Let  .\n                        Find the domain of  .\n                     \n                        We'll break this down into pieces. \n                        First, since we're dealing with square roots in real numbers we need  .\n                        Second, we need to make sure that  .\n                        So the domain of   is the set of all points   in   such that  .\n                        In other words, the domain is just the inside of the circle of radius   centered at the origin.\n                     \n                We can also graph functions of two variables by viewing   as representing the height of some surface over the point   in the  -plane.\n                In other words, just as   represents a curve in  , the equation   represents a surface in  .\n             Sketching a cone \n                        Sketch the surface given by  .\n                     \n                        We need to sketch  .\n                        We can start by squaring both sides to get  .\n                        If we look at the right hand side, it looks a lot like an ellipse, so we'll try to work with that.\n                        Assuming  , we can rewrite the equation to get\n                         \n                        For any given positive value of  , this represents an ellipse that extends to   in the   direction and   in the   direction.\n                        So as   increases, these ellipses increase in size as well.\n                     Contour Plots functions of several variables contour plots Contour Plots contour plot \n                A contour plot can be viewed as slicing a surface in   with a level plane.\n                The contour plot is exactly where the plane intersects the surface.\n             Contours on a paraboloid \n                        What do the contours of   look like?\n                     \n                        If we pick different (nonnegative) values for  , then all of the contours of   take the form\n                         \n                        which turns into\n                         \n                        This is a family of ellipses.\n                     \n                SUGGESTED PROBLEMS: 1, 5, 11, 13\n             "
},
{
  "id": "definition-functions-of-two-variables",
  "level": "2",
  "url": "section-functions-of-several-independent-variables.html#definition-functions-of-two-variables",
  "type": "Definition",
  "number": "12.1.1",
  "title": "Functions of Two Variables.",
  "body": "functions of several variables two variables Functions of Two Variables function of two variables domain range dependent variable "
},
{
  "id": "example-domain-of-a-function",
  "level": "2",
  "url": "section-functions-of-several-independent-variables.html#example-domain-of-a-function",
  "type": "Example",
  "number": "12.1.2",
  "title": "Domain of a function.",
  "body": "Domain of a function \n                        Let  .\n                        Find the domain of  .\n                     \n                        We'll break this down into pieces. \n                        First, since we're dealing with square roots in real numbers we need  .\n                        Second, we need to make sure that  .\n                        So the domain of   is the set of all points   in   such that  .\n                        In other words, the domain is just the inside of the circle of radius   centered at the origin.\n                     "
},
{
  "id": "example-sketching-a-cone",
  "level": "2",
  "url": "section-functions-of-several-independent-variables.html#example-sketching-a-cone",
  "type": "Example",
  "number": "12.1.3",
  "title": "Sketching a cone.",
  "body": "Sketching a cone \n                        Sketch the surface given by  .\n                     \n                        We need to sketch  .\n                        We can start by squaring both sides to get  .\n                        If we look at the right hand side, it looks a lot like an ellipse, so we'll try to work with that.\n                        Assuming  , we can rewrite the equation to get\n                         \n                        For any given positive value of  , this represents an ellipse that extends to   in the   direction and   in the   direction.\n                        So as   increases, these ellipses increase in size as well.\n                     "
},
{
  "id": "definition-contour-plots",
  "level": "2",
  "url": "section-functions-of-several-independent-variables.html#definition-contour-plots",
  "type": "Definition",
  "number": "12.1.4",
  "title": "Contour Plots.",
  "body": "functions of several variables contour plots Contour Plots contour plot "
},
{
  "id": "example-contours-on-a-paraboloid",
  "level": "2",
  "url": "section-functions-of-several-independent-variables.html#example-contours-on-a-paraboloid",
  "type": "Example",
  "number": "12.1.5",
  "title": "Contours on a paraboloid.",
  "body": "Contours on a paraboloid \n                        What do the contours of   look like?\n                     \n                        If we pick different (nonnegative) values for  , then all of the contours of   take the form\n                         \n                        which turns into\n                         \n                        This is a family of ellipses.\n                     "
},
{
  "id": "section-limits-and-continuity",
  "level": "1",
  "url": "section-limits-and-continuity.html",
  "type": "Section",
  "number": "12.2",
  "title": "Limits and Continuity",
  "body": "Limits and Continuity \n                In this section we begin extending calculus concepts from one dimension to higher dimensions, starting with limits.\n             Limits \n                Just as functions of one variable have a notion of limit, the same can be said for functions of several variables.\n                However, limits involving several variables tend to be more restrictive.\n             functions of several variables two variables limits Limit of a Function of Two Variables \n                        Let   be some function and let   be a point arbitrarily close to the domain of  .\n                        We say that\n                         \n                        if   gets arbitrarily close to   as   gets arbitrarily close to  .\n                     \n                Here's why limits can be tricky in two dimensions: for the limit to exist,   must approach the same value   no matter how   approaches  !\n             \n                        Find \n                         \n                        or show that it doesn't exist.\n                     \n                        First, we'll start simple.\n                        If we set   then the limit becomes\n                         \n                        Likewise, if we set   then the limit becomes\n                         \n                        From this, we might suspect that the limit actually exists. \n                        However, we need to make sure that this approaches   along  all possible paths  to  .\n                        Here's another path we can try:  .\n                        If we do this, then the limit becomes\n                         \n                        Since the value that   approaches as   depends on how   approaches  , we can say that the limit does not exist.\n                     \n                In general, showing limits exist for functions of several variables can be tricky.\n                However, occasionally we can use some tricks to make these problems more manageable.\n             Showing a limit exists \n                        Find  .\n                     \n                        Since the inside of the limit depends on  , this suggests that switching to polar coordinates might be beneficial.\n                        So let's try that!\n                         \n                        Here's why this helps us.\n                        If we look at our new limit, we see that it doesn't depend on   at all.\n                        In other words,  it doesn't depend on the direction  we approach the origin from, just the distance from the origin  .\n                        So\n                         \n                        and so the original limit also equals  .\n                     Continuous Functions \n                Now that we have the notion of limit, we can define continuous functions of two variables.\n             functions of several variables two variables continuity Continuous Function of Two Variables continuous \n                We won't typically use the definition of continuity in this course.\n                We'll just make of several common types of continuous functions:\n             Polynomials in two variables, such as  , are continuous on  . Ratios of polynomials (i.e.  rational functions ), such as  , are continuous on their domains. Compositions of the form  , where   and   are continuous, are continuous wherever they are defined. Limit of a continuous function \n                        Let  .\n                        Find\n                         \n                     \n                        First, note that this is a composition of continuous functions, so   should be continuous wherever it's defined.\n                        Since this is defined at  , we can say that   is continuous there as well and that\n                         \n                     \n                SUGGESTED PROBLEMS: 3, 11, 19, 23, 31\n             "
},
{
  "id": "definition-limit-of-a-function-of-two-variables",
  "level": "2",
  "url": "section-limits-and-continuity.html#definition-limit-of-a-function-of-two-variables",
  "type": "Definition",
  "number": "12.2.1",
  "title": "Limit of a Function of Two Variables.",
  "body": "functions of several variables two variables limits Limit of a Function of Two Variables \n                        Let   be some function and let   be a point arbitrarily close to the domain of  .\n                        We say that\n                         \n                        if   gets arbitrarily close to   as   gets arbitrarily close to  .\n                     "
},
{
  "id": "example-288",
  "level": "2",
  "url": "section-limits-and-continuity.html#example-288",
  "type": "Example",
  "number": "12.2.2",
  "title": "",
  "body": "\n                        Find \n                         \n                        or show that it doesn't exist.\n                     \n                        First, we'll start simple.\n                        If we set   then the limit becomes\n                         \n                        Likewise, if we set   then the limit becomes\n                         \n                        From this, we might suspect that the limit actually exists. \n                        However, we need to make sure that this approaches   along  all possible paths  to  .\n                        Here's another path we can try:  .\n                        If we do this, then the limit becomes\n                         \n                        Since the value that   approaches as   depends on how   approaches  , we can say that the limit does not exist.\n                     "
},
{
  "id": "example-showing-a-limit-exists",
  "level": "2",
  "url": "section-limits-and-continuity.html#example-showing-a-limit-exists",
  "type": "Example",
  "number": "12.2.3",
  "title": "Showing a limit exists.",
  "body": "Showing a limit exists \n                        Find  .\n                     \n                        Since the inside of the limit depends on  , this suggests that switching to polar coordinates might be beneficial.\n                        So let's try that!\n                         \n                        Here's why this helps us.\n                        If we look at our new limit, we see that it doesn't depend on   at all.\n                        In other words,  it doesn't depend on the direction  we approach the origin from, just the distance from the origin  .\n                        So\n                         \n                        and so the original limit also equals  .\n                     "
},
{
  "id": "definition-continuous-function-of-two-variables",
  "level": "2",
  "url": "section-limits-and-continuity.html#definition-continuous-function-of-two-variables",
  "type": "Definition",
  "number": "12.2.4",
  "title": "Continuous Function of Two Variables.",
  "body": "functions of several variables two variables continuity Continuous Function of Two Variables continuous "
},
{
  "id": "example-limit-of-a-continuous-function",
  "level": "2",
  "url": "section-limits-and-continuity.html#example-limit-of-a-continuous-function",
  "type": "Example",
  "number": "12.2.5",
  "title": "Limit of a continuous function.",
  "body": "Limit of a continuous function \n                        Let  .\n                        Find\n                         \n                     \n                        First, note that this is a composition of continuous functions, so   should be continuous wherever it's defined.\n                        Since this is defined at  , we can say that   is continuous there as well and that\n                         \n                     "
},
{
  "id": "section-partial-derivatives",
  "level": "1",
  "url": "section-partial-derivatives.html",
  "type": "Section",
  "number": "12.3",
  "title": "Partial Derivatives",
  "body": "Partial Derivatives \n            Now that we know how to take limits for functions of two variables, we can define a notion of derivative for these functions as well, which we'll call the  partial derivative .\n            The main idea behind the partial derivative is to measure how a function   changes as a single variable changes.\n            Although the definition given is only for functions of two variables, it also extends to functions of many variables.\n         partial derivatives Partial Derivatives partial derivative of   with respect to  partial derivative of   with respect to  \n            When computing partial derivatives with respect to  , you just need to differentiate   treating it as a function of   alone and considering   as a constant.\n            Similarly, if you want to compute   you differentiate with respect to   and treat   as constant.\n         \n                    Let  .\n                    Find  .\n                 \n                    Since we need to find  , we differentiate   with respect to   and treat   as a constant:\n                     \n                 \n            Geometrically,   represents the rate of change of the surface   at the point   in the   direction, and a similar statement is true for  .\n         Partial derivatives on the unit sphere \n                    Let  .\n                    Where is   equal to  ?\n                 \n                    We can find this algebraically, but we'll try to answer this geometrically instead.\n                    First, note that   is actually the top half of the unit sphere.\n                    If we're trying to find where   is zero, then we need to find where this surface is \"flat\" when moving in the   direction.\n                    If we think about this a bit, this should only occur when  , i.e. along the  -axis.\n                    At any other location on the unit sphere, moving in the  -direction on the unit sphere requires going uphill or downhill, which means   at these locations.\n                 mixed derivatives Mixed partials \n                    Let   where   are constants.\n                    Find the mixed partials   and  .\n                 \n                    We have\n                     \n                    as well as\n                     \n                 \n            In the last example the mixed partial were equal, but this is not always true.\n            However, if   is a function with \"nice\" mixed partial derivatives, then its mixed partials will be equal.\n         Clairaut's Theorem \n                    Suppose that   is defined on a disk   that contains the point  .\n                    If   and   are both continuous on  , then\n                     \n                    In other words, the mixed partials are equal to each other wherever they happen to be continuous.\n                 partial differential equations (PDEs) The Wave Equation wave equation \n                    We need to plug   into the PDE and check that it satisfies the PDE.\n                    Since\n                     \n                    it follows that  .\n                    So   satisfies the wave equation with  , and so is a solution of the wave equation.\n                 \n                SUGGESTED PROBLEMS: 1, 3, 7, 11, 19, 31, 45, 49, 51, 53, 61\n             "
},
{
  "id": "definition-partial-derivatives",
  "level": "2",
  "url": "section-partial-derivatives.html#definition-partial-derivatives",
  "type": "Definition",
  "number": "12.3.1",
  "title": "Partial Derivatives.",
  "body": "partial derivatives Partial Derivatives partial derivative of   with respect to  partial derivative of   with respect to  "
},
{
  "id": "example-291",
  "level": "2",
  "url": "section-partial-derivatives.html#example-291",
  "type": "Example",
  "number": "12.3.2",
  "title": "",
  "body": "\n                    Let  .\n                    Find  .\n                 \n                    Since we need to find  , we differentiate   with respect to   and treat   as a constant:\n                     \n                 "
},
{
  "id": "example-partial-derivatives-on-the-unit-sphere",
  "level": "2",
  "url": "section-partial-derivatives.html#example-partial-derivatives-on-the-unit-sphere",
  "type": "Example",
  "number": "12.3.3",
  "title": "Partial derivatives on the unit sphere.",
  "body": "Partial derivatives on the unit sphere \n                    Let  .\n                    Where is   equal to  ?\n                 \n                    We can find this algebraically, but we'll try to answer this geometrically instead.\n                    First, note that   is actually the top half of the unit sphere.\n                    If we're trying to find where   is zero, then we need to find where this surface is \"flat\" when moving in the   direction.\n                    If we think about this a bit, this should only occur when  , i.e. along the  -axis.\n                    At any other location on the unit sphere, moving in the  -direction on the unit sphere requires going uphill or downhill, which means   at these locations.\n                 "
},
{
  "id": "p-1404",
  "level": "2",
  "url": "section-partial-derivatives.html#p-1404",
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
  "body": "Mixed partials \n                    Let   where   are constants.\n                    Find the mixed partials   and  .\n                 \n                    We have\n                     \n                    as well as\n                     \n                 "
},
{
  "id": "theorem-clairaut-s-theorem",
  "level": "2",
  "url": "section-partial-derivatives.html#theorem-clairaut-s-theorem",
  "type": "Theorem",
  "number": "12.3.5",
  "title": "Clairaut's Theorem.",
  "body": "Clairaut's Theorem \n                    Suppose that   is defined on a disk   that contains the point  .\n                    If   and   are both continuous on  , then\n                     \n                    In other words, the mixed partials are equal to each other wherever they happen to be continuous.\n                 "
},
{
  "id": "p-1409",
  "level": "2",
  "url": "section-partial-derivatives.html#p-1409",
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
  "body": "The Wave Equation wave equation \n                    We need to plug   into the PDE and check that it satisfies the PDE.\n                    Since\n                     \n                    it follows that  .\n                    So   satisfies the wave equation with  , and so is a solution of the wave equation.\n                 "
},
{
  "id": "section-tangent-planes-and-linear-approximations",
  "level": "1",
  "url": "section-tangent-planes-and-linear-approximations.html",
  "type": "Section",
  "number": "12.4",
  "title": "Tangent Planes and Linear Approximations",
  "body": "Tangent Planes and Linear Approximations \n                In Calculus I, derivatives are used to find linear approximations to functions of the form  .\n                We can use partial derivatives to do the same for functions with several independent variables.\n             Tangent Planes tangent plane \n                We'd like to find the equation of this plane.\n                First, recall that every plane can be described by an equation of the form\n                 \n                We can view   and   as given, so we just need to find  .\n                If we assume that  , then we can rewrite this equation to obtain\n                 \n                where   and  .\n                If we set  , then we have  .\n                This is the equation of a line tangent to the surface and parallel to the  -axis, and so the slope of this line must be\n                 \n                since the slope of a tangent line in the  -direction gives the rate of change in the  -direction.\n                Similarly, \n                 \n                Putting all of this together gives the following theorem.\n             Tangent Planes to Surfaces tangent planes \n                        Let   be a surface and suppose that   has continuous partial derivatives at the point  .\n                        Then the tangent plane to the surface   at the point   is given by\n                         \n                        where  .\n                     Approximations by tangent planes \n                        Find the tangent plane to   at the point  .\n                        Use this to approximate  \n                     \n                        The equation of the tangent plane is given by\n                         \n                        which we can rewrite as \n                         \n                        So at  , we should have\n                         \n                     Linear Approximations linearization linearization Linearization \n                        Let   be a function for which   and   are both continuous at a point  .\n                        Then the linearization of   at   is the function   given by\n                         \n                     \n                For well-behaved functions (i.e. functions that have continuous partial derivatives),   if   is close to the point  .\n             Linearization of an exponential and a sinusoid \n                        Let  .\n                        Find the linearization of   at the point  .\n                     \n                        By  , the linearization is given by\n                         \n                     \n                  can also be extended to functions with more than two variables.\n             Linearization in three variables \n                        Let  .\n                        Find the linearization   at the point  .\n                     \n                        The formula we need to use now is\n                         \n                     \n                SUGGESTED PROBLEMS: 1, 15, 19\n             "
},
{
  "id": "p-1414",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#p-1414",
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
  "body": "Tangent Planes to Surfaces tangent planes \n                        Let   be a surface and suppose that   has continuous partial derivatives at the point  .\n                        Then the tangent plane to the surface   at the point   is given by\n                         \n                        where  .\n                     "
},
{
  "id": "example-approximations-by-tangent-planes",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#example-approximations-by-tangent-planes",
  "type": "Example",
  "number": "12.4.2",
  "title": "Approximations by tangent planes.",
  "body": "Approximations by tangent planes \n                        Find the tangent plane to   at the point  .\n                        Use this to approximate  \n                     \n                        The equation of the tangent plane is given by\n                         \n                        which we can rewrite as \n                         \n                        So at  , we should have\n                         \n                     "
},
{
  "id": "p-1419",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#p-1419",
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
  "body": "linearization Linearization \n                        Let   be a function for which   and   are both continuous at a point  .\n                        Then the linearization of   at   is the function   given by\n                         \n                     "
},
{
  "id": "example-linearization-of-an-exponential-and-a-sinusoid",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#example-linearization-of-an-exponential-and-a-sinusoid",
  "type": "Example",
  "number": "12.4.4",
  "title": "Linearization of an exponential and a sinusoid.",
  "body": "Linearization of an exponential and a sinusoid \n                        Let  .\n                        Find the linearization of   at the point  .\n                     \n                        By  , the linearization is given by\n                         \n                     "
},
{
  "id": "example-linearization-in-three-variables",
  "level": "2",
  "url": "section-tangent-planes-and-linear-approximations.html#example-linearization-in-three-variables",
  "type": "Example",
  "number": "12.4.5",
  "title": "Linearization in three variables.",
  "body": "Linearization in three variables \n                        Let  .\n                        Find the linearization   at the point  .\n                     \n                        The formula we need to use now is\n                         \n                     "
},
{
  "id": "section-the-chain-rule-in-several-variables",
  "level": "1",
  "url": "section-the-chain-rule-in-several-variables.html",
  "type": "Section",
  "number": "12.5",
  "title": "The Chain Rule in Several Variables",
  "body": "The Chain Rule in Several Variables \n            Recall that from Calc I, we know that\n             \n            This is just the the chain rule, which tells us how to differentiate functions that depend on other functions.\n            Or to think of it another way, it tells us how to differentiate  variables  like   that depend on other variables like   and  .\n            What we'd like to do now is to extend the chain rule to more complicated situations.\n            We'll start with the following formula.\n         chain rule one independent variable Chain Rule for One Independent Variable \n                    Let   be differentiable (so the partial derivatives   and   exist).\n                    If   and   both depend on   (i.e.   and  ), then\n                     \n                    See  .\n                 The chain rule for one independent variable. Using the multivariable chain rule \n                    Let   where\n                     \n                    Find  .\n                 \n                    First, let's try to simplify  .\n                    If we do so, we get\n                     \n                    Now, to find   we need to use the chain rule, which gives\n                     \n                    So\n                     \n                 \n            If we have more than one independent variable, then the situation becomes a little bit more complicated.\n         chain rule two independent variables Chain Rule with Two Independent Variables \n                    Let   be differentiable, and suppose that   and  .\n                    Then\n                     \n                 The chain rule for two independent variables. Chain rule with two independent variables \n                    Let  , where\n                     \n                    Find  .\n                 \n                    A good way to tackle these problems is to set up a tree diagram like   to list the dependencies between all of the variables.\n                    For  , we get\n                     Tree diagram for  . \n                    So we can say that\n                     \n                 Chain rule from a tree diagram \n                    Let  , where  ,  ,   and  .\n                    Assume that all of these functions are differentiable.\n                    Find a formula for  \n                 \n                    We can set up a tree diagram as above to find the right formula for  .\n                    If we do so, we obtain\n                     \n                 \n                SUGGESTED PROBLEMS: 1, 7, 11, 15, 21\n             "
},
{
  "id": "theorem-chain-rule-for-one-independent-variable",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#theorem-chain-rule-for-one-independent-variable",
  "type": "Theorem",
  "number": "12.5.1",
  "title": "Chain Rule for One Independent Variable.",
  "body": "chain rule one independent variable Chain Rule for One Independent Variable \n                    Let   be differentiable (so the partial derivatives   and   exist).\n                    If   and   both depend on   (i.e.   and  ), then\n                     \n                    See  .\n                 "
},
{
  "id": "figure-chain-rule-one-independent-variable",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#figure-chain-rule-one-independent-variable",
  "type": "Figure",
  "number": "12.5.2",
  "title": "",
  "body": "The chain rule for one independent variable. "
},
{
  "id": "example-using-multivariable-chain-rule",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#example-using-multivariable-chain-rule",
  "type": "Example",
  "number": "12.5.3",
  "title": "Using the multivariable chain rule.",
  "body": "Using the multivariable chain rule \n                    Let   where\n                     \n                    Find  .\n                 \n                    First, let's try to simplify  .\n                    If we do so, we get\n                     \n                    Now, to find   we need to use the chain rule, which gives\n                     \n                    So\n                     \n                 "
},
{
  "id": "theorem-chain-rule-with-two-independent-variables",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#theorem-chain-rule-with-two-independent-variables",
  "type": "Theorem",
  "number": "12.5.4",
  "title": "Chain Rule with Two Independent Variables.",
  "body": "chain rule two independent variables Chain Rule with Two Independent Variables \n                    Let   be differentiable, and suppose that   and  .\n                    Then\n                     \n                 "
},
{
  "id": "figure-chain-rule-two-independent-variables",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#figure-chain-rule-two-independent-variables",
  "type": "Figure",
  "number": "12.5.5",
  "title": "",
  "body": "The chain rule for two independent variables. "
},
{
  "id": "example-chain-rule-two-variables",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#example-chain-rule-two-variables",
  "type": "Example",
  "number": "12.5.6",
  "title": "Chain rule with two independent variables.",
  "body": "Chain rule with two independent variables \n                    Let  , where\n                     \n                    Find  .\n                 \n                    A good way to tackle these problems is to set up a tree diagram like   to list the dependencies between all of the variables.\n                    For  , we get\n                     Tree diagram for  . \n                    So we can say that\n                     \n                 "
},
{
  "id": "example-chain-rule-from-a-tree-diagram",
  "level": "2",
  "url": "section-the-chain-rule-in-several-variables.html#example-chain-rule-from-a-tree-diagram",
  "type": "Example",
  "number": "12.5.8",
  "title": "Chain rule from a tree diagram.",
  "body": "Chain rule from a tree diagram \n                    Let  , where  ,  ,   and  .\n                    Assume that all of these functions are differentiable.\n                    Find a formula for  \n                 \n                    We can set up a tree diagram as above to find the right formula for  .\n                    If we do so, we obtain\n                     \n                 "
},
{
  "id": "section-directional-derivatives-and-gradients",
  "level": "1",
  "url": "section-directional-derivatives-and-gradients.html",
  "type": "Section",
  "number": "12.6",
  "title": "Directional Derivatives and Gradients",
  "body": "Directional Derivatives and Gradients \n                For a differentiable function  , the partial derivatives   and   give the rates of change of   in the directions of the  -axis and  -axis, respectively.\n                To put this another way,   gives the rate of change of   in the direction of the vector  , and   gives the rate of change in the direction of the vector  .\n                But we have infinitely many directions to work with.\n                How can we find the rate of change of   in  any  direction?\n                We'll look at two tools to help us with this: directional derivatives and gradients.\n             The Directional Derivative \n                Suppose we have a function   defined at a point  .\n                We want to find how quickly   is changing in the direction of some unit vector  .\n                We can estimate this by moving from the point   by some small increment  , and evaluating   at this new point, which is just  .\n                So the approximate rate of change in   in the direction of   is given by\n                 \n                As  , this should become exact.\n                This leads us to our next definition.\n             directional derivative definition Directional Derivative directional derivative \n                We have a definition for the directional derivative, but we don't want to have to use this all the time.\n                So we'd like to get a more practical formula.\n             directional derivative formula Computing the Directional Derivative \n                        Let   be a function whose partial derivatives   and   exist and are continuous.\n                        Let   be a unit vector.\n                        Then   exists, and is given by\n                         \n                     \n                        First, set\n                         \n                        Then by the Calculus I definition of the derivative,\n                         \n                        On the other hand, if we set   and  , then  .\n                        We can then find   using the chain rule from   to get\n                         \n                        So  \n                        Therefore\n                         \n                     \n                The formula in   extends to functions such as   as well.\n                We just need to include more partial derivatives.\n             Computing a directional derivative \n                        Let  .\n                        Find the directional derivative of   in the direction of   at the point  .\n                     normalize Gradients gradient Gradient of a Function \n                        Let   be a function with partial derivatives  .\n                        The gradient of   is the vector  .\n                     Computing a gradient \n                        Let  .\n                        Compute  .\n                     \n                        We have\n                         \n                     \n                We can restate   very quickly in terms of the gradient.\n                In particular, if   is a vector (not necessarily a unit vector) then \n                 \n             Directional derivative using the gradient \n                        Is the function   increasing or decreasing at   and in the direction of  .\n                     \n                        We need to compute   and check if it's positive or negative.\n                        Since   and  , it follows that\n                         \n                        Hence   is increasing at   and in the direction of  .\n                     \n                The gradient is also useful for telling us where a function is increasing and decreasing the greatest.\n                By  , we can write \n                 \n                where   is the acute angle between   and  .\n                It follows that\n                 \n                We summarize this in the following theorem.\n             gradient direction of greatest increase\/decrease Direction of Greatest Increase and Decrease \n                        Let   be a function with continuous first partial derivatives.\n                        Then   points in the direction of greatest increase of  , and the rate of maximum increase of   is given by  .\n                        Similarly,   points in the direction of greatest decrease, and the rate of maximum decrease of   is given by  .\n                     Finding the direction and rate of maximum decrease \n                        Let  .\n                        What is the direction and rate of greatest decrease of   at the point  ?\n                     \n                        We need to compute  , which gives\n                         \n                        So the direction of greatest decrease at   is given by  .\n                        The rate of maximum decrease in this direction is  .\n                     \n                SUGGESTED PROBLEMS: 1, 3, 11, 15, 21\n             "
},
{
  "id": "definition-directional-derivative",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#definition-directional-derivative",
  "type": "Definition",
  "number": "12.6.1",
  "title": "Directional Derivative.",
  "body": "directional derivative definition Directional Derivative directional derivative "
},
{
  "id": "theorem-computing-the-directional-derivative",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#theorem-computing-the-directional-derivative",
  "type": "Theorem",
  "number": "12.6.2",
  "title": "Computing the Directional Derivative.",
  "body": "directional derivative formula Computing the Directional Derivative \n                        Let   be a function whose partial derivatives   and   exist and are continuous.\n                        Let   be a unit vector.\n                        Then   exists, and is given by\n                         \n                     \n                        First, set\n                         \n                        Then by the Calculus I definition of the derivative,\n                         \n                        On the other hand, if we set   and  , then  .\n                        We can then find   using the chain rule from   to get\n                         \n                        So  \n                        Therefore\n                         \n                     "
},
{
  "id": "example-computing-a-directional-derivative",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#example-computing-a-directional-derivative",
  "type": "Example",
  "number": "12.6.3",
  "title": "Computing a directional derivative.",
  "body": "Computing a directional derivative \n                        Let  .\n                        Find the directional derivative of   in the direction of   at the point  .\n                     normalize "
},
{
  "id": "p-1448",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#p-1448",
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
  "body": "Gradient of a Function \n                        Let   be a function with partial derivatives  .\n                        The gradient of   is the vector  .\n                     "
},
{
  "id": "example-computing-a-gradient",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#example-computing-a-gradient",
  "type": "Example",
  "number": "12.6.5",
  "title": "Computing a gradient.",
  "body": "Computing a gradient \n                        Let  .\n                        Compute  .\n                     \n                        We have\n                         \n                     "
},
{
  "id": "example-directional-derivative-using-the-gradient",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#example-directional-derivative-using-the-gradient",
  "type": "Example",
  "number": "12.6.6",
  "title": "Directional derivative using the gradient.",
  "body": "Directional derivative using the gradient \n                        Is the function   increasing or decreasing at   and in the direction of  .\n                     \n                        We need to compute   and check if it's positive or negative.\n                        Since   and  , it follows that\n                         \n                        Hence   is increasing at   and in the direction of  .\n                     "
},
{
  "id": "theorem-direction-of-greatest-increase-and-decrease",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#theorem-direction-of-greatest-increase-and-decrease",
  "type": "Theorem",
  "number": "12.6.7",
  "title": "Direction of Greatest Increase and Decrease.",
  "body": "gradient direction of greatest increase\/decrease Direction of Greatest Increase and Decrease \n                        Let   be a function with continuous first partial derivatives.\n                        Then   points in the direction of greatest increase of  , and the rate of maximum increase of   is given by  .\n                        Similarly,   points in the direction of greatest decrease, and the rate of maximum decrease of   is given by  .\n                     "
},
{
  "id": "example-finding-the-direction-and-rate-of-maximum-decrease",
  "level": "2",
  "url": "section-directional-derivatives-and-gradients.html#example-finding-the-direction-and-rate-of-maximum-decrease",
  "type": "Example",
  "number": "12.6.8",
  "title": "Finding the direction and rate of maximum decrease.",
  "body": "Finding the direction and rate of maximum decrease \n                        Let  .\n                        What is the direction and rate of greatest decrease of   at the point  ?\n                     \n                        We need to compute  , which gives\n                         \n                        So the direction of greatest decrease at   is given by  .\n                        The rate of maximum decrease in this direction is  .\n                     "
},
{
  "id": "section-extreme-values",
  "level": "1",
  "url": "section-extreme-values.html",
  "type": "Section",
  "number": "12.7",
  "title": "Extreme Values",
  "body": "Extreme Values \n                Finding the extreme values of a function remains in important goal for functions of several independent variables.\n             Local Maxima and Minima \n                One of the most important applications of the derivative in Calculus I is in finding local maxima and minima of functions  .\n                We'd like to extend this concept to functions of multiple variables, but first we need to define what local maxima and minima actually are in this new setting.\n             maxima and minima local Local Maxima and Minima \n                        We say that a function   has a local maximum (respectively, local minimum) at   if   (respectively,  ) for all points   contained in some disk centered at  .\n                     \n                Just as we used derivatives in Calculus I to find maxima and minima, we can use partial derivatives for that purpose here.\n             Derivatives at a Local Maximum or Minimum \n                        Suppose that   is differentiable, and has a local maximum or minimum at  .\n                        Then \n                         \n                     critical point Critical points of an exponential \n                        Let  .\n                        Find its critical points.\n                     \n                        Find the critical points by solving   and  .\n                        Since \n                         \n                        then   forces  .\n                        Similarly, since\n                         \n                        then   forces   or  .\n                        So the only points that satisfy  both    and   are  \n                        So these must be our critical points.\n                     second derivative test maxima and minima second derivative test Second Derivative Test saddle point \n                The quantity   from   is actually a determinant:\n                 \n             Local extrema of an exponential \n                        Classify the critical points of the function from  .\n                     \n                        We have  , and the critical points are   and  .\n                        We need to find  .\n                        Since  , we get\n                         \n                        and similarly\n                         \n                        At  , we have\n                         \n                        and   as well.\n                        So this is a local minimum.\n                        At  , we still have  , but now  .\n                        So this is a local maximum.\n                     Absolute Maxima and Minima \n                Even if a function   has a local minimum at  , there's no guarantee that this is the smallest value the function can take on its domain.\n                A similar statement is also true for local maxima, which leads to the following definition.\n             maxima and minima absolute Absolute Maxima and Minima absolute minimum absolute maximum \n                As a first example, consider  , which gives the top half of the unit sphere.\n                Using critical points and the second derivative test, we can show that the origin is a local maximum.\n                However, this method is blind to the absolute minimum values of  , which occur at the boundary  , where the sphere intersects the  -plane.\n                So this means we can't use critical points alone to find absolute maxima and minima, in general.\n                However, the following theorem says that they'll get us most of the way there.\n             Extreme Value Theorem functions of several variables Extreme Value Theorem \n                        Let   be a continuous function defined on a closed and bounded set  .\n                         This means that   is finite in size and that it includes its boundary. \n                        Then   is guaranteed to have an absolute maximum and absolute minimum.\n                        Furthermore, these must occur either at a critical point or on the boundary of  .\n                     Absolute values on a triangle \n                        Let  .\n                        Find the absolute maxima and minima of   on the triangle with vertices   and  .\n                     \n                        We'll start off by finding any critical points.\n                        Since  , we see that the only critical point is  .\n                        Now we need to see what happens to   on the edges of the triangle, and to do that we need to find equations for the edges.\n                        Let   denote the edge from   to  ,   the edge from   to   and   the edge from   to  .\n                        Then   is given by the equation  ,   is given by   and   is given by  .\n                        So on   we have  , on   we have\n                         \n                        and on   we have  .\n                        We can then set up the following table:\n                     Absolute values on the boundary edge max min \n                        Finally, at the critical point   we have  .\n                        So putting this all together, we can say that the absolute maximum of   on this triangle is  , and this is reached at  .\n                        Similarly, the absolute minimum is  , and this is reached at the origin. \n                     \n                Note that in  , we don't actually determine if the critical point is a local maximum or minimum.\n                We just compare the value   reaches at the critical point with its maximum and minimum values on the boundary.\n             Absolute maxima and minima on a circular sector \n                        Let   and let\n                         \n                        Find the absolute maxima and minima of   on  .\n                     \n                        First we'll find the critical point(s).\n                        If we compute  , we get  .\n                        This is   if and only if  , and if   then this forces  .\n                     \n                        Now we need to determine the maximum and minimum values of   on the boundary of  .\n                        Let   denote the line segment from   to  ,   the circular arc from   to   and   the line segment from   to  .\n                        Then on   we have  , on   we have \n                         \n                        and on   we have  .\n                        So the smallest value that   takes on the boundary is  , and the largest value is  .\n                        So the absolute maximum is   and the absolute minimum is  .\n                     \n                SUGGESTED PROBLEMS: 1, 3, 13, 23\n             "
},
{
  "id": "definition-local-maxima-and-minima",
  "level": "2",
  "url": "section-extreme-values.html#definition-local-maxima-and-minima",
  "type": "Definition",
  "number": "12.7.1",
  "title": "Local Maxima and Minima.",
  "body": "maxima and minima local Local Maxima and Minima \n                        We say that a function   has a local maximum (respectively, local minimum) at   if   (respectively,  ) for all points   contained in some disk centered at  .\n                     "
},
{
  "id": "theorem-derivatives-at-a-local-maximum-or-minimum",
  "level": "2",
  "url": "section-extreme-values.html#theorem-derivatives-at-a-local-maximum-or-minimum",
  "type": "Theorem",
  "number": "12.7.2",
  "title": "Derivatives at a Local Maximum or Minimum.",
  "body": "Derivatives at a Local Maximum or Minimum \n                        Suppose that   is differentiable, and has a local maximum or minimum at  .\n                        Then \n                         \n                     "
},
{
  "id": "p-1465",
  "level": "2",
  "url": "section-extreme-values.html#p-1465",
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
  "body": "Critical points of an exponential \n                        Let  .\n                        Find its critical points.\n                     \n                        Find the critical points by solving   and  .\n                        Since \n                         \n                        then   forces  .\n                        Similarly, since\n                         \n                        then   forces   or  .\n                        So the only points that satisfy  both    and   are  \n                        So these must be our critical points.\n                     "
},
{
  "id": "p-1468",
  "level": "2",
  "url": "section-extreme-values.html#p-1468",
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
  "body": "maxima and minima second derivative test Second Derivative Test saddle point "
},
{
  "id": "example-local-extrema-of-an-exponential",
  "level": "2",
  "url": "section-extreme-values.html#example-local-extrema-of-an-exponential",
  "type": "Example",
  "number": "12.7.5",
  "title": "Local extrema of an exponential.",
  "body": "Local extrema of an exponential \n                        Classify the critical points of the function from  .\n                     \n                        We have  , and the critical points are   and  .\n                        We need to find  .\n                        Since  , we get\n                         \n                        and similarly\n                         \n                        At  , we have\n                         \n                        and   as well.\n                        So this is a local minimum.\n                        At  , we still have  , but now  .\n                        So this is a local maximum.\n                     "
},
{
  "id": "definition-absolute-maxima-and-minima",
  "level": "2",
  "url": "section-extreme-values.html#definition-absolute-maxima-and-minima",
  "type": "Definition",
  "number": "12.7.6",
  "title": "Absolute Maxima and Minima.",
  "body": "maxima and minima absolute Absolute Maxima and Minima absolute minimum absolute maximum "
},
{
  "id": "theorem-extreme-value-multivariable",
  "level": "2",
  "url": "section-extreme-values.html#theorem-extreme-value-multivariable",
  "type": "Theorem",
  "number": "12.7.7",
  "title": "Extreme Value Theorem.",
  "body": "Extreme Value Theorem functions of several variables Extreme Value Theorem \n                        Let   be a continuous function defined on a closed and bounded set  .\n                         This means that   is finite in size and that it includes its boundary. \n                        Then   is guaranteed to have an absolute maximum and absolute minimum.\n                        Furthermore, these must occur either at a critical point or on the boundary of  .\n                     "
},
{
  "id": "example-absolute-values-on-a-triangle",
  "level": "2",
  "url": "section-extreme-values.html#example-absolute-values-on-a-triangle",
  "type": "Example",
  "number": "12.7.8",
  "title": "Absolute values on a triangle.",
  "body": "Absolute values on a triangle \n                        Let  .\n                        Find the absolute maxima and minima of   on the triangle with vertices   and  .\n                     \n                        We'll start off by finding any critical points.\n                        Since  , we see that the only critical point is  .\n                        Now we need to see what happens to   on the edges of the triangle, and to do that we need to find equations for the edges.\n                        Let   denote the edge from   to  ,   the edge from   to   and   the edge from   to  .\n                        Then   is given by the equation  ,   is given by   and   is given by  .\n                        So on   we have  , on   we have\n                         \n                        and on   we have  .\n                        We can then set up the following table:\n                     Absolute values on the boundary edge max min \n                        Finally, at the critical point   we have  .\n                        So putting this all together, we can say that the absolute maximum of   on this triangle is  , and this is reached at  .\n                        Similarly, the absolute minimum is  , and this is reached at the origin. \n                     "
},
{
  "id": "example-absolute-maxima-and-minima-on-a-circular-sector",
  "level": "2",
  "url": "section-extreme-values.html#example-absolute-maxima-and-minima-on-a-circular-sector",
  "type": "Example",
  "number": "12.7.10",
  "title": "Absolute maxima and minima on a circular sector.",
  "body": "Absolute maxima and minima on a circular sector \n                        Let   and let\n                         \n                        Find the absolute maxima and minima of   on  .\n                     \n                        First we'll find the critical point(s).\n                        If we compute  , we get  .\n                        This is   if and only if  , and if   then this forces  .\n                     \n                        Now we need to determine the maximum and minimum values of   on the boundary of  .\n                        Let   denote the line segment from   to  ,   the circular arc from   to   and   the line segment from   to  .\n                        Then on   we have  , on   we have \n                         \n                        and on   we have  .\n                        So the smallest value that   takes on the boundary is  , and the largest value is  .\n                        So the absolute maximum is   and the absolute minimum is  .\n                     "
},
{
  "id": "section-lagrange-multipliers",
  "level": "1",
  "url": "section-lagrange-multipliers.html",
  "type": "Section",
  "number": "12.8",
  "title": "Lagrange Multipliers",
  "body": "Lagrange Multipliers \n              is useful for finding local maxima and minima of a function  , but it's often the case where we have an additional restriction on the variables   and  , which we interpret as an equality   for some constant  .\n            Geometrically, this reduces down to finding the maximum and minimum values of   on the curve  .\n            This problem can be attacked algebraically using contours, as in the example below.\n         Constrained Optimization Using Contours \n              Estimate the minimum and maximum values of   subject to the constraint  .\n             \n              The constraint is represented as a contour plot of  .\n              We can compare this with contours of  , and any point where there two contours intersect is a point for which the constraint is satisfied.\n             An interactive contour plot of   and  . \n                Using these contours, we see that the maximum value of   subject to   appears to be  , while the minimum value of   subject to   appears to be  .\n               Lagrange multipliers Lagrange multipliers Method of Lagrange Multipliers Lagrange multiplier Maximizing volume \n                    A lidless box may be made from  12  of material.\n                    What dimensions give the maximum volume?\n                 \n                    If we denote the dimensions of the box by  , then the function we need to maximize is  .\n                    However, not all dimensions are valid since we're only allowed to use  12  of material.\n                    This means that the surface area of the box, which is given by  , must be equal to  .\n                    So our constraint is that  , and because we have this constraint we'll try to solve this using  .\n                 \n                    To begin, we need to solve  .\n                    Equivalently, we need to solve the system\n                     \n                    which turns into\n                     \n                    Now, we don't actually need to find a value for  .\n                    We just need values for  .\n                    If we multiply these equations by  ,   and   respectively, then we get\n                     \n                    or just\n                     \n                    We can also divide by  , since there's no way   could equal   and satisfy the above equations (since   are all positive).\n                    This gives us\n                     \n                 \n                    The first two expressions in   simplify to  , while the first and third reduce to  .\n                    So\n                     .\n                    But these variables also need to satisfy  :\n                     \n                    Therefore  , so we take   (since we're dealing with dimensions).\n                    This also means that  .\n                    So the point   is therefore our candidate for the dimensions that maximize volume subject to the constraint  .\n                 \n                    In order to actually verify that   is actually the largest possible volume we can obtain, we need to show that it's actually a maximum and not a minimum.\n                    This means we need to find another point   that also satisfies  , and show that it gives a smaller value for  .\n                    One such point is just  , and  .\n                    So   is actually a maximum value and not a minimum value.\n                 \n            The points we'll obtain using Lagrange multipliers will be either maxima or minima, but the method itself doesn't always tell us which is which.\n            As in the last example, sometimes it's up to us to find that on our own.\n         Extreme values on a paraboloid \n                    Find the absolute maxima and minima for   over this disk  .\n                 \n                    First, recall from   that the absolute maxima and minima of a differentiable function over a bounded set occur at either a critical point or somewhere on the boundary.\n                    So first, we need to find if   has any critical points inside the disk.\n                    If we solve  , then we quickly get that   is a critical point, and hence a possible maximum or minimum value.\n                    The only other place we need to check is the boundary  , and this is something we can use Lagrange multipliers for.\n                 \n                    Set  .\n                    Then we need to find the extreme values of   subject to the constraint  .\n                    The system of equations we need to solve is then\n                     \n                    The first equation is true if  , but then this forces   in the second equation.\n                    If we then plug   into the constraint, this forces  .\n                    So the case   gives us two points to test:   and  .\n                    On the other hand, the second equation is true if  .\n                    This then forces   and  , which gives us the points   and  .\n                    Finally, if  , then this forces  .\n                    But there's no way to satisfy the constraint if  , so we discard this possibility.\n                 \n                    So we have five points that we need to check, which we arrange in the following table:\n                     Absolute values on the disk \n                    So the absolute minimum is  , which occurs at the origin.\n                    The absolute maximum is  , which occurs at the points  .\n                 Maximizing the volume of a prism within an ellipsoid \n                    A rectangular prism, centered at the origin and with sides parallel to the coordinate planes, is inscribed within the ellipsoid  .\n                    Find the dimensions of the prism that maximize the volume.\n                 \n                    Let   denote the corner of the prism located in the first octant.\n                    Then we want to maximize   subject to the constraint  .\n                    So we'll use the method of Lagrange multipliers again to get the system\n                     \n                    We can assume that   are all positive (since we're trying to find the  maximum  volume), so we can go ahead and solve each equation for   to get\n                     \n                    Setting the first two fractions equal and simplifying gives  .\n                    Similarly, the second and third fractions give  .\n                    So \n                     \n                 \n                    Now we plug this into our constraint to get\n                     \n                    so  .\n                    Since we're assuming that   lies in the first octant, this means that  , along with  and  .\n                    So \n                     \n                    To check that these values actually maximize  , we can compare them with the point  , which also satisfies the constraint  .\n                    Since  , this means that the dimensions that maximize the volume are given by \n                     \n                 \n            SUGGESTED PROBLEMS: 1-11 odd, 17, 19\n         "
},
{
  "id": "example-constrained-optimization-using-contours",
  "level": "2",
  "url": "section-lagrange-multipliers.html#example-constrained-optimization-using-contours",
  "type": "Example",
  "number": "12.8.1",
  "title": "Constrained Optimization Using Contours.",
  "body": "Constrained Optimization Using Contours \n              Estimate the minimum and maximum values of   subject to the constraint  .\n             \n              The constraint is represented as a contour plot of  .\n              We can compare this with contours of  , and any point where there two contours intersect is a point for which the constraint is satisfied.\n             An interactive contour plot of   and  . \n                Using these contours, we see that the maximum value of   subject to   appears to be  , while the minimum value of   subject to   appears to be  .\n               "
},
{
  "id": "p-1490",
  "level": "2",
  "url": "section-lagrange-multipliers.html#p-1490",
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
  "body": "Lagrange multipliers Method of Lagrange Multipliers Lagrange multiplier "
},
{
  "id": "example-maximizing-volume",
  "level": "2",
  "url": "section-lagrange-multipliers.html#example-maximizing-volume",
  "type": "Example",
  "number": "12.8.4",
  "title": "Maximizing volume.",
  "body": "Maximizing volume \n                    A lidless box may be made from  12  of material.\n                    What dimensions give the maximum volume?\n                 \n                    If we denote the dimensions of the box by  , then the function we need to maximize is  .\n                    However, not all dimensions are valid since we're only allowed to use  12  of material.\n                    This means that the surface area of the box, which is given by  , must be equal to  .\n                    So our constraint is that  , and because we have this constraint we'll try to solve this using  .\n                 \n                    To begin, we need to solve  .\n                    Equivalently, we need to solve the system\n                     \n                    which turns into\n                     \n                    Now, we don't actually need to find a value for  .\n                    We just need values for  .\n                    If we multiply these equations by  ,   and   respectively, then we get\n                     \n                    or just\n                     \n                    We can also divide by  , since there's no way   could equal   and satisfy the above equations (since   are all positive).\n                    This gives us\n                     \n                 \n                    The first two expressions in   simplify to  , while the first and third reduce to  .\n                    So\n                     .\n                    But these variables also need to satisfy  :\n                     \n                    Therefore  , so we take   (since we're dealing with dimensions).\n                    This also means that  .\n                    So the point   is therefore our candidate for the dimensions that maximize volume subject to the constraint  .\n                 \n                    In order to actually verify that   is actually the largest possible volume we can obtain, we need to show that it's actually a maximum and not a minimum.\n                    This means we need to find another point   that also satisfies  , and show that it gives a smaller value for  .\n                    One such point is just  , and  .\n                    So   is actually a maximum value and not a minimum value.\n                 "
},
{
  "id": "example-extreme-values-on-a-paraboloid",
  "level": "2",
  "url": "section-lagrange-multipliers.html#example-extreme-values-on-a-paraboloid",
  "type": "Example",
  "number": "12.8.5",
  "title": "Extreme values on a paraboloid.",
  "body": "Extreme values on a paraboloid \n                    Find the absolute maxima and minima for   over this disk  .\n                 \n                    First, recall from   that the absolute maxima and minima of a differentiable function over a bounded set occur at either a critical point or somewhere on the boundary.\n                    So first, we need to find if   has any critical points inside the disk.\n                    If we solve  , then we quickly get that   is a critical point, and hence a possible maximum or minimum value.\n                    The only other place we need to check is the boundary  , and this is something we can use Lagrange multipliers for.\n                 \n                    Set  .\n                    Then we need to find the extreme values of   subject to the constraint  .\n                    The system of equations we need to solve is then\n                     \n                    The first equation is true if  , but then this forces   in the second equation.\n                    If we then plug   into the constraint, this forces  .\n                    So the case   gives us two points to test:   and  .\n                    On the other hand, the second equation is true if  .\n                    This then forces   and  , which gives us the points   and  .\n                    Finally, if  , then this forces  .\n                    But there's no way to satisfy the constraint if  , so we discard this possibility.\n                 \n                    So we have five points that we need to check, which we arrange in the following table:\n                     Absolute values on the disk \n                    So the absolute minimum is  , which occurs at the origin.\n                    The absolute maximum is  , which occurs at the points  .\n                 "
},
{
  "id": "example-maximizing-the-volume-of-a-prism-within-an-ellipsoid",
  "level": "2",
  "url": "section-lagrange-multipliers.html#example-maximizing-the-volume-of-a-prism-within-an-ellipsoid",
  "type": "Example",
  "number": "12.8.7",
  "title": "Maximizing the volume of a prism within an ellipsoid.",
  "body": "Maximizing the volume of a prism within an ellipsoid \n                    A rectangular prism, centered at the origin and with sides parallel to the coordinate planes, is inscribed within the ellipsoid  .\n                    Find the dimensions of the prism that maximize the volume.\n                 \n                    Let   denote the corner of the prism located in the first octant.\n                    Then we want to maximize   subject to the constraint  .\n                    So we'll use the method of Lagrange multipliers again to get the system\n                     \n                    We can assume that   are all positive (since we're trying to find the  maximum  volume), so we can go ahead and solve each equation for   to get\n                     \n                    Setting the first two fractions equal and simplifying gives  .\n                    Similarly, the second and third fractions give  .\n                    So \n                     \n                 \n                    Now we plug this into our constraint to get\n                     \n                    so  .\n                    Since we're assuming that   lies in the first octant, this means that  , along with  and  .\n                    So \n                     \n                    To check that these values actually maximize  , we can compare them with the point  , which also satisfies the constraint  .\n                    Since  , this means that the dimensions that maximize the volume are given by \n                     \n                 "
},
{
  "id": "section-double-integrals-over-rectangles",
  "level": "1",
  "url": "section-double-integrals-over-rectangles.html",
  "type": "Section",
  "number": "13.1",
  "title": "Double Integrals over Rectangles",
  "body": "Double Integrals over Rectangles \n        We want to try to find the volume under the surface   and above some rectangle   in the  -plane.\n        If   is a constant function, then this is easy: the resulting surface and the  -plane then form a rectangular prism.\n        If   is more complicated, then we might not have a nice volume formula to use.\n        However, we can steal an idea from Calculus I and try to approximate the volume by using simpler shapes; in this case, rectangular prisms.\n       Riemann Sums \n        Given a continuous function   defined over the rectangle\n         \n        to approximate the volume under   and above   we'll divide the rectangle up into smaller rectangles.\n        In particular, let's divide the intervals   and   into subintervals   where\n         \n        If we let   denote the subrectangle given by\n         \n        then the volume under   and above   is about equal to\n         \n        Hence the volume under   and above   should be about equal to\n         \n        If we replace   with   and send  , this approximation becomes exact.\n        This gives us the following definition.\n       double integrals over a rectangle Double Integral Over a Rectangle double integral integrable \n        The geometric intuition behind the double integral is that it represents a volume under a surface.\n        Negative values for a double integral indicate that a surface tends to lie below the  -plane, while positive values indicate that the surface tends to lie above the  -plane.\n        Furthermore, continuous functions are integrable over any rectangle  .\n       Double integrals by volume \n            Let   and let\n             \n            Find  .\n           \n            If we graph  , we get a triangular cylinder running along the   axis.\n            The volume of this cylinder over   is just the area of the triangular \"base\" times the \"height,\" or just\n             \n            So\n             \n           Fubini's Theorem \n        Now that we have a definition for the double integral, we want to find a better way of computing it.\n        Thankfully, we do have such a method: Fubini's Theorem.\n       Fubini's Theorem \n            Let   be continuous on the rectangle\n             \n            Then\n             \n           Fubini's Theorem double integrals Double integrals by Fubini's Theorem \n            Let   and let\n             \n            Find  .\n           \n            We found this previously in  , so we'll try it again using Fubini's Theorem and see if we get the same answer.\n            By  , we have\n             \n           \n        The double integral, like the Calculus I integral, derivative and partial derivatives, is  linear .\n        This means that you can break it up over addition and pull constants outside of it.\n        In other words, if   and   are integrable and if   is a constant, then\n         \n       Double integral of a logarithm \n            Find\n             \n           \n            First, note that\n             \n            To find the first double integral on the right, first we integrate with respect to   to get\n             \n            Now we can use  -sub with   and   to get\n             \n            The same exact process shows that   must also equal  .\n            Therefore\n             \n           \n        SUGGESTED PROBLEMS: 7, 9, 15, 19\n       "
},
{
  "id": "definition-double-integral-over-a-rectangle",
  "level": "2",
  "url": "section-double-integrals-over-rectangles.html#definition-double-integral-over-a-rectangle",
  "type": "Definition",
  "number": "13.1.1",
  "title": "Double Integral Over a Rectangle.",
  "body": "double integrals over a rectangle Double Integral Over a Rectangle double integral integrable "
},
{
  "id": "example-double-integrals-by-volume",
  "level": "2",
  "url": "section-double-integrals-over-rectangles.html#example-double-integrals-by-volume",
  "type": "Example",
  "number": "13.1.2",
  "title": "Double integrals by volume.",
  "body": "Double integrals by volume \n            Let   and let\n             \n            Find  .\n           \n            If we graph  , we get a triangular cylinder running along the   axis.\n            The volume of this cylinder over   is just the area of the triangular \"base\" times the \"height,\" or just\n             \n            So\n             \n           "
},
{
  "id": "theorem-fubini-s-theorem",
  "level": "2",
  "url": "section-double-integrals-over-rectangles.html#theorem-fubini-s-theorem",
  "type": "Theorem",
  "number": "13.1.3",
  "title": "Fubini's Theorem.",
  "body": "Fubini's Theorem \n            Let   be continuous on the rectangle\n             \n            Then\n             \n           "
},
{
  "id": "example-double-integrals-by-fubini-s-theorem",
  "level": "2",
  "url": "section-double-integrals-over-rectangles.html#example-double-integrals-by-fubini-s-theorem",
  "type": "Example",
  "number": "13.1.4",
  "title": "Double integrals by Fubini's Theorem.",
  "body": "Fubini's Theorem double integrals Double integrals by Fubini's Theorem \n            Let   and let\n             \n            Find  .\n           \n            We found this previously in  , so we'll try it again using Fubini's Theorem and see if we get the same answer.\n            By  , we have\n             \n           "
},
{
  "id": "example-double-integral-of-a-logarithm",
  "level": "2",
  "url": "section-double-integrals-over-rectangles.html#example-double-integral-of-a-logarithm",
  "type": "Example",
  "number": "13.1.5",
  "title": "Double integral of a logarithm.",
  "body": "Double integral of a logarithm \n            Find\n             \n           \n            First, note that\n             \n            To find the first double integral on the right, first we integrate with respect to   to get\n             \n            Now we can use  -sub with   and   to get\n             \n            The same exact process shows that   must also equal  .\n            Therefore\n             \n           "
},
{
  "id": "section-double-integrals-over-general-regions",
  "level": "1",
  "url": "section-double-integrals-over-general-regions.html",
  "type": "Section",
  "number": "13.2",
  "title": "Double Integrals over General Regions",
  "body": "Double Integrals over General Regions \n          shows how to define the double integral over a rectangle  .\n        Now we want to extend it to more general regions.\n        We'll be skipping an issue with how to actually define such an integral in terms of Riemann sums, but the main idea is to take a function defined over some general region   and then extend it to cover a rectangular region  .\n        Then we can just use   to define this new integral as well.\n       \n        Our primary tool for computing double integrals will still be  .\n        The main difficulty we'll encounter (aside from the usual integration issues) is how to properly set up limits for   and   for some region  .\n       Integrating over a region defined by a parabola \n          Let   and let   be the region under the parabola  , above the  -axis and between   and  .\n          Find  .\n         \n          The first step is to determine limits for   and   that describe this region.\n          One possible description is the following:\n           \n          If we use this, we can write\n           \n         \n          We also could have described   as the set of all points\n           \n          If we do this instead, we get\n           \n          By  , this is guaranteed to equal  .\n          However, the actual process of computing the double integral using this choice for the limits is much more difficult, since we would need to integrate   with respect to  .\n         \n      There are several important things we can take away from the above example:\n       Much of the difficulty in computing double integrals lies in finding limits that describe the region you're integrating over. In general, it's a good idea to sketch the region you're integrating over in order to figure out what your limits should be. There can be multiple ways to describe a single region. This leads to multiple ways of setting up limits for double integrals over this region. If the integrand is continuous, then   guarantees that these different methods will all produce the same value. It's important to choose limits in such a way as to make computing the double integral more manageable. When finding limits for a double integral, the outermost limits  must be constant  since the double integral must eventually simplify to a constant. In other words, we don't really have a notion of an \"indefinite\" double integral. \n     Reversing the order of integration \n          Compute  .\n         reversing the order of integration \n          In order to change the order of integration, we need to change the limits.\n          The region we're integrating over is the region\n           \n          If we sketch this, we see that this is just the region below the line  , above the  -axis and bounded from   to  .\n          So we can also write\n           \n          Therefore\n           \n         \n      Sometimes, the order of integration can be chosen to make the limits of integration easier to set up.\n     Integrating over a Triangle \n          Integrate   over the triangle   with vertices   and  .\n         \n          If we wanted to integrate with respect to   first, we would have to break our double integral up into two different double integrals.\n          This is because the limits for   change halfway up the triangle.\n          So it'd be better for us to integrate with respect to   first.\n          Since\n           \n          we have\n           \n         \n      Besides finding volumes, we can also use double integrals to find areas.\n      If   is some region in the  -plane, then   represents the volume under the surface   and above  .\n      This is a solid with the constant height of  , so the volume should be equal to the area of   times  .\n      That is,   is equal to the area of  .\n     \n      SUGGESTED PROBLEMS: 1, 5, 11, 13, 17, 21\n     "
},
{
  "id": "example-integrating-over-a-region-defined-by-a-parabola",
  "level": "2",
  "url": "section-double-integrals-over-general-regions.html#example-integrating-over-a-region-defined-by-a-parabola",
  "type": "Example",
  "number": "13.2.1",
  "title": "Integrating over a region defined by a parabola.",
  "body": "Integrating over a region defined by a parabola \n          Let   and let   be the region under the parabola  , above the  -axis and between   and  .\n          Find  .\n         \n          The first step is to determine limits for   and   that describe this region.\n          One possible description is the following:\n           \n          If we use this, we can write\n           \n         \n          We also could have described   as the set of all points\n           \n          If we do this instead, we get\n           \n          By  , this is guaranteed to equal  .\n          However, the actual process of computing the double integral using this choice for the limits is much more difficult, since we would need to integrate   with respect to  .\n         "
},
{
  "id": "example-reversing-the-order-of-integration",
  "level": "2",
  "url": "section-double-integrals-over-general-regions.html#example-reversing-the-order-of-integration",
  "type": "Example",
  "number": "13.2.2",
  "title": "Reversing the order of integration.",
  "body": "Reversing the order of integration \n          Compute  .\n         reversing the order of integration \n          In order to change the order of integration, we need to change the limits.\n          The region we're integrating over is the region\n           \n          If we sketch this, we see that this is just the region below the line  , above the  -axis and bounded from   to  .\n          So we can also write\n           \n          Therefore\n           \n         "
},
{
  "id": "example-integrating-over-a-triangle",
  "level": "2",
  "url": "section-double-integrals-over-general-regions.html#example-integrating-over-a-triangle",
  "type": "Example",
  "number": "13.2.3",
  "title": "Integrating over a Triangle.",
  "body": "Integrating over a Triangle \n          Integrate   over the triangle   with vertices   and  .\n         \n          If we wanted to integrate with respect to   first, we would have to break our double integral up into two different double integrals.\n          This is because the limits for   change halfway up the triangle.\n          So it'd be better for us to integrate with respect to   first.\n          Since\n           \n          we have\n           \n         "
},
{
  "id": "section-double-integrals-in-polar-coordinates",
  "level": "1",
  "url": "section-double-integrals-in-polar-coordinates.html",
  "type": "Section",
  "number": "13.3",
  "title": "Double Integrals in Polar Coordinates",
  "body": "Double Integrals in Polar Coordinates \n      Recall that the double integral was defined by first setting up a rectangular grid.\n      The reason we used a rectangular grid was because we were working in Cartesian coordinates, so this made the most sense.\n      If we're dealing with a circular region of integration, then using Cartesian coordinates is very awkward.\n      However, polar coordinates from   work very nicely with circular regions.\n      So we want to find out how to set up double integrals using polar coordinates.\n     area element \n      Let   represent the area of one of these sectors.\n      If we let   denote the distance from the origin to one sector,   the length of a sector and   the angle spanned by a sector, then we can say that\n       \n      If we assume that   and   are both small (which means the polar grid in   is very fine), then\n       \n      So\n       .\n      As   and   approach  , this becomes more exact, and we get\n       .\n     double integrals polar coordinates Double Integrals in Polar Coordinates \n          Let   be a continuous function.\n          Then\n           \n          and limits are chosen using polar coordinates.\n         Integrating over a circular sector \n          Find\n           \n         \n          If we sketch the region of integration, we see that it is the part of the unit circle in the third quadrant.\n          So we'll switch to polar coordinates to solve this integral:\n           \n         Gaussian integral The Gaussian Integral \n          We have\n           \n         \n        First, let  .\n        We'll show that  .\n        We have\n         \n        Since  , this gives\n         \n       Volume of a sphere \n          Find the volume of a sphere of radius  .\n         \n          First, we can center the sphere at the origin without loss of generality.\n          Such a sphere is given by  .\n          If we solve for  , we get\n           \n          Let   denote the disk of radius   in the  -plane centered at the origin.\n          Then the volume of the sphere is\n           \n         \n      SUGGESTED PROBLEMS: 5, 13, 23\n     "
},
{
  "id": "p-1535",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#p-1535",
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
  "body": "double integrals polar coordinates Double Integrals in Polar Coordinates \n          Let   be a continuous function.\n          Then\n           \n          and limits are chosen using polar coordinates.\n         "
},
{
  "id": "example-integrating-over-a-circular-sector",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#example-integrating-over-a-circular-sector",
  "type": "Example",
  "number": "13.3.3",
  "title": "Integrating over a circular sector.",
  "body": "Integrating over a circular sector \n          Find\n           \n         \n          If we sketch the region of integration, we see that it is the part of the unit circle in the third quadrant.\n          So we'll switch to polar coordinates to solve this integral:\n           \n         "
},
{
  "id": "p-1540",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#p-1540",
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
  "body": "The Gaussian Integral \n          We have\n           \n         "
},
{
  "id": "proof-17",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#proof-17",
  "type": "Proof",
  "number": "13.3.1",
  "title": "",
  "body": "\n        First, let  .\n        We'll show that  .\n        We have\n         \n        Since  , this gives\n         \n       "
},
{
  "id": "example-volume-of-a-sphere",
  "level": "2",
  "url": "section-double-integrals-in-polar-coordinates.html#example-volume-of-a-sphere",
  "type": "Example",
  "number": "13.3.5",
  "title": "Volume of a sphere.",
  "body": "Volume of a sphere \n          Find the volume of a sphere of radius  .\n         \n          First, we can center the sphere at the origin without loss of generality.\n          Such a sphere is given by  .\n          If we solve for  , we get\n           \n          Let   denote the disk of radius   in the  -plane centered at the origin.\n          Then the volume of the sphere is\n           \n         "
},
{
  "id": "section-applications-of-double-integrals",
  "level": "1",
  "url": "section-applications-of-double-integrals.html",
  "type": "Section",
  "number": "13.4",
  "title": "Applications of Double Integrals",
  "body": "Applications of Double Integrals Mass \n        Consider a thin plate in the  -plane, say the region  .\n        If the density of the plate   at   is constant, say  , then the mass of the plate is just the density times the area.\n        On the other hand, if the density is varies then this becomes more complicated, and we must use double integrals.\n        In particular, the mass of a plate contained in the region   in the  -plane with density   is given by\n         \n       Mass of a triangular plate \n            Find the mass of the plate contained in the triangular region   bounded by lines   and  , given that the density is  .\n           \n            The mass is\n             \n           moments center of mass centroid Center of mass of an annulus \n            Find the center of mass of the plate   outside of the circle   and inside the circle  , with density  .\n           \n            The mass is given by\n             \n            The moments are\n             \n            and likewise  .\n            So the center of mass is  .\n           \n        SUGGESTED PROBLEMS: 3, 5, 13\n       "
},
{
  "id": "example-mass-of-a-triangular-plate",
  "level": "2",
  "url": "section-applications-of-double-integrals.html#example-mass-of-a-triangular-plate",
  "type": "Example",
  "number": "13.4.1",
  "title": "Mass of a triangular plate.",
  "body": "Mass of a triangular plate \n            Find the mass of the plate contained in the triangular region   bounded by lines   and  , given that the density is  .\n           \n            The mass is\n             \n           "
},
{
  "id": "p-1549",
  "level": "2",
  "url": "section-applications-of-double-integrals.html#p-1549",
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
  "body": "Center of mass of an annulus \n            Find the center of mass of the plate   outside of the circle   and inside the circle  , with density  .\n           \n            The mass is given by\n             \n            The moments are\n             \n            and likewise  .\n            So the center of mass is  .\n           "
},
{
  "id": "section-triple-integrals",
  "level": "1",
  "url": "section-triple-integrals.html",
  "type": "Section",
  "number": "13.5",
  "title": "Triple Integrals",
  "body": "Triple Integrals \n      In  , we have\n       \n      This represents the area under   and over  .\n      Furthermore,   gives the length of  .\n      In  , we have\n       \n      This represents the volume under   and above the region  , where  .\n      Furthermore,   gives the area of  .\n     triple integral triple integrals rectangular coordinates Triple Integrals over a Rectangle integrable \n      For a double integral in rectangular coordinates, we have   or  .\n      Similarly, for a triple integral in rectangular coordinates we have six different choices for  :\n       Absolute values on the disk \n      Just as we can view   as an infinitesimal length and   as an infinitesimal area,   represents an infinitesimal volume.\n     \n      Our main use for   will be to recognize a triple integral \"in the wild,\" but we won't actually use it to compute integrals.\n      For this purpose, we still use Fubini's Theorem.\n     Fubini's Theorem triple integrals Fubini's Theorem for Triple Integrals \n          Suppose   is a continuous function on the closed and bounded region   in  .\n          Then   can be computed as an iterated integral, and the answer does not depend on the choice of  .\n         A triple integral over a rectangular prism \n          Compute  , where\n           \n         \n          We'll integrate using  .\n          Then we have\n           \n         \n      An unfortunate side effect of increasing the dimension for our integral is that we lose a little bit of geometric intuition.\n      For instance,   is indeed calculating a \"volume,\" but the volume in question is for a four dimensional region (the graph of   over the rectangular prism).\n      We can only really visualize the \"base\" of this region, which served as our region of integration in  .\n      Even so, the triple integral can still tell us important things about functions of three variables.\n     Finding an average value \n          Find the average value of the function   over the region   given in  .\n         \n          First, let   denote the volume of  .\n          Then the average value of   over   is just\n           \n         \n      We can also compute triple integrals over more general regions.\n     Volume using triple integrals \n          Find the volume of the region bounded by the cylinder   and the planes   and  .\n         \n          If we let   denote this region, then its volume is given by  .\n          The volume is then\n           \n         \n      When setting up limits for triple integrals, say using  , then the limits on the innermost integral are typically functions of   and  , the limits on the middle integral are functions of   and the limits on the outermost integral are constant.\n      We can also change the order of integration to make an integral more tractable.\n     Changing the order of integration \n          Compute  .\n         \n          This looks awful to integrate with respect to   first, so we'll try changing the order of integration.\n            looks easiest, so let's try using   instead.\n          If we sketch the region, we see that the limits are actually the same, expect we just need to swap the middle and innermost integrals.\n          So\n           \n         \n      SUGGESTED PROBLEMS: 5, 11, 13, 19, 25, 29\n     "
},
{
  "id": "p-1554",
  "level": "2",
  "url": "section-triple-integrals.html#p-1554",
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
  "body": "triple integrals rectangular coordinates Triple Integrals over a Rectangle integrable "
},
{
  "id": "table-volume-elements",
  "level": "2",
  "url": "section-triple-integrals.html#table-volume-elements",
  "type": "Table",
  "number": "13.5.2",
  "title": "Absolute values on the disk",
  "body": "Absolute values on the disk "
},
{
  "id": "theorem-fubini-s-theorem-for-triple-integrals",
  "level": "2",
  "url": "section-triple-integrals.html#theorem-fubini-s-theorem-for-triple-integrals",
  "type": "Theorem",
  "number": "13.5.3",
  "title": "Fubini's Theorem for Triple Integrals.",
  "body": "Fubini's Theorem triple integrals Fubini's Theorem for Triple Integrals \n          Suppose   is a continuous function on the closed and bounded region   in  .\n          Then   can be computed as an iterated integral, and the answer does not depend on the choice of  .\n         "
},
{
  "id": "example-a-triple-integral-over-a-rectangular-prism",
  "level": "2",
  "url": "section-triple-integrals.html#example-a-triple-integral-over-a-rectangular-prism",
  "type": "Example",
  "number": "13.5.4",
  "title": "A triple integral over a rectangular prism.",
  "body": "A triple integral over a rectangular prism \n          Compute  , where\n           \n         \n          We'll integrate using  .\n          Then we have\n           \n         "
},
{
  "id": "example-finding-an-average-value",
  "level": "2",
  "url": "section-triple-integrals.html#example-finding-an-average-value",
  "type": "Example",
  "number": "13.5.5",
  "title": "Finding an average value.",
  "body": "Finding an average value \n          Find the average value of the function   over the region   given in  .\n         \n          First, let   denote the volume of  .\n          Then the average value of   over   is just\n           \n         "
},
{
  "id": "example-volume-using-triple-integrals",
  "level": "2",
  "url": "section-triple-integrals.html#example-volume-using-triple-integrals",
  "type": "Example",
  "number": "13.5.6",
  "title": "Volume using triple integrals.",
  "body": "Volume using triple integrals \n          Find the volume of the region bounded by the cylinder   and the planes   and  .\n         \n          If we let   denote this region, then its volume is given by  .\n          The volume is then\n           \n         "
},
{
  "id": "example-changing-the-order-of-integration",
  "level": "2",
  "url": "section-triple-integrals.html#example-changing-the-order-of-integration",
  "type": "Example",
  "number": "13.5.7",
  "title": "Changing the order of integration.",
  "body": "Changing the order of integration \n          Compute  .\n         \n          This looks awful to integrate with respect to   first, so we'll try changing the order of integration.\n            looks easiest, so let's try using   instead.\n          If we sketch the region, we see that the limits are actually the same, expect we just need to swap the middle and innermost integrals.\n          So\n           \n         "
},
{
  "id": "section-cylindrical-coordinates",
  "level": "1",
  "url": "section-cylindrical-coordinates.html",
  "type": "Section",
  "number": "13.6",
  "title": "Triple Integrals in Cylindrical Coordinates",
  "body": "Triple Integrals in Cylindrical Coordinates cylindrical coordinates Computing a triple integral over a cylinder \n          Let   be the cylinder in   with height   and base given by the circle of radius   centered at the origin, restricted to the first and second octants.\n          Let  .\n          Compute  .\n         \n          Since we're dealing with a cylinder, we'll switch to cylindrical coordinates  :\n           \n         Cylindrical Volume \n          Find the volume of the region below the inverted cone   and in the first and second octants.\n         \n          First, let   denote the region in question.\n          Then\n           .\n          The graph of this region isn't too difficult to find, especially using resources such as  CalcPlot3D , and is given by\n           \n          However, this region is much easier to describe in cylindrical coorindates:\n           .\n\n          Hence the volume is\n           .\n         Finding the Volume of the Unit Sphere \n          Find the volume of the unit sphere; that is, the sphere of radius   centered at the origin.\n         \n          The unit sphere is specified by the inequalities\n           .\n          It's much easier to describe this region using cylindrical coordinates:\n           .\n          By symmetry, the volume must be\n           .\n         "
},
{
  "id": "p-1570",
  "level": "2",
  "url": "section-cylindrical-coordinates.html#p-1570",
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
  "body": "Computing a triple integral over a cylinder \n          Let   be the cylinder in   with height   and base given by the circle of radius   centered at the origin, restricted to the first and second octants.\n          Let  .\n          Compute  .\n         \n          Since we're dealing with a cylinder, we'll switch to cylindrical coordinates  :\n           \n         "
},
{
  "id": "example-cylindrical-volume",
  "level": "2",
  "url": "section-cylindrical-coordinates.html#example-cylindrical-volume",
  "type": "Example",
  "number": "13.6.2",
  "title": "Cylindrical Volume.",
  "body": "Cylindrical Volume \n          Find the volume of the region below the inverted cone   and in the first and second octants.\n         \n          First, let   denote the region in question.\n          Then\n           .\n          The graph of this region isn't too difficult to find, especially using resources such as  CalcPlot3D , and is given by\n           \n          However, this region is much easier to describe in cylindrical coorindates:\n           .\n\n          Hence the volume is\n           .\n         "
},
{
  "id": "example-finding-the-volume-of-the-unit-sphere",
  "level": "2",
  "url": "section-cylindrical-coordinates.html#example-finding-the-volume-of-the-unit-sphere",
  "type": "Example",
  "number": "13.6.4",
  "title": "Finding the Volume of the Unit Sphere.",
  "body": "Finding the Volume of the Unit Sphere \n          Find the volume of the unit sphere; that is, the sphere of radius   centered at the origin.\n         \n          The unit sphere is specified by the inequalities\n           .\n          It's much easier to describe this region using cylindrical coordinates:\n           .\n          By symmetry, the volume must be\n           .\n         "
},
{
  "id": "section-triple-integrals-in-spherical-coordinates",
  "level": "1",
  "url": "section-triple-integrals-in-spherical-coordinates.html",
  "type": "Section",
  "number": "13.7",
  "title": "Triple Integrals in Spherical Coordinates",
  "body": "Triple Integrals in Spherical Coordinates spherical coordinates \n      Just as any point   in   can be represented as a point   in polar coordinates, we can represent any point   in   using the spherical coordinates  .\n      Here,   is distance from the origin,   is the angle the point makes with the  -axis and   is the angle the point makes with the  -axis.\n      In general,\n       .\n        corresponds to a point on the positive  -axis, while   corresponds to a point on the negative  -axis.\n     \n      Using triangles, we have the conversion formulas\n       .\n      Note that\n       .\n     \n      Just as constant limits in Cartesian coordinates correspond to rectangular regions of integration, constant limits in spherical coordinates give rise to spherical regions of integration.\n     Sketching a Spherical Region \n          Sketch the region determined by the spherical inequalities\n           .\n         \n      If we wish to compute integrals using spherical coordinates, then we must alter   just as we did in  .\n      In particular, we use\n       .\n     Volume of the Unit Sphere \n          Find the volume of the unit sphere  .\n         \n          The volume of   can be found using the triple integral  .\n          Because of the spherical region of integration, this is best found using spherical coordinates.\n          So\n           .\n         \n      The integrand can also suggest a transformation to spherical coordinates.\n      In particular, integrands depending on   are often made easier by converting to spherical.\n     Average Value Inside of the Unit Sphere \n          Let  .\n          Find the average value of   over the unit sphere.\n         \n          By definition, the average value of   is given by\n           .\n          We'll follow the same strategy we used in   to compute this integral.\n          If we convert to spherical coordinates, we get\n           .\n         \n          So the average value of   over   is  .\n         "
},
{
  "id": "p-1577",
  "level": "2",
  "url": "section-triple-integrals-in-spherical-coordinates.html#p-1577",
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
  "body": "Sketching a Spherical Region \n          Sketch the region determined by the spherical inequalities\n           .\n         "
},
{
  "id": "example-volume-of-the-unit-sphere",
  "level": "2",
  "url": "section-triple-integrals-in-spherical-coordinates.html#example-volume-of-the-unit-sphere",
  "type": "Example",
  "number": "13.7.2",
  "title": "Volume of the Unit Sphere.",
  "body": "Volume of the Unit Sphere \n          Find the volume of the unit sphere  .\n         \n          The volume of   can be found using the triple integral  .\n          Because of the spherical region of integration, this is best found using spherical coordinates.\n          So\n           .\n         "
},
{
  "id": "example-average-value-inside-of-the-unit-sphere",
  "level": "2",
  "url": "section-triple-integrals-in-spherical-coordinates.html#example-average-value-inside-of-the-unit-sphere",
  "type": "Example",
  "number": "13.7.3",
  "title": "Average Value Inside of the Unit Sphere.",
  "body": "Average Value Inside of the Unit Sphere \n          Let  .\n          Find the average value of   over the unit sphere.\n         \n          By definition, the average value of   is given by\n           .\n          We'll follow the same strategy we used in   to compute this integral.\n          If we convert to spherical coordinates, we get\n           .\n         \n          So the average value of   over   is  .\n         "
},
{
  "id": "section-change-of-variables",
  "level": "1",
  "url": "section-change-of-variables.html",
  "type": "Section",
  "number": "13.8",
  "title": "Change of Variables",
  "body": "Change of Variables \n        The goal now is to determine a general method to change coordinates in multiple integrals.\n        We'll start with double integrals.\n       Change of Variables in Double Integrals \n        Any change of coordinates involves a transformation between new variables   and the original variables  .\n        We indicate this as follows:\n         .\n        In  , the transformation was just\n         .\n       \n        So the goal behind integrating with change of variables is to find relate the integral  , where   is in the  -plane, to a new integral  , where   is in the  -plane.\n        The main issue with such a transformation is one that we're familiar with from working with polar coordinates:   in the first set of coordinates is not necessarily equal to   in the new set of coordinates.\n        In general we'll need a scaling factor that depends on   and  .\n        As it turns out, the proper scaling factor comes from a determinant.\n       Jacobian Jacobian Jacobian determinant Jacobian Jacobian in Polar Coordinates \n            Determine   for the transformation to polar coordinates.\n           \n            We have\n             .\n            Hence\n             .\n           \n        The Jacobian helps us in the following way: when making the change of variables  , the area element   becomes  .\n       \n            Compute   for the transformation\n             .\n           \n            We need to get   and   in terms of   and   first.\n            Since\n             ,\n            it follows that\n             .\n            Hence\n             .\n           Change of Variables in Two Dimensions \n            Find the volume of the region under the surface   and over the region   bounded by  , and  .\n           \n            Both the integrand and the region of integration are awful here, but if we set   and   then the limits of integration become very simple:\n             .\n            See  .\n            The integrand gets better too:  .\n            So we can write\n             .\n            Essentially, we're moving from integrating over a diamond in the  -plane to integrating over a square in the  -plane.\n            If we can find  , we can start computing the integral.\n           The region of integration in the  -plane and in the  -plane. \n            To find  , we need to get   in terms of   in order to use  .\n            Since   and  , we get\n             .\n            Hence\n             ,\n            and we have\n             .\n           Integrating Between Hyperbolas \n              Compute   where   is the region bounded between the curves  ,  ,   and   in the first quadrant.\n             \n            The integrand doesn't look too bad at first, but the region of integration would be very annoying here:\n           \n            To deal with this, we'll use the change of variables   and  .\n            The corresponding limits are   and  , and our integral becomes\n             .\n            We also get that the Jacobian is  .\n            Therefore\n             .\n           Change of Variables in Triple Integrals \n          What we did in   carries over directly to triple integrals and beyond.\n          We just need to compute   determinants instead of  .\n         Volume of a Region Between Planes \n                Find the volume of the region bounded by the planes  ,  ,  ,  ,   and  .\n               \n              If we let   denote the region we're trying to find the volume of, then the volume of this region is just\n               ,\n              where  ,   and  .\n             Transforming to a Spherical Region \n                Evaluate\n                 \n                where\n                 .\n               \n                  Problem adapted from Exercise 21 on page 1137 in  Thomas' Calculus ,   edition.\n                 \n              The region of integration is an ellipsoid, but if we can change this to a sphere then we can use spherical coordinates to help us.\n              A quick fix is to set\n               .\n              Then these new variables satisfy\n               \n              and so the corresponding region   in  -space is the unit sphere.\n             \n              Now we need to find  .\n              Thankfully, this is straightforward and we get  .\n              Therefore\n               ,\n              which we can actually integrate without too much trouble.\n             "
},
{
  "id": "definition-jacobian",
  "level": "2",
  "url": "section-change-of-variables.html#definition-jacobian",
  "type": "Definition",
  "number": "13.8.1",
  "title": "Jacobian.",
  "body": "Jacobian Jacobian Jacobian determinant Jacobian "
},
{
  "id": "example-jacobian-in-polar-coordinates",
  "level": "2",
  "url": "section-change-of-variables.html#example-jacobian-in-polar-coordinates",
  "type": "Example",
  "number": "13.8.2",
  "title": "Jacobian in Polar Coordinates.",
  "body": "Jacobian in Polar Coordinates \n            Determine   for the transformation to polar coordinates.\n           \n            We have\n             .\n            Hence\n             .\n           "
},
{
  "id": "example-finding-jacobian",
  "level": "2",
  "url": "section-change-of-variables.html#example-finding-jacobian",
  "type": "Example",
  "number": "13.8.3",
  "title": "",
  "body": "\n            Compute   for the transformation\n             .\n           \n            We need to get   and   in terms of   and   first.\n            Since\n             ,\n            it follows that\n             .\n            Hence\n             .\n           "
},
{
  "id": "example-change-of-variables-in-two-dimensions",
  "level": "2",
  "url": "section-change-of-variables.html#example-change-of-variables-in-two-dimensions",
  "type": "Example",
  "number": "13.8.4",
  "title": "Change of Variables in Two Dimensions.",
  "body": "Change of Variables in Two Dimensions \n            Find the volume of the region under the surface   and over the region   bounded by  , and  .\n           \n            Both the integrand and the region of integration are awful here, but if we set   and   then the limits of integration become very simple:\n             .\n            See  .\n            The integrand gets better too:  .\n            So we can write\n             .\n            Essentially, we're moving from integrating over a diamond in the  -plane to integrating over a square in the  -plane.\n            If we can find  , we can start computing the integral.\n           The region of integration in the  -plane and in the  -plane. \n            To find  , we need to get   in terms of   in order to use  .\n            Since   and  , we get\n             .\n            Hence\n             ,\n            and we have\n             .\n           "
},
{
  "id": "example-integrating-between-hyperbolas",
  "level": "2",
  "url": "section-change-of-variables.html#example-integrating-between-hyperbolas",
  "type": "Example",
  "number": "13.8.6",
  "title": "Integrating Between Hyperbolas.",
  "body": "Integrating Between Hyperbolas \n              Compute   where   is the region bounded between the curves  ,  ,   and   in the first quadrant.\n             \n            The integrand doesn't look too bad at first, but the region of integration would be very annoying here:\n           \n            To deal with this, we'll use the change of variables   and  .\n            The corresponding limits are   and  , and our integral becomes\n             .\n            We also get that the Jacobian is  .\n            Therefore\n             .\n           "
},
{
  "id": "example-volume-of-a-region-between-planes",
  "level": "2",
  "url": "section-change-of-variables.html#example-volume-of-a-region-between-planes",
  "type": "Example",
  "number": "13.8.8",
  "title": "Volume of a Region Between Planes.",
  "body": "Volume of a Region Between Planes \n                Find the volume of the region bounded by the planes  ,  ,  ,  ,   and  .\n               \n              If we let   denote the region we're trying to find the volume of, then the volume of this region is just\n               ,\n              where  ,   and  .\n             "
},
{
  "id": "example-transforming-to-a-spherical-region",
  "level": "2",
  "url": "section-change-of-variables.html#example-transforming-to-a-spherical-region",
  "type": "Example",
  "number": "13.8.9",
  "title": "Transforming to a Spherical Region.",
  "body": "Transforming to a Spherical Region \n                Evaluate\n                 \n                where\n                 .\n               \n                  Problem adapted from Exercise 21 on page 1137 in  Thomas' Calculus ,   edition.\n                 \n              The region of integration is an ellipsoid, but if we can change this to a sphere then we can use spherical coordinates to help us.\n              A quick fix is to set\n               .\n              Then these new variables satisfy\n               \n              and so the corresponding region   in  -space is the unit sphere.\n             \n              Now we need to find  .\n              Thankfully, this is straightforward and we get  .\n              Therefore\n               ,\n              which we can actually integrate without too much trouble.\n             "
},
{
  "id": "section-vector-fields",
  "level": "1",
  "url": "section-vector-fields.html",
  "type": "Section",
  "number": "14.1",
  "title": "Vector Fields",
  "body": "Vector Fields \n        Consider the function  .\n        The gradient of this function is  .\n        We can view the gradient as a  function  that assigns the vector   to each point   in the plane.\n        We often draw these vectors so that they're rescaled or normalized.\n         Rescaled gradient field for  . Normalized gradient field  . \n        Such functions are the main object of this section.\n       Vector Fields in   and  vector fields Vector Fields vector field \n        A vector field on   would look like\n         .\n        Similarly, a vector field on   would be\n         .\n       Sketching a Vector Field \n            Sketch  .\n           \n            Our sketch looks like\n             \n            Note that the vectors in   get extremely small as   increases, so it may be better to represent the vector field using normalized vectors instead.\n           A Vector Field in  \n            Sketch\n             .\n           \n            An interactive sketch from  CalcPlot3D  is given below:\n             A vector field in  -space. \n           \n            The vector field rotates about the  -axis in the counterclockwise direction, flowing upwards if   and flowing downwards if  .\n           velocity field Particle Trapped in a Velocity Field \n            At time   seconds, a particle is at position  .\n            The particle is within the velocity field\n             .\n            Estimate the particle's position at   seconds.\n           \n            Since the particle starts at  , its velocity at time   is given by\n             .\n            Hence the displacement of the particle from   to   seconds should be approximately\n             ,\n            which gives the new position as roughly\n             .\n           integral curve streamlines field lines Gradient Fields and Potential Functions potential function gradient field Gradient Field for Gravitational Potential \n              Find the gradient field associated to\n               .\n             \n              We can find the gradient field right away:\n               .\n             conservative \n        SUGGESTED PROBLEMS: 3, 5, 7, 11, 13, 21, 31\n       "
},
{
  "id": "figure-the-gradient-field-for--grad-f-",
  "level": "2",
  "url": "section-vector-fields.html#figure-the-gradient-field-for--grad-f-",
  "type": "Figure",
  "number": "14.1.1",
  "title": "",
  "body": "Rescaled gradient field for  . Normalized gradient field  . "
},
{
  "id": "definition-vector-fields",
  "level": "2",
  "url": "section-vector-fields.html#definition-vector-fields",
  "type": "Definition",
  "number": "14.1.2",
  "title": "Vector Fields.",
  "body": "vector fields Vector Fields vector field "
},
{
  "id": "example-sketching-a-vector-field",
  "level": "2",
  "url": "section-vector-fields.html#example-sketching-a-vector-field",
  "type": "Example",
  "number": "14.1.3",
  "title": "Sketching a Vector Field.",
  "body": "Sketching a Vector Field \n            Sketch  .\n           \n            Our sketch looks like\n             \n            Note that the vectors in   get extremely small as   increases, so it may be better to represent the vector field using normalized vectors instead.\n           "
},
{
  "id": "example-a-vector-field-in--rr-3-m-",
  "level": "2",
  "url": "section-vector-fields.html#example-a-vector-field-in--rr-3-m-",
  "type": "Example",
  "number": "14.1.5",
  "title": "A Vector Field in <span class=\"process-math\">\\(\\RR^{3}\\)<\/span>.",
  "body": "A Vector Field in  \n            Sketch\n             .\n           \n            An interactive sketch from  CalcPlot3D  is given below:\n             A vector field in  -space. \n           \n            The vector field rotates about the  -axis in the counterclockwise direction, flowing upwards if   and flowing downwards if  .\n           "
},
{
  "id": "p-1620",
  "level": "2",
  "url": "section-vector-fields.html#p-1620",
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
  "body": "Particle Trapped in a Velocity Field \n            At time   seconds, a particle is at position  .\n            The particle is within the velocity field\n             .\n            Estimate the particle's position at   seconds.\n           \n            Since the particle starts at  , its velocity at time   is given by\n             .\n            Hence the displacement of the particle from   to   seconds should be approximately\n             ,\n            which gives the new position as roughly\n             .\n           "
},
{
  "id": "p-1623",
  "level": "2",
  "url": "section-vector-fields.html#p-1623",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral curve streamlines field lines "
},
{
  "id": "p-1624",
  "level": "2",
  "url": "section-vector-fields.html#p-1624",
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
  "body": "Gradient Field for Gravitational Potential \n              Find the gradient field associated to\n               .\n             \n              We can find the gradient field right away:\n               .\n             "
},
{
  "id": "p-1627",
  "level": "2",
  "url": "section-vector-fields.html#p-1627",
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
  "body": "Line Integrals \n        In this section we move on to computing integrals over curves in   and  .\n       Scalar Line Integrals \n        Suppose we wish to find the mass of a wire given by a curve   in the  -plane.\n        If the density is a constant   then this is simple: the mass is just   where   denotes the length of the wire.\n       scalar line integral line integrals scalar Scalar Line Integral \n              Suppose that   is a smooth curve in   and that the function   is continuous on  .\n              The scalar line integral of   along   is the number   defined to be\n               .\n             \n                An analogous definition holds for curves in  .\n                We can also replace the assumption that   is smooth with the assumption that   is  rectifiable , which (roughly) means it has a well-defined length.\n               \n        Geometrically,   represents the area under   and above  .\n       \n        If   is nice enough (i.e., piecewise smooth), we can avoid using Riemann sums to compute the scalar line integral.\n        Note that   can be viewed as representing an  infinitesimal length  along the curve  .\n        If   is traced out by the parametric equations\n         ,\n        then the length of   from   to   is given by the  arc length function \n         .\n        See   and  .\n        Thus\n         ,\n        and we can write\n         .\n       \n        If we view   as being traced out by a vector function  , then we can write this formula even more compactly:\n         .\n       Computing a Scalar Line Integral \n            Compute  , where   is the segment of the parabola   from   to  .\n           \n            The curve   is traced out by the vector function   for  .\n            Therefore\n             \n           \n        Line integrals along piecewise smooth curves can be found without too much trouble.\n       Integrating Along Line Segments \n            Find   where   denotes the line segment from   to   followed by the segment from   to  .\n           \n            We find this by breaking   down as the union of two smooth curves   and  , where\n             \n            Then\n             .\n           \n        We can also compute scalar line integrals in  .\n       Average Value on a Circle \n            Let   and let\n             .\n            Find the average value of   on  .\n           \n            The average value of   on   is given by\n             \n            where\n             \n            and\n             .\n            Therefore   has an average value of   on  .\n           Vector Field Line Integrals \n        Suppose we have a  force field    in   and some particle that is acted upon by the force.\n        The particle has a trajectory given by a curve  .\n         Trajectory in a force field. \n       \n        We want to determine how the trajectory of the particle aligns with the forcefield  .\n        We can do this by picking an arbitrary point along  , finding the unit tangent   at this point, and then comparing the direction of   and that of   by computing the dot product  .\n        This is a measure of how   and   align at a specific point, and integrating this along   should tell us how   and   align overall.\n       line integrals vector fields Line Integral of a Vector Field line integral of   over  circulation integral \n        To find line integrals of vector fields, we proceed as follows.\n        Suppose that  .\n        Then\n         .\n        We can also write this as\n         ,\n        assuming that  .\n       \n        In addition to measuring how well   and   align, vector field line integrals can also represent work done.\n       Flow Along a Circle \n            Let   denote the segment of the parabola   traversed once from   to  , and let\n             .\n            Does   tend to flow with or against  ?\n           \n            If we graph   and  , we get the following:\n             Flow over  . \n           \n              suggests that   flows with  , and we can verify this by computing  :\n             .\n            Since the result is positive, this tells us that   tends to flow with  .\n           A Nonconservative Force \n            Let   denote a force field.\n            Is the force   conservative?\n           \n            Here we are using the physical definition of a conservative force, namely that the work done must be  path independent .\n            So we'll choose two paths between two points and find the work done on each path.\n            Let the first path,  , denote the top half of the unit circle traversed counterclockwise.\n            Similarly, let the second path,  , denote the bottom half of the unit circle traversed clockwise.\n            Then both paths have the same initial and terminal points.\n           \n            From  , it appears as though  , which suggests that the vector field is path dependent.\n             A rotating force field. \n            To verify this, we'll compute the appropriate line integrals.\n           \n            For  , the total circulation is\n             .\n            Likewise, the circulation of   along   is\n             .\n           \n            Since the work done by   between the points   and   clearly depends on the path taken between the points, this means that   is path dependent and, therefore, not conservative.\n           \n        We can also compute vector field line integrals in   with essentially the same formula.\n       Circulation in  \n            Find the circulation of   along\n             .\n           \n            We have\n             .\n            Since the circulation is positive, this also shows that   tends to flow with  .\n           Flux Integrals \n        The circulation integral in   is useful for measuring how much a vector field flows along a given curve.\n        Now, we want to measure how a vector field flows  across  a curve, at least in  .\n       \n        Given a smooth curve   with unit tangent  , recall that   measures how well a vector field   and   align at a point on  .\n        By integrating this, we get a measure along the entire curve.\n        So if we want to get a sense of how   flows across  , we can do so by looking at a single point and then integrating along the curve again.\n       outward unit normal flux integral line integrals flux integral Flux Integral flux integral of   across  \n        At this point it may be helpful to introduce some new notation.\n        If   is a closed curve, then we often denote line integrals involving   with   instead of  .\n       Flux Across the Unit Circle \n            Let   and let   denote the unit circle, traversed exactly once counterclockwise.\n            What is  ?\n           \n            We should have  .\n           \n        In order to actually compute flux integrals, we need to write   using  .\n        So suppose that   is traced out by the vector function  .\n        Then   must be perpendicular to the unit tangent\n         \n        or equivalently  .\n        Our primary tool for finding perpendicular vectors, the cross product, only applies in  .\n        So to find   we'll (temporarily) move everything into  .\n        Now we need to find a vector orthogonal to   that also lies in the  -plane.\n        This can be done by computing\n         .\n       \n        At this point we need to decide which direction we want our normal vector to go.\n        We'll usually choose the first option if   is traversed counterclockwise and the second option otherwise.\n        Assuming counterclockwise orientation, we have\n         .\n        Now moving back down to  , we can write the outward unit normal as\n         .\n       \n        Therefore\n         .\n       Verifying the Flux \n            Compute the flux integral in  .\n           \n            We have\n             .\n           \n        SUGGESTED PROBLEMS: 1, 7, 13, 17, 19, 39.\n       "
},
{
  "id": "p-1631",
  "level": "2",
  "url": "section-line-integrals.html#p-1631",
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
  "body": "line integrals scalar Scalar Line Integral \n              Suppose that   is a smooth curve in   and that the function   is continuous on  .\n              The scalar line integral of   along   is the number   defined to be\n               .\n             \n                An analogous definition holds for curves in  .\n                We can also replace the assumption that   is smooth with the assumption that   is  rectifiable , which (roughly) means it has a well-defined length.\n               "
},
{
  "id": "example-computing-a-scalar-line-integral",
  "level": "2",
  "url": "section-line-integrals.html#example-computing-a-scalar-line-integral",
  "type": "Example",
  "number": "14.2.2",
  "title": "Computing a Scalar Line Integral.",
  "body": "Computing a Scalar Line Integral \n            Compute  , where   is the segment of the parabola   from   to  .\n           \n            The curve   is traced out by the vector function   for  .\n            Therefore\n             \n           "
},
{
  "id": "example-integrating-along-line-segments",
  "level": "2",
  "url": "section-line-integrals.html#example-integrating-along-line-segments",
  "type": "Example",
  "number": "14.2.3",
  "title": "Integrating Along Line Segments.",
  "body": "Integrating Along Line Segments \n            Find   where   denotes the line segment from   to   followed by the segment from   to  .\n           \n            We find this by breaking   down as the union of two smooth curves   and  , where\n             \n            Then\n             .\n           "
},
{
  "id": "example-average-value-on-a-circle",
  "level": "2",
  "url": "section-line-integrals.html#example-average-value-on-a-circle",
  "type": "Example",
  "number": "14.2.4",
  "title": "Average Value on a Circle.",
  "body": "Average Value on a Circle \n            Let   and let\n             .\n            Find the average value of   on  .\n           \n            The average value of   on   is given by\n             \n            where\n             \n            and\n             .\n            Therefore   has an average value of   on  .\n           "
},
{
  "id": "figure-trajectory-in-a-force-field",
  "level": "2",
  "url": "section-line-integrals.html#figure-trajectory-in-a-force-field",
  "type": "Figure",
  "number": "14.2.5",
  "title": "",
  "body": "Trajectory in a force field. "
},
{
  "id": "definition-line-integral-of-a-vector-field",
  "level": "2",
  "url": "section-line-integrals.html#definition-line-integral-of-a-vector-field",
  "type": "Definition",
  "number": "14.2.6",
  "title": "Line Integral of a Vector Field.",
  "body": "line integrals vector fields Line Integral of a Vector Field line integral of   over  circulation integral "
},
{
  "id": "example-flow-along-a-circle",
  "level": "2",
  "url": "section-line-integrals.html#example-flow-along-a-circle",
  "type": "Example",
  "number": "14.2.7",
  "title": "Flow Along a Circle.",
  "body": "Flow Along a Circle \n            Let   denote the segment of the parabola   traversed once from   to  , and let\n             .\n            Does   tend to flow with or against  ?\n           \n            If we graph   and  , we get the following:\n             Flow over  . \n           \n              suggests that   flows with  , and we can verify this by computing  :\n             .\n            Since the result is positive, this tells us that   tends to flow with  .\n           "
},
{
  "id": "example-a-nonconservative-force",
  "level": "2",
  "url": "section-line-integrals.html#example-a-nonconservative-force",
  "type": "Example",
  "number": "14.2.9",
  "title": "A Nonconservative Force.",
  "body": "A Nonconservative Force \n            Let   denote a force field.\n            Is the force   conservative?\n           \n            Here we are using the physical definition of a conservative force, namely that the work done must be  path independent .\n            So we'll choose two paths between two points and find the work done on each path.\n            Let the first path,  , denote the top half of the unit circle traversed counterclockwise.\n            Similarly, let the second path,  , denote the bottom half of the unit circle traversed clockwise.\n            Then both paths have the same initial and terminal points.\n           \n            From  , it appears as though  , which suggests that the vector field is path dependent.\n             A rotating force field. \n            To verify this, we'll compute the appropriate line integrals.\n           \n            For  , the total circulation is\n             .\n            Likewise, the circulation of   along   is\n             .\n           \n            Since the work done by   between the points   and   clearly depends on the path taken between the points, this means that   is path dependent and, therefore, not conservative.\n           "
},
{
  "id": "example-circulation-in-R3",
  "level": "2",
  "url": "section-line-integrals.html#example-circulation-in-R3",
  "type": "Example",
  "number": "14.2.11",
  "title": "Circulation in <span class=\"process-math\">\\(\\RR^{3}\\)<\/span>.",
  "body": "Circulation in  \n            Find the circulation of   along\n             .\n           \n            We have\n             .\n            Since the circulation is positive, this also shows that   tends to flow with  .\n           "
},
{
  "id": "p-1664",
  "level": "2",
  "url": "section-line-integrals.html#p-1664",
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
  "body": "line integrals flux integral Flux Integral flux integral of   across  "
},
{
  "id": "example-flux-across-the-unit-circle",
  "level": "2",
  "url": "section-line-integrals.html#example-flux-across-the-unit-circle",
  "type": "Example",
  "number": "14.2.13",
  "title": "Flux Across the Unit Circle.",
  "body": "Flux Across the Unit Circle \n            Let   and let   denote the unit circle, traversed exactly once counterclockwise.\n            What is  ?\n           \n            We should have  .\n           "
},
{
  "id": "example-verifying-the-flux",
  "level": "2",
  "url": "section-line-integrals.html#example-verifying-the-flux",
  "type": "Example",
  "number": "14.2.14",
  "title": "Verifying the Flux.",
  "body": "Verifying the Flux \n            Compute the flux integral in  .\n           \n            We have\n             .\n           "
},
{
  "id": "section-the-fundamental-theorem-for-line-integrals",
  "level": "1",
  "url": "section-the-fundamental-theorem-for-line-integrals.html",
  "type": "Section",
  "number": "14.3",
  "title": "The Fundamental Theorem for Line Integrals",
  "body": "The Fundamental Theorem for Line Integrals \n        From  , we know that integrals and derivatives are closely related:\n         .\n        We want to extend this result to line integrals of vector fields over curves.\n        In particular, we want to prove a relationship of the form\n         \n        where   and   are the endpoints of the curve  .\n        This is the content of the main result in this section:  .\n       Path Independence open, simply connected domain closed boundary \n        The mathematical definition of a conservative vector field is that it's the gradient of some scalar function.\n       conservative vector field mathematical definition Conservative Vector Fields (Mathematical Definition) conservative path independence vector fields path independence Path Independence \n            A vector field   is path independent on a domain   if\n             \n            for any piecewise smooth paths in   with the same endpoints.\n            Equivalently,   is path independent if\n             \n            for any piecewise smooth closed curve   in  .\n           Conservative Vector Fields (Physical Definition) \n            Let   denote a (vector) force field.\n            We say that   is conservative on a domain   if   is path independent on  .\n           \n        In physical terms,   says that the work done by a conservative force   on a particle moving along a path depends only on the initial and terminal points of the path.\n        Equivalently, the work done on a closed path must always be  .\n       \n        These two definitions are related by  .\n       line integrals Fundamental Theorem of Line Integrals Fundamental Theorem of Line Integrals \n            Suppose that   is a conservative vector field (in the sense of  ) with continuous components on an open simply connected region  .\n            Then   is path independent.\n            Furthermore, if   and   is a curve in   with initial point   and terminal point  , then\n             .\n           An Awful Example \n            Let   and let   be the path in the  -plane composed of the line segment from   to   followed by the circular arc from   to   followed by the logarithmic arc   from   to  .\n            Find  .\n           \n              is piecewise smooth and consists of the components\n             .\n            To find  , we can find   for   and add the resulting values.\n            So let's do that!\n             .\n            Similarly,\n             \n            and  finally \n             .\n            Putting this all together, we get\n             .\n           \n            Now let's compare this approach with using  .\n            Since  ,   is conservative by definition.\n            Hence   applies, and (setting  ) we get\n             .\n           Using Potential to Find Work Done \n          Let   be a force field and let   denote the parabolic arc   from   to  .\n          Find the work done by   along  .\n         \n          The work done is just  .\n          Note that  , and so the work done is just\n           \n          by  .\n         Conservative Vector Fields \n          shows that line integrals involving conservative vector fields are straightforward to evaluate if we know a corresponding potential function.\n        So now we want to do two things:\n         \n             Given a vector field  , determine if it's conservative. \n           \n         \n             Given a conservative vector field  , determine a potential function  . \n           \n       \n        For the first, we can use our intuition that conservative vector fields shouldn't rotate.\n        So let's assume that   is a (differentiable) vector field on   and let   be a point in the plane.\n        We can estimate the rotation, or  circulation , of   at   by constructing a rectangle with length   and height   at   and measuring how   flows counterclockwise around the rectangle.\n        If we do so, then we can estimate the circulation along each side as follows:\n         .\n        Therefore the total circulation near   should be about\n         .\n        If we divide by   to normalize, then we can say that the circulation is about\n         .\n       Conservative Vector Fields are Irrotational \n            Let   be a continuously differentiable vector field on an open simply connected region in  .\n            Then   is conservative on this region if and only if\n             .\n           Finding a Line Integral \n            Let   and let   denote the ellipse\n             .\n            Find  .\n           \n            We can parameterize   and then compute   as in  , but we'll first check if   is conservative.\n            Since  , it follows that   is conservative.\n            Hence  .\n           curl Testing a Vector Field in  \n            Let  .\n            Determine if   is conservative.\n           This is taken from Example 2 on page 1165 of  Thomas' Calculus ,   edition. \n            We need to check if  .\n            So we compute this like a cross product, giving  .\n            Hence the vector field is irrotational and therefore conservative.\n           \n        So now we have a good test for if a vector field is conservative.\n        Next, we want to be able to find a corresponding potential function to a conservative vector field.\n       \n        Consider the vector field   from  .\n        We know this is conservative, so there must exist a corresponding potential function   such that  .\n        To find this, we start by noting that whatever   is, its partial derivatives must be the components of  .\n        In particular,\n         .\n        Now we look at   to pin down  :\n         ,\n        and so  .\n        Finally,\n         \n        and so  .\n        Therefore a potential function for   is\n         .\n       Line Integral Along an Elliptical Arc \n            Compute  , where\n             .\n           \n            First, we'll check if   is conservative.\n            If it is, we can use  .\n            Since  ,\n            we see that   is in fact conservative.\n           \n            Now we need to find a potential function  .\n            Since  , we can integrate with respect to   to get\n             .\n            Now differentiate with respect to   to get\n             .\n            Hence a potential function for   is  , and so\n             .\n           \n        SUGGESTED PROBLEMS:3-13 odd, 19, 21\n       "
},
{
  "id": "p-1676",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#p-1676",
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
  "body": "conservative vector field mathematical definition Conservative Vector Fields (Mathematical Definition) conservative "
},
{
  "id": "p-1680",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#p-1680",
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
  "body": "vector fields path independence Path Independence \n            A vector field   is path independent on a domain   if\n             \n            for any piecewise smooth paths in   with the same endpoints.\n            Equivalently,   is path independent if\n             \n            for any piecewise smooth closed curve   in  .\n           "
},
{
  "id": "definition-conservative-vector-fields-physical-definition",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#definition-conservative-vector-fields-physical-definition",
  "type": "Definition",
  "number": "14.3.3",
  "title": "Conservative Vector Fields (Physical Definition).",
  "body": "Conservative Vector Fields (Physical Definition) \n            Let   denote a (vector) force field.\n            We say that   is conservative on a domain   if   is path independent on  .\n           "
},
{
  "id": "theorem-fundamental-theorem-line-integrals",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#theorem-fundamental-theorem-line-integrals",
  "type": "Theorem",
  "number": "14.3.4",
  "title": "Fundamental Theorem of Line Integrals.",
  "body": "line integrals Fundamental Theorem of Line Integrals Fundamental Theorem of Line Integrals \n            Suppose that   is a conservative vector field (in the sense of  ) with continuous components on an open simply connected region  .\n            Then   is path independent.\n            Furthermore, if   and   is a curve in   with initial point   and terminal point  , then\n             .\n           "
},
{
  "id": "example-an-awful-example",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#example-an-awful-example",
  "type": "Example",
  "number": "14.3.5",
  "title": "An Awful Example.",
  "body": "An Awful Example \n            Let   and let   be the path in the  -plane composed of the line segment from   to   followed by the circular arc from   to   followed by the logarithmic arc   from   to  .\n            Find  .\n           \n              is piecewise smooth and consists of the components\n             .\n            To find  , we can find   for   and add the resulting values.\n            So let's do that!\n             .\n            Similarly,\n             \n            and  finally \n             .\n            Putting this all together, we get\n             .\n           \n            Now let's compare this approach with using  .\n            Since  ,   is conservative by definition.\n            Hence   applies, and (setting  ) we get\n             .\n           "
},
{
  "id": "example-using-potential-to-find-work-done",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#example-using-potential-to-find-work-done",
  "type": "Example",
  "number": "14.3.6",
  "title": "Using Potential to Find Work Done.",
  "body": "Using Potential to Find Work Done \n          Let   be a force field and let   denote the parabolic arc   from   to  .\n          Find the work done by   along  .\n         \n          The work done is just  .\n          Note that  , and so the work done is just\n           \n          by  .\n         "
},
{
  "id": "theorem-conservative-vector-fields-are-irrotational",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#theorem-conservative-vector-fields-are-irrotational",
  "type": "Theorem",
  "number": "14.3.7",
  "title": "Conservative Vector Fields are Irrotational.",
  "body": "Conservative Vector Fields are Irrotational \n            Let   be a continuously differentiable vector field on an open simply connected region in  .\n            Then   is conservative on this region if and only if\n             .\n           "
},
{
  "id": "example-finding-a-line-integral",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#example-finding-a-line-integral",
  "type": "Example",
  "number": "14.3.8",
  "title": "Finding a Line Integral.",
  "body": "Finding a Line Integral \n            Let   and let   denote the ellipse\n             .\n            Find  .\n           \n            We can parameterize   and then compute   as in  , but we'll first check if   is conservative.\n            Since  , it follows that   is conservative.\n            Hence  .\n           "
},
{
  "id": "p-1698",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#p-1698",
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
  "body": "Testing a Vector Field in  \n            Let  .\n            Determine if   is conservative.\n           This is taken from Example 2 on page 1165 of  Thomas' Calculus ,   edition. \n            We need to check if  .\n            So we compute this like a cross product, giving  .\n            Hence the vector field is irrotational and therefore conservative.\n           "
},
{
  "id": "example-line-integral-along-an-elliptical-arc",
  "level": "2",
  "url": "section-the-fundamental-theorem-for-line-integrals.html#example-line-integral-along-an-elliptical-arc",
  "type": "Example",
  "number": "14.3.10",
  "title": "Line Integral Along an Elliptical Arc.",
  "body": "Line Integral Along an Elliptical Arc \n            Compute  , where\n             .\n           \n            First, we'll check if   is conservative.\n            If it is, we can use  .\n            Since  ,\n            we see that   is in fact conservative.\n           \n            Now we need to find a potential function  .\n            Since  , we can integrate with respect to   to get\n             .\n            Now differentiate with respect to   to get\n             .\n            Hence a potential function for   is  , and so\n             .\n           "
},
{
  "id": "section-green-s-theorem",
  "level": "1",
  "url": "section-green-s-theorem.html",
  "type": "Section",
  "number": "14.4",
  "title": "Green's Theorem",
  "body": "Green's Theorem \n      Recall that   is the  circulation  of   along  .\n      Likewise,   is a measure of how   rotates counterclockwise.\n      These two quantities are tied together by Green's Theorem.\n     Green's Theorem Green's Theorem \n          Let   be a positively oriented, piecewise smooth, simple closed curve in the plane containing some region  .\n          Let   denote a vector field that is continuously differentiable on an open, simply connected domain containing  .\n          Then\n           .\n         Green's Theorem on a Triangle \n          Compute  , where   and   is the triangle with vertices   and   traversed once counterclockwise.\n         \n          First, note that   isn't conservative and so we can't just say the integral is  .\n          Finding the line integral directly would require computing three separate line integrals, so we'll try Green's Theorem instead.\n         \n          Let   denote the inside of the triangle.\n          Then we have\n           ,\n          which simplifies to  .\n         Work with Green's Theorem \n          Find the work done by   along the boundary of the region bounded by   and  , traversed  clockwise  exactly once.\n         Circulation Along an Annulus \n          Does   flow with the boundary of the annulus   bounded by   and  ?\n          Here, assume that the boundary of   is oriented in a way that is consistent with Green's Theorem.\n         \n        applies to circulation integrals, but there's also a version for flux integrals.\n     Green's Theorem flux integrals Green's Theorem for Flux Integrals \n          Let  ,   and   satisfy the same hypotheses as in  .\n          Then\n           .\n         divergence Flux Across a Square \n          Does   tend to flow out of the unit square?\n         \n      SUGGESTED PROBLEMS: 1, 3, 5, 9, 17\n     "
},
{
  "id": "theorem-green-s-theorem",
  "level": "2",
  "url": "section-green-s-theorem.html#theorem-green-s-theorem",
  "type": "Theorem",
  "number": "14.4.1",
  "title": "Green's Theorem.",
  "body": "Green's Theorem Green's Theorem \n          Let   be a positively oriented, piecewise smooth, simple closed curve in the plane containing some region  .\n          Let   denote a vector field that is continuously differentiable on an open, simply connected domain containing  .\n          Then\n           .\n         "
},
{
  "id": "example-green-s-theorem-on-a-triangle",
  "level": "2",
  "url": "section-green-s-theorem.html#example-green-s-theorem-on-a-triangle",
  "type": "Example",
  "number": "14.4.2",
  "title": "Green's Theorem on a Triangle.",
  "body": "Green's Theorem on a Triangle \n          Compute  , where   and   is the triangle with vertices   and   traversed once counterclockwise.\n         \n          First, note that   isn't conservative and so we can't just say the integral is  .\n          Finding the line integral directly would require computing three separate line integrals, so we'll try Green's Theorem instead.\n         \n          Let   denote the inside of the triangle.\n          Then we have\n           ,\n          which simplifies to  .\n         "
},
{
  "id": "example-work-with-green-s-theorem",
  "level": "2",
  "url": "section-green-s-theorem.html#example-work-with-green-s-theorem",
  "type": "Example",
  "number": "14.4.3",
  "title": "Work with Green's Theorem.",
  "body": "Work with Green's Theorem \n          Find the work done by   along the boundary of the region bounded by   and  , traversed  clockwise  exactly once.\n         "
},
{
  "id": "example-circulation-along-an-annulus",
  "level": "2",
  "url": "section-green-s-theorem.html#example-circulation-along-an-annulus",
  "type": "Example",
  "number": "14.4.4",
  "title": "Circulation Along an Annulus.",
  "body": "Circulation Along an Annulus \n          Does   flow with the boundary of the annulus   bounded by   and  ?\n          Here, assume that the boundary of   is oriented in a way that is consistent with Green's Theorem.\n         "
},
{
  "id": "theorem-green-s-theorem-for-flux-integrals",
  "level": "2",
  "url": "section-green-s-theorem.html#theorem-green-s-theorem-for-flux-integrals",
  "type": "Theorem",
  "number": "14.4.5",
  "title": "Green's Theorem for Flux Integrals.",
  "body": "Green's Theorem flux integrals Green's Theorem for Flux Integrals \n          Let  ,   and   satisfy the same hypotheses as in  .\n          Then\n           .\n         "
},
{
  "id": "p-1717",
  "level": "2",
  "url": "section-green-s-theorem.html#p-1717",
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
  "body": "Flux Across a Square \n          Does   tend to flow out of the unit square?\n         "
},
{
  "id": "section-curl-and-divergence",
  "level": "1",
  "url": "section-curl-and-divergence.html",
  "type": "Section",
  "number": "14.5",
  "title": "Curl and Divergence",
  "body": "Curl and Divergence \n        In this section we look at two different analogues of the derivative for vector fields.\n        Once we have these versions of the derivative, we'll also be able to state a corresponding version of the  , just as the   corresponds to the gradient.\n       Curl curl vector fields curl in  Curl of a Vector Field in  \n            Let   be a vector field in   with continuously differentiable components.\n            The curl of   is the vector\n             .\n           \n        We've already seen a couple nice properties of curls.\n        First, the curl vector gives the axis of rotation about which   tends to rotate counterclockwise when viewed head on, and   is a measure of the amount of rotation.\n        Second, the curl can be used to determine if a vector field is conservative or not.\n       Conservative Vector Fields in  \n            Let   denote a continuously differentiable vector field on an open set containing the simply connected region  .\n            Then   is conservative if and only if  .\n           Determining Rotation in a Vector Field \n            Suppose the vector field   represents a swirling fluid.\n            Within this fluid you place a small paddle wheel at the point  .\n            When viewed from directly above, will the paddle wheel tend to rotate clockwise or counterclockwise?\n           \n            First we need to get a measure of the rotation of  , so we compute the curl:\n             ,\n            which is just   at our point.\n            This provides the axis around which the paddle wheel rotates counterclockwise.\n            And since  , the paddle wheel does not appear to rotate at all when viewed from above.\n           Divergence divergence incompressible solenoidal Divergence on a Rectangle \n            Let   and let   denote the unit circle, traversed counterclockwise once.\n            Find the divergence of   at   and  .\n            Then find the  net divergence  of   through the interior of  .\n           \n            At  ,  .\n            At this particular point, outflow is balanced with inflow.\n            Likewise, at   we can see that inflow is greater than outflow.\n           \n            We can compute the net divergence as  , where   is the interior of the unit circle.\n            This is equal to  , which means the net flow throughout   is  .\n            By  , this is also equal to the net flux across  .\n           Laplacian \n        From the divergence we get another useful form of (second) derivative for scalar functions.\n        First, let   be a differentiable scalar function.\n        Then we can compute its gradient  .\n        This is a vector field that represents how   changes.\n        Now, since   is a vector field we can also consider its curl and divergence.\n        If   is  nice enough  we know that  , which is not particularly useful in this case.\n        But if we take the divergence, we get\n         .\n       Laplacian Laplacian Laplacian \n          extends to other dimensions in the obvious way.\n        The Laplacian is useful since it provides a measure of how a function's value at a point differs from the average value at nearby points.\n       Laplacians and Average Values \n            Let   and let  .\n            Let   denote the unit circle traversed once counterclockwise.\n            Find the average values of   on  , their specific values at   and the Laplacians at  .\n           \n            If we compute the average values, we get\n             .\n            Furthermore,  .\n            We also have   and  .\n           \n        To see how the Laplacian can arise, consider the following situation explained in Evans'  Partial Differential Equations ,   edition.\n        We have some  density  function  ; this could be mass density, charge density, etc.\n        Now we'll let   denote the flux of  .\n        It's often reasonable to assume that the flux is proportional to the negative of the gradient of  :   where  .\n        This means that the quantity flows from regions of higher concentration to regions of lower concentration.\n        If   represents a quantity in equilibrium within some region  , then the net flux across   should be  .\n        In terms of  , we have\n         .\n       \n        Now we'll make the argument that   since the above should be true for arbitrary subregions of  .\n        But\n         ,\n        which means that  .\n       harmonic Laplace's equation \n        Laplacians also appear in certain integral identities.\n       Green's First Identity Green's First Identity \n            Let   denote a simply connected region with piecewise smooth boundary  .\n            Suppose that   is continuously differentiable and   is twice continuously differentiable on an open domain containing  .\n            Then\n             .\n           \n            Since the right hand side involves a flux integral, this suggests that   may prove useful.\n            Applying this to   gives\n             .\n           \n            Now, recall that   is a kind of derivative operator.\n            For this reason, it also satisfies a version of the product rule:\n             .\n            Plugging this into the double integral and rearranging proves the result.\n           \n            acts as a kind of  integration by parts  in higher dimensions.\n         \n        SUGGESTED PROBLEMS: 1-9 odd, 10, 11-15 odd.\n       "
},
{
  "id": "p-1721",
  "level": "2",
  "url": "section-curl-and-divergence.html#p-1721",
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
  "body": "vector fields curl in  Curl of a Vector Field in  \n            Let   be a vector field in   with continuously differentiable components.\n            The curl of   is the vector\n             .\n           "
},
{
  "id": "theorem-conservative-vector-fields-in--rr-3-m-",
  "level": "2",
  "url": "section-curl-and-divergence.html#theorem-conservative-vector-fields-in--rr-3-m-",
  "type": "Theorem",
  "number": "14.5.2",
  "title": "Conservative Vector Fields in <span class=\"process-math\">\\(\\RR^{3}\\)<\/span>.",
  "body": "Conservative Vector Fields in  \n            Let   denote a continuously differentiable vector field on an open set containing the simply connected region  .\n            Then   is conservative if and only if  .\n           "
},
{
  "id": "example-determining-rotation-in-a-vector-field",
  "level": "2",
  "url": "section-curl-and-divergence.html#example-determining-rotation-in-a-vector-field",
  "type": "Example",
  "number": "14.5.3",
  "title": "Determining Rotation in a Vector Field.",
  "body": "Determining Rotation in a Vector Field \n            Suppose the vector field   represents a swirling fluid.\n            Within this fluid you place a small paddle wheel at the point  .\n            When viewed from directly above, will the paddle wheel tend to rotate clockwise or counterclockwise?\n           \n            First we need to get a measure of the rotation of  , so we compute the curl:\n             ,\n            which is just   at our point.\n            This provides the axis around which the paddle wheel rotates counterclockwise.\n            And since  , the paddle wheel does not appear to rotate at all when viewed from above.\n           "
},
{
  "id": "p-1727",
  "level": "2",
  "url": "section-curl-and-divergence.html#p-1727",
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
  "body": "Divergence on a Rectangle \n            Let   and let   denote the unit circle, traversed counterclockwise once.\n            Find the divergence of   at   and  .\n            Then find the  net divergence  of   through the interior of  .\n           \n            At  ,  .\n            At this particular point, outflow is balanced with inflow.\n            Likewise, at   we can see that inflow is greater than outflow.\n           \n            We can compute the net divergence as  , where   is the interior of the unit circle.\n            This is equal to  , which means the net flow throughout   is  .\n            By  , this is also equal to the net flux across  .\n           "
},
{
  "id": "definition-laplacian",
  "level": "2",
  "url": "section-curl-and-divergence.html#definition-laplacian",
  "type": "Definition",
  "number": "14.5.5",
  "title": "Laplacian.",
  "body": "Laplacian Laplacian Laplacian "
},
{
  "id": "example-laplacians-and-average-values",
  "level": "2",
  "url": "section-curl-and-divergence.html#example-laplacians-and-average-values",
  "type": "Example",
  "number": "14.5.6",
  "title": "Laplacians and Average Values.",
  "body": "Laplacians and Average Values \n            Let   and let  .\n            Let   denote the unit circle traversed once counterclockwise.\n            Find the average values of   on  , their specific values at   and the Laplacians at  .\n           \n            If we compute the average values, we get\n             .\n            Furthermore,  .\n            We also have   and  .\n           "
},
{
  "id": "p-1738",
  "level": "2",
  "url": "section-curl-and-divergence.html#p-1738",
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
  "title": "Green's First Identity.",
  "body": "Green's First Identity Green's First Identity \n            Let   denote a simply connected region with piecewise smooth boundary  .\n            Suppose that   is continuously differentiable and   is twice continuously differentiable on an open domain containing  .\n            Then\n             .\n           \n            Since the right hand side involves a flux integral, this suggests that   may prove useful.\n            Applying this to   gives\n             .\n           \n            Now, recall that   is a kind of derivative operator.\n            For this reason, it also satisfies a version of the product rule:\n             .\n            Plugging this into the double integral and rearranging proves the result.\n           "
},
{
  "id": "section-parametric-surfaces-and-areas",
  "level": "1",
  "url": "section-parametric-surfaces-and-areas.html",
  "type": "Section",
  "number": "14.6",
  "title": "Parametric Surfaces and Areas",
  "body": "Parametric Surfaces and Areas \n        To extend   to surfaces in  , we need to parameterize surfaces just as we did curves.\n        As before, our computations depend on the specific parameterization we choose.\n       Parameterizing Surfaces \n        A curve is a one-dimensional object, and so our parameterizations typically involved only one independent variable.\n        A surface is fundamentally a two-dimensional object, and so we expect its parameterizations to involve two independent variables even if the surface is in  .\n        We will use vector functions of the form\n         \n        to represent our parameterizations.\n       Finding a Surface \n            Find the surface traced out by\n             \n            in  .\n           \n            For any point   on this surface, we know that   and  .\n            We can use these conditions to find an equation in   and   that is equivalent to  .\n           \n            First, let's solve for   and  , giving\n             \n            So\n             ,\n            which implies that\n             .\n           \n        In general, any plane can be represented using a vector function of the form\n         .\n       Parameterizing a Cylinder \n            Find a vector function   that traces out the portion of the cylinder   contained in the seventh octant.\n           \n            The presence of   in the equation defining this surface suggests something like polar coordinates, except for the  -plane instead of the  -plane.\n            So let   and  .\n            Then   on our surface, and we can parameterize it using\n             .\n            To place this in the correct octant, we must provide limits for   and  :\n             .\n           Tangent Planes from Space Curves smooth Tangent Plane to a Sphere \n            Let   be the sphere centered at the origin of radius  .\n            Parameterize the tangent plane to   at  .\n           \n            First, note that   actually lies on this sphere so the tangent plane here makes sense.\n            To parameterize the tangent plane, we first need to parameterize  :\n             .\n            Setting   and  , it follows that the tangent plane is parameterized by\n             .\n           \n            If we want the Cartesian equation of the plane instead, that's not too difficult either.\n            We just need a normal vector to the plane, and we can just use   for this:\n             .\n            If we want something even simpler, we can use  .\n            So a Cartesian equation for our plane is\n             .\n           Surface Areas \n        In addition to giving us a normal vector to the surface  , the quantity   can also be used to estimate the area of a small  parallelogram  on   at a given point  .\n        In particular, if\n         ,\n        then the area of the surface\n         \n        subject to the above restrictions on   and   is approximately\n         ,\n        where the cross product is evaluated at  .\n        This suggests the following definition.\n       parametric surfaces surface area Surface Area surface area Area of a Cone \n            Find the area of the part of the cone   bounded by   and   in the first octant.\n           \n            First, we parameterize the cone using\n             .\n            This gives\n             ,\n            and so the area of the conical segment is\n             .\n           orientable \n        As an example of a surface that is not orientable, consider the surface parameterized by\n         \n        for   and  .\n        After a  lot  of algebra, we find that the normal vector   should be\n         .\n       \n        Here's the problem: the normal vector is different at   compared with   since the   component gets its sign flipped.\n        But on the original surface there's no difference between   and  .\n        Hence this surface is non-orientable.\n       \n        SUGGESTED PROBLEMS:1, 3, 15, 19, 33, 43.\n       "
},
{
  "id": "example-finding-a-surface",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#example-finding-a-surface",
  "type": "Example",
  "number": "14.6.1",
  "title": "Finding a Surface.",
  "body": "Finding a Surface \n            Find the surface traced out by\n             \n            in  .\n           \n            For any point   on this surface, we know that   and  .\n            We can use these conditions to find an equation in   and   that is equivalent to  .\n           \n            First, let's solve for   and  , giving\n             \n            So\n             ,\n            which implies that\n             .\n           "
},
{
  "id": "example-parameterizing-a-cylinder",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#example-parameterizing-a-cylinder",
  "type": "Example",
  "number": "14.6.2",
  "title": "Parameterizing a Cylinder.",
  "body": "Parameterizing a Cylinder \n            Find a vector function   that traces out the portion of the cylinder   contained in the seventh octant.\n           \n            The presence of   in the equation defining this surface suggests something like polar coordinates, except for the  -plane instead of the  -plane.\n            So let   and  .\n            Then   on our surface, and we can parameterize it using\n             .\n            To place this in the correct octant, we must provide limits for   and  :\n             .\n           "
},
{
  "id": "p-1753",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#p-1753",
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
  "body": "Tangent Plane to a Sphere \n            Let   be the sphere centered at the origin of radius  .\n            Parameterize the tangent plane to   at  .\n           \n            First, note that   actually lies on this sphere so the tangent plane here makes sense.\n            To parameterize the tangent plane, we first need to parameterize  :\n             .\n            Setting   and  , it follows that the tangent plane is parameterized by\n             .\n           \n            If we want the Cartesian equation of the plane instead, that's not too difficult either.\n            We just need a normal vector to the plane, and we can just use   for this:\n             .\n            If we want something even simpler, we can use  .\n            So a Cartesian equation for our plane is\n             .\n           "
},
{
  "id": "definition-surface-area",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#definition-surface-area",
  "type": "Definition",
  "number": "14.6.4",
  "title": "Surface Area.",
  "body": "parametric surfaces surface area Surface Area surface area "
},
{
  "id": "example-area-of-a-cone",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#example-area-of-a-cone",
  "type": "Example",
  "number": "14.6.5",
  "title": "Area of a Cone.",
  "body": "Area of a Cone \n            Find the area of the part of the cone   bounded by   and   in the first octant.\n           \n            First, we parameterize the cone using\n             .\n            This gives\n             ,\n            and so the area of the conical segment is\n             .\n           "
},
{
  "id": "p-1761",
  "level": "2",
  "url": "section-parametric-surfaces-and-areas.html#p-1761",
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
  "body": "Surface Integrals surface integral orientable Mass of a Surface \n          Find the mass of the hemisphere   given by   assuming that  .\n         \n          We need to compute the surface integral  .\n          First, we need to find a vector function that traces out the hemisphere.\n          Using spherical coordinates for inspiration, we can use\n           \n          with\n           \n          Then\n           \n          Now we need to find the magnitude:\n           .\n          So the mass is\n           .\n         \n      If   is given by the equation  , then we can use\n       \n      to trace out  .\n      This gives\n       .\n     Surface Integral on a Cone \n          Set up the surface integral that gives the average value of   on the part of the cone   that lies above the unit circle in the third octant.\n         \n          Let   denote the part of the cone in the third octant above the unit circle and let   denote the portion of the unit circle directly under  .\n          The surface area of this part of the cone is  , so the average value of   on this part of the cone is\n           \n         \n      We can also talk about surface integrals of vector fields.\n      These are higher dimensional versions of flux integrals.\n     Surface Integral of a Vector Field surface integral of   over  \n      The surface integral above measures how   flows across the surface   in the direction of  .\n      However, we will always have two possible choices for  .\n      If   is orientable, then we know we can specify a consistent choice of direction  .\n      We just need to make sure this is done before computing the integral.\n     \n      If  , we can replace   with\n       ,\n      which gives\n       .\n     Flux Into a Sphere \n          Does   tend to flow into the sphere  ?\n         \n          Stealing our work from  , we can parameterize   using\n           \n          which gives\n           .\n          However, this is  not  the normal vector we need to use here.\n          Instead, we'll multiply by a negative to get the inward normal.\n          So\n           \n         \n      SUGGESTED PROBLEMS: 7, 9, 23, 29.\n     "
},
{
  "id": "p-1765",
  "level": "2",
  "url": "section-surface-integrals.html#p-1765",
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
  "body": "Mass of a Surface \n          Find the mass of the hemisphere   given by   assuming that  .\n         \n          We need to compute the surface integral  .\n          First, we need to find a vector function that traces out the hemisphere.\n          Using spherical coordinates for inspiration, we can use\n           \n          with\n           \n          Then\n           \n          Now we need to find the magnitude:\n           .\n          So the mass is\n           .\n         "
},
{
  "id": "example-surface-integral-on-a-cone",
  "level": "2",
  "url": "section-surface-integrals.html#example-surface-integral-on-a-cone",
  "type": "Example",
  "number": "14.7.2",
  "title": "Surface Integral on a Cone.",
  "body": "Surface Integral on a Cone \n          Set up the surface integral that gives the average value of   on the part of the cone   that lies above the unit circle in the third octant.\n         \n          Let   denote the part of the cone in the third octant above the unit circle and let   denote the portion of the unit circle directly under  .\n          The surface area of this part of the cone is  , so the average value of   on this part of the cone is\n           \n         "
},
{
  "id": "definition-surface-integral-of-a-vector-field",
  "level": "2",
  "url": "section-surface-integrals.html#definition-surface-integral-of-a-vector-field",
  "type": "Definition",
  "number": "14.7.3",
  "title": "Surface Integral of a Vector Field.",
  "body": "Surface Integral of a Vector Field surface integral of   over  "
},
{
  "id": "example-flux-Into-a-sphere",
  "level": "2",
  "url": "section-surface-integrals.html#example-flux-Into-a-sphere",
  "type": "Example",
  "number": "14.7.4",
  "title": "Flux Into a Sphere.",
  "body": "Flux Into a Sphere \n          Does   tend to flow into the sphere  ?\n         \n          Stealing our work from  , we can parameterize   using\n           \n          which gives\n           .\n          However, this is  not  the normal vector we need to use here.\n          Instead, we'll multiply by a negative to get the inward normal.\n          So\n           \n         "
},
{
  "id": "section-stokes-theorem",
  "level": "1",
  "url": "section-stokes-theorem.html",
  "type": "Section",
  "number": "14.8",
  "title": "Stokes' Theorem",
  "body": "Stokes' Theorem Stokes' Theorem Stokes' Theorem \n          Let   denote a simple, closed, orientable surface with unit normal   and let   denote a continuously differentiable vector field on  .\n          Then\n           ,\n          where   is oriented counterclockwise with respect to  .\n         Circulation Along a Triangle \n          Let   denote the triangle formed by the boundary of the plane   in the first octant, traversed counterclockwise when viewed from below.\n          Let  .\n          Find  .\n         \n          By  , we can write\n           \n          where   is the surface contained by  .\n          To find   we'll parameterize   using\n           .\n          Then\n           .\n          Likewise,\n           .\n          So\n           .\n         \n      An easier way to find a normal vector in the last example would be to use our knowledge from  .\n      However, the following approach is more general.\n      If   is described by the equation  , then   is guaranteed to be normal to  .\n      This is especially useful if   can be described by an equation of the form  , as above.\n      To see how, note that\n       .\n     Circulation Along a Paraboloid \n          Let   and let   denote the paraboloid   that lies inside the cylinder  , oriented upwards.\n          Use Stokes' Theorem to set up the surface integral equal to  .\n         \n      SUGGESTED PROBLEMS: 1, 3, 5, 7\n     "
},
{
  "id": "p-1778",
  "level": "2",
  "url": "section-stokes-theorem.html#p-1778",
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
  "title": "Stokes' Theorem.",
  "body": "Stokes' Theorem \n          Let   denote a simple, closed, orientable surface with unit normal   and let   denote a continuously differentiable vector field on  .\n          Then\n           ,\n          where   is oriented counterclockwise with respect to  .\n         "
},
{
  "id": "example-circulation-along-a-triangle",
  "level": "2",
  "url": "section-stokes-theorem.html#example-circulation-along-a-triangle",
  "type": "Example",
  "number": "14.8.2",
  "title": "Circulation Along a Triangle.",
  "body": "Circulation Along a Triangle \n          Let   denote the triangle formed by the boundary of the plane   in the first octant, traversed counterclockwise when viewed from below.\n          Let  .\n          Find  .\n         \n          By  , we can write\n           \n          where   is the surface contained by  .\n          To find   we'll parameterize   using\n           .\n          Then\n           .\n          Likewise,\n           .\n          So\n           .\n         "
},
{
  "id": "example-circulation-along-a-paraboloid",
  "level": "2",
  "url": "section-stokes-theorem.html#example-circulation-along-a-paraboloid",
  "type": "Example",
  "number": "14.8.3",
  "title": "Circulation Along a Paraboloid.",
  "body": "Circulation Along a Paraboloid \n          Let   and let   denote the paraboloid   that lies inside the cylinder  , oriented upwards.\n          Use Stokes' Theorem to set up the surface integral equal to  .\n         "
},
{
  "id": "section-the-divergence-theorem",
  "level": "1",
  "url": "section-the-divergence-theorem.html",
  "type": "Section",
  "number": "14.9",
  "title": "The Divergence Theorem",
  "body": "The Divergence Theorem divergence theorem Divergence Theorem \n          Let   be a simple solid region and let   be the boundary surface of   oriented outwards.\n          Let   denote a continuously differentiable vector field on  .\n          Then\n           .\n         Flux across a spherical cap \n          Let   denote the top half of the sphere of radius   centered at the origin.\n          Let  .\n          Determine if   flows out of or into  .\n         \n          We need to calculate the flux integral  , which is made easier using  .\n          If we let   denote the interior of this region, we get\n           \n         Flux across a cube \n          Let   denote the surface of the unit cube with vertices at   and   and let  .\n          Find   where   is the  inward  unit normal to  .\n         \n      SUGGESTED PROBLEMS: 1, 3, 5, 19.\n     "
},
{
  "id": "p-1785",
  "level": "2",
  "url": "section-the-divergence-theorem.html#p-1785",
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
  "body": "Divergence Theorem \n          Let   be a simple solid region and let   be the boundary surface of   oriented outwards.\n          Let   denote a continuously differentiable vector field on  .\n          Then\n           .\n         "
},
{
  "id": "example-flux-across-a-spherical-cap",
  "level": "2",
  "url": "section-the-divergence-theorem.html#example-flux-across-a-spherical-cap",
  "type": "Example",
  "number": "14.9.2",
  "title": "Flux across a spherical cap.",
  "body": "Flux across a spherical cap \n          Let   denote the top half of the sphere of radius   centered at the origin.\n          Let  .\n          Determine if   flows out of or into  .\n         \n          We need to calculate the flux integral  , which is made easier using  .\n          If we let   denote the interior of this region, we get\n           \n         "
},
{
  "id": "example-flux-across-a-cube",
  "level": "2",
  "url": "section-the-divergence-theorem.html#example-flux-across-a-cube",
  "type": "Example",
  "number": "14.9.3",
  "title": "Flux across a cube.",
  "body": "Flux across a cube \n          Let   denote the surface of the unit cube with vertices at   and   and let  .\n          Find   where   is the  inward  unit normal to  .\n         "
},
{
  "id": "appendix-gfdl",
  "level": "1",
  "url": "appendix-gfdl.html",
  "type": "Appendix",
  "number": "A",
  "title": "GNU Free Documentation License",
  "body": "GNU Free Documentation License Version 1.3, 3 November 2008 Copyright  copyright  2000, 2001, 2002, 2007, 2008 Free Software Foundation, Inc. < > Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. 0. PREAMBLE The purpose of this License is to make a manual, textbook, or other functional and useful document  free  in the sense of freedom: to assure everyone the effective freedom to copy and redistribute it, with or without modifying it, either commercially or noncommercially. Secondarily, this License preserves for the author and publisher a way to get credit for their work, while not being considered responsible for modifications made by others. This License is a kind of  copyleft , which means that derivative works of the document must themselves be free in the same sense. It complements the GNU General Public License, which is a copyleft license designed for free software. We have designed this License in order to use it for manuals for free software, because free software needs free documentation: a free program should come with manuals providing the same freedoms that the software does. But this License is not limited to software manuals; it can be used for any textual work, regardless of subject matter or whether it is published as a printed book. We recommend this License principally for works whose purpose is instruction or reference. 1. APPLICABILITY AND DEFINITIONS This License applies to any manual or other work, in any medium, that contains a notice placed by the copyright holder saying it can be distributed under the terms of this License. Such a notice grants a world-wide, royalty-free license, unlimited in duration, to use that work under the conditions stated herein. The  Document , below, refers to any such manual or work. Any member of the public is a licensee, and is addressed as  you . You accept the license if you copy, modify or distribute the work in a way requiring permission under copyright law. A  Modified Version  of the Document means any work containing the Document or a portion of it, either copied verbatim, or with modifications and\/or translated into another language. A  Secondary Section  is a named appendix or a front-matter section of the Document that deals exclusively with the relationship of the publishers or authors of the Document to the Document's overall subject (or to related matters) and contains nothing that could fall directly within that overall subject. (Thus, if the Document is in part a textbook of mathematics, a Secondary Section may not explain any mathematics.) The relationship could be a matter of historical connection with the subject or with related matters, or of legal, commercial, philosophical, ethical or political position regarding them. The  Invariant Sections  are certain Secondary Sections whose titles are designated, as being those of Invariant Sections, in the notice that says that the Document is released under this License. If a section does not fit the above definition of Secondary then it is not allowed to be designated as Invariant. The Document may contain zero Invariant Sections. If the Document does not identify any Invariant Sections then there are none. The  Cover Texts  are certain short passages of text that are listed, as Front-Cover Texts or Back-Cover Texts, in the notice that says that the Document is released under this License. A Front-Cover Text may be at most 5 words, and a Back-Cover Text may be at most 25 words. A  Transparent  copy of the Document means a machine-readable copy, represented in a format whose specification is available to the general public, that is suitable for revising the document straightforwardly with generic text editors or (for images composed of pixels) generic paint programs or (for drawings) some widely available drawing editor, and that is suitable for input to text formatters or for automatic translation to a variety of formats suitable for input to text formatters. A copy made in an otherwise Transparent file format whose markup, or absence of markup, has been arranged to thwart or discourage subsequent modification by readers is not Transparent. An image format is not Transparent if used for any substantial amount of text. A copy that is not  Transparent  is called  Opaque . Examples of suitable formats for Transparent copies include plain ASCII without markup, Texinfo input format, LaTeX input format, SGML or XML using a publicly available DTD, and standard-conforming simple HTML, PostScript or PDF designed for human modification. Examples of transparent image formats include PNG, XCF and JPG. Opaque formats include proprietary formats that can be read and edited only by proprietary word processors, SGML or XML for which the DTD and\/or processing tools are not generally available, and the machine-generated HTML, PostScript or PDF produced by some word processors for output purposes only. The  Title Page  means, for a printed book, the title page itself, plus such following pages as are needed to hold, legibly, the material this License requires to appear in the title page. For works in formats which do not have any title page as such,  Title Page  means the text near the most prominent appearance of the work's title, preceding the beginning of the body of the text. The  publisher  means any person or entity that distributes copies of the Document to the public. A section  Entitled XYZ  means a named subunit of the Document whose title either is precisely XYZ or contains XYZ in parentheses following text that translates XYZ in another language. (Here XYZ stands for a specific section name mentioned below, such as  Acknowledgements ,  Dedications ,  Endorsements , or  History .) To  Preserve the Title  of such a section when you modify the Document means that it remains a section  Entitled XYZ  according to this definition. The Document may include Warranty Disclaimers next to the notice which states that this License applies to the Document. These Warranty Disclaimers are considered to be included by reference in this License, but only as regards disclaiming warranties: any other implication that these Warranty Disclaimers may have is void and has no effect on the meaning of this License. 2. VERBATIM COPYING You may copy and distribute the Document in any medium, either commercially or noncommercially, provided that this License, the copyright notices, and the license notice saying this License applies to the Document are reproduced in all copies, and that you add no other conditions whatsoever to those of this License. You may not use technical measures to obstruct or control the reading or further copying of the copies you make or distribute. However, you may accept compensation in exchange for copies. If you distribute a large enough number of copies you must also follow the conditions in section 3. You may also lend copies, under the same conditions stated above, and you may publicly display copies. 3. COPYING IN QUANTITY If you publish printed copies (or copies in media that commonly have printed covers) of the Document, numbering more than 100, and the Document's license notice requires Cover Texts, you must enclose the copies in covers that carry, clearly and legibly, all these Cover Texts: Front-Cover Texts on the front cover, and Back-Cover Texts on the back cover. Both covers must also clearly and legibly identify you as the publisher of these copies. The front cover must present the full title with all words of the title equally prominent and visible. You may add other material on the covers in addition. Copying with changes limited to the covers, as long as they preserve the title of the Document and satisfy these conditions, can be treated as verbatim copying in other respects. If the required texts for either cover are too voluminous to fit legibly, you should put the first ones listed (as many as fit reasonably) on the actual cover, and continue the rest onto adjacent pages. If you publish or distribute Opaque copies of the Document numbering more than 100, you must either include a machine-readable Transparent copy along with each Opaque copy, or state in or with each Opaque copy a computer-network location from which the general network-using public has access to download using public-standard network protocols a complete Transparent copy of the Document, free of added material. If you use the latter option, you must take reasonably prudent steps, when you begin distribution of Opaque copies in quantity, to ensure that this Transparent copy will remain thus accessible at the stated location until at least one year after the last time you distribute an Opaque copy (directly or through your agents or retailers) of that edition to the public. It is requested, but not required, that you contact the authors of the Document well before redistributing any large number of copies, to give them a chance to provide you with an updated version of the Document. 4. MODIFICATIONS You may copy and distribute a Modified Version of the Document under the conditions of sections 2 and 3 above, provided that you release the Modified Version under precisely this License, with the Modified Version filling the role of the Document, thus licensing distribution and modification of the Modified Version to whoever possesses a copy of it. In addition, you must do these things in the Modified Version: Use in the Title Page (and on the covers, if any) a title distinct from that of the Document, and from those of previous versions (which should, if there were any, be listed in the History section of the Document). You may use the same title as a previous version if the original publisher of that version gives permission. List on the Title Page, as authors, one or more persons or entities responsible for authorship of the modifications in the Modified Version, together with at least five of the principal authors of the Document (all of its principal authors, if it has fewer than five), unless they release you from this requirement. State on the Title page the name of the publisher of the Modified Version, as the publisher. Preserve all the copyright notices of the Document. Add an appropriate copyright notice for your modifications adjacent to the other copyright notices. Include, immediately after the copyright notices, a license notice giving the public permission to use the Modified Version under the terms of this License, in the form shown in the Addendum below. Preserve in that license notice the full lists of Invariant Sections and required Cover Texts given in the Document's license notice. Include an unaltered copy of this License. Preserve the section Entitled  History , Preserve its Title, and add to it an item stating at least the title, year, new authors, and publisher of the Modified Version as given on the Title Page. If there is no section Entitled  History  in the Document, create one stating the title, year, authors, and publisher of the Document as given on its Title Page, then add an item describing the Modified Version as stated in the previous sentence. Preserve the network location, if any, given in the Document for public access to a Transparent copy of the Document, and likewise the network locations given in the Document for previous versions it was based on.  These may be placed in the  History  section. You may omit a network location for a work that was published at least four years before the Document itself, or if the original publisher of the version it refers to gives permission. For any section Entitled  Acknowledgements  or  Dedications , Preserve the Title of the section, and preserve in the section all the substance and tone of each of the contributor acknowledgements and\/or dedications given therein. Preserve all the Invariant Sections of the Document, unaltered in their text and in their titles. Section numbers or the equivalent are not considered part of the section titles. Delete any section Entitled  Endorsements . Such a section may not be included in the Modified Version. Do not retitle any existing section to be Entitled  Endorsements  or to conflict in title with any Invariant Section. Preserve any Warranty Disclaimers. If the Modified Version includes new front-matter sections or appendices that qualify as Secondary Sections and contain no material copied from the Document, you may at your option designate some or all of these sections as invariant. To do this, add their titles to the list of Invariant Sections in the Modified Version's license notice. These titles must be distinct from any other section titles. You may add a section Entitled  Endorsements , provided it contains nothing but endorsements of your Modified Version by various parties   for example, statements of peer review or that the text has been approved by an organization as the authoritative definition of a standard. You may add a passage of up to five words as a Front-Cover Text, and a passage of up to 25 words as a Back-Cover Text, to the end of the list of Cover Texts in the Modified Version. Only one passage of Front-Cover Text and one of Back-Cover Text may be added by (or through arrangements made by) any one entity. If the Document already includes a cover text for the same cover, previously added by you or by arrangement made by the same entity you are acting on behalf of, you may not add another; but you may replace the old one, on explicit permission from the previous publisher that added the old one. The author(s) and publisher(s) of the Document do not by this License give permission to use their names for publicity for or to assert or imply endorsement of any Modified Version. 5. COMBINING DOCUMENTS You may combine the Document with other documents released under this License, under the terms defined in section 4 above for modified versions, provided that you include in the combination all of the Invariant Sections of all of the original documents, unmodified, and list them all as Invariant Sections of your combined work in its license notice, and that you preserve all their Warranty Disclaimers. The combined work need only contain one copy of this License, and multiple identical Invariant Sections may be replaced with a single copy. If there are multiple Invariant Sections with the same name but different contents, make the title of each such section unique by adding at the end of it, in parentheses, the name of the original author or publisher of that section if known, or else a unique number. Make the same adjustment to the section titles in the list of Invariant Sections in the license notice of the combined work. In the combination, you must combine any sections Entitled  History  in the various original documents, forming one section Entitled  History ; likewise combine any sections Entitled  Acknowledgements , and any sections Entitled  Dedications . You must delete all sections Entitled  Endorsements . 6. COLLECTIONS OF DOCUMENTS You may make a collection consisting of the Document and other documents released under this License, and replace the individual copies of this License in the various documents with a single copy that is included in the collection, provided that you follow the rules of this License for verbatim copying of each of the documents in all other respects. You may extract a single document from such a collection, and distribute it individually under this License, provided you insert a copy of this License into the extracted document, and follow this License in all other respects regarding verbatim copying of that document. 7. AGGREGATION WITH INDEPENDENT WORKS A compilation of the Document or its derivatives with other separate and independent documents or works, in or on a volume of a storage or distribution medium, is called an  aggregate  if the copyright resulting from the compilation is not used to limit the legal rights of the compilation's users beyond what the individual works permit. When the Document is included in an aggregate, this License does not apply to the other works in the aggregate which are not themselves derivative works of the Document. If the Cover Text requirement of section 3 is applicable to these copies of the Document, then if the Document is less than one half of the entire aggregate, the Document's Cover Texts may be placed on covers that bracket the Document within the aggregate, or the electronic equivalent of covers if the Document is in electronic form. Otherwise they must appear on printed covers that bracket the whole aggregate. 8. TRANSLATION Translation is considered a kind of modification, so you may distribute translations of the Document under the terms of section 4. Replacing Invariant Sections with translations requires special permission from their copyright holders, but you may include translations of some or all Invariant Sections in addition to the original versions of these Invariant Sections. You may include a translation of this License, and all the license notices in the Document, and any Warranty Disclaimers, provided that you also include the original English version of this License and the original versions of those notices and disclaimers. In case of a disagreement between the translation and the original version of this License or a notice or disclaimer, the original version will prevail. If a section in the Document is Entitled  Acknowledgements ,  Dedications , or  History , the requirement (section 4) to Preserve its Title (section 1) will typically require changing the actual title. 9. TERMINATION You may not copy, modify, sublicense, or distribute the Document except as expressly provided under this License. Any attempt otherwise to copy, modify, sublicense, or distribute it is void, and will automatically terminate your rights under this License. However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation. Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice. Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, receipt of a copy of some or all of the same material does not give you any rights to use it. 10. FUTURE REVISIONS OF THIS LICENSE The Free Software Foundation may publish new, revised versions of the GNU Free Documentation License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns. See  . Each version of the License is given a distinguishing version number. If the Document specifies that a particular numbered version of this License  or any later version  applies to it, you have the option of following the terms and conditions either of that specified version or of any later version that has been published (not as a draft) by the Free Software Foundation. If the Document does not specify a version number of this License, you may choose any version ever published (not as a draft) by the Free Software Foundation. If the Document specifies that a proxy can decide which future versions of this License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Document. 11. RELICENSING Massive Multiauthor Collaboration Site  (or  MMC Site ) means any World Wide Web server that publishes copyrightable works and also provides prominent facilities for anybody to edit those works. A public wiki that anybody can edit is an example of such a server. A  Massive Multiauthor Collaboration  (or  MMC ) contained in the site means any set of copyrightable works thus published on the MMC site. CC-BY-SA  means the Creative Commons Attribution-Share Alike 3.0 license published by Creative Commons Corporation, a not-for-profit corporation with a principal place of business in San Francisco, California, as well as future copyleft versions of that license published by that same organization. Incorporate  means to publish or republish a Document, in whole or in part, as part of another Document. An MMC is  eligible for relicensing  if it is licensed under this License, and if all works that were first published under this License somewhere other than this MMC, and subsequently incorporated in whole or in part into the MMC, (1) had no cover texts or invariant sections, and (2) were thus incorporated prior to November 1, 2008. The operator of an MMC Site may republish an MMC contained in the site under CC-BY-SA on the same site at any time before August 1, 2009, provided the MMC is eligible for relicensing. ADDENDUM: How to use this License for your documents To use this License in a document you have written, include a copy of the License in the document and put the following copyright and license notices just after the title page: \n        Copyright (C)  YEAR  YOUR NAME.\n        Permission is granted to copy, distribute and\/or modify this document\n        under the terms of the GNU Free Documentation License, Version 1.3\n        or any later version published by the Free Software Foundation;\n        with no Invariant Sections, no Front-Cover Texts, and no Back-Cover Texts.\n        A copy of the license is included in the section entitled \"GNU\n        Free Documentation License\".\n         If you have Invariant Sections, Front-Cover Texts and Back-Cover Texts, replace the  with  Texts.  line with this: \n        with the Invariant Sections being LIST THEIR TITLES, with the\n        Front-Cover Texts being LIST, and with the Back-Cover Texts being LIST.\n         If you have Invariant Sections without Cover Texts, or some other combination of the three, merge those two alternatives to suit the situation. If your document contains nontrivial examples of program code, we recommend releasing these examples in parallel under your choice of free software license, such as the GNU General Public License, to permit their use in free software. "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": ""
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "This book was authored in MathBook XML. "
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
