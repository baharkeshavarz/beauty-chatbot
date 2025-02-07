import * as yup from 'yup';

export const GLOBAL_MIN_PASSWORD_LENGTH = 8;

export const faLocale: yup.LocaleObject = {
  string: {
    length({ length, path }) {
      return `${path} باید ${length} کاراکتر باشد.`;
    },
    max: ({ max }) => {
      return `حداکثر ${max} کاراکتر مجاز است.`;
    },
    min: ({ min }) => {
      return `حداقل ${min} کاراکتر وارد کنید.`;
    },
  },
  mixed: {
    required: `وارد کردن این فیلد اجباری است.`,
    notType: `وارد کردن این فیلد اجباری است.`,
  },
};

export const arLocale: yup.LocaleObject = {
  string: {
    length({ length, path }) {
      return `${path} يجب أن يكون ${length} مسارًا أطول.`;
    },
    max: ({ max }) => {
      return `الحد الأقصى لعدد الأحرف ${max} مسموح به.`;
    },
    min: ({ min }) => {
      return `أدخل ما لا يقل عن ${min} حرفًا.`;
    },
  },
  mixed: {
    required: `هذه هي النتيجة التي تحققها هذه الشركة.`,
    notType: `هذه هي النتيجة التي تحققها هذه الشركة.`,
  },
};

// yup.addMethod(yup.string, 'globalMinPasswordLength', function () {
//   return this.max(
//     GLOBAL_MIN_PASSWORD_LENGTH,
//     `حداکثر ${GLOBAL_MIN_PASSWORD_LENGTH} کاراکتر مجاز است.`,
//   );
// });
