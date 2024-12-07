import { Field } from 'payload';

type CreateFieldProps<P = unknown> = P & {
    overrides?: Record<string, unknown>;
    fields?: Field[];
    required?: boolean;
    label?: string;
    name?: string;
    condition?: (data: any, siblingData: any) => boolean;
    hideGutter?: boolean;
    hidden?: boolean;
    description?: string;
    localized?: boolean;
};
type FieldCreationFunction<P = unknown> = (props: CreateFieldProps<P>) => Field;
declare function createField<P = {}>(fieldFn: FieldCreationFunction<P>): (props?: CreateFieldProps<P>) => Field;

export { type CreateFieldProps as C, createField as c };
