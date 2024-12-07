import * as payload from 'payload';
import { Field, FieldHook, TextField, CheckboxField } from 'payload';
import { C as CreateFieldProps } from './createField-CvxlUHg2.cjs';

declare const fields: {
    addressLine1: string;
    addressLine2: string;
    state: string;
    city: string;
    postalCode: string;
    location: string;
};
type FieldKeys = keyof typeof fields;
declare const addressField: (props?: CreateFieldProps<{
    hideFields?: FieldKeys[];
}>) => payload.Field;

type LinkType = (options?: {
    disableLabel?: boolean;
    overrides?: Record<string, unknown>;
}) => Field;
declare const linkField: LinkType;
declare const externalLinkField: (props?: {
    overrides?: Record<string, unknown>;
    fields?: Field[];
    required?: boolean;
    label?: string;
    name?: string;
    condition?: (data: any, siblingData: any) => boolean;
    hideGutter?: boolean;
    hidden?: boolean;
    description?: string;
    localized?: boolean;
}) => Field;
declare const internalLinkField: (props?: {
    overrides?: Record<string, unknown>;
    fields?: Field[];
    required?: boolean;
    label?: string;
    name?: string;
    condition?: (data: any, siblingData: any) => boolean;
    hideGutter?: boolean;
    hidden?: boolean;
    description?: string;
    localized?: boolean;
}) => Field;

declare const formatSlugHook: (fallback: string) => FieldHook;
type Overrides = {
    slugOverrides?: Partial<TextField>;
    checkboxOverrides?: Partial<CheckboxField>;
};
type Slug = (fieldToUse?: string, overrides?: Overrides) => [TextField, CheckboxField];
declare const slugField: Slug;

declare const timeField: (props?: {
    overrides?: Record<string, unknown>;
    fields?: payload.Field[];
    required?: boolean;
    label?: string;
    name?: string;
    condition?: (data: any, siblingData: any) => boolean;
    hideGutter?: boolean;
    hidden?: boolean;
    description?: string;
    localized?: boolean;
}) => payload.Field;

declare const urlField: (props?: {
    overrides?: Record<string, unknown>;
    fields?: payload.Field[];
    required?: boolean;
    label?: string;
    name?: string;
    condition?: (data: any, siblingData: any) => boolean;
    hideGutter?: boolean;
    hidden?: boolean;
    description?: string;
    localized?: boolean;
}) => payload.Field;

declare const weekdaysMap: Record<string, string>;
declare const openingHoursField: (props?: {
    overrides?: Record<string, unknown>;
    fields?: Field[];
    required?: boolean;
    label?: string;
    name?: string;
    condition?: (data: any, siblingData: any) => boolean;
    hideGutter?: boolean;
    hidden?: boolean;
    description?: string;
    localized?: boolean;
}) => Field;

type SocialsTypes = "facebook" | "instagram" | "twitter" | "linkedin" | "strava";
declare const socialsField: (props?: CreateFieldProps<{
    showOnly: SocialsTypes[];
}>) => payload.Field;

export { addressField, externalLinkField, formatSlugHook, internalLinkField, linkField, openingHoursField, slugField, socialsField, timeField, urlField, weekdaysMap };
