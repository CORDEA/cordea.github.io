import {MDCTextField} from '@material/textfield';

import './index.scss';

document.querySelectorAll('.mdc-text-field').forEach(e => {
    new MDCTextField(e);
});
