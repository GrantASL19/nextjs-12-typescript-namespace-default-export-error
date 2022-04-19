// This doesn’t work, but does pass type checking since it’s valid TypeScript

namespace appValues {
  const firstName = "Foo";
  const lastName = "Bar";
  export const fullName = `${firstName} ${lastName}`
}

// Note: surrounding appValues in brackets fixes the issue:
// export default (appValues);
export default appValues;
