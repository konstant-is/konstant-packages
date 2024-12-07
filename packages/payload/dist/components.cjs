"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components.ts
var components_exports = {};
__export(components_exports, {
  SlugComponent: () => SlugComponent
});
module.exports = __toCommonJS(components_exports);

// src/custom/slugField/component.tsx
var import_react = require("react");
var import_ui = require("@payloadcms/ui");

// src/lib/utils.ts
var import_slugify = __toESM(require("slugify"), 1);
var formatSlug = (value = "") => (0, import_slugify.default)(value, {
  lower: true,
  trim: true
});

// src/custom/slugField/component.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var SlugComponent = ({
  field,
  fieldToUse,
  checkboxFieldPath: checkboxFieldPathFromProps,
  path,
  readOnly: readOnlyFromProps
}) => {
  const { label } = field;
  const checkboxFieldPath = path?.includes(".") ? `${path}.${checkboxFieldPathFromProps}` : checkboxFieldPathFromProps;
  const { value, setValue } = (0, import_ui.useField)({ path: path || field.name });
  const { dispatchFields } = (0, import_ui.useForm)();
  const checkboxValue = (0, import_ui.useFormFields)(([fields]) => {
    return fields[checkboxFieldPath]?.value;
  });
  const targetFieldValue = (0, import_ui.useFormFields)(([fields]) => {
    return fields[fieldToUse]?.value;
  });
  (0, import_react.useEffect)(() => {
    if (checkboxValue) {
      if (targetFieldValue) {
        const formattedSlug = formatSlug(targetFieldValue);
        if (value !== formattedSlug) setValue(formattedSlug);
      } else {
        if (value !== "") setValue("");
      }
    }
  }, [targetFieldValue, checkboxValue, setValue, value]);
  const handleLock = (0, import_react.useCallback)(
    (e) => {
      e.preventDefault();
      dispatchFields({
        type: "UPDATE",
        path: checkboxFieldPath,
        value: !checkboxValue
      });
    },
    [checkboxValue, checkboxFieldPath, dispatchFields]
  );
  const readOnly = readOnlyFromProps || checkboxValue;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "field-type slug-field-component", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "label-wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.FieldLabel, { htmlFor: `field-${path}`, label }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_ui.Button, { className: "lock-button", buttonStyle: "none", onClick: handleLock, children: checkboxValue ? "Unlock" : "Lock" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_ui.TextInput,
      {
        value,
        onChange: setValue,
        path: path || field.name,
        readOnly: Boolean(readOnly)
      }
    )
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SlugComponent
});
//# sourceMappingURL=components.cjs.map