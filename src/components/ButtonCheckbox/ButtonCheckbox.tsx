import {
  UnstyledButton,
  Checkbox,
  Text,
} from "@mantine/core";
import { useUncontrolled } from "@mantine/hooks";
import classes from "./ButtonCheckbox.module.css";
import clsx from "clsx";

export interface ButtonCheckboxProps {
  title: string;
  description: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
}

export function ButtonCheckbox({
  title,
  description,
  checked,
  defaultChecked,
  onChange,
  className,
  ...others
}: ButtonCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<"button">, keyof ButtonCheckboxProps>) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange
  });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      data-checked={value || undefined}
      className={clsx(classes.button, className)}
    >
      <div className='flex-1'>
        <Text c='dimmed' size='xs' lh={1} mb={5}>
          {description}
        </Text>
        <Text fw={500} size='sm' lh={1}>
          {title}
        </Text>
      </div>

      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: "pointer" } }}
      />
    </UnstyledButton>
  );
}
