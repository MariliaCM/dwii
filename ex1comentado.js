var events = require('events'); // adiciona o modulo eventos porque o javascrip nao da suporte aos modulos, por isso, NodeJS realiza a sentenca require('events') com o nome do pacote como parametro 
var eventEmitter = new events.EventEmitter(); // cria objeto eventEmitter para acessar propriedades e metodos da classe da programacao orientada a objetos EventEmitter

// 
var listener1 = function listener1() { // cria funcao listener1
    console.log('listener1 executed.'); // funcao callback a ser executada
}

// 
var listener2 = function listener2() { // cria funcao listener1
    console.log('listener2 executed.'); // funcao callback a ser executada
}

// 
eventEmitter.addListener('connection', listener1); // objeto chama o metodo que define as funcoes manipuladoras dos eventos

// 
eventEmitter.on('connection', listener2); // adiciona a listener2 ao final do array de listeners. Qualquer função assíncrona aceita uma função de retorno de chamada/callback como último parametro

//
var eventListeners = require('events').EventEmitter.listenerCount
    (eventEmitter, 'connection'); // conta o numero de ouvintes do evento connection
console.log(eventListeners + " Listener(s) listening to connection event"); // exibe a mensagem do numero de ouvintes do evento no console

// 
eventEmitter.emit('connection'); // dispara evento connection

// 
eventEmitter.removeListener('connection', listener1); // remove o listener1 do evento. Aceita dois parâmetros，o primeiro é o nome do evento，o segundo é o nome da função de retorno de chamada/callback
console.log("Listener1 will not listen now."); // exibe a mensagem no console

// 
eventEmitter.emit('connection'); // dispara evento connection

//
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection'); // conta o numero de ouvintes do evento connection
console.log(eventListeners + " Listener(s) listening to connection event"); // exibe a mensagem do numero de ouvintes do evento no console, apos remocao do listener1

//
console.log("Program Ended."); // exibe a mensagem no console
