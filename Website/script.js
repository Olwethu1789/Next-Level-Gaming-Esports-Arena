"use strict";
const OPTIONS = Object.freeze({ultimate:["Ultimate Gamer Pass",450],vip:["VIP Gaming Experience",650],esports:["Esports Training Package",550],birthday:["Birthday Party Package",850],vr:["Virtual Reality Experience",300],racing:["Racing Simulator Challenge",280],escape:["Escape Room Challenge",350]});
const currency = value => `R${value.toFixed(2)}`;
const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
 const boxes=[...bookingForm.querySelectorAll('input[name="experience"]')];
 const date=bookingForm.querySelector('#guest-date');
 const localToday= new Date(); const today=[localToday.getFullYear(),String(localToday.getMonth()+1).padStart(2,'0'),String(localToday.getDate()).padStart(2,'0')].join('-'); date.min=today;
 const preselected=new URLSearchParams(location.search).get('select'); if (OPTIONS[preselected]) {boxes.find(b=>b.value===preselected).checked=true;}
 const set=(id,value)=>document.getElementById(id).textContent=value;
 function calculate(){ const selected=boxes.filter(b=>b.checked).map(b=>({name:OPTIONS[b.value][0],price:OPTIONS[b.value][1]}));const subtotal=selected.reduce((sum,item)=>sum+item.price,0);const rate=selected.length>=4?.15:selected.length===3?.10:selected.length===2?.05:0;const discount=subtotal*rate;const after=subtotal-discount;const vat=after*.15;const total=after+vat;
 set('selection-count',`${selected.length} option${selected.length===1?'':'s'} selected`);const list=document.getElementById('selected-list');list.replaceChildren(); if(!selected.length){const li=document.createElement('li');li.textContent='Select an experience to see your quote.';list.append(li);}else{selected.forEach(item=>{const li=document.createElement('li');li.textContent=`${item.name} — ${currency(item.price)}`;list.append(li);});}
 set('subtotal',currency(subtotal));set('discount-label',`Discount (${Math.round(rate*100)}%)`);set('discount',`−${currency(discount)}`);set('after-discount',currency(after));set('vat',currency(vat));set('total',currency(total));return {selected,subtotal,rate,discount,vat,total}; }
 boxes.forEach(box=>box.addEventListener('change',calculate));calculate();
 bookingForm.addEventListener('submit',event=>{event.preventDefault();const result=calculate();const feedback=document.getElementById('booking-feedback');if(!result.selected.length){feedback.textContent='Please select at least one experience.';feedback.className='feedback error';return;}if(!bookingForm.reportValidity())return;const name=document.getElementById('guest-name').value.trim(),email=document.getElementById('guest-email').value.trim(),phone=document.getElementById('guest-phone').value.trim(),visit=date.value;const text=`Booking enquiry (not confirmed)\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPreferred date: ${visit}\nExperiences: ${result.selected.map(x=>x.name).join(', ')}\nSubtotal: ${currency(result.subtotal)}\nDiscount: ${Math.round(result.rate*100)}% (-${currency(result.discount)})\nVAT (15%): ${currency(result.vat)}\nEstimated total: ${currency(result.total)}`;openEmailDraft("Booking enquiry — Next Level Gaming",text,feedback);});
}
const ARENA_EMAIL = 'skilllabgames@gmail.com';
function openEmailDraft(subject, message, feedback) {
  // A mailto link opens the visitor's email client; it does not transmit a booking.
  const uri = `mailto:${ARENA_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  feedback.replaceChildren();
  const note = document.createElement('p');
  note.textContent = `Your email draft is addressed to ${ARENA_EMAIL}. Review it and press Send in your email app. Your booking is not confirmed until the arena responds.`;
  const link = document.createElement('a');
  link.href = uri; link.className = 'outline-button'; link.textContent = 'OPEN EMAIL DRAFT';
  const fallback = document.createElement('textarea');
  fallback.value = message; fallback.rows = 7; fallback.readOnly = true;
  fallback.setAttribute('aria-label','Enquiry text to copy if your email app does not open');
  feedback.append(note,link,fallback);
  feedback.className = 'feedback success';
  window.location.href = uri;
}
const contactForm=document.getElementById('contact-form');if(contactForm){contactForm.addEventListener('submit',event=>{event.preventDefault();if(!contactForm.reportValidity())return;const data=new FormData(contactForm);const message=`${data.get('subject')}\nFrom: ${String(data.get('name')).trim()}\nEmail: ${String(data.get('email')).trim()}\n\n${String(data.get('message')).trim()}`;openEmailDraft(String(data.get('subject')),message,document.getElementById('contact-feedback'));});}
