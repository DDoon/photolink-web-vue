export const passwordRules = [
  { required: true, message: "비밀번호를 입력해주세요!" },
  {
    pattern: /^.{8,16}$/,
    message: "비밀번호의 길이는 8자 이상 16자 이하여야 합니다.",
  },
];
