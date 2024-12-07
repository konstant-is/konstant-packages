import { CollectionConfig, GlobalConfig, Block } from 'payload';
export { C as CreateFieldProps, c as createField } from './createField-CvxlUHg2.js';

declare const createCollectionConfig: (config: CollectionConfig) => CollectionConfig;
declare const createGlobalConfig: (config: GlobalConfig) => GlobalConfig;
declare const createBlock: (block: Block) => Block;

type BlockConfig = Record<string, (props: unknown) => Block>;
type BlockKey = keyof BlockConfig;
declare const blockBuilder: (config: BlockConfig) => {
    filter: (predicate: (value: string, index: number) => boolean) => void;
    exclude: (...blocks: BlockKey[]) => /*elided*/ any;
    build: (params?: unknown) => Block[];
    only: (...blocks: BlockKey[]) => /*elided*/ any;
};
declare const blockBuilderHelper: (props: {
    config: BlockConfig;
}) => {
    filter: (predicate: (value: string, index: number) => boolean) => void;
    exclude: (...blocks: BlockKey[]) => /*elided*/ any;
    build: (params?: unknown) => Block[];
    only: (...blocks: BlockKey[]) => /*elided*/ any;
};

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
declare function isObject(item: unknown): boolean;
/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
declare function deepMerge<T, R>(target: T, source: R): T;

export { blockBuilder, blockBuilderHelper, createBlock, createCollectionConfig, createGlobalConfig, deepMerge, isObject };
