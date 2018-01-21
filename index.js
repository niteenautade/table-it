function arrayToHTML(data){
	var max

	var maxCounter = 0
	data.forEach((line,i)=>{
		let keys = Object.keys(line)
		if(keys.length > maxCounter){
			maxCounter = keys.length
			max = i
		}
	})
	var keys = Object.keys(data[max])
	let tableRows = "";
	data.map((line,i) => {
		let tdMarkup = "";
		keys.map(key=>{
			if(!line[key]){
				tdMarkup += `<td style="padding-left: 5px;"></td>`
			}
			else if(typeof(line[key]) == "string"){
				tdMarkup += `<td style="padding-left: 5px;">${line[key]}</td>`
			}
			else if(Array.isArray(line[key])){
				tdMarkup += arrayToHTML(line[key])
			}
			else if(typeof(line[key]) == "object"){
				tdMarkup += jsonToHTML(line[key])
			}
		})
		let trMarkup = `<tr>${tdMarkup}</tr>`
		tableRows += trMarkup
	})
	let thMarkup = "";
	keys.map(key=>{thMarkup+=`<th style="padding-left: 5px;">${key}</th>`})

	let thRowMarkup = '<tr>' + thMarkup + '</tr>'
	return `<td ><table border =1 style="width:100%;border-collapse: collapse;"><tr>${thRowMarkup}</tr><tr>${tableRows}</tr></table></td>`
	
	//return `${thRowMarkup}${tableRows}`
}
function jsonToHTML(data){
	var keys = Object.keys(data);
	let tdMarkup = "";
	let thMarkup = "";
	keys.map(key=>{
		if(!data[key]){
			tdMarkup += `<td style="padding-left: 5px;"></td>`
		}
		else if(typeof(data[key]) == "string"){
			tdMarkup += `<td style="padding-left: 5px;">${data[key]}</td>`
		}
		else if(Array.isArray(data[key])){
			tdMarkup += arrayToHTML(data[key])
		}
		else if(typeof(data[key]) == "object"){
			tdMarkup += jsonToHTML(data[key])
		}
		thMarkup+=`<th style="padding-left: 5px;">${key}</th>`
	})
	return `<td><table border=1 style="width:100%;border-collapse: collapse;"><tr>${thMarkup}</tr><tr>${tdMarkup}</tr></table></td>`
}
function convertToHtmlTable(data){
	if(Array.isArray(data)){
		let rows = arrayToHTML(data)
		let tableMarkup = `<table style="width:100%;border-collapse: collapse;">${rows}</table>`
		return tableMarkup
	}
	else if(typeof(data)=="object"){
		let rows = jsonToHTML(data)
		let tableMarkup = `<table style="width:100%;border-collapse: collapse;">${rows}</table>`
		return tableMarkup
	}
}
module.exports = convertToHtmlTable