/**
 * Created by mxgel on 5/4/17.
 */
'use strict';

describe('demo.components.deposit component', function () {
    var $componentController;
    beforeEach(module('demo.components.deposit'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    describe('deposit component', function () {
        it('should be defined', function () {
            expect($componentController).toBeDefined();
        });
    });
});
