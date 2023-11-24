

// ocultar la imagen  y mostrar el panel con los datos de la simulacion
function simulacion(){

    const preCont = document.querySelector(".pre-simulation");
    const postCont = document.querySelector(".post-simulation");


// manipulacion del dum
    postCont.classList.remove("disabled");
    preCont.classList.add("disabled");



    // parte 2 capturamos y mostramos los datos que no se calculan
    const campoNombres = document.getElementById("nombres").value;
    const campoEmail = document.getElementById("email").value;
    const campoCelular = document.getElementById("telefono").value;

    const nombresShow = document.getElementById("nombres-show");
    const emailShow = document.getElementById("email-show");
    const celularShow = document.getElementById("celular-show");


    nombresShow.innerText = campoNombres;
    emailShow.innerText = campoEmail;
    celularShow.innerText = campoCelular;



    // calculamos los datos de inversion y tiempo
    // de ganacia y ganacia total


    const Inversion = document.getElementById("inversion").value;
    const Tiempo = document.getElementById("tiempo").value;


    const tiempoShow = document.getElementById("tiempo-show");
    const interes= document.getElementById("interes-show");
    const ganaciaShow = document.getElementById("ganancia-show");
    const totalGanacia = document.getElementById("total-show");


    let ganancia = 0;
    let ganaciaTotal = 0;



    
    // cuarto paso validamos o comparamos  el tiempo de inversion segun este mostramos la ganacia , el total y los demas datos 

    switch (Tiempo) {
        case "1":
            ganancia =  parseInt((Inversion * 0.008)*12);
            ganaciaTotal = parseInt(Inversion) + parseInt(ganancia);


           ganaciaShow.innerText = ganancia;
           totalGanacia.innerText = ganaciaTotal;
           tiempoShow.innerText ="12 meses";
           interes.innerText ="0.8%"
            break;
    
        case "2":
            ganancia =  parseInt((Inversion * 0.013)*24);
            ganaciaTotal = parseInt(Inversion) + parseInt(ganancia);


           ganaciaShow.innerText = ganancia;
           totalGanacia.innerText = ganaciaTotal;
           tiempoShow.innerText ="24meses";
           interes.innerText ="1.3%"



            break;



        case "3":
            ganancia =  parseInt((Inversion * 0.017)*36);
            ganaciaTotal = parseInt(Inversion) + parseInt(ganancia);


           ganaciaShow.innerText = ganancia;
           totalGanacia.innerText = ganaciaTotal;
           tiempoShow.innerText = "36 meses";
           interes.innerText ="1.7%"

            break;

    }
}