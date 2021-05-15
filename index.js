import {MDCTextField} from '@material/textfield';
import {MDCChipSet} from '@material/chips/chip-set';
import {MDCList} from '@material/list';

import './index.scss';

document.querySelectorAll('.mdc-text-field').forEach(e => {
    new MDCTextField(e);
});

new MDCChipSet(document.querySelector('.mdc-evolution-chip-set'));

new MDCList(document.querySelector('.mdc-list'));
