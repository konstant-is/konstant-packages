import { textField } from "@/fields";
import { createField } from "@/lib/createField";

export const urlField = createField((props) => {
  const required = props?.required ?? true;
  return textField({
    name: props?.name ?? "url",
    label: props?.label ?? "Url",
    hasMany: false,
    required,
    admin: {
      condition: props?.condition,
    },
    validate: (val: any) => {
      if (!required && !val) return true;
      try {
        new URL(val);
        return true;
      } catch (err) {
        return "Invalid URL";
      }
    },
  });
});
