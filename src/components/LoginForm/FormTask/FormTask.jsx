import css from "./FormTask.module.css";

export default function FormTask({ onAdd }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAdd({
      id: Date.now(),
      text: evt.target.elements.text.value,
    });
    evt.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.field} type="text" name="text" />
      <button type="submit">Add task</button>
    </form>
  );
}
