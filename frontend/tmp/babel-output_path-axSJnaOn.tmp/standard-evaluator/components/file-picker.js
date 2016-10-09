define("standard-evaluator/components/file-picker", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Component.extend({
        store: _ember["default"].inject.service(),
        files: [],

        didInsertElement: function didInsertElement() {
            var _this = this;

            var multipleInput = document.getElementById("file-multiple-button");
            var singleInput = document.getElementById("file-single-button");
            var file = null;

            multipleInput.addEventListener("change", function (e) {
                var files = e.target.files;
                var filesJSON = { files: [] };

                for (var i = 1, len = files.length; i < len; i++) {
                    file = { id: i + 1, fileName: files[i].name };
                    _this.get('files').pushObject(file);
                }
            }, false);

            singleInput.addEventListener("change", function (e) {
                file = { id: _this.get('files').length + 1, fileName: singleInput.files[0].name };
                _this.get('files').pushObject(file);
            }, false);
        },

        actions: {
            removeFile: function removeFile(file) {
                this.get('files').removeObject(file);
            },

            openSingleFileSelector: function openSingleFileSelector() {
                _ember["default"].$('#file-single-button').trigger('click');
            },

            openMultipleFileSelector: function openMultipleFileSelector() {
                _ember["default"].$('#file-multiple-button').trigger('click');
            }
        }
    });

    // <script>
    //     $(document).on('ready', function() {
    //         var files,
    //             file,
    //             extension,
    //             input = document.getElementById("fileURL"),
    //             output = document.getElementById("fileOutput");

    //         input.addEventListener("change", function(e) {
    //             files = e.target.files;
    //             output.innerHTML = "";

    //             for (var i = 0, len = files.length; i < len; i++) {
    //                 file = files[i];
    //                 extension = file.name.split(".").pop();
    //                 if(extension == "cpp"){
    //                     output.innerHTML += "<li class='type-" + extension + "'>" + "<input type='checkbox'>" + file.name + "</li>";
    //                 }

    //             }
    //         }, false);
    //     });
    // </script>
});