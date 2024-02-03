const container = document.querySelector("#infi-list");
let itemCnt = 1;
container.addEventListener("scroll" , () => {
	let remaining = container.scrollHeight - container.clientHeight - container.scrollTop;
	if(remaining <= 1 ){
		generateElements(2);
	}
});
generateElements(10);
function generateElements(n) {
	for(let i=0 ; i<n;i++){
		const inner = document.createElement("li");
		//const inner = document.createElement("div");
		inner.innerText = `Item ${itemCnt++}`;
		inner.style.height = "50px";
		//ele.appendChild(inner);
		container.appendChild(inner);
	}
}