window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
});

function init(){
	document.mileageForm.lookup.addEventListener('click', getMileage );
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
//					getActors(mileageDataObject.id);
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