import CSS from "./LangSwitcher.module.css";
import { useId } from "react";

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();
  //   const [lang, setLang] = useState("uk");

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value}
        // value={lang}
        // onChange={(evt) => setLang(evt.target.value)}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
