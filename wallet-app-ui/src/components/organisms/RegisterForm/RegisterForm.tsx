import InputField from '../../molecules/InputField/InputField';
import AvatarPicker from '../../molecules/avatarPicker/AvatarPicker';
import { useCallback, useState } from 'react';
import messages from '../../../i18n/messages';

export type TSelectedIcon = 1 | 2 | 3 | 4;

type TState = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  icon: TSelectedIcon;
};

export const RegisterForm = () => {
  const [state, setState] = useState<TState>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    icon: 1,
  });

  const handleChangeIcon = useCallback(
    (icon: TSelectedIcon) => {
      setState({
        ...state,
        icon,
      });
    },
    [state.icon],
  );

  return (
    <form>
      <InputField
        label={{ ...messages.username }}
        variant={'light'}
        onChange={() => console.log()}
      />
      <AvatarPicker selected={state.icon} onClick={handleChangeIcon} />
    </form>
  );
};
