import { Typography } from '../../atoms';
import { FormattedMessage } from 'react-intl';
import { TFormattedMessage } from '../../../types/types';
import { FC } from 'react';
import { useRwd } from '../../../hooks';
import { HeadingEnum } from '../../../types/enums';
import { TFontSize } from '../../../styles/theme';

type Props = {
  text: TFormattedMessage;
  type?: HeadingEnum;
};

export const Heading: FC<Props> = ({ text, type = HeadingEnum.APP }) => {
  const { getRwdValue } = useRwd();

  const typePropsMap = {
    [HeadingEnum.AUTH]: {
      size: getRwdValue('xxl', 'xxxl') as keyof TFontSize,
      uppercase: false,
    },
    [HeadingEnum.APP]: {
      size: getRwdValue('l', 'xxl', 'xxxl') as keyof TFontSize,
      uppercase: true,
    },
    [HeadingEnum.SUB_APP]: {
      size: getRwdValue('l', 'l', 'l') as keyof TFontSize,
      uppercase: true,
    },
  };

  const { size, uppercase } =
    typePropsMap[type] || typePropsMap[HeadingEnum.APP];

  return (
    <Typography
      size={size}
      uppercase={uppercase}
      weight={700}
      color={'lightBlue'}
      letterSpacing={1.2}
    >
      <FormattedMessage {...text} />
    </Typography>
  );
};
