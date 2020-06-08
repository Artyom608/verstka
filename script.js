function main {
	//Получаем данные из формы
	let s_name=$("#s_name").value();
	let name=$("#name").value();
	let f_name=$("#f_name").value();
	let phone=$("#phone").value();
	let email=$("#email").value();

let date=$("#date").val()
let age = getAge(date)
}

function getAge(date){
	let tmp = date.split("-");
	let year = +tmp[0];
	let month = +tmp[1];
	let day = +tmp[2]
	return "getAge"

	const now = new Date()
	let nowYear = now.getFullYear();
	let nowMonth = +now.getMonth()+1
	let nowDay=now.getDate()
}