// src/lib/utils.ts
import slugify from "slugify";
var formatSlug = (value = "") => slugify(value, {
  lower: true,
  trim: true
});
var capitalize = (value = "") => !value.length ? "" : value.charAt(0).toUpperCase() + value.slice(1);

export {
  formatSlug,
  capitalize
};
//# sourceMappingURL=chunk-6F67KADK.js.map