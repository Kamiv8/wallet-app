import { fireEvent, render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';
import { renderWithTheme } from '../../../testUtils/renderWithTheme';

describe('Avatar component', () => {
  const handleClick = jest.fn();
  test('renders correct avatar when isGroup is false', () => {
    const Avatar1 = 'Avatar-1.svg';

    render(
      <Avatar
        image={1}
        isGroup={false}
        onClick={handleClick}
        selected={false}
      />,
    );

    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveStyle(`background-image: url(${Avatar1})`);
  });

  test('renders correct avatar when isGroup is true', () => {
    const Avatar1 = 'AvatarG-1.svg';

    render(
      <Avatar
        image={1}
        isGroup={true}
        onClick={handleClick}
        selected={false}
      />,
    );

    const avatar = screen.getByTestId('avatar');
    expect(avatar).toHaveStyle(`background-image: url(${Avatar1})`);
  });

  test('should render border in avatar when selected props is true', () => {
    renderWithTheme(<Avatar image={1} selected onClick={handleClick} />);

    const avatar = screen.getByTestId('avatar');

    expect(avatar).toHaveStyle(`border: 3px solid rgba(245,168,34,1)`);
  });

  test('should not throw an error when clicked without onClick prop', () => {
    render(<Avatar image={1} />);

    const avatar = screen.getByTestId('avatar');

    expect(() => fireEvent.click(avatar)).not.toThrow();
  });

  test('should render first avatar when number is grater than 4', () => {
    render(
      <Avatar
        image={5}
        isGroup={false}
        onClick={handleClick}
        selected={false}
      />,
    );

    const avatar = screen.getByTestId('avatar');

    expect(avatar).toHaveStyle(`background-image: url('Avatar-1.svg')`);
  });
});
