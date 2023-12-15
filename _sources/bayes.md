# Capítulo 1: Teoria da decisão de Bayes

A Regra de Bayes, demonstrada na equação 1, é uma equação que relaciona a ocorrência de dois eventos através de suas probabilidades condicionais. Ela é utilizada para calcular a probabilidade de um evento ocorrer, dado que outro evento já ocorreu.


$$\begin{equation}
    P(A|B) = \frac{\text{P(B|A)P(A)}}{\text{P(B)}}\
\end{equation}$$

Onde:


*   P(A|B) é a probabilidade do evento A ocorrer dado que o evento B já ocorreu;
*   P(B|A) é a probabilidade do evento B ocorrer dado que o evento A já ocorreu;
*   P(A) é a probabilidade do evento A ocorrer independentemente do evento B;
*   P(B) é a probabilidade do evento B ocorrer independentemente do evento A.

Como ponto de partida, vamos admitir que os padrões são expressos de forma genérica por $x = [x_{1},...x_{n}]^T$, sobre os quais desejamos inferir sua pertinência em uma dada classe em $Ω =  ${$ω_{1},...,ω_{c}$}. No contexto estatístico, a seguinte regra geral pode ser empregada para tal processo de classificação:

