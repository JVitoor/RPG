/* Pontos de Armadura */

let pontosArmor=document.querySelector('#pontosArmor');
    pontosArmor.value=3;
let contArmaduraEl = document.querySelector('#contArmadura');
	contArmaduraEl.value = 3;
let botaoMaisArmaduraEl = document.querySelector('#botaoMaisArmadura');
let botaoMenosArmaduraEl = document.querySelector('#botaoMenosArmadura');
let contPontosEl=20;
let pontosFalta = document.querySelector('#pontosFalta');

	function addArmadura(){
		if(contPontosEl>0){
			contArmaduraEl.value++;
			contArmaduraEl.innerHTML++;
			contPontosEl--;
			pontosFalta.innerHTML--;
            pontosArmor.value++;
		}
	}
	function tiraArmadura(){
		if(contArmaduraEl.value>3){
			contArmaduraEl.value--;
			contArmaduraEl.innerHTML--;
			contPontosEl++;
			pontosFalta.innerHTML++;
            pontosArmor.value--;
		}
	}

	botaoMaisArmaduraEl.addEventListener('click', addArmadura);
	botaoMenosArmaduraEl.addEventListener('click', tiraArmadura);

/* Pontos de Dano */

let pontosDamage=document.querySelector('#pontosDamage');
    pontosDamage.value=3;
let contDanoEl = document.querySelector('#contDano');
	contDanoEl.value = 3;
let botaoMaisDanoEl = document.querySelector('#botaoMaisDano');
let botaoMenosDanoEl = document.querySelector('#botaoMenosDano');

	function addDano(){
		if(contPontosEl>0){
			contDanoEl.value++;
			contDanoEl.innerHTML++;
			contPontosEl--;
			pontosFalta.innerHTML--;
            pontosDamage.value++;
		}
	}
	function tiraDano(){
		if(contDanoEl.value>3){
			contDanoEl.value--;
			contDanoEl.innerHTML--;
			contPontosEl++;
			pontosFalta.innerHTML++;
            pontosDamage.value--;
		}
	}

	botaoMaisDanoEl.addEventListener('click', addDano);
	botaoMenosDanoEl.addEventListener('click', tiraDano);

/* Pontos de Velocidade */

let pontosSpeed=document.querySelector('#pontosSpeed');
    pontosSpeed.value=3;
let contVelocidadeEl = document.querySelector('#contVelocidade');
	contVelocidadeEl.value = 3;
let botaoMaisVelocidadeEl = document.querySelector('#botaoMaisVelocidade');
let botaoMenosVelocidadeEl = document.querySelector('#botaoMenosVelocidade');

	function addVelocidade(){
		if(contPontosEl>0){
			contVelocidadeEl.value++;
			contVelocidadeEl.innerHTML++;
			contPontosEl--;
			pontosFalta.innerHTML--;
            pontosSpeed.value++;
		}
	}
	function tiraVelocidade(){
		if(contVelocidadeEl.value>3){
			contVelocidadeEl.value--;
			contVelocidadeEl.innerHTML--;
			contPontosEl++;
			pontosFalta.innerHTML++;
            pontosSpeed.value--;
		}
	}

	botaoMaisVelocidadeEl.addEventListener('click', addVelocidade);
	botaoMenosVelocidadeEl.addEventListener('click', tiraVelocidade);

/* Pontos de Vida */

let pontosHP=document.querySelector('#pontosHP');
    pontosHP.value=3;
let contVidaEl = document.querySelector('#contVida');
	contVidaEl.value = 3;
let botaoMaisVidaEl = document.querySelector('#botaoMaisVida');
let botaoMenosVidaEl = document.querySelector('#botaoMenosVida');

	function addVida(){
		if(contPontosEl>0){
			contVidaEl.value++;
			contVidaEl.innerHTML++;
			contPontosEl--;
			pontosFalta.innerHTML--;
            pontosHP.value++;
		}
	}
	function tiraVida(){
		if(contVidaEl.value>3){
			contVidaEl.value--;
			contVidaEl.innerHTML--;
			contPontosEl++;
			pontosFalta.innerHTML++;
            pontosHP.value--;
		}
	}

	botaoMaisVidaEl.addEventListener('click', addVida);
	botaoMenosVidaEl.addEventListener('click', tiraVida);

/* Pontos que faltam serem distribuídos */

	contPontosEl.value = 3353 - (contArmaduraEl.value + contDanoEl.value + contVelocidadeEl.value + contVidaEl.value);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
