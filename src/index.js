import p5 from 'p5';

import keys from './keys';
import circles from './circles';
import colors from './colors';
import mouse from './mouse';

const sketches = { keys, circles, colors, mouse };

const radios = document.querySelector('.sketches');
const title = document.querySelector('.title');

Object.keys(sketches).forEach((sketch, index) => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'sketch';
    input.value = sketch;
    if (index === 0) input.checked = true;
    radios.append(input);
});

radios.addEventListener('change', evt => {
    active.remove();
    // eslint-disable-next-line no-new
    active = new p5(sketches[evt.target.value], 'sketch');
    title.innerHTML = evt.target.value;
});

// eslint-disable-next-line no-new
let active = new p5(keys, 'sketch');
title.innerHTML = 'keys';
