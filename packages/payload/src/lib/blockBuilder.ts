import { Block } from "payload";

type BlockConfig = Record<string, (props: unknown) => Block>;
type BlockKey = keyof BlockConfig;

export const blockBuilder = (config: BlockConfig) => {
  const helper = blockBuilderHelper({
    config,
  });

  return helper;
};

export const blockBuilderHelper = (props: { config: BlockConfig }) => {
  const { config } = props;

  let blockKeys =
    Object.keys(config).filter((b) => {
      const blockSettings = config[b];

      if (typeof blockSettings === "boolean" && blockSettings === false) {
        return false;
      }

      return true;
    }) || [];

  const exclude = (...blocks: BlockKey[]) => {
    // Filter out block keys that are included in the blocks parameter
    blockKeys = blockKeys.filter((key: BlockKey) => !blocks.includes(key));
    return builder;
  };

  const filter = (predicate: (value: string, index: number) => boolean) => {
    blockKeys = blockKeys.filter(predicate);
  };

  const only = (...blocks: BlockKey[]) => {
    // Filter out block keys that are not included in the blocks parameter
    blockKeys = blockKeys.filter((key: BlockKey) => blocks.includes(key));
    return builder;
  };

  const build = (params?: unknown): Block[] => {
    const blocks = blockKeys.map((key) => {
      const block = config[key];

      if (!block) {
        console.error(`Block ${key} not found in blockMap`);
        return null;
      }
      return block(params);
    });
    return blocks.filter((b) => b !== null) as Block[];
  };

  const builder = {
    filter,
    exclude,
    build,
    only,
  };

  return builder;
};
