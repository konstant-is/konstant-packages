export interface FieldConfig {
  localized?: boolean;
  required?: boolean;
  [key: string]: any;
}

// Singleton instance of FieldConfig
const fieldConfigInstance: FieldConfig = {
  localized: false,
  required: false,
};

// export const createFieldConfig = (config: FieldConfig): FieldConfig => {
//   fieldConfigInstance = config;

//   console.log("===================================================");
//   console.log("CREATING FIELD CONFIG", fieldConfigInstance);

//   return fieldConfigInstance;
// };

export const getFieldConfig = (): FieldConfig => {
  if (!fieldConfigInstance) {
  }

  const config = fieldConfigInstance || {};

  return config;
};
