import {MDCTextField} from '@material/textfield';
import {MDCChipSet} from '@material/chips/chip-set';
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';

import './index.scss';

document.querySelectorAll('.mdc-text-field').forEach(e => {
    new MDCTextField(e);
});

new MDCList(document.querySelector('.mdc-list'));
new MDCRipple(document.querySelector('.mdc-button'));
new MDCChipSet(document.querySelector('.mdc-evolution-chip-set'));

const skillChipSet = document.querySelector('#skill-chip-set--span');
const skillTextField = document.querySelector('#skill-text-field--input');
skillTextField.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.keyCode !== 13) {
        return;
    }
    const value = skillTextField.value;
    if (value.length <= 0) {
        return;
    }
    const template = document.querySelector('#skill-chip');
    const chip = template.content.cloneNode(true);
    chip.querySelector('.mdc-evolution-chip__text-label').textContent = value;
    skillChipSet.appendChild(chip);
});
