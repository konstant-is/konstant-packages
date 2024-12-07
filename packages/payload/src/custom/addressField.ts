import { groupField, pointField, rowField, textField } from "@/fields";
import { createField } from "@/lib/createField";

const fields = {
  addressLine1: "addressLine1",
  addressLine2: "addressLine2",
  state: "state",
  city: "city",
  postalCode: "postalCode",
  location: "location",
};

type FieldKeys = keyof typeof fields;

export const addressField = createField<{
  hideFields?: FieldKeys[];
}>((props) => {
  const fieldCondition = (fieldName: FieldKeys) => {
    if (!props.hideFields?.length) return true;
    return props.hideFields.includes(fieldName) ? false : true;
  };

  return groupField({
    name: props.name ?? "address",
    label: props?.label,
    interfaceName: "Address",
    localized: false,
    admin: {
      condition: props?.condition,
      hideGutter: props?.hideGutter,
      description: props?.description,
    },
    fields: [
      rowField({
        fields: [
          textField({
            name: "addressLine1",
            label: "Address",
            localized: false,
            required: false,
          }),
          textField({
            name: "addressLine2",
            label: "Address extra",
            localized: false,
            required: false,
            admin: {
              condition: (_, siblingData) => fieldCondition("addressLine2"),
            },
          }),
        ],
      }),
      rowField({
        fields: [
          textField({
            name: "state",
            label: "State",
            localized: false,
            required: false,
            admin: {
              condition: (_, siblingData) => fieldCondition("state"),
            },
          }),
          textField({
            name: "city",
            label: "City",
            localized: false,
            required: false,
            admin: {
              condition: (_, siblingData) => fieldCondition("city"),
            },
          }),
          textField({
            name: "postalCode",
            label: "Postal Code",
            localized: false,
            required: false,
            admin: {
              condition: (_, siblingData) => fieldCondition("postalCode"),
            },
          }),
        ],
      }),
      pointField({
        name: "location",
        localized: false,
        required: false,
        admin: {
          condition: (_, siblingData) => fieldCondition("location"),
        },
      }),
    ],
  });
});
