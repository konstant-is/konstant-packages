import { Field, TextField, TextareaField, RichTextField, SelectField, TabsField, Tab, BlocksField, UploadField, GroupField, RowField, RadioField, CheckboxField, RelationshipField, ArrayField, DateField, CollapsibleField, PointField, EmailField } from 'payload';

declare const field: (props: Field) => Field;
declare const textField: (props: Omit<TextField, "type">) => Field;
declare const textareaField: (props: Omit<TextareaField, "type">) => Field;
declare const richTextField: (props: Omit<RichTextField, "type">) => Field;
declare const selectField: (props: Omit<SelectField, "type">) => Field;
declare const tabsField: (props: Omit<TabsField, "type">) => Field;
declare const tabField: (props: Tab) => Tab;
declare const blocksField: (props: Omit<BlocksField, "type">) => Field;
declare const uploadField: (props: Omit<UploadField, "type">) => Field;
declare const groupField: (props: Omit<GroupField, "type">) => Field;
declare const rowField: (props: Omit<RowField, "type">) => Field;
declare const radioField: (props: Omit<RadioField, "type">) => Field;
declare const checkboxField: (props: Omit<CheckboxField, "type">) => Field;
declare const relationshipField: (props: Omit<RelationshipField, "type">) => Field;
declare const arrayField: (props: Omit<ArrayField, "type">) => Field;
declare const dateField: (props: Omit<DateField, "type">) => Field;
declare const collapsibleField: (props: Omit<CollapsibleField, "type">) => CollapsibleField;
declare const pointField: (props: Omit<PointField, "type">) => Field;
declare const emailField: (props: Omit<EmailField, "type">) => Field;

export { arrayField, blocksField, checkboxField, collapsibleField, dateField, emailField, field, groupField, pointField, radioField, relationshipField, richTextField, rowField, selectField, tabField, tabsField, textField, textareaField, uploadField };
