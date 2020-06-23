const sequence = [1,2,3,4,5,6,7,8,9];

function fnRearrangeSequence(type){

	let container = document.getElementById('container');
    let children = container.getElementsByTagName('div');
    let newContainer = document.createElement('div');    
    let order = sequence.sort();
    if(type == "shuffle"){
    	order = sequence.sort(() => Math.random() - 0.5);		
    }
		
	for (var i = 0; i < order.length; i++) {
	    newContainer.appendChild(  document.getElementById('box' + order[i])  );
	}

	newContainer.className = "flex-container";
	newContainer.id = "container";
	container.parentNode.replaceChild(newContainer, container);

}