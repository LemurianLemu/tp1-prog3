$(document).ready(function(){

  $("#switch").click(function(){
    if($("#switch").prop("checked")){
      $("#lbl-lengua").text("Ingles");
      $("#developer").text("Software Developer Jr.");
      $("#contactme").text("Contact Me");
      $("#education").text("Education");
      $("#utn").text("Software Developing Degree");
      $("#ipem").text("Bachelor of Maintenance");
      $("#leng").text("Lenguage");
      $("#sp").text("Spanish");
      $("#en").text("English");
      $("#boutme").text("About Me");
      $("#skills").text("Skills");
      $("#acndate").text("Ago-2021 - Today");
      $("#xp").text("Working Experience");
      $("#interest").text("Interest");
      $("#boardgame").text(" Board Games");
      $("#tech").text(" Tech");
      $("#cats").text(" Cats");
      $("#sing").text(" Singing");
      $("#btn-abrir-modal").text("Contact Me!");
      $("#abaper").text("ABAP Software Developer Jr.");
      $("#wood").text("DEPOSIT MANAGER AND POLISHING OFFICER");
      $("#sendit").text("Send");
      $("#btn-cerrar-modal").text("Close");
      $("#con").text("Send me a Message!");
      $("#abaper-desc").html("I work as an ABAP developer, as a support to a company local power supply. My tasks consist in the maintenance of the billing and finance modules.");
      $("#wood-desc").html("I worked as a warehouse manager, organizing the logistics of the entrances and exits of the warehouse to the different furniture stores, as well as performing polishing tasks.");
      $("#desc").html("My name is Joaquin Gimenez, i'm software development stundent at UTN-FRC, and I  currently work as an ABAP developer Jr. <br> <br>Among the technologies I like to work with are HTML, CSS, JS, Python, Django and SQL, but I'm just starting out and I'm open to new adventures!");
    }else{
      $("#lbl-lengua").text("Español");
      $("#developer").text("Programador Jr.");
      $("#contactme").text("Contactme");
      $("#education").text("Educacion");
      $("#utn").text("Tecnicatura Universitaria en Programacion");
      $("#ipem").text("Bachiller en mantenimiento");
      $("#leng").text("Lenguaje");
      $("#sp").text("Español");
      $("#en").text("Ingles");
      $("#boutme").text("Acerca de mi");
      $("#skills").text("Habilidades");
      $("#acndate").text("Ago-2021 - Hoy");
      $("#xp").text("Experiencia Laboral");
      $("#interest").text("Intereses");
      $("#boardgame").text(" Juegos de mesa");
      $("#tech").text(" Tecnologia");
      $("#cats").text(" Gatos");
      $("#sing").text(" Cantar");
      $("#btn-abrir-modal").text("Contactame!");
      $("#abaper").text("Desarrollador Jr. ABAP");
      $("#wood").text("ENCARGADO DE DEPOSITO Y OFICIAL LUSTRADOR");
      $("#sendit").text("Enviar");
      $("#btn-cerrar-modal").text("Cerrar");
      $("#con").text("Enviame un Mensaje!");
      $("#abaper-desc").html("Me desempeño como desarrolador ABAP, como soporte a una empresa local de suministro de energia electrica. Mis tareas consisten en el mantenimiento de los modulos de facturacion y de finanzas.");
      $("#wood-desc").html("Trabajé como encargado de deposito, organizando la logistica de las entradas y salidas del deposito hacia las distintas mueblerias, como tambien me desempeñé en tareas de lustre.");
      $("#desc").html("Me llamo Joaquin Gimenez, soy estudiante de programación en la UTN-FRC, y actualmente me desempeño como desarrollador ABAP Jr. <br /><br />Entre las tecnologias que me gusta trabajar estan HTML, CSS, JS, Python, Django y SQL, pero recien estoy comenzando y estoy abierto a nuevas aventuras!");
    }
    
  })
const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click", ()=>{
    
    modal.showModal();

})

btnCerrarModal.addEventListener("click", ()=>{
    
  modal.close();

})


})






