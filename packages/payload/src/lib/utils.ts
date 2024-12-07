import slugify from "slugify";

export const formatSlug = (value: string = "") =>
  slugify(value, {
    lower: true,
    trim: true,
  });


export const capitalize = (value: string = "") =>
  !value.length ? "" : value.charAt(0).toUpperCase() + value.slice(1);