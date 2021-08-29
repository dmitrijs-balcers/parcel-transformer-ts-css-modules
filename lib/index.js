const { Transformer } = require('@parcel/plugin');
const DtsCreator = require('typed-css-modules').default;

const creator = new DtsCreator({ camelCase: true });

module.exports = new Transformer({
    async transform({asset}) {
        await (await creator.create(asset.filePath, "", true)).writeFile();
        return [asset];
    },
});
