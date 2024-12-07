import { Block, CollectionConfig, GlobalConfig } from "payload";

export const createCollectionConfig = (
  config: CollectionConfig
): CollectionConfig => {
  return {
    access: {
      read: () => true,
      ...config.access,
    },
    ...config,
  };
};

export const createGlobalConfig = (
  config: GlobalConfig
): GlobalConfig => {
  return {
    access: {
      read: () => true,
      ...config.access,
    },
    ...config,
  };
};

// type Props<P = unknown> = P;

// type BlockCreationFunction = <P>(props: Props<P>) => Block;

// export const createBlock = (blockCreationFunction: BlockCreationFunction) => {
//   return (props: Props) => {
//     const result = blockCreationFunction(props);
//     return createBlockHelper(result);
//   };
// };

export const createBlock = (block: Block): Block => {
  const fallbackInterfaceName = () => block.slug.includes("Block") ? block.slug : `${block.slug}Block`;  
  return {
    ...block,
    interfaceName: block?.interfaceName || fallbackInterfaceName(),
  };
};
