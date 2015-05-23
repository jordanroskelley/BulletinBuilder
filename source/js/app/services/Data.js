function Data() {
	var data = {};

	data.init = function () {
		console.log('Data Factory - data.init');
		if(!data.data) {
		   data.loadData();
		}
	};

	data.loadData = function () {
		var rawData = localStorage.saveData;
		if(rawData) {
			this.data = JSON.parse(rawData);
		} else {
			this.data = [];
		}
	};

	data.saveData = function () {
		localStorage.saveData = JSON.stringify(this.data);
	};

	data.exportData = function (filename) {
		if(!filename) {
			console.log("filename not set, figure out how to generate one");
			filename = "file.bff";
		}

		var dataStr = JSON.stringify(this.data);
		var blob = new Blob([dataStr], { type: "application/json" });
		saveAs(blob, filename);
	};

	data.importData = function () {
		var reader = new FileReader();

		reader.onload = function () {
			this.data = JSON.parse(reader.result);
		};

		var file = document.getElementById("file-upload").files[0];
		if(file) {
			reader.readAsText(file);
		}
	};

	return data;
}
