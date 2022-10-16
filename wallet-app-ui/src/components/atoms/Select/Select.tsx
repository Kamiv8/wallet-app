import { useCallback, useState } from 'react';
import { OptionWrapper, SelectButton, Wrapper, Option } from './Select.styles';

type TItem = {
  key: string;
  description: string;
};

export type TProps = {
  items: TItem[];
  name: string;
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
    <Wrapper>
      <SelectButton isActive={isActive} onClick={() => setIsActive(!isActive)}>
        {selected.description}
      </SelectButton>
      {isActive && (
        <OptionWrapper>
          <Option
            onClick={() => optionAction({ key: '', description: props.name })}
          >
            Reset
          </Option>
          {props.items.map(({ key, description }) => (
            <Option
              onClick={() => optionAction({ key, description })}
              key={key}
            >
              {description}
            </Option>
          ))}
        </OptionWrapper>
      )}
    </Wrapper>
  );
};

export default Select;
