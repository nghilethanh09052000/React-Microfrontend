import faker from 'faker';

const cartText = `<div>${faker.random.number()} items</div>`

document.querySelector('#dev-cart').innerHTML = cartText