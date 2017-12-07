<template>
	<div class="D-Principal">
		<div class="D-Letra">
			<h1 class="Letra">Calculadora vue</h1>
		</div>
		<div class="imagem">
			<img class="imagemfundo" src="http://www.1sti.com.br/assets/img/1sti.svg">
		</div>
		<div class="D-Calc">
			<button class="igu" v-on:click="limpar()">C</button>
			<button class="som" v-on:click="setOperator('soma')">+</button>
			<button class="som" v-on:click="setOperator('subtracao')">-</button>
			<button class="som" v-on:click="setOperator('multiplicacao')">X</button>
			<button class="som" v-on:click="setOperator('divisao')">÷</button>
			<button class="igu" v-on:click="resultados()">=</button>
		</div>
		<div D-inp>
			<input class="inp1" type="text" v-model="visor">
		</div>
		<div class="D-Numeros">
			<button class="A" v-on:click="preencher('1')">1</button>
			<button class="A" v-on:click="preencher('2')">2</button>
			<button class="A" v-on:click="preencher('3')">3</button>
			<button class="A" v-on:click="preencher('4')">4</button>
			<button class="A" v-on:click="preencher('5')">5</button>
			<button class="A" v-on:click="preencher('6')">6</button>
			<button class="A" v-on:click="preencher('7')">7</button>
			<button class="A" v-on:click="preencher('8')">8</button>
			<button class="A" v-on:click="preencher('9')">9</button>
			<button class="A" v-on:click="preencher('0')">0</button>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'CalculadoraDois',
		data(){
			return{
				fator1: '',
				fator2: '',
				operador: null,
				resultado: 0,
				visor: null,
				erro: ''
			}
		},
		methods:{
			preencher(value){
					if (this.erro !== '') {}
					if(this.operador===null){
						this.fator1 = this.fator1 + value
						this.visor = this.fator1

					} else{
						this.fator2 = this.fator2 + value
						this.visor = this.fator2
					}
				},
			setOperator(operador){
				this.operador = operador
			},
			resultados(){
				if(this.operador === 'soma') {
					this.resultado = parseInt(this.fator1) + parseInt(this.fator2)
					this.visor = this.resultado
				} else if (this.operador === 'subtracao'){
					this.resultado = parseInt(this.fator1) - parseInt(this.fator2)
					this.visor = this.resultado
				} else if (this.operador === 'multiplicacao') {
					this.resultado = parseInt(this.fator1) * parseInt(this.fator2)
					this.visor = this.resultado
				} else{
					if (this.fator2 === '0') {
						this.erro = 'Não há divisão com 0, tente novamente!'
					} else {
						this.resultado = parseInt(this.fator1) / parseInt(this.fator2)
						this.visor = this.resultado
					}
				}
				this.zerar()
			},
			zerar(){
				this.fator1 = ''
				this.fator2 = ''
				this.operador = null
				this.erro = ''
			},
			limpar(){
				this.zerar()
				this.visor = null
			}
			}
		}
</script>
<style scoped>
	.D-Principal{
		background-color: black;
		height: 160vh;	
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
		background-color: #CD950C;
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