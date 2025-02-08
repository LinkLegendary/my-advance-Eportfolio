
// template id :   template_rlm7kvs
// service id : service_6vzscix
// public key : NIiu40ksu_AbcP-Mb

/*
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "NIiu40ksu_AbcP-Mb",
      });
   })();
</script>

*/

 const scaleFactor = 1 / 20
function moveBackground(event){
   const shapes = document.querySelectorAll(".shape");
      const x = event.clientX * scaleFactor;
      const y = event.clientY * scaleFactor;
      

      for (let i = 0; i < shapes.length; ++i){
         const isOdd = i % 2 !== 0;
         const boolInt = isOdd ? -1 : 1;
          shapes[i].style.transform = `translate(${x * boolInt}px ,${y * boolInt}px)`
      }
}



















let kim = false;


function toggleContrast() {
       kim = !kim;
    if(kim)
       {document.body.classList += " js-dark-theme"}
    else {
        document.body.classList.remove("js-dark-theme")
    }



}


   function contact(event) {
    event.preventDefault();

    const loading  =  document.querySelector('.modal-overlay-loading')
    const success  =  document.querySelector('.modal-overlay-success')
    loading.classList += ' js-modal-overlay-visible'




    emailjs
    .sendForm(
       'service_6vzscix',
       'template_rlm7kvs',
       event.target,
      'P4MVRvKo4mr7jtMFC'
        
    ).then(() => {
      loading.classList.remove('js-modal-overlay-visible');
      success.classList += ' js-modal-overlay-visible';
    
   })
   .catch(() => {
     loading.classList.remove("js-modal-overlay-visible");
     alert(
       "The email service is temporarily unavailable. Please contact me directly on mybizinfo4567@email.com"
     );
   });
}





let isModalOpen = false;
function toggleModal() {
   if (isModalOpen) {
     isModalOpen = false;
     return document.body.classList.remove("js-modal-open");
   }
   isModalOpen = true;
   document.body.classList += " js-modal-open";
 }
   
