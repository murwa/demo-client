/**
 * Created by mxgel on 5/4/17.
 */
'use strict';

describe('demo.components.auth.logout component', function () {
    var $componentController;
    beforeEach(module('demo.components.auth.logout'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    describe('logout component', function () {
        it('should be defined', function () {
            expect($componentController).toBeDefined();
        });
    });
});
