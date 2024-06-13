Cookies
The p5.js Editor uses cookies. Some are essential to the website functionality and allow you to manage an account and preferences. Others are not essential—they are used for analytics and allow us to learn more about our community. We never sell this data or use it for advertising. You can decide which cookies you would like to allow, and learn more in our Privacy Policy.


Allow All

Allow Essential
Arquivo
Editar
Esboço
Ajuda
Português
Olá, HeitorViolator!



Auto-atualizar

Alluring spear
por HeitorViolator



sketch.js
Salvo: 22 dias atrás
1
let cor
2
let posicaohorizontal
3
let posicaovertical
4
​
5
function setup() {
6
  createCanvas(400, 400);
7
  background("rgb(0,2550,0)")
8
  cor=color(random(0,255),random(0255),random(0.255))
9
  posicaoHorizontal=[0, 0, 0]
10
 posicaoVertical=[random(height), random(height), random(height)];
11
}
12
​
13
function draw() {
14
  fill(cor)
15
  for(let contador in posicaoHorizontal) {
16
  circle(posicaoHorizontal[contador], posicaoVertical[contador],50);
17
  posicaoHorizontal[contador]+=random(1,3)
18
  posicaoVertical[contador]+=random(-3,3)
19
  if(posicaoHorizontal[contador]>=width){
20
    posicaoHorizontal[contador]=0
21
    posicaoVertical[contador]=random(height)
Não há mensagens de Lint
Linha atual

Terminal
Limpar


🌸 p5.js says: [sketch.js, line 24] color() was expecting no more than 4 arguments, but received 5. (http://p5js.org/reference/#/p5/color) 
Prévia
