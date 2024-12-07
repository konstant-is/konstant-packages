import {
  ArrayField,
  BlocksField,
  CheckboxField,
  CollapsibleField,
  DateField,
  EmailField,
  Field,
  GroupField,
  PointField,
  RadioField,
  RelationshipField,
  RelationshipFieldManyValidation,
  RelationshipFieldSingleValidation,
  RichTextField,
  RowField,
  SelectField,
  SelectFieldManyValidation,
  SelectFieldSingleValidation,
  Tab,
  TabsField,
  TextareaField,
  TextField,
  TextFieldManyValidation,
  TextFieldSingleValidation,
  UploadField,
  UploadFieldManyValidation,
  UploadFieldSingleValidation,
} from "payload";

import { getFieldConfig } from "./fieldConfig";

const createField = (field: Field): Field => {
  const config = getFieldConfig();
  const merged = { ...config, ...field };

  return merged;
};

export const field = (props: Field): Field => createField(props);

export const textField = (props: Omit<TextField, "type">): Field => {
  const { hasMany = false, validate, ...rest } = props;

  if (hasMany) {
    return createField({
      ...rest,
      type: "text",
      hasMany: true,
      validate: validate as TextFieldManyValidation, // Ensure validate is correctly typed
    });
  }

  return createField({
    ...rest,
    type: "text",
    hasMany: false,
    maxRows: undefined,
    minRows: undefined,
    validate: validate as TextFieldSingleValidation, // Ensure validate is correctly typed
  });
};

export const textareaField = (props: Omit<TextareaField, "type">): Field => {
  return createField({
    type: "textarea",
    ...props,
  });
};

export const richTextField = (props: Omit<RichTextField, "type">): Field => {
  return createField({
    type: "richText",
    ...props,
  });
};

export const selectField = (props: Omit<SelectField, "type">): Field => {
  const { hasMany = false, validate, ...rest } = props;

  if (hasMany) {
    return createField({
      ...rest,
      type: "select",
      hasMany: true,
      validate: validate as SelectFieldManyValidation, // Ensure validate is correctly typed
    });
  }

  return createField({
    ...rest,
    type: "select",
    hasMany: false,
    validate: validate as SelectFieldSingleValidation, // Ensure validate is correctly typed
  });
};

export const tabsField = (props: Omit<TabsField, "type">): Field => {
  return createField({
    type: "tabs",
    ...props,
  });
};

export const tabField = (props: Tab): Tab => props;

export const blocksField = (props: Omit<BlocksField, "type">): Field => {
  return createField({
    type: "blocks",
    ...props,
  });
};

export const uploadField = (props: Omit<UploadField, "type">): Field => {
  const { hasMany = false, validate, maxRows, minRows, ...rest } = props;

  if (hasMany) {
    return createField({
      ...rest,
      type: "upload",
      hasMany: true,
      validate: validate as UploadFieldManyValidation, // Ensure validate is correctly typed
      maxRows, // Include maxRows if hasMany is true
      minRows, // Include minRows if hasMany is true
    });
  }

  const { max, min, ...restWithoutMaxMin } = rest;

  return createField({
    ...restWithoutMaxMin,
    type: "upload",
    hasMany: false,
    validate: validate as UploadFieldSingleValidation, // Ensure validate is correctly typed
    maxRows: undefined, // Explicitly set maxRows to undefined
    minRows: undefined, // Explicitly set minRows to undefined
  });
};

export const groupField = (props: Omit<GroupField, "type">): Field => {
  return createField({
    type: "group",
    ...props,
  });
};

export const rowField = (props: Omit<RowField, "type">): Field => {
  return createField({
    type: "row",
    ...props,
  });
};

export const radioField = (props: Omit<RadioField, "type">): Field => {
  return createField({
    type: "radio",
    ...props,
  });
};

export const checkboxField = (props: Omit<CheckboxField, "type">): Field => {
  return createField({
    type: "checkbox",
    ...props,
  });
};

export const relationshipField = (
  props: Omit<RelationshipField, "type">
): Field => {
  const { hasMany = false, validate, admin, ...rest } = props;

  if (hasMany) {
    return createField({
      ...rest,
      type: "relationship",
      hasMany: true,
      validate: validate as RelationshipFieldManyValidation, // Ensure validate is correctly typed
      admin: {
        ...admin,
        sortOptions: admin?.sortOptions as string | undefined, // Ensure sortOptions is correctly typed
      },
      relationTo: rest.relationTo as string, // Ensure relationTo is correctly typed
    });
  }

  // Remove max, min, maxRows, and minRows properties when hasMany is false
  const { max, min, maxRows, minRows, ...restWithoutMaxMinRows } = rest;

  return createField({
    ...restWithoutMaxMinRows,
    type: "relationship",
    hasMany: false,
    validate: validate as RelationshipFieldSingleValidation, // Ensure validate is correctly typed
    admin: {
      ...admin,
      sortOptions: admin?.sortOptions as string | undefined, // Ensure sortOptions is correctly typed
    },
    relationTo: rest.relationTo as string, // Ensure relationTo is correctly typed
  });
};

export const arrayField = (props: Omit<ArrayField, "type">): Field => {
  return createField({
    type: "array",
    ...props,
  });
};

export const dateField = (props: Omit<DateField, "type">): Field => {
  return createField({
    type: "date",
    ...props,
  });
};

export const collapsibleField = (
  props: Omit<CollapsibleField, "type">
): CollapsibleField => {
  return {
    type: "collapsible",
    ...props,
    label: props.label,
    admin: {
      initCollapsed: true,
      ...props.admin,
    },
  };
};

export const pointField = (props: Omit<PointField, "type">): Field => {
  return createField({
    type: "point",
    ...props,
  });
};

export const emailField = (props: Omit<EmailField, "type">): Field => {
  return createField({
    type: "email",
    ...props,
  });
};
