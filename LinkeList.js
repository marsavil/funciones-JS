// Metodos Linked List

function LinkedList() {
    this.head = null;
  }
  //----------------------------------------------------------------------------------//
  //          AGREGA NODOS A LA LISTA
  //----------------------------------------------------------------------------------//
  LinkedList.prototype.add = function(valor) {
    var nuevoNodo = new Node(valor);
  
    if(!this.head){
      this.head = nuevoNodo;
    } else {
      var current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = nuevoNodo;
    }
  }
  //----------------------------------------------------------------------------------//
  //            REMUEVE EL ULTIMO NODO
  //----------------------------------------------------------------------------------//
  LinkedList.prototype.remove = function() {
    if(!this.head){
      return undefined;
    }
  
    if(this.head.next === null){
      var unicoNodo = this.head;
      this.head = null;
      return unicoNodo.value;
    }
  
    var nodoActual = this.head.next;
    var nodoPrevious = this.head;
    while (nodoActual.next !== null) {
      nodoPrevious = nodoActual;
      nodoActual = nodoActual.next;
    }
    nodoPrevious.next = null;
    return nodoActual.value;
  }
  //----------------------------------------------------------------------------------//
  //             BUSCA SI SE ENCUNTRA EL VALOR
  //----------------------------------------------------------------------------------//
  LinkedList.prototype.search = function(arg) {
    var nodoActual = this.head;
  
    if(nodoActual === null){
      return null;
    }
  
    while (nodoActual !== null) {
      if(typeof arg === "function"){
        if(arg(nodoActual.value)){
          return nodoActual.value;
        }
      } else if(nodoActual.value === arg){
          return nodoActual.value;
      }
      nodoActual = nodoActual.next;
    }
  
    return null;
  }
  
  function Node(valor){
    this.value = valor;
    this.next = null;
  }

  //----------------------------------------------------------------------------------//
  //          IMPRIME LA LISTA PARA PODER TRABAJAR TRANQUILO
  //----------------------------------------------------------------------------------//
  LinkedList.prototype.print = function () {
    let print = "head -->"
    let current = this.head
    while(current){
      print += current.value + " -->"
      current = current.next
    }
    print += " null"
    return print
    
  };
  
//----------------------------------------------------------------------------------//
//       REMUEVE EL NODO EN EL INDICE QUE LE INDICO X INDICE
//----------------------------------------------------------------------------------//
 
  LinkedList.prototype.removeFrom = function (index) {
    // Tu código aca:
    let current = this.head;
    let contador = 0;
    let colaLista;
    if (index == 0) {
      this.head = current.next;
      return;
    }
    if (index == 1) {
      colaLista = current.next;
      this.head.next = colaLista;
    }
    while (current.next) {
      contador++;
      if (contador == index) {
        break;
      }
      current = current.next;
    }
    if (current.next.next == null) {
      current.next = null;
      return;
    }
    colaLista = current.next.next;
    current.next = colaLista;
  };

//----------------------------------------------------------------------------------//
//       INSERTA NODOS EN ORDEN DESENDENTES(PARA CAMBIAR ORDEN < X > EN TODAS)
//----------------------------------------------------------------------------------//

  LinkedList.prototype.insertInOrder = function (value) {
    // Tu código aca:
  
    let nodo = new Node(value)
    let current = this.head
    let colaLista
    
    if(current == null){
      this.head = nodo
      return}
    
    if(current.value < value){
      colaLista = current
      this.head = nodo
      this.head.next = colaLista
      return
    }
    while(current.next){
      if(current.next.value < value){
      break
      }
      current = current.next
    }
    colaLista = current.next
    current.next = nodo
    current.next.next = colaLista
  
  };
//--------------------------------------------------------------------------------------//
//INTERCALA LOS NODOS DE DOS LINKEDLIST Y DEVUELVE UNA NUEVA CON LOS NODOS INTERCALADOS
//--------------------------------------------------------------------------------------//
  function joinLinkedList(linkedListFirst, linkedListSecond) {
    // Tu código aca:
    let lista = new LinkedList() 
    let array = []
    console.log(array)
    let current = linkedListFirst.head
    let current2 = linkedListSecond.head
    while(current2){
    array.push(current.value,current2.value)
      current = current.next
      current2 = current2.next
    }
    console.log(array.length)
    for (let i = 0; i < array.length; i ++){
      console.log(array.length)
      lista.add(array[i])
    }
       console.log(lista)
      return lista
  }
//--------------------------------------------------------------------------------------//
//                       SUMA VALORES DEL LINKEDLIST       
//--------------------------------------------------------------------------------------//

  LinkedList.prototype.sumoValores = function () {
    let current = this.head
    let acumula = 0
    while(current){
      
      if(typeof current.value != "number"){
         if(!isNaN(current.value)){
           acumula += Number(current.value)
           current = current.next
          } 
          if(current.next == null){return acumula}
          current = current.next
        }
      acumula +=  current.value
    current = current.next
    }
    return acumula
  }
  juan jose tonut18:50
  let node = new Node(value)
     let current = this.head
     if(current == null){
       this.head = node
        return this.head}
     while(current.next != null){
       current = current.next
     } current.next = node
       return node
  juan jose tonut19:36
  if (typeof value == "function"){
         if(value(current.value)){
           return current.value
         }
  }