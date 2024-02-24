import { useCallback, useEffect, useState } from 'react';
import { OptionWrapper, SelectButton, Wrapper, Option } from './Select.styles';
import { ReactComponent as SelectDownArrow } from '../../../assets/images/selectDownArrow.svg';
import { ReactComponent as SelectUpArrow } from '../../../assets/images/selectUpArrow.svg';
import { FieldType } from '../../../hooks';

export type TSelectItem = {
  key: string | number;
  description: string;
};

export type TProps = {
  items: TSelectItem[];
  name?: string;
  isRounded?: boolean;
  onChange?: any;
};

export const Select = (props: TProps) => {
  const [selected, setSelected] = useState<TSelectItem>({
    key: '',
    description: '',
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
        >
          <span>{selected.description}</span>
          {props.isRounded && !isActive ? (
            <SelectDownArrow />
          ) : (
            props.isRounded && <SelectUpArrow />
          )}
        </SelectButton>
        {isActive && (
          <OptionWrapper isRounded={props.isRounded}>
            <Option
              onClick={() =>
                optionAction({ key: '', description: props.name || '' })
              }
              isRounded={props.isRounded}
            >
              Reset
            </Option>
            {props.items.map(({ key, description }) => (
              <Option
                isRounded={props.isRounded}
                onClick={() => optionAction({ key, description })}
                key={key}
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
