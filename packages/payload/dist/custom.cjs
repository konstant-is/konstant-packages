"use strict";
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

// src/custom.ts
var custom_exports = {};
__export(custom_exports, {
  addressField: () => addressField,
  externalLinkField: () => externalLinkField,
  formatSlugHook: () => formatSlugHook,
  internalLinkField: () => internalLinkField,
  linkField: () => linkField,
  openingHoursField: () => openingHoursField,
  slugField: () => slugField,
  socialsField: () => socialsField,
  timeField: () => timeField,
  urlField: () => urlField,
  weekdaysMap: () => weekdaysMap
});
module.exports = __toCommonJS(custom_exports);

// src/fields/fieldConfig.ts
var fieldConfigInstance = {
  localized: false,
  required: false
};
var getFieldConfig = () => {
  if (!fieldConfigInstance) {
  }
  const config = fieldConfigInstance || {};
  return config;
};

// src/fields/fields.ts
var createField = (field) => {
  const config = getFieldConfig();
  const merged = { ...config, ...field };
  return merged;
};
var textField = (props) => {
  const { hasMany = false, validate, ...rest } = props;
  if (hasMany) {
    return createField({
      ...rest,
      type: "text",
      hasMany: true,
      validate
      // Ensure validate is correctly typed
    });
  }
  return createField({
    ...rest,
    type: "text",
    hasMany: false,
    maxRows: void 0,
    minRows: void 0,
    validate
    // Ensure validate is correctly typed
  });
};
var selectField = (props) => {
  const { hasMany = false, validate, ...rest } = props;
  if (hasMany) {
    return createField({
      ...rest,
      type: "select",
      hasMany: true,
      validate
      // Ensure validate is correctly typed
    });
  }
  return createField({
    ...rest,
    type: "select",
    hasMany: false,
    validate
    // Ensure validate is correctly typed
  });
};
var groupField = (props) => {
  return createField({
    type: "group",
    ...props
  });
};
var rowField = (props) => {
  return createField({
    type: "row",
    ...props
  });
};
var radioField = (props) => {
  return createField({
    type: "radio",
    ...props
  });
};
var checkboxField = (props) => {
  return createField({
    type: "checkbox",
    ...props
  });
};
var relationshipField = (props) => {
  const { hasMany = false, validate, admin, ...rest } = props;
  if (hasMany) {
    return createField({
      ...rest,
      type: "relationship",
      hasMany: true,
      validate,
      // Ensure validate is correctly typed
      admin: {
        ...admin,
        sortOptions: admin?.sortOptions
        // Ensure sortOptions is correctly typed
      },
      relationTo: rest.relationTo
      // Ensure relationTo is correctly typed
    });
  }
  const { max, min, maxRows, minRows, ...restWithoutMaxMinRows } = rest;
  return createField({
    ...restWithoutMaxMinRows,
    type: "relationship",
    hasMany: false,
    validate,
    // Ensure validate is correctly typed
    admin: {
      ...admin,
      sortOptions: admin?.sortOptions
      // Ensure sortOptions is correctly typed
    },
    relationTo: rest.relationTo
    // Ensure relationTo is correctly typed
  });
};
var arrayField = (props) => {
  return createField({
    type: "array",
    ...props
  });
};
var dateField = (props) => {
  return createField({
    type: "date",
    ...props
  });
};
var pointField = (props) => {
  return createField({
    type: "point",
    ...props
  });
};

// src/lib/deepMerge.ts
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
}

// src/lib/createField.ts
function createField2(fieldFn) {
  return (props = {}) => {
    const field = fieldFn(props);
    return deepMerge(field, props.overrides || {});
  };
}

// src/custom/addressField.ts
var addressField = createField2((props) => {
  const fieldCondition = (fieldName) => {
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
      description: props?.description
    },
    fields: [
      rowField({
        fields: [
          textField({
            name: "addressLine1",
            label: "Address",
            localized: false,
            required: false
          }),
          textField({
            name: "addressLine2",
            label: "Address extra",
            localized: false,
            required: false,
            admin: {
              condition: (_, siblingData) => fieldCondition("addressLine2")
            }
          })
        ]
      }),
      rowField({
        fields: [
          textField({
            name: "state",
            label: "State",
            localized: false,
            required: false,
            admin: {
              condition: (_, siblingData) => fieldCondition("state")
            }
          }),
          textField({
            name: "city",
            label: "City",
            localized: false,
            required: false,
            admin: {
              condition: (_, siblingData) => fieldCondition("city")
            }
          }),
          textField({
            name: "postalCode",
            label: "Postal Code",
            localized: false,
            required: false,
            admin: {
              condition: (_, siblingData) => fieldCondition("postalCode")
            }
          })
        ]
      }),
      pointField({
        name: "location",
        localized: false,
        required: false,
        admin: {
          condition: (_, siblingData) => fieldCondition("location")
        }
      })
    ]
  });
});

// src/custom/linkField.ts
var linkOptions = {
  reference: {
    label: "Internal link",
    value: "reference"
  },
  custom: {
    label: "Custom URL",
    value: "custom"
  }
};
var linkField = ({ overrides = {} } = {}) => {
  const options = rowField({
    fields: [
      radioField({
        name: "type",
        admin: {
          layout: "horizontal",
          width: "50%"
        },
        defaultValue: linkOptions.reference.value,
        options: Object.values(linkOptions)
      }),
      checkboxField({
        name: "newTab",
        admin: {
          style: {
            alignSelf: "flex-end"
          },
          width: "50%"
        },
        label: "Open in new tab"
      })
    ]
  });
  const types = [
    internalLinkField({
      condition: (_, siblingData) => siblingData?.type === "reference"
    }),
    externalLinkField({
      condition: (_, siblingData) => siblingData?.type === "custom"
    })
  ];
  const label = textField({
    name: "label",
    label: "Link Text",
    required: true
  });
  const field = groupField({
    name: "link",
    admin: {
      hideGutter: true
    },
    fields: [options, ...types, label]
  });
  return deepMerge(field, overrides);
};
var externalLinkField = createField2((props) => {
  const field = textField({
    name: "url",
    admin: {
      condition: props.condition,
      hidden: props.hidden
    },
    label: props.label || "Custom URL",
    required: props.required || true
  });
  return field;
});
var internalLinkField = createField2((props) => {
  const field = relationshipField({
    name: "reference",
    admin: {
      condition: props.condition
    },
    label: props.label || "Document to link to",
    maxDepth: 1,
    relationTo: ["pages"],
    required: props.required || true
  });
  return field;
});

// src/lib/utils.ts
var import_slugify = __toESM(require("slugify"), 1);
var formatSlug = (value = "") => (0, import_slugify.default)(value, {
  lower: true,
  trim: true
});
var capitalize = (value = "") => !value.length ? "" : value.charAt(0).toUpperCase() + value.slice(1);

// src/custom/slugField/index.ts
var formatSlugHook = (fallback) => ({ data, operation, originalDoc, value }) => {
  if (typeof value === "string") {
    return formatSlug(value);
  }
  if (operation === "create" || !data?.slug) {
    const fallbackData = data?.[fallback] || data?.[fallback];
    if (fallbackData && typeof fallbackData === "string") {
      return formatSlug(fallbackData);
    }
  }
  return value;
};
var slugField = (fieldToUse = "title", overrides = {}) => {
  const { slugOverrides, checkboxOverrides } = overrides;
  const checkBoxField = {
    name: "slugLock",
    type: "checkbox",
    defaultValue: true,
    admin: {
      hidden: true,
      position: "sidebar"
    },
    ...checkboxOverrides
  };
  const slugField2 = {
    name: "slug",
    type: "text",
    index: true,
    label: "Slug",
    ...slugOverrides || {},
    hooks: {
      // Kept this in for hook or API based updates
      beforeValidate: [formatSlugHook(fieldToUse)]
    },
    admin: {
      position: "sidebar",
      ...slugOverrides?.admin || {},
      components: {
        Field: {
          path: "@repo/payload/components#SlugComponent",
          //
          clientProps: {
            fieldToUse,
            checkboxFieldPath: checkBoxField.name
          }
        }
      }
    }
  };
  return [slugField2, checkBoxField];
};

// src/custom/timeField.ts
var timeField = createField2((props) => {
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
        displayFormat: "HH:mm"
      }
    }
  });
});

// src/custom/urlField.ts
var urlField = createField2((props) => {
  const required = props?.required ?? true;
  return textField({
    name: props?.name ?? "url",
    label: props?.label ?? "Url",
    hasMany: false,
    required,
    admin: {
      condition: props?.condition
    },
    validate: (val) => {
      if (!required && !val) return true;
      try {
        new URL(val);
        return true;
      } catch (err) {
        return "Invalid URL";
      }
    }
  });
});

// src/custom/openingHoursField.ts
var weekdaysMap = {
  1: "Mondays",
  2: "Tuesdays",
  3: "Wednesdays",
  4: "Thursdays",
  5: "Fridays",
  6: "Saturdays",
  7: "Sundays"
};
var dayOptions = Object.keys(weekdaysMap).map((key) => ({
  label: weekdaysMap[key] || "",
  value: key
}));
var openingHoursField = createField2((props) => {
  const items = arrayField({
    name: "items",
    label: "Opening Hours",
    fields: [
      selectField({
        name: "days",
        hasMany: true,
        required: true,
        localized: false,
        defaultValue: [],
        options: dayOptions
      }),
      textField({ name: "label", required: true }),
      ...timeFields()
    ]
  });
  const customOpeningHours = arrayField({
    name: "custom",
    label: "Custom Opening Hours",
    fields: [
      textField({ name: "label", required: true }),
      dateField({
        name: "date",
        label: "Date",
        required: true,
        admin: {
          date: {
            pickerAppearance: "dayOnly",
            displayFormat: "d MMM yyy"
          }
        }
      }),
      ...timeFields()
    ]
  });
  return groupField({
    name: "openingHours",
    interfaceName: "OpeningHours",
    fields: [
      rowField({
        fields: [
          textField({
            name: "openLabel",
            admin: { width: "50%" }
          }),
          textField({
            name: "closedLabel",
            admin: { width: "50%" }
          })
        ]
      }),
      rowField({
        fields: [
          textField({
            name: "openNowLabel",
            admin: { width: "50%" }
          }),
          textField({
            name: "closedNowLabel",
            admin: { width: "50%" }
          })
        ]
      }),
      items,
      customOpeningHours
    ]
  });
});
var timeFields = () => {
  return [
    rowField({
      admin: {
        condition: (_, siblingData) => !siblingData.isClosed
      },
      fields: ["openingTime", "closingTime"].map(
        (name) => timeField({ name, label: capitalize(name) })
      )
    }),
    checkboxField({ name: "isClosed", label: "Closed whole day" }),
    textField({
      name: "closedLabel",
      admin: { condition: (_, siblingData) => siblingData.isClosed }
    })
  ];
};

// src/custom/socialMediaField.ts
var socialsOptions = {
  facebook: {
    label: "Facebook",
    value: "facebook"
  },
  instagram: {
    label: "Instagram",
    value: "instagram"
  },
  twitter: {
    label: "Twitter",
    value: "twitter"
  },
  linkedin: {
    label: "LinkedIn",
    value: "linkedin"
  },
  strava: {
    label: "Strava",
    value: "strava"
  }
};
var fields = (showOnly = []) => Object.keys(socialsOptions).map((key) => {
  const socialKey = key;
  const show = showOnly.length === 0 || showOnly.includes(socialKey);
  return urlField({
    name: socialKey,
    label: socialsOptions[socialKey].label,
    required: false,
    condition: (_, siblingData) => show,
    overrides: {
      admin: {
        width: "50%"
      }
    }
  });
});
var socialsField = createField2((props) => {
  return groupField({
    name: props.name || "socialMedia",
    label: props.label || "Social Media",
    fields: [
      rowField({
        fields: fields(props.showOnly)
      })
    ]
  });
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addressField,
  externalLinkField,
  formatSlugHook,
  internalLinkField,
  linkField,
  openingHoursField,
  slugField,
  socialsField,
  timeField,
  urlField,
  weekdaysMap
});
//# sourceMappingURL=custom.cjs.map