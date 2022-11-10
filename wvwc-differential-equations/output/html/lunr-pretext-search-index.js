var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "Annual Edition 2022 \n             j-oldroyd.github.io\/wvwc-differential-equations \n             https:\/\/j-oldroyd.github.io\/wvwc-differential-equations\/output\/html\/wvwc-differential-equations.html \n         copyright "
},
{
  "id": "author-bio-JEO",
  "level": "1",
  "url": "author-bio-JEO.html",
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
  "body": "\n            This document was created to serve as lecture notes for the Differential Equations course at West Virginia Wesleyan College.\n            These notes are divided into two parts.\n             \n                     \n                        The first part,  Ordinary Differential Equations , introduces differential equations in one variable along with methods for their solution and several applications.\n                     \n                 \n                     \n                        The next part,  Partial Differential Equations , introduces Fourier series and differential equations in several variables, building up to solving the heat and wave equations.\n                     \n                 \n         \n            This document is very much  in progress  and therefore typos and other errors are to be expected.\n            If you find any, I would appreciate you letting me know by contacting me by email.\n         "
},
{
  "id": "section-ordinary-differential-equations",
  "level": "1",
  "url": "section-ordinary-differential-equations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Ordinary Differential Equations",
  "body": "Ordinary Differential Equations \n                This section corresponds to Section 1.1 from the textbook.\n             Basic Concepts \n                First, a definition of the primary concept in this course: the differential equation.\n             Differential Equations differential equations definition differential equation ordinary differential equation partial differential equation order \n                Examples of ODEs:\n                   ; this is a second order ODE relating the unknown function   with its second derivative.   ; this is a seventh order ODE involving the derivatives of the unknown function  . Note that in this ODE   is the independent variable whereas   serves as the dependent variable. \n             \n                Just as with equations in algebra, we can sometimes solve a differential equation.\n             Solution of a Differential Equation differential equations solution solution \n                It is straightforward to check if a function is a solution of some given differential equation, but  finding  solutions will make up the bulk of this course.\n             Verifying solutions \n                        Is   a solution of the ODE  ?\n                     \n                        At this point we don't know how to solve differential equations, but that doesn't mean we can't  check  solutions of differential equations.\n                        To do so, we just plug   wherever   shows up in the ODE and see if the resulting equation is true.\n                        So we have\n                         \n                        This is a true statement, so   satisfies the ODE.\n                        Hence   is a solution of the ODE.\n                     \n                In  ,   is not the only solution of  .\n                You can check that   and   are also solutions.\n                In fact,  any  function of the form   where   is a constant is a solution of  .\n                See  .\n             A family of solutions of  . general solutions particular solutions A trigonometric solution \n                        Show that  , where   and   are arbitrary constants, is a general solution of  .\n                        Then find a particular solution.\n                     \n                        To check that   is a general solution of  , we just need to plug it into the ODE and show that it satisfies it.\n                        Since\n                         \n                        this follows very quickly.\n                     \n                        To find a particular solution, all we need to do in this case is to pick specific values for   and   (any values will work here).\n                        So one particular solution of   is given by  , among infinitely many others.\n                     initial condition initial value problem (IVP) Solving an IVP \n                        Solve the IVP  .\n                     \n                        We need to find a function   that satisfies two different constraints:   and  .\n                        We'll start with the first one, which we actually know how to do from Calculus I.\n                        If  , then\n                         \n                        Now we need to make sure that   is equal to   if  .\n                        We do this by setting  ,   and choosing the right value for   to make the resulting equation true:\n                         \n                        So the solution of this IVP is the function  .\n                     \n                Two important things to keep in mind before we move to the next topic:\n                 ODEs by themselves have general solutions, whereas IVPs have particular solutions. When solving IVPs, it's important to keep track of any arbitrary constants that appear. Neglecting arbitrary constants usually makes it impossible to find the right particular solution. \n             Mathematical Models Newton's Law of Cooling Newton's Law of Cooling \n                        Restate Newton's Law of Cooling as a differential equation.\n                     \n                        It may not be obvious that Newton's Law of Cooling can be restated as a differential equation, but the phrase \"rate of change\" that appears in the statement of the law is a good clue that this can be done.\n                        To do this, first we need to give the relevant quantities (the temperature of the object and the temperature of the surrounding medium) names.\n                        Let   denote the temperature of the object at time   and let   denote the temperature of the surrounding medium at time  .\n                        Then Newton's Law of Cooling says that\n                         \n                        where   is some constant.\n                     \n                        Although we can't determine   precisely (this would require experimentation and depends on the object and medium in question), we can still say something useful about it.\n                        In particular,   must be negative.\n                        To see why, consider what the object does if   and  .\n                        If  , then the object must be cooling since the surrounding medium is cooler than the object.\n                        If the object is cooling, then  .\n                        On the other hand, if   then   since the object would be heating up in this case.\n                        The only way for this to occur is if  .\n                     \n                Most of the mathematical models we'll look at will take the form of an IVP.\n             An IVP modeling a falling object \n                        A ball weighing  0.5  is dropped from a height of  100  and is acted upon by gravity and air resistance.\n                        Assuming that the force of air resistance is proportional to the velocity of the ball, what is an IVP that models the movement of the ball?\n                     \n                        What we need to do is to translate this physical situation into mathematics, and to do that we need to start assigning names to the quantities of interest.\n                        The quantities that matter in this problem are the movement of the ball, the force of gravity and the force of air resistance.\n                        We'll name them as follows:\n                         \n                        where   is negative (since air resistance should act  against  velocity).\n                        To get a differential equation out of all this, we'll use Newton's Second Law (which is actually a second-order ODE in disguise).\n                        This says that the net force on the ball should be equal to its mass times acceleration:  .\n                        So we have\n                         \n                        or just\n                         \n                        The initial condition in this case would be  .\n                        So our IVP is\n                         \n                     \n                One quick note about the IVP in  \n                The differential equation was second-order, but there was only one corresponding initial condition.\n                As we'll see later, this is not enough to find a unique solution to this IVP.\n                For most IVPs we'll solve, we'll need as many initial conditions as the order of the ODE.\n                Something to look forward to.\n             \n                Now that we have a rough idea of what an ODE and an IVP actually are, we can move on to solving them.\n                In the next section, we'll look at a method that we can use to visualize ODEs and their solutions and another method that can be used to approximate solutions of ODEs.\n             "
},
{
  "id": "definition-differential-equations",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#definition-differential-equations",
  "type": "Definition",
  "number": "1.1.1",
  "title": "Differential Equations.",
  "body": "Differential Equations differential equations definition differential equation ordinary differential equation partial differential equation order "
},
{
  "id": "definition-solution-of-a-differential-equation",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#definition-solution-of-a-differential-equation",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Solution of a Differential Equation.",
  "body": "Solution of a Differential Equation differential equations solution solution "
},
{
  "id": "example-verifying-solutions",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#example-verifying-solutions",
  "type": "Example",
  "number": "1.1.3",
  "title": "Verifying solutions.",
  "body": "Verifying solutions \n                        Is   a solution of the ODE  ?\n                     \n                        At this point we don't know how to solve differential equations, but that doesn't mean we can't  check  solutions of differential equations.\n                        To do so, we just plug   wherever   shows up in the ODE and see if the resulting equation is true.\n                        So we have\n                         \n                        This is a true statement, so   satisfies the ODE.\n                        Hence   is a solution of the ODE.\n                     "
},
{
  "id": "figure-family-of-solutions",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#figure-family-of-solutions",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": "A family of solutions of  . "
},
{
  "id": "p-20",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#p-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solutions particular solutions "
},
{
  "id": "example-a-trigonometric-sol",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#example-a-trigonometric-sol",
  "type": "Example",
  "number": "1.1.5",
  "title": "A trigonometric solution.",
  "body": "A trigonometric solution \n                        Show that  , where   and   are arbitrary constants, is a general solution of  .\n                        Then find a particular solution.\n                     \n                        To check that   is a general solution of  , we just need to plug it into the ODE and show that it satisfies it.\n                        Since\n                         \n                        this follows very quickly.\n                     \n                        To find a particular solution, all we need to do in this case is to pick specific values for   and   (any values will work here).\n                        So one particular solution of   is given by  , among infinitely many others.\n                     "
},
{
  "id": "p-24",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#p-24",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial condition "
},
{
  "id": "p-25",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#p-25",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial value problem (IVP) "
},
{
  "id": "example-solving-an-ivp",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#example-solving-an-ivp",
  "type": "Example",
  "number": "1.1.6",
  "title": "Solving an IVP.",
  "body": "Solving an IVP \n                        Solve the IVP  .\n                     \n                        We need to find a function   that satisfies two different constraints:   and  .\n                        We'll start with the first one, which we actually know how to do from Calculus I.\n                        If  , then\n                         \n                        Now we need to make sure that   is equal to   if  .\n                        We do this by setting  ,   and choosing the right value for   to make the resulting equation true:\n                         \n                        So the solution of this IVP is the function  .\n                     "
},
{
  "id": "p-31",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#p-31",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton's Law of Cooling "
},
{
  "id": "example-newton-s-law-of-cooling",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#example-newton-s-law-of-cooling",
  "type": "Example",
  "number": "1.1.7",
  "title": "Newton's Law of Cooling.",
  "body": "Newton's Law of Cooling \n                        Restate Newton's Law of Cooling as a differential equation.\n                     \n                        It may not be obvious that Newton's Law of Cooling can be restated as a differential equation, but the phrase \"rate of change\" that appears in the statement of the law is a good clue that this can be done.\n                        To do this, first we need to give the relevant quantities (the temperature of the object and the temperature of the surrounding medium) names.\n                        Let   denote the temperature of the object at time   and let   denote the temperature of the surrounding medium at time  .\n                        Then Newton's Law of Cooling says that\n                         \n                        where   is some constant.\n                     \n                        Although we can't determine   precisely (this would require experimentation and depends on the object and medium in question), we can still say something useful about it.\n                        In particular,   must be negative.\n                        To see why, consider what the object does if   and  .\n                        If  , then the object must be cooling since the surrounding medium is cooler than the object.\n                        If the object is cooling, then  .\n                        On the other hand, if   then   since the object would be heating up in this case.\n                        The only way for this to occur is if  .\n                     "
},
{
  "id": "example-an-ivp-modeling-a-falling-object",
  "level": "2",
  "url": "section-ordinary-differential-equations.html#example-an-ivp-modeling-a-falling-object",
  "type": "Example",
  "number": "1.1.8",
  "title": "An IVP modeling a falling object.",
  "body": "An IVP modeling a falling object \n                        A ball weighing  0.5  is dropped from a height of  100  and is acted upon by gravity and air resistance.\n                        Assuming that the force of air resistance is proportional to the velocity of the ball, what is an IVP that models the movement of the ball?\n                     \n                        What we need to do is to translate this physical situation into mathematics, and to do that we need to start assigning names to the quantities of interest.\n                        The quantities that matter in this problem are the movement of the ball, the force of gravity and the force of air resistance.\n                        We'll name them as follows:\n                         \n                        where   is negative (since air resistance should act  against  velocity).\n                        To get a differential equation out of all this, we'll use Newton's Second Law (which is actually a second-order ODE in disguise).\n                        This says that the net force on the ball should be equal to its mass times acceleration:  .\n                        So we have\n                         \n                        or just\n                         \n                        The initial condition in this case would be  .\n                        So our IVP is\n                         \n                     "
},
{
  "id": "section-direction-fields",
  "level": "1",
  "url": "section-direction-fields.html",
  "type": "Section",
  "number": "1.2",
  "title": "Direction Fields",
  "body": "Direction Fields \n                This section corresponds to Section 1.2 from the textbook.\n             Direction Fields and Solution Curves \n                Suppose we wanted to solve the ODE  .\n                Then we can do so using the tools already available to us, since the mystery function   must have derivative given by  .\n                So\n                 \n                Any choice for   yields another solution of the ODE  .\n             Again, it's very important in this course not to forget the arbitrary constant  ! \n                Now let's make things a little more interesting.\n                Suppose we wanted to solve the ODE  .\n                Then this is  impossible  to do in a single \"closed-form\".\n             By closed-form we basically mean in terms of the usual exponential, trigonometric and polynomial functions, as well as their inverses. direction fields \n                To construct a direction field for an ODE of the form\n                 \n                perform the following steps:\n                 Pick a point   in the  -plane. Plug the point   into   to obtain the number  . Plot a short line segment with slope   at the point  . Repeat at several other points in the  -plane until you develop a satisfactory picture of the behavior of the ODE. \n                The resulting graph is called the direction field for the ODE.\n             Direction fields are often called slope fields. Plotting a direction field by hand \n                        Fill in the direction field for   at the indicated points:\n                     Graph for hand plot of direction field. \n                        To plot the direction field, remember that we're basically plotting  slopes .\n                        So we first need to figure out   at the indicated points.\n                        The following table lists values for   at some of these points:\n                     Slopes of  \n                        If we fill out the remaining values of   and plot the corresponding slopes, we should get something like this:\n                     Direction field of  Plotting a direction field with a CAS \n                        Plot the direction field for the differential equation  , where  .\n                     \n                        We can easily do this with a computer system (such as Sage!).\n                        For example, try running the cell below this example.\n                        If we do so, we get something like the following diagram:\n                     Direction field for  \n                Direction fields are useful because they provide a means to obtain information about a differential equation (and the corresponding model) without actually having to solve the differential equation.\n                One way to do so is to create a  streamline plot .\n                This can be done easily in Sage, like so:\n                 \n                This can also be created by hand from a slope field without too much trouble.\n             solution curve Information from a solution curve \n                        Let   represent the solution of the initial value problem\n                         \n                        Determine  .\n                     \n                        Since we don't know how to solve this IVP yet, we'll make use of the direction field from   to find an approximate solution curve.\n                        Since the initial condition is  , this means that the solution must pass through the point  .\n                        So if we start at this point and trace a curve that flows with the direction field, we get the following solution curve:\n                     The solution curve corresponding to the initial condition  . \n                        So it appears that  .\n                     "
},
{
  "id": "p-45",
  "level": "2",
  "url": "section-direction-fields.html#p-45",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direction fields "
},
{
  "id": "example-plotting-a-direction-field-by-hand",
  "level": "2",
  "url": "section-direction-fields.html#example-plotting-a-direction-field-by-hand",
  "type": "Example",
  "number": "1.2.1",
  "title": "Plotting a direction field by hand.",
  "body": "Plotting a direction field by hand \n                        Fill in the direction field for   at the indicated points:\n                     Graph for hand plot of direction field. \n                        To plot the direction field, remember that we're basically plotting  slopes .\n                        So we first need to figure out   at the indicated points.\n                        The following table lists values for   at some of these points:\n                     Slopes of  \n                        If we fill out the remaining values of   and plot the corresponding slopes, we should get something like this:\n                     Direction field of  "
},
{
  "id": "example-plotting-a-direction-field-with-a-cas",
  "level": "2",
  "url": "section-direction-fields.html#example-plotting-a-direction-field-with-a-cas",
  "type": "Example",
  "number": "1.2.5",
  "title": "Plotting a direction field with a CAS.",
  "body": "Plotting a direction field with a CAS \n                        Plot the direction field for the differential equation  , where  .\n                     \n                        We can easily do this with a computer system (such as Sage!).\n                        For example, try running the cell below this example.\n                        If we do so, we get something like the following diagram:\n                     Direction field for  "
},
{
  "id": "p-54",
  "level": "2",
  "url": "section-direction-fields.html#p-54",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "solution curve "
},
{
  "id": "example-information-from-a-solution-curve",
  "level": "2",
  "url": "section-direction-fields.html#example-information-from-a-solution-curve",
  "type": "Example",
  "number": "1.2.7",
  "title": "Information from a solution curve.",
  "body": "Information from a solution curve \n                        Let   represent the solution of the initial value problem\n                         \n                        Determine  .\n                     \n                        Since we don't know how to solve this IVP yet, we'll make use of the direction field from   to find an approximate solution curve.\n                        Since the initial condition is  , this means that the solution must pass through the point  .\n                        So if we start at this point and trace a curve that flows with the direction field, we get the following solution curve:\n                     The solution curve corresponding to the initial condition  . \n                        So it appears that  .\n                     "
},
{
  "id": "section-separable-odes-and-substitution",
  "level": "1",
  "url": "section-separable-odes-and-substitution.html",
  "type": "Section",
  "number": "1.3",
  "title": "Separable ODEs and Substitution",
  "body": "Separable ODEs and Substitution \n                This section corresponds to Section 1.3 from the text.\n             Separable ODEs \n                The simplest ODEs to solve are the first-order ODEs of the form  .\n                The Fundamental Theorem of Calculus guarantees that the solution   is given by  .\n             \n                Rather, the Fundamental Theorem of Calculus guarantees that the solution will be   as long as   is a continuous function.\n             separable ODE \n                These ODEs can be solved by integration as well, but only after some rearranging.\n             Solving a separable ODE \n                        Solve the IVP given by  .\n                     \n                        The first step to solving this IVP is to solve the ODE  .\n                        It may not look like it at first, but this ODE is separable since we can rewrite it as  .\n                        To solve this ODE, we need to move the   terms to the left hand side of the equation and the   terms to the right hand side.\n                        We'll abuse notation a little bit to do so by rewriting   and treating   as a fraction, but it won't get us into too much trouble here:\n                     implicit form explicit form Newton's Law of Cooling again \n                        A metal plate is removed from an oven and placed in a room.\n                        The temperature of the plate is   Celsius and the temperature of the room is fixed at   Celsius.\n                        After   minutes the temperature of the plate drops to   Celsius.\n                        How hot is the plate after five hours?\n                     \n                        Let   denote the temperature of the plate   minutes after being removed from the oven and let   denote the temperature of the room   minutes after the plate is removed from the oven.\n                        Then   and Newton's Law of Cooling says that\n                     \n                        To answer this question we need to find  , and although we don't know   at the moment we can still make some progress just by remembering that it's a constant.\n                        This ODE is separable, so we'll separate variables and integrate both sides to get\n                         \n                        which simplifies to   or just  .\n                     \n                        Now we need to find   and  .\n                        To find  , we just use the initial condition to get  .\n                        The only piece of information that we have left to find   is the fact that the temperature of the plate drops to   after   minutes.\n                        In other words,  .\n                        Therefore\n                         \n                        which becomes\n                         .\n                        Therefore  \n                     \n                        So, finally,   and the temperature after five hours is  .\n                     Substitution Methods \n                At this point we can only solve a couple types of differential equations.\n                An ODE that isn't of the form   or separable may prove troublesome.\n                However, there are certain cases where we can rewrite an ODE into one of these forms by using the right substitution.\n             Substitution to solve an ODE \n                        Find the general solution of  .\n                     \n                        This ODE is not separable and we can't just integrate it (since the right hand side depends on the dependent variable).\n                        However, the form of the right hand side suggests a substitution:  .\n                        This would simplify things quite a bit, leaving us with  .\n                        The only problem with this is that   depends on  , not  .\n                        We must rewrite   in terms of the new variable  , which isn't too bad.\n                        Since  , we get  .\n                        Therefore the ODE becomes\n                         \n                     \n                        This new ODE  is  separable, and so we separate variables and integrate to get  .\n                        If we don't care about finding an explicit solution, then we can just replace   to get the equation back in terms of  .\n                        So our (implicit) general solution is  .\n                     A less obvious substitution \n                        Find an explicit solution of  .\n                     \n                        It's tough to see what to do right away, so we'll try simplifying the ODE first.\n                        In particular, we'll solve for   to get\n                         \n                        If we stare at this for a while, we might convince ourselves that the right hand side really just depends on  , so we'll try replacing that with  .\n                        Then the ODE becomes  .\n                     \n                        Once again, this is much simpler but we need to rewrite   in terms of  .\n                        Since  , this means that   and so  .\n                        Then the ODE becomes\n                         .\n                     \n                        This new ODE can be rearranged to get  , and so  .\n                        Getting back in terms of  , we have   or just  .\n                     "
},
{
  "id": "p-60",
  "level": "2",
  "url": "section-separable-odes-and-substitution.html#p-60",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separable ODE "
},
{
  "id": "example-solving-a-separable-ode",
  "level": "2",
  "url": "section-separable-odes-and-substitution.html#example-solving-a-separable-ode",
  "type": "Example",
  "number": "1.3.1",
  "title": "Solving a separable ODE.",
  "body": "Solving a separable ODE \n                        Solve the IVP given by  .\n                     \n                        The first step to solving this IVP is to solve the ODE  .\n                        It may not look like it at first, but this ODE is separable since we can rewrite it as  .\n                        To solve this ODE, we need to move the   terms to the left hand side of the equation and the   terms to the right hand side.\n                        We'll abuse notation a little bit to do so by rewriting   and treating   as a fraction, but it won't get us into too much trouble here:\n                     implicit form explicit form "
},
{
  "id": "example-newton-s-law-of-cooling-again",
  "level": "2",
  "url": "section-separable-odes-and-substitution.html#example-newton-s-law-of-cooling-again",
  "type": "Example",
  "number": "1.3.2",
  "title": "Newton's Law of Cooling again.",
  "body": "Newton's Law of Cooling again \n                        A metal plate is removed from an oven and placed in a room.\n                        The temperature of the plate is   Celsius and the temperature of the room is fixed at   Celsius.\n                        After   minutes the temperature of the plate drops to   Celsius.\n                        How hot is the plate after five hours?\n                     \n                        Let   denote the temperature of the plate   minutes after being removed from the oven and let   denote the temperature of the room   minutes after the plate is removed from the oven.\n                        Then   and Newton's Law of Cooling says that\n                     \n                        To answer this question we need to find  , and although we don't know   at the moment we can still make some progress just by remembering that it's a constant.\n                        This ODE is separable, so we'll separate variables and integrate both sides to get\n                         \n                        which simplifies to   or just  .\n                     \n                        Now we need to find   and  .\n                        To find  , we just use the initial condition to get  .\n                        The only piece of information that we have left to find   is the fact that the temperature of the plate drops to   after   minutes.\n                        In other words,  .\n                        Therefore\n                         \n                        which becomes\n                         .\n                        Therefore  \n                     \n                        So, finally,   and the temperature after five hours is  .\n                     "
},
{
  "id": "example-substitution-to-solve-an-ode",
  "level": "2",
  "url": "section-separable-odes-and-substitution.html#example-substitution-to-solve-an-ode",
  "type": "Example",
  "number": "1.3.3",
  "title": "Substitution to solve an ODE.",
  "body": "Substitution to solve an ODE \n                        Find the general solution of  .\n                     \n                        This ODE is not separable and we can't just integrate it (since the right hand side depends on the dependent variable).\n                        However, the form of the right hand side suggests a substitution:  .\n                        This would simplify things quite a bit, leaving us with  .\n                        The only problem with this is that   depends on  , not  .\n                        We must rewrite   in terms of the new variable  , which isn't too bad.\n                        Since  , we get  .\n                        Therefore the ODE becomes\n                         \n                     \n                        This new ODE  is  separable, and so we separate variables and integrate to get  .\n                        If we don't care about finding an explicit solution, then we can just replace   to get the equation back in terms of  .\n                        So our (implicit) general solution is  .\n                     "
},
{
  "id": "example-a-less-obvious-substitution",
  "level": "2",
  "url": "section-separable-odes-and-substitution.html#example-a-less-obvious-substitution",
  "type": "Example",
  "number": "1.3.4",
  "title": "A less obvious substitution.",
  "body": "A less obvious substitution \n                        Find an explicit solution of  .\n                     \n                        It's tough to see what to do right away, so we'll try simplifying the ODE first.\n                        In particular, we'll solve for   to get\n                         \n                        If we stare at this for a while, we might convince ourselves that the right hand side really just depends on  , so we'll try replacing that with  .\n                        Then the ODE becomes  .\n                     \n                        Once again, this is much simpler but we need to rewrite   in terms of  .\n                        Since  , this means that   and so  .\n                        Then the ODE becomes\n                         .\n                     \n                        This new ODE can be rearranged to get  , and so  .\n                        Getting back in terms of  , we have   or just  .\n                     "
},
{
  "id": "section-first-order-linear-odes",
  "level": "1",
  "url": "section-first-order-linear-odes.html",
  "type": "Section",
  "number": "1.4",
  "title": "First-Order Linear ODEs",
  "body": "First-Order Linear ODEs first-order linear ODEs First-Order Linear ODEs first-order ODEs first-order linear ODEs \n                        A first-order ODE is said to be linear if it can be written in the following form:\n                         \n                     \n                We've actually seen such an ODE all the way back in  .\n                The ODE that we came up with in that problem can be rewritten as a first-order linear ODE with the right substitution (say,  ).\n                Our first goal in this section is then to figure out how to solve these ODEs.\n             \n                Note that this section corresponds to Section 1.5 from the text.\n             Integrating Factors \n                To get a sense of how to solve first-order linear ODEs, we'll try some relatively simple examples first.\n             Solving a first-order linear ODE \n                        Find the general solution of  .\n                     \n                        First, note that the ODE is indeed a first-order linear ODE since it takes the form given in  .\n                        If we stare at the ODE for a bit, we might think that the left hand side looks like something we'd get after using the product rule.\n                        Just compare   with  , and it appears that the unknown function   is taking the place of   in the product rule formula.\n                        If we could just figure out what the function   is supposed to be, then we could drastically simplify the left hand side of the ODE.\n                     \n                        Unfortunately, there is no such function   that works here.\n                        If there were, we'd have to have   and  , and clearly we aren't multiplying   by   in the ODE.\n                        But we can pull a dirty trick here!\n                        We'll multiply through the ODE by   to get the new ODE\n                         \n                        It might not be all that obvious why this helps us out, but now the left hand side can be simplified by the product rule:\n                         \n                     \n                        So we can rewrite the entire ODE as\n                         \n                        We can integrate this on both sides to get  , or just\n                         \n                        The explicit solution would be  .\n                     integrating factor Solving a first-order linear ODE in disguise \n                        Solve the second-order ODE given by\n                         \n                        with initial conditions  \n                     \n                        Even though this is a second-order ODE, we can rewrite it as a first-order ODE using the substitution  .\n                        Then the ODE becomes\n                         \n                        If we divide through by  , we get\n                         \n                        This can be solved by integrating factors since it takes the form given in  .\n                        The integrating factor we need is given by\n                         \n                     \n                        Now we multiply through the ODE by this integrating factor and rewrite the left hand side using the product rule to get\n                         \n                        At this step we can integrate both sides to get\n                         \n                        which becomes\n                         \n                     \n                        If we plug in the initial condition  , this forces  .\n                        Hence\n                         \n                        Now we integrate one last time to get  :\n                         \n                        If we use the last initial condition  , we see that  .\n                        Hence the solution of this IVP is\n                         \n                     Applications \n                A common application of first-order linear ODEs is in modeling \"mixture\" problems.\n                Suppose we have a tank which contains a solution (mixture of solute and solvent, such as salt and water).\n                Some amount of solution is also flowing into and out of the tank.\n                We want to measure the amount of solute in the tank at time  , call this amount  .\n                Then   will change depending on how the solute flows into and out of the tank, making it a prime target for a differential equation.\n             \n                If we set\n                 \n                then we can say that\n                 \n                where   is the volume of solution in the tank at time  .\n                 We assume that   are all constant. \n                Furthermore, if we let   denote the initial volume of the solution in the tank then we can say that  \n                Hence the amount of solute   obeys the first-order linear ODE\n                 \n             Salt in a tank \n                        A tank contains  100  of a solution consisting of  50  of salt dissolved in water.\n                        Solution containing  1  of salt is pumped into the tank at a rate of  2  and the well-mixed solution is pumped out at the rate of  3 .\n                        How much salt will be in the tank after   minutes?\n                     \n                        Let   denote the amount of salt in the tank after   minutes, so  .\n                        Then\n                         \n                        We can rearrange this to get\n                         \n                        This ODE is linear and has integrating factor  .\n                        Multiplying through the ODE by the integrating factor and rewriting it using the product rule then gives us\n                         \n                     \n                        Now we can integrate both sides to get\n                         \n                        or just  .\n                        Finally, the initial condition can be used to show that  , so  .\n                     "
},
{
  "id": "p-78",
  "level": "2",
  "url": "section-first-order-linear-odes.html#p-78",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first-order linear ODEs "
},
{
  "id": "definition-first-order-linear-odes",
  "level": "2",
  "url": "section-first-order-linear-odes.html#definition-first-order-linear-odes",
  "type": "Definition",
  "number": "1.4.1",
  "title": "First-Order Linear ODEs.",
  "body": "First-Order Linear ODEs first-order ODEs first-order linear ODEs \n                        A first-order ODE is said to be linear if it can be written in the following form:\n                         \n                     "
},
{
  "id": "example-solving-a-first-order-linear-ode",
  "level": "2",
  "url": "section-first-order-linear-odes.html#example-solving-a-first-order-linear-ode",
  "type": "Example",
  "number": "1.4.2",
  "title": "Solving a first-order linear ODE.",
  "body": "Solving a first-order linear ODE \n                        Find the general solution of  .\n                     \n                        First, note that the ODE is indeed a first-order linear ODE since it takes the form given in  .\n                        If we stare at the ODE for a bit, we might think that the left hand side looks like something we'd get after using the product rule.\n                        Just compare   with  , and it appears that the unknown function   is taking the place of   in the product rule formula.\n                        If we could just figure out what the function   is supposed to be, then we could drastically simplify the left hand side of the ODE.\n                     \n                        Unfortunately, there is no such function   that works here.\n                        If there were, we'd have to have   and  , and clearly we aren't multiplying   by   in the ODE.\n                        But we can pull a dirty trick here!\n                        We'll multiply through the ODE by   to get the new ODE\n                         \n                        It might not be all that obvious why this helps us out, but now the left hand side can be simplified by the product rule:\n                         \n                     \n                        So we can rewrite the entire ODE as\n                         \n                        We can integrate this on both sides to get  , or just\n                         \n                        The explicit solution would be  .\n                     "
},
{
  "id": "p-87",
  "level": "2",
  "url": "section-first-order-linear-odes.html#p-87",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "example-solving-a-first-order-linear-ode-in-disguise",
  "level": "2",
  "url": "section-first-order-linear-odes.html#example-solving-a-first-order-linear-ode-in-disguise",
  "type": "Example",
  "number": "1.4.3",
  "title": "Solving a first-order linear ODE in disguise.",
  "body": "Solving a first-order linear ODE in disguise \n                        Solve the second-order ODE given by\n                         \n                        with initial conditions  \n                     \n                        Even though this is a second-order ODE, we can rewrite it as a first-order ODE using the substitution  .\n                        Then the ODE becomes\n                         \n                        If we divide through by  , we get\n                         \n                        This can be solved by integrating factors since it takes the form given in  .\n                        The integrating factor we need is given by\n                         \n                     \n                        Now we multiply through the ODE by this integrating factor and rewrite the left hand side using the product rule to get\n                         \n                        At this step we can integrate both sides to get\n                         \n                        which becomes\n                         \n                     \n                        If we plug in the initial condition  , this forces  .\n                        Hence\n                         \n                        Now we integrate one last time to get  :\n                         \n                        If we use the last initial condition  , we see that  .\n                        Hence the solution of this IVP is\n                         \n                     "
},
{
  "id": "example-salt-in-a-tank",
  "level": "2",
  "url": "section-first-order-linear-odes.html#example-salt-in-a-tank",
  "type": "Example",
  "number": "1.4.4",
  "title": "Salt in a tank.",
  "body": "Salt in a tank \n                        A tank contains  100  of a solution consisting of  50  of salt dissolved in water.\n                        Solution containing  1  of salt is pumped into the tank at a rate of  2  and the well-mixed solution is pumped out at the rate of  3 .\n                        How much salt will be in the tank after   minutes?\n                     \n                        Let   denote the amount of salt in the tank after   minutes, so  .\n                        Then\n                         \n                        We can rearrange this to get\n                         \n                        This ODE is linear and has integrating factor  .\n                        Multiplying through the ODE by the integrating factor and rewriting it using the product rule then gives us\n                         \n                     \n                        Now we can integrate both sides to get\n                         \n                        or just  .\n                        Finally, the initial condition can be used to show that  , so  .\n                     "
},
{
  "id": "section-existence-and-uniqueness-of-solutions",
  "level": "1",
  "url": "section-existence-and-uniqueness-of-solutions.html",
  "type": "Section",
  "number": "1.5",
  "title": "Existence and Uniqueness of Solutions",
  "body": "Existence and Uniqueness of Solutions \n                This section corresponds to Section 1.7 from the text.\n             Existence and Uniqueness Theorem \n                There are two important questions we need to consider when developing a mathematical model using differential equations (i.e. IVPs):\n                 Does the initial value problem have a solution? (Existence). If it has a solution, is the solution unique? (Uniqueness). \n                Ideally, the answer to both of these questions will be yes.\n             The answer is no \n                        Does   have a unique solution?\n                     \n                        We can find a solution to this IVP by treating the ODE as separable.\n                        If we do so, we find that  .\n                        On the other hand, we can also eyeball a second solution:  .\n                        So this IVP has  two  different solutions:   and  .\n                     \n                Clearly, IVPs don't always have unique solutions.\n                Sometimes it's difficult to determine precisely when an IVP can have a unique solution, but most of the cases we'll care about in this class will fall under the following theorem.\n             Existence and Uniqueness Theorem first-order ODEs existence and uniqueness \n                        Consider the IVP given by  .\n                        If   is bounded and continuous within some rectangle in the plane containing  , then the IVP has at least one solution.\n                        If in addition   is also bounded and continuous within some rectangle containing  , then the IVP has a unique solution.\n                     \n                If we go back to  , then we see that   has something to say about the IVP in that example.\n                In that example, we had   and  .\n                Let's draw a rectangle around this point:\n                 \n             \n                Now   is continuous and   within this rectangle, so\n                 \n                everywhere inside of this triangle.\n                So   guarantees  at least one  solution of the IVP, and indeed there is at least one solution.\n                However, the problem with uniqueness stems from the fact that   has a divide-by-zero problem inside this rectangle.\n                Furthermore, it's impossible to draw a rectangle around   that avoids this divide-by-zero problem.\n                Hence there is no guarantee of uniqueness.\n             \n                On the other hand, if we changed the initial condition to   then we would be guaranteed a unique solution.\n                Moving that initial condition off of the  -axis is all we need to do to guarantee uniqueness.\n             Picard Iteration \n                Now that we know of a way to determine whether or not certain ODEs have solutions, we'd like a method for actually finding these solutions.\n                We've seen a few different methods for solving specific first-order ODEs, but what we'll do now is discuss a method that works for a large class of first-order ODEs.\n                The only catch is that it may take us an infinite amount of time to get the solution.\n             integral equation \n                To start, let's make a guess as to what the solution of our IVP should be.\n                To keep things simple we'll start with a constant function, say   so that we at least satisfy the initial condition.\n                Now this guess may not be a good match for the solution of the IVP away from the initial condition, so we'll adjust the guess using the integral equation to get the new function  :\n                 \n                Now   may not be a great approximation either away from the initial condition, but we can adjust it using the integral equation just like we did to  .\n             Picard's Method "
},
{
  "id": "example-the-answer-is-no",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#example-the-answer-is-no",
  "type": "Example",
  "number": "1.5.1",
  "title": "The answer is no.",
  "body": "The answer is no \n                        Does   have a unique solution?\n                     \n                        We can find a solution to this IVP by treating the ODE as separable.\n                        If we do so, we find that  .\n                        On the other hand, we can also eyeball a second solution:  .\n                        So this IVP has  two  different solutions:   and  .\n                     "
},
{
  "id": "theorem-existence-and-uniqueness-theorem",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#theorem-existence-and-uniqueness-theorem",
  "type": "Theorem",
  "number": "1.5.2",
  "title": "Existence and Uniqueness Theorem.",
  "body": "Existence and Uniqueness Theorem first-order ODEs existence and uniqueness \n                        Consider the IVP given by  .\n                        If   is bounded and continuous within some rectangle in the plane containing  , then the IVP has at least one solution.\n                        If in addition   is also bounded and continuous within some rectangle containing  , then the IVP has a unique solution.\n                     "
},
{
  "id": "figure-existence-and-uniqueness-1",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#figure-existence-and-uniqueness-1",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": ""
},
{
  "id": "p-108",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#p-108",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral equation "
},
{
  "id": "p-110",
  "level": "2",
  "url": "section-existence-and-uniqueness-of-solutions.html#p-110",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Picard's Method "
},
{
  "id": "section-population-models-and-autonomous-equations",
  "level": "1",
  "url": "section-population-models-and-autonomous-equations.html",
  "type": "Section",
  "number": "1.6",
  "title": "Population Models and Autonomous Equations",
  "body": "Population Models and Autonomous Equations Population Equations \n                Suppose we're monitoring the population of some species, and let's denote the population at time   by  .\n                An obvious question to consider is how that population will change over time.\n                Mathematically, this means we want to obtain information on   and then use it to estimate  .\n             natural growth equation general population equation General Population Equation \n                        The general population equation for a population   is given by\n                         \n                     Population Explosion \n                        A population has   members at time   years with a death rate of   and a birth rate of  , where   denotes the population after   years.\n                        Find   and determine if this is a reasonable population model.\n                     \n                        If we assume that the population obeys the general growth equation, then we get\n                         \n                        This ODE is separable, and we can therefore solve it to get\n                         \n                     \n                        So we have a solution, and furthermore   guarantees that the solution is unique.\n                        But if you stare at this for a bit, you might see that it has a divide-by-zero problem.\n                        In particular, \n                         \n                        In other words, the population becomes infinite in about two weeks!\n                     The Logistic Equation \n                  shows that we need to be more careful with our assumptions on population growth.\n                One relatively simple assumption we can make is to assume that the birth rate   decreases as population   increases.\n                This makes sense in the physical world as well: as population increases, existing and finite resources (such as food) must be shared between more and more members of the population.\n                Since there's less to go around, we should expect growth to slow down.\n                In particular, let's assume that\n                 \n                where   and   are all positive constants.\n                Then the population equation for this scenario becomes\n                 \n             logistic equation Long-Term Behavior of Logistic Growth \n                        What is the long-term population of a species that grows according to the logistic equation  ?\n                     \n                        Using the fact that\n                         \n                        we have\n                         \n                        So the population should eventually level out at  .\n                     carrying capacity Population Growth in the USA \n                        In millions, the population of the USA in 1990 was   and was growing at a rate of   per year.\n                        In 2012, the population was   and was growing at a rate of   per year.\n                        Assuming that the population of the USA grows logistically, estimate the population of the USA in 2017 and compare it to the current estimate of  .\n                     \n                        Let   denote the population of the USA (in millions), where   is the number of years after 1990.\n                        Then\n                         \n                        and\n                         \n                        So we need to find   and  .\n                     \n                        When  , we have   and  .\n                        Similarly, when   we have   and  .\n                        Therefore\n                         \n                        Solving this system gives us   and  .\n                        Hence\n                         \n                     \n                        This model estimates the population in 2017 to be\n                         \n                        which is about a   error.\n                        Note also that this model predicts the carrying capacity of the USA to be  .\n                     Stability of Solutions autonomous ODEs critical points equilibrium solutions Finding Equilibrium Solutions \n                        Find the equilibrium solutions of  .\n                     \n                        We need to solve the equation  .\n                        Thankfully, we can factor this to get  , and so the equilibrium solutions are  .\n                     Stability of Solutions stable unstable Determining the Stability of Solutions \n                        What are the stable critical points of  ?\n                     phase diagram The phase diagram for  \n                        This shows us that solutions that begin near   tend to move away from  , which solutions near   tend to move towards  .\n                        So   is unstable and   is stable.\n                     Determining a Sustainable Population \n                        Consider a population of fish that obeys the logistic equation\n                         \n                        where   is the population of fish (in thousands) after   years.\n                        Suppose that the population is also harvested at some rate   (in thousands per year).\n                        What is the maximum sustainable rate of harvesting?\n                     \n                        To account for the harvesting, we need to modify the ODE:\n                         \n                        The harvesting will be sustainable as long as the population does not become extinct.\n                        To determine this long term behavior, we'll find the critical points and set up a phase diagram.\n                     \n                        The critical points are given by\n                         \n                        by the quadratic formula.\n                        We now have three cases to consider:  \n                        In terms of  , these reduce to  .\n                     \n                         \n                            In the first case, if   then we have two positive, real critical points:\n                             \n                            The phase diagram for this situation is\n                         \n                         \n                     \n                        So we see that   is unstable while   is stable.\n                        In particular, as long as  , then the rate of harvesting is sustainable.\n                     \n                     \n                         \n                            Now assume that  .\n                            Then we have only one equilibrium solution:  .\n                            The corresponding phase diagram is\n                         \n                             \n                         semi-stable. \n                     \n                         \n                            Finally, consider the case  .\n                            Then we have no (real) critical points.\n                            Since imaginary populations don't make sense in this model, there is no sustainable population.\n                            No matter how large the initial population, it will eventually go extinct if harvested at a rate greater than  .\n                         \n                     \n                    By the above, the largest sustainable harvesting rate is   as long as  .\n                 Linear Stability Analysis \n                Given the autonomous ODE  , we saw above that we can qualify the behavior of equilibrium solutions by setting up a phase diagram.\n                We can go a step further and actually qualify the growth of solutions that are \"near\" equilibrium solutions.\n                In particular, we have the following theorem.\n             Linear Stability Analysis \n                        Suppose   where   is continuously differentiable, and let   denote a critical point\/equilibrium solution of the ODE.\n                        If  , then   is stable and solutions near   will move exponentially towards  .\n                        If  , then   is unstable and solutions near   will move exponentially away from  .\n                        If  , then more advanced methods are required.\n                     Classifying the Critical Points of the Logistic Equation \n                        Classify the critical points of the logistic equation as stable or unstable.\n                     \n                        Recall that the logistic equation is given by   for (we'll assume) positive constants  .\n                        From here, we clearly see that the critical points are   and   (which makes sense from a population standpoint!).\n                        We could set up a phase diagram to determine stability, but we'll use   instead.\n                     \n                        Since  , we see that\n                         \n                        Hence   is unstable, while   is stable.\n                     "
},
{
  "id": "p-112",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#p-112",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural growth equation "
},
{
  "id": "p-113",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#p-113",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general population equation "
},
{
  "id": "definition-general-population-equation",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#definition-general-population-equation",
  "type": "Definition",
  "number": "1.6.1",
  "title": "General Population Equation.",
  "body": "General Population Equation \n                        The general population equation for a population   is given by\n                         \n                     "
},
{
  "id": "example-population-explosion",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-population-explosion",
  "type": "Example",
  "number": "1.6.2",
  "title": "Population Explosion.",
  "body": "Population Explosion \n                        A population has   members at time   years with a death rate of   and a birth rate of  , where   denotes the population after   years.\n                        Find   and determine if this is a reasonable population model.\n                     \n                        If we assume that the population obeys the general growth equation, then we get\n                         \n                        This ODE is separable, and we can therefore solve it to get\n                         \n                     \n                        So we have a solution, and furthermore   guarantees that the solution is unique.\n                        But if you stare at this for a bit, you might see that it has a divide-by-zero problem.\n                        In particular, \n                         \n                        In other words, the population becomes infinite in about two weeks!\n                     "
},
{
  "id": "p-119",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#p-119",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logistic equation "
},
{
  "id": "example-long-term-behavior-of-logistic-growth",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-long-term-behavior-of-logistic-growth",
  "type": "Example",
  "number": "1.6.3",
  "title": "Long-Term Behavior of Logistic Growth.",
  "body": "Long-Term Behavior of Logistic Growth \n                        What is the long-term population of a species that grows according to the logistic equation  ?\n                     \n                        Using the fact that\n                         \n                        we have\n                         \n                        So the population should eventually level out at  .\n                     "
},
{
  "id": "p-122",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#p-122",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "carrying capacity "
},
{
  "id": "example-population-growth-in-the-usa",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-population-growth-in-the-usa",
  "type": "Example",
  "number": "1.6.4",
  "title": "Population Growth in the USA.",
  "body": "Population Growth in the USA \n                        In millions, the population of the USA in 1990 was   and was growing at a rate of   per year.\n                        In 2012, the population was   and was growing at a rate of   per year.\n                        Assuming that the population of the USA grows logistically, estimate the population of the USA in 2017 and compare it to the current estimate of  .\n                     \n                        Let   denote the population of the USA (in millions), where   is the number of years after 1990.\n                        Then\n                         \n                        and\n                         \n                        So we need to find   and  .\n                     \n                        When  , we have   and  .\n                        Similarly, when   we have   and  .\n                        Therefore\n                         \n                        Solving this system gives us   and  .\n                        Hence\n                         \n                     \n                        This model estimates the population in 2017 to be\n                         \n                        which is about a   error.\n                        Note also that this model predicts the carrying capacity of the USA to be  .\n                     "
},
{
  "id": "p-127",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#p-127",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "autonomous ODEs "
},
{
  "id": "p-128",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#p-128",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "critical points equilibrium solutions "
},
{
  "id": "example-finding-equilibrium-solutions",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-finding-equilibrium-solutions",
  "type": "Example",
  "number": "1.6.5",
  "title": "Finding Equilibrium Solutions.",
  "body": "Finding Equilibrium Solutions \n                        Find the equilibrium solutions of  .\n                     \n                        We need to solve the equation  .\n                        Thankfully, we can factor this to get  , and so the equilibrium solutions are  .\n                     "
},
{
  "id": "definition-stability-critial-points",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#definition-stability-critial-points",
  "type": "Definition",
  "number": "1.6.6",
  "title": "Stability of Solutions.",
  "body": "Stability of Solutions stable unstable "
},
{
  "id": "example-determining-the-stability-of-solutions",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-determining-the-stability-of-solutions",
  "type": "Example",
  "number": "1.6.7",
  "title": "Determining the Stability of Solutions.",
  "body": "Determining the Stability of Solutions \n                        What are the stable critical points of  ?\n                     phase diagram The phase diagram for  \n                        This shows us that solutions that begin near   tend to move away from  , which solutions near   tend to move towards  .\n                        So   is unstable and   is stable.\n                     "
},
{
  "id": "example-determining-a-sustainable-population",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-determining-a-sustainable-population",
  "type": "Example",
  "number": "1.6.9",
  "title": "Determining a Sustainable Population.",
  "body": "Determining a Sustainable Population \n                        Consider a population of fish that obeys the logistic equation\n                         \n                        where   is the population of fish (in thousands) after   years.\n                        Suppose that the population is also harvested at some rate   (in thousands per year).\n                        What is the maximum sustainable rate of harvesting?\n                     \n                        To account for the harvesting, we need to modify the ODE:\n                         \n                        The harvesting will be sustainable as long as the population does not become extinct.\n                        To determine this long term behavior, we'll find the critical points and set up a phase diagram.\n                     \n                        The critical points are given by\n                         \n                        by the quadratic formula.\n                        We now have three cases to consider:  \n                        In terms of  , these reduce to  .\n                     \n                         \n                            In the first case, if   then we have two positive, real critical points:\n                             \n                            The phase diagram for this situation is\n                         \n                         \n                     \n                        So we see that   is unstable while   is stable.\n                        In particular, as long as  , then the rate of harvesting is sustainable.\n                     \n                     \n                         \n                            Now assume that  .\n                            Then we have only one equilibrium solution:  .\n                            The corresponding phase diagram is\n                         \n                             \n                         semi-stable. \n                     \n                         \n                            Finally, consider the case  .\n                            Then we have no (real) critical points.\n                            Since imaginary populations don't make sense in this model, there is no sustainable population.\n                            No matter how large the initial population, it will eventually go extinct if harvested at a rate greater than  .\n                         \n                     \n                    By the above, the largest sustainable harvesting rate is   as long as  .\n                 "
},
{
  "id": "theorem-linear-stability-analysis",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#theorem-linear-stability-analysis",
  "type": "Theorem",
  "number": "1.6.12",
  "title": "Linear Stability Analysis.",
  "body": "Linear Stability Analysis \n                        Suppose   where   is continuously differentiable, and let   denote a critical point\/equilibrium solution of the ODE.\n                        If  , then   is stable and solutions near   will move exponentially towards  .\n                        If  , then   is unstable and solutions near   will move exponentially away from  .\n                        If  , then more advanced methods are required.\n                     "
},
{
  "id": "example-classifying-the-critical-points-of-the-logistic-equation",
  "level": "2",
  "url": "section-population-models-and-autonomous-equations.html#example-classifying-the-critical-points-of-the-logistic-equation",
  "type": "Example",
  "number": "1.6.13",
  "title": "Classifying the Critical Points of the Logistic Equation.",
  "body": "Classifying the Critical Points of the Logistic Equation \n                        Classify the critical points of the logistic equation as stable or unstable.\n                     \n                        Recall that the logistic equation is given by   for (we'll assume) positive constants  .\n                        From here, we clearly see that the critical points are   and   (which makes sense from a population standpoint!).\n                        We could set up a phase diagram to determine stability, but we'll use   instead.\n                     \n                        Since  , we see that\n                         \n                        Hence   is unstable, while   is stable.\n                     "
},
{
  "id": "section-second-order-linear-odes",
  "level": "1",
  "url": "section-second-order-linear-odes.html",
  "type": "Section",
  "number": "2.1",
  "title": "Second-Order Linear ODEs",
  "body": "Second-Order Linear ODEs \n        Recall that a second-order ODE is an ODE whose highest derivative is the second derivative.\n        In this section, we'll look at how to solve second-order ODEs of a special type.\n        Our method of solution here will be generalized to many, many other ODEs.\n       Types of Linear ODEs \n        A first-order ODE is linear if it can be written in the form   (see  ).\n        We have a similar definition for second-order ODEs.\n       Second-Order Linear ODEs second-order ODEs second-order linear ODEs homogeneous and nonhomogeneous linear homogeneous nonhomogeneous Types of second-order ODEs \n          Consider the following ODEs:\n            is linear but nonhomogeneous.  is nonlinear.  is linear and homogeneous. \n         Hooke's Law Hooke's Law Hooke's Law \n            Consider an object attached to a spring.\n            The force exerted by the spring on the object is directly proportional to the displacement of the object from the spring's equilibrium, or at rest, position.\n           A second-order model \n            An object of mass  4  is attached to a horizontal, frictionless spring.\n            Let   denote the equilibrium position of the spring and let   denote the displacement of the mass from the spring's equilibrium position.\n            The only force acting on the mass is the force of the spring itself.\n            Find a mathematical model for  .\n           \n            Let   denote the force of the spring on the mass.\n            Then by   we must have   for some  .\n            Now, by Newton's Second Law we must also have  .\n            Hence\n             \n            So the motion of the mass is modeled by a linear, second-order homogeneous ODE.\n           \n          The reason we take   in Hooke's Law is because we want to emphasize that the spring force is a  restoring force , since it acts against the displacement of the mass.\n         \n        The general trend that we will see for mathematical models using linear ODEs is that they will be homogeneous if we assume that there is no external force, and nonhomogeneous if we assume there is an external force.\n       Solutions of Second-Order Linear ODEs \n        The reason we restrict ourselves to linear ODEs is because their solutions behave very nicely.\n        In particular, we have the  , which is an important principle for homogeneous ODEs.\n        First, some terminology.\n       Linear Combinations linear combination two functions linear combination The Superposition Principle second-order ODEs second-order linear ODEs superposition principle \n            Let   and   denote two (possibly different) solutions of the ODE  .\n            Then any linear combination of these solutions is itself another solution of the same ODE.\n           \n            We need to show that   is another solution of the same ODE, where   are arbitrary constants.\n            To do this, we'll just plug the linear combination into the ODE and simplify:\n             \n           \n          is important because it tells us how to construct new solutions of homogeneous ODEs out of known solutions.\n        The next example demonstrates this.\n       Solving a second-order IVP \n            Using the fact that   and   are both solutions of  , solve the IVP given by\n             \n           \n            Note that we have  two  initial conditions.\n            In general, we'll need as many initial conditions as the order of the ODE.\n           \n            To solve the IVP, we'll use the superposition principle to give us as much leeway as possible in constructing a solution of out   and  .\n            So we'll guess the solution takes the form  .\n            By the superposition principle we're guaranteed that this is a solution of the ODE  , so we just need to pick the constants   in order to satisfy the initial conditions.\n            Let's start with the first initial condition,  .\n            This gives us the equation\n             \n            So  .\n            Similarly,   gives us\n             \n            Hence  , and the solution of the IVP is\n             \n           \n        The reason we were able to solve the IVP in   was because the individual solutions   and   gave us enough to build the particular solution of the IVP.\n        It turns out that  every  solution of   can be written as a linear combination of these two functions, so knowing these two functions is enough to solve every IVP involving this ODE.\n       \n        In general, our goal will be to describe a \"basis\" of solutions for a given homogeneous ODE, a finite set of solutions that can be used to describe all possible solutions.\n        This can be done if the functions in the basis aren't too \"similar\", in the following sense.\n       Linear Independence of Functions linear independence two functions linearly independent linearly dependent \n        The main idea behind   is that   and   are linearly independent if they are not like terms (i.e. they don't cancel each other out).\n        Note that   are linearly dependent if and only if   for some  .\n        Equivalently, they are linearly dependent if and only if   for some  .\n       Linear independence of sine and cosine \n            Show that   and   are linearly independent.\n           \n            Since   is  not  constant, this means that   and   must be linearly independent.\n           Wronskian Wronskian of Two Functions Wronskian two functions \n            Let   and   denote two differentiable functions.\n            The Wronskian of   and  , denoted  , is given by\n             \n           Linear Independence and the Wronskian \n            Let   and   be two functions that are differentiable on some interval  .\n            Then   and   are linearly independent on   if    somewhere   .\n            Conversely, if    and    and   can both be represented by power series on  , then   and   are linearly dependent.\n           Using the Wronskian \n          If we let   and   and compute their Wronskian, we obtain (after a fair bit of algebra)  .\n          Since   and   can clearly be represented by power series on any interval   (since, being polynomials, they already  are  power series), this means that the two functions are linearly independent.\n         \n        We mentioned earlier that we'll try to find a basis of solutions for linear ODEs.\n        Now that we have the concept of linear independence and the Wronskian for checking if two functions are linearly independent, we can make the following definition.\n       Basis of Solutions second-order ODEs second-order linear ODEs basis basis \n        Once we have a basis for a second-order linear homogeneous ODE, we can solve any IVP that we wish involving that ODE.\n        In particular, if   is a basis for such an ODE, then  every  solution of the ODE can be written as a linear combination of   and  .\n       Linear independence using the Wronskian \n            Let\n             \n            Given that these functions are both solutions of\n             \n            solve the corresponding IVP with initial conditions  .\n           \n            We need to start by showing that   is a basis for the ODE.\n            First, we compute  :\n             \n            So  , which is clearly nonzero on the interval  .\n            Hence   and   are linearly independent, and therefore   is a basis for the ODE.\n           \n            To actually find the solution (call it  ), we'll set   and use the initial conditions to find   and  .\n            Doing so gives   and  , and so the solution of the IVP is\n             \n           "
},
{
  "id": "definition-second-order-linear-odes",
  "level": "2",
  "url": "section-second-order-linear-odes.html#definition-second-order-linear-odes",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Second-Order Linear ODEs.",
  "body": "Second-Order Linear ODEs second-order ODEs second-order linear ODEs homogeneous and nonhomogeneous linear homogeneous nonhomogeneous "
},
{
  "id": "example-types-of-second-order-odes",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-types-of-second-order-odes",
  "type": "Example",
  "number": "2.1.2",
  "title": "Types of second-order ODEs.",
  "body": "Types of second-order ODEs \n          Consider the following ODEs:\n            is linear but nonhomogeneous.  is nonlinear.  is linear and homogeneous. \n         "
},
{
  "id": "p-155",
  "level": "2",
  "url": "section-second-order-linear-odes.html#p-155",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hooke's Law "
},
{
  "id": "theorem-hooke-s-law",
  "level": "2",
  "url": "section-second-order-linear-odes.html#theorem-hooke-s-law",
  "type": "Theorem",
  "number": "2.1.3",
  "title": "Hooke's Law.",
  "body": "Hooke's Law Hooke's Law \n            Consider an object attached to a spring.\n            The force exerted by the spring on the object is directly proportional to the displacement of the object from the spring's equilibrium, or at rest, position.\n           "
},
{
  "id": "example-a-second-order-model",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-a-second-order-model",
  "type": "Example",
  "number": "2.1.4",
  "title": "A second-order model.",
  "body": "A second-order model \n            An object of mass  4  is attached to a horizontal, frictionless spring.\n            Let   denote the equilibrium position of the spring and let   denote the displacement of the mass from the spring's equilibrium position.\n            The only force acting on the mass is the force of the spring itself.\n            Find a mathematical model for  .\n           \n            Let   denote the force of the spring on the mass.\n            Then by   we must have   for some  .\n            Now, by Newton's Second Law we must also have  .\n            Hence\n             \n            So the motion of the mass is modeled by a linear, second-order homogeneous ODE.\n           "
},
{
  "id": "definition-linear-combinations",
  "level": "2",
  "url": "section-second-order-linear-odes.html#definition-linear-combinations",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Linear Combinations.",
  "body": "Linear Combinations linear combination two functions linear combination "
},
{
  "id": "theorem-the-superposition-principle",
  "level": "2",
  "url": "section-second-order-linear-odes.html#theorem-the-superposition-principle",
  "type": "Theorem",
  "number": "2.1.6",
  "title": "The Superposition Principle.",
  "body": "The Superposition Principle second-order ODEs second-order linear ODEs superposition principle \n            Let   and   denote two (possibly different) solutions of the ODE  .\n            Then any linear combination of these solutions is itself another solution of the same ODE.\n           \n            We need to show that   is another solution of the same ODE, where   are arbitrary constants.\n            To do this, we'll just plug the linear combination into the ODE and simplify:\n             \n           "
},
{
  "id": "example-solving-a-second-order-ivp",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-solving-a-second-order-ivp",
  "type": "Example",
  "number": "2.1.7",
  "title": "Solving a second-order IVP.",
  "body": "Solving a second-order IVP \n            Using the fact that   and   are both solutions of  , solve the IVP given by\n             \n           \n            Note that we have  two  initial conditions.\n            In general, we'll need as many initial conditions as the order of the ODE.\n           \n            To solve the IVP, we'll use the superposition principle to give us as much leeway as possible in constructing a solution of out   and  .\n            So we'll guess the solution takes the form  .\n            By the superposition principle we're guaranteed that this is a solution of the ODE  , so we just need to pick the constants   in order to satisfy the initial conditions.\n            Let's start with the first initial condition,  .\n            This gives us the equation\n             \n            So  .\n            Similarly,   gives us\n             \n            Hence  , and the solution of the IVP is\n             \n           "
},
{
  "id": "definition-linear-independence-of-functions",
  "level": "2",
  "url": "section-second-order-linear-odes.html#definition-linear-independence-of-functions",
  "type": "Definition",
  "number": "2.1.8",
  "title": "Linear Independence of Functions.",
  "body": "Linear Independence of Functions linear independence two functions linearly independent linearly dependent "
},
{
  "id": "example-linear-independence-of-sine-and-cosine",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-linear-independence-of-sine-and-cosine",
  "type": "Example",
  "number": "2.1.9",
  "title": "Linear independence of sine and cosine.",
  "body": "Linear independence of sine and cosine \n            Show that   and   are linearly independent.\n           \n            Since   is  not  constant, this means that   and   must be linearly independent.\n           "
},
{
  "id": "p-175",
  "level": "2",
  "url": "section-second-order-linear-odes.html#p-175",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Wronskian "
},
{
  "id": "definition-wronskian-of-two-functions",
  "level": "2",
  "url": "section-second-order-linear-odes.html#definition-wronskian-of-two-functions",
  "type": "Definition",
  "number": "2.1.10",
  "title": "Wronskian of Two Functions.",
  "body": "Wronskian of Two Functions Wronskian two functions \n            Let   and   denote two differentiable functions.\n            The Wronskian of   and  , denoted  , is given by\n             \n           "
},
{
  "id": "theorem-linear-independence-and-the-wronskian",
  "level": "2",
  "url": "section-second-order-linear-odes.html#theorem-linear-independence-and-the-wronskian",
  "type": "Theorem",
  "number": "2.1.11",
  "title": "Linear Independence and the Wronskian.",
  "body": "Linear Independence and the Wronskian \n            Let   and   be two functions that are differentiable on some interval  .\n            Then   and   are linearly independent on   if    somewhere   .\n            Conversely, if    and    and   can both be represented by power series on  , then   and   are linearly dependent.\n           "
},
{
  "id": "example-using-the-wronskian",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-using-the-wronskian",
  "type": "Example",
  "number": "2.1.12",
  "title": "Using the Wronskian.",
  "body": "Using the Wronskian \n          If we let   and   and compute their Wronskian, we obtain (after a fair bit of algebra)  .\n          Since   and   can clearly be represented by power series on any interval   (since, being polynomials, they already  are  power series), this means that the two functions are linearly independent.\n         "
},
{
  "id": "definition-basis-of-solutions",
  "level": "2",
  "url": "section-second-order-linear-odes.html#definition-basis-of-solutions",
  "type": "Definition",
  "number": "2.1.13",
  "title": "Basis of Solutions.",
  "body": "Basis of Solutions second-order ODEs second-order linear ODEs basis basis "
},
{
  "id": "example-linear-independence-using-the-wronskian",
  "level": "2",
  "url": "section-second-order-linear-odes.html#example-linear-independence-using-the-wronskian",
  "type": "Example",
  "number": "2.1.14",
  "title": "Linear independence using the Wronskian.",
  "body": "Linear independence using the Wronskian \n            Let\n             \n            Given that these functions are both solutions of\n             \n            solve the corresponding IVP with initial conditions  .\n           \n            We need to start by showing that   is a basis for the ODE.\n            First, we compute  :\n             \n            So  , which is clearly nonzero on the interval  .\n            Hence   and   are linearly independent, and therefore   is a basis for the ODE.\n           \n            To actually find the solution (call it  ), we'll set   and use the initial conditions to find   and  .\n            Doing so gives   and  , and so the solution of the IVP is\n             \n           "
},
{
  "id": "section-homogeneous-odes-with-constant-coefficients",
  "level": "1",
  "url": "section-homogeneous-odes-with-constant-coefficients.html",
  "type": "Section",
  "number": "2.2",
  "title": "Homogeneous ODEs with Constant Coefficients",
  "body": "Homogeneous ODEs with Constant Coefficients \n      Now we'll move on to solving homogeneous ODEs, at least with constant coefficients.\n     Solving a homogeneous ODE \n        Suppose we wanted to solve  , where  .\n        If we stare at this for a bit, we may realize the following: the only way for a function   to be a solution of this ODE is for   and its derivatives   to cancel each other out.\n        In other words,   and its derivatives  should be like terms .\n        This is a huge hint that   should look like an exponential function.\n        So we'll guess that   for some real number  , and see if we can't pick   in just the right way to get a solution to the ODE.\n        If we plug   into the ODE, we get\n       \n        So we need to set   equal to   and solve for  , which gives\n         \n        Therefore two solutions of   are given by   and  .\n        Since  , this means that   is actually the general solution of the ODE.\n       \n      The process in   will work for  every  second-order homogeneous ODE with constant coefficients.\n      So solving such an ODE is even easier than integrating: all we need to do is to find the roots of a particular polynomial.\n     The Characteristic Polynomial second-order ODEs characteristic equation characteristic equation \n      We can now state the following result for finding solutions of homogeneous ODEs with constant coefficients.\n     Characteristic Equations with Distinct Roots \n          Let   and   be constants.\n          Suppose that the characteristic equation of   has distinct roots   and  .\n          Then the general solution of the ODE is given by\n           \n         Spring-mass system revisited \n          An object of mass  4  is attached to a horizontal, frictionless spring.\n          Suppose the spring constant is given by  .\n          The mass is held  3  to the right of the spring's equilibrium position, and is then released at time   where   is in seconds.\n          Find the displacement   of the mass.\n         \n          We know from   that the second-order ODE given by\n           \n          provides a model for  , but now we are in a position to solve it.\n          The characteristic equation of this ODE is  , which has roots  .\n          The imaginary roots  are not a problem , and in fact provide significant information about the motion of the mass, as we'll soon see.\n          The general solution of the ODE is\n           \n         \n          The initial conditions are   and  , which give the equations\n           \n          The second equation implies that  , and applying this to the first equation now gives  .\n          Hence the displacement of the mass is given by\n           \n         Euler's formula Euler's Formula Euler's Formula \n          For all  , the following equations hold:\n           \n         \n      So using Euler's Formula on the solution from   gives\n       \n      So the imaginary roots   from   actually relate to the  frequency  of the spring-mass system in that problem.\n      This is a trend we will see often in this course: imaginary numbers corresponding to oscillating quantities.\n     \n      Now we'll take a look at how to solve second-order homogeneous ODEs whose characteristic equations have repeated roots.\n     Repeated roots in the characteristic equation \n          Find the general solution of   where  .\n         \n          We begin by solving the characteristic equation, which for this ODE is\n           \n          The only solution of this equation is  , which is a repeated root.\n          We can still get one solution of the ODE using this root, namely  , but we need two linearly independent solutions in order to find the general solution.\n         \n          To get the other solution, we'll make another guess: whatever it happens to be, it should look quite a bit like the first solution  , since it still needs to cancel out with its derivatives the same way that   does.\n          The easiest way to get a function that looks like   but is still linearly independent from   is to just multiply by  .\n          In other words, we'll guess (and check!) that   is another solution of  .\n          If we plug   into the ODE, we get\n           \n          which shows that   is indeed a solution of the ODE.\n          Since it's also linearly independent (which we can check via the Wronskian), this means that the general solution of   is\n           \n         \n      The method used in   also works for other homogeneous ODEs with constant coefficients whose characteristic equations have repeated roots.\n      Hence the roots of the characteristic equation  completely  determine the general solutions of such ODEs.\n      We summarize this in the following table.\n     Roots General solution \n      Remember that it's not a problem if the characteristic equation has imaginary roots, and in fact we must account for these in order to completely describe the corresponding physical system.\n      If we have imaginary roots, then we can simply use Euler's Formula to rewrite the solutions in terms of sine and cosine.\n     "
},
{
  "id": "example-solving-a-homogeneous-ode",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#example-solving-a-homogeneous-ode",
  "type": "Example",
  "number": "2.2.1",
  "title": "Solving a homogeneous ODE.",
  "body": "Solving a homogeneous ODE \n        Suppose we wanted to solve  , where  .\n        If we stare at this for a bit, we may realize the following: the only way for a function   to be a solution of this ODE is for   and its derivatives   to cancel each other out.\n        In other words,   and its derivatives  should be like terms .\n        This is a huge hint that   should look like an exponential function.\n        So we'll guess that   for some real number  , and see if we can't pick   in just the right way to get a solution to the ODE.\n        If we plug   into the ODE, we get\n       \n        So we need to set   equal to   and solve for  , which gives\n         \n        Therefore two solutions of   are given by   and  .\n        Since  , this means that   is actually the general solution of the ODE.\n       "
},
{
  "id": "definition-the-characteristic-polynomial",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#definition-the-characteristic-polynomial",
  "type": "Definition",
  "number": "2.2.2",
  "title": "The Characteristic Polynomial.",
  "body": "The Characteristic Polynomial second-order ODEs characteristic equation characteristic equation "
},
{
  "id": "theorem-characteristic-equations-with-distinct-roots",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#theorem-characteristic-equations-with-distinct-roots",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "Characteristic Equations with Distinct Roots.",
  "body": "Characteristic Equations with Distinct Roots \n          Let   and   be constants.\n          Suppose that the characteristic equation of   has distinct roots   and  .\n          Then the general solution of the ODE is given by\n           \n         "
},
{
  "id": "example-spring-mass-system-revisited",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#example-spring-mass-system-revisited",
  "type": "Example",
  "number": "2.2.4",
  "title": "Spring-mass system revisited.",
  "body": "Spring-mass system revisited \n          An object of mass  4  is attached to a horizontal, frictionless spring.\n          Suppose the spring constant is given by  .\n          The mass is held  3  to the right of the spring's equilibrium position, and is then released at time   where   is in seconds.\n          Find the displacement   of the mass.\n         \n          We know from   that the second-order ODE given by\n           \n          provides a model for  , but now we are in a position to solve it.\n          The characteristic equation of this ODE is  , which has roots  .\n          The imaginary roots  are not a problem , and in fact provide significant information about the motion of the mass, as we'll soon see.\n          The general solution of the ODE is\n           \n         \n          The initial conditions are   and  , which give the equations\n           \n          The second equation implies that  , and applying this to the first equation now gives  .\n          Hence the displacement of the mass is given by\n           \n         "
},
{
  "id": "p-195",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#p-195",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler's formula "
},
{
  "id": "theorem-euler-s-formula",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#theorem-euler-s-formula",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "Euler's Formula.",
  "body": "Euler's Formula Euler's Formula \n          For all  , the following equations hold:\n           \n         "
},
{
  "id": "example-repeated-roots-in-the-characteristic-equation",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#example-repeated-roots-in-the-characteristic-equation",
  "type": "Example",
  "number": "2.2.6",
  "title": "Repeated roots in the characteristic equation.",
  "body": "Repeated roots in the characteristic equation \n          Find the general solution of   where  .\n         \n          We begin by solving the characteristic equation, which for this ODE is\n           \n          The only solution of this equation is  , which is a repeated root.\n          We can still get one solution of the ODE using this root, namely  , but we need two linearly independent solutions in order to find the general solution.\n         \n          To get the other solution, we'll make another guess: whatever it happens to be, it should look quite a bit like the first solution  , since it still needs to cancel out with its derivatives the same way that   does.\n          The easiest way to get a function that looks like   but is still linearly independent from   is to just multiply by  .\n          In other words, we'll guess (and check!) that   is another solution of  .\n          If we plug   into the ODE, we get\n           \n          which shows that   is indeed a solution of the ODE.\n          Since it's also linearly independent (which we can check via the Wronskian), this means that the general solution of   is\n           \n         "
},
{
  "id": "table-2",
  "level": "2",
  "url": "section-homogeneous-odes-with-constant-coefficients.html#table-2",
  "type": "Table",
  "number": "2.2.7",
  "title": "",
  "body": "Roots General solution "
},
{
  "id": "section-spring-mass-models",
  "level": "1",
  "url": "section-spring-mass-models.html",
  "type": "Section",
  "number": "2.3",
  "title": "Spring-Mass Models",
  "body": "Spring-Mass Models \n        In this section we examine a common application of second-order ODEs: modeling movement in a spring-mass system.\n        We will look at two different types of motion: undamped and damped.\n        Note that this section corresponds to Section 2.4 of the text.\n       Free Undamped Motion \n        Suppose we have a mass   attached to a spring as in the following diagram:\n       A spring-mass system. \n        If we let   denote the displacement of the mass from the spring's equilibrium position and let   denote the force of the spring on the mass (see  , and assume that no other force is acting on the mass, then we know from   that   satisfies the second-order ODE given by\n         \n        If we set  , we can rewrite this to get\n         \n       \n        One thing we can notice right away about solutions of   is that they should all be periodic (see  ), which, of course, makes sense!.\n        To see why, note that the roots of the characteristic equation are  , which means that the solutions may be written in the form\n         \n        which we can rewrite as\n         \n        using Euler's Formula.\n        Hence every solution of   is a sinusoidal wave.\n       amplitude circular frequency period phase Another spring-mass system \n            An object with a mass of  5  is fixed to a spring and a force of  10  holds the mass  5  to the left of the spring's equilibrium position.\n            If the object is released, how long will it take for the mass to return to its original position?\n            And what is the position   of the mass?\n           \n            Let   denote the position of the mass   seconds after being released, so that   and  .\n            We could find the time it takes for the mass to return to its starting position by first finding  , but a quicker way is to just find the period   of  .\n            To do this, we must find the circular frequency  .\n            Thankfully, half of the work is done for us (we know  ), so we only need the value of   which itself comes from Hooke's Law.\n           \n            Call the spring force   and recall that  .\n            We know that it takes a force of  10  to hold the mass still at  .\n            The spring force must  precisely  counterbalance this force in order for the mass to remain still as it's held, which means that   since   pulls the mass to the right.\n            Therefore   and so  , which gives  .\n            This means that the period of motion is\n             \n           \n            To find  , we'll use the fact that it can be written as  .\n            Since   (because the mass can never go more than five meters from the equilibrium position) and we already know that  , we just need to find  .\n            We can just make use of the initial condition   to get this:\n             \n            and so we can choose  .\n            Hence\n             \n           \n          You may be troubled by the fact that we only explicitly used the first initial condition in this example.\n          However, the second condition   was actually used implicitly: it allowed us to assume that the amplitude was   as opposed to another number.\n          If  , finding   would have been a little trickier.\n         Free Damped Motion \n        Now we look at how the motion of a mass attached to a spring is altered if the motion is  damped , say, by a dashpot.\n        See  .\n       A damped spring-mass system. \n        Now in addition to the spring force  , we must also worry about the force   of the dashpot on the mass.\n          is always going to act against the velocity of the mass, so for simplicity we assume that   for some  .\n        Using   as usual in conjunction with Newton's Second Law gives us the second-order ODE\n         \n       \n        This ODE is homogeneous and has constant coefficients so we may solve it using the method of characteristic equations.\n        The characteristic equation of this ODE is\n         \n        The roots of this equation are\n         \n        The behavior of this system therefore depends on the quantity  , and so we have three cases to consider.\n       \n           \n             .\n           \n           overdamped motion \n         \n           \n             .\n           \n           critically damped \n         \n           \n             .\n           \n           underdamped \n         A Spring-Dashpot System \n            Suppose that an object of mass   is attached to both a spring and a dashpot.\n            The mass is held   meter to the left of the spring's equilibrium position  .\n            The force of the spring on the mass is   and the force of the dashpot on the mass is  , where   is the displacement of the mass.\n            At time  , the mass is released.\n            Find  .\n           \n            The ODE that models the motion of this mass is\n             \n            and the roots of the corresponding characteristic equation are\n             \n            We can already see that the motion must be underdamped since we have complex roots, and the position   itself is given by\n             \n           \n            Now we can use the initial conditions   and   to find   and  .\n            Doing so, we quickly get   and  .\n            Hence\n             \n           \n        As mentioned previously, the exponential term in   from   serves to dampen the motion of the spring.\n        This is illustrated in  .\n       An exponential term damping motion. "
},
{
  "id": "figure-spring-mass-system",
  "level": "2",
  "url": "section-spring-mass-models.html#figure-spring-mass-system",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": "A spring-mass system. "
},
{
  "id": "p-208",
  "level": "2",
  "url": "section-spring-mass-models.html#p-208",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "amplitude circular frequency period phase "
},
{
  "id": "example-another-spring-mass-system",
  "level": "2",
  "url": "section-spring-mass-models.html#example-another-spring-mass-system",
  "type": "Example",
  "number": "2.3.2",
  "title": "Another spring-mass system.",
  "body": "Another spring-mass system \n            An object with a mass of  5  is fixed to a spring and a force of  10  holds the mass  5  to the left of the spring's equilibrium position.\n            If the object is released, how long will it take for the mass to return to its original position?\n            And what is the position   of the mass?\n           \n            Let   denote the position of the mass   seconds after being released, so that   and  .\n            We could find the time it takes for the mass to return to its starting position by first finding  , but a quicker way is to just find the period   of  .\n            To do this, we must find the circular frequency  .\n            Thankfully, half of the work is done for us (we know  ), so we only need the value of   which itself comes from Hooke's Law.\n           \n            Call the spring force   and recall that  .\n            We know that it takes a force of  10  to hold the mass still at  .\n            The spring force must  precisely  counterbalance this force in order for the mass to remain still as it's held, which means that   since   pulls the mass to the right.\n            Therefore   and so  , which gives  .\n            This means that the period of motion is\n             \n           \n            To find  , we'll use the fact that it can be written as  .\n            Since   (because the mass can never go more than five meters from the equilibrium position) and we already know that  , we just need to find  .\n            We can just make use of the initial condition   to get this:\n             \n            and so we can choose  .\n            Hence\n             \n           "
},
{
  "id": "figure-damped-spring",
  "level": "2",
  "url": "section-spring-mass-models.html#figure-damped-spring",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": "A damped spring-mass system. "
},
{
  "id": "p-219",
  "level": "2",
  "url": "section-spring-mass-models.html#p-219",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "overdamped motion "
},
{
  "id": "p-221",
  "level": "2",
  "url": "section-spring-mass-models.html#p-221",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "critically damped "
},
{
  "id": "p-223",
  "level": "2",
  "url": "section-spring-mass-models.html#p-223",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "underdamped "
},
{
  "id": "example-a-spring-dashpot-system",
  "level": "2",
  "url": "section-spring-mass-models.html#example-a-spring-dashpot-system",
  "type": "Example",
  "number": "2.3.4",
  "title": "A Spring-Dashpot System.",
  "body": "A Spring-Dashpot System \n            Suppose that an object of mass   is attached to both a spring and a dashpot.\n            The mass is held   meter to the left of the spring's equilibrium position  .\n            The force of the spring on the mass is   and the force of the dashpot on the mass is  , where   is the displacement of the mass.\n            At time  , the mass is released.\n            Find  .\n           \n            The ODE that models the motion of this mass is\n             \n            and the roots of the corresponding characteristic equation are\n             \n            We can already see that the motion must be underdamped since we have complex roots, and the position   itself is given by\n             \n           \n            Now we can use the initial conditions   and   to find   and  .\n            Doing so, we quickly get   and  .\n            Hence\n             \n           "
},
{
  "id": "figure-damped-motion",
  "level": "2",
  "url": "section-spring-mass-models.html#figure-damped-motion",
  "type": "Figure",
  "number": "2.3.5",
  "title": "",
  "body": "An exponential term damping motion. "
},
{
  "id": "section-solutions-of-nonhomogeneous-equations",
  "level": "1",
  "url": "section-solutions-of-nonhomogeneous-equations.html",
  "type": "Section",
  "number": "2.4",
  "title": "Solutions of Non-homogeneous Equations",
  "body": "Solutions of Non-homogeneous Equations \n        In this section we'll deal with non-homogeneous equations and finding their solutions.\n        This will help us to model systems involving an external force.\n       This section corresponds to Section 2.7 of the text. The Method of Undetermined Coefficients \n        Consider the non-homogeneous linear ODE with constant coefficients given by\n         \n        If   were zero then we could solve this by finding the roots of the characteristic equations and using them to determine the appropriate form of the solution.\n        Although that's no longer enough if  , our method for solving homogeneous equations still plays an important role.\n       Solution of Non-homogeneous Equations complementary solution associated homogeneous equation particular solution method of undetermined coefficients Using the Method of Undetermined Coefficients \n            Find the general solution of the ODE given by\n             \n           \n            To find the general solution we need to do two things: find the complementary solution   of the associated homogeneous equation and find a single particular solution   of the given ODE.\n            We already know how to find  The characteristic equation of the ODE is  .  which is just\n             \n            Once we can find a single particular solution   we'll be finished.\n           \n            If we stare that the ODE, then we see that   and its derivatives must cancel each other and leave a polynomial.\n            So it's reasonable to guess that a polynomial might be a solution of the ODE, or equivalently,    should be a polynomial .\n            Since the degree Recall that the degree of a polynomial is just the highest power of the variable in the polynomial.  of the right hand side is  , then   should probably be degree   as well.\n            This means that   for some constants  .\n           undetermined coefficients \n        Note that in  , we didn't need any initial conditions to find  .\n        This means that if a non-homogeneous ODE like the one in   represents some physical system, then the initial configuration of that system  has no effect on  .\n        We will see soon that particular solutions correspond to external forces on a system, like gravity, whereas complementary solutions correspond to internal forces in a system, such as the spring force.\n       \n            Find the general solution of\n             \n           \n            The general solution will take the form  .\n            Once again, we find   by solving the characteristic equation to get\n             \n           \n            Now we can make a guess as to what   should be, once again based on the right hand side of the ODE.\n            If we want to differentiate   and obtain  , then   should include both an   term and a   term.\n            If we make the guess that  , then we get\n             \n            This forces    and   , as well as    and   .\n            Obviously, this is a problem!\n           \n            What happened here is we didn't give our guess for   enough flexibility.\n            We know we want   to involve   and  , but as soon as we plug this into the ODE and start differentiating constant terms and cosine terms will begin to appear, and  we need to account for these as well .\n            So we'll update our guess for  , and assume\n             \n            Plugging this into the ODE and collecting like terms gives\n             \n            Hence\n             \n            and the solution of our ODE is\n             \n           Method of Undetermined Coefficients with Overlap \n            Find the solution  m> of the IVP\n             \n           \n            We can start this example the same way we've done the previous ones.\n            First, we find   by solving  .\n            So\n             \n            Now we find  .\n            Since the RHS of the ODE is  , we'll guess that  .\n            However, this will cause us problems!\n            Since   are both solutions of the corresponding homogeneous ODE, then plugging   into   will just give   again, instead of  .\n           \n            The problem here is that our guess for   overlaps with  .\n            To fix this, we'll multiply our guess for   by the  smallest  power of   that removes the overlap.\n            In this case, we'll just multiply by   to get\n             \n            Now, we'll plug our modified guess into the ODE and set it equal to  :\n             \n            So we need   and  , or just  .\n            Hence\n             \n            and the general solution is then\n             \n           \n            To find the solution of the IVP, we just plug in the initial conditions.\n            Since  , this gives\n             \n            And since\n             \n              gives\n             \n            So\n             \n           \n        What we did in   will work in general: if   and the initial guess for   overlap, i.e. contain linearly dependent terms, then we multiply   by the  smallest  power of   (or the appropriate independent variable) that removes the overlap.\n       Determining the Appropriate Form of the Particular Solution \n            Consider the ODE\n             \n            Find the correct guess for  .\n           \n            Before we can do anything with  , we need to find the complementary solution  .\n            This is given by\n             \n            Now we can try to guess an appropriate form for   using the right hand side of the ODE.\n            Each \"component\" of the right hand side contributes to our guess for   as follows:\n             component contribution to  \n                     \n                   \n                     \n                   \n                     \n                   \n                     \n                   \n            But now we have a problem, since   overlaps with  .\n            So we multiply by   to remove the overlap, and hence\n             \n           "
},
{
  "id": "theorem-solution-of-non-homogeneous-equations",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#theorem-solution-of-non-homogeneous-equations",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "Solution of Non-homogeneous Equations.",
  "body": "Solution of Non-homogeneous Equations complementary solution associated homogeneous equation particular solution "
},
{
  "id": "p-232",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#p-232",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of undetermined coefficients "
},
{
  "id": "example-using-the-method-of-undetermined-coefficients",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#example-using-the-method-of-undetermined-coefficients",
  "type": "Example",
  "number": "2.4.2",
  "title": "Using the Method of Undetermined Coefficients.",
  "body": "Using the Method of Undetermined Coefficients \n            Find the general solution of the ODE given by\n             \n           \n            To find the general solution we need to do two things: find the complementary solution   of the associated homogeneous equation and find a single particular solution   of the given ODE.\n            We already know how to find  The characteristic equation of the ODE is  .  which is just\n             \n            Once we can find a single particular solution   we'll be finished.\n           \n            If we stare that the ODE, then we see that   and its derivatives must cancel each other and leave a polynomial.\n            So it's reasonable to guess that a polynomial might be a solution of the ODE, or equivalently,    should be a polynomial .\n            Since the degree Recall that the degree of a polynomial is just the highest power of the variable in the polynomial.  of the right hand side is  , then   should probably be degree   as well.\n            This means that   for some constants  .\n           undetermined coefficients "
},
{
  "id": "example-36",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#example-36",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": "\n            Find the general solution of\n             \n           \n            The general solution will take the form  .\n            Once again, we find   by solving the characteristic equation to get\n             \n           \n            Now we can make a guess as to what   should be, once again based on the right hand side of the ODE.\n            If we want to differentiate   and obtain  , then   should include both an   term and a   term.\n            If we make the guess that  , then we get\n             \n            This forces    and   , as well as    and   .\n            Obviously, this is a problem!\n           \n            What happened here is we didn't give our guess for   enough flexibility.\n            We know we want   to involve   and  , but as soon as we plug this into the ODE and start differentiating constant terms and cosine terms will begin to appear, and  we need to account for these as well .\n            So we'll update our guess for  , and assume\n             \n            Plugging this into the ODE and collecting like terms gives\n             \n            Hence\n             \n            and the solution of our ODE is\n             \n           "
},
{
  "id": "example-method-of-undetermined-coefficients-with-overlap",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#example-method-of-undetermined-coefficients-with-overlap",
  "type": "Example",
  "number": "2.4.4",
  "title": "Method of Undetermined Coefficients with Overlap.",
  "body": "Method of Undetermined Coefficients with Overlap \n            Find the solution  m> of the IVP\n             \n           \n            We can start this example the same way we've done the previous ones.\n            First, we find   by solving  .\n            So\n             \n            Now we find  .\n            Since the RHS of the ODE is  , we'll guess that  .\n            However, this will cause us problems!\n            Since   are both solutions of the corresponding homogeneous ODE, then plugging   into   will just give   again, instead of  .\n           \n            The problem here is that our guess for   overlaps with  .\n            To fix this, we'll multiply our guess for   by the  smallest  power of   that removes the overlap.\n            In this case, we'll just multiply by   to get\n             \n            Now, we'll plug our modified guess into the ODE and set it equal to  :\n             \n            So we need   and  , or just  .\n            Hence\n             \n            and the general solution is then\n             \n           \n            To find the solution of the IVP, we just plug in the initial conditions.\n            Since  , this gives\n             \n            And since\n             \n              gives\n             \n            So\n             \n           "
},
{
  "id": "example-determining-the-appropriate-form-of-the-particular-solution",
  "level": "2",
  "url": "section-solutions-of-nonhomogeneous-equations.html#example-determining-the-appropriate-form-of-the-particular-solution",
  "type": "Example",
  "number": "2.4.5",
  "title": "Determining the Appropriate Form of the Particular Solution.",
  "body": "Determining the Appropriate Form of the Particular Solution \n            Consider the ODE\n             \n            Find the correct guess for  .\n           \n            Before we can do anything with  , we need to find the complementary solution  .\n            This is given by\n             \n            Now we can try to guess an appropriate form for   using the right hand side of the ODE.\n            Each \"component\" of the right hand side contributes to our guess for   as follows:\n             component contribution to  \n                     \n                   \n                     \n                   \n                     \n                   \n                     \n                   \n            But now we have a problem, since   overlaps with  .\n            So we multiply by   to remove the overlap, and hence\n             \n           "
},
{
  "id": "section-forced-oscillations-and-resonance",
  "level": "1",
  "url": "section-forced-oscillations-and-resonance.html",
  "type": "Section",
  "number": "2.5",
  "title": "Forced Oscillations and Resonance",
  "body": "Forced Oscillations and Resonance \n        In this section we will develop models for certain systems under the influence of a periodic, external force.\n        The presence of an external force leads to non-homogeneous models, and we will use the techniques we developed in   to deal with these systems.\n       This section corresponds to Section 2.8 of the text. Undamped Systems \n        Consider the spring-mass system set up as in  .\n        Then we know that the displacement   satisfies  , where  .\n       external frequency internal frequency resonance Determining Resonance \n            An object with mass\n             2 \n            is attached to a spring and is held\n             1 \n            to the right of the spring's equilibrium position by a force of\n             8 \n            At time   seconds the mass is set in motion with an initial velocity of\n             2 \n            to the left.\n            Suppose an external force   acts on the mass as well.\n            Will the spring eventually break?\n           \n            We can answer this question by determining if resonance is present in this system.\n            The external frequency is  , and the internal frequency is  .\n            Since   and  , we have  , and so the frequencies match.\n            Hence the system is in resonance, and we can expect the spring to eventually break.\n           \n          It's not too hard to solve for   exactly here to get\n           \n          Graphing this, we get the figure produced in  .\n         A plot of the motion of the mass in  . Damped Systems \n        Now we'll take a look at forced, damped systems.\n        Suppose a mass   is fixed to a spring with spring force  , and is acted upon by a dashpot with force  , where   and   represents the displacement of the mass at time  .\n        If the mass is still acted upon by an external force  , then by Newton's Second Law the displacement   must satisfy\n         \n        The solution is given by  , where   is found as in   and goes to   as  .\n        With a little help from a computer algebra system such as Sage (see below), we see that\n         \n        where   as usual.\n       transient solution steady-state solution Steady-State Approximation \n            An object of mass\n             3 \n            is fixed to both a spring and a dashpot with respective forces   and  , where   is the displacement of the mass in meters and   is the equilibrium position.\n            An external force   is also applied to the mass, where   is in seconds.\n            The mass was set in motion with an unknown speed and unknown velocity approximately\n             7 \n            ago.\n            What will be the approximate position of the mass in\n             40 ?\n           \n            We know that the position will look like   where   as  , but we can't find the exact form of the transient solution without knowing the initial conditions.\n            So we'll assume that we can estimate the position of the mass using the steady-state solution  .\n            Since\n             \n            we get\n             \n            So after\n             40 \n            more seconds the mass should be around  , or about\n             -0.388 .\n           \n        In fact, the actual initial conditions used in   were   and  .\n        The corresponding exact solution is\n         \n        The exact value of   is within several  millionths  of the approximation  .\n       "
},
{
  "id": "p-254",
  "level": "2",
  "url": "section-forced-oscillations-and-resonance.html#p-254",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "external frequency internal frequency resonance "
},
{
  "id": "example-determining-resonance",
  "level": "2",
  "url": "section-forced-oscillations-and-resonance.html#example-determining-resonance",
  "type": "Example",
  "number": "2.5.1",
  "title": "Determining Resonance.",
  "body": "Determining Resonance \n            An object with mass\n             2 \n            is attached to a spring and is held\n             1 \n            to the right of the spring's equilibrium position by a force of\n             8 \n            At time   seconds the mass is set in motion with an initial velocity of\n             2 \n            to the left.\n            Suppose an external force   acts on the mass as well.\n            Will the spring eventually break?\n           \n            We can answer this question by determining if resonance is present in this system.\n            The external frequency is  , and the internal frequency is  .\n            Since   and  , we have  , and so the frequencies match.\n            Hence the system is in resonance, and we can expect the spring to eventually break.\n           "
},
{
  "id": "figure-forced-oscillations-and-resonance-aside-determining-resonance",
  "level": "2",
  "url": "section-forced-oscillations-and-resonance.html#figure-forced-oscillations-and-resonance-aside-determining-resonance",
  "type": "Figure",
  "number": "2.5.2",
  "title": "",
  "body": "A plot of the motion of the mass in  . "
},
{
  "id": "p-259",
  "level": "2",
  "url": "section-forced-oscillations-and-resonance.html#p-259",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transient solution steady-state solution "
},
{
  "id": "example-steady-state-approximation",
  "level": "2",
  "url": "section-forced-oscillations-and-resonance.html#example-steady-state-approximation",
  "type": "Example",
  "number": "2.5.3",
  "title": "Steady-State Approximation.",
  "body": "Steady-State Approximation \n            An object of mass\n             3 \n            is fixed to both a spring and a dashpot with respective forces   and  , where   is the displacement of the mass in meters and   is the equilibrium position.\n            An external force   is also applied to the mass, where   is in seconds.\n            The mass was set in motion with an unknown speed and unknown velocity approximately\n             7 \n            ago.\n            What will be the approximate position of the mass in\n             40 ?\n           \n            We know that the position will look like   where   as  , but we can't find the exact form of the transient solution without knowing the initial conditions.\n            So we'll assume that we can estimate the position of the mass using the steady-state solution  .\n            Since\n             \n            we get\n             \n            So after\n             40 \n            more seconds the mass should be around  , or about\n             -0.388 .\n           "
},
{
  "id": "section-homogeneous-linear-odes-with-constant-coefficients",
  "level": "1",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html",
  "type": "Section",
  "number": "3.1",
  "title": "Homogeneous Linear ODEs with Constant Coefficients",
  "body": "Homogeneous Linear ODEs with Constant Coefficients \n      Each tool that we used for solving second order linear ODEs with constant coefficients, in other words those ODEs of the form  , can be extended to solving more general   order linear ODEs with constant coefficients, which take the form\n       \n      where   are constants and  .\n      In this section, we'll focus on solutions of \\textit{homogeneous}   order linear ODEs with constant coefficients.\n      These are the ODEs where   in  .\n     \n      Recall that in Chapter 2, the general solution of   could be obtained by finding  two  linearly independent solutions  .\n      The general solution was then   (which is guaranteed to be a solution by   where   are arbitrary constants.\n      Similarly, the general solution of   is found by obtaining   linearly independent solutions  .\n      The general solution in this case is now  , where   are arbitrary constants.\n      Our main tool for showing that a collection   of solutions is in fact linearly independent is again the  Wronskian .\n     Wronskian Wronskian of several functions The Wronskian of Several Functions \n      Let   be a collection of functions.\n      Then the \\textbf{Wronskian} of  , denoted by  , is defined by\n       \n      Just as before, we have the following connection between the Wronskian and linear independence.\n      This theorem is a restatement of   for collections involving more than two functions.\n     Linear Independence and the Wronskian (Several Functions) \n          Let   be some open interval (we often take   to be  , but it doesn't have to be so) and let   be solutions of  .\n          If   for some point  , then   is linearly independent.\n         \n      Now that we have a tool for determining linear independence of several functions, we can also define a  basis of solutions  for higher order ODEs.\n     Basis of Solutions (Higher Order ODEs) higher order ODEs higher order linear ODEs basis basis \n      Bases are used to determine general solutions of linear ODEs.\n     Finding a Basis Set of Solutions Find the general solution of\n           \n          where   is a function of  .\n         \n          Just as we did for second order ODEs, we'll solve this by finding the characteristic equation.\n          To get the characteristic equation, we replace derivatives of   with powers of   to get\n           \n          Now we need to solve this equation.\n          It can factor (notice that   is a solution and then divide   by  ) as\n           \n          and so  \n          This means that the functions\n           \n          are all solutions of the original ODE.\n          If we can show that they're also linearly independent, then this will imply that the general solution of the ODE is given by\n           \n          To do this, we just compute the Wronskian of these functions:\n         \n          Since the Wronskian is nonzero,   and   are in fact linearly independent, and so the general solution of this ODE is\n           \n         \n        It can get tedious to try to compute the Wronskian every time when solving linear ODEs with constant coefficients, so it's good to note that   is guaranteed to be linearly independent as long as each of the   are distinct from the others.\n       \n          Find the general solution of  , where   is a function of  .\n         \n          We begin by finding the characteristic equation, which is\n           \n          This has solutions  .\n          This means that   and   are all solutions of the ODE.\n          Since the roots of the characteristic equation are all distinct, this means that these solutions are linearly independent from each other.\n          Since we have four linearly independent solutions, we can then construct the general solution of this ODE:\n           \n          which we can also rewrite using Euler's Formula   to get\n           \n         \n      In general, any root of the characteristic equation of the form   contributes the term   to the general solution.\n      As we saw in Chapter 2, it's possible for some characteristic equations to have repeated roots.\n      In this case, we initially weren't able to get enough linearly independent solutions, so we had to adjust our method a bit.\n      The same adjustment will work here.\n     Characteristic Equation with Repeated Roots \n          Find the general solution of\n           \n          where   is a function of  .\n         \n          The characteristic equation is\n           \n          so  .\n          One solution of the ODE will be  , and a second solution will be  .\n          But since   is a repeated root, it does not provide a third linearly independent solution  .\n          So we'll use the same trick we used before and multiply by   to get a third solution:  .\n          It can be verified that   is in fact a solution of the ODE, and is also linearly independent from  .\n          Therefore the general solution of the ODE is\n           \n         \n      Solutions of linear, homogeneous ODEs with constant coefficients depend  entirely  on the roots of the corresponding characteristic equation.\n      If we write the independent variable as  , and if   denotes a single root of the characteristic equation, then the general solution of the ODE will contain  , with the number of exponentials contributed by   being equal to its multiplicity.\n      That is, the number of times   appears as a solution of the characteristic equation.\n     \n          A linear, homogeneous ODE with constant coefficients (and independent variable  ) has characteristic equation given by\n           \n          What is the general solution of the ODE?\n         \n          We'll set up a table listing each root, its multiplicity and its contribution to the general solution:\n         Root Multiplicity Contribution   \n        So the general solution of this ODE is\n         \n          An ODE (with independent variable  ) has characteristic equation given by\n           \n          Find the general solution.\n         \n          We'll set up another table help us determine the general solution:\n         Root Multiplicity Contribution \n          So the general solution is\n           \n         \n        SUGGESTED PROBLEMS: 1, 3, 7, 9\n       "
},
{
  "id": "definition-the-wronskian-of-several-functions",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#definition-the-wronskian-of-several-functions",
  "type": "Definition",
  "number": "3.1.1",
  "title": "The Wronskian of Several Functions.",
  "body": "Wronskian Wronskian of several functions The Wronskian of Several Functions \n      Let   be a collection of functions.\n      Then the \\textbf{Wronskian} of  , denoted by  , is defined by\n       "
},
{
  "id": "theorem-linear-independence-and-the-wronskian-several-functions",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#theorem-linear-independence-and-the-wronskian-several-functions",
  "type": "Theorem",
  "number": "3.1.2",
  "title": "Linear Independence and the Wronskian (Several Functions).",
  "body": "Linear Independence and the Wronskian (Several Functions) \n          Let   be some open interval (we often take   to be  , but it doesn't have to be so) and let   be solutions of  .\n          If   for some point  , then   is linearly independent.\n         "
},
{
  "id": "definition-basis-of-solutions-higher-order",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#definition-basis-of-solutions-higher-order",
  "type": "Definition",
  "number": "3.1.3",
  "title": "Basis of Solutions (Higher Order ODEs).",
  "body": "Basis of Solutions (Higher Order ODEs) higher order ODEs higher order linear ODEs basis basis "
},
{
  "id": "example-finding-a-basis-set-of-solutions",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#example-finding-a-basis-set-of-solutions",
  "type": "Example",
  "number": "3.1.4",
  "title": "Finding a Basis Set of Solutions.",
  "body": "Finding a Basis Set of Solutions Find the general solution of\n           \n          where   is a function of  .\n         \n          Just as we did for second order ODEs, we'll solve this by finding the characteristic equation.\n          To get the characteristic equation, we replace derivatives of   with powers of   to get\n           \n          Now we need to solve this equation.\n          It can factor (notice that   is a solution and then divide   by  ) as\n           \n          and so  \n          This means that the functions\n           \n          are all solutions of the original ODE.\n          If we can show that they're also linearly independent, then this will imply that the general solution of the ODE is given by\n           \n          To do this, we just compute the Wronskian of these functions:\n         \n          Since the Wronskian is nonzero,   and   are in fact linearly independent, and so the general solution of this ODE is\n           \n         "
},
{
  "id": "example-42",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#example-42",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": "\n          Find the general solution of  , where   is a function of  .\n         \n          We begin by finding the characteristic equation, which is\n           \n          This has solutions  .\n          This means that   and   are all solutions of the ODE.\n          Since the roots of the characteristic equation are all distinct, this means that these solutions are linearly independent from each other.\n          Since we have four linearly independent solutions, we can then construct the general solution of this ODE:\n           \n          which we can also rewrite using Euler's Formula   to get\n           \n         "
},
{
  "id": "example-characteristic-equation-with-repeated-roots",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#example-characteristic-equation-with-repeated-roots",
  "type": "Example",
  "number": "3.1.6",
  "title": "Characteristic Equation with Repeated Roots.",
  "body": "Characteristic Equation with Repeated Roots \n          Find the general solution of\n           \n          where   is a function of  .\n         \n          The characteristic equation is\n           \n          so  .\n          One solution of the ODE will be  , and a second solution will be  .\n          But since   is a repeated root, it does not provide a third linearly independent solution  .\n          So we'll use the same trick we used before and multiply by   to get a third solution:  .\n          It can be verified that   is in fact a solution of the ODE, and is also linearly independent from  .\n          Therefore the general solution of the ODE is\n           \n         "
},
{
  "id": "example-44",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#example-44",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": "\n          A linear, homogeneous ODE with constant coefficients (and independent variable  ) has characteristic equation given by\n           \n          What is the general solution of the ODE?\n         \n          We'll set up a table listing each root, its multiplicity and its contribution to the general solution:\n         Root Multiplicity Contribution   \n        So the general solution of this ODE is\n         "
},
{
  "id": "example-45",
  "level": "2",
  "url": "section-homogeneous-linear-odes-with-constant-coefficients.html#example-45",
  "type": "Example",
  "number": "3.1.9",
  "title": "",
  "body": "\n          An ODE (with independent variable  ) has characteristic equation given by\n           \n          Find the general solution.\n         \n          We'll set up another table help us determine the general solution:\n         Root Multiplicity Contribution \n          So the general solution is\n           \n         "
},
{
  "id": "section-non-homogeneous-linear-odes-with-constant-coefficients",
  "level": "1",
  "url": "section-non-homogeneous-linear-odes-with-constant-coefficients.html",
  "type": "Section",
  "number": "3.2",
  "title": "Non-homogeneous Linear ODEs with Constant Coefficients",
  "body": "Non-homogeneous Linear ODEs with Constant Coefficients \n      For second order ODEs that were nonhomogeneous, linear and had constant coefficients, we found their general solution by first finding the complementary solution   and then a corresponding particular solution  .\n      The general solution was then  .\n        was found by solving the corresponding homogeneous equation and we used the method of undetermined coefficients to find  .\n      Although we are now looking at higher order ODEs, the method of undetermined coefficients remains unchanged.\n     \n          Find the general solution of\n           \n         \n          The general solution takes the form  , where   is a solution of the associated homogeneous equation   and   is a single solution of the original ODE  .\n          Since the characteristic equation of   is  , we get\n           \n          Now we'll find  .\n          Since the right hand side of the ODE is  , a good initial guess would be  .\n          However, when we take this guess and plug it into the ODE, we'll start seeing terms involving   as well (since  ) so this means we'll want to include   into our guess for   also.\n          So we'll modify our guess to be  .\n         \n          Since our guess for   doesn't overlap with  , we can proceed with plugging our guess into the original ODE   and equating coefficients, just as we did before.\n           \n          So we get   and  , which means that  . When solving for  , always remember to plug the values you find back into the guess for   that you used!\n          So the general solution of the ODE is\n           \n         \n      Just as before, we also need to worry about overlaps.\n     \n          Find the appropriate form of   for the ODE\n           \n         \n          We need to find   first since   will change depending on  .\n          Since the characteristic equation of the associated homogeneous ODE   is\n           \n          we get\n           \n         \n          Now we come up with a guess for   using the right hand side of the original ODE and dividing it into ``components:''\n         Component Contribution to    \n          However, we now have a problem with overlaps between   and  .\n          The guess corresponding to the first component overlaps with  , so we need to multiply it by   to remove the overlap.\n          Similarly, the guess corresponding to the third component overlaps, so we must multiply it by  .\n          Therefore, our guess for   should be\n           \n         \n      The method of undetermined coefficients applied to the ODE\n       \n      can be summarized by the following table.\n      Note that   is the  smallest  power of   required to remove any overlaps with  .\n     Component of  Contribution to  \n          Find the general solution of\n           \n         \n          We begin by finding  .\n          Since the characteristic equation of the corresponding homogeneous ODE is  , we get   or just  .\n          So\n           \n          Now we can set up  :\n         Component Contribution to  \n          So our initial guess for   is given by  .\n          Plugging this into the ODE into a CAS such as Maple or Sage gives\n           \n          This gives us the system of equations\n           \n          which we can solve using Sage to get\n           \n         \n          So the general solution of the ODE is\n           \n         "
},
{
  "id": "example-46",
  "level": "2",
  "url": "section-non-homogeneous-linear-odes-with-constant-coefficients.html#example-46",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": "\n          Find the general solution of\n           \n         \n          The general solution takes the form  , where   is a solution of the associated homogeneous equation   and   is a single solution of the original ODE  .\n          Since the characteristic equation of   is  , we get\n           \n          Now we'll find  .\n          Since the right hand side of the ODE is  , a good initial guess would be  .\n          However, when we take this guess and plug it into the ODE, we'll start seeing terms involving   as well (since  ) so this means we'll want to include   into our guess for   also.\n          So we'll modify our guess to be  .\n         \n          Since our guess for   doesn't overlap with  , we can proceed with plugging our guess into the original ODE   and equating coefficients, just as we did before.\n           \n          So we get   and  , which means that  . When solving for  , always remember to plug the values you find back into the guess for   that you used!\n          So the general solution of the ODE is\n           \n         "
},
{
  "id": "example-47",
  "level": "2",
  "url": "section-non-homogeneous-linear-odes-with-constant-coefficients.html#example-47",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "\n          Find the appropriate form of   for the ODE\n           \n         \n          We need to find   first since   will change depending on  .\n          Since the characteristic equation of the associated homogeneous ODE   is\n           \n          we get\n           \n         \n          Now we come up with a guess for   using the right hand side of the original ODE and dividing it into ``components:''\n         Component Contribution to    \n          However, we now have a problem with overlaps between   and  .\n          The guess corresponding to the first component overlaps with  , so we need to multiply it by   to remove the overlap.\n          Similarly, the guess corresponding to the third component overlaps, so we must multiply it by  .\n          Therefore, our guess for   should be\n           \n         "
},
{
  "id": "table-7",
  "level": "2",
  "url": "section-non-homogeneous-linear-odes-with-constant-coefficients.html#table-7",
  "type": "Table",
  "number": "3.2.4",
  "title": "",
  "body": "Component of  Contribution to  "
},
{
  "id": "example-48",
  "level": "2",
  "url": "section-non-homogeneous-linear-odes-with-constant-coefficients.html#example-48",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": "\n          Find the general solution of\n           \n         \n          We begin by finding  .\n          Since the characteristic equation of the corresponding homogeneous ODE is  , we get   or just  .\n          So\n           \n          Now we can set up  :\n         Component Contribution to  \n          So our initial guess for   is given by  .\n          Plugging this into the ODE into a CAS such as Maple or Sage gives\n           \n          This gives us the system of equations\n           \n          which we can solve using Sage to get\n           \n         \n          So the general solution of the ODE is\n           \n         "
},
{
  "id": "section-systems-of-odes-as-models",
  "level": "1",
  "url": "section-systems-of-odes-as-models.html",
  "type": "Section",
  "number": "4.1",
  "title": "Systems of ODEs as Models",
  "body": "Systems of ODEs as Models \n      Interdependent quantities can often be represented mathematically by a system of equations.\n      If we have information about the rates of change of these quantities, then we may be able to develop a model using a system of differential equations.\n     first-order systems definition first order system \n      We are still only dealing with ordinary differential equations which means that we will only ever have one independent variable.\n      However, when dealing with systems of ODEs we will be working with several  dependent  variables.\n     \n  The systems of ODEs that we will consider will typically look like the following:\n   \n  where   are constants and   are functions of  .\n \n      Two brine tanks are set up as in  .\n      Fresh water flows into the tank at a rate of  , well-mixed solution flows from Tank 1 to Tank 2 at a rate of   and well-mixed solution flows out of Tank 2 at a rate of  .\n      Suppose that   and    are  5 , the volume of solution in Tank 1 is  10  and the volume of solution in Tank 2 is  7 .\n      Suppose Tank 1 has  5  of salt at time   and Tank 2 has  2  of salt at time  .\n      Set up a first-order system that describes the amount of salt in each tank at time  .\n     \n      Let   denote the amount of salt in Tank 1 at time  , and   denote the amount of salt in Tank 2 at time  .\n      Using the mixture ODE   developed in  , we can write\n       \n      or just\n       \n      with initial conditions   and  .\n     The two interconnected tanks from  . \n  To actually solve systems of ODEs, we'll use  matrices  to rewrite these systems as  matrix ODEs .\n matrices definition vectors definition matrices matrix column vectors zero matrix \n  As a brief example, let\n   \n  Then   is a   matrix and   is a   vector.\n Matrix-Vector Product product identity matrix scalar \n  If   is any   matrix and   and   vector, then   and  .\n \n      Let   and  .\n      Compute   and  .\n     \n      By definition,\n       \n     \n  In the last example, notice that  .\n  This means that   didn't really do all that much to   except to stretch it by a factor of  .\n  Vectors with this property will turn out to be the key to solving our systems of ODEs.\n Eigenvectors and eigenvalues eigenvector eigenvalue \n      Determine if   is an eigenvector of  .\n     \n      To do this, we just need to compute  \n       \n      So   is an eigenvector of   with corresponding eigenvalue  .\n     \n  Since we will be looking at systems of ODEs which involve functions, we will need to define vector-valued functions.\n Vector-Valued Functions vector-valued function \n  We now have all of the tools we need to rewrite a first-order system as a matrix ODE.\n  Let\n   \n  If   and  , then\n   \n  In other words, we may rewrite the system as the matrix ODE\n   \n Write the system\n       \n      as a matrix ODE.\n     \n      We need to find a matrix   and vector   to let us rewrite this system.\n      The matrix   is formed from the coefficients of   on the right hand side of the system:\n       \n      The vector   is just made up of the dependent variables  :\n       \n      With these terms, the original system of ODEs is equivalent to the single matrix ODE\n       \n     Show that   where   is a solution of the system\n     \n   \n    We'll check that   is a solution of the matrix ODE just as we check solutions for normal ODEs: plug the potential solution into the ODE and check both sides.\n    If we do so, we get\n     \n    and\n     \n    Since these expressions match, this means that   is a solution of the ODE.\n   \n  One thing to note about the previous example is that   was an eigenvector of   with corresponding eigenvalue  .\n  See  .\n  This suggests that solutions of the matrix ODE   take the form  , where   is an eigenvalue of   with corresponding eigenvector  .\n  One last concept we need is that of linear independence of vectors.\n linear independence vectors Linear Independence of Vectors linearly independent linearly dependent \n  Just as before, our primary tool for showing if a collection is linearly independent is the Wronskian.\n Wronskian vectors Wronskian "
},
{
  "id": "definition-first-order-system",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-first-order-system",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "first-order systems definition first order system "
},
{
  "id": "example-interconnected-tanks",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#example-interconnected-tanks",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "\n      Two brine tanks are set up as in  .\n      Fresh water flows into the tank at a rate of  , well-mixed solution flows from Tank 1 to Tank 2 at a rate of   and well-mixed solution flows out of Tank 2 at a rate of  .\n      Suppose that   and    are  5 , the volume of solution in Tank 1 is  10  and the volume of solution in Tank 2 is  7 .\n      Suppose Tank 1 has  5  of salt at time   and Tank 2 has  2  of salt at time  .\n      Set up a first-order system that describes the amount of salt in each tank at time  .\n     \n      Let   denote the amount of salt in Tank 1 at time  , and   denote the amount of salt in Tank 2 at time  .\n      Using the mixture ODE   developed in  , we can write\n       \n      or just\n       \n      with initial conditions   and  .\n     "
},
{
  "id": "figure-interconnected-tanks",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#figure-interconnected-tanks",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": "The two interconnected tanks from  . "
},
{
  "id": "definition-matrices-and-vectors",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-matrices-and-vectors",
  "type": "Definition",
  "number": "4.1.4",
  "title": "",
  "body": "matrices definition vectors definition matrices matrix column vectors zero matrix "
},
{
  "id": "definition-matrix-vector-product",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-matrix-vector-product",
  "type": "Definition",
  "number": "4.1.5",
  "title": "Matrix-Vector Product.",
  "body": "Matrix-Vector Product product identity matrix scalar "
},
{
  "id": "example-50",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#example-50",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "\n      Let   and  .\n      Compute   and  .\n     \n      By definition,\n       \n     "
},
{
  "id": "definition-eigenvectors-and-eigenvalues",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-eigenvectors-and-eigenvalues",
  "type": "Definition",
  "number": "4.1.7",
  "title": "Eigenvectors and eigenvalues.",
  "body": "Eigenvectors and eigenvalues eigenvector eigenvalue "
},
{
  "id": "example-eigenvalue-eigenvector",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#example-eigenvalue-eigenvector",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": "\n      Determine if   is an eigenvector of  .\n     \n      To do this, we just need to compute  \n       \n      So   is an eigenvector of   with corresponding eigenvalue  .\n     "
},
{
  "id": "definition-vector-valued-function",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-vector-valued-function",
  "type": "Definition",
  "number": "4.1.9",
  "title": "Vector-Valued Functions.",
  "body": "Vector-Valued Functions vector-valued function "
},
{
  "id": "example-52",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#example-52",
  "type": "Example",
  "number": "4.1.10",
  "title": "",
  "body": "Write the system\n       \n      as a matrix ODE.\n     \n      We need to find a matrix   and vector   to let us rewrite this system.\n      The matrix   is formed from the coefficients of   on the right hand side of the system:\n       \n      The vector   is just made up of the dependent variables  :\n       \n      With these terms, the original system of ODEs is equivalent to the single matrix ODE\n       \n     "
},
{
  "id": "example-53",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#example-53",
  "type": "Example",
  "number": "4.1.11",
  "title": "",
  "body": "Show that   where   is a solution of the system\n     \n   \n    We'll check that   is a solution of the matrix ODE just as we check solutions for normal ODEs: plug the potential solution into the ODE and check both sides.\n    If we do so, we get\n     \n    and\n     \n    Since these expressions match, this means that   is a solution of the ODE.\n   "
},
{
  "id": "definition-linear-independence-of-vectors",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-linear-independence-of-vectors",
  "type": "Definition",
  "number": "4.1.12",
  "title": "Linear Independence of Vectors.",
  "body": "linear independence vectors Linear Independence of Vectors linearly independent linearly dependent "
},
{
  "id": "definition-wronskian-of-vectors",
  "level": "2",
  "url": "section-systems-of-odes-as-models.html#definition-wronskian-of-vectors",
  "type": "Definition",
  "number": "4.1.13",
  "title": "",
  "body": "Wronskian vectors Wronskian "
},
{
  "id": "section-constant-coefficient-systems-and-the-phase-plane",
  "level": "1",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html",
  "type": "Section",
  "number": "4.2",
  "title": "Constant Coefficient Systems and the Phase Plane",
  "body": "Constant Coefficient Systems and the Phase Plane \n        This section corresponds to Section 4.3 of the text.\n       Solutions of  Solutions of Systems \n          Let   be an   constant matrix, and suppose that   has   linearly independent eigenvectors   with corresponding eigenvalues  .\n          Then the general solution of   is given by\n           \n         \n          Find the general solution of the system\n           \n          given that\n           \n          are eigenvectors of the matrix\n           \n          with corresponding eigenvalues  .\n         \n          First, note that the system we need to solve is equivalent to the matrix ODE  .\n          If we can show that   are linearly independent, then we can use   to find the general solution of the system.\n          So we'll compute their Wronskian:\n           \n         \n          Since the Wronskian is nonzero, these eigenvectors are linearly independent.\n          Therefore the general solution of the system is given by\n           \n          or just\n           \n         Finding Eigenvalues and Eigenvectors \n        shows that solving systems of first-order ODEs comes down to finding eigenvalues and eigenvectors of the corresponding matrix ODE.\n      So it's important for us to know how to find these.\n     \n      Let   be an   matrix and suppose that   is an eigenvector with corresponding eigenvalue  .\n      Then\n       \n      We can rearrange this to get\n       \n      where   is the identity matrix.\n      Since   (since it's an eigenvector!), linear algebra tells us that  .\n      This gives us the following theorem.\n     \n          The eigenvalues of a square matrix   are the solutions of the equation  .\n         characteristic equation \n          Find the eigenvalues of the matrix  .\n         \n          First, we need to set up the characteristic equation of  .\n          Since\n           \n          we get\n           \n          so the characteristic equation of   is\n           \n          which has solutions  .\n          So the eigenvalues of   are  .\n         \n      A useful fact to remember is that the eigenvalues of a ``triangular'' matrix are just the diagonal entries.\n     \n          Let\n           \n          Find the eigenvalues of  .\n         \n            is a triangular matrix since everything below the main diagonal is  .\n          So the eigenvalues of   are  .\n         \n          Find eigenvectors of   corresponding to the eigenvalues   and  .\n         \n          Suppose that   is an eigenvector corresponding to  .\n          Then we know that\n           \n          This tells us that if   is an eigenvector for  , then its entries need to satisfy\n           \n          which boils down to\n           \n         \n          Now set   to get the system\n           \n          and so  .\n          We don't really care about what the entries of   look like so long as   is an eigenvector, so we can pick   however we want, just so long as they satisfy this relation (and are not both  !).\n          So pick  , which forces  .\n          Then\n           \n          is an eigenvector of   corresponding to the eigenvalue  .\n         \n          To find an eigenvector for   we just set   and run through the same process:\n           \n          The second equation simplifies to  , so one eigenvector for   is\n           \n         Solving Matrix ODEs \n      We now have the tools we need to begin solving matrix ODEs.\n      Recall that if   is an   matrix with constant entries, and if   are   linearly independent solutions of the matrix ODE  , then the general solution of the matrix ODE is\n       \n      Furthermore, if   is an eigenvalue of   with eigenvector  , then   is a solution of  .\n      So solving the matrix ODE   requires finding enough eigenvectors and eigenvalues.\n      A useful theorem is the following:\n     \n          Let   be an   matrix with constant entries.\n          If the eigenvalues   of   are distinct (that is, none are repeated) then eigenvectors associated with different eigenvalues are linearly independent.\n          That is, if   is an eigenvector corresponding to   then the eigenvectors   are linearly independent.\n         \n          Solve the matrix ODE given by   where\n           \n         \n          We already have everything we need.\n          We know that the eigenvalues of   are   and   and some corresponding eigenvectors are\n           \n          Since the eigenvalues are distinct it follows that these eigenvectors are linearly independent (we could also check this using the Wronskian).\n          We can therefore build two linearly independent solutions to the matrix ODE:\n           \n          So the general solution of the matrix ODE is\n           \n          Note that the choice of eigenvector  doesn't matter .\n          Just so long as we find some particular eigenvector for each distinct eigenvalue.\n         \n          Solve the first-order system given by\n           \n          where   and   are functions of  .\n         \n          First, note that this system is equivalent to the matrix ODE   where\n           \n          To solve this system we need to find the eigenvalues and eigenvectors of  , and then use these to build our general solution.\n           \n               Find the eigenvalues. \n               \n                We find the eigenvalues of   by solving the characteristic equation   for  .\n                Since  , we see that the eigenvalues of   are   and  .\n                The fact that these eigenvalues are complex is  not  a problem. They're still distinct, so our method will work.\n               \n             \n               Find corresponding eigenvectors. \n               \n                Set  .\n                Then   implies that\n                 \n                or just\n                 \n                Setting   in the second equation gives  , so an eigenvector of   corresponding to   is\n                 \n                Similarly, an eigenvector corresponding to   is\n                 \n               \n              Find the general solution. \n             \n              At this step it is easy to construct the solution of the matrix ODE.\n              It's just\n               \n             \n           \n       \n        Solve the first-order system\n         \n       \n        As long as this system has distinct eigenvalues the above method will work.\n        Once again we rewrite the system as a matrix ODE; in this case, the matrix ODE we must solve is\n         \n       \n        To find the eigenvalues we must solve the characteristic equation  .\n        However, we can also use Sage (see code cell after this example).\n        This produces a list containing the eigenvalues of   as well as the corresponding eigenvectors.\n        So we see that the eigenvalues are given by\n         \n        while the corresponding eigenvectors are given by\n         \n       \n        We now have everything we need for the general solution of the matrix ODE.\n        It's just\n         \n       Applications of Matrix ODEs \n    Now we use matrix ODEs to model physical systems.\n    The methods we've developed for solving matrix ODEs will then let us come up with descriptions for such systems.\n    Recall that we introduced systems of ODEs (and then matrix ODEs) to model quantities that depended on time (an independent variable) and each other (dependent variables).\n    The physical systems we will consider will be ones where the quantities of interest depend on each other in some way.\n   \n        Two brine tanks are set up as in  .\n        Fresh water flows into the tank at a rate of  , well-mixed solution flows from Tank 1 to Tank 2 at a rate of   and well-mixed solution flows out of Tank 2 at a rate of  .\n        Suppose that   and    are  5 , the volume of solution in Tank 1 is  10  and the volume of solution in Tank 2 is  7 .\n        Suppose Tank 1 has  5  of salt at time   and Tank 2 has  2  of salt at time  .\n        How much salt is in each tank at time  ?\n       \n        To start, let   denote the amount of salt in Tank 1 at time   and   denote the amount of salt in Tank 2 at time  , where   is in minutes.\n        Then from Section 4.1, we know that\n         \n        If we set\n         \n        then this system is equivalent to the matrix ODE  .\n        To solve this, we find the eigenvalues and corresponding eigenvectors.\n        To find the eigenvalues, we could solve the characteristic equation   or use Maple, but it's easier to note that   is a triangular matrix.\n        So the eigenvalues are just  .\n       \n        Now we find eigenvectors.\n        So let\n         \n        If   is an eigenvector for  , then we know  , which gives the system\n         \n        If we set  , then we just get  .\n        So an eigenvector corresponding to   is\n         \n       \n        Similarly, if we set   we get  , but no restrictions on  .\n        So an eigenvector corresponding to   is\n         \n       \n        The general solution of our matrix ODE is then\n         \n       \n        But we're not done yet, since we have the initial conditions   and  , or in terms of our matrix ODE\n         \n        We can use this to find   and  .\n        If we set  , then we get\n         \n        so   and  .\n       \n        So the solution of the matrix ODE (and hence the original system) is\n         \n        The amount of salt in the first tank,  , is given by the top entry and the amount of salt in the second tank,  , is given by the bottom entry.\n       The Phase Plane \n    Just as we were able to plot direction fields for first-order ODEs, we can do something similar for first-order systems with two equations.\n    Consider the first-order system\n     \n    or\n     \n   trajectory phase plane phase portrait \n        Sketch a phase portrait for the system\n         \n       \n        First, note that we can rewrite the system as   using\n         \n        Now, we can view   as corresponding to a point in the phase plane.\n        Hence   corresponds to a \\emph{tangent} at the point  .\n        For example, let's find the tangent at the point  :\n         \n       \n        So at the point   in the phase plane, the trajectory should be heading in the direction of the point   from the origin.\n        Similarly, if we let   then we get\n         \n        So the trajectory going through   in the phase plane should be heading in the direction of   viewed from the origin.\n       \n        Plotting other points in the phase plane like this, we get  .\n        One thing we can see from this is that trajectories that lie on the line, equivalently, those with initial conditions  , appear to approach the origin while all others move away from the origin.\n        We can see why this is by looking at the general solution of the original system, which is\n         \n       \n        If   lies on the line  , then   has to equal  , which follows from the fact that   and   are linearly independent.\n        So trajectories that lie on the line   must take the form  , and every solution of this form goes to   as  .\n         Every other trajectory  will move away from the origin as  , although the trajectories that lie on the line   will travel to the origin as   (i.e. ``backwards in time''):\n       The phase portrait from  . \n    Vector fields can also be plotted easily using SageMath.\n    The code cell below demonstrates the use of the  plot_vector_field  command to sketch the phase portrait from  .\n   equilibrium solution critical point \n    We will classify the behavior of trajectories at the critical point   into five different cases: Classification Behavior at  Improper node Every trajectory except two has the same limiting tangent at  Proper node For every direction   there exists trajectory with limiting tangent  Saddle point Two incoming trajectories, two outgoing trajectories; all others bypass  Center  is enclosed by infinitely many closed (repeating) trajectories Spiral point Trajectories spiral inwards or outwards from  \n        was a saddle point in   since there were incoming trajectories on the line   and outgoing trajectories on the line  .\n     \n          Using a phase portrait, determine the type of critical point that   is for the matrix ODE   where\n           \n         \n          As seen in  , every (nonzero) trajectory will spiral outward from   as  , so   is a spiral point of this system.\n          To see why, we only need to look at the eigenvalues of  , which we find to be\n           \n          This means that the general solution of   must look like\n           .\n         \n          The real part of the eigenvalues leads to the ``growth term'' of   appearing in the solution, which causes the trajectories to diverge as  .\n          The imaginary part of the eigenvalues leads to the ``oscillating terms'' of   appearing in the solution, which gives the trajectories their spiral motion.\n         The phase portrait for  . \n      In general, the eigenvalues of the matrix   in the system   will determine the type of critical point that   is for the system  .\n     \n          What kind of critical point is   for the system\n           \n          where  ?\n         \n          We could sketch the phase portrait for this system, but we can also determine the behavior of the trajectories   if we can find a relationship between   and  .\n          To do so, we  cross-multiply  the system to get\n           \n          So we can integrate this to get\n           \n         \n          This is the equation of a circle of radius  , and so every trajectory   for this system will be a circle centered at  .\n          Hence   is a center.\n         "
},
{
  "id": "theorem-solutions-of-systems",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#theorem-solutions-of-systems",
  "type": "Theorem",
  "number": "4.2.1",
  "title": "Solutions of Systems.",
  "body": "Solutions of Systems \n          Let   be an   constant matrix, and suppose that   has   linearly independent eigenvectors   with corresponding eigenvalues  .\n          Then the general solution of   is given by\n           \n         "
},
{
  "id": "example-54",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-54",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "\n          Find the general solution of the system\n           \n          given that\n           \n          are eigenvectors of the matrix\n           \n          with corresponding eigenvalues  .\n         \n          First, note that the system we need to solve is equivalent to the matrix ODE  .\n          If we can show that   are linearly independent, then we can use   to find the general solution of the system.\n          So we'll compute their Wronskian:\n           \n         \n          Since the Wronskian is nonzero, these eigenvectors are linearly independent.\n          Therefore the general solution of the system is given by\n           \n          or just\n           \n         "
},
{
  "id": "theorem-theorem-eigenvalues-from-characteristic-equation",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#theorem-theorem-eigenvalues-from-characteristic-equation",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": "\n          The eigenvalues of a square matrix   are the solutions of the equation  .\n         "
},
{
  "id": "definition-characteristic-equation",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#definition-characteristic-equation",
  "type": "Definition",
  "number": "4.2.4",
  "title": "",
  "body": "characteristic equation "
},
{
  "id": "example-55",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-55",
  "type": "Example",
  "number": "4.2.5",
  "title": "",
  "body": "\n          Find the eigenvalues of the matrix  .\n         \n          First, we need to set up the characteristic equation of  .\n          Since\n           \n          we get\n           \n          so the characteristic equation of   is\n           \n          which has solutions  .\n          So the eigenvalues of   are  .\n         "
},
{
  "id": "example-56",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-56",
  "type": "Example",
  "number": "4.2.6",
  "title": "",
  "body": "\n          Let\n           \n          Find the eigenvalues of  .\n         \n            is a triangular matrix since everything below the main diagonal is  .\n          So the eigenvalues of   are  .\n         "
},
{
  "id": "example-57",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-57",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "\n          Find eigenvectors of   corresponding to the eigenvalues   and  .\n         \n          Suppose that   is an eigenvector corresponding to  .\n          Then we know that\n           \n          This tells us that if   is an eigenvector for  , then its entries need to satisfy\n           \n          which boils down to\n           \n         \n          Now set   to get the system\n           \n          and so  .\n          We don't really care about what the entries of   look like so long as   is an eigenvector, so we can pick   however we want, just so long as they satisfy this relation (and are not both  !).\n          So pick  , which forces  .\n          Then\n           \n          is an eigenvector of   corresponding to the eigenvalue  .\n         \n          To find an eigenvector for   we just set   and run through the same process:\n           \n          The second equation simplifies to  , so one eigenvector for   is\n           \n         "
},
{
  "id": "theorem-linear-independence-distinct-eigenvalues",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#theorem-linear-independence-distinct-eigenvalues",
  "type": "Theorem",
  "number": "4.2.8",
  "title": "",
  "body": "\n          Let   be an   matrix with constant entries.\n          If the eigenvalues   of   are distinct (that is, none are repeated) then eigenvectors associated with different eigenvalues are linearly independent.\n          That is, if   is an eigenvector corresponding to   then the eigenvectors   are linearly independent.\n         "
},
{
  "id": "example-58",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-58",
  "type": "Example",
  "number": "4.2.9",
  "title": "",
  "body": "\n          Solve the matrix ODE given by   where\n           \n         \n          We already have everything we need.\n          We know that the eigenvalues of   are   and   and some corresponding eigenvectors are\n           \n          Since the eigenvalues are distinct it follows that these eigenvectors are linearly independent (we could also check this using the Wronskian).\n          We can therefore build two linearly independent solutions to the matrix ODE:\n           \n          So the general solution of the matrix ODE is\n           \n          Note that the choice of eigenvector  doesn't matter .\n          Just so long as we find some particular eigenvector for each distinct eigenvalue.\n         "
},
{
  "id": "example-59",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-59",
  "type": "Example",
  "number": "4.2.10",
  "title": "",
  "body": "\n          Solve the first-order system given by\n           \n          where   and   are functions of  .\n         \n          First, note that this system is equivalent to the matrix ODE   where\n           \n          To solve this system we need to find the eigenvalues and eigenvectors of  , and then use these to build our general solution.\n           \n               Find the eigenvalues. \n               \n                We find the eigenvalues of   by solving the characteristic equation   for  .\n                Since  , we see that the eigenvalues of   are   and  .\n                The fact that these eigenvalues are complex is  not  a problem. They're still distinct, so our method will work.\n               \n             \n               Find corresponding eigenvectors. \n               \n                Set  .\n                Then   implies that\n                 \n                or just\n                 \n                Setting   in the second equation gives  , so an eigenvector of   corresponding to   is\n                 \n                Similarly, an eigenvector corresponding to   is\n                 \n               \n              Find the general solution. \n             \n              At this step it is easy to construct the solution of the matrix ODE.\n              It's just\n               \n             \n           \n       "
},
{
  "id": "example-60",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-60",
  "type": "Example",
  "number": "4.2.11",
  "title": "",
  "body": "\n        Solve the first-order system\n         \n       \n        As long as this system has distinct eigenvalues the above method will work.\n        Once again we rewrite the system as a matrix ODE; in this case, the matrix ODE we must solve is\n         \n       \n        To find the eigenvalues we must solve the characteristic equation  .\n        However, we can also use Sage (see code cell after this example).\n        This produces a list containing the eigenvalues of   as well as the corresponding eigenvectors.\n        So we see that the eigenvalues are given by\n         \n        while the corresponding eigenvectors are given by\n         \n       \n        We now have everything we need for the general solution of the matrix ODE.\n        It's just\n         \n       "
},
{
  "id": "example-61",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-61",
  "type": "Example",
  "number": "4.2.12",
  "title": "",
  "body": "\n        Two brine tanks are set up as in  .\n        Fresh water flows into the tank at a rate of  , well-mixed solution flows from Tank 1 to Tank 2 at a rate of   and well-mixed solution flows out of Tank 2 at a rate of  .\n        Suppose that   and    are  5 , the volume of solution in Tank 1 is  10  and the volume of solution in Tank 2 is  7 .\n        Suppose Tank 1 has  5  of salt at time   and Tank 2 has  2  of salt at time  .\n        How much salt is in each tank at time  ?\n       \n        To start, let   denote the amount of salt in Tank 1 at time   and   denote the amount of salt in Tank 2 at time  , where   is in minutes.\n        Then from Section 4.1, we know that\n         \n        If we set\n         \n        then this system is equivalent to the matrix ODE  .\n        To solve this, we find the eigenvalues and corresponding eigenvectors.\n        To find the eigenvalues, we could solve the characteristic equation   or use Maple, but it's easier to note that   is a triangular matrix.\n        So the eigenvalues are just  .\n       \n        Now we find eigenvectors.\n        So let\n         \n        If   is an eigenvector for  , then we know  , which gives the system\n         \n        If we set  , then we just get  .\n        So an eigenvector corresponding to   is\n         \n       \n        Similarly, if we set   we get  , but no restrictions on  .\n        So an eigenvector corresponding to   is\n         \n       \n        The general solution of our matrix ODE is then\n         \n       \n        But we're not done yet, since we have the initial conditions   and  , or in terms of our matrix ODE\n         \n        We can use this to find   and  .\n        If we set  , then we get\n         \n        so   and  .\n       \n        So the solution of the matrix ODE (and hence the original system) is\n         \n        The amount of salt in the first tank,  , is given by the top entry and the amount of salt in the second tank,  , is given by the bottom entry.\n       "
},
{
  "id": "p-372",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#p-372",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trajectory phase plane phase portrait "
},
{
  "id": "example-sketch-phase-portrait",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-sketch-phase-portrait",
  "type": "Example",
  "number": "4.2.13",
  "title": "",
  "body": "\n        Sketch a phase portrait for the system\n         \n       \n        First, note that we can rewrite the system as   using\n         \n        Now, we can view   as corresponding to a point in the phase plane.\n        Hence   corresponds to a \\emph{tangent} at the point  .\n        For example, let's find the tangent at the point  :\n         \n       \n        So at the point   in the phase plane, the trajectory should be heading in the direction of the point   from the origin.\n        Similarly, if we let   then we get\n         \n        So the trajectory going through   in the phase plane should be heading in the direction of   viewed from the origin.\n       \n        Plotting other points in the phase plane like this, we get  .\n        One thing we can see from this is that trajectories that lie on the line, equivalently, those with initial conditions  , appear to approach the origin while all others move away from the origin.\n        We can see why this is by looking at the general solution of the original system, which is\n         \n       \n        If   lies on the line  , then   has to equal  , which follows from the fact that   and   are linearly independent.\n        So trajectories that lie on the line   must take the form  , and every solution of this form goes to   as  .\n         Every other trajectory  will move away from the origin as  , although the trajectories that lie on the line   will travel to the origin as   (i.e. ``backwards in time''):\n       "
},
{
  "id": "figure-sketch-phase-portrait",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#figure-sketch-phase-portrait",
  "type": "Figure",
  "number": "4.2.14",
  "title": "",
  "body": "The phase portrait from  . "
},
{
  "id": "p-379",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#p-379",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium solution critical point "
},
{
  "id": "table-9",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#table-9",
  "type": "Table",
  "number": "4.2.15",
  "title": "",
  "body": "Classification Behavior at  Improper node Every trajectory except two has the same limiting tangent at  Proper node For every direction   there exists trajectory with limiting tangent  Saddle point Two incoming trajectories, two outgoing trajectories; all others bypass  Center  is enclosed by infinitely many closed (repeating) trajectories Spiral point Trajectories spiral inwards or outwards from  "
},
{
  "id": "example-stability-equilibrium-solution",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-stability-equilibrium-solution",
  "type": "Example",
  "number": "4.2.16",
  "title": "",
  "body": "\n          Using a phase portrait, determine the type of critical point that   is for the matrix ODE   where\n           \n         \n          As seen in  , every (nonzero) trajectory will spiral outward from   as  , so   is a spiral point of this system.\n          To see why, we only need to look at the eigenvalues of  , which we find to be\n           \n          This means that the general solution of   must look like\n           .\n         \n          The real part of the eigenvalues leads to the ``growth term'' of   appearing in the solution, which causes the trajectories to diverge as  .\n          The imaginary part of the eigenvalues leads to the ``oscillating terms'' of   appearing in the solution, which gives the trajectories their spiral motion.\n         "
},
{
  "id": "figure-classify-stability-using-phase-portrait",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#figure-classify-stability-using-phase-portrait",
  "type": "Figure",
  "number": "4.2.17",
  "title": "",
  "body": "The phase portrait for  . "
},
{
  "id": "example-64",
  "level": "2",
  "url": "section-constant-coefficient-systems-and-the-phase-plane.html#example-64",
  "type": "Example",
  "number": "4.2.18",
  "title": "",
  "body": "\n          What kind of critical point is   for the system\n           \n          where  ?\n         \n          We could sketch the phase portrait for this system, but we can also determine the behavior of the trajectories   if we can find a relationship between   and  .\n          To do so, we  cross-multiply  the system to get\n           \n          So we can integrate this to get\n           \n         \n          This is the equation of a circle of radius  , and so every trajectory   for this system will be a circle centered at  .\n          Hence   is a center.\n         "
},
{
  "id": "section-criteria-for-critical-points-stability",
  "level": "1",
  "url": "section-criteria-for-critical-points-stability.html",
  "type": "Section",
  "number": "4.3",
  "title": "Criteria for Critical Points; Stability",
  "body": "Criteria for Critical Points; Stability \n    Consider the matrix ODE  .\n    Let   denote the eigenvalues of the   matrix  .\n    Then   is a:\n   Name Conditions on  Node Real, same sign Saddle point Real, opposite sign Center Pure imaginary Spiral point Complex, not pure imaginary Eigenvalue conditions for stability. \n    The rule of thumb is this: the real parts of the eigenvalues determine whether a trajectory moves towards or away from the origin, and the imaginary part determines if the trajectory has a periodic\/oscillating nature to it.\n   stable unstable stable and attractive asymptotically stable \n        Let   denote a matrix ODE where   is a constant   matrix.\n        What conditions on the eigenvalues of   will give an asymptotically stable critical point at  ?\n       \n        Let   denote a nonzero solution of the matrix ODE (and therefore a trajectory).\n        Then in order for   to be asymptotically stable, we need   as  .\n        Let   denote the eigenvalues of  .\n        Then   will have the form\n         \n       \n        This will go to   as   if either   or if each exponential goes to   as  .\n        Since we assume  , this means we need   for   as  .\n        This means that the  real part  of each eigenvalue must be negative.\n        This is because the real part of each eigenvalue determines the growth of  : if  , then\n         .\n        So   is asymptotically stable if the real parts of  both  eigenvalues are negative.\n       \n    Similarly, we can say that   is stable as long as the real part of each eigenvalue is no greater than  .\n      is unstable if the real part of \\emph{any} eigenvalue is positive.\n   \n        Two tanks   and   containing\n         200 \n        each of a water-salt mixture are set up as follows:\n       \n           \n            Tank 1: Pure water flows in at\n             12 \n            and solution from Tank 2 flows in at\n             4 ;\n            solution also flows out of Tank 1 and into Tank 2 at\n             16 .\n           \n         \n            Solution from Tank 1 flows in at\n             16 ;\n            solution flows out of Tank 2 and into Tank 1 at\n             4 ,\n            and solution is emptied from Tank 2 at an addition rate of\n             12 \n           \n         \n        Will the salt eventually empty from both tanks?\n       \n        Let   denote the amount of salt (in pounds) in Tank 1 at time   (in minutes), and let   do the same for Tank 2.\n        Then\n         .\n       \n        This is equivalent to the matrix ODE   where\n         \n       \n        The eigenvalues of   are\n         \n        Since both eigenvalues have negative real part, it follows that   is an asymptotically stable critical point of  .\n        Therefore  every  trajectory   as  .\n        So no matter how much salt is initially in the tanks, the amount of salt will always go to  .\n       "
},
{
  "id": "table-eigenvalue-conditions-stability",
  "level": "2",
  "url": "section-criteria-for-critical-points-stability.html#table-eigenvalue-conditions-stability",
  "type": "Table",
  "number": "4.3.1",
  "title": "Eigenvalue conditions for stability.",
  "body": "Name Conditions on  Node Real, same sign Saddle point Real, opposite sign Center Pure imaginary Spiral point Complex, not pure imaginary Eigenvalue conditions for stability. "
},
{
  "id": "p-391",
  "level": "2",
  "url": "section-criteria-for-critical-points-stability.html#p-391",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stable unstable stable and attractive asymptotically stable "
},
{
  "id": "example-65",
  "level": "2",
  "url": "section-criteria-for-critical-points-stability.html#example-65",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "\n        Let   denote a matrix ODE where   is a constant   matrix.\n        What conditions on the eigenvalues of   will give an asymptotically stable critical point at  ?\n       \n        Let   denote a nonzero solution of the matrix ODE (and therefore a trajectory).\n        Then in order for   to be asymptotically stable, we need   as  .\n        Let   denote the eigenvalues of  .\n        Then   will have the form\n         \n       \n        This will go to   as   if either   or if each exponential goes to   as  .\n        Since we assume  , this means we need   for   as  .\n        This means that the  real part  of each eigenvalue must be negative.\n        This is because the real part of each eigenvalue determines the growth of  : if  , then\n         .\n        So   is asymptotically stable if the real parts of  both  eigenvalues are negative.\n       "
},
{
  "id": "example-66",
  "level": "2",
  "url": "section-criteria-for-critical-points-stability.html#example-66",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "\n        Two tanks   and   containing\n         200 \n        each of a water-salt mixture are set up as follows:\n       \n           \n            Tank 1: Pure water flows in at\n             12 \n            and solution from Tank 2 flows in at\n             4 ;\n            solution also flows out of Tank 1 and into Tank 2 at\n             16 .\n           \n         \n            Solution from Tank 1 flows in at\n             16 ;\n            solution flows out of Tank 2 and into Tank 1 at\n             4 ,\n            and solution is emptied from Tank 2 at an addition rate of\n             12 \n           \n         \n        Will the salt eventually empty from both tanks?\n       \n        Let   denote the amount of salt (in pounds) in Tank 1 at time   (in minutes), and let   do the same for Tank 2.\n        Then\n         .\n       \n        This is equivalent to the matrix ODE   where\n         \n       \n        The eigenvalues of   are\n         \n        Since both eigenvalues have negative real part, it follows that   is an asymptotically stable critical point of  .\n        Therefore  every  trajectory   as  .\n        So no matter how much salt is initially in the tanks, the amount of salt will always go to  .\n       "
},
{
  "id": "section-nonlinear-systems",
  "level": "1",
  "url": "section-nonlinear-systems.html",
  "type": "Section",
  "number": "4.4",
  "title": "Nonlinear Systems",
  "body": "Nonlinear Systems nonlinear autonomous systems \n      We can also write such a system as a vector equation:\n       .\n      although not as a matrix ODE (if   are nonlinear).\n     phase plane trajectories phase portrait critical point \n          Express the  pendulum equation   , where   represents the angular displacement of a pendulum from the vertical, as a nonlinear system   and then find its critical points.\n         \n          First, we have to rewrite the pendulum ODE as a first order system.\n          We can do this without too much trouble as follows: set\n           .\n          Then the ODE   turns into the system\n           ,\n          which we can also write as   using\n           \n         \n          Now we need to find the critical points   in the  -plane that make  .\n          So we need   and   for  .\n          So the critical points of this system are all points of the form  .\n         Classification of Critical Points and Linearization \n      Critical points of systems are important because they can represent long-term behavior of a system.\n      For example, if we have a first-order system representing the population of two species, and it turns out the the origin is asymptotically stable, then this suggests that both species could be driven to extinction.\n      So we want to classify critical points for nonlinear systems in addition to what we have already for linear systems; unfortunately, nonlinear systems are often difficult, if not outright impossible, to solve exactly.\n     linearization The Jacobian of a Nonlinear System Jacobian \n      The linearization of   at the point   is the linear system  , where\n       \n     \n          Find the linearization of the pendulum system   at the critical point  .\n         \n          For this system, we have   and  .\n          The Jacobian is then given by\n           \n          So to get the linearization we need to set\n           \n         \n      The linearization of a nonlinear system isn't just useful for approximating the nonlinear system.\n      It's also incredibly useful for classifying the critical points of a nonlinear system; for the most part, the eigenvalues of the matrix   from the linearization also classify the critical points of the system  .\n     \n          Find and classify the critical points of the nonlinear system\n           .\n         \n            This example taken from  here. \n           \n          The critical points occur at  .\n          If we set   and solve the resulting equation, we get   or  .\n          If  , then  , and for this to be   we must have  .\n          We can verify that   makes   as well, so the origin is a critical point.\n          Similarly,   forces  , and we can verify that   at   and  .\n          So we have three critical points to check.\n         \n          To determine the behavior of solutions at these critical points, we'll find the Jacobian at each point.\n          First, we have\n           .\n          At  , we get\n           .\n          The eigenvalues are   and  , meaning that this critical point is a saddle point.\n          At   we get\n           \n          which has eigenvalues  .\n          Hence   should be a spiral point.\n          Finally, at   we get\n           ,\n          which has eigenvalues  .\n          Hence   is an asymptotically stable node.\n         \n      We can also use nonlinear systems to get more accurate population models.\n     \n          Predator-prey populations can be modeled using the Lotka-Volterra model.\n          Let   denote the population of a prey species at time   and let   denote the population of a predator species at time  .\n          Then the Lotka-Volterra model says that\n           ,\n          where  .\n          Find and classify the critical points of this system.\n         \n          The critical points are the points   that satisfy the equations\n           \n          Equivalently, we need\n           \n          This has solutions   and  .\n          So the critical points are   and  .\n         \n          To classify these critical points we need to linearize the system, so we'll compute the Jacobian of\n           \n          to get\n           \n         \n          At  , we get\n           ,\n          which has eigenvalues  .\n          So the origin is an saddle point of the original system.\n          In particular, there exist trajectories heading into the origin, so it's possible for both species to go extinct in this case.\n         \n          Now we'll classify the second critical point  .\n          The Jacobian at this point gives us the matrix\n           .\n          This matrix has characteristic equation  , and so has eigenvalues  .\n          Since the eigenvalues are pure imaginary, this suggests that   is a center, which is indeed the case.\n          In particular, trajectories near this critical point  must be periodic .\n         "
},
{
  "id": "p-403",
  "level": "2",
  "url": "section-nonlinear-systems.html#p-403",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonlinear autonomous systems "
},
{
  "id": "p-406",
  "level": "2",
  "url": "section-nonlinear-systems.html#p-406",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "phase plane trajectories phase portrait critical point "
},
{
  "id": "example-67",
  "level": "2",
  "url": "section-nonlinear-systems.html#example-67",
  "type": "Example",
  "number": "4.4.1",
  "title": "",
  "body": "\n          Express the  pendulum equation   , where   represents the angular displacement of a pendulum from the vertical, as a nonlinear system   and then find its critical points.\n         \n          First, we have to rewrite the pendulum ODE as a first order system.\n          We can do this without too much trouble as follows: set\n           .\n          Then the ODE   turns into the system\n           ,\n          which we can also write as   using\n           \n         \n          Now we need to find the critical points   in the  -plane that make  .\n          So we need   and   for  .\n          So the critical points of this system are all points of the form  .\n         "
},
{
  "id": "p-411",
  "level": "2",
  "url": "section-nonlinear-systems.html#p-411",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearization "
},
{
  "id": "definition-the-jacobian-of-a-nonlinear-system",
  "level": "2",
  "url": "section-nonlinear-systems.html#definition-the-jacobian-of-a-nonlinear-system",
  "type": "Definition",
  "number": "4.4.2",
  "title": "The Jacobian of a Nonlinear System.",
  "body": "The Jacobian of a Nonlinear System Jacobian "
},
{
  "id": "example-68",
  "level": "2",
  "url": "section-nonlinear-systems.html#example-68",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "\n          Find the linearization of the pendulum system   at the critical point  .\n         \n          For this system, we have   and  .\n          The Jacobian is then given by\n           \n          So to get the linearization we need to set\n           \n         "
},
{
  "id": "example-69",
  "level": "2",
  "url": "section-nonlinear-systems.html#example-69",
  "type": "Example",
  "number": "4.4.4",
  "title": "",
  "body": "\n          Find and classify the critical points of the nonlinear system\n           .\n         \n            This example taken from  here. \n           \n          The critical points occur at  .\n          If we set   and solve the resulting equation, we get   or  .\n          If  , then  , and for this to be   we must have  .\n          We can verify that   makes   as well, so the origin is a critical point.\n          Similarly,   forces  , and we can verify that   at   and  .\n          So we have three critical points to check.\n         \n          To determine the behavior of solutions at these critical points, we'll find the Jacobian at each point.\n          First, we have\n           .\n          At  , we get\n           .\n          The eigenvalues are   and  , meaning that this critical point is a saddle point.\n          At   we get\n           \n          which has eigenvalues  .\n          Hence   should be a spiral point.\n          Finally, at   we get\n           ,\n          which has eigenvalues  .\n          Hence   is an asymptotically stable node.\n         "
},
{
  "id": "example-70",
  "level": "2",
  "url": "section-nonlinear-systems.html#example-70",
  "type": "Example",
  "number": "4.4.5",
  "title": "",
  "body": "\n          Predator-prey populations can be modeled using the Lotka-Volterra model.\n          Let   denote the population of a prey species at time   and let   denote the population of a predator species at time  .\n          Then the Lotka-Volterra model says that\n           ,\n          where  .\n          Find and classify the critical points of this system.\n         \n          The critical points are the points   that satisfy the equations\n           \n          Equivalently, we need\n           \n          This has solutions   and  .\n          So the critical points are   and  .\n         \n          To classify these critical points we need to linearize the system, so we'll compute the Jacobian of\n           \n          to get\n           \n         \n          At  , we get\n           ,\n          which has eigenvalues  .\n          So the origin is an saddle point of the original system.\n          In particular, there exist trajectories heading into the origin, so it's possible for both species to go extinct in this case.\n         \n          Now we'll classify the second critical point  .\n          The Jacobian at this point gives us the matrix\n           .\n          This matrix has characteristic equation  , and so has eigenvalues  .\n          Since the eigenvalues are pure imaginary, this suggests that   is a center, which is indeed the case.\n          In particular, trajectories near this critical point  must be periodic .\n         "
},
{
  "id": "section-power-series-method",
  "level": "1",
  "url": "section-power-series-method.html",
  "type": "Section",
  "number": "5.1",
  "title": "Power Series Method",
  "body": "Power Series Method \n      In calculus, it's important to know how to differentiate and integrate functions.\n      For some functions (say,  ) it can be very straightforward, but for others (such as  ) it can be impossible.\n       \n          At least, it can be impossible to integrate certain functions in terms of more ``everyday'' functions that we're used to.\n         \n     \n      So we'd like to see if there's a way to write complicated functions   in terms of simpler functions  .\n      To see how, let   be a function.\n      Our goal is to write it in the form\n       \n      where the   are constants.\n     Power Series power series converge \n      A power series doesn't have to start at  , but  it may not contain any negative powers of  .\n     \n      The question now is, how do we find the right values of the coefficients   to make   true?\n      If we look at the equation, we can solve for   very easily: just set   to make all other terms disappear:\n       \n      To solve for   by plugging in  , we need to get rid of the power of   attached to it.\n      We can do this by taking the derivative of  :\n       .\n      The same trick works for  :\n       \n      so  .\n      Let's try this one more time to get  :\n       \n      and so  .\n     \n      In general, to get the coefficient   of   in the power series of  , we have the following equation:\n     \n          Find a power series for  .\n         \n          Any power series for   looks like  , where\n           \n          Since   is its own derivative,   for all choices of  .\n          So\n           \n          and the power series for   is\n           \n          It turns out the   equals its power series for  all  values of  .\n         centered at  \n          Find the power series for   centered at  .\n         \n          A power series centered at   will look like\n           \n          where\n           \n          To find these values, we need to compute the derivatives of   and evaluate them at  :\n           .\n          So the power series centered at   is\n           \n          Just as with  ,   is equal to its power series everywhere.\n         \n      More functions in terms of power series:\n       \n      Viewing a function as a power series can be extremely beneficial; if you have a power series expression for some function, it is extremely easy to do calculus with it.\n     \n          Find  .\n         error function \n      The following theorem can be used to determine when a power series converges (that is, when the series makes sense).\n     \n          Given the power series  , define the number   by the limit\n           \n          Suppose the limit exists or is infinite. Then   is the radius of converengence of the series: if   then the series converges for   and diverges for  . If   then the series converges only at  .\n         \n      Our main use of power series will be in solving differential equations.\n     \n          Solve the ODE given by\n           \n         \n          We could easily solve this using Chapter 1 methods, but we'll use power series to practice.\n          To start, we assume that the solution   can be written as a power series:\n           \n          The next step is to plug this into the ODE.\n          Since\n           \n          we get the equation\n           .\n         \n          We need to find the values of the coefficients  ; we do this by equating coefficients on both sides of the equation.\n          We want to write both series in terms of   so that we can do this, so we need to shift the summation on the left: we replace   with   inside the sum and decrease the limit of summation   to   to get\n           .\n          Now we can equate coefficients: for  , we have\n           \n         recurrence relation \n      To solve the above ODE we used the following steps:\n       \n           Write  . \n         \n           Use the ODE to build a recurrence relation for the coefficients  . \n         \n           Find an explicit description of the coefficients. \n         \n           Identify   as the power series of some function. \n         \n     \n          Use power series to solve the ODE  .\n         \n          We will solve this using the steps listed above.\n          First, assume  .\n          Now plug this guess for   into the ODE to get\n           \n          We want to equate coefficients to build a recurrence relation, so we need to rewrite these sums in terms of a single  , as opposed to   and  .\n          We do this by shifting the sums, but we need to remember to shift the limits of each sum as well:\n         Sum Index Limit  &   &  \n          So we get\n           \n          So a recurrence relation for   is\n           \n         two-step recurrence relation \n          Now we try to find an explicit formula for  .\n          Because this is a two-step recurrence, we will write out the coefficients in two columns, one for odd   and one for even  :\n           .\n          So it appears that\n           \n          for every  .\n         \n          Now we plug this into our power series for   to get\n           .\n         \n      Now that we have an idea of how to solve differential equations using power series, it can be useful to know when this method is actually valid, i.e., when power series solutions exist.\n      We will be particularly concerned with solutions of second-order linear ODEs.\n     Existence of Series Solutions analytic A Legendre Equation \n          Show that\n           \n          has a series solution centered at   and then find the solution up to the coefficient of  .\n         \n          First, note that the equation can be rewritten\n           ,\n          so we are guaranteed a series solution centered at  .\n          Furthermore, this solution has radius of convergence at least  .\n         \n          To find the solution, we return to the original equation and substitute   to get\n           \n          which becomes\n           .\n          After a little algebra, we get the recurrence relation\n           .\n          This recurrence is valid for  .\n         \n          Now we can use the recurrence to list the first several terms of the solution:\n           \n          In fact,\n           .\n         "
},
{
  "id": "definition-power-series",
  "level": "2",
  "url": "section-power-series-method.html#definition-power-series",
  "type": "Definition",
  "number": "5.1.1",
  "title": "Power Series.",
  "body": "Power Series power series converge "
},
{
  "id": "example-series-exponential",
  "level": "2",
  "url": "section-power-series-method.html#example-series-exponential",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "\n          Find a power series for  .\n         \n          Any power series for   looks like  , where\n           \n          Since   is its own derivative,   for all choices of  .\n          So\n           \n          and the power series for   is\n           \n          It turns out the   equals its power series for  all  values of  .\n         "
},
{
  "id": "p-436",
  "level": "2",
  "url": "section-power-series-method.html#p-436",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "centered at  "
},
{
  "id": "example-series-sin-pi-over-2",
  "level": "2",
  "url": "section-power-series-method.html#example-series-sin-pi-over-2",
  "type": "Example",
  "number": "5.1.3",
  "title": "",
  "body": "\n          Find the power series for   centered at  .\n         \n          A power series centered at   will look like\n           \n          where\n           \n          To find these values, we need to compute the derivatives of   and evaluate them at  :\n           .\n          So the power series centered at   is\n           \n          Just as with  ,   is equal to its power series everywhere.\n         "
},
{
  "id": "example-series-integral",
  "level": "2",
  "url": "section-power-series-method.html#example-series-integral",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": "\n          Find  .\n         error function "
},
{
  "id": "theorem-finding-radius-convergence",
  "level": "2",
  "url": "section-power-series-method.html#theorem-finding-radius-convergence",
  "type": "Theorem",
  "number": "5.1.5",
  "title": "",
  "body": "\n          Given the power series  , define the number   by the limit\n           \n          Suppose the limit exists or is infinite. Then   is the radius of converengence of the series: if   then the series converges for   and diverges for  . If   then the series converges only at  .\n         "
},
{
  "id": "example-series-solve-first-order-linear",
  "level": "2",
  "url": "section-power-series-method.html#example-series-solve-first-order-linear",
  "type": "Example",
  "number": "5.1.6",
  "title": "",
  "body": "\n          Solve the ODE given by\n           \n         \n          We could easily solve this using Chapter 1 methods, but we'll use power series to practice.\n          To start, we assume that the solution   can be written as a power series:\n           \n          The next step is to plug this into the ODE.\n          Since\n           \n          we get the equation\n           .\n         \n          We need to find the values of the coefficients  ; we do this by equating coefficients on both sides of the equation.\n          We want to write both series in terms of   so that we can do this, so we need to shift the summation on the left: we replace   with   inside the sum and decrease the limit of summation   to   to get\n           .\n          Now we can equate coefficients: for  , we have\n           \n         recurrence relation "
},
{
  "id": "example-75",
  "level": "2",
  "url": "section-power-series-method.html#example-75",
  "type": "Example",
  "number": "5.1.7",
  "title": "",
  "body": "\n          Use power series to solve the ODE  .\n         \n          We will solve this using the steps listed above.\n          First, assume  .\n          Now plug this guess for   into the ODE to get\n           \n          We want to equate coefficients to build a recurrence relation, so we need to rewrite these sums in terms of a single  , as opposed to   and  .\n          We do this by shifting the sums, but we need to remember to shift the limits of each sum as well:\n         Sum Index Limit  &   &  \n          So we get\n           \n          So a recurrence relation for   is\n           \n         two-step recurrence relation \n          Now we try to find an explicit formula for  .\n          Because this is a two-step recurrence, we will write out the coefficients in two columns, one for odd   and one for even  :\n           .\n          So it appears that\n           \n          for every  .\n         \n          Now we plug this into our power series for   to get\n           .\n         "
},
{
  "id": "theorem-existence-of-series-solutions",
  "level": "2",
  "url": "section-power-series-method.html#theorem-existence-of-series-solutions",
  "type": "Theorem",
  "number": "5.1.8",
  "title": "Existence of Series Solutions.",
  "body": "Existence of Series Solutions analytic "
},
{
  "id": "example-a-legendre-equation",
  "level": "2",
  "url": "section-power-series-method.html#example-a-legendre-equation",
  "type": "Example",
  "number": "5.1.9",
  "title": "A Legendre Equation.",
  "body": "A Legendre Equation \n          Show that\n           \n          has a series solution centered at   and then find the solution up to the coefficient of  .\n         \n          First, note that the equation can be rewritten\n           ,\n          so we are guaranteed a series solution centered at  .\n          Furthermore, this solution has radius of convergence at least  .\n         \n          To find the solution, we return to the original equation and substitute   to get\n           \n          which becomes\n           .\n          After a little algebra, we get the recurrence relation\n           .\n          This recurrence is valid for  .\n         \n          Now we can use the recurrence to list the first several terms of the solution:\n           \n          In fact,\n           .\n         "
},
{
  "id": "section-legendre-s-equation-and-legendre-polynomials",
  "level": "1",
  "url": "section-legendre-s-equation-and-legendre-polynomials.html",
  "type": "Section",
  "number": "5.2",
  "title": "Legendre's Equation and Legendre Polynomials",
  "body": "Legendre's Equation and Legendre Polynomials Legendre equation Solving the Legendre Equation \n        We'll proceed as we did in  , altering the last sum as necessary to get\n         \n        which gives (after a bit of algebra, once again)\n         .\n       \n        This recurrence is valid for  , and allows us to write out the solution   in terms of the parameter   and the arbitrary constants   and  :\n         \n        where\n         .\n       \n        Note that   and   form a basis of solutions ( ) of the Legendre equation, which means that   must also be the general solution.\n       Legendre Polynomials \n        Our solution of   simplifies greatly if   happens to be an integer.\n        In particular, if   is a nonnegative integer then\n         .\n        If   is even then the solution   given in   becomes a polynomial:\n         .\n        Likewise, if   is odd then   given in   becomes a polynomial instead:\n         .\n       Legendre polynomials \n        These polynomials satisfy several nice properties, but one of the most important characteristics they have is that   forms an  orthogonal set  of polynomials on the interval  .\n        This means that\n         \n        if  .\n        It can also be shown that\n         \n        if  .\n        This property allows us to express  any  polynomial as a finite sum of Legendre polynomials in a computationally efficient manner.\n        Furthermore, if we allow infinite series then we can use Legendre polynomials to express and continuous function on  .\n       \n        For actually computing Legendre polynomials, instead of using   we often use  Rodrigues' formula \n         \n        or  Bonnet's recurrence \n         .\n        Either recurrence is simple to program into a CAS, as seen in the Sage cell below:\n       "
},
{
  "id": "p-468",
  "level": "2",
  "url": "section-legendre-s-equation-and-legendre-polynomials.html#p-468",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Legendre equation "
},
{
  "id": "p-473",
  "level": "2",
  "url": "section-legendre-s-equation-and-legendre-polynomials.html#p-473",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Legendre polynomials "
},
{
  "id": "section-frobenius-method",
  "level": "1",
  "url": "section-frobenius-method.html",
  "type": "Section",
  "number": "5.3",
  "title": "Frobenius Method",
  "body": "Frobenius Method \n        This section corresponds to Section 5.3 of the text.\n       Regular Points and Singular Points \n        Recall that a homogeneous, linear second order ODE has the form\n         \n        We can rewrite this in the form\n         \n        As we saw at the end of  , the usefulness of the power series method depends on the behavior of   and   at the point we're centering our series solution at.\n       Regular Points and Singular Points \n          regular and singular points\n         regular point singular point \n        Regular points of an ODE are nice because of the following theorem:\n       Existence of Series Solution \n          Existence of Series Solutions\n         \n            Suppose that   is a regular point of the differential equation  .\n            Then the ODE has two linearly independent solutions of the form\n             \n            The radius of convergence is at least as large as the distance from   to the nearest singular point of the ODE.\n           \n        In other words,  the power series method works at regular points. \n       \n            Find the general solution, as a power series in powers of  , for the ODE  .\n           \n            The first thing we will do is make sure that the ODE actually has a power series solution at  .\n            To do this, we need to show that   is a regular point of the ODE.\n            So we need to find   and   and check that they (or their power series) make sense at  .\n            If we divide through the ODE by   we obtain\n             \n            so\n             .\n            Since both of these exist at  , it follows that   is a regular point of the ODE.\n            Therefore the ODE has a power series solution at   (that is, in powers of  ).\n            Since   and   both have singular points at  , it follows that the radius of convergence of the power series solution is at least  .\n           \n              Here, we're using the formula  \n             \n            We return to the original form of the ODE to solve it; if we didn't do so, we would need to expand   and   using their own power series, and this would  greatly  complicate the algebra.\n            Just as we did in Section 5.1, we assume the ODE has a series solution of the form  , or just   for short.\n            Now we plug this into the ODE to get\n             \n            which simplifies to\n             \n            or just\n             \n           \n            Now we can collect like terms, and combine everything on the left hand side into one sum:\n             \n            For this sum to be   each of the coefficients must be  , so we must have\n             \n            We can solve this for   to get a recurrence relation for these coefficients:\n             \n            so\n             \n           \n            We need to find a pattern for the coefficients.\n            Since this is a two-step relation, we'll set up two columns: one column for even   and one column for odd  :\n             .\n            So it appears that\n             .\n           \n            Therefore the general solution of the ODE is\n             \n           Solutions at Singular Points and Indicial Equations \n        We've seen several examples showing the effectiveness of the power series method at regular points, but the situation becomes more complicated at singular points.\n        At these points, we may not be guaranteed a power series solution.\n       \n            Attempt to solve the ODE  .\n           \n            We start, just as we did before, by assuming the solution is a power series:  . If we plug this into the ODE and simplify somewhat, we get the equation\n             \n            So it follows that\n             \n            so the recurrence relation shows that   so the solution would have to be  .\n            This is certainly a solution, but it can't be the general solution.\n            What this tells us is that the general solution of this ODE  cannot  be written as a power series.\n           \n        The reason we couldn't find a solution of the form   was because   is a singular point of the ODE.\n        If we divide through by   we get\n         \n        and it's obvious that the coefficients have a divide by   problem at  .\n       \n        Our goal is to find a way of dealing with situations where   is a singular point of the ODE\n         \n        We know, in general, that we won't be able to find a power series solution  ; intuitively, a power series solution is too ``nice'' to be a solution of this ODE if   is a singular point.\n        To fix this, we change our guess for   to   or, equivalently,\n         \n        Here,   can be any number (real or complex!), so in general    will not be a power series .\n         \n            Recall that a power series, by definition, has only nonnegative whole number powers of  .\n           \n        We lose a little bit by no longer assuming that   is a power series, but this expression may be flexible enough to lead to a solution of the ODE if   is a singular point.\n       \n        Our goal now is to find the value of   based on the ODE and the coefficient functions   and  .\n        To do so, we will plug   into the ODE\n         \n        and attempt to get some conditions on  . First, note that\n         \n        so when we plug these into the ODE we get\n         \n        Now combine everything into one sum to get\n         \n        So for this equation to be true, we need to have\n         \n        for every   and every  .\n        Since we are trying to find  , we'll pick values for   and  .\n        In particular, if we assume that   and   exist at   we can pick   to get\n         \n        (we can assume that  ). This equation tells us how to find  .\n       Indicial Equation indicial equation indicial equation \n        What we've shown is that if   is a solution of the ODE\n         \n        then   must be a root of the indicial equation.\n        In fact, we can say more.\n       Method of Frobenius Method of Frobenius \n            Consider the ODE\n             \n            Let   be (real) roots of the indicial equation  .\n             \n                 \n                  There is a solution of the ODE of the form  .\n                 \n               \n                 \n                  If   is  not  equal to an integer, then there exists a second linearly independent solution of the form  .\n                 \n               \n                 \n                  If  , there exists a second linearly independent solution of the form  .\n                 \n               \n                 \n                  If   is a nonzero integer, there exists a second linearly independent solution of the form  .\n                 \n               \n           Using the Method of Frobenius \n            Find a series solution centered at   of the ODE\n             \n           \n            If we divide through the ODE by   we get a divide-by-zero problem at  , so   is a singular point.\n            However, for this ODE we have\n             \n            so   and   both have power series representations centered at   (namely, themselves!).\n            This means we can use the method of Frobenius to find a solution of the form  .\n           \n            The first step is to set up and solve the indicial equation, which in this case is given by\n             \n            We solve this algebraically for   to get the roots   and  .\n            Since   is an integer, we are guaranteed a solution based on   and a second solution based on   and the logarithm.\n            So we make the guess\n             \n            Now we plug this into the ODE to get\n             \n            or just\n             \n            which simplifies to\n             \n            So the recurrence relation the coefficients   need to satisfy is\n             \n           \n            The recurrence relation will tell us  nothing  about  , so to see if there are any restrictions on   we separate the   and   terms from the summation to get\n             \n            This equation places no restrictions at all on  , but it does force   since we need the   term to disappear to make this equation true.\n            This tells us that we can ignore the coefficients   with odd index, since they will all disappear.\n           \n            Now we'll try to find a pattern in the remaining coefficients:\n             \n            and in general\n             \n            So the solution of this ODE is given by\n             \n            which is actually just\n             \n           \n            Technically, this isn't the general solution of the ODE as we still need a second linearly independent solution to construct it.\n            However, we know from   that the second solution must be of the form\n             \n            Plugging this into the original ODE (and using a computer algebra system such as Sage), we get\n             \n            after truncating the expansion up to the   term.\n            This allows us (theoretically) to solve for   and the coefficients  .\n            In fact, we get\n             \n            and so\n             \n            Since the second series corresponds to a multiple of  , we can safely set   and get  .\n            Therefore the general solution of the ODE is\n             \n           "
},
{
  "id": "definition-regular-points-and-singular-points",
  "level": "2",
  "url": "section-frobenius-method.html#definition-regular-points-and-singular-points",
  "type": "Definition",
  "number": "5.3.1",
  "title": "Regular Points and Singular Points.",
  "body": "Regular Points and Singular Points \n          regular and singular points\n         regular point singular point "
},
{
  "id": "theorem-existence-of-series-solution",
  "level": "2",
  "url": "section-frobenius-method.html#theorem-existence-of-series-solution",
  "type": "Theorem",
  "number": "5.3.2",
  "title": "Existence of Series Solution.",
  "body": "Existence of Series Solution \n          Existence of Series Solutions\n         \n            Suppose that   is a regular point of the differential equation  .\n            Then the ODE has two linearly independent solutions of the form\n             \n            The radius of convergence is at least as large as the distance from   to the nearest singular point of the ODE.\n           "
},
{
  "id": "example-77",
  "level": "2",
  "url": "section-frobenius-method.html#example-77",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "\n            Find the general solution, as a power series in powers of  , for the ODE  .\n           \n            The first thing we will do is make sure that the ODE actually has a power series solution at  .\n            To do this, we need to show that   is a regular point of the ODE.\n            So we need to find   and   and check that they (or their power series) make sense at  .\n            If we divide through the ODE by   we obtain\n             \n            so\n             .\n            Since both of these exist at  , it follows that   is a regular point of the ODE.\n            Therefore the ODE has a power series solution at   (that is, in powers of  ).\n            Since   and   both have singular points at  , it follows that the radius of convergence of the power series solution is at least  .\n           \n              Here, we're using the formula  \n             \n            We return to the original form of the ODE to solve it; if we didn't do so, we would need to expand   and   using their own power series, and this would  greatly  complicate the algebra.\n            Just as we did in Section 5.1, we assume the ODE has a series solution of the form  , or just   for short.\n            Now we plug this into the ODE to get\n             \n            which simplifies to\n             \n            or just\n             \n           \n            Now we can collect like terms, and combine everything on the left hand side into one sum:\n             \n            For this sum to be   each of the coefficients must be  , so we must have\n             \n            We can solve this for   to get a recurrence relation for these coefficients:\n             \n            so\n             \n           \n            We need to find a pattern for the coefficients.\n            Since this is a two-step relation, we'll set up two columns: one column for even   and one column for odd  :\n             .\n            So it appears that\n             .\n           \n            Therefore the general solution of the ODE is\n             \n           "
},
{
  "id": "example-78",
  "level": "2",
  "url": "section-frobenius-method.html#example-78",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": "\n            Attempt to solve the ODE  .\n           \n            We start, just as we did before, by assuming the solution is a power series:  . If we plug this into the ODE and simplify somewhat, we get the equation\n             \n            So it follows that\n             \n            so the recurrence relation shows that   so the solution would have to be  .\n            This is certainly a solution, but it can't be the general solution.\n            What this tells us is that the general solution of this ODE  cannot  be written as a power series.\n           "
},
{
  "id": "definition-indicial-equation",
  "level": "2",
  "url": "section-frobenius-method.html#definition-indicial-equation",
  "type": "Definition",
  "number": "5.3.5",
  "title": "Indicial Equation.",
  "body": "Indicial Equation indicial equation indicial equation "
},
{
  "id": "theorem-method-of-frobenius",
  "level": "2",
  "url": "section-frobenius-method.html#theorem-method-of-frobenius",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "Method of Frobenius.",
  "body": "Method of Frobenius Method of Frobenius \n            Consider the ODE\n             \n            Let   be (real) roots of the indicial equation  .\n             \n                 \n                  There is a solution of the ODE of the form  .\n                 \n               \n                 \n                  If   is  not  equal to an integer, then there exists a second linearly independent solution of the form  .\n                 \n               \n                 \n                  If  , there exists a second linearly independent solution of the form  .\n                 \n               \n                 \n                  If   is a nonzero integer, there exists a second linearly independent solution of the form  .\n                 \n               \n           "
},
{
  "id": "example-using-method-of-frobenius",
  "level": "2",
  "url": "section-frobenius-method.html#example-using-method-of-frobenius",
  "type": "Example",
  "number": "5.3.7",
  "title": "Using the Method of Frobenius.",
  "body": "Using the Method of Frobenius \n            Find a series solution centered at   of the ODE\n             \n           \n            If we divide through the ODE by   we get a divide-by-zero problem at  , so   is a singular point.\n            However, for this ODE we have\n             \n            so   and   both have power series representations centered at   (namely, themselves!).\n            This means we can use the method of Frobenius to find a solution of the form  .\n           \n            The first step is to set up and solve the indicial equation, which in this case is given by\n             \n            We solve this algebraically for   to get the roots   and  .\n            Since   is an integer, we are guaranteed a solution based on   and a second solution based on   and the logarithm.\n            So we make the guess\n             \n            Now we plug this into the ODE to get\n             \n            or just\n             \n            which simplifies to\n             \n            So the recurrence relation the coefficients   need to satisfy is\n             \n           \n            The recurrence relation will tell us  nothing  about  , so to see if there are any restrictions on   we separate the   and   terms from the summation to get\n             \n            This equation places no restrictions at all on  , but it does force   since we need the   term to disappear to make this equation true.\n            This tells us that we can ignore the coefficients   with odd index, since they will all disappear.\n           \n            Now we'll try to find a pattern in the remaining coefficients:\n             \n            and in general\n             \n            So the solution of this ODE is given by\n             \n            which is actually just\n             \n           \n            Technically, this isn't the general solution of the ODE as we still need a second linearly independent solution to construct it.\n            However, we know from   that the second solution must be of the form\n             \n            Plugging this into the original ODE (and using a computer algebra system such as Sage), we get\n             \n            after truncating the expansion up to the   term.\n            This allows us (theoretically) to solve for   and the coefficients  .\n            In fact, we get\n             \n            and so\n             \n            Since the second series corresponds to a multiple of  , we can safely set   and get  .\n            Therefore the general solution of the ODE is\n             \n           "
},
{
  "id": "section-bessel-s-equation",
  "level": "1",
  "url": "section-bessel-s-equation.html",
  "type": "Section",
  "number": "5.4",
  "title": "Bessel's Equation",
  "body": "Bessel's Equation Bessel's equation \n        Let\n         .\n        Then we can plug this into   to obtain\n         ,\n        which gives\n         .\n        Since this only gives us data about  , we should go back to   to see if we can say anything about   or  .\n        In fact, we get\n         .\n        Hence our series solution only contains even-indexed coefficients.\n        Rewriting the recurrence to reflect this, we get\n         \n       Bessel Functions for Integer  Bessel function of the first kind Finding   and  \n            Find the zeroth order and first order Bessel functions of the first kind.\n           \n            Using  , we get\n             .\n           \n        These functions are important enough that they are built-in to most computer algebra systems.\n        Using Sage, we get the following plots:\n       \n        As we can see, these functions oscillate and tend towards  .\n        A useful (asymptotic) approximation is given by\n         ,\n        as shown below.\n       Approximating a Bessel function. Bessel Functions of the First Kind for Nonnegative Order \n        Now we try to find a formula for   assuming  .\n        To do so, we need to make sense of expressions like  .\n        Thankfully, we can do so using the  Gamma function .\n       Gamma Function Gamma function Gamma function \n        An important property of the Gamma function is the following:\n         .\n        If we replace   with an integer  , we get\n         .\n        It turns out that we can replace   in   with  , giving\n         .\n        Note that the asymptotic expansion in   holds for noninteger   as well.\n       General Solution of Bessel's Equation \n        Since   is second-order, we need a second linearly independent solution to get the general solution.\n        If   is not an integer then we can find the second solution very quickly:  .\n        However, if   is an integer then it turns out that  , and so fails to be linearly independent from  .\n       \n        It turns out that a second, linearly independent solution   is given as follows:\n         .\n       "
},
{
  "id": "p-509",
  "level": "2",
  "url": "section-bessel-s-equation.html#p-509",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bessel's equation "
},
{
  "id": "p-511",
  "level": "2",
  "url": "section-bessel-s-equation.html#p-511",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bessel function of the first kind "
},
{
  "id": "example-finding-j_-0-m-and-j_-1-m-",
  "level": "2",
  "url": "section-bessel-s-equation.html#example-finding-j_-0-m-and-j_-1-m-",
  "type": "Example",
  "number": "5.4.1",
  "title": "Finding <span class=\"process-math\">\\(J_{0}\\)<\/span> and <span class=\"process-math\">\\(J_{1}\\)<\/span>.",
  "body": "Finding   and  \n            Find the zeroth order and first order Bessel functions of the first kind.\n           \n            Using  , we get\n             .\n           "
},
{
  "id": "figure-bessel-approximation-first-kind",
  "level": "2",
  "url": "section-bessel-s-equation.html#figure-bessel-approximation-first-kind",
  "type": "Figure",
  "number": "5.4.2",
  "title": "",
  "body": "Approximating a Bessel function. "
},
{
  "id": "definition-gamma-function",
  "level": "2",
  "url": "section-bessel-s-equation.html#definition-gamma-function",
  "type": "Definition",
  "number": "5.4.3",
  "title": "Gamma Function.",
  "body": "Gamma Function Gamma function Gamma function "
},
{
  "id": "section-the-laplace-transform",
  "level": "1",
  "url": "section-the-laplace-transform.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Laplace Transform",
  "body": "The Laplace Transform Definition and Basic Properties \n          Motivating the Laplace Transform\n         \n            A mass of  1  is attached to a spring that is held  1  to the right of its equilibrium position by a force of  4 .\n            Beginning at time  , a machine is turned on and applies an external force of   to the mass.\n            At time   the machine is turned off and the external force disappears.\n            Let   be the displacement of the mass at time  .\n            What is an ODE that models the motion of the mass?\n           \n            We can set this up as we did in Chapter 3. By Hooke's Law and Newton's Second Law, we have\n             \n            where   is the external force at time  . Since  ,   and\n             \n            the motion of the mass satisfies the ODE\n             \n           \n        For the above example we could try to solve it as we did in Chapter 3: first by finding the complementary solution   (which isn't a problem) and then by finding the particular solution   corresponding to  .\n        However, finding   will not be possible using our previous methods since the function   is not differentiable everywhere (nor continuous everywhere).\n        We would like to develop a method that lets us solve ODEs that involve discontinuous quantities.\n       The Laplace Transform Laplace transforms Laplace transform time domain frequency domain \n        One reason we care about the Laplace transform is that it lets us deal with solving linear ODEs involving discontinuous functions.\n        This is something we will begin to look at in the next section.\n       Computing a Laplace Transform \n            Compute  .\n           Computing the Laplace of  \n            Compute the Laplace transform of  .\n           \n            We compute the Laplace transform   using the definition:\n             .\n           \n        In general,\n         \n        if   is a whole number.\n       linear transformation Linearity of the Laplace Transform \n            Let   and   be constants and suppose   and   are functions with respective Laplace transforms   and  . Then\n             \n           Computing the Transform of a Polynomial \n            Compute  .\n           \n            We could use the definition once again, but here's an easier way using the linearity of the Laplace transform. First, note that\n             \n            so\n             .\n           \n        Another benefit is that the Laplace transform works well with some discontinuous functions.\n       The Unit Step Function unit step function \n            Note that we are computing a  translation  of the usual unit step function.\n            We still compute   using the definition of the Laplace transform:\n             .\n           \n        We can verify the result of   using Sage as below:\n         \n       \n        Some other important Laplace transforms are given below:\n         .\n       The Inverse Laplace Transform;  -shifting \n        An important theorem regarding Laplace transforms is the following:\n       Uniqueness of Laplace Transforms \n            Suppose   and   have respective Laplace transforms   and  .\n            If   for all   (for some constant  ) and   and   are piecewise continuous, then   on the interval  .\n           \n        The previous theorem says that the Laplace transform is unique for continuous functions: two different continuous functions will have two different Laplace transforms. This allows us to talk about taking inverse Laplace transforms.\n       Inverse Laplace Transform inverse Laplace transform linear Finding an Inverse Transform \n            A continuous function   has Laplace transform\n             \n            Find  .\n           \n              We can find   by taking the inverse Laplace transform of each term in  :\n               .\n              So\n               \n             -shifting \n            Suppose that   has Laplace transform  , defined for   for some  .\n            Then\n             \n            In other words, multiplication by an exponential   in the  time domain  corresponds to translation by   in the  frequency domain .\n           Inverse Laplace with Frequency Shifting \n            A function   has Laplace transform\n             \n            Find  .\n           \n            We'll start by completing the square on the denominator of   to see if we can make it look like   for some  :\n             \n            This looks an  awful  lot like the transform of  .\n            Since we have   instead of  , this tells us that\n             \n           \n        The following Sage cell verifies the computation in  .\n       "
},
{
  "id": "example-motivating-laplace",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-motivating-laplace",
  "type": "Example",
  "number": "6.1.1",
  "title": "Motivating the Laplace Transform.",
  "body": "\n          Motivating the Laplace Transform\n         \n            A mass of  1  is attached to a spring that is held  1  to the right of its equilibrium position by a force of  4 .\n            Beginning at time  , a machine is turned on and applies an external force of   to the mass.\n            At time   the machine is turned off and the external force disappears.\n            Let   be the displacement of the mass at time  .\n            What is an ODE that models the motion of the mass?\n           \n            We can set this up as we did in Chapter 3. By Hooke's Law and Newton's Second Law, we have\n             \n            where   is the external force at time  . Since  ,   and\n             \n            the motion of the mass satisfies the ODE\n             \n           "
},
{
  "id": "definition-the-laplace-transform",
  "level": "2",
  "url": "section-the-laplace-transform.html#definition-the-laplace-transform",
  "type": "Definition",
  "number": "6.1.2",
  "title": "The Laplace Transform.",
  "body": "The Laplace Transform Laplace transforms Laplace transform time domain frequency domain "
},
{
  "id": "example-computing-a-laplace-transform",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-computing-a-laplace-transform",
  "type": "Example",
  "number": "6.1.3",
  "title": "Computing a Laplace Transform.",
  "body": "Computing a Laplace Transform \n            Compute  .\n           "
},
{
  "id": "example-computing-the-laplace-of-t-",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-computing-the-laplace-of-t-",
  "type": "Example",
  "number": "6.1.4",
  "title": "Computing the Laplace of <span class=\"process-math\">\\(t\\)<\/span>.",
  "body": "Computing the Laplace of  \n            Compute the Laplace transform of  .\n           \n            We compute the Laplace transform   using the definition:\n             .\n           "
},
{
  "id": "p-530",
  "level": "2",
  "url": "section-the-laplace-transform.html#p-530",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear transformation "
},
{
  "id": "theorem-linearity-of-the-laplace-transform",
  "level": "2",
  "url": "section-the-laplace-transform.html#theorem-linearity-of-the-laplace-transform",
  "type": "Theorem",
  "number": "6.1.5",
  "title": "Linearity of the Laplace Transform.",
  "body": "Linearity of the Laplace Transform \n            Let   and   be constants and suppose   and   are functions with respective Laplace transforms   and  . Then\n             \n           "
},
{
  "id": "example-computing-the-transform-of-a-polynomial",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-computing-the-transform-of-a-polynomial",
  "type": "Example",
  "number": "6.1.6",
  "title": "Computing the Transform of a Polynomial.",
  "body": "Computing the Transform of a Polynomial \n            Compute  .\n           \n            We could use the definition once again, but here's an easier way using the linearity of the Laplace transform. First, note that\n             \n            so\n             .\n           "
},
{
  "id": "example-the-unit-step-function",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-the-unit-step-function",
  "type": "Example",
  "number": "6.1.7",
  "title": "The Unit Step Function.",
  "body": "The Unit Step Function unit step function \n            Note that we are computing a  translation  of the usual unit step function.\n            We still compute   using the definition of the Laplace transform:\n             .\n           "
},
{
  "id": "theorem-uniqueness-of-inverse-laplace",
  "level": "2",
  "url": "section-the-laplace-transform.html#theorem-uniqueness-of-inverse-laplace",
  "type": "Theorem",
  "number": "6.1.8",
  "title": "Uniqueness of Laplace Transforms.",
  "body": "Uniqueness of Laplace Transforms \n            Suppose   and   have respective Laplace transforms   and  .\n            If   for all   (for some constant  ) and   and   are piecewise continuous, then   on the interval  .\n           "
},
{
  "id": "definition-inverse-laplace",
  "level": "2",
  "url": "section-the-laplace-transform.html#definition-inverse-laplace",
  "type": "Definition",
  "number": "6.1.9",
  "title": "Inverse Laplace Transform.",
  "body": "Inverse Laplace Transform inverse Laplace transform "
},
{
  "id": "p-543",
  "level": "2",
  "url": "section-the-laplace-transform.html#p-543",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear "
},
{
  "id": "example-finding-inverse-laplace",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-finding-inverse-laplace",
  "type": "Example",
  "number": "6.1.10",
  "title": "Finding an Inverse Transform.",
  "body": "Finding an Inverse Transform \n            A continuous function   has Laplace transform\n             \n            Find  .\n           \n              We can find   by taking the inverse Laplace transform of each term in  :\n               .\n              So\n               \n             "
},
{
  "id": "theorem--s--shifting",
  "level": "2",
  "url": "section-the-laplace-transform.html#theorem--s--shifting",
  "type": "Theorem",
  "number": "6.1.11",
  "title": "<span class=\"process-math\">\\(s\\)<\/span>-shifting.",
  "body": "-shifting \n            Suppose that   has Laplace transform  , defined for   for some  .\n            Then\n             \n            In other words, multiplication by an exponential   in the  time domain  corresponds to translation by   in the  frequency domain .\n           "
},
{
  "id": "example-inverse-laplace-with-frequency-shifting",
  "level": "2",
  "url": "section-the-laplace-transform.html#example-inverse-laplace-with-frequency-shifting",
  "type": "Example",
  "number": "6.1.12",
  "title": "Inverse Laplace with Frequency Shifting.",
  "body": "Inverse Laplace with Frequency Shifting \n            A function   has Laplace transform\n             \n            Find  .\n           \n            We'll start by completing the square on the denominator of   to see if we can make it look like   for some  :\n             \n            This looks an  awful  lot like the transform of  .\n            Since we have   instead of  , this tells us that\n             \n           "
},
{
  "id": "section-transformation-of-initial-value-problems",
  "level": "1",
  "url": "section-transformation-of-initial-value-problems.html",
  "type": "Section",
  "number": "6.2",
  "title": "Transformation of Initial Value Problems",
  "body": "Transformation of Initial Value Problems Laplace Transforms of Derivatives \n          Suppose that the function   is piecewise smooth and that   exists.\n          Then   exists and\n           \n         \n      The above theorem says that differentiation in the  time domain  corresponds to multiplication by   in the  frequency domain. \n      This will be the most useful property of the Laplace transform for us: it will turn differential equations in the time domain into algebraic equations in the frequency domain.\n     Laplace Transform of a Second Derivative \n          Let   be piecewise smooth with Laplace transform  .\n          Compute   using  .\n         \n          By   we know that\n           \n          We can apply   to   as well, since it must also be piecewise smooth:\n           .\n          This process can be continued indefinitely.\n          In general,\n           \n          This gives us everything we need to start solving ODEs using Laplace transforms.\n         Solving IVPs with Laplace Transforms \n          Solve the IVP\n           \n          where   is a function of  .\n         \n          We will solve this by using Laplace transforms.\n          If we set  , then\n           .\n          So if we take the Laplace transform of the entire ODE, we get\n           \n          which simplifies to\n           \n          To solve the ODE we need to find  , so we now solve the above for   in order to find the inverse Laplace transform.\n          If we do so, we get\n           \n          This doesn't look like the Laplace transform of anything we know at the moment, but we can simplify the right hand side using partial fractions.\n          If we do so, we get\n           \n          So\n           .\n         Nonhomogeneous IVPs with Laplace Transforms \n          Solve the IVP given by\n           \n         \n          We begin by taking the Laplace transform of both sides to get\n           \n          or just\n           \n          So\n           \n          By partial fractions, this becomes\n           \n          so the solution of the ODE is\n           .\n         \n      One restriction of the Laplace transform approach as we've developed it is that it requires initial conditions at  .\n      If initial conditions are instead given at some other  , then we need to adjust our approach in order to continue to use   and its counterpart for second derivatives.\n      We'll demonstrate this by example.\n     Solving an IVP with Shifted Initial Conditions \n            Solve the IVP given by\n             \n           \n            We would like to take the Laplace transform of both sides of this ODE, but since the initial conditions are not specified at   we can't do so right away. The trick here is to shift the initial conditions  back  to   as follows. First, we define a new function   by\n             \n            where   is the solution we seek. Then it follows that\n             \n            and   and  .\n            So the Laplace transform method applies to solving for   in this modified IVP.\n           \n            Now that we can take the Laplace transform of both sides of the modified IVP, we do so and obtain the Laplace transform   of  .\n            Using our initial conditions and a bit of algebra, we get\n             \n            At this point we can take the inverse Laplace transform (either using partial fractions or using technology) to get\n             \n           \n            The final step is to convert our answer from   to   by making the substitution   in  .\n            This gives\n             \n            as the solution of our IVP.\n           "
},
{
  "id": "theorem-laplace-transforms-of-derivatives",
  "level": "2",
  "url": "section-transformation-of-initial-value-problems.html#theorem-laplace-transforms-of-derivatives",
  "type": "Theorem",
  "number": "6.2.1",
  "title": "Laplace Transforms of Derivatives.",
  "body": "Laplace Transforms of Derivatives \n          Suppose that the function   is piecewise smooth and that   exists.\n          Then   exists and\n           \n         "
},
{
  "id": "example-laplace-transform-of-a-second-derivative",
  "level": "2",
  "url": "section-transformation-of-initial-value-problems.html#example-laplace-transform-of-a-second-derivative",
  "type": "Example",
  "number": "6.2.2",
  "title": "Laplace Transform of a Second Derivative.",
  "body": "Laplace Transform of a Second Derivative \n          Let   be piecewise smooth with Laplace transform  .\n          Compute   using  .\n         \n          By   we know that\n           \n          We can apply   to   as well, since it must also be piecewise smooth:\n           .\n          This process can be continued indefinitely.\n          In general,\n           \n          This gives us everything we need to start solving ODEs using Laplace transforms.\n         "
},
{
  "id": "example-solving-ivps-with-laplace-transforms",
  "level": "2",
  "url": "section-transformation-of-initial-value-problems.html#example-solving-ivps-with-laplace-transforms",
  "type": "Example",
  "number": "6.2.3",
  "title": "Solving IVPs with Laplace Transforms.",
  "body": "Solving IVPs with Laplace Transforms \n          Solve the IVP\n           \n          where   is a function of  .\n         \n          We will solve this by using Laplace transforms.\n          If we set  , then\n           .\n          So if we take the Laplace transform of the entire ODE, we get\n           \n          which simplifies to\n           \n          To solve the ODE we need to find  , so we now solve the above for   in order to find the inverse Laplace transform.\n          If we do so, we get\n           \n          This doesn't look like the Laplace transform of anything we know at the moment, but we can simplify the right hand side using partial fractions.\n          If we do so, we get\n           \n          So\n           .\n         "
},
{
  "id": "example-nonhomogeneous-ivps-with-laplace-transforms",
  "level": "2",
  "url": "section-transformation-of-initial-value-problems.html#example-nonhomogeneous-ivps-with-laplace-transforms",
  "type": "Example",
  "number": "6.2.4",
  "title": "Nonhomogeneous IVPs with Laplace Transforms.",
  "body": "Nonhomogeneous IVPs with Laplace Transforms \n          Solve the IVP given by\n           \n         \n          We begin by taking the Laplace transform of both sides to get\n           \n          or just\n           \n          So\n           \n          By partial fractions, this becomes\n           \n          so the solution of the ODE is\n           .\n         "
},
{
  "id": "example-solving-an-ivp-with-shifted-initial-conditions",
  "level": "2",
  "url": "section-transformation-of-initial-value-problems.html#example-solving-an-ivp-with-shifted-initial-conditions",
  "type": "Example",
  "number": "6.2.5",
  "title": "Solving an IVP with Shifted Initial Conditions.",
  "body": "Solving an IVP with Shifted Initial Conditions \n            Solve the IVP given by\n             \n           \n            We would like to take the Laplace transform of both sides of this ODE, but since the initial conditions are not specified at   we can't do so right away. The trick here is to shift the initial conditions  back  to   as follows. First, we define a new function   by\n             \n            where   is the solution we seek. Then it follows that\n             \n            and   and  .\n            So the Laplace transform method applies to solving for   in this modified IVP.\n           \n            Now that we can take the Laplace transform of both sides of the modified IVP, we do so and obtain the Laplace transform   of  .\n            Using our initial conditions and a bit of algebra, we get\n             \n            At this point we can take the inverse Laplace transform (either using partial fractions or using technology) to get\n             \n           \n            The final step is to convert our answer from   to   by making the substitution   in  .\n            This gives\n             \n            as the solution of our IVP.\n           "
},
{
  "id": "section-unit-step-functions-and-time-shifting",
  "level": "1",
  "url": "section-unit-step-functions-and-time-shifting.html",
  "type": "Section",
  "number": "6.3",
  "title": "Unit Step Functions and Time Shifting",
  "body": "Unit Step Functions and Time Shifting unit step function Heaviside function \n      Recall that   tells us how to deal with translation in the frequency domain:\n       \n      A similar result is true for  -shifting.\n     Time Shifting of Laplace Transforms \n          Let   denote a piecewise continuous function with Laplace transform  .\n          Let  .\n          Then  , or equivalently  .\n         \n          To compute this we need to rely on the definition of the Laplace transform:\n           .\n         \n      The Heaviside function is useful for describing forces that turn on or off at specified times.\n      In particular, we can now solve the IVP given at the start of this chapter in  .\n     IVP with Discontinuous Forcing Function \n          A mass of  1  is attached to a spring that is held  1  to the right of its equilibrium position by a force of  4 .\n          Beginning at time  , a machine is turned on and applies an external force of   to the mass.\n          At time   the machine is turned off and the external force disappears.\n          Let   be the displacement of the mass at time  .\n          What is an ODE that models the motion of the mass?\n         \n          By Hooke's Law and Newton's Second Law, we have\n           \n          where   is the external force at time  .\n          Since  ,   and\n           \n          the motion of the mass satisfies the IVP\n           \n          We can rewrite   as follows:\n           \n          So the IVP we need to solve is\n           \n         \n          If we take Laplace transforms, this becomes\n           \n          where\n           .\n          So\n           \n          If we solve this for  , we get\n           \n          and if we simplify this using partial fractions this becomes\n           \n         \n          So the solution of the IVP is\n           .\n         \n      Although it's important to know how to deal with Laplace transforms of basic functions by hand, if only to understand the behavior of the transform itself in solving differential equations, computing transforms of more complicated functions or piecewise functions like the function in   are perhaps better left to computer systems.\n      The code cell below demonstrates how Sage can compute such a transform.\n       Be careful to place matching brackets and parentheses as appropriate  when using the  piecewise  command in Sage to construct a piecewise function.\n     "
},
{
  "id": "p-563",
  "level": "2",
  "url": "section-unit-step-functions-and-time-shifting.html#p-563",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit step function Heaviside function "
},
{
  "id": "theorem-time-shifting-of-laplace-transforms",
  "level": "2",
  "url": "section-unit-step-functions-and-time-shifting.html#theorem-time-shifting-of-laplace-transforms",
  "type": "Theorem",
  "number": "6.3.1",
  "title": "Time Shifting of Laplace Transforms.",
  "body": "Time Shifting of Laplace Transforms \n          Let   denote a piecewise continuous function with Laplace transform  .\n          Let  .\n          Then  , or equivalently  .\n         \n          To compute this we need to rely on the definition of the Laplace transform:\n           .\n         "
},
{
  "id": "example-ivp-with-discontinuous-forcing-function",
  "level": "2",
  "url": "section-unit-step-functions-and-time-shifting.html#example-ivp-with-discontinuous-forcing-function",
  "type": "Example",
  "number": "6.3.2",
  "title": "IVP with Discontinuous Forcing Function.",
  "body": "IVP with Discontinuous Forcing Function \n          A mass of  1  is attached to a spring that is held  1  to the right of its equilibrium position by a force of  4 .\n          Beginning at time  , a machine is turned on and applies an external force of   to the mass.\n          At time   the machine is turned off and the external force disappears.\n          Let   be the displacement of the mass at time  .\n          What is an ODE that models the motion of the mass?\n         \n          By Hooke's Law and Newton's Second Law, we have\n           \n          where   is the external force at time  .\n          Since  ,   and\n           \n          the motion of the mass satisfies the IVP\n           \n          We can rewrite   as follows:\n           \n          So the IVP we need to solve is\n           \n         \n          If we take Laplace transforms, this becomes\n           \n          where\n           .\n          So\n           \n          If we solve this for  , we get\n           \n          and if we simplify this using partial fractions this becomes\n           \n         \n          So the solution of the IVP is\n           .\n         "
},
{
  "id": "section-dirac-delta-functions",
  "level": "1",
  "url": "section-dirac-delta-functions.html",
  "type": "Section",
  "number": "6.4",
  "title": "Dirac Delta Functions",
  "body": "Dirac Delta Functions Impulses \n        Forces that act over very short time intervals may be complicated to describe exactly, but it we can approximate such a force if we treat it as instantaneous.\n        Our goal now is describe a meaningful mathematical interpretation of an instantaneous force.\n       impulse \n        So this is our goal: find some function   that has an instantaneous unit impulse at the point  .\n        In other words, we want to find a function   such that\n         \n        But this is impossible for any function, since\n         \n        However, we can approximate the  idea  of an instantaneous unit impulse by defining\n         \n       Approximating the instantaneous unit impulse. A plot of approximations to an instantaneous unit impulse. \n        As indicated in  , this function is defined so that the area under the graph is   regardless of the value of  .\n        Therefore\n         \n        for all  .\n        Although the instantaneous unit impulse we tried to define earlier can't actually be a function,   is a completely valid function for all positive  .\n        Furthermore, if we send   then it becomes a better and better approximation to an ideal instantaneous unit impulse.\n        Despite the fact that this limit does not exist (at least in the usual sense), we use it as a definition.\n       The Dirac Delta Function Dirac delta function Dirac delta function \n        The Dirac delta function is, of course, not an actual function, but it's still useful as a mathematical formulation of an instantaneous force with unit impulse at  .\n        And this expression is often perfectly valid to work with inside of integrals due to the  sampling property  discussed below.\n       generalized function tempered distribution \n        We can also take translations of the Dirac delta, which we view as a  function    defined piecewise by\n         \n        We can represent this graphically as an arrow (see  ).\n       A plot of the Dirac delta function. A plot of the Dirac delta function. sampling property Sampling Property of the Dirac Delta Dirac delta function sampling \n            Let   be a continuous function and let  . Then\n             \n           \n            We treat   as a function and perform the above integration:\n             \n           \n        The above theorem gives us another interpretation of the Dirac delta: it's a  sampling function. \n        When integrated against another function   over an interval containing  ,   will pick out the value  .\n        We can use this to quickly find the Laplace transform of the Dirac delta.\n       Laplace Transform of the Dirac Delta Function \n            Compute  , where  .\n           \n            We use the definition of the Laplace transform:\n             .\n            In particular,  .\n           Dirac Delta Models \n        We will primarily use the Dirac delta to model instantaneous forces, such as sudden kicks or jolts.\n        Although this is not strictly realistic since such forces are still imparted over some interval of time, treating the force as instantaneous often simplifies computations.\n       IVP with Impulse \n            An object of mass  , at rest, is attached to a spring with spring constant  .\n            At time  , the a hammer strikes the mass providing an impulse of   and setting the mass in motion. What is the displacement  ?\n           \n            The displacement   satisfies the ODE\n             \n            where   is the external force.\n            Since the hammer strikes quickly, we can model it as an instantaneous force of the form  . And since it provides an impulse of  , we can pick  .\n            As the mass is initially at rest,   satisfies the IVP\n             \n            To solve this, we take the Laplace transform of the IVP to get\n             \n            or just\n             \n            So  .\n           \n        Note that the above solution does not appear to satisfy our initial conditions.\n        However, since we assumed the impulse acted instantaneously at time  , this is really the same as assuming that the mass had an initial velocity.\n        Now we look at what happens if we delay the hammer strike.\n       Time-delayed Strike \n            Consider the spring-mass system above, but suppose now that the hammer hits the mass at time  .\n            What is the displacement  ?\n           \n            This time, the IVP we must solve is\n             \n            If we take Laplace transforms and solve for   we get\n             \n            and so\n             .\n            This function is plotted in   below.\n            Note the clear appearance of the sine wave in the solution once the hammer strikes the mass at  .\n           Displacement influenced by a time-delayed hammer strike. A plot of the displacement of a spring-mass system with time-delayed hammer strike. Resonance with an Impulse Train \n            Once again we consider the spring-mass system used above in  , but now we suppose that the mass is struck with the hammer once every   seconds, starting at  .\n            Find  .\n           \n            The IVP we need to solve now is\n             \n            where  .\n            So once more we take Laplace transforms to get\n             \n            and so\n             .\n            The displacement is then given by\n             .\n            Each time the hammer strikes the mass, a factor of   is added to the displacement.\n            The repeated hammer strikes are in tune with the natural frequency of the mass, so they create resonance.\n            This is clearly demonstrated in the figure below.\n           The displacement   and resonance with the impulse train. A plot of the displacement of a spring-mass system subject to an impulse train of Dirac delta functions. transfer function impulse reponse "
},
{
  "id": "p-574",
  "level": "2",
  "url": "section-dirac-delta-functions.html#p-574",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "impulse "
},
{
  "id": "figure-dirac-delta-functions-approximation-unit-impulse",
  "level": "2",
  "url": "section-dirac-delta-functions.html#figure-dirac-delta-functions-approximation-unit-impulse",
  "type": "Figure",
  "number": "6.4.1",
  "title": "",
  "body": "Approximating the instantaneous unit impulse. A plot of approximations to an instantaneous unit impulse. "
},
{
  "id": "definition-dirac-delta",
  "level": "2",
  "url": "section-dirac-delta-functions.html#definition-dirac-delta",
  "type": "Definition",
  "number": "6.4.2",
  "title": "The Dirac Delta Function.",
  "body": "The Dirac Delta Function Dirac delta function Dirac delta function "
},
{
  "id": "p-579",
  "level": "2",
  "url": "section-dirac-delta-functions.html#p-579",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generalized function tempered distribution "
},
{
  "id": "figure-dirac-delta-plot",
  "level": "2",
  "url": "section-dirac-delta-functions.html#figure-dirac-delta-plot",
  "type": "Figure",
  "number": "6.4.3",
  "title": "",
  "body": "A plot of the Dirac delta function. A plot of the Dirac delta function. "
},
{
  "id": "p-581",
  "level": "2",
  "url": "section-dirac-delta-functions.html#p-581",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sampling property "
},
{
  "id": "theorem-sifting-property",
  "level": "2",
  "url": "section-dirac-delta-functions.html#theorem-sifting-property",
  "type": "Theorem",
  "number": "6.4.4",
  "title": "Sampling Property of the Dirac Delta.",
  "body": "Sampling Property of the Dirac Delta Dirac delta function sampling \n            Let   be a continuous function and let  . Then\n             \n           \n            We treat   as a function and perform the above integration:\n             \n           "
},
{
  "id": "example-laplace-transform-of-the-dirac-delta-function",
  "level": "2",
  "url": "section-dirac-delta-functions.html#example-laplace-transform-of-the-dirac-delta-function",
  "type": "Example",
  "number": "6.4.5",
  "title": "Laplace Transform of the Dirac Delta Function.",
  "body": "Laplace Transform of the Dirac Delta Function \n            Compute  , where  .\n           \n            We use the definition of the Laplace transform:\n             .\n            In particular,  .\n           "
},
{
  "id": "example-ivp-with-impulse",
  "level": "2",
  "url": "section-dirac-delta-functions.html#example-ivp-with-impulse",
  "type": "Example",
  "number": "6.4.6",
  "title": "IVP with Impulse.",
  "body": "IVP with Impulse \n            An object of mass  , at rest, is attached to a spring with spring constant  .\n            At time  , the a hammer strikes the mass providing an impulse of   and setting the mass in motion. What is the displacement  ?\n           \n            The displacement   satisfies the ODE\n             \n            where   is the external force.\n            Since the hammer strikes quickly, we can model it as an instantaneous force of the form  . And since it provides an impulse of  , we can pick  .\n            As the mass is initially at rest,   satisfies the IVP\n             \n            To solve this, we take the Laplace transform of the IVP to get\n             \n            or just\n             \n            So  .\n           "
},
{
  "id": "example-time-delay",
  "level": "2",
  "url": "section-dirac-delta-functions.html#example-time-delay",
  "type": "Example",
  "number": "6.4.7",
  "title": "Time-delayed Strike.",
  "body": "Time-delayed Strike \n            Consider the spring-mass system above, but suppose now that the hammer hits the mass at time  .\n            What is the displacement  ?\n           \n            This time, the IVP we must solve is\n             \n            If we take Laplace transforms and solve for   we get\n             \n            and so\n             .\n            This function is plotted in   below.\n            Note the clear appearance of the sine wave in the solution once the hammer strikes the mass at  .\n           Displacement influenced by a time-delayed hammer strike. A plot of the displacement of a spring-mass system with time-delayed hammer strike. "
},
{
  "id": "example-resonance-with-an-impulse-train",
  "level": "2",
  "url": "section-dirac-delta-functions.html#example-resonance-with-an-impulse-train",
  "type": "Example",
  "number": "6.4.9",
  "title": "Resonance with an Impulse Train.",
  "body": "Resonance with an Impulse Train \n            Once again we consider the spring-mass system used above in  , but now we suppose that the mass is struck with the hammer once every   seconds, starting at  .\n            Find  .\n           \n            The IVP we need to solve now is\n             \n            where  .\n            So once more we take Laplace transforms to get\n             \n            and so\n             .\n            The displacement is then given by\n             .\n            Each time the hammer strikes the mass, a factor of   is added to the displacement.\n            The repeated hammer strikes are in tune with the natural frequency of the mass, so they create resonance.\n            This is clearly demonstrated in the figure below.\n           The displacement   and resonance with the impulse train. A plot of the displacement of a spring-mass system subject to an impulse train of Dirac delta functions. "
},
{
  "id": "p-595",
  "level": "2",
  "url": "section-dirac-delta-functions.html#p-595",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transfer function "
},
{
  "id": "p-596",
  "level": "2",
  "url": "section-dirac-delta-functions.html#p-596",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "impulse reponse "
},
{
  "id": "section-convolution-products",
  "level": "1",
  "url": "section-convolution-products.html",
  "type": "Section",
  "number": "6.5",
  "title": "Convolution Products",
  "body": "Convolution Products \n      Consider the function   in the frequency domain   defined by\n       \n      This does not match a Laplace transform on our table.\n      If we wanted to find the inverse transform  , we would have to use partial fractions to find it.\n      However,   is easily seen to be the  product  of two recognizable transforms:\n       \n      What we would like to do is find a way to determine inverse transforms of products of transforms.\n      To do this, we need to define the  convolution  of two functions.\n     Convolution of Functions convolutions convolution \n      Note that   lies in the time domain instead of the frequency domain.\n      In general, we will only take convolutions of functions in the time domain.\n     \n      It's difficult to build intuition for precisely what convolutions do based on the formula alone, but one reason that convolutions are important is because they act as  smoothing operators .\n      If you have a  rough  (i.e. non-differentiable) function, then convolving it with a properly chosen smooth function may give you a smooth approximation.\n      We will see another interpretation of the convolution at the end of this section.\n     Convolution with Unit Step \n          Compute  , where   is the unit step function.\n         \n          By definition,\n           \n         \n      One important property of convolutions is that they are  commutative : that is,   for any piecewise continuous functions   and  .\n      Another important property of convolutions is that they tend to work well with integral transforms.\n      In particular, we have the following theorem.\n     Convolution Theorem Laplace transforms Convolution Theorem \n          The Laplace transform distributes over convolution.\n          In other words, if   and   are piecewise continuous functions, then\n           .\n          Equivalently, if we write   and  , then\n           .\n         \n      One way to phrase the above result is that Laplace transforms turns convolution in the time domain into multiplication in the frequency domain.\n      Let's return to the example we started with.\n     Using the Convolution Theorem \n          Let\n           \n          Find  .\n         \n          We will use   to express the inverse transform:\n           \n         Solving IVPs with the Convolution Theorem \n          Let   be a function of  .\n          Solve the IVP\n           \n          for   in terms of the function  .\n         \n          We're trying to find the solution   for arbitrary  , which is something we definitely would not have been able to do in Chapter 3.\n          We will do so using Laplace transforms and  .\n          So we start by taking the Laplace transform of the ODE to get\n           \n          where   and  .\n          Now we solve for   to get\n           \n          where\n           \n            tells us then that\n           \n          where\n           \n          Therefore the solution of the ODE in terms of the function   is given by\n           .\n         \n      There are a couple of interesting things happening in the last example.\n      In particular, we were able to write the solution   in terms of   as\n       .\n      In these terms, we can recognize   as the impulse response of the system discussed at the end of  .\n      Therefore the response of this system to the input   is related to the impulse response by a convolution:\n       .\n      Essentially, this convolution integral tells us how to construct the response   using only information about the input   and the impulse response   from the  past and present. \n      Recall that this relationship is even easier to write in the frequency domain: the frequency input   is turned into the frequency output   by means of the transfer function  :\n       .\n     \n      There are multiple ways to find the transfer function, assuming that all initial conditions are  .\n      First, if   is the input and   is some measured output (once again, in the frequency domain), then the transfer function   satisfies\n       ,\n      and this quantity is independent of the particular choice of  .\n      We can also replace the time domain input   with   as discussed in   to determine the impulse response directly.\n      In this case, the corresponding output in the frequency domain is\n       .\n     "
},
{
  "id": "definition-convolution-of-functions",
  "level": "2",
  "url": "section-convolution-products.html#definition-convolution-of-functions",
  "type": "Definition",
  "number": "6.5.1",
  "title": "Convolution of Functions.",
  "body": "Convolution of Functions convolutions convolution "
},
{
  "id": "example-convolution-with-unit-step",
  "level": "2",
  "url": "section-convolution-products.html#example-convolution-with-unit-step",
  "type": "Example",
  "number": "6.5.2",
  "title": "Convolution with Unit Step.",
  "body": "Convolution with Unit Step \n          Compute  , where   is the unit step function.\n         \n          By definition,\n           \n         "
},
{
  "id": "theorem-convolution-transform",
  "level": "2",
  "url": "section-convolution-products.html#theorem-convolution-transform",
  "type": "Theorem",
  "number": "6.5.3",
  "title": "Convolution Theorem.",
  "body": "Convolution Theorem Laplace transforms Convolution Theorem \n          The Laplace transform distributes over convolution.\n          In other words, if   and   are piecewise continuous functions, then\n           .\n          Equivalently, if we write   and  , then\n           .\n         "
},
{
  "id": "example-using-the-convolution-theorem",
  "level": "2",
  "url": "section-convolution-products.html#example-using-the-convolution-theorem",
  "type": "Example",
  "number": "6.5.4",
  "title": "Using the Convolution Theorem.",
  "body": "Using the Convolution Theorem \n          Let\n           \n          Find  .\n         \n          We will use   to express the inverse transform:\n           \n         "
},
{
  "id": "example-solving-ivps-with-the-convolution-theorem",
  "level": "2",
  "url": "section-convolution-products.html#example-solving-ivps-with-the-convolution-theorem",
  "type": "Example",
  "number": "6.5.5",
  "title": "Solving IVPs with the Convolution Theorem.",
  "body": "Solving IVPs with the Convolution Theorem \n          Let   be a function of  .\n          Solve the IVP\n           \n          for   in terms of the function  .\n         \n          We're trying to find the solution   for arbitrary  , which is something we definitely would not have been able to do in Chapter 3.\n          We will do so using Laplace transforms and  .\n          So we start by taking the Laplace transform of the ODE to get\n           \n          where   and  .\n          Now we solve for   to get\n           \n          where\n           \n            tells us then that\n           \n          where\n           \n          Therefore the solution of the ODE in terms of the function   is given by\n           .\n         "
},
{
  "id": "section-fourier-series",
  "level": "1",
  "url": "section-fourier-series.html",
  "type": "Section",
  "number": "7.1",
  "title": "Fourier Series",
  "body": "Fourier Series periodic functions Periodic Functions \n        Consider the function   given by the following graph:\n       A periodic function. The graph of a periodic function. periodic functions Periodic Functions periodic functions -periodic (fundamental) period \n          Constant functions are examples of periodic functions with  no  fundamental period.\n         \n         Periods of Sine and Cosine \n         \n          Let   be any positive integer.\n          Then the functions   and   are both  -periodic which follows from the corresponding addition formulas\n           .\n          The period, in particular, is  .\n          The periodic nature of these functions can also be seen from their graphs:\n         \n         \n         Graphs of   and  . An image showing the periodic nature of sine and cosine. \n       \n        The graph in   was produced by graphing\n         \n        In general, the (finite) sum of functions of the form   where   are integers is also  -periodic.\n        In particular, we have the following result.\n       Periods of Sums of Sinusoids \n              Let   and   where  .\n              Suppose that   where   represents the reduced fraction of  .\n              Then   has period given by\n               .\n             Finding Periods of Sums of Sinusoids \n              Find the periods of   and  .\n             \n              For   we have  , which in lowest terms is  .\n              Therefore the period is  .\n              For  , we have   which is already in lowest terms.\n              Therefore its period is  .\n             Trigonometric Series and Fourier Series \n        One of the greatest accomplishments in mathematics was the realization that many other periodic functions can be written as a sum of sinusoids using  trigonometric polynomials  and  trigonometric series .\n       Trigonometric Polynomials and Series trigonometric polynomials and series trigonometric polynomial trigonometric series coefficients orthogonality relations Orthogonality Relations Orthogonality relations \n            Let   be whole numbers with  .\n            Then\n             .\n            Furthermore,\n             \n            and\n             .\n           \n        We can verify   using a computer algebra system as below.\n        Proving it is a little bit more work, but can be done using trigonometric identities or  .\n       Fourier series Fourier Series Coefficients Fourier series Coefficients \n            Let   be a periodic function with period  .\n            Then the Fourier coefficients of   are given by\n             \n           \n        Note that the formulas in   tell us what the coefficients of a Fourier series representation of   must be if such a representation existed, but as yet there is no guarantee that a function actually equals its Fourier series.\n        Also, since   is assumed to be  -periodic we can also integrate over   instead without changing the values of the coefficients.\n       The Fourier series of  \n          Define   for  .\n          To find its Fourier series, we can just use the previous formulas to find the values of the coefficients   for  .\n          We know that\n           \n          As nasty as these are, the first two are actually very easy to compute.\n          Here's why:   and   are both  odd  functions, and the integral of any odd function in an interval that is symmetric about   is always   (since the areas cancel out).\n          So   for all  .\n          The last term is a bit more complicated, but we can use integration by parts (and I definitely recommend using a computer here) to show that\n           \n          If we plug in the limits of integration and simplify (again, computers are handy for this!), we get\n           \n          So the Fourier series for   is given by\n           \n         \n        A very good question at this point is, what relationship does the Fourier series that we found in the previous example have with the original function  ?\n        Are they actually equal?\n        If we use the following code (adapted from  here ) to compare the partial sums\n         \n        of the Fourier series with  , then it looks like the partial sums get closer and closer if we choose larger values of  .\n       \n        In general, the question of whether or not a given Fourier series makes sense is a difficult one to answer. In fact, the convergence of Fourier series for what one might consider to be the more \"well-behaved\" functions in mathematics was an open question until the 1960s. See  Carleson's Theorem . \n        However, for many of the functions we care about in this course we have the following theorem.\n       Fourier Series of Piecewise Continuous Functions Fourier series convergence \n            Let   be a piecewise continuous function on the interval  , and suppose that it's also periodic with period  , and is differentiable everywhere that it's continuous.\n            Then the Fourier series of   converges to   except at the points where   is discontinuous.\n           "
},
{
  "id": "p-613",
  "level": "2",
  "url": "section-fourier-series.html#p-613",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "periodic functions "
},
{
  "id": "figure-fourier-periodic-function",
  "level": "2",
  "url": "section-fourier-series.html#figure-fourier-periodic-function",
  "type": "Figure",
  "number": "7.1.1",
  "title": "",
  "body": "A periodic function. The graph of a periodic function. "
},
{
  "id": "p-615",
  "level": "2",
  "url": "section-fourier-series.html#p-615",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "periodic functions "
},
{
  "id": "definition-fourier-periodic-functions",
  "level": "2",
  "url": "section-fourier-series.html#definition-fourier-periodic-functions",
  "type": "Definition",
  "number": "7.1.2",
  "title": "Periodic Functions.",
  "body": "Periodic Functions periodic functions -periodic (fundamental) period "
},
{
  "id": "figure-fourier-period-sine-cosine",
  "level": "2",
  "url": "section-fourier-series.html#figure-fourier-period-sine-cosine",
  "type": "Figure",
  "number": "7.1.3",
  "title": "",
  "body": "Graphs of   and  . An image showing the periodic nature of sine and cosine. "
},
{
  "id": "theorem-fourier-periodic-periods-of-sums-of-sinusoids",
  "level": "2",
  "url": "section-fourier-series.html#theorem-fourier-periodic-periods-of-sums-of-sinusoids",
  "type": "Theorem",
  "number": "7.1.4",
  "title": "Periods of Sums of Sinusoids.",
  "body": "Periods of Sums of Sinusoids \n              Let   and   where  .\n              Suppose that   where   represents the reduced fraction of  .\n              Then   has period given by\n               .\n             "
},
{
  "id": "example-fourier-periodic-finding-periods-of-sums-of-sinusoids",
  "level": "2",
  "url": "section-fourier-series.html#example-fourier-periodic-finding-periods-of-sums-of-sinusoids",
  "type": "Example",
  "number": "7.1.5",
  "title": "Finding Periods of Sums of Sinusoids.",
  "body": "Finding Periods of Sums of Sinusoids \n              Find the periods of   and  .\n             \n              For   we have  , which in lowest terms is  .\n              Therefore the period is  .\n              For  , we have   which is already in lowest terms.\n              Therefore its period is  .\n             "
},
{
  "id": "definition-fourier-periodic-trigonometric-polynomial-series",
  "level": "2",
  "url": "section-fourier-series.html#definition-fourier-periodic-trigonometric-polynomial-series",
  "type": "Definition",
  "number": "7.1.6",
  "title": "Trigonometric Polynomials and Series.",
  "body": "Trigonometric Polynomials and Series trigonometric polynomials and series trigonometric polynomial trigonometric series coefficients "
},
{
  "id": "p-625",
  "level": "2",
  "url": "section-fourier-series.html#p-625",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonality relations "
},
{
  "id": "theorem-orthogonality-relations",
  "level": "2",
  "url": "section-fourier-series.html#theorem-orthogonality-relations",
  "type": "Theorem",
  "number": "7.1.7",
  "title": "Orthogonality Relations.",
  "body": "Orthogonality Relations Orthogonality relations \n            Let   be whole numbers with  .\n            Then\n             .\n            Furthermore,\n             \n            and\n             .\n           "
},
{
  "id": "p-628",
  "level": "2",
  "url": "section-fourier-series.html#p-628",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier series "
},
{
  "id": "theorem-fourier-series-coefficients",
  "level": "2",
  "url": "section-fourier-series.html#theorem-fourier-series-coefficients",
  "type": "Theorem",
  "number": "7.1.8",
  "title": "Fourier Series Coefficients.",
  "body": "Fourier Series Coefficients Fourier series Coefficients \n            Let   be a periodic function with period  .\n            Then the Fourier coefficients of   are given by\n             \n           "
},
{
  "id": "example-fourier-series-of-x-cubed",
  "level": "2",
  "url": "section-fourier-series.html#example-fourier-series-of-x-cubed",
  "type": "Example",
  "number": "7.1.9",
  "title": "The Fourier series of <span class=\"process-math\">\\(x^{3}\\)<\/span>.",
  "body": "The Fourier series of  \n          Define   for  .\n          To find its Fourier series, we can just use the previous formulas to find the values of the coefficients   for  .\n          We know that\n           \n          As nasty as these are, the first two are actually very easy to compute.\n          Here's why:   and   are both  odd  functions, and the integral of any odd function in an interval that is symmetric about   is always   (since the areas cancel out).\n          So   for all  .\n          The last term is a bit more complicated, but we can use integration by parts (and I definitely recommend using a computer here) to show that\n           \n          If we plug in the limits of integration and simplify (again, computers are handy for this!), we get\n           \n          So the Fourier series for   is given by\n           \n         "
},
{
  "id": "theorem-pointwise-convergence-of-fourier-series",
  "level": "2",
  "url": "section-fourier-series.html#theorem-pointwise-convergence-of-fourier-series",
  "type": "Theorem",
  "number": "7.1.10",
  "title": "Fourier Series of Piecewise Continuous Functions.",
  "body": "Fourier Series of Piecewise Continuous Functions Fourier series convergence \n            Let   be a piecewise continuous function on the interval  , and suppose that it's also periodic with period  , and is differentiable everywhere that it's continuous.\n            Then the Fourier series of   converges to   except at the points where   is discontinuous.\n           "
},
{
  "id": "section-functions-of-arbitrary-period-even-and-odd-extensions",
  "level": "1",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html",
  "type": "Section",
  "number": "7.2",
  "title": "Functions of Arbitrary Period; Even and Odd Extensions",
  "body": "Functions of Arbitrary Period; Even and Odd Extensions \n        Now that we know how to find Fourier series of periodic functions with period  , we'd like to extend this idea to more general periodic functions, and then eventually to find Fourier series to represent (in some way) functions that aren't periodic.\n       Fourier Series of Functions of Arbitrary Period \n        We know how to find the Fourier series of a function of period   by using  .\n        So we'd like to adapt this to functions that have period   instead of  .\n        This actually won't be too hard to do, since any function of period   can be scaled into a function with period  .\n       \n        To see how, let   denote a function of period  .\n        Then we want to find a constant   so that   has period  , that is, so that\n         \n        For this to be true, we need  , or in other words  .\n        So if   has period   then   has period  , and furthermore   has Fourier coefficients given by\n         \n        Now we need to get everything back in terms of  , the function we started with.\n        We can do this by making the substitution  .\n        This gives us the following theorem after a little algebra.\n       Fourier Series of Functions with Arbitrary Period Fourier series Functions with period  \n            Let   be a function with period  .\n            Then the Fourier coefficients of   are given by\n             \n            and the corresponding Fourier series is\n             \n           Fourier Series of  \n          Let   for   and have period  .\n          We can find its Fourier series using  .\n          If we do so, we get\n           \n          So the Fourier series of   is given by\n           .\n         Even and Odd Extensions even and odd functions Even and Odd Functions Even and odd functions \n            Let   be a function.\n            We say that   is\n             \n           \n        In other words, a function   is even if and only if its graph is symmetric about the  -axis, and is odd if and only if its graph is symmetric about the origin.\n       even and odd extensions Even and Odd Extensions Fourier series Even and odd extensions \n            Let   be a function defined on  .\n            The even extension of   is the even periodic function defined by extending the graph of   on   to the rest of the real numbers in such a way that the resulting function is even and has period  .\n            The odd extension of   is defined similarly.\n           \n        Computing Fourier series for even and odd functions is simpler than the general case.\n       Fourier Coefficients of Even and Odd Functions Fourier series Fourier coefficients for even and odd functions \n            Let   be periodic with period  .\n            If   is even, then the Fourier coefficients of   satisfy\n             \n            for  .\n            If   is odd, then the Fourier coefficients of   are\n             \n           Even Extension of a Piecewise Function \n          Define the piecewise function   by\n           \n          Then the even extension of   is the new function   given by\n           \n          We can use   to help us find the Fourier series for  .\n          With a little bit of help, we get   and  , and so the Fourier series of   is\n           \n         "
},
{
  "id": "theorem-fourier-series-of-functions-with-arbitrary-period",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#theorem-fourier-series-of-functions-with-arbitrary-period",
  "type": "Theorem",
  "number": "7.2.1",
  "title": "Fourier Series of Functions with Arbitrary Period.",
  "body": "Fourier Series of Functions with Arbitrary Period Fourier series Functions with period  \n            Let   be a function with period  .\n            Then the Fourier coefficients of   are given by\n             \n            and the corresponding Fourier series is\n             \n           "
},
{
  "id": "example-fourier-series-of-x-squared",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#example-fourier-series-of-x-squared",
  "type": "Example",
  "number": "7.2.2",
  "title": "Fourier Series of <span class=\"process-math\">\\(f(x) = x^{2}\\)<\/span>.",
  "body": "Fourier Series of  \n          Let   for   and have period  .\n          We can find its Fourier series using  .\n          If we do so, we get\n           \n          So the Fourier series of   is given by\n           .\n         "
},
{
  "id": "p-640",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#p-640",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "even and odd functions "
},
{
  "id": "definition-even-and-odd-functions",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#definition-even-and-odd-functions",
  "type": "Definition",
  "number": "7.2.3",
  "title": "Even and Odd Functions.",
  "body": "Even and Odd Functions Even and odd functions \n            Let   be a function.\n            We say that   is\n             \n           "
},
{
  "id": "p-643",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#p-643",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "even and odd extensions "
},
{
  "id": "definition-even-and-odd-extensions",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#definition-even-and-odd-extensions",
  "type": "Definition",
  "number": "7.2.4",
  "title": "Even and Odd Extensions.",
  "body": "Even and Odd Extensions Fourier series Even and odd extensions \n            Let   be a function defined on  .\n            The even extension of   is the even periodic function defined by extending the graph of   on   to the rest of the real numbers in such a way that the resulting function is even and has period  .\n            The odd extension of   is defined similarly.\n           "
},
{
  "id": "theorem-fourier-coefficients-of-even-and-odd-functions",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#theorem-fourier-coefficients-of-even-and-odd-functions",
  "type": "Theorem",
  "number": "7.2.5",
  "title": "Fourier Coefficients of Even and Odd Functions.",
  "body": "Fourier Coefficients of Even and Odd Functions Fourier series Fourier coefficients for even and odd functions \n            Let   be periodic with period  .\n            If   is even, then the Fourier coefficients of   satisfy\n             \n            for  .\n            If   is odd, then the Fourier coefficients of   are\n             \n           "
},
{
  "id": "example-even-extension-of-a-piecewise-function",
  "level": "2",
  "url": "section-functions-of-arbitrary-period-even-and-odd-extensions.html#example-even-extension-of-a-piecewise-function",
  "type": "Example",
  "number": "7.2.6",
  "title": "Even Extension of a Piecewise Function.",
  "body": "Even Extension of a Piecewise Function \n          Define the piecewise function   by\n           \n          Then the even extension of   is the new function   given by\n           \n          We can use   to help us find the Fourier series for  .\n          With a little bit of help, we get   and  , and so the Fourier series of   is\n           \n         "
},
{
  "id": "section-complex-fourier-series-and-parsevals-identity",
  "level": "1",
  "url": "section-complex-fourier-series-and-parsevals-identity.html",
  "type": "Section",
  "number": "7.3",
  "title": "Complex Fourier Series and Parseval's Identity",
  "body": "Complex Fourier Series and Parseval's Identity \n        Although we have a decent formula for Fourier series (see  ), it's a little unwieldy due to the different expressions for   and  .\n        We can fix this, perhaps surprisingly, by using complex exponentials and Euler's formula.\n       Complex Fourier Series \n        First, recall  Euler's formula , which allows us to rewrite complex exponentials in terms of sine and cosine.\n       complex Fourier series Complex Fourier Series Fourier series complex form \n            Let   be a piecewise smooth function with period  .\n            Then the complex Fourier series of   is given by\n             \n            where\n             \n            This Fourier series converges to   wherever   is continuous.\n           \n            We need to use another orthogonality relation like we had in the real case, except now it will be written in terms of complex exponentials instead of sine and cosine.\n            In particular, the relation we will use is the following:\n             \n            So if we set   equal to a complex Fourier series and integrate both sides against   for   from   to  , we get\n             \n            where the last equality follows from the orthogonality relation we just proved.\n            Therefore\n             \n           Complex Fourier Series of Exponential Function \n          Let   on   and suppose that   is periodic with period  .\n          We want to find the complex Fourier series for  .\n          We can do this by finding the correct coefficients  :\n           \n          So we have\n           \n          for  , since this is where   has discontinuities.\n         \n        Although the complex Fourier series can be easier to compute in some cases, there may be cases where we'd like to go back to the real Fourier series. The following formula lets us do so.\n       Real Fourier Series from Complex Fourier Series Fourier series convert complex to real \n            Suppose   has the complex Fourier series\n             \n            Then the corresponding coefficients   and   for the real Fourier series\n             \n            are given by\n             \n           \n        The real Fourier series corresponding to the complex Fourier series for   from   has coefficients\n         \n        Either way, we get the following Fourier series.\n       Parseval's Identity Parseval's identity Parseval's Identity Fourier series Parseval's identity \n            Let   denote a piecewise-differentiable (real-valued) function on   with real Fourier coefficients   and complex Fourier coefficients  .\n            If   exists and is finite, then\n             \n           \n        One of the great strengths of this identity is that it allows potentially complicated sums to be computed using integrals instead.\n       The Basel Problem Basel problem \n          In the early   century, one of the most renowned problems in mathematics was the Basel problem, which asked for the value of\n           \n          Euler was the first person to show that the sum is actually   and it was this solution that made him famous Or at least math famous.  in the first place.\n          We can solve this by using Parseval's identity.\n          To do so, let   for  .\n          Then with a little bit of work we can find the (real) Fourier coefficients:\n           \n          By Parseval's identity, it then follows that\n           \n          which simplifies down to\n           \n          In other words,  \n         "
},
{
  "id": "p-650",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#p-650",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complex Fourier series "
},
{
  "id": "theorem-complex-fourier-series",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#theorem-complex-fourier-series",
  "type": "Theorem",
  "number": "7.3.1",
  "title": "Complex Fourier Series.",
  "body": "Complex Fourier Series Fourier series complex form \n            Let   be a piecewise smooth function with period  .\n            Then the complex Fourier series of   is given by\n             \n            where\n             \n            This Fourier series converges to   wherever   is continuous.\n           \n            We need to use another orthogonality relation like we had in the real case, except now it will be written in terms of complex exponentials instead of sine and cosine.\n            In particular, the relation we will use is the following:\n             \n            So if we set   equal to a complex Fourier series and integrate both sides against   for   from   to  , we get\n             \n            where the last equality follows from the orthogonality relation we just proved.\n            Therefore\n             \n           "
},
{
  "id": "example-complex-fourier-series-of-exponential-function",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#example-complex-fourier-series-of-exponential-function",
  "type": "Example",
  "number": "7.3.2",
  "title": "Complex Fourier Series of Exponential Function.",
  "body": "Complex Fourier Series of Exponential Function \n          Let   on   and suppose that   is periodic with period  .\n          We want to find the complex Fourier series for  .\n          We can do this by finding the correct coefficients  :\n           \n          So we have\n           \n          for  , since this is where   has discontinuities.\n         "
},
{
  "id": "theorem-real-fourier-series-from-complex-fourier-series",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#theorem-real-fourier-series-from-complex-fourier-series",
  "type": "Theorem",
  "number": "7.3.3",
  "title": "Real Fourier Series from Complex Fourier Series.",
  "body": "Real Fourier Series from Complex Fourier Series Fourier series convert complex to real \n            Suppose   has the complex Fourier series\n             \n            Then the corresponding coefficients   and   for the real Fourier series\n             \n            are given by\n             \n           "
},
{
  "id": "p-657",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#p-657",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Parseval's identity "
},
{
  "id": "theorem-parseval-s-identity",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#theorem-parseval-s-identity",
  "type": "Theorem",
  "number": "7.3.4",
  "title": "Parseval's Identity.",
  "body": "Parseval's Identity Fourier series Parseval's identity \n            Let   denote a piecewise-differentiable (real-valued) function on   with real Fourier coefficients   and complex Fourier coefficients  .\n            If   exists and is finite, then\n             \n           "
},
{
  "id": "example-the-basel-problem",
  "level": "2",
  "url": "section-complex-fourier-series-and-parsevals-identity.html#example-the-basel-problem",
  "type": "Example",
  "number": "7.3.5",
  "title": "The Basel Problem.",
  "body": "The Basel Problem Basel problem \n          In the early   century, one of the most renowned problems in mathematics was the Basel problem, which asked for the value of\n           \n          Euler was the first person to show that the sum is actually   and it was this solution that made him famous Or at least math famous.  in the first place.\n          We can solve this by using Parseval's identity.\n          To do so, let   for  .\n          Then with a little bit of work we can find the (real) Fourier coefficients:\n           \n          By Parseval's identity, it then follows that\n           \n          which simplifies down to\n           \n          In other words,  \n         "
},
{
  "id": "section-approximation-by-trigonometric-polynomials",
  "level": "1",
  "url": "section-approximation-by-trigonometric-polynomials.html",
  "type": "Section",
  "number": "7.4",
  "title": "Approximation by Trigonometric Polynomials",
  "body": "Approximation by Trigonometric Polynomials trigonometric polynomial of degree  \n      We can also consider approximating   with other trigonometric polynomials of degree  , say\n       .\n      We'd like to know how good the approximation is.\n      To do this, we need to define a measure of error.\n     Square Error square error \n      It turns out that if we are approximating   by trigonometric polynomials  , then the square error takes a specific form.\n     Square Error Formula \n          Let   be a function of period   with Fourier coefficients   and  , and let\n           \n          be a degree   trigonometric polynomial.\n          Then\n           .\n          The error   takes this minimum value if  .\n         Error from a Trigonometric Polynomial \n          Define   for   as in  , and recall that the Fourier series is given by\n           .\n          Find the trigonometric polynomial of degree   that best approximates   and give the corresponding error.\n         \n          The trigonometric polynomial of degree   that best approximates   is\n           .\n          The corresponding square error is\n           \n         Bessel's inequality Applying Bessel's Inequality \n          Let\n           .\n          Apply Bessel's inequality to this function.\n          What does Parseval's Identity say?\n         \n          If we find the Fourier coefficients of  , we get\n           .\n          By Bessel's inequality, we know that\n           \n          for any  .\n          As  , Parseval's gives the identity\n           .\n         "
},
{
  "id": "p-661",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#p-661",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trigonometric polynomial of degree  "
},
{
  "id": "definition-square-error",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#definition-square-error",
  "type": "Definition",
  "number": "7.4.1",
  "title": "Square Error.",
  "body": "Square Error square error "
},
{
  "id": "theorem-square-error-formula",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#theorem-square-error-formula",
  "type": "Theorem",
  "number": "7.4.2",
  "title": "Square Error Formula.",
  "body": "Square Error Formula \n          Let   be a function of period   with Fourier coefficients   and  , and let\n           \n          be a degree   trigonometric polynomial.\n          Then\n           .\n          The error   takes this minimum value if  .\n         "
},
{
  "id": "example-error-from-a-trigonometric-polynomial",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#example-error-from-a-trigonometric-polynomial",
  "type": "Example",
  "number": "7.4.3",
  "title": "Error from a Trigonometric Polynomial.",
  "body": "Error from a Trigonometric Polynomial \n          Define   for   as in  , and recall that the Fourier series is given by\n           .\n          Find the trigonometric polynomial of degree   that best approximates   and give the corresponding error.\n         \n          The trigonometric polynomial of degree   that best approximates   is\n           .\n          The corresponding square error is\n           \n         "
},
{
  "id": "p-668",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#p-668",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bessel's inequality "
},
{
  "id": "example-applying-bessel-s-inequality",
  "level": "2",
  "url": "section-approximation-by-trigonometric-polynomials.html#example-applying-bessel-s-inequality",
  "type": "Example",
  "number": "7.4.4",
  "title": "Applying Bessel's Inequality.",
  "body": "Applying Bessel's Inequality \n          Let\n           .\n          Apply Bessel's inequality to this function.\n          What does Parseval's Identity say?\n         \n          If we find the Fourier coefficients of  , we get\n           .\n          By Bessel's inequality, we know that\n           \n          for any  .\n          As  , Parseval's gives the identity\n           .\n         "
},
{
  "id": "section-the-fourier-transform",
  "level": "1",
  "url": "section-the-fourier-transform.html",
  "type": "Section",
  "number": "7.5",
  "title": "The Fourier Transform",
  "body": "The Fourier Transform \n      If   is a periodic function with period  , then we know how to find its Fourier series, both real and complex.\n      But what do we do if our function   is not periodic?\n      Can we still get a similar representation?\n     \n      Let   be some piecewise-differentiable function, not necessarily periodic.\n      Then we can't find it's Fourier series.\n      However, we can truncate the graph of  , and replace it with a periodic function that is equal to   on some interval  .\n      Then we can find the Fourier series of  this  function, which by   is given by   where\n       \n      So we can write\n       \n      wherever   is continuous on  .\n     Fourier transform Absolutely Integrable Functions Absolutely Integrable Functions \n          Let   be a piecewise continuous function.\n          Then   is absolutely integrable if  \n         The Fourier Transform Fourier Transform definition \n          Let   be an absolutely integrable piecewise continuous function.\n          The Fourier transform of   is the function   defined by\n           \n          We often write   to denote the Fourier transform as well.\n         Fourier transform of a piecewise exponential \n        Let   for   and   otherwise.\n        Then the Fourier transform of   is\n         \n       frequency domain frequency content inverse Fourier transform The Inverse Fourier Transform Fourier Transform inverse transform \n          The inverse Fourier transform of   is\n           \n         Fourier Inversion Theorem Fourier Transform inversion theorem \n          Let   be an absolutely integrable, piecewise differentiable function.\n          Then   wherever   is continuous.\n         Inverse Fourier transform of a step function \n        Define   by\n         \n        Then we can find the inverse transform using  :\n         \n       \n      The Fourier and inverse Fourier transforms are also linear like the Laplace transform: if   are constants and   are functions, then\n       \n      and\n       \n      The Fourier transform also works well with derivatives.\n     Fourier Transforms and Derivatives Fourier Transform transforms fo derivatives \n          Let   be differentiable with derivative  .\n          Suppose that both   and   are absolutely integrable.\n          Then\n           \n         \n      Fourier transforms also behave well with another type of convolution.\n     Convolution Theorem Fourier Transform convolution theorem \n          Suppose that   are piecewise continuous, bounded and absolutely integrable.\n          Define   by\n           \n          Then  \n         "
},
{
  "id": "p-673",
  "level": "2",
  "url": "section-the-fourier-transform.html#p-673",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Fourier transform "
},
{
  "id": "definition-absolutely-integrable-functions",
  "level": "2",
  "url": "section-the-fourier-transform.html#definition-absolutely-integrable-functions",
  "type": "Definition",
  "number": "7.5.1",
  "title": "Absolutely Integrable Functions.",
  "body": "Absolutely Integrable Functions Absolutely Integrable Functions \n          Let   be a piecewise continuous function.\n          Then   is absolutely integrable if  \n         "
},
{
  "id": "definition-the-fourier-transform",
  "level": "2",
  "url": "section-the-fourier-transform.html#definition-the-fourier-transform",
  "type": "Definition",
  "number": "7.5.2",
  "title": "The Fourier Transform.",
  "body": "The Fourier Transform Fourier Transform definition \n          Let   be an absolutely integrable piecewise continuous function.\n          The Fourier transform of   is the function   defined by\n           \n          We often write   to denote the Fourier transform as well.\n         "
},
{
  "id": "example-fourier-transform-of-a-piecewise-exponential",
  "level": "2",
  "url": "section-the-fourier-transform.html#example-fourier-transform-of-a-piecewise-exponential",
  "type": "Example",
  "number": "7.5.3",
  "title": "Fourier transform of a piecewise exponential.",
  "body": "Fourier transform of a piecewise exponential \n        Let   for   and   otherwise.\n        Then the Fourier transform of   is\n         \n       "
},
{
  "id": "p-677",
  "level": "2",
  "url": "section-the-fourier-transform.html#p-677",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "frequency domain frequency content inverse Fourier transform "
},
{
  "id": "definition-the-inverse-fourier-transform",
  "level": "2",
  "url": "section-the-fourier-transform.html#definition-the-inverse-fourier-transform",
  "type": "Definition",
  "number": "7.5.4",
  "title": "The Inverse Fourier Transform.",
  "body": "The Inverse Fourier Transform Fourier Transform inverse transform \n          The inverse Fourier transform of   is\n           \n         "
},
{
  "id": "theorem-fourier-integral-representation",
  "level": "2",
  "url": "section-the-fourier-transform.html#theorem-fourier-integral-representation",
  "type": "Theorem",
  "number": "7.5.5",
  "title": "Fourier Inversion Theorem.",
  "body": "Fourier Inversion Theorem Fourier Transform inversion theorem \n          Let   be an absolutely integrable, piecewise differentiable function.\n          Then   wherever   is continuous.\n         "
},
{
  "id": "example-inverse-fourier-transform-of-a-step-function",
  "level": "2",
  "url": "section-the-fourier-transform.html#example-inverse-fourier-transform-of-a-step-function",
  "type": "Example",
  "number": "7.5.6",
  "title": "Inverse Fourier transform of a step function.",
  "body": "Inverse Fourier transform of a step function \n        Define   by\n         \n        Then we can find the inverse transform using  :\n         \n       "
},
{
  "id": "theorem-fourier-transforms-and-derivatives",
  "level": "2",
  "url": "section-the-fourier-transform.html#theorem-fourier-transforms-and-derivatives",
  "type": "Theorem",
  "number": "7.5.7",
  "title": "Fourier Transforms and Derivatives.",
  "body": "Fourier Transforms and Derivatives Fourier Transform transforms fo derivatives \n          Let   be differentiable with derivative  .\n          Suppose that both   and   are absolutely integrable.\n          Then\n           \n         "
},
{
  "id": "theorem-convolution-theorem",
  "level": "2",
  "url": "section-the-fourier-transform.html#theorem-convolution-theorem",
  "type": "Theorem",
  "number": "7.5.8",
  "title": "Convolution Theorem.",
  "body": "Convolution Theorem Fourier Transform convolution theorem \n          Suppose that   are piecewise continuous, bounded and absolutely integrable.\n          Define   by\n           \n          Then  \n         "
},
{
  "id": "section-basic-concepts",
  "level": "1",
  "url": "section-basic-concepts.html",
  "type": "Section",
  "number": "8.1",
  "title": "Basic Concepts",
  "body": "Basic Concepts Partial derivatives and PDEs partial derivatives Partial derivatives Partial derivatives \n            Let   denote a function depending on the variables  .\n            Then the partial derivative of   with respect to   is found by differentiating   while treating   as a constant.\n            The partial derivative of   with respect to   is denoted by\n             \n            The partial derivative of   with respect to   is found similarly, and is likewise denoted by\n             \n           order Partial differential equations Definition Partial differential equation \n            A partial differential equation (PDE) is an equation involving one or more (partial) derivatives of an unknown function   that depends on two or more independent variables, usually thought of as time and position.\n            The highest derivative appearing in a PDE is called the order of the PDE.\n           boundary value problems boundary conditions Linear homogeneous PDEs and the superposition principle linear PDEs homogeneous solution Solution of the heat equation \n            Let  .\n            Show that this is a solution of the boundary value problem\n             \n           \n            To do so, we need to compute the partial derivatives of  \n           .\n           \n            So we see that  , which means that   is a solution of  .\n            Now it remains to show that   satisfies the boundary conditions, which we can do without too much trouble.\n           superposition principle Superposition principle partial differential equations Superposition principle \n            Let   and   denote arbitrary constants, and suppose that   and   are both solutions of the same linear homogeneous PDE.\n            Then\n             \n            is also a solution of the same PDE.\n           \n        The superposition principle is incredibly useful since it allows us to find general solutions of PDEs, which makes solving linear homogeneous PDEs somewhat tractable. If a PDE fails to be linear or homogeneous, the superposition principle is not guaranteed to hold.\n       Failure of the superposition principle \n            Consider the PDE given by\n             \n            This PDE fails to be linear because the second term involves multiplying   with its derivative  .\n            However, it's not too hard to check that   is a solution of the PDE, since if we plug this function into the PDE we get\n             .\n            However, the closely related function   is  not  a solution of the same PDE, since\n             \n            So the superposition principle does not hold for this PDE.\n           Important PDEs \n        As mentioned in the introduction, PDEs are useful for modeling quantities that depend on multiple independent variables.\n        We finish this section by listing several of the simplest and most studied PDEs.\n        where  . This is called the  heat  or  diffusion equation . This equation is used for modeling the spread of a quantity, such as how temperature diffuses along a rod.  where  . This is called the  wave equation , and is used for modeling vibrating motion, such as that along a plucked string. Laplacian \n        With this viewpoint, we can assign physical reasoning to the heat and wave equations:\n         \n             \n              The heat equation states that the time rate of change of the temperature is proportional to the difference between the temperature at   and the average values of nearby temperatures.\n              If the nearby average temperature is greater (i.e., the Laplacian is positive), then the temperature will increase.\n             \n           \n             \n              The wave equation states that the acceleration of the wave height is proportional to the difference between the height of the wave at   and the average height at nearby points.\n              If the nearby average height is greater (i.e., the Laplacian is positive), then the wave height will accelerate upwards.\n             \n           \n       \n        Our goal in the next section will be to determine how to solve PDEs such as these.\n       "
},
{
  "id": "p-688",
  "level": "2",
  "url": "section-basic-concepts.html#p-688",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial derivatives "
},
{
  "id": "definition-partial-derivatives",
  "level": "2",
  "url": "section-basic-concepts.html#definition-partial-derivatives",
  "type": "Definition",
  "number": "8.1.1",
  "title": "Partial derivatives.",
  "body": "Partial derivatives Partial derivatives \n            Let   denote a function depending on the variables  .\n            Then the partial derivative of   with respect to   is found by differentiating   while treating   as a constant.\n            The partial derivative of   with respect to   is denoted by\n             \n            The partial derivative of   with respect to   is found similarly, and is likewise denoted by\n             \n           "
},
{
  "id": "p-690",
  "level": "2",
  "url": "section-basic-concepts.html#p-690",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "definition-partial-differential-equation",
  "level": "2",
  "url": "section-basic-concepts.html#definition-partial-differential-equation",
  "type": "Definition",
  "number": "8.1.2",
  "title": "Partial differential equation.",
  "body": "Partial differential equations Definition Partial differential equation \n            A partial differential equation (PDE) is an equation involving one or more (partial) derivatives of an unknown function   that depends on two or more independent variables, usually thought of as time and position.\n            The highest derivative appearing in a PDE is called the order of the PDE.\n           "
},
{
  "id": "p-692",
  "level": "2",
  "url": "section-basic-concepts.html#p-692",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boundary value problems boundary conditions "
},
{
  "id": "p-693",
  "level": "2",
  "url": "section-basic-concepts.html#p-693",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear PDEs homogeneous solution "
},
{
  "id": "example-solution-of-the-heat-equation",
  "level": "2",
  "url": "section-basic-concepts.html#example-solution-of-the-heat-equation",
  "type": "Example",
  "number": "8.1.3",
  "title": "Solution of the heat equation.",
  "body": "Solution of the heat equation \n            Let  .\n            Show that this is a solution of the boundary value problem\n             \n           \n            To do so, we need to compute the partial derivatives of  \n           .\n           \n            So we see that  , which means that   is a solution of  .\n            Now it remains to show that   satisfies the boundary conditions, which we can do without too much trouble.\n           "
},
{
  "id": "p-697",
  "level": "2",
  "url": "section-basic-concepts.html#p-697",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "superposition principle "
},
{
  "id": "principle-superposition-principle",
  "level": "2",
  "url": "section-basic-concepts.html#principle-superposition-principle",
  "type": "Principle",
  "number": "8.1.4",
  "title": "Superposition principle.",
  "body": "Superposition principle partial differential equations Superposition principle \n            Let   and   denote arbitrary constants, and suppose that   and   are both solutions of the same linear homogeneous PDE.\n            Then\n             \n            is also a solution of the same PDE.\n           "
},
{
  "id": "example-failure-of-the-superposition-principle",
  "level": "2",
  "url": "section-basic-concepts.html#example-failure-of-the-superposition-principle",
  "type": "Example",
  "number": "8.1.5",
  "title": "Failure of the superposition principle.",
  "body": "Failure of the superposition principle \n            Consider the PDE given by\n             \n            This PDE fails to be linear because the second term involves multiplying   with its derivative  .\n            However, it's not too hard to check that   is a solution of the PDE, since if we plug this function into the PDE we get\n             .\n            However, the closely related function   is  not  a solution of the same PDE, since\n             \n            So the superposition principle does not hold for this PDE.\n           "
},
{
  "id": "p-702",
  "level": "2",
  "url": "section-basic-concepts.html#p-702",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laplacian "
},
{
  "id": "section-wave-equation-and-separation-of-variables",
  "level": "1",
  "url": "section-wave-equation-and-separation-of-variables.html",
  "type": "Section",
  "number": "8.2",
  "title": "The Wave Equation and Separation of Variables",
  "body": "The Wave Equation and Separation of Variables separation of variables \n      Consider a one-dimensional string of length   that vibrates in the vertical direction.\n      The vertical displacement of such a string depends on the horizontal position along the string,  , and the time  .\n      So let   denote the vertical displacement of the string at position   and at time  .\n      If we assume that the string has constant density and that the force of gravity of the string is negligible, then   satisfies the wave equation\n       \n      for some constant  .\n     boundary conditions .\n     initial conditions .\n     \n      Our goal will be to find   subject to these conditions.\n      To start, assume that  \n      If we plug this into  , then we get \n        If we assume that   are both nonzero, then we can rewrite this to get\n         \n        This may not look that helpful, but it actually places some serious restrictions on   and  .\n        The left hand side of this equation only depends on   whereas the right hand side depends only on  .\n        So the only way for this equation to be true for  all    is if both sides are constant:\n         \n        for some  .\n        This now gives us two separate  ordinary  differential equations for   and  : .\n         \n          We can add a few more restrictions to these ODEs to help us solve them.\n          Note that the boundary conditions   force either   or   for all  , which leads to  .\n          So to avoid this trivial solution, we'll set  .\n         \n          We'll solve   first since we have extra information to use.\n          So to start, suppose that   and write   for some nonzero  .\n          Then   becomes   and has solution given by\n           \n         \n          Now,   forces  , so we get  .\n          However, since   as well, we get  .\n          But the only way to solve this is to set   since   only if  .\n          So in other words, if we assume that  , then the only way to solve   is to set  , which also forces  .\n          Obviously, this isn't very useful.\n          Similarly, if we assume that   then we get the same problem.\n          So let's assume that   for some nonzero  .\n          Then   becomes  , which has solution\n         \n        The condition   forces  , and the second boundary condition   forces  .\n        We want to avoid setting   equal to   since this would give us   again, so we'll set   instead.\n         This  tells us that   for some integer  , or just  .\n        So nontrivial solutions of   that satisfy the boundary conditions   can occur only if   where   and  .\n        For each choice of   (ignoring sign), we get the solution  .\n       \n        Now we move on to solving  , but we still need to keep the condition   for  .\n        If we do so, then   becomes  , which has solutions given by\n         \n      where  .\n     \n      So this means that every function of the form\n       \n      is a solution of   subject to the boundary conditions  .\n      It also follows from the superposition principle that any (finite) linear combination of these functions will give another solution that satisfies the boundary conditions.\n     \n      However, this does  not  guarantee that we can solve for the initial conditions in  .\n      To give ourselves as general a solution as possible, we will guess that the solution to the wave equation is actually a linear combination of all possible  .\n      That is, we'll say that\n     \n      Now we'll use the initial conditions to actually determine  .\n      To start, note that we must have\n       \n       This is a Fourier series , and in particular it's the Fourier series of the odd extension of   with period  .\n       See  . \n      So it follows that\n     \n      Similarly, we must have\n       \n      This is the Fourier series for the odd extension of   with period  .\n      Therefore\n       \n      or just\n       \n     \n      We can put all of this together into the following theorem.\n     Wave equation solution Solution of the Wave Equation \n          The solution of the wave equation   with boundary conditions   and initial conditions   is given by\n           \n          where\n           \n          and   for  .\n         A string with fixed ends \n          A string at rest has unit length, and is fixed at both ends.\n          Suppose that the string is now stretched into the triangular shape given by the graph of\n           \n          The string is then released at time  .\n          Given  , find the function   that models the vertical displacement of the string at position   at time  .\n         \n          We can model   as the solution of the wave equation\n           \n          with boundary conditions   and initial conditions\n           \n          We can find   from  .\n         \n          Using the Sage cell below, we get\n           \n          and since   this forces   as well.\n          Hence the solution is\n           \n         "
},
{
  "id": "p-707",
  "level": "2",
  "url": "section-wave-equation-and-separation-of-variables.html#p-707",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separation of variables "
},
{
  "id": "p-709",
  "level": "2",
  "url": "section-wave-equation-and-separation-of-variables.html#p-709",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boundary conditions "
},
{
  "id": "p-710",
  "level": "2",
  "url": "section-wave-equation-and-separation-of-variables.html#p-710",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial conditions "
},
{
  "id": "theorem-solution-of-the-wave-equation",
  "level": "2",
  "url": "section-wave-equation-and-separation-of-variables.html#theorem-solution-of-the-wave-equation",
  "type": "Theorem",
  "number": "8.2.1",
  "title": "Solution of the Wave Equation.",
  "body": "Wave equation solution Solution of the Wave Equation \n          The solution of the wave equation   with boundary conditions   and initial conditions   is given by\n           \n          where\n           \n          and   for  .\n         "
},
{
  "id": "example-a-string-with-fixed-ends",
  "level": "2",
  "url": "section-wave-equation-and-separation-of-variables.html#example-a-string-with-fixed-ends",
  "type": "Example",
  "number": "8.2.2",
  "title": "A string with fixed ends.",
  "body": "A string with fixed ends \n          A string at rest has unit length, and is fixed at both ends.\n          Suppose that the string is now stretched into the triangular shape given by the graph of\n           \n          The string is then released at time  .\n          Given  , find the function   that models the vertical displacement of the string at position   at time  .\n         \n          We can model   as the solution of the wave equation\n           \n          with boundary conditions   and initial conditions\n           \n          We can find   from  .\n         \n          Using the Sage cell below, we get\n           \n          and since   this forces   as well.\n          Hence the solution is\n           \n         "
},
{
  "id": "section-d-alembert-s-solution-of-the-wave-equation",
  "level": "1",
  "url": "section-d-alembert-s-solution-of-the-wave-equation.html",
  "type": "Section",
  "number": "8.3",
  "title": "d'Alembert's Solution of the Wave Equation",
  "body": "d'Alembert's Solution of the Wave Equation \n      Although   solves the wave equation, it's a little complicated to work with.\n      We'll try to express the solution in a simpler way.\n      In particular, we'll start by trying to simplify the solution of the boundary value problem in  .\n      In that example, we saw that the solution of\n       \n      with boundary conditions   and initial conditions\n       \n      was given by\n       \n      where   was the   Fourier coefficient of the odd extension of  .\n     \n      If we look at this, it looks kind of like a Fourier series except that we have a product of sine and cosine.\n      We can make this look more like a Fourier series by using one of the product-to-sum formulas from trigonometry:\n     \n      Using this formula, we get\n       \n      which means we can write the solution   as\n       \n     \n      Here's how this helps us.\n      Since   is the   Fourier coefficient of the odd extension of  , each of these sums must be a Fourier series for the odd extension of  !\n      In particular, if we denote the odd extension by   then we can simply say that\n     \n      We can extend this to other boundary value problems without an initial velocity component.\n     d'Alembert's Solution without Initial Velocity Wave equation d'Alembert's solution zero initial velocity \n          Let  , and consider the boundary value problem\n         .\n         \n          Assuming that   is piecewise twice differentiable, then the solution of this boundary value problem is given by\n           \n          where   denotes the odd extension of  .\n         Boundary value problem with sinusoidal deflection \n          A string of length   has initial deflection, or position, given by   for  .\n          The string is released at time  .\n          Suppose  .\n          Find  .\n         \n          We can do so very easily with  , since the initial velocity of the string is  .\n          So we have\n           \n          where   is the odd extension of  .\n          However, since   is itself an odd function, it follows that the odd extension is simply  .\n          Therefore the solution is\n         \n      d'Alembert's solution is very useful if we want to model a vibrating string with zero initial velocity.\n      But what can we do if the string has an initial velocity?\n      d'Alembert's solution actually suggests a possible approach to take.\n      If we look at  , it essentially states that the solution of the wave equation (assuming zero initial velocity) is the superposition of the rightward traveling wave   with the leftward traveling wave  .\n      This suggests that superpositions of waves are fundamental to solutions of the wave equation.\n     \n      We'll try something similar for the case  .\n      We'll assume that adding in this initial velocity also adds in a new rightward traveling wave   and a new leftward traveling wave   into our solution  , so that we have\n     \n      Now we'll try to use the initial conditions to find   and  .\n      Now, since we need   this forces\n     \n      Therefore our solution becomes\n       \n      If we use the second initial condition   then we get\n       \n     \n      Now we can integrate both sides to find  !\n      So there exists some   such that\n       \n      Therefore\n       .\n      This gives the following adjustment to d'Alembert's solution.\n     d'Alembert's Solution with Initial Velocity Wave equation d'Alembert's solution with initial velocity \n          Let  , and consider the boundary value problem\n         \n          Assuming that   is piecewise twice differentiable and that   is piecewise continuous, then the solution of this boundary value problem is given by\n           \n          where   denotes the odd extension of   and   the odd extension of  .\n         Boundary value problem with sinusoidal deflection and initial velocity \n          Consider a string of length  , initial deflection   and initial velocity  .\n          Assume that  .\n          Find  , the vertical displacement at  .\n         \n          The vertical displacement   of the string is given by\n         .\n       "
},
{
  "id": "theorem-d-alembert-s-solution-without-initial-velocity",
  "level": "2",
  "url": "section-d-alembert-s-solution-of-the-wave-equation.html#theorem-d-alembert-s-solution-without-initial-velocity",
  "type": "Theorem",
  "number": "8.3.1",
  "title": "d'Alembert's Solution without Initial Velocity.",
  "body": "d'Alembert's Solution without Initial Velocity Wave equation d'Alembert's solution zero initial velocity \n          Let  , and consider the boundary value problem\n         .\n         \n          Assuming that   is piecewise twice differentiable, then the solution of this boundary value problem is given by\n           \n          where   denotes the odd extension of  .\n         "
},
{
  "id": "example-boundary-value-problem-with-sinusoidal-deflection",
  "level": "2",
  "url": "section-d-alembert-s-solution-of-the-wave-equation.html#example-boundary-value-problem-with-sinusoidal-deflection",
  "type": "Example",
  "number": "8.3.2",
  "title": "Boundary value problem with sinusoidal deflection.",
  "body": "Boundary value problem with sinusoidal deflection \n          A string of length   has initial deflection, or position, given by   for  .\n          The string is released at time  .\n          Suppose  .\n          Find  .\n         \n          We can do so very easily with  , since the initial velocity of the string is  .\n          So we have\n           \n          where   is the odd extension of  .\n          However, since   is itself an odd function, it follows that the odd extension is simply  .\n          Therefore the solution is\n         "
},
{
  "id": "theorem-d-alembert-s-solution-with-initial-velocity",
  "level": "2",
  "url": "section-d-alembert-s-solution-of-the-wave-equation.html#theorem-d-alembert-s-solution-with-initial-velocity",
  "type": "Theorem",
  "number": "8.3.3",
  "title": "d'Alembert's Solution with Initial Velocity.",
  "body": "d'Alembert's Solution with Initial Velocity Wave equation d'Alembert's solution with initial velocity \n          Let  , and consider the boundary value problem\n         \n          Assuming that   is piecewise twice differentiable and that   is piecewise continuous, then the solution of this boundary value problem is given by\n           \n          where   denotes the odd extension of   and   the odd extension of  .\n         "
},
{
  "id": "example-boundary-value-problem-with-sinusoidal-deflection-and-initial-velocity",
  "level": "2",
  "url": "section-d-alembert-s-solution-of-the-wave-equation.html#example-boundary-value-problem-with-sinusoidal-deflection-and-initial-velocity",
  "type": "Example",
  "number": "8.3.4",
  "title": "Boundary value problem with sinusoidal deflection and initial velocity.",
  "body": "Boundary value problem with sinusoidal deflection and initial velocity \n          Consider a string of length  , initial deflection   and initial velocity  .\n          Assume that  .\n          Find  , the vertical displacement at  .\n         \n          The vertical displacement   of the string is given by\n         .\n       "
},
{
  "id": "section-the-heat-equation",
  "level": "1",
  "url": "section-the-heat-equation.html",
  "type": "Section",
  "number": "8.4",
  "title": "The Heat Equation",
  "body": "The Heat Equation heat equation .\n       one-dimensional heat equation Bar with ends fixed at  \n        We will start by solving the heat equation for the case where the bar has ends which are fixed at temperature  .\n        If we're given an initial temperature distribution  , then   is the solution of the boundary value problem\n       .\n       \n        We can solve this boundary value problem using separation of variables, much as we did in  .\n        So to start, we assume that  .\n        If we plug this into the heat equation  , then we get\n       \n        Now we have three separate cases to consider for  :   or  .\n        Just as with the wave equation, the only case that doesn't lead to trivial solutions is  .\n        In this case   leads to the two ODEs given by\n       .\n       \n        The boundary conditions in   force  , and the only nontrivial solutions of   occur when  .\n        So we get the solutions  , just as with the wave equation.\n       \n        For the second ODE, we readily solve it to obtain   where   as before.\n        So every function\n         \n        is a solution of   that satisfies the boundary equations  .\n        In order to satisfy the arbitrary initial condition  , we take an infinite sum of the functions   to get\n       \n        Finally, if we plug in   and use the initial condition  , we get  .\n        This is just the Fourier series of the odd extension of  , which lets us find  .\n        We summarize all of this in the following theorem.\n       Heat equation fixed ends Solution of the Heat Equation with Fixed Temperature \n            The solution of the heat equation   satisfying the boundary conditions   and initial condition   is given by\n             \n            where\n             \n           Sinusoidal initial temperature \n            Consider a thin metal bar of length   placed on the  -axis, with one end at   and the other at  .\n            Assuming that   and that the initial temperature is   for  , find the temperature distribution using  .\n           \n            The temperature is the function   given by\n             \n            where   is the   coefficient of the Fourier series of the odd extension of  .\n            The odd extension of   is  .\n            Furthermore, the Fourier series of   is clearly just  .\n           \n            So in other words,\n             \n            Hence\n             \n           "
},
{
  "id": "p-745",
  "level": "2",
  "url": "section-the-heat-equation.html#p-745",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "heat equation "
},
{
  "id": "p-746",
  "level": "2",
  "url": "section-the-heat-equation.html#p-746",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-dimensional heat equation "
},
{
  "id": "theorem-solution-of-the-heat-equation-with-fixed-temperature",
  "level": "2",
  "url": "section-the-heat-equation.html#theorem-solution-of-the-heat-equation-with-fixed-temperature",
  "type": "Theorem",
  "number": "8.4.1",
  "title": "Solution of the Heat Equation with Fixed Temperature.",
  "body": "Heat equation fixed ends Solution of the Heat Equation with Fixed Temperature \n            The solution of the heat equation   satisfying the boundary conditions   and initial condition   is given by\n             \n            where\n             \n           "
},
{
  "id": "example-sinusoidal-initial-temperature",
  "level": "2",
  "url": "section-the-heat-equation.html#example-sinusoidal-initial-temperature",
  "type": "Example",
  "number": "8.4.2",
  "title": "Sinusoidal initial temperature.",
  "body": "Sinusoidal initial temperature \n            Consider a thin metal bar of length   placed on the  -axis, with one end at   and the other at  .\n            Assuming that   and that the initial temperature is   for  , find the temperature distribution using  .\n           \n            The temperature is the function   given by\n             \n            where   is the   coefficient of the Fourier series of the odd extension of  .\n            The odd extension of   is  .\n            Furthermore, the Fourier series of   is clearly just  .\n           \n            So in other words,\n             \n            Hence\n             \n           "
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
