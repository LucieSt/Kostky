export const Dice = (props) => {

    let { side } = props;

    const diceElm = document.createElement('div');
    diceElm.classList.add('dice');

    const diceImg = document.createElement('div');
    diceImg.classList.add('dice__side', `dice__side--${side}`)

    const diceBtn = document.createElement('button');
    diceBtn.classList.add('btn', 'btn--small', 'roll-btn')
    diceBtn.innerText = "hodit"

    diceElm.append(diceImg, diceBtn);

    diceBtn.addEventListener('click', () => {
        console.log('gg')
    })

    console.log(diceElm);

    return diceElm;
}


// dat si do komponenty znovu funkci random a zavolat ji pri prepsani komponenty po button listeneru