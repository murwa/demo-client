/**
 * Created by mxgel on 5/4/17.
 */
'use strict';

describe('demo.components.atm component', function () {
    var $componentController;
    beforeEach(module('demo.components.atm'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    describe('atm component', function () {
        it('should be defined', function () {
            expect($componentController).toBeDefined();
        });
    });
});
