const findof = (source = [], find, clone = true) => {
  if (source === undefined) {
    return new Error("please enter valid data .");
  }

  if (find === undefined) {
    return new Error("please enter index of find .");
  }

  if (source.constructor === Array) {
    return clone ? [...source][find] : source[find];
  }

  if (source.constructor === Object) {
    return findof(
      Object.keys(source).map(key => {
        return (json => ((json[key] = source[key]), json))({});
      }),
      find,
      clone
    );
  }
};

export default findof;
