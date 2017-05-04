/**
 * Created by mxgel on 5/4/17.
 */
'use strict';

describe('demo.components.balance component', function () {
    var $componentController;
    beforeEach(module('demo.components.balance'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    describe('balance component', function () {
        it('should be defined', function () {
            expect($componentController).toBeDefined();
        });
    });
});
