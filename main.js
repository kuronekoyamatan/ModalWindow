'use strict';
(() => {
  const open = document.querySelector('#open');
  const modal = document.querySelector('#modal');
  const mask = document.querySelector('#mask');
  const closeOk = document.querySelector('#closeOk');
  const closeNo = document.querySelector('#closeNo');
  const p = document.querySelectorAll('.text');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
    ok.classList.add('hid');
    no.classList.add('hid');
  });

  closeOk.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    ok.classList.remove('hid');
    p[0].textContent = 'わーい';
  });

  closeNo.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
    no.classList.remove('hid');
    p[1].textContent = 'しくしく・・・';
  });

  // mask.addEventListener("click",()=>{
  //   close.click();
  // });
})();
