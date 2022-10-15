import { useState } from 'react';
import { SelectButton } from './Select.styles';

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
  return (
    <>
      <SelectButton>{selected.description}</SelectButton>
      <ul>
        {props.items.map(({ key, description }) => (
          <li onClick={() => setSelected({ key, description })} key={key}>
            {description}
          </li>
        ))}
      </ul>
      <p>ds</p>
    </>
  );
};

export default Select;
