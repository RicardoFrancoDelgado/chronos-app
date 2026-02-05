import styles from "./styles.module.css";

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...props
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id} className="">
        {labelText}
      </label>
      <input type={type} id={id} {...props} className={styles.input} />
    </>
  );
}
