const formatQuizRequest = (array, keys_to_keep) =>
  array.map((o) =>
    keys_to_keep.reduce((acc, curr) => {
      acc[curr] = o[curr];
      return acc;
    }, {})
  );

export default formatQuizRequest;
