export const Dice = (props) => {

    let { side } = props;

    const diceElm = document.createElement('div');
    diceElm.classList.add('dice');

    const diceImg = document.createElement('div');
    diceImg.classList.add('dice__side', 'dice__side--1')

    const diceBtn = document.createElement('button');
    diceBtn.classList.add('btn', 'btn--small', 'roll-btn')
    diceBtn.innerText = "hodit"

    diceElm.append(diceImg, diceBtn);

    console.log(diceElm);

    return diceElm;
}