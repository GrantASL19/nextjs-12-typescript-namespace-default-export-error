// This doesn’t work, but does pass type checking since it’s valid TypeScript

namespace appValues {
  const firstName = "Foo";
  const lastName = "Bar";
  export const fullName = `${firstName} ${lastName}`
}

export default appValues;

// This works despite being roughly equivalent to the above namespace code.

// const firstName = "Foo";

// const lastName = "Bar";

// const appValues = {
//   fullName: `${firstName} ${lastName}`
// }

// export default appValues;
