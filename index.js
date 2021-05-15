import {MDCTextField} from '@material/textfield';
import {MDCChipSet} from '@material/chips/chip-set';

import './index.scss';

document.querySelectorAll('.mdc-text-field').forEach(e => {
    new MDCTextField(e);
});

new MDCChipSet(document.querySelector('.mdc-evolution-chip-set'));
