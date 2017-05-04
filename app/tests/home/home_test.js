/**
 * Created by mxgel on 5/4/17.
 */
'use strict';

describe('demo.components.home component', function () {
    var $componentController;
    beforeEach(module('demo.components.home'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    describe('home component', function () {
        it('should be defined', function () {
            expect($componentController).toBeDefined();
        });
    });
});
