var magicNumber1 = 1;
var magicNumber2 = 2;
var magicNumber3 = 3;

const magicNumber =  magicNumber1 + magicNumber2 + magicNumber3;

function changebackground() {

  if (magicNumber1 === 1) {
    paintYellowRectangle();
  }
  if (magicNumber2 === 2) {
    paintGreenRectangle();
  }
  if (magicNumber3 === 3) {
    paintRedRectangle();
  }
}
changebackground(magicNumber);
