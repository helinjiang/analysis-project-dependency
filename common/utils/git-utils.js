var path = require('path');
var Git = require('nodegit');

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
 * @param {String} [packageFileRelativePath] package.json 在仓库中的相对路径
 * @return {Promise}
 */
function getPackageJson(localPath, packageFileRelativePath) {
    return open(localPath)
        .then(function (repo) {
            return repo.getMasterCommit();
        })
        .then(function (commit) {
            return commit.getTree();
        })
        .then(function (tree) {
            if (!packageFileRelativePath) {
                packageFileRelativePath = './';
            }

            // 这里注意在window下path.join生成的路径为 a\\b\\c.js，但这里需要的是a/b/c.js，因此要处理一下
            var filePath = path.join(packageFileRelativePath, 'package.json').replace(/\\/ig, '/');

            return tree.getEntry(filePath);
        })
        .then(function (treeEntry) {
            // Get the blob contents from the file.
            return treeEntry.getBlob();
        })
        .then(function (blob) {
            return JSON.parse(String(blob));
        });
}

module.exports = {
    clone: clone,
    getPackageJson: getPackageJson
};