export const sendDetails = (type, data) => {
  return {
    type: type,
    data
  };
};

export const goNext = type => {
  return {
    type
  };
};
export const goBack = type => {
  return {
    type
  };
};
