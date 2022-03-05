const { Transformer } = require('@parcel/plugin');
const DtsCreator = require('typed-css-modules').default;

module.exports = new Transformer({
    async loadConfig({config}) {
        let { contents } = (await config.getConfig(["tcm.config.json"])) || {};
        return contents;
    },
    async transform({asset, config}) {
        const creator = new DtsCreator(config);

        let code = await asset.getCode();
        await (await creator.create(asset.filePath, code, true)).writeFile();
        return [asset];
    },
});
