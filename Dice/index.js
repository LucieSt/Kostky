export const Dice = (props) => {

    let { side } = props;

    const roll = () => {
        return Math.floor(Math.random() * 6) + 1;
    };

    const diceElm = document.createElement('div');
    diceElm.classList.add('dice');

    const diceImg = document.createElement('div');
    diceImg.classList.add('dice__side', `dice__side--${side}`)

    const diceBtn = document.createElement('button');
    diceBtn.classList.add('btn', 'btn--small', 'roll-btn')
    diceBtn.innerText = "hodit"

    diceElm.append(diceImg, diceBtn);

    diceBtn.addEventListener('click', () => {
        diceElm.replaceWith(Dice({
            side: roll()
        }));
    });

    return diceElm;
}