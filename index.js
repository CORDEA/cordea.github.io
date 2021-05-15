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

const snsList = document.querySelector('#sns-list');
const snsNameTextField = document.querySelector('#sns-name-text-field--input');
const snsUrlTextField = document.querySelector('#sns-url-text-field--input');
snsUrlTextField.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.keyCode !== 13) {
        return;
    }
    const name = snsNameTextField.value;
    const url = snsUrlTextField.value;
    if (name.length <= 0 || url.length <= 0) {
        return;
    }
    const template = document.querySelector('#sns-item');
    const item = template.content.cloneNode(true);
    item.querySelector('.mdc-list-item__text').textContent = name;
    snsList.appendChild(item);
});
