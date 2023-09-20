usepackage("amsmath");

texpreamble("
\newcommand{\RR}{\mathbb{R}}
\newcommand{\QQ}{\mathbb{Q}}
\newcommand{\NN}{\mathbb{N}}
\newcommand{\ZZ}{\mathbb{Z}}
\newcommand{\CC}{\mathbb{C}}
\renewcommand{\th}{\text{th}}
\newcommand{\grad}{\nabla}
\newcommand{\curl}{\nabla\times}
\newcommand{\curlt}{\operatorname{curl}}
\renewcommand{\div}{\nabla\cdot}
\newcommand{\divt}{\operatorname{div}}
\newcommand{\del}{\nabla}
\newcommand{\vecm}[1]{\bm{#1}}
\newcommand{\vb}[1]{\mathbf{#1}}
\newcommand{\Sum}[2]{\sum_{#1}^{#2}}
\newcommand{\Int}[2]{\int_{#1}^{#2}}
\newcommand{\limit}[2]{\lim_{#1\to#2}}
\newcommand{\Laplace}[1]{\mathcal{L}\set*{#1}}
\newcommand{\iLaplace}[1]{\mathcal{L}^{-1}\set*{#1}}
\newcommand{\dv}[3][]{\dfrac{d^{#1} #2}{d #3^{#1}}}
\newcommand{\pdv}[3][]{\dfrac{\partial^{#1} #2}{\partial #3^{#1}}}
\newcommand{\dd}[2][]{\, d^{#1} #2\ }
\newcommand{\abs}[1]{\left| #1 \right|}
\newcommand{\norm}[1]{\left\| #1 \right\|}
\newcommand{\dotprod}[1]{\left\langle #1 \right\rangle}
\newcommand{\set}[1]{\left\{ #1 \right\}}
\newcommand{\brackets}[1]{\left[ #1 \right]}
\newcommand{\parens}[1]{\left( #1 \right)}
\newcommand{\qq}[1]{\quad\text{#1}\quad}
\newcommand{\ivec}[1]{
\renewcommand{\arraystretch}{.8}
\begin{bmatrix}#1\end{bmatrix}
}
\newcommand{\proj}[2]{\operatorname{proj}_{#1} #2}
\newcommand{\erf}[1]{\operatorname{erf} #1}
\newcommand{\dr}{\cdot d\vb{r}}
\newcommand{\dn}{\cdot\vb{n}\,ds}
\newcommand{\lt}{<}
\newcommand{\gt}{>}
\newcommand{\amp}{&}
");


                  import graph;
                  import slopefield;
                  import fontsize;
                  defaultpen(fontsize(9pt));
                  size(200);
                  real xmin=-2, xmax=2;
                  real ymin=-2, ymax=2;
                  real eps = .2;

                  pair a=(-2,-2);
                  pair b=(2,2);

                  //Define gradient field
                  path vector(pair z) {return (0,0)--(z.x,z.y);}

                  add(vectorfield(vector,a,b,20,deepblue+0.4bp));

                  //plot annotations
                  arrowbar axisarrow = Arrow(TeXHead);
                  Label xlabel = Label("$x$", position = EndPoint, align = 2E);
                  Label ylabel = Label("$y$", position = EndPoint, align = 2N);

                  xaxis(YEquals(0),xmin - eps,xmax + eps, LeftTicks(NoZeroFormat), L=xlabel, arrow=axisarrow);
                  yaxis(XEquals(0),ymin - eps,ymax + eps,RightTicks(NoZeroFormat), L = ylabel, arrow = axisarrow);
                  // "Nice" labeling for origin.
                  label("$0$", (0,0), NW);
                