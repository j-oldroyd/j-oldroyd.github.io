var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Annual Edition 2022  j-oldroyd.github.io\/wvwc-advanced-engineering-math\/output\/html\/wvwc-advanced-engineering-math.html  copyright  "
},
{
  "id": "acknowledgement",
  "level": "1",
  "url": "acknowledgement.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": "    "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This document was created to serve as a set of lecture notes for Advanced Engineering Mathematics (MATH 301) at West Virginia Wesleyan College. The goal of this course is to become familiar with basic concepts in linear algebra and multivariable calculus. As such, the course is naturally divided into two more or less independent parts: and .  This document also endeavors to include many examples that use code via Sage Cells ( ), since many computations in linear algebra and multivariable calculus are tedious at best to do by hand. The programming languages used are Octave ( ) and Sage ( ), which are both free and open source systems. Familiarity with these programming languages is neither assumed nor required for this course.   "
},
{
  "id": "section-norm",
  "level": "1",
  "url": "section-norm.html",
  "type": "Section",
  "number": "1.1",
  "title": "Norm",
  "body": " Norm  "
},
{
  "id": "section-distance",
  "level": "1",
  "url": "section-distance.html",
  "type": "Section",
  "number": "1.2",
  "title": "Distance",
  "body": " Distance  "
},
{
  "id": "section-standard-deviation",
  "level": "1",
  "url": "section-standard-deviation.html",
  "type": "Section",
  "number": "1.3",
  "title": "Standard Deviation",
  "body": " Standard Deviation  Given a vector , we define the de-meaned vector by where . We then define the standard deviation of the entries of by .  The standard deviation is a measure of the spread of the entries of from the mean of the entries. The closer the standard deviation is to , the less the entries differ from the mean.   Computing standard deviations   Compute the standard deviations for each of the following vectors: .   The mean and standard deviation of a vector satisfy the following formula: . The standard deviation also satisfies the following inequality.   Chebyshev's Inequality   Suppose that entries of satisfy . Then .    This inequality can be rearranged to get . The quantity on the left is the ratio of entries of that are within units of . If we write , the inequality becomes . For instance, this inequality tells us that the fraction of entries of within two standard deviations (so ) of the mean is at least , or at least . Conversely, at most of entries are more than two standard deviations away from the mean.   Octave can compute the standard deviation as follows using the std() command.    Return and risk of an investment   Suppose that is a vector whose entries represent a time series of returns from an investment over different periods. The mean return is and the standard deviation (or risk ) is . What is the largest possible fraction of periods that resulted in a loss?    A loss is represented by any entry of that is negative: . Since , this happens only if .  Here's how we can use Chebyshev's inequality to estimate the fraction of periods resulting in a loss. Recall that the fraction of entries of such that satisfies . In our case, and so .    The standard deviation satisfies the following properties: and .  It's occasionally useful to standardize a vector by replacing it with a vector with mean and standard deviation by the following formula: .   Standardizing a vector   Standardize the vector .    We have and so .    "
},
{
  "id": "section-standard-deviation-2",
  "level": "2",
  "url": "section-standard-deviation.html#section-standard-deviation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "de-meaned standard deviation "
},
{
  "id": "example-computing-standard-deviations",
  "level": "2",
  "url": "section-standard-deviation.html#example-computing-standard-deviations",
  "type": "Example",
  "number": "1.3.1",
  "title": "Computing standard deviations.",
  "body": " Computing standard deviations   Compute the standard deviations for each of the following vectors: .   The mean and standard deviation of a vector satisfy the following formula: . The standard deviation also satisfies the following inequality.   Chebyshev's Inequality   Suppose that entries of satisfy . Then .    This inequality can be rearranged to get . The quantity on the left is the ratio of entries of that are within units of . If we write , the inequality becomes . For instance, this inequality tells us that the fraction of entries of within two standard deviations (so ) of the mean is at least , or at least . Conversely, at most of entries are more than two standard deviations away from the mean.  "
},
{
  "id": "example-return-and-risk-of-an-investment",
  "level": "2",
  "url": "section-standard-deviation.html#example-return-and-risk-of-an-investment",
  "type": "Example",
  "number": "1.3.3",
  "title": "Return and risk of an investment.",
  "body": " Return and risk of an investment   Suppose that is a vector whose entries represent a time series of returns from an investment over different periods. The mean return is and the standard deviation (or risk ) is . What is the largest possible fraction of periods that resulted in a loss?    A loss is represented by any entry of that is negative: . Since , this happens only if .  Here's how we can use Chebyshev's inequality to estimate the fraction of periods resulting in a loss. Recall that the fraction of entries of such that satisfies . In our case, and so .   "
},
{
  "id": "section-standard-deviation-9",
  "level": "2",
  "url": "section-standard-deviation.html#section-standard-deviation-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standardize "
},
{
  "id": "example-standardizing-a-vector",
  "level": "2",
  "url": "section-standard-deviation.html#example-standardizing-a-vector",
  "type": "Example",
  "number": "1.3.4",
  "title": "Standardizing a vector.",
  "body": " Standardizing a vector   Standardize the vector .    We have and so .   "
},
{
  "id": "section-angle",
  "level": "1",
  "url": "section-angle.html",
  "type": "Section",
  "number": "1.4",
  "title": "Angle",
  "body": " Angle  The inner product is closely related to the notion of the angle between two vectors. This is sometimes taken as the definition of the dot product in two and three dimensions, but more generally follows from the Cauchy-Schwarz inequality .   Cauchy-Schwarz Inequality    .    Note that .    We have equality in if and only if the vectors are scalar multiples of each other. Furthermore, if both vectors are nonzero then , which falls inside the range of the cosine function.  We can now define the angle between two vectors using the inner product: . This measures how aligned the vectors and are.   Alignment of vectors   Determine the alignment of the following vectors: .    We have , which corresponds to an angle between and . Hence the vectors meet at an obtuse angle.    When considering only unit vectors, the angle takes on another important interpretation: it represents distances between vectors.   Distances on the unit circle   Compute pairwise distances between .    An important concept in statistics is the correlation coefficient . Given two vectors with de-meaned representatives , their correlation coefficient is defined to be .  "
},
{
  "id": "theorem-cauchy-schwarz-inequality",
  "level": "2",
  "url": "section-angle.html#theorem-cauchy-schwarz-inequality",
  "type": "Theorem",
  "number": "1.4.1",
  "title": "Cauchy-Schwarz Inequality.",
  "body": " Cauchy-Schwarz Inequality    .    Note that .   "
},
{
  "id": "section-angle-5",
  "level": "2",
  "url": "section-angle.html#section-angle-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "angle "
},
{
  "id": "example-alignment-of-vectors",
  "level": "2",
  "url": "section-angle.html#example-alignment-of-vectors",
  "type": "Example",
  "number": "1.4.2",
  "title": "Alignment of vectors.",
  "body": " Alignment of vectors   Determine the alignment of the following vectors: .    We have , which corresponds to an angle between and . Hence the vectors meet at an obtuse angle.   "
},
{
  "id": "example-distances-on-the-unit-circle",
  "level": "2",
  "url": "section-angle.html#example-distances-on-the-unit-circle",
  "type": "Example",
  "number": "1.4.3",
  "title": "Distances on the unit circle.",
  "body": " Distances on the unit circle   Compute pairwise distances between .   "
},
{
  "id": "section-linear-independence-dependence",
  "level": "1",
  "url": "section-linear-independence-dependence.html",
  "type": "Section",
  "number": "2.1",
  "title": "Linear Independence and Dependence",
  "body": " Linear Independence and Dependence  One of the fundamental concepts in linear algebra is that of a linear combination of several vectors. Given a collection , a linear combination of these vectors is a sum of the form .   Finding linear combinations   Let . Compute .    In the last example, we saw that itself can be written as a linear combination of the other two vectors. Equivalently, . This is an example of linear dependence . If a set of vectors is not linearly dependent, we say that it is linearly independent .   Linearly independent set   Determine if forms a linearly independent collection of vectors.    Linearly independent collections have the useful property that linear combinations of vectors in the collection are unique. On the other hand, any vector that can be written as the linear combination of linearly dependent vectors can be written as infinitely many linear combinations of those same vectors. This property makes linearly independent sets useful for coordinate systems.  Determining whether or not a collection of vectors is linearly independent can be done in several ways, but the most fundamental method is row reduction . This involves placing the vectors as columns of a single matrix and then reducing the matrix into an echelon form. Columns in the echelon form that have a leading correspond to a linearly independent subset of the vectors. If we go a step further and find the reduced echelon form, we can also read off how to write vectors in the collection as a linear combination of the others.   Echelon forms and linear independence   Let . To determine if these vectors are linearly independent and what linear dependence relations exist among these vectors, we use Octave to compute the reduced row echelon form with the rref command.   The RREF of our matrix shows that the first, second and fourth vectors form a linearly independent set. Furthermore, Hence, the first three vectors form a dependent set.    "
},
{
  "id": "example-finding-linear-combinations",
  "level": "2",
  "url": "section-linear-independence-dependence.html#example-finding-linear-combinations",
  "type": "Example",
  "number": "2.1.1",
  "title": "Finding linear combinations.",
  "body": " Finding linear combinations   Let . Compute .   "
},
{
  "id": "section-linear-independence-dependence-4",
  "level": "2",
  "url": "section-linear-independence-dependence.html#section-linear-independence-dependence-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear dependence linearly independent "
},
{
  "id": "example-linearly-independent-set",
  "level": "2",
  "url": "section-linear-independence-dependence.html#example-linearly-independent-set",
  "type": "Example",
  "number": "2.1.2",
  "title": "Linearly independent set.",
  "body": " Linearly independent set   Determine if forms a linearly independent collection of vectors.   "
},
{
  "id": "example-echelon-forms-and-linear-independence",
  "level": "2",
  "url": "section-linear-independence-dependence.html#example-echelon-forms-and-linear-independence",
  "type": "Example",
  "number": "2.1.3",
  "title": "Echelon forms and linear independence.",
  "body": " Echelon forms and linear independence   Let . To determine if these vectors are linearly independent and what linear dependence relations exist among these vectors, we use Octave to compute the reduced row echelon form with the rref command.   The RREF of our matrix shows that the first, second and fourth vectors form a linearly independent set. Furthermore, Hence, the first three vectors form a dependent set.   "
},
{
  "id": "section-basis",
  "level": "1",
  "url": "section-basis.html",
  "type": "Section",
  "number": "2.2",
  "title": "Basis",
  "body": " Basis  The size of a linearly independent set is limited by the dimension of a space. In particular, any linearly independent set of -vectors has at most vectors. Conversely, any collection of -vectors with more than vectors in the set must be linearly dependent.  Linearly independent sets that are as large as possible are special in linear algebra and are called bases . The defining characteristic of a basis is the following expansion property : if and if is a basis for , then there exists exactly one linear combination of the basis vectors that equals .   Bases in   One example of a basis in is the standard basis. Another example is the collection from .    A basis is essentially a coordinate system to work with. We will usually work with the coordinate system determined by the standard basis, but other coordinate systems are useful as well. In particular, it is often worthwhile to choose a basis that leads to sparse coordinates .   Images and bases   Consider the problem of representing a grayscale image using vectors. This can be done using -vectors whose entries run from (black) to (white). Let's also suppose that the images we are representing are known to have a consistent cross pattern through the middle. The color of the cross varies, but it always appears in our images. In this case a useful basis for representing these images might be   For example, consider the following image rendered using Octave:   This image has nine pixels and would therefore seem to require nine separate values to transmit correctly. However, if we use our basis vectors to express then we get .     SUGGESTED PROBLEMS: 5.2   "
},
{
  "id": "section-basis-3",
  "level": "2",
  "url": "section-basis.html#section-basis-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bases "
},
{
  "id": "example-bases-in-",
  "level": "2",
  "url": "section-basis.html#example-bases-in-",
  "type": "Example",
  "number": "2.2.1",
  "title": "Bases in <span class=\"process-math\">\\(\\RR^3\\)<\/span>.",
  "body": " Bases in   One example of a basis in is the standard basis. Another example is the collection from .   "
},
{
  "id": "example-images-and-bases",
  "level": "2",
  "url": "section-basis.html#example-images-and-bases",
  "type": "Example",
  "number": "2.2.2",
  "title": "Images and bases.",
  "body": " Images and bases   Consider the problem of representing a grayscale image using vectors. This can be done using -vectors whose entries run from (black) to (white). Let's also suppose that the images we are representing are known to have a consistent cross pattern through the middle. The color of the cross varies, but it always appears in our images. In this case a useful basis for representing these images might be   For example, consider the following image rendered using Octave:   This image has nine pixels and would therefore seem to require nine separate values to transmit correctly. However, if we use our basis vectors to express then we get .   "
},
{
  "id": "section-orthonormal-vectors",
  "level": "1",
  "url": "section-orthonormal-vectors.html",
  "type": "Section",
  "number": "2.3",
  "title": "Orthonormal Vectors",
  "body": " Orthonormal Vectors  A collection of vectors is orthonormal if it is both orthogonal and unit-normed. The usual example of an orthonormal set is the collection of coordinate unit vectors in  , but these are not the only ones.   Testing orthonormality   Determine if the given vectors are orthonormal.        Orthogonal collections of nonzero vectors are always linearly independent: if for orthogonal vectors, then taking the inner product of this sum with the vector gives .  Bases that are also orthonormal (ONBs) have special importance in linear algebra: if for orthonormal vectors, then . Since a basis can be used to express any vector in our space, the previous equation makes it simple to find the corresponding coefficients to expand an arbitrary vector in terms of an ONB.   Expansion in terms of an ONB           "
},
{
  "id": "section-orthonormal-vectors-2",
  "level": "2",
  "url": "section-orthonormal-vectors.html#section-orthonormal-vectors-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthonormal "
},
{
  "id": "example-testing-orthonormality",
  "level": "2",
  "url": "section-orthonormal-vectors.html#example-testing-orthonormality",
  "type": "Example",
  "number": "2.3.1",
  "title": "Testing orthonormality.",
  "body": " Testing orthonormality   Determine if the given vectors are orthonormal.       "
},
{
  "id": "example-expansion-in-terms-of-an-onb",
  "level": "2",
  "url": "section-orthonormal-vectors.html#example-expansion-in-terms-of-an-onb",
  "type": "Example",
  "number": "2.3.2",
  "title": "Expansion in terms of an ONB.",
  "body": " Expansion in terms of an ONB          "
},
{
  "id": "section-gram-schmidt-orthogonalization",
  "level": "1",
  "url": "section-gram-schmidt-orthogonalization.html",
  "type": "Section",
  "number": "2.4",
  "title": "Gram-Schmidt Orthogonalization",
  "body": " Gram-Schmidt Orthogonalization  Given a linearly independent set , we often want to orthogonalize it to make certain computations easier to perform. This can be done (at least theoretically) by using the Gram-Schmidt Algorithm. The algorithm works be successively subtracting out parallel components of vectors and normalizing what remains to produce an orthonormal set. The parallel components are themselves determined by the inner product: given two nonzero vectors in , we can always write where .  Given vectors , the algorithm will either produce nonzero orthogonal vectors or it will terminate before the th step and produce the zero vector as one of its outputs. This second option occurs precisely when the original collection is linearly dependent. Hence, the Gram-Schmidt algorithm will always turn a collection of linearly independent vectors into an orthogonal (and therefore linearly independent) collection of the same size. In particular, the algorithm converts bases into ONBs.   Using the Gram-Schmidt algorithm to construct an ONB   Apply the Gram-Schmidt algorithm to the vectors .    We start by setting : . Now we orthogonalize the set by replacing with and then normalizing the result: . Finally, we orthogonalize the set : . The resulting set is an orthonormal set (in fact, an ONB) in .     Gram-Schmidt and linear dependence   Apply the Gram-Schmidt algorithm to the vectors .    If we apply the Gram-Schmidt process to this collection of vectors we will eventually get . This is because the first three vectors in our collection are linearly dependent. At this point the Gram-Schmidt produces no more useful results. If we want to obtain a linearly independent orthonormal set, we will need to remove from our collection.     The modified Gram-Schmidt algorithm.  Theoretically, the Gram-Schmidt algorithm is guaranteed to produce an orthonormal set as long as the input is a linearly independent set. In practice, however, roundoff errors in computer computations can produce vectors that are no longer orthogonal. To combat this, the modified Gram-Schmidt algorithm (MGS) can be used. The MGS process differs from the typical Gram-Schmidt process as follows: once the vector is produced in step of the algorithm, all subsequent vectors are replaced with . That is, we continually update the remaining vectors in our collection to be orthogonal to our current collection of orthonormal vectors.   Using the modified Gram-Schmidt algorithm to construct an ONB   Apply the modified Gram-Schmidt algorithm to the vectors .    As before, we start by setting : . Now we orthogonalize the set with respect to : . This produces as before, but now has been replaced with a vector that is also orthogonal to . The final step is to orthogonalize the set : . Therefore, we have once again obtained an ONB from the MGS algorithm.     Comparing the classical Gram-Schmidt and modified Gram-Schmidt algorithms   Apply the different Gram-Schmidt algorithms to the collection using the approximation to simulate what happens if these algorithms are applied with finite precision arithmetic.          "
},
{
  "id": "example-using-the-gram-schmidt-algorithm-to-construct-an-onb",
  "level": "2",
  "url": "section-gram-schmidt-orthogonalization.html#example-using-the-gram-schmidt-algorithm-to-construct-an-onb",
  "type": "Example",
  "number": "2.4.1",
  "title": "Using the Gram-Schmidt algorithm to construct an ONB.",
  "body": " Using the Gram-Schmidt algorithm to construct an ONB   Apply the Gram-Schmidt algorithm to the vectors .    We start by setting : . Now we orthogonalize the set by replacing with and then normalizing the result: . Finally, we orthogonalize the set : . The resulting set is an orthonormal set (in fact, an ONB) in .   "
},
{
  "id": "example-gram-schmidt-and-linear-dependence",
  "level": "2",
  "url": "section-gram-schmidt-orthogonalization.html#example-gram-schmidt-and-linear-dependence",
  "type": "Example",
  "number": "2.4.2",
  "title": "Gram-Schmidt and linear dependence.",
  "body": " Gram-Schmidt and linear dependence   Apply the Gram-Schmidt algorithm to the vectors .    If we apply the Gram-Schmidt process to this collection of vectors we will eventually get . This is because the first three vectors in our collection are linearly dependent. At this point the Gram-Schmidt produces no more useful results. If we want to obtain a linearly independent orthonormal set, we will need to remove from our collection.   "
},
{
  "id": "example-using-the-mgs-algorithm-to-construct-an-onb",
  "level": "2",
  "url": "section-gram-schmidt-orthogonalization.html#example-using-the-mgs-algorithm-to-construct-an-onb",
  "type": "Example",
  "number": "2.4.3",
  "title": "Using the modified Gram-Schmidt algorithm to construct an ONB.",
  "body": " Using the modified Gram-Schmidt algorithm to construct an ONB   Apply the modified Gram-Schmidt algorithm to the vectors .    As before, we start by setting : . Now we orthogonalize the set with respect to : . This produces as before, but now has been replaced with a vector that is also orthogonal to . The final step is to orthogonalize the set : . Therefore, we have once again obtained an ONB from the MGS algorithm.   "
},
{
  "id": "example-comparing-classical-gram-schmidt-and-modified-gram-schmidt-algorithms",
  "level": "2",
  "url": "section-gram-schmidt-orthogonalization.html#example-comparing-classical-gram-schmidt-and-modified-gram-schmidt-algorithms",
  "type": "Example",
  "number": "2.4.4",
  "title": "Comparing the classical Gram-Schmidt and modified Gram-Schmidt algorithms.",
  "body": " Comparing the classical Gram-Schmidt and modified Gram-Schmidt algorithms   Apply the different Gram-Schmidt algorithms to the collection using the approximation to simulate what happens if these algorithms are applied with finite precision arithmetic.        "
},
{
  "id": "section-matrices",
  "level": "1",
  "url": "section-matrices.html",
  "type": "Section",
  "number": "3.1",
  "title": "Matrices",
  "body": " Matrices  The primary objects of study in the field of linear algebra and its applications are linear transformations between vector spaces. These linear transformations are often represented using matrices .   Matrix   matrices  definition    A matrix is a rectangular array of numbers. If this array has rows and columns, we say the matrix is an matrix.    The following are examples of matrices: The first is and the second is .  More generally, an matrix can be represented by its entries as follows: for and . We will also find it useful to write matrices as collections of column or row vectors, or as block matrices . We have already used this idea in in order to determine if a given collection of vectors is linearly independent.  We say that a matrix is a square matrix if it has the same number of rows as columns. , The diagonal entries are and these form the main diagonal of the matrix.  In the code cell below Octave is used to define the square matrix above and get its diagonal entries. Note that brackets must be used to contain the entries of the matrix, entries in the same row must be separated by commas (or spaces) and rows are separated by semicolons.    Applications.  Matrices have found use in a wide variety of fields. They are particularly useful for representing data that depends on two parameters, such as images or data that has both a positional and time component. Matrices are also useful for describing more abstract mathematical objects such as networks. Here, we view the network as a data set determined by vertices and edges . Such matrices are called adjacency matrices.   Representing graphs using matrices   Represent an undirected graph using an appropriate matrix. Then do the same for a directed graph.     "
},
{
  "id": "definition-matrix",
  "level": "2",
  "url": "section-matrices.html#definition-matrix",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Matrix.",
  "body": " Matrix   matrices  definition    A matrix is a rectangular array of numbers. If this array has rows and columns, we say the matrix is an matrix.   "
},
{
  "id": "section-matrices-6",
  "level": "2",
  "url": "section-matrices.html#section-matrices-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square matrix diagonal entries main diagonal "
},
{
  "id": "example-representing-graphs-using-matrices",
  "level": "2",
  "url": "section-matrices.html#example-representing-graphs-using-matrices",
  "type": "Example",
  "number": "3.1.2",
  "title": "Representing graphs using matrices.",
  "body": " Representing graphs using matrices   Represent an undirected graph using an appropriate matrix. Then do the same for a directed graph.   "
},
{
  "id": "section-special-matrices",
  "level": "1",
  "url": "section-special-matrices.html",
  "type": "Section",
  "number": "3.2",
  "title": "Special matrices",
  "body": " Special matrices   Zero and identity matrices.  The zero matrix is the matrix whose entries are all . The identity matrix is the square matrix with diagonal entries equal to and off-diagonal entries equal to . These are denoted, respectively, by and , or just and if the size of each matrix can be inferred from context (as is often the case).    Diagonal matrices and triangular matrices.  A diagonal matrix is... A triangular matrix is a matrix that is either lower or upper triangular.   "
},
{
  "id": "section-transpose-addition-and-norm",
  "level": "1",
  "url": "section-transpose-addition-and-norm.html",
  "type": "Section",
  "number": "3.3",
  "title": "Transpose, addition and norm",
  "body": " Transpose, addition and norm   Matrix Addition and Scalar Multiplication   Let and denote matrices of the same size and let . Then is the matrix obtained by adding the entries of and componentwise. Likewise, is the matrix obtained by multiplying the entries of by componentwise.     Properties of Matrix Addition and Scalar Multiplication   Let and denote matrices of the same size and let . Then  .  .  where denotes the zero matrix.  .  .  .  .  .      "
},
{
  "id": "definition-matrix-addition-and-scalar-multiplication",
  "level": "2",
  "url": "section-transpose-addition-and-norm.html#definition-matrix-addition-and-scalar-multiplication",
  "type": "Definition",
  "number": "3.3.1",
  "title": "Matrix Addition and Scalar Multiplication.",
  "body": " Matrix Addition and Scalar Multiplication   Let and denote matrices of the same size and let . Then is the matrix obtained by adding the entries of and componentwise. Likewise, is the matrix obtained by multiplying the entries of by componentwise.   "
},
{
  "id": "theorem-properties-of-matrix-addition-and-scalar-multiplication",
  "level": "2",
  "url": "section-transpose-addition-and-norm.html#theorem-properties-of-matrix-addition-and-scalar-multiplication",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "Properties of Matrix Addition and Scalar Multiplication.",
  "body": " Properties of Matrix Addition and Scalar Multiplication   Let and denote matrices of the same size and let . Then  .  .  where denotes the zero matrix.  .  .  .  .  .     "
},
{
  "id": "section-matrix-vector-multiplication",
  "level": "1",
  "url": "section-matrix-vector-multiplication.html",
  "type": "Section",
  "number": "3.4",
  "title": "Matrix-vector multiplication",
  "body": " Matrix-vector multiplication  "
},
{
  "id": "part-multivariable-calculus",
  "level": "1",
  "url": "part-multivariable-calculus.html",
  "type": "Part",
  "number": "II",
  "title": "",
  "body": " "
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
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "  "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
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
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
