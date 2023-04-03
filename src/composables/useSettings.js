const fs = require("uxp").storage.localFileSystem;
const { version } = require("../../plugin/manifest.json");

export const getSettings = async () => {
  try {
    const dataFolder = await fs.getDataFolder();
    const getSettingsFile = await dataFolder.getEntry(
      `ipPlus_settings_${version}.json`
    );
    const fileContent = await getSettingsFile.read();
    return JSON.parse(fileContent);
  } catch (error) {
    console.log(error);
    return;
    throw new Error(`Failed to read settings.json\n${error}`);
  }
};

export const createSettings = async (data) => {
  try {
    const stringifiedData = JSON.stringify(data);
    const dataFolder = await fs.getDataFolder();
    const dataFile = await dataFolder.createFile(
      `ipPlus_settings_${version}.json`
    );
    await dataFile.write(stringifiedData, { overwrite: true });
    return data;
  } catch (error) {
    console.log(`failed to create ipPlus_settings_${version}.json`);
    throw new Error(`Failed to create default settings file.\n${error}`);
  }
};
