(function(){
  const c=window.BLOTNIK_CONTACT||{};
  const b=document.querySelector('#live-contact');
  if(!b)return;
  const he=document.documentElement.lang==='he';
  const message=he
    ? `✦ שלום נחום, הגעתי דרך האתר של בלוטניק. אני מתעניין/ת ברכישת ספר תורה.`
    : `✦ Hello Nachum, I found you through the Blotnik Torah website. I am interested in purchasing a Sefer Torah.`;
  let out='';
  if(c.whatsapp && /^\d+$/.test(c.whatsapp)){
    const url=`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(message)}`;
    out+=`<a class="button primary" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${he?'שליחת פנייה בוואטסאפ':'Send WhatsApp inquiry'}">${he?'שליחת פנייה בוואטסאפ':'Ask on WhatsApp'}</a>`;
  }
  if(c.phone)out+=`<a class="button secondary" href="tel:${c.phone}">${he?'שיחה טלפונית':'Call Nachum'}</a>`;
  if(c.email)out+=`<a class="button secondary" href="mailto:${encodeURIComponent(c.email)}">${he?'שליחת דוא״ל':'Email us'}</a>`;
  b.innerHTML=out;
  const pending=document.querySelector('#contact-pending');
  if(out&&pending)pending.classList.add('hidden');
})();
