const { Transformer } = require('@parcel/plugin');
const DtsCreator = require('typed-css-modules').default;

const creator = new DtsCreator({ camelCase: true });

module.exports = new Transformer({
    async transform({asset}) {
        let code = await asset.getCode();
        await (await creator.create(asset.filePath, code, true)).writeFile();
        return [asset];
    },
});
