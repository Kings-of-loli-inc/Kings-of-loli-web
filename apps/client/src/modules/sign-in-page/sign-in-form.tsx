/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { FormInput } from '../../components/form-input/form-input';
import { SignInFormFields } from '../../constants/authorization/authorization';
import { useAuth } from '../../hooks/use-auth';
import { useHookForm } from '../../hooks/use-form';
import { AuthorizationFormProperties } from '../../interfaces/authorization-form/authorization-form-properties';
import styles from './sign-in-form.module.css';
import { signInFormSchema, SignInSchema } from './validation';

export const SignInForm: FC<AuthorizationFormProperties> = ({ onSubmit }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit: handleFormSubmit,
    reset,
  } = useHookForm<SignInSchema>({
    schema: signInFormSchema,
  });
  const { signIn } = useAuth();

  const handleSubmit: SubmitHandler<SignInSchema> = (data) => {
    signIn({ name: data.nickname, password: data.password });
    onSubmit();
    reset();
  };
  return (
    <>
      <div className={styles.signInFormBlock}>
        <form onSubmit={handleFormSubmit(handleSubmit)} className={styles.signInForm}>
          <FormInput
            register={register}
            name={SignInFormFields.NICKNAME_TYPE}
            className={[styles.signInFormInput, styles.nicknameInput]}
            placeholder={SignInFormFields.NICKNAME_PLACEHOLDER}
            type={SignInFormFields.NICKNAME_TYPE}
            error={errors[SignInFormFields.NICKNAME_TYPE]?.message}
          />
          <FormInput
            register={register}
            name={SignInFormFields.PASSWORD_TYPE}
            className={[styles.signInFormInput, styles.passwordInput]}
            placeholder={SignInFormFields.PASSWORD_PLACEHOLDER}
            type={SignInFormFields.PASSWORD_TYPE}
            error={errors[SignInFormFields.PASSWORD_TYPE]?.message}
          />
          <button type="submit" disabled={!isValid} className={styles.submit} />
        </form>
      </div>
    </>
  );
};
