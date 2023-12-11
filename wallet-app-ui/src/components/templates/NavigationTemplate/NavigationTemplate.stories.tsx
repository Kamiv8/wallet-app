import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavigationTemplate } from './NavigationTemplate';
import { Typography } from '../../atoms';
import { ReactComponent as CloseIcon } from '../../../assets/images/close.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/images/logout.svg';
import { PersonNavigation } from '../../organisms';
import { withRouter } from 'storybook-addon-react-router-v6';
import { UserDataHeader } from '../../molecules';

export default {
  title: 'Templates/Navigation',
  component: NavigationTemplate,
  decorators: [withRouter],
} as ComponentMeta<typeof NavigationTemplate>;

const Template: ComponentStory<typeof NavigationTemplate> = (args) => (
  <NavigationTemplate {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: (
    <Typography size={'l'} weight={700} color={'darkBlue'}>
      NAVIGATION
    </Typography>
  ),
  closeIcon: <CloseIcon />,
  userData: (
    <UserDataHeader
      avatarClick={() => console.log('xd')}
      avatarNumber={2}
      fullName={
        <Typography size={'l'} weight={700}>
          Lorem ipsum
        </Typography>
      }
    />
  ),
  personNavigation: <PersonNavigation />,
  logoutIcon: <LogoutIcon />,
};
