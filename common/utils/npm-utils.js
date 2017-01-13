var packageJson = require('package-json');

/**
 * 获得npm包的注册信息，包含了版本等细节
 *
 * 例如：https://registry.npmjs.org/lodash
 *
 * @param {String} name 包名
 * @param {String} [version] 版本信息
 * @return {Promise}
 */
function getNpmPackageRegistryData(name, version) {
    return packageJson(name, version);
}

/**
 * 获得最新版本的package.json中的内容
 *
 * @param {String} name 包名
 * @return {Promise} 参数为 package.json 内容对象
 */
function getLatestVersion(name) {
    return getNpmPackageRegistryData(name, 'latest');
}

/**
 * 获得指定版本的package.json中的内容
 *
 * @param {String} name 包名
 * @param {String} [version] 版本信息
 * @return {Promise} 参数为 package.json 内容对象
 */
function getTargetVersion(name, version) {
    return getNpmPackageRegistryData(name, version);
}

/**
 * 获得这个包的所有版本号，返回一个数组
 *
 * @param {String} name 包名
 * @return {Promise} 参数为 package.json 内容对象
 */
function getAllVersionCode(name) {
    return getAll(name)
        .then(function (data) {
            return Object.keys(data.versions);
        });
}

/**
 * 获得所有关注这个npm在注册源中的信息
 *
 * @param {String} name 包名
 * @return {Promise} 参数为 package.json 内容对象
 */
function getAll(name) {
    return getNpmPackageRegistryData(name);
}

module.exports = {
    getAll: getAll,
    getAllVersionCode: getAllVersionCode,
    getLatestVersion: getLatestVersion,
    getTargetVersion: getTargetVersion
};