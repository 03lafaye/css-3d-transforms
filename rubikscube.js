var Cube = function(elementID) {
    this.DEPTH = 3;
    this.ROWS = 3;
    this.COLUMNS = 3;
    //this.subCubes = new Array(this.DEPTH * this.ROWS * this.COLUMNS);
    this.subCubes = new Array(1);
    this.element = $("#"+elementID); 

    this.reset = function() {
    };

    this.scramble = function() {
    };

    this.horizontalSwivel = function(row) {
    };

    this.verticalSwivel = function(column) {
    };

    for (var i = 0; i < this.subCubes.length; ++i) {
    this.subCubes[i] = new SubCube(i, this.element);
    this.element.append(this.subCubes[i]);
    }

    return true;
};

var SubCube = function(index, parentElement) {
    this.element = $('<div/>', {
    id: 'subCube' + index,
    class: 'subCube cubeContainer'
    });


    var ul = $('<ul class="cube left">');
    ul.append($('<li class="front" data-label="Front">Front</li>'));
    ul.append($('<li class="left" data-label="Left">Left</li>'));
    ul.append($('<li class="back" data-label="Back">Back</li>'));
    ul.append($('<li class="right" data-label="Right">Right</li>'));
    ul.append($('<li class="bottom" data-label="Bottom">Bottom</li>'));
    ul.append($('<li class="top" data-label="Top">Top</li>'));
    this.element.append(ul);

    this.element.appendTo(parentElement);
    return true;
};

var init = function() {
    var hasPerspective = false;
    testProperties = ['perspectiveProperty',
                   'WebkitPerspective',
                   'MozPerspective',
                   'OPerspective',
                   'msPerspective'];

    for (var i = 0; i < testProperties.length; ++i) {
        if (document.documentElement.style[testProperties[i]] !== undefined) {
            document.documentElement.className += ' perspective';
            hasPerspective = true;
            break;
        }
    }

    if (hasPerspective) {
        var rubiksCube = new Cube('rubiksCube');

        function rotate(direction) {
            $($('.cube')[0]).removeClass().addClass('cube ' + direction);
        }

        $(document).keydown(function(e){
            switch(e.keyCode) {
                case 37:
                  rotate('left');
                  break;
                case 38:
                  rotate('top');
                  break;
                case 39:
                  rotate('right');
                  break;
                case 40:
                  rotate('bottom');
                  break;
            };
        });

    }
    else {
        $('body').append("Your browser does not support CSS 3D transforms. Sorry :(");
    }
}();
