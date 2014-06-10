App.controller ('uploadController', ['$scope','$upload',function($scope,$upload){
	$scope.Progress=0;
	$scope.error=-1;
	$scope.onFileSelect = function($files) {
    //$files: an array of files selected, each file has name, size, and type.
    for (var i = 0; i < $files.length; i++) {
      var $file = $files[i];
      $upload.upload({
        url: 'filemedia/create.json',
        file: $file,
        progress: function(e){
        	 $scope.$apply(function () {
        	$scope.Progress = parseInt(100.0 * e.loaded / e.total);
        	console.log('percent: ' + parseInt(100.0 * e.loaded / e.total));
        	
        	});
        	
        	}
      }).then(function(data, status, headers, config) {
        // file is uploaded successfully
        $scope.error=0;
        console.log(status);
      },function(data, status, headers, config){
      	$scope.error=1;
      	console.log(status);
      }); 
    }
  };
}]);
