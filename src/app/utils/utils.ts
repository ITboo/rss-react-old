const removeSearchParam = (
  searchParams: URLSearchParams,
  paramName: string,
): URLSearchParams => {
  const updatedKeyValueParamPairs = [
    ...Array.from(searchParams.entries()).filter(
      (keyValuePair: string[]) => keyValuePair[0] !== paramName,
    ),
  ];
  return new URLSearchParams(updatedKeyValueParamPairs);
};

const upsertSearchParam = (
  searchParams: URLSearchParams,
  paramName: string,
  paramValue: string,
): URLSearchParams => {
  const updatedSearchParams: URLSearchParams = removeSearchParam(
    searchParams,
    paramName,
  );
  const updatedKeyValueParamPairs = [
    ...Array.from(updatedSearchParams.entries()),
    [paramName, paramValue],
  ];
  return new URLSearchParams(updatedKeyValueParamPairs);
};

export default upsertSearchParam;
