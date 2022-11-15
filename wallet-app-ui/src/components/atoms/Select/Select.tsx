import { useCallback, useState } from 'react';
import { OptionWrapper, SelectButton, Wrapper, Option } from './Select.styles';
import { ReactComponent as SelectDownArrow } from '../../../assets/images/selectDownArrow.svg';
import { ReactComponent as SelectUpArrow } from '../../../assets/images/selectUpArrow.svg';

type TItem = {
  key: string;
  description: string;
};

export type TProps = {
  items: TItem[];
  name: string;
  isRounded?: boolean;
};

const Select = (props: TProps) => {
  const [selected, setSelected] = useState<TItem>({
    key: '',
    description: props.name,
  });

  const [isActive, setIsActive] = useState<boolean>(false);

  const optionAction = useCallback(
    (item: TItem) => {
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
              onClick={() => optionAction({ key: '', description: props.name })}
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

export default Select;
