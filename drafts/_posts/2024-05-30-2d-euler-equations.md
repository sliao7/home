---
layout: post
title: "2D Euler Equations"
date: 2024-05-31
tag: Science
---

Consider the 2D Euler incompressible equations

\begin{equation} \label{euler}
\partial_t \vec{u} + (\vec{u} \cdot\nabla) \vec{u} = -\nabla p, \quad \nabla \cdot \vec{u} = 0,
\end{equation}

where $$\vec{u} = (u_1, u_2)^T$$ is the velocity field and $$p$$ is the pressure. We study the fluid in the domain
$$\Omega=\mathbb{T}_{2\pi}\times \mathbb{R}.$$
By the incompressible condition $$\nabla \cdot \vec{u} = 0$$, we can define the stream function $$\psi$$, whose level curves are the stream lines of the fluid,
by $$ \vec{u} = \nabla ^\bot \psi = (\psi_y, -\psi_x)$$.

\eqref{euler} is a great equation!
