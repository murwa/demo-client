/**
 * Created by mxgel on 5/4/17.
 */
'use strict';

describe('demo.components.transfer component', function () {
    var $componentController;
    beforeEach(module('demo.components.transfer'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    describe('transfer component', function () {
        it('should be defined', function () {
            expect($componentController).toBeDefined();
        });
    });
});
