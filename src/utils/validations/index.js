export const hasLengthAtLeast = length => value => !hasValue(value) || value.length >= length;

export const hasValue = value => !!value;
