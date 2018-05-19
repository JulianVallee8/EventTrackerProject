window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
});

function init(){
	document.mileageForm.lookup.addEventListener('click', getMileage );
	document.newMileagedriven.save.addEventListener('click', sendNewMileagedriven);
	document.deletemileageForm.destroy.addEventListener('click', deleteMileagedriven);
}

var getMileage = function(event) {
	event.preventDefault();
	var mileageId = document.mileageForm.mileageId.value;
	if (!isNaN(mileageId) && mileageId > 0) {
	   getMileagedriven(mileageId);
	}
}

function getMileagedriven(mileageId) {
	  
		var xhr = new XMLHttpRequest();
		console.log(xhr.readyState);
		xhr.open('GET', "api/days/" + mileageId, true);
		console.log(xhr.readyState);
	  
		xhr.onreadystatechange = function(){
			console.log(xhr.readyState);
			
			var div = document.getElementById("mileageData");
			if(xhr.readyState === xhr.DONE){
				if(xhr.status === 200){
					var mileageData = xhr.responseText;
					var mileageDataObject = JSON.parse(mileageData);
					displayMileage(mileageDataObject);
					
					console.log(mileageDataObject);
				}
				
			}
			else{
				div.textContent = "Not found";
			}
		}
	 
		xhr.send(null);
	}

function displayMileage(mileagedriven){
	var dataDiv = document.getElementById('mileageData');
	  dataDiv.textContent = '';
	  var header = document.createElement('h3');
	  header.textContent = mileagedriven.id;
	  dataDiv.appendChild(header);
	  
	  var ul = document.createElement('ul');
	  var li1 = document.createElement('li');
	  li1.textContent = mileagedriven.day;
	  ul.appendChild(li1);
	  var li2 = document.createElement('li');
	  li2.textContent = mileagedriven.milesDriven;
	  ul.appendChild(li2);
	  dataDiv.appendChild(ul);
}

function sendNewMileagedriven(evt){
	evt.preventDefault();
	var form = document.newMileagedriven;
	var mileagedriven = {
			
			day: form.day.value,
			milesDriven: form.milesDriven.value
			
	};
	var mileagedrivenJson = JSON.stringify(mileagedriven);
	console.log(mileagedriven);
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/days');
	xhr.setRequestHeader('Content-type', 'application/json')
	xhr.onreadystatechange = function(){
		if(this.readyState === 4){
			if (this.status === 200  || this.readyState === 201){
				var newMileagedrivenJson = this.responseText;
				var newMileagedriven = JSON.parse(newMileagedrivenJson);
				displayMileage(newMileagedriven);
			}
		}
		else{}
	};
	xhr.send(mileagedrivenJson);
}

function deleteMileagedriven(mileageId){
	var xhr = new XMLHttpRequest();
	console.log(xhr.readyState);
	xhr.open('DELETE', "api/days/" + mileageId, true);
	console.log(xhr.readyState);
	
	xhr.onreadystatechange = function(){
		console.log(xhr.readyState);
		
		
		if(xhr.readyState === xhr.DONE){
			if(xhr.status === 200){
				var mileageData = xhr.responseText;
				var mileageDataObject = JSON.parse(mileageData);
				displayMileage(mileageDataObject);
				console.log(mileageDataObject);
			}
			
		}
		else{
			div.textContent = "Not found";
		}
	}
 
	xhr.send(null);
	
	
}