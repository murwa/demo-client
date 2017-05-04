/**
 * Created by mxgel on 5/4/17.
 */
'use strict';

describe('demo.components.withdraw component', function () {
    var $componentController;
    beforeEach(module('demo.components.withdraw'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    describe('withdraw component', function () {
        it('should be defined', function () {
            expect($componentController).toBeDefined();
        });
    });
});
