import React from 'react';
import { TextFieldClientProps } from 'payload';

type SlugComponentProps = {
    fieldToUse: string;
    checkboxFieldPath: string;
} & TextFieldClientProps;
declare const SlugComponent: React.FC<SlugComponentProps>;

export { SlugComponent };
