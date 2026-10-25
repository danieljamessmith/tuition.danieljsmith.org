import fs from 'node:fs';
import { parse } from 'yaml';

const loadConfig = async (configPathOrData: string | object) => {
  if (typeof configPathOrData === 'string') {
    const content = fs.readFileSync(configPathOrData, 'utf8');
    if (configPathOrData.endsWith('.yaml') || configPathOrData.endsWith('.yml')) {
      return parse(content);
    }
    return content;
  }

  return configPathOrData;
};

export default loadConfig;
