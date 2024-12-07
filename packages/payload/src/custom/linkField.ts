import { Field } from "payload";

import {
  checkboxField,
  groupField,
  radioField,
  relationshipField,
  rowField,
  textField,
} from "@/fields";
import { createField, deepMerge } from "@/utils";


type LinkTypes = "reference" | "custom";

const linkOptions: Record<LinkTypes, { label: string; value: string }> = {
  reference: {
    label: "Internal link",
    value: "reference",
  },
  custom: {
    label: "Custom URL",
    value: "custom",
  },
};

type LinkType = (options?: {
  // appearances?: LinkAppearances[] | false
  disableLabel?: boolean;
  overrides?: Record<string, unknown>;
}) => Field;

export const linkField: LinkType = ({ overrides = {} } = {}) => {
  const options = rowField({
    fields: [
      radioField({
        name: "type",
        admin: {
          layout: "horizontal",
          width: "50%",
        },
        defaultValue: linkOptions.reference.value,
        options: Object.values(linkOptions),
      }),
      checkboxField({
        name: "newTab",

        admin: {
          style: {
            alignSelf: "flex-end",
          },
          width: "50%",
        },
        label: "Open in new tab",
      }),
    ],
  });

  const types: Field[] = [
    internalLinkField({
      condition: (_, siblingData) => siblingData?.type === "reference",
    }),
    externalLinkField({
      condition: (_, siblingData) => siblingData?.type === "custom",
    }),
  ];

  const label = textField({
    name: "label",
    label: "Link Text",
    required: true,
  });

  const field = groupField({
    name: "link",
    admin: {
      hideGutter: true,
    },
    fields: [options, ...types, label],
  });

  return deepMerge(field, overrides);
};

export const externalLinkField = createField((props) => {
  const field = textField({
    name: "url",
    admin: {
      condition: props.condition,
      hidden: props.hidden,
    },
    label: props.label || "Custom URL",
    required: props.required || true,
  });

  return field;
});

export const internalLinkField = createField((props) => {
  const field = relationshipField({
    name: "reference",
    admin: {
      condition: props.condition,
    },
    label: props.label || "Document to link to",
    maxDepth: 1,
    relationTo: ["pages"],
    required: props.required || true,
  });

  return field;
});
