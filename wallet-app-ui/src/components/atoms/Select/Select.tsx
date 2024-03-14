import { ReactNode, useCallback, useEffect, useState } from 'react';
import { OptionWrapper, SelectButton, Wrapper } from './Select.styles';
import { ReactComponent as SelectDownArrow } from '../../../assets/images/selectDownArrow.svg';
import { ReactComponent as SelectUpArrow } from '../../../assets/images/selectUpArrow.svg';
import { FieldType } from '../../../hooks';
import { Option } from '../Option/Option';
import { FormattedMessage } from 'react-intl';
import messages from '../../../i18n/messages';
import { CustomString } from '../../../overrides/string.override';
import { TColor } from '../../../types/types';
import { SvgIcon } from '../SvgIcon/SvgIcon';

export type TSelectItem = {
  key: string | number;
  description: string;
};

export type TProps = {
  items: TSelectItem[];
  name?: string;
  isRounded?: boolean;
  onChange?: any;
  color: TColor;
  optionExtraDescription?: ReactNode;
};

export const Select = (props: TProps) => {
  const [selected, setSelected] = useState<TSelectItem>({
    key: CustomString.Empty,
    description: CustomString.Empty,
  });

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(selected.key, props.name, FieldType.Select);
    }
  }, [selected]);

  const optionAction = useCallback(
    (item: TSelectItem) => {
      setSelected(item);
      setIsActive(false);
    },
    [setSelected, setIsActive],
  );

  return (
    <>
      <Wrapper>
        <SelectButton
          isActive={isActive}
          isRounded={props.isRounded}
          onClick={() => setIsActive(!isActive)}
          color={props.color}
        >
          <span>{selected.description}</span>
          {props.isRounded && !isActive ? (
            <SvgIcon
              Icon={SelectDownArrow}
              color={props.color}
              withStroke={false}
            />
          ) : (
            props.isRounded && (
              <SvgIcon
                withStroke={false}
                Icon={SelectUpArrow}
                color={props.color}
              />
            )
          )}
        </SelectButton>
        {isActive && (
          <OptionWrapper isRounded={props.isRounded} color={props.color}>
            <Option
              color={props.color}
              onClick={() =>
                optionAction({
                  key: CustomString.Empty,
                  description: props.name || CustomString.Empty,
                })
              }
              isRounded={props.isRounded}
            >
              <FormattedMessage {...messages.selectResetOption} />
            </Option>
            {props.items.map(({ key, description }) => (
              <Option
                color={props.color}
                isRounded={props.isRounded}
                onClick={() => optionAction({ key, description })}
                key={key}
                extraDescription={props.optionExtraDescription}
              >
                {description}
              </Option>
            ))}
          </OptionWrapper>
        )}
      </Wrapper>
    </>
  );
};
