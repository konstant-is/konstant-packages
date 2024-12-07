import { groupField, rowField } from "@/fields";
import { createField } from "@/lib/createField";

import { urlField } from "./urlField";

type SocialsTypes =
  | "facebook"
  | "instagram"
  | "twitter"
  | "linkedin"
  | "strava";

const socialsOptions: Record<SocialsTypes, { label: string; value: string }> = {
  facebook: {
    label: "Facebook",
    value: "facebook",
  },
  instagram: {
    label: "Instagram",
    value: "instagram",
  },
  twitter: {
    label: "Twitter",
    value: "twitter",
  },
  linkedin: {
    label: "LinkedIn",
    value: "linkedin",
  },
  strava: {
    label: "Strava",
    value: "strava",
  },
};

const fields = (showOnly: SocialsTypes[] = []) =>
  Object.keys(socialsOptions).map((key) => {
    const socialKey = key as SocialsTypes;
    const show = showOnly.length === 0 || showOnly.includes(socialKey);
    return urlField({
      name: socialKey,
      label: socialsOptions[socialKey].label,
      required: false,
      condition: (_, siblingData) => show,
      overrides: {
        admin: {
          width: "50%",
        },
      },
    });
  });

export const socialsField = createField<{
  showOnly: SocialsTypes[];
}>((props) => {
  return groupField({
    name: props.name || "socialMedia",
    label: props.label || "Social Media",
    fields: [
      rowField({
        fields: fields(props.showOnly),
      }),
    ],
  });
});
