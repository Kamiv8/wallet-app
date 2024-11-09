import { IHookTestComponent } from './hookTestComponent.type';

export const HookTestComponent = <T,>({ callback }: IHookTestComponent<T>) => {
  const hook = callback();
  return <div>{JSON.stringify(hook)}</div>;
};
