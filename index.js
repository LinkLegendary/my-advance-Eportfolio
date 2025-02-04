
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





let kim = false;


function toggleContrast() {
       kim = !kim;
    if(kim)
       {document.body.classList += " js-dark-theme"}
    else {
        document.body.classList.remove("js-dark-theme")
    }



}











function contact(event){
    event.preventDefault();

    const loading  =  document.querySelector('.modal-overlay-loading')
    const success  =  document.querySelector('.modal-overlay-success')
    loading.classList += ' js-modal-overlay-visible'




    emailjs
    .sendForm(
       'service_6vzscix',
       'template_rlm7kvs',
       event.target,

    ).then(() => {
      loading.classList.remove('js-modal-overlay-visible');
      success.classList += ' js-modal-overlay-visible';
   
    }).catch(() => {
      loading.classList.remove('js-modal-overlay-visible');
      alert(
         "The email service is temperaily unavailable. please contact me kkk@gmail.com"
      )
    })



   
    setTimeout(() => { 
      loading.classList.remove('js-modal-overlay-visible');
      success.classList += ' js-modal-overlay-visible';
      
      
    },2000);

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
   
