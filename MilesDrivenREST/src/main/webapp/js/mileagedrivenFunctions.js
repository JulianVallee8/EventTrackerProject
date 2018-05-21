window.addEventListener('load', function(e) {
  console.log('document loaded');
  init();
});

function init(){
	document.mileageForm.lookup.addEventListener('click', getMileage );
	document.newMileagedriven.save.addEventListener('click', sendNewMileagedriven);
	document.mileageEdit.edit.addEventListener('click', function(event){
		event.preventDefault();
		updateMileage();
		
	} );
	document.deletemileageForm.destroy.addEventListener('click', deleteMileagedriven);
	document.mileageList.indexAll.addEventListener('click', function(event) {
		event.preventDefault();
		  var xhr = new XMLHttpRequest();
		  xhr.open('GET', 'api/days');
		  xhr.onreadystatechange = function(){
		    if (this.readyState === 4) {
		      if (this.status === 200) {
		        var mileagedriven = JSON.parse(this.responseText);
		        console.log(mileagedriven);
		        showMileagedriven(mileagedriven);
		      }
		    }
		  };
		  xhr.send(null);
		});
	document.mileageAdded.indexAdded.addEventListener('click', function(event){
		event.preventDefault();
		var xhr = new XMLHttpRequest();
		  xhr.open('GET', 'api/days');
		  xhr.onreadystatechange = function(){
		    if (this.readyState === 4) {
		      if (this.status === 200) {
		        var mileagedriven = JSON.parse(this.responseText);
		        var mileageAdded = addMileage(mileagedriven);
		        console.log(mileagedriven);
		        showTotalMileagedriven(mileageAdded);
		      }
		    }
		  };
		  xhr.send(null);
	})
}

var addMileage = function(mileagedriven){
	var mileageAdded = 0;
	for(var i = 0; i < mileagedriven.length; i++){
		mileageAdded += mileagedriven[i].milesDriven;
	}
	return mileageAdded;
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



var updateMileage = function() {
	
	var mileageId = document.mileageEdit.mileageId.value;
	if (!isNaN(mileageId) && mileageId > 0) {
	   updateMileagedriven(mileageId);
	}
}
function updateMileagedriven(mileageId){
	var form = document.mileageEdit;
	var mileagedriven = {
			
			day: form.dayEdit.value,
			milesDriven: form.milesDrivenEdit.value
			
	};
	// ask about objects in objects
	var mileagedrivenJson = JSON.stringify(mileagedriven);
	console.log(mileagedriven);
	
	var xhr = new XMLHttpRequest();
	xhr.open('PATCH', "api/days/" + mileageId, true);  
	xhr.setRequestHeader('Content-type', 'application/json')
	xhr.onreadystatechange = function(){
		var div = document.getElementById("mileageEdited");
		if(this.readyState === 4){
			if (this.status === 200){
				var updateMileagedrivenJson = this.responseText;
				var updateMileagedriven = JSON.parse(updateMileagedrivenJson);
				updateDisplayMileage(updateMileagedriven);
			}
		}
		else{
			div.textContent = "Not found";
		}
	};
	xhr.send(mileagedrivenJson);
}

function updateDisplayMileage(mileagedriven){
	var editDiv = document.getElementById('mileageEdited');
	  editDiv.textContent = '';
	  var header = document.createElement('h3');
	  header.textContent = mileagedriven.id;
	  editDiv.appendChild(header);
	  
	  var ul = document.createElement('ul');
	  var li = document.createElement('li');
	  li.textContent = mileagedriven.milesDriven;
	  ul.appendChild(li);
	  editDiv.appendChild(ul);
}

function deleteMileagedriven(){
	var xhr = new XMLHttpRequest();
	console.log(xhr.readyState);
	var mileageId = deletemileageForm.mileageId.value;
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


function showMileagedriven(miles){
	var div = document.getElementById('mileageIndex');
	var table = document.createElement('table');
	div.appendChild(table);
	miles.forEach(function(mileagedriven){
		var tr = document.createElement('tr');
		tr.mileageId = mileagedriven.id;
		table.appendChild(tr);
		var td = document.createElement('td');
		td.textContent = mileagedriven.day;
		tr.appendChild(td);
		var td2 = document.createElement('td');
		td2.textContent = mileagedriven.milesDriven;
		tr.appendChild(td2);
		table.appendChild(tr);
	});
}

function showTotalMileagedriven(miles){
	var div = document.getElementById('mileageAdded');
	var header = document.createElement('h3');
	header.textContent = ('Your Total Miles Are: ' + miles);
	div.appendChild(header);
	
}