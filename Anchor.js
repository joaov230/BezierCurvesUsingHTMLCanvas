/* 
  TO DO:
  AnglePoints:
    [Por enquanto os angle points são estáticos]
    - Fazer um jeito de, ao clicar com o mouse, criar o anchor point e os angle points,
    mas ao arrastar o mouse, arrasta o angle right (e o left pra direção oposta) até soltar
*/

class Anchor {
  constructor(x, y) {
    this.anchorPoint = new Point(x, y, 7);
    this.angleLeft = new Point(x-30, y, 5);
    this.angleRight =new Point(x+30, y, 5);
  }

  // Retorna a string com o nome do objeto que colidiu
  // para ser acessado depois
  colides (x, y) {
    if (this.anchorPoint.colides(x, y)) {
      return 'anchorPoint';
    } else if (this.angleLeft.colides(x, y)) {
      return 'angleLeft';
    } else if (this.angleRight.colides(x, y)) {
      return 'angleRight';
    } else {
      return null;
    }
  }
}