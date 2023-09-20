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
                  import fontsize;
                  size(200);
                  defaultpen(fontsize(9pt));


                  real xmin=-2, xmax=2;
                  real ymin=-2, ymax=2;
                  real eps=.2;

                  //plot annotations
                  arrowbar axisarrow = Arrow(TeXHead);
                  Label xlabel = Label("$x$", position = EndPoint, align = 2E);
                  Label ylabel = Label("$y$", position = EndPoint, align = 2N);

                  //define and add vector field
                  pair a=(-2,-2);
                  pair b=(2,2);
                  path vector(pair z) {return (0,0)--(-z.y, z.x);}
                  add(vectorfield(vector,a,b,10,deepblue+0.4bp));

                  //define and add curves
                  pair f(real t) {
                    return (cos(t), sin(t));
                  }
                  path curveC1 = graph(f, 0, pi, operator ..); // "operator .." is for bezier; 0≤t≤2π
                  Label L1 = Label("$C_{1}$", position=Relative(0.25), align=NE);
                  draw(curveC1, black+0.6bp, L = L1, Arrow(arrowhead = SimpleHead,position=Relative(0.25)));
                  add(arrow(curveC1,arrowhead = SimpleHead,position=Relative(.75)));

                  path curveC2 = graph(f, 2*pi, pi, operator ..); // "operator .." is for bezier; 0≤t≤2π
                  Label L2 = Label("$C_{2}$", position=Relative(0.25), align=SE);
                  draw(curveC2, black+0.6bp, L = L2, Arrow(arrowhead = SimpleHead,position=Relative(0.25)));
                  add(arrow(curveC2,arrowhead = SimpleHead,position=Relative(.75)));

                  //draw axes
                  xaxis(YEquals(0),xmin - eps,xmax + eps, LeftTicks(NoZeroFormat), L=xlabel, arrow=axisarrow);
                  yaxis(XEquals(0),ymin - eps,ymax + eps,RightTicks(NoZeroFormat), L = ylabel, arrow = axisarrow);
                  // "Nice" labeling for origin.
                  label("$0$", (0,0), NW);
                