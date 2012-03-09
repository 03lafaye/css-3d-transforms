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
        class: 'subCube'
    });

    // Add the 6 sides of the cube.
    this.element.append($('<div class="front" />'));
    this.element.append($('<div class="left" />'));
    this.element.append($('<div class="back" />'));
    this.element.append($('<div class="right" />'));
    this.element.append($('<div class="bottom" />'));
    this.element.append($('<div class="top" />'));

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
            hasPerspective = true;
            break;
        }
    }

    if (hasPerspective) {
        var rubiksCube = new Cube('rubiksCube');

        function rotate(direction) {
            $('.subCube').each( function() { $(this).removeClass().addClass('subCube ' + direction + 'Transform'); });
        }

        $(document).keydown(function(e){
            switch(e.keyCode) {
                case 66:
                  rotate('back');
                  break;
                case 70:
                  rotate('front');
                  break;
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
    } else {
        $('body').append("Your browser does not support CSS 3D transforms. Sorry :(");
    }
}();
