interface Option {
  id: string; // Unique identifier
  label: string; // Display label
  value: any; // Enum value
}

export const enumToOptions = (enumObj: Record<string, any>): Option[] => {
  let idCounter = 0; // Counter for generating unique IDs

  return Object.keys(enumObj)
    .filter(key => isNaN(Number(key))) // Filter out numeric keys
    .map(key => {
      idCounter++; // Increment the counter for each option
      return {
        id: `id-${idCounter}`, // Create a unique ID
        label: key.replace(/([A-Z])/g, ' $1').trim(), // Format the label
        value: enumObj[key], // Get the enum value
      };
    });
};
