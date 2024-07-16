export const getOptionToReplace = (radioValue, textOptions) => {
  switch (radioValue) {
    case "first":
      return textOptions[0];

    case "second":
      return textOptions[1];

    case "random":
      const index = Math.floor(Math.random() * textOptions.length - 2) + 2;
      return textOptions[index];

    default:
      throw new Error("Unhandled option");
  }
}

export const getOptionToAppend = (radioValue, textOptions, textBlocks) => {
  switch (radioValue) {
    case "first":
      return textBlocks.includes(textOptions[0]) ? null : textOptions[0];

    case "second":
      return textBlocks.includes(textOptions[1]) ? null : textOptions[1];

    case "random":
      const notUsedOptions = textOptions.filter(textOption => !textBlocks.includes(textOption));

      if (notUsedOptions.length <= 0) return null;

      const index = Math.floor(Math.random() * notUsedOptions.length);
      return notUsedOptions[index];

    default:
      throw new Error("Unhandled option");
  }
}