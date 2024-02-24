import { CardWrapper, Button, Typography } from '../../atoms';
import { InputField, SelectField } from '../../molecules';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { FormWrapper } from './CreateGroupForm.styles';
import { TSelectItem } from '../../atoms/Select/Select';
import { useForm } from '../../../hooks';
import { useEffect, useState } from 'react';
import { CurrencyDto } from '../../../models/dtos/currencyDto';
import { GroupApi } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../const/routesName';
import { parseDataToSelect } from '../../../helpers';

const maxGroupMember: TSelectItem[] = [
  {
    key: 2,
    description: '2',
  },
  {
    key: 3,
    description: '3',
  },
  {
    key: 5,
    description: '5',
  },
  {
    key: 10,
    description: '10',
  },
];

export const CreateGroupForm = () => {
  const [currencies, setCurrencies] = useState<CurrencyDto[]>([]);
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    maxMembers: 2,
    icon: 1 as 1 | 2 | 3 | 4,
    currencyId: '',
  };

  const { values, handleChange } = useForm<typeof initialValues>(initialValues);

  useEffect(() => {
    (async () => {
      // const data = await CurrencyApi.getCurrency();
      setCurrencies([]);
    })();
  }, []);

  const onSubmit = async () => {
    const data = await GroupApi.createGroup(values);
    localStorage.setItem('groupId', data.data?.response.groupId.toString());
    localStorage.setItem('userRole', data.data?.response.role);
  };

  return (
    <CardWrapper
      gradientColor
      close={() => navigate(RoutesName.CREATE_FIND_GROUP)}
    >
      <FormWrapper>
        <InputField
          label={{ ...messages.createGroupFormName }}
          variant={'dark'}
          name={'name'}
          onChange={(e) => handleChange(e, 'name')}
        />

        <Typography size={'m'} weight={700}>
          <FormattedMessage {...messages.createGroupFormGroupIcon} />
        </Typography>

        {/*<AvatarPicker*/}
        {/*  selected={values.icon}*/}
        {/*  onClick={handleChange}*/}
        {/*  variant={'group'}*/}
        {/*/>*/}

        <SelectField
          selectItems={maxGroupMember}
          label={{ ...messages.createGroupFormMaxMembers }}
          name={'maxMember'}
          onChange={handleChange}
        />
        <SelectField
          selectItems={parseDataToSelect(currencies)}
          label={{ ...messages.createGroupFormDefaultCurrencies }}
          name={'currencyId'}
          onChange={handleChange}
        />
        <Button color={'darkBlue'} onClick={onSubmit}>
          <FormattedMessage {...messages.buttonCreate} />
        </Button>
      </FormWrapper>
    </CardWrapper>
  );
};
