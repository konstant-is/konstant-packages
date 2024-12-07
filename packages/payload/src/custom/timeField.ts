import { dateField } from "@/fields";
import { createField } from "@/lib/createField";

export const timeField = createField((props) => {
  return dateField({
    name: props.name ?? "time",
    label: props.label ?? "Time",
    required: props?.required,
    localized: false,

    // defaultValue: name === "open" ? "09:00" : "16:00",
    admin: {
      condition: props?.condition,
      description: props?.description,
      date: {
        pickerAppearance: "timeOnly",
        timeFormat: "HH:mm",
        displayFormat: "HH:mm",
      },
    },
  });
});
