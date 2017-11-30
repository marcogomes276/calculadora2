<template>
	<div class="D-Principal">
		<div class="D-Letra">
			<h1 class="Letra">Calculadora vue</h1>
		</div>
		<div class="imagem">
			<img class="imagemfundo" src="http://www.1sti.com.br/assets/img/1sti.svg">
		</div>
		<div class="D-Calc">
			<button class="som">+</button>
			<button class="som">-</button>
			<button class="som">×</button>
			<button class="som">÷</button>
			<button class="igu">=</button>
		</div>
		<div D-inp>
			<input class="inp1" type="" name="">
		</div>
		<div class="D-Numeros">
			<button class="A">1</button>
			<button class="A">2</button>
			<button class="A">3</button>
			<button class="A">4</button>
			<button class="A">5</button>
			<button class="A">6</button>
			<button class="A">7</button>
			<button class="A">8</button>
			<button class="A">9</button>
			<button class="A">0</button>
		</div>
	</div>
</template>
<script>
	export default {
  name: 'hello',
  data () {
  }
}
</script>
<style scoped>
	.D-Principal{
		background-color: black;
		height: 150vh;	
	}
	.D-Letra{
		background-color: #CD00CD;
		border-style: ridge;
		border-color: #00CD66;
		border-width: 7px;
	}
	.Letra{
		color: #00CD66;
	}
	.imagemfundo{	
		width: 50%;
		margin: 30px;
	}
	.inp1{
		padding: 10px;
		margin: 10px;
		border-style: ridge;
		border-color: #00FFFF;
		border-width: 7px;
	}
	.D-Calc{
		justify-content: space-between;	
		padding: 10px;
		margin: 10px;
	}
	.som{
		padding-top:10px;
		padding-bottom:10px;
		padding-right:20px;
		padding-left:20px;
		margin: 5px;
		background-color: #CD950C;
		border-style: ridge;
		border-color: #00FFFF;
		border-width: 7px;
	}
	.igu{
		padding-left: 50px;
		padding-right: 50px;
		padding-bottom:10px; 
		padding-top:10px;
		margin: 10px; 
		background-color: #CD950C;
		border-style: ridge;
		border-color: #00FFFF;
		border-width: 7px;
	}
	.D-Numeros{
		align-content: stretch ;
		padding: 10px;
		margin: 10px;
		border-style: dotted;
		border-color:red;
	}
	.A{
		padding: 20px;
		margin: 20px;
		background-color: #CD950C;
		border-style: ridge;
		border-color: #00FFFF;
		border-width: 7px;

	}
</style>