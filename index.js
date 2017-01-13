var npmUtils = require('./common/utils/npm-utils');

// const packageJson = require('package-json');

// packageJson('lodash', 'latest').then(function(json){
//     console.log(json);
// });
//
// packageJson('lodash').then(function(data){
//     console.log(Object.keys(data.versions));
// });

npmUtils.getAllVersionCode('lodash')
    .then(function (data) {
        console.log(data);
    });