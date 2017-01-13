var Git = require("nodegit");

/**
 * Clone一份git代码到本地指定的目录下
 * @param {String} url Git地址
 * @param {String} localPath 本地路径
 * @return {Promise}
 */
function clone(url, localPath) {
    return Git.Clone(url, localPath);
}

function open(localPath) {
    return Git.Repository.open(localPath);
}

/**
 * 获得某个本地仓库中package.json的文件对象
 * @param {String} localPath 本地路径
 * @return {Promise}
 */
function getPackageJson(localPath) {
    return open(localPath)
        .then(function (repo) {
            return repo.getMasterCommit();
        })
        .then(function (commit) {
            return commit.getEntry("package.json");
        })
        .then(function (entry) {
            // Get the blob contents from the file.
            return entry.getBlob();
        })
        .then(function (blob) {
            return JSON.parse(String(blob));
        });
}

module.exports = {
    clone: clone,
    getPackageJson: getPackageJson
};