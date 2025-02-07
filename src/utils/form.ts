export const onInvalidSubmit = errors => {
  if (import.meta.env.DEV) {
    console.log('🚀 ~ Fields Errors', errors);
  }
};
