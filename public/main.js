var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.myWelcome = "hello";
  $http.get("welcome.htm")
  .then(function(response) {
    $('#example').DataTable(); response.data;
  });

  // DataTable
  var table = $('#example').DataTable({
    initComplete: function () {
        // Apply the search
        this.api().columns().every( function () {
            var that = this;

            $( 'input', this.header() ).on( 'keyup change clear', function () {
                if ( that.search() !== this.value ) {
                    that
                        .search( this.value )
                        .draw();
                }
            } );
        } );
    }
});

});